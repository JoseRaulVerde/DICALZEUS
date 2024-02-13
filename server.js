const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://joseraulverde:rveZekIllliVrgkP@cluster0.n9lwnqb.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión a la base de datos establecida correctamente');
})
.catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});
