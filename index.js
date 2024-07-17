const express = require('express');
const path = require('path');

const app = express();

const reqfilter = (req, resp, next) => {
  console.log('reqfilter');
  if (!req.query.age) {
    resp.send('Please Enter Your age');
  } else if (req.query.age < 18) {
    resp.send('You are not eliegble for this website ....You are under 18                  ');
  } else {
    next();
  }
};
app.use(reqfilter);
app.get('', (req, resp) => {
  resp.send('Welcome to home page');
  console.log('fahds');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
