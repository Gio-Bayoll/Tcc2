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
exports.ChartDataController = void 0;
const diseaseService_1 = require("../services/diseaseService");
const dengueService = new diseaseService_1.ChartDataService("tblDengue");
const zikaService = new diseaseService_1.ChartDataService("tblZika");
const chikunService = new diseaseService_1.ChartDataService("tblChikun");
const dadosService = new diseaseService_1.ChartDataService("tblDados");
class ChartDataController {
    //#region Dengue
    static getAllDengue(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const documents = yield dengueService.getAllDocuments();
                res.status(200).json(documents);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    static getByIdDengue(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield dengueService.getDocumentById(req.params.id);
                if (!document)
                    return res.status(404).json({ message: "Document not found" });
                res.status(200).json(document);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    //#endregion Dengue
    //#region Zika
    static getAllZika(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const documents = yield zikaService.getAllDocuments();
                res.status(200).json(documents);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    static getByIdZika(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield zikaService.getDocumentById(req.params.id);
                if (!document)
                    return res.status(404).json({ message: "Document not found" });
                res.status(200).json(document);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    //#endregion Zika
    //#region Chikun
    static getAllChikun(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const documents = yield chikunService.getAllDocuments();
                res.status(200).json(documents);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    static getByIdChikun(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield chikunService.getDocumentById(req.params.id);
                if (!document)
                    return res.status(404).json({ message: "Document not found" });
                res.status(200).json(document);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    //#endregion Chikun
    //#region Dados
    static getAllDados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const documents = yield dadosService.getAllDocuments();
                res.status(200).json(documents);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    static getByIdDados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const document = yield dadosService.getDocumentById(req.params.id);
                if (!document)
                    return res.status(404).json({ message: "Document not found" });
                res.status(200).json(document);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
}
exports.ChartDataController = ChartDataController;
