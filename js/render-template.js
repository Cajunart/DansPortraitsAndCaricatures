function render(e, t) {
    if (!render.tmpl_cache) {
        render.tmpl_cache = {}
    }
    if (!render.tmpl_cache[e]) {
        var n = "templates";
        var r = n + "/" + e + ".html";
        var i;
        $.ajax({ url: r, method: "GET", async: false, success: function (e) { i = e } });
        render.tmpl_cache[e] = Handlebars.compile(i)
    }
    return render.tmpl_cache[e](t) 
}
