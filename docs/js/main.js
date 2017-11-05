const $ = new DisplayJS();

$.on(".menu-icon", "click", () => {
	$.toggleClass("body", "nav-active")
})
