const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){

    let paint
    this.beforeEach(function(){
        paint = new Paint(2) //function empty_self() Paint(litres, volume)
    })

    it('should have a capacity of litres', function(){
        const actual = paint.litres;
        //assert.strictEqual(paint.litres, 2) alternative way to test
        assert.strictEqual(actual, 2) //a value that is not equal to 0?
    })

    it('should be able to check if it is empty', function(){
        //let paint = new Paint(0)
        const actual = paint.checkEmpty()
        assert.strictEqual(actual, false) // True/False value
    })

    it('should be able to empty itself of paint', function(){
        paint.emptySelf()
        const actual = paint.checkEmpty()
        assert.strictEqual(actual, true) //should be able ot convert volume to 0 and change empty to TRUE
    })
})