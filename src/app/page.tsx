"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
  Bot,
  Phone,
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  Target,
  XCircle,
  Calendar,
  Zap,
  Brain,
  Rocket,
  Award,
  Mail,
  MapPin,
  Loader2,
  Stethoscope,
  Utensils,
  Scissors,
  Building2,
  Headphones,
  Star,
  Instagram,
  BookOpen,
  Bell,
  Search,
  Monitor,
  GitBranch,
  Sparkles,
  MessageSquare,
  FileText,
  Calculator,
  Inbox,
} from "lucide-react"
import { motion } from "framer-motion"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import WhatsAppButton from "@/components/WhatsAppButton"
import Image from "next/image"

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    presupuesto: "",
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
          servicio: "",
          presupuesto: "",
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
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      servicio: value,
    })
  }

  const handlePresupuestoChange = (value: string) => {
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

  const portfolioServices = [
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
      icon: Inbox,
      title: "Flujo automatizado para organizar y clasificar facturas.",
    },
    {
      icon: Mail,
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
      icon: Bot,
      title: "Chatbots personalizados para tu sitio web.",
    },
  ]

  const mainServices = [
    {
      icon: GitBranch,
      title: "Optimización de procesos empresariales",
      description:
        "Transformamos operaciones manuales en flujos inteligentes que funcionan por sí solos. Implementamos sistemas que eliminan tareas repetitivas, maximizando la eficiencia operativa de tu empresa. Nuestras soluciones integran las mejores plataformas de automatización como Make, n8n y ManyChat, creando ecosistemas personalizados que trabajan 24/7.",
      highlights: "Beneficios clave de optimizar tus procesos con IA:",
      benefits: [
        "Elimina errores operativos y aumenta la precisión en cada tarea crítica",
        "Multiplica tu capacidad productiva sin incrementar costos de personal",
        "Recupera tiempo valioso para estrategias que realmente impulsan el crecimiento",
        "Escala operaciones rápidamente sin comprometer calidad ni control",
      ],
    },
    {
      icon: Bot,
      title: "Desarrollo de agentes conversacionales con IA avanzada",
      description:
        "Diseñamos asistentes virtuales que dialogan naturalmente con tus clientes en tu web, apps o plataformas de mensajería. Estos sistemas comprenden contexto, responden consultas complejas, ejecutan acciones específicas y generan contenido relevante, operando como extensiones inteligentes de tu equipo comercial y de servicio.",
      highlights: "Transforma tu atención al cliente con IA conversacional:",
      benefits: [
        "Eleva la experiencia del usuario con respuestas inmediatas y personalizadas",
        "Expande tu alcance de mercado y mejora tu presencia digital",
        "Optimiza costos operativos mientras aceleras tiempos de respuesta",
        "Diferénciate con tecnología que aporta valor real a cada interacción",
      ],
    },
    {
      icon: Brain,
      title: "Soluciones empresariales con inteligencia artificial",
      description:
        "Implementamos tecnología de IA que potencia tu capacidad de decisión, impulsa la innovación y fortalece tu posición competitiva. Utilizamos machine learning, procesamiento de lenguaje natural y visión computacional para crear sistemas predictivos, asistentes especializados y generadores de contenido automatizado específicos para tu sector.",
      highlights: "Ventajas estratégicas de integrar IA en tu negocio:",
      benefits: [
        "Convierte datos masivos en insights accionables que guían decisiones estratégicas",
        "Establece conexiones personalizadas con cada cliente a través de interacciones naturales",
        "Automatiza procesos complejos con soluciones que se adaptan a cada escenario",
        "Posiciónate como referente tecnológico en tu industria con ventaja competitiva real",
      ],
    },
  ]

  const advantages = [
    {
      icon: Brain,
      title: "Innovación Tecnológica Constante",
      description:
        "Implementamos IA conversacional de última generación con capacidad de comprender contextos avanzados y mantener diálogos naturales que realmente funcionan.",
    },
    {
      icon: Target,
      title: "ROI Comprobable y Medible",
      description:
        "Genera incrementos significativos en conversión, reduce tiempos de respuesta drásticamente y optimiza la eficiencia del agendamiento automático.",
    },
    {
      icon: Rocket,
      title: "Despliegue Acelerado",
      description:
        "Lanzamos soluciones funcionales en días, no en trimestres. Configuración ágil que se integra perfectamente con tus sistemas actuales.",
    },
    {
      icon: Users,
      title: "Acompañamiento Técnico Continuo",
      description:
        "Equipo experto comprometido con optimizar, escalar y evolucionar tus asistentes virtuales conforme tu negocio crece.",
    },
    {
      icon: Award,
      title: "Desarrollo a Medida",
      description:
        "Cada asistente virtual se configura específicamente para tu sector, adaptándose a tu embudo de ventas y objetivos comerciales únicos.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Análisis Estratégico Inicial",
      description:
        "Evaluamos tu operación actual, detectamos oportunidades de automatización y trazamos una estrategia de implementación personalizada.",
    },
    {
      step: "02",
      title: "Arquitectura de la Solución",
      description:
        "Desarrollamos flujos conversacionales y entrenamos modelos de IA específicamente calibrados para tu industria y proceso comercial.",
    },
    {
      step: "03",
      title: "Implementación Sin Fricciones",
      description:
        "Desplegamos en ambientes controlados, realizamos ajustes precisos y activamos en producción sin interrumpir tus operaciones.",
    },
    {
      step: "04",
      title: "Mejora y Escalamiento Continuo",
      description:
        "Supervisamos métricas de rendimiento, optimizamos constantemente y escalamos las capacidades conforme tu empresa se expande.",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sande@nevadaautomations.com",
      link: "mailto:sande@nevadaautomations.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
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

      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-20 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[200%] w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                style={{
                  left: `${i * 20}%`,
                  transform: 'rotate(45deg)',
                  transformOrigin: 'top left',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-2">
              Convierte Más Clientes{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Mientras Duermes
              </span>
            </h1>
            
            <Button 
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
            >
              Solicita Nuestros Servicios
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-card/10">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 md:space-y-32">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 font-semibold">
              SERVICIOS PRINCIPALES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Soluciones que Transforman tu Negocio
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Implementamos tecnología de IA que potencia cada aspecto de tu operación empresarial.
            </p>
          </div>

          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
                  {service.title}
                </h2>
              </div>

              <Card className="p-6 sm:p-8 md:p-10 lg:p-14 bg-card/40 backdrop-blur-sm border-border/50 rounded-2xl sm:rounded-3xl shadow-lg">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light">
                  {service.description}
                </p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-foreground">{service.highlights}</h3>

                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {service.benefits.map((benefit, j) => (
                    <motion.li 
                      key={j} 
                      className="flex items-start gap-3 sm:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Services Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/10 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent px-2">
              Nuestro Portafolio de Servicios Incluye:
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {portfolioServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="group p-5 sm:p-6 bg-gradient-to-br from-[oklch(0.28_0.08_260)] to-[oklch(0.22_0.06_260)] border-[oklch(0.35_0.10_260)] hover:from-[oklch(0.30_0.09_260)] hover:to-[oklch(0.24_0.07_260)] transition-all duration-300 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/10 cursor-default">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white leading-snug pt-1 sm:pt-2">
                      {service.title}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 font-semibold">
              BENEFICIOS
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Convierte Más, Trabaja Menos
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Automatiza tu proceso de calificación y agendamiento para enfocarte en cerrar ventas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Más Conversiones",
                description:
                  "Respuestas instantáneas y disponibilidad 24/7 aumentan la tasa de conversión. Nunca pierdas un lead por tiempo de respuesta lento.",
                visual: (
                  <div className="relative w-full h-24 sm:h-32 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.8 }} />
                          <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.2 }} />
                        </linearGradient>
                      </defs>
                      <polyline
                        points="0,80 20,75 40,65 60,55 80,40 100,30 120,25 140,22 160,20 180,18 200,15"
                        fill="none"
                        stroke="url(#grad1)"
                        strokeWidth="3"
                      />
                      {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((x, i) => {
                        const y = 80 - (x / 200) * 65
                        return (
                          <motion.circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="3"
                            fill="rgb(59, 130, 246)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          />
                        )
                      })}
                    </svg>
                  </div>
                ),
              },
              {
                icon: Clock,
                title: "Disponibilidad 24/7",
                description:
                  "Tus agentes de IA trabajan sin descanso. Cualifican leads y agendan citas a cualquier hora, incluso fines de semana y festivos.",
                visual: (
                  <div className="relative w-full h-24 sm:h-32 mb-4 sm:mb-6 flex items-center justify-center">
                    <motion.div
                      className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-primary/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-1/2 left-1/2 w-1 h-6 sm:h-8 bg-primary origin-bottom -translate-x-1/2 -translate-y-full" />
                    </motion.div>
                  </div>
                ),
              },
              {
                icon: Target,
                title: "Calificación Automática",
                description:
                  "Filtrado inteligente de prospectos. Solo los leads calificados llegan a tu equipo, ahorrando tiempo y enfocando esfuerzos donde importa.",
                visual: (
                  <div className="relative w-full h-24 sm:h-32 mb-4 sm:mb-6 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-primary/30 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: i < 3 ? [1, 0.3, 1] : 1,
                            borderColor: i < 3 ? ['rgba(239, 68, 68, 0.5)', 'rgba(59, 130, 246, 0.5)'] : 'rgba(59, 130, 246, 0.3)',
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        >
                          {i < 3 ? (
                            <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500/80" />
                          ) : (
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary/80" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ),
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 sm:p-8 h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl">
                  {benefit.visual}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 font-semibold">
              POR QUÉ ELEGIRNOS
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              El Diferencial Nevada Automations
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Soluciones de automatización diseñadas específicamente para maximizar conversiones y eficiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 sm:p-8 h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                    <advantage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{advantage.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 font-semibold">
              PROCESO
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Nuestro Proceso de Implementación
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Un enfoque probado que garantiza resultados rápidos y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-6 sm:p-8 h-full bg-card/40 backdrop-blur-sm border-border/50 rounded-xl sm:rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="text-5xl sm:text-6xl font-bold text-primary/20 mb-4 sm:mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">{item.title}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section id="contacto" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4 font-semibold">
              CONTACTO
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              ¿Cómo puedo ayudarte?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light px-4">
              Completa el formulario y te contactaremos para agendar una cita personalizada donde descubrirás cómo Nevada Automations puede revolucionar tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-8 md:p-10 bg-[oklch(0.15_0.03_240)] backdrop-blur-sm border-[oklch(0.25_0.05_240)] rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-2xl">
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ width: '40%' }}
                  animate={{
                    x: ['0%', '250%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ width: '40%' }}
                  animate={{
                    x: ['0%', '250%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                  style={{ height: '40%' }}
                  animate={{
                    y: ['0%', '250%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                  style={{ height: '40%' }}
                  animate={{
                    y: ['0%', '250%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Te contactaremos en menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {error && (
                      <div className="p-3 sm:p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-xs sm:text-sm">
                        {error}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-xs sm:text-sm text-muted-foreground">
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
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-11 sm:h-12 text-sm sm:text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-xs sm:text-sm text-muted-foreground">
                        Empresa <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Empresa"
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-11 sm:h-12 text-sm sm:text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm text-muted-foreground">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-11 sm:h-12 text-sm sm:text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-xs sm:text-sm text-muted-foreground">
                        Teléfono con WhatsApp <span className="text-red-500">*</span>
                      </Label>
                      <PhoneInput
                        defaultCountry="es"
                        value={formData.telefono}
                        onChange={handlePhoneChange}
                        disabled={isLoading}
                        inputClassName="!bg-[oklch(0.12_0.03_240)] !border-[oklch(0.20_0.05_240)] !h-11 sm:!h-12 !text-sm sm:!text-base !placeholder:text-muted-foreground/50 !text-foreground"
                        countrySelectorStyleProps={{
                          buttonClassName: "!bg-[oklch(0.12_0.03_240)] !border-[oklch(0.20_0.05_240)] !h-11 sm:!h-12",
                          dropdownStyleProps: {
                            className: "!bg-[oklch(0.15_0.03_240)] !border-[oklch(0.25_0.05_240)]",
                            listItemClassName: "!text-foreground hover:!bg-[oklch(0.20_0.03_240)]"
                          }
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servicio" className="text-xs sm:text-sm text-muted-foreground">
                        ¿En qué estás interesado/a? <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        placeholder="Escribe en qué estás interesado/a..."
                        required
                        disabled={isLoading}
                        className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-11 sm:h-12 text-sm sm:text-base placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="presupuesto" className="text-xs sm:text-sm text-muted-foreground">
                        Elige tu rango de inversión <span className="text-red-500">*</span>
                      </Label>
                      <Select onValueChange={handlePresupuestoChange} value={formData.presupuesto} disabled={isLoading} required>
                        <SelectTrigger className="bg-[oklch(0.12_0.03_240)] border-[oklch(0.20_0.05_240)] h-11 sm:h-12 text-sm sm:text-base">
                          <SelectValue placeholder="Selecciona tu rango de inversión..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">Starter (1.000 - 3.000 USD)</SelectItem>
                          <SelectItem value="growth">Growth (3.000 - 5.000 USD)</SelectItem>
                          <SelectItem value="premium">Premium (5.000 - 10.000 USD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-card/50 border border-border">
                      <Checkbox 
                        id="politica" 
                        checked={formData.aceptaPolitica}
                        onCheckedChange={handleCheckboxChange}
                        disabled={isLoading}
                        className="mt-0.5 sm:mt-1"
                      />
                      <Label 
                        htmlFor="politica" 
                        className="text-xs sm:text-sm text-muted-foreground cursor-pointer leading-relaxed"
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
                      className="w-full text-sm sm:text-base font-semibold h-11 sm:h-12 bg-[oklch(0.60_0.25_230)] hover:bg-[oklch(0.55_0.25_230)] rounded-xl shadow-lg shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                          ENVIANDO...
                        </>
                      ) : (
                        "Enviar"
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sm:p-8 bg-card/40 backdrop-blur-sm border-border/50 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="space-y-5 sm:space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1 text-xs sm:text-sm uppercase tracking-wider">{item.title}</div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-sm sm:text-base text-muted-foreground">{item.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 sm:p-8 bg-card/40 backdrop-blur-sm border-border/50 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 uppercase text-xs sm:text-sm tracking-wider">¿Qué Esperar?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Respuesta en menos de 24 horas",
                    "Te contactaremos para agendar una cita",
                    "Análisis inicial sin costo",
                    "Propuesta a medida",
                    "Sin compromiso",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}