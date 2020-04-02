const express = require('express')
const colors = require('colors');


const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

  
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/videos', (req, res) => {
    res.render('videos')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/comingsoon', (req, res) => {
    res.render('comingsoon')
})


const server = app.listen(8080, '0.0.0.0', () =>{
    var port = server.address().port
    console.log('\n\n')
    console.log('----------------------'.rainbow.bold);
    console.log('app listening at http://0.0.0.0:%s'.green.bold.underline, port)
    console.log('SERVER CURRENTLY RUNNING..............'.green.bold.underline)
    console.log(`Express is running on port ${port}`.green.bold);
    console.log('Press Ctrl + C to exit')
    console.log('----------------------'.rainbow.bold);
    console.log()
 })

