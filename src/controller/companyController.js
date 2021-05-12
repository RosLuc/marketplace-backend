const Company = require("../model/Company");
const Users = require("../model/Users");
const { cnpj: cnpjValidator } = require("cpf-cnpj-validator");
const { Op } = require("sequelize");

async function verifyEmailAlredyExist(email, props = {}) {
  const company = await Company.findOne({
    where: {
      email,
      ...props,
    },
  });

  if (company) throw new Error("Email alredy exist");

  const user = await Users.findOne({
    where: {
      email,
      ...props,
    },
  });

  if (user) throw new Error("Email alredy exist");
}

async function cnpjIsValid(cnpj, props) {
  if (!cnpjValidator.isValid(cnpj)) throw new Error("CPF is Invalid");

  const company = await Company.findOne({
    where: {
      cnpj,
      ...props,
    },
  });

  if (user) throw new Error("cpf alredy exist");
}

module.exports = {
  async create(req, res) {
    const data = req.body;
    try {
      await verifyEmailAlredyExist(data.email);
      await cnpjIsValid(data.cnpj);

      const user = await Company.create(data);
      user.password = undefined;

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    const data = req.body;
    const { user_id } = req.params;
    try {
      const user = await Company.findByPk(user_id);

      if (!user) return res.status(404).json({ error: "User not found" });

      if (data.email)
        await verifyEmailAlredyExist(data.email, { id: { [Op.not]: user_id } });
      if (data.cpf) await cpfIsValid(data.cpf, { cpf: { [Op.not]: data.cpf } });

      await user.update(data);

      user.password = undefined;

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async view(req, res) {
    const { user_id } = req.params;
    try {
      const user = await Company.findByPk(user_id, {
        attributes: {
          exclude: ["password"],
        },
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const { user_id } = req.params;
    try {
      const user = await Company.findByPk(user_id, {
        attributes: {
          exclude: ["password"],
        },
      });

      if (!user) return res.status(404).json({ error: "User not found" });

      await user.destroy();

      return res.json({});
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async list(req, res) {
    try {
      const users = await Company.findAll({
        attributes: {
          exclude: ["password"],
        },
        include: [{ association: "Addresses" }, { association: "CreditCards" }],
      });

      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  },
};
