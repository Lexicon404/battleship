import {Ship} from "./shipFactory.js"


const Gameboard = function () {
    const board = []
    const inventory = []

    function newBoard () {
        for (let i = 0; i<10; i++){
            board.push([])
            for (let j = 0; j<10; j++){
                board[i].push(null)
            }
        }
    }


    function isPlacementLegal (x, y, size, direction){ //direction: true = horizontal, false = vertical 

        const checkBorder = function (direction) {
            if (direction === true) {
                return parseInt(x + size) < 10
            } else {
                return parseInt(y + size) < 10
            }
        }

        const checkShip = function(){
        if (inventory.length === 0) return true
        for (let i = 0; i < inventory.length; i++){
        let invString = JSON.stringify(inventory[i].location)
        let tarString = JSON.stringify([x, y])
        let check = !invString.includes(tarString)
        return check
        }}

        let borderChecked = checkBorder();
        let shipChecked = checkShip();
       

        if (borderChecked == true && shipChecked === true){
            return true
        }
    }



    function setShip (ship, x, y, direction=true){ //directions: top-down: false, left-right: true
        let shipSet = true;
        let newShip = Ship(ship)
        //const direction = direction
        let size = parseInt(newShip.health)
        let coord = []
        let legalMove = isPlacementLegal(x, y, size)

        for (let i=0; i<size; i++) {

        if (direction === true && legalMove) {
            coord.push([x+i,y])


        } else if (direction === false && legalMove) {
            coord.push([x,y+i])
        }}
        newShip.location = coord
        if (coord.length > 0) return inventory.push(newShip)
        else {
            shipSet = false
        return shipSet} 
    }

    function isGridValid(x, y){
        return board[x][y] === null
    }

    function updateGridSelected(x, y){
        board[x][y] = true
    }

    function receiveAttack (x, y){
        let attackSuccess = false

        if(!isGridValid(x, y)) return false

        updateGridSelected(x, y)

        let shipHit = ''


        for (let i = 0; i < inventory.length; i++){
            for (let j = 0; j < inventory[i].location.length; j++){
                let invString = JSON.stringify(inventory[i].location[j])
                let tarString = JSON.stringify([x, y])
                let check = invString.includes(tarString)
                if (check === true) {
                    let shipLocation = inventory[i].location
                    shipHit = inventory[i]
                    shipHit.hit()
                    shipLocation.splice(j, 1)
                    attackSuccess = true
                }
            }
        }
    return attackSuccess
    }

    function checkRemaining(){
        let alive = false;

        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].isSunk() === false){
                alive = true;
            }
        }
        return alive;
    }

    return {board, newBoard, setShip, inventory, receiveAttack, checkRemaining}
}


// let board1=Gameboard();
// board1.newBoard();
// board1.setShip(0, 3, 3, true);
// board1.setShip(4, 3, 3, true);
// board1.setShip(4, 0, 0, true);
// board1.receiveAttack(0,0)
// board1.receiveAttack(0,0)

// console.log(board1.inventory)
// console.log(board1.board)




export {Gameboard};