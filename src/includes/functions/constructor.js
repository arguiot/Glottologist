constructor(lang="en") {
	this.data = {};
	this.pageLang = lang
	if (typeof require === "function") {
		this.JSDOM = require("jsdom").JSDOM
	}
	if (typeof window !== 'undefined') {
		this.lang = navigator.language || navigator.userLanguage;
	} else {
		this.lang = lang
	}
}
