import express, { Application } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import chartDataRoutes from "./routes/diseaseRoutes";
import { db } from "./config/firebase";

const server: Application = express();

server.use(cors({
  allowedHeaders: ["Content-Type", "Authorization"]
}));

server.use(express.json()); // Middleware para trabalhar com JSON

// Registrar rotas
server.use("/auth", authRoutes);
server.use("/disease", chartDataRoutes);

// Teste da conexão com o Firestore
server.get("/", async (req:any, res:any) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map((doc:any) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao conectar com o Firestore." });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

