const express = require('express');
const data = require('./data');
const path = require('path');
const app = express();

// send html data
// app.get('', (req, res) => {
//   console.log('this is my request >>>', req.query);

//   res.send(`
//     <h1>Welcome to my home page</h1>

//     <h6>Enter Your name </h>
//      <br>
//     <input type="text" name="name" id="name" placeholder="Enter your name" value =${req.query.name} />
//      <br>
//     <a href="/about">Go to About</a>
//     <br>
//     <a href="/settings">Go to Settings</a>

//     `);
// });

// // send json data
// app.get('/about', (req, res) => {
//   res.send(data);
// });
// app.get('/settings', (req, res) => {
//   res.send('this is settings page');
// });

// // error
// app.get('*', (req, res) => {
//   res.send('404! This is an invalid URL.');
// });
const filepath = path.join(__dirname, 'public');
// console.log(filepath);

// when we use app.use  we use extenion in url , so this is not good appproach
// app.use(express.static(filepath));

app.get('/', (req, res) => {
  res.sendFile(`${filepath}/index.html`);
});
app.get('/about', (req, res) => {
  res.sendFile(`${filepath}/about_us.html`);
});

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
  const user = { name: 'Fahad islam', age: 22 };
  res.render('profile', { user });
});

// server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
