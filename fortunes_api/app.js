const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const fortunes = require('./data/fortunes.json')

const app = express()

app.use(bodyParser.json()) 

const writeFile = json => {
  fs.writeFile('./data/fortunes.json', JSON.stringify(json), err => console.log(err))
}

/// GET

app.get('/fortunes', (req, res) => {
  res.json(fortunes)
})

app.get('/fortunes/random', (req, res) => {
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)])
})

app.get('/fortunes/:id', (req, res) => {
  res.json(fortunes.find(f =>  f.id == req.params.id))
})

/// POST

app.post('/fortunes', (req, res) => {
  const { message, lucky_number, spirit_animal } = req.body

  const fortune_ids = fortunes.map(f => f.id)

  const new_fortunes = fortunes.concat({ 
    id: fortune_ids.length > 0 ? Math.max(...fortune_ids) + 1 : 1, 
    message, 
    lucky_number, 
    spirit_animal 
  })

  writeFile(new_fortunes)

  res.json(new_fortunes)
})

/// PUT

app.put('/fortunes/:id', (req, res) => {
  const { id } = req.params
  const old_fortune = fortunes.find(f => f.id == id)

  const keys = [ 'message', 'lucky_number', 'spirit_animal' ]
  
  keys.forEach(key => {
    if (req.body[key]) old_fortune[key] = req.body[key]
  })

  writeFile(fortunes)

  res.json(fortunes)
})

// DELETE

app.delete('/fortunes/:id', (req, res) => {
  const { id } = req.params
  const new_fortunes = fortunes.filter(f => f.id != id)

  
  writeFile(new_fortunes)

  res.json(new_fortunes)
})

module.exports = app