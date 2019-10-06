class ItemFabricator extends ItemGenerator{
	constructor(name, visualname, currentItem, validItems, owner){
		super(name, visualname, currentItem, validItems, owner);
	}
	update(){	// TODO: need to redo this. 
		// Seems inefficient and heavy in use. 
		// it might do a hasInventoryInSelf() to many since this also happens in player
		// Also it requires materials and those need to be asked not taken.

		// if fabricator is full dont do anything.
		if(this.isFull())
			return;
		
		let completed = this.progressBar.completed;

		let inventory = this.owner.getInventory();
		if(!inventory.hasInventoryInSelf(this.currentItem.getRecipe()))
			return;

		this.progressBar.update();
		
		if(completed < 0)
			completed = 0;
		
		for(let i = 0; i < completed; i++){
			// owner pays bill;
			let payed = this.owner.payBill(this.currentItem.getRecipe());
			if(payed){
				this.generateItem();
				this.progressBar.completed--;
			}else{
				this.progressBar.pause();
			}
		}	
	}
}