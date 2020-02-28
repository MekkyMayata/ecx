function details(fn, ln, mn) {
    let arr = [fn, ln, mn];
    let obj = {}
    for(let i = 0; i <= arr.length - 1; i++) {
        obj[i + 1] = arr[i]
    }
    console.log(obj)
}

details('alice','jane', 130)

function occurences(element) {
    let total = 0
    let arr = ['jane','alice']
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == element) {
            total += 1
        }
    }
    return total
}

console.log(occurences('jane'))


function str(element) {
    let total = 0
    for(let i = 0; i <= element.length; i++){
        if(element[i] == 'a'){
            total +=1
        }
    }
    return total
}

console.log(str('antananarivo'))