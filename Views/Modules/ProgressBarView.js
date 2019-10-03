class ProgressBarView{
    constructor(model){
        this.model = model;
        
		this.foreGroundColor = new Color(255, 0, 0);			// default color foreground.
		this.backGroundColor = new Color(0, 0, 0);				// default color background.
		this.init();
	}
	init() {
		this.createChildren();
		this.prepareChildren();
        this.setupHandlers();
        this.enable();
        this.update();
	}
    createChildren(){
        this.$container = document.createElement("div");
        this.$background = document.createElement("div");
        this.$foreground = document.createElement("div");
        
        return this;
	}
	prepareChildren(){
        this.$background.setAttribute("class", "progress");
        this.$background.setAttribute("style", `background-color:${this.backGroundColor.getColorString()}`);

        this.$foreground.setAttribute("class", "progress-bar");
        this.$foreground.setAttribute("style", `background-color:${this.foreGroundColor.getColorString()}`);
        this.$foreground.setAttribute("role", "progressbar");

        this.$container.appendChild(this.$background);
        this.$background.appendChild(this.$foreground);
		return this;
	}
	getVisualHTML(){
		return this.$container;
	}
    setupHandlers(){
		// add eventlisteners
		return this;
    }
    enable(){
		// activate the event listeners
		return this;
    }
    update(){
		let currentPercentage = this.model.getCurrentPercentage().toFixed(2);
		this.$foreground.style.width = currentPercentage + "%";
	}
}