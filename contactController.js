const contacts = require('./contact')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createAContact = (req, res) => {
    console.log(req.body)
    const {name, phone, email } = req.body
    let contact = contacts.createAContact({
        name,
        phone,
        email
    })
    res.json(contact)
}

exports.getContactById = (req, res) => {
    let {id} = req.params
    let parseId = parseInt(id)
    const contact = contacts.getContactById(parseId)
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let {id} = req.params
    let parseId = parseInt(id)
    const {name, phone, email} = req.body
    const contact = contacts.updateContact(parseId, {
        name, phone, email
    }) 
    
    res.json(contact)
}

exports.deleteContact = (req, res) => {
    let {id} = req.params
    let parseId = parseInt(id)

    let contact = contacts.deleteContact(parseId)
    res.json(contact)
}