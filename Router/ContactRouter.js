const router = require('express').Router()

const {getAllContact, postSinglePost, getSinglePost, updateSinglePost, deleteSinglePost} = require('../Controller/ContactController')

router.get('/', getAllContact)
router.post('/', postSinglePost)
router.get('/:id', getSinglePost)
router.get('/delete/:id', deleteSinglePost)
router.put('/:id', updateSinglePost)

module.exports = router