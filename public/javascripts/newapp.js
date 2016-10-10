

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamediv', { preload: preload, create: create, update: update }); // empty string is id for canvas el

var player;
var cursors;
var milkCartons;
var score = 0;

function preload() {

    game.load.image('wood', 'images/wood.png');
    game.load.image('milk', 'images/milkcarton.png');
    game.load.image('treadmill-up', 'images/treadmill-up-80.png');
    game.load.image('treadmill-down', 'images/treadmill-down-80.png');
    game.load.spritesheet('ronnie', 'images/ronniespritesheet2.png', 33, 48);
    
}

function create() {
    // Create Game World // 
    // Add physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Add background for world (tiled)
    game.world.setBounds(0, 0, 800, 600);
    background = game.add.tileSprite(0, 0, 800, 600, 'wood');

    // Create Ronnie player //
    player = game.add.sprite(375, 275, 'ronnie');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add('left', [1], 10, true);
    player.animations.add('right', [2], 10, true);
    player.animations.add('up', [0], 10, true);
    player.animations.add('down', [0], 10, true);

    // Create Milk objects in a group //
    // milks = game.add.group();
    // milks.enableBody = true;
    // // Create milk cartons
    // for (var i = 0; i < 50; i++) {
    // 	// create the actual star
    //     var milk = milks.create(i * 35, 700, 'milk');
    // }

    // Create treadmill-up obstacle group

    treadmills = game.add.group();
    treadmills.enableBody = true;

    var treadmillUp = treadmills.create(250, 5, 'treadmill-up');
    treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(300, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(350, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(400, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(450, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(500, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(550, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	treadmillUp = treadmills.create(600, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;


	treadmillUp = treadmills.create(650, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

	treadmillUp = treadmills.create(700, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

	treadmillUp = treadmills.create(750, 5, 'treadmill-up');
   	treadmillUp.body.immovable = true;

   	// Create treadmill-down obstacles (in treadmill group) 
   	var treadmillDown = treadmills.create(15, 515, 'treadmill-down');
    treadmillDown.body.immovable = true;

    treadmillDown = treadmills.create(65, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;

   	treadmillDown = treadmills.create(115, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;

   	treadmillDown = treadmills.create(165, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;
   	
   	treadmillDown = treadmills.create(215, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;

   	treadmillDown = treadmills.create(265, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;
   	
   	treadmillDown = treadmills.create(315, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;

   	treadmillDown = treadmills.create(365, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;
   	
   	treadmillDown = treadmills.create(415, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;

   	treadmillDown = treadmills.create(465, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;
   	
   	treadmillDown = treadmills.create(515, 515, 'treadmill-down');
   	treadmillDown.body.immovable = true;



    // Add score text
    scoreText = game.add.text(12, 12, 'protein pts: 0', { fontSize: '25px', fill: '#000' }); 

    // Controls 
    cursors = game.input.keyboard.createCursorKeys();

}    

function update() {
	// Create seperation with Ronnie, treadmill group collisions
	game.physics.arcade.collide(player, treadmills);


	// Run drinkMilk function with player, milk collisions
	// game.physics.arcade.overlap(player, milks, drinkMilk, null, this);
    
    // Reset player movement (left/right/up/down)
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    // Connect left/right controls to Ronnie player 
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

    // Connect up/down controls to Ronnie player
    if (cursors.up.isDown) {
    	// move player up with 150 speed
    	player.body.velocity.y = -150;
    	player.animations.play('up'); 
    }    
    else if (cursors.down.isDown) {
    	// move player down with 150 speed
    	player.body.velocity.y = 150;
    	player.animations.play('down');
    }
    else {
        // don't move 
        player.animations.stop();
        player.frame = 4;
    }


    // function drinkMilk (player, milk) {
    // 	milk.kill();
    // 	score += 5;
    // 	scoreText.text = 'protein pts: ' + score;
    // }

}









