import { Request, Response } from "express";
import { ChartDataService } from "../services/diseaseService";

const dengueService = new ChartDataService("tblDengue");
const zikaService = new ChartDataService("tblZika");
const chikunService = new ChartDataService("tblChikun");
const dadosService = new ChartDataService("tblDados");

export class ChartDataController {
  //#region Dengue
  static async getAllDengue(req: Request, res: Response) {
    try {
      const documents = await dengueService.getAllDocuments();
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getByIdDengue(req: Request, res: Response) {
    try {
      const document = await dengueService.getDocumentById(req.params.id);
      if (!document)
        return res.status(404).json({ message: "Document not found" });
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  //#endregion Dengue

  //#region Zika
  static async getAllZika(req: Request, res: Response) {
    try {
      const documents = await zikaService.getAllDocuments();
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getByIdZika(req: Request, res: Response) {
    try {
      const document = await zikaService.getDocumentById(req.params.id);
      if (!document)
        return res.status(404).json({ message: "Document not found" });
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  //#endregion Zika

  //#region Chikun
  static async getAllChikun(req: Request, res: Response) {
    try {
      const documents = await chikunService.getAllDocuments();
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getByIdChikun(req: Request, res: Response) {
    try {
      const document = await chikunService.getDocumentById(req.params.id);
      if (!document)
        return res.status(404).json({ message: "Document not found" });
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  //#endregion Chikun

  //#region Dados
  static async getAllDados(req: Request, res: Response) {
    try {
      const documents = await dadosService.getAllDocuments();
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getByIdDados(req: Request, res: Response) {
    try {
      const document = await dadosService.getDocumentById(req.params.id);
      if (!document)
        return res.status(404).json({ message: "Document not found" });
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  //#endregion Dados
}
