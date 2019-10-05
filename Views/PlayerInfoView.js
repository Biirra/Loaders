class PlayerInfoView{
	constructor(model){
		this.model = model;

		this.init();
	}
	init() {
		this.createChildren();
		this.prepareChildren();
		this.setupHandlers();
		this.enable();
	}
	createChildren(){
		this.$container = document.createElement("div");
		this.$playerName = document.createElement("div");
		this.$level = document.createElement("div");
		return this;
	}
	prepareChildren(){
		this.$container.appendChild(this.$playerName);
		this.$container.appendChild(this.$level);

		this.$playerName.innerHTML = this.model.name;
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
		this.$level.innerHTML = `lvl: ${this.model.level.getCurrentLevel()}`;
	}
}