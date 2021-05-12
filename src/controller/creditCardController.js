const CreditCard = require('../model/CreditCard');
const Users = require('../model/Users');

module.exports = {

  async create(req, res) {
    const data = req.body;
    const { user_id } = data;
    
    try {
      const user = await Users.findByPk(user_id, {
        attributes: {
          exclude: ['password']
        }
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      const creditCard = await CreditCard.create({
        user_id,
        ...data
      });

      return res.json(creditCard);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async update(req, res) {
    const data = req.body;
    const { card_id } = req.params;
    try {
      const creditCard = await CreditCard.findByPk(card_id);

      if (!creditCard) return res.status(404).json({ error: "Credit card not found" });

      await creditCard.update(data);

      return res.json(creditCard);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async view(req, res) {
    const { card_id } = req.params;
    try {
      const creditCard = await CreditCard.findByPk(card_id);

      if (!creditCard) return res.status(404).json({ error: "Credit card not found" });

      return res.json(creditCard);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async delete(req, res) {
    const { card_id } = req.params;
    try {
      const creditCard = await CreditCard.findByPk(card_id);

      if (!creditCard) return res.status(404).json({ error: "Credit card not found" });

      await creditCard.destroy();

      return res.json({});
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async list(req, res) {
    const { user_id } = req.params

    try {
      const creditCards = await CreditCard.findAll({
        where: {
          user_id
        }
      });

      return res.json(creditCards);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
