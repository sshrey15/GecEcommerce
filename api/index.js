import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sellerRoute from "./routes/sell.js"
import cors from "cors";
import multer from "multer";
import Seller from "./models/seller.js";
import path from "path";
import serveStatic from "serve-static";
import { createUploadthing} from "uploadthing/express";

dotenv.config();

const app = express();




const f = createUploadthing();

const uploadRouter = {
  sellerImages: f({
    image: {
      maxFileSize: "4MB", // Adjust limits as needed
      maxFileCount: 4,
      // Potentially add allowedMediaTypes for image types
    },
  }).onUploadComplete(async (data) => {
    const imageUrls = data.files.map((file) => file.secure_url);
    const sellerData = JSON.parse(req.body.seller);
    const itemData = JSON.parse(req.body.item);
    const seller = new Seller({
      seller: sellerData,
      item: itemData,
      images: imageUrls,
    });
    try {
      await seller.save();
      res.status(200).json({ message: 'Image uploaded and data saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }),
} 


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

app.post("/api/upload", cors(), createUploadthing({ router: uploadRouter }), async (req, res) => {
  // No need for logic here, as it's handled in uploadRouter's onUploadComplete
});


app.use(express.json());
app.use(cors());

app.use('/uploads',express.static('uploads'));

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use('/api/uploads', serveStatic(path.join(__dirname, 'api', 'uploads')));

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