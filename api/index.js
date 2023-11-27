import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sellerRoute from "./routes/sell.js"
import cors from "cors";
import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import serveStatic from 'serve-static';
dotenv.config();

const app = express();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.use(express.json());

app.use(cors());
app.use(express.static('uploads'));

// // Get the current module's file path
// const __filename = fileURLToPath(import.meta.url);
// // Get the directory name of the current module
// const __dirname = dirname(__filename);

// // In your backend index.js or similar file
// app.use('/api/uploads', express.static(path.join(__dirname, 'api/uploads')));

// // Serve static files
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// app.use('/api/uploads', serveStatic(path.join(__dirname, 'api', 'uploads')));

app.use("/api",sellerRoute);

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "something went wrong"
    return res.status(errorStatus).json(errorMessage);
})



app.listen(3001, () => {
  connect();
  console.log(`Server is running on port 3001`);
});
