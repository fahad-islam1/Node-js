const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/';
const database = 'ecommerce';

const fullUrl = url + database;
const addtoDb = async () => {
  const connection = mongoose.connect(fullUrl);
  console.log('connected');
  const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
  });
  const productsModel = mongoose.model('products', productsSchema);
  let data = new productsModel({
    name: ' ultra pro ',
    brand: 'pro brand',
    price: 333,
  });
  let result = await data.save();
  console.log(result);
};
// addtoDb();
const updatetoDb = async () => {
  const connection = mongoose.connect(fullUrl);
  console.log('connected');
  const productsSchema = new mongoose.Schema({
    name: String,
  });
  const productsModel = mongoose.model('products', productsSchema);
  let result = await productsModel.updateOne(
    { name: ' pro ' },
    { $set: { name: 'pro updated' } },
  );
  console.log(result);
};
// updatetoDb();

const deletetoDb = async () => {
  const connection = mongoose.connect(fullUrl);
  console.log('connected');
  const productsSchema = new mongoose.Schema({
    name: String,
  });
  const productsModel = mongoose.model('products', productsSchema);

  let result = await productsModel.deleteOne({
    name: ' ultra pro',
  });
  console.log(result);
};
// deletetoDb();

const findDb = async () => {
    const connection = mongoose.connect(fullUrl);
    console.log('connected');
    const productsSchema = new mongoose.Schema({
      price: Number,
    });
    const productsModel = mongoose.model('products', productsSchema);
  
    let result = await productsModel.find({
        price:333
    })
    console.log(result);
  };
findDb()
