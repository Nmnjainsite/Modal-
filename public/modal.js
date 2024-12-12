/*! For license information please see chatbot.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Chatbot = t())
    : (e.Chatbot = t());
})(self, () =>
  (() => {
    var e = {
        633: (e, t, r) => {
          var n = r(738).default;
          function a() {
            "use strict";
            (e.exports = a =
              function () {
                return r;
              }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports);
            var t,
              r = {},
              o = Object.prototype,
              i = o.hasOwnProperty,
              l =
                Object.defineProperty ||
                function (e, t, r) {
                  e[t] = r.value;
                },
              s = "function" == typeof Symbol ? Symbol : {},
              c = s.iterator || "@@iterator",
              u = s.asyncIterator || "@@asyncIterator",
              m = s.toStringTag || "@@toStringTag";
            function d(e, t, r) {
              return (
                Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              d({}, "");
            } catch (t) {
              d = function (e, t, r) {
                return (e[t] = r);
              };
            }
            function f(e, t, r, n) {
              var a = t && t.prototype instanceof b ? t : b,
                o = Object.create(a.prototype),
                i = new C(n || []);
              return l(o, "_invoke", { value: _(e, r, i) }), o;
            }
            function p(e, t, r) {
              try {
                return { type: "normal", arg: e.call(t, r) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            r.wrap = f;
            var h = "suspendedStart",
              g = "suspendedYield",
              x = "executing",
              v = "completed",
              y = {};
            function b() {}
            function w() {}
            function E() {}
            var N = {};
            d(N, c, function () {
              return this;
            });
            var S = Object.getPrototypeOf,
              L = S && S(S(A([])));
            L && L !== o && i.call(L, c) && (N = L);
            var k = (E.prototype = b.prototype = Object.create(N));
            function j(e) {
              ["next", "throw", "return"].forEach(function (t) {
                d(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function T(e, t) {
              function r(a, o, l, s) {
                var c = p(e[a], e, o);
                if ("throw" !== c.type) {
                  var u = c.arg,
                    m = u.value;
                  return m && "object" == n(m) && i.call(m, "__await")
                    ? t.resolve(m.__await).then(
                        function (e) {
                          r("next", e, l, s);
                        },
                        function (e) {
                          r("throw", e, l, s);
                        }
                      )
                    : t.resolve(m).then(
                        function (e) {
                          (u.value = e), l(u);
                        },
                        function (e) {
                          return r("throw", e, l, s);
                        }
                      );
                }
                s(c.arg);
              }
              var a;
              l(this, "_invoke", {
                value: function (e, n) {
                  function o() {
                    return new t(function (t, a) {
                      r(e, n, t, a);
                    });
                  }
                  return (a = a ? a.then(o, o) : o());
                },
              });
            }
            function _(e, r, n) {
              var a = h;
              return function (o, i) {
                if (a === x) throw Error("Generator is already running");
                if (a === v) {
                  if ("throw" === o) throw i;
                  return { value: t, done: !0 };
                }
                for (n.method = o, n.arg = i; ; ) {
                  var l = n.delegate;
                  if (l) {
                    var s = O(l, n);
                    if (s) {
                      if (s === y) continue;
                      return s;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (a === h) throw ((a = v), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = x;
                  var c = p(e, r, n);
                  if ("normal" === c.type) {
                    if (((a = n.done ? v : g), c.arg === y)) continue;
                    return { value: c.arg, done: n.done };
                  }
                  "throw" === c.type &&
                    ((a = v), (n.method = "throw"), (n.arg = c.arg));
                }
              };
            }
            function O(e, r) {
              var n = r.method,
                a = e.iterator[n];
              if (a === t)
                return (
                  (r.delegate = null),
                  ("throw" === n &&
                    e.iterator.return &&
                    ((r.method = "return"),
                    (r.arg = t),
                    O(e, r),
                    "throw" === r.method)) ||
                    ("return" !== n &&
                      ((r.method = "throw"),
                      (r.arg = new TypeError(
                        "The iterator does not provide a '" + n + "' method"
                      )))),
                  y
                );
              var o = p(a, e.iterator, r.arg);
              if ("throw" === o.type)
                return (
                  (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y
                );
              var i = o.arg;
              return i
                ? i.done
                  ? ((r[e.resultName] = i.value),
                    (r.next = e.nextLoc),
                    "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                    (r.delegate = null),
                    y)
                  : i
                : ((r.method = "throw"),
                  (r.arg = new TypeError("iterator result is not an object")),
                  (r.delegate = null),
                  y);
            }
            function P(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function D(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function C(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(P, this),
                this.reset(!0);
            }
            function A(e) {
              if (e || "" === e) {
                var r = e[c];
                if (r) return r.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var a = -1,
                    o = function r() {
                      for (; ++a < e.length; )
                        if (i.call(e, a))
                          return (r.value = e[a]), (r.done = !1), r;
                      return (r.value = t), (r.done = !0), r;
                    };
                  return (o.next = o);
                }
              }
              throw new TypeError(n(e) + " is not iterable");
            }
            return (
              (w.prototype = E),
              l(k, "constructor", { value: E, configurable: !0 }),
              l(E, "constructor", { value: w, configurable: !0 }),
              (w.displayName = d(E, m, "GeneratorFunction")),
              (r.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === w || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (r.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, E)
                    : ((e.__proto__ = E), d(e, m, "GeneratorFunction")),
                  (e.prototype = Object.create(k)),
                  e
                );
              }),
              (r.awrap = function (e) {
                return { __await: e };
              }),
              j(T.prototype),
              d(T.prototype, u, function () {
                return this;
              }),
              (r.AsyncIterator = T),
              (r.async = function (e, t, n, a, o) {
                void 0 === o && (o = Promise);
                var i = new T(f(e, t, n, a), o);
                return r.isGeneratorFunction(t)
                  ? i
                  : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                    });
              }),
              j(k),
              d(k, m, "Generator"),
              d(k, c, function () {
                return this;
              }),
              d(k, "toString", function () {
                return "[object Generator]";
              }),
              (r.keys = function (e) {
                var t = Object(e),
                  r = [];
                for (var n in t) r.push(n);
                return (
                  r.reverse(),
                  function e() {
                    for (; r.length; ) {
                      var n = r.pop();
                      if (n in t) return (e.value = n), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (r.values = A),
              (C.prototype = {
                constructor: C,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = t),
                    this.tryEntries.forEach(D),
                    !e)
                  )
                    for (var r in this)
                      "t" === r.charAt(0) &&
                        i.call(this, r) &&
                        !isNaN(+r.slice(1)) &&
                        (this[r] = t);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var r = this;
                  function n(n, a) {
                    return (
                      (l.type = "throw"),
                      (l.arg = e),
                      (r.next = n),
                      a && ((r.method = "next"), (r.arg = t)),
                      !!a
                    );
                  }
                  for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a],
                      l = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                      var s = i.call(o, "catchLoc"),
                        c = i.call(o, "finallyLoc");
                      if (s && c) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      } else if (s) {
                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      } else {
                        if (!c)
                          throw Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (
                      n.tryLoc <= this.prev &&
                      i.call(n, "finallyLoc") &&
                      this.prev < n.finallyLoc
                    ) {
                      var a = n;
                      break;
                    }
                  }
                  a &&
                    ("break" === e || "continue" === e) &&
                    a.tryLoc <= t &&
                    t <= a.finallyLoc &&
                    (a = null);
                  var o = a ? a.completion : {};
                  return (
                    (o.type = e),
                    (o.arg = t),
                    a
                      ? ((this.method = "next"), (this.next = a.finallyLoc), y)
                      : this.complete(o)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    y
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.finallyLoc === e)
                      return this.complete(r.completion, r.afterLoc), D(r), y;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var r = this.tryEntries[t];
                    if (r.tryLoc === e) {
                      var n = r.completion;
                      if ("throw" === n.type) {
                        var a = n.arg;
                        D(r);
                      }
                      return a;
                    }
                  }
                  throw Error("illegal catch attempt");
                },
                delegateYield: function (e, r, n) {
                  return (
                    (this.delegate = {
                      iterator: A(e),
                      resultName: r,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = t),
                    y
                  );
                },
              }),
              r
            );
          }
          (e.exports = a),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        },
        738: (e) => {
          function t(r) {
            return (
              (e.exports = t =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports),
              t(r)
            );
          }
          (e.exports = t),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
        },
        756: (e, t, r) => {
          var n = r(633)();
          e.exports = n;
          try {
            regeneratorRuntime = n;
          } catch (e) {
            "object" == typeof globalThis
              ? (globalThis.regeneratorRuntime = n)
              : Function("r", "regeneratorRuntime = r")(n);
          }
        },
      },
      t = {};
    function r(n) {
      var a = t[n];
      if (void 0 !== a) return a.exports;
      var o = (t[n] = { exports: {} });
      return e[n](o, o.exports, r), o.exports;
    }
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        "use strict";
        r.r(n), r.d(n, { default: () => y });
        const e = require("react");
        var t = r.n(e);
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function o(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return a(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? a(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function i(e, t, r, n, a, o, i) {
          try {
            var l = e[o](i),
              s = l.value;
          } catch (e) {
            return void r(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(n, a);
        }
        var l = r(756),
          s = r.n(l);
        const c = require("react-icons/bi"),
          u = (require("react-icons/bs"), require("react-icons/md")),
          m = require("react-icons/si"),
          d = require("axios");
        var f = r.n(d);
        require("react-icons/pi"), require("next/image");
        const p = require("framer-motion"),
          h = require("rizzui"),
          g = require("@headlessui/react");
        t().createElement;
        var x = {
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        };
        const v = function () {
          var r = (0, e.useState)([]),
            n = r[0],
            a = r[1],
            l = (0, e.useState)(""),
            d = l[0],
            v = l[1],
            y = (0, e.useState)(!1),
            b = y[0],
            w = y[1],
            E = (0, e.useState)([]),
            N = E[0],
            S = (E[1], (0, e.useState)(null)),
            L = (S[0], S[1]),
            k = (0, e.useState)(!1),
            j = k[0],
            T = k[1];
          (0, e.useEffect)(
            function () {
              localStorage.setItem("chatMessages", JSON.stringify(n));
            },
            [n]
          );
          var _ = (function () {
              var e,
                t =
                  ((e = s().mark(function e(t) {
                    var r, n, i, l, c;
                    return s().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("" !== (r = t || d).trim()) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (
                                (n = new Date().toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })),
                                a(function (e) {
                                  return [].concat(o(e), [
                                    {
                                      text: r,
                                      sender: "user",
                                      subData: "",
                                      time: n,
                                    },
                                  ]);
                                }),
                                v(""),
                                T(!0),
                                (e.prev = 7),
                                (e.next = 10),
                                f().post(
                                  "http://ec2-54-235-174-119.compute-1.amazonaws.com:5436/chat",
                                  { message: r }
                                )
                              );
                            case 10:
                              if (200 !== (i = e.sent).status || !i.data) {
                                e.next = 17;
                                break;
                              }
                              (l = i.data),
                                (c = new Date().toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })),
                                a(function (e) {
                                  return [].concat(o(e), [
                                    {
                                      text: l,
                                      sender: "bot",
                                      subData: "",
                                      time: c,
                                    },
                                  ]);
                                }),
                                (e.next = 18);
                              break;
                            case 17:
                              throw new Error("Unexpected response structure");
                            case 18:
                              e.next = 24;
                              break;
                            case 20:
                              (e.prev = 20),
                                (e.t0 = e.catch(7)),
                                console.error(e.t0, "error from chatbot"),
                                a(function (e) {
                                  return [].concat(o(e), [
                                    {
                                      text: "Error: Could not get a response from the bot. Please try again later.",
                                      sender: "bot",
                                      subData: "",
                                      time: new Date().toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }),
                                    },
                                  ]);
                                });
                            case 24:
                              return (e.prev = 24), T(!1), e.finish(24);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[7, 20, 24, 27]]
                    );
                  })),
                  function () {
                    var t = this,
                      r = arguments;
                    return new Promise(function (n, a) {
                      var o = e.apply(t, r);
                      function l(e) {
                        i(o, n, a, l, s, "next", e);
                      }
                      function s(e) {
                        i(o, n, a, l, s, "throw", e);
                      }
                      l(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            O = function (e) {
              var t = new Date().toLocaleTimeString();
              a(function (r) {
                return [].concat(o(r), [
                  { text: e, sender: "user", time: t, subData: "" },
                ]);
              });
              var r = new Date().toLocaleTimeString();
              a(function (e) {
                return [].concat(o(e), [
                  {
                    text: "Sure, what are you interested in?",
                    sender: "bot",
                    time: r,
                    subData: "",
                  },
                ]);
              });
              var n = [
                { subData: "Men's Fashions", sender: "bot", time: r, text: "" },
                {
                  subData: "Women's Special Fashions",
                  sender: "bot",
                  time: r,
                  text: "",
                },
                { subData: "Summer Special", sender: "bot", time: r, text: "" },
              ];
              a(function (e) {
                return [].concat(o(e), n);
              }),
                L(e);
            };
          return t().createElement(
            "div",
            { className: "relative" },
            b &&
              t().createElement(
                p.AnimatePresence,
                null,
                t().createElement(
                  p.motion.div,
                  {
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 50 },
                    transition: { duration: 0.4 },
                    className:
                      "fixed bottom-0 right-0 z-[9999] mb-0 h-screen w-full rounded-2xl border border-gray-300 bg-white bg-opacity-30 shadow-lg backdrop-blur-lg @2xl:bottom-16 @2xl:right-8 @2xl:mb-96 @2xl:w-96 sm:bottom-16 sm:right-8 sm:mb-96 sm:h-[180px] sm:w-96",
                  },
                  t().createElement(
                    g.TabGroup,
                    null,
                    t().createElement(
                      g.TabList,
                      {
                        className:
                          "relative flex items-start rounded-t-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-1",
                      },
                      t().createElement(
                        "div",
                        { className: "flex flex-col gap-2" },
                        t().createElement(
                          g.Tab,
                          {
                            className:
                              "flex items-start gap-2 rounded-xl px-6 py-1 font-semibold text-white",
                          },
                          t().createElement("img", {
                            src: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp",
                            className:
                              "h-9 w-9 rounded-full bg-white p-1 text-gray-900",
                            alt: "Bot Avatar",
                          }),
                          t().createElement(
                            "span",
                            {
                              className:
                                "flex flex-col items-start justify-center px-2",
                            },
                            t().createElement(
                              "span",
                              { className: "text-[0.9rem]" },
                              "AI Chatbot"
                            ),
                            t().createElement(
                              "span",
                              { className: "text-[0.7rem] font-normal" },
                              "You can ask me anything."
                            )
                          )
                        )
                      ),
                      t().createElement(
                        "button",
                        {
                          className:
                            "absolute right-6 top-3 text-2xl text-white hover:text-gray-200",
                          onClick: function () {
                            return w(!1);
                          },
                        },
                        "×"
                      )
                    ),
                    t().createElement(
                      g.TabPanels,
                      {
                        className:
                          "gradient-border bg-white border-2 rounded-md",
                      },
                      t().createElement(
                        g.TabPanel,
                        { className: "gradient-border-1" },
                        t().createElement(
                          p.motion.div,
                          {
                            initial: { opacity: 0, y: 50 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 50 },
                            transition: { duration: 0.4 },
                          },
                          t().createElement(
                            "div",
                            {
                              className:
                                "flex h-screen flex-col rounded-md sm:h-[450px]",
                            },
                            t().createElement(
                              "div",
                              {
                                className:
                                  "flex flex-1 flex-col space-y-2 overflow-y-auto p-3",
                              },
                              t().createElement(
                                "div",
                                {
                                  className:
                                    "chat-message flex max-w-xs items-end gap-2 self-start rounded-lg",
                                },
                                t().createElement(
                                  "div",
                                  { className: "flex-shrink-0" },
                                  t().createElement("img", {
                                    src: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp",
                                    className:
                                      "h-7 w-7 rounded-full bg-white p-1 text-gray-900",
                                  }),
                                  " "
                                ),
                                t().createElement(
                                  "div",
                                  {
                                    className:
                                      "rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-900",
                                  },
                                  "Hello! How can I help you?"
                                )
                              ),
                              t().createElement(
                                "div",
                                {
                                  className:
                                    "flex-row-2 ml-8 mt-4 flex flex-wrap gap-2",
                                },
                                t().createElement(
                                  h.Button,
                                  {
                                    rounded: "pill",
                                    className:
                                      "border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white",
                                    size: "sm",
                                    onClick: function () {
                                      return O("Special Offers");
                                    },
                                  },
                                  "Special Offer"
                                ),
                                t().createElement(
                                  h.Button,
                                  {
                                    rounded: "pill",
                                    className:
                                      "border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white",
                                    size: "sm",
                                    onClick: function () {
                                      return O("Summer Outfits");
                                    },
                                  },
                                  "Summer Outfits"
                                ),
                                t().createElement(
                                  h.Button,
                                  {
                                    rounded: "pill",
                                    className:
                                      "border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white",
                                    size: "sm",
                                    onClick: function () {
                                      return O("Buy a Giftcard");
                                    },
                                  },
                                  "Buy a Giftcard"
                                ),
                                t().createElement(
                                  h.Button,
                                  {
                                    rounded: "pill",
                                    className:
                                      "border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white",
                                    size: "sm",
                                    onClick: function () {
                                      return O("New Collection");
                                    },
                                  },
                                  "New Collection"
                                )
                              ),
                              n.map(function (e, r) {
                                var a,
                                  o = [
                                    "Men's Fashions",
                                    "Women's Special Fashions",
                                    "Summer Special",
                                  ].includes(e.subData);
                                return (
                                  console.log(n, "messages"),
                                  t().createElement(
                                    "div",
                                    {
                                      key: r,
                                      className: "chat-message ".concat(
                                        "user" === e.sender
                                          ? "self-end text-white"
                                          : "flex items-end gap-2 self-start",
                                        " max-w-xs rounded-lg"
                                      ),
                                    },
                                    "bot" === e.sender &&
                                      !o &&
                                      t().createElement(
                                        "div",
                                        { className: "flex-shrink-0" },
                                        t().createElement("img", {
                                          src: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp",
                                          className:
                                            "h-7 w-7 rounded-full bg-white p-1 text-gray-900",
                                        })
                                      ),
                                    !o &&
                                      t().createElement(
                                        "div",
                                        null,
                                        t().createElement(
                                          "div",
                                          {
                                            className: "".concat(
                                              "user" === e.sender
                                                ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white"
                                                : "bg-gray-100 text-gray-900",
                                              " rounded-lg px-3 py-1.5 text-sm"
                                            ),
                                          },
                                          "string" == typeof e.text
                                            ? e.text
                                            : null == e ||
                                              null === (a = e.text) ||
                                              void 0 === a
                                            ? void 0
                                            : a.response
                                        ),
                                        t().createElement(
                                          "div",
                                          {
                                            className:
                                              "mt-2 bg-white text-xs text-gray-500",
                                          },
                                          e.time
                                        )
                                      ),
                                    o &&
                                      t().createElement(
                                        "div",
                                        {
                                          className:
                                            "mx-8 border-b-2 border-gray-300 last:border-b-0",
                                        },
                                        t().createElement(
                                          h.Button,
                                          {
                                            rounded: "pill",
                                            className:
                                              "mt-2 border-2 border-blue-200 bg-white bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text px-3 py-1.5 text-transparent",
                                            size: "sm",
                                            onClick: function () {
                                              return _(e.subData);
                                            },
                                          },
                                          e.subData
                                        )
                                      )
                                  )
                                );
                              }),
                              j &&
                                t().createElement(
                                  "div",
                                  {
                                    className:
                                      "chat-message flex max-w-xs items-start gap-2 rounded-lg",
                                  },
                                  t().createElement(
                                    "div",
                                    { className: "flex-shrink-0" },
                                    t().createElement("img", {
                                      src: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp",
                                      className:
                                        "h-7 w-7 rounded-full bg-white p-1 text-gray-900",
                                    })
                                  ),
                                  t().createElement(
                                    "div",
                                    { className: "flex items-start" },
                                    t().createElement(
                                      "div",
                                      { className: "flex space-x-2" },
                                      t().createElement(
                                        "div",
                                        {
                                          className:
                                            "animate-bounce bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text px-1 text-2xl text-transparent",
                                        },
                                        "."
                                      ),
                                      t().createElement(
                                        "div",
                                        {
                                          className:
                                            "animate-bounce bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text px-1 text-2xl text-transparent",
                                        },
                                        "."
                                      ),
                                      t().createElement(
                                        "div",
                                        {
                                          className:
                                            "animate-bounce bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text px-1 text-2xl text-transparent",
                                        },
                                        "."
                                      )
                                    )
                                  )
                                ),
                              t().createElement(
                                "div",
                                { className: "relative mt-4" },
                                t().createElement(
                                  "div",
                                  {
                                    className:
                                      "scrollbar-hide flex overflow-x-auto",
                                  },
                                  N.length > 0 &&
                                    N.map(function (e) {
                                      return t().createElement(
                                        "div",
                                        {
                                          key: e.id,
                                          className:
                                            "m-2 w-64 flex-shrink-0 rounded-lg border border-gray-300 bg-white p-4 shadow transition-shadow duration-200 hover:shadow-lg",
                                        },
                                        t().createElement(
                                          "h3",
                                          {
                                            className: "text-lg font-semibold",
                                          },
                                          e.name
                                        ),
                                        t().createElement(
                                          "p",
                                          {
                                            className: "text-sm text-gray-500",
                                          },
                                          "Product ID: ",
                                          e.id
                                        ),
                                        t().createElement(
                                          "p",
                                          { className: "mt-1 text-gray-700" },
                                          e.description
                                        )
                                      );
                                    })
                                )
                              )
                            ),
                            t().createElement(
                              "div",
                              {
                                className:
                                  "mt-2 rounded-full border-2 bg-gray-200 bg-clip-text px-3 py-1 text-transparent",
                              },
                              t().createElement(
                                "div",
                                { className: "flex gap-2" },
                                t().createElement("input", {
                                  placeholder: "Type your message...",
                                  className:
                                    "flex-1 rounded-full border-none text-xs text-gray-500 outline-none focus:ring-0",
                                  type: "text",
                                  value: d,
                                  onKeyDown: function (e) {
                                    "Enter" !== e.key ||
                                      e.shiftKey ||
                                      (e.preventDefault(), _(d));
                                  },
                                  onChange: function (e) {
                                    return v(e.target.value);
                                  },
                                }),
                                t().createElement(
                                  "button",
                                  {
                                    onClick: function () {
                                      return _(d);
                                    },
                                    className:
                                      "rounded-full border-2 border-transparent bg-gradient-to-r from-violet-600 to-indigo-600 px-2 py-1.5 text-sm font-bold text-white transition duration-300 ease-in-out",
                                  },
                                  t().createElement(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "16",
                                      height: "16",
                                      fill: "white",
                                      className: "bi bi-arrow-up-circle-fill",
                                      viewBox: "0 0 16 16",
                                    },
                                    t().createElement("path", {
                                      d: "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z",
                                    })
                                  )
                                )
                              )
                            ),
                            t().createElement(
                              h.Text,
                              {
                                className:
                                  "flex items-center justify-center py-2 text-center text-sm font-medium text-gray-400",
                              },
                              t().createElement(
                                "span",
                                { className: "text-[0.6rem]" },
                                "Powered by"
                              ),
                              " ",
                              t().createElement(
                                "span",
                                {
                                  className:
                                    "ml-2 flex items-center justify-center gap-2",
                                },
                                t().createElement(m.SiChatbot, {
                                  className: "mt-2 h-5 w-5",
                                }),
                                " Lumniverse"
                              )
                            )
                          )
                        )
                      ),
                      t().createElement(
                        g.TabPanel,
                        { className: "gradient-border-1" },
                        t().createElement(
                          p.motion.div,
                          {
                            initial: { opacity: 0, y: 50 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 50 },
                            transition: { duration: 0.4 },
                          },
                          t().createElement(
                            "div",
                            {
                              className:
                                "flex h-[500px] flex-col overflow-hidden rounded-t-md",
                            },
                            t().createElement(
                              "div",
                              {
                                className:
                                  "flex-1 space-y-2 overflow-y-auto p-5",
                              },
                              [
                                "Get Started with help of",
                                "Billing and plans guide",
                                "Enable External Forwarding",
                                "Get Started with help of",
                                "Billing and plans guide",
                                "Enable External Forwarding",
                                "Get Started with help of",
                                "Billing and plans guide",
                                "Enable External Forwarding",
                              ].map(function (e) {
                                return t().createElement(
                                  g.Disclosure,
                                  {
                                    key: e,
                                    as: "div",
                                    className: "border-b last:border-b-0",
                                  },
                                  function (r) {
                                    var n = r.open;
                                    return t().createElement(
                                      t().Fragment,
                                      null,
                                      t().createElement(
                                        g.Disclosure.Button,
                                        {
                                          className:
                                            "flex w-full items-center gap-4 py-4 text-left text-sm font-medium text-gray-900",
                                        },
                                        n
                                          ? t().createElement(c.BiMinus, {
                                              className:
                                                "h-5 w-5 text-blue-500 transition-transform duration-200",
                                            })
                                          : t().createElement(c.BiPlus, {
                                              className:
                                                "h-5 w-5 text-blue-500 transition-transform duration-200",
                                            }),
                                        t().createElement("span", null, e)
                                      ),
                                      t().createElement(
                                        p.AnimatePresence,
                                        null,
                                        n &&
                                          t().createElement(
                                            p.motion.div,
                                            {
                                              initial: "closed",
                                              animate: "open",
                                              exit: "closed",
                                              variants: x,
                                              transition: { duration: 0.3 },
                                              className: "overflow-hidden",
                                            },
                                            t().createElement(
                                              "div",
                                              {
                                                className:
                                                  "px-4 pb-4 text-sm text-gray-500",
                                              },
                                              "This is the content for ",
                                              e,
                                              ". You can put any information here."
                                            )
                                          )
                                      )
                                    );
                                  }
                                );
                              })
                            )
                          )
                        )
                      ),
                      t().createElement(
                        g.TabPanel,
                        null,
                        t().createElement(
                          "div",
                          { className: "flex h-[400px] flex-col rounded-t-md" },
                          "Content for Another Tab"
                        )
                      )
                    )
                  )
                )
              ),
            t().createElement(
              "button",
              {
                className:
                  "fixed bottom-6 right-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white shadow-lg transition-transform hover:scale-105",
                onClick: function () {
                  return w(function (e) {
                    return !e;
                  });
                },
              },
              b
                ? t().createElement(u.MdCancel, { className: "h-8 w-8" })
                : t().createElement(u.MdChat, { className: "h-6 w-6" })
            )
          );
        };
        t().createElement;
        const y = function () {
          return t().createElement(
            "div",
            {
              className:
                "min-h-screen flex flex-col items-center justify-center",
            },
            t().createElement(v, null)
          );
        };
      })(),
      n
    );
  })()
);
