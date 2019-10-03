class InventoryTab{
    constructor(model){
        this.model = model;
        this.tabs = {};
        this.init();
    }
    init() {
        this.createChildren();
        this.prepareChildren();
        this.setupHandlers();
        this.enable();
    }
    createChildren(){
        // create or empty
        if(this.$container == undefined)
            this.$container = document.createElement("div");
        else
            this.$container.innerHTML = "";

        this.$itemNames = [];
        this.$itemIcons = [];
        this.$itemContainer = [];
        // add items that already exist
        let items = this.model.getInventory().getItems();
        let diffrentItems = Object.keys(items);
        for(let i = 0; i < diffrentItems.length; i++){
            this.$itemContainer[i] = document.createElement("div");
            this.$itemNames[i] = document.createElement("label");
            this.$itemIcons[i] = document.createElement("div");
        }
        return this;
    }
    setupHandlers(){
        // add eventlisteners
    }
    enable(){
        // activate the event listeners
    }
    update(){
        
        let items = this.model.getInventory().getItems();
        let diffrentItems = Object.keys(items);
        
		// for every itemkey in this inventory
		for(let i = 0; i < diffrentItems.length; i++){

            // if item does not yet exist on screen. 
            let elementExists = this.$itemContainer[i] != undefined;
			if(!elementExists){               
                this.createChildren();
                this.prepareChildren();
                return;
            }
            
            // update element.
            let currentItem = items[diffrentItems[i]].showmodel;
            this.$itemNames[i].innerHTML = `${currentItem.visualName}: x${this.model.getInventory().getAmountItem(currentItem)}`;

		}

    }
    prepareChildren(){  // set static stuff. runs once.

        let items = this.model.getInventory().getItems();
        let diffrentItems = Object.keys(items);
        for(let i = 0; i < diffrentItems.length; i++){

            this.$itemContainer[i].setAttribute("style", "display:flex;")
            
            let currentItem = items[diffrentItems[i]].showmodel;
            this.$itemIcons[i].setAttribute("style", `background-image: url(${currentItem.iconSrc}); width:16px; height:16px; background-repeat: no-repeat; background-size: contain;`);
            this.$itemNames[i].innerHTML = `${currentItem.visualName}: x${this.model.getInventory().getAmountItem(currentItem)}`;

            this.$itemContainer[i].appendChild(this.$itemIcons[i]);
            this.$itemContainer[i].appendChild(this.$itemNames[i]);

            this.$container.appendChild(this.$itemContainer[i]);
            
        }
        
        return this;
    }
    getVisualHTML(){
        return this.$container;
    }
}