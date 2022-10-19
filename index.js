// index.js
require('dotenv-vault-core').config()
console.log(process.env) // for debugging purposes. remove when ready.

const PORT = process.env.PORT || 5000
const express = require('express')
const app = express()

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
})

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO}`)
})
