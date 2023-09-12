const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    // answer = cinema.film.titles
    result = cinema.filmTitles()
    expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']

    assert.deepStrictEqual(expected, result)
  });

  it('should be able to find a film by title', function(){
    result = cinema.findByTitle('Blade Runner 2049')
    expected = [bladeRunner]
    assert.deepStrictEqual(result, expected)
  });


  it('should be able to filter films by genre', function(){
    result = cinema.filterByGenre('drama')
    expected = [moonlight, trainspotting]
    assert.deepStrictEqual(result, expected)
  });

  it('should be able to check whether there are some films from a particular year', function(){
    result = cinema.filmsByYear(2017)
    expected = true
    assert.strictEqual(result, expected)
  });

  it('should be able to check whether there are no films from a particular year', function(){
    result = cinema.filmsByYear(2019)
    expected = false
    assert.strictEqual(result, expected)
  });


  it('should be able to check whether all films are over a particular length', function(){
    result = cinema.checkLengths(60)
    expected = true
    assert.strictEqual(result, expected)
  });


  it('should be able to calculate total running time of all films', function(){
    result = cinema.sumLengths()
    expected = 622
    assert.strictEqual(result, expected)
  });

  it('should be able to filter films by year', function() {
    result = cinema.filterFilms(2017)
    expected = [bladeRunner, dunkirk, trainspotting]
    assert.deepStrictEqual(result, expected)
  })

  it('should be able to filter films by two properties', function() {
    result = cinema.filmsByProperty('genre', 'sci-fi') // title, genre, year, length
    expected = [bladeRunner]
    assert.deepStrictEqual(result,expected)
  }) // DRY Don't Repeat Yourself // RED tests fail GREEN make it run REFACTOR make it more efficient

});
