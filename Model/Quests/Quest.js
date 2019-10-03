class Quest{
	constructor(name){
		this.name = name;
		this.level = new Level(0,999);

		this.encounters = [];
		this.startEncounter = null;		//(Optional) shows information of quest. max work = 5;
		
		this.currentEncounter = null;

		this.owner = null;
		
		this.completed = false;		// quest has been completed

		this.init();
	}
	init(){
		this.createEncounters();
		this.setupEncounters();
	}
	update(){
		// check if this quest is complete;
		if(this.completed)
			return;
		//console.log(this.currentEncounter.isCompleted());
		if(this.isLastEncounter() && this.currentEncounter.isCompleted()){
			this.completed = true; // set quest to complete
			return;
		}
		if(this.currentEncounter.isCompleted())
			this.currentEncounter = this.nextEncounter();

		this.currentEncounter.update();
	}
	createEncounters(){			// meant to be overidden.
		
		return this;
	}
	setupEncounters(){	// meant to be overidden.
		this.startEncounter = this.encounters[0];		
		this.currentEncounter = this.startEncounter;
		return this;
	}
	setOwner(player){
		this.owner = player;
	}
	getOwner(){
		return this.owner;
	}
	setCompleted(value){
		this.completed = value;
	}
	getCompleted(){
		return this.completed;
	}
	setEncounters(value){
		this.encounters = value;
	}
	addEncounter(encounter){
		this.encounters.push(encounter);
	}
	getEncounter(name){
		for(let i = 0; i < this.encounters.length; i++){
			if(this.encounters[i] == typeof Encounter){
				if(this.encounters[i].name === name)
					return this.encounters[i];
			}
		}
		return false;
	}
	getEncounters(){
		return this.encounters;
	}
	nextEncounter(){
		for(let i = 0; i < this.encounters.length; i++)
			if(this.encounters[i].name === this.currentEncounter.name && this.encounters[i+1] != undefined)
				return this.encounters[i+1];
		return null;
	}
	isLastEncounter(){
		return this.nextEncounter() === null;
	}
}