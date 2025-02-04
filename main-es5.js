(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/lcpereira.github.io/lcpereira.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "171z":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/ngx-change-language/ngx-change-language.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: NgxchangeLanguageComponent */

    /***/
    function z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxchangeLanguageComponent", function () {
        return NgxchangeLanguageComponent;
      });
      /* harmony import */


      var _shared_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/enums/language.enum */
      "36q4");
      /* harmony import */


      var _shared_enums_local_storage_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/enums/local-storage-settings */
      "QDc2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "DRYZ");

      var NgxchangeLanguageComponent = /*#__PURE__*/function () {
        function NgxchangeLanguageComponent(translocoService, localStorageService) {
          _classCallCheck(this, NgxchangeLanguageComponent);

          this.translocoService = translocoService;
          this.localStorageService = localStorageService;
          this.language = _shared_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__["Language"].en;
        }

        _createClass(NgxchangeLanguageComponent, [{
          key: "isEnglish",
          get: function get() {
            return this.language === _shared_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__["Language"].en;
          }
        }, {
          key: "localStorageLanguage",
          set: function set(language) {
            this.localStorageService.setItem(_shared_enums_local_storage_settings__WEBPACK_IMPORTED_MODULE_1__["LocalStorageSettings"].language, language);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var hasLanguage = this.localStorageService.getLanguage(_shared_enums_local_storage_settings__WEBPACK_IMPORTED_MODULE_1__["LocalStorageSettings"].language);

            if (hasLanguage) {
              this.language = hasLanguage;
            }

            this.onChangeLanguage(this.language);
          }
        }, {
          key: "onToggleLanguage",
          value: function onToggleLanguage() {
            var language = this.isEnglish ? _shared_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__["Language"].ptBR : _shared_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__["Language"].en;
            this.onChangeLanguage(language);
          }
        }, {
          key: "onChangeLanguage",
          value: function onChangeLanguage(language) {
            this.language = language;
            this.localStorageLanguage = this.language;
            this.translocoService.setActiveLang(this.language);
          }
        }]);

        return NgxchangeLanguageComponent;
      }();

      NgxchangeLanguageComponent.ɵfac = function NgxchangeLanguageComponent_Factory(t) {
        return new (t || NgxchangeLanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__["TranslocoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]));
      };

      NgxchangeLanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NgxchangeLanguageComponent,
        selectors: [["ngx-change-language"]],
        decls: 3,
        vars: 1,
        consts: [[1, "cursor-pointer", 3, "click"], [1, "mdi", "uppercase", "text-sm", "font-bold", "text-gray-600", "hover:text-purple-500"]],
        template: function NgxchangeLanguageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxchangeLanguageComponent_Template_div_click_0_listener() {
              return ctx.onToggleLanguage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.language);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtY2hhbmdlLWxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "36q4":
    /*!***********************************************!*\
      !*** ./src/app/shared/enums/language.enum.ts ***!
      \***********************************************/

    /*! exports provided: Language */

    /***/
    function q4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Language", function () {
        return Language;
      });

      var Language;

      (function (Language) {
        Language["en"] = "en";
        Language["ptBR"] = "pt-br";
      })(Language || (Language = {}));
      /***/

    },

    /***/
    "AcCw":
    /*!*************************************************************************************!*\
      !*** ./src/app/shared/components/ngx-change-language/ngx-change-language.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: NgxchangeLanguageModule */

    /***/
    function AcCw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxchangeLanguageModule", function () {
        return NgxchangeLanguageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_change_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngx-change-language.component */
      "171z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NgxchangeLanguageModule = function NgxchangeLanguageModule() {
        _classCallCheck(this, NgxchangeLanguageModule);
      };

      NgxchangeLanguageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NgxchangeLanguageModule
      });
      NgxchangeLanguageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NgxchangeLanguageModule_Factory(t) {
          return new (t || NgxchangeLanguageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxchangeLanguageModule, {
          declarations: [_ngx_change_language_component__WEBPACK_IMPORTED_MODULE_1__["NgxchangeLanguageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_ngx_change_language_component__WEBPACK_IMPORTED_MODULE_1__["NgxchangeLanguageComponent"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    },

    /***/
    "DRYZ":
    /*!***************************************************!*\
      !*** ./src/app/services/local-storage.service.ts ***!
      \***************************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function DRYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService() {
          _classCallCheck(this, LocalStorageService);
        }

        _createClass(LocalStorageService, [{
          key: "setItem",
          value: function setItem(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
          }
        }, {
          key: "getTheme",
          value: function getTheme(key) {
            var hasTheme = localStorage.getItem(key);

            if (!hasTheme) {
              return null;
            }

            return JSON.parse(hasTheme);
          }
        }, {
          key: "getLanguage",
          value: function getLanguage(key) {
            var hasLanguage = localStorage.getItem(key);

            if (!hasLanguage) {
              return null;
            }

            return JSON.parse(hasLanguage);
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || LocalStorageService)();
      };

      LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalStorageService,
        factory: LocalStorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "GDxp":
    /*!********************************************!*\
      !*** ./src/app/shared/enums/theme.enum.ts ***!
      \********************************************/

    /*! exports provided: Theme */

    /***/
    function GDxp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Theme", function () {
        return Theme;
      });

      var Theme;

      (function (Theme) {
        Theme["light"] = "light";
        Theme["dark"] = "dark";
      })(Theme || (Theme = {}));
      /***/

    },

    /***/
    "QDc2":
    /*!********************************************************!*\
      !*** ./src/app/shared/enums/local-storage-settings.ts ***!
      \********************************************************/

    /*! exports provided: LocalStorageSettings */

    /***/
    function QDc2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageSettings", function () {
        return LocalStorageSettings;
      });

      var LocalStorageSettings;

      (function (LocalStorageSettings) {
        LocalStorageSettings["theme"] = "theme";
        LocalStorageSettings["language"] = "language";
      })(LocalStorageSettings || (LocalStorageSettings = {}));
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/about/about.component */
      "rVrE");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["ngx-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "h-screen", "overflow-auto", "bg-gray-200", "dark:bg-gray-800", "text-gray-700", "dark:text-white"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UoYK":
    /*!*********************************************!*\
      !*** ./src/app/pages/about/about.module.ts ***!
      \*********************************************/

    /*! exports provided: AboutModule */

    /***/
    function UoYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component */
      "rVrE");
      /* harmony import */


      var _shared_components_ngx_change_theme_ngx_change_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/components/ngx-change-theme/ngx-change-theme.module */
      "yFsd");
      /* harmony import */


      var _shared_components_ngx_change_language_ngx_change_language_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/components/ngx-change-language/ngx-change-language.module */
      "AcCw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutModule = function AboutModule() {
        _classCallCheck(this, AboutModule);
      };

      AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AboutModule
      });
      AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AboutModule_Factory(t) {
          return new (t || AboutModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"], _shared_components_ngx_change_theme_ngx_change_theme_module__WEBPACK_IMPORTED_MODULE_3__["NgxChangeThemeModule"], _shared_components_ngx_change_language_ngx_change_language_module__WEBPACK_IMPORTED_MODULE_4__["NgxchangeLanguageModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutModule, {
          declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoModule"], _shared_components_ngx_change_theme_ngx_change_theme_module__WEBPACK_IMPORTED_MODULE_3__["NgxChangeThemeModule"], _shared_components_ngx_change_language_ngx_change_language_module__WEBPACK_IMPORTED_MODULE_4__["NgxchangeLanguageModule"]],
          exports: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @pages/about/about.module */
      "UoYK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transloco/transloco-root.module */
      "b3Gb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_5__["TranslocoRootModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__["AboutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _transloco_transloco_root_module__WEBPACK_IMPORTED_MODULE_5__["TranslocoRootModule"]]
        });
      })();
      /***/

    },

    /***/
    "b3Gb":
    /*!****************************************************!*\
      !*** ./src/app/transloco/transloco-root.module.ts ***!
      \****************************************************/

    /*! exports provided: TranslocoHttpLoader, TranslocoRootModule */

    /***/
    function b3Gb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslocoHttpLoader", function () {
        return TranslocoHttpLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslocoRootModule", function () {
        return TranslocoRootModule;
      });
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TranslocoHttpLoader = /*#__PURE__*/function () {
        function TranslocoHttpLoader(http) {
          _classCallCheck(this, TranslocoHttpLoader);

          this.http = http;
        }

        _createClass(TranslocoHttpLoader, [{
          key: "getTranslation",
          value: function getTranslation(lang) {
            return this.http.get("/assets/i18n/".concat(lang, ".json"));
          }
        }]);

        return TranslocoHttpLoader;
      }();

      TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) {
        return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      TranslocoHttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: TranslocoHttpLoader,
        factory: TranslocoHttpLoader.ɵfac,
        providedIn: 'root'
      });

      var TranslocoRootModule = function TranslocoRootModule() {
        _classCallCheck(this, TranslocoRootModule);
      };

      TranslocoRootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: TranslocoRootModule
      });
      TranslocoRootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function TranslocoRootModule_Factory(t) {
          return new (t || TranslocoRootModule)();
        },
        providers: [{
          provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_CONFIG"],
          useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["translocoConfig"])({
            availableLangs: ['en', 'pt-br'],
            defaultLang: 'en',
            reRenderOnLangChange: true,
            prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production
          })
        }, {
          provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_LOADER"],
          useClass: TranslocoHttpLoader
        }],
        imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TranslocoRootModule, {
          exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]]
        });
      })();
      /***/

    },

    /***/
    "rVrE":
    /*!************************************************!*\
      !*** ./src/app/pages/about/about.component.ts ***!
      \************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function rVrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/transloco */
      "QPBi");
      /* harmony import */


      var _shared_components_ngx_change_language_ngx_change_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/components/ngx-change-language/ngx-change-language.component */
      "171z");
      /* harmony import */


      var _shared_components_ngx_change_theme_ngx_change_theme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/components/ngx-change-theme/ngx-change-theme.component */
      "y8dt");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(translocoService) {
          _classCallCheck(this, AboutComponent);

          this.translocoService = translocoService;
        }

        _createClass(AboutComponent, [{
          key: "language",
          get: function get() {
            return this.translocoService.getActiveLang();
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoService"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["ngx-about"]],
        decls: 36,
        vars: 7,
        consts: [[1, "about", "max-w-4xl", "flex", "items-center", "h-full", "flex-wrap", "mx-auto"], [1, "w-full", "rounded-lg", "mx-0", "bg-white", "dark:bg-gray-900"], [1, "px-4", "md:px-8", "pt-4", "pb-2", "flex", "flex-col", "justify-end", "items-end"], [1, "mr-0.5"], [1, "p-4", "pt-0", "md:p-10", "md:pt-0", "text-center"], [1, "image-profile", "block", "rounded-full", "shadow-xl", "mx-auto", "-mt-32", "h-48", "w-48", "bg-cover", "bg-center"], [1, "text-3xl", "font-bold", "pt-4"], [1, "text-lg", "font-medium", "text-gray-700", "dark:text-gray-300", "pt-2"], [1, "mx-auto", "w-4/5", "pt-3", "border-b-2", "border-purple-500", "opacity-25"], [1, "pt-4", "font-bold", "flex", "items-center", "justify-center"], [1, "mdi", "mdi-briefcase", "text-xl", "text-purple-500", "pr-2"], ["href", "https://ze.express/", "target", "_blank", 1, "link"], [1, "pt-2", "flex", "items-center", "justify-center"], [1, "mdi", "mdi-map-marker-radius", "text-xl", "text-purple-500", "pr-2"], [1, "pt-6", "text-sm", "text-left", 2, "white-space", "pre-line"], [1, "mt-6", "pb-16", "w-4/5", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], ["href", "https://github.com/lcpereira", "target", "_blank", 1, "link"], [1, "mdi", "mdi-github", "text-3xl", "text-gray-600", "hover:text-purple-500"], ["href", "https://linkedin.com/in/leandro9893", "target", "_blank", 1, "link"], [1, "mdi", "mdi-linkedin", "text-3xl", "text-gray-600", "hover:text-purple-500"], ["href", "mailto:lcpereira.dev@gmail.com", 1, "link"], [1, "mdi", "mdi-email", "text-3xl", "text-gray-600", "hover:text-purple-500"], ["href", "https://instagram.com/lcpereira.dev/", "target", "_blank", 1, "link"], [1, "mdi", "mdi-instagram", "text-3xl", "text-gray-600", "hover:text-purple-500"], ["target", "_blank", 1, "link", 3, "href"], [1, "mdi", "mdi-download", "text-3xl", "text-gray-600", "hover:text-purple-500"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-change-language", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-change-theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Leandro Carlos Pereira");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tech Lead | Fullstack Developer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Z\xE9 Express | Ambev");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "transloco");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "transloco");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 3, "location"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 5, "description"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/assets/cv/", ctx.language, "/Leandro_Carlos_Pereira.pdf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_shared_components_ngx_change_language_ngx_change_language_component__WEBPACK_IMPORTED_MODULE_2__["NgxchangeLanguageComponent"], _shared_components_ngx_change_theme_ngx_change_theme_component__WEBPACK_IMPORTED_MODULE_3__["NgxChangeThemeComponent"]],
        pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoPipe"]],
        styles: [".about[_ngcontent-%COMP%]   .image-profile[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/profile.jpeg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsNkNBQUE7QUFBSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gICYgLmltYWdlLXByb2ZpbGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wcm9maWxlLmpwZWcnKVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
      }, {
        path: '**',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-not-found-not-found-module */
          "pages-not-found-not-found-module").then(__webpack_require__.bind(null,
          /*! ./pages/not-found/not-found.module */
          "jSwP")).then(function (m) {
            return m.NotFoundModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "y8dt":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/ngx-change-theme/ngx-change-theme.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: NgxChangeThemeComponent */

    /***/
    function y8dt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxChangeThemeComponent", function () {
        return NgxChangeThemeComponent;
      });
      /* harmony import */


      var _shared_enums_local_storage_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/enums/local-storage-settings */
      "QDc2");
      /* harmony import */


      var _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/enums/theme.enum */
      "GDxp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "DRYZ");

      var NgxChangeThemeComponent = /*#__PURE__*/function () {
        function NgxChangeThemeComponent(renderer, localStorageService) {
          _classCallCheck(this, NgxChangeThemeComponent);

          this.renderer = renderer;
          this.localStorageService = localStorageService;
          this.theme = _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].light;
        }

        _createClass(NgxChangeThemeComponent, [{
          key: "isDark",
          get: function get() {
            return this.theme === _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].dark;
          }
        }, {
          key: "localStorageTheme",
          set: function set(theme) {
            this.localStorageService.setItem(_shared_enums_local_storage_settings__WEBPACK_IMPORTED_MODULE_0__["LocalStorageSettings"].theme, theme);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var hasTheme = this.localStorageService.getTheme(_shared_enums_local_storage_settings__WEBPACK_IMPORTED_MODULE_0__["LocalStorageSettings"].theme);

            if (hasTheme) {
              this.theme = hasTheme;
            }

            this.onChangeTheme(this.theme);
          }
        }, {
          key: "onToggleTheme",
          value: function onToggleTheme() {
            var theme = this.isDark ? _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].light : _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].dark;
            this.onChangeTheme(theme);
          }
        }, {
          key: "onChangeTheme",
          value: function onChangeTheme(theme) {
            this.theme = theme;
            this.localStorageTheme = this.theme;

            if (this.isDark) {
              this.renderer.addClass(document.body, _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].dark);
            } else {
              this.renderer.removeClass(document.body, _shared_enums_theme_enum__WEBPACK_IMPORTED_MODULE_1__["Theme"].dark);
            }
          }
        }]);

        return NgxChangeThemeComponent;
      }();

      NgxChangeThemeComponent.ɵfac = function NgxChangeThemeComponent_Factory(t) {
        return new (t || NgxChangeThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]));
      };

      NgxChangeThemeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NgxChangeThemeComponent,
        selectors: [["ngx-change-theme"]],
        decls: 2,
        vars: 2,
        consts: [[1, "cursor-pointer", 3, "click"], [1, "mdi", "text-2xl", "text-gray-600", "hover:text-purple-500"]],
        template: function NgxChangeThemeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NgxChangeThemeComponent_Template_div_click_0_listener() {
              return ctx.onToggleTheme();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.isDark ? "mdi-weather-sunny" : "mdi-weather-night");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtY2hhbmdlLXRoZW1lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "yFsd":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/components/ngx-change-theme/ngx-change-theme.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: NgxChangeThemeModule */

    /***/
    function yFsd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxChangeThemeModule", function () {
        return NgxChangeThemeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_change_theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngx-change-theme.component */
      "y8dt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NgxChangeThemeModule = function NgxChangeThemeModule() {
        _classCallCheck(this, NgxChangeThemeModule);
      };

      NgxChangeThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NgxChangeThemeModule
      });
      NgxChangeThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NgxChangeThemeModule_Factory(t) {
          return new (t || NgxChangeThemeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxChangeThemeModule, {
          declarations: [_ngx_change_theme_component__WEBPACK_IMPORTED_MODULE_1__["NgxChangeThemeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_ngx_change_theme_component__WEBPACK_IMPORTED_MODULE_1__["NgxChangeThemeComponent"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map