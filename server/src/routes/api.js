const express = require('express')
const companyRouter = require('./company/company.routes')

const apiRouter = express.Router()

apiRouter.use('/company', companyRouter)

module.exports = apiRouter