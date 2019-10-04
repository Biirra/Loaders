class StatusView{
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
		this.$strength 	= new AttributeView(this.model.strength);
		this.$stamina	= new AttributeView(this.model.stamina);
		this.$intelect 	= new AttributeView(this.model.intelect);
		this.$wisdom	= new AttributeView(this.model.wisdom);	
		this.$agility	= new AttributeView(this.model.agility);
		this.$charisma 	= new AttributeView(this.model.charisma);
		this.$luck 		= new AttributeView(this.model.luck);
		return this;
	}
	prepareChildren(){

		this.$container.appendChild(this.$strength.getVisualHTML());
		this.$container.appendChild(this.$stamina.getVisualHTML());
		this.$container.appendChild(this.$intelect.getVisualHTML());
		this.$container.appendChild(this.$wisdom.getVisualHTML());
		this.$container.appendChild(this.$agility.getVisualHTML());
		this.$container.appendChild(this.$charisma.getVisualHTML());
		this.$container.appendChild(this.$luck.getVisualHTML());
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
		this.$strength.update();
		this.$stamina.update();
		this.$intelect.update();
		this.$wisdom.update();
		this.$agility.update();
		this.$charisma.update();
		this.$luck.update();
	}
}