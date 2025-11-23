var add = document.querySelector("#add");
var h2 = document.querySelector("h2");

var flag = 0
add.addEventListener("click", function () {
    if (flag === 0) {
        h2.innerHTML = "Programmer"
        h2.style.color = "blue"
        flag  = 1;
        add.innerHTML ="Remove"
        add.style.backgroundColor = "transparent"
    }
    else{
        add.innerHTML ="Add Friend`"
        add.style.backgroundColor = "darkcyan"
        h2.innerHTML = "Creator"
        h2.style.color = "red"
        flag=0 ; 

    }
})

