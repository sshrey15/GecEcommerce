import express from 'express';
import {
  createSeller,
  editSeller,
  deleteSeller,
  get1Seller,
  getAllSellers,
} from '../controllers/cseller.js';

const router = express.Router();

// Create a new CSeller
router.post('/sellers', createSeller);

// Get all CSellers
router.get('/sellers', getAllSellers);

// Get a specific CSeller by ID
router.get('/sellers/:id', get1Seller);

// Update a specific CSeller by ID
router.put('/sellers/:id', editSeller);

// Delete a specific CSeller by ID
router.delete('/sellers/:id', deleteSeller);

export default router;
