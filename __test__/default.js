const glot = require(__testDir + "../dist/glottologist.js")

eye.describe("Node", () => {
	glot.assign("Hello", {
		"en": "Hello",
		"fr": "Bonjour",
		"zh": "zh 你好",
		"zh-CN": "zh-CN 你好"
	})
	glot.assign("Hello name", {
		"en": "Hello ${data.name}",
		"fr": "Bonjour ${data.name}"
	})
	eye.test("Get + Assign", "node",
		$ => $(glot.get("Hello")).Equal("Hello"),
		$ => $(glot.get("Hello", "fr")).Equal("Bonjour"),
		$ => $(glot.get("Hello", "zh-CN")).Equal("zh-CN 你好"),
		$ => $(glot.get("Hello", "zh")).Equal("zh 你好"),
	)
	eye.test("Get Models", "node",
		$ => $(glot.get("Hello name", { name: "Arthur" })).Equal("Hello Arthur"),
		$ => $(glot.get("Hello name", { name: "Arthur" }, "fr")).Equal("Bonjour Arthur")
	)
	eye.test("Get Models", "node",
		$ => $(glot.get("Hello name", { name: "Arthur" })).Equal("Hello Arthur"),
		$ => $(glot.get("Hello name", { name: "Arthur" }, "fr")).Equal("Bonjour Arthur")
	)
	eye.test("Server", "node",
		$ => $(glot.serverRender("<h1 glot-model=\"Hello\">Hello</h1>", "fr")).Equal("<html lang=\"fr\"><head></head><body><h1 glot-model=\"Hello\">Bonjour</h1></body></html>"),
		$ => $(() => {
			glot.serverRender("<h1 glot-model=\"Hello\">Hello</h1>", "fr")
		}).perf(10)
	)
})

eye.test("Browser", "browser", __testDir + "test.html")
