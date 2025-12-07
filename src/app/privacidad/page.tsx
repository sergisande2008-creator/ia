import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En Nevada Automations, tu privacidad es nuestra prioridad. Esta política describe cómo recopilamos, usamos y protegemos tu información.
            </p>
          </div>

          {/* Content */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="prose prose-invert max-w-none">
              {/* Sección 1 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">1. Información que Recopilamos</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Cuando utilizas nuestros servicios o completas nuestro formulario de contacto, podemos recopilar la siguiente información:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• <strong className="text-foreground">Información de contacto:</strong> Nombre, correo electrónico, número de teléfono</li>
                  <li>• <strong className="text-foreground">Información empresarial:</strong> Nombre de empresa o proyecto</li>
                  <li>• <strong className="text-foreground">Información de consulta:</strong> Presupuesto estimado y detalles sobre tu proyecto</li>
                  <li>• <strong className="text-foreground">Información técnica:</strong> Dirección IP, tipo de navegador, páginas visitadas</li>
                </ul>
              </section>

              {/* Sección 2 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">2. Cómo Utilizamos tu Información</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Responder a tus consultas y solicitudes de servicios</li>
                  <li>• Contactarte para agendar citas y reuniones</li>
                  <li>• Proporcionarte información sobre nuestros servicios</li>
                  <li>• Mejorar nuestro sitio web y experiencia de usuario</li>
                  <li>• Cumplir con obligaciones legales y regulatorias</li>
                  <li>• Enviarte comunicaciones relacionadas con tu consulta (con tu consentimiento)</li>
                </ul>
              </section>

              {/* Sección 3 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">3. Protección de Datos</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Encriptación SSL/TLS para todas las transmisiones de datos</li>
                  <li>• Acceso restringido a información personal solo a personal autorizado</li>
                  <li>• Almacenamiento seguro en servidores protegidos</li>
                  <li>• Revisiones periódicas de nuestras prácticas de seguridad</li>
                </ul>
              </section>

              {/* Sección 4 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">4. Compartir Información</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros para fines comerciales. Podemos compartir información solo en los siguientes casos:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo acuerdos de confidencialidad)</li>
                  <li>• Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
                  <li>• Con tu consentimiento explícito</li>
                </ul>
              </section>

              {/* Sección 5 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">5. Cookies y Tecnologías Similares</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Nuestro sitio web puede utilizar cookies y tecnologías similares para:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Mejorar la funcionalidad del sitio</li>
                  <li>• Analizar el tráfico y uso del sitio</li>
                  <li>• Personalizar tu experiencia</li>
                </ul>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
                </p>
              </section>

              {/* Sección 6 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">6. Tus Derechos</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Conforme al RGPD (Reglamento General de Protección de Datos) y otras leyes aplicables, tienes derecho a:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• <strong className="text-foreground">Acceso:</strong> Solicitar una copia de tu información personal</li>
                  <li>• <strong className="text-foreground">Rectificación:</strong> Corregir información inexacta o incompleta</li>
                  <li>• <strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de tu información personal</li>
                  <li>• <strong className="text-foreground">Limitación:</strong> Restringir el procesamiento de tus datos</li>
                  <li>• <strong className="text-foreground">Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
                  <li>• <strong className="text-foreground">Oposición:</strong> Oponerte al procesamiento de tus datos personales</li>
                </ul>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Para ejercer cualquiera de estos derechos, contáctanos utilizando la información proporcionada al final de esta política.
                </p>
              </section>

              {/* Sección 7 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">7. Retención de Datos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Típicamente, conservamos la información de consultas durante 2 años después del último contacto.
                </p>
              </section>

              {/* Sección 8 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">8. Transferencias Internacionales</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tus datos pueden ser transferidos y almacenados en servidores ubicados fuera del Espacio Económico Europeo (EEE). En tales casos, nos aseguramos de que existan garantías adecuadas para proteger tu información conforme a las leyes de protección de datos aplicables.
                </p>
              </section>

              {/* Sección 9 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">9. Menores de Edad</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente información personal de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente.
                </p>
              </section>

              {/* Sección 10 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">10. Cambios a esta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o requisitos legales. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web con una fecha de "Actualizado" revisada. Te recomendamos revisar esta política regularmente.
                </p>
              </section>

              {/* Sección 11 - Contacto */}
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">11. Contacto</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Si tienes preguntas, inquietudes o deseas ejercer tus derechos de protección de datos, puedes contactarnos:
                </p>
                
                <Card className="p-6 bg-primary/10 border-primary/30">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold mb-1">Email</p>
                        <a
                          href="mailto:sande@nevadaautomations.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          sande@nevadaautomations.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold mb-1">Teléfono</p>
                        <a
                          href="tel:+34678116047"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +34 678 116 047
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold mb-1">Dirección</p>
                        <p className="text-sm text-muted-foreground">
                          Nevada Automations<br />
                          Granollers, Barcelona<br />
                          España
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <p className="text-muted-foreground mt-6 leading-relaxed">
                  También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que el tratamiento de tus datos personales no cumple con la normativa aplicable.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}