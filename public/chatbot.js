(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3789, 2299, 6943],
  {
    89129: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 1449));
    },
    1449: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(89127),
        a = r(79644),
        i = r(56943),
        o = r(42299),
        l = r(17853);
      let s = [
        {
          id: "1",
          name: "Google Analytics",
          price: 100,
          icon: (0, n.jsx)(o.default, { className: "h-7 w-7" }),
          description: "Track your website analytics with Google Analytics.",
        },
        {
          id: "2",
          name: "Prompt Hog",
          price: 150,
          icon: (0, n.jsx)(l.vY2, { className: "h-7 w-7" }),
          description:
            "AI-driven analytics for better insights with Prompt Hog.",
        },
        {
          id: "3",
          name: "Slack",
          price: 200,
          icon: (0, n.jsx)(i.default, { className: "h-7 w-7" }),
          description: "Collaborate with your team seamlessly on Slack.",
        },
      ];
      t.default = (e) => {
        let { params: t } = e,
          { id: r } = t,
          i = (e) => e.toLowerCase().replace(/\s+/g, "-"),
          o = s.find((e) => i(e.name) === r);
        return (
          o || (0, a.notFound)(),
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)("h1", { children: null == o ? void 0 : o.name }),
              (0, n.jsx)("p", { children: null == o ? void 0 : o.description }),
            ],
          })
        );
      };
    },
    79644: function (e, t, r) {
      "use strict";
      var n = r(29262);
      r.o(n, "notFound") &&
        r.d(t, {
          notFound: function () {
            return n.notFound;
          },
        }),
        r.o(n, "useParams") &&
          r.d(t, {
            useParams: function () {
              return n.useParams;
            },
          }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    42299: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(89127);
      function a(e) {
        let { ...t } = e;
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          ...t,
          children: [
            (0, n.jsxs)("g", {
              clipPath: "url(#a)",
              children: [
                (0, n.jsx)("path", {
                  fill: "#167EE6",
                  d: "M23.1 9.91h-9.8a.78.78 0 0 0-.78.79v3.12c0 .44.35.79.79.79h5.5a7.36 7.36 0 0 1-3.16 3.7L18 22.4c3.77-2.18 6-6 6-10.3 0-.6-.04-1.04-.13-1.53a.79.79 0 0 0-.77-.65Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#12B347",
                  d: "M12 19.3a7.3 7.3 0 0 1-6.32-3.65L1.6 17.99A11.98 11.98 0 0 0 18 22.4l-2.35-4.07a7.25 7.25 0 0 1-3.65.98Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#0F993E",
                  d: "M18 22.4v-.01l-2.35-4.07a7.25 7.25 0 0 1-3.65.99V24c2.18 0 4.23-.6 6-1.61Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#FFD500",
                  d: "M4.7 12c0-1.33.36-2.57.98-3.65L1.61 6.01a11.88 11.88 0 0 0 0 11.99l4.07-2.35A7.25 7.25 0 0 1 4.7 12Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#FF4B26",
                  d: "M12 4.7c1.76 0 3.37.62 4.63 1.66.32.26.77.24 1.05-.05L19.9 4.1a.79.79 0 0 0-.05-1.16A11.96 11.96 0 0 0 1.61 6.01l4.07 2.34A7.3 7.3 0 0 1 12 4.7Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#D93F21",
                  d: "M16.64 6.36c.3.26.76.24 1.05-.05L19.9 4.1a.79.79 0 0 0-.04-1.16A11.96 11.96 0 0 0 12 0v4.7c1.76 0 3.38.62 4.64 1.66Z",
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "a",
                children: (0, n.jsx)("path", {
                  fill: "#fff",
                  d: "M0 0h24v24H0z",
                }),
              }),
            }),
          ],
        });
      }
    },
    56943: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(89127);
      function a(e) {
        let { ...t } = e;
        return (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...t,
          children: [
            (0, n.jsxs)("g", {
              clipPath: "url(#slack1)",
              children: [
                (0, n.jsx)("path", {
                  fill: "#FF185B",
                  d: "M7.579 22.737a3.79 3.79 0 1 1-3.79-3.79h3.79v3.79Zm1.895 0a3.79 3.79 0 0 1 7.579 0v9.474a3.79 3.79 0 0 1-7.58 0v-9.474Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#00C5F1",
                  d: "M13.263 7.579a3.79 3.79 0 1 1 3.79-3.79v3.79h-3.79Zm0 1.895a3.79 3.79 0 0 1 0 7.579H3.79a3.79 3.79 0 0 1 0-7.58h9.474Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#00B67B",
                  d: "M28.42 13.263a3.79 3.79 0 1 1 3.79 3.79h-3.79v-3.79Zm-1.894 0a3.79 3.79 0 0 1-7.579 0V3.79a3.79 3.79 0 0 1 7.58 0v9.474Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#FFB20F",
                  d: "M22.737 28.42a3.79 3.79 0 1 1-3.79 3.79v-3.79h3.79Zm0-1.894a3.79 3.79 0 0 1 0-7.579h9.474a3.79 3.79 0 0 1 0 7.58h-9.474Z",
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "slack1",
                children: (0, n.jsx)("path", {
                  fill: "#fff",
                  d: "M0 0h36v36H0z",
                }),
              }),
            }),
          ],
        });
      }
    },
    83691: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return u;
        },
      });
      var n = r(87795),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(a),
        o = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                var n, a;
                (n = t),
                  (a = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e) {
        return (t) =>
          n.createElement(
            f,
            l({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: a, size: i, title: s } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (a[r] = e[r]);
              }
              return a;
            })(e, o),
            f = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                u,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && n.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, (e) => t(e))
          : t(a);
      }
    },
  },
  function (e) {
    e.O(0, [2135, 8160, 1800, 1744], function () {
      return e((e.s = 89129));
    }),
      (_N_E = e.O());
  },
]);
