
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    
    game.load.image('sky', 'assets/deepblue.png');
    game.load.image('dragonTexture', 'assets/dragon.png');
    game.load.json('dragonMesh', 'assets/dragon.json');
    

    
}

var dragon = null;

function create() {

    game.add.image(0, 0, 'sky');

    dragon = game.add.creature(500, 370, 'dragonTexture', 'dragonMesh');

    dragon.scale.set(25.0);
    
    dragon.play(true); //  true = loop

}