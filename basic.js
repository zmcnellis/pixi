var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
var texture = PIXI.Texture.fromImage('./zach.gif');

// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

var style = {
    font : 'bold italic 36px Arial',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 1,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6
};

var basicText = new PIXI.Text('Zachary McNellis', style);
basicText.x = 30;
basicText.y = 180;

// center the sprite's anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// move the sprite to the center of the screen
bunny.position.x = 370;
bunny.position.y = 300;

bunny.scale.x = 0.4;
bunny.scale.y = 0.4;

bunny.xVel = 0.0;

stage.addChild(basicText);
stage.addChild(bunny);

// start animating
animate();

function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

	var isLeft = false;
	var isRight = false;

function animate() {
    requestAnimationFrame(animate);

    bunny.position.x += bunny.xVel;

	//Capture the keyboard arrow keys
	var left = keyboard(37),
	  up = keyboard(38),
	  right = keyboard(39),
	  down = keyboard(40);


	//Left arrow key `press` method
	left.press = function() {
			bunny.xVel = -2.0;
	//Change the cat's velocity when the key is pressed
	
	};

	//Left arrow key `release` method
	left.release = function() {
			bunny.xVel = 0.0;
	//If the left arrow has been released, and the right arrow isn't down,
	//and the cat isn't moving vertically:
	//Stop the cat

	};

	//Up
	up.press = function() {
	
	};
	up.release = function() {

	};

	//Right
	right.press = function() {
			bunny.xVel = 2.0;
	};
	right.release = function() {
			bunny.xVel = 0.0;
	};

	//Down
	down.press = function() {

	};
	down.release = function() {

	};

	// console.log(bunny.xVel);

    
    // bunny.position.x += bunny.xVel;

    /* if (bunny.position.x > 720) {
    	bunny.xVel = 0;
    }
    else if (bunny.position.x < 80) {
    	bunny.xVel = 0;
    } */
    // just for fun, let's rotate mr rabbit a littl

    // render the container
    renderer.render(stage);
}
