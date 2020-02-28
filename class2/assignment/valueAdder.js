function valueArray(arr) {
        let sum = arr.reduce((acc, value) => acc += value)
        console.log(sum);
}

valueArray([1,2,3,4]);