import { Request, Response } from "express";
import { loginUser } from "../services/authService";
import { LoginInfo } from "../models/userModel";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const loginInfo: LoginInfo = req.body;

  if (!loginInfo.email || !loginInfo.password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    const token = await loginUser(loginInfo);
    return res.status(200).json({ token });
  } catch (error: any) {
    return res.status(401).json({ message: error.message || "Erro de login." });
  }
};
