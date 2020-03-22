let express = require('express')
let app = express()

app.set('/show', (req, res) => {
  let { callback } = req.query
  res.send(`${callback}('Hello')`)
})
app.listen(3000)