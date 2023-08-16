require('dotenv').config()

const API_KEY = process.env.API_KEY

const checkApiKey = (req, res, next) => { 
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) { 
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const apiKey = authorizationHeader.split(' ')[1]
  if (apiKey !== process.env.API_KEY) { 
    return res.status(401).json({ error: 'Unauthorized' })
  }

  next()
}

module.exports = {checkApiKey}