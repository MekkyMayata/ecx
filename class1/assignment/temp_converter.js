function celsConverter(celsValue){
    let fahrenValue = (9/5 * celsValue) + 32
    return console.log(`${celsValue}\xB0c equals ${fahrenValue}\xB0F.`)
};

function fahrenConverter(fahrenValue){
    let celsValue = 5/9 * (fahrenValue - 32)
    return console.log(`${fahrenValue}\xB0c equals ${celsValue}\xB0F.`)
};

celsConverter(20)
fahrenConverter(68)