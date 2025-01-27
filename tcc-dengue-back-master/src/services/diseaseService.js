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
exports.ChartDataService = void 0;
const firebase_1 = require("../config/firebase");
class ChartDataService {
    constructor(collection) {
        this.collection = collection;
    }
    getAllDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield firebase_1.db.collection(this.collection).get();
            return snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        });
    }
    getDocumentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield firebase_1.db.collection(this.collection).doc(id).get();
            if (!doc.exists)
                return null;
            return Object.assign({ id: doc.id }, doc.data());
        });
    }
    getAllDados() {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield firebase_1.db.collection(this.collection).get();
            return snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        });
    }
    getDadosById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield firebase_1.db.collection(this.collection).doc(id).get();
            if (!doc.exists)
                return null;
            return Object.assign({ id: doc.id }, doc.data());
        });
    }
}
exports.ChartDataService = ChartDataService;
