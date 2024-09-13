import { Container, Text } from "pixi.js";

export default class Score extends Container {

    constructor() {
        super();

        this.name = 'score';
        this.widthTaco = 115;
        this.zIndex = 9;
        this.creteScore();
    }

    creteScore() {
        this.scoreLabel = new Text({
            text: '0', 
            style: {
                fill: 0x16b300,
                fontSize: 70,
                fontFamily: 'LuckiestGuy',
                fontWeight: 'bold'
            }
        });
        this.addChild(this.scoreLabel);
    }

    counterScore(amount) {
        this.scoreLabel.text = amount;
    }
}