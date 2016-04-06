var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv',{preload:preload});

 // Initialize all global variables
var nextButton;
var welcomeMessage = 'Cancellation test';
var instructions, instructionsLabel;

var allCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','6','7','8'];
var specialCharacters = ['5','9'];

var timeout = Phaser.Timer.SECOND;
var testsNumber = 4;
var actualTest = 1;

var chainShowed = '';

var lineOfCharacters = [];

var correctAnswer;
var wrongAnswer;
var missAnswer;
var arrayAnswer = [];

function preload(){
	
	game.state.add('menu',menuState);
	game.state.add('countdown',countdownState);
	game.state.add('play',playState);
	game.state.add('win',winState);
	
	// Scale up to whatever the browser can handle, but proportionally
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize();
	
	// This sets a limit on the up-scale
    game.scale.maxWidth = 800;
    game.scale.maxHeight = 600;
	
	game.load.image('nextButton', '.\\assets\\button.png');
	
	console.log('Loading game');
	
	game.state.start('menu');
 }
 
 var menuState = {

	create: function(){
		game.stage.backgroundColor = "#000000";
		
		instructions = 'The objective of this test is to identify specific numbers\n'
		+ 'hidden in a block of characters.\n'
		+ 'Read through the lines and when you see a 5 or a 9,\n'
		+ 'click on it and it will be crossed out.\n'
		+ 'The goal is to cross out every 5 and 9 that you see\n'
		+ 'hidden in the lines.\n'
		+ 'You will have 15 seconds for each block.\n'
		+ 'There are 10 blocks total.';
		
		var nameLabel = game.add.text(80,80, welcomeMessage,
		{font:'40px Arial',fill: '#ffffff'});
		
		instructionsLabel = game.add.text(80,150, instructions,
		{font:'25px Arial',fill: '#ffffff'});
		
		instructionsLabel.lineSpacing = 5;
		
		nextButton = game.add.button(game.world.centerX - 95, game.world.height-120, 'nextButton', this.actionOnClick, this, 2, 1, 0);
		
/* 		nextButton.onInputOver.add(this.over, this);
		nextButton.onInputOut.add(this.out, this);
		nextButton.onInputUp.add(this.up, this); */

	},
	
	start: function(){
		game.state.start('countdown');
	},
	
	actionOnClick: function(){
		instructionsLabel.destroy();
		nextButton.destroy();
		instructions = 'There will be a 3 second countdown before\n'
		+ 'each block of characters appears.\n'
		+ 'After 15 seconds, the screen will clear\n'
		+ 'and another 3 second countdown will begin.\n'
		+ 'When you are ready, tap the screen to start.';
		
		instructionsLabel = game.add.text(80,150, instructions,
		{font:'25px Arial',fill: '#ffffff'});
		instructionsLabel.lineSpacing = 10;
		
		// Clicking or tapping the screen
		game.input.onTap.add(this.start);
		
	},

	
/* 	up: function(){
		console.log('button up');
	},
	
	over: function(){
		console.log('button over');
	},
	
	out: function(){
		console.log('button out');
	} */
	
};
     
  
     
