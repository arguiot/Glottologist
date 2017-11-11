get(name, lang = "auto", obj = {}) {
    let data = {}
    if (typeof lang == 'object') {
        data = lang
        lang = typeof obj == 'string' ? obj : "auto"
    }
	let tmp;
	let result;
    if (lang == "auto") {
		tmp = this.data[name][new String(this.lang).split("-")[0]]
        result = tmp == "undefined" ? this.data[name][Object.keys(this.data[name])[0]] : tmp
    } else {
		tmp = this.data[name][lang];
		result = tmp == "undefined" ? this.data[name][Object.keys(this.data[name])[0]] : tmp
	}

    return eval("\`" + result + "\`")
}
