class GameView{
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
        this.$container = document.createElement("div");
        
        this.$playerInfo = new PlayerInfoView(this.model.getPlayer());
        this.$playerStatus = new PlayerStatusView(this.model.getPlayer());

        this.$topTabsContainer = document.createElement("div");
        this.$bottomTabsContainer = document.createElement("div");
       
        this.$status        = new StatusView(this.model.getPlayer());
        this.$statusTab     = new TabView(0, "player-tab", "Status",        this.$status.getVisualHTML(), true);
        this.$inventory     = new InventoryView(this.model.getPlayer().getInventory());
        this.$inventoryTab  = new TabView(2, "player-tab", "Inventory",     this.$inventory.getVisualHTML());
        this.$generators    = new GeneratorsView(this.model);
        this.$generatorTab  = new TabView(1, "player-tab", "Generators",    this.$generators.getVisualHTML()); 

        return this;
    }
    setupHandlers(){
        // add eventlisteners
    }
    enable(){
        // activate the event listeners
    }
    update(){
        this.$status.update();
        this.$generators.update();
        this.$inventory.update();
    }
    prepareChildren(){
        // top tabs
        this.$topTabsContainer.setAttribute("id", "tabs-top");
        this.$topTabsContainer.appendChild(this.$statusTab.getVisualHTML());
        this.$topTabsContainer.appendChild(this.$inventoryTab.getVisualHTML());

        // bottom tabs
        this.$bottomTabsContainer.setAttribute("id", "tabs-bottom");
        this.$bottomTabsContainer.appendChild(this.$generatorTab.getVisualHTML());

        //
        this.$container.setAttribute("class", "container");
        this.$container.appendChild(this.$playerInfo.getVisualHTML());
        this.$container.appendChild(this.$playerStatus.getVisualHTML());
        this.$container.appendChild(this.$topTabsContainer);
        this.$container.appendChild(this.$bottomTabsContainer);

        return this;
    }
    getVisualHTML(){
        return this.$container;
    }
    
}