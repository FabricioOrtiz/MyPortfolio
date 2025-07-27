"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

// Define image data with collage positioning
const images = [
  {
    src: "/Aves/ZopiloteRey.png?height=400&width=600&text=Forest+Landscape",
    alt: "Forest landscape",
    width: 300,
    height: 200,
    position: { top: "10%", left: "5%", rotate: -5, zIndex: 1 },
  },
  {
    src: "/Aves/BB_MINI_ESTACA.png?height=400&width=600&text=Forest+Landscape",
    alt: "Urban night scene",
    width: 250,
    height: 350,
    position: { top: "5%", left: "25%", rotate: 3, zIndex: 2 },
  },
  {
    src: "/Aves/quetzal.png?height=400&width=600&text=Forest+Landscape",
    alt: "Architecture",
    width: 250,
    height: 300,
    position: { top: "8%", right: "25%", rotate: 4, zIndex: 1 },
  },
  {
    src: "/Aves/picoiris.png?height=400&width=600&text=Forest+Landscape",
    alt: "Portrait",
    width: 200,
    height: 300,
    position: { top: "25%", left: "15%", rotate: 8, zIndex: 4 },
  },
  {
    src: "/bodas/anillo.jpg?height=400&width=600&text=Street+Photo",
    alt: "Street photography",
    width: 320,
    height: 220,
    position: { top: "30%", right: "10%", rotate: -3, zIndex: 5 },
  },
  {
    src: "/bodas/juntos01.jpg?height=350&width=500&text=Nature+Closeup",
    alt: "Nature close-up",
    width: 260,
    height: 180,
    position: { top: "45%", left: "-3%", rotate: -9, zIndex: 3 },
  },
  {
    src: "/bodas/juntos02.jpg?height=500&width=700&text=Sunset+Landscape",
    alt: "Sunset landscape",
    width: 350,
    height: 250,
    position: { top: "36%", left: "35%", rotate: -1, zIndex: 5 },
  },
  {
    src: "/15 anos/mariposa.jpg?height=500&width=700&text=Sunset+Landscape",
    alt: "Abstract",
    width: 180,
    height: 240,
    position: { top: "65%", right: "25%", rotate: 6, zIndex: 6 },
  },
  {
    src: "/15 anos/fiesta.jpg?height=500&width=500&text=Wildlife",
    alt: "Wildlife",
    width: 280,
    height: 280,
    position: { top: "70%", left: "10%", rotate: -4, zIndex: 1 },
  },
  {
    src: "/15 anos/sapatilla.jpg?height=300&width=400&text=City+Life",
    alt: "City life",
    width: 220,
    height: 165,
    position: { top: "65%", right: "20%", rotate: 2, zIndex: 3 },
  },
  {
    src: "/15 anos/sapatilla.jpg??height=450&width=350&text=Mountain+View",
    alt: "Mountain view",
    width: 300,
    height: 270,
    position: { top: "75%", left: "35%", rotate: -6, zIndex: 2 },
  },
  {
    src: "/placeholder.svg?height=350&width=600&text=Ocean+Waves",
    alt: "Ocean waves",
    width: 300,
    height: 175,
    position: { top: "75%", right: "5%", rotate: 1, zIndex: 4 },
  },
]

export default function ImageGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [loadedImages, setLoadedImages] = useState<number[]>([])

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Handle mouse movement for parallax and expansion effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Sequentially load images when in view
  useEffect(() => {
    if (inView) {
      const loadSequentially = async () => {
        for (let i = 0; i < images.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 150))
          setLoadedImages((prev) => [...prev, i])
        }
      }

      loadSequentially()
    }
  }, [inView])

  return (
    <div ref={ref} className="relative">
      {/* Typography overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={loadedImages.length > 6 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-white mix-blend-difference">
            MOMENTOS 
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-amber-400 mt-2 mix-blend-difference">
            UNICOS.
          </h3>
        </motion.div>
      </div>

      {/* Collage of images */}
      <div ref={galleryRef} className="relative h-screen w-full overflow-hidden">
        {images.map((image, index) => {
          // Calculate movement based on mouse position and image position
          const moveIntensity = 0.02
          const expandIntensity = 0.3

          return (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                top: image.position.top,
                left: image.position.left,
                right: image.position.right,
                zIndex: image.position.zIndex,
              }}
              initial={{
                opacity: 0,
                y: 50,
                rotate: 0,
                scale: 0.8,
              }}
              animate={
                loadedImages.includes(index)
                  ? {
                      opacity: 1,
                      y: 0,
                      rotate: image.position.rotate,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <motion.div
                className="relative overflow-hidden rounded-sm shadow-2xl"
                style={{
                  width: image.width,
                  height: image.height,
                }}
                animate={{
                  x: (mousePosition.x - window.innerWidth / 2) * moveIntensity * ((index % 3) - 1),
                  y: (mousePosition.y - window.innerHeight / 2) * moveIntensity * ((index % 2) - 0.5),
                  scale: 1 + Math.sin(Date.now() * 0.001 + index) * 0.02,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: image.position.rotate + (index % 2 === 0 ? 2 : -2),
                  zIndex: 50,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-full object-cover"
                  style={{
                    filter: `brightness(${0.9 + Math.sin(Date.now() * 0.002 + index) * 0.1})`,
                  }}
                />

                {/* Subtle overlay for depth */}
                <div
                  className="absolute inset-0 bg-black/10 mix-blend-multiply"
                  style={{
                    opacity: 0.1 + image.position.zIndex / 10,
                  }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
