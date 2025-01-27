import { auth } from "../config/firebase";
import { LoginInfo } from "../models/userModel";

export const loginUser = async (loginInfo: LoginInfo): Promise<string> => {
  try {
    // Login com email e senha usando Firebase Authentication
    const user = await auth.getUserByEmail(loginInfo.email);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    // Gerar um token para o usuário autenticado
    const token = await auth.createCustomToken(user.uid);

    return token;
  } catch (error: any) {
    console.error("Erro ao autenticar usuário:", error.message);
    throw new Error(error.message);
  }
};
