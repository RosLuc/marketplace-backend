require('dotenv/config');

const development = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
}

const production = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
  },
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

module.exports = { development, production };
