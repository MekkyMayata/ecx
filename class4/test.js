const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);


if(hash == 's0/\/\P4$$w0rD'){
    console.log(false);

}else {
    console.log(true);
}

