// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'db', // así se llama el servicio de base de datos en Docker
  user: 'root',
  password: 'root',
  database: 'test'
});

db.connect(err => {
  if (err) console.error('❌ Error al conectar DB:', err);
  else console.log('✅ Conectado a la BD');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS now', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ time: results[0].now });
  });
});

app.listen(3000, () => console.log('🟢 Servidor corriendo en puerto 3000'));
