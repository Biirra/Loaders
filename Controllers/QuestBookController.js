class QuestBookController{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.enounterController = [[]];
        this.init();
    }
    init(){
        this.setupControllers(); 
        this.setupHandlers();
        this.enable();
        this.start();
    }
    setupControllers(){
        let quests = this.model.getActiveQuests();
        let questKeys = Object.keys(quests);

        for (let i = 0; i < questKeys.length; i++){
            let currentQuest = quests[questKeys[i]];
            let encounters = currentQuest.getEncounters();
            
            for(let j = 0; j < encounters.length; j++){                
                this.enounterController[i][j] = new EncounterController(encounters[j], this.view.$activeQuest[i].$encounter[j]);
            }
        }
        return this;
    }
    setupHandlers(){
        
        return this;
    }
    enable(){
        
        return this;
    }
    activeQuestHandlers(){
        
    }
    start(){
        
    }
}
