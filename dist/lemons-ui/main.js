(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _my_controls_my_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-controls/my-controls.component */ "./src/app/my-controls/my-controls.component.ts");
/* harmony import */ var _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-events/my-events.component */ "./src/app/my-events/my-events.component.ts");
/* harmony import */ var _my_risks_my_risks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-risks/my-risks.component */ "./src/app/my-risks/my-risks.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");










var routes = [
    { path: 'LandingPage', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: '', redirectTo: '/LandingPage', pathMatch: 'full' },
    { path: 'MyControls', component: _my_controls_my_controls_component__WEBPACK_IMPORTED_MODULE_4__["MyControlsComponent"] },
    { path: 'MyEvents', component: _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_5__["MyEventsComponent"] },
    { path: 'MyRisks', component: _my_risks_my_risks_component__WEBPACK_IMPORTED_MODULE_6__["MyRisksComponent"] },
    { path: 'ContactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] },
    { path: 'Support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_8__["SupportComponent"] },
    { path: 'UnderConstruction', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_9__["UnderConstructionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lemons-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _my_controls_my_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-controls/my-controls.component */ "./src/app/my-controls/my-controls.component.ts");
/* harmony import */ var _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-events/my-events.component */ "./src/app/my-events/my-events.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _my_risks_my_risks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-risks/my-risks.component */ "./src/app/my-risks/my-risks.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                _my_controls_my_controls_component__WEBPACK_IMPORTED_MODULE_6__["MyControlsComponent"],
                _my_events_my_events_component__WEBPACK_IMPORTED_MODULE_7__["MyEventsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
                _my_risks_my_risks_component__WEBPACK_IMPORTED_MODULE_9__["MyRisksComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"],
                _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_11__["UnderConstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Carousel base class */\r\n.carousel {\r\n  margin-bottom: 4rem;\r\n}\r\n/* Since positioning the image, we need to help out the caption */\r\n.carousel-caption {\r\n  bottom: 3rem;\r\n  z-index: 10;\r\n}\r\n/* Declare heights because of positioning of img element */\r\n.carousel-item {\r\n  height: 32rem;\r\n  background-color: white;\r\n}\r\n.carousel-item > img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 32rem;\r\n}\r\n.element {\r\n  color:black;\r\n  text-shadow: 1px 1px 1px white;\r\n}\r\n.img {\r\n  width:100%;\r\n  height: auto; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtFQUNFLG9CQUFvQjtDQUNyQjtBQUNELGtFQUFrRTtBQUNsRTtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7QUFFRCwyREFBMkQ7QUFDM0Q7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmO0FBRUQ7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0NBQ2hDO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2Fyb3VzZWwgYmFzZSBjbGFzcyAqL1xyXG4uY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuLyogU2luY2UgcG9zaXRpb25pbmcgdGhlIGltYWdlLCB3ZSBuZWVkIHRvIGhlbHAgb3V0IHRoZSBjYXB0aW9uICovXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICBib3R0b206IDNyZW07XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDMycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzJyZW07XHJcbn1cclxuXHJcbi5lbGVtZW50IHtcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggd2hpdGU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvOyBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item rounded active\">\n        <img class=\"first-slide rounded\" src=\".\\assets\\images\\welcome-to-las-vegas.png\" alt=\"2019 Financial Risk Conference\">\n        <div class=\"container\">\n          <div class=\"carousel-caption text-left\">\n            <h1 class=\"element\">Join us in Las Vegas!</h1>\n            <h3 class=\"element\">The 2019 Financial Risk Conference will be heald March 20th, 2019 at the Luxor in Las Vegas Nevada</h3>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"UnderConstruction\" role=\"button\">Sign up today</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"carousel-item rounded\">\n        <img class=\"second-slide rounded\" src=\".\\assets\\images\\training.jpg\" alt=\"2019 Training Oppurtunities\">\n        <div class=\"container\">\n          <div class=\"carousel-caption\">\n            <h1 class=\"element\">New Training Courses and Certifications are Available!</h1>\n            <p class=\"element\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. </p>\n            <p><a class=\"btn btn-lg btn-primary\" href=\"UnderConstruction\" role=\"button\">Learn more</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<!-- Cards for my work -->\n<div class=\"container-fluid\">\n  <h1>My Work</h1>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">US Card Control</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">TS2 180-day Charge Off Monitoring</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Next Montoring: Jan 12</div>\n          <p class=\"card-text mb-auto\">Detective: Card resiliency performs daily 100% review to ensure complaince with URCCAM</p>\n          <a href=\"#\">Continue to control</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">US Card Control</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Electronic Payment Processing</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Next Montoring: Jan 19</div>\n          <p class=\"card-text mb-auto\">Detective: Card business risk office performs monthly review to ensure complaince with Regulation Z accross all online channels</p>\n          <a href=\"#\">Continue to control</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">US Card Control</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Under 21 Ability to Pay</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Next Montoring: Mar 3</div>\n          <p class=\"card-text mb-auto\">Detective: Quarterly monitoring to ensure ATP performed using only applicants income and assets per credit policy</p>\n          <a href=\"#\">Continue to control</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk Event</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">CBD Inaccurate Reporting</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Open: 67 Days</div>\n          <p class=\"card-text mb-auto\">27 accounts inaccurately reported high balance ammount to the credit bureaus</p>\n          <a href=\"UnderConstruction\">Continue to event</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk Event</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">CBD Inaccurate Reporting</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Open: 26 days</div>\n          <p class=\"card-text mb-auto\">File not properly sent to credit bureaus resulting in missing data</p>\n          <a href=\"UnderConstruction\">Continue to event</a>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Reliance on 3rd Party Developers</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Accept: Medium Risk</div>\n          <p class=\"card-text mb-auto\">We are unable to maintain out Tech infrastructure without 3rd party developers</p>\n          <a href=\"UnderConstruction\">Continue to risk</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Paper Inventory Stockout</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Accept: Low Risk</div>\n          <p class=\"card-text mb-auto\">Due to increased demand for paper stock, the suppliers inventory of paper is not sufficient to send monthly statements</p>\n          <a href=\"UnderConstruction\">Continue to risk</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/my-controls/my-controls.component.css":
/*!*******************************************************!*\
  !*** ./src/app/my-controls/my-controls.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWNvbnRyb2xzL215LWNvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-controls/my-controls.component.html":
/*!********************************************************!*\
  !*** ./src/app/my-controls/my-controls.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cards for My Controls -->\n<div class=\"container-fluid\">\n  <h1>My Controls</h1>\n  <div class=\"row\">\n\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">US Card Control</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"UnderConstruction\">TS2 180-day Charge Off Monitoring</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Next Montoring: Jan 12</div>\n          <p class=\"card-text mb-auto\">Detective: Card resiliency performs daily 100% review to ensure complaince with URCCAM</p>\n          <a href=\"#\">Continue to control</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">US Card Control</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"UnderConstruction\">Electronic Payment Processing</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Next Montoring: Jan 19</div>\n          <p class=\"card-text mb-auto\">Detective: Card business risk office performs monthly review to ensure complaince with Regulation Z accross all online channels</p>\n          <a href=\"#\">Continue to control</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">US Card Control</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"UnderConstruction\">Under 21 Ability to Pay</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Next Montoring: Mar 3</div>\n          <p class=\"card-text mb-auto\">Detective: Quarterly monitoring to ensure ATP performed using only applicants income and assets per credit policy</p>\n          <a href=\"#\">Continue to control</a>\n        </div>\n      </div>\n    </div>\n\n  <!-- row -->\n  </div>\n<!-- container -->\n</div>\n"

/***/ }),

/***/ "./src/app/my-controls/my-controls.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-controls/my-controls.component.ts ***!
  \******************************************************/
/*! exports provided: MyControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyControlsComponent", function() { return MyControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyControlsComponent = /** @class */ (function () {
    function MyControlsComponent() {
    }
    MyControlsComponent.prototype.ngOnInit = function () {
    };
    MyControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-controls',
            template: __webpack_require__(/*! ./my-controls.component.html */ "./src/app/my-controls/my-controls.component.html"),
            styles: [__webpack_require__(/*! ./my-controls.component.css */ "./src/app/my-controls/my-controls.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyControlsComponent);
    return MyControlsComponent;
}());



/***/ }),

/***/ "./src/app/my-events/my-events.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-events/my-events.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWV2ZW50cy9teS1ldmVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/my-events/my-events.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-events/my-events.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cards for My Events -->\n<div class=\"container-fluid\">\n  <h1>My Events</h1>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk Event</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"UnderConstruction\">CBD Inaccurate Reporting</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Open: 67 Days</div>\n          <p class=\"card-text mb-auto\">27 accounts inaccurately reported high balance ammount to the credit bureaus</p>\n          <a href=\"#\">Continue to event</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk Event</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"UnderConstruction\">CBD Inaccurate Reporting</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Open: 26 days</div>\n          <p class=\"card-text mb-auto\">File not properly sent to credit bureaus resulting in missing data</p>\n          <a href=\"#\">Continue to event</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-events/my-events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-events/my-events.component.ts ***!
  \**************************************************/
/*! exports provided: MyEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEventsComponent", function() { return MyEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyEventsComponent = /** @class */ (function () {
    function MyEventsComponent() {
    }
    MyEventsComponent.prototype.ngOnInit = function () {
    };
    MyEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-events',
            template: __webpack_require__(/*! ./my-events.component.html */ "./src/app/my-events/my-events.component.html"),
            styles: [__webpack_require__(/*! ./my-events.component.css */ "./src/app/my-events/my-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyEventsComponent);
    return MyEventsComponent;
}());



/***/ }),

/***/ "./src/app/my-risks/my-risks.component.css":
/*!*************************************************!*\
  !*** ./src/app/my-risks/my-risks.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXJpc2tzL215LXJpc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-risks/my-risks.component.html":
/*!**************************************************!*\
  !*** ./src/app/my-risks/my-risks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cards for My Risks -->\n<div class=\"container-fluid\">\n  <h1>My Events</h1>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Reliance on 3rd Party Developers</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Accept: Medium Risk</div>\n          <p class=\"card-text mb-auto\">We are unable to maintain out Tech infrastructure without 3rd party developers</p>\n          <a href=\"#\">Continue to risk</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card flex-md-row mb-4 shadow-sm h-md-250\">\n        <div class=\"card-body d-flex flex-column align-items-start\">\n          <strong class=\"d-inline-block mb-2 text-primary\">Card Risk</strong>\n          <h4 class=\"mb-0\">\n            <a class=\"text-dark\" href=\"#\">Paper Inventory Stockout</a>\n          </h4>\n          <div class=\"mb-1 text-muted\">Accept: Low Risk</div>\n          <p class=\"card-text mb-auto\">Due to increased demand for paper stock, the suppliers inventory of paper is not sufficient to send monthly statements</p>\n          <a href=\"#\">Continue to risk</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-risks/my-risks.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-risks/my-risks.component.ts ***!
  \************************************************/
/*! exports provided: MyRisksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRisksComponent", function() { return MyRisksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyRisksComponent = /** @class */ (function () {
    function MyRisksComponent() {
    }
    MyRisksComponent.prototype.ngOnInit = function () {
    };
    MyRisksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-risks',
            template: __webpack_require__(/*! ./my-risks.component.html */ "./src/app/my-risks/my-risks.component.html"),
            styles: [__webpack_require__(/*! ./my-risks.component.css */ "./src/app/my-risks/my-risks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyRisksComponent);
    return MyRisksComponent;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  support works!\n</p>\n"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/under-construction/under-construction.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuZGVyLWNvbnN0cnVjdGlvbi91bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/under-construction/under-construction.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<h1>Feature is under construction</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/under-construction/under-construction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.ts ***!
  \********************************************************************/
/*! exports provided: UnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function() { return UnderConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnderConstructionComponent = /** @class */ (function () {
    function UnderConstructionComponent() {
    }
    UnderConstructionComponent.prototype.ngOnInit = function () {
    };
    UnderConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-under-construction',
            template: __webpack_require__(/*! ./under-construction.component.html */ "./src/app/under-construction/under-construction.component.html"),
            styles: [__webpack_require__(/*! ./under-construction.component.css */ "./src/app/under-construction/under-construction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnderConstructionComponent);
    return UnderConstructionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\lemons-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map