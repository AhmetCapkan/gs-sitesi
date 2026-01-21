const mongoose = require('mongoose')
require('dotenv').config()

const conn = async () => {
  if (!process.env.DB_URL) {
    console.log('MongoDB yok (Render demo modu)')
    return
  }

  try {
    await mongoose.connect(process.env.DB_URL, { dbName: 'blog' })
    console.log('MongoDB bağlandı')
  } catch (err) {
    console.log('MongoDB hata ama site çalışıyor')
  }
}

module.exports = conn