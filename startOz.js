function startOz(str) {
	if (str[0] === 'o' && str[1] === 'z')
		return 'oz';
	if (str[1] === 'z')
		return 'z';
	if (str[0] === 'o')
		return 'o';
	else {
		return '';
	}
}

