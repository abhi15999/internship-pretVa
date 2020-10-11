const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: {
    type: String,
  },
  product_name: {
    type: String,
  },
  lead_time: {
    type: String,
  },
  weight_gsm: {
    type: String,
  },
  quantity: {
    type: String,
  },
  price_rs: {
    type: String,
  },
  buyer_name: {
    type: String,
  },
  // product_name:String
},{strict:false});

module.exports = mongoose.model("Product", ProductSchema, "data");
