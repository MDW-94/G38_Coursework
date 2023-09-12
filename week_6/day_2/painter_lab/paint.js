const Paint = function(litres){
    this.litres = litres
    this.empty = false
}

Paint.prototype.checkEmpty = function(){
    //if (this.litres == 0){}
    if (this.empty == false) {
        return false
    }else{
        return true
    }
}

Paint.prototype.emptySelf = function(){
    //deplete this.volume to 0
    this.litres = 0
    //convert this.empty to true
    this.empty = true
}

module.exports = Paint;