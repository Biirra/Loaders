class EncounterController{
    constructor(model, view){
        this.model = model;
        this.view = view;
        //console.log(this.view);
        this.init();
    }
    init(){
        this.setupControllers();    // TODO: find out where the proper spot is to put this.
        this.setupHandlers();
        this.enable();
    }
    setupControllers(){
        // TODO: change to a type. name is already used.
        console.log(this.model);
        switch(this.model.name){
            case "start":
                break;
            case "reward":
                break;
            default:
                this.continueHandler = this.continue.bind(this);
        }
    }
    setupHandlers(){

        
        return this;
    }
    enable(){
        this.view.continueEvent.attach(this.continueHandler);
        return this;
    }
    continue(){
        this.model.continue();
    }
}
