"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import {
  Zap,
  Target,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Rocket,
  Award,
  MessageSquare,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"

export default function NosotrosPage() {
  const advantages = [
    {
      icon: Brain,
      title: "Tecnología de Vanguardia",
      description:
        "Utilizamos IA conversacional de última generación para chatbots y agentes de voz que entienden contextos complejos y responden de forma natural.",
    },
    {
      icon: Target,
      title: "Resultados Medibles",
      description:
        "Incrementos significativos en conversión de leads, reducción de tiempo de respuesta y mayor eficiencia en el agendamiento de citas.",
    },
    {
      icon: Rocket,
      title: "Implementación Rápida",
      description:
        "Desplegamos soluciones en días, no meses. Configuración ágil e integración con tus sistemas existentes.",
    },
    {
      icon: Users,
      title: "Soporte Especializado",
      description:
        "Equipo dedicado para optimizar, escalar y adaptar tus chatbots y agentes telefónicos conforme creces.",
    },
    {
      icon: Award,
      title: "Soluciones Personalizadas",
      description:
        "Cada chatbot y agente telefónico se adapta a tu industria, proceso de ventas y objetivos específicos.",
    },
  ]

  const stats = [
    { value: "40-60%", label: "Incremento en Conversión", icon: TrendingUp },
    { value: "50%", label: "Reducción de Tiempo", icon: Clock },
    { value: "24/7", label: "Disponibilidad", icon: Zap },
    { value: "85%+", label: "Satisfacción", icon: Target },
  ]

  const process = [
    {
      step: "01",
      title: "Consultoría Estratégica",
      description:
        "Analizamos tu negocio, identificamos oportunidades y diseñamos una estrategia de automatización personalizada.",
    },
    {
      step: "02",
      title: "Diseño de Solución",
      description:
        "Creamos flujos conversacionales y entrenamos los modelos de IA específicamente para tu industria y proceso de ventas.",
    },
    {
      step: "03",
      title: "Implementación Ágil",
      description:
        "Desplegamos en entornos de prueba, refinamos y lanzamos en producción sin interrupciones.",
    },
    {
      step: "04",
      title: "Optimización Continua",
      description:
        "Monitoreamos rendimiento, optimizamos continuamente y escalamos conforme tu negocio crece.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center">
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
              El Diferencial Nevada Automations
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Especializados en chatbots y agentes telefónicos que automatizan la calificación de leads y el agendamiento de citas con IA de última generación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-4">
              NUESTRAS SOLUCIONES
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Automatización Especializada
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos enfocamos exclusivamente en dos soluciones poderosas que transforman tu proceso de ventas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: "Chatbots Inteligentes",
                description: "Chatbots con IA que cualifican leads y agendan citas automáticamente en tu web y redes sociales.",
              },
              {
                icon: Phone,
                title: "Agentes Telefónicos",
                description: "Agentes de voz con IA que llaman, cualifican prospectos y agendan citas por teléfono.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones de automatización diseñadas específicamente para maximizar conversiones y eficiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                    <advantage.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-4">
              PROCESO
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Proceso de Implementación
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un enfoque probado que garantiza resultados rápidos y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-primary/20">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comienza tu Transformación Hoy
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Descubre cómo nuestros chatbots y agentes telefónicos pueden automatizar tu proceso de ventas.
          </p>
          <Link href="/contacto">
            <Button
              size="lg"
              className="text-lg px-10 h-14 bg-primary hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/20"
            >
              Agenda tu Consultoría Gratuita
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}