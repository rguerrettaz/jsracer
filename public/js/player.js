function Player(name){ 
	this.name = name;
	this.position = 0;
}

Player.prototype.advance = function(){
	this.position = this.position + 1;
}



// Sample Player objects
// player1 = new Player( {initials: "in", position: 1} )
// player2 = new Player( {initials: "in", position: 1} )


// What needs to be done to get it working

// 1) Create new player when players start game
// 2) set player position to 1.
// 3) each time player presses button their position increments by 1
