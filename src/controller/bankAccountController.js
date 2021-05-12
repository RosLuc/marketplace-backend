const BankAccount = require('../model/BankAccount');
const Company = require('../model/Company');

module.exports = {

  async create(req, res) {
    const data = req.body;
    const { company_id } = data;
    
    try {
      const company = await Company.findByPk(company_id, {
        attributes: {
          exclude: ['password']
        }
      });

      if (!company) return res.status(404).json({ error: "Company not found" });

      const bankAccount = await BankAccount.create({
        company_id,
        ...data
      });

      return res.json(bankAccount);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.message,
      });
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
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async view(req, res) {
    const { account_id } = req.params;
    try {
      const bankAccount = await BankAccount.findByPk(account_id);

      if (!bankAccount) return res.status(404).json({ error: "Bank account not found" });

      return res.json(bankAccount);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
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
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async list(req, res) {
    const { company_id } = req.params

    try {
      const bankAccounts = await BankAccount.findAll({
        where: {
          company_id
        }
      });

      return res.json(bankAccounts);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}
