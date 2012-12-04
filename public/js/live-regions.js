$(function() {
	var assertiveTime, politeTime;
	$("#start-assertive").click(function(){
		$("#stop-assertive").removeClass("disabled").removeAttr("aria-disabled");
		$("#start-assertive").addClass("disabled").attr("aria-disabled","true");
		assertiveTime = setInterval(function(){
			//$("#live-assertive").empty().append("<p>"+randomName()+" walked "+randomInt(0,30)+" miles "+randomDirection()+".</p>");

			document.getElementById('live-assertive').innerHTML = "<p>"+randomName()+" walked "+randomInt(1,30)+" miles "+randomDirection()+".</p>";

		},3000);
	});

	$("#stop-assertive").click(function(){
		$("#start-assertive").removeClass("disabled").removeAttr("aria-disabled");
		$("#stop-assertive").addClass("disabled").attr("aria-disabled","true");
		clearInterval(assertiveTime);
	});

	$("#start-polite").click(function(){
		$("#stop-polite").removeClass("disabled").removeAttr("aria-disabled");
		$("#start-polite").addClass("disabled").attr("aria-disabled","true");
		politeTime = setInterval(function(){
			//$("#live-polite").empty().append("<p>"+randomName()+" walked "+randomInt(0,30)+" miles "+randomDirection()+".</p>");

			document.getElementById('live-polite').innerHTML = "<p>"+randomName()+" "+ randomAction() +" a "+randomAdj()+" "+randomNoun()+" "+randomPlace()+".</p>";

		},5000);
	});

	$("#stop-polite").click(function(){
		$("#start-polite").removeClass("disabled").removeAttr("aria-disabled");
		$("#stop-polite").addClass("disabled").attr("aria-disabled","true");
		clearInterval(politeTime);
	});
});


function randomInt(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

function randomizer(thisArray){
	return Math.floor(Math.random() * thisArray.length);
}
function randomDirection(){
	var arr = ['north', 'south', 'west', 'east'];
	return arr[randomizer(arr)];
}

function randomName(){
	var arr = ['Chris', 'Amy', 'Nate', 'Bob', 'Steve', 'Hans', 'Lisa', 'Jessica', 'Angela'];
	return arr[randomizer(arr)];
}

function randomAction(){
	var arr = ['steals', 'finds', 'creates','saves','wins'];
	return arr[randomizer(arr)];
}

function randomAdj(){
	var arr = ['war-hardened', 'pink', 'unbreakable', 'weak','dying','mysterious', 'mischievous', 'lost', 'magical', 'struggling'];
	return arr[randomizer(arr)];
}

function randomPlace(){
	var arr = ['on a cliff', 'in Sudan', 'in Washington DC', 'in the backyard', 'in research lab', 'in spaceshuttle'];
	return arr[randomizer(arr)];
}

function randomNoun(){
	var arr = ['version of him/herself', 'message in a bottle', 'pocketwatch', 'puppy', 'spaceship', 'bowl of pasta', 'time machine', 'UFO', 'photograph', 'baseball', 'cellphone'];
	return arr[randomizer(arr)];
}

function currentTime(){

}

