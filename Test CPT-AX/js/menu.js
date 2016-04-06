var menuState = {
	create: function(){
		game.stage.backgroundColor = "#000000";
		
		var welcomeMessage = 'CPT-AX Test'
		
		var instructions = 'You will see a serie of letters.\n' 
		+ 'Press any key only when a letter "A" appears\n'
	    + 'right after a letter "X" had been showed before.\n'
		+ 'Otherwise, don\'t press anything';
		
		var nameLabel = game.add.text(80,80, welcomeMessage,
		{font:'50px Arial',fill: '#ffffff'});
		
		var instructionsLabel = game.add.text(80,180, instructions,
		{font:'30px Arial',fill: '#ffffff'});
		
		var startLabel = game.add.text(80,game.world.height-120,
		 'Press S or tap to start',
		{font:'25px Arial',fill: '#ffffff'});
		
		// Pressing 'S' key event
		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
		sKey.onDown.addOnce(this.start,this);
		
		// Clicking or tapping the screen
		game.input.onTap.add(function(e){game.state.start('play')});
		
	},
	
	start: function(){
		game.state.start('play');
	}
};
