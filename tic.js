let boxes=document.querySelectorAll('.box');
let rbtn=document.querySelector('.reset');
let winner=document.querySelector('#winner');
let hide=document.querySelector('.hide');
console.dir(winner)
let flag=true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8,]
];
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!='' && val2!='' && val3!='')
        {
            if(val1==val2 && val2==val3)
            {
                win(val1);
                console.log(val1,'is winner')
            }

        }
    }
}
boxes.forEach((box)=> {box.addEventListener('click',()=>{
    if(flag){
        box.innerText="X";
        flag=false;
    }
    else{
        box.innerText='O';
        flag=true;
    }
    box.disabled=true;
    checkwinner();
});
});
rbtn.addEventListener('click',()=>{
    boxes.forEach((box)=>box.disabled=false);
    for (box of boxes)
    {
        box.innerText=null;
        winner.innerText=null;
    }
    })
const win=(val1)=>{
    winner.innerText=`Congratulations the winner is ${val1}`;
    hide.classList.remove('hide')
}
