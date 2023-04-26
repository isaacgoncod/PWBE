const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;

    const contacts = await ContactRepository.findAll(orderBy);

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const { name, email, phone, categoryId } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return res.status(404).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      categoryId,
    });

    res.status(201).json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, categoryId } = req.body;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(404).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      categoryId,
    });

    res.status(202).json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;

    await ContactRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new ContactController();
