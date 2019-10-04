class ItemView{
    constructor(model){
        this.model = model;
		this.init();
	}
	init() {
		this.createChildren();
		this.prepareChildren();
        this.update();
	}
    createChildren(){
        this.$container = document.createElement("div");
        this.$name = document.createElement("label");
        this.$iconContainer = document.createElement("div");
        return this;
	}
	prepareChildren(){
        this.$container.setAttribute("style", "display:flex;");
        this.$iconContainer.setAttribute("style", `background-image: url(${this.model.showmodel.iconSrc}); width:16px; height:16px; background-repeat: no-repeat; background-size: contain;`);    

        this.$container.appendChild(this.$iconContainer);
        this.$container.appendChild(this.$name);
		return this;
	}
	getVisualHTML(){
		return this.$container;
	}
    update(){
        this.$name.innerHTML = `${this.model.showmodel.visualName}: x${this.model.amount}`;
	}
}