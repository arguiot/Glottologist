async autoGen(name, array) {
	let obj = {}
	for (let i of array) {
		const translated = await this.t(name, i)
		obj[i] = translated;
	}
	this.assign(name, obj)
}
