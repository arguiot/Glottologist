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
})

eye.test("Browser", "browser", __testDir + "test.html")
