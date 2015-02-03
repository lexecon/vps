/**
 * Created by lexecon on 03.02.15.
 */

var setSize = function(){
  document.getElementById('horizontal_size').innerHTML=window.innerWidth
  document.getElementById('vertical_size').innerHTML=window.innerHeight
}

window.onresize = function(){
  setSize()
}

setSize()
