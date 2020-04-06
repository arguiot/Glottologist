async autoGen(array) {
	const elements = document.querySelectorAll("[glot-model]");
    for (let i = 0; i < elements.length; i++) {
        const attr = elements[i].getAttribute("glot-model");
        let obj = {}
		for (let a of array) {
			const translated = await this.gTranslate(elements[i].innerHTML, a)
			obj[a] = translated;
		}
		this.assign(attr, obj)
    }
}
