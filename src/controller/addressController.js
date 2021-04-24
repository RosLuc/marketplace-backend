const Address = require('../model/Address');
const {Router} = require('express');
const { Op } = require('sequelize');


async function verifiqueCep(cep, props = {}) {
    const address = await Address.findOne({
        where: {
            cep,
            ...props
        }
    });

    if (address) throw new Error("Email alredy exist");
}

module.exports = {
    

    async create(req, res) {
        
         try {
            const data = req.body;
            await verifiqueCep(data.cep);
            const address = await Address.create(data);

            return res.json(address);
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
     
        const { user_id } = req.params;
        try {
            const user = await Address.findByPk(user_id, {
                attributes: {
                    exclude: ['uf']
                }
            });

            if(!user) return res.status(404).json({ error: "User not found" });

            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: error.message });
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