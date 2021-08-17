const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/houses', ctrl.getAllHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)


app.listen(3004, () => console.log('We are running on port 3004'))



