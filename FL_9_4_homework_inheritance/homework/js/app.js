function assign(targetObj) {
  if (targetObj === null || targetObj === undefined) {
    throw new TypeError('Error! Target is undefined or null');
  }

  let toObj = Object(targetObj);
  for (let i = 0; i < arguments.length; i++) {
    let sourceObj = arguments[i];

    if (sourceObj) {
      for (let key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
          toObj[key] = sourceObj[key];
        }
      }
    }
  }

  return toObj;
}

function Bot(args) {
  this.name = args.name;
  this.speed = this.defaultSpeed = args.speed;
  this.x = args.x;
  this.y = args.y;

}

Bot.prototype.showPosition = function () {
  return `I am ${this.name} and I am located at ${this.x}:${this.y}.`;
}
Bot.prototype.setSpeed = function (speed) {
  this.speed = speed;
}
Bot.prototype.getSpeed = function () {
  return this.speed;
}
Bot.prototype.getDefaultSpeed = function () {
  return this.defaultSpeed;
}

Bot.prototype.getCoordinates = function () {
  return { x: this.x, y: this.y };
};

Bot.prototype.setCoordinates = function (coord) {
  this.x = coord.x;
  this.y = coord.y;
};

Bot.prototype.showPosition = function () {
  return console.log(`I am ${this.constructor.name} '${this.name}'.\
I am located at: ${this.getCoordinates().x}:${this.getCoordinates().y} `);
};

Bot.prototype.move = function (direction) {

  switch (direction) {
      case 'up':
          this.y += this.getSpeed();
          break;
      case 'down':
          this.y -= this.getSpeed();
          break;
      case 'left':
          this.x -= this.getSpeed();
          break;
      case 'right':
          this.x += this.getSpeed();
          break;
      default:
          console.log('Error! Wrong Direction');
  }
}

function Racebot(args) {
  Bot.call(this, args);
  this.previousMove = null;
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.checkPreviousMove = function (direction) {

  if (this.previousMove) {
      if (this.previousMove === direction) {
          this.setSpeed(this.getSpeed() + 1);
      } else {
          this.setSpeed(this.getDefaultSpeed());
      }
  }
  this.previousMove = direction;
}

Racebot.prototype.move = function (direction) {
  this.checkPreviousMove(direction)
  Bot.prototype.move.call(this, direction);
};

function Speedbot(args) {
  Bot.call(this, args);
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function () {
  this.setSpeed(this.getSpeed() + 2);
}

Speedbot.prototype.move = function (direction) {
  Bot.prototype.move.call(this, direction);
  if (this.getSpeed() > this.getDefaultSpeed()) {
      this.setSpeed(this.getSpeed() - 1);
  }
}


let Botty = new Bot({ name: 'Betty', speed: 2, x: 0, y: 1 });
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.

let Zoom = new Racebot({ name: 'Lightning', speed: 2, x: 0, y: 1 });
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

let Broom = new Speedbot({ name: 'Thunder', speed: 2, x: 0, y: 1 });
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.