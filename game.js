window.onload = function () {
var app = new Vue({
  el: '#app',
  data: {
     userPokemonSrc: "http://www.citroenorigins.ch/sites/default/files/styles/1600/public/c4_2000_10_1620x1000.png?itok=Ah8__Stl",
     opponentPokemonSrc: "https://media.licdn.com/dms/image/C4D0BAQGBUMWCJGSO1w/company-logo_200_200/0?e=2159024400&v=beta&t=Gy8iyfL9b6KuOvuy_bjjkS_uE7uB75kObHv13lskjkk",
     userPokemon: "C4",
     opponentPokemon: "GIBM",
     userAlive: true,
     opponentAlive: true,
     opponentFill: 100,
     userFill: 100,
     userHP: 100,
     startUserHP: 100,
     opponentHP: 100,
     userLevel: 50,
     opponentLevel: 50,
     battleText: "What will C4 do?",
     battleOptions: ["Fight", "Pokemon", "Item", "Run"],
     userAttackDamage: [100,0,10,30],
     opponentAttacks: ["Franz", "Mathe", "9/11 is fake", "Änglisch"],
     opponentAttackDamage: [60,50,20,10],
     fightOptions: ["Abbräche", "Lerne", "chocke Mike","Autism"],
     endOptions: ["Yes", "No"],
     fightOn: false,
     optionsOn: true,
     endOn: false,
  userHpBar: {
    width: "100%"
  },
  opponentHpBar: {
    width: "100%"
  }
 },
  methods:{
    processOption: function(option){
      switch(option){
        case 1:
          //handle fight
          this.optionsOn = false
          this.fightOn = true
        break;
        case 2:
          //handle pokemon
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          
          this.battleText = "You're our only hope " + this.userPokemon + "!"
          
        break;
        case 3:
          //handle item
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "You have no Guns at home"
        break;
        case 4:
          //handle run
          setTimeout(() => {
          this.battleText = "What will " + this.userPokemon + " do?"
      }, 2000);
          this.battleText = "Wämmr das nid alli?."
        break;
      }
    },
    processAttack: function(attack){
      switch(attack){
        case 1:
          //handle scratch
          this.opponentHP -= this.userAttackDamage[attack-1]
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }   
          if(this.checkOpponentHp()){
              this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"   
            setTimeout(() => {this.battleText = "IT WAS VERY EFFECTIVE!!"
              }, 100);
             setTimeout(() => {this.battleText =   this.battleText = this.opponentPokemon + " fainted! Play again?"
              }, 1000);
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"+"\n"
            this.battleText = "IT WAS VERY EFFECTIVE!!"
            
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
        case 2:
      
           this.opponentHP -= this.userAttackDamage[attack-1]
           //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
            if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
            setTimeout(() => {this.battleText = "There was no effect"
              }, 1000);
           
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
        case 3:
          //handle flamethrower
           this.opponentHP -= this.userAttackDamage[attack-1]
           //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
            if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
             setTimeout(() => {this.battleText = "Herr Wäber is now uncomfortable"
              }, 1000);
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
        case 4:
          //handle ember
           this.opponentHP -= this.userAttackDamage[attack-1]
           //edit if HP !== 0
          this.opponentFill -= (this.userAttackDamage[attack-1])
          if(this.opponentFill <= 0){
            this.opponentHpBar.width = "0%"
          } else{
            this.opponentHpBar.width = this.opponentFill + "%"
          }
          if(this.checkOpponentHp()){
            this.battleText = this.opponentPokemon + " fainted! Play again?"
            this.processFaint(1)
          } else if(this.checkOpponentHp() === false) {
            
              setTimeout(() => {
              this.processOpponentAttack()
              }, 2000);
          
            this.battleText = this.userPokemon + " used " + this.fightOptions[attack-1] + "!"
             setTimeout(() => {this.battleText = "...."
              }, 1000);
            //call opponent attack function
          setTimeout(() => { 
            if(this.userAlive){
              setTimeout(() => {this.battleText = "What will " + this.userPokemon + " do?"
              }, 2000);
            }
           }, 2000);
          }
        break;
      }
    },
    checkOpponentHp: function(){
      if(this.opponentHP <= 0){
        //fainted
        return true
        
      } else{
        //battle continues
        return false
      }
    },
    processFaint: function(pokemon){
      this.fightOn = false
      this.endOn = true;
      if(pokemon === 1){
        this.opponentAlive = false
      } else {
        this.userHP = 0
        this.userAlive = false
      }
    },
    processOpponentAttack: function(){
      //generate random number
      var random = Math.floor((Math.random() * 4) + 1)
      //do damage to user
      this.userHP -=  this.opponentAttackDamage[random-1]
      this.userFill -= (this.opponentAttackDamage[random-1])
      if(this.userFill <= 0){
        this.userHpBar.width = "0%"
      } else{
        this.userHpBar.width = this.userFill + "%"
      } 
       if(this.checkUserHp()){
         //add battle text
         this.battleText = this.userPokemon + " fainted! Play again?"
         this.processFaint(2)
       } else if(this.checkOpponentHp() === false) {  
         //continue battle
         this.battleText = this.opponentPokemon + " used " + this.opponentAttacks[random-1]  + "!"
         this.fightOn = false
         this.optionsOn = true
       }
    },
    checkUserHp: function(){
       if(this.userHP <= 0){
        //fainted
        return true
        
      } else{
        //battle continues
        return false
      }
    },
    resetBattle: function(){
      //reset data to start new game
      this.endOn = false;
      this.fightOn = false;
      this.optionsOn = true;
      this.battleText = "What will C4 do?"
      this.userAlive = true
      this.opponentAlive = true
      this.userHP = 100
      this.opponentHP = 100
      this.userFill = 100
      this.opponentFill = 100
      this.userHpBar.width = "100%"
      this.opponentHpBar.width = "100%"
    }
  }
  
})

}