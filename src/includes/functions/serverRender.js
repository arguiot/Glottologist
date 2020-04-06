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