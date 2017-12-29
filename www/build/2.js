webpackJsonp([2],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemModule", function() { return AddItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddItemModule = (function () {
    function AddItemModule() {
    }
    AddItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItem */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_item__["a" /* AddItem */]),
            ],
        })
    ], AddItemModule);
    return AddItemModule;
}());

//# sourceMappingURL=add-item.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_list_item_list_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddItem = (function () {
    function AddItem(navCtrl, navParams, items, toast, _formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.toast = toast;
        this._formBuilder = _formBuilder;
        this.item = {
            name: '',
            quantity: undefined,
            price: undefined
        };
        this.form = _formBuilder.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            'quantity': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            'price': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        this.name = this.form.controls['name'];
        this.quantity = this.form.controls['quantity'];
        this.price = this.form.controls['price'];
    }
    AddItem.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddItem');
    };
    AddItem.prototype.isValid = function (field) {
        var formField = this.form.find(field);
        return formField.valid || formField.pristine;
    };
    AddItem.prototype.addItem = function (item) {
        var _this = this;
        console.log('item-----', item);
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
        this.items.addItem(item).then(function (ref) {
            _this.toast.show(item.name + " added");
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"/Users/apple/Documents/ionic3/myapp/src/pages/add-item/add-item.html"*/`\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>AddItem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="form" (ngSubmit)="addItem(form.value)">\n		<ion-item>\n			<ion-label>Name</ion-label>\n			<ion-input formControlName="name" placeholder="iPhone X"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label>Quantity</ion-label>\n			<ion-input formControlName="quantity" type="number" placeholder="1"></ion-input>\n		</ion-item>\n		 \n		<ion-item>\n			<ion-label>Price</ion-label>\n			<ion-input formControlName="price" type="number" placeholder="999"></ion-input>\n		</ion-item>\n\n		<button ion-button block type="submit" [disabled]="!form.valid">Add</button>\n	</form>	\n\n</ion-content>\n`/*ion-inline-end:"/Users/apple/Documents/ionic3/myapp/src/pages/add-item/add-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_item_list_item_list_service__["a" /* ItemListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_item_list_item_list_service__["a" /* ItemListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], AddItem);
    return AddItem;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=add-item.js.map

/***/ })

});
//# sourceMappingURL=2.js.map