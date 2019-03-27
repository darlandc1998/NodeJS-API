const expres = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando o app
const app = expres();

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true});

requireDir('./src/models');

//Primeira rota
app.use('/api', require('./src/routes'));



app.listen(3001);