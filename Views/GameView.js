class GameView{
    constructor(model){
        this.model = model;
        this.tabs = {};
        this.init();
    }
    init() {
        this.createChildren();
        this.prepareChildren();
        this.setupHandlers();
        this.enable();
    }
    createChildren(){
        this.$container = document.createElement("div");
        
        this.$playerInfo = new PlayerInfoView(this.model.getPlayer());
        this.$playerStatus = new PlayerStatusView(this.model.getPlayer());

        this.$playerTabs = document.createElement("div");
        this.$statusTab = new StatusTab(this.model.getPlayer());
        this.$generatorTab = new GeneratorsTab(this.model); 
        this.$inventoryTab = new InventoryTab(this.model.getPlayer());
        this.$questTab = new QuestBookTab(this.model.getPlayer().getQuestBook());

        return this;
    }
    setupHandlers(){
        // add eventlisteners
    }
    enable(){
        // activate the event listeners
    }
    update(){
        this.$generatorTab.update();
        this.$inventoryTab.update();
        this.$questTab.update();
        this.$statusTab.update();
    }
    prepareChildren(){
        this.$playerTabs.setAttribute("id", "tabs");
        this.$container.setAttribute("class", "container");
        this.$container.appendChild(this.$playerInfo.getVisualHTML());
        this.$container.appendChild(this.$playerStatus.getVisualHTML());
        this.$container.appendChild(this.$playerTabs);
        // tabs
        this.$playerTabs.appendChild(this.wrapElementInTab(0, "player-tab", "Status", this.$statusTab.getVisualHTML(), true));
        this.$playerTabs.appendChild(this.wrapElementInTab(1, "player-tab", "Generators", this.$generatorTab.getVisualHTML()));
        this.$playerTabs.appendChild(this.wrapElementInTab(2, "player-tab", "Inventory", this.$inventoryTab.getVisualHTML()));
        this.$playerTabs.appendChild(this.wrapElementInTab(3, "player-tab", "Quests", this.$questTab.getVisualHTML()));

        return this;
    }
    getVisualHTML(){
        return this.$container;
    }
    /*
	id: 		so label can be hooked. Unique
	name: 		tab group. 
	value:		Visible name of tab
	el:			The element that needs its tab.
	isChecked: 	(optional) true/false. option is unchecked(false) on default. Means tab is open on default.
    */
    wrapElementInTab(id, name, value, el, isChecked){
        
        let checked  = isChecked || false;
		let result = document.createElement("div");
		result.setAttribute("class", "tab");

		let optnTab = document.createElement("input");
		optnTab.setAttribute("type", "radio");
		optnTab.setAttribute("name", `tab-${name}`);
		optnTab.setAttribute("id", `tab-${id}`);
		optnTab.checked = checked;

		let lblTab = document.createElement("label");
		lblTab.setAttribute("for", `tab-${id}`);
		lblTab.innerHTML = value;

        let content = document.createElement("div");
        content.setAttribute("class", "container");
        content.appendChild(el);

        let contentHolder = document.createElement("div");
        contentHolder.setAttribute("class", "tab__content");
        contentHolder.appendChild(content);

		result.appendChild(optnTab);
		result.appendChild(lblTab);
		result.appendChild(contentHolder);

		return result;
    }
}