constructor(lang="en") {
	this.data = {};
	if (typeof window !== 'undefined') {
		this.lang = navigator.language || navigator.userLanguage;
	} else {
		this.lang = lang
	}
}
