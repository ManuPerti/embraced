var chainLabel;
var xPos = 100;
var yPos = 200;
var xCross = xPos-2;
var yCross = yPos+2;
var xSpacing = 30;
var ySpacing = 64;

var changed = [];
var actualTest = 1;

var playState = {

	create: function () {
		console.log(actualTest);
		// Create a custom timer
		timer = game.time.create();
		
		// Create a delayed event 3s from now
		timerEvent = timer.add(timeout * 15, this.endTimer, this);
		
		// Start the timer
		timer.start();
		
		chainLabel = game.add.text(game.world.width/2 - 50,game.world.height/2 - 50, '',
			{font:'120px Arial',fill: '#ffffff'});
		
		console.log(arrayAnswer);

		correctAnswer = 0;
		wrongAnswer = 0;
		missAnswer = 0;
		
		actualTest++;
		this.showList();
		//crossCorrects();
		
		game.input.onTap.add(this.clickEvent);
		
	},
		
	update: function () {
		// If our timer is running show the countdown
		if (!timer.running) {
			arrayAnswer.push(correctAnswer + '/' + wrongAnswer + '/' + missAnswer);
			if(actualTest == testsNumber+1){
				game.state.start('win');
			} else {
				game.state.start('countdown');
			}

		}

	},

	endTimer: function() {
		// Stop the timer when the delayed event triggers
		timer.stop();
	},
	
	// Print the list of characters in the screen
	showList: function(){
		chainLabel.setText('')
		chainLabel = game.add.text(100,200, '',{font:'bold 25px Courier New',fill: '#ffffff'});
		chainShowed = this.chainsToString(this.generateChains());
		chainLabel.setText(chainShowed);

	},
	
	// Generate a vector with all test characters
	generateChains: function(){
		var chain = [];
		changed = [];
		var numberChains = 3;
		var chainLength = 20;
		var randomPos;
		
		// Fill the vector with initial characters
		for(var i = 0; i < numberChains*chainLength; i++){
			randomPos = game.rnd.integerInRange(0,allCharacters.length-1);
			chain[i] = allCharacters[randomPos];
		}
		
		// Add 5 and 9 cases
		for(var i = 0; i < numberChains; i++){

			var changeIndex = -1;
			var numberCases = game.rnd.integerInRange(3,5);
			for(var j = 0; j < numberCases; j++){
				// Avoid repeating positions to change
				while(changed.indexOf(changeIndex) != -1 || changeIndex == -1){
					changeIndex = game.rnd.integerInRange(i*20+j,chainLength + i*20 - 1);
				}
				var newNumber = game.rnd.integerInRange(0,1)
				chain[changeIndex] = specialCharacters[newNumber].toString();
				// Positions changed
				changed.push(changeIndex);
			}
		}
		
		//changed.shift();
		
		console.log(changed);
		console.log(chain);
		return chain;
	},
	
	// Returns the content of a vector in 3 lines
	chainsToString: function(vector){
		var printVector = '';
		for(var i = 0; i < 3; i++){
			for(var j = 0; j < vector.length/3; j++){
				printVector += vector[i*20+j] + " ";
			}
			printVector += "\n\n";
		}
		
		return printVector;
	},
	
	clickEvent: function(){
		var xMouse = game.input.mousePointer.x;
		var yMouse = game.input.mousePointer.y;
		checkClick(xMouse, yMouse);
	},
	
};

// Draw a single cross in the given X,Y position
function drawCross(xCross, yCross){
	var graphics = game.add.graphics();
		graphics.lineStyle(2, 0xffd900, 1);
    
		// draw a shape
		graphics.moveTo(xCross, yCross);
		graphics.lineTo(xCross+20, yCross+20);
		graphics.moveTo(xCross, yCross+20);
		graphics.lineTo(xCross+20, yCross);
}

// Draw a single cross in the given array position
function drawSingleCross(posArray){
	var line = Math.floor(posArray/20);
	var position = posArray%20;
	drawCross(xCross + position*xSpacing, yCross + line*ySpacing);
}

// Cross all correct options
function crossCorrects(){
	var line, position;
	for(var i = 0; i < changed.length; i++){
		drawSingleCross(changed[i]);
	}
}

// Check if the user has clicked over a correct option and keep the correct/wrong/miss answers
function checkClick(xMouse, yMouse){
	
	 var position, optionClicked;
	 position = Math.floor((xMouse - xPos)/xSpacing) + Math.floor((yMouse - yPos)/ySpacing) * 20;
	 optionClicked = changed.indexOf(position);
	 
	 if(optionClicked != -1){
		 correctAnswer++;
		 changed.splice(optionClicked,1);
		 drawSingleCross(position);
	 } else {
		 wrongAnswer++;
	 }
	 
	 missAnswer = changed.length;	 
}


