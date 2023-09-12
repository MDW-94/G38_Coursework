const Decorator = function(){
    this.paintStock = []
}

Decorator.prototype.addSomePaint = function(paint){
    this.paintStock.push(paint)   
}

Decorator.prototype.checkSumPaint = function(){
    // check paint stock total
    let total = 0
    for(let can of this.paintStock){
        total += can.litres
    }
    return total

}

// Decorator.prototype.checkPaintLitres = function(room){

// }

Decorator.prototype.checkPaintForRoom = function(){
    if (this.checkSumPaint() >= room.area){
        return true
    }
    return false
}

Decorator.prototype.decoratorPaintRoom = function(room){
    if(this.checkPaintForRoom(room) && room.painted === false){
        room.painted = true
    }

}

Decorator.prototype.reducePaint = function(room){
    let newStock = []
    let areaToPaint = room.area
    for(let can of this.paintStock){
        if(can.litres > areaToPaint){
            can.litres -= areaToPaint
            newStock.push(can)
        }
    }
    this.paintStock = newStock
}

// import class functions and features from paint and room into this file?

module.exports = Decorator;