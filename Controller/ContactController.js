const Contact = require('../Schema/Contact')

exports.getAllContact = (req, res) => {
     Contact.find({})
     .then(c => {
         res.json(c)
     })
     .catch(err => {
         console.log(err)
         res.json({
             error: 'Error occured'
         })
     })
}

exports.postSinglePost = (req, res) => {
    let {name, email, phone} = req.body
    let contact = new Contact({
        name,
        email,
        phone
    })

    contact.save()
    .then(c => {
        res.json(c)
    })
    .catch(e => {
        console.log(e)
        res.json({
            message: 'Error occured'
        })
    })
}

exports.getSinglePost = (req, res) => {
    let {id} = req.params
    Contact.findById(id)
    .then(contact => {
        res.json(contact)
    })
    .catch(err => {
        console.log(err)
        res.json({
            error: 'Error occured'
        })
    })
}

exports.updateSinglePost = (req, res) => {
    let {id} = req.params
    let {name, email,phone} = req.body
    Contact.findOneAndUpdate({_id: id}, {
        $set: {
            name, email, phone
        }
    } , {new: true})
    .then(contact => {
        res.json(contact)
    })
    .catch(err => {
        console.log(err)
        res.json({
            error:"Error occoured"
        })
    })
}

exports.deleteSinglePost = (req, res) => {
    let {id} = req.params
    Contact.findOneAndDelete({_id: id})
    .then(contact => {
        res.json(contact)
    })
    .catch(err => {
        res.json({
            error: 'Error occured'
        })
    })
}