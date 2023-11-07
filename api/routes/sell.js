import express from 'express';
import multer from 'multer';
import {
  createSeller,
  editSeller,
  deleteSeller,
  get1Seller,
  getAllSellers,
} from '../controllers/cseller.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the folder to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Create a new CSeller
router.post('/sellers', upload.array('images', 5), createSeller);

// Get all CSellers
router.get('/sellers', getAllSellers);

// Get a specific CSeller by ID
router.get('/sellers/:id', get1Seller);

// Update a specific CSeller by ID
router.put('/sellers/:id', editSeller);

// Delete a specific CSeller by ID
router.delete('/sellers/:id', deleteSeller);

export default router;
