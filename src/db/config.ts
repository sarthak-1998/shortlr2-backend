import Sequelize from 'sequelize'
import config = require('../../config.js')

export let db
if (process.env.DATABASE_URL) {
  db = new Sequelize(process.env.DATABASE_URL)
} else {
  db = new Sequelize({
    database: config.DB.DATABASE,
    password: config.DB.PASSWORD,
    username: config.DB.USERNAME,
    host: config.DB.HOST,
    dialect: 'postgres',
  })
}
