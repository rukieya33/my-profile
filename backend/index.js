let fs = require('fs')
var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

  app.use(cors({
    origin: '*'
  }));
app.post('/img', (req, res) => {


console.log(req.body.data)
})

app.get('/', (req, res) => {
    res.send('Welcome to Backend !')
})
app.get('/img', (req, res) => {
   
  res.json(req.body)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
