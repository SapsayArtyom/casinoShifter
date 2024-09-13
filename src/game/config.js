import "@babel/polyfill";
import ConfigManager from './ConfigComponents/ConfigManager';
import { EventEmitter } from "events";
var WebFont = require('webfontloader');

window.trace=console.log.bind(window.console);
export default class Main {

    get emitter() {
        return this._emitter;
    }

    constructor() {

        this.game;
        this._emitter = new EventEmitter();

        // this.initGame();
    }

    async initGame(callback, option) {
        await this.loadFont();
        this.game = new ConfigManager({
            width: option.width,
            height: option.height
        });
        await this.game.createGame();
        this.game.sceneConfig.emitter.on('startGame', ()=>{
            trace('startGame', this.game.sceneConfig.waitAt, this.game.sceneConfig.deadlineAt);
            callback({
                type: 'game', 
                waitAt: this.game.sceneConfig.waitAt, 
                deadlineAt: this.game.sceneConfig.deadlineAt 
            })
        });
        this.game.sceneConfig.emitter.on('board', ()=>{
            trace('board');
            callback({type: 'board'})
        });
        this.game.sceneConfig.emitter.on('settings', ()=>{
            trace('settings');
            callback({type: 'settings'})
        });
    }

    destroyConfig() { // remove LeaderBoard and canvas from DOM
        this.game.destroyConfig();
    }

    setScreen(obj) { // show screens Config
        this.game.setScreen(obj);
    }

    // async initGame(callback) { 
    //     await this.loadFont();
    //     this.game = new ConfigManager({
    //         // width: 320,
    //         // height: 300
    //         width: document.documentElement.clientWidth,
    //         height: document.documentElement.clientHeight
    //     });
    //     await this.game.createGame();
    //     this.game.sceneConfig.emitter.on('startGame', ()=>{
    //         trace('startGame', this.game.sceneConfig.waitAt, this.game.sceneConfig.deadlineAt);
    //         // callback({ 
    //         //     type: 'game', 
    //         //     waitAt: this.game.sceneConfig.waitAt, 
    //         //     deadlineAt: this.game.sceneConfig.deadlineAt 
    //         // })
    //     });
    //     this.game.sceneConfig.emitter.on('board', ()=>{
    //         trace('board');
    //         // callback({type: 'board'})
    //     });
    //     this.game.sceneConfig.emitter.on('settings', ()=>{
    //         trace('settings');
    //         // callback({type: 'settings'})
    //     });

    //     this.setScreen({
    //         type: 'game',
    //         deadlineAt: 1585612500
    //     });
    //     this.setScreen({
    //         type: 'board',
    //         scores: [
    //             {
    //                 score: 351600,
    //                 username: "DeveloperRig"
    //             },
    //             {
    //                 score: 3500,
    //                 username: "Develr"
    //             },
    //             {
    //                 score: 35600,
    //                 username: "Developer"
    //             },
    //         ]
    //     });
    // }
    

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