class AttributeView{
    constructor(model){
		this.model = model;
		this.decreaseEvent = new Event(this);
		this.increaseEvent = new Event(this);

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
		this.$nameContainer = document.createElement("div");	// holds the name of the Attribute
		this.$inputContainer = document.createElement("div");	// holds the visuals for the buttons and stuff.
		this.$increaseBtn = document.createElement("input");
		this.$decreaseBtn = document.createElement("input");
		this.$valueContainer = document.createElement("div");	// contains the current value of the attribute.

		return this;
	}
	prepareChildren(){
		this.$decreaseBtn.setAttribute("type", `button`);
		this.$decreaseBtn.setAttribute("value", `<`);

		this.$increaseBtn.setAttribute("type", `button`);
		this.$increaseBtn.setAttribute("value", `>`);

		this.$nameContainer.innerHTML = `${this.model.visualName}`;
		this.$valueContainer.innerHTML = `${this.model.getCurrentLevel()}`;

		this.$container.appendChild(this.$nameContainer);
		this.$container.appendChild(this.$inputContainer);

		this.$container.setAttribute("class", "attribute-row");

		this.$inputContainer.appendChild(this.$decreaseBtn);
		this.$inputContainer.appendChild(this.$valueContainer);
		this.$inputContainer.appendChild(this.$increaseBtn);

		this.$inputContainer.setAttribute("class", "attr-nr-input");

		return this;
	}
	getVisualHTML(){
		return this.$container;
	}
    setupHandlers(){
		// add eventlisteners
		this.increaseBtnHandler = this.increaseBtn.bind(this);
		this.decreaseBtnHandler = this.decreaseBtn.bind(this);
		return this;
    }
    enable(){
		// activate the event listeners
		this.$increaseBtn.addEventListener("click", this.increaseBtnHandler);
		this.$decreaseBtn.addEventListener("click", this.decreaseBtnHandler);
		return this;
    }
    update(){
		this.$valueContainer.innerHTML = `${this.model.getCurrentLevel()}`;
	}
	increaseBtn() {
        this.increaseEvent.notify();
	}
	decreaseBtn(){
		this.decreaseEvent.notify();
	}
}