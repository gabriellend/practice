
const express = require('express')
const app = express()
const port = 3000
const db = require('./db')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
