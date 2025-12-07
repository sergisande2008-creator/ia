"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-2-1764951675392.jpeg"
              alt="Nevada Automations" 
              width={283}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/contacto"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contacto
            </Link>
            <Link
              href="/privacidad"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Política de Privacidad
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/contacto"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="/privacidad"
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Política de Privacidad
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}