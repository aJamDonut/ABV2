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