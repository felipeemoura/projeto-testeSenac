const express = require('express');
const app = express();

const index = require('./routes/index');
const livros = require('./require/livrosRoutes');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada');

    next()

})

app.use('/', index);
app.use('/livros', livros);

module.exports = app;