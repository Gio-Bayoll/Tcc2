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
exports.login = void 0;
const authService_1 = require("../services/authService");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginInfo = req.body;
    if (!loginInfo.email || !loginInfo.password) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }
    try {
        const token = yield (0, authService_1.loginUser)(loginInfo);
        return res.status(200).json({ token });
    }
    catch (error) {
        return res.status(401).json({ message: error.message || "Erro de login." });
    }
});
exports.login = login;
