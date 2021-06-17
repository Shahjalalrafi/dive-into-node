const Contact = require('../Schema/Contact')

exports.getAllContact = (req, res) => {
     Contact.find({})
     .then(contacts => {
        res.render('contacts/contacts', {contacts, error: {}})
     })
     .catch(err => {
         console.log(err)
         res.json({
             error: 'Error occured'
         })
     })
}

exports.postSinglePost = (req, res) => {
    let {name, email, phone, id} = req.body

    let error = {}

    if(!name) {
        error.name = 'please provide a name'
    }

    if(!email) {
        error.email = 'please provide a email'
    }

    if(!phone) {
        error.phone = 'please provide a phone'
    }

    let isError = Object.keys(error).length > 0

    if(isError) {
        Contact.find()
        .then(contacts => {
            res.render('contacts/contacts', {contacts, error})
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error occured'
            })
        })
    }

    if(id) {
        Contact.findOneAndUpdate({_id: id}, {
            $set: {
                name, email, phone
            }
        }).then(() => {
            Contact.find()
            .then(contacts => {
                res.render('contacts/contacts', {contacts, error: {}})
            })
        })
        .catch(e => {
            console.log(e)
            return res.json({
                message: 'Error occured'
            })
        })

    }else {
        let contact = new Contact({
            name,
            email,
            phone
        })
    
        contact.save()
        .then(c => {
            Contact.find()
            .then(contacts => {
                return res.render('contacts/contacts', {contacts, error: {}})
            })
        })
        .catch(e => {
            console.log(e)
            return res.json({
                message: 'Error occured'
            })
        })
    }
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
    .then(() => {
        Contact.find()
        .then(contacts => {
            res.render('contacts/contacts', {contacts, error: {}})
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            error: 'Error occured'
        })
    })
}