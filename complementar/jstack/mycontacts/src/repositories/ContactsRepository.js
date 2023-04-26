const conn = require('../database/conn');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await conn.query(
      `SELECT contacts.*, categories.name AS category_name FROM contacts LEFT JOIN categories ON categories.id = contacts.categoryId ORDER BY contacts.name ${direction}`
    );

    return rows;
  }

  async findById(id) {
    const row = await conn.query(
      'SELECT contacts.*, categories.name AS category_name FROM contacts LEFT JOIN categories ON categories.id = contacts.categoryId WHERE contacts.id = $1',
      [id]
    );

    return row;
  }

  async findByEmail(email) {
    const [row] = await conn.query('SELECT * FROM contacts WHERE email = $1', [
      [email],
    ]);

    return row;
  }

  async create({ name, email, phone, categoryId }) {
    const [row] = await conn.query(
      'INSERT INTO contacts(name, email, phone, categoryId) VALUES($1, $2, $3, $4) RETURNING *',
      [name, email, phone, categoryId]
    );

    return row;
  }

  async update(id, { name, email, phone, categoryId }) {
    const [row] = await conn.query(
      'UPDATE contacts SET name = $1, email = $2, phone = $3, categoryId = $4 WHERE id = $5 RETURNING *',
      [name, email, phone, categoryId, id]
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await conn.query('DELETE FROM contacts WHERE id = $1', [
      id,
    ]);

    return deleteOp;
  }
}

module.exports = new ContactsRepository();
