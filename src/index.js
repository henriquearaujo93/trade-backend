const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

var porta = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://henrique:hdsan1993@cluster0-1auso.mongodb.net/trade?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(express.json());
app.use(routes);

app.listen(porta);