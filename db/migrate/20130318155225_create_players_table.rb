class CreatePlayersTable < ActiveRecord::Migration
  def change
    create_table :players do |c|
      c.string :initials, :unique => true, :null => false
      c.timestamps
    end
  end
end
