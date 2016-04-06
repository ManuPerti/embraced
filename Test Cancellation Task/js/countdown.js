var counterLabel;
var counter;

var countdownState = {

	create: function () {
		// Create a custom timer
		timer = game.time.create();
		
		// Create a delayed event 3s from now
		timerEvent = timer.add(timeout * 3, this.endTimer, this);
		
		// Start the timer
		timer.start();
		
		counterLabel = game.add.text(game.world.width/2 - 50,game.world.height/2 - 50, '',
			{font:'120px Arial',fill: '#ffffff'});

	},
		
	update: function () {
		// If our timer is running show the countdown
		if (timer.running) {
			this.showCountdown();
		}
		else {
			game.state.start('play');
		}
	},
	
	showCountdown: function(){
		counter = Math.round((timerEvent.delay - timer.ms) / 1000);
		if(counter != 0)
		counterLabel.setText(counter);
	},

	endTimer: function() {
		// Stop the timer when the delayed event triggers
		timer.stop();
	},

/* 	formatTime: function(s) {
		// Convert seconds (s) to a nicely formatted and padded time string
		var minutes = "0" + Math.floor(s / 60);
		var seconds = "0" + (s - minutes * 60);
		return minutes.substr(-2) + ":" + seconds.substr(-2);   
	} */
	
	
};

