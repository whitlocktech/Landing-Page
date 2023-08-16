const {
  createCompany,
  getCompany
} = require('../../models/company/company.model')

async function createCompanyController(req, res) { 
  try {
    const company = await createCompany(req.body)
    res.status(201).json(company)
  } catch (error) { 
    res.status(500).json({ error: error.message })
  }
}

async function getCompanyController(req, res) { 
  try {
    const company = await getCompany()
    res.status(200).json(company)
  } catch (error) { 
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createCompanyController,
  getCompanyController
}