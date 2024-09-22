// Iteration 5: Store the player score and display it on the game over screen
let playAgain=document.getElementById("play-again-button")
playAgain.addEventListener('click',function(){
    window.location.href="./index.html"
})
let score=localStorage.getItem("scoreValue");
document.getElementById("score-board").innerHTML=score;

