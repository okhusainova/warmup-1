function frontBack(str){
	if (str.length === 1 || str.length === 0) {
		return str;
	}
	var new_str = '';  
	return new_str = str[str.length-1] + str.substring(1, str.length-1) + str[0];
}