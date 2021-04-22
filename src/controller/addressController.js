const Address = require('../model/Address');
const {Router} = require('express');


module.exports = {
    
    
    
    async create(req, res) {
        const data = req.body;
        try {
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
        const data = req.body;
        res.json({id});
        console.log("estamos no get");
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