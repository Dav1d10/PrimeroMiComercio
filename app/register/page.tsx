"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data?.error) {
      setError(data.error);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>Listo para tener el control?</h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          placeholder="tu@email.com"
        />
        <br />
        <label className={styles.label}>Contraseña</label>
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
          Registrarse
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <p className={styles.loginNotice}>
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className={styles.loginLink}>
                Inicia Sesión
              </a>
            </p>
    </div>
  );
}

