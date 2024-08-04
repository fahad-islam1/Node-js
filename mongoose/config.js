const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';
const database = 'ecommerce';

const fullUrl = url + database;
mongoose.connect(fullUrl);
