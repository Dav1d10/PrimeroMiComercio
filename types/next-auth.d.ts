// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Extiende la interfaz de `Session` para incluir la propiedad `role`.
   */
  interface Session {
    user: {
      role?: string; // o "role: string" si quieres que sea obligatorio
    } & DefaultSession["user"];
  }

  /**
   * Extiende la interfaz de `User` para incluir la propiedad `role`.
   */
  interface User extends DefaultUser {
    role?: string; // o "role: string"
  }
}

declare module "next-auth/jwt" {
  /**
   * Extiende la interfaz de `JWT` para incluir la propiedad `role`.
   */
  interface JWT {
    role?: string; // o "role: string"
  }
}
