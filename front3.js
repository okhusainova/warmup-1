function front3(str){
	if (str.lehgth < 3) {
		return '';
	}
	return str.substring(0,3) + str.substring(0,3) + str.substring(0,3);
}