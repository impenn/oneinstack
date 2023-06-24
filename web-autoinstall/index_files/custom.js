// 请在第三行开始编写代码
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.ClipboardJS = e())
    : (t.ClipboardJS = e());
})(this, function () {
  return (function (n) {
    var o = {};
    function r(t) {
      if (o[t]) return o[t].exports;
      var e = (o[t] = { i: t, l: !1, exports: {} });
      return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
    }
    return (
      (r.m = n),
      (r.c = o),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (t, e, n) {
      "use strict";
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        i = (function () {
          function o(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          return function (t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t;
          };
        })(),
        a = o(n(1)),
        c = o(n(3)),
        u = o(n(4));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var l = (function (t) {
        function o(t, e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, o);
          var n = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
          return n.resolveOptions(e), n.listenClick(t), n;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(o, c.default),
          i(
            o,
            [
              {
                key: "resolveOptions",
                value: function () {
                  var t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.action =
                    "function" == typeof t.action
                      ? t.action
                      : this.defaultAction),
                    (this.target =
                      "function" == typeof t.target
                        ? t.target
                        : this.defaultTarget),
                    (this.text =
                      "function" == typeof t.text ? t.text : this.defaultText),
                    (this.container =
                      "object" === r(t.container)
                        ? t.container
                        : document.body);
                },
              },
              {
                key: "listenClick",
                value: function (t) {
                  var e = this;
                  this.listener = (0, u.default)(t, "click", function (t) {
                    return e.onClick(t);
                  });
                },
              },
              {
                key: "onClick",
                value: function (t) {
                  var e = t.delegateTarget || t.currentTarget;
                  this.clipboardAction && (this.clipboardAction = null),
                    (this.clipboardAction = new a.default({
                      action: this.action(e),
                      target: this.target(e),
                      text: this.text(e),
                      container: this.container,
                      trigger: e,
                      emitter: this,
                    }));
                },
              },
              {
                key: "defaultAction",
                value: function (t) {
                  return s("action", t);
                },
              },
              {
                key: "defaultTarget",
                value: function (t) {
                  var e = s("target", t);
                  if (e) return document.querySelector(e);
                },
              },
              {
                key: "defaultText",
                value: function (t) {
                  return s("text", t);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.listener.destroy(),
                    this.clipboardAction &&
                      (this.clipboardAction.destroy(),
                      (this.clipboardAction = null));
                },
              },
            ],
            [
              {
                key: "isSupported",
                value: function () {
                  var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : ["copy", "cut"],
                    e = "string" == typeof t ? [t] : t,
                    n = !!document.queryCommandSupported;
                  return (
                    e.forEach(function (t) {
                      n = n && !!document.queryCommandSupported(t);
                    }),
                    n
                  );
                },
              },
            ]
          ),
          o
        );
      })();
      function s(t, e) {
        var n = "data-clipboard-" + t;
        if (e.hasAttribute(n)) return e.getAttribute(n);
      }
      t.exports = l;
    },
    function (t, e, n) {
      "use strict";
      var o,
        r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        i = (function () {
          function o(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o);
            }
          }
          return function (t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t;
          };
        })(),
        a = n(2),
        c = (o = a) && o.__esModule ? o : { default: o };
      var u = (function () {
        function e(t) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            this.resolveOptions(t),
            this.initSelection();
        }
        return (
          i(e, [
            {
              key: "resolveOptions",
              value: function () {
                var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (this.action = t.action),
                  (this.container = t.container),
                  (this.emitter = t.emitter),
                  (this.target = t.target),
                  (this.text = t.text),
                  (this.trigger = t.trigger),
                  (this.selectedText = "");
              },
            },
            {
              key: "initSelection",
              value: function () {
                this.text
                  ? this.selectFake()
                  : this.target && this.selectTarget();
              },
            },
            {
              key: "selectFake",
              value: function () {
                var t = this,
                  e = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(),
                  (this.fakeHandlerCallback = function () {
                    return t.removeFake();
                  }),
                  (this.fakeHandler =
                    this.container.addEventListener(
                      "click",
                      this.fakeHandlerCallback
                    ) || !0),
                  (this.fakeElem = document.createElement("textarea")),
                  (this.fakeElem.style.fontSize = "12pt"),
                  (this.fakeElem.style.border = "0"),
                  (this.fakeElem.style.padding = "0"),
                  (this.fakeElem.style.margin = "0"),
                  (this.fakeElem.style.position = "absolute"),
                  (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                var n =
                  window.pageYOffset || document.documentElement.scrollTop;
                (this.fakeElem.style.top = n + "px"),
                  this.fakeElem.setAttribute("readonly", ""),
                  (this.fakeElem.value = this.text),
                  this.container.appendChild(this.fakeElem),
                  (this.selectedText = (0, c.default)(this.fakeElem)),
                  this.copyText();
              },
            },
            {
              key: "removeFake",
              value: function () {
                this.fakeHandler &&
                  (this.container.removeEventListener(
                    "click",
                    this.fakeHandlerCallback
                  ),
                  (this.fakeHandler = null),
                  (this.fakeHandlerCallback = null)),
                  this.fakeElem &&
                    (this.container.removeChild(this.fakeElem),
                    (this.fakeElem = null));
              },
            },
            {
              key: "selectTarget",
              value: function () {
                (this.selectedText = (0, c.default)(this.target)),
                  this.copyText();
              },
            },
            {
              key: "copyText",
              value: function () {
                var e = void 0;
                try {
                  e = document.execCommand(this.action);
                } catch (t) {
                  e = !1;
                }
                this.handleResult(e);
              },
            },
            {
              key: "handleResult",
              value: function (t) {
                this.emitter.emit(t ? "success" : "error", {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this),
                });
              },
            },
            {
              key: "clearSelection",
              value: function () {
                this.trigger && this.trigger.focus(),
                  window.getSelection().removeAllRanges();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.removeFake();
              },
            },
            {
              key: "action",
              set: function () {
                var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : "copy";
                if (
                  ((this._action = t),
                  "copy" !== this._action && "cut" !== this._action)
                )
                  throw new Error(
                    'Invalid "action" value, use either "copy" or "cut"'
                  );
              },
              get: function () {
                return this._action;
              },
            },
            {
              key: "target",
              set: function (t) {
                if (void 0 !== t) {
                  if (
                    !t ||
                    "object" !== (void 0 === t ? "undefined" : r(t)) ||
                    1 !== t.nodeType
                  )
                    throw new Error(
                      'Invalid "target" value, use a valid Element'
                    );
                  if ("copy" === this.action && t.hasAttribute("disabled"))
                    throw new Error(
                      'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                    );
                  if (
                    "cut" === this.action &&
                    (t.hasAttribute("readonly") || t.hasAttribute("disabled"))
                  )
                    throw new Error(
                      'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                    );
                  this._target = t;
                }
              },
              get: function () {
                return this._target;
              },
            },
          ]),
          e
        );
      })();
      t.exports = u;
    },
    function (t, e) {
      t.exports = function (t) {
        var e;
        if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
          var n = t.hasAttribute("readonly");
          n || t.setAttribute("readonly", ""),
            t.select(),
            t.setSelectionRange(0, t.value.length),
            n || t.removeAttribute("readonly"),
            (e = t.value);
        } else {
          t.hasAttribute("contenteditable") && t.focus();
          var o = window.getSelection(),
            r = document.createRange();
          r.selectNodeContents(t),
            o.removeAllRanges(),
            o.addRange(r),
            (e = o.toString());
        }
        return e;
      };
    },
    function (t, e) {
      function n() {}
      (n.prototype = {
        on: function (t, e, n) {
          var o = this.e || (this.e = {});
          return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
        },
        once: function (t, e, n) {
          var o = this;
          function r() {
            o.off(t, r), e.apply(n, arguments);
          }
          return (r._ = e), this.on(t, r, n);
        },
        emit: function (t) {
          for (
            var e = [].slice.call(arguments, 1),
              n = ((this.e || (this.e = {}))[t] || []).slice(),
              o = 0,
              r = n.length;
            o < r;
            o++
          )
            n[o].fn.apply(n[o].ctx, e);
          return this;
        },
        off: function (t, e) {
          var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
          if (o && e)
            for (var i = 0, a = o.length; i < a; i++)
              o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
          return r.length ? (n[t] = r) : delete n[t], this;
        },
      }),
        (t.exports = n);
    },
    function (t, e, n) {
      var d = n(5),
        h = n(6);
      t.exports = function (t, e, n) {
        if (!t && !e && !n) throw new Error("Missing required arguments");
        if (!d.string(e))
          throw new TypeError("Second argument must be a String");
        if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
        if (d.node(t))
          return (
            (s = e),
            (f = n),
            (l = t).addEventListener(s, f),
            {
              destroy: function () {
                l.removeEventListener(s, f);
              },
            }
          );
        if (d.nodeList(t))
          return (
            (a = t),
            (c = e),
            (u = n),
            Array.prototype.forEach.call(a, function (t) {
              t.addEventListener(c, u);
            }),
            {
              destroy: function () {
                Array.prototype.forEach.call(a, function (t) {
                  t.removeEventListener(c, u);
                });
              },
            }
          );
        if (d.string(t))
          return (o = t), (r = e), (i = n), h(document.body, o, r, i);
        throw new TypeError(
          "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
        );
      };
    },
    function (t, n) {
      (n.node = function (t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
      }),
        (n.nodeList = function (t) {
          var e = Object.prototype.toString.call(t);
          return (
            void 0 !== t &&
            ("[object NodeList]" === e || "[object HTMLCollection]" === e) &&
            "length" in t &&
            (0 === t.length || n.node(t[0]))
          );
        }),
        (n.string = function (t) {
          return "string" == typeof t || t instanceof String;
        }),
        (n.fn = function (t) {
          return "[object Function]" === Object.prototype.toString.call(t);
        });
    },
    function (t, e, n) {
      var a = n(7);
      function i(t, e, n, o, r) {
        var i = function (e, n, t, o) {
          return function (t) {
            (t.delegateTarget = a(t.target, n)),
              t.delegateTarget && o.call(e, t);
          };
        }.apply(this, arguments);
        return (
          t.addEventListener(n, i, r),
          {
            destroy: function () {
              t.removeEventListener(n, i, r);
            },
          }
        );
      }
      t.exports = function (t, e, n, o, r) {
        return "function" == typeof t.addEventListener
          ? i.apply(null, arguments)
          : "function" == typeof n
          ? i.bind(null, document).apply(null, arguments)
          : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function (t) {
              return i(t, e, n, o, r);
            }));
      };
    },
    function (t, e) {
      if ("undefined" != typeof Element && !Element.prototype.matches) {
        var n = Element.prototype;
        n.matches =
          n.matchesSelector ||
          n.mozMatchesSelector ||
          n.msMatchesSelector ||
          n.oMatchesSelector ||
          n.webkitMatchesSelector;
      }
      t.exports = function (t, e) {
        for (; t && 9 !== t.nodeType; ) {
          if ("function" == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      };
    },
  ]);
});

