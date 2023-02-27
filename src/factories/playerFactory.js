
const Player = function (name = null) {
    const player = name;

    function attack(x, y, board){
        board.receiveAttack(x, y)
    }

    return {name, attack}
}


export {Player};


