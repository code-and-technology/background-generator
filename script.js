// alert("connected");
// Note below, have not outlined the Steps. Maybe do so sometime. This is a good lesson showing how to create a DOM app.
// Note, Step 1 Capture HTML to JavaScript Variables, Step 2 Add Event Listeners, Step 3 Add Event Listeners with Functions, Step 4 Refactor as separate Function and Event Listeners as Call Back Functions.

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// body.style.background = "red";
// console.log(gradient);

// console.log(h3);
// console.log(color1);
// console.log(color2);

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// color1.addEventListener("input", function() {
// 	// console.log(color1.value);
// 	body.style.background = 
// 		"linear-gradient(to right, " 
// 		+ color1.value 
// 		+ ", " 
// 		+ color2.value 
// 		+ ")";
// })

// color2.addEventListener("input", function() {
// 	// console.log(color2.value);
// 	body.style.background = 
// 		"linear-gradient(to right, " 
// 		+ color1.value 
// 		+ ", " 
// 		+ color2.value 
// 		+ ")";
// })


