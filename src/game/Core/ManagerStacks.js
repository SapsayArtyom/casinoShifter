// import * as PIXI from 'pixi.js';
import { Container, Ticker } from "pixi.js";
// import Taco from "./Taco";
import BookStack from './BookStack';

export default class ManagerStacks extends Container {

    constructor(options) {
        super();

        this.name = 'taco_manager';
        this.game = options.game;
        this.mainContainer = options.mainContainer
        this.stacksArr = [];
        this.spacing = 150;
        this.colStacks = 6;
        this.distanceX = 600;
        this.ticker = new Ticker();
        this.zIndex = 5;

        // this.createInterval = setInterval(() => {
            this.createStacks();
        // }, 1100);
        this.initialization = true;

        // window.onblur = () => {
        //     this.removeInterval.bind(this);
        // }
    }

    createBomb() {
        this.bombTextures = [];

        // for (let i = 1; i < 60; i++) {
        //     const texture = MyLoader.getResource(`bomb_${i}`).texture;
        //     bombTextures.push(texture);
        // }
    }

    createStacks() {
        // let randomY = this.randomIntegerNumber(300, this.game.app.screen.height - 300);
        // let stack;
        // let stackRevert;
        // stack = new BookStack({
        //     x: this.game.baseWidth,
        //     y: randomY + this.spacing,
        // });
        // stackRevert = new BookStack({
        //     x: this.game.baseWidth,
        //     y: randomY - this.spacing,
        //     revert: true
        // });
        // this.stacksArr.push(stack, stackRevert);
        // this.mainContainer.addChild(stack.bookStack, stackRevert.bookStack);
        // stack.moveStack();
        // stackRevert.moveStack();

        for (let index = 0; index < this.colStacks; index++) {
            const cont = new Container({
                label: `container_${index}`
            });
            this.mainContainer.addChild(cont);
            let randomY = this.randomIntegerNumber(300, this.game.app.screen.height - 300);
            let stack = new BookStack({
                // x: this.game.baseWidth + this.distanceX * index,
                y: randomY + this.spacing,
                widthStack: 200
            });
            let stackRevert = new BookStack({
                // x: this.game.baseWidth + this.distanceX * index,
                y: randomY - this.spacing,
                revert: true,
                widthStack: 200,
            });
            cont.x = this.game.baseWidth + this.distanceX * index - 400;
            // this.stacksArr.push(stack, stackRevert);
            // this.mainContainer.addChild(stack.bookStack, stackRevert.bookStack);
            // cont.addChild(stack.bookStack, stackRevert.bookStack);
            cont.addChild(stack, stackRevert);
            this.stacksArr.push(cont);
            // stack.moveStack();
            // stackRevert.moveStack();
        }
        this.moveStacks();
    }

    moveStacks() {
        for (let i = 0; i < this.stacksArr.length; i++) {
            const element = this.stacksArr[i];
                this.ticker.add((deltaTime) => {
                // this.position.x -= 7 * this.ticker.deltaTime;
                element.x -= 4;
            });
        }
    }
    
    start() {
        this.ticker.start();  
    }

    updatePosition(id, pos) {
        const randomY = this.randomIntegerNumber(300, this.game.app.screen.height - 300);
        const x = pos + this.distanceX;
        this.stacksArr[id].x = x;
        this.stacksArr[id].children[0].update(randomY + this.spacing);
        this.stacksArr[id].children[1].update(randomY - this.spacing);
        // this.stacksArr[id].children[0].y = randomY + this.spacing;
        // this.stacksArr[id].children[1].y = randomY - this.spacing - this.stacksArr[id].children[1].height;
    }

    restart() {
        for (let i = 0; i < this.stacksArr.length; i++) {
            this.updatePosition(i, this.game.baseWidth + this.distanceX * i);
        }
    }

    stop() {
        this.ticker.stop();
    }

    randomIntegerNumber(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    removeTacos() {
        for (let i = 0; i < this.stacksArr.length; i++) {
            this.stacksArr[i].destroy();
        }
    }

    stopTacos() {
        for (let i = 0; i < this.stacksArr.length; i++) {
            this.stacksArr[i].ticker.stop();
        }
        this.removeInterval.bind(this)();
    }
    
    removeInterval() {
        clearInterval(this.createInterval);
        this.initialization = false;
    }

    startTacos() {
        for (let i = 0; i < this.stacksArr.length; i++) {
            this.stacksArr[i].ticker.start();
        }
        if(!this.initialization) {
            this.createInterval = setInterval(() => {
                this.createTaco();
            }, 1100);
        }
    }
}