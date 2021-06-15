const express = require('express')

const app = express()
const port = 5000

function customMiddleWare(req, res, next) {
    if(req.url === '/help') {
        res.send('<h2>sorry, this is bloked by admin</h2>')
    }
    next()
}

function tinyMiddleWare() {
    return (req, res, next) => {
        console.log(`${req.method}- ${req.url}`)
        next()
    }
}

const middleWare = [customMiddleWare, tinyMiddleWare()]

app.use(middleWare)

app.get('/about', (req, res) => {
    res.send('<h1>i am about page</h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1>i am help page</h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>i am home page</h1>')
})

app.get('*', (req, res) => {
    res.send('<h2>404... page not found!</h2>')
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})