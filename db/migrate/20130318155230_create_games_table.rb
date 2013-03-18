class CreateGamesTable < ActiveRecord::Migration
  def change
    create_table :games do |c|
      c.string :winner, :loser
      c.time :winner_time
      c.timestamps
    end
  end
end
