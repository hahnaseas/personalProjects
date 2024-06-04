const colors = ["Green", "Red", "RGBA(133,122,200)", "#F15025"]; //switches between these colors
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	// get random number between 0 and 3
	const randomNumber = getRandomNumber();
	console.log(randomNumber);
	
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber() {  
	return Math.floor(Math. random()* colors.length);
}
