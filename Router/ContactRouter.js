const router = require('express').Router()

const {getAllContact, postSinglePost, getSinglePost, updateSinglePost, deleteSinglePost} = require('../Controller/ContactController')

router.get('/', getAllContact)
router.post('/', postSinglePost)
router.get('/:id', getSinglePost)
router.put('/:id', updateSinglePost)
router.delete('/:id', deleteSinglePost)

module.exports = router