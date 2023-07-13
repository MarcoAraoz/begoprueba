/* The code you provided is a JavaScript module that sets up routes for a web application using the
Express framework. */

import { Router } from "express";
import {
  getRoute,
  getRoutes,
  createRoute,
  updateRoute,
  deleteRoute
} from "../controllers/routes.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { createOrderSchema } from "../schemas/order.schema.js";

const router = Router();

router.get("/routes", auth, getRoutes);
router.get("/routes/:id", auth, getRoute);
router.post("/routes", auth, createRoute);
router.put("/routes/:id", auth, updateRoute);
router.delete("/routes/:id", auth, deleteRoute);

export default router;
