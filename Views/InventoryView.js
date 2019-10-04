class InventoryView{
    constructor(model){
        this.model = model;

        this.itemViews = [];

        this.init();
    }
    init() {
        this.createChildren();
        this.prepareChildren();
    }
    createChildren(){
        // create or empty
        if(this.$container == undefined)
            this.$container = document.createElement("div");
        else
            this.$container.innerHTML = "";

        return this;
    }
    prepareChildren(){
        return this;
    }
    update(){
        let items = this.model.getItems();
        let itemKeys = Object.keys(items);
		for(let i = 0; i < itemKeys.length; i++){
            if(this.itemViews[i] === undefined){
                this.itemViews[i] = new ItemView(items[itemKeys[i]]); // create view for new item
                this.$container.appendChild(this.itemViews[i].getVisualHTML()); // add the html to the field.
            }
            this.itemViews[i].update(); 
        }
        return;
    }
    
    getVisualHTML(){
        return this.$container;
    }
}