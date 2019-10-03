class Game{
    constructor(settings){
        this.player = new Player(settings.setting_player_name);
        console.log(settings);

        // Item's with no recipe's
        this.coalOre				=	new Item("coalOre",     settings.setting_coalore_visualname, 	settings.setting_coalore_imgLocation,	settings.setting_coalore_work);
        this.copperOre 				= 	new Item("copperOre", 	settings.setting_copperore_visualname, 	settings.setting_copperore_imgLocation, settings.setting_copperore_work);
        this.ironOre 				= 	new Item("ironOre", 	settings.setting_ironore_visualname, 	settings.setting_ironore_imgLocation, 	settings.setting_ironore_work);

        // Item's that need materials to be crafted.
        this.copperIngot			=	new Item("copperIngot", settings.setting_copperingot_visualname,    settings.setting_copperingot_imgLocation, 	settings.setting_copperingot_work);
        this.copperIngot.getRecipe().addItems(this.coalOre,     settings.setting_copperingot_coalore_costs);
        this.copperIngot.getRecipe().addItems(this.copperOre,   settings.setting_copperingot_copperore_costs);

        this.ironIngot 				= 	new Item("ironIgot", 	settings.setting_ironingot_visualname,      settings.setting_ironingot_imgLocation 	, 	settings.setting_ironingot_work);
        this.ironIngot.getRecipe().addItems(this.coalOre,       settings.setting_ironingot_coalore_costs);
        this.ironIngot.getRecipe().addItems(this.ironOre,       settings.setting_ironingot_ironore_costs);


        // TODO: get this as a new World() in the future
        // Item generators
        this.coalGenerator			=	new ItemGenerator("coalOre", 	settings.setting_Generator_coalOre_visualname, 		this.coalOre, 	[this.coalOre], 	this.player);
        this.copperGenerator 		= 	new ItemGenerator("copperore", 	settings.setting_Generator_copperOre_visualname,    this.copperOre, [this.copperOre], 	this.player);
        this.ironGenerator 			= 	new ItemGenerator("ironore", 	settings.setting_Generator_ironOre_visualname, 	    this.ironOre, 	[this.ironOre], 	this.player);

        // Item generators that need payment for work.
        this.copperIngotGenerator	= 	new ItemFabricator("copperIngot", 	settings.setting_Generator_copperIngot_visualname, 	this.copperIngot, 	[this.copperIngot], this.player);
        this.ironIngotGenerator 	= 	new ItemFabricator("ironIngot", 	settings.setting_Generator_ironIngot_visualname, 	this.ironIngot, 	[this.ironIngot], 	this.player);

        this.start();
    }
    getCoalGenerator(){
        return this.coalGenerator;
    }
    getCopperGenerator(){
        return this.copperGenerator;
    }
    getIronGenerator(){
        return this.ironGenerator;
    }
    getCopperIngotGenerator(){
        return this.copperIngotGenerator;
    }
    getIronIngotGenerator(){
        return this.ironIngotGenerator;
    }
    getPlayer(){
        return this.player;
    }
    setPlayer(value){
        this.player = value;
    }
    init(){
        this.setupControllers();
    }
    start(){
        
    }
    update(){
        this.player.update();

        this.coalGenerator.update();
        this.copperGenerator.update();
        this.ironGenerator.update();
        
        this.copperIngotGenerator.update();
        this.ironIngotGenerator.update();
    }
}