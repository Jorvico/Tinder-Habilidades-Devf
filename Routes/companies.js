//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)


//RUTAS PARA LAS EMPRESAS
//Buscar todas las companies
router.get('/', (req, res) => {
    db('companies').then((companies)=>{
        res.status(200).json(companies)
    })
})

//Buscar una companies en especifico por id params
router.get('/:id', (req, res) => {
    const {id} = req.params
    db('companies')
        .where({id_company : id})
        .then((companies)=>{
        res.status(200).json(companies)
    })
})

//Agregar una company
router.post('/', (req, res) => {
    const toCreate = req.body
    db('companies')
        .insert(toCreate)
        .then((companies)=>{
        res.status(201).json(companies)
    })
})

//Actualizar una company
router.put('/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('companies')
        .where({id_company : id})
        .update(toEdit)
        .then((companies)=>{
        res.status(201).json(companies)
    })
})


//Borrar una company
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('companies')
        .where({id_company : id})
        .del()
        .then((companies)=>{
        res.status(200).json(companies)
    })
})

//Agregar una habilidad a la empresa
router.post('/:idCompany/skills/:idSkill', (req, res) => {
    const id_company = req.params.idCompany;
    const id_skill = req.params.idSkill;
    
    db('companies_skills')
      .insert({ id_company: id_company, id_skill: id_skill })
      .then(() => {
        res.status(201).send("Habilidad agregada a la empresa exitosamente");
      })
});

//Eliminar una habilidad a la empresa
router.delete('/:idCompany/skills/:idSkill', (req, res) => {
    const id_company = req.params.idCompany;
    const id_skill = req.params.idSkill;
    
    db('companies_skills')
      .where({ id_company: id_company, id_skill: id_skill })
      .del()
      .then(() => {
        res.status(201).send("Habilidad eliminada de la empresa exitosamente");
      })
});

module.exports = router