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
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/chatbot.html");
    }
  }, [session, router]);

  if (status === "loading") return <p>Cargando...</p>;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/chatbot.html",
    });

    if (result?.error) {
      setError("Credenciales inválidas. Inténtalo de nuevo.");
    } else if (result?.ok) {
      router.push("/chatbot.html");
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
          placeholder="tu@email.com"
        />

        <br />

        <label>Contraseña</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
          placeholder="********"
        />

        <div className={styles.showPassword}>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Mostrar Contraseña</label>
        </div>

        <br />

        <button type="submit" className={styles.submitButton}>
          Iniciar sesión
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {/* Agrega este párrafo debajo del botón de inicio de sesión */}
      <p className={styles.signUpNotice}>
        ¿No tienes una cuenta?{" "}
        <a href="/register" className={styles.signUpLink}>
          Registrate
        </a>
      </p>
    </div>
  );
}

