class Encounter{
	constructor(name, visualname, descriptions, req){
		// generator
		this.name = name;
		this.visualname = visualname;
		this.descriptions = descriptions;
        this.currentDesc = descriptions[0];         
        
		this.progressBar = new ProgressBar(this.name);
		this.requirements	= req;	// amount of times the progressbar needs completion to complete the encounter.

		this.paused = false;

		this.init();
	}
	init(){					// initialize
		this.setSpeed(5);
	}
	setSpeed(value){		// set the speed for this encounter.
		this.progressBar.setSpeed(value);
	}
    getProgressBar(){		// returns the progressbar.
        return this.progressBar;
	}
	setCurrentDesc(value){	// set a new description for the encounter.
		this.currentDesc = value;
	}
	getRandomDesc(){		// return one of the descriptions loaded. Chooses random.
		let random = Math.random()*this.descriptions.length;
		random = Math.floor(random);
		return this.descriptions[random];
	}
	update(){ 				// updates the encounter. Should always be called to see visible change.
		if(this.paused)
			return;

		if(this.isCompleted())
			return;
		if(this.getProgressBar().hasLooped()){
			this.currentDesc = this.getRandomDesc();
		}
		this.progressBar.advance();
	}
	isCompleted(){			// returns if the currentEncounter has been completed or not. True/False
		return this.progressBar.getCompleted() >= this.requirements;
	}
	start(){				// start the encounter if it is paused.
		this.progressBar.start();
		this.paused = false;
	}
	pause(){				// pause the encounter
		this.progressBar.pause();
		this.paused = true;
	}
	restart(){				// restart the encounter.
		this.progressBar.restart();
	}
}