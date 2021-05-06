"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(template, containerEl) {
    var _this = this;

    _classCallCheck(this, LoginComponent);

    _defineProperty(this, "_formEl", null);

    _defineProperty(this, "_loginInputEl", null);

    _defineProperty(this, "_passwordInputEl", null);

    _defineProperty(this, "_messageEl", null);

    _defineProperty(this, "onLoginSubmit", function () {
      _this._messageEl.classList.add("hide");

      var result = _this.checkUserCredentialsP(_this._loginInputEl.value, _this._passwordInputEl.value);

      result.then(function (e) {
        if (e.ok) {
          if (_this.onLogin) {
            _this.onLogin();
          }
        } else {
          _this._messageEl.classList.remove("hide");
        }

        return e.json();
      });
      result["catch"](function (e) {
        _this._messageEl.classList.remove("hide");
      });
    });

    this.template = template;
    this.containerEl = containerEl;
  }

  _createClass(LoginComponent, [{
    key: "init",
    value: function init() {
      this.containerEl.innerHTML = this.template.replace("{{message}}", "Incorrect credentials, please check one and try again!");
      this._formEl = this.containerEl.querySelector("#login-form");
      this._loginInputEl = this.containerEl.querySelector("#email-input");
      this._passwordInputEl = this.containerEl.querySelector("#pass-input");
      this._messageEl = this.containerEl.querySelector("#message");

      this._formEl.addEventListener("submit", this.resetDefault);

      this._formEl.addEventListener("submit", this.onLoginSubmit);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._formEl.removeEventListener("submit", this.resetDefault);

      this._formEl.removeEventListener("submit", this.onLoginSubmit);
    }
  }, {
    key: "onLogin",
    value: function onLogin() {
      onSuccessLogin();
    }
  }, {
    key: "resetDefault",
    value: function resetDefault(evt) {
      evt.preventDefault();
    }
  }, {
    key: "checkUserCredentialsP",
    value: function checkUserCredentialsP(login, password) {
      return fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: login,
          password: password
        }),
        headers: {
          "content-type": "application/json"
        }
      });
    }
  }]);

  return LoginComponent;
}();
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserComponent = /*#__PURE__*/function () {
  function UserComponent(listTemplate, itemTemplate, containerEl) {
    _classCallCheck(this, UserComponent);

    _defineProperty(this, "_user", []);

    this.listTemplate = listTemplate;
    this.itemTemplate = itemTemplate;
    this.containerEl = containerEl;
  }

  _createClass(UserComponent, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.containerEl.innerHTML = this.listTemplate;
      this.loadData().then(function (response) {
        var _this$containerEl$que;

        _this._user = [].concat(_toConsumableArray(_this._user), _toConsumableArray(response.data));

        var userEls = _this._user.map(function (e) {
          return _this.makeUserCard(e);
        });

        (_this$containerEl$que = _this.containerEl.querySelector("div-user")).append.apply(_this$containerEl$que, _toConsumableArray(userEls));
      });
    }
  }, {
    key: "makeUserCard",
    value: function makeUserCard(user) {
      var userEl = document.createElement("div");
      userEl.innerHTML = this.itemTemplate.replace('"{{avatar}}"', user.avatar).replace("{{name}}", user.first_name).replace("{{surname}}", user.last_name).replace("{{email}}", user.email);
      return userEl;
    }
  }, {
    key: "loadData",
    value: function loadData() {
      return fetch("https://reqres.in/api/users").then(function (e) {
        return e.json();
      });
    }
  }]);

  return UserComponent;
}();

;
"use strict";

var contentEl = document.getElementById("content");
var loginComponent = new LoginComponent(document.getElementById("login-template").innerText, contentEl);
loginComponent.init();
var userComponent = new UserComponent(document.getElementById("user-list-template").innerText, document.getElementById("user-item-template").innerText, contentEl);

function onSuccessLogin() {
  loginComponent.dispose();
  userComponent.init();
}