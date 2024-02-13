const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_CONNECTION_STRING  , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión a la base de datos establecida correctamente');
})
.catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});
