let boxes=document.querySelectorAll(".box");
let resetGame=document.querySelector("#rstGame");
let newGamebtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let trueP=true;
// let falseN=false;
 const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
 ];
 const resetGame2=()=>{
    trueP=true;
    enablebleBoxes();
    msgContainer.classList.add("msg-container")
 }
document.querySelector
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     
      if(trueP){
        box.style.color="blue";
        box.innerHTML="P";
        trueP=false;
      }
  
      else{
        box.style.color="black";
        box.innerHTML="N";
        trueP=true;
      }
      box.disabled="true";
      checkWinner();
    });
});

const enablebleBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("msg-container")
    disableBoxes();
}
const checkWinner=()=>{
  winPatterns.forEach(function(value)
{ 
    let  pos1=boxes[value[0]].innerHTML;
   let  pos2= boxes[value[1]].innerHTML;
   let   pos3=boxes[value[2]].innerHTML;
    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
          showWinner(pos1);
        }
    }
}) 
};
newGamebtn.addEventListener("click",resetGame2);
resetGame.addEventListener("click",resetGame2);