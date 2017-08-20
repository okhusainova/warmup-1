function backAround(str){
	if (str.length < 1) {
		return;
	}
	return str[str.length-1] + str + str[str.length-1];
}