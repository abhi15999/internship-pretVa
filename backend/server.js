const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const Product = require("./models/product");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");




const url = "mongodb://localhost:27017/pretVa";
const connect = mongoose.connect(
  url,
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to Db");
    }
  }
);

/* Middleware */
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
app.use(cors());



//Routes
app.get("/", async (req, res) => {
  try {
    await Product.find({}).then((data) => res.json(data));
  } catch (err) {
    res.json({ message: err });
  }
});





app.post("/name",async (req,res) =>{
  try{
    const details = {
      buyer_name:req.body.name
    }

    Product.find(details).lean().then((data) => res.json(data));
  } catch(err){
    console.log(err)
  }
})

app.post("/filterss",async (req,res)=>{
  try{
  let filters = req.body.filters;
  let query = [];

   filters.forEach((filter)=>{
    //  console.log(filter.key)
    if(filter.key === 'Product')
    {
      query.push({'product_name':filter.value || ''});
    }
    if(filter.key === 'Quantity')
    {
      query.push({'quantity':filter.value});
    }
    if(filter.key === 'Lead Time'){
      query.push({'lead_time':filter.value});
    }
    if(filter.key === 'Cost')
    {
      query.push({'price_rs':filter.value});
    }
    if(filter.key === 'Weight')
    {
      query.push({'weight_gsm':filter.value});
    }
  });

 await Product.find({$and:query}).lean()
  .then((data)=>{
    res.send(data);
  })}catch(err){
    console.log(err);
  }

})


app.get("/product",async (req,res)=>{
  try{
    Product.find(filters).lean()
    .then((data)=>{
      res.send(data)
    })
  }catch(err){
    console.log(err)
  }
})

app.listen(port);
