import { Container, Sprite, Ticker, AnimatedSprite, Text, Graphics, Assets } from "pixi.js";
// import MyLoader from './MyLoader';
// import TweenMax from 'gsap';
// import sound from 'pixi-sound';

export default class BookStack extends Container {

    constructor(option) {
        super();

        this.res = option.resource;
        this.posX = option.x;
        this.posY = option.y;
        this.widthStack = option.widthStack;
        this.revert = option.revert;
        this.ticker = new Ticker();
        this.myScale;

        this.createStacks();
    }

    createStacks() {
        this.bookStack = new Sprite(Assets.get(this.revert ? 'stack_revert' : 'stack'));
        // this.bookStack.anchor.set(0.5);
        // this.bookStack.pivot._y = this.bookStack.height / 2;
        if (this.widthStack) {
            this.myScale = this.widthStack / this.bookStack.width;
            this.bookStack.scale.set(this.myScale, this.myScale);
        }
        // this.bookStack.alpha = 0
        // this.bookStack.position.set(this.posX, this.revert ? this.posY - this.bookStack.height : this.posY);
        // this.bookStack.y = this.revert ? this.posY - this.bookStack.height : this.posY;
        
        const shadow = new Sprite(Assets.get(this.revert ? 'shadow_stack_revert' : 'shadow_stack'));
        if (this.widthStack) {
            shadow.scale.set(this.myScale, this.myScale);
        }
        // shadow.y = this.revert ? this.posY - shadow.height : this.posY;
        shadow.x = this.bookStack.width / 5;
        
        this.addChild(shadow);
        this.addChild(this.bookStack);

        this.y = this.revert ? this.posY - this.height : this.posY;
    };

    update(y) {
        this.y = this.revert ? y - this.height : y;
    }

    // moveStack() {
    //     this.ticker.add((deltaTime) => {
    //         // this.position.x -= 7 * this.ticker.deltaTime;
    //         this.bookStack.x -= 2.7;
    //     });
    //     this.ticker.start();  
    // }

    stop() {
        this.ticker.stop();
    }

    destroyStack() {
        this.ticker.stop();
        this.ticker.remove();
        this.destroy();
    }
}