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
