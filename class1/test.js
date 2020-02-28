let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(arr)

for(let i=0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        console.log(arr[i], 'even')
    }else{
        console.log(arr[i], 'odd')
    }
}
let obj = {}
let alph = ['a','b','c','d','e','f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for(let i = 0; i <= alph.length -1; i++) {
    obj[i + 1] = alph[i]
}

console.log(obj);

