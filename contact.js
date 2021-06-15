class Contact {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    getContactById(id) {
        return this.contacts.find(contact => contact.id == id)
    }

    createAContact(obj) {
        obj.id = this.contacts.length + 1
        this.contacts.push(obj)
        return obj
    }

    updateContact(id, updatedObj) {
        let index = this.contacts.find(contact => contact.id == id)

        this.contacts[index].name = updatedObj.name || this.contacts[index].name
        this.contacts[index].phone = updatedObj.phone || this.contacts[index].phone
        this.contacts[index].email = updatedObj.email || this.contacts[index].email

        return this.contacts[index]
    }

    deleteContact(id) {
        let index = this.contacts.find(contact => contact.id == id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return deletedObj
    }
}

let contacts = new Contact()

module.exports = contacts