import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import dashboardRoute from "./routes/dashboardRoute";

// route imports
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));

// config

// route
app.use("/dashboard", dashboardRoute)

// server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Listening on port 🚀', port);
})