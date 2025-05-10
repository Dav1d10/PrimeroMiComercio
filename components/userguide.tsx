import { BookOpen } from "lucide-react";


export const UserGuide = () => {
  return (
    <div className="w-64 rounded-lg bg-custom-gray border border-zinc-200 overflow-hidden">
      <div className="flex items-center mb-4 p-4">
        <BookOpen className="h-6 w-6 text-zinc-600 mr-3" />
        <h1 className="text-xl font-bold text-zinc-800">Guía de Usuario</h1>
      </div>

      <div className="bg-white p-4 rounded-md shadow-sm border border-zinc-200 mx-4 mb-4">
        <p className="text-zinc-700 mb-3">
          Bienvenido al asistente de Costo y Rentabilidad. <br />
          Esta herramienta está diseñada para ayudar a los pequeños empresarios <br /> a calcular fácilmente rentabilidad de sus productos o servicios.
        </p>

        <h2 className="text-lg font-semibold text-zinc-800 mt-4">¿Qué cálculos realiza el Asistente?</h2>
        <ul className="list-disc list-inside text-zinc-600 text-sm mt-2 space-y-1">
          <li>Cálculo de Costos Totales (fijos y variables).</li>
          <li>Cálculo del Precio de Venta Sugerido.</li>
          <li>Cálculo de Rentabilidad (margen y porcentaje).</li>
          <li>Análisis de Punto de Equilibrio.</li>
        </ul>

        <h2 className="text-lg font-semibold text-zinc-800 mt-4">¿Cómo ingresar información?</h2>
        <p className="text-zinc-600 text-sm mt-2">
          El asistente te guiará paso a paso. Debes responder de manera clara y precisa. <br />
          - Para costos fijos: ingresa el valor mensual. <br />
          - Para costos variables: ingresa el valor por unidad producida.
        </p>

        <h2 className="text-lg font-semibold text-zinc-800 mt-4">Consultas y Ayuda</h2>
        <p className="text-zinc-600 text-sm mt-2">
          Si tienes dudas sobre conceptos, pregunta: "Me puedes explicar [concepto]?". <br />
          Para preguntas específicas: "¿Cómo calculo el punto de equilibrio?".
        </p>

        <h2 className="text-lg font-semibold text-zinc-800 mt-4">Cierre de Sesión</h2>
        <p className="text-zinc-600 text-sm mt-2">
          Utiliza el enlace en la esquina superior derecha de la pantalla.
        </p>

        <p className="text-zinc-500 text-xs italic mt-4">*Si necesitas ayuda adicional, escribe "ayuda" en el chat.*</p>
      </div>
    </div>
  );
};
