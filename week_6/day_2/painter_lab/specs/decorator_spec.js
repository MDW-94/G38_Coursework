const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('decorator', function(){
    
    let decorator
    this.beforeEach(function(){
        decorator = new Decorator() //added a decorator, who has an empty paintStock
    })

    it('should have an empty paint stock to begin with', function(){
        //const actual = decorator.paintStock.length
        //assert.strictEqual(actual, 0) - alternative
        //assert.strictEqual(decorator.paintStock.length, 0) - alternative
        //assert.deepStrictEqual(decorator.paintStock, []) - alternative
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []) //testing whether there are 0 items in paintStock array
    })

    it('should be able to add paint to paint stock', function(){
        let paint = new Paint(4)
        decorator.addSomePaint(paint)
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 1) //calling the addSomePaint function, checking paintStock populated
    })
    
    it('should be able to calculate total litres of paint in stock', function(){
        let paint = new Paint(10)
        decorator.addSomePaint(paint)
        decorator.addSomePaint(paint)
        decorator.addSomePaint(paint)
        let result = decorator.checkSumPaint()
        const actual = result;
        assert.strictEqual(actual, 30) //sum total of paintStock litres benig tested
    })

    it('should be able to calculate if there\s enough paint to paint a room', function(){
        let room = new Room(25)
        let paint = new Paint(10)
        decorator.addSomePaint(paint)
        decorator.addSomePaint(paint)
        decorator.addSomePaint(paint)
        let result = decorator.checkPaintForRoom(room)
        const actual = result;
        assert.strictEqual(actual, true) //function calling sum, if sum total is greater than (litres vs area square) BOOLEAN?
    })

    it('should be able to paint a room if there\s enough paint in stock', function(){
        decorator.paintRoom()
        // const actual = ;
        assert.strictEqual(actual, ) //function called to determine paintStock, then determine paint needed for room
    })

     it('should be able to decrease paint in stock when painting a room', function(){
        let room = new Room(25)
        let paint = new Paint(10)
        decorator.addSomePaint(paint)
        decorator.addSomePaint(paint)
        decorator.addSomePaint(paint)
        decorator.paintRoom(room)
        const actual = NaN
        assert.strictEqual(actual, true) //function calling sum, if sum total is greater than (litres vs area square) BOOLEAN?
    })
})
