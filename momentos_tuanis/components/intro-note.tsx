"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroNote() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateZ: -2 }}
      animate={isVisible ? { opacity: 1, y: 0, rotateZ: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      }}
      className="bg-white/90 text-black p-8 md:p-12 rounded-sm shadow-xl max-w-md mx-auto relative"
      style={{
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        transform: "rotate(-2deg)",
      }}
    >
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-400 rounded-full" />
      <motion.h1
        className="text-3xl md:text-4xl font-serif mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Hacemos tus ideas realidad
      </motion.h1>
      <motion.div
        className="w-16 h-1 bg-amber-400 mb-4"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
      <motion.p
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Capturando momentos que cuentan historias y despiertan emociones.
      </motion.p>
    </motion.div>
  )
}
