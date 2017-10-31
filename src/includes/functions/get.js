get(name, lang="auto") {
	return lang == "auto" ? this.data[name][new String(this.lang).split("-")[0]] : this.data[name][lang]
}
