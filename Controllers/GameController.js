class GameController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.UPDATE_SPEED = 120;

        this.init();
    }
    init(){
        this.setupControllers();    // TODO: find out where the proper spot is to put this.
        this.setupHandlers();
        this.enable();
        this.start();
    }
    setupControllers(){
        this.attributeController                = new PlayerController(this.model.getPlayer(),                  this.view.$status);

        this.coalGeneratorController            = new GeneratorController(this.model.getCoalGenerator(),        this.view.$generators.$coalGenerator);
        this.copperGeneratorController          = new GeneratorController(this.model.getCopperGenerator(),      this.view.$generators.$copperGenerator);
        this.ironGeneratorController            = new GeneratorController(this.model.getIronGenerator(),        this.view.$generators.$ironGenerator);
        this.copperIngotGeneratorController     = new GeneratorController(this.model.getCopperIngotGenerator(), this.view.$generators.$copperIngotGenerator);
        this.ironIngotGeneratorController       = new GeneratorController(this.model.getIronIngotGenerator(),   this.view.$generators.$ironIngotGenerator);
    }
    setupHandlers(){

        return this;
    }
    enable(){

        return this;
    }
    start(){
        this.loop();
    }
    loop(){
        setInterval(this.update.bind(this),  this.UPDATE_SPEED);
    }
    update(){
        this.model.update();
        this.view.update();
    }
}
