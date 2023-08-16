const http = require('http')

const app = require('./app')
const { mongoConnect } = require('./utils/mongo')

require('dotenv').config()

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

async function startServer() { 
  try {
    await mongoConnect()
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`)
    })
  } catch (error) { 
    console.log('Error Starting Server: ', error)
  }
}

startServer()