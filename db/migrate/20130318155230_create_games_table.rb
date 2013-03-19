class CreateGamesTable < ActiveRecord::Migration
  def change
    create_table :games do |c|
      c.string :winner, :loser
      c.float :game_length
      c.timestamps
    end
  end
end
