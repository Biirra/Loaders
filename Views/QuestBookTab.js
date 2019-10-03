class QuestBookTab{
    // TODO: Make sure the questbook updates all the quests. 
    constructor(model){
		this.model = model;
		this.$activeQuest = [];
		this.init();
	}
	init() {
		this.createChildren();
		this.prepareChildren();
        this.setupHandlers();
        this.enable();
    }
    createChildren(){
		// TODO: Simplify. stuff is a array now. 
		this.$container = document.createElement("div");
		let activequests = Object.keys(this.model.getActiveQuests());
		for(let i = 0; i < activequests.length; i++){
			let currentQuest = this.model.getActiveQuest(activequests[i]);
			this.$activeQuest[i] = new QuestView(currentQuest);
		}
		
		return this;
	}
	prepareChildren(){
		// TODO: Simplify. stuff is a array now.
		let activequests = Object.keys(this.model.getActiveQuests());
		for(let i = 0; i < activequests.length; i++){
			this.$container.appendChild(this.$activeQuest[i].getVisualHTML());
		}
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
		for(let i = 0; i < this.$activeQuest.length; i++){
			this.$activeQuest[i].update();
		}
    }
}