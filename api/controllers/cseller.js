import Seller from '../models/seller.js';

export const createSeller = async (req, res, next) => {
  const { seller, item } = req.body;
  const newSeller = new Seller({ seller, item });

  try {
    const savedSeller = await newSeller.save();
    res.status(200).json(savedSeller);
  } catch (error) {
    next(error);
  }
};

export const editSeller = async (req, res, next) => {
  try {
    const updatedSeller = await Seller.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSeller);
  } catch (error) {
    next(error);
  }
};

export const deleteSeller = async (req, res, next) => {
  try {
    await Seller.findByIdAndDelete(req.params.id);
    res.status(200).json('Seller deleted');
  } catch (error) {
    next(error);
  }
};

export const get1Seller = async (req, res, next) => {
  try {
    const Seller = await Seller.findById(req.params.id);
    res.status(200).json(Seller);
  } catch (error) {
    next(error);
  }
};

export const getAllSellers = async (req, res, next) => {
  try {
    const Sellers = await Seller.find();
    res.status(200).json(Sellers);
  } catch (error) {
    next(error);
  }
};
