//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)


//RUTAS PARA LOS CONTRATISTAS
//Buscar todas las advanc
router.get('/', (req, res) => {
    db('advances').then((advances)=>{
        res.status(200).json(advances)
    })
})

//Buscar una advances en especifico por id params
router.get('/:id', (req, res) => {
    const {id} = req.params
    db('advances')
        .where({id_advance : id})
        .then((advances)=>{
        res.status(200).json(advances)
    })
})

//Agregar una advance
router.post('/', (req, res) => {
    const toCreate = req.body
    db('advances')
        .insert(toCreate)
        .then((advances)=>{
        res.status(201).json(advances)
    })
})

//Actualizar una advance
router.put('/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('advances')
        .where({id_advance : id})
        .update(toEdit)
        .then((advances)=>{
        res.status(201).json(advances)
    })
})


//Borrar una advance
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('advances')
        .where({id_advance : id})
        .del()
        .then((advances)=>{
        res.status(200).json(advances)
    })
})

module.exports = router