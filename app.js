const { urlencoded } = require('express')
const express = require('express')
const contactRouter = require('./contactRouter')
// const userRouter = require('./userRouter')
// const postRouter = require('./postRouter')

const app = express()
const port = 5000

app.use(urlencoded({extended: true}))
app.use(express.json())

// function customMiddleWare(req, res, next) {
//     if(req.url === '/help') {
//         res.send('<h2>sorry, this is bloked by admin</h2>')
//     }
//     next()
// }

// function tinyMiddleWare() {
//     return (req, res, next) => {
//         console.log(`${req.method}- ${req.url}`)
//         next()
//     }
// }


// const middleWare = [customMiddleWare, tinyMiddleWare()]

// app.use(middleWare)
// app.use('/user', userRouter)
// app.use('/posts', postRouter)

// app.get('/about', (req, res) => {
//     res.send('<h1>i am about page</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send('<h1>i am help page</h1>')
// })

// app.get('/', (req, res) => {
//     res.send('<h1>i am home page</h1>')
// })

// app.get('*', (req, res) => {
//     res.send('<h2>404... page not found!</h2>')
// })

app.use('/contacts', contactRouter)

app.get('*', (req, res) => {
    res.send('page not found')
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})