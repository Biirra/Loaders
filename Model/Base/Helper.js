class Helper{
	static clampFloatValue(value, min, max){
		if(value > max)
			return max;
		if(value < min)
			return min;
		return parseFloat(value);
	}
}