function missingChar(str, n) {
	var new_str='';
	if (n > str.length-1) {
		return;
	}
	return new_str=str.substring(0,n)+str.substring(n+1,str.length);
}