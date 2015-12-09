var $ = require('jquery')
import Timer from "./timer.es6"

class TimerControl {
  constructor(timer) {
    //timer should be a CSS selector
    this.timer = new Timer(timer)
    this.pauseUnpause = $(`[data-action="pauseUnpause"][data-control="${timer}"]`)
    this.reset = $(`[data-action="reset"][data-control="${timer}"]`)
    this.pauseUnpause.click(this.pauseUnpauseHandler.bind(this))
    this.reset.click(this.resetHandler.bind(this))
    this.stopColor = "#CA5B7F"
    this.playColor = "#BA83CC"
    this.timer.on("finished", this.finishHandler.bind(this))
  }
  pauseUnpauseHandler(){
    if(this.timer.counting) {
      this.timer.pause() 
      this.changeColor()  
    }else{
      this.timer.start()
      this.changeColor()    
    } 
  }
  resetHandler(){
    this.timer.resetTimer()
  }
  changeColor(){
    if(this.timer.counting) {
      this.pauseUnpause.css("background-color", this.stopColor);
      this.pauseUnpause.html("Pause")
    }else{
      this.pauseUnpause.css("background-color", this.playColor);
      this.pauseUnpause.html("Start")
    }
  }
  finishHandler(){
    this.changeColor()
  }
}

export default TimerControl;