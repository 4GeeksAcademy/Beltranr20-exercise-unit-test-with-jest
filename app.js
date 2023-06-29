const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInYen){
    let valueInDollar = valueInYen / 127.9;
    return valueInYen;
}

//app.js file content
console.log("Hello World")

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b 
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files
// (similar to the keyword 'export' when using webpack) 
module.exports = { sum, fromEuroToDollar }