let gameseq=[];
let userseq=[];

let para = document.querySelector("p");
let btns = ["yellow","red", "green", "blue"];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})

function levelUp(){
    userseq=[];
    level++;
    para.innerText=`Level ${level}`;
    let randIdx= Math.floor(Math.random()*3);
    let randclr=btns[randIdx];
    let randBtn= document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    console.log(gameseq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   }, 500);
}

function userFlash(btn){
    btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   }, 500);
}

function checkAns(idx){
  //  console.log("curr level:", level);
 
  if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp, 1000)
    }
  }else {
    para.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
  }
}

function btnPress(){
   let btn = this;
   userFlash(btn);

   userclr = btn.getAttribute("id");
   userseq.push(userclr);
   checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}