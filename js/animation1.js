/*function topFunction() {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
function loaderfunct() {
    myVar = setTimeout(showPage, 1500);
}
function showPage() {
    $("#loader").fadeOut(), $("#logo-loader").animate({ bottom: "200px" });
}
function myFunction() {
    document.getElementsByTagName("header");
    var e = document.getElementById("myLinks");
    "block" === e.style.display ? ((e.style.display = "none"), (document.body.style.overflow = "auto")) : ((e.style.display = "block"), (document.body.style.overflow = "hidden"));
}
function openNav() {
    "0%" === document.getElementById("myLinks").style.width || "" === document.getElementById("myLinks").style.width
        ? ((document.getElementById("myLinks").style.width = "100%"), (document.body.style.overflow = "hidden"))
        : ((document.getElementById("myLinks").style.width = "0%"), (document.body.style.overflow = "auto"));
}
function kontaktsklanjanje() {
    (document.getElementById("myLinks").style.width = "0%"), document.getElementById("nesto").classList.toggle("change"), (document.body.style.overflow = "auto");
}
function hamburgerX(e) {
    e.classList.toggle("change");
}
$(document).ready(function () {
    $("body").backgroundSlideshow({ transitionDuration: 3e3, fixed: !0, images: ["img/Str2.jpg", "img/image12.jpg"] });
}),*/
    $(document).ready(
        (function () {
            "use strict";
            var e,
                t,
                n,
                /*o = document.getElementById("firstMus"),
                i = document.getElementById("secondMus"),
                a = document.getElementById("thirdMus"),*/
				o = document.getElementsByClassName("numbers__block")[0],
                i = document.getElementsByClassName("numbers__block")[1],
                a = document.getElementsByClassName("numbers__block")[2],
                s = o.offsetTop,
                r = window.innerHeight / 2,
                d = 0,
                l = 0,
                c = 0,
                u = !0;
            function m() {
                16 < d ? clearTimeout(e) : ((o.innerHTML = d + "<p class='stat-p'>Broj vikendica u sastavu<br/>kompleksa</p>"), d+=15, (e = setTimeout(m, 10)));
            }
            function y() {
                15 < l ? clearTimeout(t) : ((i.innerHTML = l + " min.<p class='stat-p'>Udaljenost od centra<br/>Beograda</p>"), l++, (t = setTimeout(y, 100)));
            }
            function g() {
                15 < c ? clearTimeout(n) : ((a.innerHTML = c + " ari<p class='stat-p'>Površina pojedinacnog<br/>placa</p>"), c++, (n = setTimeout(g, 100)));
            }
            (window.onresize = function () {
                return (s = o.offsetTop), (r = window.innerHeight / 2), s;
            }),
                (window.onscroll = function () {
                    var e = window.pageYOffset - 1810;
                    s - r < e && !0 === u && (m(), y(), g(), (u = !1));
                });
        })()
    )/*,
    $(function () {
        "shown" != localStorage.getItem("popState") ? localStorage.setItem("popState", "shown") : $("#loader").hide();
    })*/
    /*(function (g) {
        "use strict";
        g.fn.backgroundSlideshow = function (y) {
            this.each(function () {
                var a = g(this),
                    t = null,
                    n = null,
                    o = 0,
                    i = 0,
                    s = [],
                    r = { delay: 5e3, transitionDuration: 3e3, onBeforeTransition: null, onAfterTransition: null, fixed: !1, images: [] };
                for (var e in y) r[e] = y[e];
                var d = "opacity " + r.transitionDuration + "ms ease-in-out",
                    l = { backgroundSize: "cover", backgroundRepeat: "no-repeat", position: (r.fixed, "absolute"), left: 0, right: 0, bottom: 0, top: 0, zIndex: -1 },
                    c = { transition: d, "-webkit-transition": d, "-moz-transition": d, "-o-transition": d };
                function u(e, t) {
                    var n = g("<div class='backgroundSlideshowLayer'/>"),
                        o = l;
                    (o.backgroundImage = "url(" + e + ")"), n.css("opacity", "0"), n.css(o), t && n.css(c);
                    var i = a.find("> .backgroundSlideshowLayer").last();
                    return i[0] ? i.after(n) : a.prepend(n), n;
                }
                function m(e) {
                    (o = i),
                        ++i >= r.images.length && (i = 0),
                        (t = n || u(r.images[o], e)),
                        r.onBeforeTransition && r.onBeforeTransition(o),
                        t.css("opacity", "1"),
                        setTimeout(
                            function () {
                                var e;
                                r.onAfterTransition && r.onAfterTransition(o), s[(e = i)] || ((s[e] = new Image()), (s[e].src = r.images[e]));
                            },
                            e ? r.transitionDuration : 0
                        ),
                        setTimeout(function () {
                            var e;
                            (n = u(r.images[i], !0)), 2 < (e = a.find("> .backgroundSlideshowLayer")).length && e.first().remove();
                        }, r.transitionDuration);
                }
                a.css("position", "relative"),
                    m(!1),
                    setTimeout(function () {
                        m(!0),
                            setInterval(function () {
                                m(!0);
                            }, r.delay + r.transitionDuration);
                    }, r.delay);
            });
        };
    })(jQuery);
*/