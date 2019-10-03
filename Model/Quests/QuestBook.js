class QuestBook{
    constructor(){
        this.activeQuests = [];
        this.availableQuests = [];
        this.completedQuests = [];

        this.init();
    }
    init(){
        this.activeQuests[0] = new Quest("test");
        this.quest_startEncounter = new Encounter_Start(    "start",        "Starting quest.",  ["Checking the map.", "Finding a horse"], 5);
        this.quest_encounter = new Encounter_Idle(          "encounter_0",  "Executing quest",  ["slaying enemy's", "destroying boss"], 2);
        this.quest_rewardEncounter = new Encounter_Reward(  "reward",       "Getting rewards.", ["getting coins.", "getting items."], 5);
        this.activeQuests[0].addEncounter(this.quest_startEncounter);
        this.activeQuests[0].addEncounter(this.quest_encounter);
        this.activeQuests[0].addEncounter(this.quest_rewardEncounter);
        this.activeQuests[0].init();

    }
    update(){
        for(let i = 0; i < this.activeQuests.length; i++){
            this.activeQuests[i].update();
        }
    }
    getActiveQuests(){
        return this.activeQuests;
    }
    getCompletedQuests(){
        return this.completedQuests;
    }
    getActiveQuest(name){
        if(this.activeQuests[name] == undefined)
            return false;
        return this.activeQuests[name];
    }
    addActiveQuest(name, quest){
        this.activeQuests[name] = quest;
    }
}