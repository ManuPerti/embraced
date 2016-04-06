var loadState = {
	preload: function(){
		game.scale.maxWidth = 800;
		game.scale.maxHeight = 600;
		var loadingLabel = game.add.text(80,50,'loading...',
						{font: '30px Courier', fill: '#ffffff'});
	},
	
	create: function(){
		game.state.start('menu');
	}
	

};
