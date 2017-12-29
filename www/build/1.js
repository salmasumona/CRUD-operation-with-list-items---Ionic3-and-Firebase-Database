webpackJsonp([1],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemModule", function() { return EditItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_item__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditItemModule = (function () {
    function EditItemModule() {
    }
    EditItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItem */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_item__["a" /* EditItem */]),
            ],
        })
    ], EditItemModule);
    return EditItemModule;
}());

//# sourceMappingURL=edit-item.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_list_item_list_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItem = (function () {
    function EditItem(navCtrl, navParams, items, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.toast = toast;
    }
    EditItem.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    EditItem.prototype.updateItem = function (item) {
        var _this = this;
        if (item.name == '') {
            this.toast.show('Name is required');
            return false;
        }
        if (item.quantity == '') {
            this.toast.show('Quantity is required');
            return false;
        }
        if (item.price == '') {
            this.toast.show('Price is required');
            return false;
        }
        this.items.editItem(item).then(function () {
            _this.toast.show(item.name + " Updated");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditItem.prototype.removeItem = function (item) {
        var _this = this;
        this.items.removeItem(item).then(function () {
            _this.toast.show(item.name + " Deleted");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-item',template:/*ion-inline-start:"/Users/apple/Documents/ionic3/myapp/src/pages/edit-item/edit-item.html"*/`\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{item?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n		<ion-label>Name</ion-label>\n		<ion-input [(ngModel)]="item.name" placeholder="iPad Pro" ></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>Quantity</ion-label>\n		<ion-input [(ngModel)]="item.quantity" type="number" placeholder="1" ></ion-input>\n	</ion-item>\n	<ion-item>\n		<ion-label>Price</ion-label>\n		<ion-input [(ngModel)]="item.price" type="number" placeholder="700" ></ion-input>\n	</ion-item>\n\n	<button ion-button block (click)="updateItem(item)">Update</button>\n	<button ion-button block color="danger" (click)="removeItem(item)">Delete</button>\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/ionic3/myapp/src/pages/edit-item/edit-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_list_item_list_service__["a" /* ItemListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_item_list_item_list_service__["a" /* ItemListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]) === "function" && _d || Object])
    ], EditItem);
    return EditItem;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit-item.js.map

/***/ })

});
//# sourceMappingURL=1.js.map