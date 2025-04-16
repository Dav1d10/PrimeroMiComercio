import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Para evitar redefinir la conexión en modo desarrollo
  // y no crear conexiones duplicadas.
  // https://tinyurl.com/4tbrsz9h
  var _mongoClientPromise: Promise<MongoClient>;
}

if (!process.env.MONGODB_URI) {
  throw new Error("Por favor define la variable MONGODB_URI en .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Usa un cache global en modo dev
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, crea una sola conexión
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
