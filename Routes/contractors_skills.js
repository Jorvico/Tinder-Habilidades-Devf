//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)

router.get('/', (req, res) => {
    
    db('contractors_skills')
    .select('contractors_skills.id_contractor',
            'contractors.name as contractor_name',
            'contractors_skills.id_skill',
            'skills.name as skill_name'
            )
    .join('contractors', 'contractors_skills.id_contractor', 'contractors.id_contractor')
    .join('skills', 'contractors_skills.id_skill', 'skills.id_skill')
    .then((data) => {
      res.status(200).json(data);
    })
});


module.exports = router