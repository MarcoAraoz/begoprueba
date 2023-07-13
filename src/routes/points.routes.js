import { Router } from "express";
import {
  createPoint,
  deletePoint,
  getPoint,
  getPoints,
  updatePoint,
} from "../controllers/points.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { createOrderSchema } from "../schemas/order.schema.js";

const router = Router();

router.get("/points", auth, getPoints);
router.get("/points/:id", auth,getPoint);
router.post("/points", auth, createPoint);
router.put("/points/:id", auth, updatePoint);
router.delete("/points/:id", auth, deletePoint);

export default router;
