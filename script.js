console.log("welcome to tic tak toe")

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3");

let isgameover = false;
let turn = "X"

const changeTurn = () => {
    return turn === "X"?"0": "X"
}

// function to check for a win
const checkWin =() => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,6,3],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = "translate(23vw, 39vw) rotate(90deg)"
        }
    })
}

// Game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=> {
        if(boxtext.innerText === '') {
            boxtext.innerText =  turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            document.getElementsByClassName("info")[0].innerText = "Turn for" +turn;
        }
    })
});

// addon click Buttoon

reset.addEventListener('click', (e) => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    isgameover = false;
    if(!isgameover)
    document.getElementsByClassName("info")[0].innerText = "Turn for" +turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})

