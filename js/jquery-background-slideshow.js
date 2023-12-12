!(function (m) {
    "use strict";
    m.fn.backgroundSlideshow = function (g) {
        this.each(function () {
            var a = m(this),
                i = null,
                t = null,
                o = 0,
                e = 0,
                r = [],
                s = { delay: 5e3, transitionDuration: 3e3, onBeforeTransition: null, onAfterTransition: null, fixed: !1, images: [] };
            for (var n in g) s[n] = g[n];
            var u = "opacity " + s.transitionDuration + "ms ease-in-out",
                c = { backgroundSize: "cover", backgroundRepeat: "no-repeat", position: (s.fixed, "absolute"), left: 0, right: 0, bottom: 0, top: 0, zIndex: -1 },
                f = { transition: u, "-webkit-transition": u, "-moz-transition": u, "-o-transition": u };
            function l(n, i) {
                var t = m("<div class='backgroundSlideshowLayer'/>"),
                    o = c;
                (o.backgroundImage = "url(" + n + ")"), t.css("opacity", "0"), t.css(o), i && t.css(f);
                var e = a.find("> .backgroundSlideshowLayer").last();
                return e[0] ? e.after(t) : a.prepend(t), t;
            }
            function d(n) {
                (o = e),
                    ++e >= s.images.length && (e = 0),
                    (i = t || l(s.images[o], n)),
                    s.onBeforeTransition && s.onBeforeTransition(o),
                    i.css("opacity", "1"),
                    setTimeout(
                        function () {
                            var n;
                            s.onAfterTransition && s.onAfterTransition(o), r[(n = e)] || ((r[n] = new Image()), (r[n].src = s.images[n]));
                        },
                        n ? s.transitionDuration : 0
                    ),
                    setTimeout(function () {
                        var n;
                        (t = l(s.images[e], !0)), 2 < (n = a.find("> .backgroundSlideshowLayer")).length && n.first().remove();
                    }, s.transitionDuration);
            }
            a.css("position", "relative"),
                d(!1),
                setTimeout(function () {
                    d(!0),
                        setInterval(function () {
                            d(!0);
                        }, s.delay + s.transitionDuration);
                }, s.delay);
        });
    };
})(jQuery);
