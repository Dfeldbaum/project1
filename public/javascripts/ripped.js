console.log('linked');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamediv', { preload: preload, create: create, update: update }); // empty string is id for canvas el

var player;
var cursors;
var score = 0;
var milks;
var music;





function preload() {

    game.load.image('wood', 'images/wood-800.png');
    game.load.image('milk', 'images/milk-carton-28.png');
    game.load.image('treadmill-up', 'images/treadmill-up-80.png');
    game.load.image('treadmill-down', 'images/treadmill-down-80.png');
    game.load.image('yogamat', 'images/yoga-mat-65.png');
    game.load.image('gymball', 'images/gymball-30.png');
    game.load.image('eliptical', 'images/eliptical-70.png');
    game.load.image('abbench', 'images/abbench-70.png');
    game.load.image('bench', 'images/bench-70.png');
    game.load.image('rack', 'images/rack-41.png');
    game.load.image('row', 'images/row-80.png');
    game.load.spritesheet('ronnie', 'images/ronniespritesheet2.png', 33, 48);
    game.load.spritesheet('grandpa', 'images/grandpa-2-cropped.png', 30, 48);
    game.load.audio('oldman', 'audio/oldman.mp3');

    
}

var audio1 = document.createElement('audio');
audio1.src = 'audio/oldman.mp3'

function create() {
    // game physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // background for tilemap world
    game.world.setBounds(0, 0, 800, 600);
    background = game.add.tileSprite(0, 0, 800, 600, 'wood');

    // ronnie player 
    player = game.add.sprite(390, 300, 'ronnie');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add('left', [1], 10, true);
    player.animations.add('right', [2], 10, true);
    player.animations.add('up', [0], 10, true);
    player.animations.add('down', [0], 10, true);


    // enemy group 
    enemyPool = game.add.group();
    enemyPool.enableBody = true;
    game.physics.arcade.enable(enemyPool);
    enemyPool.createMultiple(25, 'grandpa');
    enemyPool.setAll('anchor.x', 0.5);
    enemyPool.setAll('anchor.y', 0.5);
    enemyPool.setAll('outOfBoundsKill', true);
    enemyPool.setAll('checkWorldBounds', true);
    enemyPool.forEach(function (enemy) {
      enemy.animations.add('up', [0,1,2,3], 10, true);
    });
    game.nextEnemyAt = 0;
    game.enemyDelay = 1000;


    // milk protein group 
    milks = game.add.group();
    milks.enableBody = true;
    var firstMilk = milks.create(400, 230, 'milk');


    // treadmill group
    treadmills = game.add.group();
    treadmills.enableBody = true;

    treadmillUp = treadmills.create(250, 5, 'treadmill-up');
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

   	// Create treadmill-down (in treadmill group) 
   	treadmillDown = treadmills.create(15, 515, 'treadmill-down');
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

   	// yoga mat group
   	yogamats = game.add.group();
    yogamats.enableBody = true;

    yogamat = yogamats.create(650, 563, 'yogamat');
    yogamat.body.immovable = true;

   	yogamat = yogamats.create(650, 533, 'yogamat');
   	yogamat.body.immovable = true;

   	// gymball group, physics
   	gymballs = game.add.group();
    gymballs.enableBody = true;

    gymball = gymballs.create(740, 559, 'gymball');
    gymball.body.immovable = false;
    gymball.body.collideWorldBounds = false;
    gymball.body.bounce.y = 0.5;
    gymball.body.bounce.x = 0.5;

   	gymball = gymballs.create(740, 527, 'gymball');
   	gymball.body.immovable = false;
   	gymball.body.collideWorldBounds = false;
   	gymball.body.bounce.y = 0.5;
    gymball.body.bounce.x = 0.5;

   	// eliptical group
   	elipticals = game.add.group();
    elipticals.enableBody = true;

   	eliptical = elipticals.create(720, 210, 'eliptical');
    eliptical.body.immovable = true;

    eliptical = elipticals.create(720, 260, 'eliptical');
   	eliptical.body.immovable = true;

   	eliptical = elipticals.create(720, 310, 'eliptical');
   	eliptical.body.immovable = true;

   	eliptical = elipticals.create(720, 360, 'eliptical');
   	eliptical.body.immovable = true;


	// ab bench group
	abbenches = game.add.group();
    abbenches.enableBody = true;

   	abbench = abbenches.create(10, 210, 'abbench');
    abbench.body.immovable = true;


	// bench group
   	benches = game.add.group();
    benches.enableBody = true;

   	bench = benches.create(10, 250, 'bench');
    bench.body.immovable = true;

   	bench = benches.create(10, 300, 'bench');
   	bench.body.immovable = true;

   	bench = benches.create(10, 350, 'bench');
   	bench.body.immovable = true;

	  // Create rack group
   	racks = game.add.group();
    racks.enableBody = true;

   	rack = racks.create(555, 248, 'rack');
    rack.body.immovable = true;

    rack = racks.create(555, 315, 'rack');
    rack.body.immovable = true;

	  // Create row group
   	rows = game.add.group();
    rows.enableBody = true;

   	row = rows.create(175, 240, 'row');
    row.body.immovable = true;

    row = rows.create(175, 290, 'row');
    row.body.immovable = true;

    row = rows.create(175, 340, 'row');
    row.body.immovable = true;

    // score text
    scoreText = game.add.text(15, 15, 'protein pts: 0', { fontSize: '28px', fill: '#000' });
    

    // create controls 
    cursors = game.input.keyboard.createCursorKeys();

    // timed events for milk generator functions
    game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, createMilkLeft, this);
    game.time.events.repeat(Phaser.Timer.SECOND * 15, 10, createMilkTopRight, this);

    // game.add.audio('oldman')
    // game.sound.setDecodedCallback('oldman', start, this);
}    

