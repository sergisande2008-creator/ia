import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import CookieBanner from "@/components/CookieBanner"

export const metadata: Metadata = {
  title: "Nevada Automations - IA Conversacional",
  description: "Chatbots y agentes telefónicos impulsados por IA que trabajan 24/7 para convertir leads en citas agendadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}