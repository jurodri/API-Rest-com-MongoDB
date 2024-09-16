import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  ingredients: String,
  /*sushi: String,
  yakisoba: String,
  temaki: String,
  hotroll: String,
  sukiyagi: String,
  Udon: String,
  Tempura: String*/
});

const foodSchema = new mongoose.Schema({
  name: String,
  price: String,
  type: String,
  descriptions: [descriptionSchema],
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