function update() {

	// seperation with collisions
	game.physics.arcade.collide(player, treadmills);
	game.physics.arcade.collide(player, yogamats);
	game.physics.arcade.collide(player, gymballs);
	game.physics.arcade.collide(treadmills, gymballs);
	game.physics.arcade.collide(gymballs, gymballs);
	game.physics.arcade.collide(player, elipticals);
	game.physics.arcade.collide(elipticals, gymballs);
	game.physics.arcade.collide(player, abbenches);
	game.physics.arcade.collide(abbenches, gymballs);
	game.physics.arcade.collide(player, benches);
	game.physics.arcade.collide(benches, gymballs);
	game.physics.arcade.collide(player, racks);
	game.physics.arcade.collide(racks, gymballs);
	game.physics.arcade.collide(player, rows);
	game.physics.arcade.collide(rows, gymballs);

	
	// overlap collisions
  	game.physics.arcade.overlap(player, enemyPool, loseGame, null, this);  

	game.physics.arcade.overlap(player, milks, drinkMilk, null, this);
  
	enemySpawner();

  	// reset player movement (left/right/up/down)
  	player.body.velocity.x = 0;
  	player.body.velocity.y = 0;

  	// player controls - left/right 
  	if (cursors.left.isDown) {
    	player.body.velocity.x = -150; // speed
    	player.animations.play('left');
  	}
  	else if (cursors.right.isDown) {
    	player.body.velocity.x = 150;
    	player.animations.play('right');
 	}
  	else {
    	player.animations.stop();
    	player.frame = 4;
  	}
  	// player controls - up/down 
  	if (cursors.up.isDown) {
  		player.body.velocity.y = -150;
  		player.animations.play('up'); 
  	}    
  	else if (cursors.down.isDown) {
  		player.body.velocity.y = 150;
  		player.animations.play('down');
  	}
  	else {
      	player.animations.stop();
    	player.frame = 4;
  	}

  	winGame(); 
}



function enemySpawner() {
	if (game.nextEnemyAt < game.time.now && enemyPool.countDead() > 0) {
		game.nextEnemyAt = game.time.now + game.enemyDelay;
  		var enemy = enemyPool.getFirstExists(false);
  		enemy.reset(game.rnd.integerInRange(20, 780), 0);
  		enemy.body.velocity.y = game.rnd.integerInRange(30, 60);
  		enemy.play('up');
	}
}


function winGame () {
	if (score === 100) {
    	game.paused = true;
    	game.add.text(275, 265, 'You win!', { fontSize: '55px', fill: 'white' });
    	// game.add.button(100, 350, 'button', actionOnClick, this)
  	}
}

function loseGame (enemy, player) {
	audio1.play();
 	game.paused = true;
 	game.add.text(25, 265, 'Sooo, ya. You definitely died.', { fontSize: '55px', fill: 'white' });
 	// game.add.button(355, 350, 'button', actionOnClick, this)

}

function actionOnClick () {
	game.state.restart();
}


function drinkMilk(player, milks) {
	milks.kill();
	score += 10;
	scoreText.text = 'protein pts: ' + score;
}  

function createMilkLeft()  {
    milks.create(20 + Math.random() * 300, 450, 'milk');
    console.log('left milk created')
}  


function createMilkTopRight()  {
    milks.create(450 + Math.random() * 300, 150, 'milk');
    console.log('top right milk created')
}  









