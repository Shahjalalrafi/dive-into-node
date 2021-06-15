const router = require('express').Router()

router.get('/login', (req, res) => {
    res.send('<h1>i am login route</h1>')
})

router.get('/sign-in', (req, res) => {
    res.send('<h1>i am sign-in route</h1>')
})

router.get('/sign-up', (req, res) => {
    res.send('<h1>i am sign-up route</h1>')
})

router.get('/', (req, res) => {
    res.send('<h1>i am user</h1>')
})

module.exports = router