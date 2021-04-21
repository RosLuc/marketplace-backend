const Users = require('../model/Users');

module.exports = {
    async create(req, res) {
        const data = req.body;
        try {
            const user = await Users.create(data);

            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: error.mensage });
        }
    },

    async update(req, res) {
        const data = req.body;

        try {

        } catch (error) {
            return res.status(400).json({ error: error.mensage });
        }
    },

    async index(req, res) {
        const data = req.body;

        try {

        } catch (error) {
            return res.status(400).json({ error: error.mensage });
        }
    },

    async delete(req, res) {
        const data = req.body;

        try {

        } catch (error) {
            return res.status(400).json({ error: error.mensage });
        }
    },
};