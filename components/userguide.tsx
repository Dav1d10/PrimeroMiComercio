import { BookOpen } from "lucide-react";

export const UserGuide = () => {
  return (
    <div className="w-20% bg-white rounded-lg">
      <div className="flex items-center mb-4">
        <BookOpen className="h-6 w-6 text-black-600 mr-3" />
        <h1 className="text-xl font-bold">Guía de Usuario</h1>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700">
          Bienvenido al asistente de Costo y Rentabilidad. Aquí algunas instrucciones:
        </p>
        
        <ol className="space-y-3 list-decimal list-inside">
          <li className="text-gray-600">Escribe tu pregunta en el campo de texto inferior.</li>
          <li className="text-gray-600">El asistente responderá a tus dudas sobre costos y rentabilidad.</li>
          <li className="text-gray-600">Puedes hacer preguntas específicas sobre cálculos o conceptos.</li>
          <li className="text-gray-600">Para cerrar sesión, utiliza el enlace en la esquina superior derecha.</li>
        </ol>
        
        <p className="text-gray-500 text-sm italic">
          Si necesitas ayuda adicional, escribe "ayuda" en el chat.
        </p>
      </div>
    </div>
  );
};