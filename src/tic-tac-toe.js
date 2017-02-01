class TicTacToe {
    constructor() {
        this.grid = [null, null, null, null, null, null, null, null, null];
        this.symbol = 'x';
        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, colIndex) {
        if (!this.getFieldValue(rowIndex, colIndex)) {
            this.grid[3 * rowIndex + colIndex] = this.symbol;
            this.turn++;
            this.symbol = (this.symbol === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return (this.getWinner()!== null || this.isDraw());
    }

    getWinner() {
        if (this.grid[0] && this.grid[0] === this.grid[1] && this.grid[1] === this.grid[2]) { return this.grid[0]; }
        if (this.grid[3] && this.grid[3] === this.grid[4] && this.grid[4] === this.grid[5]) { return this.grid[3]; }
        if (this.grid[6] && this.grid[6] === this.grid[7] && this.grid[7] === this.grid[8]) { return this.grid[6]; }
        if (this.grid[0] && this.grid[0] === this.grid[3] && this.grid[3] === this.grid[6]) { return this.grid[0]; }
        if (this.grid[1] && this.grid[1] === this.grid[4] && this.grid[4] === this.grid[7]) { return this.grid[1]; }
        if (this.grid[2] && this.grid[2] === this.grid[5] && this.grid[5] === this.grid[8]) { return this.grid[2]; }
        if (this.grid[0] && this.grid[0] === this.grid[4] && this.grid[4] === this.grid[8]) { return this.grid[0]; }
        if (this.grid[2] && this.grid[2] === this.grid[4] && this.grid[4] === this.grid[6]) { return this.grid[2]; }

        return null;
    }

    noMoreTurns() {
       return this.grid.every(x => x !== null);
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[3 * rowIndex + colIndex];
    }
}

module.exports = TicTacToe;
