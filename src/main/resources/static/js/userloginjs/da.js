(function (d) {
    var a = {};
    if (d) {
        a.domain = d.domain || "";
        a.url = d.URL || "";
        a.title = d.title || ""
    }
    if (window && window.screen) {
        a.sh = window.screen.height || 0;
        a.sw = window.screen.width || 0;
        a.cd = window.screen.colorDepth || 0
    }
    if (navigator) {
        a.lang = navigator.language || "";
        a.userAgent = navigator.userAgent
    }
    if ((typeof _daq != "undefined") && !!_daq) {
        for (var Y in _daq) {
            var Q = _daq[Y][0];
            var P = _daq[Y][1];
            var O = _daq[Y][2];
            if (Q == "create") {
                n(Q, P, O)
            } else {
                if (Q == "_setDomainName") {
                    W(Q, P)
                }
            }
        }
    }
    a.version = "1.1.3";
    var A = "//rev.da.netease.com/__dam.gif";

    function n(i, ad, ae) {
        if (i == "create") {
            a._damac = ad
        }
        if (location.href.indexOf("kaola.com") > -1) {
            W("_setDomainName", ".kaola.com")
        }
    }

    function W(ad, i) {
        if (ad == "_setDomainName") {
            if (a.domain.indexOf(i) > -1) {
                a.cookieDomain = i
            }
        }
    }

    var ab = Math.round(new Date().getTime() / 1000);

    function g() {
        K("__da_ntes_utma");
        H("__da_ntes_utmb");
        v("__da_ntes_utmz");
        p("__da_ntes_utmfc");
        var i = "&__ga_utma=" + r("__utma") + "&__da_ntes_utma=" + r("__da_ntes_utma") + "&__da_ntes_utmb=" + r("__da_ntes_utmb") + "&__da_ntes_utmz=" + r("__da_ntes_utmz") + "&__da_ntes_utmfc=" + r("__da_ntes_utmfc") + "&__p_info=" + encodeURIComponent(r("P_INFO"));
        return i
    }

    function e() {
        var ad = "";
        for (var ae in a) {
            if (ad != "") {
                ad += "&"
            }
            ad += ae + "=" + encodeURIComponent(a[ae])
        }
        return ad
    }

    function D(ah, aj) {
        var ag = window.location.href;
        var ai = parseInt(ab / 1000);
        var ad = new Image(1, 1);
        var ae = f(aj);
        if (ae != null && ae != "") {
            ae = "&" + ae
        }
        var af = encodeURIComponent(d.referrer) || "";
        var i = A + "?_da_ntes_uid=" + r("_da_ntes_uid") + "&type=" + ah + "&" + e() + ae + g() + "&referrer=" + af + "&" + h();
        ad.src = encodeURI(i)
    }

    function M(i, an, ag, ae, af) {
        var ai = window.location.href;
        var ah = parseInt(ab / 1000);
        var al = new Image(1, 1);
        var am = "&type=_trackEvent&ec=" + encodeURIComponent(an) + "&ea=" + encodeURIComponent(ag) + "&el=" + encodeURIComponent(ae);
        var ad = f(af);
        if (ad != null && ad != "") {
            am = am + "&cusdata=" + encodeURIComponent(ad)
        }
        var ak = encodeURIComponent(d.referrer) || "";
        var aj = A + "?_da_ntes_uid=" + r("_da_ntes_uid") + "&" + e() + am + g() + "&referrer=" + ak + "&" + h();
        al.src = encodeURI(aj)
    }

    function K(aj) {
        if (!r(aj)) {
            var ah = "";
            var ag = s(a.domain);
            var i = z(ag);
            var ai = Random();
            var am = ab;
            var ad = ab;
            var ak = ab;
            var af = 1;
            ah = i + "." + ai + "." + am + "." + ad + "." + ak + "." + af;
            b(aj, ah, "y2", "/");
            b("davisit", 1, "y2", "/")
        } else {
            o("davisit", parseFloat(r("davisit")) + 1);
            var ae = r(aj);
            if (ae) {
                var al = ae.split(".");
                if (al && al.length > 5) {
                    if (J() || !r("__da_ntes_utmb")) {
                        var ah = "";
                        var i = al[0];
                        var ai = al[1];
                        var am = al[2];
                        var ad = al[4];
                        var ak = ab;
                        var af = parseInt(al[5]) + 1;
                        ah = i + "." + ai + "." + am + "." + ad + "." + ak + "." + af;
                        b(aj, ah, "y2", "/")
                    } else {
                        b(aj, r("__da_ntes_utma"), "y2", "/")
                    }
                }
            }
        }
    }

    var l = [{searchUrl: "google", word: "q"}, {searchUrl: "baidu", word: "wd"}, {
        searchUrl: "sogou",
        word: "query"
    }, {searchUrl: "cn.bing", word: "q"}, {searchUrl: "youdao", word: "q"}, {
        searchUrl: "soso",
        word: "query"
    }, {searchUrl: "haosou", word: "q"}];

    function v(ak) {
        if (!r(ak)) {
            var ah = "";
            var ag = s(a.domain);
            var af = z(ag);
            var am = ab;
            var i = 1;
            var ai = 1;
            var ae = "";
            var aj = a.referrer;
            var ad = window.location.search;
            if (U(ad)) {
                ad = ad.substring(1, ad.length)
            }
            if (U(aj)) {
                if (G(aj) == a.domain) {
                    ae = B()
                } else {
                    var al = k(aj);
                    if (al != "") {
                        ae = T(al)
                    } else {
                        ae = E()
                    }
                    if (U(ad)) {
                        if (ad.indexOf("__da_", 0) > -1) {
                            ae = R(ad)
                        }
                        if (ad.indexOf("utm_source", 0) > -1) {
                            ae = I(ad)
                        }
                    }
                }
            } else {
                if (U(ad)) {
                    if (ad.indexOf("__da_", 0) > -1) {
                        ae = R(ad)
                    }
                    if (ad.indexOf("utm_source", 0) > -1) {
                        ae = I(ad)
                    }
                } else {
                    ae = B()
                }
            }
            ah = af + "." + am + "." + i + "." + ai + "." + encodeURIComponent(ae);
            b(ak, ah, "y0.5", "/")
        } else {
            Z(ak)
        }
    }

    function p(ag) {
        if (!r(ag)) {
            var af = "";
            var ad = a.referrer;
            var ae = window.location.search;
            if (U(ae)) {
                ae = ae.substring(1, ae.length)
            }
            if (U(ad)) {
                if (G(ad) == a.domain) {
                    af = B()
                } else {
                    var i = k(ad);
                    if (i != "") {
                        af = T(i)
                    } else {
                        af = E()
                    }
                    if (U(ae)) {
                        if (ae.indexOf("__da_", 0) > -1) {
                            af = R(ae)
                        }
                        if (ae.indexOf("utm_source", 0) > -1) {
                            af = I(ae)
                        }
                    }
                }
            } else {
                if (U(ae)) {
                    if (ae.indexOf("__da_", 0) > -1) {
                        af = R(ae)
                    }
                    if (ae.indexOf("utm_source", 0) > -1) {
                        af = I(ae)
                    }
                } else {
                    af = B()
                }
            }
            b(ag, encodeURIComponent(af), "y2", "/")
        }
    }

    function H(ak) {
        if (!r(ak)) {
            var aj = "";
            var ai = s(a.domain);
            var ad = z(ai);
            var ag = 1;
            var af = 10;
            var al = ab;
            aj = ad + "." + ag + "." + af + "." + al;
            b(ak, aj, "m30", "/")
        } else {
            var i = r(ak);
            if (i) {
                var ah = i.split(".");
                if (ah && ah.length > 3) {
                    var am = ah[3];
                    var ae = parseInt(Math.abs(ab - am) / 60);
                    if (J()) {
                        var aj = "";
                        var ad = ah[0];
                        var ag = 1;
                        var af = ah[2];
                        var al = ab;
                        aj = ad + "." + ag + "." + af + "." + al;
                        b(ak, aj, "m30", "/")
                    } else {
                        var aj = "";
                        var ad = ah[0];
                        var ag = parseInt(ah[1]) + 1;
                        var af = ah[2];
                        var al = ah[3];
                        aj = ad + "." + ag + "." + af + "." + al;
                        b(ak, aj, "m30", "/")
                    }
                }
            }
        }
    }

    function Z(af) {
        var ae = r(af);
        if (ae) {
            var ak = ae.split(".");
            if (ak && ak.length > 4) {
                var ai = ak[4];
                if (ak.length > 5) {
                    for (var ah = 5; ah < ak.length; ah++) {
                        ai = ai + "." + ak[ah]
                    }
                }
                var aj = ak[1];
                var ag = parseInt(Math.abs(ab - aj) / 60);
                var ad = window.location.search;
                if (U(ad)) {
                    ad = ad.substring(1, ad.length)
                }
                if (ac(ai)) {
                    if (!N(ad)) {
                        if (F(ad)) {
                            ai = I(ad);
                            X(ak, ai);
                            return
                        }
                        if (m(ad)) {
                            ai = R(ad);
                            X(ak, ai);
                            return
                        }
                        if (j()) {
                            ai = T(k(a.referrer));
                            X(ak, ai);
                            return
                        }
                        if (t() && !r("__da_ntes_utmb")) {
                            ai = E();
                            X(ak, ai);
                            return
                        }
                    }
                } else {
                    if (aa(ai)) {
                        if (!N(ad)) {
                            if (F(ad)) {
                                ai = I(ad);
                                X(ak, ai);
                                return
                            }
                            if (m(ad)) {
                                ai = R(ad);
                                X(ak, ai);
                                return
                            }
                            if (j()) {
                                ai = T(k(a.referrer));
                                X(ak, ai);
                                return
                            }
                            if (t() && !r("__da_ntes_utmb")) {
                                ai = E();
                                X(ak, ai);
                                return
                            }
                        }
                    } else {
                        if (C(ai)) {
                            if (!N(ad)) {
                                if (F(ad)) {
                                    ai = I(ad);
                                    X(ak, ai);
                                    return
                                }
                                if (m(ad)) {
                                    ai = R(ad);
                                    X(ak, ai);
                                    return
                                }
                                if (j() && (L(ai) || !r("__da_ntes_utmb"))) {
                                    ai = T(k(a.referrer));
                                    X(ak, ai);
                                    return
                                }
                                if (t() && !r("__da_ntes_utmb")) {
                                    ai = E();
                                    X(ak, ai);
                                    return
                                }
                            }
                        } else {
                            if (c(ai)) {
                                if (!N(ad)) {
                                    if (F(ad)) {
                                        ai = I(ad);
                                        X(ak, ai);
                                        return
                                    }
                                    if (m(ad) && (w(ai) || !r("__da_ntes_utmb"))) {
                                        ai = R(ad);
                                        X(ak, ai);
                                        return
                                    }
                                    if (j()) {
                                        ai = T(k(a.referrer));
                                        X(ak, ai);
                                        return
                                    }
                                    if (t() && !r("__da_ntes_utmb")) {
                                        ai = E();
                                        X(ak, ai);
                                        return
                                    }
                                }
                            } else {
                                if (u(ai)) {
                                    if (!N(ad)) {
                                        if (F(ad) && (y(ai) || !r("__da_ntes_utmb"))) {
                                            ai = I(ad);
                                            X(ak, ai);
                                            return
                                        }
                                        if (m(ad)) {
                                            ai = R(ad);
                                            X(ak, ai);
                                            return
                                        }
                                        if (j()) {
                                            ai = T(k(a.referrer));
                                            X(ak, ai);
                                            return
                                        }
                                        if (t() && !r("__da_ntes_utmb")) {
                                            ai = E();
                                            X(ak, ai);
                                            return
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            b("__da_ntes_utmz", r("__da_ntes_utmz"), "y0.5", "/")
        }
    }

    function J() {
        var ae = r("__da_ntes_utmz");
        if (ae) {
            var aj = ae.split(".");
            if (aj && aj.length > 4) {
                var ah = decodeURIComponent(aj[4]);
                if (aj.length > 5) {
                    for (var ag = 5; ag < aj.length; ag++) {
                        ah = ah + "." + decodeURIComponent(aj[ag])
                    }
                }
                var ai = aj[1];
                var af = parseInt(Math.abs(ab - ai) / 60);
                var ad = window.location.search;
                if (U(ad)) {
                    ad = ad.substring(1, ad.length)
                }
                if (ac(ah)) {
                    if (m(ad) || j() || F(ad)) {
                        return true
                    }
                    if (t() && !r("__da_ntes_utmb")) {
                        return true
                    }
                    return false
                }
                if (aa(ah)) {
                    if (m(ad) || j() || F(ad)) {
                        return true
                    }
                    if (t() && !r("__da_ntes_utmb")) {
                        return true
                    }
                    return false
                }
                if (C(ah)) {
                    if (m(ad) || F(ad)) {
                        return true
                    }
                    if (j() && (L(ah) || !r("__da_ntes_utmb"))) {
                        return true
                    }
                    if (t() && !r("__da_ntes_utmb")) {
                        return true
                    }
                    return false
                }
                if (c(ah)) {
                    if (m(ad) && (w(ah) || !r("__da_ntes_utmb"))) {
                        return true
                    }
                    if (F(ad) || j()) {
                        return true
                    }
                    if (t() && !r("__da_ntes_utmb")) {
                        return true
                    }
                    return false
                }
                if (u(ah)) {
                    if (F(ad) && (y(ah) || !r("__da_ntes_utmb"))) {
                        return true
                    }
                    if (m(ad) || j()) {
                        return true
                    }
                    if (t() && !r("__da_ntes_utmb")) {
                        return true
                    }
                    return false
                }
            }
        }
    }

    function y(ae) {
        var ao = window.location.search;
        if (U(ao)) {
            ao = ao.substring(1, ao.length)
        }
        var ad = S("utm_source");
        var ah = "", i = "", ai = "", am = "";
        if (ao.indexOf("utm_campaign") > -1) {
            ah = S("utm_campaign");
            if (ah == "") {
                ah = "1"
            }
        } else {
            ah = "(" + escape("not set") + ")"
        }
        if (ao.indexOf("utm_medium") > -1) {
            i = S("utm_medium");
            if (i == "") {
                i = "1"
            }
        } else {
            i = "(" + escape("not set") + ")"
        }
        if (ao.indexOf("utm_term") > -1) {
            ai = S("utm_term");
            if (ai == "") {
                ai = "1"
            }
        }
        if (ao.indexOf("utm_content") > -1) {
            am = S("utm_content");
            if (am == "") {
                am = "1"
            }
        }
        var af = ae.split("|");
        var an = "", al = "", ak = "", aj = "", ag = "";
        if (af != null && af.length > 2) {
            an = af[0].substring(af[0].indexOf("=") + 1, af[0].length);
            al = af[1].substring(af[1].indexOf("=") + 1, af[1].length);
            ak = af[2].substring(af[2].indexOf("=") + 1, af[2].length);
            if (af.length > 3) {
                if (af[3].indexOf("utmctr") > -1) {
                    aj = af[3].substring(af[3].indexOf("=") + 1, af[3].length)
                } else {
                    ag = af[3].substring(af[3].indexOf("=") + 1, af[3].length)
                }
            }
            if (af.length > 4) {
                ag = af[4].substring(af[4].indexOf("=") + 1, af[4].length)
            }
        }
        if ((ad == an) && (ah == al) && (i == ak) && (ai == aj) && (am == ag)) {
            return false
        } else {
            return true
        }
    }

    function w(i) {
        var ak = window.location.search;
        if (U(ak)) {
            ak = ak.substring(1, ak.length)
        }
        var af = ak.split("_");
        var ad, ae;
        if (af.length > 4) {
            ae = af[3];
            ad = af[4]
        }
        var ah = i.substring(i.indexOf("utmpclid=") + 9, i.length);
        var ag = ah.split("_");
        var ai, aj;
        if (ag.length > 4) {
            ai = ag[4];
            aj = ag[3]
        }
        if (ae != aj) {
            return true
        }
        if (ad != ai) {
            return true
        }
        return false
    }

    function L(ag) {
        var i = k(a.referrer);
        var ai = ag.split("|");
        var af = ai[0].substring(ai[0].indexOf("=") + 1, ai[0].length);
        if (i.searchUrl != af) {
            return true
        }
        var ae = i.word;
        var ad = q(a.referrer, ae);
        if (ad == "") {
            ad = "(" + escape("not provided") + ")"
        }
        var ah = ag.substring(ag.indexOf("utmctr=") + 7, ag.length);
        if (ad != ah) {
            return true
        }
        return false
    }

    function X(ae, ad) {
        var af = ae[0];
        var aj = ab;
        var i = parseInt(ae[2]) + 1;
        var ag = r("__da_ntes_utma");
        if (ag != "") {
            var ak = ag.split(".");
            if (ak && ak.length > 5) {
                i = parseInt(ak[5])
            }
        }
        var ai = parseInt(ae[3]) + 1;
        var ah = af + "." + aj + "." + i + "." + ai + "." + encodeURIComponent(ad);
        b("__da_ntes_utmz", ah, "y0.5", "/")
    }

    function N(i) {
        if (a.referrer == "" || a.referrer == null) {
            if (i.indexOf("utm_source") < -1) {
                return true
            }
            if (i.indexOf("__da_") < -1) {
                return true
            }
        } else {
            if (G(a.referrer) == a.domain) {
                if (i.indexOf("utm_source") < -1) {
                    return true
                }
                if (i.indexOf("__da_") < -1) {
                    return true
                }
            }
        }
        return false
    }

    function m(i) {
        if (U(i) && i.indexOf("__da_", 0) > -1) {
            return true
        }
        return false
    }

    function j() {
        if (U(a.referrer)) {
            var i = window.location.search;
            if (U(i) && i.indexOf("__da_", 0) > -1) {
                return false
            }
            if (U(i) && i.indexOf("utm_source", 0) > -1) {
                return false
            }
            var ad = k(a.referrer);
            if (ad != "") {
                return true
            } else {
                return false
            }
        }
        return false
    }

    function t() {
        if (U(a.referrer)) {
            if (G(a.referrer) == a.domain) {
                return false
            }
            var i = k(a.referrer);
            if (i == "") {
                return true
            }
            return false
        }
        return false
    }

    function F(i) {
        if (U(i) && i.indexOf("utm_source", 0) > -1) {
            return true
        } else {
            return false
        }
    }

    function ac(i) {
        if (U(i)) {
            if (i.indexOf("utmcsr=(direct)|utmccn=(direct)") > -1) {
                return true
            }
        }
        return false
    }

    function aa(i) {
        if (U(i)) {
            if (i.indexOf("utmccn=(referral)|utmcmd=referral") > -1) {
                return true
            }
        }
        return false
    }

    function C(i) {
        if (U(i)) {
            if (i.indexOf("utmccn=(search)|utmcmd=search") > -1) {
                return true
            }
        }
        return false
    }

    function c(i) {
        if (U(i)) {
            if (i.indexOf("utmccn=(prom)|utmcmd=prom") > -1) {
                return true
            }
        }
        return false
    }

    function u(i) {
        if (U(i)) {
            if (!ac(i) && !aa(i) && !C(i) && !c(i)) {
                return true
            }
        }
        return false
    }

    function I(ae) {
        var ag = "";
        if (U(ae) && ae.indexOf("utm_source") > -1) {
            var ah, ad, ai, i, af;
            ag = "utmcsr=";
            ah = S("utm_source");
            if (ah == "") {
                ah = "1"
            }
            ag = ag + ah;
            if (ae.indexOf("utm_campaign") > -1) {
                ai = S("utm_campaign");
                if (ai == "") {
                    ai = "1"
                }
            } else {
                ai = "(" + escape("not set") + ")"
            }
            ag = ag + "|utmccn=" + ai;
            if (ae.indexOf("utm_medium") > -1) {
                ad = S("utm_medium");
                if (ad == "") {
                    ad = "1"
                }
            } else {
                ad = "(" + escape("not set") + ")"
            }
            ag = ag + "|utmcmd=" + ad;
            if (ae.indexOf("utm_term") > -1) {
                i = S("utm_term");
                if (i == "") {
                    i = "1"
                }
                ag = ag + "|utmctr=" + i
            }
            if (ae.indexOf("utm_content") > -1) {
                if (S("utm_content") != "") {
                    af = S("utm_content")
                } else {
                    af = "1"
                }
                ag = ag + "|utmcct=" + af
            }
        }
        return ag
    }

    function B() {
        return "utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)"
    }

    function R(i) {
        var ae = a.referrer;
        if (ae != null && ae != "") {
            if (ae.indexOf("?") > -1) {
                ae = ae.substring(0, ae.indexOf("?"))
            }
            if (ae.indexOf("#") > -1) {
                ae = ae.substring(0, ae.indexOf("#"))
            }
        }
        var ad = G(ae);
        return "utmcsr=" + ad + "|utmccn=(prom)|utmcmd=prom|utmpclid=" + i
    }

    function T(i) {
        var ae = i.word;
        var ad = q(a.referrer, ae);
        if (ad == "") {
            ad = "(" + escape("not provided") + ")"
        }
        return "utmcsr=" + i.searchUrl + "|utmccn=(search)|utmcmd=search|utmctr=" + ad
    }

    function E() {
        var i = a.referrer;
        if (i.indexOf("?") > -1) {
            i = i.substring(0, i.indexOf("?"))
        }
        if (i.indexOf("#") > -1) {
            i = i.substring(0, i.indexOf("#"))
        }
        var ae = G(i);
        if (i.indexOf("http://") > -1) {
            i = i.substring(7, i.length)
        }
        if (i.indexOf("https://") > -1) {
            i = i.substring(8, i.length)
        }
        var ad = i.substring(ae.length, i.length);
        return "utmcsr=" + ae + "|utmccn=(referral)|utmcmd=referral|utmcct=" + ad
    }

    var G = function (ad) {
        var af = "";
        if (typeof ad == "undefined" || null == ad) {
            ad = window.location.href
        }
        var ae = /.*\:\/\/([^\/]*).*/;
        var i = ad.match(ae);
        if (typeof i != "undefined" && null != i) {
            af = i[1]
        }
        return af
    };

    function S(i) {
        var ad = new RegExp("(^|&)" + i + "=([^&]*)(&|$)");
        var ae = window.location.search.substr(1).match(ad);
        if (ae != null) {
            return ae[2]
        }
        return ""
    }

    function q(ad, i) {
        if (ad == "") {
            return ""
        }
        if (ad.indexOf("?") < -1) {
            return ""
        }
        var ae = new RegExp("(^|&)" + i + "=([^&]*)(&|$)");
        var af = ad.substr(ad.indexOf("?") + 1).match(ae);
        if (af != null) {
            return af[2]
        }
        return ""
    }

    function s(i) {
        if (!!a.cookieDomain) {
            return a.cookieDomain
        }
        if (i != null && i != "") {
            if (i.indexOf("www.") > -1) {
                i = i.substring(4, i.length)
            }
        }
        return i
    }

    function k(ad) {
        if (ad == "" || ad == null) {
            return ""
        }
        for (var i in l) {
            if (ad.indexOf(l[i].searchUrl) > -1) {
                return l[i]
            }
        }
        return ""
    }

    function f(ae) {
        var i = "";
        for (var ad in ae) {
            var af = ae["" + ad + ""];
            i += (ad + "=" + encodeURIComponent(af) + "&")
        }
        if (i.lenght > 0) {
            i = i.substring(0, i.length - 1)
        }
        return i
    }


    function h() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ae) {
            var ad = Math.random() * 16 | 0, i = ae == "x" ? ad : (ad & 3 | 8);
            return i.toString(16)
        })
    }

    function b(ae, ah, aj, ai) {
        var ae = escape(ae);
        var ah = ah;
        var af = V(aj);
        var ad = new Date();
        ad.setTime(ad.getTime() + af * 1);
        ai = ai == "" ? "" : ";path=" + ai;
        var i = "";
        if (!!a.cookieDomain) {
            i = ";domain=" + a.cookieDomain;
            if (x(ae)) {
                d.cookie = ae + "=" + ah + ai + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }
            var ag = r(ae);
            ah = ag || ah
        }
        if (af == 0) {
            _expires = ""
        } else {
            _expires = ";expires=" + ad.toUTCString()
        }
        d.cookie = ae + "=" + ah + i + _expires + ai
    }

    function o(i, ad) {
        d.cookie = i + "=" + escape(ad)
    }

    function V(ae) {
        if (ae == "" || ae == null) {
            return 0
        }
        if (ae.length < 1) {
            return 0
        }
        var ad = ae.substring(0, 1);
        var i = ae.substring(1, ae.length);
        if (ad == "s") {
            return i * 1000
        } else {
            if (ad == "m") {
                return i * 60 * 1000
            } else {
                if (ad == "h") {
                    return i * 60 * 60 * 1000
                } else {
                    if (ad == "d") {
                        return i * 24 * 60 * 60 * 1000
                    } else {
                        if (ad == "y") {
                            return i * 24 * 60 * 60 * 1000 * 365
                        } else {
                            return 0
                        }
                    }
                }
            }
        }
    }

    function r(ad) {
        var ad = escape(ad);
        var ae = d.cookie;
        ad += "=";
        var ah = ae.indexOf(ad);
        if (ah != -1) {
            var ag = ah + ad.length;
            var i = ae.indexOf(";", ag);
            if (i == -1) {
                i = ae.length
            }
            var af = ae.substring(ag, i);
            return af
        } else {
            return ""
        }
    }

    function x(ad) {
        var ad = escape(ad);
        var af = d.cookie;
        ad += "=";
        var ah = af.indexOf(ad);
        if (ah > -1) {
            var ag = ah + ad.length;
            var i = af.indexOf(";", ag);
            if (i == -1) {
                return false
            }
            var ae = af.indexOf(ad, i);
            if (ae > -1) {
                return true
            }
        }
        return false
    }

    Random = function () {
        return Math.round(Math.random() * 2147483647)
    };

    function z(ad) {
        var i = 1, af = 0, ae;
        if (ad) {
            for (i = 0, ae = ad.length - 1; 0 <= ae; ae--) {
                af = ad.charCodeAt(ae), i = (i << 6 & 268435455) + af + (af << 14), af = i & 266338304, i = 0 != af ? i ^ af >> 21 : i
            }
        }
        return i
    }

    function U(i) {
        if (i != null && i != "" && i != "undefined") {
            return true
        } else {
            return false
        }
    }
})(document);