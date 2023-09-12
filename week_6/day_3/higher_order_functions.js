const myNumbers = [1, 2, 3, 4, 5]

// for(let num of myNumbers){
//     console.log("this is number " + num);
// }


// myNumbers.forEach((num, index) => {
//     console.log("this is number "+ num + " at index position " + index);
// })

// const multiplyByTwo = function(numbers){
//     const result = []
//     numbers.forEach((num) => {
//         const multiplied = num * 2
//         result.push(multiplied)
//     })

//     return result

// }
// console.log(multiplyByTwo(myNumbers));



// const getEvens = function(numbers){
//     const result = []
//     numbers.forEach((num) => {
//         if(num % 2 === 0){
//             result.push(num)
//         }
//     })
//     return result
// }

// console.log(getEvens(myNumbers));

// const multiplyByTwo = function(numbers){
//     result = numbers.map((num) => {
//         return num * 2
//     })
//     return result
// }

// console.log(multiplyByTwo(myNumbers));


// const getEvens = function(numbers){
//     const result = numbers.filter((num) => {
//         return num % 2 === 0
//     })
//     return result
// }

// console.log(getEvens(myNumbers));



const sumElements = function(numbers){
    const total = numbers.reduce((runningTotal, num) => {
        return runningTotal + num
    }, 500)
    return total
}
console.log(sumElements(myNumbers));