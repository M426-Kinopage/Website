const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'm426projekt' 
});


app.get('/api/filme', (req, res) => {
  connection.query('SELECT * FROM filme', (err, results) => {
    if (err) {
      console.error('Fehler bei der Abfrage der Daten:', err);
      res.status(500).json({ error: 'Interner Serverfehler' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/geschenkkarten', (req, res) => {

    connection.query('SELECT * FROM geschenkkarten', (err, results) => {
      if (err) {
        console.error('Fehler bei der Abfrage der Daten:', err);
        res.status(500).json({ error: 'Interner Serverfehler' });
        return;
      }
      res.json(results);
    });
  });


app.get('/api/kinosaele', (req, res) => {

    connection.query('SELECT * FROM kinosaele', (err, results) => {
      if (err) {
        console.error('Fehler bei der Abfrage der Daten:', err);
        res.status(500).json({ error: 'Interner Serverfehler' });
        return;
      }
      res.json(results);
    });
  });

app.get('/api/partner', (req, res) => {

    connection.query('SELECT * FROM partner', (err, results) => {
      if (err) {
        console.error('Fehler bei der Abfrage der Daten:', err);
        res.status(500).json({ error: 'Interner Serverfehler' });
        return;
      }
      res.json(results);
    });
  });

app.get('/api/raeume', (req, res) => {

    connection.query('SELECT * FROM raeume', (err, results) => {
      if (err) {
        console.error('Fehler bei der Abfrage der Daten:', err);
        res.status(500).json({ error: 'Interner Serverfehler' });
        return;
      }
      res.json(results);
    });
  });


app.listen(port, () => {
  console.log(`API-Server läuft auf http://localhost:${port}`);
});