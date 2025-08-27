let boxes= document.querySelectorAll(".boxes");
let turnX=true;
let winnerCondition=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]];
let turn1=document.querySelector(".turn1");
let turn2=document.querySelector(".turn2");
let message=document.querySelector(".message");
let span=document.getElementById('result');
let reset=document.getElementById('reset');
let ng=document.getElementById('ng');
let clickSound =new Audio("click.mp3");
let winSound = new Audio("win.mp3");
reset.addEventListener('click', ()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add('hover');
        message.classList.add('hide');
    })
})
boxes.forEach(box=>{

  box.addEventListener('click', ()=>{
    clickSound.play();
    if(turnX){
    box.innerText='X';
    box.style.color="rgb(174,51,96)";
    turn2.classList.add("b-s");
    turn1.classList.remove("b-s");
    turnX=false
    }
    else{
        box.innerText="O";
        box.style.color="rgb(21, 101, 133)";
        turn1.classList.add('b-s');
        turn2.classList.remove('b-s');
        turnX=true;
      
    
    }
    checkWinner();
  });

});

function checkWinner(){
   
  for (let condition of winnerCondition){
   let box1=boxes[condition[0]].innerText;
   let box2 = boxes[condition[1]].innerText;
   let box3=boxes[condition[2]].innerText;
if(box1!=="" && box2!=="" && box3!=""){
    if(box1==box2 && box2==box3){
       showResult(box1, condition);
       winSound.play();
       boxes.forEach(box=>{
        box.classList.add("b-s");
       })
    }
       
boxes[condition[0]].classList.remove("b-s");
boxes[condition[1]].classList.remove("b-s");
boxes[condition[2]].classList.remove("b-s");
       
    }
    }
    }

  

function showResult(result,condition){
boxes.forEach(box=>{
    box.disabled=true;
    box.classList.add("b-s"); //dim all boxes

    box.classList.remove("hover");
})


message.classList.remove("hide");

span.innerText=result;


if(result==="X"){
    span.style.color="rgb(174,51,96)";
}else{
    span.style.color="rgb(17,52,182)";
}
}

ng.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add('hover');
       message.classList.add('hide');
    })
})
