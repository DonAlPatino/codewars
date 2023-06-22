function winnerQ(gameBoard, p1, p2, p3) {
    const s = gameBoard;
    const c1 = s[p1];
    if (c1 === undefined) return undefined;
    const c2 = s[p2];
    if (c1 !== c2) return undefined;
    const c3 = s[p3];
    if (c1 !== c3) return undefined;
    return c1;
}
function evaluateTicTacToePosition(position) {
    for (let i =0; i < 3; i++){
        for (let j =0; j < 3; j++){
            if (!position[i][j]) position[i][j] = undefined;
        }
    }
    const gameBoard = position.flat();
    return winnerQ(gameBoard, 0, 1, 2) // check for 3-in-a-row horizontally
        || winnerQ(gameBoard, 3, 4, 5)
        || winnerQ(gameBoard, 6, 7, 8)
        || winnerQ(gameBoard, 0, 3, 6) // check for 3-in-a-row vertically
        || winnerQ(gameBoard, 1, 4, 7)
        || winnerQ(gameBoard, 2, 5, 8)
        || winnerQ(gameBoard, 0, 4, 8) // check for 3-in-a-row diagonally
        || winnerQ(gameBoard, 6, 4, 2);
}

const X = 'X';
const O = '0';

[[
    [O, O, O],
    [undefined, X, X],
    [X, undefined, undefined],
], [
    [X, X],
    [O, O, O],
    [X, undefined, X],
], [
    [undefined, undefined, undefined],
    [X, undefined, X],
    [O, O, O],
], [
    [O, undefined, X],
    [O, X, X],
    [O, X],
], [
    [X, O, X],
    [X, O, O],
    [O, O, X],
], [
    [X, X, O],
    [X, O, O],
    [undefined, X, O],
], [
    [O, X, X],
    [X, O, X],
    [O, X, O],
], [
    [X, X, O],
    [X, O, X],
    [O, undefined, X],
],
].forEach((data) => {
    const actual = evaluateTicTacToePosition(data);
console.log(actual);

});
