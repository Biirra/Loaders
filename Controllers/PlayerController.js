class PlayerController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.init();
    }
    init(){
        this.setupControllers();    // TODO: find out where the proper spot is to put this.
    }
    setupControllers(){
        this.strength 		= new AttributeController(this.model.strength,  this.view.$strength);
		this.stamina		= new AttributeController(this.model.stamina,   this.view.$stamina);
		this.intelect 		= new AttributeController(this.model.intelect,  this.view.$intelect);
		this.wisdom			= new AttributeController(this.model.wisdom,    this.view.$wisdom);
		this.agility		= new AttributeController(this.model.agility,   this.view.$agility);
		this.charisma 		= new AttributeController(this.model.charisma,  this.view.$charisma);
		this.luck 			= new AttributeController(this.model.luck,      this.view.$luck);

    }
}