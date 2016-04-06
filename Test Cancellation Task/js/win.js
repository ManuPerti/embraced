
var winState = {

create: function(){
	var base = 200;
	var size = 25;
	var span = 15;
	var styleLine = {font:'25px Arial',fill: '#ffffff'};

	game.stage.backgroundColor = "#000000";

	var nameLabel = game.add.text(80,80, 'Cancellation test results',
	{font:'50px Arial',fill: '#ffffff'});
	
	var startLabel = game.add.text(80,game.world.height-80,
	 'Press S or tap to repeat test', styleLine);
	
	var correctLabel = game.add.text(80,base,
	 'Correct/Wrong/Miss answers: \n' + printResults(), styleLine);
		
	var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
	
	sKey.onDown.addOnce(this.start,this);
	
	//game.input.onTap.add(function(e){game.state.start('game')});

	},
	start: function(){
		game.state.start('game');
	},

};

function printResults(){
	var results = '';
	for(var i = 0; i < arrayAnswer.length; i++){
		results += arrayAnswer[i] + "\t"
		if(i==1)results+="\n\n";
	}
	return results;
}
