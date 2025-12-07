"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import {
  Phone,
  Calendar,
  Mail,
  Instagram,
  MessageSquare,
  FileText,
  Search,
  Calculator,
} from "lucide-react"
import { motion } from "framer-motion"

export default function ServiciosPage() {
  const services = [
    {
      icon: Calculator,
      title: "Chatbot generador de presupuestos automatizado.",
    },
    {
      icon: Calendar,
      title: "Chatbots para agendar y calificar citas de forma automática.",
    },
    {
      icon: FileText,
      title: "Chatbots que generan facturas de manera automática.",
    },
    {
      icon: Mail,
      title: "Flujo automatizado para organizar y clasificar facturas.",
    },
    {
      icon: Search,
      title: "Automatización inteligente para ordenar y clasificar automáticamente los correos entrantes en Gmail.",
    },
    {
      icon: Instagram,
      title: "Automatización de mensajes directos en Instagram.",
    },
    {
      icon: Phone,
      title: "Agentes telefónicos automatizados para agendar y calificar prospectos.",
    },
    {
      icon: MessageSquare,
      title: "Chatbots personalizados para tu sitio web.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Nuestro Portafolio de Servicios Incluye:
            </h1>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-[oklch(0.28_0.08_260)] to-[oklch(0.22_0.06_260)] border-[oklch(0.35_0.10_260)] hover:from-[oklch(0.30_0.09_260)] hover:to-[oklch(0.24_0.07_260)] transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug pt-2">
                      {service.title}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-card/50 backdrop-blur-sm border-primary/20 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Automatizar tus Ventas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una consultoría estratégica sin compromiso y descubre cómo podemos ayudarte a cualificar más leads y agendar más citas.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 rounded-lg">
                Contactar
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}