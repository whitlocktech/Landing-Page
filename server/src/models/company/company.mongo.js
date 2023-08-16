const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  facebook: {
    type: String,
  },
  pintrest: {
    type: String,
  }
})

module.exports = mongoose.model('Company', companySchema)