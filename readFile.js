const fs = require('fs')

fs.readFile('./details.json', (err,data) => {
    if(err) {
        console.log(err)
    }else {
        console.log(data.toString())
    }
})