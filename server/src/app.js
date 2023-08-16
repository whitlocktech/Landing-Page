const path = require('path')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const apiRouter = require('./routes/api')

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}))
app.use(helmet())
app.use(morgan('dev'))

app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname, '..', 'public')))

module.exports = app