/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.79
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = b(require("jquery")))
    : b(a.jQuery);
})(this, function (a) {
  !(function (a, b, c) {
    function d(a, b) {
      (this.$form = a),
        (this.$input = b),
        this.reset(),
        b.on("change paste", this.reset.bind(this));
    }
    var e = function () {
        return !1;
      },
      f = null,
      g = {
        numHalted: 0,
        haltValidation: function (b) {
          this.numHalted++,
            (a.formUtils.haltValidation = !0),
            b
              .unbind("submit", e)
              .bind("submit", e)
              .find('*[type="submit"]')
              .addClass("disabled")
              .attr("disabled", "disabled");
        },
        unHaltValidation: function (b) {
          this.numHalted--,
            0 === this.numHalted &&
              ((a.formUtils.haltValidation = !1),
              b
                .unbind("submit", e)
                .find('*[type="submit"]')
                .removeClass("disabled")
                .removeAttr("disabled", "disabled"));
        },
      };
    (d.prototype.reset = function () {
      (this.haltedFormValidation = !1),
        (this.hasRun = !1),
        (this.isRunning = !1),
        (this.result = c);
    }),
      (d.prototype.run = function (a, b) {
        return "keyup" === a
          ? null
          : this.isRunning
          ? ((f = a),
            this.haltedFormValidation ||
              (g.haltValidation(), (this.haltedFormValidation = !0)),
            null)
          : this.hasRun
          ? this.result
          : ((f = a),
            g.haltValidation(this.$form),
            (this.haltedFormValidation = !0),
            (this.isRunning = !0),
            this.$input
              .attr("disabled", "disabled")
              .addClass("async-validation"),
            this.$form.addClass("async-validation"),
            b(
              function (a) {
                this.done(a);
              }.bind(this)
            ),
            null);
      }),
      (d.prototype.done = function (a) {
        (this.result = a),
          (this.hasRun = !0),
          (this.isRunning = !1),
          this.$input.removeAttr("disabled").removeClass("async-validation"),
          this.$form.removeClass("async-validation"),
          this.haltedFormValidation &&
            (g.unHaltValidation(this.$form),
            "submit" === f
              ? this.$form.trigger("submit")
              : this.$input.trigger("validation.revalidate"));
      }),
      (d.loadInstance = function (a, b, c) {
        var e,
          f = b.get(0);
        return (
          f.asyncValidators || (f.asyncValidators = {}),
          f.asyncValidators[a]
            ? (e = f.asyncValidators[a])
            : ((e = new d(c, b)), (f.asyncValidators[a] = e)),
          e
        );
      }),
      (a.formUtils = a.extend(a.formUtils || {}, {
        asyncValidation: function (a, b, c) {
          return (
            this.warn(
              "Use of deprecated function $.formUtils.asyncValidation, use $.formUtils.addAsyncValidator() instead"
            ),
            d.loadInstance(a, b, c)
          );
        },
        addAsyncValidator: function (b) {
          var c = a.extend({}, b),
            e = c.validatorFunction;
          (c.async = !0),
            (c.validatorFunction = function (a, b, f, g, h, i) {
              var j = d.loadInstance(this.name, b, h);
              return j.run(i, function (d) {
                e.apply(c, [d, a, b, f, g, h, i]);
              });
            }),
            this.addValidator(c);
        },
      })),
      a(b).bind("validatorsLoaded formValidationSetup", function (b, c) {
        c || (c = a("form")),
          c.find("[data-validation]").each(function () {
            var b = a(this);
            b.valAttr("async", !1),
              a.each(a.split(b.attr("data-validation")), function (c, d) {
                var e = a.formUtils.validators["validate_" + d];
                e && e.async && b.valAttr("async", "yes");
              });
          });
      });
  })(a, window),
    (function (a, b) {
      "use strict";
      function c(b) {
        b &&
          "custom" === b.errorMessagePosition &&
          "function" == typeof b.errorMessageCustom &&
          (a.formUtils.warn(
            "Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead"
          ),
          (b.submitErrorMessageCallback = function (a, c) {
            b.errorMessageCustom(a, b.language.errorTitle, c, b);
          }));
      }
      function d(b) {
        if (
          b.errorMessagePosition &&
          "object" == typeof b.errorMessagePosition
        ) {
          a.formUtils.warn(
            "Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead"
          );
          var c = b.errorMessagePosition;
          (b.errorMessagePosition = "top"),
            (b.submitErrorMessageCallback = function () {
              return c;
            });
        }
      }
      function e(b) {
        var c = b.find("[data-validation-if-checked]");
        c.length &&
          a.formUtils.warn(
            'Detected use of attribute "data-validation-if-checked" which is deprecated. Use "data-validation-depends-on" provided by module "logic"'
          ),
          c.on("beforeValidation", function () {
            var c = a(this),
              d = c.valAttr("if-checked"),
              e = a('input[name="' + d + '"]', b),
              f = e.is(":checked"),
              g = (a.formUtils.getValue(e) || "").toString(),
              h = c.valAttr("if-checked-value");
            (!f || (h && h !== g)) && c.valAttr("skipped", !0);
          });
      }
      function f(b) {
        var c = { se: "sv", cz: "cs", dk: "da" };
        if (b.lang in c) {
          var d = c[b.lang];
          a.formUtils.warn(
            'Deprecated use of lang code "' +
              b.lang +
              '" use "' +
              d +
              '" instead'
          ),
            (b.lang = d);
        }
      }
      (a.fn.validateForm = function (b, c) {
        return (
          a.formUtils.warn(
            "Use of deprecated function $.validateForm, use $.isValid instead"
          ),
          this.isValid(b, c, !0)
        );
      }),
        a(window)
          .on("formValidationPluginInit", function (a, b) {
            f(b), c(b), d(b);
          })
          .on("validatorsLoaded formValidationSetup", function (b, c) {
            c || (c = a("form")), e(c);
          });
    })(a),
    (function (a) {
      "use strict";
      var b = {
        resolveErrorMessage: function (a, b, c, d, e) {
          var f =
              d.validationErrorMsgAttribute + "-" + c.replace("validate_", ""),
            g = a.attr(f);
          return (
            g ||
              ((g = a.attr(d.validationErrorMsgAttribute)),
              g ||
                ((g =
                  "function" != typeof b.errorMessageKey
                    ? e[b.errorMessageKey]
                    : e[b.errorMessageKey(d)]),
                g || (g = b.errorMessage))),
            g
          );
        },
        getParentContainer: function (b) {
          if (b.valAttr("error-msg-container"))
            return a(b.valAttr("error-msg-container"));
          var c = b.parent();
          return (
            "checkbox" === b.attr("type") && b.closest(".checkbox").length
              ? (c = b.closest(".checkbox").parent())
              : "radio" === b.attr("type") &&
                b.closest(".radio").length &&
                (c = b.closest(".radio").parent()),
            c.closest(".input-group").length &&
              (c = c.closest(".input-group").parent()),
            c
          );
        },
        applyInputErrorStyling: function (a, b) {
          a.addClass(b.errorElementClass).removeClass(b.successElementClass),
            this.getParentContainer(a)
              .addClass(b.inputParentClassOnError)
              .removeClass(b.inputParentClassOnSuccess),
            "" !== b.borderColorOnError &&
              a.css("border-color", b.borderColorOnError);
        },
        applyInputSuccessStyling: function (a, b) {
          a.addClass(b.successElementClass),
            this.getParentContainer(a).addClass(b.inputParentClassOnSuccess);
        },
        removeInputStylingAndMessage: function (a, c) {
          a.removeClass(c.successElementClass)
            .removeClass(c.errorElementClass)
            .css("border-color", "");
          var d = b.getParentContainer(a);
          if (
            (d
              .removeClass(c.inputParentClassOnError)
              .removeClass(c.inputParentClassOnSuccess),
            "function" == typeof c.inlineErrorMessageCallback)
          ) {
            var e = c.inlineErrorMessageCallback(a, !1, c);
            e && e.html("");
          } else d.find("." + c.errorMessageClass).remove();
        },
        removeAllMessagesAndStyling: function (c, d) {
          if ("function" == typeof d.submitErrorMessageCallback) {
            var e = d.submitErrorMessageCallback(c, !1, d);
            e && e.html("");
          } else c.find("." + d.errorMessageClass + ".alert").remove();
          c.find("." + d.errorElementClass + ",." + d.successElementClass).each(
            function () {
              b.removeInputStylingAndMessage(a(this), d);
            }
          );
        },
        setInlineMessage: function (b, c, d) {
          this.applyInputErrorStyling(b, d);
          var e,
            f = document.getElementById(b.attr("name") + "_err_msg"),
            g = !1,
            h = function (d) {
              a.formUtils.$win.trigger("validationErrorDisplay", [b, d]),
                d.html(c);
            },
            i = function () {
              var f = !1;
              g.find("." + d.errorMessageClass).each(function () {
                if (this.inputReferer === b[0]) return (f = a(this)), !1;
              }),
                f
                  ? c
                    ? h(f)
                    : f.remove()
                  : "" !== c &&
                    ((e = a(
                      '<div class="' + d.errorMessageClass + ' alert"></div>'
                    )),
                    h(e),
                    (e[0].inputReferer = b[0]),
                    g.prepend(e));
            };
          if (f)
            a.formUtils.warn("Using deprecated element reference " + f.id),
              (g = a(f)),
              i();
          else if ("function" == typeof d.inlineErrorMessageCallback) {
            if (((g = d.inlineErrorMessageCallback(b, c, d)), !g)) return;
            i();
          } else {
            var j = this.getParentContainer(b);
            (e = j.find("." + d.errorMessageClass + ".help-block")),
              0 === e.length &&
                ((e = a("<span></span>")
                  .addClass("help-block")
                  .addClass(d.errorMessageClass)),
                e.appendTo(j)),
              h(e);
          }
        },
        setMessageInTopOfForm: function (b, c, d, e) {
          var f =
              '<div class="{errorMessageClass} alert alert-danger"><strong>{errorTitle}</strong><ul>{fields}</ul></div>',
            g = !1;
          if (
            "function" != typeof d.submitErrorMessageCallback ||
            (g = d.submitErrorMessageCallback(b, c, d))
          ) {
            var h = {
              errorTitle: e.errorTitle,
              fields: "",
              errorMessageClass: d.errorMessageClass,
            };
            a.each(c, function (a, b) {
              h.fields += "<li>" + b + "</li>";
            }),
              a.each(h, function (a, b) {
                f = f.replace("{" + a + "}", b);
              }),
              g ? g.html(f) : b.children().eq(0).before(a(f));
          }
        },
      };
      a.formUtils = a.extend(a.formUtils || {}, { dialogs: b });
    })(a),
    (function (a, b, c) {
      "use strict";
      var d = 0;
      (a.fn.validateOnBlur = function (b, c) {
        var d = this,
          e = this.find("*[data-validation]");
        return (
          e.each(function () {
            var e = a(this);
            if (e.is("[type=radio]")) {
              var f = d.find('[type=radio][name="' + e.attr("name") + '"]');
              f.bind("blur.validation", function () {
                e.validateInputOnBlur(b, c, !0, "blur");
              }),
                c.validateCheckboxRadioOnClick &&
                  f.bind("click.validation", function () {
                    e.validateInputOnBlur(b, c, !0, "click");
                  });
            }
          }),
          e.bind("blur.validation", function () {
            a(this).validateInputOnBlur(b, c, !0, "blur");
          }),
          c.validateCheckboxRadioOnClick &&
            this.find(
              "input[type=checkbox][data-validation],input[type=radio][data-validation]"
            ).bind("click.validation", function () {
              a(this).validateInputOnBlur(b, c, !0, "click");
            }),
          this
        );
      }),
        (a.fn.validateOnEvent = function (b, c) {
          if (0 !== this.length) {
            var d =
              "FORM" === this[0].nodeName
                ? this.find("*[data-validation-event]")
                : this;
            return (
              d.each(function () {
                var d = a(this),
                  e = d.valAttr("event");
                e &&
                  d
                    .unbind(e + ".validation")
                    .bind(e + ".validation", function (d) {
                      9 !== (d || {}).keyCode &&
                        a(this).validateInputOnBlur(b, c, !0, e);
                    });
              }),
              this
            );
          }
        }),
        (a.fn.showHelpOnFocus = function (b) {
          return (
            b || (b = "data-validation-help"),
            this.find("textarea,input").each(function () {
              var c = a(this),
                e = "jquery_form_help_" + ++d,
                f = c.attr(b);
              c
                .removeClass("has-help-text")
                .unbind("focus.help")
                .unbind("blur.help"),
                f &&
                  c
                    .addClass("has-help-txt")
                    .bind("focus.help", function () {
                      var b = c.parent().find("." + e);
                      0 === b.length &&
                        ((b = a("<span />")
                          .addClass(e)
                          .addClass("help")
                          .addClass("help-block")
                          .text(f)
                          .hide()),
                        c.after(b)),
                        b.fadeIn();
                    })
                    .bind("blur.help", function () {
                      a(this)
                        .parent()
                        .find("." + e)
                        .fadeOut("slow");
                    });
            }),
            this
          );
        }),
        (a.fn.validate = function (b, c, d) {
          var e = a.extend({}, a.formUtils.LANG, d || {});
          this.each(function () {
            var d = a(this),
              f = d.closest("form").get(0) || {},
              g = f.validationConfig || a.formUtils.defaultConfig();
            d.one("validation", function (a, c) {
              "function" == typeof b && b(c, this, a);
            }),
              d.validateInputOnBlur(e, a.extend({}, g, c || {}), !0);
          });
        }),
        (a.fn.willPostponeValidation = function () {
          return (
            (this.valAttr("suggestion-nr") ||
              this.valAttr("postpone") ||
              this.hasClass("hasDatepicker")) &&
            !b.postponedValidation
          );
        }),
        (a.fn.validateInputOnBlur = function (c, d, e, f) {
          if (((a.formUtils.eventType = f), this.willPostponeValidation())) {
            var g = this,
              h = this.valAttr("postpone") || 200;
            return (
              (b.postponedValidation = function () {
                g.validateInputOnBlur(c, d, e, f), (b.postponedValidation = !1);
              }),
              setTimeout(function () {
                b.postponedValidation && b.postponedValidation();
              }, h),
              this
            );
          }
          (c = a.extend({}, a.formUtils.LANG, c || {})),
            a.formUtils.dialogs.removeInputStylingAndMessage(this, d);
          var i = this,
            j = i.closest("form"),
            k = a.formUtils.validateInput(i, c, d, j, f),
            l = function () {
              i.validateInputOnBlur(c, d, !1, "blur.revalidated");
            };
          return (
            "blur" === f &&
              i
                .unbind("validation.revalidate", l)
                .one("validation.revalidate", l),
            e && i.removeKeyUpValidation(),
            k.shouldChangeDisplay &&
              (k.isValid
                ? a.formUtils.dialogs.applyInputSuccessStyling(i, d)
                : a.formUtils.dialogs.setInlineMessage(i, k.errorMsg, d)),
            !k.isValid && e && i.validateOnKeyUp(c, d),
            this
          );
        }),
        (a.fn.validateOnKeyUp = function (b, c) {
          return (
            this.each(function () {
              var d = a(this);
              d.valAttr("has-keyup-event") ||
                d
                  .valAttr("has-keyup-event", "true")
                  .bind("keyup.validation", function (a) {
                    9 !== a.keyCode && d.validateInputOnBlur(b, c, !1, "keyup");
                  });
            }),
            this
          );
        }),
        (a.fn.removeKeyUpValidation = function () {
          return (
            this.each(function () {
              a(this).valAttr("has-keyup-event", !1).unbind("keyup.validation");
            }),
            this
          );
        }),
        (a.fn.valAttr = function (a, b) {
          return b === c
            ? this.attr("data-validation-" + a)
            : b === !1 || null === b
            ? this.removeAttr("data-validation-" + a)
            : ((a = a.length > 0 ? "-" + a : ""),
              this.attr("data-validation" + a, b));
        }),
        (a.fn.isValid = function (b, c, d) {
          if (a.formUtils.isLoadingModules) {
            var e = this;
            return (
              setTimeout(function () {
                e.isValid(b, c, d);
              }, 200),
              null
            );
          }
          (c = a.extend({}, a.formUtils.defaultConfig(), c || {})),
            (b = a.extend({}, a.formUtils.LANG, b || {})),
            (d = d !== !1),
            a.formUtils.errorDisplayPreventedWhenHalted &&
              (delete a.formUtils.errorDisplayPreventedWhenHalted, (d = !1));
          var f = function (b, e) {
              a.inArray(b, h) < 0 && h.push(b),
                i.push(e),
                e.valAttr("current-error", b),
                d && a.formUtils.dialogs.applyInputErrorStyling(e, c);
            },
            g = [],
            h = [],
            i = [],
            j = this,
            k = function (b, d) {
              return (
                "submit" === d ||
                "button" === d ||
                "reset" === d ||
                a.inArray(b, c.ignore || []) > -1
              );
            };
          if (
            (d && a.formUtils.dialogs.removeAllMessagesAndStyling(j, c),
            j
              .find("input,textarea,select")
              .filter(':not([type="submit"],[type="button"])')
              .each(function () {
                var d = a(this),
                  e = d.attr("type"),
                  h = "radio" === e || "checkbox" === e,
                  i = d.attr("name");
                if (!k(i, e) && (!h || a.inArray(i, g) < 0)) {
                  h && g.push(i);
                  var l = a.formUtils.validateInput(d, b, c, j, "submit");
                  l.isValid
                    ? l.isValid &&
                      l.shouldChangeDisplay &&
                      (d.valAttr("current-error", !1),
                      a.formUtils.dialogs.applyInputSuccessStyling(d, c))
                    : f(l.errorMsg, d);
                }
              }),
            "function" == typeof c.onValidate)
          ) {
            var l = c.onValidate(j);
            a.isArray(l)
              ? a.each(l, function (a, b) {
                  f(b.message, b.element);
                })
              : l && l.element && l.message && f(l.message, l.element);
          }
          return (
            (a.formUtils.isValidatingEntireForm = !1),
            i.length > 0 &&
              d &&
              ("top" === c.errorMessagePosition
                ? a.formUtils.dialogs.setMessageInTopOfForm(j, h, c, b)
                : a.each(i, function (b, d) {
                    a.formUtils.dialogs.setInlineMessage(
                      d,
                      d.valAttr("current-error"),
                      c
                    );
                  }),
              c.scrollToTopOnError &&
                a.formUtils.$win.scrollTop(j.offset().top - 20)),
            !d &&
              a.formUtils.haltValidation &&
              (a.formUtils.errorDisplayPreventedWhenHalted = !0),
            0 === i.length && !a.formUtils.haltValidation
          );
        }),
        (a.fn.restrictLength = function (b) {
          return new a.formUtils.lengthRestriction(this, b), this;
        }),
        (a.fn.addSuggestions = function (b) {
          var c = !1;
          return (
            this.find("input").each(function () {
              var d = a(this);
              (c = a.split(d.attr("data-suggestions"))),
                c.length > 0 &&
                  !d.hasClass("has-suggestions") &&
                  (a.formUtils.suggest(d, c, b), d.addClass("has-suggestions"));
            }),
            this
          );
        });
    })(a, window),
    (function (a) {
      "use strict";
      a.formUtils = a.extend(a.formUtils || {}, {
        isLoadingModules: !1,
        loadedModules: {},
        registerLoadedModule: function (b) {
          this.loadedModules[a.trim(b).toLowerCase()] = !0;
        },
        hasLoadedModule: function (b) {
          return a.trim(b).toLowerCase() in this.loadedModules;
        },
        loadModules: function (b, c, d) {
          if (a.formUtils.isLoadingModules)
            return void setTimeout(function () {
              a.formUtils.loadModules(b, c, d);
            }, 100);
          var e = function (b, c) {
            var e = a.split(b),
              f = e.length,
              g = function () {
                f--,
                  0 === f &&
                    ((a.formUtils.isLoadingModules = !1),
                    "function" == typeof d && d());
              };
            f > 0 && (a.formUtils.isLoadingModules = !0);
            var h = "?_=" + new Date().getTime(),
              i =
                document.getElementsByTagName("head")[0] ||
                document.getElementsByTagName("body")[0];
            a.each(e, function (b, d) {
              if (
                ((d = a.trim(d)),
                0 === d.length || a.formUtils.hasLoadedModule(d))
              )
                g();
              else {
                var e = c + d + (".js" === d.slice(-3) ? "" : ".js"),
                  f = document.createElement("SCRIPT");
                "function" == typeof define && define.amd
                  ? require([e + (".dev.js" === e.slice(-7) ? h : "")], g)
                  : ((f.type = "text/javascript"),
                    (f.onload = g),
                    (f.src = e + (".dev.js" === e.slice(-7) ? h : "")),
                    (f.onerror = function () {
                      a.formUtils.warn(
                        "Unable to load form validation module " + e,
                        !0
                      ),
                        g();
                    }),
                    (f.onreadystatechange = function () {
                      ("complete" !== this.readyState &&
                        "loaded" !== this.readyState) ||
                        (g(),
                        (this.onload = null),
                        (this.onreadystatechange = null));
                    }),
                    i.appendChild(f));
              }
            });
          };
          if (c) e(b, c);
          else {
            var f = function () {
              var c = !1;
              return (
                a('script[src*="form-validator"]').each(function () {
                  var a =
                    this.src.split("form-validator")[1].split("node_modules")
                      .length > 1;
                  if (!a)
                    return (
                      (c = this.src.substr(0, this.src.lastIndexOf("/")) + "/"),
                      "/" === c && (c = ""),
                      !1
                    );
                }),
                c !== !1 && (e(b, c), !0)
              );
            };
            f() ||
              a(function () {
                var a = f();
                a || ("function" == typeof d && d());
              });
          }
        },
      });
    })(a),
    (function (a) {
      "use strict";
      (a.split = function (b, c, d) {
        d = void 0 === d || d === !0;
        var e = "[,|" + (d ? "\\s" : "") + "-]\\s*",
          f = new RegExp(e, "g");
        if ("function" != typeof c) {
          if (!b) return [];
          var g = [];
          return (
            a.each(b.split(c ? c : f), function (b, c) {
              (c = a.trim(c)), c.length && g.push(c);
            }),
            g
          );
        }
        b &&
          a.each(b.split(f), function (b, d) {
            if (((d = a.trim(d)), d.length)) return c(d, b);
          });
      }),
        (a.validate = function (b) {
          var c = a.extend(a.formUtils.defaultConfig(), {
            form: "form",
            validateOnEvent: !1,
            validateOnBlur: !0,
            validateCheckboxRadioOnClick: !0,
            showHelpOnFocus: !0,
            addSuggestions: !0,
            modules: "",
            onModulesLoaded: null,
            language: !1,
            onSuccess: !1,
            onError: !1,
            onElementValidate: !1,
          });
          if (
            ((b = a.extend(c, b || {})),
            a(window).trigger("formValidationPluginInit", [b]),
            b.lang && "en" !== b.lang)
          ) {
            var d = "lang/" + b.lang + ".js";
            b.modules += b.modules.length ? "," + d : d;
          }
          a(b.form).each(function (c, d) {
            d.validationConfig = b;
            var e = a(d);
            e.trigger("formValidationSetup", [e, b]),
              e
                .find(".has-help-txt")
                .unbind("focus.validation")
                .unbind("blur.validation"),
              e
                .removeClass("has-validation-callback")
                .unbind("submit.validation")
                .unbind("reset.validation")
                .find("input[data-validation],textarea[data-validation]")
                .unbind("blur.validation"),
              e
                .bind("submit.validation", function (c) {
                  var d = a(this),
                    e = function () {
                      return c.stopImmediatePropagation(), !1;
                    };
                  if (a.formUtils.haltValidation) return e();
                  if (a.formUtils.isLoadingModules)
                    return (
                      setTimeout(function () {
                        d.trigger("submit.validation");
                      }, 200),
                      e()
                    );
                  var f = d.isValid(b.language, b);
                  if (a.formUtils.haltValidation) return e();
                  if (!f || "function" != typeof b.onSuccess)
                    return f || "function" != typeof b.onError
                      ? !!f || e()
                      : (b.onError(d), e());
                  var g = b.onSuccess(d);
                  return g === !1 ? e() : void 0;
                })
                .bind("reset.validation", function () {
                  a.formUtils.dialogs.removeAllMessagesAndStyling(e, b);
                })
                .addClass("has-validation-callback"),
              b.showHelpOnFocus && e.showHelpOnFocus(),
              b.addSuggestions && e.addSuggestions(),
              b.validateOnBlur &&
                (e.validateOnBlur(b.language, b),
                e.bind("html5ValidationAttrsFound", function () {
                  e.validateOnBlur(b.language, b);
                })),
              b.validateOnEvent && e.validateOnEvent(b.language, b);
          }),
            "" !== b.modules &&
              a.formUtils.loadModules(b.modules, null, function () {
                "function" == typeof b.onModulesLoaded && b.onModulesLoaded();
                var c = "string" == typeof b.form ? a(b.form) : b.form;
                a.formUtils.$win.trigger("validatorsLoaded", [c, b]);
              });
        });
    })(a),
    (function (a, b) {
      "use strict";
      var c = a(b);
      a.formUtils = a.extend(a.formUtils || {}, {
        $win: c,
        defaultConfig: function () {
          return {
            ignore: [],
            errorElementClass: "error",
            successElementClass: "valid",
            borderColorOnError: "#b94a48",
            errorMessageClass: "form-error",
            validationRuleAttribute: "data-validation",
            validationErrorMsgAttribute: "data-validation-error-msg",
            errorMessagePosition: "inline",
            errorMessageTemplate: {
              container:
                '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
              messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
              field: "<li>{msg}</li>",
            },
            scrollToTopOnError: !0,
            dateFormat: "yyyy-mm-dd",
            addValidClassOnAll: !1,
            decimalSeparator: ".",
            inputParentClassOnError: "has-error",
            inputParentClassOnSuccess: "has-success",
            validateHiddenInputs: !1,
            inlineErrorMessageCallback: !1,
            submitErrorMessageCallback: !1,
          };
        },
        validators: {},
        sanitizers: {},
        _events: { load: [], valid: [], invalid: [] },
        haltValidation: !1,
        addValidator: function (a) {
          var b =
            0 === a.name.indexOf("validate_") ? a.name : "validate_" + a.name;
          void 0 === a.validateOnKeyUp && (a.validateOnKeyUp = !0),
            (this.validators[b] = a);
        },
        addSanitizer: function (a) {
          this.sanitizers[a.name] = a;
        },
        warn: function (a, c) {
          "console" in b
            ? "function" == typeof b.console.warn
              ? b.console.warn(a)
              : "function" == typeof b.console.log && b.console.log(a)
            : c && alert(a);
        },
        getValue: function (a, b) {
          var c = b ? b.find(a) : a;
          if (c.length > 0) {
            var d = c.eq(0).attr("type");
            return "radio" === d || "checkbox" === d
              ? c.filter(":checked").val() || ""
              : c.val() || "";
          }
          return !1;
        },
        validateInput: function (b, c, d, e, f) {
          (d = d || a.formUtils.defaultConfig()),
            (c = c || a.formUtils.LANG),
            e.length || (e = b.parent());
          var g = this.getValue(b);
          b.valAttr("skipped", !1)
            .one("beforeValidation", function () {
              (b.attr("disabled") ||
                (!b.is(":visible") && !d.validateHiddenInputs)) &&
                b.valAttr("skipped", 1);
            })
            .trigger("beforeValidation", [g, c, d]);
          var h = "true" === b.valAttr("optional"),
            i = !g && h,
            j = b.attr(d.validationRuleAttribute),
            k = !0,
            l = "",
            m = { isValid: !0, shouldChangeDisplay: !0, errorMsg: "" };
          if (!j || i || b.valAttr("skipped"))
            return (m.shouldChangeDisplay = d.addValidClassOnAll), m;
          var n = b.valAttr("ignore");
          return (
            n &&
              a.each(n.split(""), function (a, b) {
                g = g.replace(new RegExp("\\" + b, "g"), "");
              }),
            a.split(j, function (h) {
              0 !== h.indexOf("validate_") && (h = "validate_" + h);
              var i = a.formUtils.validators[h];
              if (!i)
                throw new Error(
                  'Using undefined validator "' +
                    h +
                    '". Maybe you have forgotten to load the module that "' +
                    h +
                    '" belongs to?'
                );
              if (
                ("validate_checkbox_group" === h &&
                  (b = e.find('[name="' + b.attr("name") + '"]:eq(0)')),
                ("keyup" !== f || i.validateOnKeyUp) &&
                  (k = i.validatorFunction(g, b, d, c, e, f)),
                !k)
              )
                return (
                  d.validateOnBlur && b.validateOnKeyUp(c, d),
                  (l = a.formUtils.dialogs.resolveErrorMessage(b, i, h, d, c)),
                  !1
                );
            }),
            k === !1
              ? (b.trigger("validation", !1),
                (m.errorMsg = l),
                (m.isValid = !1),
                (m.shouldChangeDisplay = !0))
              : null === k
              ? (m.shouldChangeDisplay = !1)
              : (b.trigger("validation", !0), (m.shouldChangeDisplay = !0)),
            "function" == typeof d.onElementValidate &&
              null !== l &&
              d.onElementValidate(m.isValid, b, e, l),
            b.trigger("afterValidation", [m, f]),
            m
          );
        },
        parseDate: function (b, c, d) {
          var e,
            f,
            g,
            h,
            i = c.replace(/[a-zA-Z]/gi, "").substring(0, 1),
            j = "^",
            k = c.split(i || null);
          if (
            (a.each(k, function (a, b) {
              j += (a > 0 ? "\\" + i : "") + "(\\d{" + b.length + "})";
            }),
            (j += "$"),
            d)
          ) {
            var l = [];
            a.each(b.split(i), function (a, b) {
              1 === b.length && (b = "0" + b), l.push(b);
            }),
              (b = l.join(i));
          }
          if (((e = b.match(new RegExp(j))), null === e)) return !1;
          var m = function (b, c, d) {
            for (var e = 0; e < c.length; e++)
              if (c[e].substring(0, 1) === b)
                return a.formUtils.parseDateInt(d[e + 1]);
            return -1;
          };
          return (
            (g = m("m", k, e)),
            (f = m("d", k, e)),
            (h = m("y", k, e)),
            !(
              (2 === g &&
                f > 28 &&
                (h % 4 !== 0 || (h % 100 === 0 && h % 400 !== 0))) ||
              (2 === g &&
                f > 29 &&
                (h % 4 === 0 || (h % 100 !== 0 && h % 400 === 0))) ||
              g > 12 ||
              0 === g
            ) &&
              !(
                (this.isShortMonth(g) && f > 30) ||
                (!this.isShortMonth(g) && f > 31) ||
                0 === f
              ) && [h, g, f]
          );
        },
        parseDateInt: function (a) {
          return (
            0 === a.indexOf("0") && (a = a.replace("0", "")), parseInt(a, 10)
          );
        },
        isShortMonth: function (a) {
          return (a % 2 === 0 && a < 7) || (a % 2 !== 0 && a > 7);
        },
        lengthRestriction: function (b, c) {
          var d = parseInt(c.text(), 10),
            e = 0,
            f = function () {
              var a = b.val().length;
              if (a > d) {
                var f = b.scrollTop();
                b.val(b.val().substring(0, d)), b.scrollTop(f);
              }
              (e = d - a), e < 0 && (e = 0), c.text(e);
            };
          a(b)
            .bind("keydown keyup keypress focus blur", f)
            .bind("cut paste", function () {
              setTimeout(f, 100);
            }),
            a(document).bind("ready", f);
        },
        numericRangeCheck: function (b, c) {
          var d = a.split(c),
            e = parseInt(c.substr(3), 10);
          return (
            1 === d.length &&
              c.indexOf("min") === -1 &&
              c.indexOf("max") === -1 &&
              (d = [c, c]),
            2 === d.length && (b < parseInt(d[0], 10) || b > parseInt(d[1], 10))
              ? ["out", d[0], d[1]]
              : 0 === c.indexOf("min") && b < e
              ? ["min", e]
              : 0 === c.indexOf("max") && b > e
              ? ["max", e]
              : ["ok"]
          );
        },
        _numSuggestionElements: 0,
        _selectedSuggestion: null,
        _previousTypedVal: null,
        suggest: function (b, d, e) {
          var f = {
              css: {
                maxHeight: "150px",
                background: "#FFF",
                lineHeight: "150%",
                textDecoration: "underline",
                overflowX: "hidden",
                overflowY: "auto",
                border: "#CCC solid 1px",
                borderTop: "none",
                cursor: "pointer",
              },
              activeSuggestionCSS: { background: "#E9E9E9" },
            },
            g = function (a, b) {
              var c = b.offset();
              a.css({
                width: b.outerWidth(),
                left: c.left + "px",
                top: c.top + b.outerHeight() + "px",
              });
            };
          e && a.extend(f, e),
            (f.css.position = "absolute"),
            (f.css["z-index"] = 9999),
            b.attr("autocomplete", "off"),
            0 === this._numSuggestionElements &&
              c.bind("resize", function () {
                a(".jquery-form-suggestions").each(function () {
                  var b = a(this),
                    c = b.attr("data-suggest-container");
                  g(b, a(".suggestions-" + c).eq(0));
                });
              }),
            this._numSuggestionElements++;
          var h = function (b) {
            var c = b.valAttr("suggestion-nr");
            (a.formUtils._selectedSuggestion = null),
              (a.formUtils._previousTypedVal = null),
              a(".jquery-form-suggestion-" + c).fadeOut("fast");
          };
          return (
            b
              .data("suggestions", d)
              .valAttr("suggestion-nr", this._numSuggestionElements)
              .unbind("focus.suggest")
              .bind("focus.suggest", function () {
                a(this).trigger("keyup"),
                  (a.formUtils._selectedSuggestion = null);
              })
              .unbind("keyup.suggest")
              .bind("keyup.suggest", function () {
                var c = a(this),
                  d = [],
                  e = a.trim(c.val()).toLocaleLowerCase();
                if (e !== a.formUtils._previousTypedVal) {
                  a.formUtils._previousTypedVal = e;
                  var i = !1,
                    j = c.valAttr("suggestion-nr"),
                    k = a(".jquery-form-suggestion-" + j);
                  if ((k.scrollTop(0), "" !== e)) {
                    var l = e.length > 2;
                    a.each(c.data("suggestions"), function (a, b) {
                      var c = b.toLocaleLowerCase();
                      return c === e
                        ? (d.push("<strong>" + b + "</strong>"), (i = !0), !1)
                        : void (
                            (0 === c.indexOf(e) || (l && c.indexOf(e) > -1)) &&
                            d.push(
                              b.replace(
                                new RegExp(e, "gi"),
                                "<strong>$&</strong>"
                              )
                            )
                          );
                    });
                  }
                  i || (0 === d.length && k.length > 0)
                    ? k.hide()
                    : d.length > 0 && 0 === k.length
                    ? ((k = a("<div></div>").css(f.css).appendTo("body")),
                      b.addClass("suggestions-" + j),
                      k
                        .attr("data-suggest-container", j)
                        .addClass("jquery-form-suggestions")
                        .addClass("jquery-form-suggestion-" + j))
                    : d.length > 0 && !k.is(":visible") && k.show(),
                    d.length > 0 &&
                      e.length !== d[0].length &&
                      (g(k, c),
                      k.html(""),
                      a.each(d, function (b, d) {
                        a("<div></div>")
                          .append(d)
                          .css({
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            padding: "5px",
                          })
                          .addClass("form-suggest-element")
                          .appendTo(k)
                          .click(function () {
                            c.focus(),
                              c.val(a(this).text()),
                              c.trigger("change"),
                              h(c);
                          });
                      }));
                }
              })
              .unbind("keydown.validation")
              .bind("keydown.validation", function (b) {
                var c,
                  d,
                  e = b.keyCode ? b.keyCode : b.which,
                  g = a(this);
                if (13 === e && null !== a.formUtils._selectedSuggestion) {
                  if (
                    ((c = g.valAttr("suggestion-nr")),
                    (d = a(".jquery-form-suggestion-" + c)),
                    d.length > 0)
                  ) {
                    var i = d
                      .find("div")
                      .eq(a.formUtils._selectedSuggestion)
                      .text();
                    g.val(i), g.trigger("change"), h(g), b.preventDefault();
                  }
                } else {
                  (c = g.valAttr("suggestion-nr")),
                    (d = a(".jquery-form-suggestion-" + c));
                  var j = d.children();
                  if (j.length > 0 && a.inArray(e, [38, 40]) > -1) {
                    38 === e
                      ? (null === a.formUtils._selectedSuggestion
                          ? (a.formUtils._selectedSuggestion = j.length - 1)
                          : a.formUtils._selectedSuggestion--,
                        a.formUtils._selectedSuggestion < 0 &&
                          (a.formUtils._selectedSuggestion = j.length - 1))
                      : 40 === e &&
                        (null === a.formUtils._selectedSuggestion
                          ? (a.formUtils._selectedSuggestion = 0)
                          : a.formUtils._selectedSuggestion++,
                        a.formUtils._selectedSuggestion > j.length - 1 &&
                          (a.formUtils._selectedSuggestion = 0));
                    var k = d.innerHeight(),
                      l = d.scrollTop(),
                      m = d.children().eq(0).outerHeight(),
                      n = m * a.formUtils._selectedSuggestion;
                    return (
                      (n < l || n > l + k) && d.scrollTop(n),
                      j
                        .removeClass("active-suggestion")
                        .css("background", "none")
                        .eq(a.formUtils._selectedSuggestion)
                        .addClass("active-suggestion")
                        .css(f.activeSuggestionCSS),
                      b.preventDefault(),
                      !1
                    );
                  }
                }
              })
              .unbind("blur.suggest")
              .bind("blur.suggest", function () {
                h(a(this));
              }),
            b
          );
        },
        LANG: {
          errorTitle: "Form submission failed!",
          requiredField: "This is a required field",
          requiredFields: "You have not answered all required fields",
          badTime: "You have not given a correct time",
          badEmail: "You have not given a correct e-mail address",
          badTelephone: "You have not given a correct phone number",
          badSecurityAnswer:
            "You have not given a correct answer to the security question",
          badDate: "You have not given a correct date",
          lengthBadStart: "The input value must be between ",
          lengthBadEnd: " characters",
          lengthTooLongStart: "The input value is longer than ",
          lengthTooShortStart: "The input value is shorter than ",
          notConfirmed: "Input values could not be confirmed",
          badDomain: "Incorrect domain value",
          badUrl: "The input value is not a correct URL",
          badCustomVal: "The input value is incorrect",
          andSpaces: " and spaces ",
          badInt: "The input value was not a correct number",
          badSecurityNumber: "Your social security number was incorrect",
          badUKVatAnswer: "Incorrect UK VAT Number",
          badUKNin: "Incorrect UK NIN",
          badUKUtr: "Incorrect UK UTR Number",
          badStrength: "The password isn't strong enough",
          badNumberOfSelectedOptionsStart: "You have to choose at least ",
          badNumberOfSelectedOptionsEnd: " answers",
          badAlphaNumeric:
            "The input value can only contain alphanumeric characters ",
          badAlphaNumericExtra: " and ",
          wrongFileSize:
            "The file you are trying to upload is too large (max %s)",
          wrongFileType: "Only files of type %s is allowed",
          groupCheckedRangeStart: "Please choose between ",
          groupCheckedTooFewStart: "Please choose at least ",
          groupCheckedTooManyStart: "Please choose a maximum of ",
          groupCheckedEnd: " item(s)",
          badCreditCard: "The credit card number is not correct",
          badCVV: "The CVV number was not correct",
          wrongFileDim: "Incorrect image dimensions,",
          imageTooTall: "the image can not be taller than",
          imageTooWide: "the image can not be wider than",
          imageTooSmall: "the image was too small",
          min: "min",
          max: "max",
          imageRatioNotAccepted: "Image ratio is not be accepted",
          badBrazilTelephoneAnswer: "The phone number entered is invalid",
          badBrazilCEPAnswer: "The CEP entered is invalid",
          badBrazilCPFAnswer: "The CPF entered is invalid",
          badPlPesel: "The PESEL entered is invalid",
          badPlNip: "The NIP entered is invalid",
          badPlRegon: "The REGON entered is invalid",
          badreCaptcha: "Please confirm that you are not a bot",
          passwordComplexityStart: "Password must contain at least ",
          passwordComplexitySeparator: ", ",
          passwordComplexityUppercaseInfo: " uppercase letter(s)",
          passwordComplexityLowercaseInfo: " lowercase letter(s)",
          passwordComplexitySpecialCharsInfo: " special character(s)",
          passwordComplexityNumericCharsInfo: " numeric character(s)",
          passwordComplexityEnd: ".",
        },
      });
    })(a, window),
    (function (a) {
      a.formUtils.addValidator({
        name: "email",
        validatorFunction: function (b) {
          var c = b.toLowerCase().split("@"),
            d = c[0],
            e = c[1];
          if (d && e) {
            if (0 === d.indexOf('"')) {
              var f = d.length;
              if (((d = d.replace(/\"/g, "")), d.length !== f - 2)) return !1;
            }
            return (
              a.formUtils.validators.validate_domain.validatorFunction(c[1]) &&
              0 !== d.indexOf(".") &&
              "." !== d.substring(d.length - 1, d.length) &&
              d.indexOf("..") === -1 &&
              !/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(d)
            );
          }
          return !1;
        },
        errorMessage: "",
        errorMessageKey: "badEmail",
      }),
        a.formUtils.addValidator({
          name: "domain",
          validatorFunction: function (a) {
            return (
              a.length > 0 &&
              a.length <= 253 &&
              !/[^a-zA-Z0-9]/.test(a.slice(-2)) &&
              !/[^a-zA-Z0-9]/.test(a.substr(0, 1)) &&
              !/[^a-zA-Z0-9\.\-]/.test(a) &&
              1 === a.split("..").length &&
              a.split(".").length > 1
            );
          },
          errorMessage: "",
          errorMessageKey: "badDomain",
        }),
        a.formUtils.addValidator({
          name: "required",
          validatorFunction: function (b, c, d, e, f) {
            switch (c.attr("type")) {
              case "checkbox":
                return c.is(":checked");
              case "radio":
                return (
                  f
                    .find('input[name="' + c.attr("name") + '"]')
                    .filter(":checked").length > 0
                );
              default:
                return "" !== a.trim(b);
            }
          },
          errorMessage: "",
          errorMessageKey: function (a) {
            return "top" === a.errorMessagePosition ||
              "function" == typeof a.errorMessagePosition
              ? "requiredFields"
              : "requiredField";
          },
        }),
        a.formUtils.addValidator({
          name: "length",
          validatorFunction: function (b, c, d, e) {
            var f = c.valAttr("length"),
              g = c.attr("type");
            if (void 0 === f)
              return (
                alert(
                  'Please add attribute "data-validation-length" to ' +
                    c[0].nodeName +
                    " named " +
                    c.attr("name")
                ),
                !0
              );
            var h,
              i =
                "file" === g && void 0 !== c.get(0).files
                  ? c.get(0).files.length
                  : b.length,
              j = a.formUtils.numericRangeCheck(i, f);
            switch (j[0]) {
              case "out":
                (this.errorMessage = e.lengthBadStart + f + e.lengthBadEnd),
                  (h = !1);
                break;
              case "min":
                (this.errorMessage =
                  e.lengthTooShortStart + j[1] + e.lengthBadEnd),
                  (h = !1);
                break;
              case "max":
                (this.errorMessage =
                  e.lengthTooLongStart + j[1] + e.lengthBadEnd),
                  (h = !1);
                break;
              default:
                h = !0;
            }
            return h;
          },
          errorMessage: "",
          errorMessageKey: "",
        }),
        a.formUtils.addValidator({
          name: "url",
          validatorFunction: function (b) {
            var c =
              /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if (c.test(b)) {
              var d = b.split("://")[1],
                e = d.indexOf("/");
              return (
                e > -1 && (d = d.substr(0, e)),
                a.formUtils.validators.validate_domain.validatorFunction(d)
              );
            }
            return !1;
          },
          errorMessage: "",
          errorMessageKey: "badUrl",
        }),
        a.formUtils.addValidator({
          name: "number",
          validatorFunction: function (a, b, c) {
            if ("" !== a) {
              var d,
                e,
                f = b.valAttr("allowing") || "",
                g = b.valAttr("decimal-separator") || c.decimalSeparator,
                h = !1,
                i = b.valAttr("step") || "",
                j = !1,
                k = b.attr("data-sanitize") || "",
                l = k.match(/(^|[\s])numberFormat([\s]|$)/i);
              if (l) {
                if (!window.numeral)
                  throw new ReferenceError(
                    "The data-sanitize value numberFormat cannot be used without the numeral library. Please see Data Validation in http://www.formvalidator.net for more information."
                  );
                a.length && (a = String(numeral().unformat(a)));
              }
              if (
                (f.indexOf("number") === -1 && (f += ",number"),
                f.indexOf("negative") === -1 && 0 === a.indexOf("-"))
              )
                return !1;
              if (
                (f.indexOf("range") > -1 &&
                  ((d = parseFloat(
                    f.substring(f.indexOf("[") + 1, f.indexOf(";"))
                  )),
                  (e = parseFloat(
                    f.substring(f.indexOf(";") + 1, f.indexOf("]"))
                  )),
                  (h = !0)),
                "" !== i && (j = !0),
                "," === g)
              ) {
                if (a.indexOf(".") > -1) return !1;
                a = a.replace(",", ".");
              }
              if (
                "" === a.replace(/[0-9-]/g, "") &&
                (!h || (a >= d && a <= e)) &&
                (!j || a % i === 0)
              )
                return !0;
              if (
                f.indexOf("float") > -1 &&
                null !== a.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) &&
                (!h || (a >= d && a <= e)) &&
                (!j || a % i === 0)
              )
                return !0;
            }
            return !1;
          },
          errorMessage: "",
          errorMessageKey: "badInt",
        }),
        a.formUtils.addValidator({
          name: "alphanumeric",
          validatorFunction: function (b, c, d, e) {
            var f = "^([a-zA-Z0-9",
              g = "]+)$",
              h = c.valAttr("allowing"),
              i = "",
              j = !1;
            if (h) {
              i = f + h + g;
              var k = h.replace(/\\/g, "");
              k.indexOf(" ") > -1 &&
                ((j = !0),
                (k = k.replace(" ", "")),
                (k += e.andSpaces || a.formUtils.LANG.andSpaces)),
                e.badAlphaNumericAndExtraAndSpaces && e.badAlphaNumericAndExtra
                  ? j
                    ? (this.errorMessage =
                        e.badAlphaNumericAndExtraAndSpaces + k)
                    : (this.errorMessage =
                        e.badAlphaNumericAndExtra + k + e.badAlphaNumericExtra)
                  : (this.errorMessage =
                      e.badAlphaNumeric + e.badAlphaNumericExtra + k);
            } else (i = f + g), (this.errorMessage = e.badAlphaNumeric);
            return new RegExp(i).test(b);
          },
          errorMessage: "",
          errorMessageKey: "",
        }),
        a.formUtils.addValidator({
          name: "custom",
          validatorFunction: function (a, b) {
            var c = new RegExp(b.valAttr("regexp"));
            return c.test(a);
          },
          errorMessage: "",
          errorMessageKey: "badCustomVal",
        }),
        a.formUtils.addValidator({
          name: "date",
          validatorFunction: function (b, c, d) {
            var e = c.valAttr("format") || d.dateFormat || "yyyy-mm-dd",
              f = "false" === c.valAttr("require-leading-zero");
            return a.formUtils.parseDate(b, e, f) !== !1;
          },
          errorMessage: "",
          errorMessageKey: "badDate",
        }),
        a.formUtils.addValidator({
          name: "checkbox_group",
          validatorFunction: function (b, c, d, e, f) {
            var g = !0,
              h = c.attr("name"),
              i = a('input[type=checkbox][name^="' + h + '"]', f),
              j = i.filter(":checked").length,
              k = c.valAttr("qty");
            if (void 0 === k) {
              var l = c.get(0).nodeName;
              alert(
                'Attribute "data-validation-qty" is missing from ' +
                  l +
                  " named " +
                  c.attr("name")
              );
            }
            var m = a.formUtils.numericRangeCheck(j, k);
            switch (m[0]) {
              case "out":
                (this.errorMessage =
                  e.groupCheckedRangeStart + k + e.groupCheckedEnd),
                  (g = !1);
                break;
              case "min":
                (this.errorMessage =
                  e.groupCheckedTooFewStart +
                  m[1] +
                  (e.groupCheckedTooFewEnd || e.groupCheckedEnd)),
                  (g = !1);
                break;
              case "max":
                (this.errorMessage =
                  e.groupCheckedTooManyStart +
                  m[1] +
                  (e.groupCheckedTooManyEnd || e.groupCheckedEnd)),
                  (g = !1);
                break;
              default:
                g = !0;
            }
            if (!g) {
              var n = function () {
                i.unbind("click", n),
                  i
                    .filter("*[data-validation]")
                    .validateInputOnBlur(e, d, !1, "blur");
              };
              i.bind("click", n);
            }
            return g;
          },
        });
    })(a);
});

/******************************************************************************
 * jquery.i18n.properties
 *
 * Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
 * MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
 *
 * @version     1.0.x
 * @author      Nuno Fernandes
 * @url         www.codingwithcoffee.com
 * @inspiration Localisation assistance for jQuery (http://keith-wood.name/localisation.html)
 *              by Keith Wood (kbwood{at}iinet.com.au) June 2007
 *
 *****************************************************************************/

(function ($) {
  $.i18n = {};

  /** Map holding bundle keys (if mode: 'map') */
  $.i18n.map = {};

  /**
   * Load and parse message bundle files (.properties),
   * making bundles keys available as javascript variables.
   *
   * i18n files are named <name>.js, or <name>_<language>.js or <name>_<language>_<country>.js
   * Where:
   *      The <language> argument is a valid ISO Language Code. These codes are the lower-case,
   *      two-letter codes as defined by ISO-639. You can find a full list of these codes at a
   *      number of sites, such as: http://www.loc.gov/standards/iso639-2/englangn.html
   *      The <country> argument is a valid ISO Country Code. These codes are the upper-case,
   *      two-letter codes as defined by ISO-3166. You can find a full list of these codes at a
   *      number of sites, such as: http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html
   *
   * Sample usage for a bundles/Messages.properties bundle:
   * $.i18n.properties({
   *      name:      'Messages',
   *      language:  'en_US',
   *      path:      'bundles'
   * });
   * @param  name			(string/string[], optional) names of file to load (eg, 'Messages' or ['Msg1','Msg2']). Defaults to "Messages"
   * @param  language		(string, optional) language/country code (eg, 'en', 'en_US', 'pt_PT'). if not specified, language reported by the browser will be used instead.
   * @param  path			(string, optional) path of directory that contains file to load
   * @param  mode			(string, optional) whether bundles keys are available as JavaScript variables/functions or as a map (eg, 'vars' or 'map')
   * @param  cache        (boolean, optional) whether bundles should be cached by the browser, or forcibly reloaded on each page load. Defaults to false (i.e. forcibly reloaded)
   * @param  encoding 	(string, optional) the encoding to request for bundles. Property file resource bundles are specified to be in ISO-8859-1 format. Defaults to UTF-8 for backward compatibility.
   * @param  callback     (function, optional) callback function to be called after script is terminated
   */
  $.i18n.properties = function (settings) {
    // set up settings
    var defaults = {
      name: "Messages",
      language: "",
      path: "",
      mode: "vars",
      cache: false,
      encoding: "UTF-8",
      callback: null,
    };
    settings = $.extend(defaults, settings);
    if (settings.language === null || settings.language == "") {
      settings.language = $.i18n.browserLang();
    }
    if (settings.language === null) {
      settings.language = "";
    }

    // load and parse bundle files
    var files = getFiles(settings.name);
    for (i = 0; i < files.length; i++) {
      // 1. load base (eg, Messages.properties)
      // 此行为博主注释
      // loadAndParseFile(settings.path + files[i] + '.properties', settings);
      // 2. with language code (eg, Messages_pt.properties)
      if (settings.language.length >= 2) {
        loadAndParseFile(
          settings.path +
            files[i] +
            "_" +
            settings.language.substring(0, 2) +
            ".properties",
          settings
        );
      }
      // 3. with language code and country code (eg, Messages_pt_PT.properties)
      if (settings.language.length >= 5) {
        loadAndParseFile(
          settings.path +
            files[i] +
            "_" +
            settings.language.substring(0, 5) +
            ".properties",
          settings
        );
      }
    }

    // call callback
    if (settings.callback) {
      settings.callback();
    }
  };

  /**
   * When configured with mode: 'map', allows access to bundle values by specifying its key.
   * Eg, jQuery.i18n.prop('com.company.bundles.menu_add')
   */
  $.i18n.prop = function (
    key /* Add parameters as function arguments as necessary  */
  ) {
    var value = $.i18n.map[key];
    if (value == null) return "[" + key + "]";

    if (arguments.length < 2)
      // No arguments.
      //if(key == 'spv.lbl.modified') {alert(value);}
      return value;

    if (!$.isArray(placeHolderValues)) {
      // If placeHolderValues is not an array, make it into one.
      placeHolderValues = [placeHolderValues];
      for (var i = 2; i < arguments.length; i++)
        placeHolderValues.push(arguments[i]);
    }

    // Place holder replacement
    /**
     * Tested with:
     *   test.t1=asdf ''{0}''
     *   test.t2=asdf '{0}' '{1}'{1}'zxcv
     *   test.t3=This is \"a quote" 'a''{0}''s'd{fgh{ij'
     *   test.t4="'''{'0}''" {0}{a}
     *   test.t5="'''{0}'''" {1}
     *   test.t6=a {1} b {0} c
     *   test.t7=a 'quoted \\ s\ttringy' \t\t x
     *
     * Produces:
     *   test.t1, p1 ==> asdf 'p1'
     *   test.t2, p1 ==> asdf {0} {1}{1}zxcv
     *   test.t3, p1 ==> This is "a quote" a'{0}'sd{fgh{ij
     *   test.t4, p1 ==> "'{0}'" p1{a}
     *   test.t5, p1 ==> "'{0}'" {1}
     *   test.t6, p1 ==> a {1} b p1 c
     *   test.t6, p1, p2 ==> a p2 b p1 c
     *   test.t6, p1, p2, p3 ==> a p2 b p1 c
     *   test.t7 ==> a quoted \ s	tringy 		 x
     */

    var i;
    if (typeof value == "string") {
      // Handle escape characters. Done separately from the tokenizing loop below because escape characters are
      // active in quoted strings.
      i = 0;
      while ((i = value.indexOf("\\", i)) != -1) {
        if (value[i + 1] == "t")
          value = value.substring(0, i) + "\t" + value.substring(i++ + 2);
        // tab
        else if (value[i + 1] == "r")
          value = value.substring(0, i) + "\r" + value.substring(i++ + 2);
        // return
        else if (value[i + 1] == "n")
          value = value.substring(0, i) + "\n" + value.substring(i++ + 2);
        // line feed
        else if (value[i + 1] == "f")
          value = value.substring(0, i) + "\f" + value.substring(i++ + 2);
        // form feed
        else if (value[i + 1] == "\\")
          value = value.substring(0, i) + "\\" + value.substring(i++ + 2);
        // \
        else value = value.substring(0, i) + value.substring(i + 1); // Quietly drop the character
      }

      // Lazily convert the string to a list of tokens.
      var arr = [],
        j,
        index;
      i = 0;
      while (i < value.length) {
        if (value[i] == "'") {
          // Handle quotes
          if (i == value.length - 1) value = value.substring(0, i);
          // Silently drop the trailing quote
          else if (value[i + 1] == "'")
            value = value.substring(0, i) + value.substring(++i);
          // Escaped quote
          else {
            // Quoted string
            j = i + 2;
            while ((j = value.indexOf("'", j)) != -1) {
              if (j == value.length - 1 || value[j + 1] != "'") {
                // Found start and end quotes. Remove them
                value =
                  value.substring(0, i) +
                  value.substring(i + 1, j) +
                  value.substring(j + 1);
                i = j - 1;
                break;
              } else {
                // Found a double quote, reduce to a single quote.
                value = value.substring(0, j) + value.substring(++j);
              }
            }

            if (j == -1) {
              // There is no end quote. Drop the start quote
              value = value.substring(0, i) + value.substring(i + 1);
            }
          }
        } else if (value[i] == "{") {
          // Beginning of an unquoted place holder.
          j = value.indexOf("}", i + 1);
          if (j == -1) i++;
          // No end. Process the rest of the line. Java would throw an exception
          else {
            // Add 1 to the index so that it aligns with the function arguments.
            index = parseInt(value.substring(i + 1, j));
            if (!isNaN(index) && index >= 0) {
              // Put the line thus far (if it isn't empty) into the array
              var s = value.substring(0, i);
              if (s != "") arr.push(s);
              // Put the parameter reference into the array
              arr.push(index);
              // Start the processing over again starting from the rest of the line.
              i = 0;
              value = value.substring(j + 1);
            } else i = j + 1; // Invalid parameter. Leave as is.
          }
        } else i++;
      }

      // Put the remainder of the no-empty line into the array.
      if (value != "") arr.push(value);
      value = arr;

      // Make the array the value for the entry.
      $.i18n.map[key] = arr;
    }

    if (value.length == 0) return "";
    if (value.lengh == 1 && typeof value[0] == "string") return value[0];

    var s = "";
    for (i = 0; i < value.length; i++) {
      if (typeof value[i] == "string") s += value[i];
      // Must be a number
      else if (value[i] + 1 < arguments.length) s += arguments[value[i] + 1];
      else s += "{" + value[i] + "}";
    }

    return s;
  };

  /** Language reported by browser, normalized code */
  $.i18n.browserLang = function () {
    return normaliseLanguageCode(
      navigator.language /* Mozilla */ || navigator.userLanguage /* IE */
    );
  };

  /** Load and parse .properties files */
  function loadAndParseFile(filename, settings) {
    $.ajax({
      url: filename,
      async: false,
      cache: settings.cache,
      contentType: "text/plain;charset=" + settings.encoding,
      dataType: "text",
      success: function (data, status) {
        parseData(data, settings.mode);
      },
    });
  }

  /** Parse .properties files */
  function parseData(data, mode) {
    var parsed = "";
    var parameters = data.split(/\n/);
    var regPlaceHolder = /(\{\d+\})/g;
    var regRepPlaceHolder = /\{(\d+)\}/g;
    var unicodeRE = /(\\u.{4})/gi;
    for (var i = 0; i < parameters.length; i++) {
      parameters[i] = parameters[i].replace(/^\s\s*/, "").replace(/\s\s*$/, ""); // trim
      if (parameters[i].length > 0 && parameters[i].match("^#") != "#") {
        // skip comments
        var pair = parameters[i].split("=");
        if (pair.length > 0) {
          /** Process key & value */
          var name = unescape(pair[0])
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, ""); // trim
          var value = pair.length == 1 ? "" : pair[1];
          // process multi-line values
          while (value.match(/\\$/) == "\\") {
            value = value.substring(0, value.length - 1);
            value += parameters[++i].replace(/\s\s*$/, ""); // right trim
          }
          // Put values with embedded '='s back together
          for (var s = 2; s < pair.length; s++) {
            value += "=" + pair[s];
          }
          value = value.replace(/^\s\s*/, "").replace(/\s\s*$/, ""); // trim

          /** Mode: bundle keys in a map */
          if (mode == "map" || mode == "both") {
            // handle unicode chars possibly left out
            var unicodeMatches = value.match(unicodeRE);
            if (unicodeMatches) {
              for (var u = 0; u < unicodeMatches.length; u++) {
                value = value.replace(
                  unicodeMatches[u],
                  unescapeUnicode(unicodeMatches[u])
                );
              }
            }
            // add to map
            $.i18n.map[name] = value;
          }

          /** Mode: bundle keys as vars/functions */
          if (mode == "vars" || mode == "both") {
            value = value.replace(/"/g, '\\"'); // escape quotation mark (")

            // make sure namespaced key exists (eg, 'some.key')
            checkKeyNamespace(name);

            // value with variable substitutions
            if (regPlaceHolder.test(value)) {
              var parts = value.split(regPlaceHolder);
              // process function args
              var first = true;
              var fnArgs = "";
              var usedArgs = [];
              for (var p = 0; p < parts.length; p++) {
                if (
                  regPlaceHolder.test(parts[p]) &&
                  (usedArgs.length == 0 || usedArgs.indexOf(parts[p]) == -1)
                ) {
                  if (!first) {
                    fnArgs += ",";
                  }
                  fnArgs += parts[p].replace(regRepPlaceHolder, "v$1");
                  usedArgs.push(parts[p]);
                  first = false;
                }
              }
              parsed += name + "=function(" + fnArgs + "){";
              // process function body
              var fnExpr =
                '"' + value.replace(regRepPlaceHolder, '"+v$1+"') + '"';
              parsed += "return " + fnExpr + ";" + "};";

              // simple value
            } else {
              parsed += name + '="' + value + '";';
            }
          } // END: Mode: bundle keys as vars/functions
        } // END: if(pair.length > 0)
      } // END: skip comments
    }
    eval(parsed);
  }

  /** Make sure namespace exists (for keys with dots in name) */
  // TODO key parts that start with numbers quietly fail. i.e. month.short.1=Jan
  function checkKeyNamespace(key) {
    var regDot = /\./;
    if (regDot.test(key)) {
      var fullname = "";
      var names = key.split(/\./);
      for (var i = 0; i < names.length; i++) {
        if (i > 0) {
          fullname += ".";
        }
        fullname += names[i];
        if (eval("typeof " + fullname + ' == "undefined"')) {
          eval(fullname + "={};");
        }
      }
    }
  }

  /** Make sure filename is an array */
  function getFiles(names) {
    return names && names.constructor == Array ? names : [names];
  }

  /** Ensure language code is in the format aa_AA. */
  function normaliseLanguageCode(lang) {
    lang = lang.toLowerCase();
    if (lang.length > 3) {
      lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
    }
    return lang;
  }

  /** Unescape unicode chars ('\u00e3') */
  function unescapeUnicode(str) {
    // unescape unicode codes
    var codes = [];
    var code = parseInt(str.substr(2), 16);
    if (code >= 0 && code < Math.pow(2, 16)) {
      codes.push(code);
    }
    // convert codes to text
    var unescaped = "";
    for (var i = 0; i < codes.length; ++i) {
      unescaped += String.fromCharCode(codes[i]);
    }
    return unescaped;
  }

  /* Cross-Browser Split 1.0.1
(c) Steven Levithan <stevenlevithan.com>; MIT License
An ECMA-compliant, uniform cross-browser split method */
  var cbSplit;
  // avoid running twice, which would break `cbSplit._nativeSplit`'s reference to the native `split`
  if (!cbSplit) {
    cbSplit = function (str, separator, limit) {
      // if `separator` is not a regex, use the native `split`
      if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
        if (typeof cbSplit._nativeSplit == "undefined")
          return str.split(separator, limit);
        else return cbSplit._nativeSplit.call(str, separator, limit);
      }

      var output = [],
        lastLastIndex = 0,
        flags =
          (separator.ignoreCase ? "i" : "") +
          (separator.multiline ? "m" : "") +
          (separator.sticky ? "y" : ""),
        separator = RegExp(separator.source, flags + "g"), // make `global` and avoid `lastIndex` issues by working with a copy
        separator2,
        match,
        lastIndex,
        lastLength;

      str = str + ""; // type conversion
      if (!cbSplit._compliantExecNpcg) {
        separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags); // doesn't need /g or /y, but they don't hurt
      }

      /* behavior for `limit`: if it's...
      - `undefined`: no limit.
      - `NaN` or zero: return an empty array.
      - a positive number: use `Math.floor(limit)`.
      - a negative number: no limit.
      - other: type-convert, then use the above rules. */
      if (limit === undefined || +limit < 0) {
        limit = Infinity;
      } else {
        limit = Math.floor(+limit);
        if (!limit) {
          return [];
        }
      }

      while ((match = separator.exec(str))) {
        lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser

        if (lastIndex > lastLastIndex) {
          output.push(str.slice(lastLastIndex, match.index));

          // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
          if (!cbSplit._compliantExecNpcg && match.length > 1) {
            match[0].replace(separator2, function () {
              for (var i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) {
                  match[i] = undefined;
                }
              }
            });
          }

          if (match.length > 1 && match.index < str.length) {
            Array.prototype.push.apply(output, match.slice(1));
          }

          lastLength = match[0].length;
          lastLastIndex = lastIndex;

          if (output.length >= limit) {
            break;
          }
        }

        if (separator.lastIndex === match.index) {
          separator.lastIndex++; // avoid an infinite loop
        }
      }

      if (lastLastIndex === str.length) {
        if (lastLength || !separator.test("")) {
          output.push("");
        }
      } else {
        output.push(str.slice(lastLastIndex));
      }

      return output.length > limit ? output.slice(0, limit) : output;
    };

    cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined; // NPCG: nonparticipating capturing group
    cbSplit._nativeSplit = String.prototype.split;
  } // end `if (!cbSplit)`
  String.prototype.split = function (separator, limit) {
    return cbSplit(this, separator, limit);
  };
})(jQuery);

