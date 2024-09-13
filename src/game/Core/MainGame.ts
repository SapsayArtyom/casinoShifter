import { AnimatedSprite, Application, Assets, Container, Sprite, Texture } from 'pixi.js'
// import MyLoader from './MyLoader';
import MainScene from './MainScene'

// import bookobsticles from '../../assets/images/bookobsticles.png'
import flappy0 from '../../assets/images/flappy/flappy0.png'
import flappy1 from '../../assets/images/flappy/flappy1.png'
import flappy2 from '../../assets/images/flappy/flappy2.png'
import flappy3 from '../../assets/images/flappy/flappy3.png'
import flappy4 from '../../assets/images/flappy/flappy4.png'
import flappy5 from '../../assets/images/flappy/flappy5.png'
import stack from '../../assets/images/stack.png'
import stack_revert from '../../assets/images/stack_revert.png'
import shadow_stack from '../../assets/images/shadow_stack.png'
import shadow_stack_revert from '../../assets/images/shadow_stack_revert.png'
import bg from '../../assets/images/bg.jpg'

export interface IMainGame {
    width: number
    height: number
    waitAt: number
    deadlineAt: number
    nickName: string
    isAuth: boolean
    showResults?: () => void
}

export default class MainGame {

    protected width: number
    protected height: number
    protected waitAt: number
    protected deadlineAt: number
    protected isAuth: boolean
    
    protected baseWidth = 1125;
    protected baseHeight = 2436;
    
    protected mainContainer: Container
    protected scene: MainScene
    public nickName: string
    public app: Application
    public showResults: any
    
    constructor(options: IMainGame){

        this.width = options.width;
        this.height = options.height;
        this.waitAt = options.waitAt;
        this.deadlineAt = options.deadlineAt;
        this.nickName = options.nickName;
        this.isAuth = options.isAuth;
        this.showResults = options.showResults;

        this.mainContainer = new Container();

        this.createGame();
    }

    async createGame() {

        // Assets.add({ alias: 'bookobsticles', src: bookobsticles });
        Assets.add({ alias: 'flappy0', src: flappy0 });
        Assets.add({ alias: 'flappy1', src: flappy1 });
        Assets.add({ alias: 'flappy2', src: flappy2 });
        Assets.add({ alias: 'flappy3', src: flappy3 });
        Assets.add({ alias: 'flappy4', src: flappy4 });
        Assets.add({ alias: 'flappy5', src: flappy5 });
        Assets.add({ alias: 'stack', src: stack });
        Assets.add({ alias: 'stack_revert', src: stack_revert });
        Assets.add({ alias: 'shadow_stack', src: shadow_stack });
        Assets.add({ alias: 'shadow_stack_revert', src: shadow_stack_revert });
        Assets.add({ alias: 'bg', src: bg });
        // Assets.add({ alias: 'flappy', src: flappySheet });
        await Assets.load([
            'stack', 
            'flappy0', 
            'flappy1', 
            'flappy2', 
            'flappy3',
            'flappy4',
            'flappy5',
            'stack',
            'stack_revert',
            'shadow_stack',
            'shadow_stack_revert',
            'bg',
        ]);

        // console.log('000000000', await require.context('../assets/coin_1.png'));
        

        this.init();
    }

    protected async init() {

        // this.app = new PIXI.Application({ width: this.width, height: this.height, antialias: true});
        // this.app.renderer.plugins.interaction.autoPreventDefault = false;
        // this.app.renderer.view.style.touchAction = 'auto';
        // document.body.appendChild(this.app.view);
        
        // this.app = new Application({ 
        //     width: this.baseWidth,
        //     height: this.baseHeight,
        //     antialias: true
        // });
        this.app = new Application();
        await this.app.init({
            background: '#1099bb',
            autoStart: false,
            resizeTo: document.getElementById('game'),
            sharedTicker: true,
        });
        (globalThis as any).__PIXI_APP__ = this.app; // eslint-disable-line
        document.getElementById('game').appendChild(this.app.canvas);

        // let div = document.createElement('div');
        // div.style.width = `${this.width}px`;
        // div.style.height = `${this.height}px`;
        // div.style.position = 'relative';
        // document.body.append(div);
        // div.append(this.app.view);

        // const clientWidth = this.width;
        // const clientHeight = this.height;
        // const screenProportions = clientHeight / clientWidth;
        // this.screenHeight = this.baseWidth * screenProportions;
        // this.shift = (this.baseHeight - this.screenHeight) / 2;

        // const canvas = document.getElementsByTagName("canvas");
        // canvas[0].style.position = "absolute";
        // canvas[0].style.transform = "translate(-50%, -50%)";
        // canvas[0].style.top = "50%";
        // canvas[0].style.left = "50%";
        // canvas[0].style.maxHeight = "unset";
        // canvas[0].style.maxWidth = "100%";

        // ==============================================================
        
        this.mainContainer.label = 'mainContainer';
        this.app.stage.addChild(this.mainContainer);

        this.scene = new MainScene({
            game: this,
            container: this.mainContainer,
        });

        // ==============================================================

        window.onblur = () => {
            if(this.scene && this.scene.startGame) {
                // sound.stop('propeller_idle');
                this.app.ticker.stop();
                this.scene.ticker.stop();
                this.scene.ManagerStacks.stop();
            }
        }
        window.onfocus = () => {
            if(this.scene && this.scene.startGame) {
                // sound.play('propeller_idle', { loop: true });
                this.app.ticker.start();
                this.scene.ticker.start();
                this.scene.ManagerStacks.start();
            }
        }
    }

    public restart() {
        this.scene.restart();
    }

    // destroyGame() {
    //     console.log('destroyGame')
    //     // if(this.scene.managerTaco && this.scene.managerTaco.createInterval) clearInterval(this.scene.managerTaco.createInterval);
    //     if(this.game.managerTaco && this.game.managerTaco.createInterval) this.game.managerTaco.removeInterval();
    //     this.mainContainer.destroy();
    //     this.app.destroy(true);
    //     this.game = null;
    //     sound.removeAll();
    // }

    // getPlayerValue() {
    //     return this.game.getPlayerValue()
    // }

    // checkSize() {
    //     let scaleScene = 1;
    //     if (this.width < 380) scaleScene = 0.8;

    //     return scaleScene;
    // }
}