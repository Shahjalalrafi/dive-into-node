const fs = require('fs')

const rafiDetails = {
    name: 'shahjalal rafi',
    country: "Bangladesh",
    address: {
        city: "chittagong",
        country: "Bd"
    }
}

const parseDetails = JSON.stringify(rafiDetails) 

fs.writeFile('./details.json', parseDetails, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log('file write succesfully')
    }
})