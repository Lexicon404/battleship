
import {Ship} from "./factories/shipFactory.js"

import {Gameboard} from "./factories/boardFactory.js"

import {Player} from "./factories/playerFactory.js"

describe('ship functions', () => {
	// assign variables to avoid beforeEach scoping issues
	let testCarrier;
	let testSubmarine;
	beforeEach(() => {
		testCarrier = Ship(0);
		testSubmarine =  Ship(3);
	});
	it('carrier health', () => {
		expect(testCarrier.health).toEqual(5);
	});
	it('accepts hits', () => {
		testSubmarine.hit();
		expect(testSubmarine.health).toEqual(2);
	});
	it('shows that the boat is not sunk', () => {
		testCarrier.hit();
		testCarrier.hit();
		expect(testCarrier.isSunk()).toBe(false);
	});
	it('shows that a boat is sunk', () => {
		testSubmarine.hit();
		testSubmarine.hit();
		testSubmarine.hit();
		expect(testSubmarine.isSunk()).toBe(true);
	});
});



describe('Gameboard functions', () => {
	// assign variables to avoid beforeEach scoping issues
	let player1;
	beforeEach(() => {
		player1 = Gameboard();
    player1.newBoard()
    player1.setShip(4, 7, 7, true)
    
	});
	it('create new board', () => {
		expect(player1.board.length).toEqual(10);
	});
  it('first ship', () => {
		expect(player1.inventory[0].name).toEqual('Destroyer');
	});
	it('set second ship', () => {
    player1.setShip(3, 3, 3, true);
		expect(player1.inventory[1].name).toEqual('Submarine');
	});
	it('set ship out of bound', () => {
		expect(player1.setShip(0, 15, 15, true)).toBe(undefined);
	});
	it('ship receive attack', () => {
    player1.receiveAttack(7,7)
		expect(player1.inventory[0].health).toBe(1);
	});
  it('same spot attacked', () => {
    player1.receiveAttack(7,7)
		expect(player1.receiveAttack(7,7)).toBe(false);
	});
  it('checm remaning', () => {
		expect(player1.checkRemaining()).toBe(true);
	});
});




describe('Player functions', () => {
	// assign variables to avoid beforeEach scoping issues
	let board1;
  let player1;
	beforeEach(() => {
		board1 = Gameboard();
    board1.newBoard()
    board1.setShip(4, 7, 7, true)
    player1=Player()
    
	});
	it('player attack', () => {
    player1.attack(7,7,board1)
		expect(board1.inventory[0].health).toEqual(1);
	});
});