$.validate();

var lang_browser = navigator.language || navigator.userLanguage; //常规浏览器语言和IE浏览器
lang_browser = lang_browser.substr(0, 2); //截取lang前2位字符
if (lang_browser == "zh") {
  // 0:ch,1:en
  var lang_default = 0;
} else {
  var lang_default = 1;
}

var language_pack = {
  now_lang: 0, // 0:ch,1:en
  loadProperties: function (new_lang) {
    var self = this;
    var tmp_lang = "";
    if (new_lang == 0) {
      tmp_lang = "zh";
      $("body").removeClass("en").addClass("zh");
    } else {
      tmp_lang = "en";
      $("body").removeClass("zh").addClass("en");
    }
    jQuery.i18n.properties({
      //加载资浏览器语言对应的资源文件
      name: "strings", //资源文件名称
      path: "https://oneinstack.com/wp-content/themes/kratos/languages/", //资源文件路径
      language: tmp_lang,
      cache: false,
      mode: "map", //用Map的方式使用资源文件中的值
      callback: function () {
        //加载成功后设置显示内容
        for (var i in $.i18n.map) {
          $('[lang-placeholder="' + i + '"]').attr(
            "placeholder",
            $.i18n.map[i]
          );
          $('[lang-data-validation-error-msg="' + i + '"]').attr(
            "data-validation-error-msg",
            $.i18n.map[i]
          );
          $('[lang-title="' + i + '"]').attr(
            "data-original-title",
            $.i18n.map[i]
          );
          $('[data-lang="' + i + '"]').text($.i18n.map[i]);
        }
        document.title = $.i18n.map["title"];
      },
    });
    self.now_lang = new_lang;
  },
};

