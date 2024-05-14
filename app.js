import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"

// routes
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("server is running  ");
});
