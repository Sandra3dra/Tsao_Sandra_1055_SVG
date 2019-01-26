(() => {

	var svg = document.querySelectorAll(".svg");

	function logMyId() {
		console.log(this.id);
	}

	svg.forEach(currenticon => currenticon.addEventListener("click", logMyId));

	document.querySelector('#icon1').onclick = function() {
    alert("Hi! I am number one!");
	}

	document.querySelector('#icon2').onclick = function() {
    alert("Hi! I am number two!");
	}

	document.querySelector('#icon3').onclick = function() {
    alert("Hi! I am number three!");
	}

	document.querySelector('#icon4').onclick = function() {
    alert("Hi! I am number four!");
	}

	document.querySelector('#icon5').onclick = function() {
    alert("Hi! I am number five!");
	}

	document.querySelector('#icon6').onclick = function() {
    alert("Hi! I am number six!");
	}

	document.querySelector('#icon7').onclick = function() {
    alert("Hi! I am number seven!");
	}

	document.querySelector('#icon8').onclick = function() {
    alert("Hi! I am number eight!");
	}

	document.querySelector('#icon9').onclick = function() {
    alert("Hi! I am number nine!");
	}

	document.querySelector('#icon10').onclick = function() {
    alert("Hi! I am number ten!");
	}
})();