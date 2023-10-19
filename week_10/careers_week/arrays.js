const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

function listLoop2(a2, b2){
    result = []
    for(let item in a2){
        result.push(a2[item])
    };
    for(let item in b2){
        result.push(b2[item])
    };
    return result
}

const array5 = listLoop2(array1, array2)


// const array3 = array1.concat(array2);

// function listLoop(a, b) {
//     result = []
//     for(let i = 0; i < a.length; i++){
//         result.push(a[i])
//     };
//     for(let i = 0; i < b.length; i++){
//         result.push(b[i])
//     };
//     return result
// }

// const array4 = listLoop(array1, array2)

// const array6 = [...array1, ...array2]

// // Problems with scope begin here!

// const a = array1
// const b = array2

// const functionResult2 = (a1, b1) => {
//     result = []
//     for(let item of b1){
//         a1.push(item)
//     }
//     return a1
// }

// const array7 = functionResult2(a, b)

console.log("List1: ", array1);
console.log("List2: ", array2);
console.log("Lists_joined_together: ", array5);



// console.log("Array 3: ", array3);
// console.log("Array 4: ", array4);

// console.log("Array 6: ", array6);
// console.log("Array 7: " + array7);
// console.log("Array 8: " + array8);