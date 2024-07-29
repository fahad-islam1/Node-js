const dbConnection = require('./db_connection');

const insertdb = async () => {
  let result = await dbConnection();
  if (result) {
      let data = await result.insertMany([
        {
            name: 'iphone 11',
            brand: 'iphone',
            price: 500000,
          },
          {
            name: 'iphone 12',
            brand: 'iphone',
            price: 500000,
          }
    ]);

    console.log('Data inserted successfully');
  } else {
    console.log('Failed to insert data');
  }
};

insertdb();