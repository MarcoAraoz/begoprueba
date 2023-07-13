import express from "express";
// import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/orders.routes.js";
import pointsRoutes from "./routes/points.routes.js";
import trucksRoutes from "./routes/trucks.routes.js";
import routesRoutes from "./routes/routes.routes.js";
import { FRONTEND_URL } from "./config.js";
// 
const app = express();

// app.use(
//   cors({
//     credentials: true,
//     origin: FRONTEND_URL,
//   })
// );
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", orderRoutes);
app.use("/api", pointsRoutes);
app.use("/api", trucksRoutes);
app.use("/api", routesRoutes);


// if (process.env.NODE_ENV === "production") {
//   const path = await import("path");
//   app.use(express.static("client/dist"));

//   app.get("*", (req, res) => {
//     console.log(path.resolve("client", "dist", "index.html") );
//     res.sendFile(path.resolve("client", "dist", "index.html"));
//   });
// }

export default app;
