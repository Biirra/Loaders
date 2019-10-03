class Encounter_Reward extends Encounter{
    constructor(name, visualname, descriptions, req, lootTable){
        super(name, visualname, descriptions, req);
        this.lootTable = lootTable;
        this.reward = new Inventory(this.name);		// the reward the encounter can give.
    }
    generateReward(){
		return Inventory.generateInventory(this.lootTable);
	}
	addReward(inv){
		this.reward.addInventoryToSelf(inv);
	}
	getReward(){
		return this.reward;
  }
  claimReward(){
        
  }
} 