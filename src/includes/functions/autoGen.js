async autoGen(array) {
	const elements = document.querySelectorAll("[glot-model]");
    for (let i = 0; i < elements.length; i++) {
        const attr = elements[i].getAttribute("glot-model");
        let obj = {}
		for (let i of array) {
			const translated = await this.gTranslate(elements[i].innerHTML, i)
			obj[i] = translated;
		}
		this.assign(attr, obj)
    }
}
