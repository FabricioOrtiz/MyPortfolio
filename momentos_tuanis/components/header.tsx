"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif tracking-wider">
          Momentos tuanis
        </Link>

        <nav className="hidden md:flex space-x-8">
          {["Portfolio", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Portfolio", "About", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-wider hover:text-amber-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
