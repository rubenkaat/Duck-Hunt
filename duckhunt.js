const duck = document.getElementById("duck");
const stage = document.getElementById("stage");
var duckHit = 0;
var duckMiss = 0;


function checkScore(){
	var totalShots = Number(duckHit) + Number(duckMiss);
	if(totalShots == 20){
		alert("Game Over");
		alert("You got " + duckHit + " points");
	}
}

duck.onclick = function(event){
	console.log('hit');
	duckHit += 1;
	checkScore();
	event.stopPropagation();
}
stage.onclick = function(event){
	console.log('miss');
	duckMiss += 1;
	checkScore();
}
var positionTop = 200;
var positionLeft = 400;
const positions = [
	"N",
	"NE",
	"E",
	"SE",
	"S",
	"SW",
	"W",
	"NW"
];

function setTop(change){
	duck.style.top = parseInt(duck.style.top) + change + 'px'
}
function setLeft(change){
	duck.style.left = parseInt(duck.style.left) + change + 'px'
}
function checkPosition(){
	if(parseInt(duck.style.top) > 400){
		setTop(-200);
	}
	if(parseInt(duck.style.top) < 0){
		setTop(+200);
	}
	if(parseInt(duck.style.left) > 1300){
		setLeft(-200);
	}
	if(parseInt(duck.style.left) < 0){
		setLeft(+200);
	}
}

function showPosition(){
	var positie = Math.floor(Math.random(positions) * positions.length);
	console.log(positions[positie]);
	if(positions[positie] == "N"){
		setTop(-75);
		checkPosition();
	}else if(positions[positie] == "NE"){
		setTop(-75);
		setLeft(+75);
		checkPosition();
	}else if(positions[positie] == "E"){
		setLeft(+75);
		checkPosition();
	}else if(positions[positie] == "SE"){
		setTop(+75);
		setLeft(-75);
		checkPosition();
	}else if(positions[positie] == "S"){
		setTop(+75);
		checkPosition();
	}else if(positions[positie] == "SW"){
		setTop(+75);
		setLeft(-75);
		checkPosition();
	}else if(positions[positie] == "W"){
		setLeft(-75);
		checkPosition();
	}else if(positions[positie] == "NW"){
		setTop(-75);
		setLeft(-75);
		checkPosition();
	}
}
setInterval(showPosition, 500);
