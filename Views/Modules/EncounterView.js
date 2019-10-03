class EncounterView{
    constructor(model){
        this.model = model;
		this.continueEvent = new Event(this);

		this.init();
	}
	init() {
		this.createChildren();
		this.prepareChildren();
        this.setupHandlers();
        this.enable();
    }
    createChildren(){
		this.$container 		    = document.createElement("div");	
		
        this.$encounterName         = document.createElement("div");
		this.$encounterDescription  = document.createElement("div");
		
		this.$progressbar           = new ProgressBarView(this.model.getProgressBar());
		
		this.$playerInput			= document.createElement("div");	
        this.$btnContinue			= document.createElement("input");

		return this;
	}
	prepareChildren(){

		this.$encounterName.innerHTML = this.model.visualname;
		this.$encounterDescription.innerHTML = this.model.currentDesc;
		
		this.$btnContinue.setAttribute("type", "button");
		this.$btnContinue.setAttribute("value", "Continue")

		this.$playerInput.appendChild(this.$btnContinue);

		this.$container.appendChild(this.$encounterName);
		this.$container.appendChild(this.$encounterDescription);
		this.$container.appendChild(this.$progressbar.getVisualHTML());
		this.$container.appendChild(this.$playerInput);

		return this;
	}
    setupHandlers(){
		// add eventlisteners
		this.continueBtnHandler        = this.continue.bind(this);
		return this;
    }
    enable(){
		// activate the event listeners
		this.$btnContinue.addEventListener("click", this.continueBtnHandler);
		return this;
    }
	getVisualHTML(){
		return this.$container;
	}
	continue(){
		this.continueEvent.notify();
	}
    update(){
		this.$progressbar.update();
		this.$encounterDescription.innerHTML = this.model.currentDesc;
    }
}