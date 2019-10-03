class ProgressBar{
	constructor(name){
		this.name = name;
		this.minValue = 0;										// min value
		this.maxValue = 100;									// max value
		this.currentValue = 0;									// current value
		this.currentPercentage = this.getCurrentPercentage();	// current percentage
		this.speed = 0; 										// how fast the progress bar fills up.
		this.paused = false;
		this.completed = 0;										// amount of times it has reached it maxValue.
		this.rounds = 0;										// amount of rounds the progressbar has to go trough before it completes. Works with advane()
		this.foreGroundColor = new Color(255, 0, 0);			// default color foreground.
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
		this.currentValue = Helper.clampFloatValue(value);
	}	
	setSpeed(value){			// set the increment value of how much the currentvalue increases.
		this.speed = Helper.clampFloatValue(value);
	}
	setCompleted(value){		// marks the progressbar as (in)complete.
        this.completed = value;
	}
	getCompleted(){				// returns if progressbar is completed.
		return this.completed;
	}
	setRounds(value){			// set the amount of rounds the progressbar has to go trough before it completes.
		this.rounds = value;
	}
	getRounds(){				// get the amount of rounds the progressbar has to go trough before it completes.
		return this.rounds;
	}
	isCompleted(){				// TODO: rewrite this. Now only works with advance()
		return this.completed <= 0;
	}
	hasLooped(){				// returns if progress reached 100%. 	TODO: take out calculation.
		return this.currentValue >= (this.maxValue-this.speed);
	}
	routine(){					// keeps running. adds number of completed. this.completed++
		if(this.paused)
			return;
		
		let result = this.currentValue + this.speed;
		let reminder = 0;
		
		while (result > this.maxValue){
			reminder = result  - this.maxValue;
			// create new result.
			result = reminder;
			// routine has been completed once.
			this.completed++;
		}
		this.currentValue = Helper.clampFloatValue(result);
    }
    advance(){					// keeps running untill number of rounds reaches zero.
		if(this.rounds <= 0)
			return;

        let result = this.currentValue + this.speed; 
        this.currentValue = Helper.clampFloatValue(result);

        if(this.currentValue >= this.maxValue){
			this.rounds--;
			this.setCurrentValue(0);
			this.completed++;
		}
    }
	pause(){ 					// pauses the progressbar.
		this.paused = true;
	}
	start(){					// start the progressbar if it is paused.
		this.paused = false;
	}
	restart(){					// set the currentvalue to minvalue.	TODO: also make sure it resets the rounds and the amount of times it has completed.
		this.setCurrentValue(this.minvalue);
	}
	addToCurrentValue(value){	// increase currentvalue with given amount.
		this.currentValue = Helper.clampFloatValue(this.currentValue + value);
	}
}