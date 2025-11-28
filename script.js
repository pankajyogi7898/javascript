addEventListener("mousemove",function(e){
    console.log(e.clientX,e.clientY);
    document.body.style.setProperty("--x" , e.x + 'px');
    document.body.style.setProperty("--y" , e.y + 'px');

})