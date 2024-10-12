

let valDisplays = document.querySelectorAll(".num");
let interval = 1500;

valDisplays.forEach((valDisplay) => {
	let startVal = 0;
	let endVal = parseInt(valDisplay.getAttribute("data-val"));
	let duration = Math.floor(interval / endVal);
	let character = valDisplay.textContent;
	let counter = setInterval(function(){
		startVal += 1;
		valDisplay.textContent = `${startVal+character}`;
		if(startVal == endVal){
			clearInterval(counter);
		}
	}, duration)
})

