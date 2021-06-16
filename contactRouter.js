const router = require('express').Router()
const {getAllContacts, createAContact, getContactById, updateContact, deleteContact} = require('./contactController')

router.get('/', getAllContacts)
router.post('/', createAContact)
router.get('/:id', getContactById)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router