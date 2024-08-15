const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('estoque.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS alimentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    quantidade INTEGER DEFAULT 0,
    peguei INTEGER DEFAULT 0,
    valor_unitario REAL DEFAULT 0,
    valor_atual REAL DEFAULT 0
  )`);
});

db.close();
