const duck = document.getElementById("duck");
const stage = document.getElementById("stage");
var duckHit = 0;
var duckMiss = 0;


function checkScore(){
	var totalShots = Number(duckHit) + Number(duckMiss);
	if(totalShots == 4){
		alert("Game Over");
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

function showPosition(){
	var positie = Math.floor(Math.random(positions) * positions.length);
	console.log(positions[positie]);
	if(positions[positie] == "N"){
		setTop(-75);
	}else if(positions[positie] == "NE"){
		setTop(-75);
		setLeft(+75);
	}else if(positions[positie] == "E"){
		setLeft(+75);
	}else if(positions[positie] == "SE"){
		setTop(+75);
		setLeft(-75);
	}else if(positions[positie] == "S"){
		setTop(+75);
	}else if(positions[positie] == "SW"){
		setTop(+75);
		setLeft(-75);
	}else if(positions[positie] == "W"){
		setLeft(-75);
	}else if(positions[positie] == "NW"){
		setTop(-75);
		setLeft(-75);
	}
}
setInterval(showPosition, 500);


var totalShots = Number(duckHit) + Number(duckMiss);


if(duckHit == 2){
	alert("Game Over");
}