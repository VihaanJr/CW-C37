class Game {
  constructor(){}

  play(){
   form.hide();
   textSize(30);
   text("Game Started" , 120 , 100);
   Player.getPlayerInfo();
   
   if(allPlayers !== undefined){
    var displayPosition = 130; 
    for(var hoho in allPlayers){
      if(hoho === "player" + player.index){
        fill("red");
      }
      else{
        fill("black");
      }
    }
    displayPosition = displayPosition + 20;
    textSize(15);
    text(allPlayers[hoho].name+":"+ allPlayers[hoho].distance , 120, displayPosition);
   }
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
