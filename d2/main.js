
var animate = new Phaser.Game(860, 750, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    
    animate.load.image('background', 'assets/b1.png');
    animate.load.image('dinosaurImage', 'assets/td1.png');
    animate.load.json('dinosaurJson', 'assets/dinosaur.json');   
    animate.load.image('tail', 'assets/t2.png');

}

var dinosaur = null;

function create() {

    animate.add.image(0, 0, 'background');

    tail = animate.add.image(55, 485, 'tail');
    tail.scale.setTo(0.6,0.7);
    animate.scale.pageAlignHorizontally = true;

    dinosaur = animate.add.creature(500, 450, 'dinosaurImage', 'dinosaurJson');
    dinosaur.play(true);
    dinosaur.scale.set(28.0);
    dinosaur.rotation = +6;

}

function update() {
console.log("updating");
}
