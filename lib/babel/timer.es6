var $ = require('jquery')
var EventEmitter = require('events')
class Timer extends EventEmitter{
  constructor(inputName) {
    super()
    this.input = $(inputName)
    this.actualNumber
    this.interval
    this.counting = false
    this.initValue = 0 
  }
  start() {
    this.initValue = parseInt(this.input.val())
    if(Number.isNaN(this.initValue)) {
      this.initValue = 0
    }else{
      this.counting = true
    }
    this.actualNumber = this.initValue   
    this.interval = window.setInterval(this.decreaseInput.bind(this), 1000)
  }
  pause(){
    this.counting = false
    this.myClearInterval()
  }
  decreaseInput() {
    if(this.actualNumber == 0){
      this.input.val("")
      this.counting = false
      this.myClearInterval()
      this.emit("finished")
    }else{
      this.actualNumber -= 1
      this.input.val(this.actualNumber)
    }
  }
  myClearInterval() {
    clearInterval(this.interval);
  }
  resetTimer() {
    if(this.initValue != 0){
      this.myClearInterval()
      this.actualNumber = this.initValue
      this.input.val(this.initValue)
      this.start()
    }    
  }
}

export default Timer;