import mongoose from 'mongoose';
const {Schema} = mongoose;

const sellerSchema = new mongoose.Schema({
  seller: {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    department: { type: String, required: true },
    yearOfStudy: { type: Number, required: true },
  },
  item: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
});


export default mongoose.model("Seller",sellerSchema)