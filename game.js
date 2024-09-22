// Iteration 2: Generate 2 random number and display it on the screen
let n1=Math.floor(Math.random()*100);
let n2=Math.floor(Math.random()*100);
console.log(n1,n2)
let box1=document.getElementById("number1");
let box2=document.getElementById("number2");
box1.textContent=n1;
box2.textContent=n2;

// Iteration 3: Make the options button functional
let lesserThan=document.getElementById("lesser-than");
let greaterThan=document.getElementById("greater-than");
let equalTo=document.getElementById("equal-to");
let score=0;
function generateRandomNos(){
    n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);
    box1.textContent=n1;
    box2.textContent=n2;

}
greaterThan.onclick=()=>{
    if (n1>n2){
        score++;
        resettimer()
        localStorage.setItem("scoreValue",score)
        
    }else{
        location.href="./gameover.html"
    }
     console.log(score)
    // n1=Math.floor(Math.random()*100);
    // n2=Math.floor(Math.random()*100);
    // box1.textContent=n1;
    // box2.textContent=n2;
    generateRandomNos()

}
lesserThan.onclick=()=>{
    if (n1<n2){
        score++;
        resettimer()
        localStorage.setItem("scoreValue",score)
        // clearInterval(timer);
        // startTimer()
    }else{
        location.href="./gameover.html"
    }
    console.log(score)
    // n1=Math.floor(Math.random()*100);
    // n2=Math.floor(Math.random()*100);
    // box1.textContent=n1;
    // box2.textContent=n2;
    generateRandomNos()

}
equalTo.onclick=()=>{
    if (n1==n2){
        score++;
        resettimer()
        localStorage.setItem("scoreValue",score)
    }else{
        location.href="./gameover.html"
    }
    console.log(score)
    // n1=Math.floor(Math.random()*100);
    // n2=Math.floor(Math.random()*100);
    // box1.textContent=n1;
    // box2.textContent=n2;
    generateRandomNos()
}
// Iteration 4: Build a timer for the game
let time=6;
let timer;

// setInterval(function(){
//     time--;
//     console.log(time)

// },1000)
function startTimer(){
    time=6;

    timer=setInterval(function(){
        time--;
        console.log(time)
        if (time==0){
            location.href="./gameover.html"
        }
        
        let timBox=document.getElementById("timer");
        timBox.textContent=time;
        localStorage.setItem("scoreValue",score)
    
    },1000)

}
function resettimer(){
    clearInterval(timer);

    startTimer();

}
startTimer();


localStorage.setItem("scoreValue",score)