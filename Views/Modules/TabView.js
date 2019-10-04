class TabView{
    constructor(id, name, value, el, isChecked){
        this.id = id;
        this.name = name;
        this.value = value;
        this.element = el;
        this.isChecked = isChecked || false;

        this.init();
    }
    init() {
		this.createChildren();
		this.prepareChildren();
    }
    createChildren(){
        this.$container = document.createElement("div");
        this.$btnOpenTab = document.createElement("input");    // button to activate the tab so it becomes visible.
        this.$lblTab = document.createElement("label");
        this.$content = document.createElement("div");
        this.$contentContainer = document.createElement("div");
		return this;
	}
	prepareChildren(){
		this.$btnOpenTab.setAttribute("type", "radio");
        this.$btnOpenTab.setAttribute("name", `tab-${this.name}`);
        this.$btnOpenTab.setAttribute("id", `tab-${this.id}`);
        this.$btnOpenTab.checked = this.isChecked;

        this.$lblTab.setAttribute("for", `tab-${this.id}`);
        this.$lblTab.innerHTML = this.value;

        this.$content.setAttribute("class", "container");
        this.$content.appendChild(this.getElement());

        this.$contentContainer.setAttribute("class", "tab__content");
        this.$contentContainer.appendChild(this.$content);

        this.$container.setAttribute("class", "tab");
        this.$container.appendChild(this.$btnOpenTab);
        this.$container.appendChild(this.$lblTab);
        this.$container.appendChild(this.$contentContainer);

        return this;
	}
    getVisualHTML(){
        return this.$container;
    }
    getID(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getValue(){
        return this.value;
    }
    getElement(){
        return this.element;
    }  
}