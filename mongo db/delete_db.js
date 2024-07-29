const dbConnection = require('./db_connection');

const deletedb = async () => {
  const db = await dbConnection();
  const deletedata = await db.deleteMany([
    { name: 'oppo a10' },
    { name: 'iphone 10' },
  ]);
  // const deletedata = await db.deleteOne({ name: 'iphone 11' });
  console.log(deletedata);
};
deletedb();
