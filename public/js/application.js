$(function(){
    $(document).bind('keypress', function(e){
      e.preventDefault();
      var $player1_position = $('#player1_strip td.active');
      var $player2_position = $('#player2_strip td.active');
      
      if ($player1_position.is(':last-child')) {
        $('#player1_strip').hide();
        $('#winner').html("Player 1 won, Player 2 lost");
        $('#player2_strip').hide();
        $('td').removeClass('active')
        return false;
      }
      else if ($player2_position.is(':last-child')) {
        $('#player1_strip').hide();
        $('#winner').append("Player 2 won, Player 1 lost");
        $('#player2_strip').hide();
        $('td').removeClass('active')
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
      $('#winner').empty();
      $("#player1_strip").show();
      $("#player2_strip").show();
      $('#player1_strip td:first-child').addClass('active');
      $('#player2_strip td:first-child').addClass('active');
    });
  });
