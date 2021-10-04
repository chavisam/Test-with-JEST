// import the function sum from the app.js file
const { sum,fromEuroToDollar,fromDollarToYen , fromYenToPound} = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//test of coins
test('Test from Euro to US Dollar', function(){
    let output = fromEuroToDollar(2);
    expect(output).toBe(1.2 * 2);
});

test('Test from US Dolar to Yen', function(){
    let output = fromDollarToYen(2);
    expect(output).toBe(((1/1.2)*2)*127.9)
});

test('Test From yen to Pound', function(){
    let output = fromYenToPound(2);
    expect(output).toBe((0.8/127.9)*2)
    
});