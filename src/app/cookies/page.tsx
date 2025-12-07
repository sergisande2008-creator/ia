import { Card } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Cookie, Info, Settings, Shield } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Política de Cookies</h1>
              <p className="text-muted-foreground mt-2">
                Última actualización: {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">¿Qué son las cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. 
                    Estas cookies permiten que el sitio web recuerde información sobre tu visita, como tu idioma preferido 
                    y otras configuraciones, lo que puede hacer que tu próxima visita sea más fácil y el sitio más útil para ti.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6">¿Qué cookies utilizamos?</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cookies Estrictamente Necesarias</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Estas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus funciones. 
                        Sin estas cookies, los servicios que has solicitado no pueden ser proporcionados.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>cookie-consent</strong>: Almacena tu preferencia sobre el uso de cookies</li>
                        <li><strong>session</strong>: Mantiene tu sesión activa durante tu visita</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cookies de Análisis y Rendimiento</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Estas cookies recopilan información sobre cómo los visitantes utilizan un sitio web, 
                        por ejemplo, qué páginas visitan con más frecuencia. Toda la información que estas 
                        cookies recopilan es agregada y, por lo tanto, anónima.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>_ga</strong>: Google Analytics - Distingue usuarios únicos</li>
                        <li><strong>_gid</strong>: Google Analytics - Distingue usuarios únicos</li>
                        <li><strong>_gat</strong>: Google Analytics - Limita la frecuencia de solicitudes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cookies de Funcionalidad</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Estas cookies permiten que el sitio web recuerde las elecciones que haces 
                        (como tu nombre de usuario, idioma o la región en la que te encuentras) y 
                        proporcionan funciones mejoradas y más personales.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>language</strong>: Recuerda tu preferencia de idioma</li>
                        <li><strong>theme</strong>: Guarda tu preferencia de tema (claro/oscuro)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cookies de Marketing y Publicidad</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Estas cookies se utilizan para rastrear a los visitantes a través de los sitios web. 
                        La intención es mostrar anuncios que sean relevantes y atractivos para el usuario 
                        individual y, por lo tanto, más valiosos para los editores y anunciantes de terceros.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                        <li><strong>_fbp</strong>: Facebook Pixel - Seguimiento de conversiones</li>
                        <li><strong>ads/ga-audiences</strong>: Google Ads - Remarketing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">¿Cómo gestionar las cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Puedes gestionar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies 
                    que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar 
                    que se coloquen cookies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Configuración de cookies en los navegadores más populares:</strong>
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Chrome</strong>: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                    <li><strong>Firefox</strong>: Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                    <li><strong>Safari</strong>: Preferencias → Privacidad → Cookies y datos de sitios web</li>
                    <li><strong>Edge</strong>: Configuración → Cookies y permisos del sitio → Cookies y datos del sitio</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Ten en cuenta que si decides deshabilitar las cookies, algunas funciones de nuestro sitio web 
                    pueden no funcionar correctamente.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tu consentimiento</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política de cookies. 
                    Si no estás de acuerdo con el uso de estas cookies, debes configurar tu navegador en consecuencia 
                    o no utilizar nuestro sitio web.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Puedes cambiar tu consentimiento en cualquier momento eliminando las cookies almacenadas en tu 
                    navegador y actualizando tus preferencias cuando vuelvas a visitar nuestro sitio.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold mb-4">Actualizaciones de esta política</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en las cookies 
                que utilizamos o por otras razones operativas, legales o reglamentarias. Por lo tanto, te rogamos 
                que revises esta política de cookies regularmente para estar informado sobre nuestro uso de cookies 
                y tecnologías relacionadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La fecha en la parte superior de esta política de cookies indica cuándo se actualizó por última vez.
              </p>
            </Card>

            <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tienes alguna pregunta sobre nuestra política de cookies, no dudes en ponerte en contacto con nosotros:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Email:</strong> <a href="mailto:sande@nevadaautomations.com" className="text-primary hover:underline">sande@nevadaautomations.com</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34678116047" className="text-primary hover:underline">+34 678 116 047</a></li>
                <li><strong>Ubicación:</strong> Granollers, Barcelona</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
