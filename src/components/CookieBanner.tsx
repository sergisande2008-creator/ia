"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <Card className="max-w-5xl mx-auto bg-[oklch(0.15_0.03_240)] backdrop-blur-xl border-[oklch(0.25_0.05_240)] shadow-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-bold">Uso de Cookies</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Al hacer clic en "Aceptar", aceptas el uso de todas las cookies. Puedes consultar más información en nuestra{" "}
                    <a 
                      href="/cookies" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Cookies
                    </a>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-[oklch(0.30_0.05_240)] hover:bg-[oklch(0.20_0.03_240)]"
                  >
                    Rechazar
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                  >
                    Aceptar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}