"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ArrowDownCircle } from "lucide-react"
import IntroNote from "@/components/intro-note"
import ImageGallery from "@/components/image-gallery"
import Header from "@/components/header"
import ContactSection from "@/components/contact-section" // Import the new contact section

export default function Home() {
  const [showGallery, setShowGallery] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // After intro animation completes
    const timer = setTimeout(() => {
      setIntroComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowGallery(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative h-[400vh] bg-black text-white overflow-hidden">
      {" "}
      {/* Increased height for contact section */}
      {/* Intro Section */}
      <motion.section className="h-screen flex items-center justify-center relative" style={{ opacity, scale }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="/placeholderv2.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-20 text-center">
          <IntroNote />
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ArrowDownCircle className="w-10 h-10 text-white/80" />
          <p className="text-sm mt-2 text-white/80">Scroll Down</p>
        </motion.div>
      </motion.section>
      {/* Header appears after scrolling */}
      <AnimatePresence>{scrollY.get() > 100 && <Header />}</AnimatePresence>
      {/* Gallery Section */}
      <section ref={ref} className="min-h-[150vh] relative z-10 pt-12">
        <div className="container mx-auto px-4">
          <ImageGallery />
        </div>
      </section>
      {/* Contact Section */}
      <section className="min-h-[100vh] flex items-center justify-center relative z-10 py-24">
        <ContactSection />
      </section>
    </main>
  )
}
