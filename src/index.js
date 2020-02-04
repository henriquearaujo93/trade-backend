const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

var porta = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://henrique:hdsan1993@cluster0-1auso.mongodb.net/trade?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(porta);