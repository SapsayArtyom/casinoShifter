import { Container, Sprite, Text, Graphics } from "pixi.js";
import { EventEmitter } from "events";


export default class StartScreen extends Container {

    constructor(option) {
        super();

        this.name = 'startScreen';
        this.game = option.game;
        this.sceneScale = option.scale;
        this._emitter = new EventEmitter();
        
        this.countdownValue = this.game.waitAt;
        this.soundFlag = 'off';
        this.zIndex = 8;
        this.startScreen();
    }

    get emitter() {
        return this._emitter;
    }

    startScreen() {

        this.screenContainer = new Container();
        this.addChild(this.screenContainer);

        this.timerCont = new Container();
        this.screenContainer.addChild(this.timerCont);
        
        // this.startGameText = new Text({
        //     text: 'GAME STARTS IN:', 
        //     style: {
        //         fontSize: 50,
        //         fontFamily: 'LuckiestGuy',
        //         fill: 0x185201,
        //         fontWeight: 'bold'
        //     }
        // });
        // this.startGameText.x = (this.width - this.startGameText.width) / 2;
        // this.timerCont.addChild(this.startGameText);
        
        this.countdownText = new Text({ 
            text: `${this.countdownValue}`, 
            style: {
                fontSize: 70,
                fontFamily: 'LuckiestGuy',
                fill: 0x9d0000,
                fontWeight: 'bold'
            }
        });
        // this.countdownText.x = (this.width - this.countdownText.width) / 2;
        // this.countdownText.y = (this.timerCont.height - this.countdownText.height) / 2;
        this.timerCont.addChild(this.countdownText);

        this.btnCont = new Container();
        this.btnCont.y = this.countdownText.height + 60;
        // this.btnCont.interactive = true;
        this.btnCont.cursor = 'pointer';

        this.screenContainer.addChild(this.btnCont);

        this.btn = new Graphics();
        this.btn.label = 'btn';
        this.btn.rect(0, 0, 200, 50);
        this.btn.fill(0x16b300)
        // this.btn.interactive = true;

        this.btnCont.on('pointerup', ()=>{
            this.btnCont.interactive = false;
            this.countdown();
            // this.login();
        });
        this.btnCont.addChild(this.btn);

        this.btnText = new Text({
            text: 'Start game',
            style: {
                fontSize: 20,
                fill: 0xffffff,
                fontWeight: 'bold'
            }
        });
        this.btnText.x = (this.btn.width - this.btnText.width) / 2;
        this.btnText.y = (this.btn.height - this.btnText.height) / 2;
        this.btnCont.addChild(this.btnText);
    }

    start() {
        this.btnCont.interactive = false;
        this.countdown();
    }

    restart() {
        this.countdownText.visible = true;
        this.checkCounter(this.countdownValue);
        this.emitter.emit('restart');
        this.countdownText.visible = true;
        this.countdown();
    }

    restartScreen() {
        this.countdownText.visible = false;
        // this.btnCont.interactive = true;
        this.checkCounter(this.countdownValue);
        this.btnCont.on('pointerup', ()=>{
            this.countdownText.visible = true;
            this.emitter.emit('restart');
            this.btnCont.on('pointerup', ()=>{
                this.btnCont.interactive = false;
                this.countdown();
            });
        });

        this.btnText.text = 'Restart Game'
        this.btnText.x = (this.btn.width - this.btnText.width) / 2;
        this.btnText.y = (this.btn.height - this.btnText.height) / 2;
    }

    countdown() {
        let timePassed = this.countdownValue;
        let timer = setInterval(()=> {
            timePassed--;
            this.checkCounter(timePassed);

            if (timePassed === 0) {
                this.emitter.emit('countdown');
                clearInterval(timer);
                return;
            }
        }, 1000);
    }

    checkCounter(timePassed) {
        this.countdownText.text = `${timePassed}`;
    }

    hideInput() {
        if(this.input) this.input.domField.style.visibility = 'hidden';
    }

    drawScene(scale) {
        // this.screenContainer.scale.set(scale);
        // this.screenContainer.y = (this.game.app.screen.height - this.screenContainer.getBounds().height) / 2;
        // if(this.btnSubmit) this.btnSubmit.x = ((this.width - this.btnSubmit.getBounds().width) / 2) / scale;
        // this.startGameText.x = ((this.width - this.startGameText.getBounds().width) / 2) / scale;
        // this.turnSound.x = ((this.width - this.turnSound.getBounds().width) / 2) / scale;
        // this.countdownText.x = ((this.width - this.countdownText.getBounds().width) / 2) / scale;
        // this.btnCont.x = ((this.width - this.btnCont.getBounds().width) / 2) / scale;
        this.countdownText.x = ((this.width - this.countdownText.getBounds().width) / 2);
        this.btnCont.x = ((this.width - this.btnCont.getBounds().width) / 2);
        // if(!this.game.isAuth) {
        //     this.userName.x = ((this.width - this.userName.getBounds().width) / 2) / scale;
        //     this.input.pixiObject.position.x = (( this.width - this.input.pixiObject.getBounds().width) / 2) / scale;
        //     this.input.setPosition(this.input.pixiObject.getGlobalPosition().x, this.input.pixiObject.getGlobalPosition().y);
        //     this.input.drawInput(scale);
        // }
        
    }
}