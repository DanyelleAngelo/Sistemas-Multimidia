/*carrega imagens,sons,arquivos e etc*/
function preload() {
    /*fundo*/
    this.load.image('backgroundSky','assets/background/sky.png');
    /*obstáculos*/
    this.load.image('floor','assets/obstacle/floor.png');
    this.load.image('obstacleBox','assets/obstacle/box.png');
    /*personagens*/
    this.load.image('personaRun','assets/persona/run.png');
    /*others */
    this.load.image('life','assets/others/life.png');
    //
    this.load.image('player', 'assets/repl.png');
}

/*Cria o cenário do jogo, posicionamos elementos, criamos as interações
*dos elementos*/
function create() {
    this.add.image(300,200,'backgroundSky'); /*orientação que se baseia no meio da imagem*/
    var life = this.physics.add.sprite(130,30,'life').setScale(1.5);
    /*pyshics:indica relação física
    *  staticGroup: vai permitir criar vários grupos de objetos baseados na imagem original */
    var floor = this.physics.add.staticGroup();
    floor.create(300,489,'floor').setScale(1.7);
    
    var box = this.physics.add.staticGroup();
    box.create(220,370,'obstacleBox').setScale(1.5);
    //posicionando o elemento várias vexes na tela
    box.create(470,370,'obstacleBox').setScale(1.5);
    box.create(500,370,'obstacleBox').setScale(1.5);
    box.create(500,350,'obstacleBox').setScale(1.5);
    
    /*o sprite vai permitir qye */
    var persona = this.physics.add.sprite(100,370,'personaRun');
    
    //    
    this.player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(0.25, 0.25);
    this.player.setCollideWorldBounds(true);

    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
}

/*recursos executados quando eu interajo com o jogo*/
function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    else this.player.setVelocityX(0);
    if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    else this.player.setVelocityY(0);
}

/*definição de objeto:
*aqui ele apresenta algumas configurações iniciais do jogo*/
const config = {
    type: Phaser.AUTO,//forma que vou renderizar a tela
    width: 600,
    height: 400,
    backgroundColor: '#00ffff',
    autoCenter:Phaser.Scale.CENTER_BOTH,
    physics: {/*questões fisicas do jogo*/
        default: 'arcade',/*organização do jogo*/
        arcade: {
            gravity: {
                y: 0
            },
            debug: true,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

/*renderiza,executa de fato o jogo*/
const game = new Phaser.Game(config);