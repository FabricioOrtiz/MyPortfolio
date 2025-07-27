"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-4 py-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight text-white" variants={itemVariants}>
        Let&apos;s Connect.
      </motion.h2>
      <motion.p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
        Ready to bring your vision to life? Reach out to discuss your project, collaborate, or just say hello.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center" variants={itemVariants}>
          <Mail className="w-10 h-10 text-amber-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <Link href="mailto:fabricio.ortiz.alfaro@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
            fabricio.ortiz.alfaro@gmail.com
          </Link>
        </motion.div>

        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center" variants={itemVariants}>
          <Phone className="w-10 h-10 text-amber-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Télefono</h3>
          <Link href="tel:+1234567890" className="text-gray-300 hover:text-amber-400 transition-colors">
            +506 8948-58-03
          </Link>
        </motion.div>

        <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center" variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-4">Instagram</h3>
          <div className="flex space-x-6">
            <Link
              href="https://www.instagram.com/momentostuanis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fabricio-ortiz-alfaro-9b3985105/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
