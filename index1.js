function alert1(){
   
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
                
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;   
            
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare1 = new Audio('./sounds/snare.mp3');
            snare1.play();
            break;

        case "k":
            var kick1 = new Audio('./sounds/kick-bass.mp3');
            kick1.play();
            break;

        case "l":
             var crash = new Audio('./sounds/crash.mp3');
             crash.play();
            break;
    }

}

var number0fbuttons = $(".drum").length;

for(i=0;i<number0fbuttons;i++){
    $(".drum")[i].addEventListener("click",alert1);

}

document.addEventListener("keypress", function (event){

    keypressing(event.key);

});

function keypressing(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
                
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;   
            
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare1 = new Audio('./sounds/snare.mp3');
            snare1.play();
            break;

        case "k":
            var kick1 = new Audio('./sounds/kick-bass.mp3');
            kick1.play();
            break;

        case "l":
             var crash = new Audio('./sounds/crash.mp3');
             crash.play();
            break;
    }

}

