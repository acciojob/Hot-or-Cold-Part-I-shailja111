//your code here
var btn = document.getElementById("btn");
var numPtag = document.getElementById("num");
function generateRandomNumber()
	{
		var no = Math.floor(Math.random() * 20);
		numPtag.textContent = no;
		
		
	}
btn.addEventListener('click', generateRandomNumber);
