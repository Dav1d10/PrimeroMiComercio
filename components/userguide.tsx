import { BookOpen } from "lucide-react";

export const UserGuide = () => {
  return (
    <div className="w-56 rounded-lg bg-custom-gray border border-zinc-200 overflow-hidden"> {/* Cambiado a w-64 (16rem = 256px) */}
      <div className="flex items-center mb-4 p-4"> {/* Añadido p-4 para padding interno */}
        <BookOpen className="h-6 w-6 text-zinc-600 mr-3" />
        <h1 className="text-xl font-bold text-zinc-800">Guía de Usuario</h1>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow-sm border border-zinc-200 mx-4 mb-4"> {/* Eliminado w-1/4 y añadido mx-4 para margen horizontal */}
        <p className="text-zinc-700 mb-3"> {/* Añadido mb-3 para margen inferior */}
          Bienvenido al asistente de Costo y Rentabilidad. <br /> Aquí algunas instrucciones:
        </p>
        
        <ol className="space-y-3 list-decimal list-inside pl-5 marker:text-zinc-600">
          <li className="text-zinc-600 text-sm"> {/* Añadido text-sm para reducir tamaño de texto */}
            El asistente te guiará sobre la información que necesite para hacer cálculos.
          </li>
          <li className="text-zinc-600 text-sm">
            En caso de dudas sobre conceptos, el asistente te puede ayudar. <br /> Solo pregúntale: "Me puedes explicar..."
          </li>
          <li className="text-zinc-600 text-sm">
            Puedes hacer preguntas específicas sobre cálculos.
          </li>
          <li className="text-zinc-600 text-sm">
            Para cerrar sesión, utiliza el enlace en la esquina superior derecha.
          </li>
        </ol>
        
        <p className="text-zinc-500 text-xs italic mt-4"> {/* Cambiado a text-xs y añadido mt-4 */}
          *Si necesitas ayuda adicional, escribe "ayuda" en el chat.*
        </p>
      </div>
    </div>
  );
};