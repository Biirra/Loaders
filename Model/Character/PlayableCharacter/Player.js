class Player{
	constructor(name){
		//-----------------
		// Player
		//-----------------
		this.name = name;
		this.level 		= new Level(0, 30);															// global indicator of players current skills.
		// TODO: 
		// - create functionality so code below actually has impact.		
		this.health 	= new ProgressBar_Health(`${this.name}-health`);									// The players health;
		this.health.setCurrentValue(this.health.maxValue);											// Player is healthy on creation.
		
		this.mana 		= new ProgressBar_Mana(`${this.name}-mana`);
		this.mana.setCurrentValue(this.mana.maxValue);

		//-------------------
		// Inventory's
		//-------------------
		this.inventory	= new Inventory("resources");
		
		//-------------------
		// Attributes
		//-------------------
		this.availableAttributePoints = 0;																						// to be distributed among attributes
		this.strength 		= new Attribute("attrStrength","Strength", 0, 999);					// impacts things that require physical effort.
		this.stamina		= new Attribute("attrStamina", "Stamina", 0, 999);					// impacts things that require endurance.
		this.intelect 		= new Attribute("attrIntelect", "Intelect", 0, 999);					// impacts things that require memorization.
		this.wisdom			= new Attribute("attrWisdom", "Wisdom", 0, 999);						// impacts things that require procecing information.
		this.agility		= new Attribute("attrAgility", "Agility", 0, 999);					// impacts things that require flexibility.
		this.charisma 		= new Attribute("attrCharisma", "Charisma", 0, 999);					// impacts things that require communication.
		this.luck 			= new Attribute("attrLuck", "Luck", 0, 999);							// impacts things that require random chance.

		
	}
	update(){

	}
	claimItems(items){		
		if(items != undefined)
			this.inventory.addInventoryToSelf(items);
	}
	getInventory(){	
		return this.inventory;
	}
	payBill(bill){				// Pays the bill only if he has the items. expected input = new Inventory()
		let inventory = this.getInventory();
		let payed = false;
		if(inventory.hasInventoryInSelf(bill)){
			inventory.removeInventoryFromSelf(bill);
			payed = true;
		}
		return payed;
	}
	getQuestBook(){
		return this.questBook;
	}
	getHealth(){
		return this.health;
	}
	getMana(){
		return this.mana;
	}
	getStrength(){
		return this.strength;
	}
	getStamina(){
		return this.stamina;
	}
	getIntelect(){
		return this.intelect;
	}
	getWisdom(){
		return this.wisdom;
	}
	getAgility(){
		return this.agility;
	}
	getCharisma(){
		return this.charisma;
	}
	getLuck(){
		return this.luck;
	}
}