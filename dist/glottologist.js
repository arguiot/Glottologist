/*
**   © Arthur Guiot 2017
**         Glottologist
*/

class Glottologist {
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
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new Glottologist());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new Glottologist();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.Glottologist = new Glottologist();
} else if (typeof global !== "undefined") {
  global.Glottologist = new Glottologist();
}