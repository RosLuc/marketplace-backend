const BankAccount = require('../model/BankAccount');
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

      const bankAccount = await BankAccount.create({
        user_id,
        ...data
      });

      return res.json(bankAccount);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    const data = req.body;
    const { account_id } = req.params;
    try {
      const bankAccount = await BankAccount.findByPk(account_id);

      if (!bankAccount) return res.status(404).json({ error: "Bank account not found" });

      await bankAccount.update(data);

      return res.json(bankAccount);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async view(req, res) {
    const { account_id } = req.params;
    try {
      const bankAccount = await BankAccount.findByPk(account_id);

      if (!bankAccount) return res.status(404).json({ error: "Bank account not found" });

      return res.json(bankAccount);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { account_id } = req.params;
    try {
      const bankAccount = await BankAccount.findByPk(account_id);

      if (!bankAccount) return res.status(404).json({ error: "Bank account not found" });

      await bankAccount.destroy();

      return res.json({});
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async list(req, res) {
    const { user_id } = req.params

    try {
      const bankAccounts = await BankAccount.findAll({
        where: {
          user_id
        }
      });

      return res.json(bankAccounts);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
