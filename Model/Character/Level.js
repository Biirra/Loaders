class Level{
	constructor(min, max){
		// TODO: Implement some form of experience.
		this.min = min;
		this.max = max;
		this.current = min;
	}
	setMinLevel(min){
		this.min = min;
	}
	getMinLevel(){
		return this.min;
	}
	setMaxLevel(max){
		this.max = max;
	}
	getMaxLevel(){
		return this.max;
	}
	setCurrentLevel(lvl){
		this.current = lvl;
	}
	getCurrentLevel(){
		return this.current;
	}
	increase(){
		if(!this.isMaxLevel())
			this.current++;
	}
	decrease(){
		if(!this.isLowestLevel())
			this.current--;
	}
	isMaxLevel(){
		return this.getCurrentLevel() >= this.getMaxLevel();
	}
	isLowestLevel(){
		return this.getCurrentLevel() <= this.getMinLevel();
	}
	
}