$(document).ready(function () {
  language_pack.loadProperties(lang_default);

  $("#J_lang_switch").click(function () {
    var new_lang;
    if (language_pack.now_lang == 0) {
      new_lang = 1;
    } else {
      new_lang = 0;
    }
    language_pack.loadProperties(new_lang);
  });

  $(".oneinstack_x").show().css("display", "flex");
  $(".ssh_port_mod").hide().css("display", "none");

  $("#pass_db_gen").click(function () {
    $("#db_root_pwd")
      .focus()
      .val(Math.random().toString(36).slice(2, 10))
      .blur();
  });
  $("#port_gen").click(function () {
    $("#ssh_port").val(Math.ceil(Math.random() * (65534 - 1025) + 1025));
    $("#ssh_port_if").attr("checked", "true");
  });

  $("#nginx_if").change(function () {
    if ($("#nginx_if:checked").val()) {
      $("#nginx_mod").slideDown("slow");
    } else {
      $("#nginx_mod").slideUp("fast");
    }
  });

  $("#apache_if").change(function () {
    if ($("#apache_if:checked").val()) {
      $("#section_apache_v").slideDown("slow");
      if ($("#apache_v").val() == 1) {
        $("#section_apache_mpm").slideDown("slow");
        if ($("#php_if:checked").val()) {
          $("#section_apache_php").slideDown("slow");
        }
      } else {
        $("#section_apache_mpm, #section_apache_php").slideUp("slow");
      }
    } else {
      $("#section_apache_v, #section_apache_mpm, #section_apache_php").slideUp(
        "slow"
      );
    }
  });

  $("#apache_v").change(function () {
    if ($(this).val() == 1) {
      $("#section_apache_mpm").slideDown("slow");
      if ($("#php_if:checked").val()) {
        $("#section_apache_php").slideDown("slow");
      }
    } else {
      $("#section_apache_mpm, #section_apache_php").slideUp("slow");
    }
  });

  $("#php_if").change(function () {
    if ($("#php_if:checked").val()) {
      $(".php_mod").slideDown("slow");
      $("#mod_pma").slideDown("slow");
      if ($($("#apache_if:checked").val() && "#apache_v").val() == 1) {
        $("#section_apache_mpm, #section_apache_php").slideDown("slow");
      }
    } else {
      $(".php_mod").slideUp("fast");
      $("#mod_pma").slideUp("fast");
      $("#section_apache_php").slideUp("slow");
    }
  });

  $("#php2_if").change(function () {
    if ($("#php2_if:checked").val()) {
      $(".php2_mod").slideDown("slow");
    } else {
      $(".php2_mod").slideUp("fast");
    }
  });

  $("#db_if").change(function () {
    if ($("#db_if:checked").val()) {
      $(".db_mod").slideDown("slow");
    } else {
      $(".db_mod").slideUp("fast");
    }
  });

  $("#tomcat_if").change(function () {
    if ($("#tomcat_if:checked").val()) {
      $(".tomcat_mod").slideDown("slow");
    } else {
      $(".tomcat_mod").slideUp("fast");
    }
  });

  $("#ssh_port_if").change(function () {
    if ($("#ssh_port_if:checked").val()) {
      $(".ssh_port_mod").slideDown("slow");
    } else {
      $(".ssh_port_mod").slideUp("fast");
    }
  });

  $("#php_lib-4").change(function () {
    if ($("#php_lib-4:checked").val() && $("#php_lib-5:checked").val()) {
      $("#php_lib-5").prop("checked", false);
    }
  });
  $("#php_lib-5").change(function () {
    if ($("#php_lib-4:checked").val() && $("#php_lib-5:checked").val()) {
      $("#php_lib-4").prop("checked", false);
    }
  });

  $("#ssh_port").change(function () {
    $("#ssh_port_if").attr("checked", "true");
  });

  $(document).setOisView();
  $(document).setOisChange();

  $("input,select").change(function () {
    $(document).setOisView();
    $(document).setOisChange();
  });

  $(document).click(function () {
    $(document).setOisView();
    $(document).setOisChange();
  });

  $("#btn_install").click(function () {
    $(document).setOisView();
    $(document).setOisChange();

    var clipboard = new ClipboardJS("#btn_install");

    clipboard.on("success", function (e) {
      layer.msg($.i18n.map["copied"]);
      clipboard.destroy();
    });

    clipboard.on("error", function (e) {
      layer.msg($.i18n.map["copied_failed"]);
    });
  });

  $("#oneinstack").change(function () {
    switch ($("#oneinstack").val()) {
      case "1":
      case "2":
      case "3":
      case "4":
        $("#hhvm").prop("checked", false);
        break;
      default:
        $("#hhvm").prop("checked", false);
    }
  });

  $('[data-toggle="tooltip"]').tooltip();
});

