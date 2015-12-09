var $ = require('jquery')
import TimerControl from "./timer_controls.es6"
$(document).ready(() => {
  var theCutestTimerEver = new TimerControl('#myTimer')
  theCutestTimerEver.timer.on("finished", function(){ 
    if($("#ding").length > 0) {
      $("#ding").trigger("load")
      $("#ding").trigger("play")
    }    
  })  
})