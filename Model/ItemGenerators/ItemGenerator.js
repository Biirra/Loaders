class ItemGenerator{
	constructor(name, visualname, currentItem, validItems, owner){
		this.DEFAULT_EXPAND_UP_VALUE 	= 50;
		this.DEFAULT_SPEED_UP_VALUE 	= 1.15;
		
		// generator
		this.name = name;
		this.visualname = visualname;
		
		// the player who owns this generator.
		this.owner = owner;
		
		// generator speed level
		this.speed = new Level(0, 50);
		// generator storage level
		this.storage = new Level(0, 100);
		
		// item it produces
		this.maxItems = 100;
		this.minItems = 0;
		
		this.currentItem = currentItem;					// contains a model of the item that is being generated.
		this.validItems = validItems;					// can generate the following items.
		this.inventory = new Inventory(this.name);		// way to keep the items it generates
		
		this.progressBar = new ProgressBar(this.name);
		this.progressBar.setMaxValue(this.currentItem.work);
	}
	getMaxItems(){
		return this.maxItems;
	}
	getCurrentItem(){
		return this.currentItem;
	}
	getProgressBar(){
		return this.progressBar;
	}
	getSpeed(){
		return this.speed;
	}
	setSpeed(value){
		this.progressBar.setSpeed(value);
	}
	getStorage(){
		return this.storage;
	}
	getCurrentItemAmount(){
		return this.inventory.getAmountItem(this.currentItem);
	}
	isFull(){
		return this.getCurrentItemAmount() >= this.maxItems;
	}
	update(){		
		if(this.isFull())
			return;
		
		this.progressBar.routine();
		let completed = this.progressBar.completed;
		
		if(completed <= 0)
			return;
		for(let i = 0; i < completed; i++){
			this.generateItem();
			this.progressBar.completed--;
		}		
	}
	generateItem(){ 
		if(!this.isFull())
			this.inventory.addItem(this.currentItem, 1);
	}
	upgrade(){					// TODO: Fiddle with value and maths till satisfied with output. 
		if(this.speed.isMaxLevel())
			return;
		
		this.speed.increase();
		
		let defaultSeedUpModifier = this.DEFAULT_SPEED_UP_VALUE || 0;
		this.setSpeed(defaultSeedUpModifier * this.speed.getCurrentLevel());
	}
	expand(){					// TODO: Fiddle with value and maths till satisfied with output. 
		if(this.storage.isMaxLevel())
			return;
		
		this.storage.increase();
		
		let defaultExpandUpModifier = this.DEFAULT_EXPAND_UP_VALUE || 0;
		let expansion = parseInt(defaultExpandUpModifier * this.storage.getCurrentLevel());
		this.maxItems += expansion;
	}
	togglePause(){
		if(this.progressBar.paused)
			this.progressBar.start();
		else
			this.progressBar.pause();
	}
	giveItemsToOwner(){			// Tell owner to claim items since he pressed the button.
		// prepage items to give
		let result = new Inventory("tmp");
		result.addItems(this.currentItem, this.getCurrentItemAmount());
		
		//	remove items to give from self.
		this.inventory.removeInventoryFromSelf(result);	
		// give items to owner
		this.owner.claimItems(result);
	}
}