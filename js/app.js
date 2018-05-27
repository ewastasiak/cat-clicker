

// TODO: Music via Soundcloud
/*
const audio = new Audio("URL");
audio.volume = 0.2;
document.querySelector("body").addEventListener("click", playAudio);


function playAudio() {
  audio.loop = true;
  audio.play();
}

*/
const meow = new Audio("sfx/nyan.mp3");



function sayNyan() {
	meow.play();
}

let counter = document.querySelector('.counter');
counter.innerHTML = 0;
let image = document.querySelector('img');

image.onclick = function() {
	sayNyan();
	
	counter.innerHTML++;
	image.src = "img/clicker2.png";
	setTimeout(function() {
		image.src = "img/clicker3.png";
  }, 900);
  
}
  //document.getElementById("myImg").src = "hackanm.gif
  
  /*setTimeout(function() {
        comparePair();
      }, 900);*/
	  
	
	  
	  	function thirdPng() {
		image.src = "img/clicker3.png";
	
	setTimeout(function() {
		
	thirdPng();
	}, 900);
	

  }