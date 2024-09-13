import { Container, Text, Graphics } from "pixi.js";
import { EventEmitter } from "events";

export default class Login extends Container {

    constructor() {
        super();

        this.name = 'login container';
        this.zIndex = 9;
        this.creteButton();

        this.interactive = true;
        this.cursor = 'pointer';
        this._emitter = new EventEmitter();
    }

    get emitter() {
        return this._emitter;
    }

    creteButton() {
        this.btn = new Graphics();
        this.btn.label = 'btn';
        this.btn.rect(0, 0, 150, 30);
        this.btn.fill(0xff00ff)
        // this.btn.interactive = true;

        this.on('pointerup', ()=>{
            this.interactive = false;
            this.login();
        });
        this.addChild(this.btn);

        this.btnText = new Text({
            text: 'Login',
            style: {
                fontSize: 16,
                fill: 0xffffff,
                fontWeight: 'bold'
            }
        });
        this.btnText.x = (this.btn.width - this.btnText.width) / 2;
        this.btnText.y = (this.btn.height - this.btnText.height) / 2;
        this.addChild(this.btnText);
    }

    async login() {
        await fetch('https://flygame2-356bcdd0d0f3.herokuapp.com/game/login', {
            method: 'GET',
            
            // body: {
            //     "address": "0x28C611372B3947dDFE12c6e4bc0a33c179a62A10",
            // }
        }).then((response) => {
            console.log('response ::', response)
            this.emitter.emit('login');
        })
    }

    counterScore(amount) {
        this.scoreLabel.text = amount;
    }
}