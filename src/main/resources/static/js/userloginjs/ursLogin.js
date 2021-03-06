$(function(){
    window.ursConfig = {
        newCDN: 1,
        product: "yyd",
        promark: "BHHeXmu",
        version: 3,
        host: "yuedu.163.com",
        productKey: "1dd143c50baa32228d62bd2fde007b4d",
        isHttps: 1,
        mode: "float",
        swidth: 237,
        customStyles: {
            imagePanel: {align: "top", borderRadius: "10px"},
            controlBar: {height: "23px", borderRadius: "10px"},
            gap: "10px"
        },
        capPadding: 2,
        capBarHeight: 40,
        includeBox: "login-container",
        skin: 1,
        page: "login",
        placeholder: {account: "邮箱帐号(含手机邮箱)", pwd: "6-16位密码，区分大小写"},
        needUnLogin: 1,
        defaultUnLogin: 0,
        single: 1,
        regUrl: "https://zc.reg.163.com/regInitialized?pd=yyd&pkid=DkElgsB&pkht=yuedu.163.com",
        cssDomain: /dev.*.yuedu.163.com|test.*.yuedu.163.com|pre.*.yuedu.163.com/.test(location.origin) ? location.origin + "/assets/css/" : "https://yuedust.yuedu.126.net/assets/css/",
        cssFiles: "ursLogin.css?" + new Date().getTime(),
        frameSize: {width: 250, height: 230},
        logincb: function (g, h) {
            if (typeof(targetUrl) != "undefined") {
                location.href = decodeURIComponent(targetUrl)
            } else {
                location.reload()
            }
        },
        regcb: function (g) {
        },
        errMsg: ""
    };
    if (!$("#login-layer").length) {
        $('<div id="login-layer" class="m-login-layer m-login-layer-wy" style="display: none;">			    <div class="lytt yy"><a class="lyclose j-close" style="display:block;">关闭</a>			        <h4>网易邮箱登录</h4></div>			    <div class="content">			        <div class="m-loginwrap">			        	<div class="m-loginwrap__main">			        		<div class="m-login" id="login-container"></div>			        	</div>			            <div class="m-loginswitch">			                <h6>其他帐号登录：</h6>			                <ul>			                    <li class="sj"><a><span class="login-icon"></span><div>手机号</div></a></li>			                    <li class="xl xllogin"><a><span class="login-icon"></span><div>新浪微博</div></a></li>			                    <li class="wx wxlogin"><a><span class="login-icon"></span><div>微信</div></a></li>			                </ul>			            </div>			        </div>			    </div>			</div>').appendTo($("body"))
    }
    window.ursLoad = {
        init: function () {
            this.isReady = false;
            this.readyCallback = [];
            this.loadUrsStyle()
        }, ready: function (g) {
            if (this.isReady) {
                g()
            } else {
                this.readyCallback.push(g)
            }
        }, loadUrsScript: function () {
            var g = this;
            var h = document.getElementById("ursScript");
            if (h) {
                h.parentNode.removeChild(h)
            }
            h = document.createElement("script");
            h.src = "https://urswebzj.nosdn.127.net/webzj_cdn101/message.js?random=" + new Date().getTime();
            h.id = "ursScript";
            h.onload = function (k) {
                URS && URS.setPkidAndPd({pkid: "BHHeXmu", pd: "yyd", mode: 1});
                g.isReady = true;
                for (var j = 0; j < g.readyCallback.length; j++) {
                    g.readyCallback[j]()
                }
            };
            document.body.appendChild(h)
        }, loadUrsStyle: function () {
            var g = document.getElementById("ursStyle");
            if (g) {
                ursScript.parentNode.removeChild(g)
            }
            g = document.createElement("link");
            g.id = "ursStyle";
            g.rel = "stylesheet";
            g.type = "text/css";
            g.onload = this.loadUrsScript.bind(this);
            g.onerror = this.loadUrsScript.bind(this);
            g.href = ursConfig.cssDomain + ursConfig.cssFiles;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(g)
        }
    };
    ursLoad.init();
    var e = function () {
        location.reload()
    };
    window.YD = (typeof YD == "undefined") ? {} : YD;
    YD.popTip = function (j) {
        var g = '<div id="J_FIXED" class="m-tipss" style="display:none;"><div id="J_TIPS" class="inner"></div></div>';
        if ($("#J_FIXED").length == 0) {
            $("body").prepend(g)
        }
        var i = j, h = $("#J_TIPS");
        h.empty().html(i);
        h.parent().fadeIn(300).delay(3000).fadeOut(300)
    };
    YD.openLayer = function (m, q) {
        var l = $(m), p = l.width(), i = l.height(), j = $(window).width(), k = $(window).height();
        var h = q == "off" ? "off" : "on";
        setTimeout(function () {
            if (h == "on") {
                YD.createMask()
            }
        }, 60);
        var o = $(document).scrollTop(), n = (k - i) / 2 + o, g = (j - p) / 2;
        l.css({top: n, left: g, "z-index": 8999}).show();
        $(".j-close", l).unbind().click(function (r) {
            r.preventDefault();
            l.trigger("hide");
            l.hide();
            if ($(".m-mask").length !== 0) {
                $(".m-mask").hide()
            }
        })
    };
    YD.createMask = function () {
        if ($(".m-mask").length === 0) {
            var g = $('<div class="m-mask" style="display:block;"></div>');
            g.height($(document).height());
            g.insertAfter($(".g-doc"))
        } else {
            $(".m-mask").eq(0).height($(document).height()).show()
        }
    };
    window.mobiReg = {};
    mobiReg.callbackReg = function (g) {
        switch (g) {
            case 0:
                e();
                break;
            case -1005:
                YD.popTip("密码不匹配，请重新输入密码");
                break;
            case 900:
                YD.popTip("手机验证码失效，请重新发送验证码");
                break;
            case 901:
                YD.popTip("手机验证码错误，请检查");
                break;
            case 400:
                YD.popTip("此号码已注册，请直接登录");
                break;
            case 905:
                YD.popTip("手机号码格式错误，请检查");
                break;
            default:
                YD.popTip("出错了，请稍后再试");
                break
        }
    };
    mobiReg.callbackPass = function (g) {
        switch (g) {
            case 0:
                YD.popTip("密码修改成功");
                $("#login-layer").hide();
                location.reload();
                break;
            case -1005:
                YD.popTip("密码不匹配，请重新输入密码");
                break;
            case 900:
                YD.popTip("手机验证码失效，请重新发送验证码");
                break;
            case 901:
                YD.popTip("手机验证码错误，请检查");
                break;
            case -1004:
                YD.popTip("此号码尚未注册，请检查");
                break;
            case 905:
                YD.popTip("手机号码格式错误，请检查");
                break;
            default:
                YD.popTip("出错了，请稍后再试");
                break
        }
    };

    function f(g) {
        this.options = g || {};
        this.init()
    }

    f.prototype.init = function () {
        this.eventBind();
        if (this.options.targetUrl) {
            window.targetUrl = this.options.targetUrl
        }
    };
    f.prototype.showEmailLogin = function () {
        console.log("showEmailLogin");
        if (!$("#x-URS-iframe").length) {
            $("#login-layer .content").html('<div class="m-loginwrap">									            <div class="m-loginwrap__main">									            	<div class="m-login" id="login-container"></div>									            </div>									            <div class="m-loginswitch">									                <h6>其他帐号登录：</h6>									                <ul>									                    <li class="sj"><a><span class="login-icon"></span><div>手机号</div></a></li>									                    <li class="xl xllogin"><a><span class="login-icon"></span><div>新浪微博</div></a></li>									                    <li class="wx wxlogin"><a><span class="login-icon"></span><div>微信</div></a></li>									                </ul>									            </div>									        </div>');
            var h = new URS(ursConfig)
        }
        var g = $("#login-layer");
        g.attr("class", "m-login-layer m-login-layer-wy").find("h4").text("网易邮箱登录");
        if ($(".m-loginswitch li.wy").length) {
            $(".m-loginswitch li.wy").attr("class", "sj").find("div").text("手机号")
        }
        g.show()
    };
    f.prototype.showMobileLogin = function () {
        var g = $("#login-layer"), h;
        if (g.find("#login-container").length) {
            h = '<iframe name="cellPhoneLoginTarget" style="display:none;">						     #document							   <html>							     <head></head>							     <body></body>							   </html>						   </iframe>						   <form action="//' + location.host + '/cellPhoneLogin.do" method="post" target="cellPhoneLoginTarget">						       <input type="hidden" name="operation" value="login">						       <div class="row" style="z-index:99999;margin-bottom:16px;">						           <div>						               <div class="cxt-input"><span class="ipt-wrap"><input type="text" name="cellPhone" class="ipt" autocomplete="off" placeholder="手机号码登录"></span></div>						           </div>						       </div>						       <div class="row"><span class="ipt-wrap"><input type="password" placeholder="登录密码" class="ipt" name="password"></span></div>						       <div class="row-3 errortip" style="display:none;"></div>						       <div class="row row-1">						           <input id="mobiLogCookie" type="checkbox" name="remember_me">						           <label for="mobiLogCookie" class="auto">两周内自动登录</label><a class="j-mobilereg" type="pw">忘记密码？</a></div>						       <div class="row j-checkarea" style="display:none;">						           <input type="text" placeholder="验证码" class="ipt checkcodeipt" name="checkCode"><img width="60" height="30" class="checkcodeimg"></div>						       <div class="row row-2">						           <button><span>登录</span></button>						       </div>						       <div class="row"><a class="wyt j-mobilereg">没有帐号？免费注册</a></div>						   </form>';
            $(".m-loginswitch li.sj").attr("class", "wy").find("div").text("邮箱登录");
            g.find("#login-container").html(h)
        } else {
            h = '<div class="m-loginwrap">								<div class="m-loginwrap__main">							       <div class="m-login" id="login-container">									   <iframe name="cellPhoneLoginTarget" style="display:none;">									       #document										   <html>										     <head></head>										     <body></body>										   </html>									   </iframe>									   <form action="//' + location.host + '/cellPhoneLogin.do" method="post" target="cellPhoneLoginTarget">									       <input type="hidden" name="operation" value="login">									       <div class="row" style="z-index:99999;margin-bottom:16px;">									           <div>									               <div class="cxt-input"><span class="ipt-wrap"><input type="text" name="cellPhone" class="ipt" autocomplete="off" placeholder="手机号码登录"></span></div>									           </div>									       </div>									       <div class="row"><span class="ipt-wrap"><input type="password" placeholder="登录密码" class="ipt" name="password"></span></div>									       <div class="row-3 errortip" style="display:none;"></div>									       <div class="row row-1">									           <input id="mobiLogCookie" type="checkbox" name="remember_me">									           <label for="mobiLogCookie" class="auto">两周内自动登录</label><a class="j-mobilereg" type="pw">忘记密码？</a></div>									       <div class="row j-checkarea" style="display:none;">									           <input type="text" placeholder="验证码" class="ipt checkcodeipt" name="checkCode"><img width="60" height="30" class="checkcodeimg"></div>									       <div class="row row-2">									           <button><span>登录</span></button>									       </div>									       <div class="row"><a class="wyt j-mobilereg">没有帐号？免费注册</a></div>									   </form>								   </div>								</div>							   <div class="m-loginswitch">							       <h6>其他帐号登录：</h6>							       <ul>							           <li class="wy"><a><span class="login-icon"></span><div>邮箱登录</div></a></li>							           <li class="xl xllogin"><a><span class="login-icon"></span><div>新浪微博</div></a></li>							           <li class="wx wxlogin"><a><span class="login-icon"></span><div>微信</div></a></li>							       </ul>							   </div>						   </div>';
            g.find(".content").html(h)
        }
        g.attr("class", "m-login-layer m-login-layer-mb").find("h4").text("手机号登录");
        g.show()
    };
    f.prototype.sinaLogin = function () {
        if (window.location.protocol == "https:") {
            var g = "https%3A%2F%2F" + window.location.host + "%2FweiboCallback.do%3Fsite%3D1%26from%3Dlogin%26fromHttps%3Dtrue"
        } else {
            var g = "http%3A%2F%2F" + window.location.host + "%2FweiboCallback.do%3Fsite%3D1%26from%3Dlogin%26fromHttps%3Dfalse"
        }
        window.open("https://api.weibo.com/oauth2/authorize?client_id=3626227865&response_type=code&state=&redirect_uri=" + g + "&forcelogin=false&display=", "sinaLoginWindow")
    };
    f.prototype.tencentLogin = function () {
        if (window.location.protocol == "https:") {
            var g = "https%3A%2F%2F" + window.location.host + "%2FweiboCallback.do%3Fsite%3D4%26from%3Dlogin%26fromHttps%3Dtrue"
        } else {
            var g = "http%3A%2F%2F" + window.location.host + "%2FweiboCallback.do%3Fsite%3D4%26from%3Dlogin%26fromHttps%3Dfalse"
        }
        window.open("https://open.t.qq.com/cgi-bin/oauth2/authorize?client_id=801078487&response_type=code&state=&redirect_uri=" + g + "&forcelogin=false", "tencentWeiboLoginWindow")
    };
    f.prototype.weixinLogin = function () {
        var g = "http%3A%2F%2Fyuedu.163.com%2FweiboCallback.do%3Fsite%3D7%26from%3Dlogin%26fromHttps%3Dfalse";
        if (window.location.protocol == "https:") {
            var g = "https%3A%2F%2Fyuedu.163.com%2FweiboCallback.do%3Fsite%3D7%26from%3Dlogin%26fromHttps%3Dtrue"
        }
        if (~location.host.indexOf("guofeng")) {
            g += "%26app%3Dguofeng"
        } else {
            if (~location.host.indexOf("caiwei")) {
                g += "%26app%3Dcaiwei"
            }
        }
        window.open("https://open.weixin.qq.com/connect/qrconnect?response_type=code&state=&redirect_uri=" + g + "&scope=snsapi_login&appid=wxc662b4239bb6644e", "weixinLoginWindow")
    };
    f.prototype.logout = function (g) {
        if (g) {
            location.href = "//" + window.location.host + "/logoutRedir.do?target=" + encodeURIComponent(g)
        } else {
            location.href = "//" + window.location.host + "/logout"
        }
    };
    f.prototype.checkMobile = function () {
        var h = $("#login-layer");
        var i = "";
        var g = h.data("type");
        if (g == "mobileForget") {
            i = "手机号找回密码"
        } else {
            i = "手机号注册"
        }
        h.attr("class", "m-login-layer m-login-layer-mb");
        h.find("h4").text(i);
        h.find(".content").html('<div class="m-regwrap">											<div class="m-regstep-1">											  <p>需要验证你的手机号码，该号码不会对其他人公开</p>											  <p style="display: none;" id="mobileCodeTip"><em></em></p>											  <p class="check-code">											      <input type="text" class="text J_CheckCodeInput">											      <img src="/captcha.do">											  </p>											  <p class="inputpara">											    <input type="text" placeholder="请输入手机号码">											    <a class="next j-getma">获取验证码</a>											  </p>											</div>											<div class="m-regback">											  <a class="backtolog">&lt;&lt;返回登录</a>											</div>										  </div>')
    };
    f.prototype.eventBind = function () {
        var g = this;
        g.errorCode = [];
        g.errorCode["-1001"] = "对不起，您的验证码过期。";
        g.errorCode["-1002"] = "对不起，您的验证码无效。";
        g.errorCode["-1003"] = "对不起，此号码已注册。";
        g.errorCode["-1004"] = "对不起，此号码尚未注册。";
        g.errorCode["-1005"] = "对不起，您的密码错误。";
        g.errorCode["-1"] = "对不起，您的图形验证码错误。";
        g.errorCode["900"] = "对不起，您的手机验证码失效。";
        g.errorCode["901"] = "对不起，您的手机验证码错误。";
        g.errorCode["902"] = "对不起，您的短信请求次数超过限制。";
        g.errorCode["905"] = "对不起，您的手机号码格式错误。";
        g.errorCode["-769"] = "参数错误。";
        var i = $("#login-layer");
        var h = function () {
            var j = 59;
            g.Timer = setInterval(function () {
                var k = "";
                if (j > 9) {
                    k = "00:" + j
                } else {
                    k = "00:0" + j
                }
                $(".m-regwrap .timer").text(k);
                j--;
                if (j < 0) {
                    $(".j-ReGetma").removeClass("blocked");
                    clearInterval(g.Timer)
                }
            }, 1000)
        };
        i.on("click", "a.j-close", function () {
            i.hide()
        });
        i.on("click", "li.sj", function () {
            g.showMobileLogin();
            $(this).attr("class", "wy").html('<a><span class="login-icon"></span><div>邮箱登录</div></a>')
        }).on("click", "li.wy", function () {
            g.showEmailLogin();
            $(this).attr("class", "sj").html('<a><span class="login-icon"></span><div>手机号</div></a>')
        }).on("click", "li.xl", function () {
            g.sinaLogin()
        }).on("click", "li.tx", function () {
            g.tencentLogin()
        }).on("click", "li.wx", function () {
            g.weixinLogin()
        });
        i.on("click", '.j-mobilereg[type="pw"]', function () {
            i.data("type", "mobileForget");
            g.checkMobile()
        });
        i.on("click", ".wyt.j-mobilereg", function () {
            i.data("type", "mobileReg");
            g.checkMobile()
        });
        i.on("click", ".backtolog", function () {
            g.showMobileLogin()
        });
        i.on("click", ".j-getma", function () {
            if ($(this).hasClass("disable")) {
                return
            }
            var j = $(".inputpara input").val();
            var l = $(".J_CheckCodeInput").val();
            if (l.length < 4) {
                $("#mobileCodeTip em").text("请输入如图所示的验证码");
                $("#mobileCodeTip").show()
            } else {
                if (j.length != 11 || j[0] != "1") {
                    $("#mobileCodeTip em").text("请输入正确的手机号码");
                    $("#mobileCodeTip").show()
                } else {
                    i.data("phoneNumber", j);
                    var k = i.data("type") === "mobileReg" ? 1 : 2;
                    $.ajax({
                        url: "/cellPhoneAccount.do",
                        type: "POST",
                        data: {operation: "verifyCode", type: k, cellPhone: j, code: l},
                        success: function (m) {
                            if (m.resultCode === 0) {
                                var n = "<p><span>已经向手机号</span><span>" + j + '</span><span>发送验证短信</span></p>										    <p style="display:none;" id="mobileCodeTip"><em></em></p>										    <p class="inputpara">										        <input type="text" placeholder="请输入验证码"><a class="next j-sendma">下一步</a>										    </p>										    <p style="margin:10px 0 0 0;">										    	<a class="link changecell">选择其他手机号码</a><span class="sep">|</span><a class="link j-ReGetma blocked">重新获取验证码</a><span class="timer">00:60</span>										    </p>';
                                $(".m-regstep-1").html(n);
                                h()
                            } else {
                                $("#mobileCodeTip em").text(g.errorCode[m.resultCode]);
                                $("#mobileCodeTip").show();
                                if (m.resultCode === -1) {
                                    $(".check-code img").trigger("click");
                                    $(".J_CheckCodeInput").val("").focus()
                                }
                            }
                        },
                        error: function () {
                        }
                    })
                }
            }
        });
        i.on("click", ".j-ReGetma", function () {
            var l = $(this);
            if (!l.hasClass("blocked")) {
                l.addClass("blocked");
                var k = i.data("type") === "mobileReg" ? 1 : 2;
                var j = i.data("phoneNumber");
                $.ajax({
                    url: "/cellPhoneAccount.do",
                    type: "POST",
                    data: {operation: "verifyCode", type: k, cellPhone: j},
                    success: function (m) {
                        if (m.resultCode === 0) {
                            h()
                        } else {
                            $("#mobileCodeTip em").text(g.errorCode[m.resultCode]);
                            $("#mobileCodeTip").show()
                        }
                    },
                    error: function () {
                    }
                })
            }
        });
        i.on("click", ".changecell", function () {
            if (g.Timer) {
                clearInterval(g.Timer)
            }
            g.checkMobile()
        });
        i.on("click", ".next.j-sendma", function () {
            var l = $(".inputpara input").val();
            var k = i.data("type") === "mobileReg" ? 1 : 2;
            var j = i.data("phoneNumber");
            $.ajax({
                url: "/cellPhoneAccount.do",
                type: "POST",
                data: {operation: "checkCode", type: k, cellPhone: j, verifyCode: l},
                success: function (o) {
                    if (o.resultCode === 0) {
                        var n = o.signature;
                        var m = o.cellPhone;
                        var r = o.verifyCode;
                        if (k === 1) {
                            var s = '<div>										        <iframe name="cellPhoneRegTarget" style="display:none;"></iframe>										        <form id="cellPhoneRegForm" action="//' + location.host + '/cellPhoneAccount.do" method="post" target="cellPhoneRegTarget">										            <div class="m-regstep-2">										                <input type="hidden" name="operation" value="register">										                <input type="hidden" name="cellPhone" value="' + m + '">										                <input type="hidden" name="verifyCode" value="' + r + '">										                <input type="hidden" name="signature" value="' + n + '">										                <div>										                    <p><span>设置昵称</span><em class="j-warning0" style="display: none;">昵称长度2-15字符</em></p>										                    <p>										                        <input class="nickname" type="text" placeholder="请输入2-15个字的昵称" name="nickName">										                    </p>										                    <p>性别</p>										                    <p><span class="gender" style="margin:0 90px 0 0;"><input type="radio" name="gender" value="1" id="male" checked=""><label for="male">男</label></span><span class="gender"><input type="radio" name="gender" value="0" id="female"><label for="female">女</label></span></p>										                </div>										                <div>										                    <p><span>设置密码</span><em class="j-warning1" style="display:none;">密码长度不少于6位</em></p>										                    <p>										                        <input class="pw pw-f" type="password" placeholder="不少于6位" name="password">										                    </p>										                    <p><span>确认密码</span><em class="j-warning2" style="display:none;">两次密码不一致</em></p>										                    <p>										                        <input class="pw pw-s" type="password" placeholder="不少于6位" name="passwordConfirm">										                    </p>										                </div>										                <p>										                    <a class="done j-done-1">完成</a>										                </p>										                <p><em class="reg-result" style="display:none;"></em></p>										            </div>										        </form>										    </div>										    <div class="m-regback"><a class="backtolog">&lt;&lt;返回登录</a></div>';
                            $(".m-regwrap").html(s);
                            var p = {nickname: false, password1: false, password2: false};
                            $("#cellPhoneRegForm .nickname").on("input propertychange", function () {
                                var u = $(this);
                                var t = u.val();
                                if (t.length < 2 || t.length > 15) {
                                    $("em.j-warning0").show()
                                } else {
                                    $("em.j-warning0").hide();
                                    p.nickname = true
                                }
                            });
                            $("#cellPhoneRegForm .pw-f").on("input propertychange", function () {
                                var u = $(this);
                                var t = u.val();
                                if (t.length < 6) {
                                    $("em.j-warning1").show()
                                } else {
                                    $("em.j-warning1").hide();
                                    p.password1 = true
                                }
                            });
                            $("#cellPhoneRegForm .pw-s").on("input propertychange", function () {
                                var u = $(this);
                                var t = u.val();
                                if (t !== $(".pw-f").val()) {
                                    $("em.j-warning2").show()
                                } else {
                                    $("em.j-warning2").hide();
                                    p.password2 = true
                                }
                            });
                            $("#cellPhoneRegForm .j-done-1").on("click", function () {
                                if (p.nickname && p.password1 && p.password2) {
                                    $("#cellPhoneRegForm").submit()
                                }
                            })
                        } else {
                            var s = '<div>										        <iframe name="cellPhoneRegTarget" style="display:none;"></iframe>										        <form id="cellPhoneRepwdForm" action="//' + location.host + '/cellPhoneAccount.do" method="post" target="cellPhoneRegTarget">										            <div class="m-regstep-2">										                <input type="hidden" name="operation" value="modifyPassword">										                <input type="hidden" name="cellPhone" value="' + m + '">										                <input type="hidden" name="verifyCode" value="' + r + '">										                <input type="hidden" name="signature" value="' + n + '">										                <div>										                    <p><span>设置密码</span><em class="j-warning1" style="display:none;">密码长度不少于6位</em></p>										                    <p>										                        <input class="pw pw-f" type="password" placeholder="不少于6位" name="password">										                    </p>										                    <p><span>确认密码</span><em class="j-warning2" style="display:none;">两次密码不一致</em></p>										                    <p>										                        <input class="pw pw-s" type="password" placeholder="不少于6位" name="passwordConfirm">										                    </p>										                </div>										                <p>										                    <a class="done j-done-1" disabled="">完成</a>										                </p>										                <p><em class="reg-result" style="display:none;"></em></p>										            </div>										        </form>										    </div>										    <div class="m-regback"><a class="backtolog">&lt;&lt;返回登录</a></div>';
                            $(".m-regwrap").html(s);
                            var q = {password1: false, password2: false};
                            $("#cellPhoneRepwdForm .pw-f").on("input propertychange", function () {
                                var u = $(this);
                                var t = u.val();
                                if (t.length < 6) {
                                    $("em.j-warning1").show()
                                } else {
                                    $("em.j-warning1").hide();
                                    q.password1 = true
                                }
                            });
                            $("#cellPhoneRepwdForm .pw-s").on("input propertychange", function () {
                                var u = $(this);
                                var t = u.val();
                                if (t !== $(".pw-f").val()) {
                                    $("em.j-warning2").show()
                                } else {
                                    $("em.j-warning2").hide();
                                    q.password2 = true
                                }
                            });
                            $("#cellPhoneRepwdForm .j-done-1").on("click", function () {
                                if (q.password1 && q.password2) {
                                    $("#cellPhoneRepwdForm").submit()
                                }
                            })
                        }
                    } else {
                        $("#mobileCodeTip em").text(g.errorCode[o.resultCode]);
                        $("#mobileCodeTip").show()
                    }
                }
            })
        });
        i.on("click", ".check-code img", function () {
            $(this).attr("src", "/captcha.do?" + new Date().getTime())
        })
    };
    window.YueduLogin = f;
    window.login163 = function (h) {
        var g = new f({targetUrl: h});
        g.showEmailLogin()
    };
    window.log163out = function (h) {
        var g = new f();
        g.logout(h)
    };
    var d = function (g) {
        targeturl = $("input[name^='loginTargetUrl']");
        if (g === "success") {
            if (targeturl.length > 0 && targeturl.val().length > 0) {
                window.location.href = targeturl.val()
            } else {
                e()
            }
        } else {
            if (g === "notRegistered") {
                $("#login-container .errortip").text("手机号未注册").show()
            } else {
                if (g === "authenticationFailed") {
                    $("#login-container .errortip").text("密码错误").show()
                } else {
                    if (g === "notRegisteredNeedCode") {
                        $("#login-container .errortip").text("手机号未注册").show();
                        c()
                    } else {
                        if (g === "authFailNeedCode") {
                            $("#login-container .errortip").text("密码错误").show();
                            c()
                        } else {
                            if (g === "errorCaptcha") {
                                $("#login-container .errortip").text("验证码错误").show();
                                c()
                            } else {
                                $("#login-container .errortip").text("错误").show()
                            }
                        }
                    }
                }
            }
        }
    };

    function c() {
        if ($(".j-checkarea .checkcodeimg").length) {
            $(".j-checkarea .checkcodeimg").attr("src", "/captcha.do?d=" + (new Date()).getTime())
        } else {
            $(".j-checkarea").append('<img src="/captcha.do?d=' + (new Date()).getTime() + '" width="60" height="30" class="checkcodeimg"/>')
        }
        $(".j-checkarea").show()
    }

    var a = function (k) {
        var l = '		<div id="J_NickName" style="z-index: 8999;" class="m-newlayer m-newlayer-log f-db1" >			<h2><span>输入昵称</span><a href="javascript:void(0)" class="j-close"></a></h2>			<div class="inner">				<div class="content" style="margin-top:-10px;">					<p class="title">昵称</p>					<p id="J_NickTip" class="nktip" style="display:none" >请输入2-15个字的昵称</p>					<p><input class="ipt" id="J_NickIpt" type="text" placeholder="请输入2-15个字的昵称"/></p>					<p class="title">性别</p>					<p class="title" style="margin-top:0;"><span class="gender" style="margin:0 90px 0 0"><input type="radio" name="gender" checked="checked" value="1" id="male" /><label for="male">男</label></span><span class="gender"><input type="radio" name="gender" value="0" id="female" /><label for="female">女</label></span></p>				</div>				<div class="button">					<a id="J_SendNickname" class="ok">完成</a>				</div>			</div>		</div>';
        $("body").append(l);
        var i = $("#J_NickTip");
        var g = $("input[name^='loginTargetUrl']");
        if (k) {
            $("#J_NickIpt").val(k)
        }
        var j = function () {
            $("#J_SendNickname").click(function () {
                var n = $.trim($("#J_NickIpt").val()), m = $('input[name="gender"]:checked').val();
                if (n.length < 2 || n.length > 15) {
                    i.fadeIn(300);
                    return
                }
                $.ajax({
                    type: "POST",
                    url: "/snsLogin.do",
                    data: {operation: "initProfile", nickName: n, gender: m},
                    dataType: "json",
                    success: function (o) {
                        if (g.length > 0 && g.val().length > 0) {
                            window.location.href = g.val()
                        } else {
                            e()
                        }
                    },
                    error: function () {
                        YD.popTip("出错了，请稍候再试")
                    }
                })
            })
        };
        j();
        var h = document.getElementById("$_qLoginDivNew");
        if (h) {
            h.style.zIndex = 4999
        }
        YD.openLayer("#J_NickName")
    };
    var b = function () {
        var g = $("input[name^='loginTargetUrl']");
        if (g.length > 0 && g.val().length > 0) {
            window.location.href = g.val()
        } else {
            e()
        }
    };
    if (YD.Header == undefined) {
        YD.Header = {}
    }
    YD.Header.mobileCallback = d;
    YD.Header.externalTempLogin = a;
    YD.Header.externalFormalLogin = b
}) + function () {
    if (!$.cookie) {
        return
    }
    var a = {isLogin: !1, userId: null};
    var c = $.cookie("P_INFO");
    var b = $.cookie("S_INFO");
    if (c) {
        c = c.split("|");
        a.userId = c[0];
        if (c[2] == 1 || c[2] == 0 && b) {
            a.isLogin = !0
        }
    }
    window.G_USER = a
}();