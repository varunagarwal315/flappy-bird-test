const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000 // Port 3000 or Heroku generated port

app.use(express.static(path.join(__dirname, './flappyBird')));
app.listen(port, () => {
  console.log('Server is running on port:', port)
})
