const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(3031, () => {
  console.log('server running on port 3031')
})