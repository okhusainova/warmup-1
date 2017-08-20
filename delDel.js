function delDel(str) {
	if (str[1] === 'd' && str[2] === 'e' && str[3] === 'l') {
		return str[0] + str.substring(4, str.length);
	}
	return str;
}