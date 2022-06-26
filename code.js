function start(){
	console.log("start() function started");
	var currTime = 10;
	console.log(currTime);
	document.getElementById("countdownStatus").innerHTML = currTime;
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 1000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 2000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 3000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 4000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 5000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 6000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 7000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 8000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 9000)
	
	setTimeout(function(){
		currTime = currTime - 1;
		document.getElementById("countdownStatus").innerHTML = "Blastoff!";
		console.log(currTime);
	}, 10000)
}
