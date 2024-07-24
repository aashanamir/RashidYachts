import express from "express";
import { config } from "dotenv";
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Initialize express
const app = express();

// Dotenv Configuration
config({
  path: "./config/.env"
});

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204,
};

// Connect to Database
connectDb();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Serve static files from the React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'build')));

// Routes
import Users from "./router/userRouter.js";
import DownloadBrochure from "./router/downloadBrochureRoute.js";
import callBack from "./router/callBackRoute.js";

app.use("/api/v1/user", Users);
app.use("/api/v1/download", DownloadBrochure);
app.use("/api/v1/callback", callBack);

// Catch-all handler to serve the React app for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

export default app;
