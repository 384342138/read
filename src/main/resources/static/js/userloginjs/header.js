(function () {
    var s = "搜索数十万好书，订阅源";
    YD.Header = {};
    YD.Header.tabs = {yc: "yuanchuang", ts: "tushu"};
    var l = function () {
        location.reload()
    };
    YD.Header.testIE6 = (function () {
        return {
            detect: function () {
                if (jQuery.browser.msie) {
                    if (jQuery.browser.version === "6.0") {
                        jQuery(".m-tips").addClass("m-tips-1");
                        jQuery.getScript("/assets/js/pngfix.js", function () {
                            DD_belatedPNG.fix(".png")
                        });
                        jQuery.getScript("/js/ie6unsupport.js", function () {
                        });
                        $("#J_FIXED").css({position: "absolute", top: 57, left: 0});
                        $(window).scroll(function () {
                            $("#J_FIXED").css({top: ($(document).scrollTop() + 57)});
                            $("#J_QRAll").css({top: ($(document).scrollTop() + 250)})
                        });
                        $(window).resize(function () {
                            $("#J_FIXED").css({top: ($(document).scrollTop() + 57)});
                            $("#J_QRAll").css({top: ($(document).scrollTop() + 250)})
                        });
                        a()
                    }
                }
            }
        }
    })();
    var i = function (z) {
        var x = $('<div id="eptTip" style="display:none;" class="m-layer m-layer-3"></div>');
        x.html('						<div class="lytt yy"><h4></h4><a href="#" class="lyclose j-close">关闭</a></div>						<div class="lyct">							<div class="m-actip">								<h3>搜索内容不能为空</h3>								<a href="#" class="btn j-close">我知道了</a>							</div>						</div>						<div class="lybt">							<button class="j-close">我知道了</button>						</div>');
        var y = $(z);
        $(y.prop("form")).bind("submit", function (B) {
            var A = $.trim(y.val());
            if (A.length === 0 || A == s) {
                B.preventDefault();
                return
            }
        })
    };
    var h = function (z, A) {
        var z = $(z), y = $(A), x = false;
        if (z.hasClass("name")) {
            var B = z.offset().left - $(".m-topbar .inner").offset().left - y.width() / 2;
            y.css("left", B + 40)
        }
        z.mouseenter(function () {
            x = true;
            y.toggle()
        });
        z.mouseleave(function () {
            x = false;
            var C = setTimeout(function () {
                if (!x) {
                    if (y.css("display") !== "none") {
                        y.toggle()
                    }
                }
            }, 500)
        });
        y.mouseenter(function () {
            x = true
        });
        y.mouseleave(function () {
            x = false;
            y.toggle()
        })
    };
    var d = function () {
        if ($("#J_Message").length === 0) {
            return false
        }
        var J = $("#J_Message"), H = $("#J_MsgDot"), B = $("#J_MessageList"), x = $("#J_CheckSX"), I = $("#J_CheckPL"),
            L = $("#J_CheckFS"), M, D = "", F, G, y, E, C = false;
        var K = function (Q, N) {
            var P = Q;
            if (P.length > N) {
                var O = P.slice(0, N) + ".."
            } else {
                var O = P
            }
            return O
        };
        var A = function (N) {
            $.ajax({
                type: "GET", url: "/snsRemind.do?operation=remindUnread", dataType: "json", success: function (Q) {
                    if (Q.resultCode === 0) {
                        M = Q.follower + Q.privateMessage + Q.comment;
                        if (Q.privateMessage > 0) {
                            x.text("(" + Q.privateMessage + ")")
                        }
                        if (Q.comment > 0) {
                            I.text("(" + Q.comment + ")")
                        }
                        if (Q.follower > 0) {
                            if (Q.follower > 99) {
                                L.text("(99+)")
                            } else {
                                L.text("(" + Q.follower + ")")
                            }
                        }
                        if (!N) {
                            var O = J.offset().left, P = B.width();
                            B.find("b").css("left", B.width() / 2 + 7);
                            B.css({left: (O - $(".m-topbar .inner").offset().left - P / 2)}).show()
                        }
                        if (M === 0) {
                            H.hide()
                        } else {
                            if (M > 99) {
                                M = "99+"
                            }
                            H.text(M);
                            H.show()
                        }
                    } else {
                    }
                }
            })
        };
        J.mouseenter(function () {
            C = true;
            A(false)
        });
        J.mouseleave(function () {
            C = false;
            setTimeout(function () {
                if (!C) {
                    if (B.css("display") !== "none") {
                        B.hide()
                    }
                }
            }, 500)
        });
        B.mouseenter(function () {
            C = true
        });
        B.mouseleave(function () {
            C = false;
            B.hide()
        });

        function z() {
            A(true);
            setTimeout(z, 300000)
        }

        z()
    };
    var w = function () {
        var F = $(".topsearch"), L, z, E, C, D, N, B = $(".J_SearchOps"), K = false;
        hideIpt = $(".J_SearchType");
        var M = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 8, 186, 187, 188, 189, 190, 191, 32, 108, 13],
            H;
        var G = function (S, W) {
            var X = S, O = W, Q = O.length, P;
            if (X.indexOf(O) >= 0) {
                var U = X.indexOf(O);
                var V = X.slice(0, U), T = X.slice(U, (U + Q)), R = X.slice((U + Q)), P = V + "<em>" + T + "</em>" + R;
                return P
            } else {
                return X
            }
        };
        var J = function (O) {
            for (var P = 0; P < M.length; P++) {
                if (O == M[P]) {
                    H = true;
                    break
                }
            }
        };
        var I = function (S, P, O) {
            var R = S;
            if (R.length > P) {
                var Q = R.slice(0, P) + "..";
                O.find("li.parent em").text(Q)
            }
        };
        var y = function (V, W) {
            var Q = V, aa = "", Y, O;
            if (Q.resultCode == 0) {
                Y = Q.keyword;
                var X = $("<div/>").text(Y).html();
                if (Q.book.length > 0) {
                    aa += '<li class="parent topli"><b class="book"></b><a href="#" type="4">搜"<em>' + X + '</em>"书籍</a></li>';
                    for (var S = 0; S < Q.book.length; S++) {
                        var Z = encodeUtils.htmlEncode(Q.book[S].name);
                        O = G(Z, Y);
                        if (S == Q.book.length - 1) {
                            aa += '<li class="children children-last"><a href="javascript:;" type="4">' + O + "</a></li>"
                        } else {
                            aa += '<li class="children"><a href="javascript:;" type="4">' + O + "</a></li>"
                        }
                    }
                } else {
                    aa += '<li class="parent topli"><b class="book"></b><a href="#" type="4">搜"<em>' + X + '</em>"书籍</a></li>'
                }
                if (Q.source.length > 0) {
                    aa += '<li class="parent"><b class="info"></b><a href="javascript:;" type="0">搜"<em>' + X + '</em>"资讯源</a></li>';
                    for (var U = 0; U < Q.source.length; U++) {
                        var P = encodeUtils.htmlEncode(Q.source[U].name);
                        O = G(P, Y);
                        if (U == Q.source.length - 1) {
                            aa += '<li class="children children-last"><a href="javascript:;" type="0">' + O + "</a></li>"
                        } else {
                            aa += '<li class="children"><a href="javascript:;" type="0">' + O + "</a></li>"
                        }
                    }
                } else {
                    aa += '<li class="parent"><b class="info"></b><a href="javascript:;" type="0">搜"<em>' + X + '</em>"资讯源</a></li>'
                }
                if (V.user.length > 0) {
                    aa += '<li class="parent"><b class="user"></b><a href="#" type="5">搜"<em>' + X + '</em>"用户</a></li>';
                    for (var R = 0; R < Q.user.length; R++) {
                        var ab = encodeUtils.htmlEncode(Q.user[R].name),
                            T = encodeUtils.htmlEntityEncode(Q.user[R].icon);
                        O = G(ab, Y);
                        if (R == Q.user.length - 1) {
                            aa += '<li class="children children-last children-u"><a href="javascript:;" type="5">';
                            if (Q.user[R].auth) {
                                aa += '<span class="v"></span>'
                            }
                            aa += '<img width="30" height="30" src="' + (T || defaultHeadUrl) + '">' + O + "</a></li>"
                        } else {
                            aa += '<li class="children children-u"><a href="javascript:;" type="5">';
                            if (Q.user[R].auth) {
                                aa += '<span class="v"></span>'
                            }
                            aa += '<img width="30" height="30" src="' + (T || defaultHeadUrl) + '">' + O + "</a></li>"
                        }
                    }
                } else {
                    aa += '<li class="parent"><b class="user"></b><a href="javascript:;" type="5">搜"<em>' + X + '</em>"用户</a></li>'
                }
                var ac = W.parents(".m-sch").find(".J_SearchOps");
                ac.empty().append(aa).show();
                K = true;
                if (jQuery.browser.msie) {
                    if (jQuery.browser.version === "6.0") {
                        if ($("#J_Select").length != 0) {
                            $("#J_Select").hide()
                        }
                    }
                }
                z = -1;
                I(Y, 24, ac);
                E = ac.find("li");
                C = E.length;
                E.find("a").click(function (ae) {
                    if ($(this).parent().hasClass("parent")) {
                        W.val(Y)
                    } else {
                        W.val($(this).text())
                    }
                    var ad = W.next();
                    ad.val($(this).attr("type"));
                    W.parents(".J_Form").submit();
                    ae.preventDefault()
                })
            }
        };
        var x = function (S, Q) {
            var O = S;
            var R = Q.next();
            var P = Q.parents(".m-sch").find(".J_SearchOps");
            R.val(P.find("li a").eq(O).attr("type"));
            if (E.eq(O).hasClass("parent")) {
                Q.val(N)
            } else {
                Q.val(E.eq(O).text())
            }
        };
        var A = function (P, O) {
            if ($.trim(P).length > 0) {
                $.ajax({
                    type: "GET",
                    url: "/querySearchHints.do",
                    data: {keyword: P},
                    dataType: "json",
                    success: function (Q) {
                        if (Q) {
                            y(Q, O)
                        } else {
                            YD.popTip("出错了，请稍候再试")
                        }
                    },
                    error: function () {
                    }
                })
            }
        };
        $("body").click(function (O) {
            if (!K) {
                return
            } else {
                if (O.target.className.toLowerCase() === ".topsearch" || O.target.className.toLowerCase() === ".J_SearchOps") {
                    return
                } else {
                    B.hide();
                    K = false
                }
            }
        });
        F.keydown(function (Q) {
            var P = false;
            for (var O = 0; O < M.length; O++) {
                if (Q.keyCode === M[O]) {
                    P = true;
                    D = F.val();
                    break
                }
            }
            if (P) {
                if (L) {
                    clearTimeout(L)
                }
            }
        });
        F.keyup(function (P) {
            var O = $(P.target);
            if (O.val().length > 0) {
                H = false;
                J(P.keyCode);
                if (H) {
                    L = setTimeout(function () {
                        var R = O.val();
                        var Q = $.trim(O.val());
                        N = Q;
                        if (P.keyCode === 13 || P.keyCode === 108 || P.keyCode === 32) {
                            if (R !== D) {
                                A(Q, O)
                            }
                        } else {
                            A(Q, O)
                        }
                    }, 200)
                }
                if (P.keyCode === 40) {
                    if (E.length > 0) {
                        z++;
                        if (z > (C - 1)) {
                            z = C - 1
                        }
                        E.each(function () {
                            $(this).removeClass("crt")
                        });
                        E.eq(z).addClass("crt");
                        x(z, O)
                    }
                }
                if (P.keyCode === 38) {
                    if (E.length > 0) {
                        z--;
                        if (z < 0) {
                            z = 0
                        }
                        E.each(function () {
                            $(this).removeClass("crt")
                        });
                        E.eq(z).addClass("crt");
                        x(z, O)
                    }
                }
                if (P.keyCode === 27) {
                    B.hide()
                }
            } else {
                if (O.val().length == 0) {
                    B.hide();
                    if (jQuery.browser.msie) {
                        if (jQuery.browser.version === "6.0") {
                            if ($("#J_Select").length != 0) {
                                $("#J_Select").show()
                            }
                        }
                    }
                }
            }
        })
    };
    var j = function () {
        var y = '			<div id="J_ServiceNum" class="m-layer m-layer-5" style="display:none;">				<div class="inner">					<div class="up"><a href="javascript:void(0);"></a></div>					<div class="down">						<p>购买书籍后无法阅读等问题<br /></p>						<p>可拨打：0571-89853801</p>					</div>				</div>			</div>';
        var x = false;
        $("#J_Service").click(function (B) {
            if (x) {
                $("#J_ServiceNum").show()
            } else {
                var A = $(this).offset().top - 120, z = $(this).offset().left - 80;
                $(".g-doc").append(y);
                $("#J_ServiceNum").css({top: A, left: z});
                $("#J_ServiceNum").show();
                x = true;
                $("#J_ServiceNum .up a").click(function () {
                    $("#J_ServiceNum").hide()
                })
            }
        })
    };
    var v = function () {
        var B = $(".j-subtop"), A = $(".j-subnav"), x = $(".j-subtop a"), y, D;
        $("#J_Nav li").mouseenter(function () {
            if (!$(this).hasClass("j-crt")) {
                $(this).addClass("hover")
            }
        });
        $("#J_Nav li").mouseleave(function () {
            $(this).removeClass("hover")
        });

        function z() {
            x.each(function () {
                if ($(this).hasClass("j-crt")) {
                    y = $(this).parent().attr("tab")
                }
            })
        }

        z();

        function C(F) {
            A.each(function () {
                if ($(this).hasClass(F)) {
                    $(this).show()
                } else {
                    $(this).hide()
                }
            })
        }

        function E() {
            A.each(function () {
                if ($(this).hasClass(y)) {
                    $(this).show()
                } else {
                    $(this).hide()
                }
            })
        }

        B.mouseenter(function (G) {
            if ($(this).hasClass("shouye")) {
                $("#J_SubNav").addClass("m-subnav-w")
            } else {
                $("#J_SubNav").removeClass("m-subnav-w")
            }
            if ($("#J_SubNav").css("display") === "none") {
                D = true;
                $("#J_SubNav").show()
            }
            var F = $(this).attr("tab");
            C(F)
        });
        $("#J_Header").mouseleave(function () {
            E();
            $("#J_SubNav").removeClass("m-subnav-w");
            if (D) {
                $("#J_SubNav").hide()
            }
        })
    };
    var o = function () {
        var x = $("#J_WalkThrough"), y = $("body").innerWidth();
        x.css({left: (y / 2 - 480)})
    };
    var u = function () {
        $(window).resize(function () {
            var x = $(".m-mask");
            if (x.length !== 0) {
                x.height($(document).height());
                x.width($(document).width());
                o()
            }
        })
    };
    var a = function () {
        var y = $(".j-ulink a.name span");
        var A = y.text(), x = 9;
        if (jQuery.browser.msie) {
            if (jQuery.browser.version === "6.0") {
                if ($.trim(A).length > 6) {
                    var z = $.trim(A).slice(0, 6);
                    y.text(z)
                }
                return
            }
        }
        if ($.trim(A).length > x) {
            var z = $.trim(A).slice(0, x);
            y.text(z)
        }
    };
    var e = (function () {
        var z = /^0{0,1}1[0-9]{10}$/, C, H, D, y, K, G, A;
        var J = function (O, N) {
            G = O, A = $("input[name^='loginTargetUrl']");
            var Q = "";
            Q += '			<div id="J_MobileLogin" class="m-layer m-layer-mb" style="display:none;position: absolute;width:524px; min-height: 294px; height: auto; z-index: 10000;">    			<div class="lytt yy"><a class="lyclose j-close">关闭</a>        			<h4>手机号登录</h4>    			</div>			    <div class="content">			        <div class="m-loginwrap">';
            if (N === "true") {
                Q += '<div id="J_LogMobiYX" class="m-login">'
            } else {
                Q += '<div id="J_LogMobiNormal" class="m-login">'
            }
            Q += '<iframe id="cellPhoneLoginTarget" name="cellPhoneLoginTarget" style="display:none;"></iframe>							<form id="cellPhoneLoginForm" action="https://' + location.host + '/cellPhoneLogin.do" method="post" target="cellPhoneLoginTarget">								<input type="hidden" name="operation" value="login" />			                    <div class="row" style="z-index:99999; margin-bottom:16px;">			                        <div>			                            <div class="cxt-input">			                                <span class="ipt-wrap">			                                    <input id="J_MobiNum" type="text" name="cellPhone" class="ipt" autocomplete="off" placeholder="手机号码登录">			                                </span>			                            </div>			                        </div>			                    </div>			                    <div class="row">			                        <span class="ipt-wrap">			                            <input id="J_Password" type="password" placeholder="登录密码" class="ipt" name="password" >			                        </span>			                    </div>			                    <div class="row-3 errortip" style="display: none;" id="mountip"></div>			                    <div class="row row-1">			                        <input id="mobiLogCookie" type="checkbox" name="remember_me" >			                        <label for="mobiLogCookie" class="auto">两周内自动登录</label>			                        <a href="javascript:;" class="j-mobilereg" type="pw">忘记密码？</a>			                    </div>			                    <div class="row j-checkarea" style="display: none;">	                        		<input id="checkCode" type="text" placeholder="验证码" class="ipt checkcodeipt" name="checkCode" >	                    		</div>			                    <div class="row row-2">			                        <button id="J_MobileLogBtn" >			                            <span>登录</span>			                        </button>			                    </div>			                    <div class="row"><a href="javascript:;" type="reg" class="wyt j-mobilereg">没有帐号？免费注册</a></div>			                </form>			            </div>			            <div class="m-loginswitch m-loginswitch-sj">			                <h6>其他帐号登录：</h6>			                <ul>';
            if (N === "true") {
                Q += '<li class="wy"><a onclick="login163(null,false,true);" href="javascript:;" ><span></span>网易邮箱</a></li>			                    		  <li class="xl xl-no"><a href="javascript:;"><span></span>新浪微博</a></li>			                    		  <li class="tx tx-no"><a href="javascript:;"><span></span>腾讯微博</a></li>'
            } else {
                Q += '<li class="wy"><a onclick="login163();" href="javascript:;" ><span></span>网易邮箱</a></li>			                    		  <li class="xl xllogin"><a href="javascript:;"><span></span>新浪微博</a></li>			                    		  <li class="tx txlogin"><a href="javascript:;"><span></span>腾讯微博</a></li>			                    		  <li class="wx wxlogin"><a href="javascript:;"><span></span>微信</a></li>'
            }
            Q += "</ul></div></div></div></div>";
            var P = $("#J_MobileLogin"), L = $("#J_LogMobiNormal"), M = $("#J_LogMobiYX");
            if (N === "true") {
                if (L.length > 0) {
                    P.remove()
                } else {
                    if (M.length > 0) {
                        F();
                        return
                    }
                }
            } else {
                if (L.length > 0) {
                    F();
                    return
                } else {
                    if (M.length > 0) {
                        P.remove()
                    }
                }
            }
            if ($("#J_MobileLogin").length !== 0) {
                F();
                return
            }
            if (G === "quick") {
                $("body").append(Q)
            } else {
                if (G === "page") {
                    $("#J_Container").append(Q);
                    $("#J_MobileLogin").addClass("m-layer-s").css({"z-index": 4999})
                }
            }
            y = $("#J_MobileLogin");
            C = $("#J_MobiNum");
            H = $("#J_Password");
            D = $("#mobiLogCookie");
            x();
            p(b());
            F()
        };

        function B(M, L) {
            if (M.length === 0 || !z.test(M)) {
                $("#mountip").text("手机号码输入错误").show();
                return false
            } else {
                if (L.length === 0) {
                    $("#mountip").text("密码不能为空").show();
                    return false
                } else {
                    $("#mountip").hide();
                    return true
                }
            }
        }

        function F() {
            K = $(".m-layer-wy");
            if (K.length !== 0 && K.css("display") === "block") {
                if (G === "quick") {
                    offPos = K.offset()
                } else {
                    if (G === "page") {
                        offPos = K.position()
                    }
                }
                y.css({top: offPos.top, left: offPos.left});
                K.fadeOut(300)
            } else {
                if (YD.Header.pageLogin) {
                    y.css({left: 420, top: 60})
                } else {
                    var O = $(window).height(), M = $(window).width();
                    var N = $(document).scrollTop();
                    var L = y.height(), P = y.width();
                    if (O > L) {
                        y.css("top", (N + ((O - L) / 2) + "px"))
                    } else {
                        y.css("top", (N + ((L - O) / 2) + "px"))
                    }
                    y.css("left", (M / 2 - P / 2))
                }
            }
            y.fadeIn(300)
        }

        function x() {
            $("#J_MobileLogBtn").click(function (M) {
                M.preventDefault();
                if (!B($.trim(C.val()), $.trim(H.val()))) {
                    return false
                }
                var L = $("input[name^='remember_me']");
                if (D[0].checked) {
                    L.val("true")
                } else {
                    L.val("false")
                }
                $("#cellPhoneLoginForm").submit()
            });
            $("#J_MobileLogin .j-close").click(function () {
                y.hide()
            });
            $("#J_MobileLogin .j-mobilereg").click(function () {
                $("#J_MobileLogin").hide();
                var L = $(this).attr("type");
                mobiReg.init(L)
            });
            $(".j-checkarea").delegate(".checkcodeimg", "click", function () {
                $(this).attr("src", "/captcha.do?d=" + (new Date()).getTime())
            })
        }

        function I(L) {
            A = $("input[name^='loginTargetUrl']");
            if (L === "success") {
                if (A.length > 0 && A.val().length > 0) {
                    window.location.href = A.val()
                } else {
                    l()
                }
            } else {
                if (L === "notRegistered") {
                    $("#login-container .errortip").text("手机号未注册").show()
                } else {
                    if (L === "authenticationFailed") {
                        $("#login-container .errortip").text("密码错误").show()
                    } else {
                        if (L === "notRegisteredNeedCode") {
                            $("#login-container .errortip").text("手机号未注册").show();
                            E()
                        } else {
                            if (L === "authFailNeedCode") {
                                $("#login-container .errortip").text("密码错误").show();
                                E()
                            } else {
                                if (L === "errorCaptcha") {
                                    $("#login-container .errortip").text("验证码错误").show();
                                    E()
                                } else {
                                    $("#login-container .errortip").text("错误").show()
                                }
                            }
                        }
                    }
                }
            }
        }

        function E() {
            if ($(".j-checkarea .checkcodeimg").length) {
                $(".j-checkarea .checkcodeimg").attr("src", "/captcha.do?d=" + (new Date()).getTime())
            } else {
                $(".j-checkarea").append('<img src="/captcha.do?d=' + (new Date()).getTime() + '" width="60" height="30" class="checkcodeimg"/>')
            }
            $(".j-checkarea").show()
        }

        return {initFun: J, call: I}
    })();
    var m = (function () {
        var C = '		<div id="J_NickName" style="z-index: 8999;" class="m-newlayer m-newlayer-log f-db1" >			<h2><span>输入昵称</span><a href="javascript:void(0)" class="j-close"></a></h2>			<div class="inner">				<div class="content" style="margin-top:-10px;">					<p class="title">昵称</p>					<p id="J_NickTip" class="nktip" style="display:none" >请输入2-15个字的昵称</p>					<p><input class="ipt" id="J_NickIpt" type="text" placeholder="请输入2-15个字的昵称"/></p>					<p class="title">性别</p>					<p class="title" style="margin-top:0;"><span class="gender" style="margin:0 90px 0 0"><input type="radio" name="gender" checked="checked" value="1" id="male" /><label for="male">男</label></span><span class="gender"><input type="radio" name="gender" value="0" id="female" /><label for="female">女</label></span></p>				</div>				<div class="button">					<a id="J_SendNickname" class="ok">完成</a>				</div>			</div>		</div>';
        var A, z = $("input[name^='loginTargetUrl']");
        var x = function (E) {
            $("body").append(C);
            A = $("#J_NickTip");
            if (E) {
                $("#J_NickIpt").val(E)
            }
            B();
            var D = document.getElementById("$_qLoginDivNew");
            if (D) {
                D.style.zIndex = 4999
            }
            YD.openLayer("#J_NickName")
        };
        var y = function () {
            if (z.length > 0 && z.val().length > 0) {
                window.location.href = z.val()
            } else {
                l()
            }
        };
        var B = function () {
            $("#J_SendNickname").click(function () {
                var E = $.trim($("#J_NickIpt").val()), D = $('input[name="gender"]:checked').val();
                if (E.length < 2 || E.length > 15) {
                    A.fadeIn(300);
                    return
                }
                $.ajax({
                    type: "POST",
                    url: "/snsLogin.do",
                    data: {operation: "initProfile", nickName: E, gender: D},
                    dataType: "json",
                    success: function (F) {
                        if (z.length > 0 && z.val().length > 0) {
                            window.location.href = z.val()
                        } else {
                            l()
                        }
                    },
                    error: function () {
                        YD.popTip("出错了，请稍候再试")
                    }
                })
            })
        };
        return {temp: x, formal: y}
    })();
    var b = function () {
        var x = window.location.protocol.toLowerCase(), y;
        if (x.indexOf("https") >= 0) {
            y = "true"
        } else {
            y = "false"
        }
        return y
    };
    var p = function (B) {
        var x = $(".xllogin a"), A = $(".txlogin a"), y = $(".wxlogin a"), z = B;
        x.unbind().click(function () {
            window.open("/weibo.do?operation=authorize&site=1&from=login&fromHttps=" + z);
            if (!$(".m-layer").hasClass("m-layer-s")) {
                $(".m-layer").hide()
            }
        });
        A.unbind().click(function () {
            window.open("/weibo.do?operation=authorize&site=4&from=login&fromHttps=" + z);
            if (!$(".m-layer").hasClass("m-layer-s")) {
                $(".m-layer").hide()
            }
        });
        y.unbind().click(function () {
            window.open("/weibo.do?operation=authorize&site=7&from=login&fromHttps=" + z);
            if (!$(".m-layer").hasClass("m-layer-s")) {
                $(".m-layer").hide()
            }
        })
    };
    var q = function () {
        if (!$(".g-bd").length) {
            return
        }
        var z = $(".g-bd").offset().left;
        var A = '<a class="m-gotop" title="回到顶部" href="javascript:;"></a>';
        var x = $(A).appendTo($(".g-doc")).css({right: (z - 80)});
        $(".m-gotop").click(function () {
            $("html, body").animate({scrollTop: 0}, 300)
        });
        $(window).resize(function () {
            z = $(".g-bd").offset().left;
            x.css({right: (z - 80)})
        });
        var y = function () {
            var B = $(document).scrollTop(), D = $(window).height(), C = $(window).width();
            (B > 0) ? $(".m-gotop").show() : $(".m-gotop").hide();
            (B > 0 && C <= 1512) ? $(".m-qr-icon").show() : $(".m-qr-icon").hide();
            if (!window.XMLHttpRequest) {
                x.css("top", B + D - 86)
            }
        };
        $(window).bind("scroll", y);
        $(function () {
            y()
        })
    };
    var t = function () {
        if (!$(".g-bd").length) {
            return
        }
        var z = $(".g-bd").offset().left;
        var x = '<a href="/report.do" target="_blank" title="举报中心" class="m-report"></a>';
        var y = $(x).appendTo($(".g-doc")).css({right: (z - 80)});
        $(window).resize(function () {
            z = $(".g-bd").offset().left;
            y.css({right: (z - 80)})
        });
        if (!window.XMLHttpRequest) {
            y.css("top", st + winh - 148)
        }
    };
    var g = function () {
        if (!$(".g-bd").length) {
            return
        }
        var y = $(".g-bd").offset().left;
        var D = '<div id="J_QRAll" class="m-qr" style="display:none;">									<a target="_blank" href="/download?act=rdpages_20130925_02"><img src="/images/down/QR_All.png"></a>								 </div>';
        var A = '<div id="J_QRAllHover" class="m-qr-hover" style="display:none;">									<img src="/images/down/QR_All.png">								 </div>';
        var E = '<a class="m-qr-icon" href="javascript:;" style="display:none;"></a>';
        var x = $(D).appendTo($(".g-doc")), F = $(E).appendTo($(".g-doc")).css({right: (y - 80)}),
            B = $(A).appendTo($(".g-doc")).css({right: (y - 20)});

        function z() {
            F.mouseenter(function () {
                B.show()
            }).mouseleave(function () {
                B.hide()
            })
        }

        function C() {
            var G = $(window).width();
            y = $(".g-bd").offset().left;
            if (G > 1512) {
                x.show();
                F.css({right: (y - 80)}).hide()
            } else {
                F.css({right: (y - 80)}).show();
                B.css({right: (y - 20)});
                x.hide()
            }
        }

        z();
        C();
        $(window).resize(function () {
            C()
        })
    };
    var k = function () {
        $(".j-wxwx").click(function () {
            $(".m-pop-qr").hide();
            var x = $(this).offset().left, A = $(this).offset().top, z = $(this).width(), y = $(this).data("type");
            $("#J_WXM").removeClass("ox xo").addClass(y).css({left: x - (56 - z / 2), top: A - 168}).fadeIn(300)
        });
        $("#J_WXM .close").click(function () {
            $("#J_WXM").fadeOut(300)
        });
        $(".j-wbwb").click(function () {
            $(".m-pop-qr").hide();
            var x = $(this).offset().left, z = $(this).offset().top, y = $(this).data("type");
            $("#J_WBM").removeClass("ox xo").addClass(y).css({left: x - 50, top: z - 168}).fadeIn(300)
        });
        $("#J_WBM .close").click(function () {
            $("#J_WBM").fadeOut(300)
        });
        $(".j-yxyx").click(function () {
            $(".m-pop-qr").hide();
            var x = $(this).offset().left, z = $(this).offset().top, y = $(this).data("type");
            $("#J_YXM").removeClass("ox xo").addClass(y).css({left: x - 50, top: z - 168}).fadeIn(300)
        });
        $("#J_YXM .close").click(function () {
            $("#J_YXM").fadeOut(300)
        });
        $(document).click(function (x) {
            if (x.target == $("#J_WXM")[0] || x.target == $("#J_WBM")[0] || x.target == $("#J_YXM")[0] || x.target == $(".j-wxwx")[0] || x.target == $(".j-wxwx")[1] || x.target == $(".j-wxwx")[2] || x.target == $(".j-wbwb")[0] || x.target == $(".j-wbwb")[1] || x.target == $(".j-yxyx")[0] || x.target == $(".j-yxyx")[1]) {
                return
            } else {
                $("#J_WXM").hide();
                $("#J_WBM").hide();
                $("#J_YXM").hide()
            }
        })
    };
    var n = function () {
        var x;
        $(".j-show-moremenu").mouseenter(function () {
            $(".j-show-moremenu").hide();
            $(".j-headermenu-more").show();
            $(".j-sch").hide()
        });
        $(".j-headermenu-more").mouseleave(function () {
            x = setTimeout(function () {
                if (x) {
                    $(".j-headermenu-more").hide();
                    $(".j-sch").show();
                    $(".j-show-moremenu").show()
                }
            }, 200)
        });
        $(".j-headermenu-more").mouseenter(function () {
            if (x) {
                clearTimeout(x)
            }
            $(".j-show-moremenu").hide();
            $(".j-headermenu-more").show();
            $(".j-sch").hide()
        })
    };
    var f = function () {
        var x = $(window).height();
        $(window).scroll(function (z) {
            var y = $(window).scrollTop();
            if (!!window.ActiveXObject && !window.XMLHttpRequest) {
                if (y > $("#J_Header").height() + 10) {
                    $(".m-headerfix").show()
                } else {
                    $(".m-headerfix").hide()
                }
            } else {
                if (y > $("#J_Header").height() + 10) {
                    $(".m-headerfix").addClass("m-headerfix-scrolling")
                } else {
                    $(".m-headerfix-scrolling .J_SearchOps").hide();
                    $(".m-headerfix").removeClass("m-headerfix-scrolling")
                }
            }
        })
    };
    var c = function () {
        if (window.location.pathname !== "/" && window.location.pathname !== "/index") {
            return
        }
        if ($.cookie("yd_taiping_tip") === "showed") {
            return
        }
        if ($(".g-doc").length > 0) {
            var x = '<div class="m-float-tip"><a href="javascript:;" class="j-close"></a><a target="_blank" href="//yuedu.163.com/special/002163EC/taiping_ticket.html" class="img"></a></div>';
            $(".g-doc").prepend(x);
            YD.openLayer(".m-float-tip");
            $(".m-float-tip .j-close").click(function () {
                $.cookie("yd_taiping_tip", "showed", {path: "/", domain: "yuedu.163.com", expires: 365})
            });
            $(".m-float-tip .img").click(function () {
                $.cookie("yd_taiping_tip", "showed", {path: "/", domain: "yuedu.163.com", expires: 365});
                $(".m-float-tip").hide();
                $(".m-mask").hide()
            })
        }
    };
    var r = function () {
        var y = new Date(2016, 4, 1, 0, 0, 0);
        var x = new Date();
        var z = y - x;
        if (z <= 0) {
            return
        }
        if ($.cookie && $.cookie("yd_zimeiti_tip") === "showed") {
            return
        }
        if ($(".g-doc").length > 0) {
            var A = '<div class="m-zimeiti-tip" style=""><a href="javascript:;" class="j-close"></a><a target="_blank" href="//yuedu.163.com/goto?type=story3nd" class="img"></a></div>';
            $(".g-doc").prepend(A);
            YD.openLayer(".m-zimeiti-tip");
            $(".m-zimeiti-tip .j-close").click(function () {
                $.cookie("yd_zimeiti_tip", "showed", {path: "/", domain: "yuedu.163.com", expires: 365})
            });
            $(".m-zimeiti-tip .img").click(function () {
                $.cookie("yd_zimeiti_tip", "showed", {path: "/", domain: "yuedu.163.com", expires: 365});
                $(".m-zimeiti-tip").hide();
                $(".m-mask").hide()
            })
        }
    };
    $().ready(function () {
        i("#topsearch");
        w();
        j();
        v();
        YD.Header.testIE6.detect();
        u();
        d();
        q();
        t();
        g();
        k();
        r()
    });
    YD.Header.menuHover = h;
    YD.Header.cutWords = a;
    YD.Header.checkMSG = d;
    YD.Header.floatTip = c;
    YD.Header.toggleMoreHeaderMenu = n;
    YD.Header.toggleFixHeader = f;
    YD.Header.externalTempLogin = m.temp;
    YD.Header.externalFormalLogin = m.formal;
    YD.Header.mobileCallback = e.call;
    this._nisas = {_$host: location.host, _$doc: document};
    if (typeof _dapush === "undefined") {
        (function (A, B, z, D, C, y, x) {
            A.AnalyticsObject = C;
            A[C] = A[C] || function () {
                (A[C].ops = A[C].ops || []).push(arguments)
            };
            y = B.createElement(z);
            y.type = "text/javascript";
            x = B.getElementsByTagName(z)[0];
            y.async = false;
            y.src = D;
            x.parentNode.insertBefore(y, x)
        })(window, document, "script", "//rev.da.netease.com/da.js?t=" + parseInt((new Date().getTime()) / 1000000), "_dapush");
        _dapush("create", "DA-A888-A990E152BA01");
        _dapush("page_view")
    }
    (function (am) {
        function ah(A) {
            for (var B = [], x = 0; x < A; x++) {
                var C = 62 * Math.random(), C = Math.floor(C);
                B.push("aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA".charAt(C))
            }
            return B.join("")
        }

        function aj(A) {
            for (var C = am._$doc[aq("P6PTPTPjPoPR")].split("; "), x = 0; x < C.length; x++) {
                var D = C[x].indexOf("=");
                if (0 <= D) {
                    var B = C[x].substring(0, D), D = C[x].substring(D + 1, C[x].length);
                    if (B == A) {
                        return D
                    }
                }
            }
            return null
        }

        function ag(A) {
            var D = "v fp u h ec em".split(" "), x;
            if (null == A || void 0 == A) {
                return A
            }
            if ("object" == typeof A) {
                x = "{";
                for (var H = 0; H < D.length; H++) {
                    if (A.hasOwnProperty(D[H])) {
                        var C = "'" + D[H] + "':'", B;
                        B = "" + A[D[H]];
                        B = null == B || void 0 == B ? B : B.replace(/'/g, "\\'").replace(/"/g, '"');
                        x += C + B + "',"
                    }
                }
                "," == x.charAt(x.length - 1) && (x = x.substring(0, x.length - 1));
                return x + "}"
            }
            return null
        }

        function ae(A, B, x) {
            var C = [];
            C.push(A + "=" + escape(B));
            x && (A = new Date, A.setDate(15), A.setMonth(A.getMonth() + 1), A = A[aq("xbPTbxbYRbR6xbxzPoPnPx")](), C.push("; "), C.push("ex"), C.push("pi"), C.push("re"), C.push("s="), C.push(A));
            C.push("; ");
            C.push("pa");
            C.push("th=/");
            A = aq("");
            null != A && void 0 != A && "" != A && (C.push("; "), C.push("do"), C.push("mai"), C.push("n="), C.push(A));
            am._$doc[aq("P6PTPTPjPoPR")] = C.join("")
        }

        function ad(A, B) {
            for (var x = [], C = 0; C < B; C++) {
                x.push(A)
            }
            return x.join("")
        }

        function F(aA) {
            var ax = !0, az = {v: "v1.0"}, ay = null;
            az.h = am._$host;
            az.u = ah(3) + (new Date).getTime() + ah(3);
            try {
                var aw = (new E).get();
                null != aw && void 0 != aw && 0 < aw.length ? az.fp = aw.join(",") : (az.fp = ad("0", 10), az.ec = "1", ax = !1)
            } catch (av) {
                az.fp = ad("0", 10), az.ec = "1", ax = !1
            }
            try {
                if (ay = ag(az), az = z, null == ay || void 0 == ay) {
                    ay = ""
                } else {
                    if (null == az || void 0 == az) {
                        throw Error("1008")
                    }
                    var X = ac(ay), N = ac(az), az = X;
                    null == az && (az = []);
                    X = [];
                    for (aw = 0; 4 > aw; aw++) {
                        var T = 256 * Math.random(), T = Math.floor(T);
                        X[aw] = ap(T)
                    }
                    var N = al(N), N = ak(N, al(X)), T = N = al(N), U;
                    var at = az;
                    if (null == at || void 0 == at || 0 == at.length) {
                        U = ab(64)
                    } else {
                        var au = at.length, az = 0, az = 60 > au % 64 ? 64 - au % 64 - 4 : 128 - au % 64 - 4, aw = [];
                        af(at, 0, aw, 0, au);
                        for (at = 0; at < az; at++) {
                            aw[au + at] = 0
                        }
                        at = [];
                        at[0] = au >>> 24 & 255;
                        at[1] = au >>> 16 & 255;
                        at[2] = au >>> 8 & 255;
                        at[3] = au & 255;
                        af(at, 0, aw, au + az, 4);
                        U = aw
                    }
                    au = U;
                    if (null == au || 0 != au.length % 64) {
                        throw Error("1005")
                    }
                    U = [];
                    for (var az = 0, R = au.length / 64, aw = 0; aw < R; aw++) {
                        for (U[aw] = [], at = 0; 64 > at; at++) {
                            U[aw][at] = au[az++]
                        }
                    }
                    R = [];
                    af(X, 0, R, 0, 4);
                    for (var L = U.length, X = 0; X < L; X++) {
                        var Q, P;
                        var M = U[X];
                        if (null == M) {
                            P = null
                        } else {
                            for (var D = ap(-83), au = [], C = M.length, az = 0; az < C; az++) {
                                au.push(y(M[az], D++))
                            }
                            P = au
                        }
                        au = P;
                        if (null == au) {
                            Q = null
                        } else {
                            for (var B = ap(79), az = [], x = au.length, aw = 0; aw < x; aw++) {
                                az.push(aa(au[aw], B--))
                            }
                            Q = az
                        }
                        var K = ak(Q, N), I;
                        au = K;
                        az = T;
                        if (null == au) {
                            I = null
                        } else {
                            if (null == az) {
                                I = au
                            } else {
                                for (var aw = [], aB = az.length, at = 0, J = au.length; at < J; at++) {
                                    aw[at] = ap(au[at] + az[at % aB])
                                }
                                I = aw
                            }
                        }
                        var K = ak(I, T), H = Z(K), H = Z(H);
                        af(H, 0, R, 64 * X + 4, 64);
                        T = H
                    }
                    var O = R.length;
                    if (null == R || 0 > O) {
                        ay = new String("")
                    } else {
                        L = [];
                        for (Q = 0; Q < O; Q++) {
                            L.push(Y(R[Q]))
                        }
                        ay = L.join("")
                    }
                }
            } catch (S) {
                ay = ag({ec: "2", em: S.message}), ax = !1
            }
            ae(aA, ay, ax);
            ae(W, 23, ax)
        }

        var ai = function (A) {
                var D, x, H, C, B;
                D = A.length & 3;
                x = A.length - D;
                H = 31;
                for (B = 0; B < x;) {
                    C = A.charCodeAt(B) & 255 | (A.charCodeAt(++B) & 255) << 8 | (A.charCodeAt(++B) & 255) << 16 | (A.charCodeAt(++B) & 255) << 24, ++B, C = 3432918353 * (C & 65535) + ((3432918353 * (C >>> 16) & 65535) << 16) & 4294967295, C = C << 15 | C >>> 17, C = 461845907 * (C & 65535) + ((461845907 * (C >>> 16) & 65535) << 16) & 4294967295, H ^= C, H = H << 13 | H >>> 19, H = 5 * (H & 65535) + ((5 * (H >>> 16) & 65535) << 16) & 4294967295, H = (H & 65535) + 27492 + (((H >>> 16) + 58964 & 65535) << 16)
                }
                C = 0;
                switch (D) {
                    case 3:
                        C ^= (A.charCodeAt(B + 2) & 255) << 16;
                    case 2:
                        C ^= (A.charCodeAt(B + 1) & 255) << 8;
                    case 1:
                        C ^= A.charCodeAt(B) & 255, C = 3432918353 * (C & 65535) + ((3432918353 * (C >>> 16) & 65535) << 16) & 4294967295, C = C << 15 | C >>> 17, H ^= 461845907 * (C & 65535) + ((461845907 * (C >>> 16) & 65535) << 16) & 4294967295
                }
                H ^= A.length;
                H ^= H >>> 16;
                H = 2246822507 * (H & 65535) + ((2246822507 * (H >>> 16) & 65535) << 16) & 4294967295;
                H ^= H >>> 13;
                H = 3266489909 * (H & 65535) + ((3266489909 * (H >>> 16) & 65535) << 16) & 4294967295;
                return (H ^ H >>> 16) >>> 0
            }, an = "qMz6bRPx4o0j7YnT".split(""), aq = function (A) {
                if (null == A || void 0 == A) {
                    return A
                }
                if (0 != A.length % 2) {
                    throw Error("1100")
                }
                for (var B = [], x = 0; x < A.length; x++) {
                    0 == x % 2 && B.push("%");
                    for (var C = 0; C < an.length; C++) {
                        if (A.charAt(x) == an[C]) {
                            B.push(C.toString(16));
                            break
                        }
                    }
                }
                return decodeURIComponent(B.join(""))
            }, E = function (L) {
                var N = Array.prototype.forEach, P = Array.prototype.map, O = function (T, at, U) {
                    if (null !== T) {
                        if (N && T.forEach === N) {
                            T.forEach(at, U)
                        } else {
                            if (T.length === +T.length) {
                                for (var S = 0, X = T.length; S < X && at.call(U, T[S], S, T) !== {}; S++) {
                                }
                            } else {
                                for (S in T) {
                                    if (T.hasOwnProperty(S) && at.call(U, T[S], S, T) === {}) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                }, M = function (S, T, U) {
                    var X = [];
                    if (null == S) {
                        return X
                    }
                    if (P && S.map === P) {
                        return S.map(T, U)
                    }
                    O(S, function (au, at, av) {
                        X[X.length] = T.call(U, au, at, av)
                    });
                    return X
                }, K = {_hs: ai, _sr: !0, _cav: !0, _actx: !0};
                "object" == typeof L ? (void 0 !== L.hasher && "function" == typeof L.hasher && (K._hs = L.hasher), void 0 !== L.screen_resolution && (K._sr = L.screen_resolution), void 0 !== L.canvas && (K._cav = L.canvas), void 0 !== L.ie_activex && (K._actx = L.ie_activex)) : "function" == typeof L && (K._hs = L);
                var H = function () {
                    try {
                        return !!window.localStorage
                    } catch (S) {
                        return !0
                    }
                }, D = function () {
                    try {
                        return !!window.sessionStorage
                    } catch (S) {
                        return !0
                    }
                }, B = function () {
                    if (window.ActiveXObject) {
                        var S = [aq("bMP6xzPTRqbbbPznRqbbbP"), aq("bMPbPTPbPzznR6xbxzPRPMPY"), aq("bMPxb6PTPnxbxzPTP7znbMPxb6PTPnxbxzPTP7"), aq("bbPRxPPMP7RPRzR4b6xbxzP7znbbPRxPPMP7RPRzR4b6xbxzP7zn6M"), aq("bYPMP6xzPTPYPRPbPoPMbPP7PMx6P4RqPMxqPRxzznbYPMP6xzPTPYPRPbPoPMbPP7PMx6P4RqPMxqPRxz"), aq("bYx6x4PYP76zznbbbTbYbbPTP6xRPYPRPnxb"), aq("bYx6x4PYP76zznR4bYb7b4RbRbRq"), aq("RqbbbPznRqPbPPb6xbxzP7"), aq("RMxRPoP6PjRbPoPYPRznRMxRPoP6PjRbPoPYPR"), aq("RMxRPoP6PjRbPoPYPRb6P4PRP6PjbTPzP0PRP6xbznRMxRPoP6PjRbPoPYPRb6P4PRP6Pjzn6M"), aq("xzPYPTP6x4znRzPRPMP7RqP7PMxoPRxzzqbx6zzqb6PTPnxbxzPTP7"), aq("xzPYPTP6x4znRzPRPMP7RqP7PMxoPRxzzqbx6zzqb6PTPnxbxzPTP7zn6M"), aq("RzPRPMP7RqP7PMxoPRxz"), aq("RzPRPMP7RqP7PMxoPRxzznRzPRPMP7RqP7PMxoPRxzz4xbPYzozqbMP6xbPoxPPRR4zqb6PTPnxbxzPTP7zqz4666zzYPzPoxbzo"), aq("RzPRPMP7RPPoPbPRPTznRzPRPMP7RPPoPbPRPTz4xbPYzozqbMP6xbPoxPPRR4zqb6PTPnxbxzPTP7zqz4666zzYPzPoxbzo"), aq("xzPYPTP6x4znRzPRPMP7RqP7PMxoPRxzzqbx6zzqb6PTPnxbxzPTP7"), aq("R6P6xzPoxqxbPoPnPxznbbPoP6xbPoPTPnPMxzxo"), aq("R6P4PRP7P7znRRbob4PRP7xqPRxz"), aq("R6P4PTP6PjxxPMxPPRbPP7PMx6P4znR6P4PTP6PjxxPMxPPRbPP7PMx6P4"), aq("R6Rxb6xbP7znR6Rxb6xbP7"), aq("R6PjxoxqPRznbbPRxbPRP6xbPoPTPn"), aq("Rbbbb6b6xbP7znRbbbb6b6xbP7"), aq("RxbYRqP7PMxoPRxzznbTb6R4")];
                        return M(S, function (U) {
                            try {
                                return new ActiveXObject(U), U
                            } catch (T) {
                                return null
                            }
                        }).join(";")
                    }
                    return ""
                }, C = function () {
                    if (!navigator.plugins) {
                        return ""
                    }
                    var S = [aq("6bPxPMPYPR"), aq("bMPbPzP7PTP6PjRqP7xRPxPoPn"), aq("bMPbPTPzPRbRx4bYPMPnb6b6bbPRxbPRP6xb"), aq("bMPbPTPzPRbRx4bYPMPnbbPRxbPRP6xb"), aq("bMP7PMxxPMxzzqbnRqbMRqbozqxRxbPoP7x6"), aq("bMP7PoPRPbPoxbzqRqP7xRPxzYboPn"), aq("bMP7PoxqPMxozqR6PRP6xRxzPoxbxozqb6PTPnxbxzPTP7zq66"), aq("bMP7PoR6R6bTb7PTPxPoPnzqxqP7xRPxPoPn"), aq("bMPYPMx0PTPnbYRq66bbPTxxPnP7PTPMPbPRxzRqP7xRPxPoPn"), aq("bMbTb7zqbYPRPbPoPMzqRqP7PMxoPzPMP6PjzqRqP7xRPxPoPn"), aq("bMxqxqRRxq"), aq("bMxzP6P4Pob6bMbb"), aq("bMRPbxzqR6PoxbPRR6PMPPPRxbxozqxqP7xRPxPoPn"), aq("bzPMPzxoP7PTPnzqRbPTPTP7bzPMxz"), aq("bzPMxbxbP7PRP7PTPxzqbxPMPYPRzqb7PMxRPnP6P4PRxz"), aq("bzPoxbb6PTPYPRxbbMPxPRPnxb"), aq("bzPoxbPbPRPPPRPnPbPRxzzqRMxRPoP6PjR6P6PMPn"), aq("bzP7xRPRR6xbPMP6Pjx6zqboPnx6xbPMP7P7zqbbPRxbPRP6xbPTxz"), aq("b6PMxbPMP7PoPnPMbxxzPTxRxqzqRRxqPbPMxbPR"), aq("b6PoxbxzPox4zqbob6bMzqb6P7PoPRPnxb"), aq("b6PoxbxzPox4zqPTPnP7PoPnPRzqxqP7xRPxzYPoPn"), aq("b6PoxbxzPox4zqRzPRP6PRPoxPPRxzzqRqP7xRPxzYPoPn"), aq("b6PTPTxxPTPnzqRRxqPbPMxbPR"), aq("bbPRPMP7RqP7xob7PoxPPRzqRRxqPbPMxbPR"), aq("bbPRPPPMxRP7xbzqbzxzPTxxx6PRxzzqb4PRP7xqPRxz"), aq("bbPoxPR4zqbzxzPTxxx6PRxzzqRqP7xRPxzYboPn"), aq("bbPoxPR4zqRqP7xRx6zqRxPRPzzqRqP7PMxoPRxz"), aq("bbPoxPR4zqRPbTbbzqb4PRP7xqPRxzzqRqP7xRPxzYPoPn"), aq("PbPTxRPzP7PRRbxxPox6xbzqRxPRPzzqRqP7xRPxPoPn"), aq("bbPTxxPnP7PTPMPbPRxzx6zqxqP7xRPxPoPn"), aq("PbPTxxPnP7PTPMPbRRxqPbPMxbPRxz"), aq("PRbYxRx6PoP6RqP7xRPxPoPnzqbbb7bY6P"), aq("bRR6bnzqb7PMxRPnP6P4zqbYPTx0PoP7P7PMzqRqP7xRPxPoPn"), aq("bRR6bnzqR6PTPnPMxzzqbMRqbo"), aq("bRx4PoPPzqbRxPPRxzxoxxP4PRxzPR"), aq("bPPMP6PRPzPTPTPjzqRqP7xRPxPoPn"), aq("bPPoP7PRzqbbPTxxPnP7PTPMPbPRxzzqRqP7xRPxzYPoPn"), aq("bPPoP7PRb7PMPzzqxqP7xRPxPoPn"), aq("bPP7xobTxzbbPoPRzqbxPMPYPRx6zqRqP7xRPxPoPn"), aq("bPPTP7x4zq66zqbzxzPTxxx6PRxzzqRqP7xRPxPoPn"), aq("bPRRR0bRR6P4PMxzPR"), aq("bxbbb7zqbTPzP0PRP6xbzqRxPRPzzqRqP7xRPxzYPoPnzq6M6Pzn6q6q"), aq("bxbPbMb6bRzqRqP7xRPxPoPn"), aq("bxPoPnPxPRxz"), aq("bxPnPTPYPRzqR6P4PRP7P7zqboPnxbPRPxxzPMxbPoPTPn"), aq("bxPTPTPxP7PRzqbRPMxzxbP4zqRqP7xRPxPoPn"), aq("bxPTPTPxP7PRzqbRPMxzxbP4zqRqP7xRPxzYPoPn"), aq("bxPTPTPxP7PRzqbxPRPMxzx6zq6qzn6Rzn6666zn6q"), aq("bxPTPTPxP7PRzqRbPMP7PjzqbRPPPPPRP6xbx6zqRqP7xRPxPoPn"), aq("bxPTPTPxP7PRzqRRxqPbPMxbPR"), aq("b4PMxzPYPTPnxozqbPPoxzPRPPPTx4zqRqP7xRPxPoPn"), aq("b4PMxzPYPTPnxozqRqP7xRPxzYboPn"), aq("b4PRxzPTPRx6zqzPzqbxPRPnPRxzPMP7x6zqP7PoxPPR"), aq("b4RqbbPRxbPRP6xb"), aq("b4xbPYP76RzqP7PTP6PMxbPoPTPnzqxqxzPTxPPoPbPRxz"), aq("bobRzqRbPMPzzqxqP7xRPxPoPn"), aq("PobxPRxbxbPRxzR6P6xzPoxqxbPMPzP7PRRqP7xRPxPoPn"), aq("PobYPRx6P4zqxqP7xRPxPoPn"), aq("bjPMx6xqPRxzx6PjxozqRqPMx6x6xxPTxzPbzqbYPMPnPMPxPRxz"), aq("b7PMx6xbRqPMx6x6"), aq("b7PTPxbYPRboPnzqRqP7xRPxPoPnzq6Mzn6qzn6qzn6o666R"), aq("b7PTPxbYPRboPnzqRqP7xRPxPoPnzq6Mzn6qzn6qzn6o6P6M"), aq("bYPMzYb6PTPnPPPoPxznP6PTPYzqxqP7xRPxPoPn"), aq("bYPoP6xzPTx6PTPPxbzqbTPPPPPoP6PRzq6z6q6M66"), aq("bYPoPnPoPzPMxzRqP7xRPxPoPn"), aq("bnPMxbPoxPPRzqb6P7PoPRPnxb"), aq("bnPoxbxzPTzqRqbbbPzqRqP7xRPxzYboPn"), aq("bnPTPjPoPMzqR6xRPoxbPRzqbRPnPMPzP7PRxzzqRqP7xRPxPoPn"), aq("bnPTxzxbPTPnzqboPbPRPnxbPoxbxozqR6PMPPPR"), aq("PnxqbMRqbozqRqP7xRPxPoPn"), aq("bnRqb7PMx6xbRqPMx6x6"), aq("bnRqRqP7PMxoPRxzR6P4PRP7P7"), aq("PnxqRbPTPnPxPzxRbMPbPbPoPn"), aq("bnxox4b7PMxRPnP6P4PRxz"), aq("bTP6xbPTx6P4PMxqPRzqR6xbxzPRPMPYPoPnPxzqR6PRxzxPPoP6PRx6"), aq("bTPnP7PoPnPRzqR6xbPTxzPMPxPRzqxqP7xRPxzYPoPn"), aq("bTxzPzPoxbzqbbPTxxPnP7PTPMPbPRxz"), aq("RqPMPnPbPTzqRxPRPzzqRqP7xRPxPoPn"), aq("RqPMxzPTPYznRbRPzqxqP7PMxoPRxzzqxqP7xRPxPoPn"), aq("RqbbbPzqPoPnxbPRPxxzPMPbPTzqPbPTzqRxPRPzbjPoxb"), aq("RqbbbPzYR4b6P4PMPnPxPRzqRPPoPRxxPRxz"), aq("RqP4PTxbPTb6PRPnxbPRxzRqP7xRPxPoPn6Mzn6Mzn6zzn6z"), aq("RqPoP6PMx6PM"), aq("RqP7PMxobTPnzqRqP7xRPxzYPoPn"), aq("RMRM6z6q6M66zqbPPoxzPRPPPTx4zqRqP7xRPxPoPn"), aq("RMRMbbPTxxPnP7PTPMPbzqRqP7xRPxPoPn"), aq("RMRMbYPoPnPobbb7zqRqP7xRPxPoPn"), aq("RMRMbYxRx6PoP6"), aq("RzPRPMP7bbPTxxPnP7PTPMPbPRxzzqRqP7xRPxPoPn"), aq("RzPTPzP7PTx4zqb7PMxRPnP6P4PRxzzqRqP7xRPxPoPn"), aq("RzPTP6PjbYPRP7xbzqRRxqPbPMxbPR"), aq("R6PMPPPRxzzqRRxqPbPMxbPR"), aq("R6PMPPPRR6PRPMxzP6P4"), aq("R6P6xzPoxqxbPoPnPxznbbPoP6xbPoPTPnPMxzxo"), aq("R6PRPPb6P7PoPRPnxbzqRqP7xRPxPoPn"), aq("R6P4PRP7P7znRRbob4PRP7xqPRxz"), aq("R6PoP7xPPRxzP7PoPxP4xbzqRqP7xRPxzYboPn"), aq("R6PoPYxqP7PRzqRqPMx6x6"), aq("R6PjxoxqPRzqRxPRPzzqRqP7xRPxPoPn"), aq("R6xRPYPMxbxzPMRqbbbPzqbzxzPTxxx6PRxzzqRqP7xRPxPoPn"), aq("R6xoPYPMPnxbPRP6zqRqbjbozqb6P7PoPRPnxb"), aq("RbPRPnP6PRPnxbzqbPRbbnzqxqP7xRPxzYPoPn"), aq("RbP4xRPnPbPRxzzqbbPMxqb6xbxzP7zqbnRqbMRqbozqRqP7xRPxPoPn"), aq("RbPTxzP6P4b4PRP7xqPRxz"), aq("RRPnPoxbxozqRqP7PMxoPRxz"), aq("RRxqP7PMxozqRqb6"), aq("RPbbPTxxPnP7PTPMPbPRxz"), aq("RPPRPRxbP7PRzqRbRPzqb6PTxzPR"), aq("RPb7b6zqbYxRP7xbPoPYPRPbPoPMzqRqP7xRPxPoPn"), aq("RxPRPzzqb6PTPYxqPTPnPRPnxbx6"), aq("RxPRPzbjPoxbzYPoPnxbPRPxxzPoPRxzxbPRzqRqbbbP"), aq("RxbRbzR0bRbnzqbzxzPTxxx6PRxzzqbRx4xbPRPnx6PoPTPn"), aq("RxPTP7PPxzPMPYzqbYPMxbP4PRPYPMxbPoP6PM"), aq("RxPTxzPbb6PMxqxbxRxzPRR4"), aq("RxRqbozqbbPRxbPRP6xbPTxzzq6Mzn6b"), aq("RoPMPnPbPRx4zqbYPRPbPoPMzqRqP7xRPxPoPn"), aq("RoPMPnPbPRx4zqRqbbbPzqRPPoPRxxPRxz"), aq("RoPTxRRbxRPzPRzqRqP7xRPxzYPoPn"), aq("x0PMPjPT")],
                        T = [], U = {};
                    T.push(M(navigator.plugins, function (at) {
                        U[at.name] = 1;
                        var X = M(at, function (au) {
                            return [au.type, au.suffixes].join("~")
                        }).join(",");
                        return [at.name, at.description, X].join("::")
                    }, this).join("$"));
                    T.push(M(S, function (at) {
                        if (U[at]) {
                            return ""
                        }
                        at = navigator.plugins[at];
                        if (!at) {
                            return ""
                        }
                        var X = M(at, function (au) {
                            return [au.type, au.suffixes].join("~")
                        }).join(",");
                        return [at.name, at.description, X].join("::")
                    }, this).join(";"));
                    return T.join(";")
                }, I = function () {
                    var T = document.createElement("canvas"), S = T.getContext("2d");
                    S.textBaseline = "top";
                    S.font = "70px 'Arial'";
                    S.textBaseline = "alphabetic";
                    S.fillStyle = "#f60";
                    S.fillRect(125, 1, 62, 20);
                    S.fillStyle = "#069";
                    S.fillText("mwC nkbafjord phsgly exvt zqiu, \u1f60 tphst/:/uhbgtic.mo/levva", 2, 15);
                    S.fillStyle = "rgba(102, 204, 0, 0.7)";
                    S.fillText("mwC nkbafjord phsgly exvt zqiu, \u1f60 tphst/:/uhbgtic.mo/levva", 4, 17);
                    return T.toDataURL()
                }, J = function () {
                    var S = document.createElement("div"), T = [],
                        X = [aq("bMP6xbPoxPPRbzPTxzPbPRxz"), aq("bMP6xbPoxPPRb6PMxqxbPoPTPn"), aq("bMxqxqRxPTxzPjx6xqPMP6PR"), aq("bzPMP6PjPxxzPTxRPnPb"), aq("bzxRxbxbPTPnbPPMP6PR"), aq("bzxRxbxbPTPnb4PoPxP4P7PoPxP4xb"), aq("bzxRxbxbPTPnR6P4PMPbPTxx"), aq("bzxRxbxbPTPnRbPRx4xb"), aq("b6PMxqxbPoPTPnRbPRx4xb"), aq("bxxzPMxoRbPRx4xb"), aq("b4PoPxP4P7PoPxP4xb"), aq("b4PoPxP4P7PoPxP4xbRbPRx4xb"), aq("boPnPMP6xbPoxPPRbzPTxzPbPRxz"), aq("boPnPMP6xbPoxPPRb6PMxqxbPoPTPn"), aq("boPnPMP6xbPoxPPRb6PMxqxbPoPTPnRbPRx4xb"), aq("boPnPPPTbzPMP6PjPxxzPTxRPnPb"), aq("boPnPPPTRbPRx4xb"), aq("bYPRPnxR"), aq("bYPRPnxRRbPRx4xb"), aq("R6P6xzPTP7P7PzPMxz"), aq("RbP4xzPRPRbbbbPMxzPjR6P4PMPbPTxx"), aq("RbP4xzPRPRbbbPPMP6PR"), aq("RbP4xzPRPRbbb4PoPxP4P7PoPxP4xb"), aq("RbP4xzPRPRbbb7PoPxP4xbR6P4PMPbPTxx"), aq("RbP4xzPRPRbbR6P4PMPbPTxx"), aq("RxPoPnPbPTxx"), aq("RxPoPnPbPTxxbPxzPMPYPR"), aq("RxPoPnPbPTxxRbPRx4xb")];
                    if (!window.getComputedStyle) {
                        return T.join("")
                    }
                    for (var U = 0; U < X.length; U++) {
                        document.body.appendChild(S), S.style.color = X[U], T.push(X[U]), T.push(window.getComputedStyle(S).getPropertyValue("color")), document.body.removeChild(S)
                    }
                    return T.join(":")
                }, A = function (T, S) {
                    var U = T.createBuffer();
                    T.bindBuffer(T.ARRAY_BUFFER, U);
                    var au = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
                    T.bufferData(T.ARRAY_BUFFER, au, T.STATIC_DRAW);
                    U.itemSize = 3;
                    U.numItems = 3;
                    var au = T.createProgram(), at = T.createShader(T.VERTEX_SHADER);
                    T.shaderSource(at, "attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }");
                    T.compileShader(at);
                    var X = T.createShader(T.FRAGMENT_SHADER);
                    return T.shaderSource(X, "precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }"), T.compileShader(X), T.attachShader(au, at), T.attachShader(au, X), T.linkProgram(au), T.useProgram(au), au.vertexPosAttrib = T.getAttribLocation(au, "attrVertex"), au.offsetUniform = T.getUniformLocation(au, "uniformOffset"), T.enableVertexAttribArray(au.vertexPosArray), T.vertexAttribPointer(au.vertexPosAttrib, U.itemSize, T.FLOAT, !1, 0, 0), T.uniform2f(au.offsetUniform, 1, 1), T.drawArrays(T.TRIANGLE_STRIP, 0, U.numItems), ai(S.toDataURL())
                }, Q = function () {
                    var T = null, S = document.createElement("canvas"), au = [];
                    try {
                        T = S.getContext("webgl") || S.getContext("experimental-webgl")
                    } catch (U) {
                    }
                    if (!T) {
                        return au
                    }
                    try {
                        au.push(T.getSupportedExtensions())
                    } catch (at) {
                    }
                    try {
                        au.push(A(T, S))
                    } catch (X) {
                    }
                    return au.join(";")
                }, x = function () {
                    var T = ["monospace", "sans-serif", "serif"], S = [], au = document.body,
                        U = document.createElement("span");
                    U.style.fontSize = "72px";
                    U.style.visibility = "hidden";
                    U.innerHTML = "wwwmmmmmmmmmmlli";
                    for (var at = function (aw) {
                        var av = {};
                        return U.style.fontFamily = aw, au.appendChild(U), av.height = U.offsetHeight, av.width = U.offsetWidth, au.removeChild(U), av
                    }, X = 0; X < T.length; X++) {
                        S[X] = at(T[X])
                    }
                    return function (ay) {
                        for (var aw = 0; aw < S.length; aw++) {
                            var ax = at(ay + "," + T[aw]), av = S[aw];
                            if (ax.height !== av.height || ax.width !== av.width) {
                                return !0
                            }
                        }
                        return !1
                    }
                }, R = function () {
                    for (var S = [aq("bMPzPMPbPozqbYRbzqb6PTPnPbPRPnx6PRPbzqb7PoPxP4xb"), aq("bMPbPTPzPRzqbPPMPnPxx6PTPnPxzqR6xbPb"), aq("bMPbPTPzPRzqb4PRPzxzPRxx"), aq("bMPbPTPzPRzqbYPoPnPxzqR6xbPb"), aq("bMPxPRPnP6xozqbPbz"), aq("bMxzPMPz"), aq("bMxzPMPzPoP6zqRbxoxqPRx6PRxbxbPoPnPx"), aq("bMxzPoPMP7zqbzP7PMP6Pj"), aq("bzPMxbPMPnPx"), aq("bzPMxRP4PMxRx6zq6o66"), aq("bzPRP7P7zqbYRb"), aq("bzPoxbx6xbxzPRPMPYzqRPPRxzPMzqR6PRxzPoPP"), aq("bzPTPbPTPnPozqbYRb"), aq("bzPTPTPjPYPMPnzqbTP7PbzqR6xbxoP7PR"), aq("bzxzPMPxPxPMPbPTP6PoPT"), aq("bzxzPTPMPbxxPMxo"), aq("b6PMP7PoPzxzPo"), aq("b6PMP7PoPPPTxzPnPoPMPnzqbPbz"), aq("b6PMx6xbPRP7P7PMxz"), aq("b6PMx6xRPMP7"), aq("b6PRPnxbPMxRxz"), aq("b6PRPnxbxRxzxozqbxPTxbP4PoP6"), aq("b6P4PMP7PjPbxRx6xbPRxz"), aq("b6PTP7PTPnPnPMzqbYRb"), aq("b6PTxqxqPRxzxqP7PMxbPRzqbxPTxbP4PoP6zqb7PoPxP4xb"), aq("bbPRP0PMRPxRzqb7bxb6zqR6PMPnx6zqbYPTPnPT"), aq("bbPRx6PbPRPYPTPnPM"), aq("bbbPbjPMPozYR6bz"), aq("bbPTxbxRPY"), aq("bRPnPxxzPMxPPRxzx6zqbYRb"), aq("bRxzPMx6zqbzPTP7PbzqboRbb6"), aq("bRxRxzPTx6xbPoP7PR"), aq("bPPMPnPxR6PTPnPx"), aq("bPPTxzxbPR"), aq("bPxzPMPnPjP7PoPnzqbxPTxbP4PoP6zqb4PRPMxPxo"), aq("bPxzPRPnP6P4zqR6P6xzPoxqxbzqbYRb"), aq("bxPMPzxzPoPTP7PM"), aq("bxPoPxPo"), aq("bxPox6P4PM"), aq("bxPTxRPbxozqbTP7PbzqR6xbxoP7PR"), aq("bxxRP7PoPY"), aq("bxxRPnPxR6PRPT"), aq("b4PMPRxbxbPRPnx6P6P4xxPRPoP7PRxz"), aq("b4PMxzxzPoPnPxxbPTPn"), aq("b4PoxzPMPxPoPnPTzqR6PMPnx6zqbxbz"), aq("boPYxqPMP6xb"), aq("boPnPPPTxzPYPMP7zqRzPTPYPMPn"), aq("bjPMP6x6xbbTPnPR"), aq("bjPoPnPTzqbYRb"), aq("bjPTx0xRPjPMzqbxPTxbP4PoP6zqRqxz6Pbn"), aq("b7PTP4PoxbzqbxxRP0PMxzPMxbPo"), aq("b7PTPYPM"), aq("b7xRP6PoPbPMzqbzxzPoPxP4xb"), aq("b7xRP6PoPbPMzqbPPMx4"), aq("bYPMPxPnPRxbPT"), aq("bYPMP7PxxRPnzqbxPTxbP4PoP6"), aq("bYPMxbxRxzPMzqbYRbzqR6P6xzPoxqxbzqb6PMxqPoxbPMP7x6"), aq("bYPRPnP7PT"), aq("bYPoPnPxb7PoRRzYbRx4xbbz"), aq("bYPTPTP7bzPTxzPMPn"), aq("bYR6zqRqbYPoPnP6P4PT"), aq("bYR6zqRzPRPPPRxzPRPnP6PRzqR6PMPnx6zqR6PRxzPoPP"), aq("bnPRxxx6zqbxPTxbP4PoP6zqbYRb"), aq("bnPoPMPxPMxzPMzqR6PTP7PoPb"), aq("bnxoPMP7PM"), aq("RqPMP7PMP6PRzqR6P6xzPoxqxbzqbYRb"), aq("RqPMxqxoxzxRx6"), aq("RqPRxzxqPRxbxRPM"), aq("RqP7PMxoPzPoP7P7"), aq("RqbYPoPnPxb7PoRR"), aq("RzPMP6P4PMPnPM"), aq("RzPTP6PjxxPRP7P7"), aq("R6PMxxPMx6PbPRPR"), aq("R6P6xzPoxqxbzqbYRbzqbzPTP7Pb"), aq("R6PRPxPTPRzqRqxzPoPnxb"), aq("R6P4PTxxP6PMxzPbzqbxPTxbP4PoP6"), aq("R6PoPYb4PRPo"), aq("R6PnPMxqzqboRbb6"), aq("RbP7xxPxbYPTPnPT"), aq("Rbxxzqb6PRPnzqbYRbzqb6PTPnPbPRPnx6PRPbzqbRx4xbxzPMzqbzPTP7Pb"), aq("RRPzxRPnxbxR"), aq("RRPYxqxRx6P4"), aq("RRPnPoxPPRxzx6"), aq("RRxbPTxqPoPM"), aq("RPP7PMPbPoPYPoxzzqR6P6xzPoxqxb"), aq("RxPoPbPRzqb7PMxbPoPn"), aq("nbjjjTnR0n4j"), aq("nR4Y4nnPoP4xnbj40YnR0n4j"), aq("nR4Y4nnPoP4xnbjjjTnR0n4j"), aq("nR4Y4nnPoP4xnR0n4jnbjYo6"), aq("nR4Y4nnPoP4xnRjY0onbj0oM"), aq("nR4Y4nnPoP4xnPoPjqno0Y4T"), aq("nR4Y4nnPoP4xnP0RjxnbjYo6"), aq("nR4Y4nnPoP4xnxoq0Rnx4T4q"), aq("nR4Y4nnPoP4xnxjj4PnojjoM"), aq("nR4Y4nnPoP4xn40M47nP0Rjx"), aq("nR4Y4nnPoP4xnoo0jPnbjo0P"), aq("nR0n4jnbjYo6"), aq("nRjoj7nRo74P"), aq("nRjn0nn4jY0Tnooj4RnojjoM"), aq("nPoPjqnR0n4jnbjYo6"), aq("nPoPjonP0Y06nR0xo0nbjYo6"), aq("nPoPjonP0Y06n444oznbjYo6"), aq("nP0RjxnbjYo6"), aq("noo0jPnbjo0P"), aq("nojjoMnbjYo6"), aq("nPoPjqnxjj4PnPo44nnbjYo6"), aq("nxjj4PnPo44nnbjYo6"), aq("nP0q4xnP0RjxnbjYo6"), aq("nbjjjTnR0n4jRTbxbz6z666M6z"), aq("nP0RjxnbjYo6RTbxbz6z666M6z"), aq("nRjn0nn4jY0TnP0Y06nojjoMnbjYo6"), aq("nR4Y4nnPoP4xnojjoMnbjYo6"), aq("nbj4jYnojjoMzqRqxzPT"), aq("nbj4jYnR0n4jzqRqxzPT"), aq("n44jjonPono7nbj4jYnbj40YnojjoM"), aq("n44jjonPono7nbj4jYnxjj4PnR0n4j")], X = [], T = 0; T < S.length; T++) {
                        var U = S[T];
                        x()(U) && X.push(U)
                    }
                    return X.join(";")
                };
                this.get = function () {
                    var T = [];
                    T.push(D());
                    T.push(H());
                    T.push(!!window.indexedDB);
                    document.body ? T.push(typeof document.body.addBehavior) : T.push("undefined");
                    T.push(typeof window.openDatabase);
                    T.push(navigator.cpuClass);
                    T.push(navigator.platform);
                    var S;
                    if (S = K._cav) {
                        S = document.createElement("canvas"), S = !(!S.getContext || !S.getContext("2d"))
                    }
                    S && (T.push(I()), T.push(Q()));
                    T.push(J());
                    S = [];
                    S.push(R());
                    S.push(navigator.userAgent);
                    S.push(navigator.language);
                    S.push(screen.colorDepth);
                    if (K._sr) {
                        var U = [screen.height, screen.width];
                        "undefined" !== typeof U && S.push(U.join("x"))
                    }
                    S.push((new Date).getTimezoneOffset());
                    S.push(navigator.doNotTrack);
                    S.push(window.ActiveXObject && K._actx ? B() : C());
                    U = [];
                    K._hs ? (U.push(K._hs(T.join("###"))), U.push(K._hs(S.join("###")))) : (U.push(ai(T.join("###"))), U.push(ai(S.join("###"))));
                    return U
                }
            }, ap = function (x) {
                if (-128 > x) {
                    return ap(128 - (-128 - x))
                }
                if (-128 <= x && 127 >= x) {
                    return x
                }
                if (127 < x) {
                    return ap(-129 + x - 127)
                }
                throw Error("1001")
            }, y = function (x, A) {
                return ap(x + A)
            }, aa = function (x, A) {
                x = ap(x);
                A = ap(A);
                return ap(x ^ A)
            }, ak = function (A, C) {
                if (null == A || null == C || A.length != C.length) {
                    return A
                }
                for (var x = [], D = 0, B = A.length; D < B; D++) {
                    x[D] = aa(A[D], C[D])
                }
                return x
            },
            V = [aq("6q"), aq("6M"), aq("6z"), aq("66"), aq("6b"), aq("6R"), aq("6P"), aq("6x"), aq("64"), aq("6o"), aq("PM"), aq("Pz"), aq("P6"), aq("Pb"), aq("PR"), aq("PP")],
            Y = function (x) {
                var A = [];
                A.push(V[x >>> 4 & 15]);
                A.push(V[x & 15]);
                return A.join("")
            }, ao = function (B) {
                if (null == B || 0 == B.length) {
                    return []
                }
                B = new String(B);
                for (var H = [], x = B.length / 2, I = 0, D = 0; D < x; D++) {
                    var C = parseInt(B.charAt(I++), 16) << 4, A = parseInt(B.charAt(I++), 16);
                    H[D] = ap(C + A)
                }
                return H
            }, ac = function (A) {
                if (null == A || void 0 == A) {
                    return A
                }
                A = encodeURIComponent(A);
                for (var B = [], x = A.length, C = 0; C < x; C++) {
                    if ("%" == A.charAt(C)) {
                        if (C + 2 < x) {
                            B.push(ao(A.charAt(++C) + "" + A.charAt(++C))[0])
                        } else {
                            throw Error("1009")
                        }
                    } else {
                        B.push(A.charCodeAt(C))
                    }
                }
                return B
            }, af = function (A, D, x, H, C) {
                if (null == A || 0 == A.length) {
                    return x
                }
                if (null == x) {
                    throw Error("1004")
                }
                if (A.length < C) {
                    throw Error("1003")
                }
                for (var B = 0; B < C; B++) {
                    x[H + B] = A[D + B]
                }
                return x
            }, ab = function (A) {
                for (var B = [], x = 0; x < A; x++) {
                    B[x] = 0
                }
                return B
            },
            ar = [-40, -14, -21, -99, -119, 96, -39, -81, -108, -36, -92, -88, 64, 104, -18, 0, 91, 30, -116, -123, -3, 12, -113, -94, 13, 106, 109, 72, -97, -125, -6, -86, 105, -10, 43, -104, -67, -46, 82, 22, 122, -33, 24, -2, -24, -8, -114, -7, -77, -51, 34, 113, -47, -26, 10, 7, 121, 115, -71, -55, -79, 116, 79, 73, -105, -73, 26, 23, 70, -57, -120, -44, 16, 58, 41, -50, 126, 66, -115, -93, -95, 17, 19, -34, 118, 51, 53, -72, 84, -117, -91, -83, -100, 48, 45, 32, -127, 61, -48, -45, 102, 2, -52, 89, 117, -76, 74, -56, 27, 31, -16, 76, -64, 124, 81, 54, 59, 123, 92, 71, 86, 25, -53, -87, 56, -28, -25, -89, -118, -75, -35, -37, -41, 3, -58, -1, 125, 80, -69, 65, -101, 114, -103, 85, 49, 8, -121, -13, 127, 63, -102, 69, -30, 120, 62, -124, -111, -60, 46, 20, 111, -65, 11, -59, -31, -66, -110, 50, -15, 68, -70, -96, -5, 14, 28, -90, 6, -9, -29, -112, 60, 87, 95, -85, -107, -68, 37, -61, -22, -42, 40, -43, -4, 78, 99, 29, -20, 5, 88, -23, -17, 18, -12, 15, 67, -80, 93, 47, 98, 94, -126, -128, 119, 107, 33, -11, -98, 21, -109, -63, 35, 38, 100, -32, -62, -82, 75, 36, 97, 108, -106, -78, 110, 57, 52, 90, -49, 101, 42, -54, -27, 112, 77, 4, 83, 44, 1, 103, 9, -74, -19, 55, -122, 39, -84, -38],
            al = function (A) {
                var B = [];
                if (null == A || void 0 == A || 0 == A.length) {
                    return ab(64)
                }
                if (64 <= A.length) {
                    B = [];
                    if (null != A && 0 != A.length) {
                        if (64 > A.length) {
                            throw Error("1003")
                        }
                        for (var x = 0; 64 > x; x++) {
                            B[x] = A[0 + x]
                        }
                    }
                    return B
                }
                for (x = 0; 64 > x; x++) {
                    B[x] = A[x % A.length]
                }
                return B
            }, Z = function (A) {
                if (null == A) {
                    return null
                }
                for (var C = [], x = 0, D = A.length; x < D; x++) {
                    var B = A[x];
                    C[x] = ar[16 * (B >>> 4 & 15) + (B & 15)]
                }
                return C
            }, z = aq("6M6b6x666bPMPb6qPb6o6R6bPP6obbP66R646P6zPbPb646M6oPMbzbPP66MbPbb64P66xPRP6b66o666bbP6466bz"),
            G = aq("b0R6bRR6R6bobTbnbobbzYRxRoRobb"), W = aq("RTxoPbPjP7x4PRPoPnxRxMRT");
        (function () {
            var A = aj(G);
            if (null == A || void 0 == A || "" == A) {
                return !1
            }
            var B;
            A = aj(W);
            if (null == A || void 0 == A || "" == A) {
                B = !1
            } else {
                try {
                    B = (A = parseInt(A)) && 23 <= A ? !0 : !1
                } catch (x) {
                    B = !1
                }
            }
            return B
        })() || F(G)
    })(this._nisas)
});