
const express = require('express');

require('./mongoose/config');
const products = require('./mongoose/products');

const app = express();
app.use(express.json());
app.post('/post', async (req, resp) => {
  try {
    let data = new products(req.body);
    let result = await data.save();
    // console.log(result);
    console.log(resp.send(result));
  } catch (error) {
    console.log(error);
  }
});
app.get('/list', async (req, resp) => {
  try {
    let data = await products.find();
    resp.send(data);
    // console.log(result);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/delete/:name', async (req, resp) => {
  try {
    console.log(req.parms);
    let data = await products.deleteOne(req.parms);
    console.log(resp.send('done'));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

app.put('/update/:name', async (req, resp) => {
  try {
    console.log(req.parms);
    let data = await products.updateOne(req.parms);
    console.log(resp.send('done'));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000);
