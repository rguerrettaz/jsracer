game =Game.create :winner => "wat",
                  :loser => "taw"

a = Player.create :initials => "wat"
b = Player.create :initials => "taw"

game.players << a
game.players << b

#  player.games.first.winner
