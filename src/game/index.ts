import MainGame from './Core/MainGame';

// export default new class Main {
export default class Main {

    private game: MainGame

    constructor(callback: any) {
        
        this.initGame(callback);
    }

    // destroyGame() { // remove Game and canvas from DOM
    //     const playerObj =  this.game.getPlayerValue();
    //     this.game.destroyGame();
    //     return playerObj
    // }

    async initGame(callback: any) { 
        this.game = new MainGame({
            width: 600,
            height: 600,
            nickName: 'Alex',
            waitAt: 3,
            deadlineAt: 1585612500,
            isAuth: false,
            showResults: callback
        });
    }

    public restart() {
        this.game.restart()
    }
}