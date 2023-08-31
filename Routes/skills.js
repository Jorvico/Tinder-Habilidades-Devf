//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)

//RUTAS PARA LAS SKILLS
//Buscar todas las skills
router.get('/', (req, res) => {
    db('skills').then((skills)=>{
        res.status(200).json(skills)
    })
})

//Buscar una skills en especifico por id params
router.get('/:id', (req, res) => {
    const {id} = req.params
    db('skills')
        .where({id_skill : id})
        .then((skills)=>{
        res.status(200).json(skills)
    })
})

//Agregar una skill
router.post('/', (req, res) => {
    const toCreate = req.body
    db('skills')
        .insert(toCreate)
        .then((skills)=>{
        res.status(201).json(skills)
    })
})

//Actualizar una skill
router.put('/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('skills')
        .where({id_skill : id})
        .update(toEdit)
        .then((skills)=>{
        res.status(201).json(skills)
    })
})

//Borrar una skill
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('skills')
        .where({id_skill : id})
        .del()
        .then((skills)=>{
        res.status(200).json(skills)
    })
})

module.exports = router;