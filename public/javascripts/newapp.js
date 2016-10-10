

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamediv', { preload: preload, create: create, update: update }); // empty string is id for canvas el

function preload() {

    game.load.image('wood', 'images/wood.png');
    game.load.spritesheet('ronnie', 'images/ronniespritesheet2.png', 33, 48);
    // game.load.image('platform', 'images/platform.png');
    // game.load.image('star', 'images/star.png');
    
}


function create() {
    /// Create Game World

    // Add physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Add background for world (tiled)
    game.world.setBounds(0, 0, 800, 600);
    background = game.add.tileSprite(0, 0, 800, 600, 'wood');


    // Create Ronnie Player 
    player = game.add.sprite(375, 275, 'ronnie');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add('left', [1], 6, true);
    player.animations.add('right', [2],6, true);
    player.animations.add('up', [0], 6, true);
    player.animations.add('down', [0], 6, true);

    // Add score text
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' }); 

    /// Controls /// 
    cursors = game.input.keyboard.createCursorKeys();


}    

function update() {

    // Reset player movement (left/right)

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    /// Connect controls to Ronnie player ///
    if (cursors.left.isDown) {
        // move player left with 150 speed
        player.body.velocity.x = -150;
        player.animations.play('left');
    }
    else if (cursors.right.isDown) {
        // move player right with 150 speed
        player.body.velocity.x = 150;
        player.animations.play('right');
   	}
        
    else {
        // don't move 
        player.animations.stop();
        player.frame = 4;
    }



    if (cursors.up.isDown) {
    	player.body.velocity.y = -150;
    	player.animations.play('up'); 
    }    
    else if (cursors.down.isDown) {
    	player.body.velocity.y = 150;
    	player.animations.play('down');
    }
    else {
        // don't move 
        player.animations.stop();
        player.frame = 4;
    }



    // // Connect cursors var with player for jump
    // if (cursors.up.isDown && player.body.touching.down) {
    //     player.body.velocity.y = -350;
    // } 

}










