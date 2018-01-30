! function(e) {
    skel.init({
        reset: "full",
        breakpoints: {
            global: {
                href: "css/style.css",
                containers: 1400,
                grid: {
                    gutters: ["2em", 0]
                }
            },
            xlarge: {
                media: "(max-width: 1680px)",
                href: "css/style-xlarge.css",
                containers: 1200
            },
            large: {
                media: "(max-width: 1280px)",
                href: "css/style-large.css",
                containers: 960,
                grid: {
                    gutters: ["1.5em", 0]
                },
                viewport: {
                    scalable: !1
                }
            },
            medium: {
                media: "(max-width: 980px)",
                href: "css/style-medium.css",
                containers: "90%",
                grid: {
                    zoom: 2
                }
            },
            small: {
                media: "(max-width: 736px)",
                href: "css/style-small.css",
                containers: "90%!",
                grid: {
                    gutters: ["1.25em", 0],
                    zoom: 3
                }
            },
            xsmall: {
                media: "(max-width: 480px)",
                href: "css/style-xsmall.css"
            }
        },
        plugins: {
            layers: {
                config: {
                    transformTest: function() {
                        return skel.vars.isMobile
                    }
                },
                navButton: {
                    breakpoints: "medium",
                    height: "4em",
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
                    position: "top-left",
                    side: "top",
                    width: "6em"
                },
                navPanel: {
                    animation: "overlayX",
                    breakpoints: "medium",
                    clickToHide: !0,
                    height: "100%",
                    hidden: !0,
                    html: '<div data-action="navList" data-args="nav"></div>',
                    orientation: "vertical",
                    position: "top-left",
                    side: "left",
                    width: 250
                }
            }
        }
    }), e(function() {
        var a = e(window),
            t = e("body"),
            r = e("#banner"),
            i = e("#header");
        t.addClass("is-loading"), a.on("load", function() {
            window.setTimeout(function() {
                t.removeClass("is-loading")
            }, 500)
        });
        var l = e("form");
        l.length > 0 && (l.find(".form-button-submit").on("click", function() {
            return e(this).parents("form").submit(), !1
        }), skel.vars.IEVersion < 10 && (e.fn.n33_formerize = function() {
            var a = new Array,
                t = e(this);
            return t.find("input[type=text],textarea").each(function() {
                var a = e(this);
                "" != a.val() && a.val() != a.attr("placeholder") || (a.addClass("formerize-placeholder"), a.val(a.attr("placeholder")))
            }).blur(function() {
                var a = e(this);
                a.attr("name").match(/_fakeformerizefield$/) || "" == a.val() && (a.addClass("formerize-placeholder"), a.val(a.attr("placeholder")))
            }).focus(function() {
                var a = e(this);
                a.attr("name").match(/_fakeformerizefield$/) || a.val() == a.attr("placeholder") && (a.removeClass("formerize-placeholder"), a.val(""))
            }), t.find("input[type=password]").each(function() {
                var a = e(this),
                    t = e(e("<div>").append(a.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, "type=text"));
                "" != a.attr("id") && t.attr("id", a.attr("id") + "_fakeformerizefield"), "" != a.attr("name") && t.attr("name", a.attr("name") + "_fakeformerizefield"), t.addClass("formerize-placeholder").val(t.attr("placeholder")).insertAfter(a), "" == a.val() ? a.hide() : t.hide(), a.blur(function(a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.parent().find("input[name=" + t.attr("name") + "_fakeformerizefield]");
                    "" == t.val() && (t.hide(), r.show())
                }), t.focus(function(a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.parent().find("input[name=" + t.attr("name").replace("_fakeformerizefield", "") + "]");
                    t.hide(), r.show().focus()
                }), t.keypress(function(e) {
                    e.preventDefault(), t.val("")
                })
            }), t.submit(function() {
                e(this).find("input[type=text],input[type=password],textarea").each(function(a) {
                    var t = e(this);
                    t.attr("name").match(/_fakeformerizefield$/) && t.attr("name", ""), t.val() == t.attr("placeholder") && (t.removeClass("formerize-placeholder"), t.val(""))
                })
            }).bind("reset", function(t) {
                t.preventDefault(), e(this).find("select").val(e("option:first").val()), e(this).find("input,textarea").each(function() {
                    var a, t = e(this);
                    switch (t.removeClass("formerize-placeholder"), this.type) {
                        case "submit":
                        case "reset":
                            break;
                        case "password":
                            t.val(t.attr("defaultValue")), a = t.parent().find("input[name=" + t.attr("name") + "_fakeformerizefield]"), "" == t.val() ? (t.hide(), a.show()) : (t.show(), a.hide());
                            break;
                        case "checkbox":
                        case "radio":
                            t.attr("checked", t.attr("defaultValue"));
                            break;
                        case "text":
                        case "textarea":
                            t.val(t.attr("defaultValue")), "" == t.val() && (t.addClass("formerize-placeholder"), t.val(t.attr("placeholder")));
                            break;
                        default:
                            t.val(t.attr("defaultValue"))
                    }
                }), window.setTimeout(function() {
                    for (x in a) a[x].trigger("formerize_sync")
                }, 10)
            }), t
        }, l.n33_formerize())), i.hasClass("alt") && r.length > 0 && a.on("load", function() {
            r.scrollwatch({
                delay: 0,
                range: .98,
                anchor: "top",
                on: function() {
                    i.addClass("alt reveal")
                },
                off: function() {
                    i.removeClass("alt")
                }
            }), skel.change(function() {
                skel.isActive("medium") ? r.scrollwatchSuspend() : r.scrollwatchResume()
            })
        });
        var n = e(".slider");
        n.length > 0 && (n.slidertron({
            mode: "fadeIn",
            seamlessWrap: !0,
            viewerSelector: ".viewer",
            reelSelector: ".viewer .reel",
            slidesSelector: ".viewer .reel .slide",
            advanceDelay: 0,
            speed: 400,
            fadeInSpeed: 1e3,
            autoFit: !0,
            autoFitAspectRatio: 840 / 344,
            navPreviousSelector: ".nav-previous",
            navNextSelector: ".nav-next",
            indicatorSelector: ".indicator ul li",
            slideLinkSelector: ".link"
        }), a.on("resize load", function() {
            n.trigger("slidertron_reFit")
        }).trigger("resize"))
    })
}(jQuery);