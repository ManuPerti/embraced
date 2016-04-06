var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv',{preload:preload});

 // Initialize all global variables
var otherLetters = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
var aXLetters = ['A','X'];

var timeout = Phaser.Timer.SECOND/2;
var testsNumber = 20;

var arrayLetters = [];
var solution = [];
var answered = [];
var responseTime = [];

var testIndex = 0;

var letterLabel;
var letterShowed;

var timeout = Phaser.Timer.SECOND;

var visionTime;
var clickTime;

var stringResponse;
var averageResponse;

var correctAnswer;
var wrongAnswer;
var missAnswer;

function preload(){
	
	game.state.add('menu',menuState);
	game.state.add('play',playState);
	game.state.add('win',winState);
	
	// Scale up to whatever the browser can handle, but proportionally
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize();
	
		// This sets a limit on the up-scale
    game.scale.maxWidth = 800;
    game.scale.maxHeight = 600;
	
	console.log('Loading game');
	
	game.state.start('menu');
 }
 
 var menuState = {
	create: function(){
		game.stage.backgroundColor = "#000000";
		
		var welcomeMessage = 'CPT-AX Test'
		
		var instructions = 'You will see a serie of letters.\n' 
		+ 'Press \'A\' key or tap each time a letter "A"\n'
		+ 'appears right after a letter "X".\n'
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
		game.input.onTap.add(this.start);
		
	},
	
	start: function(){
		game.state.start('play');
	}
};
     
  
     
