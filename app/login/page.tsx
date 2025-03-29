"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // Estado para mostrar la contraseña

  // Redirige si ya hay sesión
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (status === "loading") return <p>Cargando...</p>;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (result?.error) {
      setError("Credenciales inválidas. Inténtalo de nuevo.");
    } else if (result?.ok) {
      // La redirección se manejará en el useEffect al detectar la sesión
    }
  }

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Bienvenido de vuelta</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          placeholder="holamundo@email.com"  // Placeholder para el email
        />
        <br />
        <label>Contraseña</label>
        <input
          type={showPassword ? "text" : "password"}  // Cambiar entre password y text
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
          placeholder="********"  // Placeholder para la contraseña
        />
        <div className={styles.showPassword}>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}  // Alterna la visibilidad de la contraseña
          />
          <label htmlFor="showPassword">Mostrar Contraseña</label>
        </div>
        <br />
        <button type="submit" className={styles.submitButton}>Iniciar sesión</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}



