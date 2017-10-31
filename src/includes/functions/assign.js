assign(name, object) {
	let obj = {}
	obj[name] = object
	this.data = Object.assign(this.data, obj)
}
