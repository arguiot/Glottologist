constructor(lang="en") {
	this.data = {};
	this.pageLang = lang
	if (typeof window !== 'undefined') {
		this.lang = navigator.language || navigator.userLanguage;
	} else {
		this.lang = lang
	}
}
