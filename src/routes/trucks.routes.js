import { Router } from "express";
import {
  getTruck,
  getTrucks,
  createTruck,
  updateTruck,
} from "../controllers/trucks.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { createOrderSchema } from "../schemas/order.schema.js";

const router = Router();

router.get("/trucks", auth, getTrucks);
router.get("/trucks/:id", auth, getTruck);
router.post("/trucks", auth, createTruck);
router.put("/trucks/:id", auth, updateTruck);

export default router;
