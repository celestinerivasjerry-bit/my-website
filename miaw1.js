(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        l(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const f of d.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && l(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity),
            c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
            c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
            d
    }
    function l(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const d = s(c);
        fetch(c.href, d)
    }
}
)();
var ta = {
    exports: {}
}
    , ci = {}
    , na = {
        exports: {}
    }
    , oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function Eg() {
    if (yd)
        return oe;
    yd = 1;
    var n = Symbol.for("react.element")
        , r = Symbol.for("react.portal")
        , s = Symbol.for("react.fragment")
        , l = Symbol.for("react.strict_mode")
        , c = Symbol.for("react.profiler")
        , d = Symbol.for("react.provider")
        , f = Symbol.for("react.context")
        , p = Symbol.for("react.forward_ref")
        , m = Symbol.for("react.suspense")
        , g = Symbol.for("react.memo")
        , y = Symbol.for("react.lazy")
        , w = Symbol.iterator;
    function x(T) {
        return T === null || typeof T != "object" ? null : (T = w && T[w] || T["@@iterator"],
            typeof T == "function" ? T : null)
    }
    var C = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    }
        , A = Object.assign
        , R = {};
    function L(T, D, ie) {
        this.props = T,
            this.context = D,
            this.refs = R,
            this.updater = ie || C
    }
    L.prototype.isReactComponent = {},
        L.prototype.setState = function (T, D) {
            if (typeof T != "object" && typeof T != "function" && T != null)
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, T, D, "setState")
        }
        ,
        L.prototype.forceUpdate = function (T) {
            this.updater.enqueueForceUpdate(this, T, "forceUpdate")
        }
        ;
    function I() { }
    I.prototype = L.prototype;
    function B(T, D, ie) {
        this.props = T,
            this.context = D,
            this.refs = R,
            this.updater = ie || C
    }
    var O = B.prototype = new I;
    O.constructor = B,
        A(O, L.prototype),
        O.isPureReactComponent = !0;
    var U = Array.isArray
        , q = Object.prototype.hasOwnProperty
        , se = {
            current: null
        }
        , ae = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    function te(T, D, ie) {
        var le, ce = {}, fe = null, ge = null;
        if (D != null)
            for (le in D.ref !== void 0 && (ge = D.ref),
                D.key !== void 0 && (fe = "" + D.key),
                D)
                q.call(D, le) && !ae.hasOwnProperty(le) && (ce[le] = D[le]);
        var he = arguments.length - 2;
        if (he === 1)
            ce.children = ie;
        else if (1 < he) {
            for (var Ee = Array(he), ct = 0; ct < he; ct++)
                Ee[ct] = arguments[ct + 2];
            ce.children = Ee
        }
        if (T && T.defaultProps)
            for (le in he = T.defaultProps,
                he)
                ce[le] === void 0 && (ce[le] = he[le]);
        return {
            $$typeof: n,
            type: T,
            key: fe,
            ref: ge,
            props: ce,
            _owner: se.current
        }
    }
    function re(T, D) {
        return {
            $$typeof: n,
            type: T.type,
            key: D,
            ref: T.ref,
            props: T.props,
            _owner: T._owner
        }
    }
    function b(T) {
        return typeof T == "object" && T !== null && T.$$typeof === n
    }
    function me(T) {
        var D = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function (ie) {
            return D[ie]
        })
    }
    var we = /\/+/g;
    function Ve(T, D) {
        return typeof T == "object" && T !== null && T.key != null ? me("" + T.key) : D.toString(36)
    }
    function Le(T, D, ie, le, ce) {
        var fe = typeof T;
        (fe === "undefined" || fe === "boolean") && (T = null);
        var ge = !1;
        if (T === null)
            ge = !0;
        else
            switch (fe) {
                case "string":
                case "number":
                    ge = !0;
                    break;
                case "object":
                    switch (T.$$typeof) {
                        case n:
                        case r:
                            ge = !0
                    }
            }
        if (ge)
            return ge = T,
                ce = ce(ge),
                T = le === "" ? "." + Ve(ge, 0) : le,
                U(ce) ? (ie = "",
                    T != null && (ie = T.replace(we, "$&/") + "/"),
                    Le(ce, D, ie, "", function (ct) {
                        return ct
                    })) : ce != null && (b(ce) && (ce = re(ce, ie + (!ce.key || ge && ge.key === ce.key ? "" : ("" + ce.key).replace(we, "$&/") + "/") + T)),
                        D.push(ce)),
                1;
        if (ge = 0,
            le = le === "" ? "." : le + ":",
            U(T))
            for (var he = 0; he < T.length; he++) {
                fe = T[he];
                var Ee = le + Ve(fe, he);
                ge += Le(fe, D, ie, Ee, ce)
            }
        else if (Ee = x(T),
            typeof Ee == "function")
            for (T = Ee.call(T),
                he = 0; !(fe = T.next()).done;)
                fe = fe.value,
                    Ee = le + Ve(fe, he++),
                    ge += Le(fe, D, ie, Ee, ce);
        else if (fe === "object")
            throw D = String(T),
            Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
        return ge
    }
    function Fe(T, D, ie) {
        if (T == null)
            return T;
        var le = []
            , ce = 0;
        return Le(T, le, "", "", function (fe) {
            return D.call(ie, fe, ce++)
        }),
            le
    }
    function xe(T) {
        if (T._status === -1) {
            var D = T._result;
            D = D(),
                D.then(function (ie) {
                    (T._status === 0 || T._status === -1) && (T._status = 1,
                        T._result = ie)
                }, function (ie) {
                    (T._status === 0 || T._status === -1) && (T._status = 2,
                        T._result = ie)
                }),
                T._status === -1 && (T._status = 0,
                    T._result = D)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var Me = {
        current: null
    }
        , F = {
            transition: null
        }
        , Y = {
            ReactCurrentDispatcher: Me,
            ReactCurrentBatchConfig: F,
            ReactCurrentOwner: se
        };
    function W() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return oe.Children = {
        map: Fe,
        forEach: function (T, D, ie) {
            Fe(T, function () {
                D.apply(this, arguments)
            }, ie)
        },
        count: function (T) {
            var D = 0;
            return Fe(T, function () {
                D++
            }),
                D
        },
        toArray: function (T) {
            return Fe(T, function (D) {
                return D
            }) || []
        },
        only: function (T) {
            if (!b(T))
                throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    },
        oe.Component = L,
        oe.Fragment = s,
        oe.Profiler = c,
        oe.PureComponent = B,
        oe.StrictMode = l,
        oe.Suspense = m,
        oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y,
        oe.act = W,
        oe.cloneElement = function (T, D, ie) {
            if (T == null)
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
            var le = A({}, T.props)
                , ce = T.key
                , fe = T.ref
                , ge = T._owner;
            if (D != null) {
                if (D.ref !== void 0 && (fe = D.ref,
                    ge = se.current),
                    D.key !== void 0 && (ce = "" + D.key),
                    T.type && T.type.defaultProps)
                    var he = T.type.defaultProps;
                for (Ee in D)
                    q.call(D, Ee) && !ae.hasOwnProperty(Ee) && (le[Ee] = D[Ee] === void 0 && he !== void 0 ? he[Ee] : D[Ee])
            }
            var Ee = arguments.length - 2;
            if (Ee === 1)
                le.children = ie;
            else if (1 < Ee) {
                he = Array(Ee);
                for (var ct = 0; ct < Ee; ct++)
                    he[ct] = arguments[ct + 2];
                le.children = he
            }
            return {
                $$typeof: n,
                type: T.type,
                key: ce,
                ref: fe,
                props: le,
                _owner: ge
            }
        }
        ,
        oe.createContext = function (T) {
            return T = {
                $$typeof: f,
                _currentValue: T,
                _currentValue2: T,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            },
                T.Provider = {
                    $$typeof: d,
                    _context: T
                },
                T.Consumer = T
        }
        ,
        oe.createElement = te,
        oe.createFactory = function (T) {
            var D = te.bind(null, T);
            return D.type = T,
                D
        }
        ,
        oe.createRef = function () {
            return {
                current: null
            }
        }
        ,
        oe.forwardRef = function (T) {
            return {
                $$typeof: p,
                render: T
            }
        }
        ,
        oe.isValidElement = b,
        oe.lazy = function (T) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: T
                },
                _init: xe
            }
        }
        ,
        oe.memo = function (T, D) {
            return {
                $$typeof: g,
                type: T,
                compare: D === void 0 ? null : D
            }
        }
        ,
        oe.startTransition = function (T) {
            var D = F.transition;
            F.transition = {};
            try {
                T()
            } finally {
                F.transition = D
            }
        }
        ,
        oe.unstable_act = W,
        oe.useCallback = function (T, D) {
            return Me.current.useCallback(T, D)
        }
        ,
        oe.useContext = function (T) {
            return Me.current.useContext(T)
        }
        ,
        oe.useDebugValue = function () { }
        ,
        oe.useDeferredValue = function (T) {
            return Me.current.useDeferredValue(T)
        }
        ,
        oe.useEffect = function (T, D) {
            return Me.current.useEffect(T, D)
        }
        ,
        oe.useId = function () {
            return Me.current.useId()
        }
        ,
        oe.useImperativeHandle = function (T, D, ie) {
            return Me.current.useImperativeHandle(T, D, ie)
        }
        ,
        oe.useInsertionEffect = function (T, D) {
            return Me.current.useInsertionEffect(T, D)
        }
        ,
        oe.useLayoutEffect = function (T, D) {
            return Me.current.useLayoutEffect(T, D)
        }
        ,
        oe.useMemo = function (T, D) {
            return Me.current.useMemo(T, D)
        }
        ,
        oe.useReducer = function (T, D, ie) {
            return Me.current.useReducer(T, D, ie)
        }
        ,
        oe.useRef = function (T) {
            return Me.current.useRef(T)
        }
        ,
        oe.useState = function (T) {
            return Me.current.useState(T)
        }
        ,
        oe.useSyncExternalStore = function (T, D, ie) {
            return Me.current.useSyncExternalStore(T, D, ie)
        }
        ,
        oe.useTransition = function () {
            return Me.current.useTransition()
        }
        ,
        oe.version = "18.3.1",
        oe
}
var gd;
function Ga() {
    return gd || (gd = 1,
        na.exports = Eg()),
        na.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vd;
function Pg() {
    if (vd)
        return ci;
    vd = 1;
    var n = Ga()
        , r = Symbol.for("react.element")
        , s = Symbol.for("react.fragment")
        , l = Object.prototype.hasOwnProperty
        , c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
        , d = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    function f(p, m, g) {
        var y, w = {}, x = null, C = null;
        g !== void 0 && (x = "" + g),
            m.key !== void 0 && (x = "" + m.key),
            m.ref !== void 0 && (C = m.ref);
        for (y in m)
            l.call(m, y) && !d.hasOwnProperty(y) && (w[y] = m[y]);
        if (p && p.defaultProps)
            for (y in m = p.defaultProps,
                m)
                w[y] === void 0 && (w[y] = m[y]);
        return {
            $$typeof: r,
            type: p,
            key: x,
            ref: C,
            props: w,
            _owner: c.current
        }
    }
    return ci.Fragment = s,
        ci.jsx = f,
        ci.jsxs = f,
        ci
}
var wd;
function Mg() {
    return wd || (wd = 1,
        ta.exports = Pg()),
        ta.exports
}
var P = Mg()
    , _s = {}
    , ra = {
        exports: {}
    }
    , ut = {}
    , ia = {
        exports: {}
    }
    , sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;
function Ng() {
    return xd || (xd = 1,
        (function (n) {
            function r(F, Y) {
                var W = F.length;
                F.push(Y);
                e: for (; 0 < W;) {
                    var T = W - 1 >>> 1
                        , D = F[T];
                    if (0 < c(D, Y))
                        F[T] = Y,
                            F[W] = D,
                            W = T;
                    else
                        break e
                }
            }
            function s(F) {
                return F.length === 0 ? null : F[0]
            }
            function l(F) {
                if (F.length === 0)
                    return null;
                var Y = F[0]
                    , W = F.pop();
                if (W !== Y) {
                    F[0] = W;
                    e: for (var T = 0, D = F.length, ie = D >>> 1; T < ie;) {
                        var le = 2 * (T + 1) - 1
                            , ce = F[le]
                            , fe = le + 1
                            , ge = F[fe];
                        if (0 > c(ce, W))
                            fe < D && 0 > c(ge, ce) ? (F[T] = ge,
                                F[fe] = W,
                                T = fe) : (F[T] = ce,
                                    F[le] = W,
                                    T = le);
                        else if (fe < D && 0 > c(ge, W))
                            F[T] = ge,
                                F[fe] = W,
                                T = fe;
                        else
                            break e
                    }
                }
                return Y
            }
            function c(F, Y) {
                var W = F.sortIndex - Y.sortIndex;
                return W !== 0 ? W : F.id - Y.id
            }
            if (typeof performance == "object" && typeof performance.now == "function") {
                var d = performance;
                n.unstable_now = function () {
                    return d.now()
                }
            } else {
                var f = Date
                    , p = f.now();
                n.unstable_now = function () {
                    return f.now() - p
                }
            }
            var m = []
                , g = []
                , y = 1
                , w = null
                , x = 3
                , C = !1
                , A = !1
                , R = !1
                , L = typeof setTimeout == "function" ? setTimeout : null
                , I = typeof clearTimeout == "function" ? clearTimeout : null
                , B = typeof setImmediate < "u" ? setImmediate : null;
            typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function O(F) {
                for (var Y = s(g); Y !== null;) {
                    if (Y.callback === null)
                        l(g);
                    else if (Y.startTime <= F)
                        l(g),
                            Y.sortIndex = Y.expirationTime,
                            r(m, Y);
                    else
                        break;
                    Y = s(g)
                }
            }
            function U(F) {
                if (R = !1,
                    O(F),
                    !A)
                    if (s(m) !== null)
                        A = !0,
                            xe(q);
                    else {
                        var Y = s(g);
                        Y !== null && Me(U, Y.startTime - F)
                    }
            }
            function q(F, Y) {
                A = !1,
                    R && (R = !1,
                        I(te),
                        te = -1),
                    C = !0;
                var W = x;
                try {
                    for (O(Y),
                        w = s(m); w !== null && (!(w.expirationTime > Y) || F && !me());) {
                        var T = w.callback;
                        if (typeof T == "function") {
                            w.callback = null,
                                x = w.priorityLevel;
                            var D = T(w.expirationTime <= Y);
                            Y = n.unstable_now(),
                                typeof D == "function" ? w.callback = D : w === s(m) && l(m),
                                O(Y)
                        } else
                            l(m);
                        w = s(m)
                    }
                    if (w !== null)
                        var ie = !0;
                    else {
                        var le = s(g);
                        le !== null && Me(U, le.startTime - Y),
                            ie = !1
                    }
                    return ie
                } finally {
                    w = null,
                        x = W,
                        C = !1
                }
            }
            var se = !1
                , ae = null
                , te = -1
                , re = 5
                , b = -1;
            function me() {
                return !(n.unstable_now() - b < re)
            }
            function we() {
                if (ae !== null) {
                    var F = n.unstable_now();
                    b = F;
                    var Y = !0;
                    try {
                        Y = ae(!0, F)
                    } finally {
                        Y ? Ve() : (se = !1,
                            ae = null)
                    }
                } else
                    se = !1
            }
            var Ve;
            if (typeof B == "function")
                Ve = function () {
                    B(we)
                }
                    ;
            else if (typeof MessageChannel < "u") {
                var Le = new MessageChannel
                    , Fe = Le.port2;
                Le.port1.onmessage = we,
                    Ve = function () {
                        Fe.postMessage(null)
                    }
            } else
                Ve = function () {
                    L(we, 0)
                }
                    ;
            function xe(F) {
                ae = F,
                    se || (se = !0,
                        Ve())
            }
            function Me(F, Y) {
                te = L(function () {
                    F(n.unstable_now())
                }, Y)
            }
            n.unstable_IdlePriority = 5,
                n.unstable_ImmediatePriority = 1,
                n.unstable_LowPriority = 4,
                n.unstable_NormalPriority = 3,
                n.unstable_Profiling = null,
                n.unstable_UserBlockingPriority = 2,
                n.unstable_cancelCallback = function (F) {
                    F.callback = null
                }
                ,
                n.unstable_continueExecution = function () {
                    A || C || (A = !0,
                        xe(q))
                }
                ,
                n.unstable_forceFrameRate = function (F) {
                    0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < F ? Math.floor(1e3 / F) : 5
                }
                ,
                n.unstable_getCurrentPriorityLevel = function () {
                    return x
                }
                ,
                n.unstable_getFirstCallbackNode = function () {
                    return s(m)
                }
                ,
                n.unstable_next = function (F) {
                    switch (x) {
                        case 1:
                        case 2:
                        case 3:
                            var Y = 3;
                            break;
                        default:
                            Y = x
                    }
                    var W = x;
                    x = Y;
                    try {
                        return F()
                    } finally {
                        x = W
                    }
                }
                ,
                n.unstable_pauseExecution = function () { }
                ,
                n.unstable_requestPaint = function () { }
                ,
                n.unstable_runWithPriority = function (F, Y) {
                    switch (F) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            F = 3
                    }
                    var W = x;
                    x = F;
                    try {
                        return Y()
                    } finally {
                        x = W
                    }
                }
                ,
                n.unstable_scheduleCallback = function (F, Y, W) {
                    var T = n.unstable_now();
                    switch (typeof W == "object" && W !== null ? (W = W.delay,
                        W = typeof W == "number" && 0 < W ? T + W : T) : W = T,
                    F) {
                        case 1:
                            var D = -1;
                            break;
                        case 2:
                            D = 250;
                            break;
                        case 5:
                            D = 1073741823;
                            break;
                        case 4:
                            D = 1e4;
                            break;
                        default:
                            D = 5e3
                    }
                    return D = W + D,
                        F = {
                            id: y++,
                            callback: Y,
                            priorityLevel: F,
                            startTime: W,
                            expirationTime: D,
                            sortIndex: -1
                        },
                        W > T ? (F.sortIndex = W,
                            r(g, F),
                            s(m) === null && F === s(g) && (R ? (I(te),
                                te = -1) : R = !0,
                                Me(U, W - T))) : (F.sortIndex = D,
                                    r(m, F),
                                    A || C || (A = !0,
                                        xe(q))),
                        F
                }
                ,
                n.unstable_shouldYield = me,
                n.unstable_wrapCallback = function (F) {
                    var Y = x;
                    return function () {
                        var W = x;
                        x = Y;
                        try {
                            return F.apply(this, arguments)
                        } finally {
                            x = W
                        }
                    }
                }
        }
        )(sa)),
        sa
}
var Sd;
function Ag() {
    return Sd || (Sd = 1,
        ia.exports = Ng()),
        ia.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function Lg() {
    if (kd)
        return ut;
    kd = 1;
    var n = Ga()
        , r = Ag();
    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)
            t += "&args[]=" + encodeURIComponent(arguments[i]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var l = new Set
        , c = {};
    function d(e, t) {
        f(e, t),
            f(e + "Capture", t)
    }
    function f(e, t) {
        for (c[e] = t,
            e = 0; e < t.length; e++)
            l.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
        , m = Object.prototype.hasOwnProperty
        , g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
        , y = {}
        , w = {};
    function x(e) {
        return m.call(w, e) ? !0 : m.call(y, e) ? !1 : g.test(e) ? w[e] = !0 : (y[e] = !0,
            !1)
    }
    function C(e, t, i, o) {
        if (i !== null && i.type === 0)
            return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return o ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                    e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }
    function A(e, t, i, o) {
        if (t === null || typeof t > "u" || C(e, t, i, o))
            return !0;
        if (o)
            return !1;
        if (i !== null)
            switch (i.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
        return !1
    }
    function R(e, t, i, o, a, u, h) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
            this.attributeName = o,
            this.attributeNamespace = a,
            this.mustUseProperty = i,
            this.propertyName = e,
            this.type = t,
            this.sanitizeURL = u,
            this.removeEmptyString = h
    }
    var L = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
        L[e] = new R(e, 0, !1, e, null, !1, !1)
    }),
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
            var t = e[0];
            L[t] = new R(t, 1, !1, e[1], null, !1, !1)
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            L[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1)
        }),
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            L[e] = new R(e, 2, !1, e, null, !1, !1)
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
            L[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1)
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            L[e] = new R(e, 3, !0, e, null, !1, !1)
        }),
        ["capture", "download"].forEach(function (e) {
            L[e] = new R(e, 4, !1, e, null, !1, !1)
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            L[e] = new R(e, 6, !1, e, null, !1, !1)
        }),
        ["rowSpan", "start"].forEach(function (e) {
            L[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1)
        });
    var I = /[\-:]([a-z])/g;
    function B(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
        var t = e.replace(I, B);
        L[t] = new R(t, 1, !1, e, null, !1, !1)
    }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var t = e.replace(I, B);
            L[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(I, B);
            L[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            L[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1)
        }),
        L.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            L[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0)
        });
    function O(e, t, i, o) {
        var a = L.hasOwnProperty(t) ? L[t] : null;
        (a !== null ? a.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, i, a, o) && (i = null),
            o || a === null ? x(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : a.mustUseProperty ? e[a.propertyName] = i === null ? a.type === 3 ? !1 : "" : i : (t = a.attributeName,
                o = a.attributeNamespace,
                i === null ? e.removeAttribute(t) : (a = a.type,
                    i = a === 3 || a === 4 && i === !0 ? "" : "" + i,
                    o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))))
    }
    var U = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        , q = Symbol.for("react.element")
        , se = Symbol.for("react.portal")
        , ae = Symbol.for("react.fragment")
        , te = Symbol.for("react.strict_mode")
        , re = Symbol.for("react.profiler")
        , b = Symbol.for("react.provider")
        , me = Symbol.for("react.context")
        , we = Symbol.for("react.forward_ref")
        , Ve = Symbol.for("react.suspense")
        , Le = Symbol.for("react.suspense_list")
        , Fe = Symbol.for("react.memo")
        , xe = Symbol.for("react.lazy")
        , Me = Symbol.for("react.offscreen")
        , F = Symbol.iterator;
    function Y(e) {
        return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"],
            typeof e == "function" ? e : null)
    }
    var W = Object.assign, T;
    function D(e) {
        if (T === void 0)
            try {
                throw Error()
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                T = t && t[1] || ""
            }
        return `
` + T + e
    }
    var ie = !1;
    function le(e, t) {
        if (!e || ie)
            return "";
        ie = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function () {
                    throw Error()
                }
                    ,
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }),
                    typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (N) {
                        var o = N
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (N) {
                        o = N
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (N) {
                    o = N
                }
                e()
            }
        } catch (N) {
            if (N && o && typeof N.stack == "string") {
                for (var a = N.stack.split(`
`), u = o.stack.split(`
`), h = a.length - 1, v = u.length - 1; 1 <= h && 0 <= v && a[h] !== u[v];)
                    v--;
                for (; 1 <= h && 0 <= v; h--,
                    v--)
                    if (a[h] !== u[v]) {
                        if (h !== 1 || v !== 1)
                            do
                                if (h--,
                                    v--,
                                    0 > v || a[h] !== u[v]) {
                                    var S = `
` + a[h].replace(" at new ", " at ");
                                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)),
                                        S
                                }
                            while (1 <= h && 0 <= v);
                        break
                    }
            }
        } finally {
            ie = !1,
                Error.prepareStackTrace = i
        }
        return (e = e ? e.displayName || e.name : "") ? D(e) : ""
    }
    function ce(e) {
        switch (e.tag) {
            case 5:
                return D(e.type);
            case 16:
                return D("Lazy");
            case 13:
                return D("Suspense");
            case 19:
                return D("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = le(e.type, !1),
                    e;
            case 11:
                return e = le(e.type.render, !1),
                    e;
            case 1:
                return e = le(e.type, !0),
                    e;
            default:
                return ""
        }
    }
    function fe(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
            case ae:
                return "Fragment";
            case se:
                return "Portal";
            case re:
                return "Profiler";
            case te:
                return "StrictMode";
            case Ve:
                return "Suspense";
            case Le:
                return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case me:
                    return (e.displayName || "Context") + ".Consumer";
                case b:
                    return (e._context.displayName || "Context") + ".Provider";
                case we:
                    var t = e.render;
                    return e = e.displayName,
                        e || (e = t.displayName || t.name || "",
                            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                case Fe:
                    return t = e.displayName || null,
                        t !== null ? t : fe(e.type) || "Memo";
                case xe:
                    t = e._payload,
                        e = e._init;
                    try {
                        return fe(e(t))
                    } catch { }
            }
        return null
    }
    function ge(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render,
                    e = e.displayName || e.name || "",
                    t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return fe(t);
            case 8:
                return t === te ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function")
                    return t.displayName || t.name || null;
                if (typeof t == "string")
                    return t
        }
        return null
    }
    function he(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }
    function Ee(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function ct(e) {
        var t = Ee(e) ? "checked" : "value"
            , i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
            , o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var a = i.get
                , u = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return a.call(this)
                },
                set: function (h) {
                    o = "" + h,
                        u.call(this, h)
                }
            }),
                Object.defineProperty(e, t, {
                    enumerable: i.enumerable
                }),
            {
                getValue: function () {
                    return o
                },
                setValue: function (h) {
                    o = "" + h
                },
                stopTracking: function () {
                    e._valueTracker = null,
                        delete e[t]
                }
            }
        }
    }
    function Ei(e) {
        e._valueTracker || (e._valueTracker = ct(e))
    }
    function Su(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var i = t.getValue()
            , o = "";
        return e && (o = Ee(e) ? e.checked ? "true" : "false" : e.value),
            e = o,
            e !== i ? (t.setValue(e),
                !0) : !1
    }
    function Pi(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
            typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function lo(e, t) {
        var i = t.checked;
        return W({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ?? e._wrapperState.initialChecked
        })
    }
    function ku(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue
            , o = t.checked != null ? t.checked : t.defaultChecked;
        i = he(t.value != null ? t.value : i),
            e._wrapperState = {
                initialChecked: o,
                initialValue: i,
                controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
            }
    }
    function Tu(e, t) {
        t = t.checked,
            t != null && O(e, "checked", t, !1)
    }
    function ao(e, t) {
        Tu(e, t);
        var i = he(t.value)
            , o = t.type;
        if (i != null)
            o === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? uo(e, t.type, i) : t.hasOwnProperty("defaultValue") && uo(e, t.type, he(t.defaultValue)),
            t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function Cu(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
                i || t === e.value || (e.value = t),
                e.defaultValue = t
        }
        i = e.name,
            i !== "" && (e.name = ""),
            e.defaultChecked = !!e._wrapperState.initialChecked,
            i !== "" && (e.name = i)
    }
    function uo(e, t, i) {
        (t !== "number" || Pi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
    }
    var Er = Array.isArray;
    function Hn(e, t, i, o) {
        if (e = e.options,
            t) {
            t = {};
            for (var a = 0; a < i.length; a++)
                t["$" + i[a]] = !0;
            for (i = 0; i < e.length; i++)
                a = t.hasOwnProperty("$" + e[i].value),
                    e[i].selected !== a && (e[i].selected = a),
                    a && o && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + he(i),
                t = null,
                a = 0; a < e.length; a++) {
                if (e[a].value === i) {
                    e[a].selected = !0,
                        o && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }
    function co(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(s(91));
        return W({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Eu(e, t) {
        var i = t.value;
        if (i == null) {
            if (i = t.children,
                t = t.defaultValue,
                i != null) {
                if (t != null)
                    throw Error(s(92));
                if (Er(i)) {
                    if (1 < i.length)
                        throw Error(s(93));
                    i = i[0]
                }
                t = i
            }
            t == null && (t = ""),
                i = t
        }
        e._wrapperState = {
            initialValue: he(i)
        }
    }
    function Pu(e, t) {
        var i = he(t.value)
            , o = he(t.defaultValue);
        i != null && (i = "" + i,
            i !== e.value && (e.value = i),
            t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
            o != null && (e.defaultValue = "" + o)
    }
    function Mu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function Nu(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }
    function fo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Nu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Mi, Au = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, i, o, a) {
            MSApp.execUnsafeLocalFunction(function () {
                return e(t, i, o, a)
            })
        }
            : e
    }
    )(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (Mi = Mi || document.createElement("div"),
                Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                t = Mi.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild)
        }
    });
    function Pr(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Mr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
        , Am = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Mr).forEach(function (e) {
        Am.forEach(function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
                Mr[t] = Mr[e]
        })
    });
    function Lu(e, t, i) {
        return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px"
    }
    function Ru(e, t) {
        e = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var o = i.indexOf("--") === 0
                    , a = Lu(i, t[i], o);
                i === "float" && (i = "cssFloat"),
                    o ? e.setProperty(i, a) : e[i] = a
            }
    }
    var Lm = W({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function ho(e, t) {
        if (t) {
            if (Lm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(s(62))
        }
    }
    function po(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var mo = null;
    function yo(e) {
        return e = e.target || e.srcElement || window,
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    }
    var go = null
        , Kn = null
        , Gn = null;
    function Du(e) {
        if (e = Qr(e)) {
            if (typeof go != "function")
                throw Error(s(280));
            var t = e.stateNode;
            t && (t = bi(t),
                go(e.stateNode, e.type, t))
        }
    }
    function Vu(e) {
        Kn ? Gn ? Gn.push(e) : Gn = [e] : Kn = e
    }
    function ju() {
        if (Kn) {
            var e = Kn
                , t = Gn;
            if (Gn = Kn = null,
                Du(e),
                t)
                for (e = 0; e < t.length; e++)
                    Du(t[e])
        }
    }
    function _u(e, t) {
        return e(t)
    }
    function Iu() { }
    var vo = !1;
    function Fu(e, t, i) {
        if (vo)
            return e(t, i);
        vo = !0;
        try {
            return _u(e, t, i)
        } finally {
            vo = !1,
                (Kn !== null || Gn !== null) && (Iu(),
                    ju())
        }
    }
    function Nr(e, t) {
        var i = e.stateNode;
        if (i === null)
            return null;
        var o = bi(i);
        if (o === null)
            return null;
        i = o[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (e = e.type,
                    o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                    e = !o;
                break e;
            default:
                e = !1
        }
        if (e)
            return null;
        if (i && typeof i != "function")
            throw Error(s(231, t, typeof i));
        return i
    }
    var wo = !1;
    if (p)
        try {
            var Ar = {};
            Object.defineProperty(Ar, "passive", {
                get: function () {
                    wo = !0
                }
            }),
                window.addEventListener("test", Ar, Ar),
                window.removeEventListener("test", Ar, Ar)
        } catch {
            wo = !1
        }
    function Rm(e, t, i, o, a, u, h, v, S) {
        var N = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, N)
        } catch (j) {
            this.onError(j)
        }
    }
    var Lr = !1
        , Ni = null
        , Ai = !1
        , xo = null
        , Dm = {
            onError: function (e) {
                Lr = !0,
                    Ni = e
            }
        };
    function Vm(e, t, i, o, a, u, h, v, S) {
        Lr = !1,
            Ni = null,
            Rm.apply(Dm, arguments)
    }
    function jm(e, t, i, o, a, u, h, v, S) {
        if (Vm.apply(this, arguments),
            Lr) {
            if (Lr) {
                var N = Ni;
                Lr = !1,
                    Ni = null
            } else
                throw Error(s(198));
            Ai || (Ai = !0,
                xo = N)
        }
    }
    function En(e) {
        var t = e
            , i = e;
        if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do
                t = e,
                    (t.flags & 4098) !== 0 && (i = t.return),
                    e = t.return;
            while (e)
        }
        return t.tag === 3 ? i : null
    }
    function zu(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                return t.dehydrated
        }
        return null
    }
    function Ou(e) {
        if (En(e) !== e)
            throw Error(s(188))
    }
    function _m(e) {
        var t = e.alternate;
        if (!t) {
            if (t = En(e),
                t === null)
                throw Error(s(188));
            return t !== e ? null : e
        }
        for (var i = e, o = t; ;) {
            var a = i.return;
            if (a === null)
                break;
            var u = a.alternate;
            if (u === null) {
                if (o = a.return,
                    o !== null) {
                    i = o;
                    continue
                }
                break
            }
            if (a.child === u.child) {
                for (u = a.child; u;) {
                    if (u === i)
                        return Ou(a),
                            e;
                    if (u === o)
                        return Ou(a),
                            t;
                    u = u.sibling
                }
                throw Error(s(188))
            }
            if (i.return !== o.return)
                i = a,
                    o = u;
            else {
                for (var h = !1, v = a.child; v;) {
                    if (v === i) {
                        h = !0,
                            i = a,
                            o = u;
                        break
                    }
                    if (v === o) {
                        h = !0,
                            o = a,
                            i = u;
                        break
                    }
                    v = v.sibling
                }
                if (!h) {
                    for (v = u.child; v;) {
                        if (v === i) {
                            h = !0,
                                i = u,
                                o = a;
                            break
                        }
                        if (v === o) {
                            h = !0,
                                o = u,
                                i = a;
                            break
                        }
                        v = v.sibling
                    }
                    if (!h)
                        throw Error(s(189))
                }
            }
            if (i.alternate !== o)
                throw Error(s(190))
        }
        if (i.tag !== 3)
            throw Error(s(188));
        return i.stateNode.current === i ? e : t
    }
    function Bu(e) {
        return e = _m(e),
            e !== null ? Uu(e) : null
    }
    function Uu(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null;) {
            var t = Uu(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Wu = r.unstable_scheduleCallback
        , $u = r.unstable_cancelCallback
        , Im = r.unstable_shouldYield
        , Fm = r.unstable_requestPaint
        , je = r.unstable_now
        , zm = r.unstable_getCurrentPriorityLevel
        , So = r.unstable_ImmediatePriority
        , Hu = r.unstable_UserBlockingPriority
        , Li = r.unstable_NormalPriority
        , Om = r.unstable_LowPriority
        , Ku = r.unstable_IdlePriority
        , Ri = null
        , _t = null;
    function Bm(e) {
        if (_t && typeof _t.onCommitFiberRoot == "function")
            try {
                _t.onCommitFiberRoot(Ri, e, void 0, (e.current.flags & 128) === 128)
            } catch { }
    }
    var Et = Math.clz32 ? Math.clz32 : $m
        , Um = Math.log
        , Wm = Math.LN2;
    function $m(e) {
        return e >>>= 0,
            e === 0 ? 32 : 31 - (Um(e) / Wm | 0) | 0
    }
    var Di = 64
        , Vi = 4194304;
    function Rr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }
    function ji(e, t) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var o = 0
            , a = e.suspendedLanes
            , u = e.pingedLanes
            , h = i & 268435455;
        if (h !== 0) {
            var v = h & ~a;
            v !== 0 ? o = Rr(v) : (u &= h,
                u !== 0 && (o = Rr(u)))
        } else
            h = i & ~a,
                h !== 0 ? o = Rr(h) : u !== 0 && (o = Rr(u));
        if (o === 0)
            return 0;
        if (t !== 0 && t !== o && (t & a) === 0 && (a = o & -o,
            u = t & -t,
            a >= u || a === 16 && (u & 4194240) !== 0))
            return t;
        if ((o & 4) !== 0 && (o |= i & 16),
            t = e.entangledLanes,
            t !== 0)
            for (e = e.entanglements,
                t &= o; 0 < t;)
                i = 31 - Et(t),
                    a = 1 << i,
                    o |= e[i],
                    t &= ~a;
        return o
    }
    function Hm(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }
    function Km(e, t) {
        for (var i = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u;) {
            var h = 31 - Et(u)
                , v = 1 << h
                , S = a[h];
            S === -1 ? ((v & i) === 0 || (v & o) !== 0) && (a[h] = Hm(v, t)) : S <= t && (e.expiredLanes |= v),
                u &= ~v
        }
    }
    function ko(e) {
        return e = e.pendingLanes & -1073741825,
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Gu() {
        var e = Di;
        return Di <<= 1,
            (Di & 4194240) === 0 && (Di = 64),
            e
    }
    function To(e) {
        for (var t = [], i = 0; 31 > i; i++)
            t.push(e);
        return t
    }
    function Dr(e, t, i) {
        e.pendingLanes |= t,
            t !== 536870912 && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
            e = e.eventTimes,
            t = 31 - Et(t),
            e[t] = i
    }
    function Gm(e, t) {
        var i = e.pendingLanes & ~t;
        e.pendingLanes = t,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.expiredLanes &= t,
            e.mutableReadLanes &= t,
            e.entangledLanes &= t,
            t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < i;) {
            var a = 31 - Et(i)
                , u = 1 << a;
            t[a] = 0,
                o[a] = -1,
                e[a] = -1,
                i &= ~u
        }
    }
    function Co(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i;) {
            var o = 31 - Et(i)
                , a = 1 << o;
            a & t | e[o] & t && (e[o] |= t),
                i &= ~a
        }
    }
    var pe = 0;
    function Xu(e) {
        return e &= -e,
            1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Yu, Eo, Qu, bu, Zu, Po = !1, _i = [], qt = null, Jt = null, en = null, Vr = new Map, jr = new Map, tn = [], Xm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function qu(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                qt = null;
                break;
            case "dragenter":
            case "dragleave":
                Jt = null;
                break;
            case "mouseover":
            case "mouseout":
                en = null;
                break;
            case "pointerover":
            case "pointerout":
                Vr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                jr.delete(t.pointerId)
        }
    }
    function _r(e, t, i, o, a, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: o,
            nativeEvent: u,
            targetContainers: [a]
        },
            t !== null && (t = Qr(t),
                t !== null && Eo(t)),
            e) : (e.eventSystemFlags |= o,
                t = e.targetContainers,
                a !== null && t.indexOf(a) === -1 && t.push(a),
                e)
    }
    function Ym(e, t, i, o, a) {
        switch (t) {
            case "focusin":
                return qt = _r(qt, e, t, i, o, a),
                    !0;
            case "dragenter":
                return Jt = _r(Jt, e, t, i, o, a),
                    !0;
            case "mouseover":
                return en = _r(en, e, t, i, o, a),
                    !0;
            case "pointerover":
                var u = a.pointerId;
                return Vr.set(u, _r(Vr.get(u) || null, e, t, i, o, a)),
                    !0;
            case "gotpointercapture":
                return u = a.pointerId,
                    jr.set(u, _r(jr.get(u) || null, e, t, i, o, a)),
                    !0
        }
        return !1
    }
    function Ju(e) {
        var t = Pn(e.target);
        if (t !== null) {
            var i = En(t);
            if (i !== null) {
                if (t = i.tag,
                    t === 13) {
                    if (t = zu(i),
                        t !== null) {
                        e.blockedOn = t,
                            Zu(e.priority, function () {
                                Qu(i)
                            });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ii(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var i = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var o = new i.constructor(i.type, i);
                mo = o,
                    i.target.dispatchEvent(o),
                    mo = null
            } else
                return t = Qr(i),
                    t !== null && Eo(t),
                    e.blockedOn = i,
                    !1;
            t.shift()
        }
        return !0
    }
    function ec(e, t, i) {
        Ii(e) && i.delete(t)
    }
    function Qm() {
        Po = !1,
            qt !== null && Ii(qt) && (qt = null),
            Jt !== null && Ii(Jt) && (Jt = null),
            en !== null && Ii(en) && (en = null),
            Vr.forEach(ec),
            jr.forEach(ec)
    }
    function Ir(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
            Po || (Po = !0,
                r.unstable_scheduleCallback(r.unstable_NormalPriority, Qm)))
    }
    function Fr(e) {
        function t(a) {
            return Ir(a, e)
        }
        if (0 < _i.length) {
            Ir(_i[0], e);
            for (var i = 1; i < _i.length; i++) {
                var o = _i[i];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (qt !== null && Ir(qt, e),
            Jt !== null && Ir(Jt, e),
            en !== null && Ir(en, e),
            Vr.forEach(t),
            jr.forEach(t),
            i = 0; i < tn.length; i++)
            o = tn[i],
                o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < tn.length && (i = tn[0],
            i.blockedOn === null);)
            Ju(i),
                i.blockedOn === null && tn.shift()
    }
    var Xn = U.ReactCurrentBatchConfig
        , Fi = !0;
    function bm(e, t, i, o) {
        var a = pe
            , u = Xn.transition;
        Xn.transition = null;
        try {
            pe = 1,
                Mo(e, t, i, o)
        } finally {
            pe = a,
                Xn.transition = u
        }
    }
    function Zm(e, t, i, o) {
        var a = pe
            , u = Xn.transition;
        Xn.transition = null;
        try {
            pe = 4,
                Mo(e, t, i, o)
        } finally {
            pe = a,
                Xn.transition = u
        }
    }
    function Mo(e, t, i, o) {
        if (Fi) {
            var a = No(e, t, i, o);
            if (a === null)
                Ko(e, t, o, zi, i),
                    qu(e, o);
            else if (Ym(a, e, t, i, o))
                o.stopPropagation();
            else if (qu(e, o),
                t & 4 && -1 < Xm.indexOf(e)) {
                for (; a !== null;) {
                    var u = Qr(a);
                    if (u !== null && Yu(u),
                        u = No(e, t, i, o),
                        u === null && Ko(e, t, o, zi, i),
                        u === a)
                        break;
                    a = u
                }
                a !== null && o.stopPropagation()
            } else
                Ko(e, t, o, null, i)
        }
    }
    var zi = null;
    function No(e, t, i, o) {
        if (zi = null,
            e = yo(o),
            e = Pn(e),
            e !== null)
            if (t = En(e),
                t === null)
                e = null;
            else if (i = t.tag,
                i === 13) {
                if (e = zu(t),
                    e !== null)
                    return e;
                e = null
            } else if (i === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return zi = e,
            null
    }
    function tc(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (zm()) {
                    case So:
                        return 1;
                    case Hu:
                        return 4;
                    case Li:
                    case Om:
                        return 16;
                    case Ku:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var nn = null
        , Ao = null
        , Oi = null;
    function nc() {
        if (Oi)
            return Oi;
        var e, t = Ao, i = t.length, o, a = "value" in nn ? nn.value : nn.textContent, u = a.length;
        for (e = 0; e < i && t[e] === a[e]; e++)
            ;
        var h = i - e;
        for (o = 1; o <= h && t[i - o] === a[u - o]; o++)
            ;
        return Oi = a.slice(e, 1 < o ? 1 - o : void 0)
    }
    function Bi(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
            e === 0 && t === 13 && (e = 13)) : e = t,
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    }
    function Ui() {
        return !0
    }
    function rc() {
        return !1
    }
    function ft(e) {
        function t(i, o, a, u, h) {
            this._reactName = i,
                this._targetInst = a,
                this.type = o,
                this.nativeEvent = u,
                this.target = h,
                this.currentTarget = null;
            for (var v in e)
                e.hasOwnProperty(v) && (i = e[v],
                    this[v] = i ? i(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ui : rc,
                this.isPropagationStopped = rc,
                this
        }
        return W(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
                    this.isDefaultPrevented = Ui)
            },
            stopPropagation: function () {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
                    this.isPropagationStopped = Ui)
            },
            persist: function () { },
            isPersistent: Ui
        }),
            t
    }
    var Yn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Lo = ft(Yn), zr = W({}, Yn, {
        view: 0,
        detail: 0
    }), qm = ft(zr), Ro, Do, Or, Wi = W({}, zr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: jo,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (Ro = e.screenX - Or.screenX,
                Do = e.screenY - Or.screenY) : Do = Ro = 0,
                Or = e),
                Ro)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Do
        }
    }), ic = ft(Wi), Jm = W({}, Wi, {
        dataTransfer: 0
    }), ey = ft(Jm), ty = W({}, zr, {
        relatedTarget: 0
    }), Vo = ft(ty), ny = W({}, Yn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ry = ft(ny), iy = W({}, Yn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), sy = ft(iy), oy = W({}, Yn, {
        data: 0
    }), sc = ft(oy), ly = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, ay = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, uy = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function cy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = uy[e]) ? !!t[e] : !1
    }
    function jo() {
        return cy
    }
    var fy = W({}, zr, {
        key: function (e) {
            if (e.key) {
                var t = ly[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Bi(e),
                e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ay[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: jo,
        charCode: function (e) {
            return e.type === "keypress" ? Bi(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? Bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
        , dy = ft(fy)
        , hy = W({}, Wi, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })
        , oc = ft(hy)
        , py = W({}, zr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: jo
        })
        , my = ft(py)
        , yy = W({}, Yn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })
        , gy = ft(yy)
        , vy = W({}, Wi, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })
        , wy = ft(vy)
        , xy = [9, 13, 27, 32]
        , _o = p && "CompositionEvent" in window
        , Br = null;
    p && "documentMode" in document && (Br = document.documentMode);
    var Sy = p && "TextEvent" in window && !Br
        , lc = p && (!_o || Br && 8 < Br && 11 >= Br)
        , ac = " "
        , uc = !1;
    function cc(e, t) {
        switch (e) {
            case "keyup":
                return xy.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }
    function fc(e) {
        return e = e.detail,
            typeof e == "object" && "data" in e ? e.data : null
    }
    var Qn = !1;
    function ky(e, t) {
        switch (e) {
            case "compositionend":
                return fc(t);
            case "keypress":
                return t.which !== 32 ? null : (uc = !0,
                    ac);
            case "textInput":
                return e = t.data,
                    e === ac && uc ? null : e;
            default:
                return null
        }
    }
    function Ty(e, t) {
        if (Qn)
            return e === "compositionend" || !_o && cc(e, t) ? (e = nc(),
                Oi = Ao = nn = null,
                Qn = !1,
                e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length)
                        return t.char;
                    if (t.which)
                        return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return lc && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Cy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function dc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Cy[e.type] : t === "textarea"
    }
    function hc(e, t, i, o) {
        Vu(o),
            t = Xi(t, "onChange"),
            0 < t.length && (i = new Lo("onChange", "change", null, i, o),
                e.push({
                    event: i,
                    listeners: t
                }))
    }
    var Ur = null
        , Wr = null;
    function Ey(e) {
        Rc(e, 0)
    }
    function $i(e) {
        var t = er(e);
        if (Su(t))
            return e
    }
    function Py(e, t) {
        if (e === "change")
            return t
    }
    var pc = !1;
    if (p) {
        var Io;
        if (p) {
            var Fo = "oninput" in document;
            if (!Fo) {
                var mc = document.createElement("div");
                mc.setAttribute("oninput", "return;"),
                    Fo = typeof mc.oninput == "function"
            }
            Io = Fo
        } else
            Io = !1;
        pc = Io && (!document.documentMode || 9 < document.documentMode)
    }
    function yc() {
        Ur && (Ur.detachEvent("onpropertychange", gc),
            Wr = Ur = null)
    }
    function gc(e) {
        if (e.propertyName === "value" && $i(Wr)) {
            var t = [];
            hc(t, Wr, e, yo(e)),
                Fu(Ey, t)
        }
    }
    function My(e, t, i) {
        e === "focusin" ? (yc(),
            Ur = t,
            Wr = i,
            Ur.attachEvent("onpropertychange", gc)) : e === "focusout" && yc()
    }
    function Ny(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return $i(Wr)
    }
    function Ay(e, t) {
        if (e === "click")
            return $i(t)
    }
    function Ly(e, t) {
        if (e === "input" || e === "change")
            return $i(t)
    }
    function Ry(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Pt = typeof Object.is == "function" ? Object.is : Ry;
    function $r(e, t) {
        if (Pt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var i = Object.keys(e)
            , o = Object.keys(t);
        if (i.length !== o.length)
            return !1;
        for (o = 0; o < i.length; o++) {
            var a = i[o];
            if (!m.call(t, a) || !Pt(e[a], t[a]))
                return !1
        }
        return !0
    }
    function vc(e) {
        for (; e && e.firstChild;)
            e = e.firstChild;
        return e
    }
    function wc(e, t) {
        var i = vc(e);
        e = 0;
        for (var o; i;) {
            if (i.nodeType === 3) {
                if (o = e + i.textContent.length,
                    e <= t && o >= t)
                    return {
                        node: i,
                        offset: t - e
                    };
                e = o
            }
            e: {
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = vc(i)
        }
    }
    function xc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Sc() {
        for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement;) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i)
                e = t.contentWindow;
            else
                break;
            t = Pi(e.document)
        }
        return t
    }
    function zo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Dy(e) {
        var t = Sc()
            , i = e.focusedElem
            , o = e.selectionRange;
        if (t !== i && i && i.ownerDocument && xc(i.ownerDocument.documentElement, i)) {
            if (o !== null && zo(i)) {
                if (t = o.start,
                    e = o.end,
                    e === void 0 && (e = t),
                    "selectionStart" in i)
                    i.selectionStart = t,
                        i.selectionEnd = Math.min(e, i.value.length);
                else if (e = (t = i.ownerDocument || document) && t.defaultView || window,
                    e.getSelection) {
                    e = e.getSelection();
                    var a = i.textContent.length
                        , u = Math.min(o.start, a);
                    o = o.end === void 0 ? u : Math.min(o.end, a),
                        !e.extend && u > o && (a = o,
                            o = u,
                            u = a),
                        a = wc(i, u);
                    var h = wc(i, o);
                    a && h && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(),
                        t.setStart(a.node, a.offset),
                        e.removeAllRanges(),
                        u > o ? (e.addRange(t),
                            e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset),
                                e.addRange(t)))
                }
            }
            for (t = [],
                e = i; e = e.parentNode;)
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof i.focus == "function" && i.focus(),
                i = 0; i < t.length; i++)
                e = t[i],
                    e.element.scrollLeft = e.left,
                    e.element.scrollTop = e.top
        }
    }
    var Vy = p && "documentMode" in document && 11 >= document.documentMode
        , bn = null
        , Oo = null
        , Hr = null
        , Bo = !1;
    function kc(e, t, i) {
        var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Bo || bn == null || bn !== Pi(o) || (o = bn,
            "selectionStart" in o && zo(o) ? o = {
                start: o.selectionStart,
                end: o.selectionEnd
            } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
                o = {
                    anchorNode: o.anchorNode,
                    anchorOffset: o.anchorOffset,
                    focusNode: o.focusNode,
                    focusOffset: o.focusOffset
                }),
            Hr && $r(Hr, o) || (Hr = o,
                o = Xi(Oo, "onSelect"),
                0 < o.length && (t = new Lo("onSelect", "select", null, t, i),
                    e.push({
                        event: t,
                        listeners: o
                    }),
                    t.target = bn)))
    }
    function Hi(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(),
            i["Webkit" + e] = "webkit" + t,
            i["Moz" + e] = "moz" + t,
            i
    }
    var Zn = {
        animationend: Hi("Animation", "AnimationEnd"),
        animationiteration: Hi("Animation", "AnimationIteration"),
        animationstart: Hi("Animation", "AnimationStart"),
        transitionend: Hi("Transition", "TransitionEnd")
    }
        , Uo = {}
        , Tc = {};
    p && (Tc = document.createElement("div").style,
        "AnimationEvent" in window || (delete Zn.animationend.animation,
            delete Zn.animationiteration.animation,
            delete Zn.animationstart.animation),
        "TransitionEvent" in window || delete Zn.transitionend.transition);
    function Ki(e) {
        if (Uo[e])
            return Uo[e];
        if (!Zn[e])
            return e;
        var t = Zn[e], i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in Tc)
                return Uo[e] = t[i];
        return e
    }
    var Cc = Ki("animationend")
        , Ec = Ki("animationiteration")
        , Pc = Ki("animationstart")
        , Mc = Ki("transitionend")
        , Nc = new Map
        , Ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function rn(e, t) {
        Nc.set(e, t),
            d(t, [e])
    }
    for (var Wo = 0; Wo < Ac.length; Wo++) {
        var $o = Ac[Wo]
            , jy = $o.toLowerCase()
            , _y = $o[0].toUpperCase() + $o.slice(1);
        rn(jy, "on" + _y)
    }
    rn(Cc, "onAnimationEnd"),
        rn(Ec, "onAnimationIteration"),
        rn(Pc, "onAnimationStart"),
        rn("dblclick", "onDoubleClick"),
        rn("focusin", "onFocus"),
        rn("focusout", "onBlur"),
        rn(Mc, "onTransitionEnd"),
        f("onMouseEnter", ["mouseout", "mouseover"]),
        f("onMouseLeave", ["mouseout", "mouseover"]),
        f("onPointerEnter", ["pointerout", "pointerover"]),
        f("onPointerLeave", ["pointerout", "pointerover"]),
        d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
        d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
        , Iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));
    function Lc(e, t, i) {
        var o = e.type || "unknown-event";
        e.currentTarget = i,
            jm(o, t, void 0, e),
            e.currentTarget = null
    }
    function Rc(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var o = e[i]
                , a = o.event;
            o = o.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var h = o.length - 1; 0 <= h; h--) {
                        var v = o[h]
                            , S = v.instance
                            , N = v.currentTarget;
                        if (v = v.listener,
                            S !== u && a.isPropagationStopped())
                            break e;
                        Lc(a, v, N),
                            u = S
                    }
                else
                    for (h = 0; h < o.length; h++) {
                        if (v = o[h],
                            S = v.instance,
                            N = v.currentTarget,
                            v = v.listener,
                            S !== u && a.isPropagationStopped())
                            break e;
                        Lc(a, v, N),
                            u = S
                    }
            }
        }
        if (Ai)
            throw e = xo,
            Ai = !1,
            xo = null,
            e
    }
    function Se(e, t) {
        var i = t[Zo];
        i === void 0 && (i = t[Zo] = new Set);
        var o = e + "__bubble";
        i.has(o) || (Dc(t, e, 2, !1),
            i.add(o))
    }
    function Ho(e, t, i) {
        var o = 0;
        t && (o |= 4),
            Dc(i, e, o, t)
    }
    var Gi = "_reactListening" + Math.random().toString(36).slice(2);
    function Gr(e) {
        if (!e[Gi]) {
            e[Gi] = !0,
                l.forEach(function (i) {
                    i !== "selectionchange" && (Iy.has(i) || Ho(i, !1, e),
                        Ho(i, !0, e))
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Gi] || (t[Gi] = !0,
                Ho("selectionchange", !1, t))
        }
    }
    function Dc(e, t, i, o) {
        switch (tc(t)) {
            case 1:
                var a = bm;
                break;
            case 4:
                a = Zm;
                break;
            default:
                a = Mo
        }
        i = a.bind(null, t, i, e),
            a = void 0,
            !wo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0),
            o ? a !== void 0 ? e.addEventListener(t, i, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, i, !0) : a !== void 0 ? e.addEventListener(t, i, {
                passive: a
            }) : e.addEventListener(t, i, !1)
    }
    function Ko(e, t, i, o, a) {
        var u = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
            e: for (; ;) {
                if (o === null)
                    return;
                var h = o.tag;
                if (h === 3 || h === 4) {
                    var v = o.stateNode.containerInfo;
                    if (v === a || v.nodeType === 8 && v.parentNode === a)
                        break;
                    if (h === 4)
                        for (h = o.return; h !== null;) {
                            var S = h.tag;
                            if ((S === 3 || S === 4) && (S = h.stateNode.containerInfo,
                                S === a || S.nodeType === 8 && S.parentNode === a))
                                return;
                            h = h.return
                        }
                    for (; v !== null;) {
                        if (h = Pn(v),
                            h === null)
                            return;
                        if (S = h.tag,
                            S === 5 || S === 6) {
                            o = u = h;
                            continue e
                        }
                        v = v.parentNode
                    }
                }
                o = o.return
            }
        Fu(function () {
            var N = u
                , j = yo(i)
                , _ = [];
            e: {
                var V = Nc.get(e);
                if (V !== void 0) {
                    var $ = Lo
                        , G = e;
                    switch (e) {
                        case "keypress":
                            if (Bi(i) === 0)
                                break e;
                        case "keydown":
                        case "keyup":
                            $ = dy;
                            break;
                        case "focusin":
                            G = "focus",
                                $ = Vo;
                            break;
                        case "focusout":
                            G = "blur",
                                $ = Vo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            $ = Vo;
                            break;
                        case "click":
                            if (i.button === 2)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            $ = ic;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            $ = ey;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            $ = my;
                            break;
                        case Cc:
                        case Ec:
                        case Pc:
                            $ = ry;
                            break;
                        case Mc:
                            $ = gy;
                            break;
                        case "scroll":
                            $ = qm;
                            break;
                        case "wheel":
                            $ = wy;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            $ = sy;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            $ = oc
                    }
                    var Q = (t & 4) !== 0
                        , _e = !Q && e === "scroll"
                        , E = Q ? V !== null ? V + "Capture" : null : V;
                    Q = [];
                    for (var k = N, M; k !== null;) {
                        M = k;
                        var z = M.stateNode;
                        if (M.tag === 5 && z !== null && (M = z,
                            E !== null && (z = Nr(k, E),
                                z != null && Q.push(Xr(k, z, M)))),
                            _e)
                            break;
                        k = k.return
                    }
                    0 < Q.length && (V = new $(V, G, null, i, j),
                        _.push({
                            event: V,
                            listeners: Q
                        }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (V = e === "mouseover" || e === "pointerover",
                        $ = e === "mouseout" || e === "pointerout",
                        V && i !== mo && (G = i.relatedTarget || i.fromElement) && (Pn(G) || G[Ht]))
                        break e;
                    if (($ || V) && (V = j.window === j ? j : (V = j.ownerDocument) ? V.defaultView || V.parentWindow : window,
                        $ ? (G = i.relatedTarget || i.toElement,
                            $ = N,
                            G = G ? Pn(G) : null,
                            G !== null && (_e = En(G),
                                G !== _e || G.tag !== 5 && G.tag !== 6) && (G = null)) : ($ = null,
                                    G = N),
                        $ !== G)) {
                        if (Q = ic,
                            z = "onMouseLeave",
                            E = "onMouseEnter",
                            k = "mouse",
                            (e === "pointerout" || e === "pointerover") && (Q = oc,
                                z = "onPointerLeave",
                                E = "onPointerEnter",
                                k = "pointer"),
                            _e = $ == null ? V : er($),
                            M = G == null ? V : er(G),
                            V = new Q(z, k + "leave", $, i, j),
                            V.target = _e,
                            V.relatedTarget = M,
                            z = null,
                            Pn(j) === N && (Q = new Q(E, k + "enter", G, i, j),
                                Q.target = M,
                                Q.relatedTarget = _e,
                                z = Q),
                            _e = z,
                            $ && G)
                            t: {
                                for (Q = $,
                                    E = G,
                                    k = 0,
                                    M = Q; M; M = qn(M))
                                    k++;
                                for (M = 0,
                                    z = E; z; z = qn(z))
                                    M++;
                                for (; 0 < k - M;)
                                    Q = qn(Q),
                                        k--;
                                for (; 0 < M - k;)
                                    E = qn(E),
                                        M--;
                                for (; k--;) {
                                    if (Q === E || E !== null && Q === E.alternate)
                                        break t;
                                    Q = qn(Q),
                                        E = qn(E)
                                }
                                Q = null
                            }
                        else
                            Q = null;
                        $ !== null && Vc(_, V, $, Q, !1),
                            G !== null && _e !== null && Vc(_, _e, G, Q, !0)
                    }
                }
                e: {
                    if (V = N ? er(N) : window,
                        $ = V.nodeName && V.nodeName.toLowerCase(),
                        $ === "select" || $ === "input" && V.type === "file")
                        var Z = Py;
                    else if (dc(V))
                        if (pc)
                            Z = Ly;
                        else {
                            Z = Ny;
                            var J = My
                        }
                    else
                        ($ = V.nodeName) && $.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (Z = Ay);
                    if (Z && (Z = Z(e, N))) {
                        hc(_, Z, i, j);
                        break e
                    }
                    J && J(e, V, N),
                        e === "focusout" && (J = V._wrapperState) && J.controlled && V.type === "number" && uo(V, "number", V.value)
                }
                switch (J = N ? er(N) : window,
                e) {
                    case "focusin":
                        (dc(J) || J.contentEditable === "true") && (bn = J,
                            Oo = N,
                            Hr = null);
                        break;
                    case "focusout":
                        Hr = Oo = bn = null;
                        break;
                    case "mousedown":
                        Bo = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Bo = !1,
                            kc(_, i, j);
                        break;
                    case "selectionchange":
                        if (Vy)
                            break;
                    case "keydown":
                    case "keyup":
                        kc(_, i, j)
                }
                var ee;
                if (_o)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var ne = "onCompositionStart";
                                break e;
                            case "compositionend":
                                ne = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                ne = "onCompositionUpdate";
                                break e
                        }
                        ne = void 0
                    }
                else
                    Qn ? cc(e, i) && (ne = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ne = "onCompositionStart");
                ne && (lc && i.locale !== "ko" && (Qn || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && Qn && (ee = nc()) : (nn = j,
                    Ao = "value" in nn ? nn.value : nn.textContent,
                    Qn = !0)),
                    J = Xi(N, ne),
                    0 < J.length && (ne = new sc(ne, e, null, i, j),
                        _.push({
                            event: ne,
                            listeners: J
                        }),
                        ee ? ne.data = ee : (ee = fc(i),
                            ee !== null && (ne.data = ee)))),
                    (ee = Sy ? ky(e, i) : Ty(e, i)) && (N = Xi(N, "onBeforeInput"),
                        0 < N.length && (j = new sc("onBeforeInput", "beforeinput", null, i, j),
                            _.push({
                                event: j,
                                listeners: N
                            }),
                            j.data = ee))
            }
            Rc(_, t)
        })
    }
    function Xr(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }
    function Xi(e, t) {
        for (var i = t + "Capture", o = []; e !== null;) {
            var a = e
                , u = a.stateNode;
            a.tag === 5 && u !== null && (a = u,
                u = Nr(e, i),
                u != null && o.unshift(Xr(e, u, a)),
                u = Nr(e, t),
                u != null && o.push(Xr(e, u, a))),
                e = e.return
        }
        return o
    }
    function qn(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Vc(e, t, i, o, a) {
        for (var u = t._reactName, h = []; i !== null && i !== o;) {
            var v = i
                , S = v.alternate
                , N = v.stateNode;
            if (S !== null && S === o)
                break;
            v.tag === 5 && N !== null && (v = N,
                a ? (S = Nr(i, u),
                    S != null && h.unshift(Xr(i, S, v))) : a || (S = Nr(i, u),
                        S != null && h.push(Xr(i, S, v)))),
                i = i.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var Fy = /\r\n?/g
        , zy = /\u0000|\uFFFD/g;
    function jc(e) {
        return (typeof e == "string" ? e : "" + e).replace(Fy, `
`).replace(zy, "")
    }
    function Yi(e, t, i) {
        if (t = jc(t),
            jc(e) !== t && i)
            throw Error(s(425))
    }
    function Qi() { }
    var Go = null
        , Xo = null;
    function Yo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Qo = typeof setTimeout == "function" ? setTimeout : void 0
        , Oy = typeof clearTimeout == "function" ? clearTimeout : void 0
        , _c = typeof Promise == "function" ? Promise : void 0
        , By = typeof queueMicrotask == "function" ? queueMicrotask : typeof _c < "u" ? function (e) {
            return _c.resolve(null).then(e).catch(Uy)
        }
            : Qo;
    function Uy(e) {
        setTimeout(function () {
            throw e
        })
    }
    function bo(e, t) {
        var i = t
            , o = 0;
        do {
            var a = i.nextSibling;
            if (e.removeChild(i),
                a && a.nodeType === 8)
                if (i = a.data,
                    i === "/$") {
                    if (o === 0) {
                        e.removeChild(a),
                            Fr(t);
                        return
                    }
                    o--
                } else
                    i !== "$" && i !== "$?" && i !== "$!" || o++;
            i = a
        } while (i);
        Fr(t)
    }
    function sn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                    t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function Ic(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    i === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Jn = Math.random().toString(36).slice(2)
        , It = "__reactFiber$" + Jn
        , Yr = "__reactProps$" + Jn
        , Ht = "__reactContainer$" + Jn
        , Zo = "__reactEvents$" + Jn
        , Wy = "__reactListeners$" + Jn
        , $y = "__reactHandles$" + Jn;
    function Pn(e) {
        var t = e[It];
        if (t)
            return t;
        for (var i = e.parentNode; i;) {
            if (t = i[Ht] || i[It]) {
                if (i = t.alternate,
                    t.child !== null || i !== null && i.child !== null)
                    for (e = Ic(e); e !== null;) {
                        if (i = e[It])
                            return i;
                        e = Ic(e)
                    }
                return t
            }
            e = i,
                i = e.parentNode
        }
        return null
    }
    function Qr(e) {
        return e = e[It] || e[Ht],
            !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function er(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(s(33))
    }
    function bi(e) {
        return e[Yr] || null
    }
    var qo = []
        , tr = -1;
    function on(e) {
        return {
            current: e
        }
    }
    function ke(e) {
        0 > tr || (e.current = qo[tr],
            qo[tr] = null,
            tr--)
    }
    function ve(e, t) {
        tr++,
            qo[tr] = e.current,
            e.current = t
    }
    var ln = {}
        , be = on(ln)
        , it = on(!1)
        , Mn = ln;
    function nr(e, t) {
        var i = e.type.contextTypes;
        if (!i)
            return ln;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
            return o.__reactInternalMemoizedMaskedChildContext;
        var a = {}, u;
        for (u in i)
            a[u] = t[u];
        return o && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = t,
            e.__reactInternalMemoizedMaskedChildContext = a),
            a
    }
    function st(e) {
        return e = e.childContextTypes,
            e != null
    }
    function Zi() {
        ke(it),
            ke(be)
    }
    function Fc(e, t, i) {
        if (be.current !== ln)
            throw Error(s(168));
        ve(be, t),
            ve(it, i)
    }
    function zc(e, t, i) {
        var o = e.stateNode;
        if (t = t.childContextTypes,
            typeof o.getChildContext != "function")
            return i;
        o = o.getChildContext();
        for (var a in o)
            if (!(a in t))
                throw Error(s(108, ge(e) || "Unknown", a));
        return W({}, i, o)
    }
    function qi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln,
            Mn = be.current,
            ve(be, e),
            ve(it, it.current),
            !0
    }
    function Oc(e, t, i) {
        var o = e.stateNode;
        if (!o)
            throw Error(s(169));
        i ? (e = zc(e, t, Mn),
            o.__reactInternalMemoizedMergedChildContext = e,
            ke(it),
            ke(be),
            ve(be, e)) : ke(it),
            ve(it, i)
    }
    var Kt = null
        , Ji = !1
        , Jo = !1;
    function Bc(e) {
        Kt === null ? Kt = [e] : Kt.push(e)
    }
    function Hy(e) {
        Ji = !0,
            Bc(e)
    }
    function an() {
        if (!Jo && Kt !== null) {
            Jo = !0;
            var e = 0
                , t = pe;
            try {
                var i = Kt;
                for (pe = 1; e < i.length; e++) {
                    var o = i[e];
                    do
                        o = o(!0);
                    while (o !== null)
                }
                Kt = null,
                    Ji = !1
            } catch (a) {
                throw Kt !== null && (Kt = Kt.slice(e + 1)),
                Wu(So, an),
                a
            } finally {
                pe = t,
                    Jo = !1
            }
        }
        return null
    }
    var rr = []
        , ir = 0
        , es = null
        , ts = 0
        , yt = []
        , gt = 0
        , Nn = null
        , Gt = 1
        , Xt = "";
    function An(e, t) {
        rr[ir++] = ts,
            rr[ir++] = es,
            es = e,
            ts = t
    }
    function Uc(e, t, i) {
        yt[gt++] = Gt,
            yt[gt++] = Xt,
            yt[gt++] = Nn,
            Nn = e;
        var o = Gt;
        e = Xt;
        var a = 32 - Et(o) - 1;
        o &= ~(1 << a),
            i += 1;
        var u = 32 - Et(t) + a;
        if (30 < u) {
            var h = a - a % 5;
            u = (o & (1 << h) - 1).toString(32),
                o >>= h,
                a -= h,
                Gt = 1 << 32 - Et(t) + a | i << a | o,
                Xt = u + e
        } else
            Gt = 1 << u | i << a | o,
                Xt = e
    }
    function el(e) {
        e.return !== null && (An(e, 1),
            Uc(e, 1, 0))
    }
    function tl(e) {
        for (; e === es;)
            es = rr[--ir],
                rr[ir] = null,
                ts = rr[--ir],
                rr[ir] = null;
        for (; e === Nn;)
            Nn = yt[--gt],
                yt[gt] = null,
                Xt = yt[--gt],
                yt[gt] = null,
                Gt = yt[--gt],
                yt[gt] = null
    }
    var dt = null
        , ht = null
        , Pe = !1
        , Mt = null;
    function Wc(e, t) {
        var i = St(5, null, null, 0);
        i.elementType = "DELETED",
            i.stateNode = t,
            i.return = e,
            t = e.deletions,
            t === null ? (e.deletions = [i],
                e.flags |= 16) : t.push(i)
    }
    function $c(e, t) {
        switch (e.tag) {
            case 5:
                var i = e.type;
                return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                    t !== null ? (e.stateNode = t,
                        dt = e,
                        ht = sn(t.firstChild),
                        !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                    t !== null ? (e.stateNode = t,
                        dt = e,
                        ht = null,
                        !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t,
                    t !== null ? (i = Nn !== null ? {
                        id: Gt,
                        overflow: Xt
                    } : null,
                        e.memoizedState = {
                            dehydrated: t,
                            treeContext: i,
                            retryLane: 1073741824
                        },
                        i = St(18, null, null, 0),
                        i.stateNode = t,
                        i.return = e,
                        e.child = i,
                        dt = e,
                        ht = null,
                        !0) : !1;
            default:
                return !1
        }
    }
    function nl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function rl(e) {
        if (Pe) {
            var t = ht;
            if (t) {
                var i = t;
                if (!$c(e, t)) {
                    if (nl(e))
                        throw Error(s(418));
                    t = sn(i.nextSibling);
                    var o = dt;
                    t && $c(e, t) ? Wc(o, i) : (e.flags = e.flags & -4097 | 2,
                        Pe = !1,
                        dt = e)
                }
            } else {
                if (nl(e))
                    throw Error(s(418));
                e.flags = e.flags & -4097 | 2,
                    Pe = !1,
                    dt = e
            }
        }
    }
    function Hc(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
            e = e.return;
        dt = e
    }
    function ns(e) {
        if (e !== dt)
            return !1;
        if (!Pe)
            return Hc(e),
                Pe = !0,
                !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
            t = t !== "head" && t !== "body" && !Yo(e.type, e.memoizedProps)),
            t && (t = ht)) {
            if (nl(e))
                throw Kc(),
                Error(s(418));
            for (; t;)
                Wc(e, t),
                    t = sn(t.nextSibling)
        }
        if (Hc(e),
            e.tag === 13) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(s(317));
            e: {
                for (e = e.nextSibling,
                    t = 0; e;) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                ht = sn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            i !== "$" && i !== "$!" && i !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                ht = null
            }
        } else
            ht = dt ? sn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Kc() {
        for (var e = ht; e;)
            e = sn(e.nextSibling)
    }
    function sr() {
        ht = dt = null,
            Pe = !1
    }
    function il(e) {
        Mt === null ? Mt = [e] : Mt.push(e)
    }
    var Ky = U.ReactCurrentBatchConfig;
    function br(e, t, i) {
        if (e = i.ref,
            e !== null && typeof e != "function" && typeof e != "object") {
            if (i._owner) {
                if (i = i._owner,
                    i) {
                    if (i.tag !== 1)
                        throw Error(s(309));
                    var o = i.stateNode
                }
                if (!o)
                    throw Error(s(147, e));
                var a = o
                    , u = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function (h) {
                    var v = a.refs;
                    h === null ? delete v[u] : v[u] = h
                }
                    ,
                    t._stringRef = u,
                    t)
            }
            if (typeof e != "string")
                throw Error(s(284));
            if (!i._owner)
                throw Error(s(290, e))
        }
        return e
    }
    function rs(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Gc(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Xc(e) {
        function t(E, k) {
            if (e) {
                var M = E.deletions;
                M === null ? (E.deletions = [k],
                    E.flags |= 16) : M.push(k)
            }
        }
        function i(E, k) {
            if (!e)
                return null;
            for (; k !== null;)
                t(E, k),
                    k = k.sibling;
            return null
        }
        function o(E, k) {
            for (E = new Map; k !== null;)
                k.key !== null ? E.set(k.key, k) : E.set(k.index, k),
                    k = k.sibling;
            return E
        }
        function a(E, k) {
            return E = yn(E, k),
                E.index = 0,
                E.sibling = null,
                E
        }
        function u(E, k, M) {
            return E.index = M,
                e ? (M = E.alternate,
                    M !== null ? (M = M.index,
                        M < k ? (E.flags |= 2,
                            k) : M) : (E.flags |= 2,
                                k)) : (E.flags |= 1048576,
                                    k)
        }
        function h(E) {
            return e && E.alternate === null && (E.flags |= 2),
                E
        }
        function v(E, k, M, z) {
            return k === null || k.tag !== 6 ? (k = Ql(M, E.mode, z),
                k.return = E,
                k) : (k = a(k, M),
                    k.return = E,
                    k)
        }
        function S(E, k, M, z) {
            var Z = M.type;
            return Z === ae ? j(E, k, M.props.children, z, M.key) : k !== null && (k.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === xe && Gc(Z) === k.type) ? (z = a(k, M.props),
                z.ref = br(E, k, M),
                z.return = E,
                z) : (z = Ms(M.type, M.key, M.props, null, E.mode, z),
                    z.ref = br(E, k, M),
                    z.return = E,
                    z)
        }
        function N(E, k, M, z) {
            return k === null || k.tag !== 4 || k.stateNode.containerInfo !== M.containerInfo || k.stateNode.implementation !== M.implementation ? (k = bl(M, E.mode, z),
                k.return = E,
                k) : (k = a(k, M.children || []),
                    k.return = E,
                    k)
        }
        function j(E, k, M, z, Z) {
            return k === null || k.tag !== 7 ? (k = Fn(M, E.mode, z, Z),
                k.return = E,
                k) : (k = a(k, M),
                    k.return = E,
                    k)
        }
        function _(E, k, M) {
            if (typeof k == "string" && k !== "" || typeof k == "number")
                return k = Ql("" + k, E.mode, M),
                    k.return = E,
                    k;
            if (typeof k == "object" && k !== null) {
                switch (k.$$typeof) {
                    case q:
                        return M = Ms(k.type, k.key, k.props, null, E.mode, M),
                            M.ref = br(E, null, k),
                            M.return = E,
                            M;
                    case se:
                        return k = bl(k, E.mode, M),
                            k.return = E,
                            k;
                    case xe:
                        var z = k._init;
                        return _(E, z(k._payload), M)
                }
                if (Er(k) || Y(k))
                    return k = Fn(k, E.mode, M, null),
                        k.return = E,
                        k;
                rs(E, k)
            }
            return null
        }
        function V(E, k, M, z) {
            var Z = k !== null ? k.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number")
                return Z !== null ? null : v(E, k, "" + M, z);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case q:
                        return M.key === Z ? S(E, k, M, z) : null;
                    case se:
                        return M.key === Z ? N(E, k, M, z) : null;
                    case xe:
                        return Z = M._init,
                            V(E, k, Z(M._payload), z)
                }
                if (Er(M) || Y(M))
                    return Z !== null ? null : j(E, k, M, z, null);
                rs(E, M)
            }
            return null
        }
        function $(E, k, M, z, Z) {
            if (typeof z == "string" && z !== "" || typeof z == "number")
                return E = E.get(M) || null,
                    v(k, E, "" + z, Z);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                    case q:
                        return E = E.get(z.key === null ? M : z.key) || null,
                            S(k, E, z, Z);
                    case se:
                        return E = E.get(z.key === null ? M : z.key) || null,
                            N(k, E, z, Z);
                    case xe:
                        var J = z._init;
                        return $(E, k, M, J(z._payload), Z)
                }
                if (Er(z) || Y(z))
                    return E = E.get(M) || null,
                        j(k, E, z, Z, null);
                rs(k, z)
            }
            return null
        }
        function G(E, k, M, z) {
            for (var Z = null, J = null, ee = k, ne = k = 0, Ke = null; ee !== null && ne < M.length; ne++) {
                ee.index > ne ? (Ke = ee,
                    ee = null) : Ke = ee.sibling;
                var de = V(E, ee, M[ne], z);
                if (de === null) {
                    ee === null && (ee = Ke);
                    break
                }
                e && ee && de.alternate === null && t(E, ee),
                    k = u(de, k, ne),
                    J === null ? Z = de : J.sibling = de,
                    J = de,
                    ee = Ke
            }
            if (ne === M.length)
                return i(E, ee),
                    Pe && An(E, ne),
                    Z;
            if (ee === null) {
                for (; ne < M.length; ne++)
                    ee = _(E, M[ne], z),
                        ee !== null && (k = u(ee, k, ne),
                            J === null ? Z = ee : J.sibling = ee,
                            J = ee);
                return Pe && An(E, ne),
                    Z
            }
            for (ee = o(E, ee); ne < M.length; ne++)
                Ke = $(ee, E, ne, M[ne], z),
                    Ke !== null && (e && Ke.alternate !== null && ee.delete(Ke.key === null ? ne : Ke.key),
                        k = u(Ke, k, ne),
                        J === null ? Z = Ke : J.sibling = Ke,
                        J = Ke);
            return e && ee.forEach(function (gn) {
                return t(E, gn)
            }),
                Pe && An(E, ne),
                Z
        }
        function Q(E, k, M, z) {
            var Z = Y(M);
            if (typeof Z != "function")
                throw Error(s(150));
            if (M = Z.call(M),
                M == null)
                throw Error(s(151));
            for (var J = Z = null, ee = k, ne = k = 0, Ke = null, de = M.next(); ee !== null && !de.done; ne++,
                de = M.next()) {
                ee.index > ne ? (Ke = ee,
                    ee = null) : Ke = ee.sibling;
                var gn = V(E, ee, de.value, z);
                if (gn === null) {
                    ee === null && (ee = Ke);
                    break
                }
                e && ee && gn.alternate === null && t(E, ee),
                    k = u(gn, k, ne),
                    J === null ? Z = gn : J.sibling = gn,
                    J = gn,
                    ee = Ke
            }
            if (de.done)
                return i(E, ee),
                    Pe && An(E, ne),
                    Z;
            if (ee === null) {
                for (; !de.done; ne++,
                    de = M.next())
                    de = _(E, de.value, z),
                        de !== null && (k = u(de, k, ne),
                            J === null ? Z = de : J.sibling = de,
                            J = de);
                return Pe && An(E, ne),
                    Z
            }
            for (ee = o(E, ee); !de.done; ne++,
                de = M.next())
                de = $(ee, E, ne, de.value, z),
                    de !== null && (e && de.alternate !== null && ee.delete(de.key === null ? ne : de.key),
                        k = u(de, k, ne),
                        J === null ? Z = de : J.sibling = de,
                        J = de);
            return e && ee.forEach(function (Cg) {
                return t(E, Cg)
            }),
                Pe && An(E, ne),
                Z
        }
        function _e(E, k, M, z) {
            if (typeof M == "object" && M !== null && M.type === ae && M.key === null && (M = M.props.children),
                typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case q:
                        e: {
                            for (var Z = M.key, J = k; J !== null;) {
                                if (J.key === Z) {
                                    if (Z = M.type,
                                        Z === ae) {
                                        if (J.tag === 7) {
                                            i(E, J.sibling),
                                                k = a(J, M.props.children),
                                                k.return = E,
                                                E = k;
                                            break e
                                        }
                                    } else if (J.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === xe && Gc(Z) === J.type) {
                                        i(E, J.sibling),
                                            k = a(J, M.props),
                                            k.ref = br(E, J, M),
                                            k.return = E,
                                            E = k;
                                        break e
                                    }
                                    i(E, J);
                                    break
                                } else
                                    t(E, J);
                                J = J.sibling
                            }
                            M.type === ae ? (k = Fn(M.props.children, E.mode, z, M.key),
                                k.return = E,
                                E = k) : (z = Ms(M.type, M.key, M.props, null, E.mode, z),
                                    z.ref = br(E, k, M),
                                    z.return = E,
                                    E = z)
                        }
                        return h(E);
                    case se:
                        e: {
                            for (J = M.key; k !== null;) {
                                if (k.key === J)
                                    if (k.tag === 4 && k.stateNode.containerInfo === M.containerInfo && k.stateNode.implementation === M.implementation) {
                                        i(E, k.sibling),
                                            k = a(k, M.children || []),
                                            k.return = E,
                                            E = k;
                                        break e
                                    } else {
                                        i(E, k);
                                        break
                                    }
                                else
                                    t(E, k);
                                k = k.sibling
                            }
                            k = bl(M, E.mode, z),
                                k.return = E,
                                E = k
                        }
                        return h(E);
                    case xe:
                        return J = M._init,
                            _e(E, k, J(M._payload), z)
                }
                if (Er(M))
                    return G(E, k, M, z);
                if (Y(M))
                    return Q(E, k, M, z);
                rs(E, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M,
                k !== null && k.tag === 6 ? (i(E, k.sibling),
                    k = a(k, M),
                    k.return = E,
                    E = k) : (i(E, k),
                        k = Ql(M, E.mode, z),
                        k.return = E,
                        E = k),
                h(E)) : i(E, k)
        }
        return _e
    }
    var or = Xc(!0)
        , Yc = Xc(!1)
        , is = on(null)
        , ss = null
        , lr = null
        , sl = null;
    function ol() {
        sl = lr = ss = null
    }
    function ll(e) {
        var t = is.current;
        ke(is),
            e._currentValue = t
    }
    function al(e, t, i) {
        for (; e !== null;) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
                e === i)
                break;
            e = e.return
        }
    }
    function ar(e, t) {
        ss = e,
            sl = lr = null,
            e = e.dependencies,
            e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ot = !0),
                e.firstContext = null)
    }
    function vt(e) {
        var t = e._currentValue;
        if (sl !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
                lr === null) {
                if (ss === null)
                    throw Error(s(308));
                lr = e,
                    ss.dependencies = {
                        lanes: 0,
                        firstContext: e
                    }
            } else
                lr = lr.next = e;
        return t
    }
    var Ln = null;
    function ul(e) {
        Ln === null ? Ln = [e] : Ln.push(e)
    }
    function Qc(e, t, i, o) {
        var a = t.interleaved;
        return a === null ? (i.next = i,
            ul(t)) : (i.next = a.next,
                a.next = i),
            t.interleaved = i,
            Yt(e, o)
    }
    function Yt(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t),
            i = e,
            e = e.return; e !== null;)
            e.childLanes |= t,
                i = e.alternate,
                i !== null && (i.childLanes |= t),
                i = e,
                e = e.return;
        return i.tag === 3 ? i.stateNode : null
    }
    var un = !1;
    function cl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function bc(e, t) {
        e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
            })
    }
    function Qt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function cn(e, t, i) {
        var o = e.updateQueue;
        if (o === null)
            return null;
        if (o = o.shared,
            (ue & 2) !== 0) {
            var a = o.pending;
            return a === null ? t.next = t : (t.next = a.next,
                a.next = t),
                o.pending = t,
                Yt(e, i)
        }
        return a = o.interleaved,
            a === null ? (t.next = t,
                ul(o)) : (t.next = a.next,
                    a.next = t),
            o.interleaved = t,
            Yt(e, i)
    }
    function os(e, t, i) {
        if (t = t.updateQueue,
            t !== null && (t = t.shared,
                (i & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes,
                i |= o,
                t.lanes = i,
                Co(e, i)
        }
    }
    function Zc(e, t) {
        var i = e.updateQueue
            , o = e.alternate;
        if (o !== null && (o = o.updateQueue,
            i === o)) {
            var a = null
                , u = null;
            if (i = i.firstBaseUpdate,
                i !== null) {
                do {
                    var h = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    };
                    u === null ? a = u = h : u = u.next = h,
                        i = i.next
                } while (i !== null);
                u === null ? a = u = t : u = u.next = t
            } else
                a = u = t;
            i = {
                baseState: o.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: u,
                shared: o.shared,
                effects: o.effects
            },
                e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate,
            e === null ? i.firstBaseUpdate = t : e.next = t,
            i.lastBaseUpdate = t
    }
    function ls(e, t, i, o) {
        var a = e.updateQueue;
        un = !1;
        var u = a.firstBaseUpdate
            , h = a.lastBaseUpdate
            , v = a.shared.pending;
        if (v !== null) {
            a.shared.pending = null;
            var S = v
                , N = S.next;
            S.next = null,
                h === null ? u = N : h.next = N,
                h = S;
            var j = e.alternate;
            j !== null && (j = j.updateQueue,
                v = j.lastBaseUpdate,
                v !== h && (v === null ? j.firstBaseUpdate = N : v.next = N,
                    j.lastBaseUpdate = S))
        }
        if (u !== null) {
            var _ = a.baseState;
            h = 0,
                j = N = S = null,
                v = u;
            do {
                var V = v.lane
                    , $ = v.eventTime;
                if ((o & V) === V) {
                    j !== null && (j = j.next = {
                        eventTime: $,
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    });
                    e: {
                        var G = e
                            , Q = v;
                        switch (V = t,
                        $ = i,
                        Q.tag) {
                            case 1:
                                if (G = Q.payload,
                                    typeof G == "function") {
                                    _ = G.call($, _, V);
                                    break e
                                }
                                _ = G;
                                break e;
                            case 3:
                                G.flags = G.flags & -65537 | 128;
                            case 0:
                                if (G = Q.payload,
                                    V = typeof G == "function" ? G.call($, _, V) : G,
                                    V == null)
                                    break e;
                                _ = W({}, _, V);
                                break e;
                            case 2:
                                un = !0
                        }
                    }
                    v.callback !== null && v.lane !== 0 && (e.flags |= 64,
                        V = a.effects,
                        V === null ? a.effects = [v] : V.push(v))
                } else
                    $ = {
                        eventTime: $,
                        lane: V,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                        j === null ? (N = j = $,
                            S = _) : j = j.next = $,
                        h |= V;
                if (v = v.next,
                    v === null) {
                    if (v = a.shared.pending,
                        v === null)
                        break;
                    V = v,
                        v = V.next,
                        V.next = null,
                        a.lastBaseUpdate = V,
                        a.shared.pending = null
                }
            } while (!0);
            if (j === null && (S = _),
                a.baseState = S,
                a.firstBaseUpdate = N,
                a.lastBaseUpdate = j,
                t = a.shared.interleaved,
                t !== null) {
                a = t;
                do
                    h |= a.lane,
                        a = a.next;
                while (a !== t)
            } else
                u === null && (a.shared.lanes = 0);
            Vn |= h,
                e.lanes = h,
                e.memoizedState = _
        }
    }
    function qc(e, t, i) {
        if (e = t.effects,
            t.effects = null,
            e !== null)
            for (t = 0; t < e.length; t++) {
                var o = e[t]
                    , a = o.callback;
                if (a !== null) {
                    if (o.callback = null,
                        o = i,
                        typeof a != "function")
                        throw Error(s(191, a));
                    a.call(o)
                }
            }
    }
    var Zr = {}
        , Ft = on(Zr)
        , qr = on(Zr)
        , Jr = on(Zr);
    function Rn(e) {
        if (e === Zr)
            throw Error(s(174));
        return e
    }
    function fl(e, t) {
        switch (ve(Jr, t),
        ve(qr, e),
        ve(Ft, Zr),
        e = t.nodeType,
        e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t,
                    t = e.namespaceURI || null,
                    e = e.tagName,
                    t = fo(t, e)
        }
        ke(Ft),
            ve(Ft, t)
    }
    function ur() {
        ke(Ft),
            ke(qr),
            ke(Jr)
    }
    function Jc(e) {
        Rn(Jr.current);
        var t = Rn(Ft.current)
            , i = fo(t, e.type);
        t !== i && (ve(qr, e),
            ve(Ft, i))
    }
    function dl(e) {
        qr.current === e && (ke(Ft),
            ke(qr))
    }
    var Ne = on(0);
    function as(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated,
                    i === null || i.data === "$?" || i.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                    t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
        return null
    }
    var hl = [];
    function pl() {
        for (var e = 0; e < hl.length; e++)
            hl[e]._workInProgressVersionPrimary = null;
        hl.length = 0
    }
    var us = U.ReactCurrentDispatcher
        , ml = U.ReactCurrentBatchConfig
        , Dn = 0
        , Ae = null
        , Be = null
        , $e = null
        , cs = !1
        , ei = !1
        , ti = 0
        , Gy = 0;
    function Ze() {
        throw Error(s(321))
    }
    function yl(e, t) {
        if (t === null)
            return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Pt(e[i], t[i]))
                return !1;
        return !0
    }
    function gl(e, t, i, o, a, u) {
        if (Dn = u,
            Ae = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            us.current = e === null || e.memoizedState === null ? by : Zy,
            e = i(o, a),
            ei) {
            u = 0;
            do {
                if (ei = !1,
                    ti = 0,
                    25 <= u)
                    throw Error(s(301));
                u += 1,
                    $e = Be = null,
                    t.updateQueue = null,
                    us.current = qy,
                    e = i(o, a)
            } while (ei)
        }
        if (us.current = hs,
            t = Be !== null && Be.next !== null,
            Dn = 0,
            $e = Be = Ae = null,
            cs = !1,
            t)
            throw Error(s(300));
        return e
    }
    function vl() {
        var e = ti !== 0;
        return ti = 0,
            e
    }
    function zt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return $e === null ? Ae.memoizedState = $e = e : $e = $e.next = e,
            $e
    }
    function wt() {
        if (Be === null) {
            var e = Ae.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Be.next;
        var t = $e === null ? Ae.memoizedState : $e.next;
        if (t !== null)
            $e = t,
                Be = e;
        else {
            if (e === null)
                throw Error(s(310));
            Be = e,
                e = {
                    memoizedState: Be.memoizedState,
                    baseState: Be.baseState,
                    baseQueue: Be.baseQueue,
                    queue: Be.queue,
                    next: null
                },
                $e === null ? Ae.memoizedState = $e = e : $e = $e.next = e
        }
        return $e
    }
    function ni(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function wl(e) {
        var t = wt()
            , i = t.queue;
        if (i === null)
            throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = Be
            , a = o.baseQueue
            , u = i.pending;
        if (u !== null) {
            if (a !== null) {
                var h = a.next;
                a.next = u.next,
                    u.next = h
            }
            o.baseQueue = a = u,
                i.pending = null
        }
        if (a !== null) {
            u = a.next,
                o = o.baseState;
            var v = h = null
                , S = null
                , N = u;
            do {
                var j = N.lane;
                if ((Dn & j) === j)
                    S !== null && (S = S.next = {
                        lane: 0,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }),
                        o = N.hasEagerState ? N.eagerState : e(o, N.action);
                else {
                    var _ = {
                        lane: j,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    };
                    S === null ? (v = S = _,
                        h = o) : S = S.next = _,
                        Ae.lanes |= j,
                        Vn |= j
                }
                N = N.next
            } while (N !== null && N !== u);
            S === null ? h = o : S.next = v,
                Pt(o, t.memoizedState) || (ot = !0),
                t.memoizedState = o,
                t.baseState = h,
                t.baseQueue = S,
                i.lastRenderedState = o
        }
        if (e = i.interleaved,
            e !== null) {
            a = e;
            do
                u = a.lane,
                    Ae.lanes |= u,
                    Vn |= u,
                    a = a.next;
            while (a !== e)
        } else
            a === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch]
    }
    function xl(e) {
        var t = wt()
            , i = t.queue;
        if (i === null)
            throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = i.dispatch
            , a = i.pending
            , u = t.memoizedState;
        if (a !== null) {
            i.pending = null;
            var h = a = a.next;
            do
                u = e(u, h.action),
                    h = h.next;
            while (h !== a);
            Pt(u, t.memoizedState) || (ot = !0),
                t.memoizedState = u,
                t.baseQueue === null && (t.baseState = u),
                i.lastRenderedState = u
        }
        return [u, o]
    }
    function ef() { }
    function tf(e, t) {
        var i = Ae
            , o = wt()
            , a = t()
            , u = !Pt(o.memoizedState, a);
        if (u && (o.memoizedState = a,
            ot = !0),
            o = o.queue,
            Sl(sf.bind(null, i, o, e), [e]),
            o.getSnapshot !== t || u || $e !== null && $e.memoizedState.tag & 1) {
            if (i.flags |= 2048,
                ri(9, rf.bind(null, i, o, a, t), void 0, null),
                He === null)
                throw Error(s(349));
            (Dn & 30) !== 0 || nf(i, t, a)
        }
        return a
    }
    function nf(e, t, i) {
        e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: i
            },
            t = Ae.updateQueue,
            t === null ? (t = {
                lastEffect: null,
                stores: null
            },
                Ae.updateQueue = t,
                t.stores = [e]) : (i = t.stores,
                    i === null ? t.stores = [e] : i.push(e))
    }
    function rf(e, t, i, o) {
        t.value = i,
            t.getSnapshot = o,
            of(t) && lf(e)
    }
    function sf(e, t, i) {
        return i(function () {
            of(t) && lf(e)
        })
    }
    function of(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Pt(e, i)
        } catch {
            return !0
        }
    }
    function lf(e) {
        var t = Yt(e, 1);
        t !== null && Rt(t, e, 1, -1)
    }
    function af(e) {
        var t = zt();
        return typeof e == "function" && (e = e()),
            t.memoizedState = t.baseState = e,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ni,
                lastRenderedState: e
            },
            t.queue = e,
            e = e.dispatch = Qy.bind(null, Ae, e),
            [t.memoizedState, e]
    }
    function ri(e, t, i, o) {
        return e = {
            tag: e,
            create: t,
            destroy: i,
            deps: o,
            next: null
        },
            t = Ae.updateQueue,
            t === null ? (t = {
                lastEffect: null,
                stores: null
            },
                Ae.updateQueue = t,
                t.lastEffect = e.next = e) : (i = t.lastEffect,
                    i === null ? t.lastEffect = e.next = e : (o = i.next,
                        i.next = e,
                        e.next = o,
                        t.lastEffect = e)),
            e
    }
    function uf() {
        return wt().memoizedState
    }
    function fs(e, t, i, o) {
        var a = zt();
        Ae.flags |= e,
            a.memoizedState = ri(1 | t, i, void 0, o === void 0 ? null : o)
    }
    function ds(e, t, i, o) {
        var a = wt();
        o = o === void 0 ? null : o;
        var u = void 0;
        if (Be !== null) {
            var h = Be.memoizedState;
            if (u = h.destroy,
                o !== null && yl(o, h.deps)) {
                a.memoizedState = ri(t, i, u, o);
                return
            }
        }
        Ae.flags |= e,
            a.memoizedState = ri(1 | t, i, u, o)
    }
    function cf(e, t) {
        return fs(8390656, 8, e, t)
    }
    function Sl(e, t) {
        return ds(2048, 8, e, t)
    }
    function ff(e, t) {
        return ds(4, 2, e, t)
    }
    function df(e, t) {
        return ds(4, 4, e, t)
    }
    function hf(e, t) {
        if (typeof t == "function")
            return e = e(),
                t(e),
                function () {
                    t(null)
                }
                ;
        if (t != null)
            return e = e(),
                t.current = e,
                function () {
                    t.current = null
                }
    }
    function pf(e, t, i) {
        return i = i != null ? i.concat([e]) : null,
            ds(4, 4, hf.bind(null, t, e), i)
    }
    function kl() { }
    function mf(e, t) {
        var i = wt();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && yl(t, o[1]) ? o[0] : (i.memoizedState = [e, t],
            e)
    }
    function yf(e, t) {
        var i = wt();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && yl(t, o[1]) ? o[0] : (e = e(),
            i.memoizedState = [e, t],
            e)
    }
    function gf(e, t, i) {
        return (Dn & 21) === 0 ? (e.baseState && (e.baseState = !1,
            ot = !0),
            e.memoizedState = i) : (Pt(i, t) || (i = Gu(),
                Ae.lanes |= i,
                Vn |= i,
                e.baseState = !0),
                t)
    }
    function Xy(e, t) {
        var i = pe;
        pe = i !== 0 && 4 > i ? i : 4,
            e(!0);
        var o = ml.transition;
        ml.transition = {};
        try {
            e(!1),
                t()
        } finally {
            pe = i,
                ml.transition = o
        }
    }
    function vf() {
        return wt().memoizedState
    }
    function Yy(e, t, i) {
        var o = pn(e);
        if (i = {
            lane: o,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            wf(e))
            xf(t, i);
        else if (i = Qc(e, t, i, o),
            i !== null) {
            var a = tt();
            Rt(i, e, o, a),
                Sf(i, t, o)
        }
    }
    function Qy(e, t, i) {
        var o = pn(e)
            , a = {
                lane: o,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (wf(e))
            xf(t, a);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
                u !== null))
                try {
                    var h = t.lastRenderedState
                        , v = u(h, i);
                    if (a.hasEagerState = !0,
                        a.eagerState = v,
                        Pt(v, h)) {
                        var S = t.interleaved;
                        S === null ? (a.next = a,
                            ul(t)) : (a.next = S.next,
                                S.next = a),
                            t.interleaved = a;
                        return
                    }
                } catch { } finally { }
            i = Qc(e, t, a, o),
                i !== null && (a = tt(),
                    Rt(i, e, o, a),
                    Sf(i, t, o))
        }
    }
    function wf(e) {
        var t = e.alternate;
        return e === Ae || t !== null && t === Ae
    }
    function xf(e, t) {
        ei = cs = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            e.pending = t
    }
    function Sf(e, t, i) {
        if ((i & 4194240) !== 0) {
            var o = t.lanes;
            o &= e.pendingLanes,
                i |= o,
                t.lanes = i,
                Co(e, i)
        }
    }
    var hs = {
        readContext: vt,
        useCallback: Ze,
        useContext: Ze,
        useEffect: Ze,
        useImperativeHandle: Ze,
        useInsertionEffect: Ze,
        useLayoutEffect: Ze,
        useMemo: Ze,
        useReducer: Ze,
        useRef: Ze,
        useState: Ze,
        useDebugValue: Ze,
        useDeferredValue: Ze,
        useTransition: Ze,
        useMutableSource: Ze,
        useSyncExternalStore: Ze,
        useId: Ze,
        unstable_isNewReconciler: !1
    }
        , by = {
            readContext: vt,
            useCallback: function (e, t) {
                return zt().memoizedState = [e, t === void 0 ? null : t],
                    e
            },
            useContext: vt,
            useEffect: cf,
            useImperativeHandle: function (e, t, i) {
                return i = i != null ? i.concat([e]) : null,
                    fs(4194308, 4, hf.bind(null, t, e), i)
            },
            useLayoutEffect: function (e, t) {
                return fs(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
                return fs(4, 2, e, t)
            },
            useMemo: function (e, t) {
                var i = zt();
                return t = t === void 0 ? null : t,
                    e = e(),
                    i.memoizedState = [e, t],
                    e
            },
            useReducer: function (e, t, i) {
                var o = zt();
                return t = i !== void 0 ? i(t) : t,
                    o.memoizedState = o.baseState = t,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    },
                    o.queue = e,
                    e = e.dispatch = Yy.bind(null, Ae, e),
                    [o.memoizedState, e]
            },
            useRef: function (e) {
                var t = zt();
                return e = {
                    current: e
                },
                    t.memoizedState = e
            },
            useState: af,
            useDebugValue: kl,
            useDeferredValue: function (e) {
                return zt().memoizedState = e
            },
            useTransition: function () {
                var e = af(!1)
                    , t = e[0];
                return e = Xy.bind(null, e[1]),
                    zt().memoizedState = e,
                    [t, e]
            },
            useMutableSource: function () { },
            useSyncExternalStore: function (e, t, i) {
                var o = Ae
                    , a = zt();
                if (Pe) {
                    if (i === void 0)
                        throw Error(s(407));
                    i = i()
                } else {
                    if (i = t(),
                        He === null)
                        throw Error(s(349));
                    (Dn & 30) !== 0 || nf(o, t, i)
                }
                a.memoizedState = i;
                var u = {
                    value: i,
                    getSnapshot: t
                };
                return a.queue = u,
                    cf(sf.bind(null, o, u, e), [e]),
                    o.flags |= 2048,
                    ri(9, rf.bind(null, o, u, i, t), void 0, null),
                    i
            },
            useId: function () {
                var e = zt()
                    , t = He.identifierPrefix;
                if (Pe) {
                    var i = Xt
                        , o = Gt;
                    i = (o & ~(1 << 32 - Et(o) - 1)).toString(32) + i,
                        t = ":" + t + "R" + i,
                        i = ti++,
                        0 < i && (t += "H" + i.toString(32)),
                        t += ":"
                } else
                    i = Gy++,
                        t = ":" + t + "r" + i.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        }
        , Zy = {
            readContext: vt,
            useCallback: mf,
            useContext: vt,
            useEffect: Sl,
            useImperativeHandle: pf,
            useInsertionEffect: ff,
            useLayoutEffect: df,
            useMemo: yf,
            useReducer: wl,
            useRef: uf,
            useState: function () {
                return wl(ni)
            },
            useDebugValue: kl,
            useDeferredValue: function (e) {
                var t = wt();
                return gf(t, Be.memoizedState, e)
            },
            useTransition: function () {
                var e = wl(ni)[0]
                    , t = wt().memoizedState;
                return [e, t]
            },
            useMutableSource: ef,
            useSyncExternalStore: tf,
            useId: vf,
            unstable_isNewReconciler: !1
        }
        , qy = {
            readContext: vt,
            useCallback: mf,
            useContext: vt,
            useEffect: Sl,
            useImperativeHandle: pf,
            useInsertionEffect: ff,
            useLayoutEffect: df,
            useMemo: yf,
            useReducer: xl,
            useRef: uf,
            useState: function () {
                return xl(ni)
            },
            useDebugValue: kl,
            useDeferredValue: function (e) {
                var t = wt();
                return Be === null ? t.memoizedState = e : gf(t, Be.memoizedState, e)
            },
            useTransition: function () {
                var e = xl(ni)[0]
                    , t = wt().memoizedState;
                return [e, t]
            },
            useMutableSource: ef,
            useSyncExternalStore: tf,
            useId: vf,
            unstable_isNewReconciler: !1
        };
    function Nt(e, t) {
        if (e && e.defaultProps) {
            t = W({}, t),
                e = e.defaultProps;
            for (var i in e)
                t[i] === void 0 && (t[i] = e[i]);
            return t
        }
        return t
    }
    function Tl(e, t, i, o) {
        t = e.memoizedState,
            i = i(o, t),
            i = i == null ? t : W({}, t, i),
            e.memoizedState = i,
            e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var ps = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? En(e) === e : !1
        },
        enqueueSetState: function (e, t, i) {
            e = e._reactInternals;
            var o = tt()
                , a = pn(e)
                , u = Qt(o, a);
            u.payload = t,
                i != null && (u.callback = i),
                t = cn(e, u, a),
                t !== null && (Rt(t, e, a, o),
                    os(t, e, a))
        },
        enqueueReplaceState: function (e, t, i) {
            e = e._reactInternals;
            var o = tt()
                , a = pn(e)
                , u = Qt(o, a);
            u.tag = 1,
                u.payload = t,
                i != null && (u.callback = i),
                t = cn(e, u, a),
                t !== null && (Rt(t, e, a, o),
                    os(t, e, a))
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var i = tt()
                , o = pn(e)
                , a = Qt(i, o);
            a.tag = 2,
                t != null && (a.callback = t),
                t = cn(e, a, o),
                t !== null && (Rt(t, e, o, i),
                    os(t, e, o))
        }
    };
    function kf(e, t, i, o, a, u, h) {
        return e = e.stateNode,
            typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, u, h) : t.prototype && t.prototype.isPureReactComponent ? !$r(i, o) || !$r(a, u) : !0
    }
    function Tf(e, t, i) {
        var o = !1
            , a = ln
            , u = t.contextType;
        return typeof u == "object" && u !== null ? u = vt(u) : (a = st(t) ? Mn : be.current,
            o = t.contextTypes,
            u = (o = o != null) ? nr(e, a) : ln),
            t = new t(i, u),
            e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
            t.updater = ps,
            e.stateNode = t,
            t._reactInternals = e,
            o && (e = e.stateNode,
                e.__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = u),
            t
    }
    function Cf(e, t, i, o) {
        e = t.state,
            typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o),
            typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o),
            t.state !== e && ps.enqueueReplaceState(t, t.state, null)
    }
    function Cl(e, t, i, o) {
        var a = e.stateNode;
        a.props = i,
            a.state = e.memoizedState,
            a.refs = {},
            cl(e);
        var u = t.contextType;
        typeof u == "object" && u !== null ? a.context = vt(u) : (u = st(t) ? Mn : be.current,
            a.context = nr(e, u)),
            a.state = e.memoizedState,
            u = t.getDerivedStateFromProps,
            typeof u == "function" && (Tl(e, t, u, i),
                a.state = e.memoizedState),
            typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state,
                typeof a.componentWillMount == "function" && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
                t !== a.state && ps.enqueueReplaceState(a, a.state, null),
                ls(e, i, a, o),
                a.state = e.memoizedState),
            typeof a.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function cr(e, t) {
        try {
            var i = ""
                , o = t;
            do
                i += ce(o),
                    o = o.return;
            while (o);
            var a = i
        } catch (u) {
            a = `
Error generating stack: ` + u.message + `
` + u.stack
        }
        return {
            value: e,
            source: t,
            stack: a,
            digest: null
        }
    }
    function El(e, t, i) {
        return {
            value: e,
            source: null,
            stack: i ?? null,
            digest: t ?? null
        }
    }
    function Pl(e, t) {
        try {
            console.error(t.value)
        } catch (i) {
            setTimeout(function () {
                throw i
            })
        }
    }
    var Jy = typeof WeakMap == "function" ? WeakMap : Map;
    function Ef(e, t, i) {
        i = Qt(-1, i),
            i.tag = 3,
            i.payload = {
                element: null
            };
        var o = t.value;
        return i.callback = function () {
            Ss || (Ss = !0,
                Ul = o),
                Pl(e, t)
        }
            ,
            i
    }
    function Pf(e, t, i) {
        i = Qt(-1, i),
            i.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var a = t.value;
            i.payload = function () {
                return o(a)
            }
                ,
                i.callback = function () {
                    Pl(e, t)
                }
        }
        var u = e.stateNode;
        return u !== null && typeof u.componentDidCatch == "function" && (i.callback = function () {
            Pl(e, t),
                typeof o != "function" && (dn === null ? dn = new Set([this]) : dn.add(this));
            var h = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: h !== null ? h : ""
            })
        }
        ),
            i
    }
    function Mf(e, t, i) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new Jy;
            var a = new Set;
            o.set(t, a)
        } else
            a = o.get(t),
                a === void 0 && (a = new Set,
                    o.set(t, a));
        a.has(i) || (a.add(i),
            e = hg.bind(null, e, t, i),
            t.then(e, e))
    }
    function Nf(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
                t = t !== null ? t.dehydrated !== null : !0),
                t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function Af(e, t, i, o, a) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
            i.flags |= 131072,
            i.flags &= -52805,
            i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Qt(-1, 1),
                t.tag = 2,
                cn(i, t, 1))),
            i.lanes |= 1),
            e) : (e.flags |= 65536,
                e.lanes = a,
                e)
    }
    var eg = U.ReactCurrentOwner
        , ot = !1;
    function et(e, t, i, o) {
        t.child = e === null ? Yc(t, null, i, o) : or(t, e.child, i, o)
    }
    function Lf(e, t, i, o, a) {
        i = i.render;
        var u = t.ref;
        return ar(t, a),
            o = gl(e, t, i, o, u, a),
            i = vl(),
            e !== null && !ot ? (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~a,
                bt(e, t, a)) : (Pe && i && el(t),
                    t.flags |= 1,
                    et(e, t, o, a),
                    t.child)
    }
    function Rf(e, t, i, o, a) {
        if (e === null) {
            var u = i.type;
            return typeof u == "function" && !Yl(u) && u.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15,
                t.type = u,
                Df(e, t, u, o, a)) : (e = Ms(i.type, null, o, t, t.mode, a),
                    e.ref = t.ref,
                    e.return = t,
                    t.child = e)
        }
        if (u = e.child,
            (e.lanes & a) === 0) {
            var h = u.memoizedProps;
            if (i = i.compare,
                i = i !== null ? i : $r,
                i(h, o) && e.ref === t.ref)
                return bt(e, t, a)
        }
        return t.flags |= 1,
            e = yn(u, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e
    }
    function Df(e, t, i, o, a) {
        if (e !== null) {
            var u = e.memoizedProps;
            if ($r(u, o) && e.ref === t.ref)
                if (ot = !1,
                    t.pendingProps = o = u,
                    (e.lanes & a) !== 0)
                    (e.flags & 131072) !== 0 && (ot = !0);
                else
                    return t.lanes = e.lanes,
                        bt(e, t, a)
        }
        return Ml(e, t, i, o, a)
    }
    function Vf(e, t, i) {
        var o = t.pendingProps
            , a = o.children
            , u = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                    ve(dr, pt),
                    pt |= i;
            else {
                if ((i & 1073741824) === 0)
                    return e = u !== null ? u.baseLanes | i : i,
                        t.lanes = t.childLanes = 1073741824,
                        t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null
                        },
                        t.updateQueue = null,
                        ve(dr, pt),
                        pt |= e,
                        null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                    o = u !== null ? u.baseLanes : i,
                    ve(dr, pt),
                    pt |= o
            }
        else
            u !== null ? (o = u.baseLanes | i,
                t.memoizedState = null) : o = i,
                ve(dr, pt),
                pt |= o;
        return et(e, t, a, i),
            t.child
    }
    function jf(e, t) {
        var i = t.ref;
        (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512,
            t.flags |= 2097152)
    }
    function Ml(e, t, i, o, a) {
        var u = st(i) ? Mn : be.current;
        return u = nr(t, u),
            ar(t, a),
            i = gl(e, t, i, o, u, a),
            o = vl(),
            e !== null && !ot ? (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~a,
                bt(e, t, a)) : (Pe && o && el(t),
                    t.flags |= 1,
                    et(e, t, i, a),
                    t.child)
    }
    function _f(e, t, i, o, a) {
        if (st(i)) {
            var u = !0;
            qi(t)
        } else
            u = !1;
        if (ar(t, a),
            t.stateNode === null)
            ys(e, t),
                Tf(t, i, o),
                Cl(t, i, o, a),
                o = !0;
        else if (e === null) {
            var h = t.stateNode
                , v = t.memoizedProps;
            h.props = v;
            var S = h.context
                , N = i.contextType;
            typeof N == "object" && N !== null ? N = vt(N) : (N = st(i) ? Mn : be.current,
                N = nr(t, N));
            var j = i.getDerivedStateFromProps
                , _ = typeof j == "function" || typeof h.getSnapshotBeforeUpdate == "function";
            _ || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (v !== o || S !== N) && Cf(t, h, o, N),
                un = !1;
            var V = t.memoizedState;
            h.state = V,
                ls(t, o, h, a),
                S = t.memoizedState,
                v !== o || V !== S || it.current || un ? (typeof j == "function" && (Tl(t, i, j, o),
                    S = t.memoizedState),
                    (v = un || kf(t, i, v, o, V, S, N)) ? (_ || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(),
                        typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()),
                        typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
                            t.memoizedProps = o,
                            t.memoizedState = S),
                    h.props = o,
                    h.state = S,
                    h.context = N,
                    o = v) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
                        o = !1)
        } else {
            h = t.stateNode,
                bc(e, t),
                v = t.memoizedProps,
                N = t.type === t.elementType ? v : Nt(t.type, v),
                h.props = N,
                _ = t.pendingProps,
                V = h.context,
                S = i.contextType,
                typeof S == "object" && S !== null ? S = vt(S) : (S = st(i) ? Mn : be.current,
                    S = nr(t, S));
            var $ = i.getDerivedStateFromProps;
            (j = typeof $ == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (v !== _ || V !== S) && Cf(t, h, o, S),
                un = !1,
                V = t.memoizedState,
                h.state = V,
                ls(t, o, h, a);
            var G = t.memoizedState;
            v !== _ || V !== G || it.current || un ? (typeof $ == "function" && (Tl(t, i, $, o),
                G = t.memoizedState),
                (N = un || kf(t, i, N, o, V, G, S) || !1) ? (j || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, G, S),
                    typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, G, S)),
                    typeof h.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (t.flags |= 4),
                        typeof h.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024),
                        t.memoizedProps = o,
                        t.memoizedState = G),
                h.props = o,
                h.state = G,
                h.context = S,
                o = N) : (typeof h.componentDidUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (t.flags |= 4),
                    typeof h.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024),
                    o = !1)
        }
        return Nl(e, t, i, o, u, a)
    }
    function Nl(e, t, i, o, a, u) {
        jf(e, t);
        var h = (t.flags & 128) !== 0;
        if (!o && !h)
            return a && Oc(t, i, !1),
                bt(e, t, u);
        o = t.stateNode,
            eg.current = t;
        var v = h && typeof i.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1,
            e !== null && h ? (t.child = or(t, e.child, null, u),
                t.child = or(t, null, v, u)) : et(e, t, v, u),
            t.memoizedState = o.state,
            a && Oc(t, i, !0),
            t.child
    }
    function If(e) {
        var t = e.stateNode;
        t.pendingContext ? Fc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fc(e, t.context, !1),
            fl(e, t.containerInfo)
    }
    function Ff(e, t, i, o, a) {
        return sr(),
            il(a),
            t.flags |= 256,
            et(e, t, i, o),
            t.child
    }
    var Al = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ll(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function zf(e, t, i) {
        var o = t.pendingProps, a = Ne.current, u = !1, h = (t.flags & 128) !== 0, v;
        if ((v = h) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
            v ? (u = !0,
                t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1),
            ve(Ne, a & 1),
            e === null)
            return rl(t),
                e = t.memoizedState,
                e !== null && (e = e.dehydrated,
                    e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
                        null) : (h = o.children,
                            e = o.fallback,
                            u ? (o = t.mode,
                                u = t.child,
                                h = {
                                    mode: "hidden",
                                    children: h
                                },
                                (o & 1) === 0 && u !== null ? (u.childLanes = 0,
                                    u.pendingProps = h) : u = Ns(h, o, 0, null),
                                e = Fn(e, o, i, null),
                                u.return = t,
                                e.return = t,
                                u.sibling = e,
                                t.child = u,
                                t.child.memoizedState = Ll(i),
                                t.memoizedState = Al,
                                e) : Rl(t, h));
        if (a = e.memoizedState,
            a !== null && (v = a.dehydrated,
                v !== null))
            return tg(e, t, h, o, v, a, i);
        if (u) {
            u = o.fallback,
                h = t.mode,
                a = e.child,
                v = a.sibling;
            var S = {
                mode: "hidden",
                children: o.children
            };
            return (h & 1) === 0 && t.child !== a ? (o = t.child,
                o.childLanes = 0,
                o.pendingProps = S,
                t.deletions = null) : (o = yn(a, S),
                    o.subtreeFlags = a.subtreeFlags & 14680064),
                v !== null ? u = yn(v, u) : (u = Fn(u, h, i, null),
                    u.flags |= 2),
                u.return = t,
                o.return = t,
                o.sibling = u,
                t.child = o,
                o = u,
                u = t.child,
                h = e.child.memoizedState,
                h = h === null ? Ll(i) : {
                    baseLanes: h.baseLanes | i,
                    cachePool: null,
                    transitions: h.transitions
                },
                u.memoizedState = h,
                u.childLanes = e.childLanes & ~i,
                t.memoizedState = Al,
                o
        }
        return u = e.child,
            e = u.sibling,
            o = yn(u, {
                mode: "visible",
                children: o.children
            }),
            (t.mode & 1) === 0 && (o.lanes = i),
            o.return = t,
            o.sibling = null,
            e !== null && (i = t.deletions,
                i === null ? (t.deletions = [e],
                    t.flags |= 16) : i.push(e)),
            t.child = o,
            t.memoizedState = null,
            o
    }
    function Rl(e, t) {
        return t = Ns({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
            t.return = e,
            e.child = t
    }
    function ms(e, t, i, o) {
        return o !== null && il(o),
            or(t, e.child, null, i),
            e = Rl(t, t.pendingProps.children),
            e.flags |= 2,
            t.memoizedState = null,
            e
    }
    function tg(e, t, i, o, a, u, h) {
        if (i)
            return t.flags & 256 ? (t.flags &= -257,
                o = El(Error(s(422))),
                ms(e, t, h, o)) : t.memoizedState !== null ? (t.child = e.child,
                    t.flags |= 128,
                    null) : (u = o.fallback,
                        a = t.mode,
                        o = Ns({
                            mode: "visible",
                            children: o.children
                        }, a, 0, null),
                        u = Fn(u, a, h, null),
                        u.flags |= 2,
                        o.return = t,
                        u.return = t,
                        o.sibling = u,
                        t.child = o,
                        (t.mode & 1) !== 0 && or(t, e.child, null, h),
                        t.child.memoizedState = Ll(h),
                        t.memoizedState = Al,
                        u);
        if ((t.mode & 1) === 0)
            return ms(e, t, h, null);
        if (a.data === "$!") {
            if (o = a.nextSibling && a.nextSibling.dataset,
                o)
                var v = o.dgst;
            return o = v,
                u = Error(s(419)),
                o = El(u, o, void 0),
                ms(e, t, h, o)
        }
        if (v = (h & e.childLanes) !== 0,
            ot || v) {
            if (o = He,
                o !== null) {
                switch (h & -h) {
                    case 4:
                        a = 2;
                        break;
                    case 16:
                        a = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        a = 32;
                        break;
                    case 536870912:
                        a = 268435456;
                        break;
                    default:
                        a = 0
                }
                a = (a & (o.suspendedLanes | h)) !== 0 ? 0 : a,
                    a !== 0 && a !== u.retryLane && (u.retryLane = a,
                        Yt(e, a),
                        Rt(o, e, a, -1))
            }
            return Xl(),
                o = El(Error(s(421))),
                ms(e, t, h, o)
        }
        return a.data === "$?" ? (t.flags |= 128,
            t.child = e.child,
            t = pg.bind(null, e),
            a._reactRetry = t,
            null) : (e = u.treeContext,
                ht = sn(a.nextSibling),
                dt = t,
                Pe = !0,
                Mt = null,
                e !== null && (yt[gt++] = Gt,
                    yt[gt++] = Xt,
                    yt[gt++] = Nn,
                    Gt = e.id,
                    Xt = e.overflow,
                    Nn = t),
                t = Rl(t, o.children),
                t.flags |= 4096,
                t)
    }
    function Of(e, t, i) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t),
            al(e.return, t, i)
    }
    function Dl(e, t, i, o, a) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: i,
            tailMode: a
        } : (u.isBackwards = t,
            u.rendering = null,
            u.renderingStartTime = 0,
            u.last = o,
            u.tail = i,
            u.tailMode = a)
    }
    function Bf(e, t, i) {
        var o = t.pendingProps
            , a = o.revealOrder
            , u = o.tail;
        if (et(e, t, o.children, i),
            o = Ne.current,
            (o & 2) !== 0)
            o = o & 1 | 2,
                t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null;) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Of(e, i, t);
                    else if (e.tag === 19)
                        Of(e, i, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                            e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                        e = e.sibling
                }
            o &= 1
        }
        if (ve(Ne, o),
            (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (i = t.child,
                        a = null; i !== null;)
                        e = i.alternate,
                            e !== null && as(e) === null && (a = i),
                            i = i.sibling;
                    i = a,
                        i === null ? (a = t.child,
                            t.child = null) : (a = i.sibling,
                                i.sibling = null),
                        Dl(t, !1, a, i, u);
                    break;
                case "backwards":
                    for (i = null,
                        a = t.child,
                        t.child = null; a !== null;) {
                        if (e = a.alternate,
                            e !== null && as(e) === null) {
                            t.child = a;
                            break
                        }
                        e = a.sibling,
                            a.sibling = i,
                            i = a,
                            a = e
                    }
                    Dl(t, !0, i, null, u);
                    break;
                case "together":
                    Dl(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null
            }
        return t.child
    }
    function ys(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
            t.alternate = null,
            t.flags |= 2)
    }
    function bt(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies),
            Vn |= t.lanes,
            (i & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child,
                i = yn(e, e.pendingProps),
                t.child = i,
                i.return = t; e.sibling !== null;)
                e = e.sibling,
                    i = i.sibling = yn(e, e.pendingProps),
                    i.return = t;
            i.sibling = null
        }
        return t.child
    }
    function ng(e, t, i) {
        switch (t.tag) {
            case 3:
                If(t),
                    sr();
                break;
            case 5:
                Jc(t);
                break;
            case 1:
                st(t.type) && qi(t);
                break;
            case 4:
                fl(t, t.stateNode.containerInfo);
                break;
            case 10:
                var o = t.type._context
                    , a = t.memoizedProps.value;
                ve(is, o._currentValue),
                    o._currentValue = a;
                break;
            case 13:
                if (o = t.memoizedState,
                    o !== null)
                    return o.dehydrated !== null ? (ve(Ne, Ne.current & 1),
                        t.flags |= 128,
                        null) : (i & t.child.childLanes) !== 0 ? zf(e, t, i) : (ve(Ne, Ne.current & 1),
                            e = bt(e, t, i),
                            e !== null ? e.sibling : null);
                ve(Ne, Ne.current & 1);
                break;
            case 19:
                if (o = (i & t.childLanes) !== 0,
                    (e.flags & 128) !== 0) {
                    if (o)
                        return Bf(e, t, i);
                    t.flags |= 128
                }
                if (a = t.memoizedState,
                    a !== null && (a.rendering = null,
                        a.tail = null,
                        a.lastEffect = null),
                    ve(Ne, Ne.current),
                    o)
                    break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0,
                    Vf(e, t, i)
        }
        return bt(e, t, i)
    }
    var Uf, Vl, Wf, $f;
    Uf = function (e, t) {
        for (var i = t.child; i !== null;) {
            if (i.tag === 5 || i.tag === 6)
                e.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.child !== null) {
                i.child.return = i,
                    i = i.child;
                continue
            }
            if (i === t)
                break;
            for (; i.sibling === null;) {
                if (i.return === null || i.return === t)
                    return;
                i = i.return
            }
            i.sibling.return = i.return,
                i = i.sibling
        }
    }
        ,
        Vl = function () { }
        ,
        Wf = function (e, t, i, o) {
            var a = e.memoizedProps;
            if (a !== o) {
                e = t.stateNode,
                    Rn(Ft.current);
                var u = null;
                switch (i) {
                    case "input":
                        a = lo(e, a),
                            o = lo(e, o),
                            u = [];
                        break;
                    case "select":
                        a = W({}, a, {
                            value: void 0
                        }),
                            o = W({}, o, {
                                value: void 0
                            }),
                            u = [];
                        break;
                    case "textarea":
                        a = co(e, a),
                            o = co(e, o),
                            u = [];
                        break;
                    default:
                        typeof a.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Qi)
                }
                ho(i, o);
                var h;
                i = null;
                for (N in a)
                    if (!o.hasOwnProperty(N) && a.hasOwnProperty(N) && a[N] != null)
                        if (N === "style") {
                            var v = a[N];
                            for (h in v)
                                v.hasOwnProperty(h) && (i || (i = {}),
                                    i[h] = "")
                        } else
                            N !== "dangerouslySetInnerHTML" && N !== "children" && N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && N !== "autoFocus" && (c.hasOwnProperty(N) ? u || (u = []) : (u = u || []).push(N, null));
                for (N in o) {
                    var S = o[N];
                    if (v = a != null ? a[N] : void 0,
                        o.hasOwnProperty(N) && S !== v && (S != null || v != null))
                        if (N === "style")
                            if (v) {
                                for (h in v)
                                    !v.hasOwnProperty(h) || S && S.hasOwnProperty(h) || (i || (i = {}),
                                        i[h] = "");
                                for (h in S)
                                    S.hasOwnProperty(h) && v[h] !== S[h] && (i || (i = {}),
                                        i[h] = S[h])
                            } else
                                i || (u || (u = []),
                                    u.push(N, i)),
                                    i = S;
                        else
                            N === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0,
                                v = v ? v.__html : void 0,
                                S != null && v !== S && (u = u || []).push(N, S)) : N === "children" ? typeof S != "string" && typeof S != "number" || (u = u || []).push(N, "" + S) : N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && (c.hasOwnProperty(N) ? (S != null && N === "onScroll" && Se("scroll", e),
                                    u || v === S || (u = [])) : (u = u || []).push(N, S))
                }
                i && (u = u || []).push("style", i);
                var N = u;
                (t.updateQueue = N) && (t.flags |= 4)
            }
        }
        ,
        $f = function (e, t, i, o) {
            i !== o && (t.flags |= 4)
        }
        ;
    function ii(e, t) {
        if (!Pe)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var i = null; t !== null;)
                        t.alternate !== null && (i = t),
                            t = t.sibling;
                    i === null ? e.tail = null : i.sibling = null;
                    break;
                case "collapsed":
                    i = e.tail;
                    for (var o = null; i !== null;)
                        i.alternate !== null && (o = i),
                            i = i.sibling;
                    o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
            }
    }
    function qe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
            , i = 0
            , o = 0;
        if (t)
            for (var a = e.child; a !== null;)
                i |= a.lanes | a.childLanes,
                    o |= a.subtreeFlags & 14680064,
                    o |= a.flags & 14680064,
                    a.return = e,
                    a = a.sibling;
        else
            for (a = e.child; a !== null;)
                i |= a.lanes | a.childLanes,
                    o |= a.subtreeFlags,
                    o |= a.flags,
                    a.return = e,
                    a = a.sibling;
        return e.subtreeFlags |= o,
            e.childLanes = i,
            t
    }
    function rg(e, t, i) {
        var o = t.pendingProps;
        switch (tl(t),
        t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return qe(t),
                    null;
            case 1:
                return st(t.type) && Zi(),
                    qe(t),
                    null;
            case 3:
                return o = t.stateNode,
                    ur(),
                    ke(it),
                    ke(be),
                    pl(),
                    o.pendingContext && (o.context = o.pendingContext,
                        o.pendingContext = null),
                    (e === null || e.child === null) && (ns(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
                        Mt !== null && (Hl(Mt),
                            Mt = null))),
                    Vl(e, t),
                    qe(t),
                    null;
            case 5:
                dl(t);
                var a = Rn(Jr.current);
                if (i = t.type,
                    e !== null && t.stateNode != null)
                    Wf(e, t, i, o, a),
                        e.ref !== t.ref && (t.flags |= 512,
                            t.flags |= 2097152);
                else {
                    if (!o) {
                        if (t.stateNode === null)
                            throw Error(s(166));
                        return qe(t),
                            null
                    }
                    if (e = Rn(Ft.current),
                        ns(t)) {
                        o = t.stateNode,
                            i = t.type;
                        var u = t.memoizedProps;
                        switch (o[It] = t,
                        o[Yr] = u,
                        e = (t.mode & 1) !== 0,
                        i) {
                            case "dialog":
                                Se("cancel", o),
                                    Se("close", o);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Se("load", o);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Kr.length; a++)
                                    Se(Kr[a], o);
                                break;
                            case "source":
                                Se("error", o);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Se("error", o),
                                    Se("load", o);
                                break;
                            case "details":
                                Se("toggle", o);
                                break;
                            case "input":
                                ku(o, u),
                                    Se("invalid", o);
                                break;
                            case "select":
                                o._wrapperState = {
                                    wasMultiple: !!u.multiple
                                },
                                    Se("invalid", o);
                                break;
                            case "textarea":
                                Eu(o, u),
                                    Se("invalid", o)
                        }
                        ho(i, u),
                            a = null;
                        for (var h in u)
                            if (u.hasOwnProperty(h)) {
                                var v = u[h];
                                h === "children" ? typeof v == "string" ? o.textContent !== v && (u.suppressHydrationWarning !== !0 && Yi(o.textContent, v, e),
                                    a = ["children", v]) : typeof v == "number" && o.textContent !== "" + v && (u.suppressHydrationWarning !== !0 && Yi(o.textContent, v, e),
                                        a = ["children", "" + v]) : c.hasOwnProperty(h) && v != null && h === "onScroll" && Se("scroll", o)
                            }
                        switch (i) {
                            case "input":
                                Ei(o),
                                    Cu(o, u, !0);
                                break;
                            case "textarea":
                                Ei(o),
                                    Mu(o);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof u.onClick == "function" && (o.onclick = Qi)
                        }
                        o = a,
                            t.updateQueue = o,
                            o !== null && (t.flags |= 4)
                    } else {
                        h = a.nodeType === 9 ? a : a.ownerDocument,
                            e === "http://www.w3.org/1999/xhtml" && (e = Nu(i)),
                            e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = h.createElement("div"),
                                e.innerHTML = "<script><\/script>",
                                e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = h.createElement(i, {
                                    is: o.is
                                }) : (e = h.createElement(i),
                                    i === "select" && (h = e,
                                        o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : e = h.createElementNS(e, i),
                            e[It] = t,
                            e[Yr] = o,
                            Uf(e, t, !1, !1),
                            t.stateNode = e;
                        e: {
                            switch (h = po(i, o),
                            i) {
                                case "dialog":
                                    Se("cancel", e),
                                        Se("close", e),
                                        a = o;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Se("load", e),
                                        a = o;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Kr.length; a++)
                                        Se(Kr[a], e);
                                    a = o;
                                    break;
                                case "source":
                                    Se("error", e),
                                        a = o;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Se("error", e),
                                        Se("load", e),
                                        a = o;
                                    break;
                                case "details":
                                    Se("toggle", e),
                                        a = o;
                                    break;
                                case "input":
                                    ku(e, o),
                                        a = lo(e, o),
                                        Se("invalid", e);
                                    break;
                                case "option":
                                    a = o;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!o.multiple
                                    },
                                        a = W({}, o, {
                                            value: void 0
                                        }),
                                        Se("invalid", e);
                                    break;
                                case "textarea":
                                    Eu(e, o),
                                        a = co(e, o),
                                        Se("invalid", e);
                                    break;
                                default:
                                    a = o
                            }
                            ho(i, a),
                                v = a;
                            for (u in v)
                                if (v.hasOwnProperty(u)) {
                                    var S = v[u];
                                    u === "style" ? Ru(e, S) : u === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0,
                                        S != null && Au(e, S)) : u === "children" ? typeof S == "string" ? (i !== "textarea" || S !== "") && Pr(e, S) : typeof S == "number" && Pr(e, "" + S) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (c.hasOwnProperty(u) ? S != null && u === "onScroll" && Se("scroll", e) : S != null && O(e, u, S, h))
                                }
                            switch (i) {
                                case "input":
                                    Ei(e),
                                        Cu(e, o, !1);
                                    break;
                                case "textarea":
                                    Ei(e),
                                        Mu(e);
                                    break;
                                case "option":
                                    o.value != null && e.setAttribute("value", "" + he(o.value));
                                    break;
                                case "select":
                                    e.multiple = !!o.multiple,
                                        u = o.value,
                                        u != null ? Hn(e, !!o.multiple, u, !1) : o.defaultValue != null && Hn(e, !!o.multiple, o.defaultValue, !0);
                                    break;
                                default:
                                    typeof a.onClick == "function" && (e.onclick = Qi)
                            }
                            switch (i) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    o = !!o.autoFocus;
                                    break e;
                                case "img":
                                    o = !0;
                                    break e;
                                default:
                                    o = !1
                            }
                        }
                        o && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512,
                        t.flags |= 2097152)
                }
                return qe(t),
                    null;
            case 6:
                if (e && t.stateNode != null)
                    $f(e, t, e.memoizedProps, o);
                else {
                    if (typeof o != "string" && t.stateNode === null)
                        throw Error(s(166));
                    if (i = Rn(Jr.current),
                        Rn(Ft.current),
                        ns(t)) {
                        if (o = t.stateNode,
                            i = t.memoizedProps,
                            o[It] = t,
                            (u = o.nodeValue !== i) && (e = dt,
                                e !== null))
                            switch (e.tag) {
                                case 3:
                                    Yi(o.nodeValue, i, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 && Yi(o.nodeValue, i, (e.mode & 1) !== 0)
                            }
                        u && (t.flags |= 4)
                    } else
                        o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o),
                            o[It] = t,
                            t.stateNode = o
                }
                return qe(t),
                    null;
            case 13:
                if (ke(Ne),
                    o = t.memoizedState,
                    e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (Pe && ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                        Kc(),
                            sr(),
                            t.flags |= 98560,
                            u = !1;
                    else if (u = ns(t),
                        o !== null && o.dehydrated !== null) {
                        if (e === null) {
                            if (!u)
                                throw Error(s(318));
                            if (u = t.memoizedState,
                                u = u !== null ? u.dehydrated : null,
                                !u)
                                throw Error(s(317));
                            u[It] = t
                        } else
                            sr(),
                                (t.flags & 128) === 0 && (t.memoizedState = null),
                                t.flags |= 4;
                        qe(t),
                            u = !1
                    } else
                        Mt !== null && (Hl(Mt),
                            Mt = null),
                            u = !0;
                    if (!u)
                        return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = i,
                    t) : (o = o !== null,
                        o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192,
                            (t.mode & 1) !== 0 && (e === null || (Ne.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Xl())),
                        t.updateQueue !== null && (t.flags |= 4),
                        qe(t),
                        null);
            case 4:
                return ur(),
                    Vl(e, t),
                    e === null && Gr(t.stateNode.containerInfo),
                    qe(t),
                    null;
            case 10:
                return ll(t.type._context),
                    qe(t),
                    null;
            case 17:
                return st(t.type) && Zi(),
                    qe(t),
                    null;
            case 19:
                if (ke(Ne),
                    u = t.memoizedState,
                    u === null)
                    return qe(t),
                        null;
                if (o = (t.flags & 128) !== 0,
                    h = u.rendering,
                    h === null)
                    if (o)
                        ii(u, !1);
                    else {
                        if (Ue !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (h = as(e),
                                    h !== null) {
                                    for (t.flags |= 128,
                                        ii(u, !1),
                                        o = h.updateQueue,
                                        o !== null && (t.updateQueue = o,
                                            t.flags |= 4),
                                        t.subtreeFlags = 0,
                                        o = i,
                                        i = t.child; i !== null;)
                                        u = i,
                                            e = o,
                                            u.flags &= 14680066,
                                            h = u.alternate,
                                            h === null ? (u.childLanes = 0,
                                                u.lanes = e,
                                                u.child = null,
                                                u.subtreeFlags = 0,
                                                u.memoizedProps = null,
                                                u.memoizedState = null,
                                                u.updateQueue = null,
                                                u.dependencies = null,
                                                u.stateNode = null) : (u.childLanes = h.childLanes,
                                                    u.lanes = h.lanes,
                                                    u.child = h.child,
                                                    u.subtreeFlags = 0,
                                                    u.deletions = null,
                                                    u.memoizedProps = h.memoizedProps,
                                                    u.memoizedState = h.memoizedState,
                                                    u.updateQueue = h.updateQueue,
                                                    u.type = h.type,
                                                    e = h.dependencies,
                                                    u.dependencies = e === null ? null : {
                                                        lanes: e.lanes,
                                                        firstContext: e.firstContext
                                                    }),
                                            i = i.sibling;
                                    return ve(Ne, Ne.current & 1 | 2),
                                        t.child
                                }
                                e = e.sibling
                            }
                        u.tail !== null && je() > hr && (t.flags |= 128,
                            o = !0,
                            ii(u, !1),
                            t.lanes = 4194304)
                    }
                else {
                    if (!o)
                        if (e = as(h),
                            e !== null) {
                            if (t.flags |= 128,
                                o = !0,
                                i = e.updateQueue,
                                i !== null && (t.updateQueue = i,
                                    t.flags |= 4),
                                ii(u, !0),
                                u.tail === null && u.tailMode === "hidden" && !h.alternate && !Pe)
                                return qe(t),
                                    null
                        } else
                            2 * je() - u.renderingStartTime > hr && i !== 1073741824 && (t.flags |= 128,
                                o = !0,
                                ii(u, !1),
                                t.lanes = 4194304);
                    u.isBackwards ? (h.sibling = t.child,
                        t.child = h) : (i = u.last,
                            i !== null ? i.sibling = h : t.child = h,
                            u.last = h)
                }
                return u.tail !== null ? (t = u.tail,
                    u.rendering = t,
                    u.tail = t.sibling,
                    u.renderingStartTime = je(),
                    t.sibling = null,
                    i = Ne.current,
                    ve(Ne, o ? i & 1 | 2 : i & 1),
                    t) : (qe(t),
                        null);
            case 22:
            case 23:
                return Gl(),
                    o = t.memoizedState !== null,
                    e !== null && e.memoizedState !== null !== o && (t.flags |= 8192),
                    o && (t.mode & 1) !== 0 ? (pt & 1073741824) !== 0 && (qe(t),
                        t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t),
                    null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }
    function ig(e, t) {
        switch (tl(t),
        t.tag) {
            case 1:
                return st(t.type) && Zi(),
                    e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 3:
                return ur(),
                    ke(it),
                    ke(be),
                    pl(),
                    e = t.flags,
                    (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 5:
                return dl(t),
                    null;
            case 13:
                if (ke(Ne),
                    e = t.memoizedState,
                    e !== null && e.dehydrated !== null) {
                    if (t.alternate === null)
                        throw Error(s(340));
                    sr()
                }
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 19:
                return ke(Ne),
                    null;
            case 4:
                return ur(),
                    null;
            case 10:
                return ll(t.type._context),
                    null;
            case 22:
            case 23:
                return Gl(),
                    null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var gs = !1
        , Je = !1
        , sg = typeof WeakSet == "function" ? WeakSet : Set
        , H = null;
    function fr(e, t) {
        var i = e.ref;
        if (i !== null)
            if (typeof i == "function")
                try {
                    i(null)
                } catch (o) {
                    Re(e, t, o)
                }
            else
                i.current = null
    }
    function jl(e, t, i) {
        try {
            i()
        } catch (o) {
            Re(e, t, o)
        }
    }
    var Hf = !1;
    function og(e, t) {
        if (Go = Fi,
            e = Sc(),
            zo(e)) {
            if ("selectionStart" in e)
                var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var o = i.getSelection && i.getSelection();
                    if (o && o.rangeCount !== 0) {
                        i = o.anchorNode;
                        var a = o.anchorOffset
                            , u = o.focusNode;
                        o = o.focusOffset;
                        try {
                            i.nodeType,
                                u.nodeType
                        } catch {
                            i = null;
                            break e
                        }
                        var h = 0
                            , v = -1
                            , S = -1
                            , N = 0
                            , j = 0
                            , _ = e
                            , V = null;
                        t: for (; ;) {
                            for (var $; _ !== i || a !== 0 && _.nodeType !== 3 || (v = h + a),
                                _ !== u || o !== 0 && _.nodeType !== 3 || (S = h + o),
                                _.nodeType === 3 && (h += _.nodeValue.length),
                                ($ = _.firstChild) !== null;)
                                V = _,
                                    _ = $;
                            for (; ;) {
                                if (_ === e)
                                    break t;
                                if (V === i && ++N === a && (v = h),
                                    V === u && ++j === o && (S = h),
                                    ($ = _.nextSibling) !== null)
                                    break;
                                _ = V,
                                    V = _.parentNode
                            }
                            _ = $
                        }
                        i = v === -1 || S === -1 ? null : {
                            start: v,
                            end: S
                        }
                    } else
                        i = null
                }
            i = i || {
                start: 0,
                end: 0
            }
        } else
            i = null;
        for (Xo = {
            focusedElem: e,
            selectionRange: i
        },
            Fi = !1,
            H = t; H !== null;)
            if (t = H,
                e = t.child,
                (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                    H = e;
            else
                for (; H !== null;) {
                    t = H;
                    try {
                        var G = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (G !== null) {
                                        var Q = G.memoizedProps
                                            , _e = G.memoizedState
                                            , E = t.stateNode
                                            , k = E.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : Nt(t.type, Q), _e);
                                        E.__reactInternalSnapshotBeforeUpdate = k
                                    }
                                    break;
                                case 3:
                                    var M = t.stateNode.containerInfo;
                                    M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(s(163))
                            }
                    } catch (z) {
                        Re(t, t.return, z)
                    }
                    if (e = t.sibling,
                        e !== null) {
                        e.return = t.return,
                            H = e;
                        break
                    }
                    H = t.return
                }
        return G = Hf,
            Hf = !1,
            G
    }
    function si(e, t, i) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null,
            o !== null) {
            var a = o = o.next;
            do {
                if ((a.tag & e) === e) {
                    var u = a.destroy;
                    a.destroy = void 0,
                        u !== void 0 && jl(t, i, u)
                }
                a = a.next
            } while (a !== o)
        }
    }
    function vs(e, t) {
        if (t = t.updateQueue,
            t = t !== null ? t.lastEffect : null,
            t !== null) {
            var i = t = t.next;
            do {
                if ((i.tag & e) === e) {
                    var o = i.create;
                    i.destroy = o()
                }
                i = i.next
            } while (i !== t)
        }
    }
    function _l(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = i;
                    break;
                default:
                    e = i
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Kf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
            Kf(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (t = e.stateNode,
                t !== null && (delete t[It],
                    delete t[Yr],
                    delete t[Zo],
                    delete t[Wy],
                    delete t[$y])),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
    }
    function Gf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Xf(e) {
        e: for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || Gf(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
                e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                    e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Il(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
                t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode,
                    t.insertBefore(e, i)) : (t = i,
                        t.appendChild(e)),
                    i = i._reactRootContainer,
                    i != null || t.onclick !== null || (t.onclick = Qi));
        else if (o !== 4 && (e = e.child,
            e !== null))
            for (Il(e, t, i),
                e = e.sibling; e !== null;)
                Il(e, t, i),
                    e = e.sibling
    }
    function Fl(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6)
            e = e.stateNode,
                t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (o !== 4 && (e = e.child,
            e !== null))
            for (Fl(e, t, i),
                e = e.sibling; e !== null;)
                Fl(e, t, i),
                    e = e.sibling
    }
    var Ge = null
        , At = !1;
    function fn(e, t, i) {
        for (i = i.child; i !== null;)
            Yf(e, t, i),
                i = i.sibling
    }
    function Yf(e, t, i) {
        if (_t && typeof _t.onCommitFiberUnmount == "function")
            try {
                _t.onCommitFiberUnmount(Ri, i)
            } catch { }
        switch (i.tag) {
            case 5:
                Je || fr(i, t);
            case 6:
                var o = Ge
                    , a = At;
                Ge = null,
                    fn(e, t, i),
                    Ge = o,
                    At = a,
                    Ge !== null && (At ? (e = Ge,
                        i = i.stateNode,
                        e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Ge.removeChild(i.stateNode));
                break;
            case 18:
                Ge !== null && (At ? (e = Ge,
                    i = i.stateNode,
                    e.nodeType === 8 ? bo(e.parentNode, i) : e.nodeType === 1 && bo(e, i),
                    Fr(e)) : bo(Ge, i.stateNode));
                break;
            case 4:
                o = Ge,
                    a = At,
                    Ge = i.stateNode.containerInfo,
                    At = !0,
                    fn(e, t, i),
                    Ge = o,
                    At = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Je && (o = i.updateQueue,
                    o !== null && (o = o.lastEffect,
                        o !== null))) {
                    a = o = o.next;
                    do {
                        var u = a
                            , h = u.destroy;
                        u = u.tag,
                            h !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && jl(i, t, h),
                            a = a.next
                    } while (a !== o)
                }
                fn(e, t, i);
                break;
            case 1:
                if (!Je && (fr(i, t),
                    o = i.stateNode,
                    typeof o.componentWillUnmount == "function"))
                    try {
                        o.props = i.memoizedProps,
                            o.state = i.memoizedState,
                            o.componentWillUnmount()
                    } catch (v) {
                        Re(i, t, v)
                    }
                fn(e, t, i);
                break;
            case 21:
                fn(e, t, i);
                break;
            case 22:
                i.mode & 1 ? (Je = (o = Je) || i.memoizedState !== null,
                    fn(e, t, i),
                    Je = o) : fn(e, t, i);
                break;
            default:
                fn(e, t, i)
        }
    }
    function Qf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            i === null && (i = e.stateNode = new sg),
                t.forEach(function (o) {
                    var a = mg.bind(null, e, o);
                    i.has(o) || (i.add(o),
                        o.then(a, a))
                })
        }
    }
    function Lt(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var o = 0; o < i.length; o++) {
                var a = i[o];
                try {
                    var u = e
                        , h = t
                        , v = h;
                    e: for (; v !== null;) {
                        switch (v.tag) {
                            case 5:
                                Ge = v.stateNode,
                                    At = !1;
                                break e;
                            case 3:
                                Ge = v.stateNode.containerInfo,
                                    At = !0;
                                break e;
                            case 4:
                                Ge = v.stateNode.containerInfo,
                                    At = !0;
                                break e
                        }
                        v = v.return
                    }
                    if (Ge === null)
                        throw Error(s(160));
                    Yf(u, h, a),
                        Ge = null,
                        At = !1;
                    var S = a.alternate;
                    S !== null && (S.return = null),
                        a.return = null
                } catch (N) {
                    Re(a, t, N)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;)
                bf(t, e),
                    t = t.sibling
    }
    function bf(e, t) {
        var i = e.alternate
            , o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Lt(t, e),
                    Ot(e),
                    o & 4) {
                    try {
                        si(3, e, e.return),
                            vs(3, e)
                    } catch (Q) {
                        Re(e, e.return, Q)
                    }
                    try {
                        si(5, e, e.return)
                    } catch (Q) {
                        Re(e, e.return, Q)
                    }
                }
                break;
            case 1:
                Lt(t, e),
                    Ot(e),
                    o & 512 && i !== null && fr(i, i.return);
                break;
            case 5:
                if (Lt(t, e),
                    Ot(e),
                    o & 512 && i !== null && fr(i, i.return),
                    e.flags & 32) {
                    var a = e.stateNode;
                    try {
                        Pr(a, "")
                    } catch (Q) {
                        Re(e, e.return, Q)
                    }
                }
                if (o & 4 && (a = e.stateNode,
                    a != null)) {
                    var u = e.memoizedProps
                        , h = i !== null ? i.memoizedProps : u
                        , v = e.type
                        , S = e.updateQueue;
                    if (e.updateQueue = null,
                        S !== null)
                        try {
                            v === "input" && u.type === "radio" && u.name != null && Tu(a, u),
                                po(v, h);
                            var N = po(v, u);
                            for (h = 0; h < S.length; h += 2) {
                                var j = S[h]
                                    , _ = S[h + 1];
                                j === "style" ? Ru(a, _) : j === "dangerouslySetInnerHTML" ? Au(a, _) : j === "children" ? Pr(a, _) : O(a, j, _, N)
                            }
                            switch (v) {
                                case "input":
                                    ao(a, u);
                                    break;
                                case "textarea":
                                    Pu(a, u);
                                    break;
                                case "select":
                                    var V = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!u.multiple;
                                    var $ = u.value;
                                    $ != null ? Hn(a, !!u.multiple, $, !1) : V !== !!u.multiple && (u.defaultValue != null ? Hn(a, !!u.multiple, u.defaultValue, !0) : Hn(a, !!u.multiple, u.multiple ? [] : "", !1))
                            }
                            a[Yr] = u
                        } catch (Q) {
                            Re(e, e.return, Q)
                        }
                }
                break;
            case 6:
                if (Lt(t, e),
                    Ot(e),
                    o & 4) {
                    if (e.stateNode === null)
                        throw Error(s(162));
                    a = e.stateNode,
                        u = e.memoizedProps;
                    try {
                        a.nodeValue = u
                    } catch (Q) {
                        Re(e, e.return, Q)
                    }
                }
                break;
            case 3:
                if (Lt(t, e),
                    Ot(e),
                    o & 4 && i !== null && i.memoizedState.isDehydrated)
                    try {
                        Fr(t.containerInfo)
                    } catch (Q) {
                        Re(e, e.return, Q)
                    }
                break;
            case 4:
                Lt(t, e),
                    Ot(e);
                break;
            case 13:
                Lt(t, e),
                    Ot(e),
                    a = e.child,
                    a.flags & 8192 && (u = a.memoizedState !== null,
                        a.stateNode.isHidden = u,
                        !u || a.alternate !== null && a.alternate.memoizedState !== null || (Bl = je())),
                    o & 4 && Qf(e);
                break;
            case 22:
                if (j = i !== null && i.memoizedState !== null,
                    e.mode & 1 ? (Je = (N = Je) || j,
                        Lt(t, e),
                        Je = N) : Lt(t, e),
                    Ot(e),
                    o & 8192) {
                    if (N = e.memoizedState !== null,
                        (e.stateNode.isHidden = N) && !j && (e.mode & 1) !== 0)
                        for (H = e,
                            j = e.child; j !== null;) {
                            for (_ = H = j; H !== null;) {
                                switch (V = H,
                                $ = V.child,
                                V.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        si(4, V, V.return);
                                        break;
                                    case 1:
                                        fr(V, V.return);
                                        var G = V.stateNode;
                                        if (typeof G.componentWillUnmount == "function") {
                                            o = V,
                                                i = V.return;
                                            try {
                                                t = o,
                                                    G.props = t.memoizedProps,
                                                    G.state = t.memoizedState,
                                                    G.componentWillUnmount()
                                            } catch (Q) {
                                                Re(o, i, Q)
                                            }
                                        }
                                        break;
                                    case 5:
                                        fr(V, V.return);
                                        break;
                                    case 22:
                                        if (V.memoizedState !== null) {
                                            Jf(_);
                                            continue
                                        }
                                }
                                $ !== null ? ($.return = V,
                                    H = $) : Jf(_)
                            }
                            j = j.sibling
                        }
                    e: for (j = null,
                        _ = e; ;) {
                        if (_.tag === 5) {
                            if (j === null) {
                                j = _;
                                try {
                                    a = _.stateNode,
                                        N ? (u = a.style,
                                            typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (v = _.stateNode,
                                                S = _.memoizedProps.style,
                                                h = S != null && S.hasOwnProperty("display") ? S.display : null,
                                                v.style.display = Lu("display", h))
                                } catch (Q) {
                                    Re(e, e.return, Q)
                                }
                            }
                        } else if (_.tag === 6) {
                            if (j === null)
                                try {
                                    _.stateNode.nodeValue = N ? "" : _.memoizedProps
                                } catch (Q) {
                                    Re(e, e.return, Q)
                                }
                        } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
                            _.child.return = _,
                                _ = _.child;
                            continue
                        }
                        if (_ === e)
                            break e;
                        for (; _.sibling === null;) {
                            if (_.return === null || _.return === e)
                                break e;
                            j === _ && (j = null),
                                _ = _.return
                        }
                        j === _ && (j = null),
                            _.sibling.return = _.return,
                            _ = _.sibling
                    }
                }
                break;
            case 19:
                Lt(t, e),
                    Ot(e),
                    o & 4 && Qf(e);
                break;
            case 21:
                break;
            default:
                Lt(t, e),
                    Ot(e)
        }
    }
    function Ot(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var i = e.return; i !== null;) {
                        if (Gf(i)) {
                            var o = i;
                            break e
                        }
                        i = i.return
                    }
                    throw Error(s(160))
                }
                switch (o.tag) {
                    case 5:
                        var a = o.stateNode;
                        o.flags & 32 && (Pr(a, ""),
                            o.flags &= -33);
                        var u = Xf(e);
                        Fl(e, u, a);
                        break;
                    case 3:
                    case 4:
                        var h = o.stateNode.containerInfo
                            , v = Xf(e);
                        Il(e, v, h);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (S) {
                Re(e, e.return, S)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function lg(e, t, i) {
        H = e,
            Zf(e)
    }
    function Zf(e, t, i) {
        for (var o = (e.mode & 1) !== 0; H !== null;) {
            var a = H
                , u = a.child;
            if (a.tag === 22 && o) {
                var h = a.memoizedState !== null || gs;
                if (!h) {
                    var v = a.alternate
                        , S = v !== null && v.memoizedState !== null || Je;
                    v = gs;
                    var N = Je;
                    if (gs = h,
                        (Je = S) && !N)
                        for (H = a; H !== null;)
                            h = H,
                                S = h.child,
                                h.tag === 22 && h.memoizedState !== null ? ed(a) : S !== null ? (S.return = h,
                                    H = S) : ed(a);
                    for (; u !== null;)
                        H = u,
                            Zf(u),
                            u = u.sibling;
                    H = a,
                        gs = v,
                        Je = N
                }
                qf(e)
            } else
                (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a,
                    H = u) : qf(e)
        }
    }
    function qf(e) {
        for (; H !== null;) {
            var t = H;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Je || vs(5, t);
                                break;
                            case 1:
                                var o = t.stateNode;
                                if (t.flags & 4 && !Je)
                                    if (i === null)
                                        o.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? i.memoizedProps : Nt(t.type, i.memoizedProps);
                                        o.componentDidUpdate(a, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                                    }
                                var u = t.updateQueue;
                                u !== null && qc(t, u, o);
                                break;
                            case 3:
                                var h = t.updateQueue;
                                if (h !== null) {
                                    if (i = null,
                                        t.child !== null)
                                        switch (t.child.tag) {
                                            case 5:
                                                i = t.child.stateNode;
                                                break;
                                            case 1:
                                                i = t.child.stateNode
                                        }
                                    qc(t, h, i)
                                }
                                break;
                            case 5:
                                var v = t.stateNode;
                                if (i === null && t.flags & 4) {
                                    i = v;
                                    var S = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            S.autoFocus && i.focus();
                                            break;
                                        case "img":
                                            S.src && (i.src = S.src)
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var N = t.alternate;
                                    if (N !== null) {
                                        var j = N.memoizedState;
                                        if (j !== null) {
                                            var _ = j.dehydrated;
                                            _ !== null && Fr(_)
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    Je || t.flags & 512 && _l(t)
                } catch (V) {
                    Re(t, t.return, V)
                }
            }
            if (t === e) {
                H = null;
                break
            }
            if (i = t.sibling,
                i !== null) {
                i.return = t.return,
                    H = i;
                break
            }
            H = t.return
        }
    }
    function Jf(e) {
        for (; H !== null;) {
            var t = H;
            if (t === e) {
                H = null;
                break
            }
            var i = t.sibling;
            if (i !== null) {
                i.return = t.return,
                    H = i;
                break
            }
            H = t.return
        }
    }
    function ed(e) {
        for (; H !== null;) {
            var t = H;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var i = t.return;
                        try {
                            vs(4, t)
                        } catch (S) {
                            Re(t, i, S)
                        }
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (typeof o.componentDidMount == "function") {
                            var a = t.return;
                            try {
                                o.componentDidMount()
                            } catch (S) {
                                Re(t, a, S)
                            }
                        }
                        var u = t.return;
                        try {
                            _l(t)
                        } catch (S) {
                            Re(t, u, S)
                        }
                        break;
                    case 5:
                        var h = t.return;
                        try {
                            _l(t)
                        } catch (S) {
                            Re(t, h, S)
                        }
                }
            } catch (S) {
                Re(t, t.return, S)
            }
            if (t === e) {
                H = null;
                break
            }
            var v = t.sibling;
            if (v !== null) {
                v.return = t.return,
                    H = v;
                break
            }
            H = t.return
        }
    }
    var ag = Math.ceil
        , ws = U.ReactCurrentDispatcher
        , zl = U.ReactCurrentOwner
        , xt = U.ReactCurrentBatchConfig
        , ue = 0
        , He = null
        , ze = null
        , Xe = 0
        , pt = 0
        , dr = on(0)
        , Ue = 0
        , oi = null
        , Vn = 0
        , xs = 0
        , Ol = 0
        , li = null
        , lt = null
        , Bl = 0
        , hr = 1 / 0
        , Zt = null
        , Ss = !1
        , Ul = null
        , dn = null
        , ks = !1
        , hn = null
        , Ts = 0
        , ai = 0
        , Wl = null
        , Cs = -1
        , Es = 0;
    function tt() {
        return (ue & 6) !== 0 ? je() : Cs !== -1 ? Cs : Cs = je()
    }
    function pn(e) {
        return (e.mode & 1) === 0 ? 1 : (ue & 2) !== 0 && Xe !== 0 ? Xe & -Xe : Ky.transition !== null ? (Es === 0 && (Es = Gu()),
            Es) : (e = pe,
                e !== 0 || (e = window.event,
                    e = e === void 0 ? 16 : tc(e.type)),
                e)
    }
    function Rt(e, t, i, o) {
        if (50 < ai)
            throw ai = 0,
            Wl = null,
            Error(s(185));
        Dr(e, i, o),
            ((ue & 2) === 0 || e !== He) && (e === He && ((ue & 2) === 0 && (xs |= i),
                Ue === 4 && mn(e, Xe)),
                at(e, o),
                i === 1 && ue === 0 && (t.mode & 1) === 0 && (hr = je() + 500,
                    Ji && an()))
    }
    function at(e, t) {
        var i = e.callbackNode;
        Km(e, t);
        var o = ji(e, e === He ? Xe : 0);
        if (o === 0)
            i !== null && $u(i),
                e.callbackNode = null,
                e.callbackPriority = 0;
        else if (t = o & -o,
            e.callbackPriority !== t) {
            if (i != null && $u(i),
                t === 1)
                e.tag === 0 ? Hy(nd.bind(null, e)) : Bc(nd.bind(null, e)),
                    By(function () {
                        (ue & 6) === 0 && an()
                    }),
                    i = null;
            else {
                switch (Xu(o)) {
                    case 1:
                        i = So;
                        break;
                    case 4:
                        i = Hu;
                        break;
                    case 16:
                        i = Li;
                        break;
                    case 536870912:
                        i = Ku;
                        break;
                    default:
                        i = Li
                }
                i = cd(i, td.bind(null, e))
            }
            e.callbackPriority = t,
                e.callbackNode = i
        }
    }
    function td(e, t) {
        if (Cs = -1,
            Es = 0,
            (ue & 6) !== 0)
            throw Error(s(327));
        var i = e.callbackNode;
        if (pr() && e.callbackNode !== i)
            return null;
        var o = ji(e, e === He ? Xe : 0);
        if (o === 0)
            return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t)
            t = Ps(e, o);
        else {
            t = o;
            var a = ue;
            ue |= 2;
            var u = id();
            (He !== e || Xe !== t) && (Zt = null,
                hr = je() + 500,
                _n(e, t));
            do
                try {
                    fg();
                    break
                } catch (v) {
                    rd(e, v)
                }
            while (!0);
            ol(),
                ws.current = u,
                ue = a,
                ze !== null ? t = 0 : (He = null,
                    Xe = 0,
                    t = Ue)
        }
        if (t !== 0) {
            if (t === 2 && (a = ko(e),
                a !== 0 && (o = a,
                    t = $l(e, a))),
                t === 1)
                throw i = oi,
                _n(e, 0),
                mn(e, o),
                at(e, je()),
                i;
            if (t === 6)
                mn(e, o);
            else {
                if (a = e.current.alternate,
                    (o & 30) === 0 && !ug(a) && (t = Ps(e, o),
                        t === 2 && (u = ko(e),
                            u !== 0 && (o = u,
                                t = $l(e, u))),
                        t === 1))
                    throw i = oi,
                    _n(e, 0),
                    mn(e, o),
                    at(e, je()),
                    i;
                switch (e.finishedWork = a,
                e.finishedLanes = o,
                t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        In(e, lt, Zt);
                        break;
                    case 3:
                        if (mn(e, o),
                            (o & 130023424) === o && (t = Bl + 500 - je(),
                                10 < t)) {
                            if (ji(e, 0) !== 0)
                                break;
                            if (a = e.suspendedLanes,
                                (a & o) !== o) {
                                tt(),
                                    e.pingedLanes |= e.suspendedLanes & a;
                                break
                            }
                            e.timeoutHandle = Qo(In.bind(null, e, lt, Zt), t);
                            break
                        }
                        In(e, lt, Zt);
                        break;
                    case 4:
                        if (mn(e, o),
                            (o & 4194240) === o)
                            break;
                        for (t = e.eventTimes,
                            a = -1; 0 < o;) {
                            var h = 31 - Et(o);
                            u = 1 << h,
                                h = t[h],
                                h > a && (a = h),
                                o &= ~u
                        }
                        if (o = a,
                            o = je() - o,
                            o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ag(o / 1960)) - o,
                            10 < o) {
                            e.timeoutHandle = Qo(In.bind(null, e, lt, Zt), o);
                            break
                        }
                        In(e, lt, Zt);
                        break;
                    case 5:
                        In(e, lt, Zt);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return at(e, je()),
            e.callbackNode === i ? td.bind(null, e) : null
    }
    function $l(e, t) {
        var i = li;
        return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
            e = Ps(e, t),
            e !== 2 && (t = lt,
                lt = i,
                t !== null && Hl(t)),
            e
    }
    function Hl(e) {
        lt === null ? lt = e : lt.push.apply(lt, e)
    }
    function ug(e) {
        for (var t = e; ;) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && (i = i.stores,
                    i !== null))
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o]
                            , u = a.getSnapshot;
                        a = a.value;
                        try {
                            if (!Pt(u(), a))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (i = t.child,
                t.subtreeFlags & 16384 && i !== null)
                i.return = t,
                    t = i;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                    t = t.sibling
            }
        }
        return !0
    }
    function mn(e, t) {
        for (t &= ~Ol,
            t &= ~xs,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes; 0 < t;) {
            var i = 31 - Et(t)
                , o = 1 << i;
            e[i] = -1,
                t &= ~o
        }
    }
    function nd(e) {
        if ((ue & 6) !== 0)
            throw Error(s(327));
        pr();
        var t = ji(e, 0);
        if ((t & 1) === 0)
            return at(e, je()),
                null;
        var i = Ps(e, t);
        if (e.tag !== 0 && i === 2) {
            var o = ko(e);
            o !== 0 && (t = o,
                i = $l(e, o))
        }
        if (i === 1)
            throw i = oi,
            _n(e, 0),
            mn(e, t),
            at(e, je()),
            i;
        if (i === 6)
            throw Error(s(345));
        return e.finishedWork = e.current.alternate,
            e.finishedLanes = t,
            In(e, lt, Zt),
            at(e, je()),
            null
    }
    function Kl(e, t) {
        var i = ue;
        ue |= 1;
        try {
            return e(t)
        } finally {
            ue = i,
                ue === 0 && (hr = je() + 500,
                    Ji && an())
        }
    }
    function jn(e) {
        hn !== null && hn.tag === 0 && (ue & 6) === 0 && pr();
        var t = ue;
        ue |= 1;
        var i = xt.transition
            , o = pe;
        try {
            if (xt.transition = null,
                pe = 1,
                e)
                return e()
        } finally {
            pe = o,
                xt.transition = i,
                ue = t,
                (ue & 6) === 0 && an()
        }
    }
    function Gl() {
        pt = dr.current,
            ke(dr)
    }
    function _n(e, t) {
        e.finishedWork = null,
            e.finishedLanes = 0;
        var i = e.timeoutHandle;
        if (i !== -1 && (e.timeoutHandle = -1,
            Oy(i)),
            ze !== null)
            for (i = ze.return; i !== null;) {
                var o = i;
                switch (tl(o),
                o.tag) {
                    case 1:
                        o = o.type.childContextTypes,
                            o != null && Zi();
                        break;
                    case 3:
                        ur(),
                            ke(it),
                            ke(be),
                            pl();
                        break;
                    case 5:
                        dl(o);
                        break;
                    case 4:
                        ur();
                        break;
                    case 13:
                        ke(Ne);
                        break;
                    case 19:
                        ke(Ne);
                        break;
                    case 10:
                        ll(o.type._context);
                        break;
                    case 22:
                    case 23:
                        Gl()
                }
                i = i.return
            }
        if (He = e,
            ze = e = yn(e.current, null),
            Xe = pt = t,
            Ue = 0,
            oi = null,
            Ol = xs = Vn = 0,
            lt = li = null,
            Ln !== null) {
            for (t = 0; t < Ln.length; t++)
                if (i = Ln[t],
                    o = i.interleaved,
                    o !== null) {
                    i.interleaved = null;
                    var a = o.next
                        , u = i.pending;
                    if (u !== null) {
                        var h = u.next;
                        u.next = a,
                            o.next = h
                    }
                    i.pending = o
                }
            Ln = null
        }
        return e
    }
    function rd(e, t) {
        do {
            var i = ze;
            try {
                if (ol(),
                    us.current = hs,
                    cs) {
                    for (var o = Ae.memoizedState; o !== null;) {
                        var a = o.queue;
                        a !== null && (a.pending = null),
                            o = o.next
                    }
                    cs = !1
                }
                if (Dn = 0,
                    $e = Be = Ae = null,
                    ei = !1,
                    ti = 0,
                    zl.current = null,
                    i === null || i.return === null) {
                    Ue = 1,
                        oi = t,
                        ze = null;
                    break
                }
                e: {
                    var u = e
                        , h = i.return
                        , v = i
                        , S = t;
                    if (t = Xe,
                        v.flags |= 32768,
                        S !== null && typeof S == "object" && typeof S.then == "function") {
                        var N = S
                            , j = v
                            , _ = j.tag;
                        if ((j.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
                            var V = j.alternate;
                            V ? (j.updateQueue = V.updateQueue,
                                j.memoizedState = V.memoizedState,
                                j.lanes = V.lanes) : (j.updateQueue = null,
                                    j.memoizedState = null)
                        }
                        var $ = Nf(h);
                        if ($ !== null) {
                            $.flags &= -257,
                                Af($, h, v, u, t),
                                $.mode & 1 && Mf(u, N, t),
                                t = $,
                                S = N;
                            var G = t.updateQueue;
                            if (G === null) {
                                var Q = new Set;
                                Q.add(S),
                                    t.updateQueue = Q
                            } else
                                G.add(S);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Mf(u, N, t),
                                    Xl();
                                break e
                            }
                            S = Error(s(426))
                        }
                    } else if (Pe && v.mode & 1) {
                        var _e = Nf(h);
                        if (_e !== null) {
                            (_e.flags & 65536) === 0 && (_e.flags |= 256),
                                Af(_e, h, v, u, t),
                                il(cr(S, v));
                            break e
                        }
                    }
                    u = S = cr(S, v),
                        Ue !== 4 && (Ue = 2),
                        li === null ? li = [u] : li.push(u),
                        u = h;
                    do {
                        switch (u.tag) {
                            case 3:
                                u.flags |= 65536,
                                    t &= -t,
                                    u.lanes |= t;
                                var E = Ef(u, S, t);
                                Zc(u, E);
                                break e;
                            case 1:
                                v = S;
                                var k = u.type
                                    , M = u.stateNode;
                                if ((u.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (dn === null || !dn.has(M)))) {
                                    u.flags |= 65536,
                                        t &= -t,
                                        u.lanes |= t;
                                    var z = Pf(u, v, t);
                                    Zc(u, z);
                                    break e
                                }
                        }
                        u = u.return
                    } while (u !== null)
                }
                od(i)
            } catch (Z) {
                t = Z,
                    ze === i && i !== null && (ze = i = i.return);
                continue
            }
            break
        } while (!0)
    }
    function id() {
        var e = ws.current;
        return ws.current = hs,
            e === null ? hs : e
    }
    function Xl() {
        (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
            He === null || (Vn & 268435455) === 0 && (xs & 268435455) === 0 || mn(He, Xe)
    }
    function Ps(e, t) {
        var i = ue;
        ue |= 2;
        var o = id();
        (He !== e || Xe !== t) && (Zt = null,
            _n(e, t));
        do
            try {
                cg();
                break
            } catch (a) {
                rd(e, a)
            }
        while (!0);
        if (ol(),
            ue = i,
            ws.current = o,
            ze !== null)
            throw Error(s(261));
        return He = null,
            Xe = 0,
            Ue
    }
    function cg() {
        for (; ze !== null;)
            sd(ze)
    }
    function fg() {
        for (; ze !== null && !Im();)
            sd(ze)
    }
    function sd(e) {
        var t = ud(e.alternate, e, pt);
        e.memoizedProps = e.pendingProps,
            t === null ? od(e) : ze = t,
            zl.current = null
    }
    function od(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (e = t.return,
                (t.flags & 32768) === 0) {
                if (i = rg(i, t, pt),
                    i !== null) {
                    ze = i;
                    return
                }
            } else {
                if (i = ig(i, t),
                    i !== null) {
                    i.flags &= 32767,
                        ze = i;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null;
                else {
                    Ue = 6,
                        ze = null;
                    return
                }
            }
            if (t = t.sibling,
                t !== null) {
                ze = t;
                return
            }
            ze = t = e
        } while (t !== null);
        Ue === 0 && (Ue = 5)
    }
    function In(e, t, i) {
        var o = pe
            , a = xt.transition;
        try {
            xt.transition = null,
                pe = 1,
                dg(e, t, i, o)
        } finally {
            xt.transition = a,
                pe = o
        }
        return null
    }
    function dg(e, t, i, o) {
        do
            pr();
        while (hn !== null);
        if ((ue & 6) !== 0)
            throw Error(s(327));
        i = e.finishedWork;
        var a = e.finishedLanes;
        if (i === null)
            return null;
        if (e.finishedWork = null,
            e.finishedLanes = 0,
            i === e.current)
            throw Error(s(177));
        e.callbackNode = null,
            e.callbackPriority = 0;
        var u = i.lanes | i.childLanes;
        if (Gm(e, u),
            e === He && (ze = He = null,
                Xe = 0),
            (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || ks || (ks = !0,
                cd(Li, function () {
                    return pr(),
                        null
                })),
            u = (i.flags & 15990) !== 0,
            (i.subtreeFlags & 15990) !== 0 || u) {
            u = xt.transition,
                xt.transition = null;
            var h = pe;
            pe = 1;
            var v = ue;
            ue |= 4,
                zl.current = null,
                og(e, i),
                bf(i, e),
                Dy(Xo),
                Fi = !!Go,
                Xo = Go = null,
                e.current = i,
                lg(i),
                Fm(),
                ue = v,
                pe = h,
                xt.transition = u
        } else
            e.current = i;
        if (ks && (ks = !1,
            hn = e,
            Ts = a),
            u = e.pendingLanes,
            u === 0 && (dn = null),
            Bm(i.stateNode),
            at(e, je()),
            t !== null)
            for (o = e.onRecoverableError,
                i = 0; i < t.length; i++)
                a = t[i],
                    o(a.value, {
                        componentStack: a.stack,
                        digest: a.digest
                    });
        if (Ss)
            throw Ss = !1,
            e = Ul,
            Ul = null,
            e;
        return (Ts & 1) !== 0 && e.tag !== 0 && pr(),
            u = e.pendingLanes,
            (u & 1) !== 0 ? e === Wl ? ai++ : (ai = 0,
                Wl = e) : ai = 0,
            an(),
            null
    }
    function pr() {
        if (hn !== null) {
            var e = Xu(Ts)
                , t = xt.transition
                , i = pe;
            try {
                if (xt.transition = null,
                    pe = 16 > e ? 16 : e,
                    hn === null)
                    var o = !1;
                else {
                    if (e = hn,
                        hn = null,
                        Ts = 0,
                        (ue & 6) !== 0)
                        throw Error(s(331));
                    var a = ue;
                    for (ue |= 4,
                        H = e.current; H !== null;) {
                        var u = H
                            , h = u.child;
                        if ((H.flags & 16) !== 0) {
                            var v = u.deletions;
                            if (v !== null) {
                                for (var S = 0; S < v.length; S++) {
                                    var N = v[S];
                                    for (H = N; H !== null;) {
                                        var j = H;
                                        switch (j.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                si(8, j, u)
                                        }
                                        var _ = j.child;
                                        if (_ !== null)
                                            _.return = j,
                                                H = _;
                                        else
                                            for (; H !== null;) {
                                                j = H;
                                                var V = j.sibling
                                                    , $ = j.return;
                                                if (Kf(j),
                                                    j === N) {
                                                    H = null;
                                                    break
                                                }
                                                if (V !== null) {
                                                    V.return = $,
                                                        H = V;
                                                    break
                                                }
                                                H = $
                                            }
                                    }
                                }
                                var G = u.alternate;
                                if (G !== null) {
                                    var Q = G.child;
                                    if (Q !== null) {
                                        G.child = null;
                                        do {
                                            var _e = Q.sibling;
                                            Q.sibling = null,
                                                Q = _e
                                        } while (Q !== null)
                                    }
                                }
                                H = u
                            }
                        }
                        if ((u.subtreeFlags & 2064) !== 0 && h !== null)
                            h.return = u,
                                H = h;
                        else
                            e: for (; H !== null;) {
                                if (u = H,
                                    (u.flags & 2048) !== 0)
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            si(9, u, u.return)
                                    }
                                var E = u.sibling;
                                if (E !== null) {
                                    E.return = u.return,
                                        H = E;
                                    break e
                                }
                                H = u.return
                            }
                    }
                    var k = e.current;
                    for (H = k; H !== null;) {
                        h = H;
                        var M = h.child;
                        if ((h.subtreeFlags & 2064) !== 0 && M !== null)
                            M.return = h,
                                H = M;
                        else
                            e: for (h = k; H !== null;) {
                                if (v = H,
                                    (v.flags & 2048) !== 0)
                                    try {
                                        switch (v.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                vs(9, v)
                                        }
                                    } catch (Z) {
                                        Re(v, v.return, Z)
                                    }
                                if (v === h) {
                                    H = null;
                                    break e
                                }
                                var z = v.sibling;
                                if (z !== null) {
                                    z.return = v.return,
                                        H = z;
                                    break e
                                }
                                H = v.return
                            }
                    }
                    if (ue = a,
                        an(),
                        _t && typeof _t.onPostCommitFiberRoot == "function")
                        try {
                            _t.onPostCommitFiberRoot(Ri, e)
                        } catch { }
                    o = !0
                }
                return o
            } finally {
                pe = i,
                    xt.transition = t
            }
        }
        return !1
    }
    function ld(e, t, i) {
        t = cr(i, t),
            t = Ef(e, t, 1),
            e = cn(e, t, 1),
            t = tt(),
            e !== null && (Dr(e, 1, t),
                at(e, t))
    }
    function Re(e, t, i) {
        if (e.tag === 3)
            ld(e, e, i);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    ld(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (dn === null || !dn.has(o))) {
                        e = cr(i, e),
                            e = Pf(t, e, 1),
                            t = cn(t, e, 1),
                            e = tt(),
                            t !== null && (Dr(t, 1, e),
                                at(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function hg(e, t, i) {
        var o = e.pingCache;
        o !== null && o.delete(t),
            t = tt(),
            e.pingedLanes |= e.suspendedLanes & i,
            He === e && (Xe & i) === i && (Ue === 4 || Ue === 3 && (Xe & 130023424) === Xe && 500 > je() - Bl ? _n(e, 0) : Ol |= i),
            at(e, t)
    }
    function ad(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vi,
            Vi <<= 1,
            (Vi & 130023424) === 0 && (Vi = 4194304)));
        var i = tt();
        e = Yt(e, t),
            e !== null && (Dr(e, t, i),
                at(e, i))
    }
    function pg(e) {
        var t = e.memoizedState
            , i = 0;
        t !== null && (i = t.retryLane),
            ad(e, i)
    }
    function mg(e, t) {
        var i = 0;
        switch (e.tag) {
            case 13:
                var o = e.stateNode
                    , a = e.memoizedState;
                a !== null && (i = a.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        o !== null && o.delete(t),
            ad(e, i)
    }
    var ud;
    ud = function (e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || it.current)
                ot = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
                    return ot = !1,
                        ng(e, t, i);
                ot = (e.flags & 131072) !== 0
            }
        else
            ot = !1,
                Pe && (t.flags & 1048576) !== 0 && Uc(t, ts, t.index);
        switch (t.lanes = 0,
        t.tag) {
            case 2:
                var o = t.type;
                ys(e, t),
                    e = t.pendingProps;
                var a = nr(t, be.current);
                ar(t, i),
                    a = gl(null, t, o, e, a, i);
                var u = vl();
                return t.flags |= 1,
                    typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1,
                        t.memoizedState = null,
                        t.updateQueue = null,
                        st(o) ? (u = !0,
                            qi(t)) : u = !1,
                        t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
                        cl(t),
                        a.updater = ps,
                        t.stateNode = a,
                        a._reactInternals = t,
                        Cl(t, o, e, i),
                        t = Nl(null, t, o, !0, u, i)) : (t.tag = 0,
                            Pe && u && el(t),
                            et(null, t, a, i),
                            t = t.child),
                    t;
            case 16:
                o = t.elementType;
                e: {
                    switch (ys(e, t),
                    e = t.pendingProps,
                    a = o._init,
                    o = a(o._payload),
                    t.type = o,
                    a = t.tag = gg(o),
                    e = Nt(o, e),
                    a) {
                        case 0:
                            t = Ml(null, t, o, e, i);
                            break e;
                        case 1:
                            t = _f(null, t, o, e, i);
                            break e;
                        case 11:
                            t = Lf(null, t, o, e, i);
                            break e;
                        case 14:
                            t = Rf(null, t, o, Nt(o.type, e), i);
                            break e
                    }
                    throw Error(s(306, o, ""))
                }
                return t;
            case 0:
                return o = t.type,
                    a = t.pendingProps,
                    a = t.elementType === o ? a : Nt(o, a),
                    Ml(e, t, o, a, i);
            case 1:
                return o = t.type,
                    a = t.pendingProps,
                    a = t.elementType === o ? a : Nt(o, a),
                    _f(e, t, o, a, i);
            case 3:
                e: {
                    if (If(t),
                        e === null)
                        throw Error(s(387));
                    o = t.pendingProps,
                        u = t.memoizedState,
                        a = u.element,
                        bc(e, t),
                        ls(t, o, null, i);
                    var h = t.memoizedState;
                    if (o = h.element,
                        u.isDehydrated)
                        if (u = {
                            element: o,
                            isDehydrated: !1,
                            cache: h.cache,
                            pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                            transitions: h.transitions
                        },
                            t.updateQueue.baseState = u,
                            t.memoizedState = u,
                            t.flags & 256) {
                            a = cr(Error(s(423)), t),
                                t = Ff(e, t, o, i, a);
                            break e
                        } else if (o !== a) {
                            a = cr(Error(s(424)), t),
                                t = Ff(e, t, o, i, a);
                            break e
                        } else
                            for (ht = sn(t.stateNode.containerInfo.firstChild),
                                dt = t,
                                Pe = !0,
                                Mt = null,
                                i = Yc(t, null, o, i),
                                t.child = i; i;)
                                i.flags = i.flags & -3 | 4096,
                                    i = i.sibling;
                    else {
                        if (sr(),
                            o === a) {
                            t = bt(e, t, i);
                            break e
                        }
                        et(e, t, o, i)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Jc(t),
                    e === null && rl(t),
                    o = t.type,
                    a = t.pendingProps,
                    u = e !== null ? e.memoizedProps : null,
                    h = a.children,
                    Yo(o, a) ? h = null : u !== null && Yo(o, u) && (t.flags |= 32),
                    jf(e, t),
                    et(e, t, h, i),
                    t.child;
            case 6:
                return e === null && rl(t),
                    null;
            case 13:
                return zf(e, t, i);
            case 4:
                return fl(t, t.stateNode.containerInfo),
                    o = t.pendingProps,
                    e === null ? t.child = or(t, null, o, i) : et(e, t, o, i),
                    t.child;
            case 11:
                return o = t.type,
                    a = t.pendingProps,
                    a = t.elementType === o ? a : Nt(o, a),
                    Lf(e, t, o, a, i);
            case 7:
                return et(e, t, t.pendingProps, i),
                    t.child;
            case 8:
                return et(e, t, t.pendingProps.children, i),
                    t.child;
            case 12:
                return et(e, t, t.pendingProps.children, i),
                    t.child;
            case 10:
                e: {
                    if (o = t.type._context,
                        a = t.pendingProps,
                        u = t.memoizedProps,
                        h = a.value,
                        ve(is, o._currentValue),
                        o._currentValue = h,
                        u !== null)
                        if (Pt(u.value, h)) {
                            if (u.children === a.children && !it.current) {
                                t = bt(e, t, i);
                                break e
                            }
                        } else
                            for (u = t.child,
                                u !== null && (u.return = t); u !== null;) {
                                var v = u.dependencies;
                                if (v !== null) {
                                    h = u.child;
                                    for (var S = v.firstContext; S !== null;) {
                                        if (S.context === o) {
                                            if (u.tag === 1) {
                                                S = Qt(-1, i & -i),
                                                    S.tag = 2;
                                                var N = u.updateQueue;
                                                if (N !== null) {
                                                    N = N.shared;
                                                    var j = N.pending;
                                                    j === null ? S.next = S : (S.next = j.next,
                                                        j.next = S),
                                                        N.pending = S
                                                }
                                            }
                                            u.lanes |= i,
                                                S = u.alternate,
                                                S !== null && (S.lanes |= i),
                                                al(u.return, i, t),
                                                v.lanes |= i;
                                            break
                                        }
                                        S = S.next
                                    }
                                } else if (u.tag === 10)
                                    h = u.type === t.type ? null : u.child;
                                else if (u.tag === 18) {
                                    if (h = u.return,
                                        h === null)
                                        throw Error(s(341));
                                    h.lanes |= i,
                                        v = h.alternate,
                                        v !== null && (v.lanes |= i),
                                        al(h, i, t),
                                        h = u.sibling
                                } else
                                    h = u.child;
                                if (h !== null)
                                    h.return = u;
                                else
                                    for (h = u; h !== null;) {
                                        if (h === t) {
                                            h = null;
                                            break
                                        }
                                        if (u = h.sibling,
                                            u !== null) {
                                            u.return = h.return,
                                                h = u;
                                            break
                                        }
                                        h = h.return
                                    }
                                u = h
                            }
                    et(e, t, a.children, i),
                        t = t.child
                }
                return t;
            case 9:
                return a = t.type,
                    o = t.pendingProps.children,
                    ar(t, i),
                    a = vt(a),
                    o = o(a),
                    t.flags |= 1,
                    et(e, t, o, i),
                    t.child;
            case 14:
                return o = t.type,
                    a = Nt(o, t.pendingProps),
                    a = Nt(o.type, a),
                    Rf(e, t, o, a, i);
            case 15:
                return Df(e, t, t.type, t.pendingProps, i);
            case 17:
                return o = t.type,
                    a = t.pendingProps,
                    a = t.elementType === o ? a : Nt(o, a),
                    ys(e, t),
                    t.tag = 1,
                    st(o) ? (e = !0,
                        qi(t)) : e = !1,
                    ar(t, i),
                    Tf(t, o, a),
                    Cl(t, o, a, i),
                    Nl(null, t, o, !0, e, i);
            case 19:
                return Bf(e, t, i);
            case 22:
                return Vf(e, t, i)
        }
        throw Error(s(156, t.tag))
    }
        ;
    function cd(e, t) {
        return Wu(e, t)
    }
    function yg(e, t, i, o) {
        this.tag = e,
            this.key = i,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = o,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
    }
    function St(e, t, i, o) {
        return new yg(e, t, i, o)
    }
    function Yl(e) {
        return e = e.prototype,
            !(!e || !e.isReactComponent)
    }
    function gg(e) {
        if (typeof e == "function")
            return Yl(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
                e === we)
                return 11;
            if (e === Fe)
                return 14
        }
        return 2
    }
    function yn(e, t) {
        var i = e.alternate;
        return i === null ? (i = St(e.tag, t, e.key, e.mode),
            i.elementType = e.elementType,
            i.type = e.type,
            i.stateNode = e.stateNode,
            i.alternate = e,
            e.alternate = i) : (i.pendingProps = t,
                i.type = e.type,
                i.flags = 0,
                i.subtreeFlags = 0,
                i.deletions = null),
            i.flags = e.flags & 14680064,
            i.childLanes = e.childLanes,
            i.lanes = e.lanes,
            i.child = e.child,
            i.memoizedProps = e.memoizedProps,
            i.memoizedState = e.memoizedState,
            i.updateQueue = e.updateQueue,
            t = e.dependencies,
            i.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            },
            i.sibling = e.sibling,
            i.index = e.index,
            i.ref = e.ref,
            i
    }
    function Ms(e, t, i, o, a, u) {
        var h = 2;
        if (o = e,
            typeof e == "function")
            Yl(e) && (h = 1);
        else if (typeof e == "string")
            h = 5;
        else
            e: switch (e) {
                case ae:
                    return Fn(i.children, a, u, t);
                case te:
                    h = 8,
                        a |= 8;
                    break;
                case re:
                    return e = St(12, i, t, a | 2),
                        e.elementType = re,
                        e.lanes = u,
                        e;
                case Ve:
                    return e = St(13, i, t, a),
                        e.elementType = Ve,
                        e.lanes = u,
                        e;
                case Le:
                    return e = St(19, i, t, a),
                        e.elementType = Le,
                        e.lanes = u,
                        e;
                case Me:
                    return Ns(i, a, u, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case b:
                                h = 10;
                                break e;
                            case me:
                                h = 9;
                                break e;
                            case we:
                                h = 11;
                                break e;
                            case Fe:
                                h = 14;
                                break e;
                            case xe:
                                h = 16,
                                    o = null;
                                break e
                        }
                    throw Error(s(130, e == null ? e : typeof e, ""))
            }
        return t = St(h, i, t, a),
            t.elementType = e,
            t.type = o,
            t.lanes = u,
            t
    }
    function Fn(e, t, i, o) {
        return e = St(7, e, o, t),
            e.lanes = i,
            e
    }
    function Ns(e, t, i, o) {
        return e = St(22, e, o, t),
            e.elementType = Me,
            e.lanes = i,
            e.stateNode = {
                isHidden: !1
            },
            e
    }
    function Ql(e, t, i) {
        return e = St(6, e, null, t),
            e.lanes = i,
            e
    }
    function bl(e, t, i) {
        return t = St(4, e.children !== null ? e.children : [], e.key, t),
            t.lanes = i,
            t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            t
    }
    function vg(e, t, i, o, a) {
        this.tag = t,
            this.containerInfo = e,
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.pendingContext = this.context = null,
            this.callbackPriority = 0,
            this.eventTimes = To(0),
            this.expirationTimes = To(-1),
            this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = To(0),
            this.identifierPrefix = o,
            this.onRecoverableError = a,
            this.mutableSourceEagerHydrationData = null
    }
    function Zl(e, t, i, o, a, u, h, v, S) {
        return e = new vg(e, t, i, v, S),
            t === 1 ? (t = 1,
                u === !0 && (t |= 8)) : t = 0,
            u = St(3, null, null, t),
            e.current = u,
            u.stateNode = e,
            u.memoizedState = {
                element: o,
                isDehydrated: i,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null
            },
            cl(u),
            e
    }
    function wg(e, t, i) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: se,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: i
        }
    }
    function fd(e) {
        if (!e)
            return ln;
        e = e._reactInternals;
        e: {
            if (En(e) !== e || e.tag !== 1)
                throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (st(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var i = e.type;
            if (st(i))
                return zc(e, i, t)
        }
        return t
    }
    function dd(e, t, i, o, a, u, h, v, S) {
        return e = Zl(i, o, !0, e, a, u, h, v, S),
            e.context = fd(null),
            i = e.current,
            o = tt(),
            a = pn(i),
            u = Qt(o, a),
            u.callback = t ?? null,
            cn(i, u, a),
            e.current.lanes = a,
            Dr(e, a, o),
            at(e, o),
            e
    }
    function As(e, t, i, o) {
        var a = t.current
            , u = tt()
            , h = pn(a);
        return i = fd(i),
            t.context === null ? t.context = i : t.pendingContext = i,
            t = Qt(u, h),
            t.payload = {
                element: e
            },
            o = o === void 0 ? null : o,
            o !== null && (t.callback = o),
            e = cn(a, t, h),
            e !== null && (Rt(e, a, h, u),
                os(e, a, h)),
            h
    }
    function Ls(e) {
        if (e = e.current,
            !e.child)
            return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }
    function hd(e, t) {
        if (e = e.memoizedState,
            e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }
    function ql(e, t) {
        hd(e, t),
            (e = e.alternate) && hd(e, t)
    }
    function xg() {
        return null
    }
    var pd = typeof reportError == "function" ? reportError : function (e) {
        console.error(e)
    }
        ;
    function Jl(e) {
        this._internalRoot = e
    }
    Rs.prototype.render = Jl.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(s(409));
        As(e, t, null, null)
    }
        ,
        Rs.prototype.unmount = Jl.prototype.unmount = function () {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                jn(function () {
                    As(null, e, null, null)
                }),
                    t[Ht] = null
            }
        }
        ;
    function Rs(e) {
        this._internalRoot = e
    }
    Rs.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = bu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < tn.length && t !== 0 && t < tn[i].priority; i++)
                ;
            tn.splice(i, 0, e),
                i === 0 && Ju(e)
        }
    }
        ;
    function ea(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function Ds(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function md() { }
    function Sg(e, t, i, o, a) {
        if (a) {
            if (typeof o == "function") {
                var u = o;
                o = function () {
                    var N = Ls(h);
                    u.call(N)
                }
            }
            var h = dd(t, o, e, 0, null, !1, !1, "", md);
            return e._reactRootContainer = h,
                e[Ht] = h.current,
                Gr(e.nodeType === 8 ? e.parentNode : e),
                jn(),
                h
        }
        for (; a = e.lastChild;)
            e.removeChild(a);
        if (typeof o == "function") {
            var v = o;
            o = function () {
                var N = Ls(S);
                v.call(N)
            }
        }
        var S = Zl(e, 0, !1, null, null, !1, !1, "", md);
        return e._reactRootContainer = S,
            e[Ht] = S.current,
            Gr(e.nodeType === 8 ? e.parentNode : e),
            jn(function () {
                As(t, S, i, o)
            }),
            S
    }
    function Vs(e, t, i, o, a) {
        var u = i._reactRootContainer;
        if (u) {
            var h = u;
            if (typeof a == "function") {
                var v = a;
                a = function () {
                    var S = Ls(h);
                    v.call(S)
                }
            }
            As(t, h, e, a)
        } else
            h = Sg(i, t, e, a, o);
        return Ls(h)
    }
    Yu = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var i = Rr(t.pendingLanes);
                    i !== 0 && (Co(t, i | 1),
                        at(t, je()),
                        (ue & 6) === 0 && (hr = je() + 500,
                            an()))
                }
                break;
            case 13:
                jn(function () {
                    var o = Yt(e, 1);
                    if (o !== null) {
                        var a = tt();
                        Rt(o, e, 1, a)
                    }
                }),
                    ql(e, 1)
        }
    }
        ,
        Eo = function (e) {
            if (e.tag === 13) {
                var t = Yt(e, 134217728);
                if (t !== null) {
                    var i = tt();
                    Rt(t, e, 134217728, i)
                }
                ql(e, 134217728)
            }
        }
        ,
        Qu = function (e) {
            if (e.tag === 13) {
                var t = pn(e)
                    , i = Yt(e, t);
                if (i !== null) {
                    var o = tt();
                    Rt(i, e, t, o)
                }
                ql(e, t)
            }
        }
        ,
        bu = function () {
            return pe
        }
        ,
        Zu = function (e, t) {
            var i = pe;
            try {
                return pe = e,
                    t()
            } finally {
                pe = i
            }
        }
        ,
        go = function (e, t, i) {
            switch (t) {
                case "input":
                    if (ao(e, i),
                        t = i.name,
                        i.type === "radio" && t != null) {
                        for (i = e; i.parentNode;)
                            i = i.parentNode;
                        for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                            t = 0; t < i.length; t++) {
                            var o = i[t];
                            if (o !== e && o.form === e.form) {
                                var a = bi(o);
                                if (!a)
                                    throw Error(s(90));
                                Su(o),
                                    ao(o, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    Pu(e, i);
                    break;
                case "select":
                    t = i.value,
                        t != null && Hn(e, !!i.multiple, t, !1)
            }
        }
        ,
        _u = Kl,
        Iu = jn;
    var kg = {
        usingClientEntryPoint: !1,
        Events: [Qr, er, bi, Vu, ju, Kl]
    }
        , ui = {
            findFiberByHostInstance: Pn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        }
        , Tg = {
            bundleType: ui.bundleType,
            version: ui.version,
            rendererPackageName: ui.rendererPackageName,
            rendererConfig: ui.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: U.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return e = Bu(e),
                    e === null ? null : e.stateNode
            },
            findFiberByHostInstance: ui.findFiberByHostInstance || xg,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!js.isDisabled && js.supportsFiber)
            try {
                Ri = js.inject(Tg),
                    _t = js
            } catch { }
    }
    return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kg,
        ut.createPortal = function (e, t) {
            var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!ea(t))
                throw Error(s(200));
            return wg(e, t, null, i)
        }
        ,
        ut.createRoot = function (e, t) {
            if (!ea(e))
                throw Error(s(299));
            var i = !1
                , o = ""
                , a = pd;
            return t != null && (t.unstable_strictMode === !0 && (i = !0),
                t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
                t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
                t = Zl(e, 1, !1, null, null, i, !1, o, a),
                e[Ht] = t.current,
                Gr(e.nodeType === 8 ? e.parentNode : e),
                new Jl(t)
        }
        ,
        ut.findDOMNode = function (e) {
            if (e == null)
                return null;
            if (e.nodeType === 1)
                return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","),
                    Error(s(268, e)));
            return e = Bu(t),
                e = e === null ? null : e.stateNode,
                e
        }
        ,
        ut.flushSync = function (e) {
            return jn(e)
        }
        ,
        ut.hydrate = function (e, t, i) {
            if (!Ds(t))
                throw Error(s(200));
            return Vs(null, e, t, !0, i)
        }
        ,
        ut.hydrateRoot = function (e, t, i) {
            if (!ea(e))
                throw Error(s(405));
            var o = i != null && i.hydratedSources || null
                , a = !1
                , u = ""
                , h = pd;
            if (i != null && (i.unstable_strictMode === !0 && (a = !0),
                i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
                i.onRecoverableError !== void 0 && (h = i.onRecoverableError)),
                t = dd(t, null, e, 1, i ?? null, a, !1, u, h),
                e[Ht] = t.current,
                Gr(e),
                o)
                for (e = 0; e < o.length; e++)
                    i = o[e],
                        a = i._getVersion,
                        a = a(i._source),
                        t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, a] : t.mutableSourceEagerHydrationData.push(i, a);
            return new Rs(t)
        }
        ,
        ut.render = function (e, t, i) {
            if (!Ds(t))
                throw Error(s(200));
            return Vs(null, e, t, !1, i)
        }
        ,
        ut.unmountComponentAtNode = function (e) {
            if (!Ds(e))
                throw Error(s(40));
            return e._reactRootContainer ? (jn(function () {
                Vs(null, null, e, !1, function () {
                    e._reactRootContainer = null,
                        e[Ht] = null
                })
            }),
                !0) : !1
        }
        ,
        ut.unstable_batchedUpdates = Kl,
        ut.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
            if (!Ds(i))
                throw Error(s(200));
            if (e == null || e._reactInternals === void 0)
                throw Error(s(38));
            return Vs(e, t, i, !1, o)
        }
        ,
        ut.version = "18.3.1-next-f1338f8080-20240426",
        ut
}
var Td;
function Rg() {
    if (Td)
        return ra.exports;
    Td = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
        ra.exports = Lg(),
        ra.exports
}
var Cd;
function Dg() {
    if (Cd)
        return _s;
    Cd = 1;
    var n = Rg();
    return _s.createRoot = n.createRoot,
        _s.hydrateRoot = n.hydrateRoot,
        _s
}
var Vg = Dg()
    , K = Ga();
const Uh = K.createContext({});
function jg(n) {
    const r = K.useRef(null);
    return r.current === null && (r.current = n()),
        r.current
}
const _g = typeof window < "u"
    , Ig = _g ? K.useLayoutEffect : K.useEffect
    , Xa = K.createContext(null);
function Ya(n, r) {
    n.indexOf(r) === -1 && n.push(r)
}
function Ys(n, r) {
    const s = n.indexOf(r);
    s > -1 && n.splice(s, 1)
}
const $t = (n, r, s) => s > r ? r : s < n ? n : s;
let Qa = () => { }
    ;
const kn = {}
    , Wh = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function $h(n) {
    return typeof n == "object" && n !== null
}
const Hh = n => /^0[^.\s]+$/u.test(n);
function Kh(n) {
    let r;
    return () => (r === void 0 && (r = n()),
        r)
}
const Ct = n => n
    , Fg = (n, r) => s => r(n(s))
    , Si = (...n) => n.reduce(Fg)
    , gi = (n, r, s) => {
        const l = r - n;
        return l === 0 ? 1 : (s - n) / l
    }
    ;
class ba {
    constructor() {
        this.subscriptions = []
    }
    add(r) {
        return Ya(this.subscriptions, r),
            () => Ys(this.subscriptions, r)
    }
    notify(r, s, l) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](r, s, l);
            else
                for (let d = 0; d < c; d++) {
                    const f = this.subscriptions[d];
                    f && f(r, s, l)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const mt = n => n * 1e3
    , kt = n => n / 1e3;
function Gh(n, r) {
    return r ? n * (1e3 / r) : 0
}
const Xh = (n, r, s) => (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n
    , zg = 1e-7
    , Og = 12;
function Bg(n, r, s, l, c) {
    let d, f, p = 0;
    do
        f = r + (s - r) / 2,
            d = Xh(f, l, c) - n,
            d > 0 ? s = f : r = f;
    while (Math.abs(d) > zg && ++p < Og);
    return f
}
function ki(n, r, s, l) {
    if (n === r && s === l)
        return Ct;
    const c = d => Bg(d, 0, 1, n, s);
    return d => d === 0 || d === 1 ? d : Xh(c(d), r, l)
}
const Yh = n => r => r <= .5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2
    , Qh = n => r => 1 - n(1 - r)
    , bh = ki(.33, 1.53, .69, .99)
    , Za = Qh(bh)
    , Zh = Yh(Za)
    , qh = n => n >= 1 ? 1 : (n *= 2) < 1 ? .5 * Za(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
    , qa = n => 1 - Math.sin(Math.acos(n))
    , Jh = Qh(qa)
    , ep = Yh(qa)
    , Ug = ki(.42, 0, 1, 1)
    , Wg = ki(0, 0, .58, 1)
    , tp = ki(.42, 0, .58, 1)
    , $g = n => Array.isArray(n) && typeof n[0] != "number"
    , np = n => Array.isArray(n) && typeof n[0] == "number"
    , Hg = {
        linear: Ct,
        easeIn: Ug,
        easeInOut: tp,
        easeOut: Wg,
        circIn: qa,
        circInOut: ep,
        circOut: Jh,
        backIn: Za,
        backInOut: Zh,
        backOut: bh,
        anticipate: qh
    }
    , Kg = n => typeof n == "string"
    , Ed = n => {
        if (np(n)) {
            Qa(n.length === 4);
            const [r, s, l, c] = n;
            return ki(r, s, l, c)
        } else if (Kg(n))
            return Hg[n];
        return n
    }
    , Is = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Gg(n, r) {
    let s = new Set
        , l = new Set
        , c = !1
        , d = !1;
    const f = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function m(y) {
        f.has(y) && (g.schedule(y),
            n()),
            y(p)
    }
    const g = {
        schedule: (y, w = !1, x = !1) => {
            const A = x && c ? s : l;
            return w && f.add(y),
                A.add(y),
                y
        }
        ,
        cancel: y => {
            l.delete(y),
                f.delete(y)
        }
        ,
        process: y => {
            if (p = y,
                c) {
                d = !0;
                return
            }
            c = !0;
            const w = s;
            s = l,
                l = w,
                s.forEach(m),
                s.clear(),
                c = !1,
                d && (d = !1,
                    g.process(y))
        }
    };
    return g
}
const Xg = 40;
function rp(n, r) {
    let s = !1
        , l = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , d = () => s = !0
        , f = Is.reduce((O, U) => (O[U] = Gg(d),
            O), {})
        , { setup: p, read: m, resolveKeyframes: g, preUpdate: y, update: w, preRender: x, render: C, postRender: A } = f
        , R = () => {
            const O = kn.useManualTiming
                , U = O ? c.timestamp : performance.now();
            s = !1,
                O || (c.delta = l ? 1e3 / 60 : Math.max(Math.min(U - c.timestamp, Xg), 1)),
                c.timestamp = U,
                c.isProcessing = !0,
                p.process(c),
                m.process(c),
                g.process(c),
                y.process(c),
                w.process(c),
                x.process(c),
                C.process(c),
                A.process(c),
                c.isProcessing = !1,
                s && r && (l = !1,
                    n(R))
        }
        , L = () => {
            s = !0,
                l = !0,
                c.isProcessing || n(R)
        }
        ;
    return {
        schedule: Is.reduce((O, U) => {
            const q = f[U];
            return O[U] = (se, ae = !1, te = !1) => (s || L(),
                q.schedule(se, ae, te)),
                O
        }
            , {}),
        cancel: O => {
            for (let U = 0; U < Is.length; U++)
                f[Is[U]].cancel(O)
        }
        ,
        state: c,
        steps: f
    }
}
const { schedule: ye, cancel: Tn, state: Ye, steps: oa } = rp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, !0);
let Us;
function Yg() {
    Us = void 0
}
const nt = {
    now: () => (Us === void 0 && nt.set(Ye.isProcessing || kn.useManualTiming ? Ye.timestamp : performance.now()),
        Us),
    set: n => {
        Us = n,
            queueMicrotask(Yg)
    }
}
    , ip = n => r => typeof r == "string" && r.startsWith(n)
    , sp = ip("--")
    , Qg = ip("var(--")
    , Ja = n => Qg(n) ? bg.test(n.split("/*")[0].trim()) : !1
    , bg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Pd(n) {
    return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--")
}
const kr = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
    , vi = {
        ...kr,
        transform: n => $t(0, 1, n)
    }
    , Fs = {
        ...kr,
        default: 1
    }
    , hi = n => Math.round(n * 1e5) / 1e5
    , eu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Zg(n) {
    return n == null
}
const qg = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
    , tu = (n, r) => s => !!(typeof s == "string" && qg.test(s) && s.startsWith(n) || r && !Zg(s) && Object.prototype.hasOwnProperty.call(s, r))
    , op = (n, r, s) => l => {
        if (typeof l != "string")
            return l;
        const [c, d, f, p] = l.match(eu);
        return {
            [n]: parseFloat(c),
            [r]: parseFloat(d),
            [s]: parseFloat(f),
            alpha: p !== void 0 ? parseFloat(p) : 1
        }
    }
    , Jg = n => $t(0, 255, n)
    , la = {
        ...kr,
        transform: n => Math.round(Jg(n))
    }
    , Bn = {
        test: tu("rgb", "red"),
        parse: op("red", "green", "blue"),
        transform: ({ red: n, green: r, blue: s, alpha: l = 1 }) => "rgba(" + la.transform(n) + ", " + la.transform(r) + ", " + la.transform(s) + ", " + hi(vi.transform(l)) + ")"
    };
function ev(n) {
    let r = ""
        , s = ""
        , l = ""
        , c = "";
    return n.length > 5 ? (r = n.substring(1, 3),
        s = n.substring(3, 5),
        l = n.substring(5, 7),
        c = n.substring(7, 9)) : (r = n.substring(1, 2),
            s = n.substring(2, 3),
            l = n.substring(3, 4),
            c = n.substring(4, 5),
            r += r,
            s += s,
            l += l,
            c += c),
    {
        red: parseInt(r, 16),
        green: parseInt(s, 16),
        blue: parseInt(l, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const ka = {
    test: tu("#"),
    parse: ev,
    transform: Bn.transform
}
    , Ti = n => ({
        test: r => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
        parse: parseFloat,
        transform: r => `${r}${n}`
    })
    , vn = Ti("deg")
    , Wt = Ti("%")
    , X = Ti("px")
    , tv = Ti("vh")
    , nv = Ti("vw")
    , Md = {
        ...Wt,
        parse: n => Wt.parse(n) / 100,
        transform: n => Wt.transform(n * 100)
    }
    , gr = {
        test: tu("hsl", "hue"),
        parse: op("hue", "saturation", "lightness"),
        transform: ({ hue: n, saturation: r, lightness: s, alpha: l = 1 }) => "hsla(" + Math.round(n) + ", " + Wt.transform(hi(r)) + ", " + Wt.transform(hi(s)) + ", " + hi(vi.transform(l)) + ")"
    }
    , Oe = {
        test: n => Bn.test(n) || ka.test(n) || gr.test(n),
        parse: n => Bn.test(n) ? Bn.parse(n) : gr.test(n) ? gr.parse(n) : ka.parse(n),
        transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? Bn.transform(n) : gr.transform(n),
        getAnimatableNone: n => {
            const r = Oe.parse(n);
            return r.alpha = 0,
                Oe.transform(r)
        }
    }
    , rv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function iv(n) {
    var r, s;
    return isNaN(n) && typeof n == "string" && (((r = n.match(eu)) == null ? void 0 : r.length) || 0) + (((s = n.match(rv)) == null ? void 0 : s.length) || 0) > 0
}
const lp = "number"
    , ap = "color"
    , sv = "var"
    , ov = "var("
    , Nd = "${}"
    , lv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xr(n) {
    const r = n.toString()
        , s = []
        , l = {
            color: [],
            number: [],
            var: []
        }
        , c = [];
    let d = 0;
    const p = r.replace(lv, m => (Oe.test(m) ? (l.color.push(d),
        c.push(ap),
        s.push(Oe.parse(m))) : m.startsWith(ov) ? (l.var.push(d),
            c.push(sv),
            s.push(m)) : (l.number.push(d),
                c.push(lp),
                s.push(parseFloat(m))),
        ++d,
        Nd)).split(Nd);
    return {
        values: s,
        split: p,
        indexes: l,
        types: c
    }
}
function av(n) {
    return xr(n).values
}
function up({ split: n, types: r }) {
    const s = n.length;
    return l => {
        let c = "";
        for (let d = 0; d < s; d++)
            if (c += n[d],
                l[d] !== void 0) {
                const f = r[d];
                f === lp ? c += hi(l[d]) : f === ap ? c += Oe.transform(l[d]) : c += l[d]
            }
        return c
    }
}
function uv(n) {
    return up(xr(n))
}
const cv = n => typeof n == "number" ? 0 : Oe.test(n) ? Oe.getAnimatableNone(n) : n
    , fv = (n, r) => typeof n == "number" ? r != null && r.trim().endsWith("/") ? n : 0 : cv(n);
function dv(n) {
    const r = xr(n);
    return up(r)(r.values.map((l, c) => fv(l, r.split[c])))
}
const jt = {
    test: iv,
    parse: av,
    createTransformer: uv,
    getAnimatableNone: dv
};
function aa(n, r, s) {
    return s < 0 && (s += 1),
        s > 1 && (s -= 1),
        s < 1 / 6 ? n + (r - n) * 6 * s : s < 1 / 2 ? r : s < 2 / 3 ? n + (r - n) * (2 / 3 - s) * 6 : n
}
function hv({ hue: n, saturation: r, lightness: s, alpha: l }) {
    n /= 360,
        r /= 100,
        s /= 100;
    let c = 0
        , d = 0
        , f = 0;
    if (!r)
        c = d = f = s;
    else {
        const p = s < .5 ? s * (1 + r) : s + r - s * r
            , m = 2 * s - p;
        c = aa(m, p, n + 1 / 3),
            d = aa(m, p, n),
            f = aa(m, p, n - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(d * 255),
        blue: Math.round(f * 255),
        alpha: l
    }
}
function Qs(n, r) {
    return s => s > 0 ? r : n
}
const Ce = (n, r, s) => n + (r - n) * s
    , ua = (n, r, s) => {
        const l = n * n
            , c = s * (r * r - l) + l;
        return c < 0 ? 0 : Math.sqrt(c)
    }
    , pv = [ka, Bn, gr]
    , mv = n => pv.find(r => r.test(n));
function Ad(n) {
    const r = mv(n);
    if (!r)
        return !1;
    let s = r.parse(n);
    return r === gr && (s = hv(s)),
        s
}
const Ld = (n, r) => {
    const s = Ad(n)
        , l = Ad(r);
    if (!s || !l)
        return Qs(n, r);
    const c = {
        ...s
    };
    return d => (c.red = ua(s.red, l.red, d),
        c.green = ua(s.green, l.green, d),
        c.blue = ua(s.blue, l.blue, d),
        c.alpha = Ce(s.alpha, l.alpha, d),
        Bn.transform(c))
}
    , Ta = new Set(["none", "hidden"]);
function yv(n, r) {
    return Ta.has(n) ? s => s <= 0 ? n : r : s => s >= 1 ? r : n
}
function gv(n, r) {
    return s => Ce(n, r, s)
}
function nu(n) {
    return typeof n == "number" ? gv : typeof n == "string" ? Ja(n) ? Qs : Oe.test(n) ? Ld : xv : Array.isArray(n) ? cp : typeof n == "object" ? Oe.test(n) ? Ld : vv : Qs
}
function cp(n, r) {
    const s = [...n]
        , l = s.length
        , c = n.map((d, f) => nu(d)(d, r[f]));
    return d => {
        for (let f = 0; f < l; f++)
            s[f] = c[f](d);
        return s
    }
}
function vv(n, r) {
    const s = {
        ...n,
        ...r
    }
        , l = {};
    for (const c in s)
        n[c] !== void 0 && r[c] !== void 0 && (l[c] = nu(n[c])(n[c], r[c]));
    return c => {
        for (const d in l)
            s[d] = l[d](c);
        return s
    }
}
function wv(n, r) {
    const s = []
        , l = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let c = 0; c < r.values.length; c++) {
        const d = r.types[c]
            , f = n.indexes[d][l[d]]
            , p = n.values[f] ?? 0;
        s[c] = p,
            l[d]++
    }
    return s
}
const xv = (n, r) => {
    const s = jt.createTransformer(r)
        , l = xr(n)
        , c = xr(r);
    return l.indexes.var.length === c.indexes.var.length && l.indexes.color.length === c.indexes.color.length && l.indexes.number.length >= c.indexes.number.length ? Ta.has(n) && !c.values.length || Ta.has(r) && !l.values.length ? yv(n, r) : Si(cp(wv(l, c), c.values), s) : Qs(n, r)
}
    ;
function fp(n, r, s) {
    return typeof n == "number" && typeof r == "number" && typeof s == "number" ? Ce(n, r, s) : nu(n)(n, r)
}
const Sv = n => {
    const r = ({ timestamp: s }) => n(s);
    return {
        start: (s = !0) => ye.update(r, s),
        stop: () => Tn(r),
        now: () => Ye.isProcessing ? Ye.timestamp : nt.now()
    }
}
    , dp = (n, r, s = 10) => {
        let l = "";
        const c = Math.max(Math.round(r / s), 2);
        for (let d = 0; d < c; d++)
            l += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${l.substring(0, l.length - 2)})`
    }
    , bs = 2e4;
function ru(n) {
    let r = 0;
    const s = 50;
    let l = n.next(r);
    for (; !l.done && r < bs;)
        r += s,
            l = n.next(r);
    return r >= bs ? 1 / 0 : r
}
function kv(n, r = 100, s) {
    const l = s({
        ...n,
        keyframes: [0, r]
    })
        , c = Math.min(ru(l), bs);
    return {
        type: "keyframes",
        ease: d => l.next(c * d).value / r,
        duration: kt(c)
    }
}
const De = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function Ca(n, r) {
    return n * Math.sqrt(1 - r * r)
}
const Tv = 12;
function Cv(n, r, s) {
    let l = s;
    for (let c = 1; c < Tv; c++)
        l = l - n(l) / r(l);
    return l
}
const ca = .001;
function Ev({ duration: n = De.duration, bounce: r = De.bounce, velocity: s = De.velocity, mass: l = De.mass }) {
    let c, d, f = 1 - r;
    f = $t(De.minDamping, De.maxDamping, f),
        n = $t(De.minDuration, De.maxDuration, kt(n)),
        f < 1 ? (c = g => {
            const y = g * f
                , w = y * n
                , x = y - s
                , C = Ca(g, f)
                , A = Math.exp(-w);
            return ca - x / C * A
        }
            ,
            d = g => {
                const w = g * f * n
                    , x = w * s + s
                    , C = Math.pow(f, 2) * Math.pow(g, 2) * n
                    , A = Math.exp(-w)
                    , R = Ca(Math.pow(g, 2), f);
                return (-c(g) + ca > 0 ? -1 : 1) * ((x - C) * A) / R
            }
        ) : (c = g => {
            const y = Math.exp(-g * n)
                , w = (g - s) * n + 1;
            return -ca + y * w
        }
            ,
            d = g => {
                const y = Math.exp(-g * n)
                    , w = (s - g) * (n * n);
                return y * w
            }
        );
    const p = 5 / n
        , m = Cv(c, d, p);
    if (n = mt(n),
        isNaN(m))
        return {
            stiffness: De.stiffness,
            damping: De.damping,
            duration: n
        };
    {
        const g = Math.pow(m, 2) * l;
        return {
            stiffness: g,
            damping: f * 2 * Math.sqrt(l * g),
            duration: n
        }
    }
}
const Pv = ["duration", "bounce"]
    , Mv = ["stiffness", "damping", "mass"];
function Rd(n, r) {
    return r.some(s => n[s] !== void 0)
}
function Nv(n) {
    let r = {
        velocity: De.velocity,
        stiffness: De.stiffness,
        damping: De.damping,
        mass: De.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!Rd(n, Mv) && Rd(n, Pv))
        if (r.velocity = 0,
            n.visualDuration) {
            const s = n.visualDuration
                , l = 2 * Math.PI / (s * 1.2)
                , c = l * l
                , d = 2 * $t(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
            r = {
                ...r,
                mass: De.mass,
                stiffness: c,
                damping: d
            }
        } else {
            const s = Ev({
                ...n,
                velocity: 0
            });
            r = {
                ...r,
                ...s,
                mass: De.mass
            },
                r.isResolvedFromDuration = !0
        }
    return r
}
function Zs(n = De.visualDuration, r = De.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: r
    } : n;
    let { restSpeed: l, restDelta: c } = s;
    const d = s.keyframes[0]
        , f = s.keyframes[s.keyframes.length - 1]
        , p = {
            done: !1,
            value: d
        }
        , { stiffness: m, damping: g, mass: y, duration: w, velocity: x, isResolvedFromDuration: C } = Nv({
            ...s,
            velocity: -kt(s.velocity || 0)
        })
        , A = x || 0
        , R = g / (2 * Math.sqrt(m * y))
        , L = f - d
        , I = kt(Math.sqrt(m / y))
        , B = Math.abs(L) < 5;
    l || (l = B ? De.restSpeed.granular : De.restSpeed.default),
        c || (c = B ? De.restDelta.granular : De.restDelta.default);
    let O, U, q, se, ae, te;
    if (R < 1)
        q = Ca(I, R),
            se = (A + R * I * L) / q,
            O = b => {
                const me = Math.exp(-R * I * b);
                return f - me * (se * Math.sin(q * b) + L * Math.cos(q * b))
            }
            ,
            ae = R * I * se + L * q,
            te = R * I * L - se * q,
            U = b => Math.exp(-R * I * b) * (ae * Math.sin(q * b) + te * Math.cos(q * b));
    else if (R === 1) {
        O = me => f - Math.exp(-I * me) * (L + (A + I * L) * me);
        const b = A + I * L;
        U = me => Math.exp(-I * me) * (I * b * me - A)
    } else {
        const b = I * Math.sqrt(R * R - 1);
        O = Le => {
            const Fe = Math.exp(-R * I * Le)
                , xe = Math.min(b * Le, 300);
            return f - Fe * ((A + R * I * L) * Math.sinh(xe) + b * L * Math.cosh(xe)) / b
        }
            ;
        const me = (A + R * I * L) / b
            , we = R * I * me - L * b
            , Ve = R * I * L - me * b;
        U = Le => {
            const Fe = Math.exp(-R * I * Le)
                , xe = Math.min(b * Le, 300);
            return Fe * (we * Math.sinh(xe) + Ve * Math.cosh(xe))
        }
    }
    const re = {
        calculatedDuration: C && w || null,
        velocity: b => mt(U(b)),
        next: b => {
            if (!C && R < 1) {
                const we = Math.exp(-R * I * b)
                    , Ve = Math.sin(q * b)
                    , Le = Math.cos(q * b)
                    , Fe = f - we * (se * Ve + L * Le)
                    , xe = mt(we * (ae * Ve + te * Le));
                return p.done = Math.abs(xe) <= l && Math.abs(f - Fe) <= c,
                    p.value = p.done ? f : Fe,
                    p
            }
            const me = O(b);
            if (C)
                p.done = b >= w;
            else {
                const we = mt(U(b));
                p.done = Math.abs(we) <= l && Math.abs(f - me) <= c
            }
            return p.value = p.done ? f : me,
                p
        }
        ,
        toString: () => {
            const b = Math.min(ru(re), bs)
                , me = dp(we => re.next(b * we).value, b, 30);
            return b + "ms " + me
        }
        ,
        toTransition: () => { }
    };
    return re
}
Zs.applyToOptions = n => {
    const r = kv(n, 100, Zs);
    return n.ease = r.ease,
        n.duration = mt(r.duration),
        n.type = "keyframes",
        n
}
    ;
const Av = 5;
function hp(n, r, s) {
    const l = Math.max(r - Av, 0);
    return Gh(s - n(l), r - l)
}
function Ea({ keyframes: n, velocity: r = 0, power: s = .8, timeConstant: l = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: p, max: m, restDelta: g = .5, restSpeed: y }) {
    const w = n[0]
        , x = {
            done: !1,
            value: w
        }
        , C = te => p !== void 0 && te < p || m !== void 0 && te > m
        , A = te => p === void 0 ? m : m === void 0 || Math.abs(p - te) < Math.abs(m - te) ? p : m;
    let R = s * r;
    const L = w + R
        , I = f === void 0 ? L : f(L);
    I !== L && (R = I - w);
    const B = te => -R * Math.exp(-te / l)
        , O = te => I + B(te)
        , U = te => {
            const re = B(te)
                , b = O(te);
            x.done = Math.abs(re) <= g,
                x.value = x.done ? I : b
        }
        ;
    let q, se;
    const ae = te => {
        C(x.value) && (q = te,
            se = Zs({
                keyframes: [x.value, A(x.value)],
                velocity: hp(O, te, x.value),
                damping: c,
                stiffness: d,
                restDelta: g,
                restSpeed: y
            }))
    }
        ;
    return ae(0),
    {
        calculatedDuration: null,
        next: te => {
            let re = !1;
            return !se && q === void 0 && (re = !0,
                U(te),
                ae(te)),
                q !== void 0 && te >= q ? se.next(te - q) : (!re && U(te),
                    x)
        }
    }
}
function Lv(n, r, s) {
    const l = []
        , c = s || kn.mix || fp
        , d = n.length - 1;
    for (let f = 0; f < d; f++) {
        let p = c(n[f], n[f + 1]);
        if (r) {
            const m = Array.isArray(r) ? r[f] || Ct : r;
            p = Si(m, p)
        }
        l.push(p)
    }
    return l
}
function Rv(n, r, { clamp: s = !0, ease: l, mixer: c } = {}) {
    const d = n.length;
    if (Qa(d === r.length),
        d === 1)
        return () => r[0];
    if (d === 2 && r[0] === r[1])
        return () => r[1];
    const f = n[0] === n[1];
    n[0] > n[d - 1] && (n = [...n].reverse(),
        r = [...r].reverse());
    const p = Lv(r, l, c)
        , m = p.length
        , g = y => {
            if (f && y < n[0])
                return r[0];
            let w = 0;
            if (m > 1)
                for (; w < n.length - 2 && !(y < n[w + 1]); w++)
                    ;
            const x = gi(n[w], n[w + 1], y);
            return p[w](x)
        }
        ;
    return s ? y => g($t(n[0], n[d - 1], y)) : g
}
function Dv(n, r) {
    const s = n[n.length - 1];
    for (let l = 1; l <= r; l++) {
        const c = gi(0, r, l);
        n.push(Ce(s, 1, c))
    }
}
function Vv(n) {
    const r = [0];
    return Dv(r, n.length - 1),
        r
}
function jv(n, r) {
    return n.map(s => s * r)
}
function _v(n, r) {
    return n.map(() => r || tp).splice(0, n.length - 1)
}
function pi({ duration: n = 300, keyframes: r, times: s, ease: l = "easeInOut" }) {
    const c = $g(l) ? l.map(Ed) : Ed(l)
        , d = {
            done: !1,
            value: r[0]
        }
        , f = jv(s && s.length === r.length ? s : Vv(r), n)
        , p = Rv(f, r, {
            ease: Array.isArray(c) ? c : _v(r, c)
        });
    return {
        calculatedDuration: n,
        next: m => (d.value = p(m),
            d.done = m >= n,
            d)
    }
}
const Iv = n => n !== null;
function ro(n, { repeat: r, repeatType: s = "loop" }, l, c = 1) {
    const d = n.filter(Iv)
        , p = c < 0 || r && s !== "loop" && r % 2 === 1 ? 0 : d.length - 1;
    return !p || l === void 0 ? d[p] : l
}
const Fv = {
    decay: Ea,
    inertia: Ea,
    tween: pi,
    keyframes: pi,
    spring: Zs
};
function pp(n) {
    typeof n.type == "string" && (n.type = Fv[n.type])
}
class iu {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(r => {
            this.resolve = r
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(r, s) {
        return this.finished.then(r, s)
    }
}
const zv = n => n / 100;
class qs extends iu {
    constructor(r) {
        super(),
            this.state = "idle",
            this.startTime = null,
            this.isStopped = !1,
            this.currentTime = 0,
            this.holdTime = null,
            this.playbackSpeed = 1,
            this.delayState = {
                done: !1,
                value: void 0
            },
            this.stop = () => {
                var l, c;
                const { motionValue: s } = this.options;
                s && s.updatedAt !== nt.now() && this.tick(nt.now()),
                    this.isStopped = !0,
                    this.state !== "idle" && (this.teardown(),
                        (c = (l = this.options).onStop) == null || c.call(l))
            }
            ,
            this.options = r,
            this.initAnimation(),
            this.play(),
            r.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const { options: r } = this;
        pp(r);
        const { type: s = pi, repeat: l = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = r;
        let { keyframes: p } = r;
        const m = s || pi;
        m !== pi && typeof p[0] != "number" && (this.mixKeyframes = Si(zv, fp(p[0], p[1])),
            p = [0, 100]);
        const g = m({
            ...r,
            keyframes: p
        });
        d === "mirror" && (this.mirroredGenerator = m({
            ...r,
            keyframes: [...p].reverse(),
            velocity: -f
        })),
            g.calculatedDuration === null && (g.calculatedDuration = ru(g));
        const { calculatedDuration: y } = g;
        this.calculatedDuration = y,
            this.resolvedDuration = y + c,
            this.totalDuration = this.resolvedDuration * (l + 1) - c,
            this.generator = g
    }
    updateTime(r) {
        const s = Math.round(r - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(r, s = !1) {
        const { generator: l, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: p, calculatedDuration: m } = this;
        if (this.startTime === null)
            return l.next(0);
        const { delay: g = 0, keyframes: y, repeat: w, repeatType: x, repeatDelay: C, type: A, onUpdate: R, finalKeyframe: L } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, r) : this.speed < 0 && (this.startTime = Math.min(r - c / this.speed, this.startTime)),
            s ? this.currentTime = r : this.updateTime(r);
        const I = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
            , B = this.playbackSpeed >= 0 ? I < 0 : I > c;
        this.currentTime = Math.max(I, 0),
            this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let O = this.currentTime
            , U = l;
        if (w) {
            const te = Math.min(this.currentTime, c) / p;
            let re = Math.floor(te)
                , b = te % 1;
            !b && te >= 1 && (b = 1),
                b === 1 && re--,
                re = Math.min(re, w + 1),
                !!(re % 2) && (x === "reverse" ? (b = 1 - b,
                    C && (b -= C / p)) : x === "mirror" && (U = f)),
                O = $t(0, 1, b) * p
        }
        let q;
        B ? (this.delayState.value = y[0],
            q = this.delayState) : q = U.next(O),
            d && !B && (q.value = d(q.value));
        let { done: se } = q;
        !B && m !== null && (se = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const ae = this.holdTime === null && (this.state === "finished" || this.state === "running" && se);
        return ae && A !== Ea && (q.value = ro(y, this.options, L, this.speed)),
            R && R(q.value),
            ae && this.finish(),
            q
    }
    then(r, s) {
        return this.finished.then(r, s)
    }
    get duration() {
        return kt(this.calculatedDuration)
    }
    get iterationDuration() {
        const { delay: r = 0 } = this.options || {};
        return this.duration + kt(r)
    }
    get time() {
        return kt(this.currentTime)
    }
    set time(r) {
        r = mt(r),
            this.currentTime = r,
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = r : this.driver && (this.startTime = this.driver.now() - r / this.playbackSpeed),
            this.driver ? this.driver.start(!1) : (this.startTime = 0,
                this.state = "paused",
                this.holdTime = r,
                this.tick(r))
    }
    getGeneratorVelocity() {
        const r = this.currentTime;
        if (r <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(r);
        const s = this.generator.next(r).value;
        return hp(l => this.generator.next(l).value, r, s)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(r) {
        const s = this.playbackSpeed !== r;
        s && this.driver && this.updateTime(nt.now()),
            this.playbackSpeed = r,
            s && this.driver && (this.time = kt(this.currentTime))
    }
    play() {
        var c, d;
        if (this.isStopped)
            return;
        const { driver: r = Sv, startTime: s } = this.options;
        this.driver || (this.driver = r(f => this.tick(f))),
            (d = (c = this.options).onPlay) == null || d.call(c);
        const l = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
            this.startTime = l) : this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime || (this.startTime = s ?? l),
            this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
            this.holdTime = null,
            this.state = "running",
            this.driver.start()
    }
    pause() {
        this.state = "paused",
            this.updateTime(nt.now()),
            this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
            this.state = "finished",
            this.holdTime = null
    }
    finish() {
        var r, s;
        this.notifyFinished(),
            this.teardown(),
            this.state = "finished",
            (s = (r = this.options).onComplete) == null || s.call(r)
    }
    cancel() {
        var r, s;
        this.holdTime = null,
            this.startTime = 0,
            this.tick(0),
            this.teardown(),
            (s = (r = this.options).onCancel) == null || s.call(r)
    }
    teardown() {
        this.state = "idle",
            this.stopDriver(),
            this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
            this.driver = void 0)
    }
    sample(r) {
        return this.startTime = 0,
            this.tick(r, !0)
    }
    attachTimeline(r) {
        var s;
        return this.options.allowFlatten && (this.options.type = "keyframes",
            this.options.ease = "linear",
            this.initAnimation()),
            (s = this.driver) == null || s.stop(),
            r.observe(this)
    }
}
function Ov(n) {
    for (let r = 1; r < n.length; r++)
        n[r] ?? (n[r] = n[r - 1])
}
const Un = n => n * 180 / Math.PI
    , Pa = n => {
        const r = Un(Math.atan2(n[1], n[0]));
        return Ma(r)
    }
    , Bv = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
        rotate: Pa,
        rotateZ: Pa,
        skewX: n => Un(Math.atan(n[1])),
        skewY: n => Un(Math.atan(n[2])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
    }
    , Ma = n => (n = n % 360,
        n < 0 && (n += 360),
        n)
    , Dd = Pa
    , Vd = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
    , jd = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
    , Uv = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Vd,
        scaleY: jd,
        scale: n => (Vd(n) + jd(n)) / 2,
        rotateX: n => Ma(Un(Math.atan2(n[6], n[5]))),
        rotateY: n => Ma(Un(Math.atan2(-n[2], n[0]))),
        rotateZ: Dd,
        rotate: Dd,
        skewX: n => Un(Math.atan(n[4])),
        skewY: n => Un(Math.atan(n[1])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
    };
function Na(n) {
    return n.includes("scale") ? 1 : 0
}
function Aa(n, r) {
    if (!n || n === "none")
        return Na(r);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let l, c;
    if (s)
        l = Uv,
            c = s;
    else {
        const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        l = Bv,
            c = p
    }
    if (!c)
        return Na(r);
    const d = l[r]
        , f = c[1].split(",").map($v);
    return typeof d == "function" ? d(f) : f[d]
}
const Wv = (n, r) => {
    const { transform: s = "none" } = getComputedStyle(n);
    return Aa(s, r)
}
    ;
function $v(n) {
    return parseFloat(n.trim())
}
const Tr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
    , Cr = new Set(Tr)
    , _d = n => n === kr || n === X
    , Hv = new Set(["x", "y", "z"])
    , Kv = Tr.filter(n => !Hv.has(n));
function Gv(n) {
    const r = [];
    return Kv.forEach(s => {
        const l = n.getValue(s);
        l !== void 0 && (r.push([s, l.get()]),
            l.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
        r
}
const Sn = {
    width: ({ x: n }, { paddingLeft: r = "0", paddingRight: s = "0", boxSizing: l }) => {
        const c = n.max - n.min;
        return l === "border-box" ? c : c - parseFloat(r) - parseFloat(s)
    }
    ,
    height: ({ y: n }, { paddingTop: r = "0", paddingBottom: s = "0", boxSizing: l }) => {
        const c = n.max - n.min;
        return l === "border-box" ? c : c - parseFloat(r) - parseFloat(s)
    }
    ,
    top: (n, { top: r }) => parseFloat(r),
    left: (n, { left: r }) => parseFloat(r),
    bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
    right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
    x: (n, { transform: r }) => Aa(r, "x"),
    y: (n, { transform: r }) => Aa(r, "y")
};
Sn.translateX = Sn.x;
Sn.translateY = Sn.y;
const Wn = new Set;
let La = !1
    , Ra = !1
    , Da = !1;
function mp() {
    if (Ra) {
        const n = Array.from(Wn).filter(l => l.needsMeasurement)
            , r = new Set(n.map(l => l.element))
            , s = new Map;
        r.forEach(l => {
            const c = Gv(l);
            c.length && (s.set(l, c),
                l.render())
        }
        ),
            n.forEach(l => l.measureInitialState()),
            r.forEach(l => {
                l.render();
                const c = s.get(l);
                c && c.forEach(([d, f]) => {
                    var p;
                    (p = l.getValue(d)) == null || p.set(f)
                }
                )
            }
            ),
            n.forEach(l => l.measureEndState()),
            n.forEach(l => {
                l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY)
            }
            )
    }
    Ra = !1,
        La = !1,
        Wn.forEach(n => n.complete(Da)),
        Wn.clear()
}
function yp() {
    Wn.forEach(n => {
        n.readKeyframes(),
            n.needsMeasurement && (Ra = !0)
    }
    )
}
function Xv() {
    Da = !0,
        yp(),
        mp(),
        Da = !1
}
class su {
    constructor(r, s, l, c, d, f = !1) {
        this.state = "pending",
            this.isAsync = !1,
            this.needsMeasurement = !1,
            this.unresolvedKeyframes = [...r],
            this.onComplete = s,
            this.name = l,
            this.motionValue = c,
            this.element = d,
            this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled",
            this.isAsync ? (Wn.add(this),
                La || (La = !0,
                    ye.read(yp),
                    ye.resolveKeyframes(mp))) : (this.readKeyframes(),
                        this.complete())
    }
    readKeyframes() {
        const { unresolvedKeyframes: r, name: s, element: l, motionValue: c } = this;
        if (r[0] === null) {
            const d = c == null ? void 0 : c.get()
                , f = r[r.length - 1];
            if (d !== void 0)
                r[0] = d;
            else if (l && s) {
                const p = l.readValue(s, f);
                p != null && (r[0] = p)
            }
            r[0] === void 0 && (r[0] = f),
                c && d === void 0 && c.set(r[0])
        }
        Ov(r)
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(r = !1) {
        this.state = "complete",
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r),
            Wn.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Wn.delete(this),
            this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Yv = n => n.startsWith("--");
function gp(n, r, s) {
    Yv(r) ? n.style.setProperty(r, s) : n.style[r] = s
}
const Qv = {};
function vp(n, r) {
    const s = Kh(n);
    return () => Qv[r] ?? s()
}
const bv = vp(() => window.ScrollTimeline !== void 0, "scrollTimeline")
    , wp = vp(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }
        , "linearEasing")
    , di = ([n, r, s, l]) => `cubic-bezier(${n}, ${r}, ${s}, ${l})`
    , Id = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: di([0, .65, .55, 1]),
        circOut: di([.55, 0, 1, .45]),
        backIn: di([.31, .01, .66, -.59]),
        backOut: di([.33, 1.53, .69, .99])
    };
function xp(n, r) {
    if (n)
        return typeof n == "function" ? wp() ? dp(n, r) : "ease-out" : np(n) ? di(n) : Array.isArray(n) ? n.map(s => xp(s, r) || Id.easeOut) : Id[n]
}
function Zv(n, r, s, { delay: l = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: p = "easeOut", times: m } = {}, g = void 0) {
    const y = {
        [r]: s
    };
    m && (y.offset = m);
    const w = xp(p, c);
    Array.isArray(w) && (y.easing = w);
    const x = {
        delay: l,
        duration: c,
        easing: Array.isArray(w) ? "linear" : w,
        fill: "both",
        iterations: d + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return g && (x.pseudoElement = g),
        n.animate(y, x)
}
function Sp(n) {
    return typeof n == "function" && "applyToOptions" in n
}
function qv({ type: n, ...r }) {
    return Sp(n) && wp() ? n.applyToOptions(r) : (r.duration ?? (r.duration = 300),
        r.ease ?? (r.ease = "easeOut"),
        r)
}
class kp extends iu {
    constructor(r) {
        if (super(),
            this.finishedTime = null,
            this.isStopped = !1,
            this.manualStartTime = null,
            !r)
            return;
        const { element: s, name: l, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: p, onComplete: m } = r;
        this.isPseudoElement = !!d,
            this.allowFlatten = f,
            this.options = r,
            Qa(typeof r.type != "string");
        const g = qv(r);
        this.animation = Zv(s, l, c, g, d),
            g.autoplay === !1 && this.animation.pause(),
            this.animation.onfinish = () => {
                if (this.finishedTime = this.time,
                    !d) {
                    const y = ro(c, this.options, p, this.speed);
                    this.updateMotionValue && this.updateMotionValue(y),
                        gp(s, l, y),
                        this.animation.cancel()
                }
                m == null || m(),
                    this.notifyFinished()
            }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
            this.animation.play(),
            this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var r, s;
        (s = (r = this.animation).finish) == null || s.call(r)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch { }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const { state: r } = this;
        r === "idle" || r === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var s, l, c;
        const r = (s = this.options) == null ? void 0 : s.element;
        !this.isPseudoElement && (r != null && r.isConnected) && ((c = (l = this.animation).commitStyles) == null || c.call(l))
    }
    get duration() {
        var s, l;
        const r = ((l = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : l.call(s).duration) || 0;
        return kt(Number(r))
    }
    get iterationDuration() {
        const { delay: r = 0 } = this.options || {};
        return this.duration + kt(r)
    }
    get time() {
        return kt(Number(this.animation.currentTime) || 0)
    }
    set time(r) {
        const s = this.finishedTime !== null;
        this.manualStartTime = null,
            this.finishedTime = null,
            this.animation.currentTime = mt(r),
            s && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(r) {
        r < 0 && (this.finishedTime = null),
            this.animation.playbackRate = r
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(r) {
        this.manualStartTime = this.animation.startTime = r
    }
    attachTimeline({ timeline: r, rangeStart: s, rangeEnd: l, observe: c }) {
        var d;
        return this.allowFlatten && ((d = this.animation.effect) == null || d.updateTiming({
            easing: "linear"
        })),
            this.animation.onfinish = null,
            r && bv() ? (this.animation.timeline = r,
                s && (this.animation.rangeStart = s),
                l && (this.animation.rangeEnd = l),
                Ct) : c(this)
    }
}
const Tp = {
    anticipate: qh,
    backInOut: Zh,
    circInOut: ep
};
function Jv(n) {
    return n in Tp
}
function e0(n) {
    typeof n.ease == "string" && Jv(n.ease) && (n.ease = Tp[n.ease])
}
const fa = 10;
class t0 extends kp {
    constructor(r) {
        e0(r),
            pp(r),
            super(r),
            r.startTime !== void 0 && r.autoplay !== !1 && (this.startTime = r.startTime),
            this.options = r
    }
    updateMotionValue(r) {
        const { motionValue: s, onUpdate: l, onComplete: c, element: d, ...f } = this.options;
        if (!s)
            return;
        if (r !== void 0) {
            s.set(r);
            return
        }
        const p = new qs({
            ...f,
            autoplay: !1
        })
            , m = Math.max(fa, nt.now() - this.startTime)
            , g = $t(0, fa, m - fa)
            , y = p.sample(m).value
            , { name: w } = this.options;
        d && w && gp(d, w, y),
            s.setWithVelocity(p.sample(Math.max(0, m - g)).value, y, g),
            p.stop()
    }
}
const Fd = (n, r) => r === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (jt.test(n) || n === "0") && !n.startsWith("url("));
function n0(n) {
    const r = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== r)
            return !0
}
function r0(n, r, s, l) {
    const c = n[0];
    if (c === null)
        return !1;
    if (r === "display" || r === "visibility")
        return !0;
    const d = n[n.length - 1]
        , f = Fd(c, r)
        , p = Fd(d, r);
    return !f || !p ? !1 : n0(n) || (s === "spring" || Sp(s)) && l
}
function Va(n) {
    n.duration = 0,
        n.type = "keyframes"
}
const Cp = new Set(["opacity", "clipPath", "filter", "transform"])
    , i0 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function s0(n) {
    for (let r = 0; r < n.length; r++)
        if (typeof n[r] == "string" && i0.test(n[r]))
            return !0;
    return !1
}
const o0 = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
    , l0 = Kh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function a0(n) {
    var w;
    const { motionValue: r, name: s, repeatDelay: l, repeatType: c, damping: d, type: f, keyframes: p } = n;
    if (!(((w = r == null ? void 0 : r.owner) == null ? void 0 : w.current) instanceof HTMLElement))
        return !1;
    const { onUpdate: g, transformTemplate: y } = r.owner.getProps();
    return l0() && s && (Cp.has(s) || o0.has(s) && s0(p)) && (s !== "transform" || !y) && !g && !l && c !== "mirror" && d !== 0 && f !== "inertia"
}
const u0 = 40;
class c0 extends iu {
    constructor({ autoplay: r = !0, delay: s = 0, type: l = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: f = "loop", keyframes: p, name: m, motionValue: g, element: y, ...w }) {
        var A;
        super(),
            this.stop = () => {
                var R, L;
                this._animation && (this._animation.stop(),
                    (R = this.stopTimeline) == null || R.call(this)),
                    (L = this.keyframeResolver) == null || L.cancel()
            }
            ,
            this.createdAt = nt.now();
        const x = {
            autoplay: r,
            delay: s,
            type: l,
            repeat: c,
            repeatDelay: d,
            repeatType: f,
            name: m,
            motionValue: g,
            element: y,
            ...w
        }
            , C = (y == null ? void 0 : y.KeyframeResolver) || su;
        this.keyframeResolver = new C(p, (R, L, I) => this.onKeyframesResolved(R, L, x, !I), m, g, y),
            (A = this.keyframeResolver) == null || A.scheduleResolve()
    }
    onKeyframesResolved(r, s, l, c) {
        var I, B;
        this.keyframeResolver = void 0;
        const { name: d, type: f, velocity: p, delay: m, isHandoff: g, onUpdate: y } = l;
        this.resolvedAt = nt.now();
        let w = !0;
        r0(r, d, f, p) || (w = !1,
            (kn.instantAnimations || !m) && (y == null || y(ro(r, l, s))),
            r[0] = r[r.length - 1],
            Va(l),
            l.repeat = 0);
        const C = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > u0 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s,
            ...l,
            keyframes: r
        }
            , A = w && !g && a0(C)
            , R = (B = (I = C.motionValue) == null ? void 0 : I.owner) == null ? void 0 : B.current;
        let L;
        if (A)
            try {
                L = new t0({
                    ...C,
                    element: R
                })
            } catch {
                L = new qs(C)
            }
        else
            L = new qs(C);
        L.finished.then(() => {
            this.notifyFinished()
        }
        ).catch(Ct),
            this.pendingTimeline && (this.stopTimeline = L.attachTimeline(this.pendingTimeline),
                this.pendingTimeline = void 0),
            this._animation = L
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(r, s) {
        return this.finished.finally(r).then(() => { }
        )
    }
    get animation() {
        var r;
        return this._animation || ((r = this.keyframeResolver) == null || r.resume(),
            Xv()),
            this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(r) {
        this.animation.time = r
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(r) {
        this.animation.speed = r
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(r) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(r) : this.pendingTimeline = r,
            () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var r;
        this._animation && this.animation.cancel(),
            (r = this.keyframeResolver) == null || r.cancel()
    }
}
function Ep(n, r, s, l = 0, c = 1) {
    const d = Array.from(n).sort((g, y) => g.sortNodePosition(y)).indexOf(r)
        , f = n.size
        , p = (f - 1) * l;
    return typeof s == "function" ? s(d, f) : c === 1 ? d * l : p - d * l
}
const f0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function d0(n) {
    const r = f0.exec(n);
    if (!r)
        return [,];
    const [, s, l, c] = r;
    return [`--${s ?? l}`, c]
}
function Pp(n, r, s = 1) {
    const [l, c] = d0(n);
    if (!l)
        return;
    const d = window.getComputedStyle(r).getPropertyValue(l);
    if (d) {
        const f = d.trim();
        return Wh(f) ? parseFloat(f) : f
    }
    return Ja(c) ? Pp(c, r, s + 1) : c
}
const h0 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
    , p0 = n => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
    , m0 = {
        type: "keyframes",
        duration: .8
    }
    , y0 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
    , g0 = (n, { keyframes: r }) => r.length > 2 ? m0 : Cr.has(n) ? n.startsWith("scale") ? p0(r[1]) : h0 : y0;
function Mp(n, r) {
    if (n != null && n.inherit && r) {
        const { inherit: s, ...l } = n;
        return {
            ...r,
            ...l
        }
    }
    return n
}
function ou(n, r) {
    const s = (n == null ? void 0 : n[r]) ?? (n == null ? void 0 : n.default) ?? n;
    return s !== n ? Mp(s, n) : s
}
const v0 = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function w0(n) {
    for (const r in n)
        if (!v0.has(r))
            return !0;
    return !1
}
const lu = (n, r, s, l = {}, c, d) => f => {
    const p = ou(l, n) || {}
        , m = p.delay || l.delay || 0;
    let { elapsed: g = 0 } = l;
    g = g - mt(m);
    const y = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...p,
        delay: -g,
        onUpdate: x => {
            r.set(x),
                p.onUpdate && p.onUpdate(x)
        }
        ,
        onComplete: () => {
            f(),
                p.onComplete && p.onComplete()
        }
        ,
        name: n,
        motionValue: r,
        element: d ? void 0 : c
    };
    w0(p) || Object.assign(y, g0(n, y)),
        y.duration && (y.duration = mt(y.duration)),
        y.repeatDelay && (y.repeatDelay = mt(y.repeatDelay)),
        y.from !== void 0 && (y.keyframes[0] = y.from);
    let w = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Va(y),
        y.delay === 0 && (w = !0)),
        (kn.instantAnimations || kn.skipAnimations || c != null && c.shouldSkipAnimations) && (w = !0,
            Va(y),
            y.delay = 0),
        y.allowFlatten = !p.type && !p.ease,
        w && !d && r.get() !== void 0) {
        const x = ro(y.keyframes, p);
        if (x !== void 0) {
            ye.update(() => {
                y.onUpdate(x),
                    y.onComplete()
            }
            );
            return
        }
    }
    return p.isSync ? new qs(y) : new c0(y)
}
    ;
function zd(n) {
    const r = [{}, {}];
    return n == null || n.values.forEach((s, l) => {
        r[0][l] = s.get(),
            r[1][l] = s.getVelocity()
    }
    ),
        r
}
function au(n, r, s, l) {
    if (typeof r == "function") {
        const [c, d] = zd(l);
        r = r(s !== void 0 ? s : n.custom, c, d)
    }
    if (typeof r == "string" && (r = n.variants && n.variants[r]),
        typeof r == "function") {
        const [c, d] = zd(l);
        r = r(s !== void 0 ? s : n.custom, c, d)
    }
    return r
}
function $n(n, r, s) {
    const l = n.getProps();
    return au(l, r, s !== void 0 ? s : l.custom, n)
}
const Np = new Set(["width", "height", "top", "left", "right", "bottom", ...Tr])
    , Od = 30
    , x0 = n => !isNaN(parseFloat(n));
class S0 {
    constructor(r, s = {}) {
        this.canTrackVelocity = null,
            this.events = {},
            this.updateAndNotify = l => {
                var d;
                const c = nt.now();
                if (this.updatedAt !== c && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(l),
                    this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
                        this.dependents))
                    for (const f of this.dependents)
                        f.dirty()
            }
            ,
            this.hasAnimated = !1,
            this.setCurrent(r),
            this.owner = s.owner
    }
    setCurrent(r) {
        this.current = r,
            this.updatedAt = nt.now(),
            this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = x0(this.current))
    }
    setPrevFrameValue(r = this.current) {
        this.prevFrameValue = r,
            this.prevUpdatedAt = this.updatedAt
    }
    onChange(r) {
        return this.on("change", r)
    }
    on(r, s) {
        this.events[r] || (this.events[r] = new ba);
        const l = this.events[r].add(s);
        return r === "change" ? () => {
            l(),
                ye.read(() => {
                    this.events.change.getSize() || this.stop()
                }
                )
        }
            : l
    }
    clearListeners() {
        for (const r in this.events)
            this.events[r].clear()
    }
    attach(r, s) {
        this.passiveEffect = r,
            this.stopPassiveEffect = s
    }
    set(r) {
        this.passiveEffect ? this.passiveEffect(r, this.updateAndNotify) : this.updateAndNotify(r)
    }
    setWithVelocity(r, s, l) {
        this.set(s),
            this.prev = void 0,
            this.prevFrameValue = r,
            this.prevUpdatedAt = this.updatedAt - l
    }
    jump(r, s = !0) {
        this.updateAndNotify(r),
            this.prev = r,
            this.prevUpdatedAt = this.prevFrameValue = void 0,
            s && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var r;
        (r = this.events.change) == null || r.notify(this.current)
    }
    addDependent(r) {
        this.dependents || (this.dependents = new Set),
            this.dependents.add(r)
    }
    removeDependent(r) {
        this.dependents && this.dependents.delete(r)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const r = nt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > Od)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Od);
        return Gh(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(r) {
        return this.stop(),
            new Promise(s => {
                this.hasAnimated = !0,
                    this.animation = r(s),
                    this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
            }
            )
    }
    stop() {
        this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var r, s;
        (r = this.dependents) == null || r.clear(),
            (s = this.events.destroy) == null || s.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Sr(n, r) {
    return new S0(n, r)
}
const ja = n => Array.isArray(n);
function k0(n, r, s) {
    n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Sr(s))
}
function T0(n) {
    return ja(n) ? n[n.length - 1] || 0 : n
}
function C0(n, r) {
    const s = $n(n, r);
    let { transitionEnd: l = {}, transition: c = {}, ...d } = s || {};
    d = {
        ...d,
        ...l
    };
    for (const f in d) {
        const p = T0(d[f]);
        k0(n, f, p)
    }
}
const Qe = n => !!(n && n.getVelocity);
function E0(n) {
    return !!(Qe(n) && n.add)
}
function _a(n, r) {
    const s = n.getValue("willChange");
    if (E0(s))
        return s.add(r);
    if (!s && kn.WillChange) {
        const l = new kn.WillChange("auto");
        n.addValue("willChange", l),
            l.add(r)
    }
}
function uu(n) {
    return n.replace(/([A-Z])/g, r => `-${r.toLowerCase()}`)
}
const P0 = "framerAppearId"
    , Ap = "data-" + uu(P0);
function Lp(n) {
    return n.props[Ap]
}
function M0({ protectedKeys: n, needsAnimating: r }, s) {
    const l = n.hasOwnProperty(s) && r[s] !== !0;
    return r[s] = !1,
        l
}
function Rp(n, r, { delay: s = 0, transitionOverride: l, type: c } = {}) {
    let { transition: d, transitionEnd: f, ...p } = r;
    const m = n.getDefaultTransition();
    d = d ? Mp(d, m) : m;
    const g = d == null ? void 0 : d.reduceMotion;
    l && (d = l);
    const y = []
        , w = c && n.animationState && n.animationState.getState()[c];
    for (const x in p) {
        const C = n.getValue(x, n.latestValues[x] ?? null)
            , A = p[x];
        if (A === void 0 || w && M0(w, x))
            continue;
        const R = {
            delay: s,
            ...ou(d || {}, x)
        }
            , L = C.get();
        if (L !== void 0 && !C.isAnimating() && !Array.isArray(A) && A === L && !R.velocity) {
            ye.update(() => C.set(A));
            continue
        }
        let I = !1;
        if (window.MotionHandoffAnimation) {
            const U = Lp(n);
            if (U) {
                const q = window.MotionHandoffAnimation(U, x, ye);
                q !== null && (R.startTime = q,
                    I = !0)
            }
        }
        _a(n, x);
        const B = g ?? n.shouldReduceMotion;
        C.start(lu(x, C, A, B && Np.has(x) ? {
            type: !1
        } : R, n, I));
        const O = C.animation;
        O && y.push(O)
    }
    if (f) {
        const x = () => ye.update(() => {
            f && C0(n, f)
        }
        );
        y.length ? Promise.all(y).then(x) : x()
    }
    return y
}
function Ia(n, r, s = {}) {
    var m;
    const l = $n(n, r, s.type === "exit" ? (m = n.presenceContext) == null ? void 0 : m.custom : void 0);
    let { transition: c = n.getDefaultTransition() || {} } = l || {};
    s.transitionOverride && (c = s.transitionOverride);
    const d = l ? () => Promise.all(Rp(n, l, s)) : () => Promise.resolve()
        , f = n.variantChildren && n.variantChildren.size ? (g = 0) => {
            const { delayChildren: y = 0, staggerChildren: w, staggerDirection: x } = c;
            return N0(n, r, g, y, w, x, s)
        }
            : () => Promise.resolve()
        , { when: p } = c;
    if (p) {
        const [g, y] = p === "beforeChildren" ? [d, f] : [f, d];
        return g().then(() => y())
    } else
        return Promise.all([d(), f(s.delay)])
}
function N0(n, r, s = 0, l = 0, c = 0, d = 1, f) {
    const p = [];
    for (const m of n.variantChildren)
        m.notify("AnimationStart", r),
            p.push(Ia(m, r, {
                ...f,
                delay: s + (typeof l == "function" ? 0 : l) + Ep(n.variantChildren, m, l, c, d)
            }).then(() => m.notify("AnimationComplete", r)));
    return Promise.all(p)
}
function A0(n, r, s = {}) {
    n.notify("AnimationStart", r);
    let l;
    if (Array.isArray(r)) {
        const c = r.map(d => Ia(n, d, s));
        l = Promise.all(c)
    } else if (typeof r == "string")
        l = Ia(n, r, s);
    else {
        const c = typeof r == "function" ? $n(n, r, s.custom) : r;
        l = Promise.all(Rp(n, c, s))
    }
    return l.then(() => {
        n.notify("AnimationComplete", r)
    }
    )
}
const L0 = {
    test: n => n === "auto",
    parse: n => n
}
    , Dp = n => r => r.test(n)
    , Vp = [kr, X, Wt, vn, nv, tv, L0]
    , Bd = n => Vp.find(Dp(n));
function R0(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Hh(n) : !0
}
const D0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function V0(n) {
    const [r, s] = n.slice(0, -1).split("(");
    if (r === "drop-shadow")
        return n;
    const [l] = s.match(eu) || [];
    if (!l)
        return n;
    const c = s.replace(l, "");
    let d = D0.has(r) ? 1 : 0;
    return l !== s && (d *= 100),
        r + "(" + d + c + ")"
}
const j0 = /\b([a-z-]*)\(.*?\)/gu
    , Fa = {
        ...jt,
        getAnimatableNone: n => {
            const r = n.match(j0);
            return r ? r.map(V0).join(" ") : n
        }
    }
    , za = {
        ...jt,
        getAnimatableNone: n => {
            const r = jt.parse(n);
            return jt.createTransformer(n)(r.map(l => typeof l == "number" ? 0 : typeof l == "object" ? {
                ...l,
                alpha: 1
            } : l))
        }
    }
    , Ud = {
        ...kr,
        transform: Math.round
    }
    , _0 = {
        rotate: vn,
        rotateX: vn,
        rotateY: vn,
        rotateZ: vn,
        scale: Fs,
        scaleX: Fs,
        scaleY: Fs,
        scaleZ: Fs,
        skew: vn,
        skewX: vn,
        skewY: vn,
        distance: X,
        translateX: X,
        translateY: X,
        translateZ: X,
        x: X,
        y: X,
        z: X,
        perspective: X,
        transformPerspective: X,
        opacity: vi,
        originX: Md,
        originY: Md,
        originZ: X
    }
    , cu = {
        borderWidth: X,
        borderTopWidth: X,
        borderRightWidth: X,
        borderBottomWidth: X,
        borderLeftWidth: X,
        borderRadius: X,
        borderTopLeftRadius: X,
        borderTopRightRadius: X,
        borderBottomRightRadius: X,
        borderBottomLeftRadius: X,
        width: X,
        maxWidth: X,
        height: X,
        maxHeight: X,
        top: X,
        right: X,
        bottom: X,
        left: X,
        inset: X,
        insetBlock: X,
        insetBlockStart: X,
        insetBlockEnd: X,
        insetInline: X,
        insetInlineStart: X,
        insetInlineEnd: X,
        padding: X,
        paddingTop: X,
        paddingRight: X,
        paddingBottom: X,
        paddingLeft: X,
        paddingBlock: X,
        paddingBlockStart: X,
        paddingBlockEnd: X,
        paddingInline: X,
        paddingInlineStart: X,
        paddingInlineEnd: X,
        margin: X,
        marginTop: X,
        marginRight: X,
        marginBottom: X,
        marginLeft: X,
        marginBlock: X,
        marginBlockStart: X,
        marginBlockEnd: X,
        marginInline: X,
        marginInlineStart: X,
        marginInlineEnd: X,
        fontSize: X,
        backgroundPositionX: X,
        backgroundPositionY: X,
        ..._0,
        zIndex: Ud,
        fillOpacity: vi,
        strokeOpacity: vi,
        numOctaves: Ud
    }
    , I0 = {
        ...cu,
        color: Oe,
        backgroundColor: Oe,
        outlineColor: Oe,
        fill: Oe,
        stroke: Oe,
        borderColor: Oe,
        borderTopColor: Oe,
        borderRightColor: Oe,
        borderBottomColor: Oe,
        borderLeftColor: Oe,
        filter: Fa,
        WebkitFilter: Fa,
        mask: za,
        WebkitMask: za
    }
    , jp = n => I0[n]
    , F0 = new Set([Fa, za]);
function _p(n, r) {
    let s = jp(n);
    return F0.has(s) || (s = jt),
        s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
}
const z0 = new Set(["auto", "none", "0"]);
function O0(n, r, s) {
    let l = 0, c;
    for (; l < n.length && !c;) {
        const d = n[l];
        typeof d == "string" && !z0.has(d) && xr(d).values.length && (c = n[l]),
            l++
    }
    if (c && s)
        for (const d of r)
            n[d] = _p(s, c)
}
class B0 extends su {
    constructor(r, s, l, c, d) {
        super(r, s, l, c, d, !0)
    }
    readKeyframes() {
        const { unresolvedKeyframes: r, element: s, name: l } = this;
        if (!s || !s.current)
            return;
        super.readKeyframes();
        for (let y = 0; y < r.length; y++) {
            let w = r[y];
            if (typeof w == "string" && (w = w.trim(),
                Ja(w))) {
                const x = Pp(w, s.current);
                x !== void 0 && (r[y] = x),
                    y === r.length - 1 && (this.finalKeyframe = w)
            }
        }
        if (this.resolveNoneKeyframes(),
            !Np.has(l) || r.length !== 2)
            return;
        const [c, d] = r
            , f = Bd(c)
            , p = Bd(d)
            , m = Pd(c)
            , g = Pd(d);
        if (m !== g && Sn[l]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== p)
            if (_d(f) && _d(p))
                for (let y = 0; y < r.length; y++) {
                    const w = r[y];
                    typeof w == "string" && (r[y] = parseFloat(w))
                }
            else
                Sn[l] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: r, name: s } = this
            , l = [];
        for (let c = 0; c < r.length; c++)
            (r[c] === null || R0(r[c])) && l.push(c);
        l.length && O0(r, l, s)
    }
    measureInitialState() {
        const { element: r, unresolvedKeyframes: s, name: l } = this;
        if (!r || !r.current)
            return;
        l === "height" && (this.suspendedScrollY = window.pageYOffset),
            this.measuredOrigin = Sn[l](r.measureViewportBox(), window.getComputedStyle(r.current)),
            s[0] = this.measuredOrigin;
        const c = s[s.length - 1];
        c !== void 0 && r.getValue(l, c).jump(c, !1)
    }
    measureEndState() {
        var p;
        const { element: r, name: s, unresolvedKeyframes: l } = this;
        if (!r || !r.current)
            return;
        const c = r.getValue(s);
        c && c.jump(this.measuredOrigin, !1);
        const d = l.length - 1
            , f = l[d];
        l[d] = Sn[s](r.measureViewportBox(), window.getComputedStyle(r.current)),
            f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
            (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach(([m, g]) => {
                r.getValue(m).set(g)
            }
            ),
            this.resolveNoneKeyframes()
    }
}
function Ip(n, r, s) {
    if (n == null)
        return [];
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let l = document;
        const c = (s == null ? void 0 : s[n]) ?? l.querySelectorAll(n);
        return c ? Array.from(c) : []
    }
    return Array.from(n).filter(l => l != null)
}
const Fp = (n, r) => r && typeof n == "number" ? r.transform(n) : n;
function U0(n) {
    return $h(n) && "offsetHeight" in n && !("ownerSVGElement" in n)
}
const { schedule: fu } = rp(queueMicrotask, !1)
    , Vt = {
        x: !1,
        y: !1
    };
function zp() {
    return Vt.x || Vt.y
}
function W0(n) {
    return n === "x" || n === "y" ? Vt[n] ? null : (Vt[n] = !0,
        () => {
            Vt[n] = !1
        }
    ) : Vt.x || Vt.y ? null : (Vt.x = Vt.y = !0,
        () => {
            Vt.x = Vt.y = !1
        }
    )
}
function Op(n, r) {
    const s = Ip(n)
        , l = new AbortController
        , c = {
            passive: !0,
            ...r,
            signal: l.signal
        };
    return [s, c, () => l.abort()]
}
function $0(n) {
    return !(n.pointerType === "touch" || zp())
}
function H0(n, r, s = {}) {
    const [l, c, d] = Op(n, s);
    return l.forEach(f => {
        let p = !1, m = !1, g;
        const y = () => {
            f.removeEventListener("pointerleave", A)
        }
            , w = L => {
                g && (g(L),
                    g = void 0),
                    y()
            }
            , x = L => {
                p = !1,
                    window.removeEventListener("pointerup", x),
                    window.removeEventListener("pointercancel", x),
                    m && (m = !1,
                        w(L))
            }
            , C = () => {
                p = !0,
                    window.addEventListener("pointerup", x, c),
                    window.addEventListener("pointercancel", x, c)
            }
            , A = L => {
                if (L.pointerType !== "touch") {
                    if (p) {
                        m = !0;
                        return
                    }
                    w(L)
                }
            }
            , R = L => {
                if (!$0(L))
                    return;
                m = !1;
                const I = r(f, L);
                typeof I == "function" && (g = I,
                    f.addEventListener("pointerleave", A, c))
            }
            ;
        f.addEventListener("pointerenter", R, c),
            f.addEventListener("pointerdown", C, c)
    }
    ),
        d
}
const Bp = (n, r) => r ? n === r ? !0 : Bp(n, r.parentElement) : !1
    , du = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
    , K0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function G0(n) {
    return K0.has(n.tagName) || n.isContentEditable === !0
}
const X0 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Y0(n) {
    return X0.has(n.tagName) || n.isContentEditable === !0
}
const Ws = new WeakSet;
function Wd(n) {
    return r => {
        r.key === "Enter" && n(r)
    }
}
function da(n, r) {
    n.dispatchEvent(new PointerEvent("pointer" + r, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const Q0 = (n, r) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const l = Wd(() => {
        if (Ws.has(s))
            return;
        da(s, "down");
        const c = Wd(() => {
            da(s, "up")
        }
        )
            , d = () => da(s, "cancel");
        s.addEventListener("keyup", c, r),
            s.addEventListener("blur", d, r)
    }
    );
    s.addEventListener("keydown", l, r),
        s.addEventListener("blur", () => s.removeEventListener("keydown", l), r)
}
    ;
function $d(n) {
    return du(n) && !zp()
}
const Hd = new WeakSet;
function b0(n, r, s = {}) {
    const [l, c, d] = Op(n, s)
        , f = p => {
            const m = p.currentTarget;
            if (!$d(p) || Hd.has(p))
                return;
            Ws.add(m),
                s.stopPropagation && Hd.add(p);
            const g = r(m, p)
                , y = (C, A) => {
                    window.removeEventListener("pointerup", w),
                        window.removeEventListener("pointercancel", x),
                        Ws.has(m) && Ws.delete(m),
                        $d(C) && typeof g == "function" && g(C, {
                            success: A
                        })
                }
                , w = C => {
                    y(C, m === window || m === document || s.useGlobalTarget || Bp(m, C.target))
                }
                , x = C => {
                    y(C, !1)
                }
                ;
            window.addEventListener("pointerup", w, c),
                window.addEventListener("pointercancel", x, c)
        }
        ;
    return l.forEach(p => {
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
            U0(p) && (p.addEventListener("focus", g => Q0(g, c)),
                !G0(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }
    ),
        d
}
function hu(n) {
    return $h(n) && "ownerSVGElement" in n
}
const $s = new WeakMap;
let wn;
const Up = (n, r, s) => (l, c) => c && c[0] ? c[0][n + "Size"] : hu(l) && "getBBox" in l ? l.getBBox()[r] : l[s]
    , Z0 = Up("inline", "width", "offsetWidth")
    , q0 = Up("block", "height", "offsetHeight");
function J0({ target: n, borderBoxSize: r }) {
    var s;
    (s = $s.get(n)) == null || s.forEach(l => {
        l(n, {
            get width() {
                return Z0(n, r)
            },
            get height() {
                return q0(n, r)
            }
        })
    }
    )
}
function e1(n) {
    n.forEach(J0)
}
function t1() {
    typeof ResizeObserver > "u" || (wn = new ResizeObserver(e1))
}
function n1(n, r) {
    wn || t1();
    const s = Ip(n);
    return s.forEach(l => {
        let c = $s.get(l);
        c || (c = new Set,
            $s.set(l, c)),
            c.add(r),
            wn == null || wn.observe(l)
    }
    ),
        () => {
            s.forEach(l => {
                const c = $s.get(l);
                c == null || c.delete(r),
                    c != null && c.size || wn == null || wn.unobserve(l)
            }
            )
        }
}
const Hs = new Set;
let vr;
function r1() {
    vr = () => {
        const n = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Hs.forEach(r => r(n))
    }
        ,
        window.addEventListener("resize", vr)
}
function i1(n) {
    return Hs.add(n),
        vr || r1(),
        () => {
            Hs.delete(n),
                !Hs.size && typeof vr == "function" && (window.removeEventListener("resize", vr),
                    vr = void 0)
        }
}
function Kd(n, r) {
    return typeof n == "function" ? i1(n) : n1(n, r)
}
function s1(n) {
    return hu(n) && n.tagName === "svg"
}
const o1 = [...Vp, Oe, jt]
    , l1 = n => o1.find(Dp(n))
    , Gd = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    })
    , wr = () => ({
        x: Gd(),
        y: Gd()
    })
    , Xd = () => ({
        min: 0,
        max: 0
    })
    , We = () => ({
        x: Xd(),
        y: Xd()
    })
    , a1 = new WeakMap;
function io(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function wi(n) {
    return typeof n == "string" || Array.isArray(n)
}
const pu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
    , mu = ["initial", ...pu];
function so(n) {
    return io(n.animate) || mu.some(r => wi(n[r]))
}
function Wp(n) {
    return !!(so(n) || n.variants)
}
function u1(n, r, s) {
    for (const l in r) {
        const c = r[l]
            , d = s[l];
        if (Qe(c))
            n.addValue(l, c);
        else if (Qe(d))
            n.addValue(l, Sr(c, {
                owner: n
            }));
        else if (d !== c)
            if (n.hasValue(l)) {
                const f = n.getValue(l);
                f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c)
            } else {
                const f = n.getStaticValue(l);
                n.addValue(l, Sr(f !== void 0 ? f : c, {
                    owner: n
                }))
            }
    }
    for (const l in s)
        r[l] === void 0 && n.removeValue(l);
    return r
}
const Oa = {
    current: null
}
    , $p = {
        current: !1
    }
    , c1 = typeof window < "u";
function f1() {
    if ($p.current = !0,
        !!c1)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
                , r = () => Oa.current = n.matches;
            n.addEventListener("change", r),
                r()
        } else
            Oa.current = !1
}
const Yd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Js = {};
function Hp(n) {
    Js = n
}
function d1() {
    return Js
}
class h1 {
    scrapeMotionValuesFromProps(r, s, l) {
        return {}
    }
    constructor({ parent: r, props: s, presenceContext: l, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: f, visualState: p }, m = {}) {
        this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.shouldSkipAnimations = !1,
            this.values = new Map,
            this.KeyframeResolver = su,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.hasBeenMounted = !1,
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.renderScheduledAt = 0,
            this.scheduleRender = () => {
                const C = nt.now();
                this.renderScheduledAt < C && (this.renderScheduledAt = C,
                    ye.render(this.render, !1, !0))
            }
            ;
        const { latestValues: g, renderState: y } = p;
        this.latestValues = g,
            this.baseTarget = {
                ...g
            },
            this.initialValues = s.initial ? {
                ...g
            } : {},
            this.renderState = y,
            this.parent = r,
            this.props = s,
            this.presenceContext = l,
            this.depth = r ? r.depth + 1 : 0,
            this.reducedMotionConfig = c,
            this.skipAnimationsConfig = d,
            this.options = m,
            this.blockInitialAnimation = !!f,
            this.isControllingVariants = so(s),
            this.isVariantNode = Wp(s),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(r && r.current);
        const { willChange: w, ...x } = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const C in x) {
            const A = x[C];
            g[C] !== void 0 && Qe(A) && A.set(g[C])
        }
    }
    mount(r) {
        var s, l;
        if (this.hasBeenMounted)
            for (const c in this.initialValues)
                (s = this.values.get(c)) == null || s.jump(this.initialValues[c]),
                    this.latestValues[c] = this.initialValues[c];
        this.current = r,
            a1.set(r, this),
            this.projection && !this.projection.instance && this.projection.mount(r),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((c, d) => this.bindToMotionValue(d, c)),
            this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : ($p.current || f1(),
                this.shouldReduceMotion = Oa.current),
            this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
            (l = this.parent) == null || l.addChild(this),
            this.update(this.props, this.presenceContext),
            this.hasBeenMounted = !0
    }
    unmount() {
        var r;
        this.projection && this.projection.unmount(),
            Tn(this.notifyUpdate),
            Tn(this.render),
            this.valueSubscriptions.forEach(s => s()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            (r = this.parent) == null || r.removeChild(this);
        for (const s in this.events)
            this.events[s].clear();
        for (const s in this.features) {
            const l = this.features[s];
            l && (l.unmount(),
                l.isMounted = !1)
        }
        this.current = null
    }
    addChild(r) {
        this.children.add(r),
            this.enteringChildren ?? (this.enteringChildren = new Set),
            this.enteringChildren.add(r)
    }
    removeChild(r) {
        this.children.delete(r),
            this.enteringChildren && this.enteringChildren.delete(r)
    }
    bindToMotionValue(r, s) {
        if (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(),
            s.accelerate && Cp.has(r) && this.current instanceof HTMLElement) {
            const { factory: f, keyframes: p, times: m, ease: g, duration: y } = s.accelerate
                , w = new kp({
                    element: this.current,
                    name: r,
                    keyframes: p,
                    times: m,
                    ease: g,
                    duration: mt(y)
                })
                , x = f(w);
            this.valueSubscriptions.set(r, () => {
                x(),
                    w.cancel()
            }
            );
            return
        }
        const l = Cr.has(r);
        l && this.onBindTransform && this.onBindTransform();
        const c = s.on("change", f => {
            this.latestValues[r] = f,
                this.props.onUpdate && ye.preRender(this.notifyUpdate),
                l && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender()
        }
        );
        let d;
        typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, r, s)),
            this.valueSubscriptions.set(r, () => {
                c(),
                    d && d(),
                    s.owner && s.stop()
            }
            )
    }
    sortNodePosition(r) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current)
    }
    updateFeatures() {
        let r = "animation";
        for (r in Js) {
            const s = Js[r];
            if (!s)
                continue;
            const { isEnabled: l, Feature: c } = s;
            if (!this.features[r] && c && l(this.props) && (this.features[r] = new c(this)),
                this.features[r]) {
                const d = this.features[r];
                d.isMounted ? d.update() : (d.mount(),
                    d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : We()
    }
    getStaticValue(r) {
        return this.latestValues[r]
    }
    setStaticValue(r, s) {
        this.latestValues[r] = s
    }
    update(r, s) {
        (r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = r,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = s;
        for (let l = 0; l < Yd.length; l++) {
            const c = Yd[l];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
                delete this.propEventSubscriptions[c]);
            const d = "on" + c
                , f = r[d];
            f && (this.propEventSubscriptions[c] = this.on(c, f))
        }
        this.prevMotionValues = u1(this, this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(r) {
        return this.props.variants ? this.props.variants[r] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(r) {
        const s = this.getClosestVariantNode();
        if (s)
            return s.variantChildren && s.variantChildren.add(r),
                () => s.variantChildren.delete(r)
    }
    addValue(r, s) {
        const l = this.values.get(r);
        s !== l && (l && this.removeValue(r),
            this.bindToMotionValue(r, s),
            this.values.set(r, s),
            this.latestValues[r] = s.get())
    }
    removeValue(r) {
        this.values.delete(r);
        const s = this.valueSubscriptions.get(r);
        s && (s(),
            this.valueSubscriptions.delete(r)),
            delete this.latestValues[r],
            this.removeValueFromRenderState(r, this.renderState)
    }
    hasValue(r) {
        return this.values.has(r)
    }
    getValue(r, s) {
        if (this.props.values && this.props.values[r])
            return this.props.values[r];
        let l = this.values.get(r);
        return l === void 0 && s !== void 0 && (l = Sr(s === null ? void 0 : s, {
            owner: this
        }),
            this.addValue(r, l)),
            l
    }
    readValue(r, s) {
        let l = this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : this.getBaseTargetFromProps(this.props, r) ?? this.readValueFromInstance(this.current, r, this.options);
        return l != null && (typeof l == "string" && (Wh(l) || Hh(l)) ? l = parseFloat(l) : !l1(l) && jt.test(s) && (l = _p(r, s)),
            this.setBaseTarget(r, Qe(l) ? l.get() : l)),
            Qe(l) ? l.get() : l
    }
    setBaseTarget(r, s) {
        this.baseTarget[r] = s
    }
    getBaseTarget(r) {
        var d;
        const { initial: s } = this.props;
        let l;
        if (typeof s == "string" || typeof s == "object") {
            const f = au(this.props, s, (d = this.presenceContext) == null ? void 0 : d.custom);
            f && (l = f[r])
        }
        if (s && l !== void 0)
            return l;
        const c = this.getBaseTargetFromProps(this.props, r);
        return c !== void 0 && !Qe(c) ? c : this.initialValues[r] !== void 0 && l === void 0 ? void 0 : this.baseTarget[r]
    }
    on(r, s) {
        return this.events[r] || (this.events[r] = new ba),
            this.events[r].add(s)
    }
    notify(r, ...s) {
        this.events[r] && this.events[r].notify(...s)
    }
    scheduleRenderMicrotask() {
        fu.render(this.render)
    }
}
class Kp extends h1 {
    constructor() {
        super(...arguments),
            this.KeyframeResolver = B0
    }
    sortInstanceNodePosition(r, s) {
        return r.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(r, s) {
        const l = r.style;
        return l ? l[s] : void 0
    }
    removeValueFromRenderState(r, { vars: s, style: l }) {
        delete s[r],
            delete l[r]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
        const { children: r } = this.props;
        Qe(r) && (this.childSubscription = r.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }
        ))
    }
}
class Cn {
    constructor(r) {
        this.isMounted = !1,
            this.node = r
    }
    update() { }
}
function Gp({ top: n, left: r, right: s, bottom: l }) {
    return {
        x: {
            min: r,
            max: s
        },
        y: {
            min: n,
            max: l
        }
    }
}
function p1({ x: n, y: r }) {
    return {
        top: r.min,
        right: n.max,
        bottom: r.max,
        left: n.min
    }
}
function m1(n, r) {
    if (!r)
        return n;
    const s = r({
        x: n.left,
        y: n.top
    })
        , l = r({
            x: n.right,
            y: n.bottom
        });
    return {
        top: s.y,
        left: s.x,
        bottom: l.y,
        right: l.x
    }
}
function ha(n) {
    return n === void 0 || n === 1
}
function Ba({ scale: n, scaleX: r, scaleY: s }) {
    return !ha(n) || !ha(r) || !ha(s)
}
function On(n) {
    return Ba(n) || Xp(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function Xp(n) {
    return Qd(n.x) || Qd(n.y)
}
function Qd(n) {
    return n && n !== "0%"
}
function eo(n, r, s) {
    const l = n - s
        , c = r * l;
    return s + c
}
function bd(n, r, s, l, c) {
    return c !== void 0 && (n = eo(n, c, l)),
        eo(n, s, l) + r
}
function Ua(n, r = 0, s = 1, l, c) {
    n.min = bd(n.min, r, s, l, c),
        n.max = bd(n.max, r, s, l, c)
}
function Yp(n, { x: r, y: s }) {
    Ua(n.x, r.translate, r.scale, r.originPoint),
        Ua(n.y, s.translate, s.scale, s.originPoint)
}
const Zd = .999999999999
    , qd = 1.0000000000001;
function y1(n, r, s, l = !1) {
    var p;
    const c = s.length;
    if (!c)
        return;
    r.x = r.y = 1;
    let d, f;
    for (let m = 0; m < c; m++) {
        d = s[m],
            f = d.projectionDelta;
        const { visualElement: g } = d.options;
        g && g.props.style && g.props.style.display === "contents" || (l && d.options.layoutScroll && d.scroll && d !== d.root && (Ut(n.x, -d.scroll.offset.x),
            Ut(n.y, -d.scroll.offset.y)),
            f && (r.x *= f.x.scale,
                r.y *= f.y.scale,
                Yp(n, f)),
            l && On(d.latestValues) && Ks(n, d.latestValues, (p = d.layout) == null ? void 0 : p.layoutBox))
    }
    r.x < qd && r.x > Zd && (r.x = 1),
        r.y < qd && r.y > Zd && (r.y = 1)
}
function Ut(n, r) {
    n.min += r,
        n.max += r
}
function Jd(n, r, s, l, c = .5) {
    const d = Ce(n.min, n.max, c);
    Ua(n, r, s, d, l)
}
function eh(n, r) {
    return typeof n == "string" ? parseFloat(n) / 100 * (r.max - r.min) : n
}
function Ks(n, r, s) {
    const l = s ?? n;
    Jd(n.x, eh(r.x, l.x), r.scaleX, r.scale, r.originX),
        Jd(n.y, eh(r.y, l.y), r.scaleY, r.scale, r.originY)
}
function Qp(n, r) {
    return Gp(m1(n.getBoundingClientRect(), r))
}
function g1(n, r, s) {
    const l = Qp(n, s)
        , { scroll: c } = r;
    return c && (Ut(l.x, c.offset.x),
        Ut(l.y, c.offset.y)),
        l
}
const v1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
    , w1 = Tr.length;
function x1(n, r, s) {
    let l = ""
        , c = !0;
    for (let d = 0; d < w1; d++) {
        const f = Tr[d]
            , p = n[f];
        if (p === void 0)
            continue;
        let m = !0;
        if (typeof p == "number")
            m = p === (f.startsWith("scale") ? 1 : 0);
        else {
            const g = parseFloat(p);
            m = f.startsWith("scale") ? g === 1 : g === 0
        }
        if (!m || s) {
            const g = Fp(p, cu[f]);
            if (!m) {
                c = !1;
                const y = v1[f] || f;
                l += `${y}(${g}) `
            }
            s && (r[f] = g)
        }
    }
    return l = l.trim(),
        s ? l = s(r, c ? "" : l) : c && (l = "none"),
        l
}
function yu(n, r, s) {
    const { style: l, vars: c, transformOrigin: d } = n;
    let f = !1
        , p = !1;
    for (const m in r) {
        const g = r[m];
        if (Cr.has(m)) {
            f = !0;
            continue
        } else if (sp(m)) {
            c[m] = g;
            continue
        } else {
            const y = Fp(g, cu[m]);
            m.startsWith("origin") ? (p = !0,
                d[m] = y) : l[m] = y
        }
    }
    if (r.transform || (f || s ? l.transform = x1(r, n.transform, s) : l.transform && (l.transform = "none")),
        p) {
        const { originX: m = "50%", originY: g = "50%", originZ: y = 0 } = d;
        l.transformOrigin = `${m} ${g} ${y}`
    }
}
function bp(n, { style: r, vars: s }, l, c) {
    const d = n.style;
    let f;
    for (f in r)
        d[f] = r[f];
    c == null || c.applyProjectionStyles(d, l);
    for (f in s)
        d.setProperty(f, s[f])
}
function th(n, r) {
    return r.max === r.min ? 0 : n / (r.max - r.min) * 100
}
const fi = {
    correct: (n, r) => {
        if (!r.target)
            return n;
        if (typeof n == "string")
            if (X.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = th(n, r.target.x)
            , l = th(n, r.target.y);
        return `${s}% ${l}%`
    }
}
    , S1 = {
        correct: (n, { treeScale: r, projectionDelta: s }) => {
            const l = n
                , c = jt.parse(n);
            if (c.length > 5)
                return l;
            const d = jt.createTransformer(n)
                , f = typeof c[0] != "number" ? 1 : 0
                , p = s.x.scale * r.x
                , m = s.y.scale * r.y;
            c[0 + f] /= p,
                c[1 + f] /= m;
            const g = Ce(p, m, .5);
            return typeof c[2 + f] == "number" && (c[2 + f] /= g),
                typeof c[3 + f] == "number" && (c[3 + f] /= g),
                d(c)
        }
    }
    , Wa = {
        borderRadius: {
            ...fi,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: fi,
        borderTopRightRadius: fi,
        borderBottomLeftRadius: fi,
        borderBottomRightRadius: fi,
        boxShadow: S1
    };
function Zp(n, { layout: r, layoutId: s }) {
    return Cr.has(n) || n.startsWith("origin") || (r || s !== void 0) && (!!Wa[n] || n === "opacity")
}
function gu(n, r, s) {
    var f;
    const l = n.style
        , c = r == null ? void 0 : r.style
        , d = {};
    if (!l)
        return d;
    for (const p in l)
        (Qe(l[p]) || c && Qe(c[p]) || Zp(p, n) || ((f = s == null ? void 0 : s.getValue(p)) == null ? void 0 : f.liveStyle) !== void 0) && (d[p] = l[p]);
    return d
}
function k1(n) {
    return window.getComputedStyle(n)
}
class T1 extends Kp {
    constructor() {
        super(...arguments),
            this.type = "html",
            this.renderInstance = bp
    }
    readValueFromInstance(r, s) {
        var l;
        if (Cr.has(s))
            return (l = this.projection) != null && l.isProjecting ? Na(s) : Wv(r, s);
        {
            const c = k1(r)
                , d = (sp(s) ? c.getPropertyValue(s) : c[s]) || 0;
            return typeof d == "string" ? d.trim() : d
        }
    }
    measureInstanceViewportBox(r, { transformPagePoint: s }) {
        return Qp(r, s)
    }
    build(r, s, l) {
        yu(r, s, l.transformTemplate)
    }
    scrapeMotionValuesFromProps(r, s, l) {
        return gu(r, s, l)
    }
}
const C1 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
    , E1 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function P1(n, r, s = 1, l = 0, c = !0) {
    n.pathLength = 1;
    const d = c ? C1 : E1;
    n[d.offset] = `${-l}`,
        n[d.array] = `${r} ${s}`
}
const M1 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function qp(n, { attrX: r, attrY: s, attrScale: l, pathLength: c, pathSpacing: d = 1, pathOffset: f = 0, ...p }, m, g, y) {
    if (yu(n, p, g),
        m) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
        n.style = {};
    const { attrs: w, style: x } = n;
    w.transform && (x.transform = w.transform,
        delete w.transform),
        (x.transform || w.transformOrigin) && (x.transformOrigin = w.transformOrigin ?? "50% 50%",
            delete w.transformOrigin),
        x.transform && (x.transformBox = (y == null ? void 0 : y.transformBox) ?? "fill-box",
            delete w.transformBox);
    for (const C of M1)
        w[C] !== void 0 && (x[C] = w[C],
            delete w[C]);
    r !== void 0 && (w.x = r),
        s !== void 0 && (w.y = s),
        l !== void 0 && (w.scale = l),
        c !== void 0 && P1(w, c, d, f, !1)
}
const Jp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    , em = n => typeof n == "string" && n.toLowerCase() === "svg";
function N1(n, r, s, l) {
    bp(n, r, void 0, l);
    for (const c in r.attrs)
        n.setAttribute(Jp.has(c) ? c : uu(c), r.attrs[c])
}
function tm(n, r, s) {
    const l = gu(n, r, s);
    for (const c in n)
        if (Qe(n[c]) || Qe(r[c])) {
            const d = Tr.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            l[d] = n[c]
        }
    return l
}
class A1 extends Kp {
    constructor() {
        super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1,
            this.measureInstanceViewportBox = We
    }
    getBaseTargetFromProps(r, s) {
        return r[s]
    }
    readValueFromInstance(r, s) {
        if (Cr.has(s)) {
            const l = jp(s);
            return l && l.default || 0
        }
        return s = Jp.has(s) ? s : uu(s),
            r.getAttribute(s)
    }
    scrapeMotionValuesFromProps(r, s, l) {
        return tm(r, s, l)
    }
    build(r, s, l) {
        qp(r, s, this.isSVGTag, l.transformTemplate, l.style)
    }
    renderInstance(r, s, l, c) {
        N1(r, s, l, c)
    }
    mount(r) {
        this.isSVGTag = em(r.tagName),
            super.mount(r)
    }
}
const L1 = mu.length;
function nm(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? nm(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
            s
    }
    const r = {};
    for (let s = 0; s < L1; s++) {
        const l = mu[s]
            , c = n.props[l];
        (wi(c) || c === !1) && (r[l] = c)
    }
    return r
}
function rm(n, r) {
    if (!Array.isArray(r))
        return !1;
    const s = r.length;
    if (s !== n.length)
        return !1;
    for (let l = 0; l < s; l++)
        if (r[l] !== n[l])
            return !1;
    return !0
}
const R1 = [...pu].reverse()
    , D1 = pu.length;
function V1(n) {
    return r => Promise.all(r.map(({ animation: s, options: l }) => A0(n, s, l)))
}
function j1(n) {
    let r = V1(n)
        , s = nh()
        , l = !0
        , c = !1;
    const d = g => (y, w) => {
        var C;
        const x = $n(n, w, g === "exit" ? (C = n.presenceContext) == null ? void 0 : C.custom : void 0);
        if (x) {
            const { transition: A, transitionEnd: R, ...L } = x;
            y = {
                ...y,
                ...L,
                ...R
            }
        }
        return y
    }
        ;
    function f(g) {
        r = g(n)
    }
    function p(g) {
        const { props: y } = n
            , w = nm(n.parent) || {}
            , x = []
            , C = new Set;
        let A = {}
            , R = 1 / 0;
        for (let I = 0; I < D1; I++) {
            const B = R1[I]
                , O = s[B]
                , U = y[B] !== void 0 ? y[B] : w[B]
                , q = wi(U)
                , se = B === g ? O.isActive : null;
            se === !1 && (R = I);
            let ae = U === w[B] && U !== y[B] && q;
            if (ae && (l || c) && n.manuallyAnimateOnMount && (ae = !1),
                O.protectedKeys = {
                    ...A
                },
                !O.isActive && se === null || !U && !O.prevProp || io(U) || typeof U == "boolean")
                continue;
            if (B === "exit" && O.isActive && se !== !0) {
                O.prevResolvedValues && (A = {
                    ...A,
                    ...O.prevResolvedValues
                });
                continue
            }
            const te = _1(O.prevProp, U);
            let re = te || B === g && O.isActive && !ae && q || I > R && q
                , b = !1;
            const me = Array.isArray(U) ? U : [U];
            let we = me.reduce(d(B), {});
            se === !1 && (we = {});
            const { prevResolvedValues: Ve = {} } = O
                , Le = {
                    ...Ve,
                    ...we
                }
                , Fe = F => {
                    re = !0,
                        C.has(F) && (b = !0,
                            C.delete(F)),
                        O.needsAnimating[F] = !0;
                    const Y = n.getValue(F);
                    Y && (Y.liveStyle = !1)
                }
                ;
            for (const F in Le) {
                const Y = we[F]
                    , W = Ve[F];
                if (A.hasOwnProperty(F))
                    continue;
                let T = !1;
                ja(Y) && ja(W) ? T = !rm(Y, W) : T = Y !== W,
                    T ? Y != null ? Fe(F) : C.add(F) : Y !== void 0 && C.has(F) ? Fe(F) : O.protectedKeys[F] = !0
            }
            O.prevProp = U,
                O.prevResolvedValues = we,
                O.isActive && (A = {
                    ...A,
                    ...we
                }),
                (l || c) && n.blockInitialAnimation && (re = !1);
            const xe = ae && te;
            re && (!xe || b) && x.push(...me.map(F => {
                const Y = {
                    type: B
                };
                if (typeof F == "string" && (l || c) && !xe && n.manuallyAnimateOnMount && n.parent) {
                    const { parent: W } = n
                        , T = $n(W, F);
                    if (W.enteringChildren && T) {
                        const { delayChildren: D } = T.transition || {};
                        Y.delay = Ep(W.enteringChildren, n, D)
                    }
                }
                return {
                    animation: F,
                    options: Y
                }
            }
            ))
        }
        if (C.size) {
            const I = {};
            if (typeof y.initial != "boolean") {
                const B = $n(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                B && B.transition && (I.transition = B.transition)
            }
            C.forEach(B => {
                const O = n.getBaseTarget(B)
                    , U = n.getValue(B);
                U && (U.liveStyle = !0),
                    I[B] = O ?? null
            }
            ),
                x.push({
                    animation: I
                })
        }
        let L = !!x.length;
        return l && (y.initial === !1 || y.initial === y.animate) && !n.manuallyAnimateOnMount && (L = !1),
            l = !1,
            c = !1,
            L ? r(x) : Promise.resolve()
    }
    function m(g, y) {
        var x;
        if (s[g].isActive === y)
            return Promise.resolve();
        (x = n.variantChildren) == null || x.forEach(C => {
            var A;
            return (A = C.animationState) == null ? void 0 : A.setActive(g, y)
        }
        ),
            s[g].isActive = y;
        const w = p(g);
        for (const C in s)
            s[C].protectedKeys = {};
        return w
    }
    return {
        animateChanges: p,
        setActive: m,
        setAnimateFunction: f,
        getState: () => s,
        reset: () => {
            s = nh(),
                c = !0
        }
    }
}
function _1(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !rm(r, n) : !1
}
function zn(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function nh() {
    return {
        animate: zn(!0),
        whileInView: zn(),
        whileHover: zn(),
        whileTap: zn(),
        whileDrag: zn(),
        whileFocus: zn(),
        exit: zn()
    }
}
function $a(n, r) {
    n.min = r.min,
        n.max = r.max
}
function Dt(n, r) {
    $a(n.x, r.x),
        $a(n.y, r.y)
}
function rh(n, r) {
    n.translate = r.translate,
        n.scale = r.scale,
        n.originPoint = r.originPoint,
        n.origin = r.origin
}
const im = 1e-4
    , I1 = 1 - im
    , F1 = 1 + im
    , sm = .01
    , z1 = 0 - sm
    , O1 = 0 + sm;
function rt(n) {
    return n.max - n.min
}
function B1(n, r, s) {
    return Math.abs(n - r) <= s
}
function ih(n, r, s, l = .5) {
    n.origin = l,
        n.originPoint = Ce(r.min, r.max, n.origin),
        n.scale = rt(s) / rt(r),
        n.translate = Ce(s.min, s.max, n.origin) - n.originPoint,
        (n.scale >= I1 && n.scale <= F1 || isNaN(n.scale)) && (n.scale = 1),
        (n.translate >= z1 && n.translate <= O1 || isNaN(n.translate)) && (n.translate = 0)
}
function mi(n, r, s, l) {
    ih(n.x, r.x, s.x, l ? l.originX : void 0),
        ih(n.y, r.y, s.y, l ? l.originY : void 0)
}
function sh(n, r, s, l = 0) {
    const c = l ? Ce(s.min, s.max, l) : s.min;
    n.min = c + r.min,
        n.max = n.min + rt(r)
}
function U1(n, r, s, l) {
    sh(n.x, r.x, s.x, l == null ? void 0 : l.x),
        sh(n.y, r.y, s.y, l == null ? void 0 : l.y)
}
function oh(n, r, s, l = 0) {
    const c = l ? Ce(s.min, s.max, l) : s.min;
    n.min = r.min - c,
        n.max = n.min + rt(r)
}
function to(n, r, s, l) {
    oh(n.x, r.x, s.x, l == null ? void 0 : l.x),
        oh(n.y, r.y, s.y, l == null ? void 0 : l.y)
}
function lh(n, r, s, l, c) {
    return n -= r,
        n = eo(n, 1 / s, l),
        c !== void 0 && (n = eo(n, 1 / c, l)),
        n
}
function W1(n, r = 0, s = 1, l = .5, c, d = n, f = n) {
    if (Wt.test(r) && (r = parseFloat(r),
        r = Ce(f.min, f.max, r / 100) - f.min),
        typeof r != "number")
        return;
    let p = Ce(d.min, d.max, l);
    n === d && (p -= r),
        n.min = lh(n.min, r, s, p, c),
        n.max = lh(n.max, r, s, p, c)
}
function ah(n, r, [s, l, c], d, f) {
    W1(n, r[s], r[l], r[c], r.scale, d, f)
}
const $1 = ["x", "scaleX", "originX"]
    , H1 = ["y", "scaleY", "originY"];
function uh(n, r, s, l) {
    ah(n.x, r, $1, s ? s.x : void 0, l ? l.x : void 0),
        ah(n.y, r, H1, s ? s.y : void 0, l ? l.y : void 0)
}
function ch(n) {
    return n.translate === 0 && n.scale === 1
}
function om(n) {
    return ch(n.x) && ch(n.y)
}
function fh(n, r) {
    return n.min === r.min && n.max === r.max
}
function K1(n, r) {
    return fh(n.x, r.x) && fh(n.y, r.y)
}
function dh(n, r) {
    return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max)
}
function lm(n, r) {
    return dh(n.x, r.x) && dh(n.y, r.y)
}
function hh(n) {
    return rt(n.x) / rt(n.y)
}
function ph(n, r) {
    return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint
}
function Bt(n) {
    return [n("x"), n("y")]
}
function G1(n, r, s) {
    let l = "";
    const c = n.x.translate / r.x
        , d = n.y.translate / r.y
        , f = (s == null ? void 0 : s.z) || 0;
    if ((c || d || f) && (l = `translate3d(${c}px, ${d}px, ${f}px) `),
        (r.x !== 1 || r.y !== 1) && (l += `scale(${1 / r.x}, ${1 / r.y}) `),
        s) {
        const { transformPerspective: g, rotate: y, rotateX: w, rotateY: x, skewX: C, skewY: A } = s;
        g && (l = `perspective(${g}px) ${l}`),
            y && (l += `rotate(${y}deg) `),
            w && (l += `rotateX(${w}deg) `),
            x && (l += `rotateY(${x}deg) `),
            C && (l += `skewX(${C}deg) `),
            A && (l += `skewY(${A}deg) `)
    }
    const p = n.x.scale * r.x
        , m = n.y.scale * r.y;
    return (p !== 1 || m !== 1) && (l += `scale(${p}, ${m})`),
        l || "none"
}
const am = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    , X1 = am.length
    , mh = n => typeof n == "string" ? parseFloat(n) : n
    , yh = n => typeof n == "number" || X.test(n);
function Y1(n, r, s, l, c, d) {
    c ? (n.opacity = Ce(0, s.opacity ?? 1, Q1(l)),
        n.opacityExit = Ce(r.opacity ?? 1, 0, b1(l))) : d && (n.opacity = Ce(r.opacity ?? 1, s.opacity ?? 1, l));
    for (let f = 0; f < X1; f++) {
        const p = am[f];
        let m = gh(r, p)
            , g = gh(s, p);
        if (m === void 0 && g === void 0)
            continue;
        m || (m = 0),
            g || (g = 0),
            m === 0 || g === 0 || yh(m) === yh(g) ? (n[p] = Math.max(Ce(mh(m), mh(g), l), 0),
                (Wt.test(g) || Wt.test(m)) && (n[p] += "%")) : n[p] = g
    }
    (r.rotate || s.rotate) && (n.rotate = Ce(r.rotate || 0, s.rotate || 0, l))
}
function gh(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius
}
const Q1 = um(0, .5, Jh)
    , b1 = um(.5, .95, Ct);
function um(n, r, s) {
    return l => l < n ? 0 : l > r ? 1 : s(gi(n, r, l))
}
function Z1(n, r, s) {
    const l = Qe(n) ? n : Sr(n);
    return l.start(lu("", l, r, s)),
        l.animation
}
function xi(n, r, s, l = {
    passive: !0
}) {
    return n.addEventListener(r, s, l),
        () => n.removeEventListener(r, s)
}
const q1 = (n, r) => n.depth - r.depth;
class J1 {
    constructor() {
        this.children = [],
            this.isDirty = !1
    }
    add(r) {
        Ya(this.children, r),
            this.isDirty = !0
    }
    remove(r) {
        Ys(this.children, r),
            this.isDirty = !0
    }
    forEach(r) {
        this.isDirty && this.children.sort(q1),
            this.isDirty = !1,
            this.children.forEach(r)
    }
}
function ew(n, r) {
    const s = nt.now()
        , l = ({ timestamp: c }) => {
            const d = c - s;
            d >= r && (Tn(l),
                n(d - r))
        }
        ;
    return ye.setup(l, !0),
        () => Tn(l)
}
function Gs(n) {
    return Qe(n) ? n.get() : n
}
class tw {
    constructor() {
        this.members = []
    }
    add(r) {
        Ya(this.members, r);
        for (let s = this.members.length - 1; s >= 0; s--) {
            const l = this.members[s];
            if (l === r || l === this.lead || l === this.prevLead)
                continue;
            const c = l.instance;
            (!c || c.isConnected === !1) && !l.snapshot && (Ys(this.members, l),
                l.unmount())
        }
        r.scheduleRender()
    }
    remove(r) {
        if (Ys(this.members, r),
            r === this.prevLead && (this.prevLead = void 0),
            r === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(r) {
        var s;
        for (let l = this.members.indexOf(r) - 1; l >= 0; l--) {
            const c = this.members[l];
            if (c.isPresent !== !1 && ((s = c.instance) == null ? void 0 : s.isConnected) !== !1)
                return this.promote(c),
                    !0
        }
        return !1
    }
    promote(r, s) {
        var c;
        const l = this.lead;
        if (r !== l && (this.prevLead = l,
            this.lead = r,
            r.show(),
            l)) {
            l.updateSnapshot(),
                r.scheduleRender();
            const { layoutDependency: d } = l.options
                , { layoutDependency: f } = r.options;
            (d === void 0 || d !== f) && (r.resumeFrom = l,
                s && (l.preserveOpacity = !0),
                l.snapshot && (r.snapshot = l.snapshot,
                    r.snapshot.latestValues = l.animationValues || l.latestValues),
                (c = r.root) != null && c.isUpdating && (r.isLayoutDirty = !0)),
                r.options.crossfade === !1 && l.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(r => {
            var s, l, c, d, f;
            (l = (s = r.options).onExitComplete) == null || l.call(s),
                (f = (c = r.resumingFrom) == null ? void 0 : (d = c.options).onExitComplete) == null || f.call(d)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(r => r.instance && r.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var r;
        (r = this.lead) != null && r.snapshot && (this.lead.snapshot = void 0)
    }
}
const Xs = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
    , pa = ["", "X", "Y", "Z"]
    , nw = 1e3;
let rw = 0;
function ma(n, r, s, l) {
    const { latestValues: c } = r;
    c[n] && (s[n] = c[n],
        r.setStaticValue(n, 0),
        l && (l[n] = 0))
}
function cm(n) {
    if (n.hasCheckedOptimisedAppear = !0,
        n.root === n)
        return;
    const { visualElement: r } = n.options;
    if (!r)
        return;
    const s = Lp(r);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const { layout: c, layoutId: d } = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", ye, !(c || d))
    }
    const { parent: l } = n;
    l && !l.hasCheckedOptimisedAppear && cm(l)
}
function fm({ attachResizeListener: n, defaultParent: r, measureScroll: s, checkIsScrollRoot: l, resetTransform: c }) {
    return class {
        constructor(f = {}, p = r == null ? void 0 : r()) {
            this.id = rw++,
                this.animationId = 0,
                this.animationCommitId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.hasCheckedOptimisedAppear = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.layoutVersion = 0,
                this.updateScheduled = !1,
                this.scheduleUpdate = () => this.update(),
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                        this.nodes.forEach(ow),
                        this.nodes.forEach(dw),
                        this.nodes.forEach(hw),
                        this.nodes.forEach(lw)
                }
                ,
                this.resolvedRelativeTargetAt = 0,
                this.linkedParentVersion = 0,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = f,
                this.root = p ? p.root || p : this,
                this.path = p ? [...p.path, p] : [],
                this.parent = p,
                this.depth = p ? p.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new J1)
        }
        addEventListener(f, p) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new ba),
                this.eventHandlers.get(f).add(p)
        }
        notifyListeners(f, ...p) {
            const m = this.eventHandlers.get(f);
            m && m.notify(...p)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance)
                return;
            this.isSVG = hu(f) && !s1(f),
                this.instance = f;
            const { layoutId: p, layout: m, visualElement: g } = this.options;
            if (g && !g.current && g.mount(f),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
                n) {
                let y, w = 0;
                const x = () => this.root.updateBlockedByResize = !1;
                ye.read(() => {
                    w = window.innerWidth
                }
                ),
                    n(f, () => {
                        const C = window.innerWidth;
                        C !== w && (w = C,
                            this.root.updateBlockedByResize = !0,
                            y && y(),
                            y = ew(x, 250),
                            Xs.hasAnimatedSinceResize && (Xs.hasAnimatedSinceResize = !1,
                                this.nodes.forEach(xh)))
                    }
                    )
            }
            p && this.root.registerSharedNode(p, this),
                this.options.animate !== !1 && g && (p || m) && this.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: w, hasRelativeLayoutChanged: x, layout: C }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                            this.relativeTarget = void 0;
                        return
                    }
                    const A = this.options.transition || g.getDefaultTransition() || vw
                        , { onLayoutAnimationStart: R, onLayoutAnimationComplete: L } = g.getProps()
                        , I = !this.targetLayout || !lm(this.targetLayout, C)
                        , B = !w && x;
                    if (this.options.layoutRoot || this.resumeFrom || B || w && (I || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0);
                        const O = {
                            ...ou(A, "layout"),
                            onPlay: R,
                            onComplete: L
                        };
                        (g.shouldReduceMotion || this.options.layoutRoot) && (O.delay = 0,
                            O.type = !1),
                            this.startAnimation(O),
                            this.setAnimationOrigin(y, B)
                    } else
                        w || xh(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = C
                }
                )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                this.eventHandlers.clear(),
                Tn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(pw),
                this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: f } = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f = !0) {
            if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cm(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const w = this.path[y];
                w.shouldResetTransform = !0,
                    (typeof w.latestValues.x == "string" || typeof w.latestValues.y == "string") && (w.isLayoutDirty = !0),
                    w.updateScroll("snapshot"),
                    w.options.layoutRoot && w.willUpdate(!1)
            }
            const { layoutId: p, layout: m } = this.options;
            if (p === void 0 && !m)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                const m = this.updateBlockedByResize;
                this.unblockUpdate(),
                    this.updateBlockedByResize = !1,
                    this.clearAllSnapshots(),
                    m && this.nodes.forEach(uw),
                    this.nodes.forEach(vh);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(wh);
                return
            }
            this.animationCommitId = this.animationId,
                this.isUpdating ? (this.isUpdating = !1,
                    this.nodes.forEach(cw),
                    this.nodes.forEach(fw),
                    this.nodes.forEach(iw),
                    this.nodes.forEach(sw)) : this.nodes.forEach(wh),
                this.clearAllSnapshots();
            const p = nt.now();
            Ye.delta = $t(0, 1e3 / 60, p - Ye.timestamp),
                Ye.timestamp = p,
                Ye.isProcessing = !0,
                oa.update.process(Ye),
                oa.preRender.process(Ye),
                oa.render.process(Ye),
                Ye.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
                fu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(aw),
                this.sharedNodes.forEach(mw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                ye.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ye.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
                this.snapshot && !rt(this.snapshot.measuredBox.x) && !rt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1),
                this.layoutVersion++,
                this.layoutCorrected || (this.layoutCorrected = We()),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: p } = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f = "measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (p = !1),
                p && this.instance) {
                const m = l(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: m,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                , p = this.projectionDelta && !om(this.projectionDelta)
                , m = this.getTransformTemplate()
                , g = m ? m(this.latestValues, "") : void 0
                , y = g !== this.prevTransformTemplateValue;
            f && this.instance && (p || On(this.latestValues) || y) && (c(this.instance, g),
                this.shouldResetTransform = !1,
                this.scheduleRender())
        }
        measure(f = !0) {
            const p = this.measurePageBox();
            let m = this.removeElementScroll(p);
            return f && (m = this.removeTransform(m)),
                ww(m),
            {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var g;
            const { visualElement: f } = this.options;
            if (!f)
                return We();
            const p = f.measureViewportBox();
            if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(xw))) {
                const { scroll: y } = this.root;
                y && (Ut(p.x, y.offset.x),
                    Ut(p.y, y.offset.y))
            }
            return p
        }
        removeElementScroll(f) {
            var m;
            const p = We();
            if (Dt(p, f),
                (m = this.scroll) != null && m.wasRoot)
                return p;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g]
                    , { scroll: w, options: x } = y;
                y !== this.root && w && x.layoutScroll && (w.wasRoot && Dt(p, f),
                    Ut(p.x, w.offset.x),
                    Ut(p.y, w.offset.y))
            }
            return p
        }
        applyTransform(f, p = !1, m) {
            var y, w;
            const g = m || We();
            Dt(g, f);
            for (let x = 0; x < this.path.length; x++) {
                const C = this.path[x];
                !p && C.options.layoutScroll && C.scroll && C !== C.root && (Ut(g.x, -C.scroll.offset.x),
                    Ut(g.y, -C.scroll.offset.y)),
                    On(C.latestValues) && Ks(g, C.latestValues, (y = C.layout) == null ? void 0 : y.layoutBox)
            }
            return On(this.latestValues) && Ks(g, this.latestValues, (w = this.layout) == null ? void 0 : w.layoutBox),
                g
        }
        removeTransform(f) {
            var m;
            const p = We();
            Dt(p, f);
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                if (!On(y.latestValues))
                    continue;
                let w;
                y.instance && (Ba(y.latestValues) && y.updateSnapshot(),
                    w = We(),
                    Dt(w, y.measurePageBox())),
                    uh(p, y.latestValues, (m = y.snapshot) == null ? void 0 : m.layoutBox, w)
            }
            return On(this.latestValues) && uh(p, this.latestValues),
                p
        }
        setTargetDelta(f) {
            this.targetDelta = f,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ye.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f = !1) {
            var C;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || (C = this.parent) != null && C.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const { layout: y, layoutId: w } = this.options;
            if (!this.layout || !(y || w))
                return;
            this.resolvedRelativeTargetAt = Ye.timestamp;
            const x = this.getClosestProjectingParent();
            x && this.linkedParentVersion !== x.layoutVersion && !x.options.layoutRoot && this.removeRelativeTarget(),
                !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && x && x.layout ? this.createRelativeTarget(x, this.layout.layoutBox, x.layout.layoutBox) : this.removeRelativeTarget()),
                !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = We(),
                    this.targetWithTransforms = We()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                        U1(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Dt(this.target, this.layout.layoutBox),
                            Yp(this.target, this.targetDelta)) : Dt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                        this.options.layoutAnchor !== !1 && x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? this.createRelativeTarget(x, this.target, x.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ba(this.parent.latestValues) || Xp(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, p, m) {
            this.relativeParent = f,
                this.linkedParentVersion = f.layoutVersion,
                this.forceRelativeParentToResolveTarget(),
                this.relativeTarget = We(),
                this.relativeTargetOrigin = We(),
                to(this.relativeTargetOrigin, p, m, this.options.layoutAnchor || void 0),
                Dt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var A;
            const f = this.getLead()
                , p = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || (A = this.parent) != null && A.isProjectionDirty) && (m = !1),
                p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
                this.resolvedRelativeTargetAt === Ye.timestamp && (m = !1),
                m)
                return;
            const { layout: g, layoutId: y } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(g || y))
                return;
            Dt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x
                , x = this.treeScale.y;
            y1(this.layoutCorrected, this.treeScale, this.path, p),
                f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
                    f.targetWithTransforms = We());
            const { target: C } = f;
            if (!C) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                    this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (rh(this.prevProjectionDelta.x, this.projectionDelta.x),
                rh(this.prevProjectionDelta.y, this.projectionDelta.y)),
                mi(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
                (this.treeScale.x !== w || this.treeScale.y !== x || !ph(this.projectionDelta.x, this.prevProjectionDelta.x) || !ph(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", C))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f = !0) {
            var p;
            if ((p = this.options.visualElement) == null || p.scheduleRender(),
                f) {
                const m = this.getStack();
                m && m.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = wr(),
                this.projectionDelta = wr(),
                this.projectionDeltaWithTransform = wr()
        }
        setAnimationOrigin(f, p = !1) {
            const m = this.snapshot
                , g = m ? m.latestValues : {}
                , y = {
                    ...this.latestValues
                }
                , w = wr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !p;
            const x = We()
                , C = m ? m.source : void 0
                , A = this.layout ? this.layout.source : void 0
                , R = C !== A
                , L = this.getStack()
                , I = !L || L.members.length <= 1
                , B = !!(R && !I && this.options.crossfade === !0 && !this.path.some(gw));
            this.animationProgress = 0;
            let O;
            this.mixTargetDelta = U => {
                const q = U / 1e3;
                Sh(w.x, f.x, q),
                    Sh(w.y, f.y, q),
                    this.setTargetDelta(w),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (to(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                        yw(this.relativeTarget, this.relativeTargetOrigin, x, q),
                        O && K1(this.relativeTarget, O) && (this.isProjectionDirty = !1),
                        O || (O = We()),
                        Dt(O, this.relativeTarget)),
                    R && (this.animationValues = y,
                        Y1(y, g, this.latestValues, q, B, I)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = q
            }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            var p, m, g;
            this.notifyListeners("animationStart"),
                (p = this.currentAnimation) == null || p.stop(),
                (g = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || g.stop(),
                this.pendingAnimation && (Tn(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                this.pendingAnimation = ye.update(() => {
                    Xs.hasAnimatedSinceResize = !0,
                        this.motionValue || (this.motionValue = Sr(0)),
                        this.motionValue.jump(0, !1),
                        this.currentAnimation = Z1(this.motionValue, [0, 1e3], {
                            ...f,
                            velocity: 0,
                            isSync: !0,
                            onUpdate: y => {
                                this.mixTargetDelta(y),
                                    f.onUpdate && f.onUpdate(y)
                            }
                            ,
                            onStop: () => { }
                            ,
                            onComplete: () => {
                                f.onComplete && f.onComplete(),
                                    this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                }
                )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nw),
                this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let { targetWithTransforms: p, target: m, layout: g, latestValues: y } = f;
            if (!(!p || !m || !g)) {
                if (this !== f && this.layout && g && dm(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    m = this.target || We();
                    const w = rt(this.layout.layoutBox.x);
                    m.x.min = f.target.x.min,
                        m.x.max = m.x.min + w;
                    const x = rt(this.layout.layoutBox.y);
                    m.y.min = f.target.y.min,
                        m.y.max = m.y.min + x
                }
                Dt(p, m),
                    Ks(p, y),
                    mi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y)
            }
        }
        registerSharedNode(f, p) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new tw),
                this.sharedNodes.get(f).add(p);
            const g = p.options.initialPromotionConfig;
            p.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            var p;
            const { layoutId: f } = this.options;
            return f ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this
        }
        getPrevLead() {
            var p;
            const { layoutId: f } = this.options;
            return f ? (p = this.getStack()) == null ? void 0 : p.prevLead : void 0
        }
        getStack() {
            const { layoutId: f } = this.options;
            if (f)
                return this.root.sharedNodes.get(f)
        }
        promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
            const g = this.getStack();
            g && g.promote(this, m),
                f && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                p && this.setOptions({
                    transition: p
                })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const { visualElement: f } = this.options;
            if (!f)
                return;
            let p = !1;
            const { latestValues: m } = f;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0),
                !p)
                return;
            const g = {};
            m.z && ma("z", f, g, this.animationValues);
            for (let y = 0; y < pa.length; y++)
                ma(`rotate${pa[y]}`, f, g, this.animationValues),
                    ma(`skew${pa[y]}`, f, g, this.animationValues);
            f.render();
            for (const y in g)
                f.setStaticValue(y, g[y]),
                    this.animationValues && (this.animationValues[y] = g[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, p) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const m = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                    f.visibility = "",
                    f.opacity = "",
                    f.pointerEvents = Gs(p == null ? void 0 : p.pointerEvents) || "",
                    f.transform = m ? m(this.latestValues, "") : "none";
                return
            }
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                    f.pointerEvents = Gs(p == null ? void 0 : p.pointerEvents) || ""),
                    this.hasProjected && !On(this.latestValues) && (f.transform = m ? m({}, "") : "none",
                        this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = g.animationValues || g.latestValues;
            this.applyTransformsToTarget();
            let w = G1(this.projectionDeltaWithTransform, this.treeScale, y);
            m && (w = m(y, w)),
                f.transform = w;
            const { x, y: C } = this.projectionDelta;
            f.transformOrigin = `${x.origin * 100}% ${C.origin * 100}% 0`,
                g.animationValues ? f.opacity = g === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = g === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const A in Wa) {
                if (y[A] === void 0)
                    continue;
                const { correct: R, applyTo: L, isCSSVariable: I } = Wa[A]
                    , B = w === "none" ? y[A] : R(y[A], g);
                if (L) {
                    const O = L.length;
                    for (let U = 0; U < O; U++)
                        f[L[U]] = B
                } else
                    I ? this.options.visualElement.renderState.vars[A] = B : f[A] = B
            }
            this.options.layoutId && (f.pointerEvents = g === this ? Gs(p == null ? void 0 : p.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => {
                var p;
                return (p = f.currentAnimation) == null ? void 0 : p.stop()
            }
            ),
                this.root.nodes.forEach(vh),
                this.root.sharedNodes.clear()
        }
    }
}
function iw(n) {
    n.updateLayout()
}
function sw(n) {
    var s;
    const r = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
        const { layoutBox: l, measuredBox: c } = n.layout
            , { animationType: d } = n.options
            , f = r.source !== n.layout.source;
        if (d === "size")
            Bt(w => {
                const x = f ? r.measuredBox[w] : r.layoutBox[w]
                    , C = rt(x);
                x.min = l[w].min,
                    x.max = x.min + C
            }
            );
        else if (d === "x" || d === "y") {
            const w = d === "x" ? "y" : "x";
            $a(f ? r.measuredBox[w] : r.layoutBox[w], l[w])
        } else
            dm(d, r.layoutBox, l) && Bt(w => {
                const x = f ? r.measuredBox[w] : r.layoutBox[w]
                    , C = rt(l[w]);
                x.max = x.min + C,
                    n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
                        n.relativeTarget[w].max = n.relativeTarget[w].min + C)
            }
            );
        const p = wr();
        mi(p, l, r.layoutBox);
        const m = wr();
        f ? mi(m, n.applyTransform(c, !0), r.measuredBox) : mi(m, l, r.layoutBox);
        const g = !om(p);
        let y = !1;
        if (!n.resumeFrom) {
            const w = n.getClosestProjectingParent();
            if (w && !w.resumeFrom) {
                const { snapshot: x, layout: C } = w;
                if (x && C) {
                    const A = n.options.layoutAnchor || void 0
                        , R = We();
                    to(R, r.layoutBox, x.layoutBox, A);
                    const L = We();
                    to(L, l, C.layoutBox, A),
                        lm(R, L) || (y = !0),
                        w.options.layoutRoot && (n.relativeTarget = L,
                            n.relativeTargetOrigin = R,
                            n.relativeParent = w)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: l,
            snapshot: r,
            delta: m,
            layoutDelta: p,
            hasLayoutChanged: g,
            hasRelativeLayoutChanged: y
        })
    } else if (n.isLead()) {
        const { onExitComplete: l } = n.options;
        l && l()
    }
    n.options.transition = void 0
}
function ow(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
        n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
        n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function lw(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function aw(n) {
    n.clearSnapshot()
}
function vh(n) {
    n.clearMeasurements()
}
function uw(n) {
    n.isLayoutDirty = !0,
        n.updateLayout()
}
function wh(n) {
    n.isLayoutDirty = !1
}
function cw(n) {
    n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.layout,
        n.isLayoutDirty = !0)
}
function fw(n) {
    const { visualElement: r } = n.options;
    r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
        n.resetTransform()
}
function xh(n) {
    n.finishAnimation(),
        n.targetDelta = n.relativeTarget = n.target = void 0,
        n.isProjectionDirty = !0
}
function dw(n) {
    n.resolveTargetDelta()
}
function hw(n) {
    n.calcProjection()
}
function pw(n) {
    n.resetSkewAndRotation()
}
function mw(n) {
    n.removeLeadSnapshot()
}
function Sh(n, r, s) {
    n.translate = Ce(r.translate, 0, s),
        n.scale = Ce(r.scale, 1, s),
        n.origin = r.origin,
        n.originPoint = r.originPoint
}
function kh(n, r, s, l) {
    n.min = Ce(r.min, s.min, l),
        n.max = Ce(r.max, s.max, l)
}
function yw(n, r, s, l) {
    kh(n.x, r.x, s.x, l),
        kh(n.y, r.y, s.y, l)
}
function gw(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const vw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
    , Th = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
    , Ch = Th("applewebkit/") && !Th("chrome/") ? Math.round : Ct;
function Eh(n) {
    n.min = Ch(n.min),
        n.max = Ch(n.max)
}
function ww(n) {
    Eh(n.x),
        Eh(n.y)
}
function dm(n, r, s) {
    return n === "position" || n === "preserve-aspect" && !B1(hh(r), hh(s), .2)
}
function xw(n) {
    var r;
    return n !== n.root && ((r = n.scroll) == null ? void 0 : r.wasRoot)
}
const Sw = fm({
    attachResizeListener: (n, r) => xi(n, "resize", r),
    measureScroll: () => {
        var n, r;
        return {
            x: document.documentElement.scrollLeft || ((n = document.body) == null ? void 0 : n.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((r = document.body) == null ? void 0 : r.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
    , ya = {
        current: void 0
    }
    , hm = fm({
        measureScroll: n => ({
            x: n.scrollLeft,
            y: n.scrollTop
        }),
        defaultParent: () => {
            if (!ya.current) {
                const n = new Sw({});
                n.mount(window),
                    n.setOptions({
                        layoutScroll: !0
                    }),
                    ya.current = n
            }
            return ya.current
        }
        ,
        resetTransform: (n, r) => {
            n.style.transform = r !== void 0 ? r : "none"
        }
        ,
        checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
    })
    , pm = K.createContext({
        transformPagePoint: n => n,
        isStatic: !1,
        reducedMotion: "never"
    });
function kw(n = !0) {
    const r = K.useContext(Xa);
    if (r === null)
        return [!0, null];
    const { isPresent: s, onExitComplete: l, register: c } = r
        , d = K.useId();
    K.useEffect(() => {
        if (n)
            return c(d)
    }
        , [n]);
    const f = K.useCallback(() => n && l && l(d), [d, l, n]);
    return !s && l ? [!1, f] : [!0]
}
const mm = K.createContext({
    strict: !1
})
    , Ph = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let Mh = !1;
function Tw() {
    if (Mh)
        return;
    const n = {};
    for (const r in Ph)
        n[r] = {
            isEnabled: s => Ph[r].some(l => !!s[l])
        };
    Hp(n),
        Mh = !0
}
function ym() {
    return Tw(),
        d1()
}
function Cw(n) {
    const r = ym();
    for (const s in n)
        r[s] = {
            ...r[s],
            ...n[s]
        };
    Hp(r)
}
const Ew = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function no(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || Ew.has(n)
}
let gm = n => !no(n);
function Pw(n) {
    typeof n == "function" && (gm = r => r.startsWith("on") ? !no(r) : n(r))
}
try {
    Pw(require("@emotion/is-prop-valid").default)
} catch { }
function Mw(n, r, s) {
    const l = {};
    for (const c in n)
        c === "values" && typeof n.values == "object" || Qe(n[c]) || (gm(c) || s === !0 && no(c) || !r && !no(c) || n.draggable && c.startsWith("onDrag")) && (l[c] = n[c]);
    return l
}
const oo = K.createContext({});
function Nw(n, r) {
    if (so(n)) {
        const { initial: s, animate: l } = n;
        return {
            initial: s === !1 || wi(s) ? s : void 0,
            animate: wi(l) ? l : void 0
        }
    }
    return n.inherit !== !1 ? r : {}
}
function Aw(n) {
    const { initial: r, animate: s } = Nw(n, K.useContext(oo));
    return K.useMemo(() => ({
        initial: r,
        animate: s
    }), [Nh(r), Nh(s)])
}
function Nh(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const vu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function vm(n, r, s) {
    for (const l in r)
        !Qe(r[l]) && !Zp(l, s) && (n[l] = r[l])
}
function Lw({ transformTemplate: n }, r) {
    return K.useMemo(() => {
        const s = vu();
        return yu(s, r, n),
            Object.assign({}, s.vars, s.style)
    }
        , [r])
}
function Rw(n, r) {
    const s = n.style || {}
        , l = {};
    return vm(l, s, n),
        Object.assign(l, Lw(n, r)),
        l
}
function Dw(n, r) {
    const s = {}
        , l = Rw(n, r);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
        l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none",
        l.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
        n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
        s.style = l,
        s
}
const wm = () => ({
    ...vu(),
    attrs: {}
});
function Vw(n, r, s, l) {
    const c = K.useMemo(() => {
        const d = wm();
        return qp(d, r, em(l), n.transformTemplate, n.style),
        {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }
        , [r]);
    if (n.style) {
        const d = {};
        vm(d, n.style, n),
            c.style = {
                ...d,
                ...c.style
            }
    }
    return c
}
const jw = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function wu(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(jw.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function _w(n, r, s, { latestValues: l }, c, d = !1, f) {
    const m = (f ?? wu(n) ? Vw : Dw)(r, l, c, n)
        , g = Mw(r, typeof n == "string", d)
        , y = n !== K.Fragment ? {
            ...g,
            ...m,
            ref: s
        } : {}
        , { children: w } = r
        , x = K.useMemo(() => Qe(w) ? w.get() : w, [w]);
    return K.createElement(n, {
        ...y,
        children: x
    })
}
function Iw({ scrapeMotionValuesFromProps: n, createRenderState: r }, s, l, c) {
    return {
        latestValues: Fw(s, l, c, n),
        renderState: r()
    }
}
function Fw(n, r, s, l) {
    const c = {}
        , d = l(n, {});
    for (const x in d)
        c[x] = Gs(d[x]);
    let { initial: f, animate: p } = n;
    const m = so(n)
        , g = Wp(n);
    r && g && !m && n.inherit !== !1 && (f === void 0 && (f = r.initial),
        p === void 0 && (p = r.animate));
    let y = s ? s.initial === !1 : !1;
    y = y || f === !1;
    const w = y ? p : f;
    if (w && typeof w != "boolean" && !io(w)) {
        const x = Array.isArray(w) ? w : [w];
        for (let C = 0; C < x.length; C++) {
            const A = au(n, x[C]);
            if (A) {
                const { transitionEnd: R, transition: L, ...I } = A;
                for (const B in I) {
                    let O = I[B];
                    if (Array.isArray(O)) {
                        const U = y ? O.length - 1 : 0;
                        O = O[U]
                    }
                    O !== null && (c[B] = O)
                }
                for (const B in R)
                    c[B] = R[B]
            }
        }
    }
    return c
}
const xm = n => (r, s) => {
    const l = K.useContext(oo)
        , c = K.useContext(Xa)
        , d = () => Iw(n, r, l, c);
    return s ? d() : jg(d)
}
    , zw = xm({
        scrapeMotionValuesFromProps: gu,
        createRenderState: vu
    })
    , Ow = xm({
        scrapeMotionValuesFromProps: tm,
        createRenderState: wm
    })
    , Bw = Symbol.for("motionComponentSymbol");
function Uw(n, r, s) {
    const l = K.useRef(s);
    K.useInsertionEffect(() => {
        l.current = s
    }
    );
    const c = K.useRef(null);
    return K.useCallback(d => {
        var p;
        d && ((p = n.onMount) == null || p.call(n, d));
        const f = l.current;
        if (typeof f == "function")
            if (d) {
                const m = f(d);
                typeof m == "function" && (c.current = m)
            } else
                c.current ? (c.current(),
                    c.current = null) : f(d);
        else
            f && (f.current = d);
        r && (d ? r.mount(d) : r.unmount())
    }
        , [r])
}
const Sm = K.createContext({});
function yr(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function Ww(n, r, s, l, c, d) {
    var O, U;
    const { visualElement: f } = K.useContext(oo)
        , p = K.useContext(mm)
        , m = K.useContext(Xa)
        , g = K.useContext(pm)
        , y = g.reducedMotion
        , w = g.skipAnimations
        , x = K.useRef(null)
        , C = K.useRef(!1);
    l = l || p.renderer,
        !x.current && l && (x.current = l(n, {
            visualState: r,
            parent: f,
            props: s,
            presenceContext: m,
            blockInitialAnimation: m ? m.initial === !1 : !1,
            reducedMotionConfig: y,
            skipAnimations: w,
            isSVG: d
        }),
            C.current && x.current && (x.current.manuallyAnimateOnMount = !0));
    const A = x.current
        , R = K.useContext(Sm);
    A && !A.projection && c && (A.type === "html" || A.type === "svg") && $w(x.current, s, c, R);
    const L = K.useRef(!1);
    K.useInsertionEffect(() => {
        A && L.current && A.update(s, m)
    }
    );
    const I = s[Ap]
        , B = K.useRef(!!I && typeof window < "u" && !((O = window.MotionHandoffIsComplete) != null && O.call(window, I)) && ((U = window.MotionHasOptimisedAnimation) == null ? void 0 : U.call(window, I)));
    return Ig(() => {
        C.current = !0,
            A && (L.current = !0,
                window.MotionIsMounted = !0,
                A.updateFeatures(),
                A.scheduleRenderMicrotask(),
                B.current && A.animationState && A.animationState.animateChanges())
    }
    ),
        K.useEffect(() => {
            A && (!B.current && A.animationState && A.animationState.animateChanges(),
                B.current && (queueMicrotask(() => {
                    var q;
                    (q = window.MotionHandoffMarkAsComplete) == null || q.call(window, I)
                }
                ),
                    B.current = !1),
                A.enteringChildren = void 0)
        }
        ),
        A
}
function $w(n, r, s, l) {
    const { layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: m, layoutRoot: g, layoutAnchor: y, layoutCrossfade: w } = r;
    n.projection = new s(n.latestValues, r["data-framer-portal-id"] ? void 0 : km(n.parent)),
        n.projection.setOptions({
            layoutId: c,
            layout: d,
            alwaysMeasureLayout: !!f || p && yr(p),
            visualElement: n,
            animationType: typeof d == "string" ? d : "both",
            initialPromotionConfig: l,
            crossfade: w,
            layoutScroll: m,
            layoutRoot: g,
            layoutAnchor: y
        })
}
function km(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : km(n.parent)
}
function ga(n, { forwardMotionProps: r = !1, type: s } = {}, l, c) {
    l && Cw(l);
    const d = s ? s === "svg" : wu(n)
        , f = d ? Ow : zw;
    function p(g, y) {
        let w;
        const x = {
            ...K.useContext(pm),
            ...g,
            layoutId: Hw(g)
        }
            , { isStatic: C } = x
            , A = Aw(g)
            , R = f(g, C);
        if (!C && typeof window < "u") {
            Kw();
            const L = Gw(x);
            w = L.MeasureLayout,
                A.visualElement = Ww(n, R, x, c, L.ProjectionNode, d)
        }
        return P.jsxs(oo.Provider, {
            value: A,
            children: [w && A.visualElement ? P.jsx(w, {
                visualElement: A.visualElement,
                ...x
            }) : null, _w(n, g, Uw(R, A.visualElement, y), R, C, r, d)]
        })
    }
    p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const m = K.forwardRef(p);
    return m[Bw] = n,
        m
}
function Hw({ layoutId: n }) {
    const r = K.useContext(Uh).id;
    return r && n !== void 0 ? r + "-" + n : n
}
function Kw(n, r) {
    K.useContext(mm).strict
}
function Gw(n) {
    const r = ym()
        , { drag: s, layout: l } = r;
    if (!s && !l)
        return {};
    const c = {
        ...s,
        ...l
    };
    return {
        MeasureLayout: s != null && s.isEnabled(n) || l != null && l.isEnabled(n) ? c.MeasureLayout : void 0,
        ProjectionNode: c.ProjectionNode
    }
}
function Xw(n, r) {
    if (typeof Proxy > "u")
        return ga;
    const s = new Map
        , l = (d, f) => ga(d, f, n, r)
        , c = (d, f) => l(d, f);
    return new Proxy(c, {
        get: (d, f) => f === "create" ? l : (s.has(f) || s.set(f, ga(f, void 0, n, r)),
            s.get(f))
    })
}
const Yw = (n, r) => r.isSVG ?? wu(n) ? new A1(r) : new T1(r, {
    allowProjection: n !== K.Fragment
});
class Qw extends Cn {
    constructor(r) {
        super(r),
            r.animationState || (r.animationState = j1(r))
    }
    updateAnimationControlsSubscription() {
        const { animate: r } = this.node.getProps();
        io(r) && (this.unmountControls = r.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: r } = this.node.getProps()
            , { animate: s } = this.node.prevProps || {};
        r !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var r;
        this.node.animationState.reset(),
            (r = this.unmountControls) == null || r.call(this)
    }
}
let bw = 0;
class Zw extends Cn {
    constructor() {
        super(...arguments),
            this.id = bw++,
            this.isExitComplete = !1
    }
    update() {
        var d;
        if (!this.node.presenceContext)
            return;
        const { isPresent: r, onExitComplete: s } = this.node.presenceContext
            , { isPresent: l } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || r === l)
            return;
        if (r && l === !1) {
            if (this.isExitComplete) {
                const { initial: f, custom: p } = this.node.getProps();
                if (typeof f == "string") {
                    const m = $n(this.node, f, p);
                    if (m) {
                        const { transition: g, transitionEnd: y, ...w } = m;
                        for (const x in w)
                            (d = this.node.getValue(x)) == null || d.jump(w[x])
                    }
                }
                this.node.animationState.reset(),
                    this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const c = this.node.animationState.setActive("exit", !r);
        s && !r && c.then(() => {
            this.isExitComplete = !0,
                s(this.id)
        }
        )
    }
    mount() {
        const { register: r, onExitComplete: s } = this.node.presenceContext || {};
        s && s(this.id),
            r && (this.unmount = r(this.id))
    }
    unmount() { }
}
const qw = {
    animation: {
        Feature: Qw
    },
    exit: {
        Feature: Zw
    }
};
function Ci(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const Jw = n => r => du(r) && n(r, Ci(r));
function yi(n, r, s, l) {
    return xi(n, r, Jw(s), l)
}
const Tm = ({ current: n }) => n ? n.ownerDocument.defaultView : null
    , Ah = (n, r) => Math.abs(n - r);
function ex(n, r) {
    const s = Ah(n.x, r.x)
        , l = Ah(n.y, r.y);
    return Math.sqrt(s ** 2 + l ** 2)
}
const Lh = new Set(["auto", "scroll"]);
class Cm {
    constructor(r, s, { transformPagePoint: l, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: p } = {}) {
        if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.lastRawMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.scrollPositions = new Map,
            this.removeScrollListeners = null,
            this.onElementScroll = C => {
                this.handleScroll(C.target)
            }
            ,
            this.onWindowScroll = () => {
                this.handleScroll(window)
            }
            ,
            this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = zs(this.lastRawMoveEventInfo, this.transformPagePoint));
                const C = va(this.lastMoveEventInfo, this.history)
                    , A = this.startEvent !== null
                    , R = ex(C.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!A && !R)
                    return;
                const { point: L } = C
                    , { timestamp: I } = Ye;
                this.history.push({
                    ...L,
                    timestamp: I
                });
                const { onStart: B, onMove: O } = this.handlers;
                A || (B && B(this.lastMoveEvent, C),
                    this.startEvent = this.lastMoveEvent),
                    O && O(this.lastMoveEvent, C)
            }
            ,
            this.handlePointerMove = (C, A) => {
                this.lastMoveEvent = C,
                    this.lastRawMoveEventInfo = A,
                    this.lastMoveEventInfo = zs(A, this.transformPagePoint),
                    ye.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (C, A) => {
                this.end();
                const { onEnd: R, onSessionEnd: L, resumeAnimation: I } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && I && I(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const B = va(C.type === "pointercancel" ? this.lastMoveEventInfo : zs(A, this.transformPagePoint), this.history);
                this.startEvent && R && R(C, B),
                    L && L(C, B)
            }
            ,
            !du(r))
            return;
        this.dragSnapToOrigin = d,
            this.handlers = s,
            this.transformPagePoint = l,
            this.distanceThreshold = f,
            this.contextWindow = c || window;
        const m = Ci(r)
            , g = zs(m, this.transformPagePoint)
            , { point: y } = g
            , { timestamp: w } = Ye;
        this.history = [{
            ...y,
            timestamp: w
        }];
        const { onSessionStart: x } = s;
        x && x(r, va(g, this.history)),
            this.removeListeners = Si(yi(this.contextWindow, "pointermove", this.handlePointerMove), yi(this.contextWindow, "pointerup", this.handlePointerUp), yi(this.contextWindow, "pointercancel", this.handlePointerUp)),
            p && this.startScrollTracking(p)
    }
    startScrollTracking(r) {
        let s = r.parentElement;
        for (; s;) {
            const l = getComputedStyle(s);
            (Lh.has(l.overflowX) || Lh.has(l.overflowY)) && this.scrollPositions.set(s, {
                x: s.scrollLeft,
                y: s.scrollTop
            }),
                s = s.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
            window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.addEventListener("scroll", this.onWindowScroll),
            this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }),
                    window.removeEventListener("scroll", this.onWindowScroll)
            }
    }
    handleScroll(r) {
        const s = this.scrollPositions.get(r);
        if (!s)
            return;
        const l = r === window
            , c = l ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: r.scrollLeft,
                y: r.scrollTop
            }
            , d = {
                x: c.x - s.x,
                y: c.y - s.y
            };
        d.x === 0 && d.y === 0 || (l ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x,
            this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x,
                this.history[0].y -= d.y),
            this.scrollPositions.set(r, c),
            ye.update(this.updatePoint, !0))
    }
    updateHandlers(r) {
        this.handlers = r
    }
    end() {
        this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            Tn(this.updatePoint)
    }
}
function zs(n, r) {
    return r ? {
        point: r(n.point)
    } : n
}
function Rh(n, r) {
    return {
        x: n.x - r.x,
        y: n.y - r.y
    }
}
function va({ point: n }, r) {
    return {
        point: n,
        delta: Rh(n, Em(r)),
        offset: Rh(n, tx(r)),
        velocity: nx(r, .1)
    }
}
function tx(n) {
    return n[0]
}
function Em(n) {
    return n[n.length - 1]
}
function nx(n, r) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
        , l = null;
    const c = Em(n);
    for (; s >= 0 && (l = n[s],
        !(c.timestamp - l.timestamp > mt(r)));)
        s--;
    if (!l)
        return {
            x: 0,
            y: 0
        };
    l === n[0] && n.length > 2 && c.timestamp - l.timestamp > mt(r) * 2 && (l = n[1]);
    const d = kt(c.timestamp - l.timestamp);
    if (d === 0)
        return {
            x: 0,
            y: 0
        };
    const f = {
        x: (c.x - l.x) / d,
        y: (c.y - l.y) / d
    };
    return f.x === 1 / 0 && (f.x = 0),
        f.y === 1 / 0 && (f.y = 0),
        f
}
function rx(n, { min: r, max: s }, l) {
    return r !== void 0 && n < r ? n = l ? Ce(r, n, l.min) : Math.max(n, r) : s !== void 0 && n > s && (n = l ? Ce(s, n, l.max) : Math.min(n, s)),
        n
}
function Dh(n, r, s) {
    return {
        min: r !== void 0 ? n.min + r : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function ix(n, { top: r, left: s, bottom: l, right: c }) {
    return {
        x: Dh(n.x, s, c),
        y: Dh(n.y, r, l)
    }
}
function Vh(n, r) {
    let s = r.min - n.min
        , l = r.max - n.max;
    return r.max - r.min < n.max - n.min && ([s, l] = [l, s]),
    {
        min: s,
        max: l
    }
}
function sx(n, r) {
    return {
        x: Vh(n.x, r.x),
        y: Vh(n.y, r.y)
    }
}
function ox(n, r) {
    let s = .5;
    const l = rt(n)
        , c = rt(r);
    return c > l ? s = gi(r.min, r.max - l, n.min) : l > c && (s = gi(n.min, n.max - c, r.min)),
        $t(0, 1, s)
}
function lx(n, r) {
    const s = {};
    return r.min !== void 0 && (s.min = r.min - n.min),
        r.max !== void 0 && (s.max = r.max - n.min),
        s
}
const Ha = .35;
function ax(n = Ha) {
    return n === !1 ? n = 0 : n === !0 && (n = Ha),
    {
        x: jh(n, "left", "right"),
        y: jh(n, "top", "bottom")
    }
}
function jh(n, r, s) {
    return {
        min: _h(n, r),
        max: _h(n, s)
    }
}
function _h(n, r) {
    return typeof n == "number" ? n : n[r] || 0
}
const ux = new WeakMap;
class cx {
    constructor(r) {
        this.openDragLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = We(),
            this.latestPointerEvent = null,
            this.latestPanInfo = null,
            this.visualElement = r
    }
    start(r, { snapToCursor: s = !1, distanceThreshold: l } = {}) {
        const { presenceContext: c } = this.visualElement;
        if (c && c.isPresent === !1)
            return;
        const d = w => {
            s && this.snapToCursor(Ci(w).point),
                this.stopAnimation()
        }
            , f = (w, x) => {
                const { drag: C, dragPropagation: A, onDragStart: R } = this.getProps();
                if (C && !A && (this.openDragLock && this.openDragLock(),
                    this.openDragLock = W0(C),
                    !this.openDragLock))
                    return;
                this.latestPointerEvent = w,
                    this.latestPanInfo = x,
                    this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                    Bt(I => {
                        let B = this.getAxisMotionValue(I).get() || 0;
                        if (Wt.test(B)) {
                            const { projection: O } = this.visualElement;
                            if (O && O.layout) {
                                const U = O.layout.layoutBox[I];
                                U && (B = rt(U) * (parseFloat(B) / 100))
                            }
                        }
                        this.originPoint[I] = B
                    }
                    ),
                    R && ye.update(() => R(w, x), !1, !0),
                    _a(this.visualElement, "transform");
                const { animationState: L } = this.visualElement;
                L && L.setActive("whileDrag", !0)
            }
            , p = (w, x) => {
                this.latestPointerEvent = w,
                    this.latestPanInfo = x;
                const { dragPropagation: C, dragDirectionLock: A, onDirectionLock: R, onDrag: L } = this.getProps();
                if (!C && !this.openDragLock)
                    return;
                const { offset: I } = x;
                if (A && this.currentDirection === null) {
                    this.currentDirection = dx(I),
                        this.currentDirection !== null && R && R(this.currentDirection);
                    return
                }
                this.updateAxis("x", x.point, I),
                    this.updateAxis("y", x.point, I),
                    this.visualElement.render(),
                    L && ye.update(() => L(w, x), !1, !0)
            }
            , m = (w, x) => {
                this.latestPointerEvent = w,
                    this.latestPanInfo = x,
                    this.stop(w, x),
                    this.latestPointerEvent = null,
                    this.latestPanInfo = null
            }
            , g = () => {
                const { dragSnapToOrigin: w } = this.getProps();
                (w || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            }
            , { dragSnapToOrigin: y } = this.getProps();
        this.panSession = new Cm(r, {
            onSessionStart: d,
            onStart: f,
            onMove: p,
            onSessionEnd: m,
            resumeAnimation: g
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: l,
            contextWindow: Tm(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(r, s) {
        const l = r || this.latestPointerEvent
            , c = s || this.latestPanInfo
            , d = this.isDragging;
        if (this.cancel(),
            !d || !c || !l)
            return;
        const { velocity: f } = c;
        this.startAnimation(f);
        const { onDragEnd: p } = this.getProps();
        p && ye.postRender(() => p(l, c))
    }
    cancel() {
        this.isDragging = !1;
        const { projection: r, animationState: s } = this.visualElement;
        r && (r.isAnimationBlocked = !1),
            this.endPanSession();
        const { dragPropagation: l } = this.getProps();
        !l && this.openDragLock && (this.openDragLock(),
            this.openDragLock = null),
            s && s.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
            this.panSession = void 0
    }
    updateAxis(r, s, l) {
        const { drag: c } = this.getProps();
        if (!l || !Os(r, c, this.currentDirection))
            return;
        const d = this.getAxisMotionValue(r);
        let f = this.originPoint[r] + l[r];
        this.constraints && this.constraints[r] && (f = rx(f, this.constraints[r], this.elastic[r])),
            d.set(f)
    }
    resolveConstraints() {
        var d;
        const { dragConstraints: r, dragElastic: s } = this.getProps()
            , l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout
            , c = this.constraints;
        r && yr(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && l ? this.constraints = ix(l.layoutBox, r) : this.constraints = !1,
            this.elastic = ax(s),
            c !== this.constraints && !yr(r) && l && this.constraints && !this.hasMutatedConstraints && Bt(f => {
                this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = lx(l.layoutBox[f], this.constraints[f]))
            }
            )
    }
    resolveRefConstraints() {
        const { dragConstraints: r, onMeasureDragConstraints: s } = this.getProps();
        if (!r || !yr(r))
            return !1;
        const l = r.current
            , { projection: c } = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const d = g1(l, c.root, this.visualElement.getTransformPagePoint());
        let f = sx(c.layout.layoutBox, d);
        if (s) {
            const p = s(p1(f));
            this.hasMutatedConstraints = !!p,
                p && (f = Gp(p))
        }
        return f
    }
    startAnimation(r) {
        const { drag: s, dragMomentum: l, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: p } = this.getProps()
            , m = this.constraints || {}
            , g = Bt(y => {
                if (!Os(y, s, this.currentDirection))
                    return;
                let w = m && m[y] || {};
                (f === !0 || f === y) && (w = {
                    min: 0,
                    max: 0
                });
                const x = c ? 200 : 1e6
                    , C = c ? 40 : 1e7
                    , A = {
                        type: "inertia",
                        velocity: l ? r[y] : 0,
                        bounceStiffness: x,
                        bounceDamping: C,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...d,
                        ...w
                    };
                return this.startAxisValueAnimation(y, A)
            }
            );
        return Promise.all(g).then(p)
    }
    startAxisValueAnimation(r, s) {
        const l = this.getAxisMotionValue(r);
        return _a(this.visualElement, r),
            l.start(lu(r, l, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        Bt(r => this.getAxisMotionValue(r).stop())
    }
    getAxisMotionValue(r) {
        const s = `_drag${r.toUpperCase()}`
            , l = this.visualElement.getProps()
            , c = l[s];
        return c || this.visualElement.getValue(r, (l.initial ? l.initial[r] : void 0) || 0)
    }
    snapToCursor(r) {
        Bt(s => {
            const { drag: l } = this.getProps();
            if (!Os(s, l, this.currentDirection))
                return;
            const { projection: c } = this.visualElement
                , d = this.getAxisMotionValue(s);
            if (c && c.layout) {
                const { min: f, max: p } = c.layout.layoutBox[s]
                    , m = d.get() || 0;
                d.set(r[s] - Ce(f, p, .5) + m)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag: r, dragConstraints: s } = this.getProps()
            , { projection: l } = this.visualElement;
        if (!yr(s) || !l || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        Bt(f => {
            const p = this.getAxisMotionValue(f);
            if (p && this.constraints !== !1) {
                const m = p.get();
                c[f] = ox({
                    min: m,
                    max: m
                }, this.constraints[f])
            }
        }
        );
        const { transformTemplate: d } = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none",
            l.root && l.root.updateScroll(),
            l.updateLayout(),
            this.constraints = !1,
            this.resolveConstraints(),
            Bt(f => {
                if (!Os(f, r, null))
                    return;
                const p = this.getAxisMotionValue(f)
                    , { min: m, max: g } = this.constraints[f];
                p.set(Ce(m, g, c[f]))
            }
            ),
            this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        ux.set(this.visualElement, this);
        const r = this.visualElement.current
            , s = yi(r, "pointerdown", g => {
                const { drag: y, dragListener: w = !0 } = this.getProps()
                    , x = g.target
                    , C = x !== r && Y0(x);
                y && w && !C && this.start(g)
            }
            );
        let l;
        const c = () => {
            const { dragConstraints: g } = this.getProps();
            yr(g) && g.current && (this.constraints = this.resolveRefConstraints(),
                l || (l = fx(r, g.current, () => this.scalePositionWithinConstraints())))
        }
            , { projection: d } = this.visualElement
            , f = d.addEventListener("measure", c);
        d && !d.layout && (d.root && d.root.updateScroll(),
            d.updateLayout()),
            ye.read(c);
        const p = xi(window, "resize", () => this.scalePositionWithinConstraints())
            , m = d.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: y }) => {
                this.isDragging && y && (Bt(w => {
                    const x = this.getAxisMotionValue(w);
                    x && (this.originPoint[w] += g[w].translate,
                        x.set(x.get() + g[w].translate))
                }
                ),
                    this.visualElement.render())
            }
            ));
        return () => {
            p(),
                s(),
                f(),
                m && m(),
                l && l()
        }
    }
    getProps() {
        const r = this.visualElement.getProps()
            , { drag: s = !1, dragDirectionLock: l = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = Ha, dragMomentum: p = !0 } = r;
        return {
            ...r,
            drag: s,
            dragDirectionLock: l,
            dragPropagation: c,
            dragConstraints: d,
            dragElastic: f,
            dragMomentum: p
        }
    }
}
function Ih(n) {
    let r = !0;
    return () => {
        if (r) {
            r = !1;
            return
        }
        n()
    }
}
function fx(n, r, s) {
    const l = Kd(n, Ih(s))
        , c = Kd(r, Ih(s));
    return () => {
        l(),
            c()
    }
}
function Os(n, r, s) {
    return (r === !0 || r === n) && (s === null || s === n)
}
function dx(n, r = 10) {
    let s = null;
    return Math.abs(n.y) > r ? s = "y" : Math.abs(n.x) > r && (s = "x"),
        s
}
class hx extends Cn {
    constructor(r) {
        super(r),
            this.removeGroupControls = Ct,
            this.removeListeners = Ct,
            this.controls = new cx(r)
    }
    mount() {
        const { dragControls: r } = this.node.getProps();
        r && (this.removeGroupControls = r.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || Ct
    }
    update() {
        const { dragControls: r } = this.node.getProps()
            , { dragControls: s } = this.node.prevProps || {};
        r !== s && (this.removeGroupControls(),
            r && (this.removeGroupControls = r.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession()
    }
}
const wa = n => (r, s) => {
    n && ye.update(() => n(r, s), !1, !0)
}
    ;
class px extends Cn {
    constructor() {
        super(...arguments),
            this.removePointerDownListener = Ct
    }
    onPointerDown(r) {
        this.session = new Cm(r, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Tm(this.node)
        })
    }
    createPanHandlers() {
        const { onPanSessionStart: r, onPanStart: s, onPan: l, onPanEnd: c } = this.node.getProps();
        return {
            onSessionStart: wa(r),
            onStart: wa(s),
            onMove: wa(l),
            onEnd: (d, f) => {
                delete this.session,
                    c && ye.postRender(() => c(d, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = yi(this.node.current, "pointerdown", r => this.onPointerDown(r))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
            this.session && this.session.end()
    }
}
let xa = !1;
class mx extends K.Component {
    componentDidMount() {
        const { visualElement: r, layoutGroup: s, switchLayoutGroup: l, layoutId: c } = this.props
            , { projection: d } = r;
        d && (s.group && s.group.add(d),
            l && l.register && c && l.register(d),
            xa && d.root.didUpdate(),
            d.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }
            ),
            d.setOptions({
                ...d.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })),
            Xs.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(r) {
        const { layoutDependency: s, visualElement: l, drag: c, isPresent: d } = this.props
            , { projection: f } = l;
        return f && (f.isPresent = d,
            r.layoutDependency !== s && f.setOptions({
                ...f.options,
                layoutDependency: s
            }),
            xa = !0,
            c || r.layoutDependency !== s || s === void 0 || r.isPresent !== d ? f.willUpdate() : this.safeToRemove(),
            r.isPresent !== d && (d ? f.promote() : f.relegate() || ye.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove()
            }
            ))),
            null
    }
    componentDidUpdate() {
        const { visualElement: r, layoutAnchor: s } = this.props
            , { projection: l } = r;
        l && (l.options.layoutAnchor = s,
            l.root.didUpdate(),
            fu.postRender(() => {
                !l.currentAnimation && l.isLead() && this.safeToRemove()
            }
            ))
    }
    componentWillUnmount() {
        const { visualElement: r, layoutGroup: s, switchLayoutGroup: l } = this.props
            , { projection: c } = r;
        xa = !0,
            c && (c.scheduleCheckAfterUnmount(),
                s && s.group && s.group.remove(c),
                l && l.deregister && l.deregister(c))
    }
    safeToRemove() {
        const { safeToRemove: r } = this.props;
        r && r()
    }
    render() {
        return null
    }
}
function Pm(n) {
    const [r, s] = kw()
        , l = K.useContext(Uh);
    return P.jsx(mx, {
        ...n,
        layoutGroup: l,
        switchLayoutGroup: K.useContext(Sm),
        isPresent: r,
        safeToRemove: s
    })
}
const yx = {
    pan: {
        Feature: px
    },
    drag: {
        Feature: hx,
        ProjectionNode: hm,
        MeasureLayout: Pm
    }
};
function Fh(n, r, s) {
    const { props: l } = n;
    n.animationState && l.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const c = "onHover" + s
        , d = l[c];
    d && ye.postRender(() => d(r, Ci(r)))
}
class gx extends Cn {
    mount() {
        const { current: r } = this.node;
        r && (this.unmount = H0(r, (s, l) => (Fh(this.node, l, "Start"),
            c => Fh(this.node, c, "End"))))
    }
    unmount() { }
}
class vx extends Cn {
    constructor() {
        super(...arguments),
            this.isActive = !1
    }
    onFocus() {
        let r = !1;
        try {
            r = this.node.current.matches(":focus-visible")
        } catch {
            r = !0
        }
        !r || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
    }
    mount() {
        this.unmount = Si(xi(this.node.current, "focus", () => this.onFocus()), xi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}
function zh(n, r, s) {
    const { props: l } = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && l.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const c = "onTap" + (s === "End" ? "" : s)
        , d = l[c];
    d && ye.postRender(() => d(r, Ci(r)))
}
class wx extends Cn {
    mount() {
        const { current: r } = this.node;
        if (!r)
            return;
        const { globalTapTarget: s, propagate: l } = this.node.props;
        this.unmount = b0(r, (c, d) => (zh(this.node, d, "Start"),
            (f, { success: p }) => zh(this.node, f, p ? "End" : "Cancel")), {
            useGlobalTarget: s,
            stopPropagation: (l == null ? void 0 : l.tap) === !1
        })
    }
    unmount() { }
}
const Ka = new WeakMap
    , Sa = new WeakMap
    , xx = n => {
        const r = Ka.get(n.target);
        r && r(n)
    }
    , Sx = n => {
        n.forEach(xx)
    }
    ;
function kx({ root: n, ...r }) {
    const s = n || document;
    Sa.has(s) || Sa.set(s, {});
    const l = Sa.get(s)
        , c = JSON.stringify(r);
    return l[c] || (l[c] = new IntersectionObserver(Sx, {
        root: n,
        ...r
    })),
        l[c]
}
function Tx(n, r, s) {
    const l = kx(r);
    return Ka.set(n, s),
        l.observe(n),
        () => {
            Ka.delete(n),
                l.unobserve(n)
        }
}
const Cx = {
    some: 0,
    all: 1
};
class Ex extends Cn {
    constructor() {
        super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
    startObserver() {
        var m;
        (m = this.stopObserver) == null || m.call(this);
        const { viewport: r = {} } = this.node.getProps()
            , { root: s, margin: l, amount: c = "some", once: d } = r
            , f = {
                root: s ? s.current : void 0,
                rootMargin: l,
                threshold: typeof c == "number" ? c : Cx[c]
            }
            , p = g => {
                const { isIntersecting: y } = g;
                if (this.isInView === y || (this.isInView = y,
                    d && !y && this.hasEnteredView))
                    return;
                y && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", y);
                const { onViewportEnter: w, onViewportLeave: x } = this.node.getProps()
                    , C = y ? w : x;
                C && C(g)
            }
            ;
        this.stopObserver = Tx(this.node.current, f, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const { props: r, prevProps: s } = this.node;
        ["amount", "margin", "root"].some(Px(r, s)) && this.startObserver()
    }
    unmount() {
        var r;
        (r = this.stopObserver) == null || r.call(this),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
}
function Px({ viewport: n = {} }, { viewport: r = {} } = {}) {
    return s => n[s] !== r[s]
}
const Mx = {
    inView: {
        Feature: Ex
    },
    tap: {
        Feature: wx
    },
    focus: {
        Feature: vx
    },
    hover: {
        Feature: gx
    }
}
    , Nx = {
        layout: {
            ProjectionNode: hm,
            MeasureLayout: Pm
        }
    }
    , Ax = {
        ...qw,
        ...Mx,
        ...yx,
        ...Nx
    }
    , xn = Xw(Ax, Yw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
    , Rx = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, s, l) => l ? l.toUpperCase() : s.toLowerCase())
    , Oh = n => {
        const r = Rx(n);
        return r.charAt(0).toUpperCase() + r.slice(1)
    }
    , Mm = (...n) => n.filter((r, s, l) => !!r && r.trim() !== "" && l.indexOf(r) === s).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = K.forwardRef(({ color: n = "currentColor", size: r = 24, strokeWidth: s = 2, absoluteStrokeWidth: l, className: c = "", children: d, iconNode: f, ...p }, m) => K.createElement("svg", {
    ref: m,
    ...Dx,
    width: r,
    height: r,
    stroke: n,
    strokeWidth: l ? Number(s) * 24 / Number(r) : s,
    className: Mm("lucide", c),
    ...p
}, [...f.map(([g, y]) => K.createElement(g, y)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = (n, r) => {
    const s = K.forwardRef(({ className: l, ...c }, d) => K.createElement(Vx, {
        ref: d,
        iconNode: r,
        className: Mm(`lucide-${Lx(Oh(n))}`, `lucide-${n}`, l),
        ...c
    }));
    return s.displayName = Oh(n),
        s
}
    ;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
    , Nm = Ie("arrow-right", jx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]
    , Ix = Ie("camera", _x);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]
    , zx = Ie("chevron-left", Fx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
    , Bx = Ie("chevron-right", Ox);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]
    , Wx = Ie("facebook", Ux);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M7 3v18",
    key: "bbkbws"
}], ["path", {
    d: "M3 7.5h4",
    key: "zfgn84"
}], ["path", {
    d: "M3 12h18",
    key: "1i2n21"
}], ["path", {
    d: "M3 16.5h4",
    key: "1230mu"
}], ["path", {
    d: "M17 3v18",
    key: "in4fa5"
}], ["path", {
    d: "M17 7.5h4",
    key: "myr1c1"
}], ["path", {
    d: "M17 16.5h4",
    key: "go4c1d"
}]]
    , Hx = Ie("film", $x);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kx = [["path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
    key: "j76jl0"
}], ["path", {
    d: "M22 10v6",
    key: "1lu8f3"
}], ["path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
    key: "1r8lef"
}]]
    , Gx = Ie("graduation-cap", Kx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]
    , Yx = Ie("instagram", Xx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]
    , Bh = Ie("mail", Qx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = [["path", {
    d: "m3 11 18-5v12L3 14v-3z",
    key: "n962bs"
}], ["path", {
    d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
    key: "1yl0tm"
}]]
    , Zx = Ie("megaphone", bx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]
    , Jx = Ie("menu", qx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = [["circle", {
    cx: "8",
    cy: "18",
    r: "4",
    key: "1fc0mg"
}], ["path", {
    d: "M12 18V2l7 4",
    key: "g04rme"
}]]
    , tS = Ie("music-2", eS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nS = [["rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "zuxfzm"
}], ["rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    rx: "1",
    key: "1okwgv"
}]]
    , rS = Ie("pause", nS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iS = [["polygon", {
    points: "6 3 20 12 6 21 6 3",
    key: "1oa8hb"
}]]
    , xu = Ie("play", iS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sS = [["path", {
    d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
    key: "1bo67w"
}], ["rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1",
    key: "1bkyp8"
}], ["circle", {
    cx: "17.5",
    cy: "17.5",
    r: "3.5",
    key: "w3z12y"
}]]
    , oS = Ie("shapes", sS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]
    , aS = Ie("smartphone", lS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]
    , cS = Ie("sparkles", uS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
    , dS = Ie("star", fS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]
    , pS = Ie("volume-2", hS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mS = [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]]
    , yS = Ie("volume-x", mS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
    , vS = Ie("x", gS)
    , wS = "/fotoku.jpeg"
    , xS = "/videoku.mp4"
    , Tt = "#202020"
    , mr = ["arimaulana18a", "gmail", "com"]
    , Te = "#ffee01"
    , SS = [{
        icon: Hx,
        title: "Video Editing",
        desc: "Cut, color, and pacing crafted to keep eyes glued to the screen."
    }, {
        icon: Ix,
        title: "Cinematography",
        desc: "Composed shots and motion that tell your story with intention."
    }, {
        icon: tS,
        title: "Sound Design",
        desc: "Audio mixing and effects that make every cut feel alive."
    }]
    , kS = ["After Effects", "CapCut", "Canva", "Photoshop"]
    , TS = [{
        category: "Short-Form Content",
        icon: Yx,
        blurb: "Trendy vertical edits built for reels, shorts, and TikTok virality.",
        videos: [{
            id: "1-P_AWb6ZHd8sqITrxiyS_U-ESuikJb41",
            href: "https://drive.google.com/file/d/1-P_AWb6ZHd8sqITrxiyS_U-ESuikJb41/view?usp=drive_link"
        }, {
            id: "1ZO89IHcC_UErSb00Zi1vH7J8IV5Unv-f",
            href: "https://drive.google.com/file/d/1ZO89IHcC_UErSb00Zi1vH7J8IV5Unv-f/view?usp=drive_link"
        }, {
            id: "1YpHSAaMdvSd86eDEnqEbS2IGtyw9sFCk",
            href: "https://drive.google.com/file/d/1YpHSAaMdvSd86eDEnqEbS2IGtyw9sFCk/view?usp=drive_link"   
        }, {
            id: "1WGBlpNBsNGkGBzOum0xa8rniil6sFOsj",
            href: "https://drive.google.com/file/d/1WGBlpNBsNGkGBzOum0xa8rniil6sFOsj/view?usp=drive_link"
        }],
        folderLink: "https://drive.google.com/drive/folders/1Up61Jjqp4Z7Y6chVC3iXZu1cf9Z8qekH?usp=drive_link",
        tags: ["Reels", "Shorts", "TikTok"]
    }, {
        category: "Event & Sports",
        icon: cS,
        blurb: "High-energy event coverage and fast-paced action shots cut into dynamic showpieces.",
        videos: [{
            id: "1Pp8IaHCHKYY-cDaG-RFvVRIjB4X-aa0J",
            href: "https://drive.google.com/file/d/1Pp8IaHCHKYY-cDaG-RFvVRIjB4X-aa0J/view?usp=drive_link"
        }, {
            id: "19y7-24B09pand2i_lw8rXpN2Q50828Hz",
            href: "https://drive.google.com/file/d/19y7-24B09pand2i_lw8rXpN2Q50828Hz/view?usp=drive_link"
        }, {
            id: "1m3KT1Hosg_fMd7uupGcj-1lBMqxxgX_U",
            href: "https://drive.google.com/file/d/1m3KT1Hosg_fMd7uupGcj-1lBMqxxgX_U/view?usp=drive_link"
        }],
        folderLink: "https://drive.google.com/drive/folders/1zlN5fKRcBV8isaI-sM_8cFviSgl1OdW0?usp=drive_link",
        tags: ["Road Race 2018", "Events", "Action"]
    }, {
        category: "Educational & Info",
        icon: Gx,
        blurb: "Informative, graphic-heavy content and academic projects built to teach and engage.",
        videos: [{
            id: "1AzrQCdnbxx8LxNQLYztoFN9IbSuTDXx7",
            href: "https://drive.google.com/file/d/1AzrQCdnbxx8LxNQLYztoFN9IbSuTDXx7/view?usp=drive_link"
        }, {
            id: "1Sv0tH_bjBxH53AaWrbX504lO9dSNmBPZ",
            href: "https://drive.google.com/file/d/1Sv0tH_bjBxH53AaWrbX504lO9dSNmBPZ/view?usp=drive_link"
        }, {
            id: "1aDwqgXhJDcpcPLKK6js4U_rqw6NUtk1L",
            href: "https://drive.google.com/file/d/1aDwqgXhJDcpcPLKK6js4U_rqw6NUtk1L/view?usp=drive_link"
        }],
        folderLink: "https://drive.google.com/drive/folders/1qqCUdAdmrKzLSAgMCTr3A8xfATrUmi8V?usp=drive_link",
        tags: ["Fakta Unik", "Tugas Kuliah", "Explainer"]
    }, {
        category: "Motion Graphics",
        icon: oS,
        blurb: "Animated graphics, basic 2D elements, and clean kinetic typography to polish any video.",
        videos: [{
            id: "1fPR-vDREfKKhtTe061SW_-XTygwyoN4D",
            href: "https://drive.google.com/file/d/1fPR-vDREfKKhtTe061SW_-XTygwyoN4D/view?usp=drive_link"
        }, {
            id: "1H-FpDRbaueItgJmNHtv_7_ZTeetpMtZM",
            href: "https://drive.google.com/file/d/1H-FpDRbauegJmNHtv_7_ZTeetpMtZM/view?usp=drive_link"
        }],
        folderLink: "https://drive.google.com/drive/folders/1Sj57FQ4I9-4xNpsQEYUVwlkyhKvJp9U2?usp=drive_link",
        tags: ["Motion", "Animation", "Titles"]
    }, {
        category: "Creative & Contest",
        icon: Zx,
        blurb: "Concept-driven video projects and competition entries designed for impact and storytelling.",
        videos: [{
            id: "1azD_8fopuPGEJWrD8Zs3UHm1bs8YUobF",
            href: "https://drive.google.com/file/d/1azD_8fopuPGEJWrD8Zs3UHm1bs8YUobF/view?usp=drive_link"
        }],
        folderLink: "https://drive.google.com/drive/folders/1iGqMtG-5d94HYLRTBbh_oGAvNicQhvN6?usp=drive_link",
        tags: ["Video Competition", "Creative", "Short Film"]
    }, {
        category: "YouTube & Long-Form",
        icon: aS,
        blurb: "Engaging YouTube content with structured storytelling, clean audio mixing, and pacing.",
        videos: [{
            id: "1UE9aAKQvV2-fcG3dmb8pmya1iZu3i2Zi",
            href: "https://drive.google.com/file/d/1UE9aAKQvV2-fcG3dmb8pmya1iZu3i2Zi/view?usp=drive_link"
        }],
        folderLink: "https://drive.google.com/drive/folders/1Jm-X6CZ0vE8aD4xCHC2i5g6bAZaYlt5F?usp=drive_link",
        tags: ["YouTube", "Documentary", "Vlog"]
    }];
function CS({ category: n, icon: r, blurb: s, videos: l, folderLink: c, tags: d, index: f }) {
    const [p, m] = K.useState(0)
        , [g, y] = K.useState(!1)
        , [w, x] = K.useState(!1)
        , [C, A] = K.useState(!1)
        , [R, L] = K.useState(!1)
        , I = K.useRef(0);
    K.useEffect(() => {
        L(window.matchMedia("(hover: none) and (pointer: coarse)").matches)
    }
        , []),
        K.useEffect(() => {
            if (!g)
                return;
            A(!0);
            const re = setTimeout(() => A(!1), 1800);
            return () => clearTimeout(re)
        }
            , [g]);
    const B = !g || !R && w || C
        , O = l.length;
    function U() {
        y(!0),
            window.dispatchEvent(new CustomEvent("workVideoActivated"))
    }
    function q() {
        U(),
            m(re => (re - 1 + O) % O)
    }
    function se() {
        U(),
            m(re => (re + 1) % O)
    }
    function ae(re) {
        I.current = re.touches[0].clientX
    }
    function te(re) {
        const b = I.current - re.changedTouches[0].clientX;
        Math.abs(b) > 40 && (b > 0 ? se() : q())
    }
    return P.jsxs(xn.div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0
        },
        transition: {
            duration: .5,
            delay: f * .1
        },
        className: "group relative rounded-3xl overflow-hidden border border-white/15",
        onMouseEnter: () => x(!0),
        onMouseLeave: () => x(!1),
        onTouchStart: ae,
        onTouchEnd: te,
        children: [P.jsxs("div", {
            className: "aspect-[4/5] relative overflow-hidden",
            children: [g ? P.jsx("iframe", {
                src: `https://drive.google.com/file/d/${l[p].id}/preview`,
                className: "absolute border-0",
                style: R ? {
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    transform: "scale(0.5)",
                    transformOrigin: "top left"
                } : {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%"
                },
                allow: "autoplay",
                title: `${n} video ${p + 1}`
            }, p) : P.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center cursor-pointer",
                style: {
                    background: "rgba(0,0,0,0.82)"
                },
                onClick: U,
                children: P.jsx("div", {
                    className: "h-16 w-16 rounded-full flex items-center justify-center shadow-2xl pointer-events-none",
                    style: {
                        background: Te
                    },
                    children: P.jsx(xu, {
                        className: "h-7 w-7 fill-black text-black ml-1"
                    })
                })
            }), P.jsx("div", {
                className: "absolute inset-0 pointer-events-none transition-opacity duration-500",
                style: {
                    background: `linear-gradient(180deg, transparent 55%, ${Tt}f0 100%)`,
                    opacity: B ? 1 : 0
                }
            }), P.jsx("div", {
                className: "absolute left-0 top-0 bottom-0 z-30 flex items-center pl-3 transition-opacity duration-200",
                style: {
                    width: "20%",
                    opacity: B || R ? 1 : 0,
                    pointerEvents: B || R ? "auto" : "none"
                },
                onTouchStart: ae,
                onTouchEnd: te,
                children: P.jsx("button", {
                    onClick: q,
                    className: "h-9 w-9 rounded-full flex items-center justify-center",
                    style: {
                        background: "rgba(0,0,0,0.45)"
                    },
                    children: P.jsx(zx, {
                        className: "h-5 w-5 text-white"
                    })
                })
            }), P.jsx("div", {
                className: "absolute right-0 top-0 bottom-0 z-30 flex items-center justify-end pr-3 transition-opacity duration-200",
                style: {
                    width: "20%",
                    opacity: B || R ? 1 : 0,
                    pointerEvents: B || R ? "auto" : "none"
                },
                onTouchStart: ae,
                onTouchEnd: te,
                children: P.jsx("button", {
                    onClick: se,
                    className: "h-9 w-9 rounded-full flex items-center justify-center",
                    style: {
                        background: "rgba(0,0,0,0.45)"
                    },
                    children: P.jsx(Bx, {
                        className: "h-5 w-5 text-white"
                    })
                })
            }), P.jsx("div", {
                className: "absolute top-5 left-5 h-11 w-11 rounded-xl flex items-center justify-center z-30 transition-opacity duration-500",
                style: {
                    background: Te,
                    color: Tt,
                    opacity: B ? 1 : 0
                },
                children: P.jsx(r, {
                    className: "h-5 w-5"
                })
            })]
        }), P.jsxs("div", {
            className: "absolute bottom-0 left-0 right-0 p-6 z-40 transition-opacity duration-500",
            style: {
                opacity: B ? 1 : 0,
                pointerEvents: B ? "auto" : "none"
            },
            children: [P.jsxs("div", {
                className: "flex items-center justify-between mb-2",
                children: [P.jsx("div", {
                    className: "text-xl tracking-tight",
                    children: n
                }), P.jsx("div", {
                    className: "flex items-center gap-1.5",
                    children: l.map((re, b) => P.jsx("button", {
                        onClick: () => m(b),
                        className: "h-1.5 rounded-full transition-all duration-200",
                        style: {
                            width: b === p ? "20px" : "6px",
                            background: b === p ? Te : "rgba(255,255,255,0.35)"
                        }
                    }, b))
                })]
            }), P.jsx("p", {
                className: "text-sm text-white/70 leading-relaxed",
                children: s
            }), P.jsxs("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [d.map(re => P.jsx("span", {
                    className: "text-xs px-3 py-1 rounded-full border border-white/30",
                    children: re
                }, re)), P.jsxs("a", {
                    href: c,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ml-auto inline-flex items-center gap-1 text-xs tracking-wide",
                    style: {
                        color: Te
                    },
                    children: ["View all ", P.jsx(Nm, {
                        className: "h-3 w-3"
                    })]
                })]
            })]
        })]
    })
}
function Bs({ className: n = "" }) {
    return P.jsx("div", {
        className: `pointer-events-none absolute rounded-full blur-3xl opacity-40 ${n}`,
        style: {
            background: `radial-gradient(circle, ${Te} 0%, transparent 70%)`
        }
    })
}
function ES({ src: n }) {
    const r = K.useRef(null)
        , [s, l] = K.useState(!0)
        , [c, d] = K.useState(!0)
        , [f, p] = K.useState(!1)
        , [m, g] = K.useState(!0);
    K.useEffect(() => {
        const C = setTimeout(() => g(!1), 1800);
        return () => clearTimeout(C)
    }
        , []),
        K.useEffect(() => {
            function C() {
                r.current && (r.current.muted = !0,
                    d(!0))
            }
            return window.addEventListener("workVideoActivated", C),
                () => window.removeEventListener("workVideoActivated", C)
        }
            , []);
    const y = f || m;
    function w() {
        r.current && (s ? r.current.pause() : r.current.play(),
            l(C => !C))
    }
    function x() {
        r.current && (r.current.muted = !c,
            d(C => !C))
    }
    return P.jsxs("div", {
        className: "relative pb-14",
        onMouseEnter: () => p(!0),
        onMouseLeave: () => p(!1),
        children: [P.jsx("div", {
            className: "absolute inset-0 rounded-3xl blur-3xl opacity-20 scale-90",
            style: {
                background: Te
            }
        }), P.jsxs("div", {
            className: "relative aspect-[3/4] rounded-3xl overflow-hidden",
            style: {
                border: `1px solid ${Te}55`
            },
            children: [P.jsx("video", {
                ref: r,
                src: n,
                className: "h-full w-full object-cover",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
            }), P.jsx("div", {
                className: "absolute inset-0",
                style: {
                    background: `linear-gradient(180deg, ${Tt}55 0%, transparent 28%, transparent 52%, ${Tt}ee 100%)`
                }
            }), P.jsxs("div", {
                className: "absolute top-4 left-4 right-4 flex items-center justify-between",
                children: [P.jsxs("div", {
                    className: "flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-sm",
                    style: {
                        background: "rgba(0,0,0,0.35)"
                    },
                    children: [P.jsx("span", {
                        className: "h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse"
                    }), P.jsx("span", {
                        className: "text-xs tracking-[0.2em] uppercase text-white/80",
                        children: "Showreel"
                    })]
                }), P.jsx("button", {
                    onClick: x,
                    className: "h-8 w-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white/20",
                    style: {
                        background: "rgba(0,0,0,0.35)"
                    },
                    children: c ? P.jsx(yS, {
                        className: "h-3.5 w-3.5 text-white"
                    }) : P.jsx(pS, {
                        className: "h-3.5 w-3.5 text-white"
                    })
                })]
            }), P.jsx("button", {
                onClick: w,
                className: "absolute inset-0 m-auto h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg",
                style: {
                    background: Te,
                    opacity: y ? 1 : 0,
                    pointerEvents: y ? "auto" : "none"
                },
                children: s ? P.jsx(rS, {
                    className: "h-6 w-6 fill-black text-black"
                }) : P.jsx(xu, {
                    className: "h-6 w-6 fill-black text-black ml-0.5"
                })
            }), P.jsxs("div", {
                className: "absolute bottom-5 left-5 right-5",
                children: [P.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [P.jsx("span", {
                        className: "text-xs tracking-[0.25em] uppercase text-white/70",
                        children: "2026 Showreel"
                    }), P.jsx("span", {
                        className: "text-xs text-white/50",
                        children: "0:07"
                    })]
                }), P.jsx("div", {
                    className: "h-px w-full rounded-full overflow-hidden bg-white/20",
                    children: P.jsx("div", {
                        className: "h-full w-2/5 rounded-full",
                        style: {
                            background: Te
                        }
                    })
                })]
            })]
        }), P.jsxs("div", {
            className: "absolute bottom-0 left-2 rounded-2xl px-5 py-4 backdrop-blur-sm border border-white/10",
            style: {
                background: "rgba(255,255,255,0.07)"
            },
            children: [P.jsx("div", {
                className: "text-xs tracking-widest text-white/60 uppercase",
                children: "Based in"
            }), P.jsx("div", {
                className: "text-sm mt-0.5",
                children: "Indonesia · Worldwide"
            })]
        })]
    })
}
function PS() {
    const [n, r] = K.useState(!1)
        , s = [{
            label: "Expertise",
            href: "#expertise"
        }, {
            label: "Tools",
            href: "#tools"
        }, {
            label: "Work",
            href: "#work"
        }, {
            label: "Contact",
            href: "#contact"
        }];
    return P.jsxs("nav", {
        className: "fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b border-white/10",
        style: {
            background: `${Tt}cc`
        },
        children: [P.jsxs("div", {
            className: "flex items-center justify-between px-6 md:px-16 py-5",
            children: [P.jsxs("div", {
                className: "flex items-center gap-2",
                children: [P.jsx("div", {
                    className: "h-9 w-9 rounded-lg flex items-center justify-center",
                    style: {
                        background: Te
                    },
                    children: P.jsx(xu, {
                        className: "h-4 w-4 fill-black text-black"
                    })
                }), P.jsx("span", {
                    className: "tracking-widest",
                    children: "ARI.M"
                })]
            }), P.jsx("div", {
                className: "hidden md:flex items-center gap-10 text-sm tracking-wide text-white/70",
                children: s.map(l => P.jsx("a", {
                    href: l.href,
                    className: "hover:text-white",
                    children: l.label
                }, l.label))
            }), P.jsx("a", {
                href: "#contact",
                className: "hidden md:inline-flex rounded-full px-5 py-2 text-sm tracking-wide",
                style: {
                    background: Te,
                    color: Tt
                },
                children: "DM for commission"
            }), P.jsx("button", {
                className: "md:hidden flex items-center justify-center h-9 w-9 rounded-lg",
                style: {
                    background: "rgba(255,255,255,0.08)"
                },
                onClick: () => r(l => !l),
                "aria-label": "Toggle menu",
                children: n ? P.jsx(vS, {
                    className: "h-5 w-5"
                }) : P.jsx(Jx, {
                    className: "h-5 w-5"
                })
            })]
        }), n && P.jsxs("div", {
            className: "md:hidden flex flex-col px-6 pb-6 gap-5 border-t border-white/10",
            style: {
                background: `${Tt}ee`
            },
            children: [s.map(l => P.jsx("a", {
                href: l.href,
                className: "text-white/70 hover:text-white text-sm tracking-wide pt-5 first:pt-5",
                onClick: () => r(!1),
                children: l.label
            }, l.label)), P.jsx("a", {
                href: "#contact",
                className: "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm tracking-wide mt-1",
                style: {
                    background: Te,
                    color: Tt
                },
                onClick: () => r(!1),
                children: "DM for commission"
            })]
        })]
    })
}
function MS() {
    return P.jsxs("div", {
        className: "min-h-screen w-full overflow-x-hidden text-white",
        style: {
            background: Tt
        },
        children: [P.jsx(PS, {}), P.jsxs("section", {
            className: "relative px-6 md:px-16 pt-32 md:pt-36 pb-32",
            children: [P.jsx(Bs, {
                className: "-top-20 -left-40 h-[500px] w-[500px]"
            }), P.jsx(Bs, {
                className: "top-40 right-0 h-[400px] w-[400px]"
            }), P.jsxs("div", {
                className: "relative z-10 grid md:grid-cols-12 gap-12 items-center",
                children: [P.jsxs("div", {
                    className: "md:col-span-7",
                    children: [P.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [P.jsx("img", {
                            src: wS,
                            alt: "Ari Maulana",
                            className: "h-12 w-12 rounded-full object-cover border-2 flex-shrink-0",
                            style: {
                                borderColor: Te
                            }
                        }), P.jsxs("div", {
                            className: "text-sm text-white/60 leading-tight",
                            children: [P.jsx("div", {
                                className: "text-white font-medium",
                                children: "Ari Maulana"
                            }), P.jsx("div", {
                                children: "Video Editor · Indonesia"
                            })]
                        })]
                    }), P.jsxs(xn.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs tracking-[0.2em] uppercase",
                        children: [P.jsx("span", {
                            className: "h-1.5 w-1.5 rounded-full",
                            style: {
                                background: Te
                            }
                        }), "Portfolio 2026"]
                    }), P.jsxs(xn.h1, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .7,
                            delay: .1
                        },
                        className: "mt-6 leading-[0.95] tracking-tight",
                        style: {
                            fontSize: "clamp(3rem, 8vw, 7rem)",
                            fontWeight: 700
                        },
                        children: ["Need a ", P.jsx("br", {}), P.jsx("span", {
                            style: {
                                color: Te
                            },
                            children: "video editor?"
                        })]
                    }), P.jsxs(xn.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .25
                        },
                        className: "mt-8 max-w-xl text-white/70 leading-relaxed",
                        children: ["I'm ", P.jsx("span", {
                            className: "text-white",
                            children: "Ari Maulana"
                        }), " - a video editor, cinematographer, and sound designer turning raw footage into stories that scroll-stop, sell, and stick."]
                    }), P.jsxs(xn.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6,
                            delay: .4
                        },
                        className: "mt-10 flex flex-wrap gap-4",
                        children: [P.jsxs("a", {
                            href: "#work",
                            className: "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 tracking-wide",
                            style: {
                                background: Te,
                                color: Tt
                            },
                            children: ["Watch the sample project", P.jsx(Nm, {
                                className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                            })]
                        }), P.jsxs("a", {
                            href: "#contact",
                            className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 tracking-wide hover:bg-white/10",
                            children: [P.jsx(Bh, {
                                className: "h-4 w-4"
                            }), " Get in touch"]
                        })]
                    }), P.jsxs("div", {
                        className: "mt-12 flex items-center gap-8 text-sm text-white/60",
                        children: [P.jsxs("div", {
                            children: [P.jsx("div", {
                                className: "text-white text-2xl",
                                children: "40+"
                            }), P.jsx("div", {
                                children: "Projects edited"
                            })]
                        }), P.jsx("div", {
                            className: "h-10 w-px bg-white/20"
                        }), P.jsxs("div", {
                            children: [P.jsx("div", {
                                className: "text-white text-2xl",
                                children: "5yrs"
                            }), P.jsx("div", {
                                children: "Creating content"
                            })]
                        }), P.jsx("div", {
                            className: "h-10 w-px bg-white/20"
                        }), P.jsxs("div", {
                            children: [P.jsxs("div", {
                                className: "flex items-center gap-1 text-white text-2xl",
                                children: ["4.6 ", P.jsx(dS, {
                                    className: "h-4 w-4 fill-current",
                                    style: {
                                        color: Te
                                    }
                                })]
                            }), P.jsx("div", {
                                children: "Client rating"
                            })]
                        })]
                    })]
                }), P.jsx(xn.div, {
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "md:col-span-5 relative",
                    children: P.jsx(ES, {
                        src: xS
                    })
                })]
            }), P.jsx("div", {
                className: "relative mt-24 overflow-hidden border-y border-white/10 py-6",
                children: P.jsx("div", {
                    className: "flex gap-16 whitespace-nowrap animate-[scroll_30s_linear_infinite]",
                    children: [...Array(2)].flatMap((n, r) => ["Video Editing", "Cinematography", "Sound Design", "Color Grading", "Motion Graphics"].map(s => P.jsxs("span", {
                        className: "text-3xl md:text-5xl tracking-tight",
                        style: {
                            color: r % 2 ? Te : "white"
                        },
                        children: [s, " ✦"]
                    }, `${r}-${s}`)))
                })
            })]
        }), P.jsx("section", {
            id: "expertise",
            className: "relative px-6 md:px-16 py-24",
            children: P.jsxs("div", {
                className: "grid md:grid-cols-12 gap-12",
                children: [P.jsxs("div", {
                    className: "md:col-span-4",
                    children: [P.jsx("div", {
                        className: "text-xs tracking-[0.3em] uppercase text-white/60",
                        children: "01 - Expertise"
                    }), P.jsxs("h2", {
                        className: "mt-4 tracking-tight",
                        style: {
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: 700
                        },
                        children: ["What I ", P.jsx("span", {
                            style: {
                                color: Te
                            },
                            children: "do best"
                        })]
                    })]
                }), P.jsx("div", {
                    className: "md:col-span-8 grid sm:grid-cols-3 gap-6",
                    children: SS.map(n => P.jsxs(xn.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "rounded-2xl border border-white/15 p-6 hover:border-white/40 transition-colors",
                        style: {
                            background: "rgba(255,255,255,0.03)"
                        },
                        children: [P.jsx("div", {
                            className: "h-12 w-12 rounded-xl flex items-center justify-center mb-5",
                            style: {
                                background: Te,
                                color: Tt
                            },
                            children: P.jsx(n.icon, {
                                className: "h-5 w-5"
                            })
                        }), P.jsx("div", {
                            className: "tracking-wide",
                            children: n.title
                        }), P.jsx("p", {
                            className: "mt-3 text-sm text-white/60 leading-relaxed",
                            children: n.desc
                        })]
                    }, n.title))
                })]
            })
        }), P.jsxs("section", {
            id: "tools",
            className: "relative px-6 md:px-16 py-24",
            children: [P.jsxs("div", {
                className: "text-center max-w-2xl mx-auto",
                children: [P.jsx("div", {
                    className: "text-xs tracking-[0.3em] uppercase text-white/60",
                    children: "02 - Tools of the trade"
                }), P.jsxs("h2", {
                    className: "mt-4 tracking-tight",
                    style: {
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 700
                    },
                    children: ["Software I'm ", P.jsx("span", {
                        style: {
                            color: Te
                        },
                        children: "fluent in"
                    })]
                })]
            }), P.jsx("div", {
                className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-4",
                children: kS.map((n, r) => P.jsxs(xn.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .4,
                        delay: r * .08
                    },
                    className: "group relative rounded-2xl border border-white/15 p-8 text-center overflow-hidden",
                    style: {
                        background: "rgba(255,255,255,0.03)"
                    },
                    children: [P.jsx("div", {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                        style: {
                            background: `linear-gradient(135deg, ${Te}33, transparent)`
                        }
                    }), P.jsx("div", {
                        className: "relative tracking-wide text-xl",
                        children: n
                    }), P.jsx("div", {
                        className: "relative mt-2 text-xs text-white/50 tracking-widest uppercase",
                        children: "Pro level"
                    })]
                }, n))
            })]
        }), P.jsxs("section", {
            id: "work",
            className: "relative px-6 md:px-16 py-24",
            children: [P.jsx(Bs, {
                className: "top-40 -right-40 h-[500px] w-[500px]"
            }), P.jsxs("div", {
                className: "relative flex items-end justify-between flex-wrap gap-6",
                children: [P.jsxs("div", {
                    children: [P.jsx("div", {
                        className: "text-xs tracking-[0.3em] uppercase text-white/60",
                        children: "03 - Selected work"
                    }), P.jsxs("h2", {
                        className: "mt-4 tracking-tight",
                        style: {
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: 700
                        },
                        children: ["Proof in the ", P.jsx("span", {
                            style: {
                                color: Te
                            },
                            children: "pixels"
                        })]
                    })]
                }), P.jsx("p", {
                    className: "max-w-md text-white/60",
                    children: "A categorized look at projects spanning short-form social, cinematic highlights, and educational content."
                })]
            }), P.jsx("div", {
                className: "mt-14 grid md:grid-cols-3 gap-6",
                children: TS.map((n, r) => P.jsx(CS, {
                    category: n.category,
                    icon: n.icon,
                    blurb: n.blurb,
                    videos: n.videos,
                    folderLink: n.folderLink,
                    tags: n.tags,
                    index: r
                }, n.category))
            })]
        }), P.jsxs("section", {
            id: "contact",
            className: "relative px-6 md:px-16 py-32 text-center overflow-hidden",
            children: [P.jsx(Bs, {
                className: "-top-20 left-1/2 -translate-x-1/2 h-[600px] w-[600px]"
            }), P.jsxs("div", {
                className: "relative",
                children: [P.jsx("div", {
                    className: "text-xs tracking-[0.3em] uppercase text-white/60",
                    children: "04 - Let's create"
                }), P.jsxs("h2", {
                    className: "mt-6 tracking-tight",
                    style: {
                        fontSize: "clamp(2.5rem, 7vw, 6rem)",
                        fontWeight: 700
                    },
                    children: ["DM for ", P.jsx("span", {
                        style: {
                            color: Te
                        },
                        children: "commission!"
                    })]
                }), P.jsx("p", {
                    className: "mt-6 max-w-xl mx-auto text-white/70",
                    children: "Got footage that needs a story? Let's turn it into something people can't scroll past."
                }), P.jsxs("div", {
                    className: "mt-10 flex flex-wrap gap-4 justify-center",
                    children: [P.jsxs("a", {
                        href: "https://linktr.ee/arigroupindonesia",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 rounded-full px-8 py-4 tracking-wide",
                        style: {
                            background: Te,
                            color: Tt
                        },
                        children: [P.jsx(a0, {
                            className: "h-4 w-4"
                        }), "Check my sosmed"]
                    }), P.jsxs("a", {
                        href: "#",
                        onClick: n => {
                            n.preventDefault();
                            const r = `${mr[0]}@${mr[1]}.${mr[2]}`;
                            window.open(`https://mail.google.com/mail/?view=cm&to=${r}`, "_blank", "noopener,noreferrer")
                        }
                        ,
                        className: "inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 tracking-wide hover:bg-white/10",
                        children: [P.jsx(Bh, {
                            className: "h-4 w-4"
                        }), " ", mr[0], "@", mr[1], ".", mr[2]]
                    })]
                })]
            })]
        }), P.jsxs("footer", {
            className: "border-t border-white/10 px-6 md:px-16 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-white/50",
            children: [P.jsx("div", {
                children: "© 2026 Ari Maulana. All cuts reserved."
            }), P.jsx("div", {
                className: "tracking-widest",
                children: "EDITED WITH MIAW"
            })]
        }), P.jsx("style", {
            children: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `
        })]
    })
}
Vg.createRoot(document.getElementById("root")).render(P.jsx(MS, {}));
