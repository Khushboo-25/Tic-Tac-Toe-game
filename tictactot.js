let audioturn =new Audio("turn.wav");
let gameover= new Audio("gameover.wav");

let turn="X";
let game=false;

// function to change turn
const changeTurn=()=>{
    return turn ==="X"?"0" :"X";
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
                document.querySelector('.gameInfo').innerText=arr[a[0]].innerText+" Won reset the game";
                gameover.play();
                game=true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="30%";
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
            document.getElementsByClassName("gameInfo")[0].innerText="Turn for "+turn;
        }
        
    })
})
reset.addEventListener(
    'click',()=>{
        let arr=document.querySelectorAll('.boxtext');
        
        Array.from(arr).forEach(Element=>{
            Element.innerText=""
        });
        turn="X";
        game=false;
        document.getElementsByClassName("gameInfo")[0].innerText="Turn for "+turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    }
)
//Game logic
