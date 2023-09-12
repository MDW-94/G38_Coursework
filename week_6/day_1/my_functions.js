function sayHello(name = "world"){
    return "Hello " + name
}
console.log(sayHello());


var something = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

console.log(something(1, 3));


// Arrow Function

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber
console.log(multiply(5, 10));