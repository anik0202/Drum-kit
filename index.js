//click detection
var n = document.querySelectorAll(".drum").length;
for(var i=0; i<n; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function (key){
        var key = this.textContent;
        makesound(key);
        buttonAnimation(key);
    });
//keydown detection
document.addEventListener("keydown", function (event){
    var key = event.key;
    makesound(key);
    buttonAnimation(key);
})
function makesound(key){
    switch (key) {
        case 'w':
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("./sounds/snare.mp3").play();
            break;
        case 'k':
            new Audio("./sounds/crash.mp3").play();
            break;
        case 'l':
            new Audio("./sounds/kick-bass.mp3").play();
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}