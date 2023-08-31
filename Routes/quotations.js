//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)


//RUTAS PARA LOS CONTRATISTAS
//Buscar todas las quotations
router.get('/', (req, res) => {
    db('quotations').then((quotations)=>{
        res.status(200).json(quotations)
    })
})

//Buscar una quotations en especifico por id params
router.get('/:id', (req, res) => {
    const {id} = req.params
    db('quotations')
        .where({id_quotation : id})
        .then((quotations)=>{
        res.status(200).json(quotations)
    })
})

//Agregar una quotation
router.post('/', (req, res) => {
    const toCreate = req.body
    db('quotations')
        .insert(toCreate)
        .then((quotations)=>{
        res.status(201).json(quotations)
    })
})

//Actualizar una quotation
router.put('/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('quotations')
        .where({id_quotation : id})
        .update(toEdit)
        .then((quotations)=>{
        res.status(201).json(quotations)
    })
})


//Borrar una quotation
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('quotations')
        .where({id_quotation : id})
        .del()
        .then((quotations)=>{
        res.status(200).json(quotations)
    })
})

module.exports = router