class GeneratorView{
    constructor(model){
        this.model = model;
        
        this.takeItemsEvent = new Event(this);
        this.upgradeSpeedEvent = new Event(this);
        this.upgradeCapacityEvent = new Event(this);
        this.togglePauseEvent = new Event(this);

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

        this.$generatorName = document.createElement("div");

        this.$generatorInfo = document.createElement("div");
        this.$currentItemIcon = document.createElement("div");
        this.$currentItemCount = document.createElement("div");
        this.$currentItemProgress = new ProgressBarView(this.model.getProgressBar());

        this.$generatorInput = document.createElement("div");
        this.$btnTakeItems = document.createElement("input");
        this.$btnUpgradeSpeed = document.createElement("input");
        this.$btnUpgradeCapacity = document.createElement("input");
        this.$btnTogglePause = document.createElement("input");

		return this;
	}
	prepareChildren(){
        this.$currentItemIcon.setAttribute("style", `background-image: url(${this.model.getCurrentItem().iconSrc}); width:16px; height:16px; background-repeat: no-repeat; background-size: contain;`);
		
        this.$btnTakeItems.setAttribute("type", `button`);
        this.$btnTakeItems.setAttribute("value", `Take`);

        this.$btnUpgradeSpeed.setAttribute("type", `button`);
        this.$btnUpgradeSpeed.setAttribute("value", `Upgrade Lvl.${this.model.getSpeed().getCurrentLevel()}`);

        this.$btnUpgradeCapacity.setAttribute("type", `button`);
        this.$btnUpgradeCapacity.setAttribute("value", `Expand Lvl.${this.model.getStorage().getCurrentLevel()}`);

        this.$btnTogglePause.setAttribute("type", `button`);
        this.$btnTogglePause.setAttribute("value", `Pause`);

        this.$generatorName.innerHTML = `${this.model.visualname}`;
        this.$currentItemCount.innerHTML = `${this.model.getCurrentItemAmount()} / ${this.model.getMaxItems()}`;

        this.$generatorInfo.appendChild(this.$currentItemIcon);
        this.$generatorInfo.appendChild(this.$currentItemCount);
        this.$generatorInfo.appendChild(this.$currentItemProgress.getVisualHTML());

        this.$generatorInput.appendChild(this.$btnTakeItems);
        this.$generatorInput.appendChild(this.$btnUpgradeSpeed);
        this.$generatorInput.appendChild(this.$btnUpgradeCapacity);
        this.$generatorInput.appendChild(this.$btnTogglePause);

        this.$container.appendChild(this.$generatorName);
        this.$container.appendChild(this.$generatorInfo);
        this.$container.appendChild(this.$generatorInput);
        
		return this;
	}
    setupHandlers(){
		// add eventlisteners
		this.takeItemsBtnHandler        = this.takeItems.bind(this);
		this.upgradeSpeedBtnHandler     = this.upgradeSpeed.bind(this);
		this.upgradeCapacityBtnHandler  = this.upgradeCapacity.bind(this);
		this.togglePauseBtnHandler      = this.togglePause.bind(this);
		return this;
    }
    enable(){
		// activate the event listeners
		this.$btnTakeItems.addEventListener("click", this.takeItemsBtnHandler);
		this.$btnUpgradeSpeed.addEventListener("click", this.upgradeSpeedBtnHandler);
		this.$btnUpgradeCapacity.addEventListener("click", this.upgradeCapacityBtnHandler);
		this.$btnTogglePause.addEventListener("click", this.togglePauseBtnHandler);
		return this;
    }
	getVisualHTML(){
		return this.$container;
	}
    update(){
        this.$btnUpgradeSpeed.setAttribute("value", `Upgrade Lvl.${this.model.getSpeed().getCurrentLevel()}`);
        this.$btnUpgradeCapacity.setAttribute("value", `Expand Lvl.${this.model.getStorage().getCurrentLevel()}`);
        if(!this.model.getProgressBar().paused)
            this.$btnTogglePause.setAttribute("value", `Pause`);
        else
            this.$btnTogglePause.setAttribute("value", `Start`);

        this.$currentItemCount.innerHTML = `${this.model.getCurrentItemAmount()} / ${this.model.getMaxItems()}`;
        
        this.$currentItemProgress.update();
    }
    takeItems(){
        this.takeItemsEvent.notify();
    }
    upgradeSpeed(){
        this.upgradeSpeedEvent.notify();
    }
    upgradeCapacity(){
        this.upgradeCapacityEvent.notify();
    }
    togglePause(){
        this.togglePauseEvent.notify();
    }
    
}