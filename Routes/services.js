//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)


//RUTAS PARA LOS CONTRATISTAS
//Buscar todas los services
router.get('/', (req, res) => {
    db('services').then((services)=>{
        res.status(200).json(services)
    })
})

//Buscar un service en especifico por id params
router.get('/:id', (req, res) => {
    const {id} = req.params
    db('services')
        .where({id_service : id})
        .then((services)=>{
        res.status(200).json(services)
    })
})

//Agregar un service
router.post('/', (req, res) => {
    const toCreate = req.body
    db('services')
        .insert(toCreate)
        .then((services)=>{
        res.status(201).json(services)
    })
})

//Actualizar un service
router.put('/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('services')
        .where({id_service : id})
        .update(toEdit)
        .then((services)=>{
        res.status(201).json(services)
    })
})


//Borrar un service
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('services')
        .where({id_service : id})
        .del()
        .then((services)=>{
        res.status(200).json(services)
    })
})

module.exports = router