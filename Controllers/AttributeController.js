class AttributeController{
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
        this.increaseHandler = this.increase.bind(this);
        this.decreaseHandler = this.decrease.bind(this);

        return this;
    }
    enable() {
        this.view.increaseEvent.attach(this.increaseHandler);
        this.view.decreaseEvent.attach(this.decreaseHandler);

        return this;
    }
    increase(){
        this.model.increase();
    }
    decrease(){
        this.model.decrease();
    }
}