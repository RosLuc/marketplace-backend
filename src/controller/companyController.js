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
  if (!cnpjValidator.isValid(cnpj)) throw new Error("cnpj is Invalid");

  const company = await Company.findOne({
    where: {
      cnpj,
      ...props,
    },
  });

  if (company) throw new Error("cnpj alredy exist");
}

module.exports = {
  async create(req, res) {
    const data = req.body;
    try {
      await verifyEmailAlredyExist(data.email);
      await cnpjIsValid(data.cnpj);

      const company = await Company.create(data);
      company.password = undefined;

      return res.json(company);
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async update(req, res) {
    const data = req.body;
    const { company_id } = req.params;
    try {
      const company = await Company.findByPk(company_id);

      if (!company) return res.status(404).json({ error: "Company not found" });

      if (data.email)
        await verifyEmailAlredyExist(data.email, { id: { [Op.not]: company_id } });
      if (data.cnpj) await cnpjIsValid(data.cnpj, { id: { [Op.not]: company_id } });

      await company.update(data);

      company.password = undefined;

      return res.json(company);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async view(req, res) {
    const { company_id } = req.params;
    try {
      const company = await Company.findByPk(company_id, {
        attributes: {
          exclude: ["password"],
        },
      });

      if (!company) return res.status(404).json({ error: "Company not found" });

      return res.json(company);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async delete(req, res) {
    const { company_id } = req.params;
    try {
      const company = await Company.findByPk(company_id, {
        attributes: {
          exclude: ["password"],
        },
      });

      if (!company) return res.status(404).json({ error: "Company not found" });

      await company.destroy();

      return res.json({});
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },

  async list(req, res) {
    try {
      const company = await Company.findAll({
        attributes: {
          exclude: ["password"],
        },
        include: [{ association: "Addresses" }, { association: "Account" }],
      });

      return res.json(company);
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  },
};
