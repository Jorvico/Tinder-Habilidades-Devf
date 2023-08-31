//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)

router.get('/', (req, res) => {
    
    db('companies_skills')
    .select('companies_skills.id_company',
            'companies.name as company_name',
            'companies_skills.id_skill',
            'skills.name as skill_name'
            )
    .join('companies', 'companies_skills.id_company', 'companies.id_company')
    .join('skills', 'companies_skills.id_skill', 'skills.id_skill')
    .then((data) => {
      res.status(200).json(data);
    })
});


module.exports = router