const $ = new DisplayJS();


$.scroll(() => {
    const distance = $.scrollTop();
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    if (distance > window.innerHeight - 20 && distance + window.innerHeight < docHeight) {
        $.all(".menu-icon__line", el => {
            $.css(el, "background", "black")
        })
    } else {
        $.all(".menu-icon__line", el => {
            $.css(el, "background", "white")
        })
    }
})

$.on(".menu-icon", "click", () => {
    $.toggleClass("body", "nav-active")
	if ($.is("body", ".nav-active")) {
		$.all(".menu-icon__line", el => {
            $.css(el, "background", "black")
        })
	} else {
		$.all(".menu-icon__line", el => {
            $.css(el, "background", "white")
        })
	}
})
$.all(".black", el => {
    $.on(el, "click", () => {
        $.toggleClass("body", "nav-active")
    })
})
