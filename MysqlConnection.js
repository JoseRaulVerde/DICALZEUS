const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const { MySQL_CONNECTION_HOST, MySQL_CONNECTION_USER, MySQL_CONNECTION_DATABASE } = process.env;

const connection = mysql.createConnection({
  host: MySQL_CONNECTION_HOST,
  user: MySQL_CONNECTION_USER,
  password: '',
  database: MySQL_CONNECTION_DATABASE
});

app.get('/carers', (req, res) => {
  connection.query('SELECT * FROM petsitter.petsitter', (error, results, fields) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
      return;
    }
    console.log('Resultados de la consulta:', results);
    res.json(results); 
  });
});

app.get('/city', (req, res) => {
  connection.query('SELECT * FROM petsitter.city', (error, results, fields) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
      return;
    }
    console.log('Resultados de la consulta:', results);
    res.json(results); 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
