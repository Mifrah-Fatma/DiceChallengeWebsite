
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var image1='dice' + randomNumber1 +'.png';
var image_source1='images/'+ image1;
document.querySelectorAll("img")[0].setAttribute('src',image_source1);

var randomNumber2=(Math.floor(Math.random()*6))+1;
var image2='dice'+ randomNumber2 +'.png';
var image_source2='images/'+ image2;
document.querySelectorAll("img")[1].setAttribute('src',image_source2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
