class Inventory{
	constructor(name){
		this.name = name;
		this.items = {};		// save data as {nameitem: {amount:0, showmodel:item}}
	}
	getItems(){									// Returns all items currently stored. expected output = {nameitem:{amount: int, showmodel:item}}
		return this.items;
	}
	setItems(items){							// Overide the current stored items. expected input = {nameitem:{amount: int, showmodel:item}}
		this.items = items;
	}
	addItem(item){								// adds a single item to the inventory.	Expect input = new Item();
		if(this.items[item.name] == undefined)
			this.items[item.name] = {"amount":0 , "showmodel": item}
		this.items[item.name].amount++; 	
	}
	addItems(item, amount){						// add amount of items to the inventory.
		for(let i = 0; i < amount; i++)
			this.addItem(item);
	}
	addInventoryToSelf(items){					// Add items from given Inventory(); to self. expected input {nameitem:{amount: int, showmodel:item}}
		let itemKeys = Object.keys(items.getItems());
		for(let i = 0; i < itemKeys.length; i++){
			let currentItem = items.getItems()[itemKeys[i]];
			this.addItems(currentItem.showmodel, currentItem.amount);
		}
	}
	removeItem(item){							// remove one item from inventory.
		if(this.items[item.name] == undefined)
			return;
		
		if(this.hasItem(item))
			this.items[item.name].amount--;
	}
	removeItems(item, amount){					// remove amount of items.
		if(amount < 0){	// negative number sets count to zero
			this.clearItem(item);
			return;
		}
		
		for (let i = 0; i < amount; i++)
			this.removeItem(item);
	}
	removeInventoryFromSelf(items){				// expected input 	{nameitem:{amount: int, showmodel:item}}
		let itemKeys = Object.keys(items.getItems());
		for(let i = 0; i < itemKeys.length; i++){
			let currentItem = items.getItems()[itemKeys[i]];
			this.removeItems(currentItem.showmodel, currentItem.amount);
		}
	}
	multiplyItem(item, amount){					// multyplies a specific item by amount.
		if(this.items[item.name] == undefined)
			return;
		this.items[item.name].amount *= amount;
	}
	multyplyInventory(amount){					// multyplies all items in inventory by amount.
		let itemKeys = Object.keys(this.items);
		for (let i = 0; i < itemKeys.length; i++){
			let currentItem = this.items[itemKeys[i]];
			this.multiplyItem(currentItem, amount);
		}
	}
	getAmountItem(item){						// get the amount of items in self. returns zero if item does not exist in inventory
		if(this.items[item.name] != undefined)
			return this.items[item.name].amount;
		return 0;
	}
	clearItem(item){							// remove all of kind item. Item will still be known in inventory.
		if(this.items[item.name] != undefined)
			this.items[item.name].amount = 0;
	}
	hasItem(item){								// check if inventory contains atleast one of given item.
		if(this.items[item.name] == undefined)
			return false;
		if(this.items[item.name].amount <= 0)
			return false;
		return true;
	}
	hasItems(item, amount){						// check if inventory contains atleast the given amount of items in inventory. 
		if(!this.hasItem(item))
			return false;
		
		let remainer = this.items[item.name].amount - amount;
		if(remainer < 0)
			return false;
		
		return true;
		
	}
	hasInventoryInSelf(items){					// checks if the inventory contains given items. expected input {"name":{"amount": int, "showmodel":[object]}}
		let itemKeys = Object.keys(items.getItems());
		
		for(let i =0; i < itemKeys.length; i++){
			let currentItem = items.getItems()[itemKeys[i]];
			if(!this.hasItems(currentItem.showmodel, currentItem.amount))
				return false;
		}
		return true;
	}
	isEqual(data){								// expected input 	{"name":{"amount": int, "showmodel":[object]}}
		let dataKeys = Object.keys(data);
		let localDataKeys = Object.keys(this.holder);
		
		if(localDataKeys.length !== dataKeys.length)
			return false;
		
		// check all the data with own data.
		let tmp = {};
		for(let i = 0; i < localDataKeys.length; i++){
			let hasEqualData = false;
			for(let j = 0; j < dataKeys.length; j++)
				if(localDataKeys[i] === dataKeys[j])
					if(localDataKeys[i].amount === dataKeys[j].amount)
						hasEqualData = true;
					
			if(hasEqualData)
				tmp[localDataKeys[i]] = true;
			else
				tmp[localDataKeys[i]] = false;
		}
		
		
		let tmpKeys = Object.keys(tmp);
		// check if the right items are given. In case there is data given that has the same size but diffrent items. Diffrent items should be filtered out in tmpKeys so the length should differ.
		if(tmpKeys.length !== localDataKeys.length)
			return false;
		
		// check results and return final answer. 
		for(let i = 0; i < tmpKeys.length; i++)
			if(!tmp[tmpKeys[i]])
				return false;
			
		return true;
	}
	static generateInventory(name, lootTable){	// returns an inventory with random amount of items based on loottable.
		let result = new Inventory(name);
		console.log("generate reward.");
		return result;
	}
}