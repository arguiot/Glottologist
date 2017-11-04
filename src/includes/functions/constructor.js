constructor(lang="en") {
	this.data = {};
	if (navigator) {
		this.lang = navigator.language || navigator.userLanguage;
	} else {
		this.lang = lang
	}
}
