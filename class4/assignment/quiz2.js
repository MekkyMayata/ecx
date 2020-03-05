const bcrypt = require('bcrypt')
let db = require('./db')

async function asyncChecker(name, password) {
    const saltRounds = 10; 
    const salt = bcrypt.genSaltSync(saltRounds)

    let dbPass = db.credentials[name] //password from database
    const hash = bcrypt.hashSync(dbPass, salt) //hashed password from database
    const userPassword = password //user login password

    
    await bcrypt.compare(userPassword, hash, (err,result) => {
        if(result == true) {
            console.log(`${name} successfully logged in.`)
        } else {
            console.log('Unsuccessful', err)
        }
    })
}

asyncChecker('John', 'goldfish22');
