import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions: NextAuthOptions = {
  // Configuramos el adaptador para que guarde la información de NextAuth en MongoDB
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "tu@email.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Conecta a la base de datos y busca el usuario con el email dado
        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection("Users").findOne({ email: credentials?.email });

        if (!user) {
          // Si no se encuentra el usuario, retorna null (autenticación fallida)
          return null;
        }

        // Compara la contraseña ingresada con la del usuario en la BD
        // (Recuerda: en producción, utiliza hashing con bcrypt o una librería similar)
        if (credentials?.password === user.password) {
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
          };
        }

        // Si la contraseña no coincide, retorna null
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

// Exporta el handler para GET y POST (esto permite a NextAuth manejar las solicitudes)
export { handler as GET, handler as POST };

