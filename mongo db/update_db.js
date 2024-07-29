const dbConnection = require('./db_connection');

const updatedb = async () => {
  const db = await dbConnection();
  const updatedata = await db.updateOne(
    {
      name: 'vivo y20',
    },
    {
      brand: 'iphone',
    },
    );
    console.log(updatedata);
};
updatedb();