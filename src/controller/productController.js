const Product = require('../model/Product');
const Company = require("../model/Company");

module.exports = {

    async create(req, res) {
        const data = req.body;
        const { company_id } = data;
        
        try {
          const company = await Company.findByPk(company_id, {
            attributes: {
              exclude: ['password']
            }
          });
    
          if (!company) return res.status(404).json({ error: "Company not found" });
    
          const product = await Product.create({
            company_id,
            ...data
          });
    
          return res.json(product);
        } catch (error) {
          console.log(error);
          return res.status(400).json({
            error: error.message,
          });
        }
      },

      async update(req, res) {
        const data = req.body;
        const { product_id } = req.params;
        try {
          const product = await BankAccount.findByPk(product_id);
    
          if (!product) return res.status(404).json({ error: "Product not found" });
    
          await product.update(data);
    
          return res.json(product);
        } catch (error) {
          return res.status(400).json({
            error: error.message,
          });
        }
      },

      async view(req, res) {
        const { product_id } = req.params;
        try {
          const product = await BankAccount.findByPk(product_id);
    
          if (!product) return res.status(404).json({ error: "Product not found" });
    
          return res.json(product);
        } catch (error) {
          return res.status(400).json({
            error: error.message,
          });
        }
      },
    
      async delete(req, res) {
        const { product_id } = req.params;
        try {
          const product = await Product.findByPk(product_id);
    
          if (!product) return res.status(404).json({ error: "Product not found" });
    
          await bproduct.destroy();
    
          return res.json({});
        } catch (error) {
          return res.status(400).json({
            error: error.message,
          });
        }
      },
    
      async list(req, res) {
        const { product_id } = req.params
    
        try {
          const product = await Product.findAll({
            where: {
              product_id
            }
          });
    
          return res.json(product);
        } catch (error) {
          console.log(error);
          return res.status(400).json({
            error: error.message,
          });
        }
      }
}