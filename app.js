//Importar express
const express = require('express')

//Crear una instancia de express
const app = express()
const port = 8003

const skillsRoutes = require('./Routes/skills')
const companiesRoutes = require('./Routes/companies')
const contractorsRoutes = require('./Routes/contractors')
const companies_skillsRoutes = require('./Routes/companies_skills')
const contractors_skillsRoutes = require('./Routes/contractors_skills')
const quotationsRoutes = require('./Routes/quotations')
const advancesRoutes = require('./Routes/advances')
const servicesRoutes = require('./Routes/services')
const matchesRoutes = require('./Routes/matches')

app.use(express.json())

//Configuramos las rutas
app.get('/', (req, res) => {
    res.send("Bienvenido a tinder de habilidades")
})

//RUTAS PARA LA APP

app.use('/skills', skillsRoutes)
app.use('/companies', companiesRoutes)
app.use('/companies-skills', companies_skillsRoutes)
app.use('/contractors', contractorsRoutes)
app.use('/contractors-skills', contractors_skillsRoutes)
app.use('/quotations', quotationsRoutes)
app.use('/advances', advancesRoutes)
app.use('/services', servicesRoutes)
app.use('/matches', matchesRoutes)

//Iniciar nuestro servidor
app.listen(port, ()=> {
    console.log(`El servidor esta escuchando en el puerto ${port}`)
})
