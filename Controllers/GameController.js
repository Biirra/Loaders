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
        this.attributeController                = new PlayerController(this.model.getPlayer(),                  this.view.$statusTab);

        this.coalGeneratorController            = new GeneratorController(this.model.getCoalGenerator(),        this.view.$generatorTab.$coalGenerator);
        this.copperGeneratorController          = new GeneratorController(this.model.getCopperGenerator(),      this.view.$generatorTab.$copperGenerator);
        this.ironGeneratorController            = new GeneratorController(this.model.getIronGenerator(),        this.view.$generatorTab.$ironGenerator);
        this.copperIngotGeneratorController     = new GeneratorController(this.model.getCopperIngotGenerator(), this.view.$generatorTab.$copperIngotGenerator);
        this.ironIngotGeneratorController       = new GeneratorController(this.model.getIronIngotGenerator(),   this.view.$generatorTab.$ironIngotGenerator);
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
