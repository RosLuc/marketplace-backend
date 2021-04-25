const Address = require('../model/Address');
const Users = require('../model/Users');
const { Op } = require('sequelize');


module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'Addresses' }
        });

        return res.json(user.Address);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { uf, cep, address, comp, district, number, city } = req.body;

        try {
            const user = await Users.findByPk(user_id);

            if (!user) {
                return res.status(404).json({ error: 'User not found!' });
            }

            const addres = await Address.create({
                user_id,
                uf,
                cep,
                address,
                comp,
                district,
                number,
                city
            });
            return res.json(addres);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },


    async update(req, res) {
        const data = req.body;
        const user_id = req.params;
        try {
            const user = await Users.findByPk(user_id);

            if (!user) return res.status(404).json({ error: "User not found" });


            await user.update(data);

            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },


    async delete(req, res) {
        const user_id = req.params;
        try {
            const user = await Users.findByPk(user_id);

            if (!user) return res.status(404).json({ error: "User not found" });

            await user.destroy();

            return res.json({});
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
};