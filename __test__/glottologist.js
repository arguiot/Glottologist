/*
**   © Arthur Guiot 2017
**         Glottologist
*/

class Glottologist {
  assign(name, object) {
  	let obj = {}
  	obj[name] = object
  	this.data = Object.assign(this.data, obj)
  }
  async autoGen(name, array) {
  	let obj = {}
  	for (let i of array) {
  		const translated = await this.t(name, i)
  		obj[i] = translated;
  	}
  	this.assign(name, obj)
  }
  constructor(lang="en") {
  	this.data = {};
  	if (typeof window !== 'undefined') {
  		this.lang = navigator.language || navigator.userLanguage;
  	} else {
  		this.lang = lang
  	}
  }
  get(name, lang = "auto", obj = {}) {
      let data = {}
      if (typeof lang == 'object') {
          data = lang
          lang = typeof obj == 'string' ? obj : "auto"
      }
  	let tmp;
  	let result;
      if (lang == "auto") {
  		tmp = this.data[name][new String(this.lang).split("-")[0]]
          result = tmp == undefined ? this.data[name][Object.keys(this.data[name])[0]] : tmp
      } else {
  		tmp = this.data[name][lang];
  		result = tmp == undefined ? this.data[name][Object.keys(this.data[name])[0]] : tmp
  	}
  
      return eval("\`" + result + "\`")
  }
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
  render(lang = "auto") {
      const elements = document.querySelectorAll("[glot-model]");
      for (let i = 0; i < elements.length; i++) {
          const attr = elements[i].getAttribute("glot-model");
          elements[i].innerHTML = this.get(attr, lang)
      }
  }
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