// global vars:
var otherLetters = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z'];
var aXLetters = ['A','X'];

var timeout = Phaser.Timer.SECOND/2;
var testsNumber = 20;

var arrayLetters = [];
var solution = [];
var answered = [];
var responseTime = [];

//var counter = 0;
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

var bootState = {
	create: function(){
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.setScreenSize();
		console.log('boot state');
		game.state.start('load');
	}
};
