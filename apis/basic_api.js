const express = require('express');
const db_connection = require('../mongo db/db_connection');
const app = express();
const mongo = require('mongodb');

app.use(express.json());
app.get('/', async (req, res) => {
  let db = await db_connection();
  let data = await db.find().toArray();
  res.send(data);
});

app.post('/', async (req, res) => {
  let db = await db_connection();
  console.log(req.body);
  await db.insertOne(req.body);
  res.send('Data inserted successfully');
});

app.delete('/:id', async (req, res) => {
  try {
    const db = await db_connection();
    const id = req.params.id;
console.log(id)
    if (!mongo.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid ID format');
    }

    const result = await db.deleteOne({ _id: new mongo.ObjectId(id) });

    if (result.deletedCount === 1) {
      res.status(200).send('Data deleted successfully');
    } else {
      res.status(404).send('Data not found');
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('An error occurred while deleting the data');
  }
});
app.put('/:name', async (req, res) => {
  let db = await db_connection();
  console.log(req.params.name);
  console.log(req.body.name);

  await db.updateOne({ name: req.params.name }, { $set: req.body });
  //   await db.updateOne({ name: 'Nokia 3310' }, { $set: req.body });
  res.send('Data updated successfully');
});
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
