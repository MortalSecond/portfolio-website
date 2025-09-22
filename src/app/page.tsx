"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import SidebarSection from '@/components/SidebarSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import ExperienceSection from "@/components/ExperienceSection"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [language, setLanguage] = useState<"EN" | "ES">("EN")


  return (
    <main className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <SidebarSection language={language}/>

      {/* Main content */}
      <div className="flex-1 p-12">
        {/* Navbar */}
        <nav className="flex justify-end space-x-6 mb-10 text-gray-300">
          <button onClick={() => setActiveSection("about")} className={`hover:text-white transition ${
          activeSection === "about" ? "text-white border-b-2 border-blue-500" : ""}`}>
            {language === "EN" ? "About" : "Acerca"}
          </button>
          <button onClick={() => setActiveSection("experience")} className={`hover:text-white transition ${
          activeSection === "experience" ? "text-white border-b-2 border-blue-500" : ""}`}>
            {language === "EN" ? "Experience" : "Experiencia"}
          </button>
          <button onClick={() => setActiveSection("projects")} className={`hover:text-white transition ${
          activeSection === "projects" ? "text-white border-b-2 border-blue-500" : ""}`}>
            {language === "EN" ? "Projects" : "Proyectos"}
          </button>
          <button onClick={() => setActiveSection("contact")} className={`hover:text-white transition ${
          activeSection === "contact" ? "text-white border-b-2 border-blue-500" : ""}`}>
            {language === "EN" ? "Contact" : "Contacto"}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
            className="ml-4 px-3 py-1 border border-gray-500 rounded hover:bg-gray-700 transition"
          >
            {language}
          </button>
        </nav>

        <AnimatePresence mode="wait">
          {/* Contact */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ContactSection language={language}/>
            </motion.div>
            )}

          {/* About */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <AboutSection language={language}/>
            </motion.div>
          )}

          {/* Experience */}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ExperienceSection language={language}/>
            </motion.div>
          )}

          {/* Projects */}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectsSection language={language}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}