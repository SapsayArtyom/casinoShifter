import "@babel/polyfill";
import BoardManager from './LeaderBoardComponent/BoardManager';
var WebFont = require('webfontloader');
import * as PIXI from 'pixi.js';
window.PIXI = PIXI;

window.trace=console.log.bind(window.console);

export default new class Main {

    constructor() {

        this.game;
        this.initialization = false;

        this.initGame();
    }

    // async initGame(option) {
        
    //     if(this.initialization) {
    //         this.game.updateBoard(option.scores);
    //     } 
    //     else {
    //         await this.loadFont();
    //         this.game = new BoardManager({
    //             width: option.width,
    //             height: option.height,
    //             scores: option.scores,
    //         });
    //         this.initialization = true;
    //     }
    // }

    destroyBoard() { // remove LeaderBoard and canvas from DOM
        this.initialization = false;
        this.game.destroyBoard();
    }  

    async initGame() {
        console.log('the game :', this.game)
        if(this.game) this.game.updateBoard([
            {
                score: 351600,
                username: "DeveloperRig"
            },
            {
                score: 3500,
                username: "Develr"
            },
            {
                score: 35600,
                username: "Developer"
            },
            {
                score: 3500,
                username: "Develr"
            },
            {
                score: 35600,
                username: "Developer"
            },
        ]);
        else {
            await this.loadFont();
            this.game = new BoardManager({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                scores: [
                    {
                        score: 351600,
                        username: "DeveloperRig"
                    },
                    {
                        score: 3500,
                        username: "Develr"
                    },
                    {
                        score: 35600,
                        username: "Developer"
                    },
                ]
            });
        }
        
    }

    loadFont(){
        return new Promise(resolve => {
            //loading fonts
            WebFont.load({
                custom: {
                    families: ['LuckiestGuy'],
                    urls: ['./style.css']
                },
                fontinactive: () => {
                    console.log("fonts inactive")
                },
                active: () => {
                    console.log("fonts loaded");
                    resolve();
                },
            });
        });
    }
}