//calling the dependencies
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//ejs view engine
app.set('view engine', 'ejs')
//pulls local files
app.use(express.static(__dirname + '/public'));
//body parser to help with development refresh
app.use(bodyParser.urlencoded({ extended: true }))


//render the home page
app.get('/', (req, res) => {
    res.render('pages/index')
})









//listening port
app.listen(process.env.PORT || port, () => {
  console.log(`App listening at port ${port}`)
})