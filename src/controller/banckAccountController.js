const BanckAcount = require('../model/BankAccount');
const Users = require('../model/Users');
const { Router } = require('express');
const { Op } = require('sequelize');

module.exports = {

  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'Addresses' }
    });

    return res.json(user.BanckAcount);
  },
}
