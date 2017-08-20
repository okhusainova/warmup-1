function or35(n){
	if (n < 0) {
		return;
	}
	if (n % 3 === 0 || n % 5 === 0) {
		return true;
	}
	return false;
}