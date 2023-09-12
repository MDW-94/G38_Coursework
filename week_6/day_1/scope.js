// var name= 'Jill'

// var secretsFunction = function(){
//     var pinCode = [0, 0, 0, 0]
//     console.log('pinCode', pinCode);
//     console.log('name inside function', name);
// }

// secretsFunction()

// var filterNamesByFirstLetter = function(names, letter){
//     var filterdNames = []
//     for (let name of names){
//         if(name[0] === letter){
//             filterdNames.push(name)
//         }
//     }
//     console.log('name after loop', name);
//     return filterdNames
// }

// var students = ['Alice', 'Bob', 'Zoltan', 'Gary', 'Artem']
// var filteredStudents = filterNamesByFirstLetter(students, 'A')
// console.log('filteredStudents:', filteredStudents);


// examples of function scope


// let temperature = 30;

// if (temperature > 15) {
//     let jacket = false;
//     var happy = true;
// } else {
//     let jacket = true;
//     var happy = false;
// }

// // console.log('jacket after if-else blocks:', jacket);
// console.log('jacket after if-else blocks:', happy);




// let calculateEnergy = function(mass){
//     const speedOfLight = 245674768647
//     // speedOfLight++
//     return mass * speedOfLight ** 2
// }

// let energy = calculateEnergy(75)
// console.log(energy);

// const is a variable that is constant




// const song = {
//     title: 'Raspberry Beret',
//     artist: 'Prince'
// }

// console.log('song before mutation', song);
// song.title = 'When Doves Cry'
// song.rating = 'poor'
// console.log('song after mutation', song);


// name = "Steve"



