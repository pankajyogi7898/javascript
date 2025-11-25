var body = document.body;

var div = document.querySelector(".main")

body.addEventListener("mousemove",function(dets){
    div.style.left = dets.x + "px"
    div.style.top = dets.y + "px"
    
})