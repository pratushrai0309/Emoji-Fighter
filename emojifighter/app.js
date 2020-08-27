let player1Health = 100;
let player2Health = 100;
let player1Turn = true;
let damage = 0;

//In Game Variables
var player1Emoji = document.getElementById("emoji");
var player2Emoji = document.getElementById("emoji2");
var player1HealthValue = document.getElementById("health1");
var player2HealthValue = document.getElementById("health2");
var player1Damage = document.getElementById("damagevalue");
var player2Damage = document.getElementById("damagevalue2");
var gameStatus = document.getElementById("gamestatush1");
var player1Card = document.getElementById("player1card");
var player2Card = document.getElementById("player2card");
var fightButton = document.getElementById("fight");
var resetButton = document.getElementById("resetB");
var darkButton = document.getElementById("dark");
var lightButton = document.getElementById("light");
var body = document.getElementById("body");
var playGround = document.getElementById("playground");
var logo = document.getElementById("h1");

//Show Reset Button
function showResetButton(){
    fightButton.style.display = "none";
    resetButton.style.display = "block";
}

//Fight Button
fightButton.addEventListener("click", function gamePlay(){
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var randomNumber2 = Math.floor(Math.random() * 10) + 1;

    if(player1Turn){

        /*Player 1 Switch
         code below show the card that
         according to random number*/
        switch(randomNumber){

            case 1: 
            player1Emoji.textContent = "😊";
            damage = 1;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 2: 
            player1Emoji.textContent = "🤬";
            damage = 10;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 3: 
            player1Emoji.textContent = "😖";
            damage = 3;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 4: 
            player1Emoji.textContent = "🤯";
            damage = 5;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 5: 
            player1Emoji.textContent = "😤";
            damage = 10;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 6: 
            player1Emoji.textContent = "🤑";
            damage = 15;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 7: 
            player1Emoji.textContent = "😚";
            damage = 2;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 8: 
            player1Emoji.textContent = "🤕";
            damage = 0;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 9: 
            player1Emoji.textContent = "😎";
            damage = 6;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
    
            case 10: 
            player1Emoji.textContent = "🤮";
            damage = 9;
            player2Health -= damage;
            player2HealthValue.textContent = player2Health;
            player1Damage.textContent = damage;
            break;
        }
        //Changing The Other Stuffs
        player1Card.classList.remove("active");
        player2Card.classList.add("active");
        player1Turn = false;
        gameStatus.textContent = "Player 2 Turn";

    }else{
        
        /*PLayer 2 Switch
        the code below will show 
        the card according to the random number generateds*/
        switch(randomNumber2){
            case 1: 
            player2Emoji.textContent = "😊";
            damage = 1;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 2: 
            player2Emoji.textContent = "🤬";
            damage = 10;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 3: 
            player2Emoji.textContent = "😖";
            damage = 3;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 4: 
            player2Emoji.textContent = "🤯";
            damage = 5;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 5: 
            player2Emoji.textContent = "😤";
            damage = 10;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 6: 
            player2Emoji.textContent = "🤑";
            damage = 15;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 7: 
            player2Emoji.textContent = "😚";
            damage = 2;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 8: 
            player2Emoji.textContent = "🤕";
            damage = 0;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
    
            case 9: 
            player2Emoji.textContent = "😎";
            damage = 6;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
            
            case 10: 
            player2Emoji.textContent = "🤮";
            damage = 9;
            player1Health -= damage;
            player1HealthValue.textContent = player1Health;
            player2Damage.textContent = damage;
            break;
        }

        //Changing The Other Stuffs
        player2Card.classList.remove("active");
        player1Card.classList.add("active");
        player1Turn = true;
        gameStatus.textContent = "Player 1 Turn";
    }
    
    //Adding Winning Logic
    if(player1Health <= 0){
       gameStatus.textContent = "Player 2 Won 🥳";
       showResetButton(); 
    }

    else if(player2Health <= 0){
        gameStatus.textContent = "Player 1 Won 🎉";
        showResetButton();
    }

    // Adding A logic that will change the color of the health
     if(player1Health <= 100){
        player1HealthValue.style.color = "#84F63E";
    }
    
     if(player2Health <= 100){
        player2HealthValue.style.color = "#84F63E";
    }
    
     if(player1Health <= 75){
        player1HealthValue.style.color = "#F5FF0E";
    }
    
     if(player2Health <= 75){
        player2HealthValue.style.color = "#F5FF0E";
    }
    
     if(player1Health <= 25){
        player1HealthValue.style.color = "#FB5315";
    }
    
     if(player2Health <= 25){
        player2HealthValue.style.color = "#FB5315";
    }
});

console.log(player1Health);
 
console.log(player2Health);

//Reset Button
resetButton.addEventListener("click", function resetGame(){
    player1Health = 100;
    player2Health = 100;
    player1HealthValue.textContent = "100";
    player2HealthValue.textContent = "100";
    player1Emoji.textContent = "-";
    player2Emoji.textContent = "-";
    player1Damage.textContent = "-";
    player2Damage.textContent = "-";
    player1Turn = true;
    gameStatus.textContent = "Player 1 Turn";
    resetButton.style.display = "none";
    fightButton.style.display = "block";
});


//Light Theme Button
lightButton.addEventListener("click", function turnLight(){
   console.log(player1Health);
   body.style.backgroundColor = "#E7DEDA";
   playGround.style.backgroundColor = "#FAF8F7";
   lightButton.style.backgroundColor = "#E7DEDA";
   darkButton.style.backgroundColor = "#E7DEDA";
   logo.style.color = "#423B37"
});


//Dark Theme Button
darkButton.addEventListener("click", function turnDark(){
    body.style.backgroundColor = "#2C2A2A";
    playGround.style.backgroundColor = "#7B7979";
    lightButton.style.backgroundColor = "#2C2A2A";
    darkButton.style.backgroundColor = "#2C2A2A";
    logo.style.color = "#D5BAAC"
 });