var tool=function(){game.addPersonalityWeight=function(name){game.settings.personalities.push(name)},game.addExperienceWeight=function(name){game.settings.experience.push(name)},game.makeRandomer=function(){void 0===game.settings.personalities&&(game.settings.personalities=["casual","hardcore","immature","ruffian"]),void 0===game.settings.experience&&(game.settings.experience=["noob","amateur","novice","pro"]),void 0===game.settings.customerCounter&&(game.settings.customerCounter=1),lifeSkin=game.rand(2,4),life=game.ai.createLife(game.rand(64,180),1,1,lifeSkin),game.settings.customerCounter++,life.data.customerID=game.settings.customerCounter,life.data.customer=!0,life.data.happiness=50,life.data.jobs=["customer"],life.data.personality=game.settings.personalities[game.rand(0,game.settings.personalities.length)],life.data.experience=game.settings.experience[game.rand(0,game.settings.experience.length)],life.data.cash=game.rand(1,200),game.ai.calcNeeds(life)},game.keepMakingRandomers=function(){if(game.isOpen){void 0!==game.world.index.arcade?countLife=Object.keys(game.world.index.pinball).length+Object.keys(game.world.index.arcade).length:countLife=Object.keys(game.world.index.pinball).length;for(var i=game.ai.life.length-1;i<countLife;i++)setTimeout(function(){game.makeRandomer()},1e3*i)}setTimeout(function(){game.keepMakingRandomers()},1e4)},setTimeout(function(){game.keepMakingRandomers()},5e3)};bootStrap.push(tool);function Life(type,texture){game.debug("Creating life"),PIXI.Sprite.call(this,texture),this.id=game.randID(),this.size=25,this.calcattempts=0,this.status="wait",this.x=-100,this.y=-100,this.goingtox=500,this.goingtoy=500,this.distanceX=0,this.distanceY=0,this.emptied=!0,this.path=[],this.rotation=0,this.selected=!1,this.width=game.lifeTileSize,this.collisionWidth=25,this.collisionHeight=25,this.maxPhaseAttempts=9;var randNum=game.rand(0,game.ai.names.length);this.data={speed:game.rand(60,100)},this.jobs=[],this.level=0,this.height=game.lifeTileSize,this.first=!1,this.phaseAttempts=0,this.direction=1,randNum=game.rand(0,game.ai.names.length),this.name=game.ai.names[randNum],game.ai.names.splice(randNum,1),this.toJSON=function(){return{x:this.x,y:this.y,data:this.data}}}function AI(game){this.removeLife=function(id){for(var i=0;i<this.life.length;i++)if(this.life[i].id==id){!1!==this.life[i].animRender&&void 0!==this.life[i].animRender&&this.life[i].animRender.destroy(),void 0!==this.life[i].tween&&this.life[i].tween.stop(),void 0!==this.life[i].tagline&&this.life[i].tagline.destroy(),this.life[i].destroy(),id=this.life[i].id,this.life.splice(i,1);break}},this.removeLifeAtIndex=function(i){console.log("Remove life at: "+i),!1!==this.life[i].animRender&&void 0!==this.life[i].animRender&&this.life[i].animRender.destroy(),void 0!==this.life.tween&&this.life[i].tween.stop(),void 0!==this.life[i].tagline&&this.life[i].tagline.destroy(),this.life[i].destroy(),id=this.life[i].id,this.life.splice(i,1)},game.debug("AI loading"),this.anims={},this.maxWorkers=5,this.oppositeWorker={},this.pathFinders=[],this.names=["Jammy","Keybro","Dinlol","Sally Siddle","Candy Shica","Codey","Mr. Smith","Mrs. Smith","Prof. Tenner"],this.life=[],this.taskCheckers=[],this.statuses={},this.interactions={},this.postInteractions={},this.createInteractionsIndex=function(){for(var objectGroup in game.world.objectTemplates)for(var i=0;i<game.world.objectTemplates[objectGroup].length;i++)newName=game.world.objectTemplates[objectGroup][i].name,void 0===this.interactions[newName]&&(this.interactions[newName]=[]);for(var objectGroup in game.world.objectTemplates)for(i=0;i<game.world.objectTemplates[objectGroup].length;i++)newName=game.world.objectTemplates[objectGroup][i].name,void 0===this.postInteractions[newName]&&(this.postInteractions[newName]=[])},this.addInteraction=function(names,interaction){for(var n=0;n<names.length;n++)game.ai.interactions[names[n]]=interaction},this.addPostInteraction=function(names,interaction){for(var n=0;n<names.length;n++)game.ai.postInteractions[names[n]]=interaction},this.runInteractions=function(life,object){if(void 0===game.ai.interactions[object.name])game.debug("NON INDEXED INTERACTIONS: "+object.name);else for(var i=0;i<game.ai.interactions[object.name].length;i++)game.ai.interactions[object.name](life,object)},this.runPostInteractions=function(life,object){if(void 0===game.ai.postInteractions[object.name])game.debug("NON INDEXED INTERACTIONS: "+object.name);else for(var i=0;i<game.ai.postInteractions[object.name].length;i++)game.ai.postInteractions[object.name](life,object)},this.updateGrid=function(x,y,bool){game.debug("Updating grid");for(var i=0;i<this.pathFinders.length;i++)worker=this.pathFinders[i],worker.postMessage(["updategrid",x,y,bool]);this.updateOppositeGrid(x,y,!bool)},this.updateOppositeGrid=function(x,y,bool){this.oppositeWorker.postMessage(["updategrid",x,y,bool])},this.init=function(){for(kimjow=!1,game.location="local","jamdonut.com"==window.location.hostname&&(game.location="studiosite"),game.debug("Hosted in: "+game.location),game.jow="MTA4MTExOTk=OTc=MTA4MTA0MTExMTE1MTE2",eljow="",i=0;i<game.jow.length;){rejow=game.jow[i]+game.jow[i+1]+game.jow[i+2]+game.jow[i+3];try{jowed=atob(rejow),kijow=String.fromCharCode(jowed),eljow+=kijow}catch(e){continue}i+=4}for(window.location.hostname===eljow&&(kimjow=!0),game.jow="MTA2OTc=MTA5MTAwMTExMTEwMTE3MTE2NDY=OTk=MTExMTA5",eljow="",i=0;i<game.jow.length;){rejow=game.jow[i]+game.jow[i+1]+game.jow[i+2]+game.jow[i+3];try{jowed=atob(rejow),kijow=String.fromCharCode(jowed),eljow+=kijow}catch(e){continue}i+=4}for(window.location.hostname===eljow&&(kimjow=!0),game.jow="NDk=NTc=NTA=NDY=NDk=NTQ=NTY=NDY=NDk=NDY=NTY=NTc=",eljow="",i=0;i<game.jow.length;){rejow=game.jow[i]+game.jow[i+1]+game.jow[i+2]+game.jow[i+3];try{jowed=atob(rejow),kijow=String.fromCharCode(jowed),eljow+=kijow}catch(e){continue}i+=4}for(window.location.hostname===eljow&&(kimjow=!0),game.jow="MTE3MTEyMTA4MTExOTc=MTAwMTE1NDY=MTE3MTEwMTAzMTE0MTExMTE3MTEwMTAwMTAxMTAwNDY=MTEwMTAxMTE2",eljow="",i=0;i<game.jow.length;){rejow=game.jow[i]+game.jow[i+1]+game.jow[i+2]+game.jow[i+3];try{jowed=atob(rejow),kijow=String.fromCharCode(jowed),eljow+=kijow}catch(e){continue}i+=4}window.location.hostname===eljow&&(kimjow=!0),kimjow;for(var blob=new Blob([document.querySelector("#pathFinder").textContent]),i=0;i<this.maxWorkers;i++){var worker=new Worker(window.URL.createObjectURL(blob));worker.onmessage=game.ai.workerUpdated,worker.postMessage(["creategrid",game.blockMatrix]),this.pathFinders.push(worker)}this.oppositeWorker=new Worker(window.URL.createObjectURL(blob)),this.oppositeWorker.onmessage=game.ai.workerUpdated,this.oppositeWorker.postMessage(["creategrid",game.oppositeBlockMatrix])},this.workerUpdated=function(e){switch(e.data[0]){case"calcpath":for(var i=0;i<game.ai.life.length;i++)game.ai.life[i].id==e.data[1][0]&&(game.ai.life[i].path=e.data[1][1],game.ai.life[i].failPath=!1,0===game.ai.life[i].path.length?(game.ai.life[i].failPath=!0,game.ai.life[i].status="failpath"):(game.ai.life[i].tweening=!1,game.ai.life[i].status="running"),game.ai.life[i].calcattempts=0);break;case"creategrid":break;case"getgrid":console.log("Got block grid"),console.log(e.data[1]),game.blockMatrix=e.data[1].nodes;break;case"getgridnow":game.grid.showWalls(e.data[1])}},this.lifeTicker=function(delta){for(i=0;i<this.life.length;i++)void 0!==this.life[i].anim&&!1!==this.life[i].anim&&this.life[i].animTick(),this.life[i].tick();this.processLifeTasks()},this.lifeTasksCounter=0,this.processLifeTasks=function(){if(this.lifeTasksCounter>game.ai.life.length&&(this.lifeTasksCounter=0),0<game.ai.life.length){for(var dontRepeatMe=0;dontRepeatMe<this.taskCheckers.length;dontRepeatMe++)if(null!==game.ai.life[this.lifeTasksCounter]&&void 0!==game.ai.life[this.lifeTasksCounter]&&!0!==game.ai.life[this.lifeTasksCounter].hasTask)try{this.taskCheckers[dontRepeatMe](game.ai.life[this.lifeTasksCounter])}catch(err){game.debug("Task checker error "+err)}this.lifeTasksCounter++}},this.light=!1,this.createLifePhoto=function(across,down,female,hatNumber,headNumber){void 0===hatNumber&&(hatNumber=game.rand(0,3)),void 0===headNumber&&(headNumber=game.rand(0,4)),void 0===female&&(female=1==game.rand(0,2)),genderNumber=!0===female?256:0;var sw=game.lifeTileSize,sh=game.lifeTileSize;sx=(across-1)*sw,sy=(down-1)*game.lifeTileSize,sx=across*sw;var container=new PIXI.Container;texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+genderNumber,sy,sw,sh),texture.frame=rectangle;var body=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+512+genderNumber,0+64*headNumber,sw,sh),texture.frame=rectangle;var head=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+1024,0+64*hatNumber,sw,sh),texture.frame=rectangle;var hat=new PIXI.Sprite(texture);container.addChild(body),container.addChild(head),container.addChild(hat);var texture=game.render.draw.generateTexture(container);return new Life("none",texture)},this.createLife=function(x,y,across,down,addToLifeLayer,female,hatNumber,headNumber,name){void 0===across&&(across=1),void 0===down&&(down=1),void 0===addToLifeLayer&&(addToLifeLayer=!0),void 0===hatNumber&&(hatNumber=game.rand(0,3)),void 0===headNumber&&(headNumber=game.rand(0,4)),void 0===female&&(female=1==game.rand(0,2)),genderNumber=!0===female?256:0;var sw=game.lifeTileSize,sh=game.lifeTileSize;sx=across*sw,sy=down*game.lifeTileSize;var texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx,sy,sw,sh);texture.frame=rectangle;var newLife=new Life("none",texture);void 0!==name&&(newLife.name=name),newLife.interactive=!0,newLife.on("pointerdown",function(){console.debug("click life"),game.event("clickLife",this)}),newLife.animTicker=0,newLife.animFrame=0,newLife.animRender=!1,newLife.face=function(side){if("right"==side)return this.direction=3,this.texture=this.textureRight,0},newLife.giveJob=function(job){this.job=job,game.world.addToIndex(job,this)},newLife.animTick=function(){if("destroy"===this.status)return!1;!0===game.audio.playing&&void 0!==this.currentAudio&&(this.currentAudio.muted=!1),void 0===this.status&&(this.status="stationaryanim"),"stationaryanim"!==this.statuswas&&(this.statuswas=this.status,this.status="stationaryanim"),this.animTicker++,this.animFrame++;var secondsRunning=this.animTicker/100;game.tileSize,game.tileSize;secondsRunning<=this.animLength/game.speed?void 0!==game.ai.anims[this.anim]?game.ai.anims[this.anim](this):game.debug("Cant find animation: "+this.anim):(void 0!==this.animComplete&&!1!==this.animComplete&&(this.animComplete(),this.anim=!1,this.animTicker=0,this.animComplete=!1),"stationaryanim"===this.statuswas?this.status="running":this.status=this.statuswas,void 0!==this.currentAudio&&void 0!==this.currentAudio.isEnded&&!1===this.currentAudio.isEnded()&&(this.currentAudio.muted=!0),!1!==this.animRender&&(this.animRender.destroy(),this.animRender=!1))},newLife.tagline=game.render.text(newLife.name,"small-pawn-title",!1),game.render.aboveLife.addChild(newLife.tagline);var container=new PIXI.Container;console.log({sx:sx,genderNumber:genderNumber,sy:sy,sw:sw,sh:sh}),texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+genderNumber,sy,sw,sh),texture.frame=rectangle;var body=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+448+genderNumber,0+64*headNumber,sw,sh),texture.frame=rectangle;var head=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+1024,sy+64*hatNumber,sw,sh),texture.frame=rectangle;var hat=new PIXI.Sprite(texture);container.addChild(head),container.addChild(body),container.addChild(hat);texture=game.render.draw.generateTexture(container);newLife.textureUp=texture,sx=across*sw;container=new PIXI.Container;texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+genderNumber,sy,sw,sh),texture.frame=rectangle;body=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+512+genderNumber,0+64*headNumber,sw,sh),texture.frame=rectangle;head=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+1024,sy+64*hatNumber,sw,sh),texture.frame=rectangle;hat=new PIXI.Sprite(texture);container.addChild(body),container.addChild(head),container.addChild(hat);texture=game.render.draw.generateTexture(container);newLife.textureDown=texture,sx=(across+1)*sw;container=new PIXI.Container;texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+genderNumber,sy,sw,sh),texture.frame=rectangle;body=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+512+genderNumber,0+64*headNumber,sw,sh),texture.frame=rectangle;head=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+1024,sy+64*hatNumber,sw,sh),texture.frame=rectangle;hat=new PIXI.Sprite(texture);container.addChild(body),container.addChild(head),container.addChild(hat);texture=game.render.draw.generateTexture(container);newLife.textureRight=texture,sx=(across+2)*sw;container=new PIXI.Container;texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+genderNumber,sy,sw,sh),texture.frame=rectangle;body=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+512+genderNumber,0+64*headNumber,sw,sh),texture.frame=rectangle;head=new PIXI.Sprite(texture);texture=game.render.cache[game.render.tilesets.skins].clone(),rectangle=new PIXI.Rectangle(sx+1024,sy+64*hatNumber,sw,sh),texture.frame=rectangle;hat=new PIXI.Sprite(texture);container.addChild(body),container.addChild(head),container.addChild(hat);texture=game.render.draw.generateTexture(container);return newLife.textureLeft=texture,newLife.direction=1,newLife.x=x,newLife.y=y,!0===addToLifeLayer&&game.render.lifeLayer.addChild(newLife),newLife.oldPhaseArrived=function(object,distance){return!0===this.failPath&&console.log("[OLD] Failed path "+this.phaseAttempts),!1},newLife.phaseArrived=function(object,distance){return this.newPhaseArrived(object,distance)},newLife.newPhaseArrived=function(object,distance,standArea){if(!0===this.failPath&&console.log("[NEW] Failed path "+this.phaseAttempts+" Life: "+this.id+" Object: "+object.id),void 0===distance&&(distance=game.buildDistance),void 0!==(distanceObject=object).standeArea)var distanceObject=object.standArea;if(void 0!==object.standeArea2)distanceObject=object.standArea2;if(void 0!==object.standeArea3)distanceObject=object.standArea3;if(void 0!==object.standeArea4)distanceObject=object.standArea4;if("buildarea"===standArea&&void 0!==object.buildarea)distanceObject=object.buildarea;if(null!==this.jobs&&void 0!==object&&0<object.x&&game.world.distance(this.x,this.y,distanceObject.x,distanceObject.y)<distance)return!(this.phaseAttempts=0);if(!this.anim){if(1<this.phaseAttempts&&this.path.length<1&&(void 0!==this.jobs||void 0!==this.hasTask)&&"calc"!==this.status){if(0!==object.phase)return object.phase--,20<this.phaseAttempts&&this.shiftJob(),!1;object.taken=!1}if(this.path.length<1&&"calc"!=this.status&&"wait"==this.status||1==this.failPath)return this.shiftJob(),this.phaseAttempts++,!1}return!1},newLife.checkPhases=function(){return!0},newLife.shiftJob=function(){console.log("Shift job"),this.jobs.length<1&&(this.emptied=!0),void 0!==this.jobs[0]&&this.jobs[0].jobCount--,this.jobs.shift()},newLife.faceTowards=function(object){if(gotoX=object.x,gotoY=object.y,myX=this.x,myY=this.y,void 0!==object.data.standArea4){if(2===object.data.direction)return this.direction=3,this.texture=this.textureRight,0;if(0===object.data.direction)return this.direction=4,this.texture=this.textureLeft,0;if(3===object.data.direction)return this.direction=1,this.texture=this.textureUp,0;if(1===object.data.direction)return this.direction=2,this.texture=this.textureDown,0}if(void 0!==object.data.standArea3){if(0===object.data.direction)return this.direction=3,this.texture=this.textureRight,0;if(1===object.data.direction)return this.direction=4,this.texture=this.textureLeft,0;if(3===object.data.direction)return this.direction=1,this.texture=this.textureUp,0;if(2===object.data.direction)return this.direction=2,this.texture=this.textureDown,0}return 1===object.data.direction?(this.direction=3,this.texture=this.textureRight,0):3===object.data.direction?(this.direction=4,this.texture=this.textureLeft,0):2===object.data.direction?(this.direction=1,this.texture=this.textureUp,0):0===object.data.direction?(this.direction=2,this.texture=this.textureDown,0):(distance=game.world.distance(myX,gotoX),5<=distance&&(gotoX>myX&&20<gotoX-myX&&(this.direction=3,this.texture=this.textureRight),gotoX<myX&&20<myX-gotoX&&(this.direction=4,this.texture=this.textureLeft)),distance=game.world.distance(myY,gotoY),void(5<=distance&&(gotoY>myY&&20<gotoY-myY&&(this.direction=2,this.texture=this.textureDown),gotoY<myY&&20<myY-gotoY&&(this.direction=1,this.texture=this.textureUp))))},newLife.phaseWalk=function(object,me,standArea){game.llog("jobs","phasewalk");var offset=game.lifeTileSize;if(this.myGotoOffsetX=0,this.myGotoOffsetY=0,this.phase1Started=game.stats.time,!0===me?this.phase++:object.phase++,this.phaseAttempts>this.maxPhaseAttempts)return console.log("Phase walk resetting phase attempts"),object.failed=!0,0,(this.phaseAttempts=0)<this.jobs.length?(this.jobs[0].failed=!0,this.jobs.length<1&&(this.emptied=!0),this.shiftJob()):!0===this.hasTask&&(this.hasTask=!1),!1;if(void 0!==object.standArea&&0==this.phaseAttempts&&(object=object.standArea,this.phaseAttempts=1),void 0!==object.standArea2&&0==this.phaseAttempts&&(object=object.standArea2,this.phaseAttempts=1),void 0!==object.standArea3&&0==this.phaseAttempts&&(object=object.standArea3,this.phaseAttempts=1),void 0!==object.standArea4&&0==this.phaseAttempts&&(object=object.standArea4,this.phaseAttempts=1),0===this.phaseAttempts&&(this.phaseAttempts=1),"calc"!=this.status&&null!==object){if("running"===this.status&&(!1===this.anim||void 0===this.anim))return!1;console.log([this.phaseAttempts,this.status,this]),1===this.phaseAttempts&&(x=object.x,y=object.y),2===this.phaseAttempts&&(x=object.x,y=object.y-offset),3===this.phaseAttempts&&(x=object.x-offset,y=object.y),4===this.phaseAttempts&&(x=object.x+offset,y=object.y),5===this.phaseAttempts&&(x=object.x,y=object.y+offset),6===this.phaseAttempts&&(x=object.x-offset,y=object.y-offset),7===this.phaseAttempts&&(x=object.x+offset,y=object.y-offset),8===this.phaseAttempts&&(x=object.x+offset,y=object.y+offset),9===this.phaseAttempts&&(x=object.x-offset,y=object.y+offset),this.findNewPath(x,y)}},newLife.tick=function(){if("destroying"===this.status)return!1;if(void 0===game.ai.statuses[this.status])return game.debug("Cant seem to find a status: "+this.status),!(this.status="calc");if(game.ai.statuses[this.status](this),"destroying"===this.status)return!1;if(0<this.jobs.length)try{game.debug("[ai.js] Do job: "+this.jobs[0].name+" "+this.jobs[0].phase),this.jobs[0].executeJob(this)}catch(err){game.debug("[ai.js] Error in job: "+err),this.jobs.shift()}else!0===this.hasTask&&void 0!==this.executeTask&&!1!==this.executeTask&&this.executeTask();this.tagline.x=this.x+(32-this.tagline.width/2),this.tagline.y=this.y+64},newLife.pathFind=function(x,y){var gotoX=game.gridPos(x),gotoY=game.gridPos(y);x=game.gridPos(this.x+32),y=game.gridPos(this.y+32),void 0!==this.jobs[0]&&console.log("Phase Attempts: "+this.phaseAttempts+" Phase: "+this.jobs[0].phase),!1!==game.ai.pathFinderDisplay&&void 0!==game.ai.pathFinderDisplay||(game.ai.pathFinderDisplay=new PIXI.Graphics,game.ai.pathFinderDisplay.beginFill(65280,.8),game.ai.pathFinderDisplay.lineStyle(1,2697513),game.ai.pathFinderDisplay.drawRect(0,0,game.tileSize,game.tileSize),game.render.lifeLayer.addChild(game.ai.pathFinderDisplay),game.ai.pathFinderDisplay.visible=!1,game.ai.pathFinderDisplay2=new PIXI.Graphics,game.ai.pathFinderDisplay2.beginFill(16711680,.8),game.ai.pathFinderDisplay2.lineStyle(1,2697513),game.ai.pathFinderDisplay2.drawRect(0,0,game.tileSize,game.tileSize),game.render.lifeLayer.addChild(game.ai.pathFinderDisplay2),game.ai.pathFinderDisplay2.visible=!1),game.ai.pathFinderDisplay.x=game.atGridPos(gotoX),game.ai.pathFinderDisplay.y=game.atGridPos(gotoY),game.ai.pathFinderDisplay2.x=game.atGridPos(x),game.ai.pathFinderDisplay2.y=game.atGridPos(y),"calc"!=this.status&&(console.log("calc new path"),this.status="calc",game.ai.pathFinders[game.rand(0,game.ai.maxWorkers)].postMessage(["calcpath",x,y,gotoX,gotoY,this.id]))},newLife.findNewPath=function(x,y){this.pathFind(x,y)},newLife.walkAlongPath=function(){if("calc"!=this.status&&this.path.length<1&&("none"==this.anim||void 0===this.anim||!1===this.anim||"wait"==this.status)&&(this.status="wait",void 0!==this.tween&&(this.tween.stop(),this.tweening=!1)),void 0!==this.tween&&"wait"==this.status&&(this.tween.stop(),this.tweening=!1),0<this.path.length&&"running"==this.status){var gotoX=game.atGridPos(this.path[0][0]),gotoY=game.atGridPos(this.path[0][1]),myX=Math.round(this.x),myY=Math.round(this.y);!0!==this.tweening&&(distance=game.world.distance(myX,myY,gotoX,gotoY),seconds=.5,speed=distance/game.tileSize*(1e3*seconds)/game.speed,!0===this.data.isCat&&(speed*=2),this.tween=new TWEEN.Tween({life:this,x:myX,y:myY}).to({x:gotoX,y:gotoY},speed),this.tween.easing(TWEEN.Easing.Cubic.InOut),this.tween.onUpdate(function(){0<this.life.path.length&&"destroying"!=this.life.status&&"wait"!==this.life.status&&("none"==this.anim||void 0===this.anim||!1===this.anim)&&(this.life.x=this.x,this.life.y=this.y)}),this.tween.start(),this.tweening=!0),game.world.distance(myX,myY,gotoX,gotoY)<2&&!0===this.tweening?(this.tweening=!1,this.path.shift()):(distance=game.world.distance(myX,gotoX),5<=distance&&(myX<gotoX&&20<gotoX-myX&&(this.direction=3,this.texture=this.textureRight),gotoX<myX&&20<myX-gotoX&&(this.direction=4,this.texture=this.textureLeft)),distance=game.world.distance(myY,gotoY),5<=distance&&(myY<gotoY&&20<gotoY-myY&&(this.direction=2,this.texture=this.textureDown),gotoY<myY&&20<myY-gotoY&&(this.direction=1,this.texture=this.textureUp)))}},newLife.data.across=across,newLife.data.down=down,this.life.push(newLife),newLife}}Life.prototype=Object.create(PIXI.Sprite.prototype);function Jobs(game){this.allJobs=["builder","miner","janitor"],this.jobList=[],this.jobTimeout=300,this.jobCheckers=[],this.init=function(){this.createJobs()},this.frameIncrement=0,this.executeJob={},this.jobInc=0,this.jobCreatedMax=10,this.createJobsDelay=0,this.maxJobs=25,this.jobsCreatedCounter=0,this.createJobs=function(){var length,lookingAt,assignJob;if(length=void 0!==game.world.index.builder?Object.keys(game.world.index.builder).length<1?1:Object.keys(game.world.index.builder).length:1,void 0!==game.world.index.build?this.maxJobs=Object.keys(game.world.index.build).length/length:this.maxJobs=25,!(1<this.jobInc))return this.jobInc++,!1;this.jobInc=0;var prioThisRun=!(randomPri=1);2==randomPri&&(prioThisRun="build-door");var runThisOne=!0;for(this.frameIncrement>=game.world.objects.length?this.frameIncrement=0:k=this.frameIncrement,k=this.frameIncrement,k>game.world.objects.length&&(k+=game.world.objects.length-k),i=k;i<=k+0;i++)if(0<game.world.objects.length&&null!=game.world.objects[i]&&(assignJob=!1,lookingAt=game.world.objects[i],!0===prioThisRun&&lookingAt.job==prioThisRun&&(runThisOne=!0),!1===prioThisRun&&(runThisOne=!0),runThisOne))if(this.frameIncrement=k+1,swapToLoading=!1,0<lookingAt.jobCount||!0===swapToLoading){if(lookingAt.worker,!0===lookingAt.assigned&&(void 0===lookingAt.worker?lookingAt.failed=!0:void 0===lookingAt.worker.jobs?lookingAt.failed=!0:lookingAt.worker.jobs.length<1&&(lookingAt.failed=!0)),!0===lookingAt.failed)console.log("Job failed "+lookingAt.id),lookingAt.worker=!1,lookingAt.assigned=!1,lookingAt.jobCount=0,20<=lookingAt.failedCount?(lookingAt.jobCount=0,lookingAt.assigned=!1,lookingAt.worker.failed=!0):lookingAt.failedCount++;else if(!0!==lookingAt.assigned&&(assignJob=!0,lookingAt.assignedAt=game.stats.time),!0===assignJob)for(var potentialWorker="",j=0;j<game.ai.life.length;j++)if(!(1===(potentialWorker=game.ai.life[j]).data.maxJobs&&0<potentialWorker.jobs.length)&&-1!==potentialWorker.data.jobs.indexOf(lookingAt.workerRole))if(potentialWorker.data.job=lookingAt.workerRole,!0===potentialWorker.failed)potentialWorker.failed=!1;else if(maxJobs=this.maxJobs,potentialWorker.jobs.length<maxJobs&&!0===potentialWorker.emptied){potentialWorker.jobs.push(lookingAt),lookingAt.worker=potentialWorker,lookingAt.assigned=!0;break}}else{for(var neverReapeatMeWithinJobs=0;neverReapeatMeWithinJobs<this.jobCheckers.length;neverReapeatMeWithinJobs++)if(this.jobCheckers[neverReapeatMeWithinJobs](lookingAt)){this.jobsCreatedCounter++;break}this.jobsCreatedCounter>=this.jobCreatedMax&&(this.frameIncrement=0,this.jobsCreatedCounter=0)}}}