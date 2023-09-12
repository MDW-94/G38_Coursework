const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  result = []
  this.films.forEach((film) => {
    foundFilmTitle = film.title
    result.push(foundFilmTitle)
  })
  return result
}

Cinema.prototype.findByTitle = function (filmTitle) {

  let result = this.films.filter((film) => {
    return film.title === filmTitle
  })

  return result
}

Cinema.prototype.filterByGenre = function (genre){
  // result = []
  // this.films.forEach((film) => {
  //   let foundFilm = (film.genre == genre)
  //   result.push(foundFilm)
  // })
  // return result
  //results = []
  let result = this.films.filter((film) => {
    return film.genre == genre
  })
  return result
}

//////////////////////////////

// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // Expected output: true

/////////////////////////////

Cinema.prototype.filmsByYear = function (year){
  // results = false
  // if(this.films.year == year){
  //   return results.push(true)
  // }
  // return this.films.some(results)
  let result = this.films.some((film) => {
    return film.year == year}
    );
  return result
}

Cinema.prototype.checkLengths = function (length){
  let result = this.films.some((film) => {
    return film.length >= length
  })
  return result
}

Cinema.prototype.sumLengths = function (){
  let result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return result
}

Cinema.prototype.filterFilms = function (year){
  // let result = []
  // this.films.forEach((film) => {
  //   filteredFilm = (film.year == year)
  //   result.push(filteredFilm)
  // })
  // return result
  let result = this.films.filter((film) => {
    return film.year == year
  })
  return result
}

Cinema.prototype.filmsByProperty = function (property, value){
  let result = this.films.filter((film) => {
    return film[property] === value
  })
  return result
}


module.exports = Cinema;
