function tryCatch(str) {
    'use strict'
    try {
        let number = str.toLowerCase();//string to number
        console.log(number);
    } catch (err) {
         console.log(err)
    } finally {
        console.log('end')
    }
}

tryCatch(2)