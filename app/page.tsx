import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
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
          <Button className="bg-green-500 hover:bg-green-600">Prueba Ahora</Button>
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
          <div>
            <Button className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">Prueba Gratis / Empieza Ahora</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md h-80 bg-zinc-700 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">$</span>
              </div>
              <div className="absolute right-10 bottom-10">
                <div className="w-20 h-40 relative">
                  <div className="absolute bottom-0 w-full">
                    <div className="h-20 w-4 bg-green-600 inline-block mx-1"></div>
                    <div className="h-16 w-4 bg-green-600 inline-block mx-1"></div>
                    <div className="h-24 w-4 bg-green-600 inline-block mx-1"></div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 flex items-center">
                <div className="w-24 h-64 relative">
                  <div className="absolute bottom-0 w-full flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-700 rounded-full mb-2"></div>
                    <div className="w-8 h-32 bg-purple-900"></div>
                  </div>
                </div>
              </div>
              <div className="absolute left-10 top-10">
                <div className="w-16 h-48">
                  <div className="w-1 h-48 bg-green-600 relative">
                    <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-3 top-0"></div>
                    <div className="absolute w-10 h-3 bg-green-500 -left-5 top-10 rotate-45"></div>
                    <div className="absolute w-10 h-3 bg-green-500 -left-5 top-20 rotate-45"></div>
                    <div className="absolute w-10 h-3 bg-green-500 -left-5 top-30 rotate-45"></div>
                    <div className="absolute w-10 h-3 bg-green-500 -left-5 top-40 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">La mejor solución contable para pequeños negocios</h2>
          <p className="text-zinc-600 mb-8">Beneficios clave para optimizar tu tiempo y finanzas</p>
          <p className="text-zinc-600 mb-12 max-w-3xl mx-auto">
            Automatiza y simplifica la gestión financiera de tu empresa. Optimiza tu tiempo y toma decisiones más
            inteligentes con nuestra plataforma de contabilidad simplificada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="p-6 border border-zinc-200 rounded-lg">
            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
              <ChevronRight className="h-6 w-6 text-zinc-700" />
            </div>
            <h3 className="font-medium text-lg mb-2">Análisis Financiero Automático</h3>
            <p className="text-zinc-600">
              Reduce el tiempo de análisis financiero en un 80%. Toma decisiones más rápidas con datos precisos.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 rounded-lg">
            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
              <ChevronRight className="h-6 w-6 text-zinc-700" />
            </div>
            <h3 className="font-medium text-lg mb-2">Seguridad y Confianza</h3>
            <p className="text-zinc-600">
              Protección avanzada para garantizar la integridad y seguridad de tus datos financieros.
            </p>
          </div>

          <div className="p-6 border border-zinc-200 rounded-lg">
            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
              <ChevronRight className="h-6 w-6 text-zinc-700" />
            </div>
            <h3 className="font-medium text-lg mb-2">Sin Conocimientos Contables</h3>
            <p className="text-zinc-600">
              Interfaz intuitiva diseñada para emprendedores sin experiencia en contabilidad.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center italic text-zinc-700">
          <p>
            No automatizar tu análisis financiero podría estar costándole mucho más a tu negocio de lo que imaginas.
          </p>
          <p className="mt-2">
            Las decisiones poco informadas aumentan los gastos, reducen los márgenes y te alejan de la rentabilidad
            óptima.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-zinc-900">
        <TestimonialSlider />
      </section>

      {/* How it Works */}
      <section id="funcionalidades" className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-white text-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">Cómo Funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-green-500">
              <h3 className="font-medium text-lg mb-1">Regístrate en menos de 2 minutos</h3>
              <p className="text-zinc-600">Crea una cuenta y accede de inmediato a tu plataforma personalizada.</p>
            </div>

            <div className="pl-8">
              <h3 className="font-medium text-lg mb-1">Conecta tus cuentas bancarias y datos financieros</h3>
              <p className="text-zinc-600">
                Vincula tus cuentas para obtener datos en tiempo real y gestionar tu contabilidad sin esfuerzo.
              </p>
            </div>

            <div className="pl-8">
              <h3 className="font-medium text-lg mb-1">Empieza a visualizar métricas y reportes automáticos</h3>
              <p className="text-zinc-600">
                Obtén reportes financieros detallados y optimiza tu rentabilidad con datos claros.
              </p>
            </div>

            <div className="pl-8">
              <h3 className="font-medium text-lg mb-1">Personaliza tus reportes y dashboards</h3>
              <p className="text-zinc-600">
                Ajusta los informes a tus necesidades y visualiza métricas en tiempo real para mejorar la toma de
                decisiones financieras.
              </p>
            </div>

            <div className="pl-8">
              <h3 className="font-medium text-lg mb-1">Accede desde cualquier dispositivo</h3>
              <p className="text-zinc-600">
                Utiliza la aplicación desde tu computadora o móvil, sincronizando tu información financiera sin
                complicaciones.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-80 bg-zinc-100 rounded-lg"></div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">¡Regístrate Ahora!</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 lg:px-8 bg-black text-white border-t border-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
          <div>
            <h3 className="font-medium mb-4">Redes</h3>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
              <li className="text-zinc-400">57-3193099393</li>
              <li className="text-zinc-400">info@plataforma.edu.co</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Producto</h3>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
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
  )
}

