import mongoose from 'mongoose';

const jerseySchema = new mongoose.Schema({
  name: String,
  club: String,
  year: String,
  price: Number,
  image: String,
});

const Jersey = mongoose.model('Jersey', jerseySchema);
export default Jersey;
