import(url) {
	return new Promise((resolve, reject) => {
		fetch(url).then(res => {
			res.json().then(data => {
				this.data = Object.assign(this.data, data)
				resolve(data)
			}).catch(e => {
				reject(e)
			})
		}).catch(e => {
			reject(e)
		})
	})
}