(function ($) {
  $.fn.setOisView = function () {
    var x = $("#oneinstack").val();
    if (x == 1) {
      //LNMP
      $("#section_nginx, #section_php, #section_db").slideDown("slow");
      $("#section_apache_php, #section_apache, #section_tomcat").slideUp(
        "slow"
      );
    } else if (x == 2) {
      //LAMP
      $("#section_apache, #section_php, #section_db").slideDown("slow");
      $("#section_nginx, #section_tomcat").slideUp("slow");
      if ($("#apache_v").val() == 1) {
        $("#section_apache_php").slideDown("slow");
      }
    } else if (x == 3) {
      //LNMPA
      $("#section_nginx, #section_apache, #section_php, #section_db").slideDown(
        "slow"
      );
      $("#section_tomcat").slideUp("slow");
      if ($("#apache_v").val() == 1) {
        $("#section_apache_php").slideDown("slow");
      }
    } else if (x == 4) {
      //LNMT
      $("#section_nginx, #section_tomcat, #section_db").slideDown("slow");
      $("#section_apache, #section_php, #mod_pma").slideUp("slow");
    } else {
      $(".oneinstack_x").slideDown("slow");
    }
    $(".oneinstack_bixu").slideDown("slow");

    if (
      $("#section_php").is(":visible") &&
      $("#php_if:checked").val() &&
      (($("#section_apache_php").is(":visible") &&
        $("#apache_php").val() == 1) ||
        (!(
          $("#section_apache").is(":visible") && $("#apache_if:checked").val()
        ) &&
          $("#section_nginx").is(":visible") &&
          $("#nginx_if:checked").val()))
    ) {
      //首先必须安装PHP
      //安装了Apache且 apache2.4 php-fpm 模式下
      //或者 没装Apache 装Nginx
      $("#section_php2").slideDown("slow");
    } else {
      $("#section_php2").slideUp("slow");
    }
    /*
	    var port = $( "#ssh_port" ).val();
		if( ($("#ssh_port_if:checked").val() && port>0) && ( port > 65534 || port <22 || ( port > 22 && port < 1025 ) ) ){
	        alert( $.i18n.map['ssh_range'] );
		}
*/
  };
  $.fn.setOisChange = function () {
    var t =
      "wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz && tar xzf oneinstack-full.tar.gz && ./oneinstack/install.sh";

    if ($("#section_nginx").is(":visible") && $("#nginx_if:checked").val()) {
      t = t + " --nginx_option " + $("#nginx_v").val();
    }

    if ($("#section_apache").is(":visible") && $("#apache_if:checked").val()) {
      t = t + " --apache ";
      if ($("#apache_v").val() == 1) {
        t = t + " --apache_mpm_option " + $("#apache_mpm").val();
        if ($("#php_if:checked").val()) {
          t = t + " --apache_mode_option " + $("#apache_php").val();
        }
      }
    }

    if ($("#section_php").is(":visible") && $("#php_if:checked").val()) {
      t = t + " --php_option " + $("#php_v").val();
      if ($("#php_cache").val() > 0) {
        t = t + " --phpcache_option " + $("#php_cache").val();
      }

      var php_lib = ",";
      for (var i = 1; i <= 18; i++) {
        if ($("#php_lib-" + i + ":checked").val())
          php_lib = php_lib + "," + $("#php_lib-" + i + ":checked").val();
      }
      if (php_lib.length > 2)
        t = t + " --php_extensions " + php_lib.substring(2);

      if ($("#phpmyadmin:checked").val()) t = t + " --phpmyadmin ";
    }

    if ($("#section_php2").is(":visible") && $("#php2_if:checked").val()) {
      t = t + " --mphp_ver " + $("#php2_v").val();
    }

    if ($("#section_tomcat").is(":visible") && $("#tomcat_if:checked").val()) {
      if ($("#tomcat_v").val() > 0) {
        t = t + " --tomcat_option " + $("#tomcat_v").val();
      }
      if ($("#jdk_v").val() > 0) {
        t = t + " --jdk_option " + $("#jdk_v").val();
      }
    }

    if ($("#section_db").is(":visible") && $("#db_if:checked").val()) {
      t = t + " --db_option " + $("#db_v").val();
      t = t + " --dbinstallmethod " + $("#db_install_method").val();
      t = t + " --dbrootpwd " + $("#db_root_pwd").val();
    }

    if ($("#node:checked").val()) t = t + " --node ";

    if ($("#pureftpd:checked").val()) t = t + " --pureftpd ";

    if ($("#redis:checked").val()) t = t + " --redis ";

    if ($("#memcached:checked").val()) t = t + " --memcached ";

    if ($("#firewall:checked").val()) t = t + " --firewall ";

    if ($("#ssh_port_if:checked").val() && $("#ssh_port").val() > 0)
      t = t + " --ssh_port " + $("#ssh_port").val();

    if ($("#reboot:checked").val()) t = t + " --reboot ";

    $("#code_install").val(t);
  };
})(jQuery);
