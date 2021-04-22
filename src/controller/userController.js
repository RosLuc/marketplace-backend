const Users = require('../model/Users');
const { cpf:cpfValidator } = require("cpf-cnpj-validator");

async function verifyEmailAlredyExist(email) {
    const user = await Users.findOne({
        where: {
            email
        }
    });

    return user !== null;
}

function cpfIsValid(cpf) {
    return cpfValidator.isValid(cpf) ? true : false;
}

module.exports = {
    async create(req, res) {
        const data = req.body;
        try {
            if (await verifyEmailAlredyExist(data.email)) throw new Error("Email alredy exist");
            if (!cpfIsValid) throw new Error("CPF is Invalid");

            const user = await Users.create(data);

            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        const data = req.body;

        try {

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async index(req, res) {
        const data = req.body;

        try {

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delete(req, res) {
        const data = req.body;

        try {

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },


};