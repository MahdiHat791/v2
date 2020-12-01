
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    
    game.load.image('sky', 'assets/s1.jpg');
    game.load.image('dragonTexture', 'assets/d1.png');
    game.load.json('dragonMesh', 'assets/dragon.json');   
    game.load.image('tail', 'assets/t2.png');   

}

var dragon = null;

function create() {

    game.add.image(0, 0, 'sky');
    a = game.add.image(65, 380, 'tail');
    a.scale.setTo(0.6,0.7);
    game.scale.pageAlignHorizontally = true;

    dragon = game.add.creature(500, 370, 'dragonTexture', 'dragonMesh');

    dragon.scale.set(23.0);
    dragon.rotation = +6;
    
    dragon.play(true); //  true = loop

}
