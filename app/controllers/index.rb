before '/' do
  session.clear
end

get '/' do
  @games = Game.all
  erb :index
end

get '/gameplay' do
  @game = Game.find(session[:game_id])
  @player1_initials = session[:player1_initials]
  @player2_initials = session[:player2_initials]
  erb :racer
end

get '/game/:id/results' do
  @game = Game.find(params[:id])
  erb :results
end

post '/results' do
  @game = Game.find(session[:game_id])
  winner = params[:name] 
  wilber = params[:gameLength]
  puts wilber
  @game.update_attribute("winner", winner)
  @game.update_attribute("game_length", wilber.to_f)
  winner
end

post '/play' do
  @game = Game.create
  session[:game_id] = @game.id
  player1 = Player.new(initials: params[:player1_initials])
  session[:player1_initials] = player1.initials
  player2 = Player.new(initials: params[:player2_initials])
  session[:player2_initials] = player2.initials
  @game.players << player1
  @game.players << player2
  redirect '/gameplay'
end

post '/playagain' do
  game = Game.create
  session[:game_id] = game.id
  player1 = Player.find_by_initials(session[:player1_initials])
  player2 = Player.find_by_initials(session[:player2_initials])
  game.players << player1
  game.players << player2
  game.id.to_s
end
