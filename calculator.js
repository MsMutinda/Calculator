
var results = document.getElementById("display");
var inputs = ["","",""];
var values = [];

var add = function(a, b) {return a + b;}
var subtract = function(a, b) {return a - b;}
var multiply = function(a, b) {return a * b;}
var divide = function(a, b) {return a / b;}
var square = function(a,b) {return Math.pow(a,b);}
var sqrt = function(a) {return Math.sqrt(a);}

var equals = function() {
	if (inputs[1] === "+") {
		var sum = add(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();	
		values.push(sum);
	}
	else if (inputs[1] === "-") {
		var difference = subtract(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();	
		values.push(difference)
	}
	else if (inputs[1] === "*") {
		var product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();	
		values.push(product);	
	}
	else if (inputs[1] === "/") {
		var quotient = divide(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();
		values.push(quotient);
	}
	else if (inputs[1] === "√") {
		var root = sqrt(parseFloat(inputs[0]), parseFloat(inputs[1]));
		clear();
		values.push(root);
	}
	else if (inputs[1] === "²") {
		var square = square(parseFloat(inputs[0]), parseFloat(inputs[2]));
		clear();
		values.push(square);
	}
	display();
}

var update = function(value) {
	inputs.push(value);
	inputs.shift();
}
var clear = function() {
	inputs = ["","",""];
	values = [];
	display();
}
var del = function() {
  if(values.length > 0) {
    values.pop();
  }
  else {
    for(var i = 2; i >= 0; i--) {
      var x = inputs[i]
      if(inputs[i]) { 
        var y = x.slice(0,-1); 
        inputs[i] = y;
      }
    }
  } 
}

var display = function() {
	results.innerHTML = inputs.join(" ") + " " + values.join("");
}

for (var i = 0; i < 11; i++) {
	document.getElementById(i).addEventListener("click", function() {
		values.push(this.innerHTML);
		display();
	});
}

for (var i = 11; i < 15; i++) {
	document.getElementById(i).addEventListener("click", function() {
		update(values.join(""));
		update(this.innerHTML);
		values = [];
		display();
	});
}

for (var i = 18; i < 20; i++) {
	document.getElementById(i).addEventListener("click", function() {
		update(values.join(""));
		update(this.innerHTML);
		values = [];
		display();
	});
}

for (var i=15; i<20; i++) {
document.getElementById(15).addEventListener("click", function(){
	update(values.join(""));
	
	equals();
});
}

document.getElementById(16).addEventListener("click", function(){ clear(); });

document.getElementById(17).addEventListener("click", function(){ 
  del();
	display();
});
