!function (e) {
    if ("function" == typeof define && window.define.amd) window.define([], e); else e()
}(function () {
    window.URSCFG = {};
    window.URSOPENBGP = "{URSOPENBGPVALUE}";
    var e = {}, t = {}, i = {}, n = {}, o = [], r = 0;
    if (!Function.prototype.bind) Function.prototype.bind = function (e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), i = this, n = function () {
        }, o = function () {
            return i.apply(this instanceof n && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
        if (this.prototype) n.prototype = this.prototype;
        o.prototype = new n;
        return o
    };
    var s = function () {
        var e = navigator.userAgent.toLowerCase();
        var t = /msie/.test(e) && !/opera/.test(e);
        var i = (e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1];
        var n = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        var o = n[document.documentMode] || n[parseInt(i)];
        if (t && parseInt(o, 10) < 4) return 1; else return 0
    };
    var a = function (e, t, i) {
        if (window.addEventListener) e.addEventListener(t, i, !1); else e.attachEvent("on" + t, i)
    };
    var c = function (e, t, i) {
        if (window.removeEventListener) e.removeEventListener(t, i); else e.detachEvent("on" + t, i)
    };
    var l = function (e) {
        e = e || "";
        if ((e.indexOf("passport.") >= 0 || e.indexOf("dl.reg.163.com") >= 0 || e.indexOf("reg.icourse163.org") >= 0) && e.indexOf("/webzj") >= 0) e = e.replace(/\:\/\/[^\/]+\/webzj\//, function (e) {
            return e + "b/"
        }); else e = e.replace(/\:\/\/([^\/]+)/, function (e) {
            return e + "/b"
        });
        return e
    };
    var f = [];
    var u = function (e) {
        var t = "";
        var n = i[e];
        if (n.__coverBackground && b("animation")) t = n.__coverBackground.indexOf("background:") != -1 ? n.__coverBackground : "";
        return "position:fixed;_position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:rgb(0,0,0); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);-moz-opacity:0.6;-khtml-opacity:0.6;opacity:0.6;z-index:1000;" + t
    };
    var h = function (e, t) {
        return "position:fixed;_position:absolute;z-index:10000;left:50%;top:50%;width:" + e + "px;margin-left:-" + e / 2 + "px;height:" + t + "px;margin-top:-" + t / 2 + "px;"
    };
    var d = function (e) {
        var t = i[e];
        var n = null;
        if (t.__iframeShowAnimation) n = "-webkit-animation:" + t.__iframeShowAnimation + ";-moz-animation:" + t.__iframeShowAnimation + ";-ms-animation:" + t.__iframeShowAnimation + ";-o-animation:" + t.__iframeShowAnimation + ";animation:" + t.__iframeShowAnimation + ";";
        return "width:100%;height:100%;border:none;background:none;" + (n ? n : "")
    };
    var p = function () {
        var e = setInterval(function () {
            for (var t = 0; t < o.length; t++) if (o[t].readyDone) {
                e = clearInterval(e);
                o.shift();
                g(1);
                break
            }
        }, 200)
    };
    var g = function (e) {
        if (e || !r) {
            r = 1;
            var t = setInterval(function () {
                for (var e = 0; e < o.length; e++) if (!o[e].readyDone) {
                    t = clearInterval(t);
                    _.call(o[e]);
                    p();
                    break
                }
            }, 200)
        }
    };
    var m = function (e, t, n) {
        var r = n.id;
        var s = "x-URS-iframe" + r;
        var a = i[r];
        var c = document.getElementById(s), l = a._name || "";
        if (!c) {
            try {
                c = document.createElement('<iframe  name="' + l + '" allowTransparency=true ></iframe>')
            } catch (f) {
                c = document.createElement("iframe");
                c.allowTransparency = !0;
                c.name = l
            }
            c.frameBorder = 0;
            c.id = s;
            c.scrolling = "no";
            c.style.cssText = d(r)
        }
        if (t) e.appendChild(c); else {
            var p = 420, m = 408;
            if (a.frameSize) {
                p = a.frameSize.width;
                m = a.frameSize.height
            }
            var v = document.getElementById("x-discover" + r);
            if (!v) {
                v = document.createElement("div");
                v.id = "x-discover" + r;
                v.style.cssText = u(r)
            }
            var w = document.getElementById("x-panel" + r);
            if (!w) {
                w = document.createElement("div");
                w.id = "x-panel" + r;
                a._panel = w;
                w.style.cssText = h(p, m)
            }
            w.appendChild(c);
            e.appendChild(v);
            e.appendChild(w);
            e.style.display = "none"
        }
        if (!window.postMessage) {
            o.push(this);
            g(0)
        }
    };
    var v = function () {
        var e = window.URSCFG[this.MGID];
        this._url_cache = this._url_cache.replace("webzj.reg.163.com", "webzj2.reg.163.com");
        if (e._$passportNeedUrsBgp) this._url_cache = this._url_cache.replace("passport.", "passport2.").replace("reg.icourse163.org", "reg2.icourse163.org").replace("dl.reg.163.com", "dl2.reg.163.com");
        if (this._urs_options.wdaId) this._url_cache = this._url_cache.replace(/wdaId=([^&]+)/, "wdaId=UA1482833332087")
    };
    var w = function (e) {
        var t = "x-URS-iframe" + this.MGID;
        var i = document.getElementById(t);
        if (this._urs_options && this._urs_options.afterSetIframeSrc) this._urs_options.afterSetIframeSrc(i);
        if ("{URSOPENBGPVALUE}" != window.URSOPENBGP) v.call(this);
        window.setTimeout(function () {
            this.__loadTime = (new Date).getTime();
            if (i) i.src = this._url_cache
        }.bind(this), 0);
        if (e !== -1) {
            this.sto = clearTimeout(this.sto);
            var n = window.URSCFG[this.MGID];
            if (n._$needUrsBgp && "{URSOPENBGPVALUE}" === window.URSOPENBGP) if (1 != e) {
                this.sto = setTimeout(function () {
                    this.sto = clearTimeout(this.sto);
                    v.call(this);
                    w.call(this, 1)
                }.bind(this), this._urs_options.bgpTime);
                return
            }
            this.sto = setTimeout(function () {
                this.sto = clearTimeout(this.sto);
                var e = location.href || "";
                e = e.substring(0, 200);
                e = encodeURIComponent(e);
                this._url_cache = "//hc.reg.163.com/webcomponent/guide.html?pkid=" + this._urs_options.promark + "&pd=" + this._urs_options.product + "&time=" + (new Date).getTime() + "_" + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(function () {
                    return Math.random() > .5 ? 1 : -1
                }).join("") + "&from=" + e;
                w.call(this, -1)
            }.bind(this), this._urs_options.bgpTime)
        }
    };
    var b = function (e) {
        var t = ["webkit", "Moz", "ms", "o"], i, n = [], o = document.documentElement.style, r = function (e) {
            return e.replace(/-(\w)/g, function (e, t) {
                return t.toUpperCase()
            })
        };
        for (i in t) n.push(r(t[i] + "-" + e));
        n.push(r(e));
        for (i in n) if (n[i] in o) return !0;
        return !1
    };
    var y = function (e, t) {
        var i = document.getElementById("x-URS-iframe" + e);
        var n = window.name || "_parent";
        var o = {};
        o.data = t;
        o.data.from = "URS|";
        o.data.topURL = location.href || "";
        o.origin = "*";
        o.source = n;
        o.data.mv = "new_cdn_101_190620";
        o.data.loadTime = (new Date).getTime() - this.__loadTime;
        if (i) M(i.contentWindow, o)
    };
    var _ = function () {
        y.call(this, this.MGID, this._urs_options)
    };
    var S = function () {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1; else return "*"
        }
    }();
    var I = function (e, t) {
        try {
            t = t.toLowerCase();
            if (null === e) return "null" == t;
            if (void 0 === e) return "undefined" == t; else return Object.prototype.toString.call(e).toLowerCase() == "[object " + t + "]"
        } catch (i) {
            return !1
        }
    };
    var k = function (e, t, i) {
        if (!e) return "";
        var n = [];
        for (var o in e) if (e.hasOwnProperty(o)) {
            var r = e[o];
            if (r) if (!I(r, "function")) {
                if (I(r, "date")) r = r.getTime(); else if (I(r, "array")) r = r.join(","); else if (I(r, "object")) r = JSON.stringify(r);
                if (i) r = encodeURIComponent(r);
                n.push(encodeURIComponent(o) + "=" + r)
            } else ; else ;
        } else ;
        return n.join(t || ",")
    };
    var M = function () {
        var e = "MSG|";
        var t = function (t) {
            var i = {};
            t = t || {};
            i.origin = t.origin || "";
            i.ref = location.href;
            i.self = t.source;
            i.data = JSON.stringify(t.data);
            return e + k(i, "|", !0)
        };
        return function (e, i) {
            if (window.postMessage) {
                i = i || {};
                e.postMessage(JSON.stringify(i.data), S(i.origin))
            } else f.unshift({w: e, d: escape(t(i))})
        }
    }();
    var U = function () {
        var e = navigator.appName;
        if ("Netscape" == e) {
            var t = window.open("about:blank", "_self");
            t.opener = null;
            t.close()
        } else if ("Microsoft Internet Explorer" == e) {
            window.opener = null;
            window.open("", "_self");
            window.close()
        }
    };
    var C = function (e, t) {
        var i;
        var n = 0 != e.isHttps ? "https://" : "http://";
        if (e.cssDomain && e.cssFiles) if (e.cssDomain.indexOf("http://") != -1) n = "http://";
        if (3 == e.version) {
            i = "index2.html";
            if (e.single) {
                i = "index_dl2.html";
                if ("register" == e.page) i = "index_reg2.html"
            }
        } else {
            i = "index.html";
            if (e.single) {
                i = "index_dl.html";
                if ("register" == e.page) i = "index_reg.html"
            }
        }
        if ("1" == e.newCDN) i = i.replace(".html", "_new.html");
        var o = e.crossDomainUrl || "webzj.reg.163.com/v1.0.1/pub/";
        this._url_cache = n + o + i;
        var r = parseInt(1e3 * Math.random());
        e.pathB = 0;
        var s = window.URSCFG[e.promark];
        if (s) if (r <= s) e.pathB = 1;
        if (e.pathB) this._url_cache = l(this._url_cache);
        if (t.__cssStr) this._url_cache += "?" + t.__cssStr + "&MGID=" + this.MGID + "&wdaId=" + (e.wdaId || ""); else this._url_cache += "?MGID=" + this.MGID + "&wdaId=" + (e.wdaId || "");
        this._urs_options = e || {};
        this._urs_options.bgpTime = e.bgpTime || 1e4;
        this._url_cache += "&pkid=" + (this._urs_options.promark || "") + "&product=" + (this._urs_options.product || "");
        return this._url_cache
    };
    window.URS = function () {
        var o = function () {
            var e = (new Date).getTime() + Math.random();
            if (!n[e]) {
                n[e] = e;
                return e
            } else return o()
        };
        var r = function (e) {
            var t = e.cookieDomain || "";
            var i = e.regCookieDomain || "";
            var n = e.crossDomainUrl || "";
            var o;
            if (!n) {
                if (t) {
                    e.regCookieDomain = t;
                    o = t
                } else if (i) {
                    e.cookieDomain = i;
                    o = i
                }
                if (o) if (o.indexOf("icourse163") > -1) e.crossDomainUrl = "reg." + o + "/webzj/v1.0.1/pub/"; else e.crossDomainUrl = "passport." + o + "/webzj/v1.0.1/pub/"; else e.crossDomainUrl = "dl.reg.163.com/webzj/v1.0.1/pub/"
            }
            return e
        };
        var l = function (e) {
            this.MGID = o();
            window.URSCFG[this.MGID] = {};
            var t = window.URSCFG[this.MGID];
            e.from3Cdn = 1;
            if (e.from3Cdn && 3 == e.version) e = r.call(this, e);
            if (s()) e.needUrsBgp = 0;
            if ("0" == e.needUrsBgp) {
                e.passportNeedUrsBgp = 0;
                t._$needUrsBgp = 0;
                t._$passportNeedUrsBgp = 0
            } else {
                if (e.crossDomainUrl || e.cookieDomain) {
                    t._$passportNeedUrsBgp = 1;
                    e.passportNeedUrsBgp = 1
                }
                t._$needUrsBgp = 1;
                e.needUrsBgp = 1
            }
            i[this.MGID] = {};
            this._$COM_NUM = 1 == this._$COM_NUM ? 1 : 2;
            var n = i[this.MGID];
            n.promark = e.promark;
            n.frameSize = e.frameSize;
            n.__coverBackground = e.coverBackground;
            n.__iframeShowAnimation = e.iframeShowAnimation;
            if (e.cssDomain && e.cssFiles) n.__cssStr = "cd=" + encodeURIComponent(e.cssDomain) + "&cf=" + encodeURIComponent(e.cssFiles);
            this.isInclude = 0;
            if (e.includeBox) if ("string" == typeof e.includeBox) this.isInclude = document.getElementById(e.includeBox) || 0; else this.isInclude = e.includeBox;
            n.needPrepare = e.needPrepare || 0;
            if ("string" == typeof e.eventType) this._type = e.eventType;
            if ("string" == typeof e.bid) this._btn = document.getElementById(e.bid); else this._btn = e.bid;
            if (e.logincb) this.logincb = e.logincb;
            if (e.closecb) this.closecb = e.closecb;
            if (e.regcb) this.regcb = e.regcb;
            if (e.loginCheckLock) this.loginCheckLock = e.loginCheckLock;
            if (e.regCheckLock) this.regCheckLock = e.regCheckLock;
            if (e.initReady) this.initReady = e.initReady;
            if (e.statecb) this.statecb = e.statecb;
            if (e.resize) this.resize = e.resize;
            if (e.changepage) this.changepage = e.changepage;
            if (e.moduleResize) this.moduleResize = e.moduleResize;
            if (e.loginstate) this.loginstate = e.loginstate;
            if (e.otherRegSuccess) this.otherRegSuccess = e.otherRegSuccess;
            if (e.lockMbLoginState) this.lockMbLoginState = e.lockMbLoginState;
            if (e.lockMbRegState) this.lockMbRegState = e.lockMbRegState;
            if (e.mbInitSuccess) this.mbInitSuccess = e.mbInitSuccess;
            if (e.mbChangeModule) this.mbChangeModule = e.mbChangeModule;
            if (e.loginInitSuccess) this.loginInitSuccess = e.loginInitSuccess;
            if (e.regInitSuccess) this.regInitSuccess = e.regInitSuccess;
            if (e.renderOk) this.renderOk = e.renderOk;
            if (e.WeiXinInputBlur) this.WeiXinInputBlur = e.WeiXinInputBlur;
            var c = document.createElement("div");
            c.id = "x-URS" + this.MGID;
            document.body.appendChild(c);
            this.box = c;
            this._url_cache = C.call(this, e, n);
            try {
                JSON.stringify(this._urs_options)
            } catch (l) {
                return null
            }
            if (!this.isInclude) {
                if (this._btn && this._type) a(this._btn, this._type, this.showIframe.bind(this))
            } else this.includeBox = this.isInclude
        };
        var u = function (e) {
            if (e) e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        };
        var h = function (t) {
            u(t);
            var i = t.data || "{}";
            if ("string" == typeof i) try {
                i = JSON.parse(i)
            } catch (n) {
                i = {}
            }
            if (e[i.MGID]) e[i.MGID]({data: i, origin: S(t.origin)})
        };
        var d = function (e) {
            var n = e.data, o, r, s;
            if (n) {
                if ("string" == typeof n) try {
                    n = JSON.parse(n)
                } catch (a) {
                    n = {}
                }
                if (n.MGID) {
                    o = t[n.MGID];
                    r = i[n.MGID];
                    if (o.isInclude) s = o.includeBox; else s = r._panel;
                    if (n["URS-READY-DONE"]) {
                        o.readyDone = 1;
                        o.sto = clearTimeout(o.sto);
                        if (o.initReady) o.initReady()
                    }
                    if (n["URS-READY"]) {
                        o.sto = clearTimeout(o.sto);
                        o.ursReady = 1
                    }
                    if (!window.postMessage || !n["URS-READY"] || !o.isInclude && r.needPrepare) {
                        if (n["URS-READY"] && !r._initReady) r._initReady = !0;
                        if (!n["URS-CM-STATE"]) if (!n || !n.fromOutLogin || n.toOpener) {
                            if ("WeiXinInputBlur" === n.type) {
                                if (o.WeiXinInputBlur) o.WeiXinInputBlur()
                            } else if ("renderOk" == n.type) {
                                if (o.renderOk) o.renderOk(n)
                            } else if ("moduleResize" == n.type) {
                                if (o.moduleResize) o.moduleResize(n)
                            } else if ("regInitSuccess" == n.type) {
                                if (o.regInitSuccess) o.regInitSuccess()
                            } else if ("loginInitSuccess" == n.type) {
                                if (o.loginInitSuccess) o.loginInitSuccess()
                            } else if ("mbChangeModule" == n.type) {
                                if (o.mbChangeModule) o.mbChangeModule()
                            } else if ("mbInitSuccess" == n.type) {
                                if (o.mbInitSuccess) o.mbInitSuccess()
                            } else if ("lockMbLoginState" == n.type) {
                                if (o.lockMbLoginState) o.lockMbLoginState(n)
                            } else if ("lockMbRegState" == n.type) {
                                if (o.lockMbRegState) o.lockMbRegState(n)
                            } else if ("otherRegSuccess" == n.type) {
                                if (o.otherRegSuccess) o.otherRegSuccess(n)
                            } else if ("success" == n.type) {
                                if (o.logincb) o.logincb(n["username"], n["isOther"], n);
                                if (!this.isInclude) {
                                    if (o._btn && o._type) c(o._btn, o._type, o.showIframe.bind(o));
                                    o.closeIframe()
                                }
                            } else if ("close" == n.type) {
                                if (o.closecb) o.closecb();
                                o.closeIframe()
                            } else if ("resize" == n.type || "init" == n.type) {
                                s.style.width = n.width + "px";
                                s.style.height = n.height + "px";
                                if (!o.isInclude) s.style.marginLeft = -1 * n.width / 2 + "px";
                                if (o.resize) o.resize(n)
                            } else if ("register-success" == n.type) {
                                if (o.regcb) o.regcb(n["username"], n["url"])
                            } else if ("lockLoginState" == n.type) {
                                if (o.loginCheckLock) o.loginCheckLock(n.value)
                            } else if ("lockRegState" == n.type) {
                                if (o.regCheckLock) o.regCheckLock(n.value)
                            } else if ("changepage" == n.type) {
                                if (o.changepage) o.changepage(n.page)
                            } else if ("loginstate" == n.type) if (o.loginstate) o.loginstate(n)
                        } else {
                            try {
                                window.opener.$outLogin(n)
                            } catch (a) {
                            }
                            setTimeout(function () {
                                U()
                            }, 200)
                        } else if (o.statecb) o.statecb(n["URS-CM-STATENAME"], n["URS-CM-STATE"])
                    } else _.call(o)
                }
            }
        };
        var p = function () {
            var e = "MSG|";
            var t = function (e, t) {
                var i = I(t, "function") ? t : function (e) {
                    return e === t
                }, n = null;
                for (var o = 0, r = e.length - 1, s; o < r; o++) {
                    s = e[o];
                    if (i(s)) n = o
                }
                return null != n ? n : -1
            };
            var i = function () {
                var e;
                var i = function (i, n, o) {
                    if (t(e, i.w) < 0) {
                        e.push(i.w);
                        o.splice(n, 1);
                        i.w.name = i.d
                    }
                };
                return function () {
                    e = [];
                    if (f && f.length) for (var t = f.length, n; t--; t >= 0) {
                        n = f[t];
                        i(n, t, f)
                    }
                    e = null
                }
            }();
            var n = function () {
                var t = unescape(window.name || "");
                if (t && 0 == t.indexOf(e)) {
                    window.name = "";
                    var i = t.replace(e, ""), n = i.split("|"), o = n.length, r = {};
                    for (var s = 0; s < o; s++) {
                        var a = n[s].split("=");
                        if (!a || !a.length) return;
                        var c = a.shift();
                        if (!c) return;
                        r[decodeURIComponent(c)] = decodeURIComponent(a.join("="))
                    }
                    i = r;
                    var l = (i.origin || "").toLowerCase();
                    if (!l || "*" == l || 0 == location.href.toLowerCase().indexOf(l)) d({
                        data: i.data || "null",
                        origin: S(i.ref || document.referrer)
                    })
                }
            };
            return function () {
                setInterval(i, 100);
                setInterval(n, 20)
            }
        }();
        var g = function () {
            if (!window.__hasRun) {
                if (window.postMessage) a(window, "message", h); else p();
                window.__hasRun = 1
            }
        };
        return function (n) {
            l.call(this, n);
            var o = i[this.MGID];
            if (o.needPrepare || this.isInclude) this.prepareIframe();
            e[this.MGID] = d.bind(this);
            t[this.MGID] = this;
            return g()
        }
    }();
    window.URS.prototype.prepareIframe = function () {
        if (this.isInclude) {
            m.call(this, this.includeBox, 1, {id: this.MGID});
            w.call(this);
            this.showIframe()
        } else {
            m.call(this, this.box, 0, {id: this.MGID});
            w.call(this)
        }
    };
    window.URS.prototype.showIframe = function (e) {
        var t = i[this.MGID];
        if (!this.isInclude) if (!t.needPrepare) {
            m.call(this, this.box, 0, {id: this.MGID});
            w.call(this)
        } else if (!t._initReady) return;
        e = e || {};
        if (e.page) {
            if (100 * Math.random() <= 1) try {
                var n = "//webzj.reg.163.com/UA1435545636633/__utm.gif?log=usepage&pd=" + this._urs_options.product || "";
                var o = document.createElement("img");
                o.style.position = "absolute";
                o.style.width = "0px";
                o.style.height = "0px";
                document.body.appendChild(o);
                o.src = n;
                setTimeout(function () {
                    document.body.appendChild(o)
                }, 1e4)
            } catch (r) {
            }
            if (e.page != this._urs_options.page && this._urs_options.single) {
                this._urs_options.page = e.page;
                this._url_cache = C.call(this, this._urs_options, t)
            }
            w.call(this)
        }
        if (t.needPrepare && !this.isInclude) _.call(this);
        this.box.style.display = "block";
        if (this._urs_options.afterShow) this._urs_options.afterShow.call(this)
    };
    window.URS.prototype.closeIframe = function () {
        var e = i[this.MGID];
        if (!this.isInclude) {
            this.box.style.display = "none";
            if (this.sto) this.sto = clearTimeout(this.sto);
            if (!e.needPrepare) {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    var t = document.getElementById("x-URS-iframe" + this.MGID), n = t.contentWindow;
                    if (t) {
                        t.src = "about:blank";
                        try {
                            n.document.write("");
                            n.document.clear()
                        } catch (o) {
                        }
                    }
                    var r = document.getElementById("x-panel" + this.MGID);
                    r.removeChild(t);
                    window.CollectGarbage()
                }
                this.box.innerHTML = ""
            }
        } else ;
    };
    window.URS.prototype.loginUnlock = function () {
        var e = {fromLoginLock: 1, lock: 0};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.loginDolock = function () {
        var e = {fromLoginLock: 1, lock: 1};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.regUnlock = function () {
        var e = {fromRegLock: 1, lock: 0};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.regDolock = function () {
        var e = {fromRegLock: 1, lock: 1};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.doLoginProxy = function (e) {
        var t = {username: e.username, pwd: e.pwd, defaultUnLogin: e.defaultUnLogin, doLoginProxy: 1};
        y.call(this, this.MGID, t)
    };
    window.URS.prototype.loginUnlockMb = function () {
        var e = {fromLoginLockMb: 1, lock: 0};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.loginDolockMb = function () {
        var e = {fromLoginLockMb: 1, lock: 1};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.regUnlockMb = function () {
        var e = {fromRegLockMb: 1, lock: 0};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.regDolockMb = function () {
        var e = {fromRegLockMb: 1, lock: 1};
        y.call(this, this.MGID, e)
    };
    window.URS.prototype.getIframeSize = function () {
        var e = {getIframeSize: 1};
        y.call(this, this.MGID, e)
    };
    window.URS.setPkidAndPd = function () {
        var e = {};
        var t = function (t) {
            var i, n;
            if (t && t.lgs) {
                i = t.lgs;
                n = t.pkid;
                window.URSCFG[n] = parseInt(i);
                e[n] && e[n](n)
            }
        };
        var i = function (e) {
            var i = e.pkid || "";
            var n = e.pd || "";
            var o;
            if (void 0 === e.mode) o = "3"; else o = e.mode;
            if ("3" != o && "0" != o) {
                var r = "URSJSONP" + (new Date).getTime();
                window[r] = t;
                var s = "//dl.reg.163.com/getConf?callback=" + r + "&pkid=" + i + "&pd=" + n + "&mode=" + o;
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.id = "urs-script-" + r;
                a.src = s;
                document.getElementsByTagName("head")[0].appendChild(a);
                setTimeout(function () {
                    document.getElementsByTagName("head")[0].removeChild(a)
                }, 5e3)
            }
        };
        return function (t) {
            t = t || {};
            var n = t.pkid || "";
            if ("function" == typeof t.pathbCallback) e[n] = t.pathbCallback;
            i(t)
        }
    }();
    return window.URS
});
(function () {
    function e(t, n) {
        function r(e) {
            if (r[e] !== v) return r[e];
            var t;
            if ("bug-string-char-index" == e) t = "a" != "a"[0]; else if ("json" == e) t = r("json-stringify") && r("json-parse"); else {
                var i;
                if ("json-stringify" == e) {
                    t = n.stringify;
                    var o = "function" == typeof t && w;
                    if (o) {
                        (i = function () {
                            return 1
                        }).toJSON = i;
                        try {
                            o = "0" === t(0) && "0" === t(new s) && '""' == t(new a) && t(p) === v && t(v) === v && t() === v && "1" === t(i) && "[1]" == t([i]) && "[null]" == t([v]) && "null" == t(null) && "[null,null,null]" == t([v, p, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({a: [i, !0, !1, null, "\0\b\n\f\r\t"]}) && "1" === t(null, i) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new l((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == t(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new l((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == t(new l((-1)))
                        } catch (c) {
                            o = !1
                        }
                    }
                    t = o
                }
                if ("json-parse" == e) {
                    t = n.parse;
                    if ("function" == typeof t) try {
                        if (0 === t("0") && !t(!1)) {
                            i = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var f = 5 == i.a.length && 1 === i.a[0];
                            if (f) {
                                try {
                                    f = !t('"\t"')
                                } catch (u) {
                                }
                                if (f) try {
                                    f = 1 !== t("01")
                                } catch (h) {
                                }
                                if (f) try {
                                    f = 1 !== t("1.")
                                } catch (d) {
                                }
                            }
                        }
                    } catch (g) {
                        f = !1
                    }
                    t = f
                }
            }
            return r[e] = !!t
        }

        t || (t = o.Object());
        n || (n = o.Object());
        var s = t.Number || o.Number, a = t.String || o.String, c = t.Object || o.Object, l = t.Date || o.Date,
            f = t.SyntaxError || o.SyntaxError, u = t.TypeError || o.TypeError, h = t.Math || o.Math,
            d = t.JSON || o.JSON;
        "object" == typeof d && d && (n.stringify = d.stringify, n.parse = d.parse);
        var c = c.prototype, p = c.toString, g, m, v, w = new l((-0xc782b5b800cec));
        try {
            w = -109252 == w.getUTCFullYear() && 0 === w.getUTCMonth() && 1 === w.getUTCDate() && 10 == w.getUTCHours() && 37 == w.getUTCMinutes() && 6 == w.getUTCSeconds() && 708 == w.getUTCMilliseconds()
        } catch (b) {
        }
        if (!r("json")) {
            var y = r("bug-string-char-index");
            if (!w) var _ = h.floor, S = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], I = function (e, t) {
                return S[t] + 365 * (e - 1970) + _((e - 1969 + (t = +(1 < t))) / 4) - _((e - 1901 + t) / 100) + _((e - 1601 + t) / 400)
            };
            (g = c.hasOwnProperty) || (g = function (e) {
                var t = {}, i;
                (t.__proto__ = null, t.__proto__ = {toString: 1}, t).toString != p ? g = function (e) {
                    var t = this.__proto__;
                    e = e in (this.__proto__ = null, this);
                    this.__proto__ = t;
                    return e
                } : (i = t.constructor, g = function (e) {
                    var t = (this.constructor || i).prototype;
                    return e in this && !(e in t && this[e] === t[e])
                });
                t = null;
                return g.call(this, e)
            });
            m = function (e, t) {
                var n = 0, o, r, s;
                (o = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                r = new o;
                for (s in r) g.call(r, s) && n++;
                o = r = null;
                n ? m = 2 == n ? function (e, t) {
                    var i = {}, n = "[object Function]" == p.call(e), o;
                    for (o in e) n && "prototype" == o || g.call(i, o) || !(i[o] = 1) || !g.call(e, o) || t(o)
                } : function (e, t) {
                    var i = "[object Function]" == p.call(e), n, o;
                    for (n in e) i && "prototype" == n || !g.call(e, n) || (o = "constructor" === n) || t(n);
                    (o || g.call(e, n = "constructor")) && t(n)
                } : (r = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), m = function (e, t) {
                    var n = "[object Function]" == p.call(e), o,
                        s = !n && "function" != typeof e.constructor && i[typeof e.hasOwnProperty] && e.hasOwnProperty || g;
                    for (o in e) n && "prototype" == o || !s.call(e, o) || t(o);
                    for (n = r.length; o = r[--n]; s.call(e, o) && t(o)) ;
                });
                return m(e, t)
            };
            if (!r("json-stringify")) {
                var k = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    M = function (e, t) {
                        return ("000000" + (t || 0)).slice(-e)
                    }, U = function (e) {
                        for (var t = '"', i = 0, n = e.length, o = !y || 10 < n, r = o && (y ? e.split("") : e); i < n; i++) {
                            var s = e.charCodeAt(i);
                            switch (s) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += k[s];
                                    break;
                                default:
                                    if (32 > s) {
                                        t += "\\u00" + M(2, s.toString(16));
                                        break
                                    }
                                    t += o ? r[i] : e.charAt(i)
                            }
                        }
                        return t + '"'
                    }, C = function (e, t, i, n, o, r, s) {
                        var a, c, l, f, h, d, w, b, y;
                        try {
                            a = t[e]
                        } catch (S) {
                        }
                        if ("object" == typeof a && a) if (c = p.call(a), "[object Date]" != c || g.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != c && "[object String]" != c && "[object Array]" != c || g.call(a, "toJSON")) && (a = a.toJSON(e)); else if (a > -1 / 0 && a < 1 / 0) {
                            if (I) {
                                f = _(a / 864e5);
                                for (c = _(f / 365.2425) + 1970 - 1; I(c + 1, 0) <= f; c++) ;
                                for (l = _((f - I(c, 0)) / 30.42); I(c, l + 1) <= f; l++) ;
                                f = 1 + f - I(c, l);
                                h = (a % 864e5 + 864e5) % 864e5;
                                d = _(h / 36e5) % 24;
                                w = _(h / 6e4) % 60;
                                b = _(h / 1e3) % 60;
                                h %= 1e3
                            } else c = a.getUTCFullYear(), l = a.getUTCMonth(), f = a.getUTCDate(), d = a.getUTCHours(), w = a.getUTCMinutes(), b = a.getUTCSeconds(), h = a.getUTCMilliseconds();
                            a = (0 >= c || 1e4 <= c ? (0 > c ? "-" : "+") + M(6, 0 > c ? -c : c) : M(4, c)) + "-" + M(2, l + 1) + "-" + M(2, f) + "T" + M(2, d) + ":" + M(2, w) + ":" + M(2, b) + "." + M(3, h) + "Z"
                        } else a = null;
                        i && (a = i.call(t, e, a));
                        if (null === a) return "null";
                        c = p.call(a);
                        if ("[object Boolean]" == c) return "" + a;
                        if ("[object Number]" == c) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                        if ("[object String]" == c) return U("" + a);
                        if ("object" == typeof a) {
                            for (e = s.length; e--;) if (s[e] === a) throw u();
                            s.push(a);
                            y = [];
                            t = r;
                            r += o;
                            if ("[object Array]" == c) {
                                l = 0;
                                for (e = a.length; l < e; l++) c = C(l, a, i, n, o, r, s), y.push(c === v ? "null" : c);
                                e = y.length ? o ? "[\n" + r + y.join(",\n" + r) + "\n" + t + "]" : "[" + y.join(",") + "]" : "[]"
                            } else m(n || a, function (e) {
                                var t = C(e, a, i, n, o, r, s);
                                t !== v && y.push(U(e) + ":" + (o ? " " : "") + t)
                            }), e = y.length ? o ? "{\n" + r + y.join(",\n" + r) + "\n" + t + "}" : "{" + y.join(",") + "}" : "{}";
                            s.pop();
                            return e
                        }
                    };
                n.stringify = function (e, t, n) {
                    var o, r, s, a;
                    if (i[typeof t] && t) if ("[object Function]" == (a = p.call(t))) r = t; else if ("[object Array]" == a) {
                        s = {};
                        for (var c = 0, l = t.length, f; c < l; f = t[c++], (a = p.call(f), "[object String]" == a || "[object Number]" == a) && (s[f] = 1)) ;
                    }
                    if (n) if ("[object Number]" == (a = p.call(n))) {
                        if (0 < (n -= n % 1)) for (o = "", 10 < n && (n = 10); o.length < n; o += " ") ;
                    } else "[object String]" == a && (o = 10 >= n.length ? n : n.slice(0, 10));
                    return C("", (f = {}, f[""] = e, f), r, s, o, "", [])
                }
            }
            if (!r("json-parse")) {
                var R = a.fromCharCode,
                    D = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, x, T,
                    O = function () {
                        x = T = null;
                        throw f()
                    }, j = function () {
                        for (var e = T, t = e.length, i, n, o, r, s; x < t;) switch (s = e.charCodeAt(x), s) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                x++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return i = y ? e.charAt(x) : e[x], x++, i;
                            case 34:
                                i = "@";
                                for (x++; x < t;) if (s = e.charCodeAt(x), 32 > s) O(); else if (92 == s) switch (s = e.charCodeAt(++x), s) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        i += D[s];
                                        x++;
                                        break;
                                    case 117:
                                        n = ++x;
                                        for (o = x + 4; x < o; x++) s = e.charCodeAt(x), 48 <= s && 57 >= s || 97 <= s && 102 >= s || 65 <= s && 70 >= s || O();
                                        i += R("0x" + e.slice(n, x));
                                        break;
                                    default:
                                        O()
                                } else {
                                    if (34 == s) break;
                                    s = e.charCodeAt(x);
                                    for (n = x; 32 <= s && 92 != s && 34 != s;) s = e.charCodeAt(++x);
                                    i += e.slice(n, x)
                                }
                                if (34 == e.charCodeAt(x)) return x++, i;
                                O();
                            default:
                                n = x;
                                45 == s && (r = !0, s = e.charCodeAt(++x));
                                if (48 <= s && 57 >= s) {
                                    for (48 == s && (s = e.charCodeAt(x + 1), 48 <= s && 57 >= s) && O(); x < t && (s = e.charCodeAt(x), 48 <= s && 57 >= s); x++) ;
                                    if (46 == e.charCodeAt(x)) {
                                        for (o = ++x; o < t && (s = e.charCodeAt(o), 48 <= s && 57 >= s); o++) ;
                                        o == x && O();
                                        x = o
                                    }
                                    s = e.charCodeAt(x);
                                    if (101 == s || 69 == s) {
                                        s = e.charCodeAt(++x);
                                        43 != s && 45 != s || x++;
                                        for (o = x; o < t && (s = e.charCodeAt(o), 48 <= s && 57 >= s); o++) ;
                                        o == x && O();
                                        x = o
                                    }
                                    return +e.slice(n, x)
                                }
                                r && O();
                                if ("true" == e.slice(x, x + 4)) return x += 4, !0;
                                if ("false" == e.slice(x, x + 5)) return x += 5, !1;
                                if ("null" == e.slice(x, x + 4)) return x += 4, null;
                                O()
                        }
                        return "$"
                    }, G = function (e) {
                        var t, i;
                        "$" == e && O();
                        if ("string" == typeof e) {
                            if ("@" == (y ? e.charAt(0) : e[0])) return e.slice(1);
                            if ("[" == e) {
                                for (t = []; ; i || (i = !0)) {
                                    e = j();
                                    if ("]" == e) break;
                                    i && ("," == e ? (e = j(), "]" == e && O()) : O());
                                    "," == e && O();
                                    t.push(G(e))
                                }
                                return t
                            }
                            if ("{" == e) {
                                for (t = {}; ; i || (i = !0)) {
                                    e = j();
                                    if ("}" == e) break;
                                    i && ("," == e ? (e = j(), "}" == e && O()) : O());
                                    "," != e && "string" == typeof e && "@" == (y ? e.charAt(0) : e[0]) && ":" == j() || O();
                                    t[e.slice(1)] = G(j())
                                }
                                return t
                            }
                            O()
                        }
                        return e
                    }, B = function (e, t, i) {
                        i = E(e, t, i);
                        i === v ? delete e[t] : e[t] = i
                    }, E = function (e, t, i) {
                        var n = e[t], o;
                        if ("object" == typeof n && n) if ("[object Array]" == p.call(n)) for (o = n.length; o--;) B(n, o, i); else m(n, function (e) {
                            B(n, e, i)
                        });
                        return i.call(e, t, n)
                    };
                n.parse = function (e, t) {
                    var i, n;
                    x = 0;
                    T = "" + e;
                    i = G(j());
                    "$" != j() && O();
                    x = T = null;
                    return t && "[object Function]" == p.call(t) ? E((n = {}, n[""] = i, n), "", t) : i
                }
            }
        }
        n.runInContext = e;
        return n
    }

    var t = "function" == typeof define && define.amd, i = {"function": !0, object: !0},
        n = i[typeof exports] && exports && !exports.nodeType && exports, o = i[typeof window] && window || this,
        r = n && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    !r || r.global !== r && r.window !== r && r.self !== r || (o = r);
    if (n && !t) e(o, n); else {
        var s = o.JSON, a = o.JSON3, c = !1, l = e(o, o.JSON3 = {
            noConflict: function () {
                c || (c = !0, o.JSON = s, o.JSON3 = a, s = a = null);
                return l
            }
        });
        o.JSON = {parse: l.parse, stringify: l.stringify}
    }
    t && define("URS-JSON3", function () {
        return l
    })
}).call(this);