import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import sellerRoute from "./routes/sell.js"
import cors from "cors";
import multer from "multer";
import Seller from "./models/seller.js";
import path from "path";
import serveStatic from "serve-static";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the folder to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/api/upload', cors(), upload.array('images'), async (req, res) => {
  

  try {
    // Parse the seller and item data
    const sellerData = JSON.parse(req.body.seller);
    const itemData = JSON.parse(req.body.item);

    // Create a new seller document
    const seller = new Seller({
      seller: sellerData,
      item: itemData,
      images: req.files.map(file => file.path), 
    });

    // Save the seller document
    await seller.save();

    res.status(200).json({ message: 'Image uploaded and data saved successfully' });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.get('/',(req,res)=>{
  res.send("hello");
})


// app.use('/api/uploads', express.static(path.join(__dirname, 'api', 'uploads')));



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

app.use('/uploads',express.static('uploads', {maxAge: 86400000}));

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use('/api/uploads', serveStatic(path.join(__dirname, 'api', 'uploads'), {maxAge: 86400000}));

app.use("/api",sellerRoute);

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "something went wrong"
    return res.status(errorStatus).json(errorMessage);
})


app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port 3001`);
});