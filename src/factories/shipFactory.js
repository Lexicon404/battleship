

const Ship = function (sequence, location = null) { 

    const models = [
        {
            name: 'Carrier',
            health: 5
        },
        {
            name: 'Battleship',
            health: 4
        },
        {
            name: 'Cruiser',
            health: 3
        },
        {
            name: 'Submarine',
            health: 3
        },
        {
            name: 'Destroyer',
            health: 2
        }]

    const name = models[sequence].name

    let health = models[sequence].health

    let hit = function (){
        this.health -=  1;
    }
    
    function isSunk(){
        if (this.health === 0) return true;
        else return false; 
    }

    return {name, hit, isSunk, health, location}
}


export {Ship};