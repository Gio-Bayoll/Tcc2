"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./src/routes/authRoutes"));
const diseaseRoutes_1 = __importDefault(require("./src/routes/diseaseRoutes"));
const firebase_1 = require("./src/config/firebase");
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    allowedHeaders: ["Content-Type", "Authorization"]
}));
server.use(express_1.default.json()); // Middleware para trabalhar com JSON
// Registrar rotas
server.use("/auth", authRoutes_1.default);
server.use("/disease", diseaseRoutes_1.default);
// Teste da conexão com o Firestore
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snapshot = yield firebase_1.db.collection("users").get();
        const users = snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao conectar com o Firestore." });
    }
}));
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
