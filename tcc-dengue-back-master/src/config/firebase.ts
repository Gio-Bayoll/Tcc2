import * as firebaseAdmin from "firebase-admin";
import * as serviceAccount from "C:/Users/gio_b/Desktop/TCC2/firebase-connect.json"; // Ajuste o caminho conforme necessário


firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    serviceAccount as firebaseAdmin.ServiceAccount
  ),
});

export const db = firebaseAdmin.firestore();
export const auth = firebaseAdmin.auth();
