const express = require('express');
const path = require('path');
const reqfilter = require('./midleware');
const app = express();
const routes = express.Router();
// app.use(reqfilter);
routes.use(reqfilter);

routes.get('/', (req, resp) => {
  resp.send('Welcome to home page');
  console.log('fahds');
});
routes.get('/about', (req, resp) => {
  resp.send('Welcome to about page');
  console.log('fahds');
});
app.get('/settings', (req, resp) => {
  resp.send('Welcome to settings page');
  console.log('fahds');
});  
app.use('/', routes);
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
 