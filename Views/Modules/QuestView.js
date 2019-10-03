class QuestView{
    constructor(model){
		this.model = model;
		//console.log(this.model);

		this.$encounter = [];
		this.init();
	}
	init() {
		this.createChildren();
		this.prepareChildren();
        this.setupHandlers();
        this.enable();
    }
    createChildren(){
		this.$container 		= document.createElement("div");
		this.$container.setAttribute("class", "questView");
		
		this.$questTitle		= document.createElement("div");
		this.$encounterHolder 	= document.createElement("div");

		let encounters = this.model.getEncounters();
		for(let i = 0; i < encounters.length; i++)
			this.$encounter[i] = new EncounterView(encounters[i]);

		return this;
	}
	prepareChildren(){
		
		let encounters = this.model.getEncounters();
		for(let i = 0; i < encounters.length; i++){
			if(encounters[i] === this.model.currentEncounter){
				this.$encounterHolder.appendChild(this.$encounter[i].getVisualHTML());
			}
		}

		this.$questTitle.innerHTML = `${this.model.name}`;

		this.$container.appendChild(this.$questTitle);
		this.$container.appendChild(this.$encounterHolder);
		return this;
	}
    setupHandlers(){
		// add eventlisteners
		
		return this;
    }
    enable(){
		// activate the event listeners
		return this;
    }
	getVisualHTML(){
		return this.$container;
	}
    update(){
		
		let encounters = this.model.getEncounters();
		for(let i = 0; i < encounters.length; i++){
			if(encounters[i] === this.model.currentEncounter){
				if(encounters[i].isCompleted()){
					let nextEncounter = this.$encounter[i+1];
					if(nextEncounter == undefined)
						return;
					this.$encounterHolder.innerHTML = "";
					this.$encounterHolder.appendChild(nextEncounter.getVisualHTML());
				}
			}
		}
		// update all the encounters that are present.
		for(let i = 0; i < this.$encounter.length; i++){
			this.$encounter[i].update();
		}
    }
}