import { Router } from "express";
import { ChartDataController } from "../controllers/diseaseController";

const router = Router();

router.get("/Dengue", ChartDataController.getAllDengue);
router.get("/Dengue:id", ChartDataController.getByIdDengue);

router.get("/Zika", ChartDataController.getAllZika);
router.get("/Zika:id", ChartDataController.getByIdZika);

router.get("/Chikun", ChartDataController.getAllChikun);
router.get("/Chikun:id", ChartDataController.getByIdChikun);

router.get("/Dados", ChartDataController.getAllDados);
router.get("/Dados:id", ChartDataController.getByIdDados);

export default router;
