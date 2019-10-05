/*
Progress bar keeps running untill the amount of rounds reaches zero. 
Amount or rounds needs to be set manualy.
The amount of times it has reached a 100% is stored in this.completed (equal to what rounds has been set to at start).
*/
class ProgressBar_Rounds extends Base_ProgressBar{
    constructor(name){
        super(name);
        this.rounds = 0;        // amount of rounds the progressbar has to go trough before it completes.)
    }
    update(){					// keeps running untill number of rounds reaches zero.
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
    getRounds(){				// get the amount of rounds the progressbar has to go trough before it completes.
		return this.rounds;
    }
    setRounds(value){			// set the amount of rounds the progressbar has to go trough before it completes.
		this.rounds = value;
	}
}