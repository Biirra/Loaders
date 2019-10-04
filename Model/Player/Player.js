class Player{
	constructor(name){
		//-----------------
		// Player
		//-----------------
		this.name = name;
		this.level 		= new Level(0, 30);															// global indicator of players current skills.
		// TODO: 
		// - create functionality so code below actually has impact.		
		this.health 	= new ProgressBar(`${this.name}-health`);									// The players health;
		this.health.setCurrentValue(this.health.maxValue);											// Player is healthy on creation.
		
		this.mana 		= new ProgressBar(`${this.name}-mana`);
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

		this.speed			= new Attribute("attrSpeed", "Speed", 0, 999);
		this.speed.setCurrentLevel(this.getSpeed());												// average of strength, agility and luck
		this.healthRegen 	= new Attribute("attrHealthRegen", "Health regeneration", 0, 999);
		this.healthRegen.setCurrentLevel(this.getHealthRegen());									// average of stamina, avg(strength, agility), current level.
		this.manaRegen		= new Attribute("attrManaRegen", "Mana regeneration", 0, 999);
		this.manaRegen.setCurrentLevel(this.getManaRegen());										// average of intelect, wisdom, current level.
		
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
	getHealthRegen(){
		let averageStrAgi = 0;
		averageStrAgi += this.strength.getCurrentLevel();
		averageStrAgi += this.agility.getCurrentLevel();
		averageStrAgi /= 2;

		let result = 0;

		result += this.stamina.getCurrentLevel();
		result += averageStrAgi;
		result += this.level.getCurrentLevel();
		result /= 3;
		return result;
	}
	getManaRegen(){
		let result = 0;
		result += this.intelect.getCurrentLevel();
		result += this.wisdom.getCurrentLevel();
		result += this.level.getCurrentLevel();
		result /= 3;
		return result;
	}
	getSpeed(){
		let result = 0;
		result += this.strength.getCurrentLevel();
		result += this.agility.getCurrentLevel();
		result += this.stamina.getCurrentLevel();	// not yet sure bout this one.
		result /= 3;
		return Math.ceil(result);
	}
}