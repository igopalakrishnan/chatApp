import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use((req, res, next) => {
  console.log("Request Origin:", req.headers.origin);
  next();
});

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url, "Cookies:", req.cookies);
  next();
});


//home
app.get("/", (req, res) => {
  res.send("<h1>Chat-App Application</h1>")
})
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});
