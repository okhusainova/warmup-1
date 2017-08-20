function notString(str){
	if (str.startsWith('not')) {
		return str;
	}
	return 'not ' + str;
}