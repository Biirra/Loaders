class Settings{
    constructor(){
        //----------------------------
        // player settings
        //----------------------------
        this.setting_player_name    = "Ricardo Fiddlesticks";

        //----------------------------
        // Item settings
        //----------------------------
        // coal ore settings
        this.setting_coalore_visualname             = "Coal";
        this.setting_coalore_imgLocation            = "./Views/img/coal.png";
        this.setting_coalore_work                   = 20;

        // copper ore settings
        this.setting_copperore_visualname           = "Copper ore";
        this.setting_copperore_imgLocation          = "./Views/img/CopperOre.png";
        this.setting_copperore_work                 = 40;

        // iron ore settings
        this.setting_ironore_visualname             = "Iron ore";
        this.setting_ironore_imgLocation            = "./Views/img/IronOre.png";
        this.setting_ironore_work                   = 40;

        // copper ingot settings
        this.setting_copperingot_visualname         = "Copper ingot";
        this.setting_copperingot_imgLocation        = "./Views/img/CopperIngot.png";
        this.setting_copperingot_work               = 80;
        this.setting_copperingot_coalore_costs      = 5;
        this.setting_copperingot_copperore_costs    = 10;

        // iron ingot settings
        this.setting_ironingot_visualname           = "Iron ingot";
        this.setting_ironingot_imgLocation          = "./Views/img/IronIngot.png";
        this.setting_ironingot_work                 = 80;
        this.setting_ironingot_coalore_costs        = 5;
        this.setting_ironingot_ironore_costs        = 10;

        //----------------------------
        // Generator settings
        //----------------------------
        this.setting_Generator_coalOre_visualname       = "Coal generator";
        this.setting_Generator_copperOre_visualname     = "Copper ore generator";
        this.setting_Generator_ironOre_visualname       = "Iron ore generator";
        this.setting_Generator_copperIngot_visualname   = "Copper ingot generator";
        this.setting_Generator_ironIngot_visualname     = "Iron ingot generator";
    }
}