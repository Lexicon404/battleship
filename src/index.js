import {Ship} from "./factories/shipFactory.js"

import {Gameboard} from "./factories/boardFactory.js"

import {Player} from "./factories/playerFactory.js"

import './style.css';

const boardUI = function(ref, appendTo){
    let container = document.getElementById(appendTo)
    for (let i=0; i<10; i++){
        for (let j=0; j<10; j++){
        let grid = document.createElement('div')
        grid.setAttribute('id', `${ref}-${i}-${j}`)
        grid.setAttribute('data-x', `[${i}]`)
        grid.setAttribute('data-y', `[${j}]`)
        grid.setAttribute('class', `board-grid`)
        container.appendChild(grid)
        }
    }

    return container
}

const addListeners = function(appendTo) {
    let container = appendTo
    container.addEventListener('click', (e) => {
        console.log(e.target.parentElement.id)
        console.log(e.target)
        console.log(e.target.dataset.x)
        console.log(e.target.dataset.y)
    })
} 

const userSetupShip = function(gameBoard, direction){
    for (let i = 0; i < 5; i++){

        let shipSet = gameBoard.setShip(i, x, y, direction)
        while (shipSet === false) {
            alert('this ship can not be place here, please try again')
            shipSet = gameBoard.setShip(i, x, y, direction)
        }
    }
}

const initUI = function(){

    let leftBoard = boardUI('left', 'left-player-board')
    let rightBoard = boardUI('right', 'right-player-board')

    addListeners(leftBoard)
    addListeners(rightBoard)
}


const initGameLogic = function(){
    playerBoard = Gameboard();
    computerBoard = Gameboard();
    player = Player()
    computer = Player()
}


let playerBoard;
let computerBoard;
let player;
let computer;

initUI()
initGameLogic()

