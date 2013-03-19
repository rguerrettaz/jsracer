$(function(){
  var startTime = null;
  var finishTime;
  var winner;
  var s1 = $("#player1_strip")
  var s2 = $("#player2_strip")



  $(document).on("keyup", function(e){
    $('#game-url').hide();

  var code = (e.keyCode ? e.keyCode : e.which);

  if (startTime === null){
    startTime = $.now();
  }

  var $player1_position = $('#player1_strip td.active');
  var $player2_position = $('#player2_strip td.active');
  
  if (code===49){
        $('#player1_strip td.active').next().addClass('active');
        $('#player1_strip td.active').prev().removeClass('active');
      }
  else if (code===48){
        $('#player2_strip td.active').next().addClass('active');
        $('#player2_strip td.active').prev().removeClass('active');
      };
    
    if ($player1_position.is(':last-child')) {
      var winner = $('#player1initials').text();
      var endTime = $.now();
      finishTime = (endTime-startTime);
        

         $.ajax({
          type: "post",
          dataType: "text",
          data: { name: winner,
                  gameLength: finishTime/1000 },
          url: "/results"
        })
        .done(function(data){
        s1.hide();
        $('#winner').html("Player 1 won, Player 2 lost");
        s2.hide();
        $('td').removeClass('active');
        $('#results').show();
        console.log(data);
        $('#game-url').show();
      })
        .fail(function(jqXHR, textStatus, errorThrown){
          alert(textStatus);
        });
      };


        if ($player2_position.is(':last-child')) {
        var winner = $('#player2initials').text();
        var endTime = $.now();
        finishTime = (endTime-startTime);
        

         $.ajax({
          type: "post",
          dataType: "text",
          data: { name: winner,
                  gameLength: finishTime/1000 },
          url: "/results"
        })
         .done(function(data){
        s1.hide();
        $('#winner').html("Player 2 won, Player 1 lost");
        $('#player2_strip').hide();
        $('td').removeClass('active');
        $('#results').show();
        $('#game-url').show();
      })
        .fail(function(jqXHR, textStatus, errorThrown){
          alert(textStatus);
        });
      };
      
    });
    $('#reset').click(function(e){
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/playagain"
      })
      .done(function(data){
        $('#game-url a').attr("href", "/game/" + data + "/results");
      })
      .fail(function(){
        alert("nasdfasdf");
      });
      $('#game-url').hide();
      $('#winner').empty();
      s1.show();
      s2.show();
      $('#player1_strip td:first-child').addClass('active');
      $('#player2_strip td:first-child').addClass('active');
    });
});

