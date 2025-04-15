// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // Configura el adaptador para usar MongoDB
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "tu@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Verifica que se recibieron las credenciales
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        // Conecta a la base de datos
        const client = await clientPromise;
        const db = client.db();

        // Busca el usuario en la colección "Users" por su email
        const user = await db.collection("Users").findOne({ email: credentials.email });
        if (!user || !user.password) return null;

        // Compara la contraseña ingresada en texto plano con el hash almacenado
        const isValid = await compare(credentials.password, user.password as string);
        if (!isValid) return null;

        // Retorna el usuario autenticado
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name, // Si el campo name no existe, se puede omitir o asignar un valor por defecto
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

// Exporta el handler para GET y POST, permitiendo a NextAuth manejar las solicitudes
export { handler as GET, handler as POST };



