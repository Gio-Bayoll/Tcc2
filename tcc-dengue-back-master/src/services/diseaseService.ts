import { db } from "../config/firebase";
import { ChartDataDocument, DadosDocument } from "../models/disease";

export class ChartDataService {
  private collection: string;

  constructor(collection: string) {
    this.collection = collection;
  }

  async getAllDocuments(): Promise<ChartDataDocument[]> {
    const snapshot = await db.collection(this.collection).get();
    return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() } as ChartDataDocument));
  }

  async getDocumentById(id: string): Promise<ChartDataDocument | null> {
    const doc = await db.collection(this.collection).doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as ChartDataDocument;
  }

  async getAllDados(): Promise<DadosDocument[]> {
    const snapshot = await db.collection(this.collection).get();
    return snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() } as DadosDocument));
  }

  async getDadosById(id: string): Promise<DadosDocument | null> {
    const doc = await db.collection(this.collection).doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as DadosDocument;
  }
}
