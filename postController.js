exports.getAllPost = (req, res) => {
    res.send('<h1>all of our posts</h1>')
}

exports.getSinglePost = (req, res) => {
    res.send('this post id is =' + req.params.id)
}

exports.postSinglePost =(req, res) => {
    res.send('<h1>i am posting a post</h1>')
}

exports.updateSinglePost = (req, res) => {
    res.send('update succesfully='+ req.params.id)
}

exports.deleteSinglePost = (req, res) => {
    res.send('delete your  post='+ req.params.id)
}