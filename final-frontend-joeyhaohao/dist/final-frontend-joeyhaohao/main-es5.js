var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-5\">\n      <h3>Sign Up</h3>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm.value)\" ngNativeValidate>\n        <label for=\"username-signup\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username-signup\" formControlName=\"username\" pattern=\"^[a-zA-Z][a-zA-Z0-9]+$\" placeholder=\"Trump123\" required>\n        <label for=\"display-name\">Display Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"display-name\" formControlName=\"displayName\" placeholder=\"Donald Trump\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"xxxxx@rice.edu\" required>\n        <label for=\"phone\">Phone Number</label>\n        <input type=\"tel\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" pattern=\"\\d\\d\\d-\\d\\d\\d-\\d\\d\\d\\d\" placeholder=\"123-456-7890\" required>\n        <label for=\"dob\">Date of Birth</label>\n        <input type=\"date\" class=\"form-control\" id=\"dob\" formControlName=\"dob\" required>\n        <ngb-alert *ngIf=\"registerForm.hasError('tooYoung')\" [dismissible]=\"true\">\n          Only individuals 18 years of age or older are allowed to register\n        </ngb-alert>\n        <label for=\"zipcode\">Zipcode</label>\n        <input type=\"text\" class=\"form-control\" id=\"zipcode\" formControlName=\"zipcode\" pattern=\"\\d\\d\\d\\d\\d\" placeholder=\"77005\" required>\n        <label for=\"pwd-signup\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd-signup\" formControlName=\"pwd\" required>\n        <label for=\"pwd-confirm\">Password Confirmation</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd-confirm\" formControlName=\"pwdConfirm\" required>\n        <ngb-alert *ngIf=\"registerForm.hasError('pwdNotMatch')\" [dismissible]=\"true\">\n          Password Not Match\n        </ngb-alert>\n        <button class=\"btn btn-md btn-primary btn-block\" type=\"submit\" id=\"btn-register\">Sign up</button>\n        <ngb-alert id=\"regFlag\" type=\"success\" *ngIf=\"(regFlag | async)\" [dismissible]=\"false\">\n          Register successfully\n        </ngb-alert>\n        <ngb-alert *ngIf=\"(regErr | async)\" [dismissible]=\"true\">\n          {{ regErr | async }}\n        </ngb-alert>\n      </form>\n    </div>\n\n    <div class=\"col-2\"></div>\n\n    <div class=\"col-5 float-right\">\n      <h3>Already have an account?</h3>\n      <h3>Please log in</h3>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin(loginForm.value)\" id=\"loginForm\" ngNativeValidate>\n        <label for=\"username-login\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username-login\" formControlName=\"username\" pattern=\"^[a-zA-Z][a-zA-Z0-9]+$\" required>\n        <label for=\"pwd-login\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd-login\" formControlName=\"pwd\" required>\n        <button class=\"btn btn-md btn-primary btn-block\" type=\"submit\" id=\"btn-login\">Log In</button>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"onLoginFacebook()\">Login with Facebook</button>\n        <ngb-alert *ngIf=\"(loginErr | async)\" [dismissible]=\"false\">\n          {{loginErr | async}}\n        </ngb-alert>\n      </form>\n    </div>\n\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-chat *ngIf=\"userId\"\n         [adapter]=\"adapter\"\n         [title]=\"'Online Chat'\"\n         [isCollapsed]=\"true\"\n         [userId]=\"userId\"\n         [historyEnabled]=\"true\"\n         [historyPageSize]=\"4\"\n         [hideFriendsList]=\"false\"\n         [theme]=\"theme\">\n</ng-chat>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/article/article.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/article/article.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <textarea id=\"newArticle\" placeholder=\"What is going on\" #textInput></textarea>\n</div>\n<div class=\"row mb-3\">\n  <div class=\"col-12\">\n    <button (click)=\"textInput.value=''\" class=\"mx-2 btn btn-md btn-outline-danger float-right\">Clear</button>\n    <button (click)=\"onAddPost(textInput.value, imgFile.files[0]); textInput.value=''\" id=\"btn-post\" class=\"btn btn-md btn-outline-info float-right\">Post</button>\n    <span>Add Image</span>\n    <input type=\"file\" accept=\"image/*\" #imgFile>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-8\">\n    <input class=\"form-control\" id=\"searchText\" type=\"search\" placeholder=\"Search\" #searchContent>\n  </div>\n  <button (click)=\"onSearch(searchContent.value)\" id=\"btn-search\" class=\"btn btn-outline-success\" type=\"submit\">Search</button>\n</div>\n\n<div class=\"row articles\" *ngFor=\"let article of articles | async\">\n  <div class=\"card mb-3\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4\">\n        <img src=\"{{ article.image }}\" class=\"card-img\" alt=\"postImg\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body\">\n          <span><strong>{{ article.author }}</strong></span>\n          <button class=\"btn btn-md btn-warning float-right\" *ngIf=\"(profile | async).username === article.author\"\n                  (click)=\"openModal(editArticle)\">Edit</button>\n          <hr>\n          <p class=\"card-text articleText\">{{ article.text }}</p>\n          <span class=\"card-text\"><small class=\"text-muted\">Last updated {{article.date | date:'hh:mm:ss MMM dd, yyyy'}}</small></span>\n          <button class=\"btn btn-md btn-success float-right\" (click)=\"openModal(addComment)\">Comment</button>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #editArticle let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-editArticle\">Article</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <textarea class=\"form-control\" value=\"{{article.text}}\" #newArticle></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onEditArticle(article, newArticle.value); modal.close()\">Post</button>\n      </div>\n    </ng-template>\n\n    <ng-template #addComment let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-addComment\">Comment</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <textarea class=\"form-control\" placeholder=\"Say something\" #commentInput></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onComment(article, commentInput.value); modal.close()\">Post</button>\n      </div>\n    </ng-template>\n\n    <hr *ngIf=\"article.comments.length > 0\">\n    <div *ngFor=\"let comment of article.comments\">\n      <div class=\"col-12\">\n        <span>@<strong>{{comment.author}}</strong>:</span>\n        <span><small class=\"float-right text-muted\">{{comment.date | date:'hh:mm:ss MMM dd, yyyy'}}</small></span>\n      </div>\n      <div class=\"col-12 mx-2 mb-3\">\n        <span>{{comment.text}}</span>\n        <button class=\"btn btn-sm btn-warning float-right\" *ngIf=\"(profile | async).username===comment.author\" (click)=\"openModal(editComment)\">Edit</button>\n      </div>\n\n      <ng-template #editComment let-modal>\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"modal-editComment\">Comment</h4>\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <textarea class=\"form-control\" value=\"{{comment.text}}\" #newComment></textarea>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"onEditComment(article, comment, newComment.value); modal.close()\">Submit</button>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/main']\">Home</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li ngbDropdown class=\"d-inline-block\">\n        <a class=\"nav-link\" id=\"dropdownMenuButton\" ngbDropdownToggle>\n            <img src=\"{{(profile | async).avatar}}\" width=\"30\" height=\"30\">\n            <span>{{(profile | async).username}}</span>\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"logout\" (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <div class=\"card mb-5\">\n        <img src=\"{{(profile| async).avatar}}\" class=\"card-img-top\" alt=\"avatar\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{(profile| async).username}}</h5>\n          <p class=\"card-text\" id=\"headline\">{{(profile| async).headline}}</p>\n          <span><input type=\"text\" id=\"input-headline\" #status placeholder=\"status headline\"></span>\n          <button class=\"btn btn-primary\" id=\"btn-updateHeadline\" (click)=\"updateHeadline(status.value); status.value=''\">Update</button>\n        </div>\n      </div>\n      <h2>Following</h2>\n      <div class=\"card mb-2\" *ngFor=\"let followUser of following | async\">\n        <img src=\"{{followUser.avatar}}\" class=\"card-img-top\" alt=\"avatar\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{followUser.username}}</h5>\n          <p class=\"card-text\">{{followUser.headline}}</p>\n          <button class=\"btn btn-primary\" (click)=\"unfollow(followUser)\">Unfollow</button>\n        </div>\n      </div>\n      <input type=\"text\" #addUser placeholder=\"Add a following user\">\n      <button class=\"btn btn-primary\" (click)=\"follow(addUser.value); addUser.value=''\">Add</button>\n      <ngb-alert *ngIf=\"userNotFound | async\" [dismissible]=\"true\">\n        User Not Found\n      </ngb-alert>\n    </div>\n    <div class=\"col-9\">\n      <app-articles></app-articles>\n    </div>\n    <app-chat></app-chat>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <ngb-alert type=\"success\" *ngIf=\"(updateFlag | async)\" [dismissible]=\"true\">\n    Update successfully\n  </ngb-alert>\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <img class=\"img-fluid\" src=\"{{(profile | async).avatar}}\">\n        <p>Update Avatar</p>\n        <input type=\"file\" accept=\"image/*\" #imgFile>\n        <button class=\"inputButton\" (click)=\"updateAvatar(imgFile.files[0])\">Submit</button>\n      </div>\n      <div class=\"col-3\">\n        <h3>User Info</h3>\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{(profile | async).username}}\" readonly=\"readonly\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\" value=\"{{(profile | async).email}}\" readonly=\"readonly\">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" value=\"{{(profile | async).zipcode}}\" readonly=\"readonly\">\n        <label>Password</label>\n        <p>********</p>\n      </div>\n      <div class=\"col-3\">\n        <h3>Update Info</h3>\n        <form [formGroup]=\"updateInfoForm\" (ngSubmit)=\"updateInfo(updateInfoForm.value)\" ngNativeValidate>\n          <label>Username</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"username\" value=\"{{(profile | async).username}}\" readonly=\"readonly\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n          <label>Zipcode</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"zipcode\" pattern=\"\\d\\d\\d\\d\\d\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" id=\"btn-submit\">Update</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-12\">\n        <button class=\"btn btn-success mx-2\" (click)=\"linkAccount()\">Link with Facebook</button>\n        <button class=\"btn btn-warning\">Unlink Account</button>\n        <span *ngIf=\"(linkFlag | async)\">Link Success</span>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-12\">\n        <a [routerLink]=\"['/main']\">Go Back</a>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            var routes = [
                { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
                { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
                { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
                { path: '', redirectTo: '/auth', pathMatch: 'full' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Ricebook';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm2015/ng-chat.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _main_article_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/article/article.component */ "./src/app/main/article/article.component.ts");
            /* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
            /* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
            /* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_14__);
            var config = { url: 'https://yz157-ricebook.herokuapp.com', options: {} };
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
                        _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                        _main_article_article_component__WEBPACK_IMPORTED_MODULE_12__["ArticleComponent"],
                        _chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                        ng_chat__WEBPACK_IMPORTED_MODULE_7__["NgChatModule"],
                        ng_socket_io__WEBPACK_IMPORTED_MODULE_14__["SocketIoModule"].forRoot(config)
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/auth/auth.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/auth.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/auth/auth.component.ts ***!
          \****************************************/
        /*! exports provided: AuthComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function () { return AuthComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony import */ var _main_article_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/article/article.service */ "./src/app/main/article/article.service.ts");
            /* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat.service */ "./src/app/chat/chat.service.ts");
            var AuthComponent = /** @class */ (function () {
                function AuthComponent(authServ, postServ, chatServ, formBuilder) {
                    this.authServ = authServ;
                    this.postServ = postServ;
                    this.chatServ = chatServ;
                    this.formBuilder = formBuilder;
                    this.registerForm = this.formBuilder.group({
                        username: '',
                        displayName: '',
                        email: '',
                        phone: '',
                        dob: '',
                        zipcode: '',
                        pwd: '',
                        pwdConfirm: '',
                        timestamp: ''
                    }, { validator: [this.validatePwds, this.validateDob] });
                    this.loginForm = this.formBuilder.group({
                        username: '',
                        pwd: '',
                    });
                }
                AuthComponent.prototype.ngOnInit = function () {
                    this.regFlag = this.authServ.regFlag;
                    this.regErr = this.authServ.regErr;
                    this.loginErr = this.authServ.loginErr;
                    this.authServ.init();
                };
                AuthComponent.prototype.validatePwds = function (group) {
                    var pwd = group.value.pwd;
                    var pwdConfirm = group.value.pwdConfirm;
                    return pwd === pwdConfirm ? null : { pwdNotMatch: true };
                };
                AuthComponent.prototype.validateDob = function (group) {
                    if ((Date.now() - Date.parse(group.value.dob)) / 1000 / 86400 / 365 < 18) {
                        return { tooYoung: true };
                    }
                    return null;
                };
                AuthComponent.prototype.onRegister = function (user) {
                    if (this.registerForm.valid) {
                        this.authServ.register(user);
                    }
                };
                AuthComponent.prototype.onLogin = function (user) {
                    this.authServ.login(user);
                };
                AuthComponent.prototype.onLoginFacebook = function () {
                    this.authServ.loginFacebook();
                };
                return AuthComponent;
            }());
            AuthComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _main_article_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] },
                { type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-auth',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")).default]
                })
            ], AuthComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/auth/auth.service.ts ***!
          \**************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat.service */ "./src/app/chat/chat.service.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router, chatServ) {
                    this.http = http;
                    this.router = router;
                    this.chatServ = chatServ;
                    this.server = "https://yz157-ricebook.herokuapp.com";
                    this._regFlag = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this.regFlag = this._regFlag.asObservable();
                    this._regErr = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
                    this.regErr = this._regErr.asObservable();
                    this._loginErr = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
                    this.loginErr = this._loginErr.asObservable();
                    this.init();
                }
                AuthService.prototype.init = function () {
                    this._regFlag.next(false);
                    this._regErr.next("");
                    this._loginErr.next("");
                };
                AuthService.prototype.register = function (user) {
                    var _this = this;
                    this.http.post(this.server + '/register', user, { withCredentials: true }).subscribe(function (res) {
                        console.log(res);
                        _this._regFlag.next(true);
                        _this._regErr.next("");
                    }, function (err) {
                        _this._regFlag.next(false);
                        console.log(err);
                        _this._regErr.next(err.error.error);
                    });
                };
                AuthService.prototype.login = function (user) {
                    var _this = this;
                    this.http.post(this.server + '/login', user, { withCredentials: true }).subscribe(function (res) {
                        _this._loginErr.next("");
                        _this.chatServ.login(res['username']);
                        _this.router.navigateByUrl('/main');
                    }, function (err) {
                        _this._loginErr.next(err.error.error);
                    });
                };
                AuthService.prototype.loginFacebook = function () {
                    window.location.href = this.server + '/auth/facebook';
                };
                AuthService.prototype.logout = function () {
                    var _this = this;
                    this.http.put(this.server + '/logout', {}, { withCredentials: true }).subscribe(function (res) {
                        _this.chatServ.logout(res['username']);
                        _this.router.navigateByUrl('/');
                    });
                };
                AuthService.prototype.updatePwd = function (password) {
                    this.http.put(this.server + '/password', { password: password }, { withCredentials: true })
                        .subscribe(function (res) {
                    });
                };
                AuthService.prototype.linkAccount = function () {
                    window.location.href = this.server + '/auth/facebook';
                };
                AuthService.prototype.unlinkAccount = function () {
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/chat/chat.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/chat/chat.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/chat/chat.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/chat/chat.component.ts ***!
          \****************************************/
        /*! exports provided: ChatComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function () { return ChatComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _socket_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket-adapter */ "./src/app/chat/socket-adapter.ts");
            /* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
            /* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _main_follow_follow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/follow/follow.service */ "./src/app/main/follow/follow.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ChatComponent = /** @class */ (function () {
                function ChatComponent(socket, followServ, http) {
                    this.socket = socket;
                    this.followServ = followServ;
                    this.http = http;
                    this.theme = 'dark-theme';
                    this.initSocketListeners();
                }
                ChatComponent.prototype.initSocketListeners = function () {
                    var _this = this;
                    console.log('init');
                    this.socket.on("createSocketId", function (socketId) {
                        console.log('connect');
                        // Initializing the chat with the userId and the adapter with the socket instance
                        _this.userId = socketId;
                        _this.adapter = new _socket_adapter__WEBPACK_IMPORTED_MODULE_2__["SocketAdapter"](_this.userId, _this.socket, _this.http);
                    });
                };
                ChatComponent.prototype.ngOnInit = function () {
                };
                return ChatComponent;
            }());
            ChatComponent.ctorParameters = function () { return [
                { type: ng_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] },
                { type: _main_follow_follow_service__WEBPACK_IMPORTED_MODULE_4__["FollowService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
            ]; };
            ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
                })
            ], ChatComponent);
            /***/ 
        }),
        /***/ "./src/app/chat/chat.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/chat/chat.service.ts ***!
          \**************************************/
        /*! exports provided: ChatService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function () { return ChatService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
            /* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
            var ChatService = /** @class */ (function () {
                function ChatService(socket) {
                    this.socket = socket;
                }
                ChatService.prototype.login = function (username) {
                    console.log('login');
                    this.socket.emit("login", username);
                };
                ChatService.prototype.logout = function (username) {
                    console.log('logout');
                    this.socket.emit("logout", username);
                };
                return ChatService;
            }());
            ChatService.ctorParameters = function () { return [
                { type: ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
            ]; };
            ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChatService);
            /***/ 
        }),
        /***/ "./src/app/chat/socket-adapter.ts": 
        /*!****************************************!*\
          !*** ./src/app/chat/socket-adapter.ts ***!
          \****************************************/
        /*! exports provided: SocketAdapter */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketAdapter", function () { return SocketAdapter; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var ng_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-chat */ "./node_modules/ng-chat/fesm2015/ng-chat.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            // export class SocketAdapter extends ChatAdapter implements IChatGroupAdapter {
            var SocketAdapter = /** @class */ (function (_super) {
                __extends(SocketAdapter, _super);
                function SocketAdapter(userId, socket, http) {
                    var _this = _super.call(this) || this;
                    // private server = "http://localhost:3000";
                    _this.server = "https://yz157-ricebook.herokuapp.com";
                    _this.socket = socket;
                    _this.userId = userId;
                    _this.http = http;
                    _this.initSocketListeners();
                    return _this;
                }
                // public static mockedParticipants: IChatParticipant[] = [
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 1,
                //     displayName: "Arya Stark",
                //     avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
                //     status: ChatParticipantStatus.Online
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 2,
                //     displayName: "Cersei Lannister",
                //     avatar: null,
                //     status: ChatParticipantStatus.Online
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 3,
                //     displayName: "Daenerys Targaryen",
                //     avatar: "https://68.media.tumblr.com/avatar_d28d7149f567_128.png",
                //     status: ChatParticipantStatus.Busy
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 4,
                //     displayName: "Eddard Stark",
                //     avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
                //     status: ChatParticipantStatus.Offline
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 5,
                //     displayName: "Hodor",
                //     avatar: "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg",
                //     status: ChatParticipantStatus.Offline
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 6,
                //     displayName: "Jaime Lannister",
                //     avatar: "https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg",
                //     status: ChatParticipantStatus.Busy
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 7,
                //     displayName: "John Snow",
                //     avatar: "https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg",
                //     status: ChatParticipantStatus.Busy
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 8,
                //     displayName: "Lorde Petyr 'Littlefinger' Baelish",
                //     avatar: "http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png",
                //     status: ChatParticipantStatus.Offline
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 9,
                //     displayName: "Sansa Stark",
                //     avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
                //     status: ChatParticipantStatus.Online
                //   },
                //   {
                //     participantType: ChatParticipantType.User,
                //     id: 10,
                //     displayName: "Theon Greyjoy",
                //     avatar: "https://thumbnail.myheritageimages.com/502/323/78502323/000/000114_884889c3n33qfe004v5024_C_64x64C.jpg",
                //     status: ChatParticipantStatus.Away
                //   }];
                SocketAdapter.prototype.listFriends = function () {
                    return this.http.get(this.server + '/chatFriends', { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                        var friendList = res['friendList'];
                        console.log(friendList);
                        if (friendList instanceof Array) {
                            var response_1 = [];
                            friendList.forEach(function (friend) {
                                var user = {
                                    participantType: ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatParticipantType"].User,
                                    id: friend.id,
                                    displayName: friend.username,
                                    avatar: friend.avatar,
                                    status: friend.onlineStatus,
                                };
                                var participantResponse = new ng_chat__WEBPACK_IMPORTED_MODULE_1__["ParticipantResponse"]();
                                participantResponse.participant = user;
                                participantResponse.metadata = {
                                    totalUnreadMessages: Math.floor(Math.random() * 10)
                                };
                                response_1.push(participantResponse);
                            });
                            return response_1;
                        }
                    }));
                };
                SocketAdapter.prototype.getMessageHistory = function (destinataryId) {
                    var mockedHistory;
                    mockedHistory = [
                        {
                            fromId: 1,
                            toId: 999,
                            message: "Hi there. Let chat!",
                            dateSent: new Date()
                        }
                    ];
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(mockedHistory).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
                };
                SocketAdapter.prototype.sendMessage = function (message) {
                    this.socket.emit("sendMessage", message);
                };
                SocketAdapter.prototype.initSocketListeners = function () {
                    var _this = this;
                    this.socket.on("messageReceived", function (messageWrapper) {
                        // Handle the received message to ng-chat
                        _this.onMessageReceived(messageWrapper.user, messageWrapper.message);
                    });
                    this.socket.on("friendListUpdate", function (socketUsers) {
                        console.log("update");
                        // Trigger update of friends list
                        _this.listFriends().subscribe(function (response) {
                            _this.onFriendsListChanged(response);
                        });
                    });
                };
                return SocketAdapter;
            }(ng_chat__WEBPACK_IMPORTED_MODULE_1__["ChatAdapter"]));
            /***/ 
        }),
        /***/ "./src/app/main/article/article.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/main/article/article.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  width: 100%;\n  height: 20vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/main/article/article.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/main/article/article.component.ts ***!
          \***************************************************/
        /*! exports provided: ArticleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () { return ArticleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.service */ "./src/app/main/article/article.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile/profile.service */ "./src/app/profile/profile.service.ts");
            var ArticleComponent = /** @class */ (function () {
                function ArticleComponent(artiServ, profServ, modalService) {
                    this.artiServ = artiServ;
                    this.profServ = profServ;
                    this.modalService = modalService;
                    this.posts = [];
                    this.postsDisplay = [];
                    this.articles = artiServ.articles;
                    this.profile = profServ.profile;
                }
                ArticleComponent.prototype.ngOnInit = function () {
                };
                ArticleComponent.prototype.onSearch = function (text) {
                    this.artiServ.search(text);
                };
                ArticleComponent.prototype.onAddPost = function (text, file) {
                    if (text.length > 0) {
                        this.artiServ.addArticles(text, file);
                    }
                };
                ArticleComponent.prototype.onEditArticle = function (article, text) {
                    if (text.length > 0) {
                        this.artiServ.editArticle(article, text);
                    }
                };
                ArticleComponent.prototype.openModal = function (content) {
                    this.modalService.open(content);
                };
                ArticleComponent.prototype.onComment = function (article, comment) {
                    if (comment.length > 0) {
                        this.artiServ.addComment(article, comment);
                    }
                };
                ArticleComponent.prototype.onEditComment = function (article, comment, text) {
                    if (text.length > 0) {
                        this.artiServ.editComment(article, comment, text);
                    }
                };
                return ArticleComponent;
            }());
            ArticleComponent.ctorParameters = function () { return [
                { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
                { type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
            ]; };
            ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-articles',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/article/article.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article.component.css */ "./src/app/main/article/article.component.css")).default]
                })
            ], ArticleComponent);
            /***/ 
        }),
        /***/ "./src/app/main/article/article.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/main/article/article.service.ts ***!
          \*************************************************/
        /*! exports provided: ArticleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function () { return ArticleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ArticleService = /** @class */ (function () {
                function ArticleService(http) {
                    this.http = http;
                    this.server = "https://yz157-ricebook.herokuapp.com";
                    this._articles = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new Array());
                    this.articles = this._articles.asObservable();
                }
                // compareArtcles(a, b) {
                //   if (a.date > b.date){
                //     return -1;
                //   } else if (a.date < b.date){
                //     return 1;
                //   } else {
                //     return 0;
                //   }
                // }
                ArticleService.prototype.loadArticles = function () {
                    var _this = this;
                    this.articlesData = new Array();
                    this.http.get(this.server + '/articles', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.articlesData = res['articles'];
                        _this._articles.next(Object.assign([], _this.articlesData));
                    });
                };
                ArticleService.prototype.addArticles = function (text, file) {
                    var _this = this;
                    var fd = new FormData();
                    fd.append('text', text);
                    fd.append('image', file);
                    this.http.post(this.server + '/articles', fd, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.loadArticles();
                    });
                };
                ArticleService.prototype.editArticle = function (article, text) {
                    var _this = this;
                    this.http.put(this.server + '/articles/' + article._id, { text: text }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.loadArticles();
                    });
                };
                ArticleService.prototype.search = function (text) {
                    var articles = this.articlesData.filter(function (article) {
                        return article.text.indexOf(text) !== -1 || article.author.indexOf(text) !== -1;
                    });
                    this._articles.next(Object.assign([], articles));
                };
                ArticleService.prototype.addComment = function (article, comment) {
                    var _this = this;
                    this.http.put(this.server + '/articles/' + article._id, { commentId: -1, text: comment }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.loadArticles();
                    });
                };
                ArticleService.prototype.editComment = function (article, comment, newComment) {
                    var _this = this;
                    console.log(comment._id);
                    this.http.put(this.server + '/articles/' + article._id, { commentId: comment._id, text: newComment }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.loadArticles();
                    });
                };
                return ArticleService;
            }());
            ArticleService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ArticleService);
            /***/ 
        }),
        /***/ "./src/app/main/follow/follow.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/main/follow/follow.service.ts ***!
          \***********************************************/
        /*! exports provided: FollowService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function () { return FollowService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article/article.service */ "./src/app/main/article/article.service.ts");
            var FollowService = /** @class */ (function () {
                function FollowService(http, artiServ) {
                    this.http = http;
                    this.artiServ = artiServ;
                    this.server = "https://yz157-ricebook.herokuapp.com";
                    this._following = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
                    this.following = this._following.asObservable();
                    this._userNotFound = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                    this.userNotFound = this._userNotFound.asObservable();
                }
                FollowService.prototype.loadFollowing = function () {
                    var _this = this;
                    this._userNotFound.next(false);
                    this.http.get(this.server + '/following', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.followingData = res['following'];
                        _this._following.next(Object.assign([], _this.followingData));
                    });
                };
                FollowService.prototype.addFollowing = function (username) {
                    var _this = this;
                    this.http.put(this.server + '/following/', { username: username }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.loadFollowing();
                        _this.artiServ.loadArticles();
                    }, function (err) {
                        _this._userNotFound.next(true);
                    });
                };
                FollowService.prototype.deleteFollowing = function (userProfile) {
                    var _this = this;
                    if (this.followingData.indexOf(userProfile) >= 0) {
                        this.http.delete(this.server + '/following/' + userProfile.username, { withCredentials: true })
                            .subscribe(function (res) {
                            _this.loadFollowing();
                            _this.artiServ.loadArticles();
                        });
                    }
                };
                return FollowService;
            }());
            FollowService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _article_article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] }
            ]; };
            FollowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FollowService);
            /***/ 
        }),
        /***/ "./src/app/main/main.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/main/main.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-body input {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/main/main.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/main/main.component.ts ***!
          \****************************************/
        /*! exports provided: MainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function () { return MainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
            /* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/article.service */ "./src/app/main/article/article.service.ts");
            /* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.service */ "./src/app/profile/profile.service.ts");
            /* harmony import */ var _follow_follow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow/follow.service */ "./src/app/main/follow/follow.service.ts");
            var MainComponent = /** @class */ (function () {
                function MainComponent(authServ, artiServ, profServ, followServ) {
                    this.authServ = authServ;
                    this.artiServ = artiServ;
                    this.profServ = profServ;
                    this.followServ = followServ;
                    this.profile = this.profServ.profile;
                    this.following = this.followServ.following;
                    this.userNotFound = this.followServ.userNotFound;
                }
                MainComponent.prototype.ngOnInit = function () {
                    this.profServ.loadProfile();
                    this.followServ.loadFollowing();
                    this.artiServ.loadArticles();
                };
                MainComponent.prototype.onLogout = function () {
                    this.authServ.logout();
                };
                MainComponent.prototype.updateHeadline = function (headline) {
                    if (headline.length > 0) {
                        this.profServ.updateHeadline(headline);
                    }
                };
                MainComponent.prototype.follow = function (name) {
                    if (name.length > 0) {
                        this.followServ.addFollowing(name);
                    }
                };
                MainComponent.prototype.unfollow = function (userProfile) {
                    this.followServ.deleteFollowing(userProfile);
                };
                return MainComponent;
            }());
            MainComponent.ctorParameters = function () { return [
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _article_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
                { type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
                { type: _follow_follow_service__WEBPACK_IMPORTED_MODULE_5__["FollowService"] }
            ]; };
            MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
                })
            ], MainComponent);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/profile/profile.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/profile/profile.component.ts ***!
          \**********************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
            /* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(profServ, authServ, formBuilder) {
                    this.profServ = profServ;
                    this.authServ = authServ;
                    this.formBuilder = formBuilder;
                    this.profile = this.profServ.profile;
                    this._updateFlag = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this.updateFlag = this._updateFlag.asObservable();
                    this._linkFlag = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this.linkFlag = this._linkFlag.asObservable();
                    this.updateInfoForm = this.formBuilder.group({
                        username: '',
                        email: '',
                        phone: '',
                        zipcode: '',
                        password: '',
                    });
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.profServ.loadProfile();
                    this._updateFlag.next(false);
                    this._linkFlag.next(false);
                };
                ProfileComponent.prototype.updateInfo = function (info) {
                    if (info.email.length > 0) {
                        this.profServ.updateEmail(info.email);
                        this._updateFlag.next(true);
                    }
                    if (info.zipcode.length > 0) {
                        this.profServ.updateZipcode(info.zipcode);
                        this._updateFlag.next(true);
                    }
                    if (info.password.length > 0) {
                        this.authServ.updatePwd(info.password);
                        this._updateFlag.next(true);
                    }
                };
                ProfileComponent.prototype.updateAvatar = function (file) {
                    this.profServ.updateAvatar(file);
                };
                ProfileComponent.prototype.linkAccount = function () {
                    this.authServ.linkAccount();
                    this._linkFlag.next(true);
                };
                ProfileComponent.prototype.unlinkAccount = function () {
                    this.authServ.unlinkAccount();
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
                { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/profile/profile.service.ts ***!
          \********************************************/
        /*! exports provided: ProfileService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function () { return ProfileService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile */ "./src/app/profile/profile.ts");
            var ProfileService = /** @class */ (function () {
                function ProfileService(http) {
                    this.http = http;
                    this.server = "https://yz157-ricebook.herokuapp.com";
                    this.userProfile = { profile: new _profile__WEBPACK_IMPORTED_MODULE_4__["Profile"]() };
                    this._profile = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _profile__WEBPACK_IMPORTED_MODULE_4__["Profile"]());
                    this.profile = this._profile.asObservable();
                }
                ProfileService.prototype.loadProfile = function () {
                    var _this = this;
                    this.http.get(this.server + '/headline', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.headline = res['headline'];
                    });
                    this.http.get(this.server + '/avatar', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.avatar = res['avatar'];
                    });
                    this.http.get(this.server + '/zipcode', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.zipcode = res['zipcode'];
                    });
                    this.http.get(this.server + '/dob', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.dob = res['dob'];
                    });
                    this.http.get(this.server + '/email', { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.email = res['email'];
                        _this.userProfile.profile.username = res['username'];
                    });
                    this._profile.next(Object.assign({}, this.userProfile).profile);
                };
                ProfileService.prototype.updateHeadline = function (headline) {
                    var _this = this;
                    this.http.put(this.server + '/headline', { headline: headline }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.headline = res['headline'];
                        _this._profile.next(Object.assign({}, _this.userProfile).profile);
                    });
                };
                ProfileService.prototype.updateEmail = function (email) {
                    var _this = this;
                    this.http.put(this.server + '/email', { email: email }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.email = res['email'];
                        _this._profile.next(Object.assign({}, _this.userProfile).profile);
                    });
                };
                ProfileService.prototype.updateZipcode = function (zipcode) {
                    var _this = this;
                    this.http.put(this.server + '/zipcode', { zipcode: zipcode }, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.zipcode = res['zipcode'];
                        _this._profile.next(Object.assign({}, _this.userProfile).profile);
                    });
                };
                ProfileService.prototype.updateAvatar = function (file) {
                    var _this = this;
                    var fd = new FormData();
                    fd.append('image', file);
                    this.http.put(this.server + '/avatar', fd, { withCredentials: true })
                        .subscribe(function (res) {
                        _this.userProfile.profile.avatar = res['avatar'];
                        _this._profile.next(Object.assign({}, _this.userProfile).profile);
                    });
                };
                return ProfileService;
            }());
            ProfileService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProfileService);
            /***/ 
        }),
        /***/ "./src/app/profile/profile.ts": 
        /*!************************************!*\
          !*** ./src/app/profile/profile.ts ***!
          \************************************/
        /*! exports provided: Profile */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function () { return Profile; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Profile = /** @class */ (function () {
                function Profile() {
                }
                return Profile;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/joeyhaohao/Work/Rice/COMP531/final-frontend-joeyhaohao/src/main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map