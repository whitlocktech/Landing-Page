const express = require('express')
const {
  createCompanyController,
  getCompanyController
} = require('./company.controller')

const {checkApiKey} = require('../../middlewares/apiKeyCheck')

const companyRouter = express.Router()

companyRouter.post('/', checkApiKey, createCompanyController)
companyRouter.get('/', getCompanyController)

module.exports = companyRouter