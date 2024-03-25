import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//import routes
import symptomsRoutes from "./routes/symptoms.route.js";

//use routes
app.use("/api/v1/symptoms", symptomsRoutes);

export { app };
