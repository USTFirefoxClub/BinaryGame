var question = 0;
var level = 1;
var progress = 0;
var score=0;
var time=60;
var highscore=0;
var counter = setInterval(timer, 1000);

//timer
function timer()
{
	time -= 1;
	if(time <= 0)
	{
		clearInterval(counter);
		$("#gameOverPopup").css("top", "0%");
		$("#finalScore").text(score);
		
	}
	$("#progress-bar").attr("aria-valuenow", time);
	$("#progress-bar").css("width", ((time/60)*100)+"%");
	$("#time-text").text(time+" seconds");
}

//array sum
var answer = new Array();
//128 64 32 16 8 4 2 1
answer[0] = 0;
answer[1] = 0;
answer[2] = 0;
answer[3] = 0;
answer[4] = 0;
answer[5] = 0;
answer[6] = 0;
answer[7] = 0;


//reset all buttons to 0
function resetAll()
{
	//128
	$("#toggle-128").text(0);
	$("#toggle-128").css("background-color", "#FFBD4D");	
	answer[0] = 0;
	//64
	$("#toggle-64").text(0);
	$("#toggle-64").css("background-color", "#FFBD4D");
	answer[1] = 0;
	//32
	$("#toggle-32").text(0);
	$("#toggle-32").css("background-color", "#FFBD4D");
	answer[2] = 0;
	//16
	$("#toggle-16").text(0);
	$("#toggle-16").css("background-color", "#FFBD4D");
	answer[3] = 0;
	//8
	$("#toggle-8").text(0);
	$("#toggle-8").css("background-color", "#FFBD4D");
	answer[4] = 0;
	//4
	$("#toggle-4").text(0);
	$("#toggle-4").css("background-color", "#FFBD4D");
	answer[5] = 0;
	//2
	$("#toggle-2").text(0);
	$("#toggle-2").css("background-color", "#FFBD4D");
	answer[6] = 0;
	//1
	$("#toggle-1").text(0);
	$("#toggle-1").css("background-color", "#FFBD4D");
	answer[7] = 0;
}

//check progress
function checkProgress()
{
	if(progress == 5)
	{
		level += 1;
		progress=0;
		addTime();
		$("#currentLevel").text(level);
		$("#currentProgress").text(progress);
	}
}

//add array contents
function total()
{
	return answer[0]+answer[1]+answer[2]+answer[3]+answer[4]+answer[5]+answer[6]+answer[7];
}

//generate question
function generateQuestion(level)
{
	switch(level)
	{
		case 1: case 2:
			return Math.floor(Math.random()*(7-1+1))+1;
			break;
		case 3: case 4: case 5:
			return Math.floor(Math.random()*(15-8+1))+8;
			break;
		case 6: case 7: case 8: case 9:
			return Math.floor(Math.random()*(31-16+1))+16;
			break;
		case 10: case 11: case 12: case 13: case 14:
			return Math.floor(Math.random()*(63-32+1))+32;
			break;
		case 15: case 16: case 17: case 18: case 19:
			return Math.floor(Math.random()*(127-64+1))+64;
			break;
		default:
			return Math.floor(Math.random()*(255-128+1))+128;
			break;
	}	
}


//compare answer with question
function compare(q, a)
{
	if(q == a)
	{
		var audio1 = document.getElementById('audio1');
		audio1.play();
		addScore(level);
		resetAll();
		progress+=1;
		$("#currentProgress").text(progress);
		checkProgress();
		question = generateQuestion(level);
		$("#question").text(question);
	}
}

function addScore(level)
{
	switch(level)
	{
		case 1: case 2:
			score += 50;
			$("#currentScore").text(score);
			break;
		case 3: case 4: case 5:
			score += 100;
			$("#currentScore").text(score);
			break;
		case 6: case 7: case 8: case 9:
			score += 200;
			$("#currentScore").text(score);
			break;
		case 10: case 11: case 12: case 13: case 14:
			score += 300;
			$("#currentScore").text(score);
			break;
		case 15: case 16: case 17: case 18: case 19:
			score += 400;
			$("#currentScore").text(score);
			break;
		default:
			score += 500;
			$("#currentScore").text(score);
			break;
	}
}


