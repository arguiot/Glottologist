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
  constructor(lang="en") {
  	this.data = {};
  	this.pageLang = lang
  	if (typeof require === "function") {
  		this.JSDOM = require("jsdom").JSDOM
  	}
  	if (typeof window !== 'undefined') {
  		this.lang = navigator.language || navigator.userLanguage;
  	} else {
  		this.lang = lang
  	}
  }
  gTranslate(phrase, lang="en", source="auto") {
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
  locale() {
      const args = [...arguments]
      if (args.length == 0) {
          if (typeof window !== 'undefined') {
              const userLanguage = navigator.language || navigator.userLanguage;
              const lang = new String(this.lang).split("-")[0]
              this.lang = lang
              return this.lang
          } else {
              this.lang = "en" // Default language
              return this.lang
          }
          
      }
      this.lang = args[0]
      return this.lang
  }
  render(lang = "auto") {
      const elements = document.querySelectorAll("[glot-model]");
      for (let i = 0; i < elements.length; i++) {
          const attr = elements[i].getAttribute("glot-model");
          const model = this.get(attr, lang)
          if (model != null && this.pageLang != lang) {
              elements[i].innerHTML =  model
          }
      }
  }
  serverRender(html, lang) {
      if (typeof this.JSDOM == "undefined") {
          return
      }
      const dom = new this.JSDOM(html)
      const { document } = dom.window
      const elements = document.querySelectorAll("[glot-model]");
      for (let i = 0; i < elements.length; i++) {
          const attr = elements[i].getAttribute("glot-model");
          const model = this.get(attr, lang)
          if (model != null && this.pageLang != lang) {
              elements[i].innerHTML =  model
          }
      }
      return dom.serialize()
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