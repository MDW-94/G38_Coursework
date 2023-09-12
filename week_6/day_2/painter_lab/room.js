const Room = function(area){
    this.area = area
    this.painted = false
}

Room.prototype.checkPainted = function(){
    if (this.painted == false) {
        return false
    }else{
        return true
    }
}

Room.prototype.paintRoom = function(){
    this.painted = true
}

module.exports = Room;