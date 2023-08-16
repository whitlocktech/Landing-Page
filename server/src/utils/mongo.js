const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URI  = process.env.MONGO_URI
if (!MONGO_URI) {
  throw new Error('MONGO_URI is missing from .env')
}

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!')
})

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URI)
  } catch (error) { 
    console.log('Error connecting to MongoDB: ', error)
    process.exit(1)
  }
}

module.exports = {mongoConnect}