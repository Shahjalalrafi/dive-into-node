const userRouter = require('express').Router()
const {getAllPost, getSinglePost, postSinglePost, updateSinglePost, deleteSinglePost} = require('./postController')

userRouter.get('/posts', getAllPost)

userRouter.get('/posts/:id', getSinglePost)

userRouter.post('/posts', postSinglePost)

userRouter.put('/posts/:id', updateSinglePost)

userRouter.delete('/posts/:id', deleteSinglePost)

module.exports = userRouter