//function to toggle between 1 and 0
function toggle() 
{
	//128
	var button = document.getElementById('toggle-128');
	button.addEventListener('click', function() {
		var audio = document.getElementsByTagName("audio")[0];
		audio.play();
		if($("#toggle-128").text() == 0)
		{
			$("#toggle-128").text(1);
			$("#toggle-128").css("background-color", "#9CC408");
			answer[0] = 128;
			compare(question, total());
		}
		else
		{
			$("#toggle-128").text(0);
			$("#toggle-128").css("background-color", "#FFBD4D");
			answer[0] = 0;
			compare(question, total());
		}
	});
	
	//64
	var button = document.getElementById('toggle-64');
	button.addEventListener('click', function() {
		var audio = document.getElementsByTagName("audio")[0];
	audio.play();
		if($("#toggle-64").text() == 0)
		{
			$("#toggle-64").text(1);
			$("#toggle-64").css("background-color", "#9CC408");
			answer[1] = 64;
			compare(question, total());
		}
		else
		{
			$("#toggle-64").text(0);
			$("#toggle-64").css("background-color", "#FFBD4D");

			answer[1] = 0;
			compare(question, total());
		}
	});
	
	//32
	var button = document.getElementById('toggle-32');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-32").text() == 0)
		{
			$("#toggle-32").text(1);
			$("#toggle-32").css("background-color", "#9CC408");
			answer[2] = 32;
			compare(question, total());
		}
		else
		{
			$("#toggle-32").text(0);
			$("#toggle-32").css("background-color", "#FFBD4D");
			answer[2] = 0;
			compare(question, total());
		}
	});
	
	//16
	var button = document.getElementById('toggle-16');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-16").text() == 0)
		{
			$("#toggle-16").text(1);
			$("#toggle-16").css("background-color", "#9CC408");
			answer[3] = 16;
			compare(question, total());
		}
		else
		{
			$("#toggle-16").text(0);
			$("#toggle-16").css("background-color", "#FFBD4D");
			answer[3] = 0;
			compare(question, total());
		}
	});
	
	//8
	var button = document.getElementById('toggle-8');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-8").text() == 0)
		{
			$("#toggle-8").text(1);
			$("#toggle-8").css("background-color", "#9CC408");
			answer[4] = 8;
			compare(question, total());
		}
		else
		{
			$("#toggle-8").text(0);
			$("#toggle-8").css("background-color", "#FFBD4D");

			answer[4] = 0;
			compare(question, total());
		}
	});
	
	//4
	var button = document.getElementById('toggle-4');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-4").text() == 0)
		{
			$("#toggle-4").text(1);
			$("#toggle-4").css("background-color", "#9CC408");
			answer[5] = 4;
			compare(question, total());
		}
		else
		{
			$("#toggle-4").text(0);
			$("#toggle-4").css("background-color", "#FFBD4D");

			answer[5] = 0;
			compare(question, total());
		}
	});
	
	//2
	var button = document.getElementById('toggle-2');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-2").text() == 0)
		{
			$("#toggle-2").text(1);
			$("#toggle-2").css("background-color", "#9CC408");
			answer[6] = 2;
			compare(question, total());
		}
		else
		{
			$("#toggle-2").text(0);
			$("#toggle-2").css("background-color", "#FFBD4D");

			answer[6] = 0;
			compare(question, total());
		}
	});
	
	//1
	var button = document.getElementById('toggle-1');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-1").text() == 0)
		{
			$("#toggle-1").text(1);
			$("#toggle-1").css("background-color", "#9CC408");
			$("#toggle-1").css("background-color", "#9CC408");
			answer[7] = 1;
			compare(question, total());
		}
		else
		{
			$("#toggle-1").text(0);
			$("#toggle-1").css("background-color", "#FFBD4D");
			answer[7] = 0;
			compare(question, total());
		}
	});

//Mute song
var button = document.getElementById('mute');
	button.addEventListener('click', function() {
		var audio = document.getElementsByTagName("audio")[0];
		var audio = document.getElementsByTagName("audio")[0];	
		var audio1 = document.getElementById('audio1');
		if(audio.muted==false)
		 {
			audio.muted=true;
			audio1.muted=true;
			$("#muteText").text("Unmute");
			$("#mute").attr("class","btn btn-danger");
		}
		else
		{
			audio.muted=false;  
			audio1.muted=false;
			$("#muteText").text("Mute");
			$("#mute").attr("class","btn btn-info");			
		}
    });	
}

//add time
function addTime()
{
	if((time+10)>60)
	{
		time=60;
	}
	else
	{
		time+=10;
	}
}


//MAIN

$(document).ready(function(){
	toggle();
	level = 1;
	question = generateQuestion(level);
	
	$("#currentLevel").text(level);
	$("#question").text(question);
	
	
});
