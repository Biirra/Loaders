class Attribute extends Level{
	constructor(name, visualName, minLvl, maxLvl, locked){
		super(minLvl, maxLvl);
		this.name = name;
		this.visualName = visualName;
		this.locked = locked // a boolean to keep track if it may change. 
	}
	update(){

	}
	increase(){
		if(!this.isMaxLevel() && !this.locked)
			this.current++;
	}
	decrease(){
		if(!this.isLowestLevel() && !this.locked)
			this.current--;
	}
}