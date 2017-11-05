render(lang = "auto") {
    const elements = document.querySelectorAll("[glot-model]");
    for (let i = 0; i < elements.length; i++) {
        const attr = elements[i].getAttribute("glot-model");
        elements[i].innerHTML = this.get(attr, lang)
    }
}
