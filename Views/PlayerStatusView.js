class PlayerStatusView{
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

        this.$healthBar = new ProgressBarView(this.model.getHealth());
        this.$ManaBar   = new ProgressBarView(this.model.getMana());

		return this;
	}
	prepareChildren(){
        this.$container.appendChild(this.$healthBar.getVisualHTML());
        this.$container.appendChild(this.$ManaBar.getVisualHTML());

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

	}
}