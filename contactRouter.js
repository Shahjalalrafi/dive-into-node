const router = require('express').Router()
const {getAllContacts, createAContact} = require('./contactController')

router.get('/', getAllContacts)
router.post('/', createAContact)
// router.get('/:id', )
// router.put('/', )
// router.delete('/', )

module.exports = router