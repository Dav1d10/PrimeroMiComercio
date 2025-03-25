"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type Testimonial = {
  quote: string
  author: string
  role: string
  image?: string
}

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      quote: "Pude ahorrar tiempo con el manejo de mis finanzas gracias a ustedes",
      author: "Dolly",
      role: "Dueña de una panadería de barrio",
      image: "/placeholder.svg?height=400&width=500",
    },
    {
      quote: "Si no hubiera usado esta útil herramienta, aún no sabría lo mucho que gastaba en cosas innecesarias",
      author: "Jeison",
      role: "Dueño de una carnicería",
      image: "/placeholder.svg?height=400&width=500",
    },
    {
      quote: "Gracias a ustedes ahora puedo estar más tranquila porque mi información está segura",
      author: "Sandra",
      role: "Dueña de una papelería",
      image: "/placeholder.svg?height=400&width=500",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para cambiar al siguiente testimonio
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  // Función para cambiar a un testimonio específico
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Efecto para la rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8">¡Escucha a nuestros usuarios!</h2>
        <div className="mb-8">
          <blockquote className="text-xl mb-4">"{testimonials[currentIndex].quote}"</blockquote>
          <p className="text-zinc-400">
            {testimonials[currentIndex].author}, {testimonials[currentIndex].role}
          </p>
        </div>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-zinc-600 hover:bg-zinc-400"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="relative h-80 bg-zinc-800 rounded-lg overflow-hidden">
        <Image
          src={testimonials[currentIndex].image || "/placeholder.svg?height=400&width=500"}
          alt={`Testimonio de ${testimonials[currentIndex].author}`}
          width={500}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  )
}

