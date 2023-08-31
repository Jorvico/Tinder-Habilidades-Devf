//Importar express
const express = require('express')

//Crear el modulo router para importar
const router = express.Router()
const connection = require('../knexfile')['development']
const db = require('knex')(connection)


//RUTAS PARA LOS CONTRATISTAS
//Buscar todas las contractors
router.get('/', (req, res) => {
    db('contractors').then((contractors)=>{
        res.status(200).json(contractors)
    })
})

//Buscar una contractors en especifico por id params
router.get('/:id', (req, res) => {
    const {id} = req.params
    db('contractors')
        .where({id_contractor : id})
        .then((contractors)=>{
        res.status(200).json(contractors)
    })
})

//Agregar una contractor
router.post('/', (req, res) => {
    const toCreate = req.body
    db('contractors')
        .insert(toCreate)
        .then((contractors)=>{
        res.status(201).json(contractors)
    })
})

//Actualizar una contractor
router.put('/:id', (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    db('contractors')
        .where({id_contractor : id})
        .update(toEdit)
        .then((contractors)=>{
        res.status(201).json(contractors)
    })
})


//Borrar una contractor
router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('contractors')
        .where({id_contractor : id})
        .del()
        .then((contractors)=>{
        res.status(200).json(contractors)
    })
})

//Agregar una habilidad a la empresa
router.post('/:idContractor/skills/:idSkill', (req, res) => {
    const id_contractor = req.params.idContractor;
    const id_skill = req.params.idSkill;
    
    db('contractors_skills')
      .insert({ id_contractor: id_contractor, id_skill: id_skill })
      .then(() => {
        res.status(201).send("Habilidad agregada al contratista exitosamente");
      })
});

//Eliminar una habilidad a la empresa
router.delete('/:idContractor/skills/:idSkill', (req, res) => {
    const id_contractor = req.params.idContractor;
    const id_skill = req.params.idSkill;
    
    db('contractors_skills')
      .where({ id_contractor: id_contractor, id_skill: id_skill })
      .del()
      .then(() => {
        res.status(201).send("Habilidad eliminada del contratista exitosamente");
      })
});

module.exports = router