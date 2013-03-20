$(document).ready(function(){
  $s1 = $("#p1_strip");
  $s2 = $("#p2_strip");
  
  $game = new Game();
  $game.player1.name = $s1.data('player-name');
  $game.player2.name = $s2.data('player-name');
  $game.startTime = $.now();

  $('.play').submit(function(e){

    var form = $(this);
    $game.player1.name = form[0][0].value;
    $game.player2.name = form[0][1].value;

  });
    
  $(document).on("keyup", function(e){
   
    
    if ($game != undefined){
      $('#game-url').hide();
      var code = e.keyCode ? e.keyCode : e.which;
      if (code===49){
        $game.player1.advance();
      }
      else if (code===48){
        $game.player2.advance();     
      };

      $game.render();

    };
    if ($game.isOver()){
      $game.endTimer();
      $game.save();
      
    };  

  });

});
  // $('#reset').click(function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     type: "post",
  //     url: "/playagain"
  //   })
  //   .done(function(data){
  //     $('#game-url a').attr("href", "/game/" + data + "/results");
  //   })
  //   .fail(function(){
  //     alert("nasdfasdf");
  //   });
  //   $('#game-url').hide();
  //   $('#winner').empty();
  //   $s1.show();
  //   $s2.show();
  //   $('#p1_strip td:first-child').addClass('active');
  //   $('#p2_strip td:first-child').addClass('active');
  // });
