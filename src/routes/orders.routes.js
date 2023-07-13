import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../controllers/orders.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createOrderSchema } from "../schemas/order.schema.js";

const router = Router();

router.get("/orders", auth, getOrders);
router.get("/orders/:id", auth, getOrder);
router.post("/orders", auth, validateSchema(createOrderSchema), createOrder);
router.put("/orders/:id", auth, updateOrder);
router.delete("/orders/:id", auth, deleteOrder);

export default router;
