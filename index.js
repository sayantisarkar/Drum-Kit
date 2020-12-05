for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('button')[i].addEventListener("click", function() { //Anonymous function
    //alert("I got clicked");
    var buttonType = this.innerHTML;
    playByKey(buttonType);
    buttonAnimation(buttonType);
  })
}

function playByKey(buttonType){
  switch (buttonType) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

      case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    default:
     console.log("Default sound");

  }

}
document.addEventListener("keypress",function(event){
//  console.log("Key is preseed");
  //console.log(event.key);
  playByKey(event.key);
  buttonAnimation(event.key);
})

function buttonAnimation(key){
  var activeButton = document.querySelector("."+ key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

//HIgh order function
// function add(num1, num2) {
// return num1 + num2;
// }
//
// function subtract(num1, num2) {
// return num1 - num2;
// }
//
// function multiply(num1, num2) {
// return num1 * num2;
// }
//
// function divide(num1, num2) {
// return num1 / num2;
// }
//
// function calculator(num1, num2, operator) {
// return operator(num1, num2);
// }
