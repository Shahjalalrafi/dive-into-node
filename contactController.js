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