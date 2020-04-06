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