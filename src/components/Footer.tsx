"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo centrado y más grande */}
          <Link href="/" className="inline-block">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-2-1764951675392.jpeg"
              alt="Nevada Automations" 
              width={280}
              height={63}
              className="h-16 w-auto"
            />
          </Link>

          {/* Enlaces de Políticas */}
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/privacidad"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Cookies
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © Copyright {new Date().getFullYear()}. Nevada Automations. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}