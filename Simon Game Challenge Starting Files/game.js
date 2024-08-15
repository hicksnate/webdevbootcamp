var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).keydown(function(event){
    
    if (!gameStarted){
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
})

$(".btn").click(function(event){
   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length -1);
   console.log(userClickedPattern);
});

function nextSequence(){
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    userClickedPattern = [];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);

   
}
function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        // Code to be executed after 100 milliseconds
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
            // Code to be executed after 1000 milliseconds
                nextSequence();},1000);
                }
    }else{
        
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        console.log("Wrong Answer");
    }
    console.log("User Pattern: " + userClickedPattern);
    console.log("Game Pattern: " + gamePattern);

}
function startOver(){
    level = 0;
    gameStarted = false;
    gamePattern = [];
}