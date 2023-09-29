import express from "express";
import bodyParcer from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import availability from "./routes/general/availability.routes";
import category from "./routes/general/category.routes";
import state from "./routes/general/state.routes";

// CONFIG SERVER //
const app = express();

// CONFIGURATIONS MIDDLEWARES //
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParcer.json({ limit: "30mb", extended: true }));
app.use(bodyParcer.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// CONFIGURATIONS ROUTES //
app.use("/api/availability", availability);
app.use("/api/category", category);
app.use("/api/state", state);

export default app;
