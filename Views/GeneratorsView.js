class GeneratorsView{
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

        // Item generators
        this.$coalGenerator			=	new GeneratorView(this.model.coalGenerator);
        this.$copperGenerator 		= 	new GeneratorView(this.model.copperGenerator);
        this.$ironGenerator 		= 	new GeneratorView(this.model.ironGenerator);

        // Item generators that need payment for work.
        this.$copperIngotGenerator	= 	new GeneratorView(this.model.copperIngotGenerator);
        this.$ironIngotGenerator 	= 	new GeneratorView(this.model.ironIngotGenerator);

		return this;
	}
	prepareChildren(){
        this.$container.appendChild(this.$coalGenerator.getVisualHTML());
        this.$container.appendChild(this.$copperGenerator.getVisualHTML());
        this.$container.appendChild(this.$ironGenerator.getVisualHTML());
        this.$container.appendChild(this.$copperIngotGenerator.getVisualHTML());
        this.$container.appendChild(this.$ironIngotGenerator.getVisualHTML());
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
        this.$coalGenerator.update();
        this.$copperGenerator.update();
        this.$ironGenerator.update();
        
        this.$copperIngotGenerator.update();
        this.$ironIngotGenerator.update();
	}
}