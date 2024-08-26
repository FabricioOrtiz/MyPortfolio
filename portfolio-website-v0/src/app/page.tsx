'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#EFE7DC] text-[#091434] min-h-screen overflow-x-hidden">
      <canvas id="main-canvas" className="absolute top-0 left-0 w-full h-full" />

      <motion.header 
        className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg 
          className="w-14 h-14" 
          viewBox="0 0 56 61" 
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.path 
            d="M3 14 24 2C28 0 28 0 32 2L53 14C56 16 56 17 56 19L56 43C56 46 55 47 51 49L32 59C28 61 28 61 24 59L5 49C1 47 0 46 0 43L0 19C0 17 0 16 3 14M28 4 5 17 28 28 51 17 28 4M53 20 30 31 30 56 53 44 53 20M40 42 33 35C33 35 32 34 33 33 34 32 35 33 36 34L36 34 43 41C44 42 44 42 43 43L35 51C35 51 34 52 33 51 32 50 33 49 33 49L40 42M16 42 23 35C23 35 24 34 23 33 22 32 21 33 20 34L13 41C12 42 12 42 13 43L21 51C21 51 22 52 23 51 24 50 23 49 23 49L16 42" 
            fill="#091434"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.svg>
        <div className="flex space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" aria-label="Sound" className="text-[#091434]">
              <svg viewBox="0 0 18 9" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M0 4C0 4 0 3 1 3L2 3L3 2C5 0 5 1 5 2L5 7C5 8 5 9 3 7L2 6L1 6C0 6 0 5 0 5L0 4" fill="currentColor" />
              </svg>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" aria-label="Menu" className="text-[#091434]" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="flex flex-col space-y-1">
                <div className="w-5 h-0.5 bg-current" />
                <div className="w-5 h-0.5 bg-current" />
                <div className="w-5 h-0.5 bg-current" />
              </div>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-y-0 right-0 w-64 bg-[#FF923E] z-20 p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                {['Home', 'About', 'Work', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button variant="ghost" className="text-white text-xl mb-4 w-full text-left" onClick={() => setMenuOpen(false)}>
                      {item}
                    </Button>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex space-x-4 mb-4">
                  <Twitter className="text-white" />
                  <Github className="text-white" />
                  <Linkedin className="text-white" />
                  <Mail className="text-white" />
                </div>
                <div className="text-white text-sm">
                  Music produced by
                  <a href="https://soundcloud.com/hmsurf" target="_blank" rel="noopener noreferrer" className="underline ml-1">HM Surf</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-0">
        <motion.section 
          id="landing-page" 
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-6xl font-bold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello World, my<br />name is Fabricio.
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I loved playing with Legos as a kid and now I love working to create amazing things.
              A man said, if you're having fun at work, it mean you're not working.!!
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 10 }}
            >
              <Button className="bg-[#FF923E] hover:bg-[#FF923E]/90 text-white px-8 py-3 text-lg">
                Get in touch
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="about-section" 
          className="py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 300 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">SKILLS</h2>
            <div className="space-y-4">
              {['WebGL', 'ReactJS', 'JavaScript', 'HTML + CSS', '3D Modelling'].map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-24">{skill}</span>
                  <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-[#FF923E] h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(5-index)*20}%` }}
                      transition={{ delay: 0.5, duration: 1, type: "spring" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="work-section" 
          className="py-20 bg-[#091434] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 800 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Some things I've worked on</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Join', 'Pokedex', 'Sharkie', 'Portfolio 2022', 'Jelly Battle'].map((project, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white text-[#091434] rounded-lg overflow-hidden"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project}</h3>
                    <p className="text-sm mb-4">Project description goes here</p>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">Code</Button>
                      <Button className="bg-[#FF923E] hover:bg-[#FF923E]/90 text-white" size="sm">Live View</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="contact-section" 
          className="py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 1600 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-bold mb-8">Contact me</h2>
            <form>
              <motion.div 
                className="mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block mb-2">Name :</label>
                <Input id="name" placeholder="Your name" className="border-[#091434]" />
              </motion.div>
              <motion.div 
                className="mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block mb-2">Email :</label>
                <Input id="email" type="email" placeholder="Your email" className="border-[#091434]" />
              </motion.div>
              <motion.div 
                className="mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block mb-2">Message :</label>
                <Textarea id="message" placeholder="Your message" className="border-[#091434]" />
              </motion.div>
              <motion.div 
                className="flex justify-between items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex space-x-2">
                  {[Twitter, Github, Linkedin, Mail].map((Icon, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="icon" aria-label={Icon.name}>
                        <Icon className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
                <Button className="bg-[#FF923E] hover:bg-[#FF923E]/90 text-white">Submit</Button>
              </motion.div>
            </form>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        className="bg-[#091434] text-white py-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© Fabricio Ortiz Alfaro</p>
        <div className="mt-2">
          <a href="#" className="hover:underline mr-4">Legal Notice</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </motion.footer>
    </div>
  )
}