let audioturn =new Audio("turn.wav");
let gameover= new Audio("gameover.wav");

let turn;
var x=Math.floor(2*Math.random());
if(x==0)
{
    turn='O';
}
else
{
    turn='X';
}
document.getElementsByClassName("card-tittle")[0].innerText="Turn for "+turn;
let game=false;

// function to change turn
const changeTurn=()=>{
    return turn ==="X"?"O" :"X";
}

//function to check win
const checkWin=()=>{
    let arr=document.getElementsByClassName('boxtext');
    let win=[   [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]    ]
    win.forEach(a=>{
            if((arr[a[0]].innerText===arr[a[1]].innerText) && 
            (arr[a[1]].innerText===arr[a[2]].innerText) && 
            (arr[a[2]].innerText===arr[a[0]].innerText) &&(arr[a[0]].innerText!=='')) 
            {
                document.querySelector('.card-tittle').innerText=arr[a[0]].innerText+" Won reset the game";
                gameover.play();
                game=true;
                document.querySelector('.card-img-top').getElementsByTagName('img')[0].style.width="50%";
                // break;
            }
    })

}

let boxes= document.getElementsByClassName('box');

Array.from(boxes).forEach(Element=>{
    let arr=Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(arr.innerText==='' && game==false)
        {
             arr.innerText=turn;
             turn =changeTurn();
             audioturn.play();
             checkWin();
             }
        if(!game)
        {
            document.getElementsByClassName("card-tittle")[0].innerText="Turn for "+turn;
        }
        
    })
})
reset.addEventListener(
    'click',()=>{
        let arr=document.querySelectorAll('.boxtext');
        
        Array.from(arr).forEach(Element=>{
            Element.innerText=""
        });
        
        var x=Math.floor(2*Math.random());
        if(x==0)
        {
            turn='O';
        }
        else
        turn='X';
        document.getElementsByClassName("card-tittle")[0].innerText="Turn for "+turn;
        game=false;
        
        document.querySelector('.card-img-top').getElementsByTagName('img')[0].style.width="0rem";
    }
)
//Game logic
