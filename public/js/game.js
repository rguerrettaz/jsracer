function Game(p1_initials, p2_initials){
	this.winner = "";
	this.status = "new";
	this.timer = null;
	this.player1 = new Player(p1_initials);
	this.player2 = new Player(p2_initials);
	this.startTime = null;
	this.endTime = null;
};

Game.prototype.length = 18;

Game.prototype.endTimer = function(){ 
 	this.endTime = $.now();
 	this.timer = (this.endTime - this.startTime)/1000;
 };

Game.prototype.isOver = function(){
 	if ((this.player1.position-1) >= this.length) {
 		this.winner = this.player1.name
 		return true;
 	}
	else if ((this.player2.position-1) >= this.length) {
 		this.winner = this.player2.name
 		return true;
 	} 
 	else {
 		return false;
 	}
};

Game.prototype.render = function(){
 	if (!(this.isOver())){
 	  player_1_pos = parseInt(this.player1.position)
 	  player_2_pos = parseInt(this.player2.position)

 		$("#p1_strip td:nth-child("+ (player_1_pos + 1) +")").addClass('active');
 		$("#p1_strip td:nth-child("+ player_1_pos +")").removeClass('active');
 		$("#p2_strip td:nth-child("+ (player_2_pos + 1) +")").addClass('active');
 		$("#p2_strip td:nth-child("+ player_2_pos +")").removeClass('active');
 	}
};

 Game.prototype.save = function(){
 	if (this.status === "new"){
   $.ajax({
      type: "post",
      data: { winner: this.winner,
              time: this.timer,
              player1: this.player1,
              player2: this.player2,
              game_id: this.id },
      url: "/results",
      dataType: "text"
    })
      .done(function(data){
      	
      	console.log(data);
        // $s1.hide();
        // $('#winner').html("Player 1 won, Player 2 lost");
        // $s2.hide();
        // $('td').removeClass('active');
        // $('#results').show();
        // $('#game-url').show();
    })
      .fail(function(jqXHR, textStatus, errorThrown){
        alert(textStatus);
    });
    this.status = "done"
   };
 };
