let audioturn =new Audio("turn.wav");
let gameover= new Audio("gameover.wav");

let turn="X";
let game=false;

//function to change turn
const changeTurn=()=>{
    return turn ==="X"?"0" :"X";
}

//function to check win
const checkWin=()=>{
    let box_text=document.getElementsByClassName('boxtext');
    let win=[   [0,1,2], [3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6]    ]
    win.forEach(a=>{
        if((box_text[a[0]].innerText===box_text[a[1]].innerText) && 
        (box_text[a[1]].innerText===box_text[a[2]].innerText) && 
        (box_text[a[2]].innerText===box_text[a[0]].innerText) &&(box_text[a[0]].innerText!=='')) 
            {
                
                document.querySelector('.gameInfo').innerText=box_text[a[0]].innerText+" Won reset the game"
                gameover.play();
                game=true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="50%";
                // break;
                
            }
    })

}

let boxes= document.getElementsByClassName('box');

Array.from(boxes).forEach(Element=>{
    let box_text=Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(box_text.innerText==='' && game==false)
        {
             box_text.innerText=turn;
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
        let box_text=document.querySelectorAll('.boxtext');
        
        Array.from(box_text).forEach(Element=>{
            Element.innerText=""
        });
        turn="X";
        game=false;
        document.getElementsByClassName("gameInfo")[0].innerText="Turn for "+turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    }
)
//Game logic
