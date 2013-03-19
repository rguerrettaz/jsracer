before '/' do
  session.clear
end

get '/' do
  puts '*' *300
  erb :index
end

get '/gameplay' do
  @player1_initials = session[:player1_initials]
  @player2_initials = session[:player2_initials]
  erb :racer
end

post '/results' do
  @game = Game.find(session[:game_id])
  winner = params[:name] #This gets from ajaxland to sinatraworld
  @game.update_attribute("winner", winner) #YEAH!!!!!!!!!!
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
