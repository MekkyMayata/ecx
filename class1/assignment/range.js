// function range(val1, val2, val3) {
//     let numbers = [val1,val2,val3]
//     let validNumbers = numbers.filter(num =>{
//        return num >= 0 && num <= 50
//     })

//     if (validNumbers.length == 0) {
//         console.log('false')
//     }else{
//         console.log('true');
        
//     }
// }

// range(80,40,300);




















function range(val1, val2, val3) {
    let arr = [val1, val2, val3];
    let newArr = arr.filter((num)=>{
        return num >= 0 && num <= 50
    })
    if (newArr.length == 0) {
        console.log('false')
    } else {
        console.log('true')
    }
}


range(1,300,5)