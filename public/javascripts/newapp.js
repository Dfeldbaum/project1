

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
    game.load.image('yogamat', 'images/yoga-mat-65.png');
    game.load.image('gymball', 'images/gymball-30.png');
    game.load.image('eliptical', 'images/eliptical-70.png');
    game.load.image('abbench', 'images/abbench-70.png');
    game.load.image('bench', 'images/bench-70.png');
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
    // for (var i = 0; i < 10; i++) {
    // 	// create the actual star
    //     var milk = milks.create(i * 50, 400, 'milk');
    // }

    // Create treadmill obstacle group

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

   	// Create yoga mat obstacle group
   	yogamats = game.add.group();
    yogamats.enableBody = true;

    var yogamat = yogamats.create(650, 563, 'yogamat');
    yogamat.body.immovable = true;

   	yogamat = yogamats.create(650, 533, 'yogamat');
   	yogamat.body.immovable = true;

   	// Create gymball obstacle group, physics
   	gymballs = game.add.group();
    gymballs.enableBody = true;

    var gymball = gymballs.create(740, 559, 'gymball');
    gymball.body.immovable = false;
    gymball.body.collideWorldBounds = true;
    gymball.body.bounce.y = 0.2;
    gymball.body.bounce.x = 0.2;

   	gymball = gymballs.create(740, 527, 'gymball');
   	gymball.body.immovable = false;
   	gymball.body.collideWorldBounds = true;
   	gymball.body.bounce.y = 0.2;
    gymball.body.bounce.x = 0.2;

   	// var gymball = gymballs.create(760, 557, 'gymball');
    // gymball.body.immovable = false;
    // gymball.body.collideWorldBounds = true;
    // gymball.body.bounce.y = 0.2;
    // gymball.body.bounce.x = 0.2;

   	// gymball = gymballs.create(760, 525, 'gymball');
   	// gymball.body.immovable = false;
   	// gymball.body.collideWorldBounds = true;
   	// gymball.body.bounce.y = 0.2;
   	// gymball.body.bounce.x = 0.2;

   	// Create eliptical group
   	elipticals = game.add.group();
    elipticals.enableBody = true;


   	var eliptical = elipticals.create(720, 210, 'eliptical');
    eliptical.body.immovable = true;

    eliptical = elipticals.create(720, 260, 'eliptical');
   	eliptical.body.immovable = true;

   	eliptical = elipticals.create(720, 310, 'eliptical');
   	eliptical.body.immovable = true;

   	eliptical = elipticals.create(720, 360, 'eliptical');
   	eliptical.body.immovable = true;


	// Create ab bench
	abbenches = game.add.group();
    abbenches.enableBody = true;

   	var abbench = abbenches.create(10, 210, 'abbench');
    abbench.body.immovable = true;


	// Create bench group
   	benches = game.add.group();
    benches.enableBody = true;

   	var bench = benches.create(10, 250, 'bench');
    bench.body.immovable = true;

   	bench = benches.create(10, 300, 'bench');
   	bench.body.immovable = true;

   	bench = benches.create(10, 350, 'bench');
   	bench.body.immovable = true;




    // Add score text
    scoreText = game.add.text(25, 15, 'protein pts: 0', { fontSize: '28px', fill: '#000' }); 

    // Controls 
    cursors = game.input.keyboard.createCursorKeys();

}    

function update() {

	// Create seperation with collisions
	game.physics.arcade.collide(player, treadmills);
	// game.physics.arcade.collide(player, yogamats);
	game.physics.arcade.collide(player, gymballs);
	game.physics.arcade.collide(treadmills, gymballs);
	game.physics.arcade.collide(gymballs, gymballs);
	game.physics.arcade.collide(player, elipticals);
	game.physics.arcade.collide(elipticals, gymballs);
	game.physics.arcade.collide(player, abbenches);
	game.physics.arcade.collide(abbenches, gymballs);
	game.physics.arcade.collide(player, benches);
	game.physics.arcade.collide(benches, gymballs);



	// Create overlap collision physics
	// game.physics.arcade.overlap(player, milks, drinkMilk, null, this);
	// game.physics.arcade.overlap(player, yogamats, null, null, this);

    
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


//     function drinkMilk (player, milk) {
//     	milk.kill();
//     	score += 5;
//     	scoreText.text = 'protein pts: ' + score;
//     }

}









