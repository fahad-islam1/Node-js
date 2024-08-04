// const dbConnection = require('./mongo db/db_connection');

// dbConnection().then(res => {
//   console.log('Connected to MongoDB');
//   res
//     .find({ name: 'oppo a10' })
//     .toArray()
//     .then(data => {
//       console.log(data);
//     });
// });

// console.warn(dbConnection());

// second method

// const main = async () => {
//   try {
//     const db = await dbConnection();
//     const data = await db.find({}).toArray();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// main();

// mongoose

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

app.delete('/delete/:_id', async (req, resp) => {
  try {
    console.log(req.params);
    let data = await products.deleteOne(req.params);
    console.log(resp.send(`done ${req.params}`));
    console.log(data);
  } catch (error) {
    console.log('error');
  }
});

app.put('/update/:_id', async (req, resp) => {
  try {
    console.log(req.params.body);
    let data = await products.updateOne(
      {
        name: req.params.name,
      },
      {
        $set: {
          price: resp.body,
        },
      },
    );
    resp.send(data);
    resp.send(`done ${req.params}`);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(5000);
