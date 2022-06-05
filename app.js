const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('pages/index')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})