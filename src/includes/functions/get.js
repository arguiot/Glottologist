get(name, lang="auto", obj={}) {
	let data = {}
	if(typeof lang == 'object') {
		data = lang
		lang = typeof obj == 'string' ? obj : "auto"
	}
	const result = lang == "auto" ? this.data[name][new String(this.lang).split("-")[0]] : this.data[name][lang]

	return eval("\`"+ result +"\`")
}
