const Address = require('../model/Address');
const Users = require('../model/Users');
const Company = require("../model/Company");

module.exports = {

  async create(req, res) {
    const data = req.body;
    const { user_id, company_id } = data;

    try {
      if(user_id && company_id) return res.status(400).json({ error: "company_id and user_id informed" });
      else if(user_id) { 
        const user = await Users.findByPk(user_id, {
          attributes: {
            exclude: ['password']
          }
        });
  
        if (!user) return res.status(404).json({ error: "User not found" });
      } else if(company_id) {
        const company = await Company.findByPk(company_id, {
          attributes: {
            exclude: ['password']
          }
        });
  
        if (!company) return res.status(404).json({ error: "Company not found" });
      } else return res.status(400).json({ error: "company_id or user_id not informed" });

      const address = await Address.create({
        user_id: user_id || undefined,
        company_id: company_id || undefined,
        ...data
      });

      return res.json(address);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async update(req, res) {
    const data = req.body;
    const { address_id } = req.params;
    try {
      const address = await Address.findByPk(address_id);

      if (!address) return res.status(404).json({ error: "Address not found" });

      await address.update(data);

      return res.json(address);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async view(req, res) {
    const { address_id } = req.params;
    try {
      const address = await Address.findByPk(address_id);

      if (!address) return res.status(404).json({ error: "Address not found" });

      return res.json(address);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async delete(req, res) {
    const { address_id } = req.params;
    try {
      const address = await Address.findByPk(address_id);

      if (!address) return res.status(404).json({ error: "Address not found" });

      await address.destroy();

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
      const address = await Address.findAll({
        where: {
          user_id
        }
      });

      return res.json(address);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}