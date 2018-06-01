

// TODO: Music via Soundcloud
/*
const audio = new Audio("URL");
audio.volume = 0.2;
document.querySelector("body").addEventListener("click", playAudio);


function playAudio() {
  audio.loop = true;
  audio.play();
}

function makeList() {
    deckRef.innerHTML = "";
    for (let i = 0; i < cardsArr.length; i++) {
      deckRef.innerHTML += `<li class=\"card\"><i class=\"${cardsArr[i]}\"></i></li>`;
    }

//store
  	  	function thirdPng() {
		image.src = "img/clicker3.png";

	setTimeout(function() {

	thirdPng();
	}, 900);
		}

*/
// const meow = new Audio("sfx/nyan.mp3");

/*refactor PRO
class Cat {
	constuctor(name) {
		this.name = `<p>${name}</p>`;
		NOPE this.img //outside of the constructor
		this.meowing = sayNyan();
	}
	meowing() {
        //console.log('y'); TU CZY W THIS
    }
	
	animation() {
	             //funkcja na zewnątrz dla wszystkich	             
	}
	
	counter() {
		
	}
}
const chi = new Player(this.sprite,0,0);
*/





function Cat(name) {
	this.name = `<p>${name}</p>`;
	
}

const chi = new Cat('Chi');
const chi2 = new Cat ('Chi no. 2');


function sayNyan() {
	meow = new Audio("sfx/nyan.mp3");
	meow.play();
}

let counterone = document.querySelector('.counter1');
let countertwo = document.querySelector('.counter2');
counterone.innerHTML = 0;
countertwo.innerHTML = 0;
let imageone = document.getElementsByTagName('img')[0];
let imagetwo = document.getElementsByTagName('img')[1];

imageone.onclick = function() {
	sayNyan();

	counterone.innerHTML++;
	imageone.src = "img/clicker2.png";
	setTimeout(function() {
		imageone.src = "img/clicker3.png";
  }, 900);
  

  }

imagetwo.onclick = function() {
	sayNyan();

	countertwo.innerHTML++;
	imagetwo.src = "img/3b.png";
	setTimeout(function() {
		imagetwo.src = "img/3c.png";
  }, 900);
  

  }


