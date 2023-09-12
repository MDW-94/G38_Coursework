// var sports = [];
// var sports = ['football', 'tennis', 'rugby'];
// console.log(sports.length);

// var firstSport = sports[1]
// console.log(firstSport);

// sports.push('curling')
// sports.push('snooker')

// console.log(sports);

// sports.pop();
// console.log(sports);

// // add item to the start

// sports.unshift('basketball')
// console.log(sports);
// sports.shift()
// console.log(sports);


// var removedSport = sports.splice(2, 1)
// console.log(sports);

// for( var currentSport of sports){
//     var uppercasedSport = currentSport.toUpperCase()
//     console.log(uppercasedSport);
// }

for(var i = 0; i < sports.length; i++){
    var currentSport = sports[i]
    // var currentSport of sports
    var uppercasedSport = currentSport.toUpperCase()
    console.log(uppercasedSport);
    console.log("index: ", i);
}

var numbers = [1, 2, 3, 3, 4, 5]
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] == numbers[i - 1]){
        console.log("found it");
    }
}


var movie = {
    title: 'it\'s a wonderful life',
    year: 1946,
    language: 'Spanish'
}

var title = movie.title
console.log('title:', title);


movie.cast = ['James Stewart', 'Donna Reed']

movie.language = 'English'

console.log("movie:", movie);

movie['language'] = "French";

movie["subtitle-language"] = "German"

console.log("movie:", movie);

var propertyToAccess = "subtitle-language"
console.log(movie[propertyToAccess]);

delete movie.year

console.log("movie:", movie);

movie.ratings = {
    critic: 94,
    audience: 95
}

console.log("movie:", movie);

for(var key in movie){
    var value = movie[key]
    console.log(`The ${key} is ${value}`);
}


var keys = Object.keys(movie.ratings)
console.log('key', keys);



