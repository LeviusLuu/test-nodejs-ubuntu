import express from "express";
import dotenv from "dotenv";
import path from "path";
// import passport from "passport";

// import { AppDataSource } from "./data-source.js";
// import { configurePassport } from "./configs/passport.js";

import appRoutes from "./routes/app.route.js";
// import authRoutes from "./auth/auth.route.js";

// Trước khi gọi dotenv.config(), in ra giá trị của NODE_ENV để kiểm tra
console.log('Before dotenv:', process.env.NODE_ENV);


const envPath = path.resolve(process.cwd(), process.env.NODE_ENV === "production" ? ".env.production" : ".env.development");
console.log('Loading .env file from:', envPath);  // In ra đường dẫn tệp .env để kiểm tra


dotenv.config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
  ),
});

// Sau khi gọi dotenv, kiểm tra lại giá trị của NODE_ENV
const NODE_ENV = process.env.NODE_ENV || "development";
console.log('After dotenv:', NODE_ENV);  // Kiểm tra lại NODE_ENV sau khi dotenv đã được gọi

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`App is running in ${NODE_ENV} mode!`);
});

app.use("/api", appRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode.`);
});

// AppDataSource.initialize()
//   .then(() => {
//     console.log("✅ Connected to DB successfully");

//     // configurePassport(passport);

//     // app.use("/auth", authRoutes);
//     app.use("/api", appRoutes);

//     const PORT = process.env.PORT || 5000;

//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode.`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Error connect to DB:", err);
//   });
