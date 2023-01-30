import sqlite3 from 'sqlite3';

const database = new sqlite3.Database('db.sqlite', () => {
  database.run(
    `CREATE TABLE IF NOT EXISTS user
     (
       id       INTEGER PRIMARY KEY AUTOINCREMENT,
       name     TEXT,
       email    TEXT UNIQUE,
       CONSTRAINT email_unique UNIQUE (email)
     )`,
  );
});

export default database;
