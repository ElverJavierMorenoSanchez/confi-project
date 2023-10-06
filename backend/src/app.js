import express from "express";
import bodyParcer from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import availability from "./routes/general/availability.routes";
import category from "./routes/general/category.routes";
import subcategory from "./routes/general/subcategory.routes";
import state from "./routes/general/state.routes";
import supervisor from "./routes/printer/supervisor.routes";
import place from "./routes/printer/place.routes";
import printer from "./routes/printer/printer.routes";
import certificate from "./routes/printer/certificate.routes";
import image from "./routes/printer/image.routes";
import department from "./routes/computer/department.routes";
import brand from "./routes/general/brand.routes";
import model from "./routes/general/model.routes";
import operatingSystem from "./routes/computer/operatingSystem.routes";
import proccesor from "./routes/computer/proccesor.routes";
import ram from "./routes/computer/ram.routes";
import storage from "./routes/computer/storage.routes";
import computer from "./routes/computer/computer.routes";
import office from "./routes/computer/office.routes";
import computerCertificate from "./routes/computer/certificate.routes";
import computerImage from "./routes/computer/image.routes";

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
app.use("/api/general/availability", availability);
app.use("/api/general/category", category);
app.use("/api/general/subcategory", subcategory);
app.use("/api/general/state", state);
app.use("/api/general/model", model);
app.use("/api/general/brand", brand);
// PRINTER //
app.use("/api/printer/supervisor", supervisor);
app.use("/api/printer/place", place);
app.use("/api/printer/certificate", certificate);
app.use("/api/printer/image", image);
app.use("/api/printer", printer);
// COMPUTER //
app.use("/api/computer/department", department);
app.use("/api/computer/operatingSystem", operatingSystem);
app.use("/api/computer/proccesor", proccesor);
app.use("/api/computer/ram", ram);
app.use("/api/computer/storage", storage);
app.use("/api/computer/office", office);
app.use("/api/computer/certificate", computerCertificate);
app.use("/api/computer/image", computerImage);
app.use("/api/computer", computer);

export default app;
