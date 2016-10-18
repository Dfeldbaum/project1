
### Get Ripped Or Die Trying Phaser Game

---

### Deliverables

* Completed top down game built with Phaser html5 framework 
* Working game hosted on heroku: https://get-ripped-or-die-trying.herokuapp.com/
* Git repository on GitHub with files of game: https://github.com/Dfeldbaum/project1

--- 

### Technical Requirements

* Game renders in browser within heroku app
* The game is designed as a survival-based game for 1 player
* Logic created for players, enemies and game objects to determine winning and losing states
* Game created within server, which contains semantic html, css (less), a central javascript file for the game, and external javascript from phaser's CDN
* Maintained a KISS and DRY approach to code as much as possible (some refactoring still required)

--- 

### Game Summary 

* Get Ripped Or Die Trying ("GRODT") is a top-down survival game built with the Phaser html5 game engine. 
* GRODT was built as a top-down game in the same sphere as Zelda with a tilemap game world environment (compared to sidescrolling, platform game)
* The time period of the game is 2031 and the world has overrun by a zombie apocalypse
* The protagonist of the game is "Ronnie" who is in a gym that has been overrun by eldery zombies 
* To win, Ronnie must reach 100 "protein points" by collecting randomly spawned milk cartons which are worth 10 protein points each
* Zombie enemies spawn from the top of the screen in random positons and walk down vertically through the gamemap
* The player loses if Ronnie runs into any of the spawned zombie enemies

---

### Approach to Game 

* I worked through multiple Phaser tutorials, which were all platform based games. A large challenge was transferring learnings from platform tutorials over to a tilemap/top-down game world environment. 
* The gameworld itself required a large amount of time and photo-editing before I could create any game functions, logic
* The gameworld is an overhead view of a gym with workout machines and equipment acting as obstacles for Ronnie. Each obstacle had to be specifically edited with transparent, alpha channel backgrounds as close to edges as possible for character collisions to look and feel realistic.
* Each obstacle was then individually placed on the gameworld according to specific (x,y) coordinates 
* Built in "seperation-style" collision detection set between Ronnie and obstacles so that when collisions occured Ronnie would physically seperate from obstacles rather "walk over" obstacles
* Milk cartons for Ronnie to collect are randomly generated in two central locations of the map - a top location and a bottom location based on two timed sequence functions. Another stand-alone milk function is set as one-time timed event to spawn near Ronnie as the game starts
* The milk time sequence functions both include Math.random methods which multiply against initial x and y coordinates for top and bottom locations 
* To reward the Ronnie character with protein points, overlap collision functions were set between Ronnie and milk carton objects. When the Ronnie player collides with a milk carton, an overlap collision function runs, which triggers another drinkMilk function that "kills" the milk carton and attributes 10 points to the scoreboard
* A winGame function is triggered upon collecting 100 protein points and winning text is displayed across the screen
* The Zombies enemy objects were created with a four-framed spritesheet animation to mimic walking
* Zombies are spawned according to a zombie spawn function which creates 25 Zombies in random positions at the the top the game map and spawns them every 1 second (1000 ms). Spawning is looped according to a conditional that for checks for how many objects have been killed and moved past the game environment. Spawning continues as no enemy objects are ever counted as dead
* Zombie speed is also randomized according to Phaser's preset random number method
* In order to create losing state, another overlap collision method was set between Ronnie and spawned zombie enemies 
* Upon collision between Ronnie and any Zombie, a loseGame function is triggered with pauses the game state, plays a laughing sound, and flashes a losing text across the screen

--- 

### To Do 

* The Ronnie character needs a functioning spritesheet to mimic walking (ie. the zombie character spritesheet)
* Negative point objects need to be created in the game environment to remove points and create more difficulty
* More levels which will maintain game logic and increase in difficulty of game based on placement of obstacles in environment
* Sounds for collecting Milk
* Feature that allows player to disable sound
* Quit and restart features built into a game menu or loseGame function

--- 

### Ackowledgements

roomsketcher.com for exercise equipment objects




