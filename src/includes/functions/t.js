t(phrase, lang="en", source="auto") {
	return new Promise((resolve, reject) => {
		const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
	            + source + "&tl=" + lang + "&dt=t&q=" + encodeURI(phrase);
		fetch(url).then(res => {
			res.json().then(data => {
				resolve(data[0][0][0])
			}).catch(e => {
				reject(e)
			})
		}).catch(e => {
			reject(e)
		})
	})
}
