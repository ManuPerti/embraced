var playState = {

// Fill a vector with a pseudo-random serie of letters
fillLettersArray: function(){
	var randNumber;
	var randLetter;
	for(var i = 0; i < testsNumber; i++){
		if(i > 0 && arrayLetters[i-1] == 'X'){
			var variation = game.rnd.integerInRange(0,1);
			if(variation == 0){
				arrayLetters.push('A');
			} else {
				randNumber= game.rnd.integerInRange(0, 24);
				randLetter = otherLetters[randNumber];
				arrayLetters.push(randLetter);
			}
			
		} else {
			randNumber= game.rnd.integerInRange(0, 45); // 45-60 depending frecuency
			if(randNumber < 25){
			randLetter = otherLetters[randNumber];
			arrayLetters.push(randLetter);
		} else {
			randLetter = 'X';
			arrayLetters.push(randLetter);
		}
			
		}

	}
	
	console.log(arrayLetters);
	this.setSolution();

},

// Fill the vector 'solution' with the values:
// '0': don't do anything
// '1': need clicking
setSolution: function(){
	solution[0] = 0;
	for(var i = 1; i < arrayLetters.length; i++){
		if(arrayLetters[i] == 'A' && arrayLetters[i-1] == 'X'){
			solution[i] = 1;
		} else {
			solution[i] = 0;
		}
	}
	console.log(solution);
	
},

// Draw the actual letter
drawLetter: function(){
	letterShowed = arrayLetters[testIndex];
	// Debug
	// console.log(letterShowed);
	testIndex++;
	if(letterShowed != null){
		letterLabel.setText(letterShowed);
		visionTime = new Date().getTime();
	}
},

// Manage click event
clickEvent: function(){
	answered[testIndex-1] = 1;
	if(solution[testIndex-1]==1){
		correctAnswer++;
		clickTime = new Date().getTime();
		responseTime[testIndex -1] = clickTime - visionTime;
	} else {
		wrongAnswer++;
	}
	
	
},
        
create: function(){
	
	// Reset variables values
	arrayLetters = [];
	solution = [];
	for(var i=0; i < testsNumber; i++){
		answered[i] = 0;
		responseTime[i] = null;
	}
	
	testIndex = 0;
	counter = 0;
	
	correctAnswer = 0;
	wrongAnswer = 0;
	missAnswer = 0;
	
	// Fill arrayLetters and solution arrays
	this.fillLettersArray();
	
	// Set background
	game.stage.backgroundColor = "#000000";

	letterLabel = game.add.text(game.world.width/2 - 50,game.world.height/2 - 50, '',
	{font:'120px Arial',fill: '#ffffff'});
	
	// Set click events
	var aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	aKey.onDown.add(this.clickEvent, this);
	
	game.input.onTap.add(this.clickEvent);
	
    game.time.events.repeat(timeout,testsNumber+1,this.drawLetter,game);

},

update: function(){
	
	if(testIndex==testsNumber+1){
		this.end();
	}

},

end:function(){
	game.state.start('win');
},
 
};
