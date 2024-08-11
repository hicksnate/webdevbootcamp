function getDiceImage(num){
    var imgTxt = "";
    if (num === 1){
        imgTxt = "./images/dice1.png";
    }else if (num === 2){
        imgTxt = "./images/dice2.png";
    }else if (num === 3){
        imgTxt = "./images/dice3.png";
    }else if (num === 4){
        imgTxt = "./images/dice4.png";
    }else if (num === 5){
        imgTxt = "./images/dice5.png";
    }else if (num === 6){
        imgTxt = "./images/dice6.png";
    }
    return imgTxt;
}
function getRandomNum(){
    return Math.floor(Math.random() * 6) + 1;
}
var randomNumber1 = getRandomNum();
var randomNumber2 = getRandomNum();
var diceImage = "";
var winTxt = "";

diceImage = getDiceImage(randomNumber1);
document.querySelector("img.img1").setAttribute("src",diceImage);

diceImage = getDiceImage(randomNumber2);
document.querySelector("img.img2").setAttribute("src",diceImage);

if (randomNumber1 > randomNumber2){
    winTxt = "Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
    winTxt = "Player 2 Wins!";
}else if (randomNumber1 == randomNumber2){
    winTxt = "Draw!";
}

document.querySelector("h1").innerHTML = winTxt;