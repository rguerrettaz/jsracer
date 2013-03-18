class CreateGamesPlayersTable < ActiveRecord::Migration
  def change
    create_table :games_players, :id => false do |c|
      c.integer :game_id
      c.integer :player_id
    end
  end
end
