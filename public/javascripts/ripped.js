console.log('linked');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamediv', { preload: preload, create: create, update: update }); // empty string is id for canvas el

var player;
var cursors;
var score = 0;
var milks;


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

    
}

function create() {
    // Create Game world 
    // Add physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Add background for world (tiled)
    game.world.setBounds(0, 0, 800, 600);
    background = game.add.tileSprite(0, 0, 800, 600, 'wood');

    // Create ronnie player 
    player = game.add.sprite(390, 300, 'ronnie');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add('left', [1], 10, true);
    player.animations.add('right', [2], 10, true);
    player.animations.add('up', [0], 10, true);
    player.animations.add('down', [0], 10, true);


    // Create grandpa enemies (as group)
    
    this.enemyPool = game.add.group();
    this.enemyPool.enableBody = true;
    game.physics.arcade.enable(this.enemyPool);
    this.enemyPool.createMultiple(25, 'grandpa');
    this.enemyPool.setAll('anchor.x', 0.5);
    this.enemyPool.setAll('anchor.y', 0.5);
    this.enemyPool.setAll('outOfBoundsKill', true);
    this.enemyPool.setAll('checkWorldBounds', true);
    this.enemyPool.forEach(function (enemy) {
      enemy.animations.add('up', [0,1,2,3], 10, true);
    });
    this.nextEnemyAt = 0;
    this.enemyDelay = 1000;


    // Create Milk objects in a group 
    milks = game.add.group();
    milks.enableBody = true;
    var firstMilk = milks.create(400, 230, 'milk');


    // Create treadmill group

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

   	// Create treadmill-down (in treadmill group) 
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

   	// Create yoga mat group
   	yogamats = game.add.group();
    yogamats.enableBody = true;

    var yogamat = yogamats.create(650, 563, 'yogamat');
    yogamat.body.immovable = true;

   	yogamat = yogamats.create(650, 533, 'yogamat');
   	yogamat.body.immovable = true;

   	// Create gymball group, physics
   	gymballs = game.add.group();
    gymballs.enableBody = true;

    var gymball = gymballs.create(740, 559, 'gymball');
    gymball.body.immovable = false;
    gymball.body.collideWorldBounds = true;
    gymball.body.bounce.y = 0.5;
    gymball.body.bounce.x = 0.5;

   	gymball = gymballs.create(740, 527, 'gymball');
   	gymball.body.immovable = false;
   	gymball.body.collideWorldBounds = true;
   	gymball.body.bounce.y = 0.5;
    gymball.body.bounce.x = 0.5;

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

	  // Create rack group
   	racks = game.add.group();
    racks.enableBody = true;

   	var rack = racks.create(555, 248, 'rack');
    rack.body.immovable = true;

    rack = racks.create(555, 315, 'rack');
    rack.body.immovable = true;

	  // Create row group
   	rows = game.add.group();
    rows.enableBody = true;

   	var row = rows.create(175, 240, 'row');
    row.body.immovable = true;

    row = rows.create(175, 290, 'row');
    row.body.immovable = true;

    row = rows.create(175, 340, 'row');
    row.body.immovable = true;

    // Add score text
    scoreText = game.add.text(15, 15, 'protein pts: 0', { fontSize: '28px', fill: '#000' });
    

    // Controls 
    cursors = game.input.keyboard.createCursorKeys();


    game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, createMilkLeft, this);
    game.time.events.repeat(Phaser.Timer.SECOND * 15, 10, createMilkTopRight, this);

}    

function update() {

	// Create seperation with collisions
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

	

	// Create overlap collision physics


  game.physics.arcade.overlap(player, this.enemyPool, killRonnie, null, this);  

  game.physics.arcade.overlap(player, milks, drinkMilk, null, this);
  
  // Enemy spawner 
  if (this.nextEnemyAt < this.time.now && this.enemyPool.countDead() > 0) {
      this.nextEnemyAt = this.time.now + this.enemyDelay;
      var enemy = this.enemyPool.getFirstExists(false);
      enemy.reset(this.rnd.integerInRange(20, 780), 0);
      enemy.body.velocity.y = this.rnd.integerInRange(30, 60);
      enemy.play('up');
    }
  
  // Reset player movement (left/right/up/down)
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  // Ronnie player controls - left/right 
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

  // Ronnie player controls - up/down 
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

  // Win conditional 
  if (score === 100) {
    game.paused = true;
    game.add.text(100, 250, 'YOU WIN! WOO!', { fontSize: '50px', fill: '#000000' });
    game.add.button(100, 350, 'button', actionOnClick, this)
  }

}



function killRonnie (enemy, player) {
  // game.pause = true;
 game.paused = true;
 game.add.text(80, 250, 'You lost. Press replay to start over', { fontSize: '40px', fill: '#ff0000' });
 game.add.button(355, 350, 'button', actionOnClick, this)

}

function actionOnClick () {
  game.state.restart();
}



var drinkMilk = function(player, milks) {
	milks.kill();
	score += 10;
	scoreText.text = 'protein pts: ' + score;
}  

var createMilkLeft = function ()  {
    milks.create(20 + Math.random() * 300, 450, 'milk');
    console.log('left milk created')
}  


var createMilkTopRight = function ()  {
    milks.create(450 + Math.random() * 300, 150, 'milk');
    console.log('top right milk created')
}  









