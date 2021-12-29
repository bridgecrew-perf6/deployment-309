const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('hello from heni')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})