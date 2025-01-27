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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const firebase_1 = require("../config/firebase");
const loginUser = (loginInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Login com email e senha usando Firebase Authentication
        const user = yield firebase_1.auth.getUserByEmail(loginInfo.email);
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        // Gerar um token para o usuário autenticado
        const token = yield firebase_1.auth.createCustomToken(user.uid);
        return token;
    }
    catch (error) {
        console.error("Erro ao autenticar usuário:", error.message);
        throw new Error(error.message);
    }
});
exports.loginUser = loginUser;
