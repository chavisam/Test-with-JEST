// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

//function from Euro to Us Dollar
function fromEuroToDollar(e){
    return e * 1.2
}

// from Dollar to yen
function fromDollarToYen(e){
    return ((1/1.2)*e)*127.9
}

// from yen to pound
const fromYenToPound = (e) => {
    return ((0.8/127.9)*e)
}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar,fromDollarToYen ,fromYenToPound};