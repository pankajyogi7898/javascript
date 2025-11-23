var img = document.querySelector("img");
var love = document.querySelector("i")


img.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
    
    setTimeout(() => {
        love.style.opacity = 0;
        love.style.transform = "translate(-50%,-330%) scale(0) rotate(200deg)";
    }, 700);
    setTimeout(() => {
        love.style.opacity = 1;
        
    }, 900);
    setTimeout(() => {
        love.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)";
        
    }, 1100);


})
