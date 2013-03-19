$(function(){
  var startTime = null;
  var finishTime;
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
        $('#player1_strip').hide();
        $('#winner').html("Player 1 won, Player 2 lost");
        $('#player2_strip').hide();
        $('td').removeClass('active');
        $('#results').show();
        console.log(data);
        $('#game-url').show();
      })
        .fail(function(jqXHR, textStatus, errorThrown){
          alert(textStatus);
        });
      
        return false;
      }
      else if ($player2_position.is(':last-child')) {
        var winner = $('#player2initials').text();
         $.ajax({
          type: "post",
          dataType: "text",
          data: { name: winner },
          url: "/results"
        })
         .done(function(data){
        $('#player1_strip').hide();
        $('#winner').html("Player 1 won, Player 2 lost");
        $('#player2_strip').hide();
        $('td').removeClass('active');
        $('#results').show();
        $('#game-url').show();
      })
        $('#player1_strip').hide();
        $('#winner').append("Player 2 won, Player 1 lost");
        $('#player2_strip').hide();
        $('td').removeClass('active');
        $('#results').show();
        return false;
      }
      else if(e.keyCode===49){
        console.log("ASDFASDFSAF");
        $('#player1_strip td.active').next().addClass('active');
        $('#player1_strip td.active').prev().removeClass('active');
      }
      else if (e.keyCode===48){
        console.log("ASDFASDFSAF");
        $('#player2_strip td.active').next().addClass('active');
        $('#player2_strip td.active').prev().removeClass('active');
      
        console.log("did you get here");
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
      $("#player1_strip").show();
      $("#player2_strip").show();
      $('#player1_strip td:first-child').addClass('active');
      $('#player2_strip td:first-child').addClass('active');
    });
  
});

