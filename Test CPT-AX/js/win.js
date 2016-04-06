var winState = {

create: function(){
	var base = 200;
	var size = 25;
	var span = 15;
	var styleLine = {font:'25px Arial',fill: '#ffffff'};
	
	stringResponse = "";
	averageResponse = 0;

	game.stage.backgroundColor = "#000000";
	this.countMissAnswers();
	this.countResponses();
	var nameLabel = game.add.text(80,80, 'CPT-AX results',
	{font:'50px Arial',fill: '#ffffff'});
	
	var startLabel = game.add.text(80,game.world.height-80,
	 'Press S or tap to repeat test', styleLine);
	
	console.log(answered);
	console.log(responseTime);
	
	var correctLabel = game.add.text(80,base,
	 'Correct answers: ' + correctAnswer, styleLine);
	
	var wrongLabel = game.add.text(80,base+size+span,
	 'Wrong answers: ' + wrongAnswer, styleLine);
	
	var missLabel = game.add.text(80,base+2*(size+span),
	 'Miss answers: ' + missAnswer, styleLine);

	var responseLabel = game.add.text(80,base+3*(size+span),
	 'Response time: ' + stringResponse, styleLine);
	
	var averageLabel = game.add.text(80,base+4*(size+span),
	'Average response time: ' + averageResponse, styleLine);
		
	var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
	
	sKey.onDown.addOnce(this.start,this);
	
	game.input.onTap.add(function(e){game.state.start('play')});

	},
	start: function(){
		game.state.start('play');
	},
	
	// Count the missed answers
	countMissAnswers: function(){
		var corrects = 0;
		for(var i=0; i < solution.length; i++){
			if(solution[i] == 1){
				corrects++;
			}
		}
		missAnswer = corrects - correctAnswer;
	},
	
	// Express the response time in a string and calculate average
	countResponses: function(){
		var count = 0;
		var sum = 0;
		for(var i = 0; i < responseTime.length;i++){
			if(responseTime[i] != null){
				stringResponse += responseTime[i] + " ";
				sum += responseTime[i];
				count++;
			}
			
		}
		
		averageResponse = Math.round(sum/count);
	},

};
