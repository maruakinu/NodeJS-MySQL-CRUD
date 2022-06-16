const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const postsRoute = require('./routes/posts');
const adminRoute = require('./routes/admin');

//Middleware that responsible for user request
app.use(bodyParser.json());

app.use('/posts', postsRoute);
app.use('/admin', adminRoute);


module.exports = app