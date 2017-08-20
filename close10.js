function close10(a, b){
	if (Math.abs(10-a) === Math.abs(10 - b)) {
		return 0;
	}
	if (10-Math.abs(a) > 10 - Math.abs(b)) {
		return a;
	}
	else return b;
}