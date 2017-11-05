const $ = new DisplayJS();

$.on(".menu-icon", "click", () => {
	$.toggleClass("body", "nav-active")
})
$.all(".black", el => {
	$.on(el, "click", () => {
		$.toggleClass("body", "nav-active")
	})
})
