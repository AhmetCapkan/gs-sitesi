const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const conn = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: 'blog'
    })
    console.log('Veritabanına bağlanıldı')
  } catch (error) {
    console.log('MongoDB bağlantı hatası (Render için atlandı)')
  }
}

module.exports = conn
