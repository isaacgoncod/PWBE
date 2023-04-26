const conn = require('../database/conn');

class CategoryRepository {
  async findAll() {
    const rows = await conn.query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async create({ name }) {
    const [row] = await conn.query(
      'INSERT INTO categories(name) VALUES($1) RETURNING *',
      [name]
    );

    return row;
  }
}

module.exports = new CategoryRepository();
