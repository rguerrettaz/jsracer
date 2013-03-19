class Game < ActiveRecord::Base
  has_and_belongs_to_many :players
  # before_create validates :players, :presence => true
end
