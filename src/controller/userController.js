const Users = require('../model/Users');
const { cpf: cpfValidator } = require("cpf-cnpj-validator");
const { Op } = require('sequelize');

async function verifyEmailAlredyExist(email, props = {}) {
    const user = await Users.findOne({
        where: {
            email,
            ...props
        }
    });

    if (user) throw new Error("Email alredy exist");
}

async function cpfIsValid(cpf, props) {
    if (!cpfValidator.isValid(cpf)) throw new Error("CPF is Invalid");

    const user = await Users.findOne({
        where: {
            cpf,
            ...props
        }
    });

    if (user) throw new Error("cpf alredy exist");
}

module.exports = {
    async create(req, res) {
        const data = req.body;
        try {
            await verifyEmailAlredyExist(data.email);
            await cpfIsValid(data.cpf);

            const user = await Users.create(data);
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
            const user = await Users.findByPk(user_id);

            if(!user) return res.status(404).json({ error: "User not found" });

            if (data.email) await verifyEmailAlredyExist(data.email, { id: { [Op.not]: user_id } });
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
            const user = await Users.findByPk(user_id, {
                attributes: {
                    exclude: ['password']
                }
            });

            if(!user) return res.status(404).json({ error: "User not found" });

            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delete(req, res) {
        const { user_id } = req.params;
        try {
            const user = await Users.findByPk(user_id, {
                attributes: {
                    exclude: ['password']
                }
            });

            if(!user) return res.status(404).json({ error: "User not found" });

            await user.destroy();

            return res.json({});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async list(req, res) {
        try {
            const users = await Users.findAll({
                attributes: {
                    exclude: ["password"]
                },
                include: [
                    { association: 'Addresses' },
                    { association: 'CreditCards' }
                ]
            });

            return res.json(users);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error.message });
        }
    }
};