"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string; // ruta de la imagen
};

export default function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      quote: "Pude ahorrar tiempo con el manejo de mis finanzas gracias a ustedes",
      author: "Dolly",
      role: "Dueña de una panadería de barrio",
      image: "/images/testimonial-1.jpg",  // <-- pon aquí la ruta a tu imagen 1
    },
    {
      quote: "Si no hubiera usado esta herramienta, aún no sabría lo mucho que gastaba en cosas innecesarias",
      author: "Jeison",
      role: "Dueño de una carnicería",
      image: "/images/testimonial-2.jpg",  // <-- imagen 2
    },
    {
      quote: "Gracias a ustedes ahora puedo estar más tranquila porque mi información está segura",
      author: "Sandra",
      role: "Dueña de una papelería",
      image: "/images/testimonial-3.jpg",  // <-- imagen 3
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanza al siguiente testimonio
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Ir a un testimonio específico
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Rotación automática cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8">¡Escucha a nuestros usuarios!</h2>
        <div className="mb-8">
          <blockquote className="text-xl mb-4">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <p className="text-zinc-400">
            {testimonials[currentIndex].author}, {testimonials[currentIndex].role}
          </p>
        </div>
        <div className="flex space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className="navigation-dot"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  index === currentIndex ? "#ffffff" : "#52525b",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-zinc-800 rounded-lg overflow-hidden">
        <Image
          src={testimonials[currentIndex].image}
          alt={`Testimonio de ${testimonials[currentIndex].author}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}