const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const contactRouter = require('./Router/ContactRouter')
// const userRouter = require('./userRouter')
// const postRouter = require('./postRouter')


const uri = "mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/todos?retryWrites=true&w=majority"

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('db connected')
    })
    .catch(err => {
        console.log(err)
    })


// const Schema = mongoose.Schema

// const testSchema = new Schema({
//     name: String
// })

// const Test = mongoose.model('test', testSchema)



const app = express()
const port = 5000

app.use(urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')



app.use('/contact', contactRouter)

// app.get('/schema', (req, res) => {
//     let test = new Test({
//         name: 'shahjalal rafi'
//     })

//     test.save()
//     .then(t => {
//         res.json(t)
//     })
//     .catch(e => {
//         console.log(e)
//         res.status(500).json({
//             error: "error occured"
//         })
//     })
// })


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

// app.use('/contacts', contactRouter)

// app.get('/about', (req, res) => {
//     res.render('pages/about')
// })

// app.get('/help', (req, res) => {
//     res.render('pages/help')
// })

// app.get('/', (req, res) => {
//     let post = {
//         title: 'i am title',
//         body: 'i am body',
//         published: false
//     }

//     let posts = [
//         {title: 'post one', author: 'shahjalal rafi'},
//         {title: 'post two', author: ' rafi'},
//         {title: 'post three', author: 'shahjalal'},
//         {title: 'post four', author: 'rakib'},
//     ]

//     res.render('pages/index', {
//         title: 'ejs is awesome',
//         post,
//         posts
//     })
// })

app.get('*', (req, res) => {
    res.send('page not found')
})


app.listen(port, () => {
    console.log(`listening to port ${port}`)
})