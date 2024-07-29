const dbConnection = require('./mongo db/db_connection');

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

const main = async () => {
  try {
    const db = await dbConnection();
    const data = await db.find({}).toArray();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
main();
