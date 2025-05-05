let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true; 
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false; 
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    
}
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                disableBoxes();
                showWinner(pos1Val);
            }
        }
    }
}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);