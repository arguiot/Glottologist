codeGen() {
    const keys = Object.keys(this.data)
    let tmp = ""
    for (let i = 0; i < keys.length; i++) {
        tmp += `glot.assign("${keys[i]}", ${JSON.stringify(this.data[keys[i]], null, 2)})\n`
    }
    return tmp
}