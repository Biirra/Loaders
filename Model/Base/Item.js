class Item{				
	constructor(name, visualName, iconSrc, work){
		this.name = name;
		this.visualName = visualName;
		this.work = work;	// TODO: can't just put is as max value for progressbar. What would happen if minvalue > 0;
		this.buyValue = 0;
		this.sellValue = 0;
		this.iconSrc = iconSrc;	
		this.recipe = new Inventory();
	}
	getRecipe(){
		return this.recipe;
	}
}