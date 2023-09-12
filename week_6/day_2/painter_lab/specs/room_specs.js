const assert = require('assert')
const Room = require('../room.js')

describe('Room', function(){

    let room
    this.beforeEach(function(){
        room = new Room(5) //Room(meters), default parameter painted y/n?
    })

    it('should have an area in meters squared', function(){
        const actual = room.area;
        assert.strictEqual(actual, 5)
    })

    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)
    })

    it('should be able to be painted', function(){
        room.paintRoom()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})