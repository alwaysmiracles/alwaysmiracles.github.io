(function(config) {
    var ba = navigator.userAgent.toLowerCase(),
        ca = window,
        fa = document,
        ga = fa.documentElement;

    function ia(a) {
        return -1 !== ba.indexOf(a)
    }
    var oa = /([a-z0-9]*\d+[a-z0-9]*)/;

    function pa() {
        var a = qa;
        if (!a) return null;
        var a = a.toLowerCase(),
            b = null;
        if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
        a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
        if (0 <= a.indexOf("intel")) {
            b = ["Intel"];
            0 <= a.indexOf("mobile") && b.push("Mobile");
            (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
            if (0 <= a.indexOf("haswell")) b.push("Haswell");
            else if (0 <= a.indexOf("ivy")) b.push("HD 4000");
            else if (0 <= a.indexOf("sandy")) b.push("HD 3000");
            else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else {
                0 <= a.indexOf("hd") && b.push("HD");
                var c = a.match(oa);
                c && b.push(c[1].toUpperCase())
            }
            return b = b.join(" ")
        }
        return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
        b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(oa)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }
    var ra = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
        sa = "ActiveXObject" in ca,
        va = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || sa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
        wa = ia("windows nt"),
        xa = -1 !== ba.search(/windows nt [1-5]\./),
        ya = -1 !== ba.search(/windows nt 5\.[12]/),
        za = xa && !ya;
    ia("windows nt 10");
    var Da = ia("windows phone"),
        Ea = ia("macintosh"),
        Fa = ia("Mb2345Browser"),
        Ga = ia("ipad;") || ia("ipad "),
        Ha = Ga && va,
        Ka = ia("ipod touch;"),
        La = ia("iphone;") || ia("iphone "),
        Ma = La || Ga || Ka,
        Na = Ma && -1 !== ba.search(/ os [456]_/);
    Ma && ba.search(/ os [4-8]_/);
    Ma && ba.search(/ os [78]_/);
    Ma && ia("os 8_");
    var Qa = Ma && ia("os 10_"),
        Ra = ia("android"),
        Sa = -1 !== ba.search(/android [123]/);
    ia("android 4");
    Ra && -1 === ba.search(/android [1-4]/) || ba.search(/android 4.4/);
    var Ta = Ra ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other",
        Ua = sa && !ca.XMLHttpRequest,
        Va = sa && !fa.querySelector,
        Wa = sa && !fa.addEventListener,
        Xa = sa && ia("msie 9"),
        Ya = sa && ia("msie 10"),
        Za = sa && ia("rv:11"),
        $a = Wa || Xa,
        ab = ia("edge"),
        bb = ia("qtweb"),
        cb = ia("ucbrowser"),
        db = ia("alipay") || Ra && cb,
        eb = ia("miuibrowser"),
        fb = ia("micromessenger"),
        gb = ia("mqqbrowser"),
        hb = ia("baidubrowser"),
        chrome = (ia("chrome") || ia("crios")) && !fb && !hb && !gb && !ab && !eb,
        ib = chrome && ia("chromium"),
        jb = chrome && !ib && 30 < parseInt(ba.split("chrome/")[1]),
        kb = ia("firefox"),
        lb = kb && 27 < parseInt(ba.split("firefox/")[1]),
        mb = (Ea || Ma) && ia("safari") && ia("version/"),
        nb = Ea && mb && 7 < parseInt(ba.split("version/")[1]),
        ob = Ma && ia("aliapp"),
        pb = Ma && (!gb && !cb && !fb && !chrome && !kb && !mb || ob && !cb),
        qb = Ra || Ma || Da || ia("mobile"),
        rb = "ontouchstart" in fa,
        sb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
        tb = ca.navigator && !!ca.navigator.maxTouchPoints,
        ub = !rb && (tb || sb),
        vb = rb || ub,
        wb = function() {
            if (!qb) return ca.devicePixelRatio || 1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try {
                if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta");
                else return 1
            } catch (b) {
                return 1
            }
            for (var c = a.length - 1; 0 <= c; c -= 1)
                if ("viewport" === a[c].name) {
                    var c = a[c].content,
                        d; - 1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                    a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                    c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                    if (d) {
                        if (c >= a) return d > c ? c : d < a ? a : d
                    } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
                    console && console.log && console.log("viewport参数不合法");
                    return null
                }
        }(),
        xb = va && (!qb || !!wb && 1 <= wb),
        yb = sa && "transition" in ga.style,
        zb = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        Ab = fa.createElement("canvas"),
        Bb = !(!Ab || !Ab.getContext),
        Cb = window.URL || window.webkitURL,
        Db = !sa && !ab && !(cb && Ra) && window.Worker && Cb && Cb.createObjectURL && window.Blob,
        Eb = "",
        qa = "",
        Fb = 0,
        Ib = window.forceWebGL ? {
            alpha: !0,
            antialias: !0,
            depth: !0
        } : {
            alpha: !0,
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !0,
            stencil: !0
        },
        Jb = function() {
            if (!window.forceWebGL && (!Bb || !Db || pb && ob && !cb)) return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try {
                    b = Ab.getContext(a[c], Ib)
                } catch (d) {}
                if (b) {
                    if (b.drawingBufferWidth !== Ab.width || b.drawingBufferHeight !== Ab.height) break;
                    if (window.forceWebGL) return Eb = a[c], Fb = Infinity, !0;
                    if (!b.getShaderPrecisionFormat ||
                        !b.getParameter || !b.getExtension) break;
                    Fb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e) break;
                    Fb = Math.min(Fb, e[0], e[1]);
                    mb && "mac" === Ta && (Fb = Math.min(Fb, 4096));
                    e = Math.max(screen.width, screen.height);
                    xb && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > Fb) break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
                    qa = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
                    if ((b = pa()) &&
                        -1 !== ra.indexOf(b)) break;
                    Eb = a[c];
                    return !0
                }
            }
            return !1
        }(),
        Kb = Jb && (jb || lb || nb) && ("mac" === Ta || "windows" === Ta) && !qb,
        Lb = !Bb || bb || Da || qb && kb || Xa || Na || Ha || Ka || Sa || ia("gt-n710") || za,
        Mb = !Lb && !Kb,
        Nb = Kb ? "vw" : Lb ? "d" : Mb ? "dv" : "v",
        Ob = ia("webkit"),
        Pb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix,
        Qb = "MozPerspective" in ga.style,
        Rb = "OTransition" in ga.style,
        Sb = yb || Pb || Qb || Rb,
        Tb = void 0 !== config[8] ? config[8] : !0,
        Ub = void 0 !== config[9] ? config[9] : !0,
        Vb = void 0 !== config[10] ? config[10] : !0,
        Wb = void 0 !== config[11] ? config[11] :
            !0,
        Xb = void 0 !== config[12] ? config[12] : null,
        Yb = !zb && qb && Bb,
        Zb = !0;
    try {
        if ("undefined" === typeof ca.localStorage) Zb = !1;
        else {
            var $b = (new Date).getTime() + "";
            ca.localStorage.setItem("_test", $b);
            ca.localStorage.getItem("_test") !== $b && (Zb = !1);
            ca.localStorage.removeItem("_test")
        }
    } catch (ac) {
        Zb = !1
    }
    var bc = parseInt(ba.split("chrome/")[1]),
        cc = Tb && Bb;
    config.l = {
        Tqa: Ga,
        Uqa: La,
        size: La ? 100 : Ra ? 200 : 500,
        Wy: Ea,
        bza: wa,
        lD: Ma,
        cEa: Qa,
        Rl: Ra,
        ola: Sa,
        g3: db,
        jz: Ta,
        GH: hb,
        bva: gb,
        hE: mb,
        N9: fb,
        os: sa,
        vi: Ua,
        dv: Va,
        z4: Xa,
        y4: Ya,
        ye: Wa,
        B4: $a,
        Xqa: Za,
        zoa: ab,
        $qa: sa && !Za,
        Tsa: Fa,
        ys: Zb,
        Gi: cc && Zb && Wb && !qb && chrome,
        Jf: Xb,
        geolocation: qb || sa && !Wa || ab,
        rya: cb,
        $K: cb && !chrome,
        chrome: chrome,
        G2: !0,
        JQ: kb,
        ba: qb,
        eta: qb && Ob,
        V5: qb && Pb,
        dta: qb && ca.opera,
        Mc: va,
        iL: wb,
        ja: xb,
        If: vb,
        X5: sb,
        hT: tb,
        Y6: ub,
        Cma: chrome && 57 <= bc,
        Dma: !qb && chrome && 64 <= bc,
        L9: Ob,
        Yqa: yb,
        M9: Pb,
        opa: Qb,
        Xta: Rb,
        BH: Sb,
        Lo: zb,
        $k: Bb,
        mS: Db,
        Oz: Vb,
        Df: Kb,
        I9: Eb,
        J9: Ib,
        yR: qa,
        Rsa: Fb,
        Cza: !1,
        qu: Tb && !Lb,
        p1: Tb ? Nb : "d",
        L1: Tb ? Jb : !1,
        MK: cc,
        fp: Tb && Jb,
        oEa: Tb && (!Lb || Jb),
        gq: Ub && !!ca.WebSocket && !hb,
        $Ea: Yb,
        fua: Bb || Yb ? "c" : "d"
    };
    var dc = config;
    config = void 0;
    var ec = {
        overlay: ["style"],
        "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
        "AMap.IndoorMap3D": ["Map3D"],
        "AMap.MarkerList": ["AMap.TplUtils"],
        Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"],
        "AMap.Heatmap": ["AMap.CustomLayer"],
        "AMap.DistrictLayer": ["MVT"],
        vectorForeign: ["gridmap", "MVT"],
        "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"],
        "AMap.LabelsLayer": ["rbush", "promise"]
    };
    window.AMap ? (window.AMap.version = "1571644530085", window.AMap.dL = {
        bM: function(a) {
            a(dc)
        }
    }) : window.AMap = {
        version: "1571644530085",
        dL: {
            bM: function(a) {
                a(dc)
            }
        }
    };
    dc.Cj = "1571644530085";
    dc.Bu = ec;
    dc.GJ = "raster";
    for (var fc = document.head || document.getElementsByTagName("head")[0], gc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
        dc[2].split(",")[0] + "/"), hc = null, ic = 0, jc = fc.childNodes.length; ic < jc; ic++)
        if (1 === fc.childNodes[ic].nodeType) {
            hc = fc.childNodes[ic];
            break
        }
    if (gc)
        if (fc) {
            var kc = document.createElement("style");
            kc.setAttribute("type", "text/css");
            kc.setAttribute("class", "AMap.style");
            kc.styleSheet ? kc.styleSheet.cssText = gc : kc.innerHTML = gc;
            hc ? fc.insertBefore(kc, hc) : fc.appendChild(kc)
        } else document.write("<style type='text/css'>" + gc + "</style>");
    var g = g || {
            Ba: {
                Be: 0,
                Uq: [],
                yj: {}
            }
        },
        z = {
            o: {},
            control: {},
            A: {}
        };
    g.NCa = function(a) {
        var b = Function;
        return function() {
            return (new b("return " + a))()
        }
    }();
    g.CLASS_NAME = "AMap";
    g.c = g.BuryPoint = {};
    g.c.add = g.BuryPoint.add = function(a, b, c) {
        a.M4 || a.D || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.gA.ap(a, b, c))
    };
    var lc = {
        lang: 1,
        baseRender: 1,
        overlayRender: 1,
        viewMode: 1
    };
    g.c.wa = g.BuryPoint.addOptions = function(a, b) {
        if (!a.Zta)
            if (b && (b.innerLayer || b.innerOverlay)) a.M4 = !0;
            else {
                a.Zta = !0;
                var c = a.CLASS_NAME;
                if (c) {
                    c = c.replace("AMap.", "");
                    g.gA.ap(c);
                    b = b || {};
                    for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in lc ? g.gA.ap(c, d, b[d]) : g.gA.ap(c, d))
                }
            }
    };
    g.aa = function() {};
    g.aa.extend = g.aa.extend = function(a) {
        function b() {}

        function c() {
            var a = this.initialize || this.r;
            a && a.apply(this, arguments);
            if (!d && this.Fi) {
                a = document.createElement("style");
                a.setAttribute("type", "text/css");
                this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
                this.Fi = this.Fi.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.w.yb + "/");
                a.styleSheet ? a.styleSheet.cssText = this.Fi : a.innerHTML = this.Fi;
                for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++)
                    if (1 ===
                        b.childNodes[e].nodeType) {
                        c = b.childNodes[e];
                        break
                    }
                c ? b.insertBefore(a, c) : b.appendChild(a)
            }
            d = !0
        }
        var d = !1;
        b.prototype = this.prototype;
        var e = new b;
        e.constructor = c;
        c.prototype = e;
        c.prototype.zh = c.prototype["super"] = function(a) {
            return a.callee.la.apply(this, a)
        };
        for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
        a.B8 && (g.extend(c, a.B8), a.B8 = null);
        a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null);
        a.B && e.B && (a.B = g.extend({}, e.B, a.B));
        var h = e.constructor.wra,
            k = {};
        if (void 0 !== h)
            for (f in h) h.hasOwnProperty(f) &&
            (k[h[f]] = f);
        for (f in a)
            if (Object.prototype.hasOwnProperty.call(a, f)) {
                var l = f,
                    m = f;
                h && k[f] && (m = k[f]);
                "function" === typeof a[l] && "function" === typeof e[m] && (a[l].la = e[m])
            }
        g.extend(e, a);
        a.toString && (e.toString = a.toString);
        c.Xc = this.prototype;
        return c
    };
    g.aa.zb = g.aa.include = function(a) {
        g.extend(this.prototype, a)
    };
    g.extend = function(a) {
        var b = Array.prototype.slice.call(arguments, 1),
            c, d, e, f;
        d = 0;
        for (e = b.length; d < e; d += 1)
            if (f = b[d] || {}, Object.assign) Object.assign(a, f);
            else
                for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
        return a
    };
    g.aa.Pb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) {
                var c = a[b];
                if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]);
                else
                    for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
            }
    };
    g.gA = {
        yj: {},
        getKey: function(a, b) {
            a = a || "";
            return void 0 !== b && a ? a + "@" + b : a
        },
        ap: function(a, b, c) {
            this.yj[a] || (this.yj[a] = {});
            b = this.getKey(b, c);
            void 0 == this.yj[a][b] && (this.yj[a][b] = 0)
        },
        send: function() {
            var a = [],
                b;
            for (b in this.yj)
                if (this.yj.hasOwnProperty(b)) {
                    var c = this.yj[b],
                        d = [],
                        e;
                    for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
                    d.length && a.push(b + "~" + d.join(","))
                }
            a.length && (a = ["type=nfl", "k=" + g.w.key, "m=" + (g.l.ba ? 1 : 0), "pf=" + g.l.jz, "v=" + g.w.zr, "branch=JSAPI", "log=" + a.join("!")], a = g.w.Fc + "://webapi.amap.com/count?" +
                a.join("&"), new g.fb.tb(a))
        }
    };
    setInterval(function() {
        g.gA.send()
    }, 1E4);
    g.va = {
        h: function(a, b, c, d, e) {
            if (this.ke(a, b, c || this)) return this;
            var f = this.df = this.df || {};
            f[a] = f[a] || [];
            e ? f[a].unshift({
                ub: b,
                Ve: c || this,
                vj: d
            }) : f[a].push({
                ub: b,
                Ve: c || this,
                vj: d
            });
            return this
        },
        ke: function(a, b, c) {
            var d = this.df;
            if (b && c) {
                if (d && a in d && d[a])
                    for (var e = 0; e < d[a].length; e += 1)
                        if (d[a][e].ub === b && d[a][e].Ve === c) return !0;
                return !1
            }
            return d && a in d && d[a] && 0 < d[a].length
        },
        G: function(a, b, c) {
            if (!this.ke(a)) return this;
            var d = this.df;
            if (d && d[a])
                for (var e = 0; e < d[a].length; e += 1)
                    if (!(d[a][e].ub !== b && "mv" !==
                        b || c && d[a][e].Ve !== c)) {
                        d[a].splice(e, 1);
                        d[a].length || (d[a] = null);
                        break
                    }
            return this
        },
        OJ: function(a, b) {
            if (!this.ke(a)) return this;
            var c = this.df;
            if (c && c[a])
                for (var d = 0; d < c[a].length; d += 1)
                    if (!b || c[a][d].Ve === b) {
                        c[a].splice(d, 1);
                        c[a].length || (c[a] = null);
                        break
                    }
            return this
        },
        q: function(a, b) {
            if (!this.ke(a)) return this;
            var c = {
                type: a
            };
            void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : "string" === typeof b || "number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.nJ(b) ? c.value = b : c = g.extend(c, b));
            for (var d = [].concat(this.df[a]), e = 0; e < d.length; e += 1) d[e].ub && (d[e].ub.call(d[e].Ve || this, c), d[e] && d[e].vj && this.df[a] && this.df[a].splice(e, 1));
            return this
        },
        ri: function(a) {
            a ? this.df && this.df[a] && (this.df[a] = null) : this.df = null;
            return this
        }
    };
    g.va.on || (g.va.on = g.va.h);
    g.va.off || (g.va.off = g.va.G);
    g.va.emit || (g.va.emit = g.va.q);
    g.Se = {
        set: function(a, b, c) {
            var d = this.Cl;
            if (d && d[a]) {
                var d = d[a],
                    e = "set" + this.Z3(a);
                if (d[e]) {
                    var f = !1;
                    !0 == d.D ? f = !0 : d.D = !0;
                    d[e](b, c);
                    f || (d.D = !1);
                    c || this.lK(a, b)
                } else d.set(a, b, c)
            } else(this.Je = this.Je || {})[a] = b, c || this.lK(a, b)
        },
        Z3: function() {
            var a = {};
            return function(b) {
                a[b] || (a[b] = b[0].toUpperCase() + b.substr(1));
                return a[b]
            }
        }(),
        get: function(a, b, c) {
            var d, e = this.Cl;
            d = "get" + this.Z3(a);
            if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.D ? a = !0 : c.D = !0, b = c[d](b), a || (c.D = !1), b) : c.get(a, b);
            if (!c && this[d]) return a = !1, !0 ==
            this.D ? a = !0 : this.D = !0, b = this[d](b), a || (this.D = !1), b;
            if (this.Je && this.Je.hasOwnProperty(a)) return this.Je[a]
        },
        W: function(a, b, c) {
            this.Cl || (this.Cl = {});
            this.Cl[a] !== b && (b.h(a, function(b) {
                this.lK(a, b)
            }, this), this.Cl[a] = b, c || this.lK(a))
        },
        Ue: function(a, b, c) {
            for (var d = 0; d < a.length; d += 1) this.W(a[d], b, !c)
        },
        sl: function(a) {
            this.Cl && this.Cl[a] && (this.Cl[a].G(a, "mv", this), this.Cl[a] = void 0)
        },
        tl: function() {
            if (this.Cl)
                for (var a in this.Cl) this.Cl.hasOwnProperty(a) && this.sl(a)
        },
        lK: function(a, b) {
            var c = a + "Changed";
            if (this[c]) this[c](b);
            this.q(a, b)
        },
        sEa: function(a, b, c) {
            var d = new(g.aa.extend({
                ka: [g.va, g.Se]
            }));
            d.IP = function() {
                for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
                b && (d.tl(), c())
            };
            for (var e = 0; e < a.length; e += 1) d.W(a[e], b)
        },
        af: function(a, b) {
            var c, d;
            for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
        }
    };
    g.w = {
        localStorage: !0,
        AH: 500,
        pe: !0,
        ue: {
            dark: "#202020",
            blue_night: "#090d20",
            test: "#033447",
            mapv: "#000001",
            techblue: "#000b11",
            insight: "#19212a",
            "default": "#fcf9f2"
        },
        PJ: {
            normal: "normal",
            dark: "dark",
            light: "light",
            fresh: "fresh",
            test: "blue",
            blue_night: "blue",
            mapv: "darkblue",
            insight: "grey"
        },
        key: "73a7c2cd94982ec6d538dbece3752d8e",
        Fc: "http",
        Xd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
        Ud: "http://restapi.amap.com",
        yb: "http://webapi.amap.com",
        ZJ: "http://gaode.com",
        sv: "http://m.amap.com",
        wD: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        yJ: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
        WT: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
        yK: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
        zK: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
        AE: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        gL: "http://vector.amap.com",
        eL: "vdata.amap.com",
        hza: "ws"
    };

    function mc(a) {
        g.aa.Bu = a.Bu;
        g.l = a.l;
        g.GJ = a.GJ;
        g.Mua = a[7];
        a.l = null;
        g.w.yb = a[2].split(",")[0];
        g.w.Cj = a.Cj;
        g.w.vD = a.vD;
        var b = g.w.Fc = g.w.yb.split(":")[0];
        "https" === b && (g.w.hza = "wss", g.w.Ud = g.w.Ud.replace("http", "https"), g.w.wD = g.w.wD.replace("http", "https"), g.w.yJ = g.w.yJ.replace("http", "https"), g.w.WT = g.w.WT.replace("http", "https"), g.w.yK = g.w.yK.replace("http", "https"), g.w.zK = g.w.zK.replace("http", "https"), g.w.AE = g.w.AE.replace("http", "https"), g.w.gL = g.w.gL.replace("http", "https"));
        var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
        g.w.ipa = c;
        c = encodeURIComponent(c);
        g.w.ju = c;
        g.w.Ai = g.w.yb + "/theme/v1.3/markers/" + (g.l.Mc ? "b" : "n");
        var d = document.createElement("style");
        d.type = "text/css";
        g.w.Jna = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
        var e = ".amap-container{cursor:" + g.w.Jna + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
        d.styleSheet ? (b = function() {
            try {
                d.styleSheet.cssText = e
            } catch (a) {}
        },
            d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
        (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
        g.w.mode = Number(a[3]);
        g.w.Xd = a[1];
        g.w.key = a[0];
        g.w.zr = a[4];
        g.w.Jc = a[5];
        g.w.Zka = a[6];
        g.w.wQ = a[13]
    }
    window.AMap && window.AMap.dL && window.AMap.dL.bM && window.AMap.dL.bM(mc);
    g.Hm = {
        zu: Math.PI / 180,
        eva: 180 / Math.PI,
        uQ: 6378137
    };
    (function() {
        function a(a) {
            return "undefined" === typeof a ? "" : a
        }
        g.$h = {
            iqa: function(b) {
                b.name = a(b.name);
                var c = [b.y, b.x, b.name];
                if (g.l.ba) {
                    var d = [g.w.sv + "/callAPP?", "src=jsapi_q"];
                    d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                    d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
                        b.y + "&lon=" + b.x));
                    d.push("&mo=" + encodeURIComponent(g.w.sv + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                    return d.join("")
                }
                return g.w.ZJ + "?q=" + c.join(",") + "&src=jsapi_q"
            },
            N3: function(b) {
                b.name = a(b.name);
                b.address = a(b.address);
                b.x = a(b.x);
                b.y = a(b.y);
                var c = [b.id, b.y, b.x, b.name, b.address];
                if (g.l.ba) {
                    var d = [g.w.sv + "/callAPP?", "src=jsapi_p"];
                    d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    d.push("&android=" +
                        encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                    d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    return d.join("")
                }
                return g.w.ZJ + "?p=" + c.join(",") + "&src=jsapi_p"
            },
            L3: function(b) {
                if (g.l.ba) {
                    var c = [g.w.sv + "/callAPP?", "src=jsapi_detail"];
                    c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    b.name = a(b.name);
                    b.x = a(b.x);
                    b.y =
                        a(b.y);
                    c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                    c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    c.push("&mo=" + encodeURIComponent(g.w.sv + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                    return c.join("")
                }
                return g.w.ZJ + "/detail/" + b.id + "?src=jsapi_detail"
            },
            qR: function(b) {
                b.sname = a(b.sname);
                "" === b.sname &&
                (b.sname = "起点");
                b.dname = a(b.dname);
                "" === b.dname && (b.dname = "终点");
                b.mcount = a(b.mcount);
                b.my = a(b.my);
                b.mx = a(b.mx);
                b.mname = a(b.mname);
                var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                if (g.l.ba) {
                    var d = [g.w.sv + "/callAPP?", "src=jsapi_r_" + b.t];
                    d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var e = b.t;
                    0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                    d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                    d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    d.push("&mo=" + encodeURIComponent(g.w.sv +
                        "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                    return d.join("")
                }
                return g.w.ZJ + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            },
            at: function(a) {
                g.l.ba ? window.location.href = a : window.open(a)
            }
        }
    })();
    "function" !== typeof Object.keys && (Object.keys = function(a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    });
    g.a = {
        CLASS_NAME: "AMap.Util",
        NK: [],
        Ea: 268435456,
        To: [215440491, 106744817],
        F9: function() {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            return function(b, c) {
                var d = [],
                    e;
                c = c || a.length;
                if (b)
                    for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c];
                else {
                    var f;
                    d[8] = d[13] = d[18] = d[23] = "-";
                    d[14] = "4";
                    for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
                }
                return d.join("")
            }
        }(),
        RC: {
            start: function(a) {
                a.startTime = new Date;
                a.Zs = [];
                var b = (new Date).getTime();
                a.id = requestAnimationFrame(function d() {
                    var e =
                        (new Date).getTime();
                    a.Zs.push(e - b);
                    b = e;
                    a.id = requestAnimationFrame(d)
                })
            },
            cancel: function(a) {
                a.id && cancelAnimationFrame(a.id)
            },
            stop: function(a) {
                a.pna = new Date - a.startTime;
                this.cancel(a);
                a.RC = Math.round(1E3 / (a.pna / (a.Zs.length + 1)))
            }
        },
        W3: function(a, b, c) {
            var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
            if (a === b) return b;
            switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
                case "ease":
                    c = g.uw.lI(0.25, 0.1, 0.25, 1)(c);
                    break;
                case "ease-in":
                    c = g.uw.lI(0.42, 0, 1, 1)(c);
                    break;
                case "ease-out":
                    c =
                        g.uw.lI(0, 0, 0.58, 1)(c);
                    break;
                case "ease-in-out":
                    c = g.uw.lI(0.42, 0, 0.58, 1)(c)
            }
            var e = a + (b - a) * c;
            d && (e >>= 0);
            return e
        },
        createObjectURL: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8",
                c = null;
            try {
                c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], {
                    type: b
                }))
            } catch (d) {
                c = null
            }
            return c
        },
        revokeObjectURL: function(a) {
            (window.URL || window.webkitURL).revokeObjectURL(a)
        },
        JBa: function(a) {
            for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c;
            return b
        },
        WC: function(a) {
            var b = {};
            if (g.a.ck(a, "object"))
                for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        },
        qf: function(a, b) {
            for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c])
        },
        create: "function" === typeof Object.create ? Object.create : function(a, b) {
            function c() {}
            c.prototype = a;
            var d = new c,
                e;
            for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
            return d
        },
        lb: function(a) {
            if ("object" === typeof a && null !== a) {
                if (a.i6 || this.ck(a, "Float32Array") || this.ck(a, "Uint16Array")) return a;
                var b = this.isArray(a) ? [] : {},
                    c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.lb(a[c]));
                return b
            }
            return a
        },
        Y4: function(a) {
            return (a | 0) === a
        },
        Fwa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function(a, b) {
            for (var c in b) a[c] = b[c]
        },
        Oh: function(a) {
            return "function" === typeof a
        },
        sla: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
            if (!a) return a;
            for (var c = [], d = 0, e = a.length; d < e; d += 2) {
                var f = parseInt(a.substr(d, 2), 16);
                if ("webgl" === b || "rgba" === b && 0 === d) f = this.kc(f / 255, 3);
                c.push(f)
            }
            c.push(c.shift());
            return c
        },
        Gs: function() {},
        keys: "function" === typeof Object.keys ?
            Object.keys : function(a) {
                var b = [],
                    c;
                for (c in a) a.hasOwnProperty(c) && b.push(c);
                return b
            },
        map: function(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                d = [];
            if (a && a.length) g.a.Ob(a, function() {
                for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
                d[f[1]] = b.apply(c || a, f)
            });
            else return a;
            return d
        },
        forEach: function(a, b) {
            if (a && a.length) {
                var c = a.length;
                if (0 < c && (b(a[0], 0), 1 < c)) {
                    b(a[1], 1);
                    for (var d = 2; d < c; d++) b(a[d], d)
                }
            }
        },
        Ob: function(a, b) {
            var c = 2 < arguments.length && void 0 !==
            arguments[2] ? arguments[2] : null;
            if (a && a.length)
                for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
        },
        find: function(a, b) {
            for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++)
                if ("function" === typeof b) {
                    if (b.call(c, a[d], d, a)) return a[d]
                } else if (a[d] === b) return a[d];
            return null
        },
        nJ: function(a) {
            return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
        },
        gw: function(a, b) {
            var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
                d, e;
            "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
            var f, h, k, l, m;
            h = [];
            k = NaN;
            l = 0;
            for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN);
            return h
        },
        nwa: function(a, b) {
            for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
                var f = c * e,
                    h = f + c;
                h > b.length && (h = b.length);
                for (; f < h; f += 1) a(b[f])
            }
        },
        hCa: function(a) {
            if (/^rgba\(/.test(a)) return this.Iv(a);
            var b = a = this.UH(a);
            "#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
                a.replace(/./g, function(a) {
                    return a + a
                })), b = this.Er(8 === a.length ? a : "ff" + a));
            return this.Iv(b)
        },
        UH: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                a = a.toLowerCase(),
                b = {
                    aliceblue: "#f0f8ff",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    aquamarine: "#7fffd4",
                    azure: "#f0ffff",
                    beige: "#f5f5dc",
                    bisque: "#ffe4c4",
                    black: "#000000",
                    blanchedalmond: "#ffebcd",
                    blue: "#0000ff",
                    blueviolet: "#8a2be2",
                    brown: "#a52a2a",
                    burlywood: "#deb887",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkkhaki: "#bdb76b",
                    darkmagenta: "#8b008b",
                    darkolivegreen: "#556b2f",
                    darkorange: "#ff8c00",
                    darkorchid: "#9932cc",
                    darkred: "#8b0000",
                    darksalmon: "#e9967a",
                    darkseagreen: "#8fbc8f",
                    darkslateblue: "#483d8b",
                    darkslategray: "#2f4f4f",
                    darkturquoise: "#00ced1",
                    darkviolet: "#9400d3",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    dimgray: "#696969",
                    dodgerblue: "#1e90ff",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    forestgreen: "#228b22",
                    fuchsia: "#ff00ff",
                    gainsboro: "#dcdcdc",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gray: "#808080",
                    green: "#008000",
                    greenyellow: "#adff2f",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    indianred: "#cd5c5c",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    khaki: "#f0e68c",
                    lavender: "#e6e6fa",
                    lavenderblush: "#fff0f5",
                    lawngreen: "#7cfc00",
                    lemonchiffon: "#fffacd",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lightcyan: "#e0ffff",
                    lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3",
                    lightgreen: "#90ee90",
                    lightpink: "#ffb6c1",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    lightskyblue: "#87cefa",
                    lightslategray: "#778899",
                    lightsteelblue: "#b0c4de",
                    lightyellow: "#ffffe0",
                    lime: "#00ff00",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    magenta: "#ff00ff",
                    maroon: "#800000",
                    mediumaquamarine: "#66cdaa",
                    mediumblue: "#0000cd",
                    mediumorchid: "#ba55d3",
                    mediumpurple: "#9370d8",
                    mediumseagreen: "#3cb371",
                    mediumslateblue: "#7b68ee",
                    mediumspringgreen: "#00fa9a",
                    mediumturquoise: "#48d1cc",
                    mediumvioletred: "#c71585",
                    midnightblue: "#191970",
                    mintcream: "#f5fffa",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    oldlace: "#fdf5e6",
                    olive: "#808000",
                    olivedrab: "#6b8e23",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    orchid: "#da70d6",
                    palegoldenrod: "#eee8aa",
                    palegreen: "#98fb98",
                    paleturquoise: "#afeeee",
                    palevioletred: "#d87093",
                    papayawhip: "#ffefd5",
                    peachpuff: "#ffdab9",
                    peru: "#cd853f",
                    pink: "#ffc0cb",
                    plum: "#dda0dd",
                    powderblue: "#b0e0e6",
                    purple: "#800080",
                    rebeccapurple: "#663399",
                    red: "#ff0000",
                    rosybrown: "#bc8f8f",
                    royalblue: "#4169e1",
                    saddlebrown: "#8b4513",
                    salmon: "#fa8072",
                    sandybrown: "#f4a460",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    skyblue: "#87ceeb",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    snow: "#fffafa",
                    springgreen: "#00ff7f",
                    steelblue: "#4682b4",
                    tan: "#d2b48c",
                    teal: "#008080",
                    thistle: "#d8bfd8",
                    tomato: "#ff6347",
                    turquoise: "#40e0d0",
                    violet: "#ee82ee",
                    wheat: "#f5deb3",
                    white: "#ffffff",
                    whitesmoke: "#f5f5f5",
                    yellow: "#ffff00",
                    yellowgreen: "#9acd32"
                };
            return "string" === typeof a ? b[a.toLowerCase()] ?
                b[a.toLowerCase()] : a : a
        },
        mI: function(a, b, c) {
            var d, e;
            d = Math.floor(c / 2);
            e = c - d;
            d = (1 << d) - 1 << e;
            e = (1 << e) - 1;
            return [c, a & d | b & e, b & d | a & e]
        },
        nI: function(a) {
            return a ? encodeURIComponent(a) : ""
        },
        Qc: function(a, b, c, d) {
            c = a[b].i[c];
            if ("undefined" === typeof c) return null;
            a = a[b].s;
            if ("number" === typeof c) return a[c];
            for (;
                "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
            d = c[d.toString()];
            return "number" === typeof d ? a[d] : null
        },
        Iv: function(a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            a[3] = parseFloat(a[3]);
            return a
        },
        awa: function(a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            return a
        },
        RT: function(a) {
            return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
        },
        Xma: function(a) {
            return this.RT(this.Tl(a))
        },
        Tl: function(a) {
            if (a instanceof Array) return 3 == a.length && a.push(1), a;
            a = this.UH(a);
            if (0 == a.indexOf("#")) {
                if (4 === a.length) return a = a.substr(1).replace(/./g, function(a) {
                    return a + a
                }), this.Rs(a);
                if (7 == a.length) return this.Rs(a.substr(1));
                if (9 == a.length) return a = a.substr(1), this.Rk(a.substr(6) + a.substr(0, 6))
            } else {
                if (0 == a.indexOf("rgb(")) return a = this.awa(a), a.push(1), a;
                if (0 == a.indexOf("rgba(")) return this.Iv(a)
            }
        },
        K7: function(a) {
            return g.a.Er("ff" + a)
        },
        Er: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            b.push((b.shift() / 255).toFixed(2));
            return "rgba(" + b.join(",") + ")"
        },
        Rs: function(a) {
            return g.a.Rk("ff" + a)
        },
        Rk: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c,
                2), 16) / 255);
            b.push(b.shift());
            return b
        },
        rh: function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
            return !0
        },
        uo: function(a, b) {
            0 <= b && a.splice(b, 1);
            return a
        },
        bxa: function(a, b) {
            return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b
        },
        gy: function(a, b) {
            var c = g.a.indexOf(a, b);
            return g.a.uo(a, c)
        },
        filter: function(a, b, c) {
            var d = [];
            g.a.Ob(a, function(a, f) {
                b.call(c, a, f) && d.push(a)
            });
            return d
        },
        indexOf: function(a, b) {
            if (!a || !a.length) return -1;
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c += 1)
                if (a[c] ===
                    b) return c;
            return -1
        },
        MC: function(a, b) {
            return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1
        },
        bind: function() {
            var a = !1;
            Function.prototype.bind && (a = !0);
            return function(b, c) {
                var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
                return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function() {
                    return b.apply(c, d || arguments)
                }
            }
        }(),
        Db: function(a, b) {
            b = b || {};
            a.B = g.extend({}, a.B, b);
            return a.B
        },
        Pma: function(a, b, c) {
            return "function" == typeof b ? this.oP(a, !0, this.Nla(b,
                c, 1)) : this.oP(a, !0)
        },
        oP: function(a, b, c, d, e, f, h) {
            var k;
            c && (k = e ? c(a, d, e) : c(a));
            if (void 0 !== k) return k;
            if (!this.d5(a)) return a;
            if (d = this.isArray(a)) {
                if (k = this.ora(a), !b) return this.ula(a, k)
            } else {
                var l = Object.prototype.toString.call(a),
                    m = "[object Function]" == l;
                if ("[object Object]" == l || "[object Arguments]" == l || m && !e) {
                    if (k = this.pra(m ? {} : a), !b) return this.Dla(k, a)
                } else return e ? a : {}
            }
            f || (f = []);
            h || (h = []);
            for (e = f.length; e--;)
                if (f[e] == a) return h[e];
            f.push(a);
            h.push(k);
            (d ? this.vla : this.Ila)(a, function(d, e) {
                k[e] =
                    g.a.oP(d, b, c, e, a, f, h)
            });
            return k
        },
        Dla: function(a, b) {
            return null == b ? a : this.Gla(b, Object.keys(b), a)
        },
        d5: function(a) {
            var b = typeof a;
            return !!a && ("object" == b || "function" == b)
        },
        lEa: function(a) {
            return !!a && "object" == typeof a
        },
        jEa: function(a) {
            return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
        },
        ora: function(a) {
            var b = a.length,
                c = new a.constructor(b);
            b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index, c.input = a.input);
            return c
        },
        ula: function(a, b) {
            var c = -1,
                d = a.length;
            for (b ||
                 (b = Array(d)); ++c < d;) b[c] = a[c];
            return b
        },
        pra: function(a) {
            a = a.constructor;
            "function" == typeof a && a instanceof a || (a = Object);
            return new a
        },
        Nla: function(a, b, c) {
            if ("function" != typeof a) return this.bv;
            if (void 0 === b) return a;
            switch (c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 3:
                    return function(c, e, f) {
                        return a.call(b, c, e, f)
                    };
                case 4:
                    return function(c, e, f, h) {
                        return a.call(b, c, e, f, h)
                    };
                case 5:
                    return function(c, e, f, h, k) {
                        return a.call(b, c, e, f, h, k)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        vla: function(a,
                      b) {
            for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a););
            return a
        },
        bv: function(a) {
            return a
        },
        qna: function(a) {
            return function(b, c, d) {
                var e = g.a.Dxa(b);
                d = d(b);
                for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) {
                    var k = d[h];
                    if (!1 === c(e[k], k, e)) break
                }
                return b
            }
        },
        Ila: function(a, b) {
            return g.a.qna()(a, b, Object.keys)
        },
        Dxa: function(a) {
            return g.a.d5(a) ? a : Object(a)
        },
        Gla: function(a, b, c) {
            c || (c = {});
            for (var d = -1, e = b.length; ++d < e;) {
                var f = b[d];
                c[f] = a[f]
            }
            return c
        },
        T2: function() {
            return !1
        },
        join: function(a, b) {
            if (a.join) return a.join(b);
            var c = [],
                d;
            for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
            return c.join(b)
        },
        z3: function(a, b) {
            return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
        },
        wb: function() {
            var a = 0;
            return function(b) {
                b._amap_id || (a += 1, b._amap_id = a);
                return b._amap_id
            }
        }(),
        Doa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        Wf: Date.now ? function() {
            return Date.now()
        } : function() {
            return (new Date).getTime()
        },
        tD: function(a, b, c, d) {
            var e;
            if (d) {
                var f = 0,
                    h, k = this.Wf;
                e = function() {
                    h = k();
                    if (h - f < b) return !1;
                    f = h;
                    a.apply(c,
                        arguments)
                }
            } else {
                var l, m, n;
                n = function() {
                    l = !1;
                    m && (e.apply(c, m), m = !1)
                };
                e = function() {
                    l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
                }
            }
            return e
        },
        kc: function(a, b) {
            return a === a << 0 ? a : +parseFloat(a).toFixed(b || 0)
        },
        isArray: Array.isArray ? Array.isArray : function(a) {
            return this.ck(a, "array")
        },
        ck: function(a, b) {
            return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
        },
        ka: "function" === typeof Array.prototype.ka ? function(a, b) {
            return a.ka(b)
        } : function(a, b) {
            return -1 !==
                this.indexOf(a, b)
        },
        F8: function(a) {
            var b = 0;
            if (0 === a.length) return b;
            for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
            return b
        },
        uCa: function(a, b) {
            b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
            for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
            return c
        },
        Mna: function(a, b) {
            var c = (a + "").slice(-2),
                d = (b + "").slice(-2);
            a = a.slice(0, -2);
            b = b.slice(0, -2);
            var e = parseInt((d + c).slice(1)),
                f = Math.ceil(e / 250) % 2 ? 1 : -1,
                d = parseInt("1" + d) / 3E3;
            a -= parseInt("1" + c) /
                3E3 * f;
            b -= d * (1 < e / 500 ? 1 : -1);
            return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
        },
        k6: function(a) {
            return "undefined" !== typeof JSON && JSON.stringify ? g.a.F8(JSON.stringify(a)) : null
        },
        CGa: function(a, b) {
            if (b || !a.hasOwnProperty("_amap_hash")) {
                var c = g.a.k6(a);
                c && (a._amap_hash = c)
            }
            return a._amap_hash
        },
        iepngFix: function(a) {
            function b() {
                for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
                d.kS = !0
            }
            this.V6 || (this.V6 = [], this.kS = !1);
            var c = this.V6,
                d = this;
            if ("img" === a.tagName.toLowerCase()) c.push(a);
            else {
                a = a.getElementsByTagName("*");
                for (var e = 0; e < a.length; e += 1) c.push(a[e])
            }
            window.DD_belatedPNG && this.kS ? setTimeout(function() {
                b()
            }, 100) : this.kS || g.rb.load("AMap.FixPng", b)
        },
        Ia: function(a) {
            if (g.a.isArray(a))
                if (g.a.isArray(a[0]))
                    for (var b = 0; b < a.length; b += 1) a[b] = g.a.Ia(a[b]);
                else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]);
            return a
        },
        jza: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 1) b[c] = [a[c].x, a[c].y];
            return b
        },
        vq: function(a) {
            return g.a.isArray(a) ? new g.wd(a[0], a[1]) :
                a
        },
        hP: function(a) {
            var b = a.type,
                c = a.rU,
                d = a.error;
            a = new g.fb.XMLHttpRequest(a.url, {
                Ad: void 0 === b ? "GET" : b,
                l2: a.data,
                G7: "text/plain"
            });
            a.h("complete", function(a) {
                a = JSON.parse(a.data);
                c && c(a)
            }, this);
            a.h("error", function() {
                var a = {
                    errmsg: "REQUEST_FAILED"
                };
                d && d(a)
            }, this)
        }
    };
    (function() {
        function a(a) {
            window.clearTimeout(a)
        }

        function b(a) {
            var b, c, d = ["webkit", "moz", "o", "ms"];
            for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
            return c
        }

        function c(a) {
            var b = +new Date,
                c = Math.max(0, (g.l.Rl ? 50 : 20) - (b - d));
            d = b + c;
            return window.setTimeout(a, c)
        }
        var d = 0,
            e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
            f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
        g.a.Sc = function(a, b, c, d) {
            if (c) b ? g.a.bind(a, b).call(b, d) : a();
            else return e(function() {
                b ?
                    g.a.bind(a, b).call(b, d) : a()
            })
        };
        g.a.pi = function(a) {
            a && f.call(window, a)
        }
    })();
    g.a.PT = window.requestIdleCallback ? function(a, b) {
        return window.requestIdleCallback(a, b)
    } : function(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            c = g.a.Wf();
        return setTimeout(function() {
            a({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 70 - (g.a.Wf() - c))
                }
            })
        }, b.timeout || 0)
    };
    g.a.GP = window.cancelIdleCallback ? function(a) {
        return window.cancelIdleCallback(a)
    } : function(a) {
        clearTimeout(a)
    };
    (function(a) {
        var b = 1,
            c = {};
        a.a.Dwa = function(a, b) {
            if (c[a]) {
                var f = c[a];
                f.nE = 1;
                f.result = b;
                if (f.fn) {
                    for (var h = f.fn, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
                    f.fn = null
                }
            }
        };
        a.a.Lma = function(a) {
            c[a] = null
        };
        a.a.Sya = function(a, b) {
            if (c[a]) {
                var f = c[a];
                0 < f.nE ? b(null, f.result) : (f.fn || (f.fn = []), f.fn.push(b))
            } else b(null, a)
        };
        a.a.jR = function(d, e) {
            var f = navigator.geolocation;
            if (!a.l.lD || "https:" === document.location.protocol) return d(null, f);
            var h;
            e && e.Tya && (h = "f" + b++, c[h] = {
                nE: 0
            });
            var k = null,
                l = !1;
            e && e.timeout && (k = setTimeout(function() {
                k =
                    void 0;
                d({
                    code: 3,
                    info: "TIME_OUT",
                    message: "Get geolocation time out."
                });
                l = !0
            }, e.timeout));
            f.getCurrentPosition(function() {
                l || (clearTimeout(k), k = void 0, d(null, f))
            }, function(b) {
                l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.rb.load("AMap.GeoRemoteLoc", function() {
                    d(null, a.C$, h)
                }) : d(null, f))
            }, {
                timeout: 1E3
            });
            return h
        }
    })(g);
    (function(a) {
        var b = a.aa.extend({
            ka: [a.va],
            r: function() {}
        });
        a.Ej = new b
    })(g);
    (function(a) {
        var b = a.aa.extend({
            ka: [a.va],
            r: function() {
                this.vfa()
            },
            vfa: function() {
                a.Ej && a.Ej.h("vecTileParsed.buildings", this.afa, this)
            },
            W4: function(a) {
                return a.map.bZ
            },
            Vpa: function(a) {
                return this.W4(a) ? a.map.wN : null
            },
            Awa: function(a, b) {
                if (b) {
                    var e = b.map;
                    e && (e.wN ? e.wN.toString() : "") !== (a ? a.toString() : "") && (e.wN = a || [], e.set("display", 0))
                }
            },
            e8: function(a, b) {
                if (b) {
                    var e = b.map;
                    e && e.bZ !== a && (e.bZ = a, e.set("display", 0))
                }
            },
            RAa: function() {},
            YY: function(a, b) {
                if (a)
                    for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
                    b.push(a[e])
            },
            X2: function(b) {
                if (!b) return null;
                b = b.map.za;
                for (var d = 0, e = b.length; d < e; d++)
                    if (a.o.di && b[d] instanceof a.o.di && b[d].fa && b[d].fa.length && (-1 !== b[d].fa.indexOf("building") || -1 !== b[d].fa.indexOf("poilabel")) && b[d].Ka) {
                        var f = b[d].T.get("tiles", null, !0);
                        if (f && f.length) return b[d]
                    }
                return null
            },
            tpa: function(a) {
                if (a = this.X2(a)) {
                    if (a = a.T.get("tiles", null, !0)) a = a[0];
                    else return null; if (!a || !a.length) return null;
                    for (var b = [], e = 0, f = a.length; e < f; e++) {
                        var h = a[e];
                        h.de && h.de.jf && this.YY(h.de.jf, b)
                    }
                    return b
                }
            },
            afa: function(a) {
                if (a.gp && a.gp.de) {
                    var b = a.gp.de.jf;
                    if (b) {
                        var e = [];
                        this.YY(b, e);
                        this.q("vecTileParsed.builds.found", {
                            I1: e,
                            gp: a.gp
                        })
                    }
                }
            }
        });
        a.Fj = new b
    })(g);
    (function(a) {
        function b() {
            return {
                checkup: function() {
                    var a = Array.prototype.slice.call(arguments, 0);
                    a.pop()(null, a)
                }
            }
        }

        function c(a) {
            return {
                injectCode: function(b, c) {
                    var d = null,
                        e = null;
                    try {
                        d = (new Function("self", b))(a)
                    } catch (f) {
                        console.error("error", e), e = f.toString()
                    }
                    c(e, d)
                }
            }
        }

        function d(a) {
            function b(c, d) {
                function e(a, b, c) {
                    a = {
                        Hz: Date.now(),
                        tz: h,
                        error: a,
                        result: b,
                        rq: !1,
                        Wk: !1
                    };
                    if (c)
                        for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
                    d(a)
                }
                var f = c.MR,
                    h = c.tz,
                    l = c.SP,
                    m = c.kC,
                    n = c.tla || [],
                    p = a._wkHandlers[f];
                p ? p[l] ? m ?
                    p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
            }
            var c = [],
                d = null,
                e = null;
            for (d in this._wkHandlers) - 1 !== d.indexOf("_def_") && (e = this._wkHandlers.VEa = d);
            "function" === typeof this._wkHandlers[e].r && this._wkHandlers[e].r.call(this._wkHandlers[e]);
            a.hu = function(a) {
                c.push.apply(c, a)
            };
            a.addEventListener("message", function(d) {
                function e(b) {
                    if (t) {
                        t.push(b);
                        var d = !!b.rq;
                        d || n++;
                        b = n >= h || b.Wk;
                        if (d || b) {
                            d = 1 < t.length ? {
                                Vva: t
                            } : t[0];
                            d.Hz = Date.now();
                            d.jGa = p;
                            if (c.length) {
                                try {
                                    a.postMessage(d,
                                        c)
                                } catch (f) {
                                    a.postMessage(d), console.error(f)
                                }
                                c.length = 0
                            } else a.postMessage(d);
                            t.length = 0;
                            b && (e = t = null)
                        }
                    } else console.error("Seemed callback already sent!!", b, b.result.fc)
                }
                var f = d.data;
                d = f.Sva || [f];
                for (var h = d.length, n = 0, p = Date.now() - f.Hz, t = [], f = 0; f < h; f++) b(d[f], e)
            }, !1)
        }

        function e(d, h) {
            this.B = a.extend({
                batchSend: !0,
                lazy: !1,
                libPolyfills: null
            }, h);
            this.Dp = [];
            this.CA = this.B.clientId || "w" + f++;
            this.B.onReady && this.PS(this.B.onReady);
            this.YF = this.cea();
            if ("function" === typeof d) {
                var m = {};
                m[this.YF] = d;
                d = m
            }
            d[e.xR] =
                c;
            d[this.gY()] = b;
            this.nG = d;
            this.wB(null);
            this.B.lazy || this.Ux();
            a.Hqa || !1 === this.B.hostWorker || (a.Hqa = this);
            this.$n && this.$n.r && this.$n.r.call(this.$n)
        }
        var f = 1,
            h = 1;
        a.extend(e, {
            xR: "_g_",
            Pwa: function(a) {
                if (!a.mba) {
                    var b = [];
                    a.addEventListener("message", function(a) {
                        a = a.data;
                        a = a.Vva || [a];
                        for (var c = 0, d = a.length; c < d; c++) {
                            var e = a[c],
                                f;
                            a: {
                                f = e.tz;
                                for (var h = !e.Wk, k = 0, v = b.length; k < v; k++) {
                                    var w = b[k];
                                    if (f === w.tz) {
                                        h || b.splice(k, 1);
                                        f = w;
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            f && f.kC(e.error, e.result, !0)
                        }
                    }, !1);
                    a.aba = b;
                    a.mba = !0
                }
            }
        });
        a.extend(e.prototype, {
            cea: function() {
                return "_def_" + this.CA
            },
            gY: function() {
                return "_cln_" + this.CA
            },
            vja: function() {
                var a = Array.prototype.slice.call(arguments, 0);
                this.U_ = a;
                if (this.zx) {
                    for (var b = 0, c = this.zx.length; b < c; b++) this.zx[b].apply(null, a);
                    this.zx.length = 0
                }
            },
            hu: function(a) {
                this.mja && this.Dp.push.apply(this.Dp, a)
            },
            PS: function(a) {
                this.U_ ? a.apply(null, this.U_) : (this.zx || (this.zx = []), this.zx.push(a))
            },
            Ux: function(b) {
                var c = this;
                if (!c.fX) {
                    c.fX = !0;
                    var d = function(d, e) {
                        d && a.l.mS && console.warn(d);
                        c.vja.call(c, d, e);
                        b && b(d, e)
                    };
                    a.l.mS ? this.ija(function(a, b) {
                        b ? this.Cfa(b, function(a, c) {
                            a ? d(a) : (this.wB(c), this.dP = c, this.Dp.length = 0, this.$n = null, d(null, {
                                Kla: b,
                                eza: c
                            }))
                        }) : d("Worker start failed!")
                    }) : d("Worker not supported!")
                }
            },
            nf: function(b, c) {
                var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Gs,
                    f = this;
                b = b || f.YF;
                var h = {};
                if (a.a.ck(c, "object")) {
                    var q = "return {",
                        r;
                    for (r in c)
                        if (c.hasOwnProperty(r)) var s = c[r],
                            q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) +
                                ",") : q + ("\n\t" + r + ': "' + s + '",');
                    c = new Function(q + "\n}")
                }
                f.LW(b, c, h);
                f.wB(null, h);
                f.PS(function(a) {
                    a ? d(a) : f.dP ? (a = f.lY(c, f.iN(f.CA, b), !0), f.dP.sendMessage(e.xR + ":injectCode", a, function(a, b) {
                        a || f.wB(f.dP, h);
                        d(a, b)
                    })) : d("Worker msger missing!!")
                })
            },
            iN: function(a, b) {
                if (!a || !b) throw Error("clientId or ns missing!!");
                return a + "_" + b
            },
            Bea: function(a, b, c) {
                function d() {
                    var b = Array.prototype.slice.call(arguments, 0);
                    c.sendMessage.apply(c, [a].concat(b))
                }
                var e = this;
                if (!c) return function() {
                    var a = b.apply(e.$n, arguments);
                    e.fX || "untilCall" === e.B.lazy && e.Ux();
                    return a
                };
                d._proxy2Worker = !0;
                return d
            },
            cca: function(a) {
                var b = {},
                    c;
                for (c in a) a.hasOwnProperty(c) && this.LW(c, a[c], b);
                return b
            },
            LW: function(a, b, c) {
                b = b.call(null, !1);
                for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.YF && (c[d] = b[d]))
            },
            wB: function(a, b) {
                if (!b) this.$n || (this.$n = this.cca(this.nG)), b = this.$n;
                else if (this.$n)
                    for (var c in b) b.hasOwnProperty(c) && (this.$n[c] = b[c]);
                for (c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        "function" === typeof d && (this[c] = this.Bea(c,
                            d, a))
                    }
                this.mja = !!a
            },
            lY: function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
                    d = a.toString(),
                    e, d = d.replace(/^function([^\(]*)\(/, function() {
                        e = "_prep_h" + h++;
                        return "function " + e + "("
                    });
                return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
                    b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
            },
            ija: function(a) {
                var b = this.CA,
                    c = [],
                    d;
                for (d in this.nG)
                    if (this.nG.hasOwnProperty(d)) {
                        var f = this.lY(this.nG[d], this.iN(b, d));
                        f && c.push(f)
                    }
                b = this.B.libPolyfills || [];
                d = 0;
                for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
                var h = b.join(";\n") + ";\n" + c.join(";\n"),
                    c = this.B.hostWorker,
                    r = this;
                c && c !== r ? c.PS(function(b, c) {
                    b ? a.call(r, b) : c.eza.sendMessage(e.xR + ":injectCode", h, function(b) {
                        b ? a.call(r, b) : a.call(r, null, c.Kla)
                    })
                }) : a.call(r, null, r.zka(h))
            },
            zka: function(b) {
                b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
                var c;
                try {
                    var e =
                        a.a.createObjectURL(b);
                    c = new Worker(e);
                    setTimeout(function() {
                        a.a.revokeObjectURL(e);
                        e = null
                    }, 3E3)
                } catch (f) {
                    return
                }
                return c
            },
            Vca: function(b) {
                var c = 1,
                    d = b.aba,
                    e = this,
                    f = !!e.B.batchSend;
                return function(h) {
                    var r = Array.prototype.slice.call(arguments, 1),
                        s = "function" === typeof r[r.length - 1] ? r.pop() : null,
                        u = e.CA,
                        v = h.split(":"),
                        w = e.YF;
                    1 < v.length && (h = v[1], w = v[0]);
                    r = {
                        Hz: a.a.Wf(),
                        MR: e.iN(u, w),
                        kC: !!s,
                        tz: u + "_" + c++,
                        SP: h,
                        tla: r
                    };
                    s && d.push({
                        SP: r.SP,
                        MR: r.MR,
                        Hz: r.Hz,
                        tz: r.tz,
                        kC: s
                    });
                    f ? e.Gba(b, r) : e.xx(b, r)
                }
            },
            xx: function(a, b) {
                if (this.Dp.length) {
                    try {
                        a.postMessage(b,
                            this.Dp)
                    } catch (c) {
                        a.postMessage(b), console.error(c)
                    }
                    this.Dp.length = 0
                } else a.postMessage(b)
            },
            Gba: function(b, c) {
                b.bO || (b.bO = []);
                b.bO.push(c);
                if (!b.M_) {
                    var d = this;
                    b.M_ = setTimeout(function() {
                        b.M_ = null;
                        var c = b.bO;
                        c.length && (d.xx(b, 1 === c.length ? c[0] : {
                            Hz: a.a.Wf(),
                            Sva: c
                        }), c.length = 0)
                    }, 0)
                }
            },
            qka: function(a) {
                var b = this;
                a.addEventListener("error", function(a) {
                    console.error(a);
                    b.wB(null)
                }, !1);
                e.Pwa(a)
            },
            Cfa: function(a, b) {
                var c = this;
                c.qka(a);
                var d = this.Vca(a);
                if (e.Aca) b.call(c, null, {
                    sendMessage: d
                });
                else {
                    e.Aca = !0;
                    var f = [c.gY() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1,
                        function(a, e) {
                            var h = !0;
                            if (a || !e || e.length !== f.length - 2) h = !1;
                            else
                                for (var k = 0, v = e.length; k < v; k++)
                                    if (e[k] !== f[k + 1]) {
                                        h = !1;
                                        break
                                    }
                            h ? b.call(c, null, {
                                sendMessage: d
                            }) : (console.error(a), b.call(c, "Self checkup failed!!"))
                        }
                    ];
                    d.apply(c, f)
                }
            }
        });
        a.pA = e
    })(g);
    (function() {
        if (!g.te) {
            g.te = {
                cf: {},
                Iy: {}
            };
            var a = g.te,
                b = g.te.cf,
                c = g.a,
                d = g.w;
            b.start = function(b) {
                a.Iy[b.id] = {
                    K: b.K,
                    time: {
                        K4: c.Wf()
                    },
                    hma: function() {
                        return c.Wf() - this.time.K4
                    }
                }
            };
            b.end = function(b) {
                var d = a.Iy[b.id],
                    e = d.time,
                    d = c.bind(d.hma, d),
                    l = b.index,
                    m = b.key;
                "function" !== typeof b.Jc && (b.Jc = function() {});
                if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d());
                else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d();
                else return b.Jc(Error("Duplicate Invoke"));
                b.Jc(null)
            };
            b.push = function(b) {
                var c = a.Iy[b.id].time,
                    d = b.key,
                    e = b.Pe;
                "function" !== typeof b.Jc && (b.Jc = function() {});
                if (void 0 === c[d]) c[d] = e;
                else return b.Jc(Error("Duplicate Invoke"));
                b.Jc(null)
            };
            b.send = function(b) {
                var c = d.Fc + "://webapi.amap.com/count?",
                    k = g.extend(e({
                        K: a.Iy[b.id].K
                    }), b.params || {}),
                    l = g.a;
                b.params && b.params.rs && !b.params.type && (b = a.Iy[b.id].time, delete b.K4, k = g.extend(k, b));
                b = [];
                for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
                b.push("jl=" + (d.vD ? 1 : 0));
                if (l.ck(window.performance, "performance") &&
                    l.ck(window.performance.getEntriesByType, "function")) {
                    var n = 0,
                        p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"],
                        q = ["/maps", "/css"];
                    l.Ob(window.performance.getEntriesByType("resource"), function(a) {
                        var b = void 0,
                            c = void 0;
                        a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                        a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                        b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                    });
                    0 !== n && b.push("sd=" + n)
                }
                new g.fb.tb(c + b.join("&"))
            };
            var e = function(a) {
                var b = g.l;
                a = g.j.n3(a.K);
                return {
                    type: "q",
                    resolution: a.width + "*" + a.height,
                    k: d.key,
                    u: d.ju,
                    iw: b.Df ? 1 : 0,
                    cw: b.L1 ? 1 : 0,
                    gc: b.yR,
                    m: b.ba ? 1 : 0,
                    cv: b.qu ? 1 : 0,
                    pf: b.jz,
                    dpr: window.devicePixelRatio,
                    screenwidth: screen.width,
                    scale: b.iL || 0,
                    detect: b.ja ? 1 : 0,
                    v: d.zr
                }
            }
        }
    })();
    (function() {
        if (!g.qL) {
            var a = g.a.WC({
                w: "Conf",
                extend: "extend",
                l: "Browser",
                gw: "uncodeCoords"
            });
            g.qL = function() {
                var b = new g.pA(function() {
                    return {
                        r: function() {
                            this.Yw = {
                                gk: 0,
                                Cv: 0
                            };
                            this.Lk = {};
                            this.fo = [];
                            this.Cp = {};
                            this.Pj = {};
                            this.Dt = 0;
                            this.AZ = 500
                        },
                        uh: function(a, b) {
                            var e = a.Id,
                                f = a.Ae,
                                h = "building" === a.fa[0];
                            (f && e !== this.Yw.Cv && this.Yw.Cv || !f && !h && e !== this.Yw.gk && this.Yw.gk) && this.Xka(!!f);
                            f ? this.Yw.Cv = e : h || (this.Yw.gk = e);
                            this.osa(a, b)
                        },
                        Xka: function(a) {
                            if (a) this.GW();
                            else if (!a && Object.keys(this.Lk).length)
                                for (var b in this.Lk) this.Lk.hasOwnProperty(b) &&
                                (a = this.Lk[b], a.yt || a.abort())
                        },
                        Nxa: function() {
                            this.Dt > this.AZ && this.CT(Object.keys(this.Pj).slice(0, Math.floor(this.AZ / 2)))
                        },
                        CT: function(a) {
                            for (var b = 0, e = a.length; b < e; b++) delete this.Pj[a[b]];
                            this.Dt -= a.length
                        },
                        bQ: function(a) {
                            var b = a.fa;
                            a = a.Ae;
                            var e = new XMLHttpRequest;
                            e.yq = "";
                            e.fE = [(new Date).getTime() + "_" + Math.random(), a ? 1 : 0, b.join("|")].join("-");
                            return e
                        },
                        p4: function(a, b, e) {
                            var f = this,
                                h = a.Eb,
                                k = a.Ae,
                                l = [],
                                m = h.filter(function(a) {
                                    var b = f.Pj[a.key];
                                    if (b) {
                                        if (b.sZ) return !0;
                                        l.push(a.key)
                                    }
                                    return !1
                                }),
                                n = !1;
                            if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
                                var p = [];
                                m.forEach(function(a) {
                                    a = a.key;
                                    p.push.apply(p, f.Pj[a]);
                                    delete f.Pj[a]
                                });
                                this.Dt -= m.length;
                                this.Is(this.extend({}, a, {
                                    OE: p,
                                    Id: a.Id,
                                    bl: n
                                }), e)
                            }!k && l.length && this.CT(l);
                            this.Nxa();
                            return n
                        },
                        osa: function(a, b) {
                            function e(e, f) {
                                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                                if (p.Lk[q.fE] || p.rfa(q)) {
                                    var n = e.split("|");
                                    f && (n[0] = f + n[0]);
                                    var t = n,
                                        x = "";
                                    n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1));
                                    if (k)
                                        for (var n =
                                            0, y = t.length; n < y; n++) {
                                            if (t[n]) {
                                                var D = JSON.parse(t[n]);
                                                if (D.length) {
                                                    var C = D[0].split("-").slice(0, -1).join("/");
                                                    p.Pj[C] ? p.Pj[C].push(D) : (p.Pj[C] = [D], p.Dt++);
                                                    m && (p.Pj[C].sZ = !0)
                                                }
                                            }
                                        } else p.Is(p.extend({}, a, {
                                        OE: t,
                                        Id: h,
                                        bl: m,
                                        dS: !0
                                    }), b);
                                    return x
                                }
                                r || (p.Fl(l, b), r = !0)
                            }
                            var f = this,
                                h = a.Id,
                                k = a.Ae,
                                l = a.Eb,
                                m = a.url;
                            if (!this.p4(a, function(a, b) {
                                var c = a.Eb,
                                    d = a.url,
                                    e = d.match(/&t=([^&]+)/)[1].split(";");
                                b.reverse().forEach(function(a) {
                                    a = c.indexOf(a); - 1 !== a && e.splice(a, 1)
                                });
                                a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
                            }, b)) {
                                if (this.JB() &&
                                    (this.GW(), k)) {
                                    this.Fl(l, b);
                                    return
                                }
                                var n = 0,
                                    p = this,
                                    q = this.bQ(a);
                                k ? this.fo.push(q) : (this.Lk[q.fE] = q, q.Eb = l, q.Jc = b);
                                var r = !1;
                                q.onreadystatechange = function() {
                                    if (4 === q.readyState && 0 === q.status) q.yt || (q.yt = !0, f.Fl(l, b), q.onreadystatechange = null, k ? f.Z_(q) : delete f.Lk[q.fE]), q = null;
                                    else if (!q.yt)
                                        if (3 === q.readyState) {
                                            var h = q.responseText.substring(n);
                                            q.yq = e(h, q.yq);
                                            n = q.responseText.length
                                        } else 4 === q.readyState && (h = q.responseText.substring(n), a.Rg && (h += "|"), e(h, q.yq, !0), q.yq = "", k ? f.Z_(q) : delete f.Lk[q.fE],
                                            q = null)
                                };
                                q.onerror = function() {};
                                q.open("GET", m, !0);
                                q.send();
                                k && (q.c9 = l.map(function(a) {
                                    return a.key
                                }))
                            }
                        },
                        HD: function(a) {
                            function b(d, p, r) {
                                var s = [r, d, p].join("/");
                                d = e.filter(function(a) {
                                    return a.key === s
                                })[0];
                                18 < k && !n && (s += "/" + k);
                                if (d && "loaded" !== d.status && -1 !== m.indexOf(t))
                                    if ("limg" === t) p = h[1], d.pd = p, "string" === typeof p.b && (p.b = w.HA(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = {
                                        url: r,
                                        uk: "limg-" + d.key + "-" + f
                                    });
                                    else {
                                        p = {
                                            zg: d.ta,
                                            Hi: s,
                                            Oa: h,
                                            Ad: t,
                                            Sx: a.nu,
                                            mD: "building" === t,
                                            xi: "poilabel" === t || "roadlabel" ===
                                                t || "building" === t && q
                                        };
                                        if ("poilabel" === t || "roadlabel" === t) p.pd = d.pd;
                                        t === m[m.length - 1] && (d.status = "loaded");
                                        l.push(p)
                                    }
                            }
                            var e = a.Eb,
                                f = a.rS,
                                h = a.xC,
                                k = a.Id,
                                l = a.Kc,
                                m = a.fa,
                                n = a.Df,
                                p = a.BR,
                                q = a.pe,
                                r = h[0].split("-"),
                                s = parseInt(r[1]),
                                u = parseInt(r[2]),
                                v = parseInt(r[0]),
                                w = this,
                                t = r[3],
                                r = Math.pow(2, v);
                            10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
                            b(s, u, v)
                        },
                        Z_: function(a) {
                            for (var b = this.fo.length - 1; 0 <= b; b--) this.fo[b] === a && this.fo.splice(b, 1)
                        },
                        rfa: function(a) {
                            for (var b = 0, e = this.fo.length; b < e; b++)
                                if (this.fo[b] === a) return !0;
                            return !1
                        },
                        JB: function() {
                            return Object.keys(this.Lk).length ? !0 : !1
                        },
                        GW: function() {
                            if (this.fo.length) {
                                for (var a = this.fo.length - 1; 0 <= a; a--) {
                                    var b = this.fo[a];
                                    b.yt || b.abort();
                                    b.c9 && this.CT(b.c9)
                                }
                                this.fo.length = 0
                            }
                        },
                        Fl: function(a, b) {
                            b(null, {
                                Eb: a,
                                e5: !0,
                                disabled: this.disabled
                            }, {
                                Wk: !0
                            })
                        }
                    }
                }, {
                    batchSend: !1
                });
                b.nf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.w) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
                    g.a.gw.toString() + "\n     }"));
                return b
            }
        }
    })();
    g.j = {
        CLASS_NAME: "DomUtil",
        get: function(a) {
            return "string" === typeof a ? document.getElementById(a) : a
        },
        oD: function(a, b, c) {
            return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.j.rn(a.parentNode, c) ? g.j.oD(a.parentNode, b) : !1
        },
        yo: function(a) {
            if (!a) return [0, 0];
            var b = a.offsetWidth,
                c = a.offsetHeight;
            b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight);
            window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
            return [b, c]
        },
        FEa: function(a, b) {
            var c = document.head || document.getElementsByTagName("head")[0];
            if (c) {
                var d = document.createElement("link");
                d.setAttribute("rel", "stylesheet");
                d.setAttribute("type", "text/css");
                d.setAttribute("href", a);
                b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
            } else document.write("<link rel='stylesheet' href='" + a + "'/>")
        },
        Qc: function(a, b) {
            var c = a.style[b];
            !c && a.currentStyle && (c = a.currentStyle[b]);
            c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
                null)) ? c[b] : null);
            c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
            c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
            return "auto" === c ? null : c
        },
        VI: function(a) {
            if (a) return new g.wd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.os ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
        },
        n3: function(a) {
            return new g.wd(a.clientWidth, a.clientHeight)
        },
        wR: function(a) {
            var b = 0,
                c = 0,
                d = a,
                e = document.body,
                f = document.documentElement,
                h, k = g.l.dv;
            do {
                b += d.offsetTop || 0;
                c += d.offsetLeft || 0;
                b += parseInt(g.j.Qc(d, "borderTopWidth"), 10) || 0;
                c += parseInt(g.j.Qc(d, "borderLeftWidth"), 10) || 0;
                h = g.j.Qc(d, "position");
                if (d.offsetParent === e && "absolute" === h) break;
                if ("fixed" === h) {
                    b += e.scrollTop || f.scrollTop || 0;
                    c += e.scrollLeft || f.scrollLeft || 0;
                    break
                }
                d = d.offsetParent
            } while (d);
            d = a;
            do {
                if (d === e) break;
                b -= d.scrollTop || 0;
                c -= d.scrollLeft || 0;
                g.j.doa() || !g.l.L9 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.j.Qc(d, "overflow-y") && "hidden" !== g.j.Qc(d, "overflow") &&
                (c += 17));
                d = d.parentNode
            } while (d);
            return new g.H(c, b)
        },
        doa: function() {
            g.j.oda || (g.j.oda = !0, g.j.nda = "ltr" === g.j.Qc(document.body, "direction"));
            return g.j.nda
        },
        create: function(a, b, c, d) {
            a = document.createElement(a);
            c && (a.className = c);
            b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
            return a
        },
        z2: function() {
            document.selection && document.selection.empty && document.selection.empty();
            this.pia || (this.pia = document.onselectstart, document.onselectstart = g.a.T2)
        },
        M2: function() {},
        Gxa: function(a,
                      b, c) {
            c ? this.Sa(a, b) : this.ab(a, b)
        },
        rn: function(a, b) {
            if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        },
        Sa: function(a, b) {
            a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.j.rn(a, b) || (a.className += (a.className ? " " : "") + b))
        },
        swa: function(a, b) {
            a && (a.className = b || "")
        },
        ab: function(a, b) {
            function c(a, c) {
                return c === b ? "" : a
            }
            a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
        },
        I3: function(a,
                     b) {
            return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
        },
        Gq: function(a, b) {
            if (a.style)
                if ("opacity" in a.style) a.style.opacity = b;
                else if ("filter" in a.style) {
                    var c = Math.round(100 * b);
                    a.style.filter = "";
                    100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
                }
        },
        vU: function(a) {
            for (var b = document.documentElement.style, c = 0; c < a.length; c +=
                1)
                if (a[c] in b) return a[c];
            return !1
        },
        X3: function(a) {
            var b = g.l.M9;
            return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
        },
        FDa: function(a, b) {
            return g.j.X3(b.add(b.Jd(-1 * a))) + (" scale(" + a + ") ")
        },
        i8: function(a, b, c) {
            a.Vi = b;
            !c && g.l.BH ? (b = g.j.X3(b), c = a.style[g.j.mg].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.j.mg] = c.join("rotate")) : a.style[g.j.mg] = b, g.l.V5 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        },
        Rd: function(a) {
            a.Vi || (a.Vi = a.style.left ?
                new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0));
            return a.Vi
        },
        sGa: function(a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
        },
        b8: function(a, b) {
            ";" !== b[b.length - 1] && (b += ";");
            return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
        },
        Wa: function(a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1)
                for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
            return this
        },
        aE: function(a) {
            for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
        },
        remove: function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        rotate: function(a, b, c) {
            var d = g.j.mg;
            c = c || {
                x: a.clientWidth / 2,
                y: a.clientHeight / 2
            };
            d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.j.ct[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
        },
        T3: function(a, b, c) {
            var d = g.j.mg;
            c = c || {
                x: a.clientWidth / 2,
                y: a.clientHeight / 2
            };
            return d ? g.j.ct[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.j.ct[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        },
        tm: function(a, b, c) {
            a.width = b;
            a.height = c
        },
        getElementsByClassName: function(a, b, c) {
            b = b || "*";
            c = c || document;
            if (c.getElementsByClassName) return c.getElementsByClassName(a);
            b = c.getElementsByTagName(b);
            a = RegExp("(^|\\s)" + a + "(\\s|$)");
            c = [];
            for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
            return c
        },
        fillText: function(a, b) {
            if (a) return void 0 !== a.textContent ?
                a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    };
    (function() {
        var a = g.j.vU(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
            b;
        g.extend(g.j, {
            z2: function() {
                g.F.h(window, "selectstart", g.F.preventDefault);
                if (a) {
                    var c = document.documentElement.style;
                    "none" !== c[a] && (b = c[a], c[a] = "none")
                }
            },
            M2: function() {
                g.F.G(window, "selectstart", g.F.preventDefault);
                a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
            },
            Wna: function() {
                g.F.h(window, "dragstart", g.F.preventDefault)
            },
            Foa: function() {
                g.F.G(window, "dragstart", g.F.preventDefault)
            }
        })
    })();
    g.j.mg = g.j.vU(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
    g.j.ct = {
        transform: "transform",
        WebkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        MozTransform: "-moz-transform",
        msTransform: "-ms-transform"
    };
    g.j.tF = g.j.vU(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    g.j.dAa = "webkitTransition" === g.j.tF || "OTransition" === g.j.tF ? g.j.tF + "End" : "transitionend";
    g.F = {
        h: function(a, b, c, d) {
            function e(b) {
                b = b || window.event;
                b.target = b.target || b.srcElement;
                return c.call(d || a, b, k)
            }
            var f = g.a.wb(a) + "_" + g.a.wb(c) + "_" + g.a.wb(d || a),
                h = b + f;
            if (a[h]) return this;
            var k = b;
            g.l.JQ && "mousewheel" === b && (b = "DOMMouseScroll");
            if (g.l.os && ("mouseover" === b || "mouseout" === b)) {
                var l = e;
                b = "mouseover" === b ? "mouseenter" : "mouseleave";
                e = function(a) {
                    l(a)
                }
            }
            if (g.l.Y6 && 0 === b.indexOf("touch")) return a[h] = e, this.ela(a, b, e, f);
            g.l.If && "dblclick" === b && this.cla && this.cla(a, e, f);
            "addEventListener" in a ? a.addEventListener(b,
                e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
            a[h] = e;
            return this
        },
        vj: function(a, b, c, d) {
            var e = this;
            this.h(a, b, function h(k) {
                e.G(a, b, h, d);
                return c.call(d || a, k || window.event, b)
            }, d)
        },
        G: function(a, b, c, d) {
            c = g.a.wb(a) + "_" + g.a.wb(c) + "_" + g.a.wb(d || a);
            d = b + c;
            var e = a[d];
            g.l.JQ && "mousewheel" === b && (b = "DOMMouseScroll");
            !g.l.os || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
            g.l.Y6 && -1 < b.indexOf("touch") ? this.vva(a, b, c) : g.l.If && "dblclick" === b && this.rva ? this.rva(a, c) :
                "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
            a[d] = void 0;
            return this
        },
        zGa: function(a, b) {
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b.target.dispatchEvent(c)
        },
        jla: function(a) {
            a.Te = "info";
            g.l.ye && g.F.stopPropagation(a)
        },
        stopPropagation: function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        },
        cxa: function(a) {
            var b = g.F.jla;
            g.l.If && (g.F.h(a, "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this));
            g.l.ba || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this), g.F.h(a, "mousewheel", b, this));
            g.l.hT && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this));
            g.l.X5 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b, this))
        },
        preventDefault: function(a) {
            a.preventDefault ? a.preventDefault() :
                a.returnValue = !1;
            return this
        },
        stop: function(a) {
            return g.F.preventDefault(a).stopPropagation(a)
        },
        rwa: function(a) {
            return a && a.getBoundingClientRect ? (a.YL = a.getBoundingClientRect(), a.sW = [a.clientLeft, a.clientTop], !0) : !1
        },
        vya: function(a) {
            a.YL && (a.YL = null, a.sW = null)
        },
        Uoa: function(a, b) {
            var c = b.YL || b.getBoundingClientRect(),
                d = b.sW || [b.clientLeft, b.clientTop];
            return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
        },
        gm: function(a, b) {
            if (b && b.getBoundingClientRect) return this.Uoa(a, b);
            var c = document.body,
                d = document.documentElement,
                c = new g.H(g.l.If ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.If ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
            return b ? c.Za(g.j.wR(b)) : c
        },
        b5: function(a) {
            return 1 === a.which || 0 === a.button || 1 === a.button
        }
    };
    g.extend(g.F, {
        aO: [],
        EZ: !1,
        ela: function(a, b, c, d) {
            switch (b) {
                case "touchstart":
                    return this.hla(a, b, c, d);
                case "touchend":
                    return this.fla(a, b, c, d);
                case "touchmove":
                    return this.gla(a, b, c, d)
            }
        },
        Co: function(a) {
            if (g.l.hT) return a;
            switch (a) {
                case "pointerdown":
                    return "MSPointerDown";
                case "pointerup":
                    return "MSPointerUp";
                case "pointercancel":
                    return "MSPointerCancel";
                case "pointermove":
                    return "MSPointerMove"
            }
        },
        hla: function(a, b, c, d) {
            function e(a) {
                for (var b = !1, d = 0; d < f.length; d += 1)
                    if (f[d].pointerId === a.pointerId) {
                        b = !0;
                        break
                    }
                b || f.push(a);
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }
            var f = this.aO;
            a["_amap_touchstart" + d] = e;
            a.addEventListener(this.Co("pointerdown"), e, !1);
            this.EZ || (a = function(a) {
                for (var b = 0; b < f.length; b += 1)
                    if (f[b].pointerId === a.pointerId) {
                        f.splice(b, 1);
                        break
                    }
            }, document.documentElement.addEventListener(this.Co("pointerup"), a, !1), document.documentElement.addEventListener(this.Co("pointercancel"), a, !1), this.EZ = !0);
            return this
        },
        gla: function(a, b, c, d) {
            function e(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
                    0 !== a.buttons) {
                    for (var b = 0; b < f.length; b += 1)
                        if (f[b].pointerId === a.pointerId) {
                            f[b] = a;
                            break
                        }
                    a.touches = f.slice();
                    a.changedTouches = [a];
                    c(a)
                }
            }
            var f = this.aO;
            a["_amap_touchmove" + d] = e;
            a.addEventListener(this.Co("pointermove"), e, !1);
            return this
        },
        fla: function(a, b, c, d) {
            function e(a) {
                for (var b = 0; b < f.length; b += 1)
                    if (f[b].pointerId === a.pointerId) {
                        f.splice(b, 1);
                        break
                    }
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }
            var f = this.aO;
            a["_amap_touchend" + d] = e;
            a.addEventListener(this.Co("pointerup"), e, !1);
            a.addEventListener(this.Co("pointercancel"),
                e, !1);
            return this
        },
        vva: function(a, b, c) {
            c = a["_amap_" + b + c];
            switch (b) {
                case "touchstart":
                    a.removeEventListener(this.Co("pointerdown"), c, !1);
                    break;
                case "touchmove":
                    a.removeEventListener(this.Co("pointermove"), c, !1);
                    break;
                case "touchend":
                    a.removeEventListener(this.Co("pointerup"), c, !1), a.removeEventListener(this.Co("pointercancel"), c, !1)
            }
            return this
        }
    });
    (function() {
        function a(a) {
            var b = a.target || a.srcElement;
            b.BW && f(b.BW);
            b.BW = e(function() {
                var c = b.op;
                if (c && c.np)
                    for (var d = 0; d < c.np.length; d += 1) c.np[d].call(c, a)
            })
        }

        function b() {
            var b = this.contentDocument.defaultView;
            b.op = this.kba;
            b.addEventListener("resize", a);
            a.call(b, {
                target: b
            })
        }
        var c = document.attachEvent,
            d = navigator.userAgent.match(/(Trident|Edge)/),
            e = g.a.Sc,
            f = g.a.pi;
        g.extend(g.F, {
            ila: function(e, f) {
                if (!e.np)
                    if (e.np = [], c) e.op = e, e.attachEvent("onresize", a);
                    else {
                        "static" === window.getComputedStyle(e).position &&
                        (e.style.position = "relative");
                        var l = e.op = document.createElement("object");
                        l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                        l.kba = e;
                        l.onload = b;
                        l.type = "text/html";
                        d && e.appendChild(l);
                        l.data = "about:blank";
                        d || e.appendChild(l)
                    }
                e.np.push(f)
            },
            OFa: function(b, d) {
                b.np.splice(b.np.indexOf(d), 1);
                b.np.length || (c ? b.detachEvent("onresize", a) : (b.op.contentDocument.defaultView.removeEventListener("resize",
                    a), b.op = !b.removeChild(b.op)))
            },
            Mma: function(a) {
                a.np = null;
                if (a.op) {
                    var b = a.op;
                    b.parentNode === a && b.parentNode.removeChild(b);
                    a.op = null
                }
            }
        })
    })();
    g.rb = {
        fta: g.w.yb + "/maps",
        Bu: g.aa.Bu,
        BS: 0,
        iz: [],
        wu: {},
        Tg: function(a, b) {
            function c() {
                d += 1;
                d === e.length && b && b()
            }
            a.length || b();
            for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
                var h = this.Bu[a[f]];
                if (h)
                    for (var k = 0; k < h.length; k += 1) e.push(h[k]);
                e.push(a[f])
            }
            for (f = 0; f < e.length; f += 1) this.FQ(e[f], c)
        },
        pD: function(a) {
            for (var b = 0; b < a.length; b += 1)
                if (1 !== this.yC(a[b]).status) return !1;
            return !0
        },
        FQ: function(a, b) {
            var c = this.yC(a);
            if (1 === c.status) b && b();
            else {
                b && c.Vx.push(b);
                try {
                    if (g.l.ys && window.localStorage) {
                        var d = window.localStorage["_AMap_" +
                        a];
                        d && (d = JSON.parse(d), d.version === g.w.Cj ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch (e) {}
                if (0 === c.status) {
                    this.$ua(a);
                    var f = this;
                    f.BS || (f.BS = 1, window.setTimeout(function() {
                        f.BS = 0;
                        var a = f.fta + "/modules?v=" + g.w.zr + "&key=" + g.w.key + "&m=" + f.iz.join(",") + "&vrs=" + g.w.Cj;
                        g.rb.Bt(f.iz.join(","));
                        f.iz = [];
                        c.DK = f.zsa(a)
                    }, 1));
                    c.status = -1
                }
            }
        },
        Bt: function(a) {
            a = g.w.Ud + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.w.key, "m=" + a].join("&");
            new g.fb.tb(a, {
                callback: "callback"
            })
        },
        load: function(a, b) {
            var c = this.Bu[a];
            if (c) {
                for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
                d.push(a);
                for (var f = 0, c = function() {
                    f += 1;
                    f === d.length && b && b()
                }, e = 0; e < d.length; e += 1) this.FQ(d[e], c)
            } else this.FQ(a, b)
        },
        $ua: function(a) {
            for (var b = 0; b < this.iz.length; b += 1)
                if (this.iz[b] === a) return;
            this.iz.push(a)
        },
        Dn: function(a, b) {
            var c = this.yC(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.status = 1;
            for (var e = 0, f = c.Vx.length; e < f; e += 1) c.Vx[e]();
            c.Vx = []
        },
        nd: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                1 !==
                c.wu[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, 5E3)
        },
        yC: function(a) {
            this.wu[a] || (this.wu[a] = {}, this.wu[a].status = 0, this.wu[a].Vx = []);
            return this.wu[a]
        },
        remove: function(a) {
            this.wu[a] = null
        },
        zsa: function(a) {
            g.w.mode && (a += "&mode=" + g.w.mode);
            var b = document.createElement("script");
            b.charset = "utf-8";
            a && 0 === a.indexOf(g.w.yb) && (b.crossOrigin = "Anonymous");
            b.src = a;
            document.body.appendChild(b);
            return b
        }
    };
    window._jsload_ = function(a, b, c) {
        var d = g.rb.yC(a);
        d.DK && 0 <= g.a.indexOf(document.body.childNodes, d.DK) && document.body.removeChild(d.DK);
        d.DK = null;
        try {
            if (!c && window.localStorage && b && "" !== b && g.l.ys) {
                var e = window.localStorage["_AMap_" + a],
                    e = e || "{}",
                    e = JSON.parse(e);
                e.version !== g.w.Cj || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: g.w.Cj,
                    script: b
                })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    version: g.w.Cj,
                    script: b,
                    css: e.css
                }))
            }
        } catch (f) {}
        g.rb.Dn(a, b)
    };
    window._cssload_ = function(a, b, c) {
        try {
            !c && window.localStorage && b && "" !== b && g.l.ys && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                css: b,
                version: g.w.Cj
            }))
        } catch (d) {}
        var e = document.createElement("style");
        e.type = "text/css"; - 1 === g.w.yb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.w.yb.split("://")[1]));
        "https" === g.w.Fc && (b = b.replace(/http:/gi, "https:"));
        e.styleSheet ? (a = function() {
            try {
                e.styleSheet.cssText = b
            } catch (a) {}
        }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0];
        2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    };
    (function(a) {
        var b = g.l;
        if (!g.indexedDB && b.Gi) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
                d = a.IDBKeyRange || a.kHa || a.TEa || a.SEa;
            if (c) {
                var e = g.a,
                    f = null;
                a = "amap-jsapi" + (a.Eza ? "-debug" : "");
                var h = g.extend({}, g.va),
                    k;
                try {
                    k = c.open(a), k.onsuccess = function() {
                        f = this.result;
                        h.q("dbReady", {
                            status: "success"
                        })
                    }, k.onerror = function() {
                        h.q("dbReady", {
                            status: "error"
                        })
                    }, k.onblocked = function() {
                        h.q("dbReady", {
                            status: "blocked"
                        })
                    }, k.onupgradeneeded = function(a) {
                        a.currentTarget.result.createObjectStore("tile", {
                            keyPath: "tileKey"
                        })
                    }
                } catch (l) {
                    b.Gi = !1
                } finally {
                    if (!b.Gi) return
                }
                var b = function(a) {
                        return function() {
                            try {
                                return a.apply(this, arguments)
                            } catch (b) {
                                var c = arguments[arguments.length - 1];
                                "function" === typeof c && setTimeout(function() {
                                    c({
                                        code: 4,
                                        pI: b
                                    })
                                }, 1)
                            }
                        }
                    },
                    m = b(function(a, b) {
                        return null === f ? (setTimeout(function() {
                            b && b({
                                code: 3
                            })
                        }, 1), null) : f.transaction("tile", a).objectStore("tile")
                    });
                g.indexedDB = {
                    TB: function(a, b) {
                        f ? "function" === typeof a && a() : h.h("dbReady", function(c) {
                            "success" === c.status ? "function" === typeof a &&
                                a() : "function" === typeof b && b({
                                code: 3,
                                status: status
                            })
                        })
                    },
                    count: b(function(a) {
                        var b = this,
                            c = arguments;
                        this.TB(function() {
                            b.Bt.apply(b, c)
                        }, a)
                    }),
                    Bt: b(function(a) {
                        var b = m("readonly", a).count();
                        b.onsuccess = function() {
                            a(null, b.result)
                        };
                        b.onerror = function() {
                            a({
                                code: 7
                            })
                        }
                    }),
                    get: b(function(a, b, c) {
                        var d = this,
                            e = setTimeout(function() {
                                e && (e = null, c && c({
                                    code: 7
                                }))
                            }, b.timeout || 1E3);
                        this.TB(function() {
                            d.Pda.call(d, a, function(a, b) {
                                e && (clearTimeout(e), e = null, c(a, b))
                            })
                        }, c)
                    }),
                    Pda: b(function(a, b) {
                        var c = m("readonly", b);
                        if (e.isArray(a)) {
                            var d,
                                f;
                            (function() {
                                function e(b) {
                                    var f = c.get(a[b]);
                                    f.onsuccess = function(a) {
                                        a.target.result && (d[b] = a.target.result);
                                        h()
                                    };
                                    f.onerror = h
                                }

                                function h() {
                                    f++;
                                    f === a.length && b(null, d)
                                }
                                d = [];
                                for (var k = f = 0, l = a.length; k < l; k++) e(k)
                            })()
                        } else {
                            var h = c.get(a);
                            h.onsuccess = function(a) {
                                b && b(null, a.target.result)
                            };
                            h.onerror = function() {
                                b && b({
                                    code: 1
                                })
                            }
                        }
                    }),
                    add: b(function(a, b) {
                        var c = this,
                            d = arguments;
                        this.TB(function() {
                            c.oba.apply(c, d)
                        }, b)
                    }),
                    oba: b(function(a, b) {
                        function c() {
                            0 === --f && b(null)
                        }
                        e.isArray(a) || (a = [a]);
                        var d = a.length,
                            f =
                                d,
                            h = 0,
                            k = Math.ceil(d / 5),
                            l = setInterval(function() {
                                if (h++ < k) {
                                    var e = 5 * h;
                                    e > d && (e = d);
                                    for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) {
                                        var D = f.put(a[s]);
                                        D.onsuccess = D.onerror = c
                                    }
                                } else clearInterval(l)
                            }, 32)
                    }),
                    remove: b(function(a, b) {
                        var c = this,
                            d = arguments;
                        this.TB(function() {
                            c.Cja.apply(c, d)
                        }, b)
                    }),
                    Cja: b(function(a, b) {
                        var c = m("readwrite", b);
                        e.isArray(a) || (a = [a]);
                        a = a.sort();
                        c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                            if (c = c.target.result) {
                                if (e.ka(c.value.tileKey, a)) c["delete"]();
                                for (var d = -1,
                                         f = 0, h = a.length; f < h; f++)
                                    if (a[f] > c.value.tileKey) {
                                        d = f;
                                        break
                                    }
                                c["continue"](a[d])
                            } else b && b(null)
                        }
                    }),
                    clear: b(function(a) {
                        var b = this,
                            c = arguments;
                        this.TB(function() {
                            b.NF.apply(b, c)
                        }, a)
                    }),
                    NF: b(function(a) {
                        var b = m("readwrite", a).clear();
                        b.onsuccess = function() {
                            a && a(null)
                        };
                        b.onerror = function() {
                            a && a({
                                code: 2
                            })
                        }
                    })
                }
            } else b.Gi = !1
        }
    })(window);
    (function() {
        function a(a) {
            u.data.keys = u.data.keys.filter(function(b) {
                return !r.ka(a, b)
            }).concat(a)
        }

        function b(a) {
            var b = g.w.Cj + "|" + a.Hi.replace(/\//g, ",") + "|" + (a.Df ? "w" : "v") + "|",
                c;
            c = a.ja;
            var d = a.pe;
            c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join();
            return b + c + "|" + m(a.url)
        }

        function c() {
            u.data.keys.length >= u.CL && d()
        }

        function d() {
            var a = u.data.keys.length,
                b = Math.floor(a / 2);
            a > u.CL && (b = Math.floor(a - u.CL / 2));
            a = u.data.keys.slice(0, b);
            u.data.keys = u.data.keys.slice(b + 1);
            s.remove(a, function(a) {
                a && 3 === a.code && (q.Gi = !1)
            })
        }

        function e() {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Gs;
            k();
            w.setItem(u.key, u.data, !0);
            f(a)
        }

        function f(a) {
            q.Gi && s && s.clear(function(b) {
                b && 3 === b.code && (q.Gi = !1);
                a()
            })
        }

        function h() {
            k();
            var a = w.getItem(u.key, !0);
            a && (a.fL === u.data.fL && a.l1 === u.data.l1 ? u.data = a : e())
        }

        function k() {
            u.data = {
                fL: q.Jf,
                l1: g.w.Cj,
                keys: [],
                zf: {},
                nn: {}
            };
            u.dt = {}
        }

        function l(a) {
            a && (u.data.fL = a, q.Jf = a)
        }

        function m(a) {
            var b = "limg";
            /flds=([^&]+)/.test(a) && (b = RegExp.$1);
            return b
        }

        function n(a) {
            if ("object" === typeof a && null !== a) {
                var b = [];
                if (r.isArray(a))
                    if (Object.keys(a).length == a.length) b = a.map(function(a) {
                        return n(a)
                    });
                    else {
                        b.push("__arrayObject");
                        var c = {},
                            d;
                        for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
                        b.push(c);
                        b.push(a.map(function(a) {
                            return n(a)
                        }))
                    } else if (r.ck(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a));
                else if (r.ck(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a));
                else
                    for (d in b = {}, a) a.hasOwnProperty(d) && (b[d] = n(a[d]));
                return b
            }
            return a
        }

        function p(a) {
            if ("object" === typeof a && null !== a) {
                var b = {};
                if (r.isArray(a))
                    if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
                    else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
                    else if ("__arrayObject" === a[0]) {
                        b = p(a[2]);
                        a = a[1];
                        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                    } else b = a.map(function(a) {
                        return p(a)
                    });
                else
                    for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
                return b
            }
            return a
        }
        var q = g.l,
            r = g.a;
        if (!g.Hj && q.Gi) {
            var s = g.indexedDB,
                u = {
                    CL: 1E3,
                    key: "_AMap_data.tileKeys"
                },
                v = [],
                w = {
                    getItem: function(a,
                                      b) {
                        var c = localStorage.getItem(a);
                        if (c && b) {
                            var d;
                            try {
                                d = JSON.parse(c)
                            } catch (e) {
                                d = null
                            }
                            c = d
                        }
                        return c
                    },
                    setItem: function(a, b, c) {
                        var d = b;
                        c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.nn).length && (b.nn = {}, d = JSON.stringify(b)));
                        try {
                            localStorage.setItem(a, d)
                        } catch (f) {
                            e()
                        }
                    }
                };
            g.Hj = {
                clear: e,
                get: function(c, d) {
                    function f(a) {
                        var b = {
                            OR: l,
                            U5: G,
                            OEa: w,
                            zf: u.data.zf
                        };
                        a && B.length && (/\|limg/.test(B[0]) ? b.A5 = a.map(function(a) {
                            return JSON.parse(a.data)
                        }).filter(function(a) {
                            return a && a.key
                        }) : b.Kc = h(a));
                        d && d(null,
                            b);
                        w.length && (l = [], G = [])
                    }

                    function h(a) {
                        var b = [];
                        m(c.url).split(",").forEach(function(c) {
                            a.forEach(function(a) {
                                if (a = JSON.parse(a.data[c])) {
                                    var d = a.zg;
                                    a.zg = new g.Zq(d.z, d.x, d.y);
                                    a.zg.S = d.S;
                                    b.push(a)
                                }
                            })
                        });
                        return b
                    }
                    var k = "FS" === c.type;
                    if (!q.ys || !(k || q.Gi && 0 !== u.data.keys.length)) return d({
                        code: 1
                    });
                    var l = [],
                        w = [],
                        B = [],
                        G = [],
                        H = [];
                    c.xxa.forEach(function(a) {
                        var d = !1,
                            e = b({
                                Hi: a.key,
                                url: c.url,
                                Df: c.Df,
                                ja: c.o.ja,
                                pe: c.pe
                            });
                        k && (v.push(e), u.data.nn[e] && (l.push(a), B.push(e), H.push({
                            data: p(u.data.nn[e]),
                            tileKey: e
                        }),
                            d = !0));
                        d || (q.Gi && r.ka(u.data.keys, e) ? (B.push(e), w.push(a)) : G.push(a))
                    });
                    if (k && 0 === w.length || 0 === B.length) return f(H);
                    k && H.length && H.forEach(function(a) {
                        a = r.indexOf(B, a.tileKey);
                        B.splice(a, 1)
                    });
                    s.get(B, {
                        timeout: c.timeout || 1E3
                    }, function(b, c) {
                        if (b || c.length !== B.length) b && 3 === b.code ? q.Gi = !1 : e(), G = w, w = [], f(null);
                        else {
                            if (k)
                                for (var d = c.length - 1; 0 <= d; d--) {
                                    var h = c[d];
                                    h && h.data ? u.data.nn[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0])
                                }
                            l = w;
                            w = [];
                            f(c);
                            a(B)
                        }
                    });
                    (G.length || w.length) && f(H)
                },
                hw: function(a) {
                    a.Eb.forEach(function(c) {
                        c =
                            b({
                                Hi: c.key,
                                url: a.url,
                                Df: a.Df,
                                ja: a.o.ja,
                                pe: a.pe
                            });
                        u.dt[c] && delete u.dt[c]
                    })
                },
                set: function(a, c) {
                    a.Jf && a.Jf !== u.data.fL && (l(a.Jf), e(), c && c({
                        code: 2
                    }));
                    !a.pd && a.Kc ? a.Kc.forEach(function(c) {
                        var d = b({
                            Hi: c.Hi,
                            url: a.url,
                            Df: a.Df,
                            ja: a.o.ja,
                            pe: a.pe
                        });
                        if (q.Gi || r.ka(v, d)) {
                            var e = u.dt[d] || {};
                            e[c.Ad] = c.Oa;
                            u.dt[d] = e
                        }
                    }) : a.data && a.data.forEach(function(c) {
                        var d = b({
                            Hi: c.key,
                            url: a.url,
                            Df: a.Df,
                            ja: a.o.ja,
                            pe: a.pe
                        });
                        if (q.Gi || r.ka(v, d)) u.dt[d] = c.data
                    });
                    u.data.zf = {
                        "x-vd-v": a["x-vd-v"],
                        tv: a.tv,
                        bgc: a.bgc
                    }
                },
                flush: function() {
                    var a = !0;
                    return function() {
                        var b = this;
                        if (a) {
                            if (Object.keys(u.data.nn).length)
                                for (var c in u.data.nn) u.data.nn.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.nn[c];
                            q.Gi ? s.count(function(a, c) {
                                a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function() {
                                    b.cG(!0)
                                })) : b.cG(!0))
                            }) : b.cG(!0);
                            a = !1
                        } else b.cG()
                    }
                }(),
                cG: function() {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1,
                        b = {},
                        d = [],
                        f = Object.keys(u.dt),
                        h = [];
                    f.length ? (f.forEach(function(a) {
                        var c = u.dt[a];
                        a.split("|").pop().split(",").every(function(a) {
                            return "limg" ===
                            a ? !0 : c && void 0 !== c[a]
                        }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({
                            tileKey: a,
                            data: c
                        })), r.ka(v, a) && void 0 === u.data.nn[a] && (u.data.nn[a] = c)) : b[a] = c
                    }), d.length && (q.Gi ? s.add(d, function(a) {
                        a ? 3 !== a.code ? e() : q.Gi = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c())
                    }) : w.setItem(u.key, u.data, !0)), u.dt = b) : (a && w.setItem(u.key, u.data, !0), c())
                }
            };
            h()
        }
    })();
    g.U = g.aa.extend({
        r: function(a, b, c) {
            var d = parseFloat(b),
                e = parseFloat(a);
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")";
            !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
            this.P = d;
            this.Q = e
        },
        fR: function() {
            return g.a.kc(this.Q, 6)
        },
        cR: function() {
            return g.a.kc(this.P, 6)
        },
        add: function(a, b) {
            return new g.U(this.Q + a.Q, this.P + a.P, b)
        },
        Za: function(a, b) {
            return new g.U(this.Q - a.Q, this.P - a.P, b)
        },
        gd: function(a, b) {
            return new g.U(this.Q / a, this.P / a, b)
        },
        Jd: function(a,
                     b) {
            return new g.U(this.Q * a, this.P * a, b)
        },
        we: function(a) {
            return g.$q.distance(this, a)
        },
        offset: function(a, b) {
            if (isNaN(a) || isNaN(b)) return !1;
            var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.P * Math.PI / 180)),
                c = this.Q + 180 * c / Math.PI,
                d = 2 * Math.asin(Math.round(b) / 12756274);
            return new g.U(c, this.P + 180 * d / Math.PI)
        },
        cb: function(a) {
            a = g.a.Ia(a);
            return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.P - a.P), Math.abs(this.Q - a.Q)) : !1
        },
        toString: function() {
            return g.a.kc(this.Q, 6) + "," + g.a.kc(this.P, 6)
        },
        rl: function() {
            return [this.Q,
                this.P
            ]
        },
        lb: function() {
            var a = this.controlPoints,
                b = new g.U(this.Q, this.P);
            a && (b.controlPoints = [].concat(a));
            return b
        }
    });
    g.U.Rpa = function(a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.Q - b.Q));
        if (!c || 0.001 > Math.abs(a.Q - b.Q)) return [];
        var d = [],
            e = Math.PI,
            f = g.Hm.zu,
            h = g.Hm.eva,
            k = Math.asin,
            l = Math.sqrt,
            m = Math.sin,
            n = Math.pow,
            p = Math.cos,
            q = Math.atan2,
            r = a.P * f;
        a = a.Q * f;
        var s = b.P * f;
        b = b.Q * f;
        for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1) u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
            (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0));
        return d
    };
    g.U.Pb({
        fR: "getLng",
        cR: "getLat",
        add: "add",
        Za: "subtract",
        gd: "divideBy",
        Jd: "multiplyBy",
        we: "distance",
        offset: "offset",
        cb: "equals",
        toString: "toString"
    });
    g.re = g.aa.extend({
        r: function() {
            this.CLASS_NAME = "AMap.Bounds";
            var a = null,
                b = null;
            if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0);
            else if (2 === arguments.length) a = g.a.Ia(arguments[0]), b = g.a.Ia(arguments[1]);
            else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]);
            else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90);
            else throw "Invalid Object: Bounds(" +
                arguments.join(",") + ")";
            this.tc = a;
            this.lc = b
        },
        Uu: function() {
            return this.tc
        },
        xy: function() {
            return this.lc
        },
        Xj: function() {
            return new g.U(this.tc.Q, this.lc.P, !0)
        },
        Eo: function() {
            return new g.U(this.lc.Q, this.tc.P, !0)
        },
        contains: function(a) {
            var b = this.tc,
                c = this.lc,
                d;
            if (a instanceof g.hp) return this.CU().contains(a);
            a instanceof g.re ? (d = a.tc, a = a.lc) : d = a = g.a.Ia(a);
            var e = d.Q,
                f = b.Q,
                h = a.Q,
                k = c.Q;
            f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
            return d.P >= b.P && a.P <= c.P && e >= f && h <= k
        },
        Pg: function(a) {
            var b = this.tc,
                c = this.lc,
                d = a.tc;
            a = a.lc;
            var e = a.Q >= b.Q && d.Q <= c.Q;
            return a.P >= b.P && d.P <= c.P && e
        },
        ti: function() {
            return new g.U(this.tc.Q > this.lc.Q ? (this.tc.Q + this.lc.Q + 360) / 2 % 360 : (this.tc.Q + this.lc.Q) / 2, (this.tc.P + this.lc.P) / 2)
        },
        extend: function(a) {
            this.tc.Q = Math.min(this.tc.Q, a.Q);
            this.tc.P = Math.min(this.tc.P, a.P);
            this.lc.Q = Math.max(this.lc.Q, a.Q);
            this.lc.P = Math.max(this.lc.P, a.P);
            return this
        },
        uya: function(a) {
            return this.extend(a.tc).extend(a.lc)
        },
        toString: function() {
            return this.tc.toString() + ";" + this.lc.toString()
        },
        lb: function() {
            return new g.re(this.tc.lb(),
                this.lc.lb())
        },
        cb: function(a) {
            return a instanceof g.re ? this.tc.cb(a.tc) && this.lc.cb(a.lc) : !1
        },
        qj: function() {
            return Math.abs(this.lc.Q - this.tc.Q)
        },
        oj: function() {
            return Math.abs(this.tc.P - this.lc.P)
        },
        CU: function(a) {
            var b = [this.Uu(), this.Eo(), this.xy(), this.Xj()];
            a && b.push(this.Uu());
            return new g.hp(b)
        },
        Bxa: function(a) {
            return new g.Nf(a.mc(this.Xj(), 20), a.mc(this.Eo(), 20))
        },
        ZQ: function(a, b) {
            return this.CU(b).ZQ(a)
        },
        WQ: function(a) {
            return this.Bxa(a).ti()
        }
    });
    g.re.Pb({
        Uu: "getSouthWest",
        xy: "getNorthEast",
        Xj: "getNorthWest",
        Eo: "getSouthEast",
        contains: "contains",
        Pg: "intersects",
        ti: "getCenter",
        extend: "extend"
    });
    g.H = g.aa.extend({
        r: function(a, b, c) {
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
            this.x = c ? Math.round(a) : Number(a);
            this.y = c ? Math.round(b) : Number(b)
        },
        mf: function() {
            return this.x
        },
        je: function() {
            return this.y
        },
        add: function(a, b) {
            return new g.H(this.x + a.x, this.y + a.y, b)
        },
        Za: function(a, b) {
            return new g.H(this.x - a.x, this.y - a.y, b)
        },
        gd: function(a, b) {
            return new g.H(this.x / a, this.y / a, b)
        },
        Jd: function(a, b) {
            return new g.H(this.x * a, this.y * a, b)
        },
        we: function(a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return Math.sqrt(b *
                b + a * a)
        },
        floor: function() {
            return new g.H(Math.floor(this.x), Math.floor(this.y))
        },
        round: function() {
            return new g.H(this.x, this.y, !0)
        },
        cb: function(a) {
            return a instanceof g.H && this.x === a.x && this.y === a.y
        },
        lb: function(a) {
            return new g.H(this.x, this.y, a)
        },
        toString: function() {
            return this.x + "," + this.y
        },
        rl: function() {
            return [this.x, this.y]
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        direction: function() {
            var a = this.x,
                b = this.y;
            if (0 === a && 0 === b) return null;
            if (0 === a) return 0 < b ? 90 : 270;
            var c = 180 *
                Math.atan(b / a) / Math.PI;
            return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
        },
        vu: function(a) {
            var b = this.length(),
                c = a.length();
            return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
        },
        Cna: function(a) {
            var b = this.length(),
                c = a.length();
            return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
        },
        toFixed: function(a) {
            this.x = g.a.kc(this.x, a);
            this.y = g.a.kc(this.y, a);
            return this
        }
    });
    g.H.Pb({
        mf: "getX",
        je: "getY",
        add: "add",
        Za: "subtract",
        gd: "divideBy",
        Jd: "multiplyBy",
        we: "distance",
        cb: "equals",
        toString: "toString"
    });
    g.wd = g.aa.extend({
        r: function(a, b, c) {
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
            this.width = c ? Math.round(a) : Number(a);
            this.height = c ? Math.round(b) : Number(b)
        },
        lb: function() {
            return new g.wd(this.width, this.height)
        },
        qj: function() {
            return this.width
        },
        oj: function() {
            return this.height
        },
        wE: function() {
            return new g.H(this.qj(), this.oj())
        },
        contains: function(a) {
            return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
        },
        cb: function(a) {
            return a instanceof g.wd && this.width ===
                a.width && this.height === a.height
        },
        toString: function() {
            return this.qj() + "," + this.oj()
        }
    });
    g.wd.Pb({
        qj: "getWidth",
        oj: "getHeight",
        toString: "toString"
    });
    g.hp = g.aa.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.ArrayBounds";
            a = g.a.Ia(a);
            this.path = [];
            for (var b = 0; b < a.length; b += 1) this.path.push([a[b].Q, a[b].P]);
            this.bounds = this.Xd = a
        },
        contains: function(a, b) {
            if (a instanceof g.hp) return g.$q.isRingInRing(a.path, this.path);
            a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.Q, a.P]);
            return g.vd.Pd(a, this.path, b)
        },
        toBounds: function() {
            for (var a = new g.re(180, 90, -180, -90), b = this.Xd.length - 1; 0 <= b; b -= 1) a.extend(this.Xd[b]);
            return a
        },
        ZQ: function(a) {
            for (var b = [], c = 0; c <
            this.path.length; c += 1) b[c] = a.mc(this.path[c], 20);
            return b
        },
        WQ: function(a) {
            return this.toBounds().WQ(a)
        },
        ti: function() {
            return this.toBounds().ti()
        },
        toString: function() {
            return this.path.join(";")
        }
    });
    g.hp.Pb({
        contains: "contains",
        ti: "getCenter"
    });
    g.p$ = g.hp.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.CoordsBounds";
            this.path = a;
            if (a[0] instanceof g.H) {
                this.path = [];
                for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
            }
            this.bounds = this.Xd = a
        },
        toString: function() {
            return this.path.join(";")
        }
    });
    g.Nf = g.aa.extend({
        r: function() {
            if (2 === arguments.length) this.ec = arguments[0], this.Sd = arguments[1];
            else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
                var a = arguments[0] instanceof Array ? arguments[0] : arguments;
                this.ec = new g.H(a[0], a[1]);
                this.Sd = new g.H(a[2], a[3])
            } else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
        },
        ti: function(a) {
            return new g.H((this.ec.x + this.Sd.x) / 2, (this.ec.y + this.Sd.y) / 2, a)
        },
        contains: function(a) {
            var b;
            a instanceof g.Nf ? (b = a.ec, a = a.Sd) :
                b = a;
            return b.x > this.ec.x && a.x < this.Sd.x && b.y > this.ec.y && a.y < this.Sd.y
        },
        qj: function() {
            return this.Sd.x - this.ec.x
        },
        oj: function() {
            return this.Sd.y - this.ec.y
        },
        Pg: function(a, b) {
            b || 0 === b || (b = 20);
            var c = this.ec,
                d = this.Sd,
                e = a.ec,
                f = a.Sd,
                h = f.y >= c.y - b && e.y <= d.y + b;
            return f.x >= c.x - b && e.x <= d.x + b && h
        },
        toString: function() {
            return this.ec + ";" + this.Sd
        },
        lb: function() {
            return new g.Nf(this.ec.lb(), this.Sd.lb())
        }
    });
    g.I = {};
    g.I.vP = function(a) {
        for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.I.qI(b, a[c]);
        return b
    };
    g.I.w1 = function(a, b, c) {
        var d = Math.min.apply(null, a);
        a = Math.max.apply(null, a);
        var e = Math.min.apply(null, b);
        b = Math.max.apply(null, b);
        return g.I.yna(d, a, e, b, c)
    };
    g.I.buffer = function(a, b) {
        a[0] -= b;
        a[1] -= b;
        a[2] += b;
        a[3] += b
    };
    g.I.lb = function(a) {
        return a.slice()
    };
    g.I.Pd = function(a, b) {
        return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
    };
    g.I.k2 = function(a, b) {
        return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
    };
    g.I.mCa = function() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    };
    g.I.yna = function(a, b, c, d, e) {
        return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
    };
    g.I.empty = function(a) {
        a[0] = a[1] = Infinity;
        a[2] = a[3] = -Infinity;
        return a
    };
    g.I.cb = function(a, b) {
        return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
    };
    g.I.extend = function(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3])
    };
    g.I.qI = function(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    };
    g.I.gDa = function(a) {
        return [a[0], a[1]]
    };
    g.I.hDa = function(a) {
        return [a[2], a[1]]
    };
    g.I.ti = function(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    };
    g.I.tDa = function(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        c = Math.sin(c);
        f = [-f, -f, f, f];
        d = [-d, d, -d, d];
        var h, k, l;
        for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
        return g.I.w1(f, d, e)
    };
    g.I.oj = function(a) {
        return a[3] - a[1]
    };
    g.I.GDa = function(a) {
        return [a[2] - a[0], a[3] - a[1]]
    };
    g.I.KDa = function(a) {
        return [a[0], a[3]]
    };
    g.I.LDa = function(a) {
        return [a[2], a[3]]
    };
    g.I.qj = function(a) {
        return a[2] - a[0]
    };
    g.I.Pg = function(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    };
    g.I.rh = function(a) {
        return a[2] < a[0] || a[3] < a[1]
    };
    g.I.normalize = function(a, b) {
        return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
    };
    g.I.mGa = function(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1),
            d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    };
    g.I.touches = function(a, b) {
        return g.I.Pg(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
    };
    g.I.transform = function(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        return g.I.w1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
    };
    g.re.zb({
        r: function() {
            var a = g.re.prototype.r;
            return function() {
                a.apply(this, arguments);
                this.southwest = this.tc;
                this.northeast = this.lc
            }
        }(),
        extend: function() {
            var a = g.re.prototype.extend;
            return function() {
                a.apply(this, arguments);
                this.tc.lng = this.tc.Q;
                this.tc.lat = this.tc.P;
                this.lc.lng = this.lc.Q;
                this.lc.lat = this.lc.P;
                return this
            }
        }()
    });
    g.U.zb({
        r: function() {
            var a = g.U.prototype.r;
            return function() {
                a.apply(this, arguments);
                this.lng = parseFloat(this.Q.toFixed(6));
                this.lat = parseFloat(this.P.toFixed(6))
            }
        }()
    });
    g.uF = g.aa.extend({
        r: function(a, b, c, d) {
            this.EW = a;
            this.UW = b;
            this.hX = c;
            this.DX = d
        },
        transform: function(a, b) {
            return this.N0(a.lb(), b)
        },
        N0: function(a, b) {
            b = b || 1;
            a.x = b * (this.EW * a.x + this.UW);
            a.y = b * (this.hX * a.y + this.DX);
            return a
        },
        wya: function(a, b) {
            b = b || 1;
            return new g.H((a.x / b - this.UW) / this.EW, (a.y / b - this.DX) / this.hX)
        }
    });
    g.mp = g.aa.extend({
        r: function(a) {
            this.BL = a.MAX_LATITUDE || 85.0511287798;
            a.project && a.unproject && (this.mc = a.project, this.Wh = a.unproject)
        }
    });
    g.mp.QV = {
        mc: function(a) {
            return new g.H(a.Q, a.P)
        },
        Wh: function(a, b) {
            return new g.U(a.x, a.y, b)
        }
    };
    g.mp.zaa = new g.mp({
        MAX_LATITUDE: 85.0511287798,
        project: function(a) {
            var b = Math.PI / 180,
                c = this.BL,
                c = Math.max(Math.min(c, a.P), -c);
            a = a.Q * b;
            b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
            return new g.H(a, b, !1)
        },
        unproject: function(a, b) {
            var c = 180 / Math.PI;
            return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
        }
    });
    g.mp.VV = {
        BL: 85.0840591556,
        NL: 6356752.3142,
        ML: 6378137,
        mc: function(a) {
            var b = Math.PI / 180,
                c = this.BL,
                d = Math.max(Math.min(c, a.P), -c),
                e = this.ML,
                c = this.NL;
            a = a.Q * b * e;
            b *= d;
            e = c / e;
            e = Math.sqrt(1 - e * e);
            d = e * Math.sin(b);
            d = Math.pow((1 - d) / (1 + d), 0.5 * e);
            b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
            b = -c * Math.log(b);
            return new g.H(a, b)
        },
        Wh: function(a, b) {
            for (var c = 180 / Math.PI, d = this.ML, e = this.NL, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
                l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
            return new g.U(f, h * c, b)
        }
    };
    g.Zh = {};
    g.Zh.ZE = {
        uD: function(a, b) {
            var c = this.Ef.mc(a),
                d = this.scale(b);
            return this.BE.N0(c, d)
        },
        TD: function(a, b, c) {
            b = this.scale(b);
            a = this.BE.wya(a, b);
            return this.Ef.Wh(a, c)
        },
        mc: function(a) {
            return this.Ef.mc(a)
        },
        scale: function(a) {
            return 256 << a
        },
        Zp: function(a) {
            return 12756274 * Math.PI / (256 * Math.pow(2, a))
        }
    };
    g.Zh.rL = g.extend({}, g.Zh.ZE, {
        code: "EPSG:3857",
        Ef: g.mp.zaa,
        BE: new g.uF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
        mc: function(a) {
            return this.Ef.mc(a).Jd(6378137)
        }
    });
    g.Zh.AV = g.extend({}, g.Zh.ZE, {
        code: "EPSG:3395",
        Ef: g.mp.VV,
        BE: function() {
            var a = g.mp.VV;
            return new g.uF(0.5 / (Math.PI * a.ML), 0.5, -0.5 / (Math.PI * a.NL), 0.5)
        }()
    });
    g.Zh.BV = g.extend({}, g.Zh.ZE, {
        code: "EPSG:4326",
        Ef: g.mp.QV,
        BE: new g.uF(1 / 360, 0.5, -1 / 360, 0.25)
    });
    g.Zh.$za = g.extend({}, g.Zh.ZE, {
        Ef: g.mp.QV,
        BE: new g.uF(1, 0, 1, 0)
    });
    g.xJ = {
        mc: function(a, b) {
            a = g.a.Ia(a);
            return this.hj.uD(a, b || this.get("zoom"))
        },
        Wh: function(a, b, c) {
            return this.hj.TD(a, b || this.get("zoom"), c)
        },
        msa: function(a, b) {
            return this.mc(a, b)
        },
        dDa: function(a, b) {
            return this.Wh(a, b)
        },
        Lp: function(a, b, c) {
            g.c.add(this, "containerToLngLat");
            var d = this.get("size").wE().gd(2);
            if (a.cb(d) && !c) return this.get("center");
            a = this.tg(a, b, c);
            return this.Td(a)
        },
        xs: function(a, b) {
            g.c.add(this, "lngLatToContainer");
            var c = 0;
            b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
                b);
            var d = this.Ab(a);
            return this.ce(d, null, c)
        },
        Ab: function(a) {
            a = g.a.Ia(a);
            return this.mc(a, 20)
        },
        Td: function(a) {
            return a ? this.Wh(a, 20) : a
        },
        tJ: function(a) {
            a = g.a.Ia(a);
            return this.mc(a, 20).Za(g.a.$b)
        },
        B5: function(a, b) {
            b || (a = g.a.Ia(a));
            var c = [],
                d = !1;
            void 0 === a[0].length && (d = !0);
            for (var c = [], e = 0, f = a.length; e < f; e += 1)
                if (d) {
                    var h = this.mc(a[e], 20).Za(g.a.$b);
                    c[e] = [h.x, h.y]
                } else c[e] = this.B5(a[e], !0);
            return c
        },
        ppa: function(a) {
            return this.Wh(a.add(g.a.$b), 20)
        },
        eDa: function(a) {
            return this.ce(a.add(g.a.$b))
        },
        mDa: function(a) {
            return a ?
                this.mc(this.get("center"), a) : this.get("centerPixel")
        },
        IAa: function(a) {
            return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).gd(0.14929107086948487)
        },
        C6: function(a) {
            return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
        }
    };
    z.xF = g.aa.extend({
        ka: [g.va, g.Se],
        B: {
            center: new g.U(116.397128, 39.916527),
            zoom: 13,
            rotation: 0,
            crs: "EPSG3857"
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.View2D";
            g.c.wa(this, a);
            a = a || {};
            a.center && (a.center = g.a.Ia(a.center));
            this.B = a
        }
    });
    z.Kb = g.aa.extend({
        ka: [g.va, g.Se, g.xJ],
        B: {
            features: "all",
            showLabel: !0,
            dragEnable: !0,
            showIndoorMap: g.l.ba ? !1 : !0,
            lang: "zh_cn",
            keyboardEnable: !0,
            doubleClickZoom: !0,
            gridMapForeign: !1,
            scrollWheel: !0,
            zoomEnable: !0,
            jogEnable: !0,
            continuousZoomEnable: !0,
            resizeEnable: !1,
            animateEnable: !0,
            rotateEnable: !1,
            labelzIndex: 99,
            showFog: !0,
            touchZoom: !0,
            zooms: [3, g.l.ba ? g.l.Mc ? 19 : 20 : 18],
            defaultCursor: "",
            limitBounds: null,
            logoUrl: g.w.yb + "/theme/v1.3/logo@1x.png",
            logoUrlRetina: g.w.yb + "/theme/v1.3/logo@2x.png",
            copyright: "<!--v1.4.15--> &copy " +
                (new Date).getFullYear() + " AutoNavi ",
            isHotspot: !g.l.ba,
            baseRender: g.l.p1,
            overlayRender: g.l.fua,
            mapStyle: "amap://styles/normal",
            showBuildingBlock: g.l.Df,
            crs: "EPSG3857",
            rotation: 0,
            pitch: 0,
            yaw: 0,
            scale: 1,
            center: new g.U(116.397128, 39.916527),
            zoom: 13,
            detectRetina: !0,
            pitchEnable: !1,
            buildingAnimation: !1,
            maxPitch: 83,
            turboMode: !0,
            preloadMode: !1,
            workerMode: !0
        },
        poiOnAMAP: function(a) {
            g.c.add(this, "poiOnAMAP");
            var b = {},
                c = g.a.Ia(a.location);
            b.id = a.id;
            c && (b.y = c.P, b.x = c.Q);
            b.name = a.name;
            b.address = a.address;
            g.$h.at(g.$h.N3(b))
        },
        detailOnAMAP: function(a) {
            g.c.add(this, "detailOnAMAP");
            var b = {},
                c = g.a.Ia(a.location);
            b.id = a.id;
            c && (b.y = c.P, b.x = c.Q);
            b.name = a.name;
            g.$h.at(g.$h.L3(b))
        },
        setLabelzIndex: function(a) {
            g.c.add(this, "setLabelzIndex");
            return this.set("labelzIndex", a)
        },
        getLabelzIndex: function() {
            return this.get("labelzIndex", null, !0)
        },
        setMapStyle: function(a) {
            g.c.add(this, "setMapStyle");
            a = a || "normal"; - 1 === a.indexOf("amap://styles/") ? g.w.PJ[a] ? this.set("styleUrl", "amap://styles/" + g.w.PJ[a]) : this.set("styleUrl", "") : this.set("styleUrl",
                a);
            this.CS()
        },
        getMapStyle: function() {
            return this.get("styleUrl") || this.get("mapStyle", null, !0)
        },
        getFeatures: function() {
            return this.get("features", null, !0)
        },
        setFeatures: function(a) {
            g.c.add(this, "setFeatures");
            this.set("features", a)
        },
        setLang: function(a) {
            g.c.add(this, "setLang", a);
            "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.ak && this.ak.I7(this))
        },
        getLang: function() {
            return this.get("lang", null, !0)
        },
        setCity: function(a, b) {
            g.c.add(this, "setCity");
            var c = this;
            (new g.fb.tb(g.w.Ud + "/v3/config/district?subdistrict=0&extensions=all&key=" + g.w.key + "&s=rsv3&output=json&keywords=" + a, {
                callback: "callback"
            })).h("complete", function(d) {
                var e = d.districts;
                if (e && e.length) {
                    d = e[0];
                    /[^\w]+/.test(a) && (e = g.a.find(e, function(b) {
                        return b.name === a
                    })) && e !== d && (d = e);
                    try {
                        var f = d.center.split(","),
                            h;
                        switch (d.level) {
                            case "city":
                                h = 10;
                                break;
                            case "province":
                                h = 7;
                                break;
                            case "district":
                                h = 12;
                                break;
                            case "country":
                                h = 4;
                                break;
                            default:
                                h = 12
                        } - 1 !== d.name.indexOf("市") && (h = 10);
                        c.D = !0;
                        c.setZoomAndCenter(h,
                            new g.U(f[0], f[1]), !0);
                        c.D = !1;
                        b && b.call(c, f, h)
                    } catch (k) {}
                }
            }, this)
        },
        getScreenShot: function(a, b) {
            g.c.add(this, "getScreenShot");
            return this.map && g.l.$k ? this.map.V3(a, b) : ""
        },
        getCity: function(a, b) {
            g.c.add(this, "getCity");
            var c = g.w.Ud + "/v3/geocode/regeo?&extensions=&&key=" + g.w.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
            (new g.fb.tb(c, {
                callback: "callback",
                Qx: !0,
                Ad: "REGEO"
            })).h("complete", function(b) {
                b = b.regeocode.addressComponent;
                a({
                    province: b.province,
                    city: b.city instanceof Array ?
                        "" : b.city,
                    citycode: b.citycode instanceof Array ? "" : b.citycode,
                    district: b.district instanceof Array ? "" : b.district
                })
            }, this)
        },
        r: function(a, b) {
            b = g.extend({}, b);
            this.id = g.a.wb(this);
            this.CLASS_NAME = "AMap.Map";
            g.c.wa(this, b);
            this.D = !0;
            b = b || {};
            b.mapStyle && g.w.PJ[b.mapStyle] && (b.mapStyle = "amap://styles/" + g.w.PJ[b.mapStyle]);
            b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
            b.bgColor && g.extend(g.w.ue, b.bgColor);
            b.maxPitch && (b.maxPitch =
                Math.min(this.B.maxPitch, Math.max(b.maxPitch, 0)));
            b.pitch && (b.pitch = Math.min(b.maxPitch || this.B.maxPitch, Math.max(b.pitch, 0)));
            "3D" !== b.viewMode && (b.pitch = 0);
            g.w.Ir = b.buildingColor || null;
            b.mobile && (g.l.ba = !0);
            b.noPoi && (g.w.qta = !0);
            b.editEnable = g.w.wQ ? b.editEnable : !1;
            b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
            void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
            "3D" === b.viewMode && g.l.fp && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
            this.gq = !!b.enableSocket;
            b.server && (g.w.Ud = b.server);
            b.vdataUrl &&
            (g.w.eL = b.vdataUrl);
            if ("string" === typeof a) {
                if (a = this.K = document.getElementById(a), !a) return
            } else "DIV" === a.tagName && (this.K = a); if (this.K.iM) {
                var c = this.K.iM;
                c.D = !0;
                c.destroy();
                c.D = !1
            }
            g.te.cf.start({
                id: this.id,
                K: this.K
            });
            this.K.iM = this;
            var c = this.B.zooms[1],
                d = this.B.zooms[0];
            b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Mc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
            b.forceZooms && (b.zooms = b.forceZooms);
            b = this.rma(b);
            c = this.getSize(!0);
            b.center && (b.center =
                g.a.Ia(b.center));
            this.hj = this.zna(b.crs || this.B.crs, b.center || this.B.center);
            this.zla(c, b);
            d = b.lang;
            "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
            g.j.mg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
            b.preloadMode = !1;
            g.l.mS ? !1 !== b.workerMode && (z.Kb.Bt ? (b.workerMode = !1, z.Kb.Bt++) : z.Kb.Bt = 1) : b.workerMode = !1;
            b.layers && (d = b.layers, delete b.layers, b.layers = d);
            b.baseRender = b.baseRender || g.l.p1;
            b.forceVector && (b.baseRender = g.l.Df ? "vw" : "v");
            b.disableVector && (b.baseRender = "d");
            "dom" === b.renderer && (b.baseRender =
                "d", b.overlayRender = "d");
            c = Math.max(c.width, c.height);
            g.l.ja && (c *= Math.min(2, window.devicePixelRatio || 1));
            "vw" === b.baseRender && c > g.l.Rsa && (b.baseRender = "dv");
            "d" == b.baseRender && b.vectorMapForeign && (b.vectorMapForeign = !1, b.gridMapForeign = !0);
            g.a.Db(this, b);
            this.af(this.B);
            "rotateEnable" in b || "3D" !== b.viewMode || !g.l.fp || this.set("rotateEnable", !0);
            "pitchEnable" in b || "3D" !== b.viewMode || !g.l.fp || this.set("pitchEnable", !0);
            c = this.get("zoom", null, !0);
            "3D" === this.get("viewMode") && g.l.fp || (c = Math.round(c));
            d = this.get("zooms");
            c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
            this.set("zoom", c);
            this.B.zoom = c;
            this.Bna(this.B);
            this.JP();
            var e = this;
            this.af({
                overlays: [],
                infos: {},
                controls: {}
            });
            var f = [];
            (b.gridMapForeign || b.vectorMapForeign) && f.push("gridmap");
            b.vectorMapForeign && g.l.qu && f.push("MVT", "vectorForeign");
            b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
            "3D" === b.viewMode && g.l.fp && f.push("Map3D");
            g.l.$k && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push("labelcanvas");
            b.editEnable && f.push("edit");
            g.l.$k &&
            (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
            this.ja = g.l.ja && this.get("detectRetina");
            this.C9(b);
            this.D = !1;
            this.Dsa(function() {
                g.rb.Tg(f, function() {
                    if (!e.get("destroy")) {
                        var b = new g.Kb(a, e);
                        if (g.Me) {
                            var c = (g.Me[0] || g.Me).stylemaps["50001:1"].browserStyle[0].split("&");
                            b.GF = [c[0], c[4]]
                        }
                        b.Ue("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
                        b.h("complete", function() {
                            var a = {};
                            b.J && "3D" == b.J.type && (a.canvas = b.J.Ma, a.gl = b.J.ea);
                            this.q("complete",
                                a)
                        }, e, !0);
                        b.hj = e.hj;
                        e.Ue(["zoomSlow", "panTo", "targetLevel", "render"], b);
                        b.Ue(["size", "bounds"], e);
                        e.loaded = !0;
                        e.q("coreMapCreated");
                        g.l.$k && e.ala();
                        e.D = !0;
                        "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.Cw.pV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Cw.zV([0, -1, 1], [1, 1, 1], 0.1)));
                        e.D = !1
                    }
                })
            })
        },
        Dsa: function(a) {
            function b() {
                var a = AMap.anole,
                    b = {},
                    c = [],
                    d = 0,
                    e = void 0;
                if (a) {
                    for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] =
                        d++, c.push(e[a]));
                    c.reverse();
                    d = 0;
                    for (a = e.length; d < a; d++) e[d] = c[b[e[d]]];
                    a = e.join("");
                    g.Me = eval(a);
                    delete AMap.anole
                }
            }
            if (g.l.ye || g.Me) a();
            else {
                var c = !0;
                if (window.__AMapStyleSource) c = !1;
                else try {
                    var d = JSON.parse(localStorage.getItem("_AMap_anole"));
                    d && d.version === g.l.Jf && d.script ? eval(d.script) : c = !1
                } catch (e) {
                    c = !1
                }
                if (c) b(), a();
                else {
                    var f = document.createElement("script");
                    f.oCa = "anonymous";
                    f.id = "amap_anole_js";
                    f.src = window.__AMapStyleSource || g.w.Fc + "://vdata.amap.com/style?v=" + g.w.zr + "&key=" + g.w.key +
                        "&mapstyle=normal";
                    c = document;
                    (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
                    f.onload = function() {
                        if (!g.Me) {
                            if (!window.__AMapStyleSource && g.l.ys) try {
                                var c = {
                                    version: g.l.Jf,
                                    script: "AMap['anole']=" + JSON.stringify(AMap.anole)
                                };
                                localStorage.setItem("_AMap_anole", JSON.stringify(c))
                            } catch (d) {}
                            b()
                        }
                        a();
                        f.parentNode.removeChild(f)
                    }
                }
            }
        },
        getViewMode_: function() {
            return this.view.type
        },
        vpa: function(a, b, c) {
            var d = new g.U(a[4], a[5]);
            if ((a = new g.re(a[0], a[1], a[2], a[3])) && b && d) {
                for (var e = c[1]; e > c[0]; e -=
                    1) {
                    var f = this.mc(a.tc, e),
                        h = this.mc(a.lc, e);
                    if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
                }
                return [d, Math.min(e + 1, c[1])]
            }
            return null
        },
        zla: function(a, b) {
            if (!(b && b.center && b.zoom)) {
                var c = this.vpa(g.w.Xd, a, b.zooms);
                b.center = b.center || c && c[0];
                "number" !== typeof b.zoom && (b.zoom = c && c[1])
            }
        },
        zna: function(a, b) {
            if (b instanceof g.U) {
                if ("string" === typeof a) {
                    switch (a) {
                        case "EPSG3395":
                            return g.Zh.AV;
                        case "EPSG4326":
                            return g.Zh.BV
                    }
                    return g.Zh.rL
                }
                if (a.pointToLngLat && a.lngLatToPoint) return {
                    TD: a.pointToLngLat,
                    uD: a.lngLatToPoint,
                    Zp: a.getResolution
                };
                throw "illegal projection";
            }
            var c = this.get("zoom", null, !0);
            return {
                Zp: function(a) {
                    return Math.pow(2, c - a)
                },
                uD: function() {},
                TD: function() {}
            }
        },
        Nwa: function(a, b) {
            this.Mw && this.Mw.stop();
            var c = ["pitch", "rotation", "zoom", "center"],
                d = {},
                e = !1,
                f;
            for (f in a)
                if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
                    var h = this.get(f);
                    void 0 === h || h === a[f] || h.cb && h.cb(a[f]) || (d[f] = this.get(f), e = !0)
                }
            e && (this.Mw = new g.Dj(d, a, null, 0), this.Mw.transition = function(a, c, e) {
                e /= b || 300;
                if (1 <= e) return c;
                var f = {},
                    h;
                for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].Za(a[h]).Jd(e)) : a[h] + (c[h] - a[h]) * e);
                return f
            }, this.Mw.tq = function(b) {
                b === a && (this.Mw.stop(), this.Bd = null);
                for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.D = !0, this.setCenter(b[c], !0), this.D = !1) : this.set(c, b[c]))
            }, this.Mw.Dn(this))
        },
        Bna: function(a) {
            "3D" === this.get("viewMode") && g.l.fp ? (this.set("baseRender", "vw"), this.view = new g.XL(this, a)) : this.view = new g.xF(this, a);
            this.E4()
        },
        E4: function() {
            this.xi = "d" < this.get("baseRender") ||
                "3D" === this.view.type
        },
        featuresChanged: function() {
            this.JP()
        },
        CS: function() {
            this.JP();
            this.hU()
        },
        hU: function() {
            if (this.mm) {
                var a = !0;
                this.D = !0;
                var b = this.getMapStyle();
                if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
                for (var b = this.getLayers(), c = this.D = !1, d = 0, e = b.length; d < e; d += 1) {
                    if (b.hasOwnProperty(d) && "AMap.IndoorMap" === b[d].CLASS_NAME && b[d] !== this.mm) {
                        a = !1;
                        break
                    }
                    b[d].fq && b[d].fq() && b[d].get("visible") && (c = !0)
                }(a = c && a) && this.mm.getMap() !== this && this.mm.setMap(this);
                this.mm.set("visible", a)
            }
        },
        JP: function() {
            this.C9();
            if (this.view && "3D" !== this.view.type) {
                var a = this.get("baseRender");
                if (a && !("dv" < a)) {
                    var b = this.get("features", null, !0);
                    this.D = !0;
                    var c = this.getMapStyle();
                    this.D = !1;
                    var d = this.get("editEnable");
                    b && c && (g.l.qu && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.YS = a) : this.YS && (this.set("baseRender", this.YS), this.YS = null));
                    this.E4()
                }
            }
        },
        ala: function() {
            var a = this;
            !a.mm && a.K && (a.indoorMap = a.mm = new AMap.IndoorMap({
                innerLayer: !0
            }),
                a.hU(), g.a.Sc(function() {
                a.q("indoor_create", {
                    target: a
                });
                a.set("display")
            }))
        },
        layersChanged: function() {
            this.D = !0;
            var a = this.getLayers();
            this.IJ = this.D = !1;
            for (var b = 0; b < a.length; b += 1) a[b].D = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].D = !1, a[b].IJ && (this.IJ = !0);
            this.hU()
        },
        getMapNumber: function() {
            if (this.map) return this.map.$D()
        },
        getAdcode: function() {
            g.c.add(this, "getAdcode");
            return g.w.Zka
        },
        C9: function() {
            function a() {
                var a = !1;
                g.a.Ob(b.B.layers, function(b) {
                    if (b.qG && b.constructor === z.o.ob) return a = !0, !1
                }, b);
                if (g.a.ka(["d", "dv"], b.get("baseRender")) || !g.a.ka(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
                return a
            }
            if (!this.m7) {
                var b = this,
                    c = a(),
                    d = this.get("rasterLayer");
                if (d && !c) this.mk(d), this.set("rasterLayer", void 0);
                else if (!d && c && this.get("layers")) {
                    d = new z.o.ob({
                        innerLayer: !0,
                        map: this,
                        lk: !0,
                        zIndex: 0
                    });
                    d.Gra = !0;
                    if (this.B.layers) {
                        var e = null;
                        g.a.Ob(this.B.layers, function(a) {
                            a instanceof
                            z.o.ob && a.qG && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
                        });
                        e && d.Ue(["zIndex", "opacity", "zooms", "visible"], e)
                    }
                    this.set("rasterLayer", d, !0)
                }
            }
        },
        rma: function(a) {
            a || (a = {});
            if (a.hasOwnProperty("defaultLayer")) {
                a.layers = [a.defaultLayer];
                var b = a.defaultLayer;
                b.kP = !0;
                this.set("defaultLayer", b, !0)
            }
            a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new z.o.ob({
                innerLayer: !0
            }), a.layers = [b], b.kP = !0, this.set("defaultLayer", b, !0));
            if (b = a.view) b.B.rotation && (a.rotation = b.B.rotation),
            b.B.center && (a.center = b.B.center), b.B.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.B.zoom))), b.B.crs && (a.crs = b.B.crs);
            a.level && !a.zoom && (a.zoom = a.level);
            return a
        },
        setLimitBounds: function(a) {
            g.c.add(this, "setLimitBounds");
            a instanceof g.hp && (a.D = !0, a = a.toBounds(), a.D = !1);
            a instanceof g.re || (a = null);
            this.set("limitBounds", a)
        },
        clearLimitBounds: function() {
            g.c.add(this, "clearLimitBounds");
            this.set("limitBounds", null)
        },
        getLimitBounds: function() {
            g.c.add(this, "getLimitBounds");
            return this.get("limitBounds",
                null, !0)
        },
        zH: function(a) {
            var b = this.get("layers");
            if (!(0 <= g.a.indexOf(b, a)) && (b.push(a), this.set("layers", b), a.pG)) {
                a = a.getLayers();
                for (var b = -1, c = a.length; ++b < c;) {
                    var d = a[b];
                    d instanceof z.o.Ub || !d.setMap || d.setMap(this)
                }
            }
        },
        aC: function(a) {
            var b = this.get("overlays");
            0 <= g.a.indexOf(b, a) || (a instanceof z.A.Jn ? (this.get("overlays").push(a), this.Zx instanceof z.A.Jn && (this.Zx.D = !0, this.Zx.close(), this.Zx.D = !1), this.Zx = a, this.set("contextmenu", a, !0)) : (a instanceof z.A.Re && (this.nm instanceof z.A.Re && this.oz(this.nm),
                this.nm = a), this.get("overlays").push(a)), this.q("overlays"))
        },
        mk: function(a) {
            var b = this.get("layers"),
                c = g.a.indexOf(b, a);
            if (-1 !== c) {
                if (a.pG)
                    for (c = b.length; - 1 < --c;) {
                        var d = b[c];
                        d.EA !== a && d !== a || b.splice(c, 1)
                    } else a.EA && a.EA.eka(a), b = g.a.uo(b, c);
                this.set("layers", b);
                if (a.pG)
                    for (a = a.getLayers(), b = -1, c = a.length; ++b < c;) d = a[b], d instanceof z.o.Ub || !d.setMap || d.setMap()
            }
        },
        getZooms: function() {
            return this.get("zooms", null, !0)
        },
        setZooms: function(a) {
            return this.set("zooms", a, !0)
        },
        oz: function(a) {
            var b = this.get("overlays");
            this.set("overlays", g.a.uo(b, g.a.indexOf(b, a)))
        },
        getTileCoordByLngLat: function(a, b, c) {
            b = b || 256;
            this.D = !0;
            c = c || Math.round(this.getZoom());
            this.D = !1;
            a = this.mc(a, c);
            c = new g.Zq(c, Math.floor(a.x / b), Math.floor(a.y / b));
            c.KC = a.x % b;
            c.LC = a.y % b;
            return c
        },
        setZoom: function(a, b) {
            g.c.add(this, "setZoom");
            a = this.PC(a);
            var c = this.get("zooms");
            a > c[1] && (a = c[1]);
            a < c[0] && (a = c[0]);
            this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.q("zoomstart"), this.q("zoomchange"), this.q("zoomend")) : this.set("zoomSlow",
                a))
        },
        getZoom: function() {
            g.c.add(this, "getZoom");
            return this.PC(this.get("targetLevel") || this.get("zoom", null, !0))
        },
        getCenter: function() {
            g.c.add(this, "getCenter");
            return this.get("center", null, !0)
        },
        setCenter: function(a, b) {
            g.c.add(this, "setCenter");
            a = g.a.Ia(a);
            b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"), this.map ? this.map.q("moveend") : this.q("moveend")) : (this.D = !0, this.panTo(a), this.D = !1)
        },
        getCoordsBound: function() {
            return this.view.em()
        },
        getCoordsBoundByZoom: function(a) {
            return this.view.spa(a)
        },
        setRotation: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            g.c.add(this, "setRotation");
            !g.l.ye && this.get("rotateEnable") && this.set("rotation", a)
        },
        getRotation: function() {
            g.c.add(this, "getRotation");
            return this.get("rotation")
        },
        setPitch: function(a) {
            g.c.add(this, "setPitch");
            a = Math.min(this.get("maxPitch"), Math.max(a, 0));
            "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
        },
        getPitch: function() {
            g.c.add(this, "getRotation");
            return "3D" === this.view.type ? this.get("pitch") :
                0
        },
        getStatus: function() {
            g.c.add(this, "getStatus");
            for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
            return b
        },
        setStatus: function(a) {
            g.c.add(this, "setStatus");
            for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) &&
            this.set(b, a[b])
        },
        getResolution: function(a, b) {
            g.c.add(this, "getResolution");
            var c = (a = g.a.Ia(a)) ? a.P : this.get("center", null, !0).P;
            return this.hj.Zp(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
        },
        getScale: function(a) {
            g.c.add(this, "getScale");
            this.D = !0;
            a = this.getResolution() * (a || 96) / 0.0254;
            this.D = !1;
            return a
        },
        getDefaultCursor: function() {
            g.c.add(this, "getDefaultCursor");
            return this.get("defaultCursor", null, !0) || "url(" + g.w.yb + "/theme/v1.3/openhand.cur),default"
        },
        setDefaultCursor: function(a) {
            g.c.add(this,
                "setDefaultCursor");
            return this.set("defaultCursor", a, !0)
        },
        zoomIn: function(a) {
            g.c.add(this, "zoomIn");
            this.D = !0;
            this.setZoom(this.getZoom() + 1, a);
            this.D = !1
        },
        zoomOut: function(a) {
            g.c.add(this, "zoomOut");
            this.D = !0;
            this.setZoom(this.getZoom() - 1, a);
            this.D = !1
        },
        PC: function(a) {
            return this.view && "3D" === this.view.type ? g.a.kc(a, 4) : Math.round(a)
        },
        setZoomAndCenter: function(a, b, c) {
            g.c.add(this, "setZoomAndCenter");
            b = g.a.Ia(b);
            a = this.PC(a);
            var d = this.get("zooms");
            a > d[1] && (a = d[1]);
            a < d[0] && (a = d[0]);
            this.D = !0;
            this.loaded ?
                this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
            this.D = !1
        },
        clearMap: function() {
            g.c.add(this, "clearMap");
            for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
            this.set("overlays", []);
            if (this.map && this.map.za)
                for (a = this.map.za, b = a.length - 1; 0 <= b; b -= 1)
                    if (a[b].T instanceof z.o.uL) {
                        var c = a[b].T;
                        c.D = !0;
                        c.setMap(null);
                        c.D = !1
                    }
        },
        destroy: function() {
            g.c.add(this, "destroy");
            this.mm && (this.mm.setMap(), this.indoorMap = this.mm = null);
            this.set("overlays", []);
            this.set("defaultLayer",
                null);
            this.set("layers", []);
            var a = this.get("controls");
            a.remove = [];
            for (var b in a.Hd) a.Hd.hasOwnProperty(b) && a.remove.push(a.Hd[b]);
            a.Hd = [];
            a.add = [];
            this.set("controls", a);
            this.set("destroy", !0);
            this.Ka = !1;
            this.tl();
            this.B = this.K = null;
            this.Cc && this.Cc.tl();
            this.Cc = null;
            this.view && this.view.tl();
            this.view = null;
            this.ri();
            z.Kb.Bt--
        },
        addControl: function(a) {
            g.c.add(this, "addControl");
            var b = g.a.wb(a),
                c = this.get("controls") || {};
            c.Hd = c.Hd || {};
            c.Hd[b] || (c.Hd[b] = a);
            c.add = c.add || [];
            c.add.push(a);
            this.set("controls",
                c)
        },
        removeControl: function(a) {
            g.c.add(this, "removeControl");
            var b = g.a.wb(a),
                c = this.get("controls") || {};
            c.Hd = c.Hd || {};
            c.Hd[b] && delete c.Hd[b];
            c.remove = c.remove || [];
            c.remove.push(a);
            this.set("controls", c)
        },
        clearControl: function() {
            g.c.add(this, "clearControl");
            var a = this.get("controls") || {};
            a.remove = a.remove || [];
            a.Hd = a.Hd || {};
            for (var b in a.Hd) a.Hd.hasOwnProperty(b) && (a.remove.push(a.Hd[b]), delete a.Hd[b]);
            this.set("controls", a)
        },
        plugin: function(a, b) {
            g.c.add(this, "plugin");
            "string" === typeof a && (a = [a]);
            for (var c = [], d = 0; d < a.length; d += 1) {
                var e = a[d].split(".");
                2 < e.length || (2 == e.length ? "AMap" === e[0] && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d]))
            }
            if (0 === c.length) return b(), this;
            g.rb.Tg(c, b);
            return this
        },
        clearInfoWindow: function() {
            g.c.add(this, "clearInfoWindow");
            var a = this.get("overlays");
            a && 0 !== a.length && this.nm && (this.nm.D = !0, this.nm.close(), this.nm.D = !1)
        },
        remove: function(a) {
            g.c.add(this, "remove");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.D = !0;
                c.getMap && c.getMap() === this &&
                (c.close ? c.close() : c.setMap && c.setMap(null));
                c.D = !1
            }
        },
        add: function(a) {
            g.c.add(this, "add");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.D = !0;
                if (c.getMap && c.getMap() !== this)
                    if (c.open) continue;
                    else c.setMap && c.setMap(this);
                c.D = !1
            }
        },
        getAllOverlays: function(a, b) {
            g.c.add(this, "getAllOverlays");
            var c = this.get("overlays");
            if (a) {
                for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].Aa || c[f].isOfficial) || e.push(c[f]);
                return e
            }
            if (!b) {
                e = [];
                for (f = 0; f < c.length; f += 1) c[f].Aa || c[f].isOfficial || e.push(c[f]);
                c = e
            }
            d = this.get("layers");
            e = [];
            if (d)
                for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof z.o.uL && e.push(d[f]), d[f].ib && (e = e.concat(d[f].ib));
            return c.concat(e)
        },
        triggerResize: function() {
            this.map && this.map.BO()
        },
        refreshSize: function() {
            this.QF = this.r3()
        },
        r3: function() {
            return g.j.n3(this.K)
        },
        getSize: function() {
            g.c.add(this, "getSize");
            (!this.QF || 10 > this.QF.width * this.QF.height) && this.refreshSize();
            return this.QF
        },
        getContainer: function() {
            g.c.add(this,
                "getContainer");
            return this.K
        },
        panTo: function(a) {
            g.c.add(this, "panTo");
            a = g.a.Ia(a);
            this.loaded ? this.set("panTo", a) : (this.D = !0, this.setCenter(a), this.D = !1)
        },
        panBy: function(a, b, c) {
            g.c.add(this, "panBy");
            this.D = !0;
            var d = this.get("rotation") * Math.PI / 180,
                e = a * Math.cos(d) + Math.sin(d) * b;
            a = -Math.sin(d) * a + Math.cos(d) * b;
            b = this.loaded && this.map && this.map.Bd ? this.map.Bd.N8 : this.get("centerCoords");
            d = Math.pow(2, 20 - this.getZoom());
            e = b.add(new g.H(-e * d, -a * d));
            e = this.Td(e);
            !this.loaded || c ? this.setCenter(e, c) : this.set("panTo",
                e);
            this.D = !1
        },
        setFitView: function(a, b, c, d) {
            g.c.add(this, "setFitView");
            this.D = !0;
            var e = this.get("size"),
                f = e.height;
            if (!e.width || !f) return !0;
            if (a = this.J3(a)) {
                if (c = this.JI(a, 0, new g.H(40, 40), c, d)) b = b || !this.getBounds().contains(a.ti()) || g.l.ba && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
                this.D = !1;
                return a
            }
        },
        J3: function(a) {
            if (a)
                if (a instanceof z.A.Bh) a = [a];
                else {
                    if (!(a instanceof Array)) return null
                } else this.D = !0, a = this.getAllOverlays(), this.D = !1; if (a) {
                for (var b, c = 0; c <
                a.length; c += 1) {
                    var d = a[c];
                    if (d.get("visible") && !(d instanceof z.A.Re || d instanceof z.A.Jn)) {
                        d.D = !0;
                        var e = d.getBounds();
                        d.D = !1;
                        e && (b = b ? b.uya(e) : e.lb())
                    }
                }
                return b
            }
        },
        getBounds: function(a) {
            g.c.add(this, "getBounds");
            var b = this.view.od();
            return a && b.toBounds ? (b.D = !0, a = b.toBounds(), b.D = !1, a) : b
        },
        setBounds: function(a, b, c, d, e, f) {
            g.c.add(this, "setBounds");
            c = this.JI(a, b, c, e, f);
            d = d || g.l.ba && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
            this.D = !0;
            this.setZoomAndCenter(c[0], c[1], d);
            this.D = !1;
            return a
        },
        w3: function(a,
                     b, c, d, e) {
            a = this.J3(a);
            return this.JI(a, b, c, d, e)
        },
        getCoordsBoundByZoomIn3D: function(a) {
            this.FH || (this.FH = new g.XL);
            this.D = !0;
            var b = this.getRotation(),
                c = this.getPitch(),
                d = this.getSize(!0).lb();
            this.D = !1;
            a = {
                size: d,
                zoom: a,
                rotation: b,
                pitch: c,
                centerCoords: this.get("centerCoords")
            };
            this.FH.af(a, !0);
            this.FH.Sq();
            return this.FH.em()
        },
        JI: function(a, b, c, d, e) {
            b = b ? Number(b) : 0;
            this.D = !0;
            var f = this.getRotation(),
                h = this.getPitch(),
                k = this.getSize(!0).lb(),
                l = this.view.type;
            this.D = !1;
            var m = a.WQ(this);
            a = a.ZQ(this);
            this.dC ||
            (this.dC = "3D" === l ? new g.XL : new g.xF);
            this.dC.af({
                size: k,
                zoom: 3,
                rotation: f,
                pitch: h,
                centerCoords: m
            }, !0);
            var n = h = 0;
            d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
            e = e || (g.l.ba ? 17 : 18);
            c = this.get("zooms");
            d = c[0];
            var p = Infinity,
                q = Infinity;
            do {
                this.dC.af({
                    zoom: d
                }, !0);
                "3D" === l && this.dC.Sq();
                for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.dC.ce(a[u]),
                    p = Math.min(p, v.x),
                    r = Math.max(r, v.x),
                    q = Math.min(q, v.y),
                    s = Math.max(s,
                        v.y);
                p = r - p;
                q = s - q;
                if (p > k.width || q > k.height) {
                    d -= 1;
                    break
                }
                d += 1
            } while (d <= c[1]);
            d = Math.min(c[1], e, Math.max(c[0], d + b));
            d = Math.floor(d);
            b = Math.pow(2, 20 - d);
            e = f * Math.PI / 180;
            f = h * Math.cos(e) + Math.sin(e) * n;
            e = -Math.sin(e) * h + Math.cos(e) * n;
            m = m.Za(new g.H(f * b, e * b));
            m = this.Wh(m, 20);
            return [d, m]
        },
        setLayers: function(a) {
            g.c.add(this, "setLayers");
            for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
            this.set("layers", a)
        },
        getLayers: function() {
            g.c.add(this, "getLayers");
            var a = this.get("layers", null, !0),
                a = a.slice();
            if (this.D) {
                for (var b = [], c = -1, d = a.length; ++c < d;) {
                    var e = a[c];
                    if (e.pG)
                        for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) {
                            var k = e[f];
                            k instanceof z.o.Ub && -1 === g.a.indexOf(a, k) && b.push(k)
                        }
                }
                a = a.concat(b)
            } else
                for (b = a.length; - 1 < --b;) a[b].EA && a.splice(b, 1);
            return a
        },
        getDefaultLayer: function() {
            g.c.add(this, "getDefaultLayer");
            return this.get("defaultLayer", null, !0)
        },
        setDefaultLayer: function(a) {
            g.c.add(this, "setDefaultLayer");
            this.D = !0;
            a.kP = !0;
            var b = this.get("defaultLayer"),
                c = this.get("layers");
            if (b) {
                if (a === b) return;
                b.kP = !1;
                c = g.a.uo(c,
                    g.a.indexOf(c, b))
            }
            this.set("defaultLayer", a, !0);
            a.D = !0;
            a.getMap == this && c.push(a);
            a.D = !1;
            this.setLayers(c);
            this.D = !1
        },
        pixelToLngLat: function(a, b) {
            g.c.add(this, "pixelToLngLat");
            return this.Wh(a, b)
        },
        lnglatToPixel: function(a, b) {
            g.c.add(this, "lnglatToPixel");
            return this.mc(a, b)
        },
        drawPolyline: function(a) {
            g.c.add(this, "drawPolyline");
            this.set("draw", "polyline");
            this.set("drawStyle", a || {
                strokeColor: "#006600",
                mb: 0.9
            })
        },
        render: function(a) {
            g.c.add(this, "render");
            this.map && this.map.set("display", a ? 1 : 0)
        },
        setMask: function(a) {
            g.c.add(this,
                "setMask");
            this.set("mask", a);
            this.map && (this.map.CJ = !0, this.map.set("display"))
        },
        drawPolygon: function(a) {
            g.c.add(this, "drawPolygon");
            this.set("draw", "polygon");
            this.set("drawStyle", a || {
                strokeColor: "#006600",
                mb: 0.9,
                fillColor: "#FFAA00",
                be: 0.9
            })
        },
        drawCircle: function(a) {
            g.c.add(this, "drawCircle");
            this.set("draw", "circle");
            this.set("drawStyle", a || {
                strokeColor: "#006600",
                mb: 0.9,
                fillColor: "#006600",
                be: 0.9
            })
        },
        UI: function() {
            return this.view.UI()
        },
        getCameraState: function() {
            g.c.add(this, "getCameraState");
            if (this.view &&
                "3D" == this.view.type) return this.view.m3()
        },
        endDraw: function() {
            this.set("draw", null)
        },
        isGoogleTileVisible: function() {
            return this.map.isForeignMapVisible()
        },
        isForeignMapVisible: function() {
            if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map.Gfa()
        },
        ce: function(a, b, c) {
            g.c.add(this, "p20ToContainer");
            return this.view.ce(a, b, c)
        },
        tg: function(a, b, c) {
            g.c.add(this, "containerToP20");
            return this.view.tg(a, b, c)
        },
        getObject3DByContainerPos: function(a, b, c) {
            g.c.add(this, "getObject3DByContainerPos");
            if ("2D" === this.view.type || !this.map || !this.map.J) return null;
            this.D = !0;
            this.view.tg(a);
            var d = this.view.q3(a),
                e = this.map.J.pT,
                f = this.view.ad,
                h = this.get("zoom", null, !0),
                h = Math.pow(2, 20 - h);
            b = b || this.getLayers();
            this.D = !1;
            for (var k = [], l = 0; l < b.length; l += 1) {
                var m = b[l];
                m instanceof z.o.fr && (m = m.$o(e, d, f, h, a)) && k.push(m)
            }
            return c ? k : k.length ? (k.sort(function(a, b) {
                return a.Qd - b.Qd
            }), {
                index: k[0].index,
                point: k[0].SD,
                distance: k[0].Qd,
                object: k[0].object
            }) : null
        }
    });
    z.Kb.Pb({
        tJ: "lngLatToGeodeticCoord",
        ppa: "geodeticCoordToLngLat",
        JI: "getFitZoomAndCenterByBounds",
        w3: "getFitZoomAndCenterByOverlays",
        xs: "lnglatTocontainer",
        lnglatTocontainer: "lngLatToContainer",
        Lp: "containTolnglat",
        containTolnglat: "containerToLngLat",
        Ab: "lngLatToP20",
        Td: "p20ToLngLat",
        ce: "p20ToContainer",
        tg: "containerToP20",
        mc: "project",
        Wh: "unproject"
    });
    z.Kb.zb({
        isHotspotChanged: function() {
            if ("undefined" !== typeof this.cD && (this.Rma(), this.get("isHotspot"))) {
                var a = this.get("layers", null, !0);
                a && a.length && !this.cD && this.IJ && this.Sta()
            }
        },
        Sta: function() {
            if (this.ak) this.s4();
            else {
                var a = this;
                this.D = !0;
                this.plugin("AMap.HotSpot", function() {
                    if (!a.cD) {
                        if (!a.ak) {
                            var b = new g.bi;
                            new z.A.Re({
                                innerOverlay: !0
                            });
                            a.ak = b
                        }
                        a.s4()
                    }
                });
                this.D = !1
            }
        },
        Rma: function() {
            this.ak && this.Sqa()
        },
        u6: function(a) {
            a.type = "hotspotover";
            a.isIndoorPOI = !1;
            this.q("hotspotover", a)
        },
        s6: function(a) {
            a.type =
                "hotspotclick";
            a.isIndoorPOI = !1;
            this.q("hotspotclick", a)
        },
        t6: function(a) {
            a.type = "hotspotout";
            a.isIndoorPOI = !1;
            this.q("hotspotout", a)
        },
        s4: function() {
            var a = this.ak;
            this.ak.D = !0;
            this.ak.setMap(this);
            this.ak.D = !1;
            a.h("mouseover", this.u6, this);
            a.h("click", this.s6, this);
            a.h("mouseout", this.t6, this)
        },
        Sqa: function() {
            var a = this.ak;
            a.G("mouseover", this.u6, this);
            a.G("click", this.s6, this);
            a.G("mouseout", this.t6, this);
            this.ak.D = !0;
            this.ak.setMap(null);
            this.ak.D = !1;
            this.ak = null
        }
    });
    z.event = {
        X: function(a, b, c, d) {
            g.F.h(a, b, c, d);
            return new g.bF(0, a, b, c, d)
        },
        bla: function() {},
        addListener: function(a, b, c, d) {
            g.a.Oh(a.addListener) ? a.addListener(b, c, d) : (a.ke || (a.ke = g.va.ke), g.va.h.call(a, b, c, d));
            return new g.bF(1, a, b, c, d)
        },
        Mx: function(a, b, c, d) {
            g.a.Oh(a.Mx) ? a.Mx(b, c, d) : (a.ke || (a.ke = g.va.ke), g.va.h.call(a, b, c, d, !0));
            return new g.bF(1, a, b, c, d)
        },
        TH: function(a) {
            g.a.Oh(a.TH) ? a.TH() : g.va.ri.call(a)
        },
        ru: function(a, b) {
            g.a.Oh(a.ru) ? a.ru(b) : g.va.ri.call(a, b)
        },
        removeListener: function(a) {
            a instanceof
            g.bF && (g.a.Oh(a.wi.removeListener) ? a.wi.removeListener(a) : 0 === a.type ? g.F.G(a.wi, a.AQ, a.IR, a.Ve) : 1 === a.type && (a.wi.ke || (a.wi.ke = g.va.ke), g.va.G.call(a.wi, a.AQ, a.IR, a.Ve)))
        },
        O: function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            g.a.Oh(a.O) ? a.O.apply(a, c) : (a.ke || (a.ke = g.va.ke), g.va.q.apply(a, c))
        }
    };
    g.bF = g.aa.extend({
        r: function(a, b, c, d, e) {
            this.type = a;
            this.wi = b;
            this.AQ = c;
            this.IR = d;
            this.Ve = e
        }
    });
    var nc = {
            X: "addDomListener",
            bla: "addDomListenerOnce",
            addListener: "addListener",
            Mx: "addListenerOnce",
            TH: "clearInstanceListeners",
            ru: "clearListeners",
            removeListener: "removeListener",
            O: "trigger"
        },
        oc;
    for (oc in nc) nc.hasOwnProperty(oc) && (z.event[nc[oc]] = z.event[oc]);
    g.event = z.event;
    z.o.Ub = g.aa.extend({
        ka: [g.va, g.Se],
        r: function(a) {
            (new Date).getTime();
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
            g.a.Db(this, a);
            this.B.map && (a = this.B.map, delete this.B.map, this.B.map = a);
            this.af(this.B)
        },
        getContainer: function() {
            g.c.add(this, "getContainer");
            if (this.o && this.o.M) return this.o.M.pj()
        },
        getZooms: function() {
            return this.get("zooms", null, !0)
        },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            a !== this.get("opacity", null, !0) && this.set("opacity", a)
        },
        getOpacity: function() {
            return this.get("opacity",
                null, !0)
        },
        show: function() {
            g.c.add(this, "show");
            this.set("visible", !0);
            if (this.oq) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1);
            if (this.oq) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        },
        setMap: function(a) {
            g.c.add(this, "setMap");
            var b = this.get("map");
            if (a) b && a !== b && b.mk(this), this.set("map", a);
            else if (b && (b.mk(this), this.set("map", null, !0), this.oi = !1, this.Vg && this.Vg(), this.onRemove)) this.onRemove()
        },
        getMap: function() {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        },
        mapChanged: function() {
            var a = this.get("map");
            a && a.zH(this)
        },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        },
        getzIndex: function() {
            return this.get("zIndex", null, !0)
        }
    });
    z.o.ob = z.o.Ub.extend({
        B: {
            tileSize: 256,
            visible: !0,
            opacity: 1,
            zIndex: 0,
            noLimg: 1,
            zooms: [3, 20],
            getTileUrl: g.l.ba ? g.w.AE : g.w.wD,
            errorUrl: g.a.Doa,
            detectRetina: !0,
            className: "amap-layer",
            mapNumber: "",
            merge: !1,
            sort: !1,
            cacheSize: g.l.size
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
            g.c.wa(this, a);
            (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
            this.yma(a);
            var b = a.zooms;
            b && b[1] >= this.il[0] ? (b[0] < this.il[0] && (b[0] = this.il[0]), b[1] > this.il[1] && (b[1] = this.il[1])) : a.zooms = [this.il[0], this.il[1]];
            arguments.callee.la.call(this, a);
            a.lk && (this.lk = !0);
            this.qG = this.fq()
        },
        setTextIndex: function(a) {
            g.c.add(this, "setTextIndex");
            this.set("textIndex", a)
        },
        fq: function() {
            if (this.get("createTile")) return !1;
            var a = this.get("getTileUrl");
            return a && a !== g.w.wD && a !== g.w.AE ? !1 : !0
        },
        S1: function() {
            if (!this.fq()) return !1;
            var a = this.get("map");
            return a && a.xi && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
        },
        P3: function(a) {
            var b = g.w.yJ;
            g.l.ja && this.get("detectRetina") && (b = g.w.yJ.replace("scl=1", "scl=2"));
            a && (b = b.replace("ltype=3",
                "ltype=11"));
            return b
        },
        Tf: function(a) {
            var b = this.S1(),
                c = this.get("map");
            this.fq() && this.set("mapNumber", "GS(2018)1709");
            if (this.lk) return new g.o.ob(this, a, this.jr(this.P3(!0)), this.B.maxDataZoom, !0);
            if (b)
                if (this.oq = !0, g.o.di) {
                    if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                        var b = c.get("showBuildingBlock"),
                            d = new g.o.ob(this, a, this.jr(this.P3(!b)), void 0, !0);
                        b && (d.ol = new g.o.md(new z.o.ob({
                            zooms: [16, 20],
                            innerLayer: !0
                        }), a, ["building"]), d.ol.type = "楼块图层", d.ol.Ue(["visible",
                            "opacity", "zIndex"
                        ], d, !0), d.ol.jC(c.get("mapStyle") || "normal"));
                        d.type = "栅格底图";
                        return d
                    }
                    if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.C.view.type ? (c = new g.o.md(this, a, ["region", "road"]), c.type = "矢量底图", b = new z.o.ob({
                        zooms: [17, 20],
                        zIndex: 50,
                        innerLayer: !0
                    }), c.ol = new g.o.md(b, a, ["building"]), c.ol.$e = 17, c.ol.type = "楼块图层", c.ol.Fy = 1, c.ol.Ue(["visible", "merge", "sort", "opacity"], c, !0), b.W("rejectMapMask", this, !0)) : (c = new g.o.md(this,
                        a, ["region", "building", "road"]), c.type = "矢量底图"), a.Jla = c
                } else return ["vectorlayer", "overlay"];
            else return this.oq = !1, new g.o.ob(this, a, null, this.B.maxDataZoom)
        },
        getTileUrlChanged: function() {
            var a = this.get("getTileUrl");
            if (a === g.w.wD || a === g.w.AE || a === g.w.yK) this.IJ = !0;
            "string" === typeof a && (a = this.jr(a));
            this.set("tileFun", a)
        },
        yma: function(a) {
            this.il || (this.il = [this.B.zooms[0], this.B.zooms[1]]);
            var b;
            a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
            g.l.ba && g.l.ja && this.B.detectRetina &&
            !b && (this.il[1] -= 1)
        },
        getTiles: function() {
            g.c.add(this, "getTiles");
            var a = this.get("tiles", null, !0);
            if (a && a.length) a = a[0];
            else return [];
            for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
            return b
        },
        reload: function() {
            g.c.add(this, "reload");
            this.set("reload", 1)
        },
        Os: function() {
            this.D = !0;
            var a = this.get("map", null, !0);
            this.setMap(null);
            this.oi = !1;
            this.setMap(a);
            this.D = !1
        },
        setTileUrl: function(a) {
            g.c.add(this, "setTileUrl");
            this.S1() ? (this.set("getTileUrl", a), this.Os()) :
                this.set("getTileUrl", a)
        },
        jr: function(a) {
            var b = this,
                c, d, e;
            return function(f, h, k) {
                f = (f + Math.pow(2, k)) % Math.pow(2, k);
                if ("number" !== typeof(f + h + k)) return null;
                var l = b.get("map"),
                    m = "zh_cn";
                l && (m = l.get("lang") || "zh_cn");
                k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                if (!c) {
                    if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
                    c = !0
                }
                e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
                return k
            }
        },
        getTileUrl: function(a, b, c) {
            g.c.add(this, "getTileUrl");
            return this.get("tileFun", null, !0)(a, b, c)
        },
        getZooms: function(a) {
            a || g.c.add(this, "getZooms");
            return this.get("zooms", null, !0)
        }
    });
    z.o.ob.eW = z.o.ob.extend({
        B: {
            getTileUrl: g.w.WT,
            zooms: [3, 20],
            zIndex: 2,
            maxDataZoom: 18,
            detectRetina: !1,
            mapNumber: "GS(2019)3913",
            className: "amap-layer amap-satellite",
            cacheSize: g.l.size
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.Satellite";
            g.c.wa(this, a);
            this.il = [3, 20];
            arguments.callee.la.apply(this, arguments)
        }
    });
    z.o.ob.bW = z.o.ob.extend({
        B: {
            getTileUrl: g.w.yK,
            zooms: [3, 20],
            zIndex: 3,
            type: "overlayer",
            maxDataZoom: 18,
            className: "amap-layer amap-roadnet",
            cacheSize: g.l.size
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.RoadNet";
            g.c.wa(this, a);
            this.il = [3, 20];
            arguments.callee.la.apply(this, arguments)
        },
        Tf: function(a) {
            if (this.get("map").xi) {
                this.oq = !0;
                var b = g.w.zK;
                g.l.ja && this.get("detectRetina") && (b = g.w.zK.replace("scl=1", "scl=2"));
                a = new g.o.ob(this, a, this.jr(b), this.B.maxDataZoom)
            } else this.oq = !1, a = new g.o.ob(this,
                a);
            return a
        }
    });
    z.o.ob.mW = z.o.ob.extend({
        B: {
            getTileUrl: function(a, b, c) {
                return g.w.Fc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
            },
            zooms: [6, 20],
            zIndex: 4,
            type: "overlayer",
            autoRefresh: !1,
            interval: 180,
            maxDataZoom: 17,
            alwaysRender: !g.l.G2,
            className: "amap-layer amap-traffic",
            cacheSize: g.l.size
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.Traffic";
            g.c.wa(this, a);
            this.il = [6, 20];
            arguments.callee.la.apply(this, arguments);
            this.D = !0;
            this.startRefresh();
            this.D = !1
        },
        stopRefresh: function() {
            g.c.add(this,
                "stopRefresh");
            this.mK && (clearInterval(this.mK), this.mK = null)
        },
        startRefresh: function() {
            g.c.add(this, "startRefresh");
            if (this.get("autoRefresh") && !this.mK) {
                var a = this;
                this.mK = setInterval(function() {
                    a.D = !0;
                    a.reload();
                    a.D = !1;
                    a.q("refresh")
                }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
            }
        },
        reload: function() {
            g.c.add(this, "reload");
            g.a.Sc(function() {
                this.set("reload")
            }, this)
        },
        Vg: function() {
            this.D = !0;
            this.stopRefresh();
            this.get("map") && this.get("map").G("zoomstart", this.reload, this);
            this.D = !1
        },
        Tf: function(a) {
            var b =
                    this.get("map"),
                b = a.C;
            b.h("zoomstart", this.reload, this);
            return "d" !== b.get("baseRender") ? g.o.Lw ? a = new g.o.Lw(this, a) : ["vt"] : a = new g.o.ob(this, a, null, this.B.maxDataZoom)
        }
    });
    z.o.ob.fA = z.o.ob.extend({
        B: {
            zooms: [3, 20],
            zIndex: 12,
            detectRetina: !1,
            className: "amap-layer amap-flexible",
            cacheSize: g.l.size
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
            g.c.wa(this, a);
            this.Hra = !0;
            arguments.callee.la.call(this, a)
        },
        setCreateTile: function(a) {
            g.c.add(this, "setCreateTile");
            "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
        },
        getCreateTile: function() {
            return this.get("createTile", null, !0)
        }
    });
    z.o.ob.Raa = z.o.ob.fA.extend({
        B: {
            zooms: [3, 20],
            zIndex: 12,
            tileSize: 512,
            detectRetina: !1,
            className: "amap-layer amap-wms",
            cacheSize: g.l.size,
            url: "",
            params: ""
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.WMS";
            g.c.wa(this, a);
            arguments.callee.la.call(this, a);
            this.jw();
            var b = this,
                c = this.get("tileSize");
            this.set("createTile", function(a, e, f, h, k) {
                var l = Math.pow(2, 20 - f) * c;
                f = new g.H(l * a, l * (e + 1));
                a = new g.H(l * (a + 1), l * e);
                e = g.xJ.C6(f);
                a = g.xJ.C6(a);
                var m = document.createElement("img");
                "3D" === b.Cg && (m.crossOrigin = "anonymous");
                g.F.h(m, "load", function() {
                    h(m)
                });
                g.F.h(m, "error", function() {
                    k(m)
                });
                m.src = this.url + "&BBOX=" + e + "," + a
            })
        },
        jw: function() {
            var a = this.get("url", null, !0),
                b = this.get("params", null, !0),
                c = this.get("tileSize");
            b.WIDTH = c;
            b.HEIGHT = c;
            b.CRS = b.CRS || "EPSG:3857";
            b.REQUEST = "GetMap";
            b.SERVICE = "WMS";
            b.FORMAT = b.FORMAT || "image/png";
            b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
            delete b.BBOX;
            this.url = a + "?" + g.a.join(b, "&");
            this.D = !0;
            this.reload();
            this.D = !1
        },
        setUrl: function(a) {
            g.c.add(this, "setUrl");
            this.set("url",
                a, !0);
            this.jw()
        },
        getUrl: function() {
            g.c.add(this, "getUrl");
            return this.get("url", null, !0)
        },
        setParams: function(a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0), a || {});
            this.jw()
        },
        getParams: function() {
            g.c.add(this, "getParams");
            return this.get("params", null, !0)
        }
    });
    z.o.ob.Saa = z.o.ob.fA.extend({
        B: {
            zooms: [3, 20],
            tileSize: 256,
            zIndex: 12,
            detectRetina: !1,
            className: "amap-layer amap-wmts",
            cacheSize: g.l.size
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.WMTS";
            g.c.wa(this, a);
            arguments.callee.la.call(this, a);
            this.jw();
            var b = this;
            this.get("tileSize");
            this.set("createTile", function(a, d, e, f, h) {
                var k = document.createElement("img");
                "3D" === b.Cg && (k.crossOrigin = "anonymous");
                g.F.h(k, "load", function() {
                    f(k)
                });
                g.F.h(k, "error", function() {
                    h(k)
                });
                k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
                    d + "&TileCol=" + a
            })
        },
        jw: function() {
            var a = this.get("url", null, !0),
                b = this.get("params", null, !0);
            b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
            b.Request = "GetTile";
            b.Service = "WMTS";
            b.Format = b.Format || "image/png";
            this.url = a + "?" + g.a.join(b, "&");
            this.D = !0;
            this.reload();
            this.D = !1
        },
        setUrl: function(a) {
            g.c.add(this, "setUrl");
            this.set("url", a, !0);
            this.jw()
        },
        getUrl: function() {
            g.c.add(this, "getUrl");
            return this.get("url", null, !0)
        },
        setParams: function(a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0),
                a || {});
            this.jw()
        },
        getParams: function() {
            g.c.add(this, "getParams");
            return this.get("params", null, !0)
        }
    });
    z.o.ob.eF = z.o.ob.fA.extend({
        B: {
            detectRetina: !0,
            zooms: [10, 18],
            zIndex: 2
        },
        r: function(a) {
            arguments.callee.la.apply(this, arguments);
            var b = this;
            this.set("createTile", function(a, d, e, f, h) {
                var k = b.Je.map.map;
                k.Ch.Gz(a, d, e, function(l) {
                    if (l) h();
                    else {
                        var m = document.createElement("img");
                        "3D" === b.Cg && (m.crossOrigin = "anonymous");
                        g.F.h(m, "load", function() {
                            f(m)
                        });
                        g.F.h(m, "error", function() {
                            h(m)
                        });
                        m.src = function(a, c, d) {
                            var e = "zh_cn";
                            b && b.get && k && (e = k.get("lang") || "zh_cn");
                            return g.w.Fc + "://grid.amap.com/grid/" + d + "/" +
                                a + "/" + c + "?src=jsapi&key=" + g.w.key + "&lang=" + e + "&dpiType=" + (g.l.Mc ? "wprd" : "webrd")
                        }(a, d, e)
                    }
                })
            })
        }
    });
    z.o.bd = z.o.Ub.extend({
        B: {
            visible: !0,
            zooms: [3, 25],
            type: "overlay",
            zIndex: 5,
            alwaysRender: !0
        },
        r: function(a) {
            this.M4 = !0;
            arguments.callee.la.apply(this, arguments)
        },
        Tf: function(a) {
            return new g.o.bd(this, a)
        }
    });
    z.o.h$ = z.o.Ub.extend({
        B: {
            zooms: [14, 20],
            zIndex: 8,
            visible: !0,
            merge: !0,
            sort: !1
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.Buildings";
            g.c.wa(this, a);
            a = a || {};
            a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
            arguments.callee.la.apply(this, arguments)
        },
        fq: function() {
            return !1
        },
        Tf: function(a) {
            if (g.l.qu) return a = new g.o.Oaa(this, a), a.Fy = this.get("heightFactor") || 1, a
        },
        setStyle: function(a) {
            this.set("customStyle", a);
            g.c.add(this, "setStyle")
        }
    });
    z.o.nL = z.o.Ub.extend({
        B: {
            visible: !0,
            zooms: [3, g.l.ba ? 20 : 18],
            opacity: 1,
            type: "overlay",
            zIndex: 6
        },
        r: function(a) {
            arguments.callee.la.apply(this, arguments)
        },
        Tf: function(a) {
            return g.o.iA ? new g.o.iA(this, a) : ["imagelayer"]
        },
        getMap: function() {
            g.c.add(this, "getMap");
            return this.Je.map
        },
        show: function() {
            g.c.add(this, "show");
            this.set("visible", !0);
            this.q("options")
        },
        getOpacity: function() {
            g.c.add(this, "getOpacity");
            return this.get("opacity", null, !0)
        },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            this.set("opacity",
                a)
        },
        getBounds: function() {
            g.c.add(this, "getBounds");
            return this.get("bounds", null, !0).lb()
        },
        setBounds: function(a) {
            g.c.add(this, "setBounds");
            this.q("bounds", a);
            this.D = !0;
            this.setOptions({
                bounds: a
            });
            this.D = !1
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1);
            this.q("options")
        },
        setOptions: function(a) {
            g.c.add(this, "setOptions");
            this.af(a);
            this.q("options")
        },
        getOptions: function() {
            g.c.add(this, "getOptions");
            var a = {},
                b;
            for (b in this.B) this.B.hasOwnProperty(b) && (a[b] = this.get(b));
            return a
        },
        getElement: function() {
            return this.o.M ?
                this.o.M.ac : this.o.hg ? this.o.hg.ac : null
        }
    });
    z.o.iA = z.o.nL.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.ImageLayer";
            g.c.wa(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.la.apply(this, arguments)
        },
        getImageUrl: function() {
            g.c.add(this, "getImageUrl");
            return this.get("__source__")
        },
        setImageUrl: function(a) {
            g.c.add(this, "setImageUrl");
            return this.set("__source__", a)
        }
    });
    z.o.Qaa = z.o.nL.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.VideoLayer";
            g.c.wa(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.la.apply(this, arguments)
        },
        getVideoUrl: function() {
            g.c.add(this, "getVideoUrl");
            return this.get("__source__")
        },
        setVideoUrl: function(a) {
            g.c.add(this, "setVideoUrl");
            return this.set("__source__", a)
        }
    });
    z.o.j$ = z.o.nL.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.CanvasLayer";
            g.c.wa(this, a);
            a && a.canvas && (a.__source__ = a.canvas);
            arguments.callee.la.apply(this, arguments)
        },
        getCanvas: function() {
            g.c.add(this, "getCanvas");
            return this.get("__source__")
        },
        setCanvas: function(a) {
            g.c.add(this, "setCanvas");
            return this.set("__source__", a)
        },
        reFresh: function() {
            this.o && (this.o.rE = !0, this.o.set("display"))
        }
    });
    z.o.caa = z.o.Ub.extend({
        B: {
            visible: !0,
            zooms: [3, 20],
            type: "overlay",
            zIndex: 5,
            cursor: "pointer",
            alwaysRender: !0,
            stable: !0,
            bubble: !0,
            rejectMapMask: !0,
            className: "amap-mass"
        },
        r: function(a, b) {
            this.CLASS_NAME = "AMap.MassMarks";
            g.c.wa(this, b);
            g.l.$k && (this.sj = !0, b.size && (b.size = g.a.vq(b.size)), this.D = !0, this.setData(a), g.a.Db(this, b), b.style ? (this.af(this.B, !0), this.setStyle(b.style)) : this.setStyle(this.B), this.D = !1)
        },
        clear: function() {
            g.c.add(this, "clear");
            this.set("dataSources", "")
        },
        getStyle: function() {
            g.c.add(this,
                "getStyle");
            return this.xm
        },
        setStyle: function(a) {
            g.c.add(this, "setStyle");
            if (a instanceof Array) {
                for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.vq(a[b].size), a.tf = Math.max(a.tf || 0, a[b].size.width + a[b].anchor.x), a.fg = Math.max(a.tf || 0, a[b].size.height + a[b].anchor.y);
                this.xm = a
            } else a.size && (a.size = g.a.vq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.af(a, !0), this.xm = {
                anchor: this.get("anchor"),
                url: this.get("url"),
                size: this.get("size"),
                rotation_: this.get("rotation_")
            },
                this.xm.tf = this.xm.size.width + this.xm.anchor.x, this.xm.fg = this.xm.size.height + this.xm.anchor.y;
            this.q("style")
        },
        setData: function(a) {
            g.c.add(this, "setData");
            this.set("dataSources", a)
        },
        getData: function() {
            g.c.add(this, "getData");
            return this.get("datas") || this.get("dataSources")
        },
        setMap: function(a) {
            g.c.add(this, "setMap");
            g.l.$k && (a ? (this.get("map") && this.get("map").mk(this), this.set("map", a)) : this.get("map") && (this.get("map").mk(this), this.set("map", null, !0), this.oi = !1, this.Vg && this.Vg()))
        },
        Tf: function(a) {
            return g.rb.pD(["cvector"]) ?
                (a = new g.o.bd(this, a), this.W("datas", a), a) : ["cvector"]
        }
    });
    z.o.n$ = z.o.Ub.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.CompositeLayer";
            this.pG = !0;
            g.a.Db(this, a);
            this.Pm = [];
            this.af(this.B)
        },
        opacityChanged: function() {
            for (var a = this.get("opacity", null, !0), b = -1, c = this.Pm.length; ++b < c;) this.Pm[b].setOpacity(a)
        },
        addLayer: function(a) {
            if (!this.has(a)) {
                a.EA = this;
                var b = this.get("map");
                a.setMap(b);
                this.Pm.push(a)
            }
            return this
        },
        removeLayer: function(a) {
            this.has(a) && a.setMap(null);
            return this
        },
        eka: function(a) {
            if (this.has(a)) {
                delete a.EA;
                var b = this.Pm;
                a = g.a.indexOf(b, a);
                g.a.uo(b,
                    a)
            }
        },
        has: function(a) {
            return -1 !== g.a.indexOf(this.Pm, a)
        },
        show: function() {
            for (var a = -1, b = this.Pm.length; ++a < b;) this.Pm[a].show()
        },
        hide: function() {
            for (var a = -1, b = this.Pm.length; ++a < b;) this.Pm[a].hide()
        },
        setzIndex: function(a, b) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a);
            var c = this.Pm;
            if ("undefined" === typeof b)
                for (var d = -1, e = c.length; ++d < e;) {
                    var f = c[d];
                    f.setzIndex(a)
                } else(f = c[b]) && f.setzIndex(a)
        },
        Tf: function(a) {
            this.e = a
        },
        getLayers: function() {
            return this.Pm
        }
    });
    z.o.ar = z.o.Ub.extend({
        R$: {
            visible: !0,
            zIndex: 20,
            opacity: 1,
            zooms: [3, 20],
            collision: !0,
            animation: !0,
            alwaysRender: !0
        },
        B: {
            zooms: [3, 20]
        },
        $r: function() {
            this.f && this.f.vz(this.Ti)
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer";
            a = a || {};
            g.c.wa(this, a);
            arguments.callee.la.apply(this, arguments);
            this.B = this.R$;
            g.a.Db(this, a);
            this.af(this.B);
            this.Ti = [];
            this.ib = [];
            this.yu = [];
            this.CQ = {
                click: 0,
                mouseover: 0,
                mousemove: 0,
                mouseout: 0,
                mousedown: 0,
                mouseup: 0,
                touchstart: 0,
                touchend: 0
            }
        },
        UY: function() {
            var a =
                this;
            return g.a.tD(function(b) {
                var c = a.f;
                c ? c.vz(b) : a.aD = b
            }, 100)
        },
        vz: function(a) {
            this.q0(a)
        },
        xo: function(a, b) {
            for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++)
                if (a[d].data.id === c) return d;
            return -1
        },
        removeItem: function() {},
        yf: function(a) {
            return "undefined" === typeof a
        },
        mZ: function(a) {
            return "string" === typeof a
        },
        Jfa: function(a) {
            return "number" === typeof a
        },
        hG: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            return this.yf(a.width) || this.yf(a.height) ? this.mZ(a) ? a.split(",") : this.Jfa(a) ? [a, a] : a : [a.width, a.height]
        },
        vea: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            return this.yf(a.Q) || this.yf(a.P) ? this.mZ(a) ? a.split(",") : a : [a.Q, a.P]
        },
        Bga: function(a) {
            "string" === typeof a && (a = a.trim(), a = a.split(" "));
            if ("[object Array]" === Object.prototype.toString.apply(a)) {
                for (var b = a.length, c = 0; c < b; c++) {
                    var d = parseInt(a[c]);
                    a[c] = isNaN(d) ? 3 : d
                }
                switch (b) {
                    case 0:
                        a = [3, 3, 3, 3];
                        break;
                    case 1:
                        a = [a[0], a[0], a[0], a[0]];
                        break;
                    case 2:
                        a = [a[0], a[1], a[0], a[1]];
                        break;
                    case 3:
                        a = [a[0], a[1],
                            a[2], a[1]
                        ]
                }
                return a
            }
            return [3, 3, 3, 3]
        },
        add: function(a) {
            g.c.add(this, "add");
            if (a) {
                a = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c) {
                        c.f = this;
                        var d = c.B,
                            e = {
                                data: {
                                    id: c._LabelMarkerId || void 0,
                                    name: d.title || "",
                                    position: this.vea(d.position) || void 0,
                                    rank: d.rank || void 0
                                },
                                opts: {
                                    zooms: d.zooms || void 0,
                                    opacity: "number" === typeof d.opacity ? d.opacity : 1,
                                    zIndex: "number" === typeof d.zIndex ? d.zIndex : 1,
                                    height: "number" === typeof d.height ? d.height : 0,
                                    icon: {},
                                    text: {}
                                }
                            };
                        if (d.icon) {
                            var f = d.icon,
                                h = f.size,
                                k = f.clipSize;
                            h && (f.size = this.hG(h));
                            k && (f.clipSize = this.hG(k));
                            e.opts.icon = d.icon
                        }
                        d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.Bga(d)));
                        this.Ti.push(e);
                        this.ib.push(c)
                    }
                }
                this.$r();
                b = a.length;
                for (c = 0; c < b; c++)(e = a[c]) && e.Z7 && e.Z7()
            }
        },
        remove: function(a) {
            g.c.add(this, "remove");
            this.Ti && (a = this.xo(this.Ti, a), -1 !== a && (this.Ti.splice(a, 1), this.ib.splice(a, 1), this.$r()))
        },
        clear: function() {
            g.c.add(this,
                "clear");
            this.f && this.f.clear();
            this.Ti = [];
            this.ib = []
        },
        Tf: function(a) {
            this.get("map") || this.set("map", a.C, !0);
            if (g.o.ar) {
                this.f = new g.o.ar(this, a);
                this.Ti && this.$r();
                a = this.yu;
                if (a.length) {
                    for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]);
                    this.yu = []
                }
                return this.f
            }
            return ["AMap.LabelsLayer"]
        },
        setPosition: function() {},
        positionChanged: function() {},
        on: function(a) {
            g.c.add(this, "on");
            this.f ? (this.zh(arguments), this.f.t1(a)) : this.yu.push(arguments)
        },
        off: function(a) {
            g.c.add(this, "off");
            this.f && this.f.x9(a)
        }
    });
    z.o.uL = z.o.iA.extend({
        r: function(a, b, c) {
            this.CLASS_NAME = "AMap.GroundImage";
            g.c.wa(this, c);
            c = c || {};
            this.Sg = !0;
            var d = parseFloat(c.opacity);
            isNaN(d) && (d = 1);
            arguments.callee.la.call(this, {
                url: a,
                bounds: b,
                clickable: c.clickable,
                opacity: d,
                map: c.map,
                zooms: c.zooms || [3, 20]
            });
            this.CLASS_NAME = "AMap.GroundImage"
        },
        Ita: function(a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a))
        },
        Jta: function(a) {
            this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a))
        },
        setMap: function(a) {
            g.c.add(this,
                "setMap");
            a ? (this.get("map") && (this.get("map").mk(this), this.c2 && z.event.removeListener(this.c2), this.v2 && z.event.removeListener(this.v2)), this.set("map", a)) : this.get("map") && (this.get("map").mk(this), this.Je.map = null)
        },
        mapChanged: function() {
            this.get("map") && (this.get("map").zH(this), this.get("clickable") && (this.c2 = z.event.addListener(this.get("map"), "click", this.Ita, this), this.v2 = z.event.addListener(this.get("map"), "dblclick", this.Jta, this)))
        }
    });
    z.A.Bh = g.aa.extend({
        ka: [g.va, g.Se, {
            Ia: g.a.Ia
        }],
        B: {
            extData: {},
            bubble: !1,
            clickable: !0,
            draggable: !1
        },
        r: function() {
            this.xG = g.a.wb(this)
        },
        wDa: function() {
            return this.xG
        },
        $Ba: function() {
            this.D = !0;
            this.get("map", null, !0) && this.setMap(this.get("map"));
            this.D = !1
        },
        mapChanged: function() {
            this.get("map", null, !0) && this.get("map", null, !0).aC(this)
        },
        KQ: function(a) {
            var b = 0;
            a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
            return b
        },
        setHeight: function(a) {
            this.height = a = a || 0;
            a = this.KQ(a);
            this.set("altitude",
                a)
        },
        getHeight: function() {
            return this.height
        },
        show: function() {
            g.c.add(this, "show");
            this.set("visible", !0)
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1)
        },
        setMap: function(a) {
            g.c.add(this, "setMap");
            a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).oz(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).oz(this), this.set("map", null, !0)))
        },
        getMap: function() {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        },
        setExtData: function(a) {
            g.c.add(this,
                "setExtData");
            this.set("extData", a)
        },
        positionChanged: function() {},
        getExtData: function() {
            g.c.add(this, "getExtData");
            return this.get("extData", null, !0)
        }
    });
    z.A.bd = z.A.Bh.extend({
        r: function(a) {
            z.A.bd.Xc.r.apply(this, arguments)
        },
        show: function() {
            g.c.add(this, "show");
            this.set("visible", !0);
            this.q("show", {
                type: "show",
                target: this
            })
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1);
            this.q("hide", {
                type: "hide",
                target: this
            })
        },
        getVisible: function() {
            g.c.add(this, "getVisible");
            return this.get("visible", null, !0)
        },
        getOptions: function() {
            g.c.add(this, "getOptions");
            var a = {},
                b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
                c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
                d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"],
                e = ["center", "radius", "texture"],
                f = ["bounds", "texture"],
                h = [];
            this instanceof z.A.Yb && (h = b.concat(c));
            this instanceof z.A.zc && (h = b.concat(d));
            this instanceof z.A.ah && (h = b.concat(e).concat(d));
            this instanceof z.A.rt && (h = b.concat(e).concat(d));
            this instanceof z.A.xt && (h = b.concat(d).concat(f));
            for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null, !0);
            return a
        },
        setOptions: function(a) {
            g.c.add(this, "setOptions");
            a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ia(a.path));
            a.center && (a.center = this.Ia(a.center));
            var b;
            a.hasOwnProperty("map") && (b = a.map, delete a.map);
            this.af(a);
            void 0 !== b && (this.setMap(b), a.map = b);
            this.q("options");
            this.q("change", {
                type: "change",
                target: this
            })
        },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        },
        getzIndex: function() {
            g.c.add(this, "getzIndex");
            return this.get("zIndex", null, !0)
        },
        setDraggable: function(a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        }
    });
    z.A.qF = z.A.bd.extend({
        B: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: "miter",
            lineCap: "butt",
            path: []
        },
        r: function(a) {
            z.A.qF.Xc.r.apply(this, arguments)
        },
        setPath: function(a, b) {
            g.c.add(this, "setPath");
            a && a.length || (a = []);
            a = this.Ia(a);
            this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0], !0);
            this.set("path", a);
            this.q("change", {
                type: "change",
                target: this
            });
            b || this.q("setPath")
        },
        getPath: function() {
            g.c.add(this, "getPath");
            return this.i2()
        },
        reset: function() {
            var a = this.i2();
            this.A.set("deltaPos", [0, 0], !0);
            this.set("path", a)
        },
        i2: function() {
            var a = this.get("path", null, !0);
            this.A && this.A.get("deltaPos") && (a = this.A.VA(a, this.A.get("deltaPos")));
            return a
        },
        od: function() {
            var a = this.get("path");
            if (!a || !a.length) return null;
            a[0] instanceof g.U && (a = [a]);
            for (var b = new g.re(180, 90, -180, -90), c = 0; c < a.length; c += 1)
                for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1) b.extend(d[e]);
            return b
        }
    });
    z.A.qF.Pb({
        od: "getBounds"
    });
    z.A.ci = g.aa.extend({
        ka: [g.va, g.Se],
        B: {
            size: new g.wd(36, 36),
            imageOffset: new g.H(0, 0),
            image: g.w.yb + "/theme/v1.3/markers/0.png",
            imageSize: null
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.Icon";
            g.c.wa(this, a);
            a = a || {};
            a.size && (a.size = g.a.vq(a.size));
            a.imageSize && (a.imageSize = g.a.vq(a.imageSize));
            g.a.Db(this, a);
            this.af(this.B)
        },
        setImageSize: function(a) {
            g.c.add(this, "setImageSize");
            a = g.a.vq(a);
            this.set("imageSize", a)
        },
        getImageSize: function() {
            g.c.add(this, "getImageSize");
            return this.get("imageSize", null, !0)
        }
    });
    z.A.aaa = g.aa.extend({
        ka: [g.va, g.Se],
        B: {
            coords: [],
            type: ""
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.MarkerShape";
            g.c.wa(this, a);
            g.a.Db(this, a);
            this.af(this.B)
        }
    });
    z.A.sb = z.A.Bh.extend({
        B: {
            cursor: "pointer",
            visible: !0,
            zIndex: 100,
            angle: 0,
            textAlign: "left",
            verticalAlign: "top",
            autoRotation: !1,
            opacity: 1,
            offset: new g.H(-9, -31),
            size: new g.H(19, 33),
            raiseOnDrag: !1,
            topWhenClick: !1,
            topWhenMouseOver: !1,
            animation: "AMAP_ANIMATION_NONE"
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
            g.c.wa(this, a);
            a = a || {};
            this.Sg = !0;
            this.qga = g.a.wb(this);
            this.D = !0;
            a.position && (a.position = this.Ia(a.position));
            a.height && this.setHeight(a.height);
            g.a.Db(this, a);
            g.l.ye && (this.B.angle =
                0);
            this.af(this.B, !0);
            this.mapChanged();
            this.D = !1
        },
        getAnchor: function() {
            g.c.add(this, "getAnchor");
            return this.get("anchor", null, !0)
        },
        setAnchor: function(a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a)
        },
        getId: function() {
            g.c.add(this, "getId");
            return this.qga
        },
        setRaiseOnDrag: function(a) {
            g.c.add(this, "setRaiseOnDrag");
            this.set("raiseOnDrag", a)
        },
        setPosition: function(a, b) {
            g.c.add(this, "setPosition");
            a = this.Ia(a);
            void 0 !== b && (this.D = !0, this.setHeight(b), this.D = !1);
            this.set("position", a)
        },
        getPosition: function() {
            g.c.add(this,
                "getPosition");
            return this.get("position", null, !0)
        },
        getBounds: function() {
            var a = this.get("position", null, !0).lb();
            return new g.re(a, a.lb())
        },
        mapChanged: function() {
            this.sl("zoom");
            var a = this.get("map", null, !0);
            a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.aC(this), this.W("zoom", a))
        },
        getZooms: function() {
            g.c.add(this, "getZooms");
            return this.get("zooms", null, !0)
        },
        zoomChanged: function() {
            var a = this.get("zooms", null, !0);
            if (a) {
                var b = this.get("zoom");
                b < a[0] || b > a[1] ? this.set("outOfZooms", !0) : this.set("outOfZooms", !1);
                this.A && this.A.eua()
            }
        },
        setIcon: function(a) {
            g.c.add(this, "setIcon");
            this.set("icon", a)
        },
        getIcon: function() {
            g.c.add(this, "getIcon");
            return this.get("icon", null, !0)
        },
        setContent: function(a) {
            g.c.add(this, "setContent");
            this.set("content", a)
        },
        getContent: function() {
            g.c.add(this, "getContent");
            return this.get("content", null, !0)
        },
        getContentDom: function() {
            return this.get("contentDom", null, !0)
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1)
        },
        show: function() {
            g.c.add(this,
                "show");
            this.set("visible", !0)
        },
        setCursor: function(a) {
            g.c.add(this, "setCursor");
            this.set("cursor", a)
        },
        setRotation: function(a) {
            g.c.add(this, "setRotation");
            g.l.ye || this.set("angle", a)
        },
        setAngle: function(a) {
            g.c.add(this, "setAngle");
            g.l.ye || "number" !== typeof a || this.set("angle", a)
        },
        getAngle: function() {
            g.c.add(this, "getAngle");
            return this.get("angle", null, !0)
        },
        setOffset: function(a) {
            g.c.add(this, "setOffset");
            this.set("offset", a)
        },
        getOffset: function() {
            g.c.add(this, "getOffset");
            return this.get("offset", null, !0)
        },
        setTextAlign: function(a) {
            g.c.add(this, "setTextAlign");
            this.set("textAlign", a)
        },
        getTextAlign: function() {
            g.c.add(this, "getTextAlign");
            return this.get("textAlign", null, !0)
        },
        setVerticalAlign: function(a) {
            g.c.add(this, "setVerticalAlign");
            this.set("verticalAlign", a)
        },
        getVerticalAlign: function() {
            g.c.add(this, "getVerticalAlign");
            return this.get("verticalAlign", null, !0)
        },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        },
        getzIndex: function() {
            g.c.add(this, "getzIndex");
            return this.get("zIndex",
                null, !0)
        },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            this.set("opacity", a)
        },
        setDraggable: function(a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        },
        getDraggable: function() {
            g.c.add(this, "getDraggable");
            return this.get("draggable", null, !0)
        },
        moveTo: function(a, b, c) {
            g.c.add(this, "moveTo");
            a = this.Ia(a);
            this.set("move", {
                $f: a,
                speed: b,
                ub: c
            })
        },
        moveAlong: function(a, b, c, d) {
            g.c.add(this, "moveAlong");
            if (!(2 > a.length)) {
                a = this.Ia(a);
                for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1) f.cb(a[h]) || e.push(a[h]);
                this.set("move", {
                    $f: e,
                    speed: b,
                    ub: c,
                    Fma: d
                })
            }
        },
        stopMove: function() {
            g.c.add(this, "stopMove");
            this.set("move", !1)
        },
        pauseMove: function() {
            g.c.add(this, "pauseMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "pause";
            this.set("move", a);
            return !0
        },
        resumeMove: function() {
            g.c.add(this, "resumeMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "resume";
            this.set("move", a);
            return !0
        },
        setShadow: function(a) {
            g.c.add(this, "setShadow");
            this.set("shadow", a)
        },
        getShadow: function() {
            g.c.add(this, "getShadow");
            return this.get("shadow",
                null, !0)
        },
        setClickable: function(a) {
            g.c.add(this, "setClickable");
            a !== this.get("clickable", null, !0) && this.set("clickable", a)
        },
        getClickable: function() {
            g.c.add(this, "getClickable");
            return this.get("clickable", null, !0)
        },
        setTitle: function(a, b) {
            g.c.add(this, "setTitle");
            "string" === typeof a && this.set("title", a, b)
        },
        getTitle: function() {
            g.c.add(this, "getTitle");
            return this.get("title", null, !0)
        },
        setLabel: function(a) {
            g.c.add(this, "setLabel");
            a && !g.a.rh(a) && (a = g.extend({}, this.get("label"), a));
            this.set("label",
                a)
        },
        getLabel: function() {
            g.c.add(this, "getLabel");
            return this.get("label", null, !0)
        },
        setTop: function(a, b) {
            g.c.add(this, "setTop");
            this.set("isTop", a, b)
        },
        getTop: function() {
            g.c.add(this, "getTop");
            return this.get("isTop", null, !0)
        },
        setShape: function(a, b) {
            g.c.add(this, "setShape");
            this.set("shape", a, b)
        },
        getShape: function() {
            g.c.add(this, "getShape");
            return this.get("shape", null, !0)
        },
        setAnimation: function(a, b) {
            g.c.add(this, "setAnimation");
            this.set("animation", a, b)
        },
        getAnimation: function() {
            g.c.add(this, "getAnimation");
            return this.get("animation", null, !0)
        },
        getMap: function() {
            g.c.add(this, "getMap");
            return this.get("map", null, !0)
        },
        markOnAMAP: function(a) {
            g.c.add(this, "markOnAMAP");
            a = a || {};
            var b = {};
            b.name = a.name || this.get("name", null, !0) || "";
            a = this.Ia(a.position) || this.get("position", null, !0);
            b.y = a.P;
            b.x = a.Q;
            g.$h.at(g.$h.iqa(b))
        }
    });
    z.A.U$ = z.A.Bh.extend({
        B: {
            position: null,
            zooms: [3, 20],
            opacity: 1,
            visible: !0
        },
        r: function(a) {
            a = a || {};
            this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker";
            g.c.wa(this, a);
            arguments.callee.la.apply(this, arguments);
            this._LabelMarkerId = g.a.wb(this);
            g.a.Db(this, a);
            this.af(this.B, !0);
            this.DQ = [];
            this.fC = {}
        },
        xo: function(a, b) {
            for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++)
                if (a[d].data.id === c) return d;
            return -1
        },
        Z7: function() {
            var a = this.DQ || [];
            if (a.length) {
                for (var b = 0, c = a.length; b < c; b++) this.on.apply(this,
                    a[b]);
                this.DQ = []
            }
        },
        getBounds: function() {
            g.c.add(this, "getBounds");
            var a = this.get("position", null, !0);
            try {
                return "string" === typeof a ? a = new g.U(a.split(",")) : "[object Array]" == Object.prototype.toString.apply(a) && (a = new g.U(a[0], a[1])), new g.re(a, a.lb())
            } catch (b) {
                return null
            }
        },
        getPosition: function() {
            g.c.add(this, "getPosition");
            var a = this.f.Ti,
                b = this.xo(a, this);
            return -1 !== b ? a[b].data.position : null
        },
        setPosition: function(a) {
            g.c.add(this, "setPosition");
            var b = this.f.Ti,
                c = this.xo(b, this); - 1 !== c && (b[c].data.position =
                a);
            this.f.$r()
        },
        getZooms: function() {
            g.c.add(this, "getZooms");
            var a = this.f.Ti,
                b = this.xo(a, this);
            return -1 !== b ? a[b].opts.zooms : null
        },
        setZooms: function(a) {
            g.c.add(this, "setZooms");
            var b = this.f.Ti,
                c = this.xo(b, this); - 1 !== c && (b[c].opts.zooms = a);
            this.f.$r()
        },
        getOpacity: function() {
            g.c.add(this, "getOpacity");
            var a = this.f.Ti,
                b = this.xo(a, this);
            return -1 !== b ? a[b].opts.opacity : null
        },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            var b = this.f.Ti,
                c = this.xo(b, this); - 1 !== c && (b[c].opts.opacity = a);
            this.f.$r()
        },
        setIcon: function(a) {
            var b =
                    this.f.Ti,
                c = this.xo(b, this);
            if (-1 !== c) {
                var d = a.size,
                    e = a.clipSize;
                d && (a.size = this.f.hG(d));
                e && (a.clipSize = this.f.hG(e));
                b[c].opts.icon = g.extend({}, b[c].opts.icon, a)
            }
            this.f.$r()
        },
        setText: function(a) {
            var b = this.f.Ti,
                c = this.xo(b, this); - 1 !== c && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.f.$r())
        },
        on: function(a, b) {
            g.c.add(this, "on");
            if (this.f) {
                this.fC[a] = b;
                var c = this,
                    d =
                        this.f;
                d._markerBindArray || (d._markerBindArray = {});
                var e = this._LabelMarkerId;
                d._markerBindArray[e] || (d._markerBindArray[e] = this);
                d.CQ[a] ? d.CQ[a]++ : (d.CQ[a] = 1, this.f.on(a, function(a) {
                    var b = a.type;
                    if (a && a.data && a.data.data && a.data.data.id && a.data.data.id) {
                        var d = a.data.data.id,
                            b = (d = c.f && c.f._markerBindArray && c.f._markerBindArray[d]) && d.fC[b];
                        d && b && (a.target = d, "function" === typeof b && b(a))
                    }
                }))
            } else this.DQ.push(arguments)
        },
        off: function(a) {
            g.c.add(this, "off");
            this.fC[a] && delete this.fC[a];
            Object.keys(this.fC).length ||
            delete this.f._markerBindArray[this._LabelMarkerId]
        }
    });
    z.A.Jn = z.A.Bh.extend({
        B: {
            visible: !1,
            items: []
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.ContextMenu";
            g.c.wa(this, a);
            this.Sg = !0;
            g.a.Db(this, a);
            this.B.items = [];
            this.af(this.B)
        },
        addItem: function(a, b, c) {
            g.c.add(this, "addItem");
            this.get("items").push({
                Gn: a,
                ub: b,
                VJ: c
            });
            this.q("items")
        },
        removeItem: function(a, b) {
            g.c.add(this, "removeItem");
            var c = this.get("items"),
                d, e;
            for (e = 0; e < c.length; e += 1)
                if (d = c[e], d.Gn === a && d.ub === b) {
                    c.splice(e, 1);
                    break
                }
            this.q("items")
        },
        open: function(a, b) {
            g.c.add(this, "open");
            this.D = !0;
            b = g.a.Ia(b);
            this.set("position", b);
            this.map ? this.map && this.map !== a && (this.map.oz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
            this.q("open", {
                type: "open",
                target: this
            });
            this.D = !1
        },
        close: function() {
            g.c.add(this, "close");
            this.D = !0;
            this.setMap(null);
            this.map && (this.map = this.map.Zx = null, this.q("close", {
                type: "close",
                target: this
            }));
            this.D = !1
        }
    });
    z.A.Re = z.A.Bh.extend({
        B: {
            visible: !0,
            offset: new g.H(0, 0),
            showShadow: !1,
            closeWhenClickMap: !1,
            retainWhenClose: !0,
            autoMove: !0,
            altitude: 0,
            anchor: "bottom-center"
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
            g.c.wa(this, a);
            a = a || {};
            this.Sg = !0;
            a && a.size && (a.size = g.a.vq(a.size));
            g.a.Db(this, a);
            this.af(this.B);
            a.position && this.set("position", g.a.Ia(a.position), !0);
            a.height && this.set("altitude", this.KQ(a.height), !0)
        },
        open: function(a, b, c) {
            g.c.add(this, "open");
            b = g.a.Ia(b);
            if (a && !this.RK && (b =
                b || this.get("position", null, !0))) {
                this.q("change", {
                    type: "change",
                    target: this
                });
                c = this.KQ(c) || this.get("altitude");
                var d = this.get("map", null, !0);
                d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.nm && a.nm.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.D = !0, this.setMap(a), this.D = !1);
                this.q("open", {
                    type: "open",
                    target: this
                })
            }
        },
        close: function() {
            g.c.add(this, "close");
            this.A && this.A.map && (this.D = !0, this.setMap(null), this.map = null, this.q("change", {
                type: "change",
                target: this
            }),
                this.D = !1)
        },
        getAnchor: function() {
            g.c.add(this, "getAnchor");
            return this.get("anchor", null, !0)
        },
        setAnchor: function(a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a);
            this.q("change", {
                type: "change",
                target: this
            })
        },
        setContent: function(a) {
            g.c.add(this, "setContent");
            this.set("content", a);
            this.q("change", {
                type: "change",
                target: this
            })
        },
        getContentU: function() {
            g.c.add(this, "getContentU");
            return this.get("content", null, !0)
        },
        getContentDom: function() {
            return this.get("contentDom", null, !0)
        },
        getContent: function() {
            g.c.add(this,
                "getContent");
            return this.get("content", null, !0)
        },
        setPosition: function(a) {
            g.c.add(this, "setPosition");
            a = g.a.Ia(a);
            this.set("position", a);
            this.q("change", {
                type: "change",
                target: this
            })
        },
        setOffset: function(a) {
            g.c.add(this, "setOffset");
            this.set("offset", a);
            this.q("change", {
                type: "change",
                target: this
            })
        },
        getPosition: function() {
            g.c.add(this, "getPosition");
            return this.get("position", null, !0)
        },
        setSize: function(a) {
            g.c.add(this, "setSize");
            a = g.a.vq(a);
            this.set("size", a);
            this.q("change", {
                type: "change",
                target: this
            })
        },
        getSize: function(a) {
            g.c.add(this, "getSize");
            var b = this.get("size", null, !0);
            if (b) return b;
            if (this.A && !a) return new g.wd(this.A.mh.offsetWidth, this.A.mh.offsetHeight)
        },
        getIsOpen: function() {
            g.c.add(this, "getIsOpen");
            return !!this.get("map")
        }
    });
    z.A.Yb = z.A.qF.extend({
        B: {
            isOutline: !1,
            outlineColor: "#000000",
            geodesic: !1,
            dirColor: "white",
            borderWeight: 1
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
            g.c.wa(this, a);
            this.D = !0;
            z.A.Yb.Xc.r.apply(this, arguments);
            this.Sg = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
            a.path && (a.path = this.Ia(a.path));
            g.a.Db(this, a);
            this.setOptions(this.B);
            this.D = !1
        },
        getLength: function() {
            g.c.add(this, "getLength");
            for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].we(a[c + 1]);
            return parseFloat(b.toFixed(2))
        }
    });
    (function(a) {
        function b(a, b, c, d) {
            if (1 <= a) return d;
            var e = 1 - a;
            return e * e * b + 2 * e * a * c + a * a * d
        }

        function c(a, b, c, d, e) {
            if (1 <= a) return e;
            var f = 3 * (c[0] - b[0]),
                h = 3 * (d[0] - c[0]) - f,
                s = 3 * (c[1] - b[1]);
            c = 3 * (d[1] - c[1]) - s;
            return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
        }

        function d(a, c, d, e) {
            return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
        }

        function e(b, c) {
            c = a.a.Ia(c);
            return b.uD(c, 20).rl()
        }

        function f(b, c) {
            a.a.isArray(c) && (c = new a.H(c[0], c[1]));
            return b.TD(c,
                20)
        }

        function h(b, f, h, n, p, q) {
            var r = null;
            if (b && h && h.length) {
                b = [b];
                b.push.apply(b, h);
                b.push(f);
                h = 0;
                for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
                h = a.extend({
                    tolerance: 4,
                    interpolateNumLimit: [3, 300]
                }, q);
                q = h.tolerance;
                h = h.interpolateNumLimit;
                q = Math.max(2, q);
                for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u],
                    t = b[u + 1],
                    r = r + Math.abs(t[0] - w[0]),
                    s = s + Math.abs(t[1] - w[1]);
                a: {
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));
                    q = null;
                    switch (b.length) {
                        case 3:
                            q = d;
                            break;
                        case 4:
                            q = c;
                            break;
                        default:
                            r = null;
                            break a
                    }
                    h = [];
                    r = [0].concat(b);
                    for (s = 1; s < p - 2; s++) r[0] = s / p, h.push(q.apply(null, r));
                    h.push(b[b.length - 1]);
                    r = h
                }
            }
            return r || [e(n, f)]
        }
        a.uw = {
            IFa: d,
            pCa: c,
            lI: function() {
                function a(b, c, d) {
                    return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
                }

                function b(a) {
                    return a
                }
                var c = {},
                    d = "function" === typeof Float32Array;
                return function(e, f, h, s) {
                    function u(b) {
                        if (0 === b) b = 0;
                        else if (1 === b) b = 1;
                        else {
                            for (var c = 0, d = 1; 10 !== d && w[d] <= b; ++d) c += 0.1;
                            --d;
                            var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1,
                                l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                            if (0.001 <= l) {
                                for (c = 0; 4 > c; ++c) {
                                    l = 3 *
                                        (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                                    if (0 === l) break;
                                    d -= (a(d, e, h) - b) / l
                                }
                                b = d
                            } else if (0 === l) b = d;
                            else {
                                var d = c,
                                    c = c + 0.1,
                                    m, n = 0;
                                do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n);
                                b = m
                            }
                            b = a(b, f, s)
                        }
                        return b
                    }
                    if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range");
                    var v = arguments.toString();
                    if (c[v]) return c[v];
                    if (e === f && h === s) return b;
                    for (var w = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) w[t] = a(0.1 * t, e, h);
                    return c[v] = u
                }
            }(),
            B3: function(a, b, c, d) {
                var e, f, r = [];
                e = 0;
                for (f =
                         a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
                return r
            },
            Wpa: function(a, b, c, d) {
                a = this.B3(a, b, c, d);
                c = [];
                d = 0;
                for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
                return c
            }
        }
    })(g);
    z.A.$z = z.A.Yb.extend({
        B: {
            tolerance: 4,
            interpolateNumLimit: [3, 300]
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.BezierCurve";
            g.c.wa(this, a);
            z.A.$z.Xc.r.apply(this, arguments)
        },
        getLength: function() {
            g.c.add(this, "getLength");
            this.get("map");
            this.D = !0;
            var a = this.getInterpolateLngLats();
            this.D = !1;
            return g.$q.distanceOfLine(a)
        },
        getInterpolateLngLats: function() {
            g.c.add(this, "getInterpolateLngLats");
            var a = this.get("map");
            return g.uw.Wpa(this.get("path"), a && a.hj || g.Zh.rL, Math.pow(2, 2), this.B)
        },
        getSerializedPath: function() {
            g.c.add(this,
                "getSerializedPath");
            for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (e instanceof g.U) {
                    var f = [];
                    if (e.controlPoints)
                        for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].fR()), f.push(e.controlPoints[h].cR());
                    f.push(e.fR());
                    f.push(e.cR());
                    b.push(f)
                } else b.push(e)
            }
            return b
        },
        Ia: function(a) {
            var b = typeof a[0];
            if (g.a.isArray(a) && "object" === b) {
                for (b = 0; b < a.length; b += 1) a[b] = this.Lia(a[b]);
                return a
            }
            return [this.mFa(a)]
        },
        Lia: function(a) {
            var b;
            if (a instanceof g.U) b =
                a;
            else {
                b = typeof a[0];
                var c, d, e = [];
                if ("string" === b || "number" === b) {
                    d = a.length;
                    if (d % 2) throw Error("LngLat number should be even, now it's " + d);
                    b = new g.U(a[d - 2], a[d - 1]);
                    c = 0;
                    for (d -= 2; c < d; c += 2) e.push(new g.U(a[c], a[c + 1]))
                } else if (g.a.isArray(a[0]))
                    for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.U(a[c][0], a[c][1]));
                else throw Error("AMap.LngLat expected, now it's " + a);
                b && e.length && (b.controlPoints = g.a.Ia(e))
            } if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
            return b
        }
    });
    z.A.zc = z.A.qF.extend({
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
            g.c.wa(this, a);
            this.D = !0;
            z.A.zc.Xc.r.apply(this, arguments);
            this.Sg = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            a.path && (a.path = this.Ia(a.path));
            g.a.Db(this, g.extend({
                fillColor: "#FFAA00",
                fillOpacity: 0.9
            }, a));
            this.setOptions(this.B);
            this.D = !1
        },
        mR: function(a) {
            var b = 6378137 * Math.PI / 180,
                c = 0,
                d = a.length;
            if (3 > d) return 0;
            for (var e = 0; e < d - 1; e += 1) var f = a[e],
                h = a[e + 1],
                k = f.Q * b * Math.cos(f.P * Math.PI / 180),
                f = f.P * b,
                l = h.Q *
                    b * Math.cos(h.P * Math.PI / 180),
                c = c + (k * h.P * b - l * f);
            e = a[e];
            a = a[0];
            d = e.Q * b * Math.cos(e.P * Math.PI / 180);
            e = e.P * b;
            h = a.Q * b * Math.cos(a.P * Math.PI / 180);
            c += d * a.P * b - h * e;
            return 0.5 * Math.abs(c)
        },
        getArea: function() {
            g.c.add(this, "getArea");
            var a = this.get("path", null, !0),
                b;
            if (!a.length || a[0] instanceof g.U) b = this.mR(a);
            else {
                b = this.mR(a[0]);
                for (var c = 1; c < a.length; c += 1) b -= this.mR(a[c])
            }
            return Number(b.toFixed(2))
        },
        toString: function() {
            g.c.add(this, "toString");
            return this.get("path").join(";")
        },
        contains: function(a) {
            g.c.add(this,
                "contains");
            a = g.a.Ia(a);
            var b = this.get("path");
            b.length && b[0] instanceof g.U && (b = [b]);
            a = [a.Q, a.P];
            for (var c, d = 0, e = b.length; d < e && (c = this.nma(b[d]), g.vd.eq(c) || c.reverse(), c = g.vd.Pd(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1);
            return c
        },
        nma: function(a) {
            for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].Q, a[c].P]);
            return b
        }
    });
    z.A.ah = z.A.bd.extend({
        B: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: 1E3,
            fillColor: "#006600",
            fillOpacity: 0.9,
            unit: "miter"
        },
        r: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
            g.c.wa(this, a);
            this.D = !0;
            z.A.ah.Xc.r.apply(this, arguments);
            a = a || {};
            a.center && (a.center = g.a.Ia(a.center));
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            g.a.ck(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
            g.a.Db(this, a);
            this.Sg = this.B.center ? !0 : !1;
            this.setOptions(this.B);
            this.D = !1
        },
        setCenter: function(a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ia(a)) && a instanceof g.U && (this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0], !0), this.set("center", a), this.q("change", {
                type: "change",
                target: this
            }), this.Sg || (this.Sg = !0, this.get("map") && this.get("map").q("overlays")), b || this.q("setCenter"))
        },
        getCenter: function() {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.A && this.A.get("deltaPos") && (a =
                this.A.VA([a], this.A.get("deltaPos"))[0]);
            return a
        },
        reset: function() {
            var a = this.get("center", null, !0);
            this.A && this.A.get("deltaPos") && (a = this.A.VA([a], this.A.get("deltaPos"))[0], this.A.set("deltaPos", [0, 0], !0));
            this.set("center", a)
        },
        setRadius: function(a, b) {
            g.c.add(this, "setRadius");
            this.set("radius", a);
            this.q("change", {
                type: "change",
                target: this
            });
            b || this.q("setRadius")
        },
        getPath: function(a) {
            g.c.add(this, "getPath");
            a = a || 36;
            for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e <
            a; e += 1) {
                var f = Math.PI * e / a * 2,
                    h = Math.cos(f) * c,
                    f = Math.sin(f) * c;
                d.push(b.offset(h, f))
            }
            return d
        },
        getRadius: function() {
            g.c.add(this, "getRadius");
            return this.get("radius", null, !0)
        },
        getBounds: function() {
            var a = this.get("center"),
                b = this.get("radius");
            if (!a) return null;
            var c = a.offset(-b, -b),
                a = a.offset(b, b);
            return new g.re(c, a)
        },
        contains: function(a) {
            g.c.add(this, "contains");
            return this.get("center").we(a) <= this.get("radius") ? !0 : !1
        }
    });
    z.A.vV = z.A.ah.extend({
        r: function(a) {
            this.CLASS_NAME = "AMap.CircleMarker";
            g.c.wa(this, a);
            a = a || {};
            a.unit = "px";
            void 0 === a.radius ? a.radius = 20 : g.a.ck(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
            z.A.vV.Xc.r.apply(this, arguments)
        },
        getBounds: function() {
            this.D = !0;
            var a = this.getCenter();
            this.D = !1;
            return new g.re(a, a.lb())
        },
        contains: function(a) {
            g.c.add(this, "contains");
            this.D = !0;
            var b = this.getMap();
            this.D = !1;
            if (!b) return !1;
            var c = this.get("center");
            b.D = !0;
            var d = !1;
            c.we(a) <=
            this.get("radius") * b.getResolution(c) && (d = !0);
            b.D = !1;
            return d
        }
    });
    var pc = g.aa.extend({
        r: function(a) {
            var b = Array(3),
                c;
            c = a instanceof Array ? a : a instanceof g.Al || a instanceof g.Qa ? a.elements : arguments;
            b[0] = c[0] || 0;
            b[1] = c[1] || 0;
            b[2] = c[2] || 0;
            this.elements = b
        },
        length: function() {
            return Math.sqrt(this.y5())
        },
        y5: function() {
            var a = this.elements;
            return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
        },
        normalize: function() {
            var a = this.elements,
                b = a[0],
                c = a[1],
                d = a[2],
                e = Math.sqrt(b * b + c * c + d * d);
            if (e) {
                if (1 === e) return this
            } else return a[0] = 0, a[1] = 0, a[2] = 0, this;
            e = 1 / e;
            a[0] = b * e;
            a[1] = c * e;
            a[2] = d * e;
            return this
        },
        lb: function() {
            return new g.Qa(this)
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            return this
        },
        set: function(a, b, c) {
            var d = this.elements;
            d[0] = a;
            d[1] = b;
            d[2] = c
        },
        cb: function(a) {
            var b = this.elements;
            a = a.elements;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
        },
        An: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            return this
        },
        add: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            return this
        },
        lla: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements;
            e[0] = c[0] + d[0];
            e[1] = c[1] + d[1];
            e[2] = c[2] + d[2];
            return this
        },
        sub: function(a) {
            a = a.elements;
            var b = this.elements;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            return this
        },
        Bz: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements;
            e[0] = c[0] - d[0];
            e[1] = c[1] - d[1];
            e[2] = c[2] - d[2];
            return this
        },
        Tr: function(a) {
            a = a.elements;
            var b = this.elements;
            b[0] = b[1] * a[2] - b[2] * a[1];
            b[1] = b[2] * a[0] - b[0] * a[2];
            b[2] = b[0] * a[1] - b[1] * a[0];
            return this
        },
        cy: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements;
            e[0] = c[1] * d[2] -
                c[2] * d[1];
            e[1] = c[2] * d[0] - c[0] * d[2];
            e[2] = c[0] * d[1] - c[1] * d[0];
            return this
        },
        Cf: function(a) {
            a = a.elements;
            var b = this.elements;
            return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
        },
        we: function(a) {
            return Math.sqrt(this.B2(a))
        },
        B2: function(a) {
            var b = a.elements,
                c = this.elements;
            a = c[0] - b[0];
            var d = c[1] - b[1],
                b = c[2] - b[2];
            return a * a + d * d + b * b
        },
        Sf: function(a) {
            var b = this.elements[0],
                c = this.elements[1],
                d = this.elements[2];
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.elements[1] =
                (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        }
    });
    g.Qa = pc;
    g.Qa.Pb({
        Cf: "dot",
        lb: "clone",
        add: "add",
        sub: "sub",
        lla: "addVectors",
        Bz: "subVectors",
        cy: "crossVectors",
        normalize: "normalize",
        length: "length"
    });
    var qc = g.aa.extend({
        r: function(a) {
            var b = Array(4),
                c;
            c = a instanceof Array ? a : arguments;
            b[0] = c[0];
            b[1] = c[1];
            b[2] = c[2];
            b[3] = c[3] || 1;
            this.elements = b
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = void 0 !== a[3] ? a[3] : 1;
            return this
        },
        multiply: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            b[3] *= a
        },
        Sf: function(a) {
            var b = this.elements[0],
                c = this.elements[1],
                d = this.elements[2],
                e = this.elements[3];
            a = a.elements;
            this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.elements[1] =
                a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        }
    });
    g.Al = qc;

    function rc(a, b) {
        this.bz = void 0 !== a ? a : new g.Qa(1, 0, 0);
        this.tC = void 0 !== b ? b : 0
    }
    g.Gw = rc;
    rc.prototype = {
        set: function(a, b) {
            this.bz.copy(a);
            this.tC = b;
            return this
        },
        normalize: function() {
            var a = 1 / this.bz.length();
            this.bz.An(a);
            this.tC *= a;
            return this
        },
        eI: function(a) {
            return this.bz.Cf(a) + this.tC
        }
    };

    function uc(a, b, c, d, e) {
        a.bz.set(b, c, d);
        a.tC = e;
        return a
    };

    function vc(a, b, c, d, e, f) {
        this.QD = [void 0 !== a ? a : new g.Gw, void 0 !== b ? b : new g.Gw, void 0 !== c ? c : new g.Gw, void 0 !== d ? d : new g.Gw, void 0 !== e ? e : new g.Gw, void 0 !== f ? f : new g.Gw]
    }
    g.FV = vc;
    vc.prototype = {
        set: function(a, b, c, d, e, f) {
            var h = this.QD;
            h[0].copy(a);
            h[1].copy(b);
            h[2].copy(c);
            h[3].copy(d);
            h[4].copy(e);
            h[5].copy(f);
            return this
        },
        lb: function() {
            return (new g.FV).copy(this)
        },
        copy: function(a) {
            for (var b = this.QD, c = 0; 6 > c; c++) b[c].copy(a.QD[c]);
            return this
        },
        iJ: function() {
            var a = new g.Qa,
                b = new g.Qa,
                c = a.elements,
                d = b.elements;
            return function(e) {
                var f = this.QD,
                    h = e.max.elements;
                e = e.min.elements;
                for (var k = 0; 6 > k; k++) {
                    var l = f[k],
                        m = l.bz.elements;
                    c[0] = 0 < m[0] ? e[0] : h[0];
                    d[0] = 0 < m[0] ? h[0] : e[0];
                    c[1] = 0 < m[1] ?
                        e[1] : h[1];
                    d[1] = 0 < m[1] ? h[1] : e[1];
                    c[2] = 0 < m[2] ? e[2] : h[2];
                    d[2] = 0 < m[2] ? h[2] : e[2];
                    m = l.eI(a);
                    l = l.eI(b);
                    if (0 > m && 0 > l) return !1
                }
                return !0
            }
        }()
    };
    (function(a) {
        function b(a) {
            this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
        a.UV = function(a) {
            this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
        };
        b.prototype.aU = function() {
            var a = this.elements;
            a[0] = 1;
            a[4] = 0;
            a[8] = 0;
            a[12] = 0;
            a[1] = 0;
            a[5] = 1;
            a[9] = 0;
            a[13] = 0;
            a[2] = 0;
            a[6] = 0;
            a[10] = 1;
            a[14] = 0;
            a[3] = 0;
            a[7] = 0;
            a[11] = 0;
            a[15] = 1
        };
        b.prototype.set = function(a) {
            if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
                this
        };
        b.prototype.toFixed = function(b) {
            for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.kc(d[e], b));
            return this
        };
        b.prototype.concat = function(a) {
            var b, e, f, h, k, l, m;
            e = b = this.elements;
            f = a.elements;
            if (b === f)
                for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
            for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
            return this
        };
        b.multiply = function(b, d) {
            var e = Array(16),
                f, h,
                k, l, m, n, p;
            k = h = b.elements;
            l = d.elements;
            if (h === l)
                for (f = 0; 16 > f; ++f) e[f] = h[f];
            for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
            return new a.Hc(e)
        };
        b.prototype.multiply = b.prototype.concat;
        b.prototype.xh = function(b) {
            var d = this.elements;
            b = b.elements;
            var e = new a.Al,
                f = e.elements;
            f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
            f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
                d[13];
            f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
            f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
            return e
        };
        b.prototype.DE = function() {
            var a, b;
            a = this.elements;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        };
        b.prototype.Bwa = function(a) {
            var b, e, f;
            b = a.elements;
            a = this.elements;
            e = [];
            e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
            e[4] = -b[4] *
                (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
            e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
            e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
            e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
            e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
            e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
                (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
            e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
            e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
            e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
            e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
            e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
                b[2] * b[5]);
            e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
            e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
            e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
            e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
            f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
            if (0 === f) return this;
            f = 1 / f;
            for (b = 0; 16 > b; b++) a[b] = e[b] * f;
            return this
        };
        b.prototype.Qg = function() {
            return (new b).Bwa(this)
        };
        b.prototype.dU = function(a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || e === f || h === k) throw "null frustum";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = 0;
            l[9] = 0;
            l[10] = -2 * p;
            l[11] = 0;
            l[12] = -(b + a) * m;
            l[13] = -(f + e) * n;
            l[14] = -(k + h) * p;
            l[15] = 1;
            return this
        };
        b.prototype.cua = function(a, d, e, f, h, k) {
            return this.concat((new b).dU(a, d, e, f, h, k))
        };
        b.prototype.zwa = function(a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || f === e || h === k) throw "null frustum";
            if (0 >= h) throw "near <= 0";
            if (0 >=
                k) throw "far <= 0";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * h * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * h * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = (b + a) * m;
            l[9] = (f + e) * n;
            l[10] = -(k + h) * p;
            l[11] = -1;
            l[12] = 0;
            l[13] = 0;
            l[14] = -2 * h * k * p;
            l[15] = 0;
            return this
        };
        b.prototype.TQ = function(a, d, e, f, h, k) {
            return this.concat((new b).zwa(a, d, e, f, h, k))
        };
        b.prototype.h8 = function(a, b, e, f) {
            var h, k;
            if (e === f || 0 === b) throw "null frustum";
            if (0 >= e) throw "near <= 0";
            if (0 >= f) throw "far <= 0";
            a /= 2;
            k = Math.sin(a);
            if (0 === k) throw "null frustum";
            h = 1 / (f - e);
            k = Math.cos(a) /
                k;
            a = this.elements;
            a[0] = k / b;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = k;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = -(f + e) * h;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = -2 * e * f * h;
            a[15] = 0;
            return this
        };
        b.prototype.perspective = function(a, d, e, f) {
            return this.concat((new b).h8(a, d, e, f))
        };
        b.prototype.Nv = function(a, b, e) {
            var f = this.elements;
            f[0] = a;
            f[4] = 0;
            f[8] = 0;
            f[12] = 0;
            f[1] = 0;
            f[5] = b;
            f[9] = 0;
            f[13] = 0;
            f[2] = 0;
            f[6] = 0;
            f[10] = e;
            f[14] = 0;
            f[3] = 0;
            f[7] = 0;
            f[11] = 0;
            f[15] = 1;
            return this
        };
        b.prototype.scale = function(a, b, e) {
            var f = this.elements;
            f[0] *= a;
            f[4] *= b;
            f[8] *= e;
            f[1] *= a;
            f[5] *= b;
            f[9] *= e;
            f[2] *= a;
            f[6] *= b;
            f[10] *= e;
            f[3] *= a;
            f[7] *= b;
            f[11] *= e;
            return this
        };
        b.prototype.k8 = function(a, b, e) {
            var f = this.elements;
            f[12] = a;
            f[13] = b;
            f[14] = e;
            return this
        };
        b.prototype.translate = function(a, b, e) {
            var f = this.elements;
            f[12] += f[0] * a + f[4] * b + f[8] * e;
            f[13] += f[1] * a + f[5] * b + f[9] * e;
            f[14] += f[2] * a + f[6] * b + f[10] * e;
            f[15] += f[3] * a + f[7] * b + f[11] * e;
            return this
        };
        b.prototype.wz = function(a, b, e, f) {
            var h, k, l, m, n, p, q, r;
            a = Math.PI * a / 180;
            h = this.elements;
            k = Math.sin(a);
            a = Math.cos(a);
            0 !== b && 0 === e && 0 === f ?
                (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
                    r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
            h[15] = 1;
            return this
        };
        b.prototype.rotate = function(a, d, e, f) {
            return this.concat((new b).wz(a, d, e, f))
        };
        b.prototype.Ts = function(a) {
            return this.rotate(a, 1, 0, 0)
        };
        b.prototype.Us = function(a) {
            return this.rotate(a, 0, 1, 0)
        };
        b.prototype.Vs = function(a) {
            return this.rotate(a, 0, 0, 1)
        };
        a.Hc = b
    })(g);
    z.A.rt = z.A.zc.extend({
        B: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            radius: [1E3, 1E3],
            fillColor: "#006600",
            fillOpacity: 0.9
        },
        r: function() {
            var a = this,
                b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Ellipse";
            g.c.wa(this, b);
            var b = g.extend({}, this.B, b),
                c = this.Hr(b);
            b.path = c;
            z.A.rt.Xc.r.call(this, b);
            this.set("path", c);
            this.get("center") && this.get("map") || (this.Sg = !1);
            this.on("movepoly", function(b) {
                var c =
                    a.get("map");
                b = c.Td(c.Ab(a.get("center")).add(b.aK));
                "3D" === c.view.type && a.set("deltaPos", [0, 0], !0);
                a.set("center", b)
            })
        },
        Hr: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                b = [],
                c = a.center || this.get("center"),
                d = a.map || this.get("map");
            if (c && d)
                for (var c = g.a.Ia(c), e = a.radius || this.get("radius"), f = d.Ab(c), a = f.x, f = f.y, h = g.a.map(e, function(a) {
                    return a / d.getResolution(c, 20)
                }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                    var n = m * l,
                        n = {
                            x: a + e * Math.cos(n),
                            y: f +
                                h * Math.sin(n)
                        };
                    b.push(d.Td(n))
                }
            return b
        },
        mapChanged: function() {
            g.a.Oh(z.A.rt.Xc.mapChanged) && z.A.rt.Xc.mapChanged.apply(this);
            this.D = !0;
            this.setPath(this.Hr());
            this.D = !1;
            !this.Sg && this.get("map") && (this.Sg = !0, this.get("map").q("overlays"))
        },
        setCenter: function(a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ia(a)) && a instanceof g.U && (this.A && this.A.get("deltaPos") && this.A.set("deltaPos", [0, 0], !0), this.set("center", a), this.set("path", this.Hr()), this.Sg || (this.Sg = !0, this.get("map") && this.get("map").q("overlays")),
            b || (this.q("setCenter"), this.q("change", {
                type: "change",
                target: this
            })))
        },
        setRadius: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setRadius");
            a && 2 === a.length && (this.set("radius", a), this.set("path", this.Hr()), b || (this.q("change", {
                type: "change",
                target: this
            }), this.q("setPath")))
        },
        setOptions: function(a) {
            z.A.rt.Xc.setOptions.call(this, a);
            this.D = !0;
            a.radius && this.setRadius(a.radius, !0);
            a.center && this.setCenter(a.center, !0);
            this.D = !1
        },
        getRadius: function() {
            g.c.add(this,
                "getRadius");
            return this.get("radius", null, !0)
        },
        getCenter: function() {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.A && this.A.get("deltaPos") && this.A.VA([a], this.A.get("deltaPos"))[0];
            return a
        }
    });
    z.A.xt = z.A.zc.extend({
        B: {
            visible: !0,
            zIndex: 10,
            strokeColor: "#006600",
            strokeOpacity: 0.9,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            fillColor: "#006600",
            fillOpacity: 0.9
        },
        r: function() {
            var a = this,
                b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Rectangle";
            g.c.wa(this, b);
            b = g.extend({}, this.B, b);
            this.D = !0;
            var c = this.Hr(b);
            b.path = c;
            z.A.xt.Xc.r.call(this, b);
            this.setPath(c);
            this.B.bounds && this.get("map") || (this.Sg = !1);
            this.on("movepoly", function(b) {
                var c = a.get("map"),
                    f = a.get("bounds"),
                    h = c.Td(c.Ab(f.tc).add(b.aK));
                b = c.Td(c.Ab(f.lc).add(b.aK));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("bounds", new g.re(h, b))
            });
            this.D = !1
        },
        Hr: function() {
            var a = [],
                b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
            if (b) {
                b.D = !0;
                var c = b.getSouthWest(),
                    d = b.getNorthEast();
                b.D = !1;
                g.a.Ob([new g.U(c.Q, c.P, !0), new g.U(d.Q, c.P, !0), new g.U(d.Q, d.P, !0), new g.U(c.Q, d.P, !0)], function(b) {
                    return a.push(b)
                })
            }
            return a
        },
        mapChanged: function() {
            g.a.Oh(z.A.xt.Xc.mapChanged) &&
            z.A.xt.Xc.mapChanged.apply(this);
            this.D = !0;
            this.setPath(this.Hr());
            this.D = !1;
            !this.Sg && this.get("map") && (this.Sg = !0, this.get("map").q("overlays"))
        },
        setOptions: function(a) {
            this.D = !0;
            z.A.xt.Xc.setOptions.call(this, a);
            a.bounds && this.setBounds(a.bounds, !0);
            this.D = !1
        },
        setBounds: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setBounds");
            a && a instanceof g.re && (this.set("bounds", a), this.set("path", this.Hr()), this.Sg || (this.Sg = !0, this.get("map") && this.get("map").q("overlays")),
            b || (this.q("change", {
                type: "change",
                target: this
            }), this.q("setBounds")))
        },
        getBounds: function() {
            g.c.add(this, "getBounds");
            return this.get("bounds", null, !0)
        }
    });
    z.A.kW = z.A.sb.extend({
        B: {
            text: "",
            textAlign: "center",
            verticalAlign: "middle",
            offset: new g.H(0, 0)
        },
        r: function(a) {
            this.CLASS_NAME = "AMap.Text";
            g.c.wa(this, a);
            z.A.kW.Xc.r.apply(this, arguments);
            this.ufa();
            this.D = !0;
            this.setText(this.get("text"));
            this.setStyle(this.get("style"));
            this.D = !1
        },
        ufa: function() {
            if (!this.SB) {
                var a = document.createElement("div");
                a.className = "amap-overlay-text-container";
                this.SB = a
            }
        },
        getText: function() {
            g.c.add(this, "getText");
            return this.get("text", null, !0)
        },
        setText: function(a) {
            g.c.add(this,
                "setText");
            a || 0 === a || (a = "");
            g.j.Gxa(this.SB, "amap-overlay-text-empty", !a);
            g.c.add(this, "setText");
            this.set("text", a);
            this.SB.innerHTML = a;
            this.q7()
        },
        setStyle: function(a) {
            g.c.add(this, "setStyle");
            a = a || {};
            for (var b in a) a.hasOwnProperty(b) && (this.SB.style[b] = a[b]);
            this.q7()
        },
        q7: function() {
            this.D = !0;
            this.setContent(this.SB);
            this.setShadow(this.getShadow());
            this.D = !1
        }
    });
    g.IV = {
        find: function(a) {
            return g.a.find(this.Pw || [], a)
        },
        FI: function() {
            return this.Pw || []
        },
        Hd: function(a) {
            return null !== this.find(a)
        },
        add: function(a) {
            var b = this,
                c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Gs,
                d = this.Pw || (this.Pw = []);
            g.a.isArray(a) ? g.a.Ob(a, function(a) {
                b.add(a, c)
            }) : null === this.find(a) && (d.push(a), c(a));
            return this
        },
        remove: function(a) {
            var b = this,
                c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Gs,
                d = this.Pw;
            if (d)
                if (g.a.isArray(a)) g.a.Ob(a, function(a) {
                    b.remove(a,
                        c)
                });
                else {
                    var e = g.a.indexOf(d, a); - 1 !== e && (c(d[e]), d.splice(e, 1))
                }
            return this
        },
        clear: function() {
            this.Ob(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Gs);
            this.Pw = [];
            return this
        },
        Ob: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Gs,
                b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            g.a.Ob(this.Pw || [], function() {
                for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                c = d[0];
                g.a.Oh(c.Ob) ? c.Ob(a, b) : a.apply(b || c, d)
            });
            return this
        },
        Io: function(a) {
            for (var b =
                arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.Ob(function(b) {
                b && g.a.Oh(b[a]) && b[a].apply(b, c)
            });
            return this
        },
        h: function(a) {
            var b = arguments;
            this.Ob(function(a) {
                a.on.apply(a, b)
            });
            return this
        },
        G: function(a) {
            var b = arguments;
            this.Ob(function(a) {
                a.off.apply(a, b)
            });
            return this
        },
        addListener: function() {
            this.h.apply(this, arguments)
        },
        Mx: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Gs,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            this.Ob(function(d) {
                d.on.call(d,
                    event, function() {
                        b();
                        d.off(a)
                    }, c)
            })
        },
        removeListener: function(a) {
            this.G(a.AQ, a.IR, a.Ve)
        },
        O: function(a, b) {
            this.Ob(function(c) {
                c.emit(a, b)
            })
        }
    };
    z.A.Ln = z.A.Bh.extend({
        ka: [g.IV],
        r: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            this.CLASS_NAME = "AMap.OverlayGroup";
            g.c.wa(this);
            z.A.Ln.Xc.r.apply(this);
            this.map = null;
            this.add(a)
        },
        sc: function(a) {
            g.c.add(this, "setMap");
            this.Io("setMap", a);
            this.Io("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        },
        mapChanged: function() {},
        aC: function(a) {
            var b = this;
            g.c.add(this, "addOverlay");
            this.add(a, function(a) {
                b.map && (a.D = !0, a.setMap(b.map), a.D = !1)
            });
            return this
        },
        oz: function(a) {
            var b =
                this;
            g.c.add(this, "removeOverlay");
            this.remove(a, function(a) {
                a.D = !0;
                a.getMap() === b.map && a.setMap(null);
                a.D = !1
            });
            return this
        },
        ed: function() {
            var a = this;
            g.c.add(this, "clearOverlays");
            this.clear(function(b) {
                b.D = !0;
                b.getMap() === a.map && b.setMap(null);
                b.D = !1
            });
            return this
        },
        Gy: function() {
            g.c.add(this, "hide");
            this.Io("hide");
            return this
        },
        show: function() {
            g.c.add(this, "show");
            this.Io("show");
            return this
        },
        Db: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g.c.add(this, "setOptions");
            this.Io("setOptions", a);
            return this
        }
    });
    z.A.Ln.Pb({
        find: "getOverlay",
        FI: "getOverlays",
        aC: ["addOverlay", "addOverlays"],
        Hd: "hasOverlay",
        oz: ["removeOverlay", "removeOverlays"],
        ed: "clearOverlays",
        Ob: "eachOverlay",
        sc: "setMap",
        Db: "setOptions",
        show: "show",
        Gy: "hide",
        h: "on",
        G: "off"
    });
    (function(a, b) {
        function c(a, b) {
            if (!a.length) return !1;
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1
            }
            return !0
        }

        function d(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
            return b
        }

        function e(a) {
            if (!a || !a.length) return [];
            a = b.a.Ia(a);
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].rl();
            a[a.length - 1].cb(a[0]) || c.push(a[0].rl());
            return c
        }
        a.A.GV = a.A.Ln.extend({
            r: function(c) {
                this.CLASS_NAME =
                    "AMap.GeoJSON";
                b.c.wa(this, c);
                a.A.GV.Xc.r.call(this, []);
                this.D = !0;
                this.B = b.extend({
                    getMarker: function(b, c) {
                        return new a.A.sb({
                            innerOverlay: !0,
                            position: c
                        })
                    },
                    getPolyline: function(b, c) {
                        return new a.A.Yb({
                            path: c,
                            innerOverlay: !0
                        })
                    },
                    getPolygon: function(b, c) {
                        return new a.A.zc({
                            path: c,
                            innerOverlay: !0
                        })
                    },
                    coordsToLatLng: function(a) {
                        return a
                    }
                }, c);
                if (!this.B.coordsToLatLngs) {
                    var d = this.B.coordsToLatLng;
                    this.B.coordsToLatLngs = function(a) {
                        for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
                        return b
                    }
                }
                this.importData(this.B.geoJSON);
                this.D = !1
            },
            importData: function(a) {
                b.c.add(this, "importData");
                if (a && (a = this.pfa(a), a.length)) {
                    this.clearOverlays();
                    this.aC(a);
                    var c = this.B.map;
                    if (c)
                        for (var d = 0, e = a.length; d < e; d++) a[d].D = !0, a[d].setMap(c), a[d].D = !1
                }
            },
            toGeoJSON: function() {
                b.c.add(this, "toGeoJSON");
                for (var a = this.FI(), c = [], d = 0, e = a.length; d < e; d++) a[d].D = !0, c[d] = a[d].toGeoJSON(), a[d].D = !1;
                return c
            },
            pfa: function(a) {
                if (a) {
                    b.a.isArray(a) || (a = [a]);
                    for (var c = [], d = 0, e = a.length; d < e; d++) {
                        var m = this.qfa(a[d]);
                        m && c.push(m)
                    }
                    return c
                }
            },
            cX: function(a) {
                var b =
                        "Feature" === a.type ? a.geometry : a,
                    b = this.B.coordsToLatLng(b ? b.coordinates : null),
                    b = this.B.getMarker(a, b);
                this.xr(a, b);
                return b
            },
            fca: function(c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.cX(b.extend({}, c, {
                    type: "Feature",
                    properties: {
                        _isAmap: !0,
                        _pointIndex: l,
                        _parentProperities: c.properties
                    },
                    geometry: {
                        type: "Point",
                        coordinates: d[l]
                    }
                })));
                d = new a.A.Ln(e);
                this.xr(c, d);
                return d
            },
            bX: function(a) {
                var b = "Feature" === a.type ? a.geometry : a,
                    b = this.B.coordsToLatLngs(b ?
                        b.coordinates : null),
                    b = this.B.getPolyline(a, b);
                this.xr(a, b);
                return b
            },
            eca: function(c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.bX(b.extend({}, c, {
                    type: "Feature",
                    properties: {
                        _isAmap: !0,
                        _lineStringIndex: l,
                        _parentProperities: c.properties
                    },
                    geometry: {
                        type: "LineString",
                        coordinates: d[l]
                    }
                })));
                d = new a.A.Ln(e);
                this.xr(c, d);
                return d
            },
            dX: function(a) {
                for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.B.coordsToLatLngs(b[d]));
                b = this.B.getPolygon(a, c);
                this.xr(a, b);
                return b
            },
            gca: function(c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.dX(b.extend({}, c, {
                    type: "Feature",
                    properties: {
                        _isAmap: !0,
                        _polygonIndex: l,
                        _parentProperities: c.properties
                    },
                    geometry: {
                        type: "Polygon",
                        coordinates: d[l]
                    }
                })));
                d = new a.A.Ln(e);
                this.xr(c, d);
                return d
            },
            Zba: function(c) {
                for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++) e.push(this.tN(b.extend({}, c, {
                    type: "Feature",
                    properties: {
                        _isAmap: !0,
                        _geometryIndex: l,
                        _parentProperities: c.properties
                    },
                    geometry: d[l]
                })));
                d = new a.A.Ln(e);
                this.xr(c, d);
                return d
            },
            qfa: function(b) {
                if (b) switch (b.type) {
                    case "Feature":
                        return this.tN(b);
                    case "FeatureCollection":
                        for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
                            var n = this.tN(c[e]);
                            n && d.push(n)
                        }
                        c = new a.A.Ln(d);
                        this.xr(b, c);
                        return c;
                    default:
                        throw Error("Invalid GeoJSON object." + b.type);
                }
            },
            xr: function(a, c) {
                c && a.properties && c.setExtData && (c.D = !0, c.setExtData(b.extend({}, c.getExtData() || {}, {
                    _geoJsonProperties: a.properties
                })), c.D = !1)
            },
            tN: function(a) {
                var b = "Feature" === a.type ? a.geometry : a;
                if (!(b && b.coordinates || b)) return null;
                switch (b.type) {
                    case "Point":
                        return this.cX(a);
                    case "MultiPoint":
                        return this.fca(a);
                    case "LineString":
                        return this.bX(a);
                    case "MultiLineString":
                        return this.eca(a);
                    case "Polygon":
                        return this.dX(a);
                    case "MultiPolygon":
                        return this.gca(a);
                    case "GeometryCollection":
                        return this.Zba(a);
                    default:
                        throw Error("Invalid GeoJSON geometry." + b.type);
                }
            }
        });
        a.A.Ln.zb({
            toGeoJSON: function(a) {
                b.c.add(this,
                    "toGeoJSON");
                a = a || this.FI();
                for (var e = [], k = 0, l = a.length; k < l; k++) a[k].toGeoJSON && (a[k].D = !0, e[k] = a[k].toGeoJSON(), a[k].D = !1);
                this.D = !0;
                a = this.getExtData() || {};
                this.D = !1;
                if (c(e, "Point")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {
                        type: "MultiPoint",
                        coordinates: d(e)
                    }
                };
                else if (c(e, "LineString")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {
                        type: "MultiLineString",
                        coordinates: d(e)
                    }
                };
                else if (c(e, "Polygon")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {
                        type: "MultiPolygon",
                        coordinates: d(e)
                    }
                };
                else if (c(e, "*")) {
                    a = a._geoJsonProperties || {};
                    for (var k = [], l = 0, m = e.length; l < m; l++) k.push(e[l].geometry);
                    e = {
                        type: "Feature",
                        properties: a,
                        geometry: {
                            type: "GeometryCollection",
                            geometries: k
                        }
                    }
                } else e = {
                    type: "FeatureCollection",
                    properties: a._geoJsonProperties || {},
                    features: e
                };
                return e
            }
        });
        a.A.sb.zb({
            toGeoJSON: function() {
                b.c.add(this, "toGeoJSON");
                this.D = !0;
                var a = this.getExtData() || {},
                    c = this.getPosition().rl();
                this.D = !1;
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {
                        type: "Point",
                        coordinates: c
                    }
                }
            }
        });
        a.A.Yb.zb({
            toGeoJSON: function() {
                b.c.add(this, "toGeoJSON");
                this.D = !0;
                var a = this.getExtData() || {},
                    c = this.getPath();
                this.D = !1;
                return {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: {
                        type: "LineString",
                        coordinates: e(c)
                    }
                }
            }
        });
        a.A.zc.zb({
            toGeoJSON: function() {
                b.c.add(this, "toGeoJSON");
                this.D = !0;
                var a = this.getExtData() || {},
                    c = this.getPath();
                this.D = !1;
                a = a._geoJsonProperties || {};
                if (c) {
                    c = b.a.Ia(c);
                    b.a.isArray(c[0]) || (c = [c]);
                    for (var d = [], l = 0, m = c.length; l < m; l++) d[l] = e(c[l]);
                    c = d
                } else c = [];
                return {
                    type: "Feature",
                    properties: a,
                    geometry: {
                        type: "Polygon",
                        coordinates: c
                    }
                }
            }
        })
    })(z, g);
    z.o.zL = z.o.Ub.extend({
        ka: [g.IV],
        r: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            this.CLASS_NAME = "AMap.LayerGroup";
            g.c.wa(this, b);
            z.o.zL.Xc.r.call(this, b);
            this.map = null;
            this.add(a)
        },
        sc: function(a) {
            g.c.add(this, "setMap");
            this.Io("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        },
        mapChanged: function() {},
        zH: function(a) {
            var b = this;
            g.c.add(this, "addLayer");
            this.add(a, function(a) {
                b.map && (a.D = !0, a.setMap(b.map), a.D = !1)
            });
            return this
        },
        mk: function(a) {
            var b = this;
            g.c.add(this,
                "removeLayer");
            this.remove(a, function(a) {
                a.D = !0;
                a.getMap() === b.map && a.setMap(null);
                a.D = !1
            });
            return this
        },
        Kma: function() {
            var a = this;
            g.c.add(this, "clearLayers");
            this.clear(function(b) {
                b.D = !0;
                b.getMap() === a.map && b.setMap(null);
                b.D = !1
            });
            return this
        },
        Gy: function() {
            g.c.add(this, "hide");
            this.Io("hide");
            return this
        },
        show: function() {
            g.c.add(this, "show");
            this.Io("show");
            return this
        },
        reload: function() {
            this.Io("reload");
            return this
        },
        Db: function() {
            var a = this,
                b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g.c.add(this, "setOptions");
            var c = g.a.keys(b);
            g.a.Ob(c, function(c) {
                a.Io("set", c, b[c])
            });
            return this
        }
    });
    z.o.zL.Pb({
        find: "getLayer",
        FI: "getLayers",
        zH: ["addLayer", "addLayers"],
        Hd: "hasLayer",
        mk: ["removeLayer", "removeLayers"],
        Kma: "clearLayers",
        Ob: "eachLayer",
        sc: "setMap",
        Db: "setOptions",
        show: "show",
        Gy: "hide",
        reload: "reload",
        h: "on",
        G: "off"
    });
    g.jaa = z.Kb.extend({
        r: function(a, b) {
            b && (b.center = b.position, b.zoom = 11);
            arguments.callee.la.apply(this, arguments);
            window.console && window.console.log && window.console.log("高德地图JSAPI街景已下线，感谢您的支持。")
        }
    });
    g.kaa = z.A.sb.extend({
        r: function(a) {
            arguments.callee.la.apply(this, arguments)
        }
    });
    g.vd = {
        Xr: function(a, b) {
            for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.vd.Xwa(a, [b[d], b[e]]));
            return Math.sqrt(c)
        },
        Xwa: function(a, b) {
            return this.LK(a, this.d2(a, b))
        },
        LK: function(a, b) {
            var c = a[0] - b[0],
                d = a[1] - b[1];
            return c * c + d * d
        },
        DFa: function(a, b, c, d) {
            d = d || 1E-6;
            if (c[0] === b[0]) {
                var e = Math.min(b[1], c[1]);
                b = Math.max(b[1], c[1]);
                return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
            }
            var e = Math.min(b[0], c[0]),
                f = Math.max(b[0], c[0]);
            return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
                a[0] >= e && a[0] <= f
        },
        d2: function(a, b) {
            var c = a[0],
                d = a[1],
                e = b[0],
                f = b[1],
                h = e[0],
                e = e[1],
                k = f[0],
                f = f[1],
                l = k - h,
                m = f - e,
                c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
            0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
            return [h, e]
        },
        eq: function(a) {
            for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h;
            return 0 < c
        },
        Pd: function(a, b, c) {
            var d = a[0];
            a = a[1];
            var e = !1,
                f, h, k, l, m = b.length,
                n = 0;
            for (l = m - 1; n < m; l = n, n += 1) {
                var p = !1;
                f = b[n][0];
                h = b[n][1];
                k = b[l][0];
                l = b[l][1];
                if (f === d && h === a || k ===
                    d && l === a) return c ? !0 : !1;
                if (h < a === l >= a) {
                    f = (k - f) * (a - h) / (l - h) + f;
                    if (d === f) return c ? !0 : !1;
                    p = d < f
                }
                p && (e = !e)
            }
            return e
        },
        Z6: function(a, b) {
            function c(a, b, c, d) {
                var e = [a[0] - b[0], a[1] - b[1]],
                    f = [c[0] - d[0], c[1] - d[1]];
                a = a[0] * b[1] - a[1] * b[0];
                c = c[0] * d[1] - c[1] * d[0];
                d = 1 / (e[0] * f[1] - e[1] * f[0]);
                return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
            }

            function d(a, b, c) {
                return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
            }
            var e, f, h, k, l = a;
            e = b[b.length - 2];
            for (var m = 0, n = b.length - 1; m < n; m++) {
                f = b[m];
                var p = l,
                    l = [];
                h = p[p.length - 1];
                for (var q = 0, r =
                    p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k;
                e = f
            }
            if (3 > l.length) return [];
            l.push(l[0]);
            return l
        }
    };
    (function(a) {
        function b(b, c) {
            var d;
            a: {
                switch (b) {
                    case "EPSG3395":
                        d = a.Zh.AV;
                        break a;
                    case "EPSG4326":
                        d = a.Zh.BV;
                        break a
                }
                d = a.Zh.rL
            }
            return {
                project: function(b) {
                    a.a.isArray(b) && (b = new a.U(b[0], b[1]));
                    return d.uD(b, c).rl()
                },
                unproject: function(b) {
                    a.a.isArray(b) && (b = new a.H(b[0], b[1]));
                    return d.TD(b, c).rl()
                },
                normalizePoint: function(b) {
                    return a.a.Ia(b)
                },
                distance: function(b, c) {
                    c = this.normalizePoint(c);
                    if (a.a.isArray(c)) return this.distanceToLine(b, c);
                    b = this.normalizePoint(b);
                    var d = a.Hm.zu,
                        e = Math.cos,
                        f = b.P * d,
                        h =
                            c.P * d,
                        k = 2 * a.Hm.uQ,
                        d = c.Q * d - b.Q * d,
                        e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
                    return k * Math.asin(Math.sqrt(e))
                },
                ringArea: function(b) {
                    b = this.normalizeLine(b);
                    var c = a.Hm.uQ * a.Hm.zu,
                        d = 0,
                        e = b.length;
                    if (3 > e) return 0;
                    for (var f = 0; f < e - 1; f += 1) var h = b[f],
                        k = b[f + 1],
                        u = h.Q * c * Math.cos(h.P * a.Hm.zu),
                        h = h.P * c,
                        v = k.Q * c * Math.cos(k.P * a.Hm.zu),
                        d = d + (u * k.P * c - v * h);
                    f = b[f];
                    b = b[0];
                    e = f.Q * c * Math.cos(f.P * a.Hm.zu);
                    f = f.P * c;
                    k = b.Q * c * Math.cos(b.P * a.Hm.zu);
                    d += e * b.P * c - k * f;
                    return 0.5 * Math.abs(d)
                },
                sphericalCalotteArea: function(b) {
                    var c = a.Hm.uQ;
                    b = c - c *
                        Math.cos(b / c);
                    return 2 * Math.PI * c * b
                }
            }
        }

        function c() {
            return {
                normalizePoint: function(a) {
                    return a && a.x && a.y ? [a.x, a.y] : a
                },
                distance: function(a, b) {
                    var c = a[0] - b[0],
                        d = a[1] - b[1];
                    return Math.sqrt(c * c + d * d)
                },
                project: function(a) {
                    return a
                },
                unproject: function(a) {
                    return a
                },
                ringArea: function(a) {
                    for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                        var q = a[p - 1],
                            r = a[p];
                        b[0] = e[0] - r[0];
                        b[1] = e[1] - r[1];
                        c[0] = e[0] - q[0];
                        c[1] = e[1] - q[1];
                        d += b[0] * c[1] - b[1] * c[0]
                    }
                    return d / 2
                }
            }
        }

        function d(a) {
            for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
                    a[d],
                n = a[d + 1],
                b = b + (n[0] - e[0]) * (n[1] + e[1]);
            if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
            return 0 >= b
        }

        function e(b) {
            this.CLASS_NAME = "AMap.GeometryUtil";
            this.Rb = a.extend({
                onSegmentTolerance: 5,
                crs: "EPSG3857",
                maxZoom: 20
            }, b);
            this.setCrs(this.Rb.crs)
        }
        a.extend(e.prototype, {
            clone: function(b) {
                return new e(a.extend({}, this.Rb, b))
            },
            isPoint: function(b) {
                return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0]))
            },
            normalizePoint: function(a) {
                return a
            },
            normalizeLine: function(a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
                return b
            },
            normalizeMultiLines: function(b) {
                a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
                for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
                return c
            },
            setCrs: function(d) {
                a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Rb.maxZoom))
            },
            distance: function() {
                throw Error("distance Not implemented!");
            },
            nx: function(a, b) {
                a = this.normalizeLine(a);
                this.isPoint(a[0]) || (a = a[0]);
                for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
                !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
                return c
            },
            pja: function(a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
                return b
            },
            closestOnSegment: function(b, c, d) {
                b = a.vd.d2(this.project(b), this.nx([c, d]));
                return this.unproject(b)
            },
            closestOnLine: function(a, b) {
                b = this.normalizeLine(b);
                for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                    var p = this.closestOnSegment(a, b[e], b[e + 1]),
                        q = this.distance(a, p);
                    q < c && (c = q, d = p)
                }
                return d
            },
            distanceToSegment: function(a,
                                        b, c) {
                return this.distanceToLine(a, [b, c])
            },
            distanceToLine: function(a, b) {
                b = this.normalizeLine(b);
                this.isPoint(b[0]) || (b = b[0]);
                for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]),
                    c = Math.min(c, this.distance(a, n));
                return c
            },
            distanceToPolygon: function(a, b) {
                return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
            },
            isPointOnSegment: function(a, b, c, d) {
                if (!d && 0 !== d || 0 > d) d = this.Rb.onSegmentTolerance;
                return this.distanceToSegment(a, b, c) <= d
            },
            isPointOnLine: function(a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e - 1; d++)
                    if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
                return !1
            },
            isPointOnRing: function(a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e; d++)
                    if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
                return !1
            },
            isPointOnPolygon: function(a, b, c) {
                b = this.normalizeMultiLines(b);
                for (var d = 0, e = b.length; d < e; d++)
                    if (this.isPointOnRing(a, b[d], c)) return !0;
                return !1
            },
            makesureClockwise: function(a) {
                d(a) || (a = [].concat(a), a.reverse());
                return a
            },
            makesureAntiClockwise: function(a) {
                d(a) &&
                (a = [].concat(a), a.reverse());
                return a
            },
            isPointInRing: function(b, c) {
                c = this.normalizeLine(c);
                var d = this.nx(c, !0);
                return a.vd.Pd(this.project(b), d, !1)
            },
            isRingInRing: function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (!this.isPointInRing(a[c], b)) return !1;
                c = 0;
                for (d = b.length; c < d; c++)
                    if (this.isPointInRing(b[c], a)) return !1;
                return !0
            },
            isPointInPolygon: function(a, b) {
                b = this.normalizeMultiLines(b);
                for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1);
                return c
            },
            doesSegmentsIntersect: function(a,
                                            b, c, d) {
                var e = this.nx([a, b, c, d]);
                a = e[0];
                b = e[1];
                c = e[2];
                d = e[3];
                var e = !1,
                    n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
                    p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
                a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
                0 !== a && (b = n / a, p /= a, 0 <= b && 1 >= b && 0 <= p && 1 >= p && (e = !0));
                return e
            },
            doesSegmentLineIntersect: function(a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e - 1; d++)
                    if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
                return !1
            },
            doesSegmentRingIntersect: function(a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e; d++)
                    if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0;
                return !1
            },
            doesSegmentPolygonIntersect: function(a, b, c) {
                c = this.normalizeMultiLines(c);
                for (var d = 0, e = c.length; d < e; d++)
                    if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
                return !1
            },
            doesLineLineIntersect: function(a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++)
                    if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            },
            doesLineRingIntersect: function(a, b) {
                a = this.normalizeLine(a);
                for (var c =
                    0, d = a.length; c < d - 1; c++)
                    if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            },
            doesPolygonPolygonIntersect: function(a, b) {
                return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1
            },
            doesRingRingIntersect: function(a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d; c++)
                    if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0;
                return !1
            },
            iP: function(a, b) {
                for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                    var e = this.distance(a[d], a[d + 1]);
                    if (e + c < b) c += e;
                    else return c =
                        (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
                }
                return null
            },
            sX: function(a, b) {
                function c() {
                    var a = [e[0] - n[0], e[1] - n[1]],
                        b = [p[0] - q[0], p[1] - q[1]],
                        d = e[0] * n[1] - e[1] * n[0],
                        f = p[0] * q[1] - p[1] * q[0],
                        h = 1 / (a[0] * b[1] - a[1] * b[0]);
                    return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
                }

                function d(a) {
                    return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
                }
                a = this.makesureAntiClockwise(a);
                b = this.makesureClockwise(b);
                var e, n, p, q, r = a;
                e = b[b.length - 1];
                for (var s = 0, u = b.length; s < u; s++) {
                    n = b[s];
                    var v = r,
                        r = [];
                    p = v[v.length -
                    1];
                    for (var w = 0, t = v.length; w < t; w++) q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
                    e = n
                }
                return r
            },
            ringRingClip: function(a, b) {
                a = this.nx(a);
                b = this.nx(b);
                var c = this.sX(a, b);
                0 == c.length && (c = this.sX(b, a));
                return this.pja(c)
            },
            ringArea: function() {
                throw Error("distance Not implemented!");
            },
            distanceOfLine: function(a) {
                a = this.normalizeLine(a);
                for (var b = 0, c = 0, d = a.length; c < d - 1; c++) b += this.distance(a[c], a[c + 1]);
                return b
            },
            isClockwise: function(a) {
                a = this.nx(a);
                return d(a)
            }
        });
        a.$q = new e;
        a.Gj = new e;
        a.Gj.setCrs("plane")
    })(g);
    g.tL = function() {
        var a = {};
        (function() {
            function b(a) {
                for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f],
                    k = a[f + 1],
                    b = b + (k[0] - h[0]) * (k[1] + h[1]);
                if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]);
                return 0 >= b
            }
            a.Ksa = function(a) {
                b(a) && (a = [].concat(a), a.reverse());
                return a
            };
            a.S4 = b
        })();
        (function() {
            function b(a) {
                var b = a.length;
                2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
            }

            function c(a, b) {
                for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
            }
            a.Vh = function(a, e) {
                var f =
                        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                    h = arguments[3];
                e = e || [];
                var k = [],
                    l = [];
                b(a);
                c(k, a);
                var m = a.length;
                e.forEach(b);
                for (var n = 0; n < e.length; n++) l.push(m), m += e[n].length, c(k, e[n]);
                l = (this.VK ? this.VK : g.Ac.VK)(k, l);
                if (h) {
                    f = [];
                    for (n = 0; n < l.length; n += 1) h = 2 * l[n], f.push([k[h], k[h + 1]]);
                    return f
                }
                if (f)
                    for (n = 0; n < l.length; n += 1) l[n] += f;
                return l
            }
        })();
        return a
    };
    (function(a) {
        a.aF = function() {
            function a(b, c, d, e, f) {
                for (var h, k = 0, l = c, n = d - e; l < d; l += e) k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l;
                if (f === 0 < k)
                    for (f = c; f < d; f += e) h = r(f, b[f], b[f + 1], h);
                else
                    for (f = d - e; f >= c; f -= e) h = r(f, b[f], b[f + 1], h);
                h && m(h, h.next) && (s(h), h = h.next);
                return h
            }

            function c(a, b) {
                if (!a) return a;
                b || (b = a);
                var c = a,
                    d;
                do
                    if (d = !1, c.C8 || !m(c, c.next) && 0 !== l(c.Ga, c, c.next)) c = c.next;
                    else {
                        s(c);
                        c = b = c.Ga;
                        if (c === c.next) break;
                        d = !0
                    }
                while (d || c !== b);
                return b
            }

            function d(a, b, e, f, r, u, C) {
                if (a) {
                    if (!C && u) {
                        var F = a,
                            A = F;
                        do null === A.z &&
                        (A.z = h(A.x, A.y, f, r, u)), A.Yo = A.Ga, A = A.hl = A.next; while (A !== F);
                        A.Yo.hl = null;
                        A.Yo = null;
                        var F = A,
                            B, G, H, I, M, L, P = 1;
                        do {
                            A = F;
                            H = F = null;
                            for (I = 0; A;) {
                                I++;
                                G = A;
                                for (B = M = 0; B < P && (M++, G = G.hl, G); B++);
                                for (L = P; 0 < M || 0 < L && G;) 0 !== M && (0 === L || !G || A.z <= G.z) ? (B = A, A = A.hl, M--) : (B = G, G = G.hl, L--), H ? H.hl = B : F = B, B.Yo = H, H = B;
                                A = G
                            }
                            H.hl = null;
                            P *= 2
                        } while (1 < I)
                    }
                    for (F = a; a.Ga !== a.next;) {
                        A = a.Ga;
                        G = a.next;
                        if (u) a: if (H = a.Ga, I = a.next, 0 <= l(H, a, I)) H = !1;
                        else {
                            M = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
                            P = h(H.x >
                            a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
                            for (B = a.hl; B && B.z <= P;) {
                                if (B !== a.Ga && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Ga, B, B.next)) {
                                    H = !1;
                                    break a
                                }
                                B = B.hl
                            }
                            for (B = a.Yo; B && B.z >= M;) {
                                if (B !== a.Ga && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B.y) && 0 <= l(B.Ga, B, B.next)) {
                                    H = !1;
                                    break a
                                }
                                B = B.Yo
                            }
                            H = !0
                        } else a: if (H = a.Ga, I = a.next, 0 <= l(H, a, I)) H = !1;
                        else {
                            for (M = a.next.next; M !== a.Ga;) {
                                if (k(H.x, H.y, a.x, a.y, I.x, I.y, M.x, M.y) && 0 <= l(M.Ga, M, M.next)) {
                                    H = !1;
                                    break a
                                }
                                M = M.next
                            }
                            H = !0
                        } if (H) b.push(A.le /
                            e), b.push(a.le / e), b.push(G.le / e), s(a), F = a = G.next;
                        else if (a = G, a === F) {
                            if (C)
                                if (1 === C) {
                                    C = b;
                                    F = e;
                                    A = a;
                                    do G = A.Ga, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.le / F), C.push(A.le / F), C.push(H.le / F), s(A), s(A.next), A = a = H), A = A.next; while (A !== a);
                                    a = A;
                                    d(a, b, e, f, r, u, 2)
                                } else {
                                    if (2 === C) a: {
                                        C = a;
                                        do {
                                            for (F = C.next.next; F !== C.Ga;) {
                                                if (A = C.le !== F.le)
                                                    if (A = void 0, A = C.next.le !== F.le)
                                                        if (A = void 0, A = C.Ga.le !== F.le) {
                                                            A = A = void 0;
                                                            b: {
                                                                A = C;
                                                                do {
                                                                    if (A.le !== C.le && A.next.le !== C.le && A.le !== F.le && A.next.le !== F.le && n(A, A.next, C,
                                                                        F)) {
                                                                        A = !0;
                                                                        break b
                                                                    }
                                                                    A = A.next
                                                                } while (A !== C);
                                                                A = !1
                                                            }
                                                            if (A = !A)
                                                                if (A = void 0, A = p(C, F))
                                                                    if (A = void 0, A = p(F, C)) {
                                                                        A = C;
                                                                        G = !1;
                                                                        H = (C.x + F.x) / 2;
                                                                        I = (C.y + F.y) / 2;
                                                                        do A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G), A = A.next; while (A !== C);
                                                                        A = G
                                                                    }
                                                        }
                                                if (A) {
                                                    a = q(C, F);
                                                    C = c(C, C.next);
                                                    a = c(a, a.next);
                                                    d(C, b, e, f, r, u);
                                                    d(a, b, e, f, r, u);
                                                    break a
                                                }
                                                F = F.next
                                            }
                                            C = C.next
                                        } while (C !== a)
                                    }
                                } else d(c(a), b, e, f, r, u, 1);
                            break
                        }
                    }
                }
            }

            function e(a, b) {
                return a.x - b.x
            }

            function f(a, b) {
                var c = b,
                    d = a.x,
                    e = a.y,
                    f = -Infinity,
                    h;
                do {
                    if (e <= c.y && e >= c.next.y &&
                        c.next.y !== c.y) {
                        var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                        if (l <= d && l > f) {
                            f = l;
                            if (l === d) {
                                if (e === c.y) return c;
                                if (e === c.next.y) return c.next
                            }
                            h = c.x < c.next.x ? c : c.next
                        }
                    }
                    c = c.next
                } while (c !== b);
                if (!h) return null;
                if (d === f) return h.Ga;
                for (var l = h, m = h.x, n = h.y, s = Infinity, r, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (r = Math.abs(e - c.y) / (d - c.x), (r < s || r === s && c.x > h.x) && p(c, a) && (h = c, s = r)), c = c.next;
                return h
            }

            function h(a, b, c, d, e) {
                a = 32767 * (a - c) * e;
                b = 32767 * (b - d) * e;
                a = (a | a << 8) & 16711935;
                a = (a | a << 4) & 252645135;
                a = (a | a << 2) & 858993459;
                b = (b | b << 8) & 16711935;
                b = (b | b << 4) & 252645135;
                b = (b | b << 2) & 858993459;
                return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
            }

            function k(a, b, c, d, e, f, h, k) {
                return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k)
            }

            function l(a, b, c) {
                return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
            }

            function m(a, b) {
                return a.x === b.x && a.y === b.y
            }

            function n(a, b, c, d) {
                return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
            }

            function p(a,
                       b) {
                return 0 > l(a.Ga, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ga, b) : 0 > l(a, b, a.Ga) || 0 > l(a, a.next, b)
            }

            function q(a, b) {
                var c = new u(a.le, a.x, a.y),
                    d = new u(b.le, b.x, b.y),
                    e = a.next,
                    f = b.Ga;
                a.next = b;
                b.Ga = a;
                c.next = e;
                e.Ga = c;
                d.next = c;
                c.Ga = d;
                f.next = d;
                d.Ga = f;
                return d
            }

            function r(a, b, c, d) {
                a = new u(a, b, c);
                d ? (a.next = d.next, a.Ga = d, d.next.Ga = a, d.next = a) : (a.Ga = a, a.next = a);
                return a
            }

            function s(a) {
                a.next.Ga = a.Ga;
                a.Ga.next = a.next;
                a.Yo && (a.Yo.hl = a.hl);
                a.hl && (a.hl.Yo = a.Yo)
            }

            function u(a, b, c) {
                this.le = a;
                this.x = b;
                this.y = c;
                this.hl = this.Yo =
                    this.z = this.next = this.Ga = null;
                this.C8 = !1
            }
            return {
                VK: function(h, k, l) {
                    l = l || 2;
                    var m = k && k.length,
                        n = m ? k[0] * l : h.length,
                        p = a(h, 0, n, l, !0),
                        s = [];
                    if (!p) return s;
                    var r, u, B, G;
                    if (m) {
                        var H = l,
                            m = [],
                            I, M, L;
                        G = 0;
                        for (I = k.length; G < I; G++) {
                            M = k[G] * H;
                            L = G < I - 1 ? k[G + 1] * H : h.length;
                            M = a(h, M, L, H, !1);
                            M === M.next && (M.C8 = !0);
                            var P = L = M;
                            do L.x < P.x && (P = L), L = L.next; while (L !== M);
                            m.push(P)
                        }
                        m.sort(e);
                        for (G = 0; G < m.length; G++) {
                            k = m[G];
                            H = p;
                            if (H = f(k, H)) k = q(H, k), c(k, k.next);
                            p = c(p, p.next)
                        }
                    }
                    if (h.length > 80 * l) {
                        r = B = h[0];
                        u = m = h[1];
                        for (H = l; H < n; H += l) G = h[H], k =
                            h[H + 1], G < r && (r = G), k < u && (u = k), G > B && (B = G), k > m && (m = k);
                        B = Math.max(B - r, m - u);
                        B = 0 !== B ? 1 / B : 0
                    }
                    d(p, s, l, r, u, B);
                    return s
                }
            }
        };
        a.r$ = a.aF()
    })(g);
    (function(a) {
        function b(a) {
            var b = a.length;
            2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
        }

        function c(a, b) {
            for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
        }
        a.On = {
            mi: function(a) {
                for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
                return 0.5 * c
            },
            S4: function(b) {
                return 0 > a.On.mi(b)
            },
            normalize: function(b) {
                var c;
                if (b) {
                    c = [];
                    for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].Q, b[f].P] : b[f] instanceof a.H ? [b[f].x, b[f].y] :
                        b[f]
                }
                return c
            },
            Vh: function(d, e) {
                e = e || [];
                var f = [],
                    h = [];
                b(d);
                c(f, d);
                var k = d.length;
                e.forEach(b);
                for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
                return a.r$.VK(f, h)
            }
        }
    })(g);
    g.ZH = function(a, b, c) {
        g.c.add({
            CLASS_NAME: "convertFrom"
        }, b);
        var d = g.w.Ud + "/v3/assistant/coordinate/convert";
        a = g.a.Ia(a);
        var e = [];
        if (a instanceof Array) {
            for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
            e = e.join(";")
        } else e = a + "";
        b = ["key=" + g.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
        d += 0 < b.length ? "?" + b.join("&") : "";
        d = new g.fb.tb(d, {
            callback: "callback"
        });
        d.h("complete", function(a) {
            if ("1" === a.status) {
                a = a.locations.split(";");
                for (var b = 0; b < a.length; b += 1) {
                    var d = a[b].split(",");
                    a[b] = new AMap.LngLat(d[0],
                        d[1])
                }
                c && "function" === typeof c && c("complete", {
                    info: "ok",
                    locations: a
                })
            } else c && "function" === typeof c && c("error", a.info)
        }, this);
        d.h("error", function(a) {
            c && "function" === typeof c && c("error", a.info)
        }, this)
    };
    g.fb = g.fb || {};
    g.fb.PL = g.aa.extend({
        ka: [g.va],
        r: function(a, b) {
            this.B = {
                callback: "cbk",
                type: "json",
                charset: "utf-8"
            };
            b = b || {};
            g.a.Db(this, b);
            this.url = a;
            this.send(a, b.Ad, b.l2, b.G7, b.responseType)
        },
        send: function(a) {
            var b = g.j.create("script");
            b.type = "text/javascript";
            b.charset = this.B.charset;
            var c = this;
            g.l.ye ? b.onreadystatechange = function() {
                "loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete")
            } : (b.onload = function() {
                c.q("complete")
            }, b.onerror = function() {
                c.q("error", {
                    status: 0,
                    info: "service error",
                    url: a
                })
            });
            b.src = a;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    });
    g.fb.tb = g.fb.PL.extend({
        sma: function() {
            if (g.a.Y7) return g.a.NK.push(this), !0
        },
        Xva: function() {
            this.q("error", {
                info: "TIME_OUT_A"
            })
        },
        send: function(a, b, c, d) {
            function e() {
                window[f] = null;
                try {
                    window[f] = null
                } catch (a) {}
                h.onerror = null;
                h.parentNode && h.parentNode.removeChild(h)
            }
            if (!this.B.Qx || !this.sma()) {
                a = encodeURI(a);
                var f = this.B.fun;
                if (!f || window[f]) f = g.a.z3("jsonp_", 6) + "_";
                var h = document.createElement("script");
                h.type = "text/javascript";
                h.charset = "utf-8";
                h.async = !0;
                var k = this;
                g.l.ye || (h.onerror = function() {
                    e();
                    k.q("error", {
                        info: "REQUEST_FAILED",
                        url: a
                    })
                });
                window[f] = function(a) {
                    e();
                    if (k.B.callbackFunction) k.B.callbackFunction.call(k.B.context, a);
                    else if (3E4 === a.errcode && a.data) g.a.Y7 = !0, g.rb.load("AMap.AntiCrabFrame", function() {
                        g.a.Qx || (g.a.Qx = new g.c$);
                        g.a.NK.push(k);
                        g.a.Qx.open(k.B.Ad, a.data.host, k.ND || "", k.url)
                    });
                    else {
                        if (a instanceof Array || "string" === typeof a) a = {
                            data: a
                        };
                        a.cDa = f;
                        k.q("complete", a)
                    }
                };
                b = "?"; - 1 !== a.indexOf("?") && (b = "&");
                b = a + b + this.B.callback + "=" + f;
                if (-1 !== a.indexOf(g.w.Ud + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
                    -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.w.ju), b += "&csid=" + g.a.F9(), b += "&sdkversion=" + g.w.zr;
                if (c = this.B.nI) {
                    var l = [],
                        m;
                    for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
                    k.ND = l.join("&")
                }
                h.src = d ? b + "&rereq=true" : b;
                g.fb.tb.pda = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
                g.fb.tb.pda.appendChild(h)
            }
        }
    });
    g.fb.XMLHttpRequest = g.fb.PL.extend({
        send: function(a, b, c, d, e) {
            var f = this;
            if ((g.l.ye || g.l.z4) && window.XDomainRequest) {
                var h = this.V9 = new XDomainRequest;
                h.onerror = function(b) {
                    f.q("error", {
                        url: a,
                        data: b
                    })
                };
                h.onload = function() {
                    f.q("complete", {
                        url: a,
                        data: h.responseText
                    })
                };
                h.open(b || "GET", a);
                setTimeout(function() {
                    h.send(c || void 0)
                }, 0)
            } else {
                var k = this.V9 = new XMLHttpRequest;
                k.onreadystatechange = function() {
                    4 === k.readyState && 200 === k.status ? f.q("complete", {
                            url: a,
                            data: "arraybuffer" === k.responseType ? k.response : k.responseText
                        }) :
                        404 === k.status && (k.abort(), f.q("error", {
                            url: a,
                            data: "404"
                        }))
                };
                k.onerror = function(b) {
                    k.abort();
                    f.q("error", {
                        url: a,
                        data: b
                    })
                };
                k.open(b || "GET", a);
                "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
                e && (k.responseType = e);
                k.send(c || void 0)
            }
        },
        abort: function() {
            this.V9.abort()
        }
    });
    for (var $ = {
        v: "1.4.15",
        Pixel: g.H,
        LngLat: g.U,
        Size: g.wd,
        Bounds: g.re,
        ArrayBounds: g.hp,
        PixelBounds: g.Nf,
        Panorama: g.jaa,
        PanoramaMarker: g.kaa,
        Map: z.Kb,
        View2D: z.xF,
        GroundImage: z.o.uL,
        Marker: z.A.sb,
        ImageMarker: z.A.Iza,
        Text: z.A.kW,
        Icon: z.A.ci,
        MarkerShape: z.A.aaa,
        Polyline: z.A.Yb,
        BezierCurve: z.A.$z,
        Polygon: z.A.zc,
        Circle: z.A.ah,
        CircleMarker: z.A.vV,
        Ellipse: z.A.rt,
        Rectangle: z.A.xt,
        ContextMenu: z.A.Jn,
        InfoWindow: z.A.Re,
        Buildings: z.o.h$,
        TileLayer: z.o.ob,
        ImageLayer: z.o.iA,
        CanvasLayer: z.o.j$,
        VideoLayer: z.o.Qaa,
        VectorLayer: z.o.bd,
        MassMarks: z.o.caa,
        CompositeLayer: z.o.n$,
        LabelsLayer: z.o.ar,
        LabelMarker: z.A.U$,
        LayerGroup: z.o.zL,
        OverlayGroup: z.A.Ln,
        GeoJSON: z.A.GV,
        CANVAS: "canvas",
        DOM: "dom",
        convertFrom: g.ZH,
        Http: {
            JSONP: g.fb.tb
        },
        event: {
            CLASS_NAME: "AMap.event"
        }
    }, wc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), xc = 0; xc < wc.length; xc += 1) $.event[wc[xc]] = function() {
        var a = g.event[wc[xc]],
            b = wc[xc];
        return function() {
            g.c.wa($.event);
            g.c.add($.event, b);
            return a.apply(g.event, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil = {
        CLASS_NAME: "AMap.GeometryUtil"
    };
    for (var Hc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), xc =
        0; xc < Hc.length; xc += 1) $.GeometryUtil[Hc[xc]] = function() {
        var a = g.$q[Hc[xc]],
            b = Hc[xc];
        return function() {
            g.c.wa($.GeometryUtil);
            g.c.add($.GeometryUtil, b);
            return a.apply(g.$q, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil.triangulateShape = function(a, b) {
        g.c.wa($.GeometryUtil);
        g.c.add($.GeometryUtil, "triangulateShape");
        a = g.On.normalize(a);
        b = g.On.normalize(b);
        return g.On.Vh(a, b)
    };
    $.PlaneGeometryUtil = {
        CLASS_NAME: "AMap.PlaneGeometryUtil"
    };
    for (xc = 0; xc < Hc.length; xc += 1) $.PlaneGeometryUtil[Hc[xc]] = function() {
        var a = g.Gj[Hc[xc]],
            b = Hc[xc];
        return function() {
            g.c.wa($.PlaneGeometryUtil);
            g.c.add($.PlaneGeometryUtil, b);
            return a.apply(g.Gj, Array.prototype.slice.call(arguments))
        }
    }();
    $.PlaneGeometryUtil.triangulateShape = function(a, b) {
        g.c.wa($.PlaneGeometryUtil);
        g.c.add($.PlaneGeometryUtil, "triangulateShape");
        a = g.On.normalize(a);
        b = g.On.normalize(b);
        return g.On.Vh(a, b)
    };
    $.plugin = $.service = z.Kb.prototype.plugin;
    $.TileLayer.Satellite = z.o.ob.eW;
    $.TileLayer.RoadNet = z.o.ob.bW;
    $.TileLayer.google = z.o.ob.eF;
    $.TileLayer.Flexible = z.o.ob.fA;
    $.TileLayer.WMS = z.o.ob.Raa;
    $.TileLayer.WMTS = z.o.ob.Saa;
    $.TileLayer.Traffic = z.o.ob.mW;
    $.Panorama.Events = z.event;
    $.TileLayer.PanoramaLayer = z.o.ob.Qza;
    $.UA = {
        ie: g.l.os,
        ielt9: g.l.ye,
        ielt11: g.l.$qa,
        mobile: g.l.ba,
        android: g.l.Rl,
        ios: g.l.lD
    };
    $.Browser = {
        ua: navigator.userAgent,
        mobile: g.l.ba,
        plat: g.l.jz,
        mac: g.l.Wy,
        windows: g.l.bza,
        ios: g.l.lD,
        iPad: g.l.Tqa,
        iPhone: g.l.Uqa,
        android: g.l.Rl,
        android23: g.l.ola,
        chrome: g.l.chrome,
        firefox: g.l.JQ,
        safari: g.l.hE,
        wechat: g.l.N9,
        uc: g.l.rya,
        qq: g.l.bva,
        ie: g.l.os,
        ie6: g.l.vi,
        ie7: g.l.dv,
        ie8: g.l.ye && !g.l.dv && !g.l.vi,
        ie9: g.l.z4,
        ie10: g.l.y4,
        ie11: g.l.Xqa,
        edge: g.l.zoa,
        ielt9: g.l.ye,
        baidu: g.l.GH,
        isLocalStorage: g.l.ys,
        isGeolocation: !!navigator.geolocation,
        mobileWebkit: g.l.eta,
        mobileWebkit3d: g.l.V5,
        mobileOpera: !!g.l.dta,
        retina: g.l.Mc,
        touch: !!g.l.If,
        msPointer: !!g.l.X5,
        pointer: !!g.l.hT,
        webkit: g.l.L9,
        ie3d: g.l.Yqa,
        webkit3d: g.l.M9,
        gecko3d: g.l.opa,
        opera3d: g.l.Xta,
        any3d: g.l.BH,
        isCanvas: g.l.$k,
        isSvg: g.l.Lo,
        isVML: g.l.os,
        isWorker: !!window.Worker,
        isWebsocket: !!window.WebSocket,
        isWebGL: function() {
            for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
                try {
                    c = a.getContext(b[d])
                } catch (e) {}
                if (c)
                    if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break;
                    else return !0
            }
            return !1
        }
    };
    $.Util = {
        CLASS_NAME: "AMap.Util"
    };
    var Ic = {
        colorNameToHex: g.a.UH,
        rgbHex2Rgba: g.a.K7,
        argbHex2Rgba: g.a.Er,
        isEmpty: g.a.rh,
        deleteItemFromArray: g.a.gy,
        deleteItemFromArrayByIndex: g.a.uo,
        indexOf: g.a.indexOf,
        format: g.a.kc,
        isArray: g.a.isArray,
        isDOM: g.a.nJ,
        includes: g.a.ka,
        requestIdleCallback: g.a.PT,
        cancelIdleCallback: g.a.GP,
        requestAnimFrame: g.a.Sc,
        cancelAnimFrame: g.a.pi,
        color2RgbaArray: g.a.Tl,
        color2Rgba: g.a.Xma
    };
    for (xc in Ic) Ic.hasOwnProperty(xc) && "function" == typeof Ic[xc] && ($.Util[xc] = function() {
        var a = xc;
        return function() {
            g.c.wa($.Util);
            g.c.add($.Util, a);
            return Ic[a].apply(g.a, Array.prototype.slice.call(arguments))
        }
    }());
    $.DomUtil = {
        CLASS_NAME: "AMap.DomUtil"
    };
    var Jc = {
        getViewport: g.j.VI,
        getViewportOffset: g.j.wR,
        create: g.j.create,
        setClass: g.j.swa,
        hasClass: g.j.rn,
        addClass: g.j.Sa,
        removeClass: g.j.ab,
        setOpacity: g.j.Gq,
        rotate: g.j.rotate,
        setCss: g.j.Wa,
        empty: g.j.aE,
        remove: g.j.remove,
        TRANSFORM: g.j.mg,
        TRANSITION: g.j.tF
    };
    for (xc in Jc) Jc.hasOwnProperty(xc) && "function" == typeof Jc[xc] && ($.DomUtil[xc] = function() {
        var a = xc;
        return function() {
            g.c.wa($.DomUtil);
            g.c.add($.DomUtil, a);
            return Jc[a].apply(g.j, Array.prototype.slice.call(arguments))
        }
    }());
    var Kc = g.w;
    $.User = {
        key: Kc.key
    };
    window.AMap = $;
    window.AMap.BuryPoint = g.BuryPoint;
    window.AMap.Class = g.aa;
    if (!Kc.vD && "undefined" !== typeof arguments && arguments.callee) try {
        if (g.l.ys && window.localStorage) {
            var Lc = window.localStorage["_AMap_" + g.GJ];
            Lc && JSON.parse(Lc).version === Kc.Cj || window.localStorage.setItem("_AMap_" + g.GJ, JSON.stringify({
                version: Kc.Cj,
                script: "(" + arguments.callee + ")(config)"
            }));
            new g.fb.tb(Kc.yb + "/maps/cookie?key=amap_ver&value=" + Kc.Cj, {
                callback: "callback"
            })
        }
    } catch (Mc) {};
    g.Dj = g.aa.extend({
        r: function(a, b, c, d) {
            this.start = a;
            this.end = b;
            this.transition = c;
            this.precision = d || 0;
            this.Kv = !1;
            this.update = g.a.bind(this.update, this);
            return this
        },
        Dn: function(a) {
            this.eh = this.startTime = +new Date;
            this.frames = 0;
            this.Kv = !0;
            this.mo = g.a.Sc(this.update);
            this.bia = g.a.bind(this.tq, a || this)
        },
        update: function() {
            this.frames += 1;
            var a = +new Date,
                b = a - this.startTime,
                b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.eh) : null;
            "number" === typeof b && Math.abs(b - this.end) < this.precision ?
                (this.stop(), b = this.end) : this.mo = g.a.Sc(this.update);
            this.eh = a;
            this.bia(b)
        },
        stop: function(a) {
            g.a.pi(this.mo);
            a && this.update();
            this.Kv = !1
        }
    });
    g.Dj.Easing = {
        Linear: {
            None: function(a) {
                return a
            }
        },
        Bounce: {
            In: function(a) {
                return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
            },
            Out: function(a) {
                return g.Dj.Easing.Bounce.In(1 - a)
            }
        },
        Cubic: {
            In: function(a) {
                return 1 - a * a * a
            },
            Out: function(a) {
                a = 1 - a;
                return 1 - a * a * a
            }
        }
    };
    g.Kb = g.aa.extend({
        ka: [g.va, g.Se, g.xJ],
        r: function(a, b) {
            this.nc = g.a.bind(this.nc, this);
            this.C = b;
            this.hj = b.hj;
            this.wm = "";
            this.dh = this.Hg = this.Qk = !1;
            this.Sn = {};
            this.K = a;
            this.dga();
            this.tra();
            this.W("zooms", b, !0);
            this.W("size", b, !0);
            this.W("limitBounds", b);
            this.W("view", b);
            this.W("nolimg", b, !0);
            this.W("mapNumber", b, !0);
            this.W("lang", b, !0);
            this.W("features", b, !0);
            this.W("styleID", b, !0);
            this.W("forceBig", b, !0);
            this.W("mode", b, !0);
            this.W("showBuildingBlock", b, !0);
            this.W("mapStyle", b);
            var c = this.get("mapStyle");
            this.ue = g.w.ue[c] || g.w.ue["default"];
            this.uH = "#a3ccff";
            this.LB = b.get("skyColor") || "#cce0ff";
            g.w.wQ && this.W("editEnable", b);
            g.w.wQ && this.xd ? this.W("style", b, !0) : this.W("styleUrl", b);
            this.W("hightlight", b, !0);
            this.W("labelzIndex", b, !0);
            if (g.l.MK) {
                c = new z.o.ob({
                    innerLayer: !0,
                    zIndex: b.get("labelzIndex"),
                    visible: !1
                });
                this.Cc = new g.o.Jj(c, this, ["point", "road"]);
                this.Cc.type = "矢量标注";
                var d = this.C.get("defaultLayer");
                d && c.W("rejectMapMask", d, !0);
                b.labelsLayer = this.Cc.T;
                this.Cc.T.h("complete",
                    this.mr, this, !0);
                this.Cc.T.h("renderComplete", this.mr, this);
                this.Cc.fB = this.Cc.Rg = !0
            }
            this.W("isHotspot", b, !0);
            this.W("layers", b);
            this.W("overlays", b);
            this.W("infos", b, !0);
            this.W("contextmenus", b, !0);
            this.W("controls", b);
            this.W("bounds", b);
            this.W("draw", b);
            this.Ue("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign vectorMapForeign".split(" "), b);
            this.Ue("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),
                b, !0);
            this.get("jogEnable") ? this.fv = !0 : this.fv = !1;
            this.tfa();
            this.Afa();
            this.TY && this.TY();
            this.W("resizeEnable", b);
            this.C.map = this;
            c = this.get("size");
            c = c.width * c.height / 65536;
            g.l.Mc && 3 < c && (this.s1 = !0);
            this.V = {
                Fd: !1
            };
            this.vK()
        },
        editEnableChanged: function() {
            this.xd = this.get("editEnable")
        },
        labelzIndexChanged: function() {
            this.Cc && this.Cc.set("zIndex", this.get("labelzIndex"))
        },
        styleChanged: function() {
            this.el = !0
        },
        mapStyleChanged: function() {
            if (this.C.xi) {
                this.wm && (this.set("style", ""), this.xu = this.wm = "");
                var a = this.get("mapStyle");
                this.el = !0;
                this.ue = g.w.ue[a] || g.w.ue["default"];
                this.$D()
            }
        },
        styleUrlChanged: function() {
            if (this.C.xi) {
                var a = this.get("styleUrl") || "";
                if (a !== this.wm) {
                    var b = -1 !== a.indexOf("?isPublic=true"),
                        a = a.substr(0, 46),
                        c = a.split("amap://styles/")[1];
                    "normal" === c ? (this.wm = "", this.set("nolimg", !!this.C.get("nolimg_param")), this.set("style", ""), this.xu = "") : (this.Mz = !0, this.set("nolimg", !0), b = new g.fb.tb(32 > c.length ? g.w.Fc + "://webapi.amap.com/style?name=" + c + "&key=" + g.w.key : g.w.Fc + "://webapi.amap.com/v4/map/styles?styleid=" +
                        c + "&s=rsv3&key=" + g.w.key + (b ? "&ispublic=1" : ""), {
                        callback: "callback"
                    }), b.h("complete", function(a) {
                        a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
                        this.Mz = !1
                    }, this), b.h("error", function() {
                        this.Mz = !1
                    }, this), this.wm = a, this.$D())
                }
            }
        },
        a8: function(a) {
            this.K.style.background = a
        },
        qpa: function(a) {
            var b = this.get("center");
            if (a.contains(b)) return null;
            a = g.$q.closestOnLine(b, a.CU().path);
            return new g.U(a[0], a[1])
        },
        uma: function() {
            var a = this.get("limitBounds"),
                b = this.get("bounds");
            b.tc && b.tc.Q > b.lc.Q && (b.lc.Q += 360);
            if (!a.contains(b)) {
                if (b instanceof g.hp) return this.qpa(a, b);
                var c = this.get("center").lb();
                a.qj() < b.qj() ? c.Q = a.ti().Q : (a.tc.Q > b.tc.Q && (c.Q += a.tc.Q - b.tc.Q), a.lc.Q < b.lc.Q && (c.Q += a.lc.Q - b.lc.Q));
                a.oj() < b.oj() ? c.P = a.ti().P : (a.tc.P > b.tc.P && (c.P += a.tc.P - b.tc.P), a.lc.P < b.lc.P && (c.P += a.lc.P - b.lc.P));
                return c
            }
        },
        BO: function() {
            var a = this.lU;
            this.C.refreshSize();
            var b = this.get("size");
            b && a && !b.cb(a) && (this.lU = b, this.Pv = !0, this.set("display"), this.H7(b), this.get("resizeEnable") &&
            this.pa("resize", {
                xta: a,
                g6: b
            }))
        },
        I_: function() {
            var a = this;
            a.BO();
            a.vO = setTimeout(function() {
                a.I_()
            }, 200)
        },
        xca: function() {
            this.vO && (clearTimeout(this.vO), this.vO = null)
        },
        dga: function() {
            this.C.D = !0;
            this.lU = this.C.getSize();
            this.C.D = !1;
            if (g.l.ye || g.l.N9 && g.l.lD || g.l.Tsa) this.I_();
            else {
                var a = this;
                g.F.ila(this.K, function(b) {
                    a.BO(b)
                })
            }
        },
        tra: function() {
            var a = this.K;
            g.j.Sa(a, "amap-container");
            var b = {};
            b.$c = g.j.create("div", a, "amap-maps");
            this.Gl = g.j.create("div", a);
            this.Gl.style.display = "none";
            b.Kr = g.j.create("div",
                b.$c, "amap-drags");
            b.o = g.j.create("div", b.Kr, "amap-layers");
            b.A = g.j.create("div", b.Kr, "amap-overlays");
            b.controls = g.j.create("div", a, "amap-controls");
            b.qv = g.j.create("a", a, "amap-logo");
            var c = window.location.host; - 1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.qv.href = g.l.ba ? "http://m.amap.com" : "http://gaode.com", b.qv.target = "_blank");
            g.j.create("img", b.qv).src = g.l.Mc ? this.C.B.logoUrlRetina : this.C.B.logoUrl;
            b.jn = g.j.create("div", a, "amap-copyright");
            b.jn.style.display = "none";
            350 < g.j.VI(this.K).width &&
            (b.jn.innerHTML = this.C.B.copyright, b.jn.K5 = g.j.create("span", b.jn, "amap-mcode"), this.$D());
            this.Ta = b
        },
        $D: function() {
            var a = this.get("layers");
            if (a) {
                for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                    var e = a[d].get("mapNumber"),
                        f = a[d].get("zIndex", null, !0);
                    e && f > b && a[d].get("visible") && (c = e, b = f)
                }
                this.set("mapNumber", c);
                this.C.D = !0;
                a = this.C.getMapStyle();
                this.C.D = !1;
                "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Ta.jn.style.visibility = "hidden", this.Ta.qv.style.display = "none");
                c && this.Ta.jn.K5 &&
                (this.Ta.jn.K5.innerHTML = "- " + c + "号", this.Ta.jn.style.visibility = "visible", this.Ta.qv.style.display = "block");
                return c
            }
        },
        YX: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
            g.Hj && (a ? g.Hj.flush() : this.b3 || (this.b3 = g.a.Sc(function() {
                g.Hj.flush();
                this.b3 = null
            }, this)))
        },
        DT: function(a) {
            var b = this,
                c = this.C.get("rasterLayer");
            c && (this.C.set("rasterLayer", void 0), this.C.m7 = !0, this.C.lk = this.C.Ka, this.Xk && (this.Xk.$I = !1), c.o && (c.o.NJ = !0), a || (this.ET = g.a.PT(function() {
                b.ET = null;
                b.C && b.C.mk(c)
            })));
            a && this.ET && g.a.GP(this.ET)
        },
        mr: function() {
            function a() {
                for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                    var e = a[c].get("zooms");
                    if (!(a[c].lk || a[c].I4 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].o && a[c].o.fa && 0 === a[c].o.fa.length || a[c].o && a[c].o.NJ || a[c].o && a[c].o.Ka)) return !1
                }
                a = d.C.get("features");
                return ("all" === a || g.a.ka(a, "point")) && d.Cc && d.Cc.get("visible") && 0 < d.Cc.fa.length && !d.Cc.Ka && !d.Cc.eo ? !1 : !0
            }

            function b() {
                var a = {
                    id: d.C.id
                };
                g.te.cf.end(g.extend(a, {
                    key: "rds"
                }));
                g.te.cf.send(g.extend(a, {
                    params: {
                        rs: d.get("baseRender"),
                        viewmode: d.C.view.type,
                        fd: 0 === d.uJ ? 1 : 0,
                        raster: d.C.lk ? 1 : 0
                    }
                }));
                d.C && d.C.mm && d.C.mm.vB && d.C.mm.vB();
                d.C.f7 = 1;
                d.YX();
                d.set("display");
                d.sD = !0
            }

            function c() {
                g.te.cf.end({
                    id: d.C.id,
                    key: "rd"
                });
                g.a.Sc(function() {
                    this.q("complete")
                }, d);
                d.C.Ka = !0;
                d.set("display")
            }
            if (!this.gQ)
                if (this.sD) 1 === this.Et && 13 === this.get("zoom") && (g.a.RC.stop(this.dG), g.te.cf.send({
                    id: this.C.id,
                    params: {
                        fps: this.dG.RC,
                        type: "fps",
                        rs: this.get("baseRender")
                    }
                }), this.Et = 2), this.YX();
                else {
                    var d = this,
                        e = this.C.get("rasterLayer"),
                        f = a();
                    e ? (e.o && e.o.Ka && (this.C.Ka || c()), f && (this.C.Ka || c(), this.DT(), b())) : f && (this.C.Ka || c(), b(), this.C.m7 = !0)
                }
        },
        layersChanged: function() {
            this.za = this.za || [];
            for (var a = this.get("layers"), b = this.za.length - 1; 0 <= b; b -= 1) this.za[b] === this.sd || this.za[b] === this.Ns || this.za[b].fB || this.za[b].T.fB || -1 !== g.a.indexOf(a, this.za[b].T) || (this.za[b].Vg(), this.za[b].ol && this.za[b].ol.Vg(), this.za[b].T.G("complete", this.mr, this), this.za[b].T.G("renderComplete", this.mr,
                this), this.za = g.a.uo(this.za, b));
            for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1)
                if (!a[b].I4)
                    if (a[b].oi) - 1 === g.a.indexOf(this.za, a[b].o) && this.za.push(a[b].o);
                    else {
                        var f = this.Tf(a[b]);
                        f && (this.za.push(f), a[b].oi = !0, a[b].o = f);
                        a[b].h("complete", this.mr, this, !0);
                        a[b].h("renderComplete", this.mr, this)
                    }
            for (b = 0; b < this.za.length; b += 1) f = this.za[b].T, f.oq && f.get("visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get("textIndex") || e);
            this.Cc && (c || "3D" !== this.C.view.type ? this.Cc.eo = !1 : (c =
                g.a.find(a, function(a) {
                    if (z.o.tt && a instanceof z.o.tt && a.get("visible")) return !0
                }), this.Cc.eo = c = !!c));
            a = g.a.indexOf(this.za, this.Cc);
            c && this.C.get("showLabel") ? (-1 === a && this.za.push(this.Cc), this.Cc.ja = d && g.l.ja, this.Cc.jC(this.get("mapStyle") || "normal"), this.Cc.set("zIndex", e), this.Cc.set("visible", !0), this.C.cD = !0, this.C.get("isHotspot") ? this.Cc.Qta() : this.Cc.PP()) : (this.Cc && (this.Cc.set("visible", !1), this.C.cD = !1, this.Cc.PP()), this.C.cD = !1);
            this.C.isHotspotChanged();
            this.set("display", 0);
            this.$D()
        },
        isHotspotChanged: function() {
            this.layersChanged()
        },
        controlsChanged: function() {
            var a = this.get("controls"),
                b, c;
            if (a.add && 0 < a.add.length)
                for (; 0 < a.add.length;) b = a.add.shift(), (c = b.gu || b.addTo) && c.call(b, this.C, this.Ta.controls);
            else if (a.remove && a.remove.length)
                for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.Fv || b.removeFrom) && c.call(b, this.C, this.Ta.controls)
        },
        V0: function() {
            if (!this.gQ) {
                var a = this;
                this.$0 = !1;
                a.sd || (a.sd = new g.o.bd(new z.o.bd, a), a.sd.tf = 36, a.sd.fg = 36, a.sd.set("zIndex", 120), a.za.push(a.sd),
                    a.sd.FC = !0);
                for (var b = a.get("overlays"), c = [], d = 0; d < a.Vc.length; d += 1) - 1 === g.a.indexOf(b, a.Vc[d].Nb) && (a.Vc[d].Nb instanceof z.A.Re || a.Vc[d].Nb instanceof z.A.Jn ? a.Vc[d].Vg() : (a.sd && a.Vc[d] instanceof g.A.sb ? (a.sd.Ug = g.a.gy(a.sd.Ug, a.Vc[d].L), a.sd.t7([a.Vc[d].L])) : a.Ns && a.Ns.t7([a.Vc[d].L]), a.Vc[d].L.ca ? (g.j.remove(a.Vc[d].L.ca), a.Vc[d].L.ca = null) : a.Vc[d].L.Ya && (g.j.remove(a.Vc[d].L.Ya.Yf), g.j.remove(a.Vc[d].L.Ya.Zb), a.Vc[d].L.Ya = null), a.Vc[d].xn && a.Vc[d].xn.stop(), a.Vc[d].vh && a.Vc[d].vh.stop(), a.Vc[d].Nb.oi = !1, a.Vc[d].Nb.tl(), a.Vc[d].Nb.A = null, a.Vc[d].Nb = null, a.Vc[d].L.Zna(), a.Vc[d].L = null, a.Vc[d].tl(), a.Vc[d].Je = null, a.Vc[d].ri(), a.Vc[d].map = null), c.push(a.Vc[d]));
                for (d = 0; d < c.length; d += 1) a.Vc = g.a.uo(a.Vc, g.a.indexOf(a.Vc, c[d]));
                var e = [],
                    f = [];
                g.a.nwa(function(b) {
                    if (!b.oi && b.Sg) {
                        var c = b.A || a.cma(b);
                        c && (a.Vc.push(c), c instanceof g.A.Re || c instanceof g.A.Jn ? c.cz(a) : c instanceof g.A.sb ? e.push(c.L) : f.push(c.L), b.oi = !0)
                    }
                }, b);
                e.length && a.sd.Lx(e);
                f.length && (a.Ns || (a.Ns = new g.o.bd(new z.o.bd, a), a.Ns.set("zIndex",
                    110), a.za.push(a.Ns)), a.Ns.Lx(f));
                a.set("display", 0)
            }
        },
        overlaysChanged: function() {
            this.Vc = this.Vc || [];
            this.get("overlays") && 0 === this.get("overlays").length ? this.V0() : this.$0 || (g.a.Sc(this.V0, this), this.$0 = !0)
        },
        contextmenusChanged: function() {
            var a = this.get("contextmenu");
            if (a) {
                var b = this;
                g.rb.load("overlay", function() {
                    b.Zx = new g.A.Jn(a, b);
                    b.set("display", 0)
                })
            }
        },
        infosChanged: function() {
            var a = this.get("infos");
            if (a) {
                this.nm = this.nm || {};
                var b, c = this;
                g.rb.load("overlay", function() {
                    for (var d in a) a.hasOwnProperty(d) &&
                    (b = a[d], c.nm[d] = c.nm[d] || new g.A.Re(b, c))
                })
            }
        },
        cma: function(a) {
            var b = null;
            if (a instanceof z.A.sb) b = new g.A.sb(a, this);
            else if (a instanceof z.A.Jn) b = new g.A.Jn(a, this);
            else if (a instanceof z.A.Re) b = new g.A.Re(a, this);
            else {
                var c = ["overlay"];
                "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Lo ? c.push("svg") : c.push("vml")) : c.push("cvector");
                if (!this.Mya && !g.rb.pD(c)) {
                    var d = this;
                    g.rb.Tg(c, function() {
                        this.Mya = !0;
                        d.overlaysChanged()
                    });
                    return
                }
                a instanceof z.A.zc ? b = new g.A.zc(a, this) : a instanceof z.A.$z ?
                    b = new g.A.$z(a, this) : a instanceof z.A.Yb ? b = new g.A.Yb(a, this) : a instanceof z.A.ah ? b = new g.A.ah(a, this) : a instanceof z.A.rt ? b = new g.A.zc(a, this) : a instanceof z.A.xt && (b = new g.A.zc(a, this))
            }
            return b
        },
        i3: function() {
            var a = this.ue;
            !this.xu || this.Ch && this.Ch.up || (a = "function" === typeof this.xu ? this.xu(this.Xk.R.zoom) : this.xu);
            return a
        },
        HBa: function() {
            function a() {}
            var b = new g.o.bd,
                c = [],
                d = new g.U(116.405467, 39.907761);
            new g.style.Eg.ci;
            for (var e = 0; 100 > e; e += 1)
                for (var f = 0; 100 > f; f += 1) {
                    var h = new g.U(d.Q + 0.02 *
                        f, d.P + 0.02 * e),
                        h = new g.ai({
                            name: "point" + (100 * e + f),
                            map: this,
                            ha: new g.Ca.Dg(this.Ab(h))
                        });
                    c[100 * e + f] = h;
                    h.h("hover", a, h)
                }
            b.Lx(c);
            this.za.push(b)
        },
        hc: function() {},
        FBa: function(a) {
            var b = new g.o.bd,
                c = [],
                c = (new g.D$({
                    map: this
                })).sT(a);
            b.Lx(c);
            this.za.push(b);
            this.set("display", 0)
        },
        Tf: function(a) {
            var b = this;
            a = a.Tf(this);
            if (!a) return null;
            if (a.length && "string" == typeof a[0]) g.rb.Tg(a, function() {
                b.layersChanged()
            });
            else return a;
            return null
        },
        ADa: function() {
            return this.Ta
        },
        PFa: function() {
            this.set("display", 0)
        },
        displayChanged: function(a) {
            this.M0 || this.vK(a)
        },
        vK: function(a) {
            if (a)
                if (g.a.pi(this.eE), g.l.Rl) {
                    var b = this;
                    setTimeout(function() {
                        b.nc()
                    }, 0)
                } else this.nc();
            else this.ow || (this.eE = g.a.Sc(this.nc), this.ow = !0)
        },
        nc: function() {
            this.eE = null;
            if (!this.gQ) {
                this.q("render");
                this.ow = !1;
                var a = {};
                if (this.za && (a.size = this.C.get("size"), a.size.width && a.size.height)) {
                    for (var b = this.C.view.type, c = [], d = 0, e = this.za.length; d < e; d += 1) this.za[d].Cg && this.za[d].Cg !== b ? this.za[d].Ka = !0 : (c.push(this.za[d]), this.za[d].ol && c.push(this.za[d].ol));
                    c.sort(function(a, b) {
                        var c = a.get("zIndex"),
                            d = b.get("zIndex");
                        return c > d ? 1 : c === d ? a.CF > b.CF ? 1 : -1 : -1
                    });
                    a.za = c;
                    c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                    a.Mla = 15E5 < a.size.width * a.size.height * c * c;
                    a.$I = !!this.C.get("rasterLayer");
                    a.ba = g.l.ba;
                    a.lang = this.get("lang");
                    a.R = this.C.UI();
                    a.Cg = b;
                    this.C.D = !0;
                    a.S = this.C.getResolution([0, 0]);
                    a.zs = this.C.get("mapStyle");
                    a.el = this.el;
                    this.C.D = !1;
                    a.Fd = this.dh;
                    a.DCa = this.Sn;
                    a.Ge = this.Qk;
                    a.ag = this.Hg;
                    a.TK = this.Hg && g.l.ba;
                    a.GU = g.l.ba && this.Qk;
                    a.zE = g.l.ba && this.dh;
                    this.zE = a.zE;
                    b = this.get("targetLevel") || a.R.zoom;
                    a.Yq = a.R.zoom > b;
                    a.Mf = a.R.zoom > b ? "zoomOut" : a.R.zoom < b ? "zoomIn" : "stable";
                    a.WEa = !0;
                    a.s1 = this.s1;
                    for (var b = !1, f, c = !1, d = 0; d < this.za.length; d += 1) this.za[d].yi && this.za[d].T.get("visible") && a.R.zoom <= this.za[d].T.get("zooms")[1] && (a.IT = !0), this.za[d].he().Mc && (b = !0);
                    for (d = 0; d < this.za.length; d += 1) this.za[d].T.rP && a.IT && (!this.Qk && this.za[d].T.get("visible") && (f = this.za[d].T.rP(), f.hEa = 1, f.zoom = a.R.zoom), c = !0);
                    this.qb = [];
                    c && f && this.qb !== f && (this.qb = f);
                    a.qb =
                        this.qb;
                    a.Mc = b;
                    a.scale = Math.pow(2, a.R.zoom - a.R.De);
                    this.Xk = a;
                    this.kd = this.C.get("mask");
                    a.kd = this.kd;
                    a.CJ = this.CJ;
                    if (f = this.LI()) f.nc(a), this.el = this.PQ = this.CJ = !1
                }
            }
        },
        LI: function() {
            if (!this.J || this.J.type !== this.C.view.type || this.J.Jsa)
                if (this.J = null, "3D" == this.C.view.type) {
                    var a = this;
                    g.rb.load("Map3D", function() {
                        a.J || (a.J = new g.Da.lF(a), a.set("display"))
                    })
                } else this.J = new g.M.canvas.Kb(this);
            return this.J
        },
        Apa: function() {
            var a = [],
                b = this.get("controls").Hd,
                c;
            for (c in b) b[c].yy && b[c].yy() && a.push(b[c].yy());
            return a
        },
        destroyChanged: function() {
            delete g.te.Iy[this.C._amap_id];
            this.gQ = 1;
            this.DT(!0);
            this.V = {};
            this.Cc && (this.Cc.T.G("complete", this.mr, this), this.Cc.Vg(), this.za = g.a.uo(this.za, g.a.indexOf(this.za, this.Cc)));
            this.Ch && this.Ch.ef && this.Ch.ef.T && this.Ch.ef.T.setMap();
            this.$ja && clearTimeout(this.$ja);
            this.Eja();
            this.Ega();
            this.fO && this.fO();
            this.Kka();
            this.tl();
            this.C = this.C.map = null;
            this.K = this.K.iM = null;
            this.ri();
            this.ze && (this.ze.stop(), this.ze = null);
            this.Lf && (this.Lf.stop(), this.Lf = null);
            this.Bd &&
            (this.Bd.stop(), this.Bd = null);
            this.J && this.J.Bf && this.J.Bf();
            this.J = null
        },
        Kka: function() {
            var a = this.K;
            this.xca();
            g.F.Mma(a);
            g.j.aE(a);
            this.Gl = null;
            g.j.ab(a, "amap-container");
            this.Ta = null
        },
        jogEnableChanged: function() {
            this.get("jogEnable") ? this.fv = !0 : this.fv = !1
        },
        drawChanged: function() {
            var a = this,
                b, c, d = this.get("draw");
            if (d) {
                this.dq || (this.dq = []);
                b = 0;
                for (c = this.dq.length; b < c; b += 1) this.dq[b].sva();
                g.rb.load("interaction", function() {
                    var b = new g.Kza({
                        type: d,
                        o: a.Ns
                    }, a);
                    a.dq.push(b);
                    a.loaded = !0
                })
            } else if (this.dq)
                for (b =
                         0, c = this.dq.length; b < c; b += 1) this.dq[b].sva(), this.dq[b].dCa(), this.G("click", this.dq[b].PDa, this)
        },
        ce: function(a, b, c) {
            return this.C.view.ce(a, b, c)
        },
        tg: function(a, b, c) {
            return this.C.view.tg(a, b, c)
        },
        V3: function(a, b) {
            var c = this.get("size"),
                d = document.createElement("canvas");
            a = a || c.width;
            b = b || c.height;
            d.width = a;
            d.height = b;
            for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Ta.o.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
            k.sort(function(a, b) {
                return a.style.zIndex - b.style.zIndex
            });
            for (l = 0; l < k.length; l += 1) {
                var m = k[l];
                if (g.j.rn(m, "amap-layer") || g.j.rn(m, "amap-e") || g.j.rn(m, "amap-labels"))
                    if ("CANVAS" === m.tagName) {
                        var h = c,
                            n = e,
                            p = parseFloat(m.style.width) || m.width,
                            q = parseFloat(m.style.height) || m.height,
                            r = 1;
                        m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
                        f.drawImage(m, n, h, p * r, q * r)
                    } else if ("DIV" === m.tagName)
                        for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                            var v = r[u];
                            if ("CANVAS" === v.tagName || "IMG" === v.tagName) h =
                                parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
                        }
            }
            return d.toDataURL()
        }
    });
    g.Kb.zb({
        tfa: function() {
            this.kB = !1;
            g.l.If && ("3D" === this.C.view.type ? this.Pba() : this.Nba());
            g.l.ba || this.Kba()
        },
        Eja: function() {
            g.l.If && ("3D" === this.C.view.type ? this.Kga() : this.Jga());
            g.l.ba || this.Fga()
        },
        rotateEnableChanged: function() {
            this.dwa = this.get("rotateEnable");
            g.l.If && this.u1 && "3D" !== this.C.view.type && (this.dwa ? this.u1() : this.wta())
        },
        zoomEnableChanged: function() {
            this.get("zoomEnable") ? (g.l.If && this.uP && "3D" !== this.C.view.type && this.uP(), g.l.ba || this.Mba()) : (g.l.If && this.LS && this.LS(), g.l.ba ||
            this.Iga())
        },
        mousewheelChanged: function() {},
        AS: function(a) {
            a && (this.kB = a.bu)
        },
        fw: function() {
            this.kB = !1
        },
        Ei: function(a, b, c, d) {
            var e, f = {};
            a || (a = window.event);
            var h = g.F.gm(a, this.Ta.$c);
            g.l.If && ("touchend" !== a.type ? this.V.Zfa = h : h = this.V.Zfa);
            f.vb = h;
            f.Pa = this.tg(h);
            f.Pa && (f.Pa = f.Pa.toFixed(3));
            f.$f = this.Td(f.Pa);
            c || (c = this.kB ? this.kB ? [this.kB] : null : this.hea(f.Pa, d)) && 0 < c.length && c[0].ur && (e = c[0].ur, f.bu = c[0]);
            e || "info" === a.Te || (e = this);
            f.dd = e;
            f.KAa = a.altKey;
            f.ctrlKey = a.ctrlKey;
            f.button = void 0 === a.button ?
                0 : a.button;
            b || g.F.preventDefault(a);
            return f
        },
        DN: function(a) {
            return a && a !== this && a !== document
        },
        wO: function() {
            var a = this.V;
            a.Zf && (a.Vj.vb.x === a.Zf.x && a.Vj.vb.y === a.Zf.y ? a.Hg = !1 : (a.Hg = !0, a.rp || (a.Vp.q("dragstart", a.Up), a.rp = !0), a.Vp.q("dragging", a.Vj), a.Zf = a.Vj.vb))
        },
        Vwa: function(a) {
            for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
            return b
        },
        zv: function(a, b, c) {
            return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
        },
        hea: function(a, b) {
            var c = this.LI();
            if (!c) return null;
            var d, e = this;
            this.za.sort(function(a,
                                  b) {
                return a.get("zIndex") > b.get("zIndex") ? -1 : 1
            });
            c.Qu(a, this.za, function(a) {
                d = a;
                d = e.Vwa(d)
            }, function() {
                d = []
            }, b);
            return d
        }
    });
    g.Kb.zb({
        Afa: function() {
            this.Sn = {};
            this.h("moveend", this.q6, this);
            g.l.Rl && (g.l.$K || g.l.GH) && this.h("zoomend", this.jV, this);
            this.h("movestart", this.r6, this);
            this.h("zoomstart", this.x6, this);
            this.h("zoomend", this.w6, this);
            this.nM();
            this.Et = 0;
            this.dG = {};
            "undefined" === typeof window.requestAnimationFrame && (this.Et = 2)
        },
        x6: function() {
            2 !== this.Et && 12 === this.get("zoom") && (this.Et = 1, g.a.RC.start(this.dG));
            this.Qk = !0
        },
        w6: function() {
            1 === this.Et && 13 !== this.get("zoom") && (this.Et = 0, g.a.RC.cancel(this.dG));
            this.Qk = !1;
            this.set("display")
        },
        p0: function(a, b) {
            this.Sn.left = 0 < a;
            this.Sn.right = 0 > a;
            this.Sn.NE = 0 < b;
            this.Sn.kQ = 0 > b
        },
        Yt: function() {
            this.Sn.left = !1;
            this.Sn.right = !1;
            this.Sn.NE = !1;
            this.Sn.kQ = !1
        },
        Ega: function() {
            this.G("moveend", this.q6, this);
            g.l.Rl && (g.l.$K || g.l.GH) && this.G("zoomend", this.jV, this);
            this.G("movestart", this.r6, this);
            this.G("zoomstart", this.x6, this);
            this.G("zoomend", this.w6, this);
            this.Gga()
        },
        q6: function(a) {
            this.Hg = !1;
            this.Yt();
            this.H7();
            !a.c5 && this.C.get("limitBounds", null, !0) ? (a = this.uma()) && !a.cb(this.get("center")) ?
                this.FK(this.get("zoom"), a, !1, !0) : this.pa("moveend") : this.pa("moveend");
            this.set("display")
        },
        r6: function() {
            this.Hg = !0;
            this.Yt()
        },
        dragEnableChanged: function() {
            (this.GC = this.get("dragEnable")) ? this.mM(): this.eO()
        },
        pa: function(a, b) {
            if (this.C.ke(a)) {
                var c;
                b && (c = b.g6 ? {
                    type: a,
                    newsize: b.g6,
                    oldsize: b.xta
                } : {
                    type: a,
                    pixel: b.vb,
                    target: this.C,
                    lnglat: b.$f
                });
                this.C.q(a, c)
            }
        },
        nM: function() {
            this.h("click", this.UZ);
            this.h("dblclick", this.YZ);
            g.l.If && this.WW();
            g.l.ba || this.Lba()
        },
        Gga: function() {
            this.G("click", this.UZ);
            this.G("dblclick", this.YZ);
            g.l.If && this.JZ();
            g.l.ba || this.Hga()
        },
        MG: function(a, b) {
            var c = this.get("targetLevel") || this.get("zoom"),
                c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
                c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
            c === this.get("zoom") || this.Lf && this.Lf.Kv && c === this.Lf.end || this.Xz(c, !1, a)
        },
        UZ: function(a) {
            this.pa("click", a)
        },
        YZ: function(a) {
            this.get("doubleClickZoom") && this.get("zoomEnable") && this.MG(a.Pa, 1);
            this.pa("dblclick", a)
        },
        rBa: function(a) {
            this.MG(a.IGa, a.Q8);
            this.pa("touchend",
                a)
        },
        mM: function() {
            this.GC && ("3D" === this.C.view.type ? (this.h("dragstart", this.d_), this.h("dragging", this.$Z), this.h("dragend", this.b_)) : (this.h("dragstart", this.c_), this.h("dragging", this.ZZ), this.h("dragend", this.a_)))
        },
        eO: function() {
            this.GC || ("3D" === this.C.view.type ? (this.G("dragstart", this.d_), this.G("dragging", this.$Z), this.G("dragend", this.b_)) : (this.G("dragstart", this.c_), this.G("dragging", this.ZZ), this.G("dragend", this.a_)))
        },
        c_: function(a) {
            this.AS(a);
            this.Yt();
            this.dh = !0;
            this.V.ly = a.vb.x;
            this.V.HC =
                a.vb.y;
            this.ze && (this.ze.stop(), this.es(!0));
            this.pa("dragstart");
            this.pa("movestart");
            this.q("movestart", a);
            this.axa()
        },
        ZZ: function() {
            var a = this.V,
                b = a.Vj.vb.x - a.ly,
                c = a.Vj.vb.y - a.HC;
            if (c || b) {
                this.V.Hg = !0;
                this.p0(b, c);
                a.ly = a.Vj.vb.x;
                a.HC = a.Vj.vb.y;
                var a = b,
                    d = c,
                    e = this.rotation;
                e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
                a = this.get("centerCoords").Za((new g.H(a, d)).Jd(this.S));
                (d = this.U1(a)) && (c = Math.round(this.ce(d).Za(this.ce(a)).y));
                this.Qo(this.Ta.Kr, b, c);
                a.x =
                    (a.x + g.a.Ea) % g.a.Ea;
                this.set("centerCoords", a, !0);
                this.set("center", this.Td(a), !0);
                this.fv && (this.eh ? (a = new Date, this.Kt = 100 < a - this.eh ? new g.H(0, 0) : new g.H(b, c), this.eh = a) : this.eh = new Date);
                this.pa("dragging");
                this.pa("mapmove")
            } else this.V.Hg = !1, this.Kt = null, this.Yt()
        },
        Qo: function(a, b, c) {
            if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                var d = parseFloat(a.style.top) || 0,
                    e = parseFloat(a.style.left) || 0,
                    f = "";
                this.rotation && (f = g.j.ct[g.j.mg] + ":rotate(" + this.rotation + "deg);overflow:visible;");
                a.style.cssText = "position:absolute;top:" +
                    (d + c) + "px;left:" + (e + b) + "px;" + f
            }
        },
        U1: function(a) {
            var b = this.C.view.xW(),
                c = this.lU.height * this.S / 2;
            return a.y < b.dc + c ? (a.y = b.dc + c, a) : a.y > b.rc - c ? (a.y = b.rc - c, a) : null
        },
        a_: function() {
            this.fw();
            100 < new Date - this.eh && (this.Kt = null);
            this.V.Zf = null;
            this.dh = !1;
            this.Yt();
            this.pa("dragend");
            if (this.fv && this.Kt)
                if (this.V.Hg) {
                    var a = this.Kt,
                        b = new g.H(0, 0);
                    this.ze = new g.Dj(a, b, function(a, b, e) {
                        return 600 <= e ? b : a.Jd(1 - Math.pow(e / 600, 2)).floor()
                    }, 1);
                    this.ze.tq = function(a) {
                        if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.ze.stop(),
                            this.q("moveend"), this.es(), this.Kt = this.eh = null;
                        else {
                            var b = a.x,
                                e = a.y,
                                f = this.rotation;
                            f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
                            b = this.get("centerCoords").Za((new g.H(b, e)).Jd(this.S));
                            e = this.U1(b);
                            f = a.y;
                            e && (f = Math.round(this.ce(e).Za(this.ce(b)).y));
                            this.Qo(this.Ta.Kr, a.x, f);
                            b.x = (b.x + g.a.Ea) % g.a.Ea;
                            this.set("centerCoords", b, !0);
                            this.set("center", this.Td(b), !0);
                            this.pa("mapmove")
                        }
                    };
                    this.ze.Dn(this)
                } else this.q("moveend"), this.es(!0), this.Kt = this.eh = null;
            else this.q("moveend"), this.es(), this.Kt = this.eh = null
        },
        axa: function() {
            if (!this.V.refresh) {
                var a = this,
                    b = null;
                this.V.refresh = setInterval(function() {
                    b !== a.V.Zf && (a.set("display", 0), b = a.V.Zf)
                }, g.l.ba ? 400 : 100)
            }
        },
        jV: function() {
            if (g.l.Rl && (g.l.$K || g.l.GH)) {
                for (var a = this.Ta.o.childNodes, b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c instanceof HTMLCanvasElement && (c.width = 0);
                    "amap-e" === c.className && (c.style.height = "0")
                }
                for (b = 0; b < this.za.length; b += 1) c = this.za[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap &&
                (c.du && (c.du.width = 0), c.Gx && (c.Gx.width = 0))
            }
        },
        es: function(a) {
            this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null);
            a || (this.jV(), this.set("display", 0))
        },
        H7: function(a) {
            this.set("refresh", a)
        }
    });
    g.Kb.zb({
        setZoomSlow: function(a) {
            this.FK(a, null, !this.get("animateEnable"))
        },
        setPanTo: function(a) {
            this.FK(null, a, !this.get("animateEnable"))
        },
        zoomAndCenterChanged: function(a) {
            var b = a[0];
            b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
            b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
            this.FK(b, a[1], a[2] || !this.get("animateEnable"))
        },
        zoomChanged: function() {
            this.S = Math.pow(2, 20 - this.get("zoom"));
            this.q("closeOverlays");
            this.set("display")
        },
        rotationChanged: function(a) {
            this.rotation = this.get("rotation");
            this.C.q("rotate", {
                rotation: this.rotation || 0
            });
            !0 !== a && this.set("display", 0)
        },
        pitchChanged: function() {
            this.pitch = this.get("pitch");
            this.C.q("pitch", {
                pitch: this.pitch || 0
            });
            this.set("display", 0)
        },
        centerCoordsChanged: function() {
            this.q("closeOverlays");
            this.PAa ? this.vK(!0) : this.vK(!1)
        }
    });
    g.oW = g.aa.extend({
        ka: [g.va, g.Se],
        r: function(a, b) {
            this.type = "2D";
            this.af(b, !0);
            a && this.Ola(a)
        },
        Ola: function(a) {
            this.map = a;
            this.Ue(["size", "refresh", "maxPitch"], a);
            this.centerChanged();
            a.Ue(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
        },
        xW: function() {
            this.cM || this.dna();
            return this.cM
        },
        dna: function() {
            var a;
            if (this.get("center") instanceof g.U) {
                a = new g.re(-180, -85, 180, 85);
                var b = this.map.Ab(a.Xj());
                a = this.map.Ab(a.Eo());
                this.cM = {
                    Ec: b.x,
                    dc: b.y,
                    Dc: a.x,
                    rc: a.y
                }
            } else a = this.map.get("limitBounds",
                null, !0), this.cM = {
                Ec: a[0],
                dc: a[1],
                Dc: a[2],
                rc: a[3]
            }
        },
        UI: function() {
            var a = this.map,
                b = this.get("zoom");
            return {
                zoom: b,
                lh: this.get("center"),
                Ha: this.em(),
                jb: this.get("centerCoords"),
                rotation: parseInt(this.get("rotation")),
                Ef: a.get("crs"),
                S: Math.pow(2, 20 - b),
                De: Math.round(b),
                yg: Math.pow(2, 20 - Math.round(this.get("zoom")))
            }
        },
        centerChanged: function() {
            this.set("centerCoords", this.map.Ab(this.get("center")).toFixed(3), !0)
        },
        centerCoordsChanged: function() {
            var a = this.map;
            a.D = !0;
            var b = this.xW(),
                c = this.get("centerCoords"),
                d = a.getSize();
            a.D = !1;
            var e = this.get("zoom", null, !0),
                a = this.get("center", null, !0),
                d = d.height * Math.pow(2, 20 - e) / 2;
            a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Dc && (c.x = b.Dc);
            c.y < b.dc + d ? c.y = b.dc + d : c.y > b.rc - d && (c.y = b.rc - d);
            this.set("center", this.map.Td(c), !0)
        }
    });
    g.xF = g.oW.extend({
        em: function() {
            var a = this.get("size"),
                b = this.get("centerCoords"),
                c = parseInt(this.get("rotation")) % 360,
                d = this.get("zoom", null, !0),
                e = Math.pow(2, 20 - d),
                c = Math.PI * c / 180,
                a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
                e = new g.Nf(b.Za(a.Jd(e)), b.add(a.Jd(e))),
                c = this.map.get("targetLevel");
            if (c > d - 1) {
                var f = Math.pow(2, 20 - c);
                e.Y9 = new g.Nf(b.Za(a.Jd(f)), b.add(a.Jd(f)))
            }
            e.O8 = c || d;
            e.xc = a;
            return e
        },
        spa: function(a) {
            var b =
                    this.get("size"),
                c = this.get("centerCoords"),
                d = parseInt(this.get("rotation")) % 360,
                d = Math.PI * d / 180,
                b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
            a = Math.pow(2, 20 - a);
            return new g.Nf(c.Za(b.Jd(a)), c.add(b.Jd(a)))
        },
        od: function() {
            var a = this.em(),
                b = a.Sd.x,
                c = a.ec.y,
                a = new g.H(a.ec.x, a.Sd.y),
                b = new g.H(b, c);
            return new g.re(this.map.Td(a), this.map.Td(b))
        },
        zoomChanged: function() {},
        ce: function(a, b) {
            this.get("size");
            var c =
                    a.lb(),
                d = this.get("centerCoords"),
                e = c.Za(d);
            e.x < -g.a.Ea / 2 ? e.x += g.a.Ea : e.x > g.a.Ea / 2 && (e.x -= g.a.Ea);
            var c = this.get("size").wE().gd(2),
                f = this.get("rotation") * Math.PI / 180,
                d = e.x * Math.cos(f) - Math.sin(f) * e.y,
                e = Math.sin(f) * e.x + Math.cos(f) * e.y;
            return c.add((new g.H(d, e)).Jd(Math.pow(2, (b || this.get("zoom")) - 20)))
        },
        tg: function(a, b) {
            var c = this.get("size").wE().gd(2),
                d = a.Za(c),
                e = this.get("rotation") * Math.PI / 180,
                c = d.x * Math.cos(e) + Math.sin(e) * d.y,
                d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
                c = this.get("centerCoords").add((new g.H(c,
                    d)).Jd(Math.pow(2, 20 - (b || this.get("zoom")))));
            c.x = (c.x + 268435456) % 268435456;
            return c
        }
    });
    g.XL = g.oW.extend({
        r: function(a, b) {
            this.eg = new g.Hc;
            this.ad = new g.Hc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
            arguments.callee.la.apply(this, arguments);
            this.scale = 1;
            this.type = "3D";
            this.Rz = null;
            this.c7 = "";
            this.R = ["", 0, 0, "", 0];
            this.Rz = {}
        },
        refreshChanged: function() {
            this.Sq()
        },
        zoomChanged: function(a) {
            this.Sq();
            this.R[4] = a
        },
        centerChanged: function(a) {
            arguments.callee.la.apply(this, arguments);
            this.Sq()
        },
        centerCoordsChanged: function(a) {
            arguments.callee.la.apply(this, arguments);
            this.Sq();
            this.R[0] = a.toString()
        },
        rotationChanged: function(a) {
            this.Sq();
            this.R[2] = a
        },
        pitchChanged: function(a) {
            this.Je.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
            this.Sq();
            this.R[1] = a
        },
        Sq: function() {
            if (!this.Dya() && (this.YU(), this.$na(), this.map)) {
                var a = this,
                    b = function() {
                        a.map.camera = a.m3();
                        a.map.q("camerachange", {
                            map: a.map,
                            camera: a.map.camera
                        })
                    };
                a.map.Ka ? b() : this.map.h("complete", b, this)
            }
        },
        m3: function() {
            return {
                height: this.gn,
                fov: this.hpa,
                aspect: this.bC,
                near: this.$y,
                far: this.tI,
                position: this.ima,
                rotation: this.Je.rotation,
                pitch: this.Je.pitch
            }
        },
        $na: function() {
            this.$fa = g.a.Wf()
        },
        Ko: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
            return g.a.Wf() - this.$fa > a
        },
        YU: function() {
            var a = this.get("centerCoords"),
                b = this.get("pitch"),
                c = this.get("rotation"),
                d = (new g.Hc).k8(-a.x + g.a.$b.x, -a.y + g.a.$b.y, 0);
            this.ima = {
                x: a.x - g.a.$b.x,
                y: a.y - g.a.$b.y
            };
            a = (new g.Hc).wz(180 - b, 1, 0, 0);
            this.Lua = (new g.Hc).set(a);
            c = (new g.Hc).wz(c, 0, 0, 1);
            this.Ss = (new g.Hc).set(c);
            this.gpa = d.Qg();
            this.ad = (new g.Hc).k8(0, 0, -this.gn).multiply(a.multiply(c.multiply(d))).toFixed(8);
            this.ad.Ye = this.ad.Qg()
        },
        Dya: function(a) {
            a = a || this.get("zoom");
            var b = this.get("size"),
                c = b.width,
                b = b.height;
            if (!c || !b) return !0;
            this.bC = c /= b;
            b = b / 2 * Math.pow(2, 20 - a);
            a = g.a.kc((56 - a) * Math.PI / 180, 2);
            var d = g.a.kc(b / Math.tan(a / 2), 0);
            2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
            this.hpa = a;
            this.gn = d;
            this.$y = this.gn / 10;
            this.tI = 50 * this.gn;
            this.Kna = (this.gn - this.$y) / (this.tI - this.$y);
            this.eg.h8(a, c, this.$y, this.tI);
            this.eg.Ye = this.eg.Qg();
            a = this.eg;
            var c = new g.FV,
                b = c.QD,
                e = this.eg.elements,
                d = e[0],
                f = e[1],
                h = e[2],
                k = e[3],
                l =
                    e[4],
                m = e[5],
                n = e[6],
                p = e[7],
                q = e[8],
                r = e[9],
                s = e[10],
                u = e[11],
                v = e[12],
                w = e[13],
                t = e[14],
                e = e[15];
            uc(b[0], k - d, p - l, u - q, e - v).normalize();
            uc(b[1], k + d, p + l, u + q, e + v).normalize();
            uc(b[2], k + f, p + m, u + r, e + w).normalize();
            uc(b[3], k - f, p - m, u - r, e - w).normalize();
            uc(b[4], k - h, p - n, u - s, e - t).normalize();
            uc(b[5], k + h, p + n, u + s, e + t).normalize();
            a.TQ = c
        },
        UI: function() {
            var a = this.map;
            a.map.Pv && (this.Sq(), this.R[3] = a.get("size").toString());
            var b = this.R.toString();
            if (b !== this.c7) {
                var c = this.get("zoom"),
                    d = this.Rz;
                d.zoom = c;
                d.bC = this.bC;
                d.top =
                    this.top;
                d.Ha = this.em();
                d.jb = this.get("centerCoords");
                d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
                d.pitch = this.get("pitch") || 0;
                d.yHa = this.get("yaw");
                d.Ef = a.get("crs");
                d.S = Math.pow(2, 20 - c);
                d.De = Math.round(c);
                d.z6 = Math.floor(c);
                d.yg = Math.pow(2, 20 - d.De);
                d.Yta = Math.pow(2, 20 - d.z6);
                d.eg = this.eg;
                d.ad = this.ad;
                this.c7 = d.key = b
            }
            this.Rz.lh = this.get("center");
            this.Rz.Qq = g.a.Wf();
            this.Rz.Ko = this.Ko();
            return this.Rz
        },
        em: function() {
            var a = this.get("size"),
                b = a.width,
                a = a.height;
            if (!b || !a) return null;
            var c, d;
            d = 0;
            var e = new g.H(0, d);
            c = this.tg(e, !0);
            if (55 < this.Je.pitch || !c)
                for (; !c;) d += a / 40, e.y = d, c = this.tg(e, !0);
            this.top = d / a;
            e.x = b;
            d = this.tg(e, !0);
            var f = 0,
                h = this.Je.zoom;
            50 <= this.Je.pitch && 18 <= h && (f = 0);
            e.y = a + f;
            f = this.tg(e, !0);
            e.x = 0;
            h = this.tg(e, !0);
            c = [c.rl(), d.rl(), f.rl(), h.rl(), c.rl()];
            c = new g.p$(c);
            e.x = b / 2;
            e.y = a + 256;
            c.EP = this.tg(e, !0);
            return c
        },
        od: function() {
            var a = this.em();
            if (a) {
                for (var b = [], c = 0; c < a.path.length; c += 1) {
                    var d = this.map.Td(new g.H(a.path[c][0], a.path[c][1]));
                    b.push(d)
                }
                return new g.hp(b)
            }
        },
        ce: function(a, b, c) {
            a.z = c || 0;
            a = this.Y5([a]);
            a = a[0];
            return new g.H(a.x, a.y)
        },
        q3: function(a) {
            var b = this.get("size");
            a = new g.Al([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
            a.multiply(this.$y);
            return this.eg.Ye.xh(a)
        },
        tg: function(a, b, c) {
            var d;
            this.map ? (this.map.D = !0, d = this.map.getSize(!0), this.map.D = !1) : d = this.get("size");
            var e = a.x / d.width * 2 - 1;
            d = 1 - a.y / d.height * 2;
            a = new g.Al([e, d, -1, 1]);
            a.multiply(this.$y);
            if (!this.eg.Ye) return null;
            a = this.eg.Ye.xh(a);
            e = new g.Al([e, d, 1, 1]);
            e.multiply(this.tI);
            d = this.eg.Ye.xh(e);
            var f = this.ad.Ye,
                e = f.xh(a).elements;
            a = f.xh(d).elements;
            c = (e[2] - (-c || 0)) / (e[2] - a[2]);
            if (0 > a[2] || 0 > c || b && c > 2.5 * this.Kna) return null;
            b = e[0] - c * (e[0] - a[0]);
            c = e[1] - c * (e[1] - a[1]);
            return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.$b)
        },
        Y5: function(a) {
            for (var b = this.get("centerCoords"), c = g.a.$b.x, d = g.a.$b.y, e = this.get("size"), f = g.a.Ea, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Al([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Hc.multiply(this.eg, this.ad), q = 0, r = a.length; q < r; q++)
                if (a[q]) {
                    a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
                        n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
                    h < n.x ? n.x -= f : b > n.x && (n.x += f);
                    m[0] = n.x - c;
                    m[1] = n.y - d;
                    m[2] = n.z;
                    var s = p.xh(l);
                    s.multiply(1 / s.elements[3]);
                    k[q] = {
                        x: (s.elements[0] + 1) / 2 * e.width,
                        y: (-s.elements[1] + 1) / 2 * e.height,
                        z: s.elements[2]
                    }
                }
            return k
        },
        fza: function(a) {
            var b = this.get("size");
            a = this.eg.xh(this.ad.xh((new g.Al).copy(a)));
            a.multiply(1 / a.elements[3]);
            b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
            b.z = a.elements[2];
            return b
        }
    });
    g.a.$b = new g.H(215440491, 106744817);
    g.Kb.zb({
        P1: function(a, b, c) {
            var d = this;
            d.SE ? (clearTimeout(d.SE), d.SE = null) : (d.pa("zoomstart", {
                zoom: a
            }), d.q("zoomstart"));
            d.SE = setTimeout(function() {
                d.SE = null;
                d.pa("zoomend", {
                    zoom: a
                });
                d.pa("zoomchange", {
                    zoom: a
                });
                d.q("zoomend")
            }, 150);
            a = g.a.kc(a, 2);
            d.Xz(a, !0, b, c)
        },
        Xz: function(a, b, c, d) {
            var e = this.get("zoom");
            if (e !== a) {
                var f = this.get("zooms");
                "3D" !== this.C.view.type && (g.l.ba || g.l.ye) && (b = !0);
                a = a || e;
                a = Math.min(Math.max(a, f[0]), f[1]);
                var h = a !== e,
                    k = !!c;
                this.ze && (this.ze.stop(), this.ze = null);
                c = c || this.get("centerCoords");
                var l = this.ce(c);
                c = function(c) {
                    b || (c = g.a.kc(c, 2));
                    var d = this.tg(l);
                    this.set("zoom", c);
                    var e = this.tg(l),
                        d = e && e ? e.Za(d) : new g.H(0, 0);
                    this.set("centerCoords", this.get("centerCoords").Za(d).toFixed(3));
                    d.x && d.y && this.pa("mapmove");
                    c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.SE && (this.pa("zoomchange"), this.pa("zoomend")), this.q("zoomend"), k && this.q("moveend"), this.Lf = null)
                };
                var m;
                this.Bd && this.Bd.Kv && (this.Bd.stop(), this.Bd.KR && (d = !0), this.Bd.$C && (m = !0), this.Bd = null, this.set("targetLevel",
                    null));
                this.Lf && this.Lf.Kv && (this.Lf.stop(), d = !0, this.Lf.$C && (m = !0), this.Lf = null, this.set("targetLevel", null));
                h && !d && this.pa("zoomstart");
                k && !m && this.pa("movestart");
                this.q("zoomstart");
                b ? c.call(this, a) : (this.Lf = new g.Dj(e, a, null, 0.04), this.Lf.KR = h, this.Lf.$C = k, this.Lf.transition = function(a, b, c) {
                    return c >= g.w.AH ? b : (b - a) * (1 - Math.pow(1 - c / g.w.AH, 4)) + a
                }, this.Lf.tq = c, this.Lf.Dn(this, !0), this.set("targetLevel", a))
            }
        },
        FK: function(a, b, c, d) {
            var e = null;
            a || (a = this.Bd ? this.Bd.lxa : this.get("targetLevel") || this.get("zoom"));
            var e = b ? this.Ab(b).toFixed(3) : this.Bd ? this.Bd.N8 : this.get("centerCoords"),
                f = a !== this.get("zoom"),
                h = !e.cb(this.get("centerCoords")),
                k = b = !1;
            this.Lf && this.Lf.Kv && (this.Lf.stop(), b = !0, this.Lf.$C && (k = !0), this.Lf = null, this.set("targetLevel", null));
            this.Bd && this.Bd.Kv && (this.Bd.stop(), this.Bd.KR && (b = !0), this.Bd.$C && (k = !0), this.Bd = null, this.set("targetLevel", null));
            this.ze && (this.ze.stop(), this.ze = null);
            if (f || h) {
                if (!this.C.view.em().contains(e) || f && "3D" !== this.C.view.type && (g.l.ba || g.l.ye)) c = !0;
                if (c) f && (b ||
                (this.q("zoomstart"), this.pa("zoomstart")), this.set("zoom", a), this.pa("zoomchange"), this.pa("zoomend"), this.q("zoomend")), h && (k || d || (this.pa("movestart"), this.q("movestart")), this.set("centerCoords", e), this.pa("mapmove"), this.q("moveend", {
                    c5: d
                })), this.set("targetLevel", null);
                else {
                    this.set("targetLevel", a);
                    var l = a - this.get("zoom"),
                        m = e.Za(this.get("centerCoords")).toFixed(3);
                    this.Bd = new g.Dj(1, 0, null, 0.001);
                    this.Bd.KR = f;
                    this.Bd.$C = h;
                    this.Bd.N8 = e;
                    this.Bd.lxa = a;
                    this.Bd.transition = function(a, b, c) {
                        return Math.pow(1 -
                            Math.min(g.w.AH, c) / g.w.AH, 2)
                    };
                    this.Bd.tq = function(b) {
                        0.02 > b ? (this.Bd && (this.Bd.stop(), this.Bd = null), f && (this.set("zoom", a), this.pa("zoomchange"), this.pa("zoomend"), f = !1, this.q("zoomend")), h && (this.set("centerCoords", e), this.q("mapmove"), this.q("moveend", {
                            c5: d
                        })), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.Za(m.Jd(b)).toFixed(3), this.set("centerCoords", b), this.pa("mapmove")));
                        this.set("display", 1)
                    };
                    this.Bd.Dn(this);
                    f && !b && (this.q("zoomstart"), this.pa("zoomstart"));
                    !h || k || d || (this.q("movestart"),
                        this.pa("movestart"))
                }
            }
        }
    });
    g.o = {};
    g.o.Ub = g.aa.extend({
        ka: [g.va, g.Se],
        r: function(a, b) {
            this.T = a;
            this.hb = [3, 18];
            this.CF = g.a.wb(this);
            a && this.Ue(["opacity", "visible", "zIndex", "zooms"], a);
            a.Cg = b.C.view.type;
            this.e = b;
            this.W("display", b)
        },
        Vg: function() {
            this.yi && this.PP();
            if (g.Ba && g.Ba.Uq && g.Ba.Uq.length) {
                var a = g.a.indexOf(g.Ba.Uq, this); - 1 !== a && (g.Ba.Uq = g.a.uo(g.Ba.Uq, a))
            }
            if (a = this.Lb) {
                if (a.length)
                    for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]);
                else a.parentNode && a.parentNode.removeChild(a);
                this.Lb = null
            }
            this.T.Vg && this.T.Vg();
            this.T.oi = !1;
            this.T.o = null;
            this.tl();
            var c;
            this.M && (this.M.Uj(), this.M = null, c = "-" + this.fc);
            this.hg && (this.hg.Uj(), this.hg = null, c = "-" + this.fc);
            if (c)
                for (var d in g.Ba.yj) g.a.MC(d, c) && delete g.Ba.yj[d]
        },
        pa: function(a, b) {
            this.T.q(a, b)
        },
        visibleChanged: function() {
            this.set("display", 0)
        },
        zIndexChanged: function() {
            this.set("display", 0)
        },
        cU: function(a) {
            g.j.Gq(a, this.opacity)
        },
        opacityChanged: function() {
            var a = this.get("opacity");
            this.opacity = Math.min(Math.max(0, a), 1);
            if (a = this.Lb)
                if (a.length)
                    for (var b = 0; b < a.length; b +=
                        1) this.cU(a[b]);
                else this.cU(a);
            this.e && this.e.C && "3D" == this.e.C.view.type && this.set("display", 0)
        },
        Bo: function() {
            return this.e.kd && !this.T.get("rejectMapMask")
        },
        II: function() {
            var a = this.get("bounds");
            if (a) {
                if (a instanceof g.re) {
                    var b = a.Xj(),
                        a = a.Eo(),
                        c = this.e.Ab(new g.U(180, 0)).x,
                        d = this.e.Ab(b),
                        e = this.e.Ab(a),
                        f = this.e.get("center");
                    b.Q > a.Q && (0 < f.Q ? e.x += c : d.x -= c);
                    this.I = [d.x, d.y, e.x, e.y]
                } else a instanceof g.Nf ? this.I = [a.ec.x, a.ec.y, a.Sd.x, a.Sd.y] : a instanceof g.yF && "3D" === this.T.Cg && (b = a.path[1], d =
                    this.e.Ab(a.path[0]), e = this.e.Ab(b), this.I = [d.x, d.y, e.x, e.y, a.X7, a.height]);
                return this.I
            }
            return null
        }
    });
    var Nc = function() {
        function a(a) {
            this.BF[g.a.wb(a)] = a;
            return this
        }

        function b(a) {
            this.BF[g.a.wb(a)] = null;
            return this
        }
        return function() {
            function c() {
                var a = c.BF,
                    b, f = [],
                    h;
                for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
                for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b = h);
                return b
            }
            c.BF = {};
            c.f1 = a;
            c.NFa = b;
            return c
        }
    }();
    g.lg = g.aa.extend({
        ka: [g.va],
        r: function(a, b) {
            this.vp = a | 0;
            this.FF = !!b;
            this.count = 0;
            this.UJ = Nc();
            this.clear();
            this.jB = []
        },
        rh: function() {
            return !this.count
        },
        eEa: function() {
            return this.count >= this.vp
        },
        vGa: function(a) {
            this.vp !== a && (this.vp = a | 0) && this.P0(this.vp)
        },
        Hd: function(a) {
            return !!this.e[a]
        },
        get: function(a, b) {
            var c = this.VX(a);
            return c ? c.value : b
        },
        set: function(a, b) {
            var c = this.VX(a);
            c ? c.value = b : (c = new g.lg.dr(a, b), this.e[a] = c, this.bB(c), this.count += 1, this.count > this.vp && this.P0(this.vp))
        },
        hw: function(a) {
            this.remove(a)
        },
        remove: function(a) {
            return this.e.hasOwnProperty(a) && this.BB(this.e[a]) ? !0 : !1
        },
        forEach: function(a, b) {
            for (var c = this.Yc.next; c !== this.Yc; c = c.next) a.call(b, c.value, c.key, this)
        },
        $J: function(a, b) {
            return this.e.hasOwnProperty(a) ? this.e[a].value : b
        },
        pFa: function() {
            return this.Yc.next.value
        },
        qFa: function() {
            return this.Yc.Ga.value
        },
        shift: function() {
            return this.J_(this.Yc.next)
        },
        Z1: function() {
            this.jB.length = 0
        },
        I5: function(a) {
            this.jB.push(a)
        },
        push: function(a) {
            a = new g.lg.dr("", a);
            0 === this.count ? (this.Yc.Ga = null,
                a.Ga = this.Yc, this.Yc.next = a) : (this.RB.next = a, a.Ga = this.RB);
            this.count += 1;
            this.RB = a
        },
        tya: function(a) {
            a = new g.lg.dr("", a);
            0 === this.count ? (this.Yc.Ga = null, a.Ga = this.Yc, this.RB = this.Yc.next = a) : (this.Yc.next.Ga = a, a.next = this.Yc.next, a.Ga = this.Yc, this.Yc.next = a);
            this.count += 1
        },
        ota: function() {
            if (this.count) {
                this.count -= 1;
                var a = this.Yc.next;
                a.next ? (a.next.Ga = this.Yc, this.Yc.next = a.next) : (this.Yc.next = null, this.RB = this.Yc.Ga = null);
                a.next = null;
                a.Ga = null;
                return a.value
            }
            return null
        },
        pop: function() {
            return this.J_(this.Yc.Ga)
        },
        VX: function(a) {
            if (this.e.hasOwnProperty(a)) return a = this.e[a], this.FF && (a.remove(), this.bB(a)), a
        },
        bB: function(a) {
            this.FF ? (a.next = this.Yc.next, a.Ga = this.Yc, this.Yc.next = a, a.next.Ga = a) : (a.Ga = this.Yc.Ga, a.next = this.Yc, this.Yc.Ga = a, a.Ga.next = a)
        },
        P0: function(a) {
            if (!(this.count <= a || this.count < 2 * this.jB.length)) {
                for (var b = this.FF ? this.Yc.Ga : this.Yc.next, c = {}, d = 0, e = this.jB.length; d < e; d++) c[this.jB[d]] = !0;
                for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.FF ? b.Ga : b.next, b.key && !c[b.key] && this.BB(b) && this.UJ(b.value),
                    b = d, b !== this.Yc && b !== this.RB););
            }
        },
        BB: function(a) {
            if (this.eC && !1 == this.eC(a.value)) return !1;
            a.remove();
            delete this.e[a.key];
            this.count -= 1;
            return !0
        },
        J_: function(a) {
            this.Yc !== a && (this.eC && console.log("Warnning!!!"), this.BB(a));
            return a.value
        },
        clear: function() {
            this.e = {};
            this.Yc = new g.lg.dr("", null);
            this.Yc.Ga = this.Yc.next = this.Yc;
            this.count = 0
        }
    });
    g.lg.dr = function(a, b) {
        this.key = a;
        this.value = b
    };
    g.lg.dr.prototype.Ga = null;
    g.lg.dr.prototype.next = null;
    g.lg.dr.prototype.remove = function() {
        this.Ga.next = this.next;
        this.next.Ga = this.Ga;
        this.next = this.Ga = null
    };

    function Oc(a, b, c) {
        this.url = a;
        this.Jc = b;
        this.OQ = c;
        this.hn = this.wK = !1
    }

    function Pc(a, b, c) {
        var d = Qc;
        return function() {
            return d.call(this, a, b, c)
        }
    }

    function Qc(a, b, c) {
        a.KCa = +new Date;
        a.loaded = b;
        clearTimeout(a.Axa);
        var d = a.Esa;
        d.Bn.remove(a.url) && d.aga();
        d = a.Lra ? a.fa : a.ya;
        a.fa = null;
        (c || b || a.OQ) && a.Jc(b ? d : null, a);
        a.j5 ? (a.j5.ri(), a.j5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.ya = null)
    }
    g.gF = g.aa.extend({
        MAa: "assets/image/blank.gif",
        r: function(a, b, c) {
            this.timeout = b || 15E3;
            this.zq = new g.lg(1024);
            this.Bn = new g.lg(1024);
            this.j2 = a;
            this.zQ = c
        },
        vM: function(a) {
            a && this.Bn.count >= this.j2 && (a = this.Bn.Yc.Ga.value, a.hn && (this.Bn.remove(a.url), this.FW(a)));
            for (; this.zq.count && !(this.Bn.count >= this.j2);) this.lda(this.zq.shift())
        },
        aga: function() {
            if (!this.nX) {
                this.nX = !0;
                var a = this;
                setTimeout(function() {
                    a.nX = !1;
                    a.vM()
                }, 0)
            }
        },
        lda: function(a) {
            var b = document.createElement("img");
            a.jpa && (b.crossOrigin =
                "anonymous");
            b.src = a.url;
            a.ya = b;
            a.Esa = this;
            a.startTime = +new Date;
            a.wK = !0;
            b.complete ? Qc(a, !0) : (this.Bn.set(a.url, a), b.onload = Pc(a, !0), b.onerror = Pc(a, !1, !0), b.onabort = Pc(a, !1), a.Axa = setTimeout(Pc(a, !1, !0), this.timeout))
        },
        FW: function(a) {
            a.wK && (Qc(a, !1), a.hn = !0, a.EBa = !0)
        },
        CEa: function(a, b, c) {
            return this.Vy(a.url, b, c, !0, a.ta.z + "_" + a.ta.x + "_" + a.ta.y)
        },
        Vy: function(a, b, c, d, e) {
            var f = this.Bn.get(a);
            if (f && f.hn) f.hn = !1, f.Jc = b, f.OQ = c;
            else {
                f = new Oc(a, b, c);
                f.Lra = d;
                f.key = e;
                if (this.zq.get(g.a.wb(f))) return;
                this.zq.set(g.a.wb(f),
                    f);
                this.vM(!0)
            }
            return f
        },
        usa: function(a, b, c) {
            var d = this.Bn.get(a);
            if (d && d.hn) d.hn = !1, d.Jc = b, d.OQ = c;
            else {
                d = new Oc(a, b, c);
                d.jpa = !0;
                if (this.zq.get(g.a.wb(d))) return;
                this.zq.set(g.a.wb(d), d);
                this.vM(!0)
            }
            return d
        },
        M1: function(a) {
            a.hn || (a.hn = !0, this.zq.remove(g.a.wb(a)))
        },
        clear: function(a) {
            this.zq.forEach(function(a) {
                a.hn = !0
            });
            this.zq.clear();
            if (a)
                for (; 0 < this.Bn.length;) a = this.Bn.pop(), this.FW(a);
            else this.Bn.forEach(function(a) {
                a.hn = !0
            })
        }
    });

    function Rc(a, b, c) {
        this.z = a;
        this.x = b;
        this.y = c
    }
    Rc.prototype.lb = function() {
        return new Rc(this.z, this.x, this.y)
    };
    Rc.prototype.toString = function() {
        return this.z + "/" + this.x + "/" + this.y
    };
    g.ob = function(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
        this.ta = a;
        this.key = a.toString();
        this.Ae = b
    };
    g.Zq = Rc;
    g.o.ob = g.o.Ub.extend({
        r: function(a, b, c, d, e) {
            arguments.callee.la.apply(this, arguments);
            this.W("tileSize", a);
            this.W("tiles", a);
            this.Ue(["zooms", "type", "detectRetina", "errorUrl"], a);
            a.qG && (this.W("lang", b, !0), this.W("mapStyle", b, !0), this.W("style", b, !0), this.W("features", b, !0));
            var f = "overlayer" === a.get("type") || !1 === a.get("blend");
            this.Ek = !f && !g.l.ba;
            if (g.l.ye || g.l.rHa) this.Ek = !1;
            var h = b.get("size"),
                h = h.width * h.height / 65536;
            this.ja = g.l.ba && g.l.ja && this.get("detectRetina");
            g.l.Mc && g.l.ba && 9 < h && (this.Ek = !1);
            this.Ri = !f && !a.lk;
            this.Si = !f && !a.lk;
            this.QK = c;
            this.W("reload", a);
            a.Hra ? this.W("createTile", a) : this.W("tileFun", a);
            this.$e = d;
            this.TR = e
        },
        langChanged: function() {
            this.set("reload");
            this.T.Os()
        },
        styleChanged: function() {
            this.e.xd || (this.set("reload"), this.T.Os())
        },
        featuresChanged: function() {
            this.set("reload");
            this.T.Os()
        },
        reloadChanged: function() {
            this.set("display", 0)
        },
        tileFunChanged: function() {
            var a = this.QK || this.get("tileFun");
            this.po = function(b, c, d) {
                var e = a(b.ta.x, b.ta.y, b.ta.z);
                if (!b.us || b.us.hn) b.loaded = !1, b.us = ("3D" === this.e.C.view.type ? g.lm.usa : g.lm.Vy).call(g.lm, e, function(a) {
                    b.us = null;
                    a ? c(a) : d()
                }, !1)
            }
        },
        createTileChanged: function() {
            this.T.D = !0;
            var a = this.T.getCreateTile();
            this.T.D = !1;
            this.po = function(b, c, d) {
                a.call(this.f.T, b.ta.x, b.ta.y, b.ta.z, c, d, b)
            };
            this.set("reload")
        },
        he: function() {
            var a = this.T.get("zooms", null, !0);
            this.T.Gra && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
            return {
                zd: this.T.get("tileSize"),
                visible: this.T.get("visible"),
                I: this.II(),
                hb: a,
                IH: this.Ek,
                Ri: this.Ri,
                Si: this.Si,
                opacity: this.T.get("opacity"),
                po: this.T.get("createTile"),
                Fo: this.QK || this.T.get("tileFun"),
                Mc: this.T.oq ? !1 : this.T.get("detectRetina") && g.l.ja && g.l.ba,
                kd: this.Bo()
            }
        },
        Ul: function(a) {
            if (g.M.Yd.Mi) return new g.M.Yd.Mi(this, a)
        }
    });
    g.lm = new g.gF(6, null);
    g.o.bd = g.o.Ub.extend({
        r: function(a, b) {
            this.Va = Math.min(2, window.devicePixelRatio || 1);
            this.Mc = g.l.ja && !a.sj;
            this.map = b;
            this.Oq = 0;
            this.im = !1;
            this.fg = this.tf = 0;
            this.Ug = [];
            arguments.callee.la.apply(this, arguments);
            this.uv = [];
            this.Zl = new g.o.x$;
            a && (this.W("style", a), this.W("cursor", a, !0), this.Ywa = a.get("stable") || !1, this.W("dataSources", a), this.W("bubble", a));
            this.W("display", b);
            this.Hba()
        },
        he: function() {
            return {
                visible: this.get("visible"),
                hb: this.get("zooms"),
                opacity: this.get("opacity"),
                zIndex: this.get("zIndex"),
                Ox: this.T.get("alwaysRender") || !1,
                kd: this.Bo()
            }
        },
        dataSourcesChanged: function() {
            var a = this.get("dataSources");
            a && a.length ? "string" === typeof a ? (new g.fb.tb(a)).h("complete", function(a) {
                this.H6(a.data);
                this.Wr = a.data;
                this.im = !0;
                this.set("display");
                this.Ka = !0;
                this.T.q("complete")
            }, this) : a.length && (this.H6(a), this.Wr = a, this.im = !0, this.set("display"), this.Ka = !0, this.T.q("complete")) : this.clear()
        },
        getDatas: function() {
            return this.Wr
        },
        yya: function() {
            if (this.T.sj) {
                var a = this.xm;
                this.tf = a.tf;
                this.fg = a.fg
            }
        },
        pa: function(a, b) {
            var c = {
                type: a,
                data: "mouseout" === a ? this.Yfa || null : b.bu.eb,
                target: this.T
            };
            this.Yfa = "mouseout" === a ? null : b.bu.eb;
            this.T.q(a, c)
        },
        qc: function(a) {
            this.pa(a.type, a)
        },
        Hba: function() {
            this.h("click", this.qc);
            this.h("dblclick", this.qc);
            this.h("mousedown", this.qc);
            this.h("mouseup", this.qc);
            this.h("mouseover", this.qc);
            this.h("mouseout", this.qc);
            this.h("touchstart", this.qc);
            this.h("touchend", this.qc)
        },
        BBa: function() {
            this.G("click", this.qc);
            this.G("dblclick", this.qc);
            this.G("mousedown", this.qc);
            this.G("mouseup", this.qc);
            this.G("mouseover", this.qc);
            this.G("mouseout", this.qc);
            this.G("touchstart", this.qc);
            this.G("touchend", this.qc)
        },
        styleChanged: function() {
            this.xm = this.get("style");
            this.yya();
            this.set("display", 0)
        },
        H6: function(a) {
            if (a) {
                this.clear();
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b].lnglat;
                    a[b].lnglat = g.a.Ia(c);
                    c = this.map.Ab(c);
                    c = new g.ai({
                        name: "point-" + g.a.wb(this),
                        ha: new g.Ca.Dg([c.x, c.y], !0)
                    });
                    c.ur = this;
                    c.eb = a[b];
                    this.yH(c)
                }
            }
        },
        eqa: function(a) {
            if ("geojson" === a) return new g.D$({
                map: this.map
            });
            if ("topjson" === a) return new g.hAa({
                map: this.map
            });
            if ("subway" === a) return new g.cAa({
                map: this.map
            })
        },
        Dua: function(a) {
            if (a) {
                var b = [],
                    b = [],
                    c = {};
                if (a.rules) {
                    for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                        for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.Eg.DV(h[k].fill)), h[k].stroke && (f[k] = new g.style.Eg.hW(h[k].stroke));
                        h = f;
                        b[d].OK = h;
                        b[d] = new g.style.uaa(b[d])
                    }
                    c.rules = b
                }
                if (a.symbolizers) {
                    b = a.symbolizers;
                    a = 0;
                    for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.Eg.DV(b[a].fill)),
                    b[a].stroke && (b[a] = new g.style.Eg.hW(b[a].stroke));
                    c.OK = b
                }
                a = new g.SL(c)
            } else a = new g.SL({});
            this.set("style", a);
            return a
        },
        yBa: function(a, b) {
            var c = new g.fb.tb(a);
            c.h("complete", function(c) {
                c = this.fa[a] = this.eqa(b).sT(c);
                this.Lx(c);
                this.pa("complete")
            }, this);
            c.h("error", this.hc, this)
        },
        fva: function(a) {
            "px" === a.target.get("unit") ? (this.tf = Math.max(a.nl, this.tf), this.fg = Math.max(a.nl, this.fg)) : a.nl > this.Bs && (this.Bs = a.nl, this.Xy = this.Bs / this.map.C.hj.Zp(20))
        },
        yH: function(a) {
            this.Zl.add(a);
            if (!this.FC &&
                !this.T.sj) {
                if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                    a.h("rad", this.fva, this);
                    var b = a.get("radius");
                    b.length && (b = Math.max.apply(null, b));
                    "px" === a.get("unit") ? (this.tf = Math.max(b, this.tf), this.fg = Math.max(b, this.fg)) : this.Bs ? b > this.Bs && (this.Bs = b, this.Xy = this.Bs / this.map.C.hj.Zp(20)) : (this.Bs = b, this.Xy = this.Bs / this.map.C.hj.Zp(20))
                }
                b = a.get("strokeWeight") || 0;
                if (!this.Yy || b > this.Yy) this.Yy = b
            }
            this.Ywa || a.W("feature", this, !0)
        },
        Lx: function(a) {
            this.im = !0;
            for (var b = 0, c = a.length; b <
            c; b += 1) this.yH(a[b])
        },
        clear: function() {
            this.im = !0;
            this.Wr = [];
            this.Zl.clear();
            this.set("display", 0)
        },
        pn: function(a) {
            var b, c;
            b = this.Zl.pn([a[0] + g.a.Ea, a[1], a[2] + g.a.Ea, a[3]]);
            c = this.Zl.pn([a[0] - g.a.Ea, a[1], a[2] - g.a.Ea, a[3]]);
            a = this.Zl.pn(a);
            return g.extend(a, g.extend(b, c))
        },
        xDa: function(a) {
            var b, c = this.get("style"),
                d = a.pl;
            c instanceof g.SL || (c = this.Dua(c));
            if (d && 0 < d.length) b = c.o2(d, a);
            else {
                if (c.R7.length || c.pl.length) b = c.xna(a);
                b || (b = a.Ipa())
            }
            return b
        },
        zR: function(a) {
            function b(a, b) {
                return a.$l - b.$l
            }
            var c = [],
                d, e, f, h, k, l = {};
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    f = a[d];
                    h = f.get("zIndex");
                    for (e in l)
                        if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
                    "undefined" === typeof l[h] && (c.push([
                        [],
                        [], h
                    ]), l[h] = c.length - 1);
                    h = c[l[h]];
                    h[0].push(f)
                }
            c.sort(this.Uwa);
            a = 0;
            for (d = c.length; a < d; a += 1) c[a][0].sort(b);
            return c
        },
        featureChanged: function(a) {
            this.im = !0;
            var b = a.target,
                c = b.cc();
            0 !== this.Zl.Npa([g.a.wb(b)]).length && (this.Zl.remove(b, a.wv), c && !a.Qna && this.Zl.add(b))
        },
        t7: function(a) {
            this.im = !0;
            for (var b, c = 0, d = a.length; c <
            d; c += 1) b = a[c], b.ha.wv = null, b.ds(!0), b.sl("feature")
        },
        BGa: function(a, b) {
            return a[1].zIndex === b[1].zIndex ? g.a.wb(a[1]) - g.a.wb(b[1]) : a[1].zIndex - b[1].zIndex
        },
        Uwa: function(a, b) {
            return a[2] - b[2]
        },
        nGa: function(a) {
            return a.DDa() === g.o.mAa.Wza
        },
        Ul: function(a) {
            return this.FC ? new g.M.Ce.Bl(this, a) : "c" === this.map.get("overlayRender") && g.M.canvas.Bl ? new g.M.canvas.Bl(this, a) : g.M.Yd.Bl && "d" === this.map.get("overlayRender") ? new g.M.Yd.Bl(this, a) : null
        }
    });
    g.o.bd.zb({
        Vl: function(a) {
            return this.FC ? new g.Da.Ce.Bl(this, a) : this.T.sj ? new g.Da.daa(this, a) : new g.Da.Bl(this, a)
        }
    });
    g.o.x$ = g.aa.extend({
        r: function() {
            this.clear()
        },
        clear: function() {
            this.bq = [];
            this.oT = new g.Dk
        },
        add: function(a) {
            var b = g.a.wb(a),
                c = a.cc();
            this.bq[b] || (this.count += 1, this.bq[b] = a, c && !g.I.cb(c.od(), [Infinity, Infinity, -Infinity, -Infinity]) && this.oT.qs(c.od(), a))
        },
        sDa: function() {
            return this.bq
        },
        pn: function(a) {
            return this.oT.gwa(a)
        },
        Npa: function(a) {
            var b = a.length,
                c = [],
                d;
            for (d = 0; d < b; d += 1) this.bq[a[d]] && c.push(this.bq[a[d]]);
            return c
        },
        remove: function(a, b) {
            var c = g.a.wb(a).toString(),
                d = a.cc();
            this.bq[c] && (this.bq[c] =
                null, d && (c = "undefined" !== typeof b ? b : d.od(), this.oT.remove(c, a)))
        }
    });
    g.Dk = g.aa.extend({
        r: function(a) {
            this.O5 = "undefined" !== typeof a ? a : 6;
            this.DJ = Math.floor(this.O5 / 2);
            this.AK = {
                I: [Infinity, Infinity, -Infinity, -Infinity],
                Gb: []
            };
            this.count = 0
        },
        Bma: function(a, b) {
            var c = -1,
                d = [],
                e;
            d.push(b);
            var f = b.Gb;
            do {
                -1 !== c && (d.push(f[c]), f = f[c].Gb, c = -1);
                for (var h = f.length - 1; 0 <= h; h -= 1) {
                    var k = f[h];
                    if ("undefined" !== typeof k.Oe) {
                        c = -1;
                        break
                    }
                    var l = g.Dk.zz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Gb.length + 1),
                        k = g.Dk.zz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
                            (k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Gb.length + 2);
                    if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
                }
            } while (-1 !== c);
            return d
        },
        qs: function(a, b, c) {
            a = {
                I: a,
                Oe: b
            };
            "undefined" !== typeof c && (a.type = c);
            this.N4(a, this.AK);
            this.count += 1
        },
        N4: function(a, b) {
            var c;
            if (0 === b.Gb.length) b.I = g.I.lb(a.I), b.Gb.push(a);
            else {
                var d = this.Bma(a, b),
                    e = a;
                do {
                    if (c && "undefined" !== typeof c.Gb && 0 === c.Gb.length) {
                        var f = c;
                        c = d.pop();
                        for (var h = 0, k = c.Gb.length; h < k; h += 1)
                            if (c.Gb[h] === f || 0 === c.Gb[h].Gb.length) {
                                c.Gb.splice(h, 1);
                                break
                            }
                    } else c = d.pop();
                    f =
                        e instanceof Array;
                    if ("undefined" !== typeof e.Oe || "undefined" !== typeof e.Gb || f) {
                        if (f) {
                            f = 0;
                            for (h = e.length; f < h; f += 1) g.I.extend(c.I, e[f].I);
                            c.Gb = c.Gb.concat(e)
                        } else g.I.extend(c.I, e.I), c.Gb.push(e); if (c.Gb.length <= this.O5)
                            if (0 < d.length) e = {
                                I: g.I.lb(c.I)
                            };
                            else break;
                        else e = f = this.jsa(c.Gb), 1 > d.length && (c.Gb.push(f[0]), d.push(c), e = f[1])
                    } else g.I.extend(c.I, e.I), e = {
                        I: g.I.lb(c.I)
                    }
                } while (0 < d.length)
            }
        },
        jsa: function(a) {
            for (var b = this.Iua(a); 0 < a.length;) this.Jua(a, b[0], b[1]);
            return b
        },
        Iua: function(a) {
            for (var b =
                a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
                var h = a[f];
                h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f);
                h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f)
            }
            Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
            return [{
                I: g.I.lb(b.I),
                Gb: [b]
            }, {
                I: g.I.lb(c.I),
                Gb: [c]
            }]
        },
        Jua: function(a, b, c) {
            for (var d = g.Dk.zz(b.I[2] - b.I[0], b.I[3] - b.I[1],
                b.Gb.length + 1), e = g.Dk.zz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Gb.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                var m = a[l],
                    n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]],
                    n = Math.abs(g.Dk.zz(n[1] - n[0], n[3] - n[2], b.Gb.length + 2) - d),
                    m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]],
                    m = Math.abs(g.Dk.zz(m[1] - m[0], m[3] - m[2], c.Gb.length + 2) - e),
                    p = Math.abs(m - n);
                if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
                    b
            }
            d = a.splice(h, 1)[0];
            b.Gb.length + a.length + 1 <= this.DJ ? (b.Gb.push(d), g.I.extend(b.I, d.I)) : c.Gb.length + a.length + 1 <= this.DJ ? (c.Gb.push(d), g.I.extend(c.I, d.I)) : (k.Gb.push(d), g.I.extend(k.I, d.I))
        },
        remove: function(a, b) {
            var c = [];
            c[0] = {
                I: a
            };
            (c[1] = b) || (c[1] = !1);
            c[2] = this.AK;
            this.count -= 1;
            if (!1 === c[1]) {
                var d = 0,
                    e = [];
                do d = e.length, e = e.concat(this.x7.apply(this, c)); while (d !== e.length);
                return e
            }
            return this.x7.apply(this, c)
        },
        x7: function(a, b, c) {
            var d = [],
                e = [],
                f = [];
            if (!a || !g.I.Pg(a.I, c.I)) return f;
            a = g.I.lb(a.I);
            var h;
            e.push(c.Gb.length);
            d.push(c);
            do {
                c = d.pop();
                var k = e.pop() - 1;
                if ("undefined" !== typeof b)
                    for (; 0 <= k;) {
                        var l = c.Gb[k];
                        if (g.I.Pg(a, l.I))
                            if (b && "undefined" !== typeof l.Oe && l.Oe === b || !b && ("undefined" !== typeof l.Oe || g.I.k2(a, l.I))) {
                                "undefined" !== typeof l.Gb ? (f = this.sz(l, !0, [], l), c.Gb.splice(k, 1)) : f = c.Gb.splice(k, 1);
                                g.Dk.yT(c);
                                b = void 0;
                                c.Gb.length < this.DJ && (h = this.sz(c, !0, [], c));
                                break
                            } else "undefined" !== typeof l.Gb && (e.push(k), d.push(c), c = l, k = l.Gb.length);
                        k -= 1
                    } else if ("undefined" !== typeof h) {
                    c.Gb.splice(k + 1, 1);
                    0 < c.Gb.length && g.Dk.yT(c);
                    k = 0;
                    for (l = h.length; k < l; k += 1) this.N4(h[k], c);
                    h.length = 0;
                    0 === d.length && 1 >= c.Gb.length ? (h = this.sz(c, !0, h, c), c.Gb.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.Gb.length < this.DJ ? (h = this.sz(c, !0, h, c), c.Gb.length = 0) : h = void 0
                } else g.Dk.yT(c)
            } while (0 < d.length);
            return f
        },
        search: function(a, b) {
            return this.sz({
                I: a
            }, !1, [], this.AK, b)
        },
        gwa: function(a, b) {
            return this.sz({
                I: a
            }, !1, [], this.AK, b, !0)
        },
        sz: function(a, b, c, d, e, f) {
            var h = {},
                k = [];
            if (!g.I.Pg(a.I, d.I)) return f ? h : c;
            k.push(d.Gb);
            do {
                d = k.pop();
                for (var l = d.length - 1; 0 <= l; l -= 1) {
                    var m = d[l];
                    if (g.I.Pg(a.I, m.I))
                        if ("undefined" !== typeof m.Gb) k.push(m.Gb);
                        else if ("undefined" !== typeof m.Oe)
                            if (b) c.push(m);
                            else if ("undefined" === typeof e || m.type === e) m = m.Oe, "undefined" !== typeof f ? h[g.a.wb(m)] = m : c.push(m)
                }
            } while (0 < k.length);
            return "undefined" !== typeof f ? h : c
        }
    });
    g.Dk.yT = function(a) {
        var b = a.Gb.length,
            c = a.I;
        if (0 === b) g.I.empty(c);
        else {
            var d = a.Gb[0].I;
            c[0] = d[0];
            c[2] = d[2];
            c[1] = d[1];
            c[3] = d[3];
            for (d = 1; d < b; d += 1) g.I.extend(c, a.Gb[d].I)
        }
    };
    g.Dk.zz = function(a, b, c) {
        var d = (a + b) / 2;
        a *= b;
        return a * c / (a / (d * d))
    };
    g.A = g.A || {};
    g.A.Bh = g.aa.extend({
        ka: [g.va, g.Se],
        nua: ["position", "altitude", "visible", "clickable", "bubble"],
        r: function(a, b) {
            this.map = b;
            this.Ue(this.nua, a);
            this.W("zIndex", a);
            this.W("draggable", a);
            g.l.If && this.Oba();
            g.l.ba || this.nM();
            this.Nb = a;
            this.Nb.A = this
        },
        draggableChanged: function() {
            this.get("draggable") ? this.mM() : this.eO()
        },
        pa: function(a, b) {
            var c;
            c = b ? {
                type: a,
                pixel: b.vb,
                target: this.Nb,
                lnglat: b.$f
            } : {
                type: a
            };
            this.Nb && this.Nb.q(a, c)
        },
        qc: function(a) {
            ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type &&
                "longclick" !== a.type || this.get("clickable")) && this.pa(a.type, a)
        },
        lM: function() {
            this.h("click", this.qc);
            this.h("rightclick", this.qc);
            this.h("longclick", this.qc);
            this.h("longpress", this.qc);
            this.h("dblclick", this.qc)
        },
        R0: function() {
            this.G("click", this.qc);
            this.G("rightclick", this.qc);
            this.G("longclick", this.qc);
            this.G("longpress", this.qc);
            this.G("dblclick", this.qc)
        },
        nM: function() {
            this.get("clickable") && this.lM();
            this.h("mousemove", this.qc);
            this.h("mouseout", this.qc);
            this.h("mouseover", this.qc);
            this.h("mousedown",
                this.qc);
            this.h("mouseup", this.qc)
        },
        CBa: function() {
            this.R0();
            this.G("mousemove", this.qc);
            this.G("mouseout", this.qc);
            this.G("mouseover", this.qc);
            this.G("mousedown", this.qc);
            this.G("mouseup", this.qc)
        },
        clickableChanged: function() {
            this.get("clickable") ? this.lM() : this.R0()
        },
        Oba: function() {
            this.get("clickable") && this.lM();
            this.h("touchstart", this.qc, this);
            this.h("touchmove", this.qc, this);
            this.h("touchend", this.qc, this)
        },
        mM: function() {
            this.h("dragstart", this.Rt);
            this.h("dragging", this.Pt);
            this.h("dragend",
                this.Qt)
        },
        Rt: function(a) {
            this.map.AS(a);
            this.Zf = a.vb;
            this.n5 = a.Pa;
            this.m5 = a.$f;
            this.pa("dragstart", a)
        },
        Pt: function(a) {
            var b = this.map.C.view.type;
            if ("2D" == b) {
                var c = a.vb.Za(this.Zf),
                    b = c.x,
                    c = c.y;
                this.Zf = a.vb;
                var d = this.map.get("rotation") * Math.PI / 180,
                    e = b * Math.cos(d) + Math.sin(d) * c,
                    b = -Math.sin(d) * b + Math.cos(d) * c;
                this.Qo(new g.H(e, b));
                this.pa("dragging", a)
            } else "3D" == b && a.Pa && (c = a.vb.Za(this.Zf), b = c.x, c = c.y, e = a.Pa.Za(this.n5), a.$f.Za(this.m5), this.Zf = a.vb, "function" === typeof this.Zy && this.Zy(b, c, e), this.n5 =
                a.Pa, this.m5 = a.$f, this.pa("dragging", a))
        },
        Qt: function(a) {
            this.map.fw();
            "3D" == this.map.C.view.type && this.Nb.reset && this.Nb.reset();
            this.pa("dragend", a)
        },
        eO: function() {
            this.G("dragstart", this.Rt);
            this.G("dragging", this.Pt);
            this.G("dragend", this.Qt)
        },
        fN: function(a) {
            var b, c, d = [];
            if (a)
                for (b = 0, c = a.length; b < c; b += 1) d.push(this.gN(a[b]));
            return d
        },
        gN: function(a) {
            a = this.map.Ab(a);
            return [a.x, a.y]
        },
        dg: function(a) {
            var b = this.L.kb || this.map.get("centerCoords"),
                c = Math.pow(2, 20 - this.map.get("zoom"));
            return [(a[0] -
                b.x) / c, (a[1] - b.y) / c]
        },
        VA: function(a, b) {
            var c = this.map.C,
                d = [],
                e = !1;
            a[0] instanceof Array && "number" !== typeof a[0][0] && (e = !0);
            if (e)
                for (var e = 0, f = a.length; e < f; e++) {
                    for (var h = [], k = 0, l = a[e].length; k < l; k++) {
                        var m = c.Ab(a[e][k]);
                        m.x += b[0];
                        m.y += b[1];
                        h.push(c.Td(m))
                    }
                    d.push(h)
                } else
                for (e = 0, f = a.length; e < f; e++) h = c.Ab(a[e]), h.x += b[0], h.y += b[1], d.push(c.Td(h));
            return d
        }
    });
    g.A.sb = g.A.Bh.extend({
        ND: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "),
        pla: {
            AMAP_ANIMATION_NONE: !1,
            AMAP_ANIMATION_DROP: g.Dj.Easing.Bounce,
            AMAP_ANIMATION_BOUNCE: g.Dj.Easing.Cubic
        },
        r: function(a, b) {
            arguments.callee.la.apply(this, arguments);
            this.Ue(this.ND, a);
            this.W("move", a);
            this.ema();
            this.ou();
            this.set("AnimationOffset", new g.H(0, 0), !0);
            this.W("raiseOnDrag", a);
            this.W("animation",
                a)
        },
        xN: function(a, b, c) {
            var d = this.get("animation");
            if (d && "AMAP_ANIMATION_NONE" !== d) {
                var e = this;
                this.xn = new g.Dj;
                this.xn.transition = function(c, h, k) {
                    if ("AMAP_ANIMATION_NONE" === d) return 0;
                    if (a && 600 <= k) return e.xn.stop(), 0;
                    c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
                    "out" === b ? c = "Out" : "in" === b && (c = "In");
                    return e.pla[d][c](k % 600 / 600)
                };
                c = c || 40;
                this.xn.tq = function(a) {
                    e.set("AnimationOffset", e.gO.add(new g.H(0, -1 * c * a)))
                };
                this.gO = new g.H(0, 0);
                this.xn.Dn()
            }
        },
        AnimationOffsetChanged: function() {
            this.positionChanged()
        },
        T_: function() {
            this.xn && (this.xn.stop(), this.set("AnimationOffset", this.gO));
            this.set("AnimationOffset", new g.H(0, -40));
            if (this.Wq) this.Wq.set("position", this.get("position"));
            else {
                var a = new z.A.sb({
                    zIndex: this.get("zIndex") - 1,
                    icon: new z.A.ci({
                        image: g.w.yb + "/theme/v1.3/dragCross.png",
                        size: new g.wd(14, 11),
                        innerOverlay: !0
                    }),
                    offset: new g.H(-4, -5),
                    position: this.get("position"),
                    innerOverlay: !0
                });
                a.Aa = !0;
                this.Wq = a
            }
            this.Wq.D = !0;
            this.Wq.setMap(this.map.C);
            this.Wq.D = !1
        },
        JX: function() {
            this.set("animation", "AMAP_ANIMATION_DROP", !0);
            this.xN(!0, "in");
            this.Wq.D = !0;
            this.Wq.D = !1
        },
        animationChanged: function() {
            this.xn && (this.xn.stop(), this.set("AnimationOffset", this.gO), this.xn = null);
            var a = this.get("animation");
            a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.xN(!0, "in", 100) : this.xN())
        },
        dh: function() {
            this.Wq && this.Wq.set("position", this.get("position"))
        },
        raiseOnDragChanged: function() {
            this.get("raiseOnDrag") ? (this.h("dragstart", this.T_, this), this.h("dragging", this.dh, this), this.h("dragend", this.JX, this)) : (this.G("dragstart",
                this.T_, this), this.G("dragging", this.dh, this), this.G("dragend", this.JX, this))
        },
        Qo: function(a) {
            var b = this.get("position");
            a = this.map.Ab(b).add(a.Jd(Math.pow(2, 20 - this.map.get("zoom"))));
            b instanceof g.U ? this.set("position", this.map.Td(a)) : this.set("position", a)
        },
        Zy: function(a, b) {
            var c = this.get("position"),
                d = this.get("altitude"),
                c = this.map.xs(c, d),
                d = this.map.Lp(new g.H(c.x + a, c.y + b), null, d);
            this.set("position", d)
        },
        ema: function() {
            var a = this.get("content"),
                b = this.get("shadow"),
                c = this.get("offset"),
                d = this.get("label"),
                e, f = this;
            e = a ? this.z1(a, c) : this.yP(this.get("icon"), function() {
                f.L && f.L.ca ? (g.l.vi && g.a.iepngFix(e), f.offsetChanged(), f.bL()) : f.map && f.map.set("display")
            });
            this.set("contentDom", e, !0);
            b && (a = this.F1(b, c), this.set("shadowDom", a, !0));
            d && d.content && this.set("labelDom", this.zP(d.content), !0)
        },
        zP: function(a) {
            var b = document.createElement("div");
            b.className = "amap-marker-label";
            b.innerHTML = a;
            return b
        },
        ou: function() {
            var a = this.get("position");
            if (this.map && a && !this.L) {
                var b = this.map,
                    a = this.map.Ab(a),
                    a = this.L =
                        new g.ai({
                            name: "marker-" + g.a.wb(this),
                            map: b,
                            ha: new g.Ca.Dg([a.x, a.y])
                        });
                a.Gp = this.Nb.CLASS_NAME;
                a.ur = this;
                this.W("coords", a, !0);
                a.Ue("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
            }
        },
        getParams: function() {
            return {
                zIndex: this.get("zIndex"),
                Ep: this.get("angle"),
                Kg: this.get("contentDom"),
                qJ: this.get("labelDom"),
                m8: this.get("shadowDom"),
                opacity: this.get("opacity"),
                altitude: this.get("altitude"),
                title: this.get("title"),
                label: this.get("label"),
                XE: this.get("AnimationOffset"),
                verticalAlign: this.get("verticalAlign"),
                textAlign: this.get("textAlign"),
                offset: this.get("offset"),
                g5: this.get("isTop"),
                shape: this.get("shape"),
                visible: this.get("visible") && !this.Nb.get("outOfZooms"),
                anchor: this.get("anchor")
            }
        },
        offsetChanged: function() {
            function a(a) {
                var c = b.get("offset"),
                    f = b.get("AnimationOffset"),
                    h = b.get("verticalAlign"),
                    k = b.get("textAlign"),
                    l = Math.round(a.x) + c.x + f.x;
                a = Math.round(a.y) + c.y + f.y;
                var f = b.get("anchor"),
                    m = b.L.Qj || g.j.yo(b.L.Kg);
                b.L.Qj = m;
                c = m[0];
                m = m[1];
                f && (f = f.split("-"),
                    2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length && "center" === f[0] && (k = "center", h = "middle"));
                switch (k) {
                    case "center":
                        l -= c / 2;
                        break;
                    case "right":
                        l -= c
                }
                switch (h) {
                    case "middle":
                        a -= m / 2;
                        break;
                    case "bottom":
                        a -= m
                }
                b.L.ca.style.left = l + "px";
                b.L.ca.style.top = a + "px"
            }
            if (this.map)
                if (this.L && this.L.ca) {
                    var b = this,
                        c = this.map.C.view.type;
                    "2D" == c ? (c = this.map.Ab(this.get("position")), c = c.Za(this.L.La).gd(Math.pow(2, 20 - this.map.get("zoom"))), this.L.ca && (this.L.ca.sB && this.L.ca.parentNode !== this.L.ca.sB ? this.map.set("display") :
                        a(c))) : "3D" == c && (c = this.get("position"), c = this.map.xs(c, this.get("altitude")), this.L.ca && (this.L.ca.sB && this.L.ca.parentNode !== this.L.ca.sB ? this.map.set("display") : a(c)))
                } else this.map.set("display")
        },
        altitudeChanged: function() {
            this.offsetChanged()
        },
        positionChanged: function() {
            if (this.L) {
                var a = this.map.Ab(this.get("position"));
                this.set("coords", [a.x, a.y]);
                this.map && (this.L.naa = !0, this.offsetChanged())
            }
        },
        anchorChanged: function() {
            this.DF()
        },
        textAlignChanged: function() {
            this.DF()
        },
        verticalAlignChanged: function() {
            this.DF()
        },
        DF: function() {
            this.L && (this.L.Qj = null, this.L.ge = !0, this.map && (this.map.sd.hm = !0, this.map.set("display")))
        },
        contentChanged: function() {
            if (this.L) {
                this.L.Qj = null;
                this.map.sd.hm = !0; - 1 === g.a.indexOf(this.map.sd.Ug, this.L) && this.map.sd.Ug.push(this.L);
                var a = this.get("contentDom");
                this.L.ca && this.L.ca === a.parentNode && this.L.ca.removeChild(a);
                var a = this.get("content"),
                    b = this.get("offset"),
                    a = this.z1(a, b);
                this.set("contentDom", a);
                this.L.ca ? (g.l.vi && g.a.iepngFix(a), this.L.ca.appendChild(a), this.L.Kg = a, this.offsetChanged(),
                    this.bL()) : this.map && this.map.set("display");
                this.titleChanged()
            }
        },
        iconChanged: function() {
            if (this.L && this.L.ca && !this.get("content")) {
                this.L.Qj = null;
                this.map.sd.hm = !0; - 1 === g.a.indexOf(this.map.sd.Ug, this.L) && this.map.sd.Ug.push(this.L);
                this.L.ca && this.get("contentDom") && this.L.ca.removeChild(this.get("contentDom"));
                var a = this.get("icon");
                this.get("offset");
                var b = this,
                    c = this.yP(a, function() {
                        b.L && b.L.ca ? (g.l.vi && g.a.iepngFix(c), b.offsetChanged(), b.bL()) : b.map && b.map.set("display")
                    });
                this.set("contentDom",
                    c);
                this.L.ca && (this.L.ca.appendChild(c), this.L.Kg = c);
                this.titleChanged()
            }
        },
        shadowChanged: function() {
            if (this.L && this.L.ca) {
                var a = this.get("shadowDom");
                this.L.ca && a && a.parentNode === this.L.ca && this.L.ca.removeChild(a);
                if (a = this.get("shadow")) {
                    var b = this.get("offset"),
                        a = this.F1(a, b);
                    this.set("shadowDom", a);
                    this.L.ca && this.L.ca.appendChild(a)
                }
            }
        },
        titleChanged: function() {
            this.L && this.L.Kg && "string" === typeof this.get("title") && this.L.Kg && this.get("title") && (this.L.Kg.title = this.get("title"))
        },
        bL: function(a,
                     b) {
            a = a || this.get("label");
            b = b || this.get("labelDom");
            if (a && b) {
                var c = a.direction,
                    d = this.L.Qj || g.j.yo(this.L.Kg),
                    e = d[0],
                    d = d[1],
                    f = g.j.yo(b),
                    h = f[0],
                    k = f[1];
                this.L.mv = f;
                var l = f = 0;
                switch (c) {
                    case "top":
                        f = -k;
                        l = (e - h) / 2;
                        break;
                    case "right":
                        f = (d - k) / 2;
                        l = e;
                        break;
                    case "bottom":
                        f = d;
                        l = (e - h) / 2;
                        break;
                    case "left":
                        f = (d - k) / 2;
                        l = -h;
                        break;
                    case "center":
                        f = (d - k) / 2, l = (e - h) / 2
                }
                a.offset && (f += a.offset.y, l += a.offset.x);
                b.style.top = f + "px";
                b.style.left = l + "px"
            }
        },
        labelChanged: function(a) {
            a = a || this.get("label");
            if (this.L && this.L.ca) {
                this.L.mv =
                    null;
                var b = this.L.ca,
                    c = this.get("labelDom");
                c && c.parentNode === b && b.removeChild(c);
                a && a.content && (c = "", a.content && (c = this.zP(a.content), b.appendChild(c), this.bL(a, c)), this.set("labelDom", c))
            } else a && a.content ? this.set("labelDom", this.zP(a.content), !0) : this.set("labelDom", null)
        },
        isTopChanged: function() {
            var a = this.map.sd.SK,
                b = this.get("isTop"),
                c = this.get("zIndex");
            a ? a === this ? this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.sd.Oq + 10 : c, this.map.sd.SK = b ? this : null) : (a.L && a.L.ca && (a.L.ca.style.zIndex =
                b ? a.get("zIndex") : this.map.sd.Oq + 10), this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.sd.Oq + 10 : c), this.map.sd.SK = b ? this : a) : (this.map.sd.SK = this, this.L && this.L.ca && (this.L.ca.style.zIndex = b ? this.map.sd.Oq + 10 : c))
        },
        visibleChanged: function() {
            this.L && this.L.ca && (this.get("visible") && !this.Nb.get("outOfZooms") ? this.L.ca.style.display = "block" : this.L.ca.style.display = "none")
        },
        eua: function() {
            this.visibleChanged()
        },
        angleChanged: function() {
            if (!g.l.ye && this.L && this.L.ca) {
                var a = this.L,
                    b = a.get("params"),
                    c =
                        b.textAlign,
                    d = b.verticalAlign,
                    e = b.offset,
                    b = e.x,
                    e = e.y;
                this.DF();
                if ("AMap.Text" == a.Gp) {
                    var e = b = 0,
                        f = a.Qj || g.j.yo(a.Kg),
                        h = f[0],
                        k = f[1];
                    a.Qj = f;
                    switch (c) {
                        case "center":
                            b = h / 2;
                            break;
                        case "right":
                            b = h
                    }
                    switch (d) {
                        case "middle":
                            e = k / 2;
                            break;
                        case "bottom":
                            e = k
                    }
                } else b = -b, e = -e;
                g.j.rotate(this.L.ca, this.get("angle") || 0, {
                    x: b,
                    y: e
                })
            }
        },
        zIndexChanged: function() {
            var a = this.get("zIndex");
            if (a > this.map.sd.Oq) {
                this.map.sd.Oq = a;
                var b = this.map.sd.SK;
                b && b.L && b.L.ca && (b.L.ca.style.zIndex = a + 10)
            }
            this.L && this.L.ca && (this.L.ca.style.zIndex =
                this.get("isTop") ? this.map.sd.Oq + 10 : this.get("zIndex"))
        },
        opacityChanged: function() {
            var a = this.get("contentDom"),
                b = this.get("shadowDom");
            a && g.j.Gq(a, this.get("opacity"));
            b && g.j.Gq(b, this.get("opacity"))
        },
        z1: function(a) {
            var b;
            b = document.createElement("div");
            b.className = "amap-marker-content";
            "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
            g.j.Gq(b, this.get("opacity"));
            return b
        },
        yP: function(a, b) {
            var c, d = 0,
                e = 0,
                f, h, k, l, m, n;
            a ? ("string" ===
            typeof a ? (c = a, n = !0) : (c = a.get("image"), e = a.get("size"), f = a.get("imageSize"), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = "string" !== typeof a ? a.get("imageOffset") : {
                x: 0,
                y: 0
            }) : (c = g.w.Ai + "/mark_bs.png", f = {
                x: 0,
                y: 0
            }, d = 19, e = 33, l = 19, m = 33);
            h = document.createElement("div");
            h.className = "amap-icon";
            h.style.position = "absolute";
            h.style.overflow = n ? "inherit" : "hidden";
            d && (h.style.width = d + "px");
            e && (h.style.height = e + "px");
            k = document.createElement("img");
            l && m && (k.style.width = l + "px", k.style.height = m + "px");
            k.style.top =
                f.y + "px";
            k.style.left = f.x + "px";
            h.appendChild(k);
            g.j.Gq(g.l.ye && n ? k : h, this.get("opacity"));
            d && e || (h.eM = !1);
            g.F.h(k, "load", function q() {
                this.L && (this.L.Qj = null);
                this.map && this.map.sd && (this.map.sd.hm = !0);
                g.F.G(k, "load", q, this);
                if (this.L && this.L.ca) {
                    var a = this.get("labelDom");
                    a && this.L.ca.appendChild(a)
                }
                h.eM = !0;
                b && b()
            }, this);
            k.src = c;
            return h
        },
        F1: function(a) {
            a = this.yP(a);
            a.style.zIndex = -1;
            return a
        },
        moveChanged: function() {
            var a = this.get("move");
            if (!1 === a) return this.exa();
            void 0 !== a && ("pause" === a.action ?
                this.Gua() : "[object Array]" === Object.prototype.toString.call(a.$f) ? a.$f && ("resume" === a.action && this.yG ? this.moveTo(a.$f[a.$f.xp || 0], a.speed, a.ub) : (this.yG && this.q("movestop"), a.$f.xp = 0, this.set("position", a.$f[0]), this.ita(a.$f, a.speed, a.ub, a.Fma))) : this.moveTo(a.$f, a.speed, a.ub, !0))
        },
        moveTo: function(a, b, c, d) {
            if (!(0 >= b)) {
                var e = this.get("position");
                a.Za(e);
                var f = Math.round(a.we(e) / 1E3 / b * 36E5);
                if (0 === f) return this.q("moveend");
                this.vh && (this.vh.stop(), this.vh = null);
                this.vh = new g.Dj(e, a);
                c = c || function(a) {
                    return a
                };
                this.vh.transition = function(a, b, d) {
                    if (d >= f) return b;
                    var e = (b.Q - a.Q) * c(d / f) + a.Q;
                    a = (b.P - a.P) * c(d / f) + a.P;
                    return new g.U(e, a)
                };
                this.vh.tq = function(b) {
                    this.set("position", b);
                    d && this.Nb.q("moving", {
                        target: this.Nb,
                        passedPath: [this.vh.start, this.get("position")]
                    });
                    this.q("moving");
                    b.cb(a) && (this.vh && (this.vh.stop(), this.vh = null), this.Nb.q("moveend", {
                        target: this.Nb
                    }), this.q("moveend"))
                };
                this.get("autoRotation") && !g.l.ye && (b = "2D" == (this.map.C.view.type || "2D") ? this.eea(e, a) : this.fea(e, a), this.set("angle", b));
                this.vh.Dn(this)
            }
        },
        exa: function() {
            this.vh && (this.vh.stop(), this.vh = null, this.q("movestop"))
        },
        Gua: function() {
            this.vh && (this.vh.stop(), this.vh = null, this.q("movepause"))
        },
        ita: function(a, b, c, d) {
            function e() {
                var b = a.slice(0, a.xp || 0);
                b.push(this.get("position"));
                this.Nb.q("moving", {
                    target: this.Nb,
                    passedPath: b
                })
            }

            function f() {
                a.xp < a.length - 1 ? (a.xp += 1, this.moveTo(a[a.xp], b, c)) : (this.pa("movealong"), d ? (a.xp = 0, this.set("position", a[0]), this.moveTo(a[a.xp], b, c)) : this.q("movestop"))
            }
            var h = Math.min(a.xp || 0, a.length -
                1);
            this.yG || (this.yG = !0, this.h("moving", e, this), this.h("moveend", f, this), this.h("movestop", function l() {
                this.yG = !1;
                this.G("moveend", f, this);
                this.G("moving", e, this);
                this.G("movestop", l, this)
            }, this));
            this.moveTo(a[h], b, c)
        },
        fea: function(a, b) {
            var c = this.map,
                d = c.xs(a),
                c = c.xs(b),
                e = 0;
            c.we(d);
            var f = c.y - d.y,
                h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.kc(180 * e / Math.PI, 1)
        },
        eea: function(a,
                      b) {
            var c = this.map,
                d = c.Ab(a),
                c = c.Ab(b),
                e = 0;
            c.we(d);
            var f = c.y - d.y,
                h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.kc(180 * e / Math.PI, 1)
        }
    });
    g.A.Jn = g.A.Bh.extend({
        r: function(a, b) {
            arguments.callee.la.apply(this, arguments);
            this.W("items", a, !0);
            this.W("content", a, !0);
            this.W("resolution", b);
            this.W("centerCoords", b);
            this.Fp = a
        },
        cz: function(a) {
            this.Og();
            this.ht();
            this.zm();
            this.sl("resolution");
            this.sl("centerCoords");
            this.sl("render");
            this.W("resolution", a);
            this.W("centerCoords", a);
            this.W("render", a);
            this.map.h("movestart", this.Um, this);
            this.map.h("mapmove", this.Um, this);
            this.map.h("zoomstart", this.Um, this);
            this.map.h("click", this.Um, this);
            this.map.h("closeOverlays", this.Um, this);
            this.map.h("rotate", this.Um, this)
        },
        Um: function() {
            this.Fp.map && (this.Fp.D = !0, this.Fp.close(), this.Fp.D = !1)
        },
        mapChanged: function() {},
        positionChanged: function() {
            this.zm()
        },
        renderChanged: function() {
            this.zm()
        },
        Og: function() {
            this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null);
            var a = g.j.create("div", null, "amap-menu");
            g.F.h(a, "mousedown", function(a) {
                g.F.stopPropagation(a)
            }, this);
            this.K = a;
            this.map.Ta.A.appendChild(this.K)
        },
        ht: function() {
            var a =
                    this,
                b = this.K;
            b.innerHTML = "";
            var c = this.get("content");
            if ("object" === typeof c) b.appendChild(c);
            else if ("string" === typeof c) b.innerHTML = c;
            else if ((c = this.get("items")) && c.length) {
                var d = g.j.create("ul", b, "amap-menu-outer");
                c.sort(function(a, b) {
                    return isNaN(a.VJ) || isNaN(b.VJ) ? 0 : a.VJ - b.VJ
                });
                for (b = 0; b < c.length; b += 1)(function(b) {
                    var c = b.Gn,
                        h = b.ub,
                        k = g.j.create("li", d);
                    k.innerHTML = c;
                    g.F.h(k, "click", function() {
                        h.call(k);
                        a.Fp.D = !0;
                        a.Fp.close();
                        a.Fp.D = !1
                    }, k)
                })(c[b])
            } else this.K.innerHTML = ""
        },
        zm: function() {
            var a =
                    this.map,
                b = this.K;
            a && b && (this.map.get("zoom"), b = this.get("position"), b = a.xs(b), a = b.y, b = b.x, this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px", this.K.style.top = a + "px")
        },
        Vg: function() {
            this.K && (this.map.G("click", this.SAa, this), this.map.Ta.A.removeChild(this.K), this.Fp.oi = !1, this.K = this.Fp.Je.map = null, this.map.G("movestart", this.Um, this), this.map.G("zoomstart", this.Um, this), this.map.G("click", this.Um, this), this.map.G("closeOverlays", this.Um, this), this.map.G("rotate", this.Um, this))
        },
        visibleChanged: function() {
            this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none")
        },
        itemsChanged: function() {
            this.K && this.ht()
        }
    });
    g.A.Re = g.A.Bh.extend({
        r: function(a, b) {
            arguments.callee.la.apply(this, arguments);
            this.Ue("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a);
            this.W("retainWhenClose", a, !0);
            a.W("toBeClose", this);
            this.hf = a
        },
        cz: function(a) {
            this.gna || (this.Og(), this.ht());
            this.sl("resolution");
            this.sl("centerCoords");
            this.sl("render");
            this.W("resolution", a);
            this.W("centerCoords", a);
            this.W("render", a);
            this.map = a;
            a.Ta.A.appendChild(this.Zb);
            this.$U();
            this.zm();
            this.NW();
            this.gna = !0;
            this.Wma();
            this.Nb.q("onAdd", {
                type: "onAdd",
                target: this.Nb
            })
        },
        Og: function() {
            var a = g.j.create("div");
            a.className = "amap-info";
            var b = g.j.create("div", a, "amap-info-shadowContainer"),
                c = g.j.create("div", a),
                d = this.get("anchor"),
                e = "amap-info-contentContainer";
            d && (e = d + " amap-info-contentContainer");
            d = g.j.create("div", c, e);
            a.style.position = "absolute";
            c.style.position = "absolute";
            c.style.bottom = "0px";
            c.style.left = "0px";
            b.style.position = "absolute";
            this.Zb = a;
            this.Yf = c;
            this.gU = b;
            this.mh =
                d;
            this.set("contentDom", this.mh, !0)
        },
        ht: function() {
            var a = this.get("contentU");
            if (a) {
                var b = this.get("isCustom"),
                    c = this.mh,
                    d = this.gU;
                c.innerHTML = "";
                var e = null;
                if (b) {
                    if ("string" === typeof a) c.innerHTML = a;
                    else if (a instanceof Array)
                        for (e = 0; e < a.length; e += 1) c.appendChild(a[e]);
                    else c.appendChild(a);
                    e = c;
                    d.parentNode && d.parentNode.removeChild(d)
                } else {
                    e = "amap-info-content amap-info-outer";
                    g.l.ye && (e += " amap-info-content-ie8");
                    e = this.lra = d = g.j.create("div", c, e);
                    "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                    this.ina = d;
                    a = g.j.create("a", this.lra, "amap-info-close");
                    a.innerHTML = "×";
                    this.OP = a;
                    a.href = "javascript: void(0)";
                    g.l.If && (g.F.h(a, "touchstart", function(a) {
                        g.F.stop(a)
                    }, this), g.F.h(a, "touchend", function(a) {
                        g.F.stop(a);
                        this.hf.D = !0;
                        this.hf.close();
                        this.hf.D = !1
                    }, this), g.F.h(a, "click", function(a) {
                        g.F.stop(a);
                        this.hf.D = !0;
                        this.hf.close();
                        this.hf.D = !1
                    }, this));
                    g.l.ba || (g.F.h(a, "mousedown", function(a) {
                        g.F.stop(a)
                    }, this), g.F.h(a, "click", function(a) {
                            g.F.stop(a);
                            this.hf.D = !0;
                            this.hf.close();
                            this.hf.D = !1
                        },
                        this));
                    if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
                    this.get("anchor");
                    g.j.create("div", c, g.l.ye ? "amap-info-sharp-old" : "amap-info-sharp");
                    this.gU.style.display = "block"
                }
                g.F.cxa(e)
            }
        },
        $U: function() {
            var a = this.get("isCustom"),
                b = this.get("showShadow");
            if (!a && b) {
                var a = this.gU,
                    b = g.j.VI(this.mh),
                    c = b.height - 23,
                    d = b.width;
                if (g.l.vi || g.l.dv) c = this.mh.childNodes[0].offsetHeight, d = this.mh.childNodes[0].offsetWidth + 26;
                b = "background-image:url(" + g.w.yb +
                    (g.l.vi ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
                a.innerHTML = "";
                var e = [],
                    f;
                f = e[1] = {};
                f.height = 0.5 * c + 4;
                f.width = d;
                f.offsetX = 400;
                f.offsetY = 16;
                f.top = -f.height - 10 - 15;
                f.left = 23;
                f = e[2] = {};
                f.height = e[1].height;
                f.width = e[1].height;
                f.offsetX = 1075 - f.width;
                f.offsetY = e[1].offsetY;
                f.top = e[1].top;
                f.left = 23 + e[1].width;
                f = e[3] = {};
                f.height = 10;
                f.width = 22;
                f.offsetX = 30;
                f.offsetY = 445;
                f.top = -25;
                f.left = 23 + (g.l.dv || g.l.vi ? 5 : 0);
                f = e[4] = {};
                f.height = 10;
                f.width = d / 2 - 15 - e[3].left - e[3].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[3].left + e[3].width;
                f = e[5] = {};
                f.height = 10;
                f.width = 70;
                f.offsetX = 80;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[4].left + e[4].width;
                f = e[6] = {};
                f.height = 10;
                f.width = d - e[5].left - e[5].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[5].left + e[5].width;
                f = e[7] = {};
                f.height = 10;
                f.width = 30;
                f.offsetX = 621;
                f.offsetY = 445;
                f.top = -25;
                f.left = d;
                f = e[8] = {};
                f.height = 15;
                f.width = 70;
                f.offsetX = 47;
                f.offsetY = 470;
                f.top = -15;
                f.left = d / 2 - 15;
                for (c = 1; 8 >= c; c += 1) d = g.j.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push("top:" +
                    e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c].width + "px;"), f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = f.join("")
            }
        },
        dHa: function() {},
        zm: function() {
            var a = this.map,
                b = this.Zb,
                c = this.get("position"),
                d = this.get("anchor");
            if (a && b && c) {
                a = a.xs(c, this.get("altitude"));
                d && (this.mh.className = d + " amap-info-contentContainer");
                var e = g.j.VI(this.mh);
                if (g.l.vi || g.l.dv) e.width = this.mh.childNodes[0].offsetWidth + 14;
                b = e.height;
                c = this.get("offset");
                this.get("isCustom");
                e = e.width;
                this.Zb.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px";
                this.Zb.style.top = Math.round(a.y + (c.y || 0)) + "px";
                if (d) {
                    var f;
                    "center" == d ? (d = "center", f = "middle") : (f = d.split("-"), d = f[1], f = f[0]);
                    switch (f) {
                        case "middle":
                            this.Zb.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px";
                            break;
                        case "top":
                            this.Zb.style.top = Math.round(a.y + b + (c.y || 0)) + "px"
                    }
                    switch (d) {
                        case "left":
                            this.Zb.style.left = Math.round(a.x + (c.x || 0)) + "px";
                            break;
                        case "right":
                            this.Zb.style.left = Math.round(a.x -
                                e + (c.x || 0)) + "px"
                    }
                }
                d = this.ina;
                if (this.OP && d.childNodes[0]) {
                    for (b = a = 0; b < d.childNodes.length; b += 1) a += d.childNodes[0].clientHeight || 0;
                    a > (this.get("size").height || d.clientHeight) ? this.OP.style.right = "20px" : this.OP.style.right = "5px"
                }
            }
        },
        Ica: function() {
            var a = new g.H(2 - this.mh.offsetWidth / 2, 2 - this.mh.offsetHeight),
                b = this.get("offset") || new g.H(0, 0),
                c = this.get("anchor");
            if (c) {
                var a = this.mh.offsetWidth,
                    d = this.mh.offsetHeight,
                    e, f, h = 2 - a / 2,
                    k = 2 - d;
                c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length && "center" ===
                    c[0] && (e = "center", f = "middle"));
                switch (e) {
                    case "left":
                        h = 2;
                        break;
                    case "right":
                        h = -a
                }
                switch (f) {
                    case "middle":
                        k = -d / 2;
                        break;
                    case "top":
                        k = -2
                }
                a = new g.H(h, k)
            }
            this.get("isCustom") || (a = a.add(new g.H(0, -23)));
            return a.add(b)
        },
        altitudeChanged: function() {
            this.zm()
        },
        NW: function() {
            if (this.get("position") && this.get("autoMove") && this.mh) {
                for (var a = this.map, b = new g.wd(this.mh.offsetWidth, this.mh.offsetHeight), c = a.xs(this.get("position"), this.get("altitude")).add(this.Ica()), d = c.add(b.wE()), e = a.get("size"), f = a.Apa(),
                         h = 0, k = 0, l = 0; l < f.length; l += 1) {
                    var m = f[l],
                        n = 0,
                        p = 0;
                    0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.qj() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.qj() - m[1] - (d.x + h), p = e.oj() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.oj() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
                }
                c = c.add(new g.H(h, k));
                d = d.add(new g.H(h,
                    k));
                l = f = 0;
                0 > c.x || b.qj() > e.qj() ? f = 20 - c.x : e.qj() < d.x && (f = e.qj() - d.x - 25);
                0 > c.y || b.oj() > e.oj() ? l = 5 - c.y : e.oj() < d.y && (l = e.oj() - d.y - 15);
                f += h;
                l += k;
                if (f || l) a.C.D = !0, a.C.panBy(f, l), a.C.D = !1
            }
        },
        Wma: function() {
            this.get("closeWhenClickMap") && (this.map.h("clickstart", this.WZ, this, !1), this.map.h("clickend", this.VZ, this, !1))
        },
        WZ: function() {
            this.hf.oi && (this.hf.D = !0, this.hf.getIsOpen() && (this.hf.RK = !0), this.hf.D = !1)
        },
        VZ: function() {
            this.hf.oi && (this.hf.RK && (this.hf.D = !0, this.hf.close(), this.hf.D = !1), this.hf.RK = !1)
        },
        Vg: function() {
            this.Zb && this.map && (this.hf.RK = !1, this.get("closeWhenClickMap") && (this.map.G("clickstart", this.WZ, this), this.map.G("clickend", this.VZ, this)), this.get("retainWhenClose") ? this.map.Gl.appendChild(this.Zb) : (this.Zb.parentNode === this.map.Ta.A && this.map.Ta.A.removeChild(this.Zb), this.hf.A = null), this.map = null, this.hf.oi = !1, this.Nb.q("close", {
                type: "close",
                target: this.Nb
            }))
        },
        bBa: function() {
            if (!this.get("isCustom")) return this.mh.offsetWidth;
            for (var a = this.fi, b = a.firstChild, c = a.lastChild; b && c &&
            b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
            a = g.j.Qc(a, "width");
            return a = parseInt(a.replace("px", ""), 10)
        },
        renderChanged: function() {
            this.zm()
        },
        positionChanged: function() {
            this.map && this.Zb && (this.zm(), this.NW())
        },
        anchorChanged: function() {
            this.positionChanged()
        },
        offsetChanged: function() {
            this.positionChanged()
        },
        contentChanged: function() {
            this.ht();
            this.$U();
            this.zm()
        },
        sizeChanged: function() {
            this.ht();
            this.$U();
            this.zm()
        }
    });
    g.Ca = {};
    g.Ca.He = g.aa.extend({
        ka: [g.va, g.Se],
        r: function() {},
        Ou: function() {
            var a = this.od();
            a.lh || (a.lh = g.I.ti(a));
            return a.lh
        },
        lb: function() {
            return new this.r(this.xa)
        },
        YQ: function() {
            return this.xa
        },
        setCoords: function(a) {
            this.uwa(a)
        },
        uwa: function(a) {
            this.wv = this.od();
            this.sg = null;
            if (g.Ca.zc && this instanceof g.Ca.zc) {
                var b = a.length;
                this.Ff = Array(b);
                for (var c, d, e = 0; e < b; e += 1)
                    if (c = a[e], d = new g.Ca.AL(c), this.Ff[e] = d, 0 === e) {
                        if (0 === c.length) break;
                        d.eq(c) || c.reverse()
                    } else 0 !== c.length && d.eq(c) && c.reverse()
            } else this.xa = a
        }
    });
    g.Ca.Ie = g.extend({}, {
        Fw: "point",
        wL: "linestring",
        PV: "linearring",
        nF: "polygon",
        HL: "multipoint",
        GL: "multilinestring",
        kF: "multipolygon",
        Gza: "geometrycollection"
    });
    g.ai = g.aa.extend({
        ka: [g.va, g.Se],
        r: function(a) {
            a = a || {};
            a.eB && (this.eB = a.eB);
            a.zN && (this.zN = a.zN);
            a.fZ && (this.fZ = a.fZ);
            this.map = a.map;
            this.$l = a.aN || g.a.wb(this);
            this.name = a.name || "";
            this.ge = !1;
            this.set("visible", !0, !0);
            this.$T(a.ha);
            this.pl = a.OK;
            this.style = a.style
        },
        Zna: function() {
            this.name = this.map = null;
            this.style = this.pl = this.ur = this.u5 = this.ha = this.ha.Oa = null;
            this.tl();
            this.ri()
        },
        vqa: function() {
            return this.pl
        },
        Iwa: function(a) {
            this.pl = a;
            this.zIndex = this.pl[0].Ak || this.zIndex
        },
        cc: function() {
            return this.ha
        },
        $T: function(a) {
            a && (this.ha = a, this.W("coords", a, !0), this.eB || this.zN) && (a.W("radius", this), a.W("center", this), a.W("resolution", this), a.W("strokeWeight", this))
        },
        setStyle: function(a) {
            this.Iwa(a);
            this.ds()
        },
        coordsChanged: function() {
            this.ds()
        },
        radiusChanged: function() {
            this.ha.wv = this.ha.od();
            this.ha.sg = null;
            this.ds()
        },
        ds: function(a) {
            this.set("feature", {
                target: this,
                Qna: a,
                wv: this.ha.wv || this.ha.od(),
                nta: this.ha.od()
            });
            this.ha.wv = this.ha.od()
        },
        visibleChanged: function() {
            this.ds()
        },
        IDa: function(a) {
            for (var b =
                0; b < this.pl.length; b += 1) {
                var c = this.pl[b];
                if (a.cb(c.$x(this))) return c
            }
        },
        Ipa: function() {
            var a = this.cc(),
                b = [];
            a.ui() === g.Ca.Ie.nF || a.ui() === g.Ca.Ie.kF ? b.push(new g.style.se.zc({
                fillColor: "#78cdd1",
                be: 0.2,
                strokeColor: "#122e29",
                mb: 0.5,
                oc: 1
            })) : a.ui() === g.Ca.Ie.wL || a.ui() === g.Ca.Ie.PV || a.ui() === g.Ca.Ie.GL ? b.push(new g.style.se.kp({
                color: "#888888",
                width: 1,
                zIndex: 10
            })) : a.ui() !== g.Ca.Ie.Fw && a.ui() !== g.Ca.Ie.HL || b.push(new g.style.se.ci({
                url: g.w.yb + "/theme/v1.3/markers/0.png",
                width: 36,
                height: 36,
                rotation: 0,
                vHa: -12,
                xHa: -36,
                zIndex: 100
            }));
            return b
        }
    });
    g.ai.Bza = "geometry";
    g.Ca.Dg = g.Ca.He.extend({
        r: function(a, b) {
            this.xa = a;
            this.sj = b;
            this.sg = null
        },
        od: function() {
            if (!this.sg) {
                var a = this.xa[0],
                    b = this.xa[1];
                if (this.sj) this.sg = [a, b, a, b];
                else {
                    var c = this.get("radius"),
                        d = this.get("resolution") * this.get("strokeWeight") || 0,
                        c = c ? c / Math.cos(Math.PI * this.get("center").P / 180) : 0;
                    this.sg = [a - c - d, b - c - d, a + c + d, b + c + d]
                }
            }
            return this.sg
        },
        ui: function() {
            return g.Ca.Ie.Fw
        }
    });
    g.M = {
        canvas: {},
        Yd: {},
        Qe: {},
        Ce: {}
    };
    g.M.Ub = g.aa.extend({
        ka: [g.va, g.Se],
        r: function(a, b) {
            this.f = a;
            this.sj = a.T.sj;
            this.J = b;
            this.e = b.e;
            this.W("display", b)
        },
        Uj: function() {
            this.sq && this.sq();
            this.tl();
            this.e = this.J = this.f = null
        },
        Qu: function(a, b, c, d) {
            var e = this.zoom;
            c = [];
            var f = this.f;
            if (Math.floor(e) !== e) b(c, f);
            else {
                a = [a.x, a.y];
                if (f.hm) {
                    for (var e = f.Ug, h = !0, k = [], l = 0; l < e.length; l += 1) {
                        var m = e[l].Kg;
                        if (m)
                            if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Gl && "none" !== m.parentNode.style.display) {
                                var n = g.j.yo(m),
                                    m =
                                        n[0],
                                    n = n[1];
                                if (m && n) {
                                    var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
                                    f.tf = Math.max(f.tf, p);
                                    f.fg = Math.max(f.fg, p);
                                    e[l].width = m;
                                    e[l].height = n
                                } else h = !1, k.push(e[l])
                            } else h = !1, k.push(e[l])
                    }
                    h ? (f.hm = !1, f.Ug = []) : f.Ug = k
                }
                e = Math.max(f.tf, f.Yy || 0) * this.S;
                h = Math.max(f.fg, f.Yy || 0) * this.S;
                k = 0;
                f.Xy && (k = f.Xy / Math.cos(Math.PI * this.e.get("center").P / 180));
                h = Math.max(h, k || 0);
                e = Math.max(e, k || 0);
                if (e = f.pn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                    for (var q in e)
                        if (e.hasOwnProperty(q) &&
                            (h = e[q], h.get("visible") && !h.get("noSelect")))
                            if (k = h.cc(), k instanceof g.Ca.Dg)
                                if (this.sj) {
                                    l = this.f.xm;
                                    l instanceof Array && (l = "number" === typeof h.eb.style && l[h.eb.style] ? l[h.eb.style] : l[0]);
                                    var m = l.size.width * this.S,
                                        n = l.size.height * this.S,
                                        p = l.anchor.x * this.S,
                                        r = l.anchor.y * this.S,
                                        k = k.xa,
                                        s = l.rotation_,
                                        u = [a[0], a[1]];
                                    if (s) {
                                        var v = (a[0] - k[0]) / this.S,
                                            w = (a[1] - k[1]) / this.S,
                                            t = s,
                                            s = Math.cos(-t),
                                            x = Math.sin(-t),
                                            t = v * s - w * x,
                                            v = v * x + w * s;
                                        u[0] = k[0] + t * this.S;
                                        u[1] = k[1] + v * this.S
                                    }
                                    m = g.I.vP([
                                        [u[0] - m + p, u[1] - n + r],
                                        [u[0] + p, u[1] +
                                        r
                                        ]
                                    ]);
                                    g.I.Pd(m, k) && c.push(h)
                                } else if ("undefined" !== typeof k.get("radius")) l = k.xa, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get("radius"), "px" === h.get("unit") ? m.we(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.we(l) * Math.cos(h.get("center").P * Math.PI / 180) <= k / this.mq * Math.pow(2, 20 - this.zoom) && c.push(h);
                                else if ("AMap.Text" == h.Gp) l = h.get("params"), l.visible && h.ca && g.j.oD(d, h.ca, "amap-markers") && c.push(h);
                                else {
                                    if (l = h.get("params"), l.visible && h.ca)
                                        if (l.shape)
                                            for (k = k.xa, s = l.Ep % 360, u = [a[0], a[1]], s && (v = (a[0] -
                                                k[0]) / this.S, w = (a[1] - k[1]) / this.S, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.S, u[1] = k[1] + v * this.S), m = h.width * this.S, n = h.height * this.S, p = l.offset.x * this.S, r = l.offset.y * this.S, m = g.I.vP([
                                                [u[0] - m - p, u[1] - n - r],
                                                [u[0] - p, u[1] - r]
                                            ]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) {
                                                if (g.I.Pd(m, k[n])) {
                                                    l.shape ? this.nD(h, u, k) && c.push(h) : c.push(h);
                                                    break
                                                }
                                            } else g.j.oD(d, h.ca, "amap-markers") && c.push(h)
                                } else k.Pd ? k.Pd(a) && c.push(h) : k.jy && 1.8 * k.jy(a) <= h.get("strokeWeight") *
                                this.S && c.push(h);
                    this.sj ? c.sort(function(a, b) {
                        return a.$l > b.$l ? -1 : 1
                    }) : c.sort(function(a, b) {
                        return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.$l > b.$l ? -1 : 1
                    });
                    b(c, f)
                } else b([], f)
            }
        },
        nD: function(a, b, c) {
            var d = (b[0] - c[0][0]) / this.S;
            b = (b[1] - c[0][1]) / this.S;
            a = a.get("params");
            c = a.offset;
            var d = [d - c.x, b - c.y],
                e;
            a = a.shape;
            if ("circle" === a.B.type) {
                if (b = a.B.coords[0], c = a.B.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.B.coords[2]) return !0
            } else {
                if ("poly" ===
                    a.B.type) return e = a.B.coords, e = this.PH(e), g.vd.Pd(d, e);
                if ("rect" === a.B.type) return e = a.B.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [
                    [a, b],
                    [c, b],
                    [c, e],
                    [a, e]
                ], g.vd.Pd(d, e)
            }
            return !1
        },
        PH: function(a) {
            for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
            return b
        },
        A3: function(a, b, c, d, e, f, h) {
            var k = ["position:absolute;"];
            k.push("top:" + Math.round(c) + "px;");
            k.push("left:" + Math.round(b) + "px;");
            k.push("width:" + Math.round(d) + "px;");
            k.push("height:" + Math.round(e) + "px;");
            1 > f && ("opacity" in a.style ? (k.push("opacity"),
                k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
            k.push("z-index:" + h + ";");
            k.join("");
            g.j.b8(a, k.join(""))
        }
    });
    g.M.Kb = g.aa.extend({
        ka: [g.va, g.Se],
        r: function(a) {
            this.e = a;
            this.type = "2D";
            this.zj = g.a.kc(a.get("zoom"), 1);
            this.Gl = a.Gl;
            this.K = a.Ta.o;
            this.W("display", a);
            this.W("rotateEnable", a);
            this.W("style", a);
            this.W("zoom", a);
            this.W("hightlight", a)
        },
        NS: function(a) {
            this.ue = a || g.a.Rk("ff" + this.e.ue.slice(1))
        },
        Qu: function(a, b, c, d, e) {
            function f(a, d) {
                a.length && (k[g.a.indexOf(b, d)] = a);
                l -= 1;
                0 >= l && (c(k), l = 0)
            }
            for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], m instanceof g.o.bd && m.get("visible") && (n.push(this.Su(m)),
                l += 1);
            for (h = 0; h < n.length; h += 1) n[h].Qu(a, f, d, e)
        }
    });
    g.s2 = {
        UC: function(a, b, c) {
            for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
                var m = b[k];
                if (m < a) d = c[m], f = m;
                else {
                    e = c[m];
                    h = m;
                    break
                }
            }
            null === d ? (d = e, f = h) : null === e && (e = d, h = f);
            return {
                mz: f,
                LJ: h,
                xq: d,
                ED: e
            }
        },
        yqa: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {};
            c.Ob(a.nodes, function(a) {
                !1 !== a.value && null !== a.value && (e[a.zoom] = g.w.Fc + "://" + a.value, d.push(a.zoom))
            });
            return function(a) {
                a = c.kc(a, 1);
                void 0 === e[a] && (e[a] = b.UC(a, d, e).xq);
                return e[a]
            }
        },
        dqa: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {},
                f = a.transitional;
            c.Ob(a.nodes,
                function(a) {
                    null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
                });
            return function(a) {
                a = c.kc(a, 1);
                if (void 0 === e[a]) {
                    var k = b.UC(a, d, e);
                    e[a] = f && "none" !== f && k.LJ !== k.mz && k.xq !== k.ED ? c.W3(k.xq, k.ED, (a - k.mz) / (k.LJ - k.mz), f) : k.xq
                }
                return e[a]
            }
        },
        rpa: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {};
            c.Ob(a.nodes, function(a) {
                null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
            });
            return function(a) {
                a = c.kc(a, 1);
                void 0 === e[a] && (e[a] = b.UC(a, d, e).xq);
                return e[a]
            }
        },
        G3: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {};
            c.Ob(a.nodes,
                function(a) {
                    null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
                });
            return function(a) {
                a = c.kc(a, 1);
                void 0 === e[a] && (e[a] = b.UC(a, d, e).xq);
                return e[a]
            }
        },
        zpa: function(a, b, c) {
            var d = this,
                e = g.a,
                f = [],
                h = {},
                k = a.transitional;
            e.Ob(a.nodes, function(a) {
                a.value && (h[a.zoom] = e.sla(a.value, c ? "rgba" : "webgl"), f.push(a.zoom))
            });
            return function(a) {
                var b = null;
                a = e.kc(a, 1);
                if (void 0 === h[a]) {
                    var b = d.UC(a, f, h),
                        n = b.xq;
                    if (k && "none" !== k && b.mz !== b.LJ && b.xq.join("") !== b.ED.join(""))
                        for (var n = n.slice(0), p = (a - b.mz) / (b.LJ - b.mz), q = 0, r =
                            b.ED.length; q < r; q++) n[q] = e.W3(b.xq[q], b.ED[q], p, k);
                    h[a] = n
                }
                b = h[a];
                return c && b ? "rgba(" + b.join(",") + ")" : b || ""
            }
        },
        hz: function(a, b, c, d) {
            var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                f;
            for (f in c)
                if (c.hasOwnProperty(f)) {
                    var h = c[f];
                    void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function(a, b) {
                        return a.zoom - b.zoom
                    }), a[f] = e.Cra ? {
                        Qe: d.call(this, b[h], c[f]),
                        canvas: d.call(this, b[h], c[f], !0)
                    } : d.call(this, b[h], c[f])) : e.Bra && (a[f] = !0)
                }
        },
        Er: function(a, b) {
            for (var c = [], d = 0, e = a.length; d <
            e; d += 2) {
                var f = 0,
                    f = "str" === b ? g.a.kc(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.kc(parseInt(a.substr(d, 2), 16) / 255, 3);
                c.push(f)
            }
            return c.length ? (c.push(c.shift()), "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
        },
        K6: function(a, b, c) {
            if (b[c]) console.log("customType repeat!!", c);
            else {
                var d = {},
                    e = {
                        visible: "visible",
                        iU: "showLabel",
                        pk: "showIcon"
                    },
                    f = [
                        ["color", {
                            color: "color"
                        }, {
                            opacity: "opacity"
                        }],
                        ["fillColor", {
                            fillColor: "fillColor"
                        }, {
                            be: "fillOpacity"
                        }],
                        ["strokeColor", {
                            strokeColor: "strokeColor"
                        }, {
                            mb: "strokeOpacity"
                        }],
                        ["textFillColor", {
                            pxa: "textFillColor"
                        }, {
                            qxa: "textFillOpacity"
                        }],
                        ["textStrokeColor", {
                            sxa: "textStrokeColor"
                        }, {
                            txa: "textStrokeOpacity"
                        }],
                        ["backgroundColor", {
                            backgroundColor: "backgroundColor"
                        }, {
                            Bla: "backgroundOpacity"
                        }]
                    ],
                    h = {
                        fontSize: "fontSize"
                    },
                    k = {
                        fillWidth: "fillWidth",
                        strokeWidth: "strokeWidth"
                    };
                if (a.styles) {
                    a = a.styles;
                    this.hz(d, a, e, this.rpa, {
                        Bra: !0
                    });
                    this.hz(d, a, h, this.G3, {
                        Pra: !0
                    });
                    this.hz(d, a, k, this.G3, {
                        Pra: !0
                    });
                    h = 0;
                    for (k = f.length; h < k; h++) {
                        var l = f[h];
                        a[l[0]] ? this.hz(d, a, l[1], this.zpa, {
                            Cra: !0
                        }) : this.hz(d,
                            a, l[2], this.dqa)
                    }
                    a.texture && (this.hz(d, a, {
                        Ua: "texture"
                    }, this.yqa), d.ld = [], g.a.Ob(a.texture.nodes, function(a) {
                        a.value && d.ld.push(g.w.Fc + "://" + a.value)
                    }))
                } else {
                    for (var m in e)
                        if (e.hasOwnProperty(m)) {
                            var n = e[m];
                            d[m] = void 0 === a[n] ? !0 : a[n]
                        }
                    e = 0;
                    for (m = f.length; e < m; e++) {
                        var p = f[e],
                            n = g.a.keys(p[1])[0],
                            q = p[1][n],
                            r = g.a.keys(p[2])[0],
                            p = p[2][r];
                        void 0 !== a[q] ? d[n] = {
                            canvas: this.Er(a[q], "str"),
                            Qe: this.Er(a[q])
                        } : d[r] = a[p]
                    }
                    for (l in h) h.hasOwnProperty(l) && void 0 !== a[l] && (d[l] = a[l]);
                    for (var s in k) k.hasOwnProperty(s) &&
                    void 0 !== a[s] && (d[s] = a[s]);
                    a.texture && (d.Ua = g.w.Fc + "://" + a.texture)
                }
                b[c] = d
            }
        },
        cT: function(a, b, c, d) {
            if (a)
                for (var e in a)
                    if (a.hasOwnProperty(e) && g.a.ck(a[e], "object")) {
                        var f = a[e],
                            h = e;
                        c && (h = c + ":" + e);
                        if (f.detailedType) this.K6(f, b, h), this.cT(f.detailedType, b, h, f);
                        else if (f.subType) this.cT(f.subType, b, h);
                        else {
                            if (void 0 !== f.code) {
                                for (var k in d) d.hasOwnProperty(k) && !g.a.ka(["isDetailed", "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]);
                                h = c + ":" + f.code
                            }
                            this.K6(f, b, h)
                        }
                    }
        },
        WU: function(a) {
            if (!this.Rp ||
                this.Rp.zoom != a) {
                var b = g.a.Oh,
                    c = {
                        zoom: a
                    },
                    d;
                for (d in this.Af)
                    if (this.Af.hasOwnProperty(d)) {
                        var e = this.Af[d];
                        c[d] = {};
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var h = e[f];
                                h ? h.Qe ? (c[d][f] = {}, b(h.Qe) ? c[d][f].Qe = h.Qe(a) : c[d][f].Qe = h.Qe, b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h
                            }
                    }
                this.Rp = c
            }
        },
        styleChanged: function() {
            if (this.e.C.xi) {
                var a = this.get("style");
                this.fm.xA || (this.fm = g.a.bind(this.fm, this), this.Xp = g.a.bind(this.Xp, this), this.fm.xA = !0);
                var b =
                    g.a;
                if (a) {
                    var c = {};
                    this.cT(a, c);
                    this.Af = c
                } else this.Af = null;
                var d, e, f, h;
                this.Af && (d = this.Af["regions:land"], e = this.Af.water, f = this.Af.sky, h = this.Af.buildings);
                var k, l, m, n, p, a = this.zj;
                if (d) {
                    c = "rgba(0, 0, 0, 0)";
                    if (d.visible) {
                        var q = this.Xp(b.K7(this.e.ue.substr(1)), d.opacity, d.color, !0, a);
                        q && (c = this.Uz(q, d.visible, "rgba(0, 0, 0, 0)"), q = this.fm(b.Rs(this.e.ue.substr(1)), d.opacity, d.color, !0, a), k = this.Uz(q, d.visible))
                    }
                    this.e.xu = c
                } else this.e.xu = "";
                e && e.visible && (l = this.fm(b.Rs(this.e.uH.substr(1)), e.opacity,
                    e.color, !0, a), l = this.Uz(l, e.visible));
                f && f.visible && (m = this.fm(b.Rs(this.e.LB.substr(1)), void 0, f.color, !0, a), m = this.Uz(m, f.visible));
                h && (h.visible ? (n = this.fm(b.Rk(this.e.GF[0]), void 0, h.fillColor, !0, a), n = this.Uz(n, h.visible), p = this.fm(b.Rk(this.e.GF[1]), void 0, h.strokeColor, !0, a), p = this.Uz(p, h.visible)) : (n = [1, 1, 1, 0], p = [1, 1, 1, 0]));
                this.NS && this.NS(k, l, m, [n, p]);
                this.A9 ? this.A9(this.Af) : this.set("display");
                delete this.Rp;
                this.WU(a)
            }
        },
        Uz: function(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ?
                arguments[2] : [0, 0, 0, 0],
                d = g.a.Oh;
            if (d(a) && d(b)) {
                var e = a;
                a = function(a) {
                    return b(a) ? e(a) : c
                }
            }
            return a
        },
        Xp: function(a, b, c, d, e) {
            if (a) {
                if (void 0 !== b) return a = a.split(","), c = b, "function" === typeof b && (c = b(e)), a[3] = g.a.kc(c, 3) + ")", a.join(",");
                if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas
            }
            return a
        },
        fm: function(a, b, c, d, e) {
            if (a) {
                if (b) return c = b, "function" === typeof b && (c = b(e)), [a[0], a[1], a[2], g.a.kc(c, 3)];
                if (c) return "function" === typeof c.Qe ? d ? c.Qe : c.Qe(e) : c.Qe
            }
            return a
        },
        QI: function(a,
                     b, c) {
            var d = this.Af;
            if (d) {
                this.Rp && c && c == this.Rp.zoom && (d = this.Rp);
                if (b || 0 === b)
                    if (b = d[a + ":" + b]) return b;
                return d[a]
            }
        },
        dm: function(a, b, c, d, e) {
            var f = null,
                h = a;
            d = d ? this.Xp : this.fm;
            e = e || this.zj;
            if (f = this.QI(b, void 0, e))
                if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible) h = "";
                else {
                    var h = 1,
                        k = "";
                    if (c)
                        if (f.fillColor || f.be) h = f.be, k = f.fillColor;
                        else {
                            if (f.color || f.opacity) h = f.opacity, k = f.color
                        } else if (f.strokeColor || f.mb) h = f.mb, k = f.strokeColor;
                    else if (f.color || f.opacity) h = f.opacity, k = f.color;
                    h = d(a,
                        h, k, !1, e)
                }
            this.ms === b && (h = this.Ru(h || a));
            return h
        },
        Qc: function(a, b, c) {
            var d = this.Af;
            if (d) {
                this.Rp && c && c == this.Rp.zoom && (d = this.Rp);
                if (b || 0 === b)
                    if (b = d[a + ":" + b]) return b;
                return d[a]
            }
        },
        Wu: function(a, b) {
            var c = null;
            return c = this.Qc(a, void 0, b || this.zj)
        },
        is: function(a, b, c, d) {
            c = c ? this.Xp : this.fm;
            var e = null,
                f = a;
            d = d || this.zj;
            (e = this.QI(b, void 0, d)) && (f = "function" === typeof e.visible && !e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d));
            this.ms === b && (f = this.Ru(f || a));
            return f
        },
        vy: function(a, b, c, d, e,
                     f) {
            var h = a,
                k = b,
                l = c,
                m = !0,
                n = !0,
                p, q = 1;
            f = f || this.zj;
            var r = this.QI(d, e, f);
            r && ("function" === typeof r.visible && !r.visible(f) || !1 === r.visible || "function" === typeof r.iU && !r.iU(f) || !1 === r.iU ? (n = m = !1, h = k = l = "") : (h = this.Xp(a, r.qxa, r.pxa, !1, f), k = this.Xp(b, r.txa, r.sxa, !1, f), l = this.Xp(c, r.Bla, r.backgroundColor, !1, f), m = "function" === typeof r.pk ? r.pk(f) : r.pk, r.fontSize && (p = "function" === typeof r.fontSize ? r.fontSize(f) : r.fontSize, p = 12 <= p ? p : 12, p = 22 >= p ? p : 22), p && g.l.Mc && (p *= 2)));
            f = !1;
            this.ms === d ? f = !0 : void 0 !== e && this.ms ===
                d + "-" + e && (f = !0);
            f && (h = this.Ru(h || a), k = this.Ru(k || b), l = this.Ru(l || c), q = 1 - 1.6 * this.fD, n = m = !0);
            return [h, k, l, m, n, q, p]
        },
        uy: function(a, b, c, d, e) {
            var f = null,
                h = a,
                k = b;
            d = d ? this.Xp : this.fm;
            var l = e || this.zj;
            if (f = this.QI(c, void 0, e)) "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ? h = k = "" : (h = d(a, f.be, f.fillColor, !1, l), k = d(b, f.mb, f.strokeColor, !1, l));
            this.ms === c && (b = k || b, h = this.Ru(h || a), k = this.Ru(b));
            return [h, k]
        }
    };
    g.M.Kb.zb(g.s2);
    g.M.canvas.Kb = g.M.Kb.extend({
        r: function(a) {
            arguments.callee.la.apply(this, arguments)
        },
        Su: function(a) {
            if (!a.M) {
                var b = a.Ul(this);
                b && !b.tna && (a.M = b)
            }
            return a.M
        },
        nc: function(a) {
            var b = this.e.i3();
            b && this.wT !== b && this.e.C.xi && (this.e.a8(b), this.wT = b);
            this.e.Ta.Kr.style.cssText = "";
            var c = a.za,
                b = a.R,
                d = this.e.C.get("features"),
                e = a.size.width,
                f = a.size.height;
            this.zj = "vw" === this.e.C.Je.baseRender ? g.a.kc(b.zoom, 1) : a.R.De;
            this.S = b.S;
            if (!this.La || 1E4 < Math.abs(b.jb.x - this.La.x) / this.S || 1E4 < Math.abs(b.jb.y - this.La.y) /
                this.S) this.La = b.jb;
            this.La.x - b.jb.x < -g.a.Ea / 2 ? this.La = new g.H(this.La.x + g.a.Ea, this.La.y) : this.La.x - b.jb.x > g.a.Ea / 2 && (this.La = new g.H(this.La.x - g.a.Ea, this.La.y));
            for (var h = 0; h < c.length; h += 1) {
                var k = c[h],
                    l = this.Su(k),
                    m = c[h].he();
                if (l && l.f)
                    if (!m.visible || k.NJ || m.hb[0] > b.zoom || m.hb[1] < b.zoom || k.fa && 0 === k.fa.length) {
                        if (l = l.pj())
                            if (l.length)
                                for (m = 0; m < l.length; m += 1) l[m].parentNode === this.K && this.K.removeChild(l[m]);
                            else l.parentNode === this.K && this.K.removeChild(l)
                    } else if (this.iS(k, d)) {
                        l.nc(a, m);
                        l.un &&
                        (a.lf = l.lf);
                        var k = l.pj(),
                            n, p, q = l.transform;
                        if (!q || !k || l.Rg && !this.e.C.Ka) c[h].al && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Lb = k);
                        else {
                            c[h].Lb = k;
                            k.length || (k = [k], q = [q]);
                            for (var r = 0; r < k.length; r += 1)
                                if (n = k[r], p = q[r], !p.Gy) {
                                    var s = p.translate.x,
                                        u = p.translate.y;
                                    c[h].oJ || (s = g.a.kc(s, 2), u = g.a.kc(u, 2));
                                    var v = p.scale;
                                    1E-5 > Math.abs(s) && (s = 0);
                                    1E-5 > Math.abs(u) && (u = 0);
                                    var w = [];
                                    w.push("position:absolute");
                                    w.push("z-index:" + (p.Ak || c[h].get("zIndex")));
                                    c[h].FC ? (w.push("top:" + Math.floor(f / 2 + u) + "px"), w.push("left:" +
                                        Math.floor(e / 2 + s) + "px")) : n.a5 ? (w.push("height:" + n.height * v + "px"), w.push("width:" + n.width * v + "px"), w.push("top:" + (f / 2 - u * v) + "px"), w.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (w.push(g.j.ct[g.j.mg] + "-origin:" + s + "px " + u + "px"), w.push(g.j.ct[g.j.mg] + ":scale3d(" + v + "," + v + ",1)")), w.push("top:" + Math.floor(f / 2 - u) + "px"), w.push("left:" + Math.floor(e / 2 - s) + "px"), l.ek && (w.push("height:" + n.height + "px"), w.push("width:" + n.width + "px")));
                                    l.oJ || 1 === m.opacity || "number" !== typeof m.opacity || w.push(g.j.I3(n, m.opacity));
                                    n.parentNode !==
                                    this.K && this.K.appendChild(n);
                                    g.j.b8(n, w.join(";"))
                                }
                        }
                    }
            }
            a = this.e.Ta.Kr;
            k = this.e.Ta.o;
            c = this.e.Ta.A;
            g.j.mg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.j.mg + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.j.mg] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
            this.e.Pv = !1
        },
        iS: function(a, b) {
            if ("all" === b || void 0 === a.Ql) return !0;
            for (var c = 0, d = a.Ql.length; c <
            d; c++)
                if (g.a.ka(b, "region" === a.Ql[c] ? "bg" : a.Ql[c])) return !0;
            return !1
        },
        zoomChanged: function() {
            var a = this.e.get("zoom");
            this.zj = "vw" === this.e.C.Je.baseRender ? g.a.kc(a, 1) : Math.round(a);
            this.Af && this.WU(this.zj)
        }
    });
    g.M.Mi = g.M.Ub.extend({
        r: function(a, b) {
            arguments.callee.la.apply(this, arguments);
            this.W("reload", a, !0);
            var c = a.T.get("cacheSize");
            if (this.e && this.e.C) {
                var d = this.e.C.get("tileCacheSize");
                d && 0 < d && (c = d)
            }
            this.na = new g.lg(c);
            var e = this;
            this.na.UJ.f1(function(a) {
                e.IA(a)
            });
            this.na.eC = function(a) {
                return a.Tb ? (a.Tb.cj -= 1, 0 == a.Tb.cj && (a.jv = !1), delete a.Tb, !0) : a.jv ? a.cj ? !1 : !0 : !0
            };
            this.cd = 1;
            this.Pn = 50;
            this.PW = !0;
            this.f.na = this.na;
            this.lm = new g.gF(6, null, a.zQ);
            new g.gF(5, null, a.zQ)
        },
        sq: function() {
            this.clear();
            this.Ag = null;
            this.na.clear();
            this.na.eC = null;
            this.na = this.na.UJ.BF = null;
            this.Gc && (this.Gc.G("tiles", this.JD, this), this.Gc.G("ack", this.ID, this), this.Gc.G("disable", this.GD, this), this.Gc = null);
            this.e.G("zoomend", this.Wj, this);
            this.e.G("moveend", this.Wj, this)
        },
        reloadChanged: function() {
            this.f && (this.f.Ka = !1);
            this.na.clear();
            this.reload = !0;
            this.set("display")
        },
        uh: function(a, b, c) {
            function d(b) {
                a.loaded = !0;
                e.f && (a.status = "loaded", a.ya = !0, a.Ne = b, e.set("display", 0), "function" === typeof c && c())
            }
            var e = this;
            a.status = "loading";
            this.f.po && this.f.po.call(this, a, d, function() {
                a.loaded = !0;
                e.f && (a.status = "loaded", a.ya = !0, "function" === typeof c && c())
            })
        },
        WGa: function(a, b, c, d) {
            var e = [];
            c = c || 18;
            b = Math.pow(2, b - c);
            for (var f = 0; f < a.length; f += 1) {
                var h = a[f].ta,
                    k = Math.floor(h.x / b),
                    h = Math.floor(h.y / b);
                if (d) {
                    if (k = c + "/" + k + "/" + h, (h = this.na.get(k)) && "loaded" == h.status) continue
                } else h = new g.Zq(c, k, h), k = h + "", h = new g.ob(h);
                !e[k] && h && (e.push(h), e[k] = 1)
            }
            return e
        },
        uI: function(a, b) {
            var c = this,
                d = this;
            if (this.f.fH) {
                var e, f, h, k, l, m,
                    n, p = function() {
                        var p = 0;
                        for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
                        if (0 == p) return b.call(c, a), {
                            cL: void 0
                        };
                        d.DU = a;
                        for (e = a.length - 1; 0 <= e; e -= 1)
                            for (f = a[e], h = [], k = [], f.xT = h, f.vv = k, l = f.length - 1; 0 <= l; l -= 1) m = f[l], n = m.ta, c.f.e.Ch.Gz(n.x, n.y, n.z, function() {
                                var c = l;
                                return function(e) {
                                    e ? h.push(f[c]) : k.push(f[c]);
                                    p -= 1;
                                    if (0 == p) {
                                        for (e = a.length - 1; 0 <= e; e -= 1) {
                                            var l = a[e];
                                            a[e] = l.xT;
                                            if (l.vv)
                                                for (var m = l.vv.length - 1; 0 <= m; m -= 1) {
                                                    var n = l.vv[m];
                                                    n.status = "loaded";
                                                    n.loaded = !0;
                                                    n.ya = !0
                                                }
                                        }
                                        b.call(d, a)
                                    }
                                }
                            }())
                    }();
                if ("object" === typeof p) return p.cL
            } else b.call(this,
                a)
        },
        aw: function(a, b, c) {
            if (a = this.na.get(a + "/" + b + "/" + c)) {
                if (a.jv) return a;
                if (a.Tb) return a.Tb;
                a.jv = !0;
                a.cj = 0;
                return a
            }
        },
        SI: function(a) {
            var b = a.ta;
            a = b.x;
            var c = b.y,
                b = b.z,
                d = Math.pow(2, b),
                e = (a + d) % d,
                f = e + d,
                d = e - d,
                h = null;
            e !== a && (h = this.aw(b, e, c));
            h || d === a || (h = this.aw(b, d, c));
            h || f === a || (h = this.aw(b, f, c));
            return h
        },
        wn: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            if (a.length)
                if (this.rK) this.JJ = !0;
                else {
                    for (var c = a.length - 1; 0 <= c; c -= 1) {
                        var d = a[c];
                        if (d.length)
                            for (var e = Math.pow(2, 20 -
                                d[0].ta.z), c = d.length - 1; 0 <= c; c--) {
                                var f = d[c],
                                    h = f.ta;
                                h.S = e;
                                f.sa = {};
                                f.kn = 0;
                                if (10 > h.z) {
                                    var k = this.SI(f);
                                    k && (f.Tb = k, f.status = "loaded", f.ya = !0, k.cj += 1, f.kn = (h.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this.set("display", 0))
                                }
                                this.na.set(f.key, f);
                                !b && f.Ae ? f.Ae = !1 : f.status = "loading"
                            }
                    }
                    var l = this;
                    this.uI(a, function(a) {
                        for (var c = a.length - 1; 0 <= c; c -= 1) {
                            var d = a[c];
                            if (d.length)
                                if (l.yi) {
                                    if (l.e.Mz) break;
                                    var e = d[0].ta.z;
                                    l.Qv(d, l.ek ? 1 : 0);
                                    for (var f = 0, h = 0; f < d.length;) l.zS(d.slice(10 * h, 10 * h + 10), e, b), f += 10, h += 1
                                } else
                                    for (e =
                                             function() {
                                                 var a = d.length;
                                                 return function() {
                                                     if (0 === --a) {
                                                         var b = {
                                                             key: "rb",
                                                             index: 0,
                                                             id: l.e.C.id
                                                         };
                                                         l.f.T.lk || (g.te.cf.end(b), g.te.cf.end(g.extend(b, {
                                                             index: 1
                                                         })))
                                                     }
                                                 }
                                             }(), l.Qv(d), l.jq += d.length, f = d.length - 1; 0 <= f; f -= 1) l.uh(d[f], l.lm, e)
                        }
                    })
                }
        },
        zy: function(a, b) {
            var c = this.na.get(a + "");
            c || b || (c = new g.ob(a.lb()));
            return c
        },
        JK: function(a, b) {
            return this.zd * Math.pow(2, a - b)
        },
        IA: function(a) {
            a.us && this.lm.M1(a.us);
            a.wK = !1;
            a.loaded = !1;
            this.Bf && this.Bf(a)
        },
        Yx: function(a, b) {
            var c = (2 < arguments.length && void 0 !== arguments[2] ?
                arguments[2] : 0) || this.bb,
                d = a.Sd.x,
                e = a.Sd.y,
                f = a.ec.x,
                h = a.ec.y;
            new g.H(0, 0);
            var k = this.JK(20, c);
            b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k)));
            d /= k;
            e /= k;
            d = {
                Dc: 0 === d % 1 ? d - 1 : Math.floor(d),
                rc: 0 === e % 1 ? e - 1 : Math.floor(e),
                Ec: Math.floor(f / k),
                dc: Math.floor(h / k)
            };
            d.YD = d.Dc - d.Ec + 1;
            d.jK = d.rc - d.dc + 1;
            d.z = c;
            d.S = this.S * Math.pow(2, this.zoom - c);
            d.By = Math.ceil(d.YD / 2);
            return d
        },
        ev: function(a, b, c) {
            return b < a.Ec || b > a.Dc ||
            c < a.dc || c > a.rc ? !1 : !0
        },
        Qv: function(a, b) {
            if (a.length) {
                var c = this.jb.gd(this.zd << 20 - a[0].ta.z),
                    d = Math.floor(c.x),
                    e = Math.floor(c.y);
                a.sort(function(a, c) {
                    var k = a.ta,
                        l = c.ta,
                        m = k.x - d,
                        k = k.y - e,
                        n = l.x - d,
                        l = l.y - e;
                    return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
                })
            }
        },
        clear: function() {
            this.lm.clear()
        },
        Wo: function(a, b) {
            this.qg = !1;
            this.clear();
            this.Si = b.Si;
            this.Ri = b.Ri;
            this.zd = b.zd;
            var c = a.R;
            this.Ef = b.Ef || a.R.Ef;
            this.lh = c.lh;
            this.size = a.size;
            this.rotation = c.rotation;
            this.jb = c.jb;
            this.Ha = a.R.Ha;
            this.Mf = a.Mf;
            this.Ge = a.Ge;
            this.ag = a.ag;
            this.zoom = c.zoom;
            this.De = c.De;
            this.bb = !1 === this.yi && !this.f.TR && this.f.ja ? this.De + 1 : this.De;
            this.$e && this.bb > this.$e && (this.bb = this.$e);
            this.Po && this.bb < this.Po && (this.bb = this.Po);
            this.S = c.S;
            this.yg = c.yg;
            c = a.R.Ha;
            this.ik = this.Yx(c, b.I);
            this.rw = c.Y9 ? this.Yx(c.Y9, b.I) : null;
            var c = this.ik,
                d = this.Ha.O8,
                e = null,
                e = d < this.zoom && this.rw ? this.rw : c,
                f = [],
                h = [],
                k, l = [],
                m = [],
                n = [],
                p = new g.Zq(0, 0, 0),
                q, r = this.zoom,
                m = this.Hk || "",
                s = {},
                u = {},
                v, w, t, x, y, D;
            this.$d = 1E6 * Math.random() << 0;
            for (q = m.length - 1; 0 <= q; q -= 1)
                if (k = m[q], !(k.Rw <
                    b.opacity))
                    if (p.z = k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.bb) s[p + ""] |= 16;
                    else if (p.z < this.bb) {
                        if (s[p + ""] |= 64, this.Si)
                            for (x = this.bb - p.z, v = Math.max(c.Ec, p.x << x), r = Math.min(c.Dc, (p.x + 1 << x) - 1), w = Math.max(c.dc, p.y << x), t = Math.min(c.rc, (p.y + 1 << x) - 1), p.z = this.bb, x = v; x <= r; x += 1)
                                for (p.x = x, y = w; y <= t; y += 1) p.y = y, D = p + "", s[D] |= 32, u[D] = u[D] ? Math.max(k.ta.z, u[D]) : k.ta.z
                    } else if (this.Ri)
                        for (v = 1; p.z >= this.bb;) {
                            s[p + ""] |= v;
                            v = p.x >> 1;
                            w = p.y >> 1;
                            r = v << 1;
                            t = w << 1;
                            k = 0;
                            for (x = 2; 0 < x; x -= 1)
                                for (p.x = r + x, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 &&
                                (k += 1);
                            p.z -= 1;
                            p.x = v;
                            p.y = w;
                            v = 4 === k ? 4 : 2
                        }
            m = [];
            p.z = this.bb;
            q = !0;
            this.na.Z1();
            for (x = e.Ec; x <= e.Dc; x += 1)
                for (p.x = x, y = e.dc; y <= e.rc; y += 1) p.y = y, k = this.zy(p), this.Nt(k), v = !1, k.ya ? (k.$d = this.$d, this.ev(c, x, y) && (m.push(k), this.Ek && (k.cd !== this.cd || 1 > k.Rw) && (v = !0))) : (q = !1, this.ev(c, x, y) && (v = !0), k.status && !k.Ae || this.De !== d || this.rw && !this.ev(this.rw, x, y) || l.push(k)), v && n.push(k);
            q ? (this.OC || (this.OC = !0), this.f.Ka || (k = {
                key: this.f.Rg ? "rl" : "rb",
                index: 1,
                id: this.e.C.id
            }, this.f.T.lk || (g.te.cf.end(k), g.te.cf.push({
                key: "ftc",
                Pe: m.length,
                id: this.e.C.id
            })))) : this.f.Ka = !1;
            this.qg = q;
            m.length && this.OC && (f.push(m), m.qg = q);
            h.push(l);
            d = !1;
            if (this.Ri) {
                n = n.slice(0);
                e = [];
                for (q = n.length - 1; 0 <= q; q -= 1) k = n[q], s[k.key] & 4 || e.push(k);
                k = b.hb[1];
                for (r = this.bb + 1; n.length && r <= k; r += 1) {
                    m = [];
                    l = n;
                    n = [];
                    p.z = r;
                    for (q = l.length - 1; 0 <= q; q -= 1)
                        if (x = l[q], v = s[x.key], v & 7)
                            for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; 0 <= x; x -= 1)
                                for (p.x = v + x, y = 1; 0 <= y; y -= 1) p.y = w + y, D = p + "", t = this.na.$J(D), s[D] & 5 && t && t.ya ? (t.oB = !0, t.$d = this.$d, m.push(t), this.Nt(t)) : n.push(new g.ob(p.lb()));
                    m.length &&
                    (d = !0, f.push(m))
                }
                n = e
            }
            if (!d && this.Si)
                for (x = !f.length || this.ek ? b.hb[0] : Math.max(b.hb[0], this.bb - 2), Math.max(x, this.bb - this.lga), r = this.bb - 1; n.length && r >= x; r -= 1) {
                    m = [];
                    y = {};
                    l = n;
                    n = [];
                    for (q = l.length - 1; 0 <= q; q -= 1) k = l[q], p.z = r, p.x = k.ta.x >> 1, p.y = k.ta.y >> 1, k = this.zy(p), y[k.key] || (y[k.key] = 1, v = !1, k.ya && (!this.oia || s[k.key] & 64) ? (p.x = Math.min(c.Dc, Math.max(c.Ec, p.x << this.bb - r)), p.y = Math.min(c.rc, Math.max(c.dc, p.y << this.bb - r)), p.z = this.bb, D = p + "", "number" === typeof u[D] && k.ta.z > u[D] ? v = !0 : k.oB = !0, k.$d = this.$d, m.push(k),
                        this.Nt(k)) : v = !0, v && n.push(k));
                    m.length && f.push(m)
                }
            this.DU = h;
            this.pv = this.jq = 0;
            this.wn(h);
            this.Ag = f;
            this.f.set("tiles", f);
            this.Cv(a, b)
        },
        Nt: function(a) {
            this.na.I5(a.zEa)
        },
        nR: function(a, b) {
            for (var c = [], d = this.e.C.getCoordsBoundByZoom(a), d = this.Yx(d, b, a), e = d.Ec; e < d.Dc; e++)
                for (var f = d.dc; f < d.rc; f++) {
                    var h = [a, e, f].join("/");
                    this.na.Hd(h) || c.push(new g.ob(new g.Zq(a, e, f), !0))
                }
            return c
        },
        sM: function() {
            var a = this.e.C;
            return a.f7 && a.get("preloadMode") && 200 <= this.na.vp && this.f.T.fq() && "stable" != this.Mf && this.Ix &&
                this.Ix() && this.zoom !== this.bb
        },
        Cv: function(a, b) {
            var c = b.I,
                d = b.hb;
            if (this.sM() && this.bb >= d[0] + 1) {
                var d = [],
                    e = null,
                    e = "zoomOut" === this.Mf ? Math.floor(this.zoom) : Math.ceil(this.zoom),
                    e = this.nR(e, c);
                e.length && d.push(e);
                d.length && this.wn(d, !0)
            }
        }
    });
    g.M.Yd.Mi = g.M.Mi.extend({
        r: function(a, b) {
            arguments.callee.la.apply(this, arguments);
            this.Pn = 120;
            this.yi = !1;
            this.Og();
            this.$e = a.$e;
            this.Po = a.Po
        },
        pj: function() {
            return this.Lb
        },
        Og: function() {
            this.Lb = document.createElement("div");
            this.Lb.className = this.f.T.get("className") || "amap-layer";
            this.Mu = document.createDocumentFragment()
        },
        Hv: function(a) {
            var b = Math.pow(2, a.R.zoom - this.uf),
                c = a.R.jb.Za(this.vs).gd(this.sm);
            this.transform = {
                translate: this.transform.translate.add(c),
                scale: b,
                rotate: 0
            };
            this.jb = a.R.jb
        },
        sP: function(a, b) {
            this.La = this.J.La;
            this.uf = this.De;
            this.sm = this.yg;
            this.ne = !1;
            this.currentTime = +new Date;
            this.cV = b.cV;
            var c = this.ik;
            this.Ek = this.Pn && b.IH;
            var d = this.Ag,
                e = 256 * c.YD,
                c = 256 * c.jK;
            this.Ge = this.zoom << 0 !== this.zoom;
            var f = this.jb.Za(this.La);
            f.x < -g.a.Ea / 2 ? f.x += g.a.Ea : f.x > g.a.Ea / 2 && (f.x -= g.a.Ea);
            this.HP = f.gd(this.yg);
            return [d, e, c, b]
        },
        qz: function(a, b) {
            var c = this.sP(a, b);
            this.Ps.apply(this, c);
            this.Fe(a);
            this.qg && !this.f.Ka && (c = this.f, c.T.lk || g.te.cf.end({
                key: "rb",
                index: 2,
                id: this.e.C.id
            }), c.Ka = !0, c.Gd ? c.pa("renderComplete") : (c.Gd = !0, c.pa("complete")))
        },
        nc: function(a, b) {
            this.Yq = a.Yq;
            this.ag = a.ag;
            this.Wo(a, b);
            this.vs && g.l.Rl && (a.Ge || a.ag) ? this.Hv(a, b) : this.qz(a, b);
            this.vs = this.jb;
            this.ne && this.set("display", 0)
        },
        Gv: function() {
            for (var a = this.Lb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].cd !== this.cd && this.Lb.removeChild(a[b])
        },
        XD: function(a, b) {
            return a.dc === b.dc && a.Ec === b.Ec && a.rc === b.rc && a.Dc === b.Dc
        },
        Ps: function(a) {
            var b = this.cd;
            this.cd += 1;
            var c = !1,
                d, e, f;
            e = !1;
            var h = [],
                k, l;
            for (d = a.length -
                1; 0 <= d; d -= 1)
                if (f = a[d], f.length) {
                    e = f[0].ta.z;
                    var m, n, p = this.JK(this.De, e),
                        q = !1;
                    this.un && f.qg && f[0].ta.z == this.bb && (k = [], l = [], q = !0);
                    for (var r = f.length - 1; 0 <= r; r -= 1) {
                        n = f[r];
                        q && n.fa && (k.push.apply(k, n.fa), l.push(n.ta + ""));
                        this.NT(n);
                        if (this.La === n.La && n.uf === this.uf) {
                            var s = n.Ne;
                            if (s && s.parentNode === this.Lb && 1 === n.Rw) {
                                h.push(n);
                                s.cd = this.cd;
                                n.cd = this.cd;
                                continue
                            }
                        }
                        n.La = this.La;
                        n.uf = this.uf;
                        m = n.ta;
                        var c = !0,
                            u = (new g.H((m.x << 20 - e) * this.zd, (m.y << 20 - e) * this.zd)).Za(this.La),
                            u = u.gd(this.yg);
                        u.x = g.a.kc(u.x, 1);
                        u.y = g.a.kc(u.y, 1);
                        var v = 1;
                        if (!n.KX || this.PW && n.cd !== b) n.KX = this.currentTime;
                        this.Ek && !n.oB ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.KX) / (1 / Math.pow(1.32, s) * this.Pn)), 1 !== v && (this.ne = !0)) : n.oB = !1;
                        n.cd = this.cd;
                        n.Rw = v;
                        n.ya ? (s = n.Ne, !s && n.Tb && n.Tb.Ne && (s = n.Tb.Ne), 0 !== v && s && (this.A3(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Lb && (g.l.vi && "overlayer" === this.f.get("type") && (s.style.display = "none"), this.Mu.appendChild(s)), s.cd = this.cd, n.De = this.De, h.push(n))) : n.$d = null
                    }
                    e = !0
                }
            this.un &&
            k && (r = l.sort().join(";"), k.nS = r, r !== this.lf.nS && (this.lf = k));
            1 < a.length && (this.ne = !0);
            this.Hk = h;
            this.Gv();
            this.Lb.appendChild(this.Mu);
            return c || !e
        },
        NT: function() {},
        Fe: function() {
            this.transform = {
                translate: this.HP,
                scale: Math.pow(2, this.zoom - this.De),
                rotate: 0
            }
        }
    });
    window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.eQ = function(a, b, c, d, e) {
        "undefined" === typeof e && (e = [10, 10]);
        this.moveTo(a, b);
        var f = c - a,
            h = d - b,
            k = Math.floor(Math.sqrt(f * f + h * h));
        d = f / k;
        c = h / k;
        e.xg = 0;
        for (var l = [], f = this.aI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.xg += e[q], l[q] = {
            KC: e[q] * d,
            LC: e[q] * c,
            Ny: h += e[q]
        }, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
        for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].KC, h = l[m].LC), a += f, b += h, this.oE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.oE = !this.oE, n = e[(m + 1) %
        e.length], m = (m + 1) % e.length;
        k -= p;
        a += k * d;
        b += k * c;
        this.oE ? this.moveTo(a, b) : this.lineTo(a, b);
        this.aI = (this.aI + p + k) % e.xg
    }, window.CanvasRenderingContext2D.prototype.Gna = function(a, b, c, d) {
        "undefined" === typeof d && (d = [10, 10]);
        var e = 2 * Math.PI * c,
            f = 0 >= d ? e : Math.round(e / (d[0] + d[1])),
            h = (d[0] + d[1]) / e * 2 * Math.PI;
        d = d[0] / e * 2 * Math.PI;
        for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
    });
    g.M.Ce.Bl = g.M.Mi.extend({
        r: function(a, b) {
            arguments.callee.la.apply(this, arguments);
            this.Og()
        },
        rR: function() {
            return this.Xa.tU
        },
        pj: function() {
            return this.Lb
        },
        Og: function() {
            this.Lb = document.createElement("div");
            this.Lb.className = "amap-markers";
            this.Xa = new g.M.Ce.bd(this.Lb);
            this.Xa.f = this.f;
            this.J.K.appendChild(this.Lb)
        },
        it: function(a, b) {
            this.Mu = b.Mu;
            this.Qy = b;
            this.Ef = a.R.Ef;
            this.S = a.R.S;
            this.zoom = a.R.zoom;
            this.size = a.size;
            this.Ha = a.R.Ha;
            this.mq = a.S;
            this.kb = a.R.jb;
            this.lh = a.R.lh;
            var c = !1;
            if (!this.La ||
                500 < Math.abs(this.kb.x - this.La.x) / this.S || 500 < Math.abs(this.kb.y - this.La.y) / this.S) c = !0;
            if (c || this.zoom << 0 !== this.zoom || this.uf !== this.zoom) this.La = this.kb, this.uf = this.zoom
        },
        Vu: function(a) {
            var b = a.R.Ha.xc.y * this.S;
            a = a.R.Ha.xc.x * this.S;
            return [this.kb.x - a, this.kb.y - b, this.kb.x + a, this.kb.y + b]
        },
        Gv: function() {
            if (this.Rh && this.Rh)
                for (var a in this.Rh)
                    if (this.Rh.hasOwnProperty(a)) {
                        var b = this.Rh[a];
                        b.$d !== this.$d && b.ca && this.J.Gl.appendChild(b.ca)
                    }
        },
        nc: function(a, b) {
            this.$d = 1E6 * Math.random() << 0;
            this.it(a,
                b);
            this.R = a.R;
            this.size = a.size;
            var c = this.f;
            this.zd = 256;
            var d, e;
            e = this.Vu(a);
            var f = 0;
            c.hm && (f = 50 * this.S);
            e[0] -= this.f.tf * this.S + f;
            e[1] -= this.f.fg * this.S + f;
            e[2] += this.f.tf * this.S + f;
            e[3] += this.f.fg * this.S + f;
            c = c.pn(e);
            for (d in c) c.hasOwnProperty(d) && (c[d].$d = this.$d, c[d].u5 = this);
            this.Gv(c);
            this.it.call(this.Xa, a, b);
            this.Xa.dE(c);
            this.Rh = c;
            this.Fe(a)
        },
        Fe: function() {
            var a = Math.pow(2, this.zoom - this.De);
            this.transform = {
                translate: this.La.Za(this.kb).gd(this.S),
                scale: a,
                rotate: 0
            }
        }
    });
    g.M.Ce.bd = g.aa.extend({
        r: function(a) {
            this.jl = a
        },
        dE: function(a, b) {
            var c = document.createDocumentFragment(),
                d = b && b.eS ? null : {},
                e = !0,
                f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var h = a[f],
                        k, l = h.get("params");
                    if (h.ca) k = h.ca;
                    else {
                        k = g.j.create("div");
                        k.className = "amap-marker";
                        var m = l.Kg,
                            n = l.m8,
                            p = l.qJ;
                        m && k.appendChild(m);
                        n && k.appendChild(n);
                        p && !1 !== m.eM && k.appendChild(p);
                        h.ca = k;
                        h.Kg = m;
                        if (n = l.title) m.title = n;
                        this.f.hm = !0; - 1 === g.a.indexOf(this.f.Ug, h) && this.f.Ug.push(h);
                        h.ge = !0
                    }
                    var p = l.offset,
                        q = p.x,
                        r = p.y,
                        s = l.textAlign,
                        u = l.verticalAlign,
                        n = l.anchor,
                        m = !1,
                        v, w;
                    n && (n = n.split("-"), 2 === n.length ? (s = n[1], u = n[0]) : 1 === n.length && "center" === n[0] && (s = "center", u = "middle"));
                    var t, n = t = 0;
                    if ("AMap.Text" == h.Gp || "AMap.Marker" == h.Gp) {
                        if (w = v = 0, k.parentNode !== this.jl && d && (m = !0, d[f] = h, e = !1), !m) {
                            h.ge || !h.Qj ? (t = g.j.yo(h.Kg), h.Qj = t) : t = h.Qj;
                            n = t[0];
                            t = t[1];
                            switch (s) {
                                case "center":
                                    v = n / 2;
                                    break;
                                case "right":
                                    v = n
                            }
                            switch (u) {
                                case "middle":
                                    w = t / 2;
                                    break;
                                case "bottom":
                                    w = t
                            }
                            q -= v;
                            r -= w
                        }
                    } else v = -q, w = -r;
                    var x, y;
                    if (!m)
                        if (h.ge) {
                            var D = [];
                            x = this.uu(h.ha.xa);
                            h.La =
                                this.La;
                            y = l.XE;
                            r = Math.round(x[1] + r + y.y);
                            q = Math.round(x[0] + q + y.x);
                            D.push("top:" + r + "px");
                            D.push("left:" + q + "px");
                            D.push("z-index:" + (l.g5 ? this.f.Oq + 10 : l.zIndex));
                            if (!g.l.ye) {
                                r = v;
                                q = w;
                                if ("AMap.Marker" == h.Gp) {
                                    r = -p.x;
                                    q = -p.y;
                                    switch (s) {
                                        case "center":
                                            r = -p.x + n / 2;
                                            q = -p.y + t / 2;
                                            break;
                                        case "right":
                                            r = -p.x + n
                                    }
                                    switch (u) {
                                        case "middle":
                                            q = -p.y + t / 2;
                                            break;
                                        case "bottom":
                                            q = -p.y + t
                                    }
                                }
                                D.push(g.j.T3(k, l.Ep, {
                                    x: r,
                                    y: q
                                }))
                            }
                            D.push("display:" + (l.visible ? "block" : "none") + ";");
                            k.style.cssText = D.join(";");
                            if ((p = l.label) && p.content) {
                                l = l.qJ;
                                s =
                                    p.direction;
                                r = null;
                                h.mv || (r = g.j.yo(l), h.mv = r);
                                u = (r = h.mv) && r[0];
                                w = r && r[1];
                                q = r = 0;
                                if (s && u && w) switch (s) {
                                    case "top":
                                        r = -w;
                                        q = (n - u) / 2;
                                        break;
                                    case "right":
                                        r = (t - w) / 2;
                                        q = n;
                                        break;
                                    case "bottom":
                                        r = t;
                                        q = (n - u) / 2;
                                        break;
                                    case "left":
                                        r = (t - w) / 2;
                                        q = -u;
                                        break;
                                    case "center":
                                        r = (t - w) / 2, q = (n - u) / 2
                                }
                                p.offset ? (r = r + p.offset.y + "px", q = q + p.offset.x + "px") : (r += "px", q += "px");
                                l.style.top = r;
                                l.style.left = q
                            }
                        } else if (h.naa || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.jl || h.La !== this.La) x = this.uu(h.ha.xa), h.La = this.La, y = l.XE,
                            r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + "px", k.style.left = q + "px";
                    h.zoom = this.zoom;
                    k.parentNode !== this.jl && (g.l.vi && g.a.iepngFix(k), c.appendChild(k));
                    h.ge = m;
                    k.sB = this.jl
                }
            this.jl.appendChild(c);
            e || this.dE(d, {
                eS: !0
            })
        },
        uu: function(a) {
            var b = a[0] - this.La.x;
            b > g.a.Ea / 2 ? b -= g.a.Ea : b < -g.a.Ea / 2 && (b += g.a.Ea);
            return [b / this.S, (a[1] - this.La.y) / this.S]
        }
    });
    var Kc = g.w,
        Sc = g.l,
        ec = g.aa.Bu,
        Tc = g.Mua,
        fa = document,
        Uc = !0,
        Vc = [];
    Sc.If && Vc.push("touch");
    Sc.ba || Vc.push("mouse");
    Sc.MK && (Vc.push("vectorlayer", "overlay"), Sc.fp ? Vc.push("wgl") : Vc.push("cgl"));
    if (Tc) {
        for (var Wc = [], Xc = Tc.split(","), xc = 0; xc < Xc.length; xc += 1) {
            var Yc = Xc[xc];
            ec[Yc] && Wc.push.apply(Wc, ec[Yc]);
            Wc.push(Yc)
        }
        Vc = Vc.concat(Wc)
    }
    Vc.push("sync");
    if (Sc.ys) {
        var Zc = !0,
            $c = [],
            ad = [];
        try {
            for (var xc = 0, bd = Vc.length; xc < bd; xc++) {
                var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[xc]));
                if (cd && cd.version === Kc.Cj) $c.push(cd.script), cd.css && ad.push(cd.css);
                else {
                    $c = void 0;
                    Zc = !1;
                    break
                }
            }
        } catch (dd) {
            $c = ad = void 0, Zc = !1
        }
        if (Zc) try {
            ad.length && ed();
            var fd = $c.join(";");
            eval(fd)
        } catch (gd) {
            Uc = !1
        } else Uc = !1
    } else Uc = !1; if (Uc)
        for (xc = 0; xc < Vc.length; xc += 1) g.rb.yC(Vc[xc]).status = 1;
    else Kc.vD = !1, hd();

    function id() {
        for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1)
            if (0 === a[c].src.indexOf(Kc.yb + "/maps?")) {
                b = a[c];
                break
            }
        return Kc.Jc || b && b.async
    }

    function hd() {
        var a = Kc.yb + "/maps/modules?v=" + Kc.zr + "&key=" + Kc.key + "&vrs=" + Kc.Cj + "&m=" + Vc.join(",");
        id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript"></script>'), setTimeout(function() {
            fa.getElementById("amap_plus_js") || jd(a)
        }, 1))
    }

    function jd(a) {
        var b = fa.createElement("script");
        b.charset = "utf-8";
        b.src = a;
        b.id = "amap_plus_js";
        (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
    }

    function ed() {
        var a = ad.join("\n"),
            b = fa.createElement("style");
        b.type = "text/css"; - 1 === Kc.yb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Kc.yb.split("://")[1]));
        "https" === Kc.Fc && (a = a.replace(/http:/gi, "https:"));
        if (b.styleSheet) {
            var c = function() {
                try {
                    b.styleSheet.cssText = a
                } catch (c) {}
            };
            b.styleSheet.disabled ? setTimeout(c, 10) : c()
        } else b.appendChild(fa.createTextNode(a));
        c = fa.head || fa.getElementsByTagName("head")[0];
        2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
    };
})(["73a7c2cd94982ec6d538dbece3752d8e", [120.856804, 30.675593, 122.247149, 31.872716, 121.472644, 31.231706], "http://webapi.amap.com", 1, "1.4.15", "onLoad", "310000", "", true, false, false, true, "1571145645-20190807-1", false])