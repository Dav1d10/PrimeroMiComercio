"use client"

import Link from "next/link"
import Image from "next/image"
import { Lock, SquareArrowUpRight, Hand } from "lucide-react"
import { ClientButton } from "@/app/clientButton"
import { TestButton } from "@/app/TestButton"
import { TestButton2 } from "@/app/TestButton2"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-black text-white">
        {/* Navbar */}
        <nav className="flex flex-col sm:flex-row items-center justify-between border-b border-zinc-800 px-4 py-4 md:px-6">
          <div className="flex items-center space-x-4 sm:space-x-8 mb-4 sm:mb-0 overflow-x-auto w-full sm:w-auto">
            <Link href="/" className="text-sm font-medium whitespace-nowrap">
              Inicio
            </Link>
            <Link href="#funcionalidades" className="text-sm font-medium whitespace-nowrap">
              Funcionalidades
            </Link>
            <Link href="#precios" className="text-sm font-medium whitespace-nowrap">
              Precios
            </Link>
            <Link href="#testimonios" className="text-sm font-medium whitespace-nowrap">
              Testimonios
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium">
              Login
            </Link>
            <ClientButton />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 md:py-16 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Optimiza la Rentabilidad de tu negocio en minutos
            </h1>
            <p className="text-zinc-400 max-w-md">
              Reduce el tiempo de análisis financiero, visualiza tus márgenes de ganancia en segundos y toma decisiones
              más inteligentes sin necesidad de conocimientos contables avanzados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in">
              <ClientButton />
            </div>
          </div>

          {/* Imagen en el Hero */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md h-80 bg-zinc-700 rounded-lg overflow-hidden">
              <Image
                src="/images/IMAGEN1.jpg"  // Ajusta la ruta y el formato si tu archivo se llama diferente
                alt="Ilustración financiera"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Features (Oscuro) */}
        <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-zinc-900 text-zinc-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="features-title text-2xl sm:text-3xl font-bold mb-4">
              La mejor solución contable para pequeños negocios
            </h2>
            <p className="features-subtitle text-zinc-400 mb-8">
              Beneficios clave para optimizar tu tiempo y finanzas
            </p>
            <p className="features-description text-zinc-400 mb-12">
              Automatiza y simplifica la gestión financiera de tu empresa. Optimiza tu tiempo y toma decisiones más
              inteligentes con nuestra plataforma de contabilidad simplificada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Análisis Financiero Automático */}
            <div className="p-6 border border-zinc-700 rounded-lg">
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mb-4">
                <SquareArrowUpRight className="h-6 w-6 text-zinc-100" />
              </div>
              <h3 className="font-medium text-lg mb-2">Análisis Financiero Automático</h3>
              <p className="text-zinc-400">
                Reduce el tiempo de análisis financiero en un 80%. Toma decisiones más rápidas con datos precisos.
              </p>
            </div>

            {/* Seguridad y Confianza */}
            <div className="p-6 border border-zinc-700 rounded-lg">
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-zinc-100" />
              </div>
              <h3 className="font-medium text-lg mb-2">Seguridad y Confianza</h3>
              <p className="text-zinc-400">
                Protección avanzada para garantizar la integridad y seguridad de tus datos financieros.
              </p>
            </div>

            {/* Sin Conocimientos Contables */}
            <div className="p-6 border border-zinc-700 rounded-lg">
              <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center mb-4">
                <Hand className="h-6 w-6 text-zinc-100" />
              </div>
              <h3 className="font-medium text-lg mb-2">Sin Conocimientos Contables</h3>
              <p className="text-zinc-400">
                Interfaz intuitiva diseñada para emprendedores sin experiencia en contabilidad.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <p className="features-note text-zinc-200">
              No automatizar tu análisis financiero podría costarte hasta un 10% de tus ingresos mensuales.
            </p>
            <p className="features-note text-zinc-200 mt-2">
              Las decisiones poco informadas aumentan los gastos, reducen los márgenes y te alejan de la rentabilidad
              óptima.
            </p>
          </div>
        </section>

        {/* Testimonials (Oscuro) */}
        <section id="testimonios" className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-black">
          <TestimonialSlider />
        </section>

        {/* How it Works (Oscuro) */}
        <section id="funcionalidades" className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-zinc-900 text-zinc-100">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Cómo Funciona</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-green-500">
                <h3 className="font-medium text-lg mb-1">Regístrate en menos de 2 minutos</h3>
                <p className="text-zinc-400">
                  Crea una cuenta y accede de inmediato a tu plataforma personalizada.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="font-medium text-lg mb-1">Conecta tus cuentas bancarias y datos financieros</h3>
                <p className="text-zinc-400">
                  Vincula tus cuentas para obtener datos en tiempo real y gestionar tu contabilidad sin esfuerzo.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="font-medium text-lg mb-1">Empieza a visualizar métricas y reportes automáticos</h3>
                <p className="text-zinc-400">
                  Obtén reportes financieros detallados y optimiza tu rentabilidad con datos claros.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="font-medium text-lg mb-1">Personaliza tus reportes y dashboards</h3>
                <p className="text-zinc-400">
                  Ajusta los informes a tus necesidades y visualiza métricas en tiempo real para mejorar la toma de
                  decisiones financieras.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="font-medium text-lg mb-1">Accede desde cualquier dispositivo</h3>
                <p className="text-zinc-400">
                  Utiliza la aplicación desde tu computadora o móvil, sincronizando tu información financiera sin
                  complicaciones.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              {/* ImagenPrueba en oscuro */}
              <div className="relative w-full max-w-md h-80 bg-zinc-800 rounded-lg overflow-hidden">
                <Image
                  src="/images/ImagenPrueba.jpg" // Asegúrate de que sea .png y coincida con tu archivo
                  alt="Vista de formulario"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <TestButton />
          </div>
          <div className="flex justify-center mt-12">
            <TestButton2 />
          </div>
          
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-6 lg:px-8 bg-black text-white border-t border-zinc-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            <div>
              <h3 className="font-medium mb-4">Redes</h3>
              <ul>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contacto</h3>
              <ul>
                <li className="text-zinc-400">57-3193909393</li>
                <li className="text-zinc-400">at.vargasc1@uniandes.edu.co</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Producto</h3>
              <ul>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Visualizador de métricas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Reportes automáticos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Industria</h3>
              <ul>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Negocios pequeños
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Emprendedores Independientes
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-800">
            <h3 className="font-medium mb-4">Rentabilidad inteligente, desde el primer clic</h3>
            <p className="text-zinc-400 mb-2">
              Empodera a pequeños negocios y emprendedores con herramientas simples para potenciar su rentabilidad.
            </p>
            <p className="text-zinc-400">
              Nuestro sistema convierte tus datos financieros en decisiones inteligentes, sin necesidad de un contador o
              contador. ¡Tu rentabilidad, en plena automática!
            </p>
          </div>
        </footer>
      </main>

      {/* Estilos personalizados para centrar e italic */}
      <style jsx global>{`
        nav a {
          color: white !important;
          text-decoration: none !important;
          font-weight: 500 !important;
        }

        nav a:hover {
          color: #10b981 !important;
        }

        .btn-green {
          background-color: #10b981 !important;
          color: white !important;
          border: none !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem 1rem !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .btn-green:hover {
          background-color: #059669 !important;
        }

        .btn-start {
          background-color: #10b981 !important;
          color: white !important;
          border: none !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem 1rem !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .btn-start:hover {
          background-color: #059669 !important;
        }

        footer a {
          color: #a1a1aa !important;
          text-decoration: none !important;
        }

        footer a:hover {
          color: white !important;
        }

        footer ul {
          list-style-type: disc !important;
          padding-left: 1.25rem !important;
        }

        .navigation-dot {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer !important;
          transition: background-color 0.3s ease !important;
        }

        .navigation-dot:hover {
          background-color: #a1a1aa !important;
        }

        /* Clases para centrar e italic en la sección de Features */
        .features-title {
          text-align: center !important;
          width: 100% !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .features-subtitle {
          text-align: center !important;
          width: 100% !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .features-description {
          text-align: center !important;
          width: 100% !important;
          max-width: 800px !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .features-note {
          text-align: center !important;
          width: 100% !important;
          font-style: italic !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
      `}</style>
    </>
  )
}
