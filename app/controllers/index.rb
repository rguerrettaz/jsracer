before '/' do
  session.clear
end

get '/' do
  @games = Game.all
  erb :index
end

get '/gameplay' do
  @game = Game.find(session[:game_id])
  @p1_initials = session[:p1_initials]
  @p2_initials = session[:p2_initials]
  erb :racer
end

get '/game/:id/results' do
  @game = Game.find(params[:id])
  erb :results
end

post '/results' do
  @game = Game.find(session[:game_id])
  @game.update_attribute("winner", params[:winner])
  @game.update_attribute("game_length", params[:time].to_f)
  puts '*' * 300
  puts @game.game_length
  puts @game.winner
  params[:winner]
end

post '/play' do
  @game = Game.create
  session[:game_id] = @game.id
  p1 = Player.new(initials: params[:p1_initials])
  session[:p1_initials] = p1.initials
  p2 = Player.new(initials: params[:p2_initials])
  session[:p2_initials] = p2.initials
  @game.players << p1
  @game.players << p2
  redirect '/gameplay'
end

post '/playagain' do
  game = Game.create
  session[:game_id] = game.id
  p1 = Player.find_by_initials(session[:p1_initials])
  p2 = Player.find_by_initials(session[:p2_initials])
  game.players << p1
  game.players << p2
  game.id.to_s
end
