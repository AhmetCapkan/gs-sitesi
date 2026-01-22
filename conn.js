const mongoose = require('mongoose')
require('dotenv').config()

const conn = async () => {
  // Burayı MONGODB_URI yaptık
  if (!process.env.MONGODB_URI) {
    console.log('MongoDB yok (Vercel modu)')
    return
  }

  try {
    // Burayı da MONGODB_URI yaptık
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'blog' })
    console.log('MongoDB bağlandı')
  } catch (err) {
    console.log('MongoDB hata:', err)
  }
}

module.exports = conn