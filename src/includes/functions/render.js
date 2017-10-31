render(el, lang="auto") {
	el = el instanceof NodeList ? el : document.querySelectorAll(str);
	el.forEach(element => {
		element.innerHTML = this.get(element.innerHTML, lang)
	})
}
