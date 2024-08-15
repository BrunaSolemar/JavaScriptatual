const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(express.json());

const db = new sqlite3.Database('estoque.db');

// Endpoint para obter todos os alimentos
app.get('/alimentos', (req, res) => {
  db.all('SELECT * FROM alimentos', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// Endpoint para atualizar um alimento
app.put('/alimentos/:id', (req, res) => {
  const { quantidade, peguei, valor_unitario, valor_atual } = req.body;
  db.run(`UPDATE alimentos SET quantidade = ?, peguei = ?, valor_unitario = ?, valor_atual = ? WHERE id = ?`,
    [quantidade, peguei, valor_unitario, valor_atual, req.params.id], function(err) {
      if (err) {
        return console.error(err.message);
      }
      res.json({ changes: this.changes });
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
