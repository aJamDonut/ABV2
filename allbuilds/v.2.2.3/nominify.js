
class Life extends PIXI.Sprite {
	constructor(index, texture) {
		super(texture);
		game.debug("Creating life");
		
		this.id = game.randID();
		this.size = 25;
		this.calcattempts = 0;
		this.status = "wait";
		this.x = -100;
		this.y = -100;
		this.goingtox = 500;
		this.goingtoy = 500;
		this.distanceX = 0;
		this.distanceY = 0;
		this.emptied = true;
		this.path = [];
		this.rotation = 0;
		this.selected = false;
		this.width = game.lifeTileSize;
		this.collisionWidth = 25;
		this.collisionHeight = 25;
		this.maxPhaseAttempts = 9;
		var randNum = game.rand(0, game.ai.names.length);
		this.data = {
			speed : game.rand(60, 100),
		};
		this.jobs = [];
		this.level = 0;
		this.height = game.lifeTileSize;
		this.first = false;
		this.phaseAttempts = 0;
		this.direction = 1;
		randNum = game.rand(0, game.ai.names.length);
		this.name = game.ai.names[randNum];
		game.ai.names.splice(randNum, 1);
		this.index = index;
		
	}
	
	toJSON() {
		
		return {
			x: this.x,
			y: this.y,
			data: this.data
		};
		
	};
	destroy() {
		console.log("Custom destroy: "+this.id);
		console.log(this);
		return super.destroy();
	}
}

class WorldGraphic extends PIXI.Graphics {
	
	
	constructor(){
		super();
		this.id = game.randID();
	}
	
	
	isFullscreen() {
		console.log("Adding to fullscreen");
		this.fullscreen = true;
		game.world.addToIndex('fullscreen', this);
	}
	
	destroy() {
		console.log("Running extended destroy");
		if(this.resizable == true) {
			game.world.removeFromIndex('fullscreen', this, false);
		}
		return super.destroy();
	}
	
}

function WorldObject(x, y, texture) {
	game.debug("New world object :" + texture);
    if (texture !== undefined) {
        PIXI.Sprite.call(this, texture);
    } else {
        PIXI.Sprite.call(this);
    }
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = 64;

    this.render = function() {};
    this.displayGroup = game.render.underLifeLayer;
    this.failed = false;
    this.jobCount = 0;
    this.fixedInPlace = true;
    this.built = false;
    this.failedCount = 0;
    this.tick = function() {};
    this.killOnBuild = false;
    this.id = game.randID();
    this.data = {};
    this.toJSON = function() {

        return {
            x: this.x,
            y: this.y,
			height: this.height,
            width: this.width,
            framex: this.texture.frame.x,
            framey: this.texture.frame.y,
            tileSetName: this.texture.tileSetName,
            built: this.built,
            id: this.id,
            itemid: this.itemid,
            data: this.data,
			name: this.name,
			direction: this.direction,
			readName: this.readName,
			alpha: this.alpha,
        };

    };
}
WorldObject.prototype = Object.create(PIXI.Sprite.prototype);

function WorldObjectAnim(x, y, frames) {

    PIXI.extras.AnimatedSprite.call(this, frames);
    	
    
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = 64;

    this.render = function() {};
    this.displayGroup = game.render.underLifeLayer;
    this.failed = false;
    this.jobCount = 0;
    this.fixedInPlace = true;
    this.built = false;
    this.failedCount = 0;
    this.tick = function() {};
    this.killOnBuild = false;
    this.id = game.randID();
    this.data = {};
    this.toJSON = function() {

        return {
            x: this.x,
            y: this.y,
			height: this.height,
            width: this.width,
            framex: this.texture.frame.x,
            framey: this.texture.frame.y,
            tileSetName: this.texture.tileSetName,
            built: this.built,
            id: this.id,
            itemid: this.itemid,
            data: this.data,
			name: this.name,
			readName: this.readName,
			alpha: this.alpha,
        };

    };
}
WorldObjectAnim.prototype = Object.create(PIXI.extras.AnimatedSprite.prototype);



/*class Line extends PIXI.Graphics {
    constructor(points, lineSize, lineColor) {
        super();
        
        var s = this.lineWidth = lineSize || 5;
        var c = this.lineColor = lineColor || "0x000000";
        
        this.points = points;

        this.lineStyle(s, c)

        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
    }
    
    updatePoints(p) {
        
        var points = this.points = p.map((val, index) => val || this.points[index]);
        
        var s = this.lineWidth, c = this.lineColor;
        
        this.clear();
        this.lineStyle(s, c);
        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
    }
}*/

/*
//Bootstrap example
myCode = function() {
}
bootStrap.push(myCode);
*/