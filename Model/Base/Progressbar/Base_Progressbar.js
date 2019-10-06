class Base_ProgressBar{
	constructor(name){
		this.name = name;
		this.minValue = 0;										// min value
		this.maxValue = 100;									// max value
		this.currentValue = 0;									// current value
		this.currentPercentage = this.getCurrentPercentage();	// current percentage
		this.speed = 0; 										// how fast the progress bar fills up.
		this.paused = false;
		this.completed = 0;										// amount of times it has reached it maxValue.
		this.foreGroundColor = new Color(255, 255, 255);			// default color foreground.
		this.backGroundColor = new Color(0, 0, 0);				// default color background.
	}
	getCurrentPercentage(){		// returns the percentage of current progress.
		return (this.currentValue / this.maxValue ) * 100;
	}
	setMaxValue(value){			// set the maxvalue of the progressbar. 
		// cause im not sure what will happen otherwise.
		if(value < this.minValue)
			this.maxValue = this.minValue;
		else
			this.maxValue = value;
	}
	getMinValue(){				// get the maxvalue of the progressbar.
        return this.minValue;
    }
	setMinValue(value){			// set the minvalue of the progressbar.
		// cause im not sure what will happen otherwise.
		if(value > this.maxValue)
			this.minValue = this.maxValue;
		else
			this.minValue = value;
	}
	getCurrentValue(){			// get the currentvalue of the progressbar.
		return this.currentValue;
	}
	setCurrentValue(value){		// set the currentvalue of the progressbar.
		this.currentValue = value;
	}	
	setSpeed(value){			// set the increment value of how much the currentvalue increases.
		this.speed = value;
	}
	setCompleted(value){		// marks the progressbar as (in)complete.
        this.completed = value;
	}
	getCompleted(){				// returns if progressbar is completed.
		return this.completed;
	}
	pause(){ 					// pauses the progressbar.
		this.paused = true;
	}
	start(){					// start the progressbar if it is paused.
		this.paused = false;
	}
	add(value){					// increase currentvalue with given amount.
		this.currentValue = this.currentValue + value;
	}
	sub(value){					// decrease currentvalue with given amount.
		this.currentValue = this.currentValue - value;
	}
}