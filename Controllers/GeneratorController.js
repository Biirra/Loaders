class GeneratorController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    
        this.init();
    }
    init(){
        this.setupHandlers();
        this.enable();
    }
    setupHandlers() {
        this.takeItemsHandler = this.takeItems.bind(this);
        this.upgradeSpeedHandler = this.upgradeSpeed.bind(this);
        this.upgradeCapacityHandler = this.upgradeCapacity.bind(this);
        this.togglePauseHandler = this.togglePause.bind(this);
        return this;
    }
    enable() {
        this.view.takeItemsEvent.attach(this.takeItemsHandler);
        this.view.upgradeSpeedEvent.attach(this.upgradeSpeedHandler);
        this.view.upgradeCapacityEvent.attach(this.upgradeCapacityHandler);
        this.view.togglePauseEvent.attach(this.togglePauseHandler);
        return this;
    }
    takeItems(){
        this.model.giveItemsToOwner();
    }
    upgradeSpeed(){
        this.model.upgrade();
    }
    upgradeCapacity(){
        this.model.expand();
    }
    togglePause(){
        this.model.togglePause();
    }
}