const glot = require(__testDir + "../dist/glottologist.js")

eye.describe("Node", () => {
	glot.assign("Hello", {
		"en": "Hello",
		"fr": "Bonjour"
	})
	glot.assign("Hello name", {
		"en": "Hello ${data.name}",
		"fr": "Bonjour ${data.name}"
	})
	eye.test("Get + Assign", "node",
		$ => $(glot.get("Hello")).Equal("Hello"),
		$ => $(glot.get("Hello", "fr")).Equal("Bonjour")
	)
	eye.test("Get Models", "node",
		$ => $(glot.get("Hello name", { name: "Arthur" })).Equal("Hello Arthur"),
		$ => $(glot.get("Hello name", { name: "Arthur" }, "fr")).Equal("Bonjour Arthur")
	)
	eye.test("Server", "node",
		$ => $(glot.serverRender("<h1 glot-model=\"Hello\">Hello</h1>", "fr")).Equal("<html><head></head><body><h1 glot-model=\"Hello\">Bonjour</h1></body></html>"),
		$ => $(() => {
			glot.serverRender("<h1 glot-model=\"Hello\">Hello</h1>", "fr")
		}).perf(10)
	)
})

eye.test("Browser", "browser", __testDir + "test.html")
