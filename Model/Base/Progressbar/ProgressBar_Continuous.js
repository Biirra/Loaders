/*
Progress bar will keep working unless stopped manually. 
The amount of times it has reached a 100% is stored in this.completed;
*/
class ProgressBar_Continuous extends Base_ProgressBar{
    constructor(name){
        super(name);
    }
    update(){					// keeps running. adds number of completed. this.completed++
		if(this.paused)
			return;
		
		let result = this.currentValue + this.speed;
		let reminder = 0;
		
		while (result > this.maxValue){
			reminder = result  - this.maxValue;	// calculate left over value for next cycle
			result = reminder;	
			this.completed++;	// progress bar has reached 100%
		}
		this.currentValue = result;
    }
}