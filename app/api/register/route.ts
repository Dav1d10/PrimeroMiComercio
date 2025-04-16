// app/api/register/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs"; // Usando bcryptjs para encriptar la contraseña

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // 1. Conectar a la BD
    const client = await clientPromise;
    const db = client.db();

    // 2. Verificar si el usuario ya existe
    const userExists = await db.collection("Users").findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { error: "El usuario ya está registrado." },
        { status: 400 }
      );
    }

    // 3. Hashear la contraseña usando bcryptjs:
    const hashedPassword = await hash(password, 10);

    // 4. Guardar el usuario en la base de datos
    const result = await db.collection("Users").insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    // 5. Responder con éxito
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error en register:", error);
    return NextResponse.json({ error: "Error al registrar usuario" }, { status: 500 });
  }
}

