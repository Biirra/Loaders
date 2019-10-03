class Encounter_Idle extends Encounter{
    constructor(name, visualname, descriptions, req){
        super(name, visualname, descriptions, req);
    }
    continue(){
      	if(this.progressBar.getRounds() <= 0){
        	this.progressBar.setCurrentValue(this.progressBar.getMinValue());
			this.progressBar.setRounds(5); // TODO: make it riliable on player skills.
      	}
    }
} 