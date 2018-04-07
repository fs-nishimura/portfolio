const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'main/public')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'main/public', 'index.html'))
})

app.listen(process.env.PORT || 4444)
