/*
 * artTemplate - Template Engine
 * https://github.com/aui/artTemplate
 * Released under the MIT, BSD, and GPL Licenses
 */
var template = function (b, a) {
    return template[typeof a === "object" ? "render" : "compile"].apply(template, arguments)
};
(function (a, c) {
    a.version = "2.0.0";
    a.openTag = "<%";
    a.closeTag = "%>";
    a.isEscape = true;
    a.isCompress = false;
    a.parser = null;
    a.render = function (i, h) {
        var g = f(i);
        if (g === undefined) {
            return d({id: i, name: "Render Error", message: "No Template"})
        }
        return g(h)
    };
    a.compile = function (n, k) {
        var m = arguments;
        var h = m[2];
        var j = "anonymous";
        if (typeof k !== "string") {
            h = m[1];
            k = m[0];
            n = j
        }
        try {
            var g = b(k, h)
        } catch (l) {
            l.id = n || k;
            l.name = "Syntax Error";
            return d(l)
        }

        function i(o) {
            try {
                return new g(o) + ""
            } catch (p) {
                if (!h) {
                    return a.compile(n, k, true)(o)
                }
                p.id = n || k;
                p.name = "Render Error";
                p.source = k;
                return d(p)
            }
        }

        i.prototype = g.prototype;
        i.toString = function () {
            return g.toString()
        };
        if (n !== j) {
            e[n] = i
        }
        return i
    };
    a.helper = function (g, h) {
        a.prototype[g] = h
    };
    a.onerror = function (h) {
        var g = "[template]:\n" + h.id + "\n\n[name]:\n" + h.name;
        if (h.message) {
            g += "\n\n[message]:\n" + h.message
        }
        if (h.line) {
            g += "\n\n[line]:\n" + h.line;
            g += "\n\n[source]:\n" + h.source.split(/\n/)[h.line - 1].replace(/^[\s\t]+/, "")
        }
        if (h.temp) {
            g += "\n\n[temp]:\n" + h.temp
        }
        if (c.console) {
            console.error(g)
        }
    };
    var e = {};
    var f = function (j) {
        var g = e[j];
        if (g === undefined && "document" in c) {
            var h = document.getElementById(j);
            if (h) {
                var i = h.value || h.innerHTML;
                return a.compile(j, i.replace(/^\s*|\s*$/g, ""))
            }
        } else {
            if (e.hasOwnProperty(j)) {
                return g
            }
        }
    };
    var d = function (h) {
        a.onerror(h);

        function g() {
            return g + ""
        }

        g.toString = function () {
            return "{Template Error}"
        };
        return g
    };
    var b = (function () {
        a.prototype = {
            $render: a.render, $escape: function (l) {
                return typeof l === "string" ? l.replace(/&(?![\w#]+;)|[<>"']/g, function (m) {
                    return {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}[m]
                }) : l
            }, $string: function (l) {
                if (typeof l === "string" || typeof l === "number") {
                    return l
                } else {
                    if (typeof l === "function") {
                        return l()
                    } else {
                        return ""
                    }
                }
            }
        };
        var g = Array.prototype.forEach || function (o, m) {
            var l = this.length >>> 0;
            for (var n = 0; n < l; n++) {
                if (n in this) {
                    o.call(m, this[n], n, this)
                }
            }
        };
        var j = function (m, l) {
            g.call(m, l)
        };
        var k = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined";
        var h = new RegExp(["/\\*(.|\n)*?\\*/|//[^\n]*\n|//[^\n]*$", "'[^']*'|\"[^\"]*\"", "\\.[s\t\n]*[\\$\\w]+", "\\b" + k.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g");
        var i = function (l) {
            l = l.replace(h, ",").replace(/[^\w\$]+/g, ",").replace(/^,|^\d+|,\d+|,$/g, "");
            return l ? l.split(",") : []
        };
        return function (A, C) {
            var y = a.openTag;
            var t = a.closeTag;
            var p = a.parser;
            var m = A;
            var o = "";
            var v = 1;
            var z = {$data: true, $helpers: true, $out: true, $line: true};
            var B = a.prototype;
            var x = {};
            var s = "var $helpers=this," + (C ? "$line=0," : "");
            var F = "".trim;
            var H = F ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"];
            var r = F ? "if(content!==undefined){$out+=content;return content}" : "$out.push(content);";
            var q = "function(content){" + r + "}";
            var l = "function(id,data){if(data===undefined){data=$data}var content=$helpers.$render(id,data);" + r + "}";
            j(m.split(y), function (L, K) {
                L = L.split(t);
                var J = L[0];
                var I = L[1];
                if (L.length === 1) {
                    o += u(J)
                } else {
                    o += D(J);
                    if (I) {
                        o += u(I)
                    }
                }
            });
            m = o;
            if (C) {
                m = "try{" + m + "}catch(e){e.line=$line;throw e}"
            }
            m = "'use strict';" + s + H[0] + m + "return new String(" + H[3] + ")";
            try {
                var G = new Function("$data", m);
                G.prototype = x;
                return G
            } catch (E) {
                E.temp = "function anonymous($data) {" + m + "}";
                throw E
            }

            function u(I) {
                v += I.split(/\n/).length - 1;
                if (a.isCompress) {
                    I = I.replace(/[\n\r\t\s]+/g, " ")
                }
                I = I.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
                I = H[1] + "'" + I + "'" + H[2];
                return I + "\n"
            }

            function D(K) {
                var L = v;
                if (p) {
                    K = p(K)
                } else {
                    if (C) {
                        K = K.replace(/\n/g, function () {
                            v++;
                            return "$line=" + v + ";"
                        })
                    }
                }
                if (K.indexOf("=") === 0) {
                    var J = K.indexOf("==") !== 0;
                    K = K.replace(/^=*|[\s;]*$/g, "");
                    if (J && a.isEscape) {
                        var I = K.replace(/\s*\([^\)]+\)/, "");
                        if (!B.hasOwnProperty(I) && !/^(include|print)$/.test(I)) {
                            K = "$escape($string(" + K + "))"
                        }
                    } else {
                        K = "$string(" + K + ")"
                    }
                    K = H[1] + K + H[2]
                }
                if (C) {
                    K = "$line=" + L + ";" + K
                }
                w(K);
                return K + "\n"
            }

            function w(I) {
                I = i(I);
                j(I, function (J) {
                    if (!z.hasOwnProperty(J)) {
                        n(J);
                        z[J] = true
                    }
                })
            }

            function n(I) {
                var J;
                if (I === "print") {
                    J = q
                } else {
                    if (I === "include") {
                        x["$render"] = B["$render"];
                        J = l
                    } else {
                        J = "$data." + I;
                        if (B.hasOwnProperty(I)) {
                            x[I] = B[I];
                            if (I.indexOf("$") === 0) {
                                J = "$helpers." + I
                            } else {
                                J = J + "===undefined?$helpers." + I + ":" + J
                            }
                        }
                    }
                }
                s += I + "=" + J + ","
            }
        }
    })()
})(template, this);
if (typeof exports !== "undefined") {
    module.exports = template
}
;