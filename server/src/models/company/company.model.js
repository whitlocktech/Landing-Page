const companyDatabase = require('./company.mongo')

async function createCompany(company) { 
  try {
    const newCompany = new companyDatabase(company)
    const savedCompany = await newCompany.save()
    return savedCompany
  } catch (error) { 
    throw new Error(`Error creating company: ${error}`)
  }
}

async function getCompany() { 
  try {
    const company = await companyDatabase.find()
    return company
  } catch (error) { 
    throw new Error(`Error getting company: ${error}`)
  }
}

module.exports = {
  createCompany,
  getCompany
}