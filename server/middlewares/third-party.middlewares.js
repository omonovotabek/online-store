const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload')


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}))

module.exports = app;