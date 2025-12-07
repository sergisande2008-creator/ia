"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  Loader2,
} from "lucide-react"
import { motion } from "framer-motion"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    presupuesto: "",
    mensaje: "",
    aceptaPolitica: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.aceptaPolitica) {
      setError("Debes aceptar la Política de Privacidad para continuar")
      return
    }
    
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          presupuesto: "",
          mensaje: "",
          aceptaPolitica: false,
        })
      }, 60000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      presupuesto: value,
    })
  }

  const handlePhoneChange = (phone: string) => {
    setFormData({
      ...formData,
      telefono: phone,
    })
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      aceptaPolitica: checked,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sande@nevadaautomations.com",
      link: "mailto:sande@nevadaautomations.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 678 116 047",
      link: "tel:+34678116047",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Granollers, Barcelona",
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[50vh] flex items-center">
        {/* Background streaks */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[150%] w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                style={{
                  left: `${i * 20}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ¿Cómo puedo ayudarte?
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Agenda una consultoría estratégica gratuita y descubre cómo Nevada Automations puede revolucionar tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10 bg-[oklch(0.15_0.03_240)] backdrop-blur-sm border-[oklch(0.25_0.05_240)] rounded-2xl relative overflow-hidden">
                {/* LED lights animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top edge */}
                  <motion.div
                    className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50"
                    style={{ width: '120px' }}
                    animate={{
                      left: ['-120px', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Right edge */}
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50"
                    style={{ height: '120px' }}
                    animate={{
                      top: ['-120px', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.75,
                    }}
                  />
                  
                  {/* Bottom edge */}
                  <motion.div
                    className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50"
                    style={{ width: '120px' }}
                    animate={{
                      right: ['-120px', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1.5,
                    }}
                  />
                  
                  {/* Left edge */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50"
                    style={{ height: '120px' }}
                    animate={{
                      bottom: ['-120px', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2.25,
                    }}
                  />
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Te contactaremos en menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive">
                        {error}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-sm text-muted-foreground">
                        Nombre y Apellidos <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Nombre y Apellidos"
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-12 text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-sm text-muted-foreground">
                        Empresa <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-12 text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-muted-foreground">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-12 text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-sm text-muted-foreground">
                        Teléfono con WhatsApp <span className="text-red-500">*</span>
                      </Label>
                      <PhoneInput
                        defaultCountry="es"
                        value={formData.telefono}
                        onChange={handlePhoneChange}
                        disabled={isLoading}
                        inputClassName="!bg-[oklch(0.12_0.03_240)] !border-[oklch(0.20_0.05_240)] !h-12 !text-base !placeholder:text-muted-foreground/50 !text-foreground"
                        countrySelectorStyleProps={{
                          buttonClassName: "!bg-[oklch(0.12_0.03_240)] !border-[oklch(0.20_0.05_240)] !h-12",
                          dropdownStyleProps: {
                            className: "!bg-[oklch(0.15_0.03_240)] !border-[oklch(0.25_0.05_240)]",
                            listItemClassName: "!text-foreground hover:!bg-[oklch(0.20_0.03_240)]"
                          }
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="presupuesto" className="text-sm text-muted-foreground">
                        Elige tu rango de inversión
                      </Label>
                      <Select onValueChange={handleSelectChange} value={formData.presupuesto} disabled={isLoading}>
                        <SelectTrigger className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-12 text-base">
                          <SelectValue placeholder="Selecciona tu rango de inversión..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">Starter (1.000 - 3.000 USD)</SelectItem>
                          <SelectItem value="growth">Growth (3.000 - 5.000 USD)</SelectItem>
                          <SelectItem value="premium">Premium (5.000 - 10.000 USD)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (10.000+ USD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje" className="text-sm text-muted-foreground">
                        Cuéntame más sobre tu proyecto <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Comparte algunos detalles sobre lo que necesitas. Te contactaremos para agendar una cita y discutir tu proyecto en profundidad."
                        rows={5}
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] text-base placeholder:text-muted-foreground/50 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                      <Checkbox 
                        id="politica" 
                        checked={formData.aceptaPolitica}
                        onCheckedChange={handleCheckboxChange}
                        disabled={isLoading}
                        className="mt-1"
                      />
                      <Label 
                        htmlFor="politica" 
                        className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                      >
                        He leído y acepto la{" "}
                        <a 
                          href="/privacidad" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Política de Privacidad
                        </a>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading || !formData.aceptaPolitica}
                      className="w-full text-base font-semibold h-12 bg-[oklch(0.60_0.25_230)] hover:bg-[oklch(0.55_0.25_230)] rounded-lg shadow-lg shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          ENVIANDO...
                        </>
                      ) : (
                        "ENVIAR SOLICITUD"
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1 text-sm uppercase tracking-wider">{item.title}</div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{item.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-bold mb-4 uppercase text-sm tracking-wider">¿Qué Esperar?</h3>
                <ul className="space-y-4">
                  {[
                    "Respuesta en menos de 24 horas",
                    "Te contactaremos para agendar una cita",
                    "Análisis inicial sin costo",
                    "Propuesta a medida",
                    "Sin compromiso",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}