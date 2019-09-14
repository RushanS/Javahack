(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<tmmed-navigation></tmmed-navigation>\r\n\t<div class=\"grid\">\r\n        <tmmed-header></tmmed-header>\r\n        <div style=\"height: calc(100vh - 70px); overflow-y: scroll; overflow-x: hidden; margin: 0px -24px; padding: 8px;\">\r\n\t\t    \t\t<router-outlet></router-outlet>\r\n        </div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/filters/filters.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/filters/filters.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters\">\n    <button type=\"button\" class=\"btn btn-icon btn-secondary\"\n                          id=\"filters-btn\" \n                          (click)=\"showFilter = !showFilter; \n                                   newFilter.value = ''; \n                                   showErrorEmpty = false;\">\n\t\t<i class=\"icon icon-search\"></i>\n\t</button>\n\t<div class=\"chips-group\" [ngClass]=\"{visible:showFilter}\">\n\t\t<div class=\"chips\" *ngFor=\"let filter of filters;\">\n\t\t\t<span>{{filter.title}}</span>\n\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t  (click)=\"removeFilter(filter.serialNumber)\">\n\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\" [ngClass]=\"{visible:!showFilter}\">\n\t\t<input type=\"text\" class=\"form-field\" #newFilter>\n\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" (click)=\"addNewFilter(newFilter.value); newFilter.value = ''; \">\n\t\t\t<i class=\"icon icon-add\"></i>\n\t\t</button>\n\t\t<button type=\"submit\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t  (click)=\"createNewFilter(newFilter.value)\">Фильтровать</button>\n\t</div>\n</div>\n<div class=\"row warning\" *ngIf=\"showErrorEmpty\" style=\"padding: 0px 0px 0px 30px;\">\n\t<h5>Пустой поиск</h5>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row additional-header\">\n    <div class=\"col-1\">\n\t\t<button class=\"btn btn-icon btn-secondary\" (click)=\"backClicked();\" title=\"Назад\">\n\t\t\t<i class=\"icon icon-back\"></i>\n\t\t</button>\n\t\t<div class=\"row\">\n\t\t\t<button title=\"Поиск\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t  *ngIf=\"false\"\n\t\t\t\t\t\t\t\t  id=\"search-btn\"\n\t\t\t\t\t\t\t\t  (click)=\"showSearch = !showSearch; search.value = ''\">\n\t\t\t\t<i class=\"icon icon-search\"></i>\n\t\t\t</button>\n            <div *ngIf=\"showSearch\">\n                <div class=\"form-group\">\n                    <input #search type=\"search\" id=\"search\" class=\"form-field search-field\" placeholder=\"Поиск\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\t\t\t  (click)=\"showSearch = false; search.value = ''\">Искать</button>\n                </div>\n            </div>\n\t\t</div>\n    </div>\n    <div class=\"col-7\">\n        <ul *ngIf=\"showExtraMenu\">\n            <li [ngClass]=\"{active:activeCompany, disabled:!activeCompany}\" [routerLink]=\"activeCompany ? [urlForCompany] : []\">\n                <a title=\"Компании\">Компании</a>\n            </li>\n            <li [ngClass]=\"{active:activeProduct, disabled:!activeProduct}\" [routerLink]=\"activeProduct ? [urlForProduct] : []\">\n                <a title=\"Продукты\" >Продукты</a>\n            </li>\n            <li [ngClass]=\"{active:activeProgram, disabled:!activeProgram}\" [routerLink]=\"activeProgram ? [urlForProgram] : []\">\n                <a title=\"Программы\">Программы</a>  \n            </li> \n            <li [ngClass]=\"{active:activeCoverage, disabled:!activeCoverage}\" [routerLink]=\"activeCoverage ? [urlForCoverage] : []\">\n                <a title=\"Покрытия\">Покрытия</a>\n            </li>\n            <li [ngClass]=\"{active:activeSettings, disabled:!activeSettings}\">\n                <a title=\"Лимиты\">Настройки</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"col-1\"> </div>\n    <div class=\"col-3\">\n        <div class=\"account\">\n            <div class=\"account-name\">\n                <p>Белугин К.И.</p>\n                <span>Администратор</span>\n            </div>\n\t\t\t<a class=\"btn btn-icon btn-secondary\" title=\"Выход из системы\" \n\t\t\t\t\t\t\t\t\t\t\t\t  data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t\t\t  data-target=\"#exit-modal\">\n\t\t\t\t<i class=\"icon icon-exit\"></i>\n\t\t\t</a>\n        </div>\n\t</div>\n</div>\n<div class=\"modal fade\" id=\"exit-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Выход из системы</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tВы действительно хотите выйти из системы?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Отмена</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Выйти</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/navigation/navigation.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/navigation/navigation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"brand\" [routerLink]=\"['/']\"></div>\n    <ul class=\"menu height-indicator\">\n\t\t<li routerLinkActive=\"active\">\n\t\t\t<a [routerLink]=\"['/users']\" title=\"Застрахованные\">\n                <i class=\"icon icon-account\"></i>\n            </a>\n\t\t</li>\n        <li routerLinkActive=\"active\" *ngIf=\"company == '/companies'\">\n            <a [routerLink]=\"['/companies']\" title=\"Настройки\">\n                <i class=\"icon icon-settings\"></i>\n            </a>\n        </li>\n        <li routerLinkActive=\"active\" *ngIf=\"company != '/companies'\">\n            <a [routerLink]=\"['/notfound']\" title=\"Настройки\">\n                <i class=\"icon icon-settings\"></i>\n            </a>\n        </li>\n        <!-- <li routerLinkActive=\"active\">\n\t\t\t<a [routerLink]=\"['/products']\" title=\"Продукты\">\n                <i class=\"icon icon-profiles\"></i>\n            </a>\n        </li> -->\n        <!-- <li routerLinkActive=\"active\">\n\t\t\t<a [routerLink]=\"['/programs']\" title=\"Программы\">\n                <i class=\"icon icon-tasks\"></i>\n            </a>\n        </li> -->\n        <!-- <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/companies']\" title=\"Страховые компании\">\n                <i class=\"icon icon-company\"></i>\n            </a>\n\t\t</li> -->\n        <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/losses']\" title=\"Убытки\">\n                <i class=\"icon icon-inventorisation\"></i>\n            </a>\n        </li>\n        <!-- <li routerLinkActive=\"active\">\n            <a [routerLink]=\"['/medicalCard']\" title=\"Медицинская карта\">\n                <i class=\"icon icon-reports\"></i>\n            </a>\n        </li> -->\n    </ul>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/not-found/not-found.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/not-found/not-found.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<h2  style=\"margin-top: 100px; margin-left: 100px;\">Страница не найдена</h2>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/start-page/start-page.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/start-page/start-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-3\"></div>\n\t<div class=\"col-2\">\n\t\t<div class=\"card users\" [routerLink]=\"['/users']\" title=\"Застрахованные\">\n\t\t</div>\n\t</div>\n\t<div class=\"col-2\" *ngIf=\"company == '/companies'\">\n\t\t<div class=\"card coverage\" [routerLink]=\"['/companies']\"  title=\"Настройки\"></div>\n\t</div>\n\t<div class=\"col-2\" *ngIf=\"company != '/companies'\">\n\t\t<div class=\"card coverage\" [routerLink]=\"['/notfound']\"  title=\"Настройки\"></div>\n    </div>\n\t<div class=\"col-2\">\n\t\t<div class=\"card damages\" [routerLink]=\"['/losses']\" title=\"Убытки\"></div>\n\t</div>\n\t<div class=\"col-3\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-id/company-id.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-id/company-id.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h2>{{currentCompany.companyName}}</h2>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-8\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <h4 class=\"titleForInfo\">Описание</h4>\n            </div>\n            <div class=\"col-3\" style=\"margin-top: -5px;\">\n                <a class=\"btn btn-change\" target=\"_blank\"\n                                          rel=\"noopener noreferrer\"\n                                          href=\"http:/users/company/{{currentCompany.id}}\"\n                                          *ngIf=\"!newCompany\">\n                    <h4>Список застрахованных</h4>\n                </a>\n            </div>\n            <div class=\"col-3\" style=\"margin-top: -5px;\">\n                <button class=\"btn btn-save\" (click)=\"readonly = !readonly; changeCompany();\" *ngIf=\"!readonly\">\n                    <h4>Сохранить</h4>\n                </button>\n                <button class=\"btn btn-change\" (click)=\"readonly = !readonly\" *ngIf=\"readonly\">\n                    <h4>редактировать</h4>\n                </button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: readonly,\n                                                         colorForActive: !readonly }\">\n                    <input matInput placeholder=\"Полное наименование\"\n                                    [(ngModel)]=\"currentCompany.companyName\"\n                                    [readonly]=\"readonly\"\n                                    [ngClass]=\"{empty: currentCompany.companyName == null && readonly == false}\">\n                    <mat-hint align=\"start\">*Обязательное поле</mat-hint>\t\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: readonly,\n                                                         colorForActive: !readonly }\">\n                    <input matInput placeholder=\"Краткое наименование\"\n                                    [(ngModel)]=\"currentCompany.briefName\"\n                                    [readonly]=\"readonly\">\t\t\t\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: readonly,\n                                                         colorForActive: !readonly }\">\n                    <input matInput placeholder=\"ИНН\"\n                                    [(ngModel)]=\"currentCompany.inn\"\n                                    [readonly]=\"readonly\"\n                                    [ngClass]=\"{empty: currentCompany.inn == null && readonly == false}\">\n                    <mat-hint align=\"start\">*Обязательное поле</mat-hint>\t\t\t\t\t\t\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\" style=\"margin-top: 15px;\">\n            <div class=\"col-9\">\n                <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: readonly,\n                                                         colorForActive: !readonly }\">\n                    <input matInput placeholder=\"Юридический адрес\"\n                                    [(ngModel)]=\"currentCompany.address\"\n                                    [readonly]=\"readonly\"\n                                    [ngClass]=\"{empty: currentCompany.address == null && readonly == false}\">\n                    <mat-hint align=\"start\">*Обязательное поле</mat-hint>\t\t\t\t\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: readonly,\n                                                         colorForActive: !readonly }\">\n                    <input matInput placeholder=\"Максимальная оплата\"\n                                    [(ngModel)]=\"currentCompany.maxOncePayment\"\n\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n                                    [readonly]=\"readonly\">\n                        <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\t\t\t\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <h4 class=\"titleForInfo\">Платежные реквизиты</h4>\n            </div>\n            <div class=\"col-3\" style=\"float: left\">\n                <button class=\"addNewBtn colorForDisabled\"\n                        title=\"Добавить платежные реквизиты\"\n                        style=\"margin: auto; padding: 20px 0px 0px 0px\"\n                        (click)=\"addNewPayment(); setShowButtons(false);\"\n                        *ngIf=\"showAddPayment\">\n                    <i class=\"icon icon-add\"></i>\n                </button>\n            </div>\n        </div>\n        <div style=\"max-height: calc(100vh - 396px); overflow-y: auto; overflow-x: hidden;padding-bottom: 20px;\">\n            <div *ngFor=\"let payment of currentCompany.paymentDetails; index as i\" style=\"padding-right: 5px; margin-bottom: 10px;\">\n                <div class=\"colorForNotMain\">    \n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: payment.readonly,\n                                                                    colorForActive: !payment.readonly }\">\n                                <input matInput placeholder=\"Номер расчетного счета\"\n                                                [(ngModel)]=\"payment.bankAccount\"\n                                                [readonly]=\"payment.readonly\">\t\t\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-3\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: payment.readonly,\n                                                                    colorForActive: !payment.readonly }\">\n                                <input matInput placeholder=\"Наименование банка\"\n                                                [(ngModel)]=\"payment.bankName\"\n                                                [readonly]=\"payment.readonly\">\t\t\t\t\t\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-3\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: payment.readonly,\n                                                                    colorForActive: !payment.readonly }\">\n                                <input matInput placeholder=\"БИК\"\n                                                [(ngModel)]=\"payment.bik\"\n                                                [readonly]=\"payment.readonly\">\t\t\t\t\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-9\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: payment.readonly,\n                                                                    colorForActive: !payment.readonly }\">\n                                <input matInput placeholder=\"Адрес\"\n                                                [(ngModel)]=\"payment.address\"\n                                                [readonly]=\"payment.readonly\">\t\t\t\t\t\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-3\">\n                            <div class=\"row\">\n                                <div class=\"col-6\" style=\"padding: 10px 0px 0px 0px\">\n                                    <button type=\"button\" \n                                            class=\"btn btn-icon btn-secondary\" \n                                            title=\"Редактировать платежные реквизиты\"\n                                            style=\"display: inline; padding: 0px;\"\n                                            (click)=\"payment.readonly = !payment.readonly; payment.delete = false; setShowButtons(false);\"\n                                            *ngIf=\"payment.readonly\">\n                                        <i class=\"icon icon-settings\"></i>\n                                    </button>\n                                    <button type=\"button\" \n                                            class=\"btn btn-icon btn-secondary\" \n                                            title=\"Сохранить изменения\"\n                                            style=\"display: inline; padding: 0px;\"\n                                            (click)=\"sendPayment(payment); payment.readonly = !payment.readonly; payment.delete = false;\"\n                                            *ngIf=\"!payment.readonly\">\n                                        <i class=\"icon icon-done\"></i>\n                                    </button>\n                                    <button type=\"button\" \n                                            class=\"btn btn-icon btn-secondary color-delete\" \n                                            title=\"Удалить платежные реквизиты\"\n                                            (click)=\"payment.delete = !payment.delete; payment.readonly = true; setShowButtons(false);\"\n                                            style=\"display: inline; padding: 0px;\">\n                                        <i class=\"icon icon-delete\"></i>\n                                    </button>\n                                </div>\n                                <div class=\"col-6\" style=\"padding: 0px;\">\n                                    <button type=\"button\" \n                                            class=\"btn-delete\"\n                                            style=\"margin-top: -20px; margin-left: -30px;\"\n                                            title=\"Удалить\"\n                                            (click)=\"deletePayment(payment);\"\n                                            *ngIf=\"payment.delete\">\n                                        <b>Удалить выбранные реквизиты</b>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-4\"> \n        <div class=\"row\">\n            <div class=\"col-5\">\n                <h4 class=\"titleForInfo\">Контактное лицо</h4>\n            </div>\n            <div class=\"col-2\" style=\"float: left;\">\n                <button class=\"addNewBtn colorForDisabled\"\n                        title=\"Добавить контактное лицо\"\n                        style=\"margin: auto; padding: 20px 0px 0px 0px\"\n                        (click)=\"addNewContact(); setShowButtons(false);\"\n                        *ngIf=\"showAddContact\">\n                    <i class=\"icon icon-add\"></i>\n                </button>\n            </div>\n        </div>\n        <div style=\"max-height: calc(100vh - 210px); overflow-y: auto; overflow-x: hidden; padding-bottom: 20px;\">\n            <div *ngFor=\"let contact of currentCompany.contactPersons; index as i\"  style=\"padding-right: 5px; padding-bottom: 10px;\">\n                <div [ngClass]=\"{ colorForMain: contact.main,  colorForNotMain: !contact.main}\">\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Фамилия\"\n                                                [(ngModel)]=\"contact.lastName\"\n                                                [readonly]=\"contact.readonly\">\n                            </mat-form-field>\n                        </div><div class=\"col-6\" [ngClass]=\"{ paddingTopForDis: readonly,\n                                                        paddingTopForAct: !readonly }\">\n                            <button type=\"button\" \n                                    class=\"btn btn-icon btn-secondary\" \n                                    title=\"Редактировать информацию\"\n                                    style=\"display: inline; padding: 0px;\"\n                                    (click)=\"contact.readonly = !contact.readonly; contact.delete = false; setShowButtons(false);\"\n                                    *ngIf=\"contact.readonly\">\n                                <i class=\"icon icon-settings\"></i>\n                            </button>\n                            <button type=\"button\" \n                                    class=\"btn btn-icon btn-secondary\" \n                                    title=\"Сохранить изменения\"\n                                    style=\"display: inline; padding: 0px;\"\n                                    (click)=\"sendContact(contact); contact.readonly = !contact.readonly; contact.delete = false; sortContacts();\"\n                                    *ngIf=\"!contact.readonly\">\n                                <i class=\"icon icon-done\"></i>\n                            </button>\n                            <button type=\"button\" \n                                    class=\"btn btn-icon btn-secondary color-delete\" \n                                    title=\"Удалить контактное лицо\"\n                                    (click)=\"contact.delete = !contact.delete; contact.readonly = true; setShowButtons(false);\"\n                                    style=\"display: inline; padding: 0px;\">\n                                <i class=\"icon icon-delete\"></i>\n                            </button>\n                            <button type=\"button\" \n                                    class=\"btn btn-icon btn-secondary\" \n                                    title=\"Основное контактное лицо\"\n                                    style=\"display: inline; padding: 0px;\"\n                                    *ngIf=\"contact.main\">\n                                <i class=\"icon icon-account\"></i>\n                            </button>\n                            <mat-radio-button value=\"i\" *ngIf=\"!readonly\"\n                                            [checked]=\"contact.main\"\n                                            (click)=\"changeMainContact(contact);\"\n                                            style=\"display: inline; padding-left: 5px;\">\n                                <span>Приоритет</span>\n                            </mat-radio-button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Имя\"\n                                                [(ngModel)]=\"contact.firstName\"\n                                                [readonly]=\"contact.readonly\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Отчество\"\n                                                [(ngModel)]=\"contact.middleName\"\n                                                [readonly]=\"contact.readonly\">\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Тип лица\"\n                                                [(ngModel)]=\"contact.workType\"\n                                                [readonly]=\"contact.readonly\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Почта\"\n                                                [(ngModel)]=\"contact.email\"\n                                                (click)=\"contact.readonly ? 0 : $event.target.select()\"\n                                                [readonly]=\"contact.readonly\">\t\t\t\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Телефон рабочий\"\n                                                [(ngModel)]=\"contact.phone1\"\n                                                (click)=\"contact.readonly ? 0 : $event.target.select()\"\n                                                [readonly]=\"contact.readonly\">\t\t\t\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Телефон мобильный\"\n                                                [(ngModel)]=\"contact.phone2\"\n                                                (click)=\"contact.readonly ? 0 : $event.target.select()\"\n                                                [readonly]=\"contact.readonly\">\t\t\t\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <mat-form-field class=\"max\" [ngClass]=\"{ colorForDisabled: contact.readonly,\n                                                                    colorForActive: !contact.readonly }\">\n                                <input matInput placeholder=\"Телефон запасной\"\n                                                [(ngModel)]=\"contact.phone3\"\n                                                (click)=\"contact.readonly ? 0 : $event.target.select()\"\n                                                [readonly]=\"contact.readonly\">\t\t\t\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-6\">\n                            <button type=\"button\" \n                                class=\"btn-delete\" \n                                title=\"Удалить\"\n                                (click)=\"deleteContact(contact);\"\n                                style=\"margin-top: -10px; width: 100%\"\n                                *ngIf=\"contact.delete\">\n                                <b>Удалить выбранный контакт</b>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company/company-list/company-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company/company-list/company-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n    <div class=\"col-8\">\n        <h2>Компании</h2>\n\t\t<span class=\"subheader\">{{amountOfCompanies}} {{typeOfLength}}</span>\n\t</div>\n    <div class=\"col-3\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownMenuLink\" ngbDropdownToggle>\n                Действия\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n\t\t\t\t<a class=\"dropdown-item\" ngbDropdownItem  [routerLink]=\"['./new']\">Добавить</a>\n                <a class=\"dropdown-item\" ngbDropdownItem>Загрузить список</a>\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" style=\"color: #fe4902;\"\n                                         ngbDropdownItem\n\t\t\t\t\t\t\t\t\t\t data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t data-target=\"#delete-modal\">Удалить</a>\n            </div>\n        </div>\n    </div>\n</div>\n<tmmed-filters (onChanged)=\"setFilters($event)\">\n</tmmed-filters>\n<div class=\"col-12\">\n    <div class=\"table\">\n        <div class=\"thead\">\n            <div class=\"row\">\n                <div class=\"col-1\" style=\"margin: auto;\">\n                    <input type=\"checkbox\" class=\"checkbox\" id=\"checkAll\" (click)=\"changeSelection();\">\n                    <label for=\"checkAll\" style=\"float: right\"></label>\n                </div>\n                <div class=\"col-3\" style=\"float: left; margin: auto;\">\n                    <span>Наименование</span>\n                </div>\n                <div class=\"col-3\">\n                    <span>Юридический адрес</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Контактное лицо</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Тип контактного лица</span>\n                </div>\n                <div class=\"col-1\"> </div>\n            </div>\n        </div>\n        <div class=\"tbody\">\n            <div *ngFor=\"let company of companiesList;\">\n                <a [ngClass]=\"{row:true, selected:company.selected}\">\n                    <div class=\"col-1 spanForTable\">\n                        <input type=\"checkbox\" \n                            class=\"checkbox\" \n                            id=\"{{company.id}}\" \n                            [checked]=\"company.selected\" \n                            (change)=\"company.selected = !company.selected;\"\n                            >\n                        <label for=\"{{company.id}}\" style=\"float: right\"></label>\n                    </div>\n                    <div class=\"col-3 spanForTable\" [routerLink]=\"['./', company.id, 'products']\">\n                        <span>{{company.briefName || company.companyName}}</span>\n                    </div>\n                    <div class=\"col-3 spanForTable\" [routerLink]=\"['./', company.id, 'products']\">\n                        <span>{{company.address || 'Отсутсвует'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', company.id, 'products']\">\n                        <span>{{company.contactName || 'Отсутсвует'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', company.id, 'products']\">\n                        <span>{{company.contactType || 'Отсутсвует'}}</span>\n                    </div>\n                    <div class=\"col-1 spanForTable\">\n                        <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t\t      title=\"Информация о компании\"\n                                              [routerLink]=\"['./', company.id]\">\n                            <i class=\"icon icon-inventorisation\"></i>\n                        </button>\n                    </div>\n                </a>\n            </div>\t\t\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Удаление</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\" >\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tУдалить выбранные компании?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-change\"\n                                      data-dismiss=\"modal\"\n                                      style=\"margin-top: 0px;\">Отмена</button>\n                <button type=\"button\" class=\"btn btn-save\"\n                                      data-dismiss=\"modal\"\n                                      (click)=\"deleteCompany();\"\n                                      style=\"margin-top: 0px;\">Удалить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-2\">\n        <mat-form-field class=\"max\">\n            <mat-select [(ngModel)]=\"med.medicamentGroupId\"\n                        [ngClass]=\"{ colorForActive: true }\">\n                <mat-option *ngFor=\"let groups of medicamentGroups\" [value]=\"groups.id\">\n                    {{groups.name}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.onceFranchise.procent\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;%</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.onceLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.monthLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.yearLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3 text-center\" style=\"margin: auto\">\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-done\" \n                                      title=\"Сохранить\"\n                                      style=\"display: inline\"\n                                      (click)=\"addNewMed()\">\n                    <i class=\"icon icon-done\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                      title=\"Удалить\"\n                                      style=\"display: inline;\"\n                                      (click)=\"deleteNewMed()\">\n                    <i class=\"icon icon-delete\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-med/coverage-list-med.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coverage/coverage-list-med/coverage-list-med.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-2\">\n        <mat-form-field class=\"max\">\n            <mat-select [(ngModel)]=\"med.medicamentGroupId\"\n                        [disabled]=\"isReadonly\"\n                        [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                <mat-option *ngFor=\"let groups of medicamentGroups\" [value]=\"groups.id\">{{groups.name}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.onceFranchise.procent\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;%</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.onceLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.monthLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"med.yearLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3 text-center\" style=\"margin: auto\">\n                <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n                                    title=\"Редактировать\"\n                                    style=\"display: inline\"\n                                    (click)=\"isReadonly = false\"\n                                    *ngIf=\"isReadonly\">\n                    <i class=\"icon icon-inventorisation\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-done\" \n                                      title=\"Сохранить\"\n                                      style=\"display: inline\"\n                                      (click)=\"changeMed()\"\n                                      *ngIf=\"!isReadonly\">\n                    <i class=\"icon icon-done\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                      title=\"Удалить\"\n                                      (click)=\"deleteMed()\"\n                                      style=\"display: inline;\">\n                    <i class=\"icon icon-delete\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-2\">\n        <mat-form-field class=\"max\">\n            <mat-select [(ngModel)]=\"service.procedureGroupId\"\n                        [ngClass]=\"{ colorForActive: true }\">\n                <mat-option *ngFor=\"let groups of procedureGroups\" [value]=\"groups.id\">\n                    {{groups.name}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"service.onceFranchise.procent\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;%</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"service.onceLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"service.monthLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"service.yearLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [ngClass]=\"{ colorForActive: true }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3 text-center\" style=\"margin: auto\">\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-done\" \n                                      title=\"Сохранить\"\n                                      style=\"display: inline\"\n                                      (click)=\"addNewService()\">\n                    <i class=\"icon icon-done\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                      title=\"Удалить\"\n                                      style=\"display: inline;\"\n                                      (click)=\"deleteNewService()\">\n                    <i class=\"icon icon-delete\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-2\">\n        <mat-form-field class=\"max\">\n            <mat-select [ngModel]=\"procedure?.procedureGroupId\" (ngModelChange)=\"procedure.procedureGroupId=$event\"\n                        [disabled]=\"isReadonly\"\n                        [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                <mat-option *ngFor=\"let groups of procedureGroups\" [value]=\"groups.id\">{{groups.name}}</mat-option>\n            </mat-select>\n        </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"procedure.onceFranchise.procent\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;%</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"procedure.onceFranchise.maxSum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"procedure.onceLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"procedure.monthLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3\">\n                <mat-form-field class=\"max\">\n                    <input matInput [(ngModel)]=\"procedure.yearLimit.sum\"\n                                    class=\"example-right-align\"\n                                    [readonly]=\"isReadonly\"\n                                    [ngClass]=\"{ colorForDisabled: isReadonly, colorForActive: !isReadonly }\">\n                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-3 text-center\" style=\"margin: auto\">\n                <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n                                      title=\"Редактировать\"\n                                      style=\"display: inline\"\n                                      (click)=\"isReadonly = false\"\n                                      *ngIf=\"isReadonly\">\n                    <i class=\"icon icon-inventorisation\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-done\" \n                                      title=\"Сохранить\"\n                                      style=\"display: inline\"\n                                      (click)=\"changeService()\"\n                                      *ngIf=\"!isReadonly\">\n                    <i class=\"icon icon-done\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                      title=\"Удалить\"\n                                      (click)=\"deleteService()\"\n                                      style=\"display: inline;\">\n                    <i class=\"icon icon-delete\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list/coverage-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/coverage/coverage-list/coverage-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\r\n    <h2>Покрытия</h2>\r\n    <span>( {{nameOfProgram}} )</span>\r\n</div>\r\n<mat-accordion>\r\n    <mat-expansion-panel hideToggle *ngFor=\"let coverage of coverageList\">\r\n        <mat-expansion-panel-header [@.disabled]=\"true\">\r\n            <mat-panel-description style=\"margin: auto;\">\r\n                <b style=\"color: black\">{{coverage.coverName}}</b>\r\n            </mat-panel-description>\r\n            <button class=\"btn btn-change\" [routerLink]=\"['./', coverage.id, 'settings']\">\r\n                Перейти в настройки\r\n                <i class=\"icon icon-back\" style=\"transform: rotate(180deg);\"></i>\r\n            </button>\r\n        </mat-expansion-panel-header>\r\n        <div class=\"row\">\r\n            <div class=\"col-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <h4>Франшиза</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <mat-form-field class=\"max\">\r\n                                    <input matInput placeholder=\"Процент за случай\" [(ngModel)]=\"coverage.onceFranchise.procent\"\r\n                                                    class=\"example-right-align\"\r\n                                                    [readonly]=\"coverage.readonly\"\r\n                                                    [ngClass]=\"{ colorForDisabled: coverage.readonly, colorForActive: !coverage.readonly }\">\r\n                                    <span matSuffix style=\"color: black\">&nbsp;%</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <mat-form-field class=\"max\">\r\n                                    <input matInput placeholder=\"Сумма за случай\" [(ngModel)]=\"coverage.onceFranchise.maxSum\"\r\n                                                    class=\"example-right-align\"\r\n                                                    [readonly]=\"coverage.readonly\"\r\n                                                    [ngClass]=\"{ colorForDisabled: coverage.readonly, colorForActive: !coverage.readonly }\">\r\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <mat-form-field class=\"max\">\r\n                                    <input matInput placeholder=\"Сумма за год\" [(ngModel)]=\"coverage.yearFranchise.maxSum\"\r\n                                                    class=\"example-right-align\"\r\n                                                    [readonly]=\"coverage.readonly\"\r\n                                                    [ngClass]=\"{ colorForDisabled: coverage.readonly, colorForActive: !coverage.readonly }\">\r\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <h4>Лимиты</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-4\">\r\n                                <mat-form-field class=\"max\">\r\n                                    <input matInput placeholder=\"Сумма за случай\" [(ngModel)]=\"coverage.onceLimit.sum\"\r\n                                                    class=\"example-right-align\"\r\n                                                    [readonly]=\"coverage.readonly\"\r\n                                                    [ngClass]=\"{ colorForDisabled: coverage.readonly, colorForActive: !coverage.readonly }\">\r\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <mat-form-field class=\"max\">\r\n                                    <input matInput placeholder=\"Сумма за месяц\" [(ngModel)]=\"coverage.monthLimit.sum\"\r\n                                                    class=\"example-right-align\"\r\n                                                    [readonly]=\"coverage.readonly\"\r\n                                                    [ngClass]=\"{ colorForDisabled: coverage.readonly, colorForActive: !coverage.readonly }\">\r\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <mat-form-field class=\"max\">\r\n                                    <input matInput placeholder=\"Сумма за год\" [(ngModel)]=\"coverage.yearLimit.sum\"\r\n                                                    class=\"example-right-align\"\r\n                                                    [readonly]=\"coverage.readonly\"\r\n                                                    [ngClass]=\"{ colorForDisabled: coverage.readonly, colorForActive: !coverage.readonly }\">\r\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 text-center\" style=\"margin:  auto\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-5 text-center\" style=\"margin:  auto\">\r\n                        <mat-label style=\"font-size: 11px; margin-right: 10px;\">Требуется подтверждение?</mat-label>\r\n                        <mat-slide-toggle [checked]=\"coverage.isNeedAgreement === true\"\r\n                                          (change)=\"coverage.isNeedAgreement = !coverage.isNeedAgreement\"\r\n                                          [disabled]=\"coverage.readonly\">\r\n                        </mat-slide-toggle>\r\n                    </div>\r\n                    <div class=\"col-7\" style=\"margin:  auto; padding-bottom: 20px;\">\r\n                        <button type=\"button\" class=\"btn btn-change\"\r\n                                            title=\"Редактировать\"\r\n                                            (click)=\"coverage.readonly = false;\"\r\n                                            *ngIf=\"coverage.readonly\">\r\n                            Редактировать<i class=\"icon icon-inventorisation\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-save\"\r\n                                            title=\"Сохранить\"\r\n                                            (click)=\"changeCoverage(coverage);\"\r\n                                            *ngIf=\"!coverage.readonly\">\r\n                            Сохранить<i class=\"icon icon-done\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"row text-center\" style=\"font-weight: 600; background-color: #ddd; border-radius: 5px; padding: 5px;\">\r\n                    <div class=\"col-2\" style=\"text-align: left\">\r\n                        <span>Группа услуг,&nbsp;&nbsp;</span>\r\n                        <span (click)=\"addNewProcedure(coverage);\"\r\n                              *ngIf=\"showAddBtn\"><b class=\"addNewSpan\">&nbsp;+&nbsp;</b></span>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <span>Франшиза за случай, %</span>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <span>Франшиза за случай, Σ</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-3\">\r\n                                <span>Лимит за случай, Σ</span>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                                <span>Лимити за месяц, Σ</span>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                                <span>Лимит за год, Σ</span>\r\n                            </div>\r\n                            <div class=\"col-3\">Настройки</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!coverage.isAddingService\">\r\n                    <tmmed-coverage-list-procedure [service]=\"procedure\"\r\n                                                   [programId]=\"idOfProgram\"\r\n                                                   [coverageId]=\"coverage.id\"\r\n                                                   (onChanged)=\"changeCoverageLocal(coverage.id, $event)\"\r\n                                                   *ngFor=\"let procedure of coverage.procedureGroups\">\r\n                    </tmmed-coverage-list-procedure>\r\n                </div>\r\n                <tmmed-coverage-list-procedure-add *ngIf=\"coverage.isAddingService\"\r\n                                                   [programId]=\"idOfProgram\"\r\n                                                   [coverageId]=\"coverage.id\"\r\n                                                   (onCancel)=\"cancelAddingProcedure(coverage)\">\r\n                </tmmed-coverage-list-procedure-add>\r\n            </div>\r\n            <div class=\"row\"\r\n                             style=\"width: 100%; height: 1px; background-color: #f3f1f1; margin: 20px;\">\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <div class=\"row text-center\" style=\"font-weight: 600; background-color: #ddd; border-radius: 5px; padding: 5px;\">\r\n                    <div class=\"col-2\" style=\"text-align: left\">\r\n                        <span>Группа медикаментов,&nbsp;&nbsp;</span>\r\n                        <span (click)=\"addNewMedicament(coverage);\"\r\n                              *ngIf=\"showAddBtn\"><b class=\"addNewSpan\">&nbsp;+&nbsp;</b></span>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\">\r\n                                <span>Франшиза за случай, %</span>\r\n                            </div>\r\n                            <div class=\"col-6\">\r\n                                <span>Франшиза за случай, Σ</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-3\">\r\n                                <span>Лимит за случай, Σ</span>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                                <span>Лимити за месяц, Σ</span>\r\n                            </div>\r\n                            <div class=\"col-3\">\r\n                                <span>Лимит за год, Σ</span>\r\n                            </div>\r\n                            <div class=\"col-3\">Настройки</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!coverage.isAddingMed\">\r\n                    <tmmed-coverage-list-med [medicament]=\"med\"\r\n                                             [programId]=\"idOfProgram\"\r\n                                             [coverageId]=\"coverage.id\"\r\n                                             (onChanged)=\"changeCoverageLocal(coverage.id, $event)\"\r\n                                             *ngFor=\"let med of coverage.medicamentGroups\">\r\n                    </tmmed-coverage-list-med>\r\n                </div>\r\n                <tmmed-coverage-list-med-add *ngIf=\"coverage.isAddingMed\"\r\n                                             [programId]=\"idOfProgram\"\r\n                                             [coverageId]=\"coverage.id\"\r\n                                             (onCancel)=\"cancelAddingMed(coverage)\"\r\n                                             (onUpdate)=\"updateCoverage($event, coverage)\">\r\n                </tmmed-coverage-list-med-add>\r\n            </div>\r\n        </div>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/java-hack-start-page/java-hack-start-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/java-hack-start-page/java-hack-start-page.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  java-hack-start-page works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-med-add/loss-id-med-add.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-id-med-add/loss-id-med-add.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"add-med-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n\t\t\t\t<h3 class=\"modal-title\">Добавление нового медикамента</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding-top: 5px; padding-bottom: 0px;\" (click)=\"checkModalMedSave();\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<h4 class=\"no-margin\">Информация о медикаменте</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Название медикамента\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForMeds\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoMedModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   (keyup)=\"isDisabledMedicamentInfo = false;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    modalMed.medicamentSaveItem.name = controlForMeds.value;\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t\t\t<mat-autocomplete #autoMedModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerMed\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForMeds | async\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n                                                    (click)=\"chooseMedFromList(option);\n                                                             isDisabledMedicamentInfo = true;\n                                                             checkModalMedSave();\">\n\t\t\t\t\t\t\t\t\t\t\t( {{option.code}} ) - {{option.name}}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Код медикамента\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForMedsCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoMedModalCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   (keyup)=\"isDisabledMedicamentInfo = false;\n\t\t\t\t\t\t\t\t\t\t\t\t\t            modalMed.medicamentSaveItem.code = controlForMedsCode.value\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t\t\t<mat-autocomplete #autoMedModalCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerMed\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForMedsCode | async\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n                                                    (click)=\"isDisabledMedicamentInfo = true;\n                                                             chooseMedFromListCode(option);\n                                                             checkModalMedSave();\">\n\t\t\t\t\t\t\t\t\t\t\t{{option.code}}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Группа медикамента\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForMedGroup\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoMedModalGroup\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [readonly]=\"isDisabledMedicamentInfo\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t\t\t<mat-autocomplete #autoMedModalGroup=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerMedGroup\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForMedGroup | async\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"modalMed.medicamentSaveItem.groupName = option.name;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t modalMed.medicamentSaveItem.groupId = option.id;\">\n\t\t\t\t\t\t\t\t\t\t\t{{option.name}}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Лекарственная форма\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.medicamentSaveItem.medicamentForm\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"isDisabledMedicamentInfo\">\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-5\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Дата медикамента</h4>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"pickerForMed\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Дата\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"pickerForMed.open()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(dateChange)=\"checkModalMedSave();\">\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerForMed\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t<mat-datepicker #pickerForMed></mat-datepicker>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-button-toggle-group style=\"margin-bottom: 0px;\" \n\t\t\t\t\t\t\t\t                         [(ngModel)]=\"modalMed.stateId\">\n\t\t\t\t\t\t\t\t\t<mat-button-toggle value=\"2\">Согласовано</mat-button-toggle>\n\t\t\t\t\t\t\t\t\t<mat-button-toggle value=\"1\" (click)=\"modalMed.insurance = 0\">Отказано</mat-button-toggle>\n\t\t\t\t\t\t\t\t\t<mat-button-toggle value=\"3\">Частично согласовано</mat-button-toggle>\n\t\t\t\t\t\t\t\t</mat-button-toggle-group>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Возмещение</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Стоимость за единицу\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.costPerUnit\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Возмещение за единицу\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.insurancePerUnit\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Количество\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.quantityAmount\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;шт</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Количество\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.quantityInsurance\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;шт</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Общая стоимость\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.costPerUnit*modalMed.quantityAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Сумма возмещения\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalMed.insurance\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"modalMed.stateId == 1\"\n                                                            (click)=\"modalMed.insurance == 0 ? $event.target.select() : 0\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Дополнительная информация</h4>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n                                    <textarea matInput\n                                              placeholder=\"Причина отказа\"\n\t\t\t\t\t\t\t\t\t\t\t  style=\"height: 104px; overflow-y: auto\"\n\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"modalMed.rejectReason\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Комментарий</h4>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<textarea matInput placeholder=\"Комментарий\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   style=\"height: 104px; overflow-y: auto\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"modalMed.comment\"></textarea>\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"end\">{{modalMed.comment.length}} / 4000</mat-hint>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Отмена</button>\n\t\t\t\t<button type=\"button\" style=\"color: #fff\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n \t\t\t\t\t\t\t\t      *ngIf=\"showModalSaveMed\"\n\t\t\t\t\t\t\t\t\t  (click)=\"addNewMed()\">\n\t\t\t\t\tСохранить\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-med/loss-id-med.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-id-med/loss-id-med.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel hideToggle\n                     style=\"margin-left: -8px; margin-right: -8px; margin-bottom: 5px;\"\n                     (closed)=\"med.readonly = true; cancelModalMed(med);\"\n                     (afterExpand)=\"saveToModalTempMed(med);\">\n    <mat-expansion-panel-header [@.disabled]=\"true\" [ngStyle]=\"med.stateId === 1 && {'background-color': '#ffe9e9'} ||\n                                                               med.stateId === 2 && {'background-color': '#f0ffe9'} ||\n                                                               med.stateId === 3 && {'background-color': '#fcffd5'}\">\n        <div class=\"col-1\" style=\"background-color: rgba(0, 0, 0, 0); \n                                  margin: auto;\n                                  margin-left: 0px;\n                                  margin-right: 0px;\"\n                                  *ngIf=\"!showToDelete\">\n            <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                  title=\"Удалить\"\n                                  style=\"display: inline; padding: 0px;\"\n                                  (click)=\"$event.stopPropagation(); showToDelete = true\">\n                <i class=\"icon icon-delete\"></i>\n            </button>\n        </div>\n        <div class=\"col-3\" *ngIf=\"showToDelete\" style=\"margin-top: 24px; margin-bottom: 24px\">\n            <span>Удалить выбранный медикамент? <br> ( {{med.medicamentItem.name}} )</span>\n        </div>\n        <div class=\"col-1\" *ngIf=\"showToDelete\" style=\"margin: auto\">\n            <button type=\"button\" class=\"btn btn-save\" style=\"color: red; margin-top: 0px; float: left; padding: 9px 10px\"\n                                  (click)=\"$event.stopPropagation(); deleteMed(med.id)\">\n                Удалить\n            </button>\n        </div>\n        <div class=\"col-1\" *ngIf=\"showToDelete\" style=\"margin: auto\">\n            <button type=\"button\" class=\"btn btn-change\" style=\"color: black; margin-top: 0px; float: left\"\n                                  (click)=\"$event.stopPropagation(); showToDelete = false\">\n                Отмена\n            </button>\n        </div>\n        <div class=\"col-6\" *ngIf=\"showToDelete\"></div>\n        <div class=\"col-2\" style=\"margin-top: 24px; margin-bottom: 24px;\" *ngIf=\"!showToDelete\">\n            <span>{{med.medicamentItem.name}}</span>\n        </div>\n        <div class=\"col-2\" style=\"margin: auto;\" *ngIf=\"!showToDelete\">\n            <mat-form-field style=\"width: 100%; margin-top: 10px;\">\n                <input matInput [matDatepicker]=\"pickerForMed\"\n                                placeholder=\"\" \n                                [(ngModel)]=\"med.date\" \n                                disabled=\"true\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerForMed\" (click)=\"$event.stopPropagation();\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerForMed></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-3 text-center\" style=\"margin: auto\" *ngIf=\"!showToDelete\">\n            <span *ngIf=\"med.stateId  == 2\">Согласовано</span>\n            <span *ngIf=\"med.stateId == 1\">Отказано</span>\n            <span *ngIf=\"med.stateId == 3\">Частично согласовано</span>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto;\" *ngIf=\"!showToDelete\">\n            <span>{{med.amount || 0}} ₽</span>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto;\" *ngIf=\"!showToDelete\">\n            <span>{{med.insurance || 0}} ₽</span>\n        </div>\n    </mat-expansion-panel-header>\n    <div class=\"row\">\n        <h4 class=\"no-margin\">Информация о медикаменте</h4>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Название медикамента\"\n                                [(ngModel)]=\"med.medicamentItem.name\"\n                                disabled>\n            </mat-form-field>\n        </div>\n        <div class=\"col-2\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Код медикамента\"\n                                [(ngModel)]=\"med.medicamentItem.code\"\n                                disabled>\n            </mat-form-field>\n        </div>\n        <div class=\"col-2\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Группа медикамента\"\n                                [(ngModel)]=\"med.medicamentItem.groupName\"\n                                disabled>\n            </mat-form-field>\n        </div>\n        <div class=\"col-4\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Лекарственная форма\"\n                                [(ngModel)]=\"med.medicamentItem.medicamentForm\"\n                                disabled>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <h4 class=\"no-margin\">Возмещение</h4>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Стоимость за единицу\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"med.costPerUnit\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Возмещение за единицу\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"med.insurancePerUnit\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"med.quantityAmount\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"med.quantityInsurance\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Общая стоимость\" \n                                        type=\"number\"\n                                        value=\"{{med.amount}}\"\n                                        class=\"example-right-align\" \n                                        disabled\n                                        *ngIf=\"med.readonly\">\n                        <input matInput placeholder=\"Общая стоимость\" \n                                        type=\"number\"\n                                        value=\"{{med.costPerUnit*med.quantityAmount}}\"\n                                        class=\"example-right-align\" \n                                        disabled\n                                        *ngIf=\"!med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма возмещения\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"med.insurance\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"med.readonly || med.stateId == 1\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n            <div class=\"row\">\n                <h4 class=\"no-margin\" style=\"margin-bottom: 10px;\">Статус </h4>\n            </div>\n            <div class=\"row\" *ngIf=\"med.readonly\">\n                <mat-button-toggle-group style=\"margin-bottom: 20px;\" value=\"{{med.stateId}}\">\n                    <mat-button-toggle value=\"2\"\n                                       (click)=\"changeStatusMed(idOfLoss, med.id, 2)\">\n                        Согласовано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"1\"\n                                       (click)=\"changeStatusMed(idOfLoss, med.id, 1)\">\n                        Отказано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"3\"\n                                       (click)=\"changeStatusMed(idOfLoss, med.id, 3);\">\n                        Частично согласовано\n                    </mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n            <div class=\"row\" *ngIf=\"!med.readonly\">\n                <mat-button-toggle-group style=\"margin-bottom: 20px;\"\n                                         value=\"{{med.stateId}}\"\n                                         (change)=\"med.stateId = $event.value\">\n                    <mat-button-toggle value=\"2\">\n                        Согласовано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"1\"\n                                       (click)=\"med.insurance = 0\">\n                        Отказано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"3\">\n                        Частично согласовано\n                    </mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n            <div class=\"row\">\n                <button type=\"button\" title=\"Редактировать\"\n                                      class=\"btn btn-for-search\"\n                                      style=\"opacity: 1; color: #000;\"\n                                      (click)=\"med.readonly = false;\"\n                                      *ngIf=\"med.readonly\">Внести изменения\n                    <i class=\"icon icon-inventorisation\"></i>\n                </button>\n                <button type=\"button\" title=\"Отменить\"\n                                      class=\"btn btn-for-save\"\n                                      style=\"opacity: 1;\"\n                                      (click)=\"cancelModalMed(med); med.readonly = true;\"\n                                      *ngIf=\"!med.readonly\">Отменить изменения\n                    <i class=\"icon icon-close\"></i>\n                </button>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <h4 class=\"no-margin\">Дополнительная информация</h4>\n            <mat-form-field class=\"max\">\n                <textarea matInput placeholder=\"Причина отказа\"\n                                   disabled [disabled]=\"med.readonly\"\n                                   [(ngModel)]=\"med.rejectReason\" \n                                   style=\"height: 84px; overflow-y: auto\"></textarea>\n            </mat-form-field>\n        </div>\n        <div class=\"col-9\">\n            <h4 class=\"no-margin\">Комментарий</h4>\n            <mat-form-field style=\"margin-right: 30px; width: 100%\">\n                <textarea matInput placeholder=\"Комментарий\" \n                                   disabled [disabled]=\"med.readonly\"\n                                   [(ngModel)]=\"med.comment\" \n                                   style=\"height: 84px; overflow-y: auto\"></textarea>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\"> </div>\n    <div class=\"col-12\" style=\"margin: auto\" *ngIf=\"!med.readonly\">\n        <div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n        <button class=\"btn\" style=\"border: 1px solid #ddd;\n                                   background-color: #fff;\n                                   color: #989898;\n                                   float: right;\n                                   margin-top: 16px;\"\n                            (click)=\"changeMed(med); med.readonly = true;\">Сохранить</button>\n    </div>\n</mat-expansion-panel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n    <mat-spinner *ngIf=\"showSpinerMkb\"></mat-spinner>\n</div>\n<div class=\"col-12\" style=\"padding-top: 10px; overflow-y: auto; max-height: 60vh;\">\n    <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n        <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding style=\"border-bottom: 1px solid #eee\">\n            <button class=\"nodeNoChildren\"\n                    (click)=\"onChanged.emit(node)\"\n                    data-dismiss=\"modal\"\n                    *ngIf=\"idOfLoss == null\">\n                ( {{node.code}} ) - {{node.name}}\n            </button>\n            <button class=\"nodeNoChildren\" *ngIf=\"idOfLoss != null\">\n                ( {{node.code}} ) - {{node.name}}\n            </button>\n        </mat-tree-node>\n        <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding style=\"font-size: 16px; cursor: pointer; border-bottom: 1px solid #eee\"\n                        matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n            <button mat-icon-button style=\"border: 0px; background-color: #fff; color: #000; \">\n            </button>\n            <div style=\"width: 97%\">\n                ( {{node.code}} ) - {{node.name}}\n            </div>\n            <div style=\"width: 3%\">\n                <mat-icon class=\"mat-icon-rtl-mirror\">\n                    {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                </mat-icon>\n            </div>\n        </mat-tree-node>\n    </mat-tree>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"add-service-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n\t\t\t\t<h3 class=\"modal-title\">Добавление новой услуги</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding-top: 5px; padding-bottom: 0px;\" (click)=\"checkModalServiceSave();\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<h4 class=\"no-margin\">Информация о услуге</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Название услуги\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForService\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoServiceModal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   (keyup)=\"isDisabledServiceInfo = false;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    modalService.procedureSaveItem.name = controlForService.value;\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t\t\t<mat-autocomplete #autoServiceModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerService\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForService | async\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"chooseServiceFromList(option);\n                                                             isDisabledServiceInfo = true;\n                                                             checkModalServiceSave();\">\n\t\t\t\t\t\t\t\t\t\t\t( {{option.code}} ) - {{option.name}}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Код услуги\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForServiceCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoServiceModalCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   (keyup)=\"isDisabledServiceInfo = false;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    modalService.procedureSaveItem.code = controlForServiceCode.value;\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t\t\t<mat-autocomplete #autoServiceModalCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerService\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForServiceCode | async\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n                                                    (click)=\"chooseServiceFromListCode(option);\n                                                             isDisabledServiceInfo = true;\n                                                             checkModalServiceSave();\">\n\t\t\t\t\t\t\t\t\t\t\t( {{option.code}} ) - {{option.name}}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Группа услуги\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForServiceGroup\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoServiceModalGroup\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   (keyup)=\"isDisabledServiceInfo = false;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [readonly]=\"isDisabledServiceInfo\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t\t\t<mat-autocomplete #autoServiceModalGroup=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerServiceGroup\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForServiceGroup | async\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"modalService.procedureSaveItem.groupName = option.name; \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t modalService.procedureSaveItem.groupId = option.id;\">\n\t\t\t\t\t\t\t\t\t\t\t{{option.name}}\n\t\t\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-5\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Дата услуги</h4>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"pickerForService\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Дата\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"pickerForService.open();\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(dateChange)=\"checkModalServiceSave();\">\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerForService\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t<mat-datepicker #pickerForService></mat-datepicker>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-button-toggle-group [(ngModel)]=\"modalService.stateId\">\n\t\t\t\t\t\t\t\t\t<mat-button-toggle value=\"2\">Согласовано</mat-button-toggle>\n\t\t\t\t\t\t\t\t\t<mat-button-toggle value=\"1\" (click)=\"modalService.insurance = 0\">Отказано</mat-button-toggle>\n\t\t\t\t\t\t\t\t\t<mat-button-toggle value=\"3\">Частично согласовано</mat-button-toggle>\n\t\t\t\t\t\t\t\t</mat-button-toggle-group>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Возмещение</h4>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Стоимость за единицу\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.costPerUnit\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Возмещение за единицу\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.insurancePerUnit\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Количество\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.quantityAmount\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;шт</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Количество\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.quantityInsurance\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;шт</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Общая стоимость\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.costPerUnit*modalService.quantityAmount\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisabled>\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Сумма возмещения\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"modalService.insurance\"\n                                                            [disabled]=\"modalService.stateId == 1\"\n                                                            (click)=\"modalService.insurance == 1 ? $event.target.select() : 0\">\n\t\t\t\t\t\t\t\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Дополнительная информация</h4>\n\t\t\t\t\t\t\t\t<mat-form-field style=\"width: 100%\">\n                                    <textarea matInput\n                                              placeholder=\"Причина отказа\"\n\t\t\t\t\t\t\t\t\t\t      style=\"height: 104px; overflow-y: auto\"\n\t\t\t\t\t\t\t\t\t\t\t  [(ngModel)]=\"modalService.rejectReason\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<h4 class=\"no-margin\">Комментарий</h4>\n\t\t\t\t\t\t\t\t<mat-form-field style=\"margin-right: 30px; width: 100%\">\n\t\t\t\t\t\t\t\t\t<textarea matInput placeholder=\"Комментарий\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   style=\"height: 104px; overflow-y: auto\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"modalService.comment\"></textarea>\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"end\">{{modalService.comment.length}} / 4000</mat-hint>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Отмена</button>\n\t\t\t\t<button type=\"button\" style=\"color: #fff\" class=\"btn btn-primary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n \t\t\t\t\t\t\t\t      *ngIf=\"showModalSaveService\"\n\t\t\t\t\t\t\t\t\t  (click)=\"addNewService()\">Сохранить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-procedure/loss-id-procedure.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-id-procedure/loss-id-procedure.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel hideToggle\n                     style=\"margin-left: -8px; margin-right: -8px; margin-bottom: 5px;\"\n                     (closed)=\"service.readonly = true; cancelModalService(service);\"\n                     (afterExpand)=\"saveToModalTempService(service);\">\n    <mat-expansion-panel-header [@.disabled]=\"true\" [ngStyle]=\"service.stateId === 1 && {'background-color': '#ffe9e9'} ||\n                                                               service.stateId === 2 && {'background-color': '#f0ffe9'} ||\n                                                               service.stateId === 3 && {'background-color': '#fcffd5'}\">\n        <div class=\"col-1\" style=\"background-color: rgba(0, 0, 0, 0); \n                                  margin: auto;\n                                  margin-left: 0px;\n                                  margin-right: 0px;\"\n                                  *ngIf=\"!showToDelete\">\n            <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                  title=\"Удалить\"\n                                  style=\"display: inline; padding: 0px;\"\n                                  (click)=\"$event.stopPropagation(); showToDelete = true\">\n                <i class=\"icon icon-delete\"></i>\n            </button>\n        </div>\n        <div class=\"col-3\" *ngIf=\"showToDelete\" style=\"margin-top: 24px; margin-bottom: 24px\">\n            <span>Удалить выбранный медикамент? <br> ( {{service.procedureItem.name}} )</span>\n        </div>\n        <div class=\"col-1\" *ngIf=\"showToDelete\" style=\"margin: auto\">\n            <button type=\"button\" class=\"btn btn-save\" style=\"color: red; margin-top: 0px; float: left; padding: 9px 10px\"\n                                  (click)=\"$event.stopPropagation(); deleteService(service.id)\">\n                Удалить\n            </button>\n        </div>\n        <div class=\"col-1\" *ngIf=\"showToDelete\" style=\"margin: auto\">\n            <button type=\"button\" class=\"btn btn-change\" style=\"color: black; margin-top: 0px; float: left\"\n                                  (click)=\"$event.stopPropagation(); showToDelete = false\">\n                Отмена\n            </button>\n        </div>\n        <div class=\"col-6\" *ngIf=\"showToDelete\"> </div>\n        <div class=\"col-2\"  style=\"margin-top: 24px; margin-bottom: 24px\" *ngIf=\"!showToDelete\">\n            <span>{{service.procedureItem.name}}</span>\n        </div>\n        <div class=\"col-2\" style=\"margin: auto;\" *ngIf=\"!showToDelete\">\n            <mat-form-field style=\"width: 100%; margin-top: 10px;\">\n                <input matInput [matDatepicker]=\"pickerForService\"\n                                placeholder=\"\" \n                                [(ngModel)]=\"service.date\" \n                                disabled [disabled]=\"service.readonly\">\n                <mat-datepicker-toggle matSuffix [for]=\"pickerForService\" (click)=\"$event.stopPropagation();\"></mat-datepicker-toggle>\n                <mat-datepicker #pickerForService></mat-datepicker>\n            </mat-form-field>\n        </div>\n        <div class=\"col-3 text-center\" style=\"margin: auto\" *ngIf=\"!showToDelete\">\n            <span *ngIf=\"service.stateId  == '2'\">Согласовано</span>\n            <span *ngIf=\"service.stateId == '1'\" (click)=\"service.insurance = 0\">Отказано</span>\n            <span *ngIf=\"service.stateId == '3'\">Частично согласовано</span>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto;\" *ngIf=\"!showToDelete\">\n            <span>{{service.amount}} ₽</span>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto;\" *ngIf=\"!showToDelete\">\n            <span>{{service.insurance}} ₽</span>\n        </div>\n    </mat-expansion-panel-header>\n    <div class=\"row\">\n        <h4 class=\"no-margin\">Информация о услуге</h4>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Название услуги\"\n                                [(ngModel)]=\"service.procedureItem.name\"\n                                disabled>\n            </mat-form-field>\n        </div>\n        <div class=\"col-3\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Код услуги\"\n                                [(ngModel)]=\"service.procedureItem.code\"\n                                disabled>\n            </mat-form-field>\n        </div>\n        <div class=\"col-4\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Группа услуги\"\n                                [(ngModel)]=\"service.procedureItem.groupName\"\n                                disabled>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <h4 class=\"no-margin\">Возмещение</h4>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Стоимость за единицу\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"service.costPerUnit\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"service.readonly\">\n                        <span matPrefix>₽&nbsp;</span>\n                    </mat-form-field>\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Возмещение за единицу\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"service.insurancePerUnit\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"service.readonly\">\n                        <span matPrefix>₽&nbsp;</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"service.quantityAmount\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"service.readonly\">\n                        <span matPrefix>шт&nbsp;</span>\n                    </mat-form-field>\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"service.quantityInsurance\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"service.readonly\">\n                        <span matPrefix>шт&nbsp;</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Общая стоимость\" \n                                        type=\"number\"\n                                        value=\"{{service.amount}}\"\n                                        class=\"example-right-align\" \n                                        disabled\n                                        *ngIf=\"service.readonly\">\n                        <input matInput placeholder=\"Общая стоимость\" \n                                        type=\"number\"\n                                        value=\"{{service.costPerUnit*service.quantityAmount}}\"\n                                        class=\"example-right-align\" \n                                        disabled\n                                        *ngIf=\"!service.readonly\">\n                        <span matPrefix>₽&nbsp;</span>\n                    </mat-form-field>\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма возмещения\" \n                                        type=\"number\"\n                                        [(ngModel)]=\"service.insurance\"\n                                        class=\"example-right-align\" \n                                        disabled [disabled]=\"service.readonly || service.stateId == 1\">\n                        <span matPrefix>₽&nbsp;</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"col-1\"></div>\n        <div class=\"col-6\">\n            <div class=\"row\">\n                <h4 class=\"no-margin\" style=\"margin-bottom: 10px;\">Статус </h4>\n            </div>\n            <div class=\"row\" *ngIf=\"service.readonly\">\n                <mat-button-toggle-group style=\"margin-bottom: 20px;\" value=\"{{service.stateId}}\">\n                    <mat-button-toggle value=\"2\"\n                                       (click)=\"changeStatusService(idOfLoss, service.id, 2)\">\n                        Согласовано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"1\"\n                                       (click)=\"changeStatusService(idOfLoss, service.id, 1)\">\n                        Отказано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"3\"\n                                       (click)=\"changeStatusService(idOfLoss, service.id, 3);\">\n                        Частично согласовано\n                    </mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n            <div class=\"row\" *ngIf=\"!service.readonly\">\n                <mat-button-toggle-group style=\"margin-bottom: 20px;\"\n                                         value=\"{{service.stateId}}\"\n                                         (change)=\"service.stateId = $event.value\">\n                    <mat-button-toggle value=\"2\">\n                        Согласовано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"1\"\n                                       (click)=\"service.insurance = 0\">\n                        Отказано\n                    </mat-button-toggle>\n                    <mat-button-toggle value=\"3\">\n                        Частично согласовано\n                    </mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n            <div class=\"row\">\n                <button type=\"button\" title=\"Редактировать\"\n                                      class=\"btn btn-for-search\"\n                                      style=\"opacity: 1; color: #000;\"\n                                      (click)=\"service.readonly = false;\"\n                                      *ngIf=\"service.readonly\">Внести изменения\n                    <i class=\"icon icon-inventorisation\"></i>\n                </button>\n                <button type=\"button\" title=\"Отменить\"\n                                      class=\"btn btn-for-save\"\n                                      style=\"opacity: 1;\"\n                                      (click)=\"cancelModalService(service); service.readonly = true;\"\n                                      *ngIf=\"!service.readonly\">Отменить изменения\n                    <i class=\"icon icon-close\"></i>\n                </button>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3\">\n            <h4 class=\"no-margin\">Дополнительная информация</h4>\n            <mat-form-field class=\"max\">\n                <textarea matInput placeholder=\"Причина отказа\"\n                                   disabled [disabled]=\"service.readonly\"\n                                   [(ngModel)]=\"service.rejectReason\" \n                                   style=\"height: 84px; overflow-y: auto\">\n                </textarea>\n            </mat-form-field>\n        </div>\n        <div class=\"col-9\">\n            <h4 class=\"no-margin\">Комментарий</h4>\n            <mat-form-field class=\"max\">\n                <textarea matInput placeholder=\"Комментарий\" \n                                   disabled [disabled]=\"service.readonly\"\n                                   [(ngModel)]=\"service.comment\" \n                                   style=\"height: 84px; overflow-y: auto\">\n                </textarea>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\"> </div>\n    <div class=\"col-12\" style=\"margin: auto\" *ngIf=\"!service.readonly\">\n        <div class=\"max\" style=\"height: 1px; background-color: #f3f1f1;\"> </div>\n        <button class=\"btn\" style=\"border: 1px solid #ddd;\n                                   background-color: #fff;\n                                   color: #989898;\n                                   float: right;\n                                   margin-top: 16px;\"\n                            (click)=\"changeService(service); service.readonly = true\">Сохранить</button>\n    </div>\n</mat-expansion-panel>\t\n\n<!-- <div class=\"modal fade\" id=\"delete-service-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Удаление услуги</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding-top: 10px;\">\n\t\t\t\t<h4>Вы действительный хотите удалить \"{{nameToDelete}}\" из списка услуг?</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\">Отмена</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\" style=\"color: white\"\n\t\t\t\t\t\t\t\t\t  (click)=\"deleteService(service.id)\">Удалить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> -->\n\t\t\t\t\t\t"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id/loss-id.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-id/loss-id.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header form\">\n\t<div class=\"row\">\n\t\t<h4>Данные застрахованного:</h4>\n\t</div>\n\t<div class=\"row top\">\n\t\t<div class=\"row col-12\">\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput\n\t\t\t\t\t\tplaceholder=\"ФИО\" \n\t\t\t\t\t\tvalue=\"{{loss.assured.lastName}} {{loss.assured.firstName}} {{loss.assured.middleName}}\" readonly>\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput \n\t\t\t\t\t       placeholder=\"Номер договора\"\n\t\t\t\t\t       value=\"{{loss.assured.programNumber}}\" readonly>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput\n\t\t\t\t\t\t   placeholder=\"Продукт\" \n\t\t\t\t\t\t   value=\"{{loss.assured.insuredCompanyProductName}}\" readonly>\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput\n\t\t\t\t\t\t   placeholder=\"Программа страхования\"\n\t\t\t\t\t\t   value=\"{{loss.assured.insuredCompanyProductProgramName}}\" readonly>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row col-12\">\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput\n\t\t\t\t\t\tplaceholder=\"Страховая компания\" \n\t\t\t\t\t\tvalue=\"{{loss.assured.insuredCompanyName}}\" readonly>\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput [matDatepicker]=\"programStartDate\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Дата начала страхования\"\n\t\t\t\t\t\t\t\t\tvalue=\"{{loss.assured.programStartDate}}\" readonly>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"programStartDate\" disabled></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #programStartDate></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<input matInput [matDatepicker]=\"programEndDate\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Дата окончания страхования\"\n\t\t\t\t\t\t\t\t\tvalue=\"{{loss.assured.programEndDate}}\" readonly>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"programEndDate\" disabled></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #programEndDate></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t<div class=\"row\">\n\t\t<h4>Данные по убытку:</h4>\n\t</div>\n\t<div class=\"row top\">\n\t\t<div class=\"col-3\">\n\t\t\t<mat-form-field class=\"max\" readonly>\n\t\t\t\t<input matInput [matDatepicker]=\"picker\"\n\t\t\t\t\t\t\t\tplaceholder=\"Дата создания убытка\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.date}}\" readonly>\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\" disabled></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #picker readonly></mat-datepicker>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input matInput placeholder=\"Лимит по диагнозу\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.diagnosisLimit || 0}}\"\n\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\treadonly>\n\t\t\t\t<span matSuffix>&nbsp;₽</span>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input matInput placeholder=\"Оставшийся лимит\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.remainingLimit || 0}}\"\n\t\t\t\t\t\t\t\tclass=\"example-right-align\"\n\t\t\t\t\t\t\t\treadonly>\t\n\t\t\t\t<span matSuffix>&nbsp;₽</span>\t\t\t\t\t\t\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<button matSuffix class=\"btn btn-for-search\"\n\t\t\t\t\t\t\ttitle=\"Убытки застрахованного\"\n\t\t\t\t\t\t\tstyle=\"margin-top: 5px;\"\n\t\t\t\t\t\t\tdata-toggle=\"modal\"\n\t\t\t\t\t\t\tdata-target=\"#user-modal\">\n\t\t\t\t<h4>Убытки застрахованного: </h4>\n\t\t\t\t<i class=\"material-icons\">find_replace</i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t<div class=\"row\">\n\t\t<h4>Клиника:</h4>\n\t</div>\n\t<div class=\"row top\">\n\t\t<div class=\"col-5\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input type=\"text\" placeholder=\"Название\"\n\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForClinic\"\n\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoClinic\"\n\t\t\t\t\t\t\t\t   #myInputClinic\n\t\t\t\t\t\t\t\t   (click)=\"myInput.select();\"\n\t\t\t\t\t\t\t\t   readonly [readonly]=\"idOfLoss != null\">\t\t\n\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n\t\t\t\t<mat-autocomplete #autoClinic=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnClinic\">\n\t\t\t\t\t<mat-option *ngIf=\"showSpinerClinic\">\n\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForClinic | async\" \n\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t(click)=\"chooseClinic(option)\">\n\t\t\t\t\t\t{{option.clinicName}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input matInput placeholder=\"Код\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.clinic.clinicCode}}\"\n\t\t\t\t\t\t\t\treadonly>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input type=\"text\" placeholder=\"ИНН\"\n\t\t\t\t\t\t\t\t   matInput [formControl]=\"controlForInn\"\n\t\t\t\t\t\t\t\t   [matAutocomplete]=\"autoInn\"\n\t\t\t\t\t\t\t\t   #myInputInn\n\t\t\t\t\t\t\t\t   (click)=\"myInput.select();\"\n\t\t\t\t\t\t\t\t   readonly [readonly]=\"idOfLoss != null\">\t\t\n\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n\t\t\t\t<mat-autocomplete #autoInn=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnInn\">\n\t\t\t\t\t<mat-option *ngIf=\"showSpinerInn\">\n\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForInn | async\" \n\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t(click)=\"chooseClinic(option)\">\n\t\t\t\t\t\t{{option.inn}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input matInput placeholder=\"БИК\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.clinic.bik}}\"\n\t\t\t\t\t\t\t\treadonly>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t</div>\n\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t<div class=\"row\">\n\t\t<h4>Диагноз:</h4>\n\t</div>\n\t<div class=\"row top\">\n\t\t<div class=\"col-5\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input type=\"text\" placeholder=\"Название\"\n\t\t\t\t\t\t\t\tmatInput [formControl]=\"controlForDiagnosis\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.diagnosis.name}}\"\n\t\t\t\t\t\t\t\t[matAutocomplete]=\"auto\"\n\t\t\t\t\t\t\t\t#myInput\n\t\t\t\t\t\t\t\t(click)=\"myInput.select();\"\n\t\t\t\t\t\t\t\treadonly [readonly]=\"idOfLoss != null\">\t\t\n\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n\t\t\t\t\t<mat-option *ngIf=\"showSpinerDiagnosis\">\n\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForDiagnosis | async\" \n\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t(click)=\"chooseDiagnosis(option);\">\n\t\t\t\t\t\t( {{option.code}} ) - {{option.name}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</mat-form-field>\n\t\t\t<button matSuffix class=\"btn btn-for-search\"\n\t\t\t\t\t\t\ttitle=\"Открыть МКБ10\"\n\t\t\t\t\t\t\tdata-toggle=\"modal\"\n\t\t\t\t\t\t\tdata-target=\"#mkb-modal\"\n\t\t\t\t\t\t\tstyle=\"float: left;\">\n\t\t\t\t<h4>Открыть МКБ10: </h4>\n\t\t\t\t<mat-icon>search</mat-icon>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"col-2\">\n\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t<input type=\"text\" placeholder=\"Код\"\n\t\t\t\t\t\t\t\tmatInput [formControl]=\"controlForDiagnosisCode\"\n\t\t\t\t\t\t\t\tvalue=\"{{loss.diagnosis.code}}\"\n\t\t\t\t\t\t\t\t[matAutocomplete]=\"autoCode\"\n\t\t\t\t\t\t\t\t#myInput\n\t\t\t\t\t\t\t\t(click)=\"myInput.select();\"\n\t\t\t\t\t\t\t\treadonly [readonly]=\"idOfLoss != null\">\t\t\n\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n\t\t\t\t<mat-autocomplete #autoCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n\t\t\t\t\t<mat-option *ngIf=\"showSpinerCode\">\n\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForDiagnosisCode | async\" \n\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t(click)=\"chooseDiagnosis(option);\">\n\t\t\t\t\t\t{{option.code}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"col-4\">\n\t\t\t<mat-form-field style=\"width: 100%;\">\n\t\t\t\t<textarea matInput placeholder=\"Описание\" \n\t\t\t\t\t\t\t\t   readonly\n\t\t\t\t\t\t\t\t   value=\"{{loss.diagnosis.description}}\" \n\t\t\t\t\t\t\t\t   style=\"height: 84px; overflow-y: scroll\"></textarea>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"(loss.diagnosisId != null) && (idOfLoss != null)\">\n\t\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t\t<div class=\"row\">\n\t\t\t<h4>Услуги:</h4>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"table\">\n\t\t\t\t\t<div class=\"thead\">\n\t\t\t\t\t\t<div class=\"row\" style=\"padding-top: 10px;\n\t\t\t\t\t\t\t\t\t\t\t\tpadding-bottom: 10px;\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #e8e8e8;\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 5px;\">\n\t\t\t\t\t\t\t<div class=\"col-1\" style=\"margin: auto; \">\n\t\t\t\t\t\t\t\t<button class=\"addNewBtn\" title=\"Добавить услугу\" \n\t\t\t\t\t\t\t\t                          data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  data-target=\"#add-service-modal\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon icon-add\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\" style=\"margin: auto; padding-left: 20px\">\n\t\t\t\t\t\t\t\t<span>Название</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\" style=\"margin: auto\">\n\t\t\t\t\t\t\t\t<span>Дата услуги</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-3 text-center\" style=\"margin: auto\">\n\t\t\t\t\t\t\t\t<span>Статус согласования</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center\"><span>Общая стоимость</span></div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center\"><span> Сумма возмещения</span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tbody\">\n\t\t\t\t\t\t<mat-expansion-panel hideToggle disabled *ngIf=\"loss.procedures.length == 0\">\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t\t<mat-accordion multi=\"false\">\n                            <tmmed-loss-id-procedure [procedure]=\"service\"\n                                              (onChanged)=\"updateLoss($event)\"\n                                              *ngFor=\"let service of loss.procedures; let i of index;\">\n                            </tmmed-loss-id-procedure>\n\t\t\t\t\t\t</mat-accordion>\n\t\t\t\t\t\t<mat-expansion-panel hideToggle disabled>\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: black\"><b>Суммарно за процедуры:</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: black\"><b>{{loss.amountProcedures}} ₽</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: black\"><b>{{loss.insuranceProcedures}} ₽</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t\t<div class=\"row\">\n\t\t\t<h4>Медикаменты:</h4>\n        </div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"table\">\n\t\t\t\t\t<div class=\"thead\">\n\t\t\t\t\t\t<div class=\"row\" style=\"padding-top: 10px;\n\t\t\t\t\t\t\t\t\t\t\t\tpadding-bottom: 10px;\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #e8e8e8;\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 5px;\">\n\t\t\t\t\t\t\t<div class=\"col-1\" style=\"margin: auto; \">\n\t\t\t\t\t\t\t\t<button class=\"addNewBtn\" title=\"Добавить медикамент\" \n\t\t\t\t\t\t\t\t                          data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  data-target=\"#add-med-modal\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon icon-add\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\" style=\"margin: auto; padding-left: 20px\">\n\t\t\t\t\t\t\t\t<span>Название</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2\" style=\"margin: auto\">\n\t\t\t\t\t\t\t\t<span>Дата медикамента</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-3 text-center\" style=\"margin: auto\">\n\t\t\t\t\t\t\t\t<span>Статус согласования</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center\"><span>Общая стоимость</span></div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center\"><span> Сумма возмещения</span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tbody\">\n\t\t\t\t\t\t<mat-expansion-panel hideToggle disabled *ngIf=\"loss.medicaments.length == 0\">\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span><b>╾</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t\t<mat-accordion multi=\"false\">\n                            <tmmed-loss-id-med [medicament]=\"med\"\n                                              (onChanged)=\"updateLoss($event)\"\n                                              *ngFor=\"let med of loss.medicaments; let i of index;\">\n                            </tmmed-loss-id-med>\n\t\t\t\t\t\t</mat-accordion>\n\t\t\t\t\t\t<mat-expansion-panel hideToggle disabled>\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: black\"><b>Суммарно за медикаменты:</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: black\"><b>{{loss.amountMedicaments}} ₽</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t<span style=\"color: black\"><b>{{loss.insuranceMedicaments}} ₽</b></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t\t<div class=\"row\">\n\t\t\t<h4>Комментарий:</h4>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<textarea matInput\n\t\t\t\t\t\t\t  placeholder=\"Комментарий\"\n\t\t\t\t\t\t\t  disabled [disabled]=\"loss.stateId !== 1 && loss.stateId !== 4\"\n\t\t\t\t\t\t\t  [(ngModel)]=\"loss.note\" \n\t\t\t\t\t\t\t  style=\"height: 84px; overflow-y: auto\"></textarea>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"width: 100%; height: 1px; background-color: #f3f1f1;\"> </div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h4>Статус: </h4>\n\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t<mat-select placeholder=\"Общий статус\"  [(ngModel)]=\"loss.stateId\">\n\t\t\t\t\t\t<mat-option [value]=\"1\" *ngIf=\"loss.stateId === 1\">\n\t\t\t\t\t\t\tНовый\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"2\" *ngIf=\"loss.stateId === 6 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 7 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 2\">\n\t\t\t\t\t\t\tОтказ\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"3\" *ngIf=\"loss.stateId === 8 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 3\">\n\t\t\t\t\t\t\tВыплата возмещена\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"4\" *ngIf=\"loss.stateId === 2 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 9 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 4\">\n\t\t\t\t\t\t\tТребует повторного рассмотрения\n\t\t\t\t\t\t</mat-option>\n                        <mat-option [value]=\"5\" *ngIf=\"loss.stateId === 5\">\n\t\t\t\t\t\t\tПользователь удалил убыток\t\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"6\" *ngIf=\"loss.stateId === 4 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 1 ||\n\t\t\t\t\t\t\t\t\t\t\t\t       loss.stateId === 6\">\n\t\t\t\t\t\t\tТехническая валидация\n\t\t\t\t\t\t</mat-option>\n                        <mat-option [value]=\"7\" *ngIf=\"loss.stateId === 6 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 7\">\n\t\t\t\t\t\t\tУрегулирован\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t<mat-option [value]=\"8\" *ngIf=\"loss.stateId === 7 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 6 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 8\">\n\t\t\t\t\t\t\tСогласован\t\n\t\t\t\t\t\t</mat-option>\n                        <mat-option [value]=\"9\" *ngIf=\"loss.stateId === 3 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t   loss.stateId === 9\">\n\t\t\t\t\t\t\tОплачен\t\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"col-5\"></div>\n\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t<h4>Суммарная стоимость: <br> {{loss.amount}} ₽</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t<h4>Сумма возмещения: <br> {{loss.insurance}} ₽</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n\t<div class=\"row\" style=\"padding-bottom: 100px;\">\n        <div class=\"col-12\">\n            <button class=\"btn btn-for-search\" style=\"margin-top: 30px; margin-bottom: 0px;\"\n                    *ngIf=\"loss.diagnosisId != null && idOfLoss != null\">\n                    <h4 style=\"margin-top: 0px;\">Произвести расчет</h4> \n            </button>\n        </div>\n        <div class=\"col-12\">\n            <button class=\"btn btn-for-save\" style=\"margin-top: 10px;\"\n                    [routerLink]=\"['/losses']\" \n                    *ngIf=\"loss.diagnosisId != null && loss.clinic.id != null && idOfLoss != null && (loss.stateId === 1 || loss.stateId === 6)\">\n                    <h4 style=\"margin-top: 0px;\">Сохранить изменения</h4>\n            </button>\n        </div>\n        <div class=\"col-12\">\n            <button class=\"btn btn-for-search\"\tstyle=\"margin-top: 30px;\"\n                    (click)=\"sendThisNewLoss();\n                            controlForDiagnosis.setValue({ name: null });\n                            controlForDiagnosisCode.setValue({ code: null });\n                            loss.diagnosis.description = '';\n                            controlForDiagnosisInModal.setValue({ name: null });\n                            controlForDiagnosisCodeInModal.setValue({ code: null });\n                            loss.diagnosisId =  null;\"\n                    *ngIf=\"loss.diagnosisId != null && loss.clinic.id != null && idOfLoss == null\">\n                <h4 style=\"margin-top: 0px;\">Создать новый убыток</h4>\n            </button>\n            <button class=\"btn btn-for-save\" *ngIf=\"loss.diagnosisId == null || loss.clinic.id == null\">\n                <h4 style=\"margin-top: 0px;\">Необходимо выбрать диагноз и клинику</h4>\n            </button>\n        </div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"mkb-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">МКБ10</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding-top: 10px;\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-7\">\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Название\"\n\t\t\t\t\t\t\t\t\t\tmatInput [formControl]=\"controlForDiagnosisInModal\"\n\t\t\t\t\t\t\t\t\t\tvalue=\"{{loss.diagnosis.name}}\"\n\t\t\t\t\t\t\t\t\t\t[matAutocomplete]=\"autoModal\"\n\t\t\t\t\t\t\t\t\t\treadonly [readonly]=\"idOfLoss != null\">\n\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n\t\t\t\t\t\t\t<mat-autocomplete #autoModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerDiagnosis\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForDiagnosisModal | async\" \n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"chooseDiagnosis(option);\"\n\t\t\t\t\t\t\t\t\t\t\tdata-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t\t\taria-label=\"Close\">\n\t\t\t\t\t\t\t\t\t( {{option.code}} ) - {{option.name}}\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t<mat-form-field class=\"max\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Код\"\n\t\t\t            \t\t\t\t\tmatInput [formControl]=\"controlForDiagnosisCodeInModal\"\n\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{loss.diagnosis.code}}\"\n\t\t\t\t\t\t\t\t\t\t\t[matAutocomplete]=\"autoCodeInModal\"\n\t\t\t\t\t\t\t\t\t\t\t#myInput\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"myInput.select();\"\n\t\t\t\t\t\t\t\t\t\t\treadonly [readonly]=\"idOfLoss != null\">\t\t\n\t\t\t\t\t\t\t<i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n\t\t\t\t\t\t\t<mat-autocomplete #autoCodeInModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n\t\t\t\t\t\t\t\t<mat-option *ngIf=\"showSpinerCode\">\n\t\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptionsForDiagnosisCodeInModal | async\" \n\t\t\t\t\t\t\t\t\t\t\t[value]=\"option\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"chooseDiagnosis(option);\">\n\t\t\t\t\t\t\t\t\t{{option.code}}\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t</mat-form-field>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <tmmed-loss-id-mkb-modal (onChanged)=\"chooseDiagnosis($event)\">\n                    </tmmed-loss-id-mkb-modal>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<tmmed-loss-id-med-add (onChanged)=\"updateLoss($event)\"></tmmed-loss-id-med-add>\n\n<tmmed-loss-id-procedure-add (onChanged)=\"updateLoss($event)\"></tmmed-loss-id-procedure-add>\n\n<div class=\"modal fade\" id=\"user-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Убытки по застрахованному: {{loss.assured.lastName}} \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   {{loss.assured.firstName}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   {{loss.assured.middleName}} </h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding-top: 10px; overflow-y: auto; max-height: 60vh;\">\n\t\t\t\t<div class=\"table\">\n\t\t\t\t\t <div class=\"thead\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-5\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<span>№</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<span>Дата</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<span>Диагноз</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-5\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-4 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<span>Суммарная стоимость </span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<span>Стоимость услуг</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-5 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<span>Стоимость медикаментов</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-2 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t<span>Статус</span>\n                            </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"tbody\">\n\t\t\t\t\t\t<div *ngFor=\"let loss of lossListForUser; let i = index\">\n\t\t\t\t\t\t\t<a class=\"row\" style=\"padding: 20px 0px; cursor: pointer\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"http:/losses/{{loss.id}}\">\n\t\t\t\t\t\t\t\t<div class=\"col-5\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{loss.id}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t\t<span> {{loss.date || 'Не указана'}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-6\" style=\"margin: auto; \">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{loss.diagnosisName || 'Не указан'}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-5\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-4 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{loss.amountProcedures+loss.amountMedicaments || 0}} ₽</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{loss.amountProcedures || 0}} ₽</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-5 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{loss.amountMedicaments || 0}} ₽</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-2 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t<span>{{loss.stateName}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n                </div>\n            </div>\n\t\t\t<div class=\"modal-footer\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n\t\t\t\t<a  target=\"_blank\" rel=\"noopener noreferrer\"\n\t\t\t\t\t\t\t\t\thref=\"http:/losses/new/{{loss.assured.id}}\"\n\t\t\t\t\t\t\t\t\tstyle=\"background-color: #7b8a9a;\n\t\t\t\t\t\t\t\t\t       padding: 5px;\n\t\t\t\t\t\t\t\t\t\t   border-radius: 5px;\n\t\t\t\t\t\t\t\t\t\t   color: #fff;\n\t\t\t\t\t\t\t\t\t\t   font-weight: 600;\n\t\t\t\t\t\t\t\t\t\t   font-size: 12px;\">\n\t\t\t\t\tЗавести новый убыток\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loss/loss-list/loss-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loss/loss-list/loss-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n    <div class=\"col-8\">\n        <h2>Убытки</h2>\n\t\t<span class=\"subheader\">{{amountOfDamages}} {{typeOfAmountToShow}}</span>\n\t</div>\n    <div class=\"col-3\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownMenuLink\" ngbDropdownToggle>\n                Действия\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<a class=\"dropdown-item\" style=\"color: #fe4902;\" ngbDropdownItem\n\t\t\t\t                                                 data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t                         data-target=\"#delete-modal\">Удалить</a>\n            </div>\n        </div>\n    </div>\n</div>\n<tmmed-filters (onChanged)=\"setFilters($event)\">\n</tmmed-filters>\n<div class=\"table\">\n    <div class=\"thead\">\n        <div class=\"row\">\n\t\t\t<div class=\"col-1\">\n\t\t\t\t<div class=\"row\" style=\"border: none\">\n\t\t\t\t\t<div class=\"col-5\" style=\"margin: auto\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"checkbox\" id=\"checkAll\" (change)=\"checkAll()\">\n\t\t\t\t\t\t<label for=\"checkAll\" style=\"float: left\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-7 text-cetner\" style=\"margin: auto\">\n\t\t\t\t\t\t<span>№</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-1\" style=\"margin: auto\">\n\t\t\t\t<span>Дата создания</span>\n\t\t\t</div>\n            <div class=\"col-2\" style=\"text-align: center; margin: auto\">\n                <span>ФИО</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\" style=\"text-align: center; margin: auto\">\n                <span>Номера договора</span>\n\t\t\t</div>\n            <div class=\"col-2\" style=\"margin: auto\">\n                <span>Диагноз</span>\n\t\t\t</div>\n            <div class=\"col-2\" style=\"margin: auto\">\n                <span>Сумма</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\" style=\"margin: auto\">\n                <span>Статус</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"tbody\">\n\t\t<div *ngFor=\"let damage of damages; let i = index\">\n\t\t\t<a [ngClass]=\"{row:true, selected:damage.selected}\">\n\t\t\t\t<div class=\"col-1\"  style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"row\" style=\"border: none\">\n\t\t\t\t\t\t<div class=\"col-5 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" \n\t\t\t\t\t\t\t\tclass=\"checkbox\" \n\t\t\t\t\t\t\t\tid=\"{{damage.id}}\" \n\t\t\t\t\t\t\t\t[checked]=\"damage.selected\" \n\t\t\t\t\t\t\t\t(change)=\"damage.selected = !damage.selected; idToDelete = damage.id\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<label for=\"{{ damage.id}}\"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-7 text-center\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t<span>{{damage.id}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" style=\"border: none\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-1\" [routerLink]=\"['/losses', damage.id]\" style=\"margin: auto;\">\n\t\t\t\t\t<span>{{damage.date}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" [routerLink]=\"['/losses', damage.id]\" style=\"margin: auto; text-align: center;\">\n\t\t\t\t\t<span>{{damage.assured.lastName}} {{damage.assured.firstName[0]}}. {{damage.assured.middleName[0]}}.</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" [routerLink]=\"['/losses', damage.id]\" style=\"margin: auto; text-align: center;\">\n\t\t\t\t\t<span>{{damage.assured.programNumber}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" [routerLink]=\"['/losses', damage.id]\" style=\"margin: auto; line-height: 15px;\">\n\t\t\t\t\t<span>{{damage.diagnosisName}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" [routerLink]=\"['/losses', damage.id]\" style=\"margin: auto;\">\n\t\t\t\t\t<span style=\"display: block; padding: 0px; line-height: 15px;\">Суммарно: {{damage.amountProcedures+damage.amountMedicaments || 0}}</span>\n\t\t\t\t\t<span style=\"display: block; padding: 0px; line-height: 15px;\">Услуги: {{damage.amountProcedures || 0}}</span>\n\t\t\t\t\t<span style=\"display: block; padding: 0px; line-height: 15px;\">Медикаменты: {{damage.amountMedicaments || 0}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t<mat-form-field style=\"width: 100%;\">\n\t\t\t\t\t\t<mat-select placeholder=\"Общий статус\"  [(value)]=\"damage.stateId\">\n\t\t\t\t\t\t\t<mat-option [value]=\"1\" *ngIf=\"damage.stateId === 1\">\n\t\t\t\t\t\t\t\tНовый\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"2\" *ngIf=\"damage.stateId === 6 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 7 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 2\">\n\t\t\t\t\t\t\t\tОтказ\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"3\" *ngIf=\"damage.stateId === 8 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 3\">\n\t\t\t\t\t\t\t\tВыплата возмещена\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"4\" *ngIf=\"damage.stateId === 2 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 9 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 4\">\n\t\t\t\t\t\t\t\tТребует повторного рассмотрения\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"5\" *ngIf=\"damage.stateId === 5\">\n\t\t\t\t\t\t\t\tПользователь удалил убыток\t\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"6\" *ngIf=\"damage.stateId === 4 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 1 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 6\">\n\t\t\t\t\t\t\t\tТехническая валидация\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"7\" *ngIf=\"damage.stateId === 6 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 7\">\n\t\t\t\t\t\t\t\tУрегулирован\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"8\" *ngIf=\"damage.stateId === 7 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 6 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 8\">\n\t\t\t\t\t\t\t\tСогласован\t\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t<mat-option [value]=\"9\" *ngIf=\"damage.stateId === 3 ||\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdamage.stateId === 9\">\n\t\t\t\t\t\t\t\tОплачен\t\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\t\t\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Удаление</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\" >\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tВы действительно хотите удалить выбранные убытки?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  (click)=\"deleteLoss()\">Удалить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-for-user/page-for-user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-for-user/page-for-user.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-for-user works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product-id/product-id.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product-id/product-id.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\" style=\"margin-top: 20px;\">\r\n                <h2 *ngIf=\"readonly\">{{product.document || 'Название продукта отсутсвует'}}</h2>\r\n                <mat-form-field class=\"max\" *ngIf=\"!readonly\" floatLabel=\"always\">\r\n                    <input matInput placeholder=\"Название продукта\"\r\n                                    [(ngModel)]=\"product.document\"\r\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\t\t\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-3\" style=\"margin-top: 10px;\">\r\n                <a class=\"btn btn-change\" target=\"_blank\"\r\n                                          rel=\"noopener noreferrer\"\r\n                                          href=\"http:/users/product/{{product.id}}\"\r\n                                          *ngIf=\"idOfProdact[0] !== 'n'\">\r\n                    <h4>Список застрахованных</h4>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-3\" style=\"margin-top: 10px;\">\r\n                <button class=\"btn btn-save\" (click)=\"changeProduct();\" *ngIf=\"!readonly\">\r\n                    <h4>Сохранить</h4>\r\n                </button>\r\n                <button class=\"btn btn-change\" (click)=\"readonly = false;\" *ngIf=\"readonly\">\r\n                    <h4>редактировать</h4>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <h4 style=\"margin: 20px 0px 0px 0px\">Описание</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-7\">\r\n                <mat-form-field class=\"max\">\r\n                    <input matInput placeholder=\"Название документа\"\r\n                                    [readonly]=\"readonly\"\r\n                                    [(ngModel)]=\"product.name\"\r\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\r\n                    <mat-hint align=\"start\">*Обязательное поле</mat-hint>\t\t\t\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <mat-form-field class=\"max\" floatLabel=\"always\">\r\n                    <input matInput [matDatepicker]=\"programStartDate\" \r\n                                    placeholder=\"Дата начала действия\"\r\n                                    [(ngModel)]=\"product.dateStart\"\r\n                                    [readonly]=\"readonly\"\r\n                                    (click)=\"readonly ? 0 : programStartDate.open();\"\r\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\r\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"programStartDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\r\n\t\t\t\t\t<mat-datepicker #programStartDate></mat-datepicker>\t\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <mat-form-field class=\"max\" floatLabel=\"always\">\r\n                    <input matInput [matDatepicker]=\"programEndDate\" \r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Дата окончания действия\"\r\n                                    [(ngModel)]=\"product.dateEnd\"\r\n                                    [readonly]=\"readonly\"\r\n                                    (click)=\"readonly ? 0 : programEndDate.open();\"\r\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\r\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"programEndDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\r\n\t\t\t\t\t<mat-datepicker #programEndDate></mat-datepicker>\t\t\t\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-1\">\r\n                <mat-form-field class=\"max\">\r\n                    <input matInput placeholder=\"Версия\"\r\n                                    [readonly]=\"readonly\"\r\n                                    [(ngModel)]=\"product.version\"\r\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\t\t\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product-list/product-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product-list/product-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n    <div class=\"col-8\">\n        <h2>Продукты </h2>\n\t\t<span class=\"subheader\">( {{nameOfCompany}} ) | {{amountOfProducts}} {{typeOfLength}}</span>\n\t</div>\n    <div class=\"col-3\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownMenuLink\" ngbDropdownToggle>\n                Действия\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n\t\t\t\t<a class=\"dropdown-item\" ngbDropdownItem [routerLink]=\"['./new']\">Добавить</a>\n                <a class=\"dropdown-item\" ngbDropdownItem>Загрузить список</a>\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<a class=\"dropdown-item\" style=\"color: #fe4902;\"\n                                         ngbDropdownItem\n\t\t\t\t\t\t\t\t\t\t data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t data-target=\"#delete-modal\">Удалить</a>\n            </div>\n        </div>\n    </div>\n</div>\n<tmmed-filters (onChanged)=\"setFilters($event)\">\n</tmmed-filters>\n<div class=\"col-12\">\n    <div class=\"table\">\n        <div class=\"thead\">\n            <div class=\"row\">\n                <div class=\"col-1\" style=\"margin: auto;\">\n                    <input type=\"checkbox\" class=\"checkbox\" id=\"checkAll\" (click)=\"changeSelection();\">\n                    <label for=\"checkAll\" style=\"float: right\"></label>\n                </div>\n                <div class=\"col-4\" style=\"float: left; margin: auto;\">\n                    <span>Наименование документа</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Версия документа</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Дата начала действия</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Дата окончания</span>\n                </div>\n                <div class=\"col-1\"> </div>\n            </div>\n        </div>\n        <div class=\"tbody\" *ngIf=\"showButtonForNew\">\n            <button type=\"button\" class=\"btn btn-change\" \n                                  title=\"Добавить продукт\"\n                                  [routerLink]=\"['./new']\"\n                                  style=\"float: left\">\n                <h4 style=\"margin-right: 10px;\">\n                    У данной компании отсутствуют продукты, Вы можете добавить первый\n                </h4>\n                <i class=\"icon icon-reports\"></i>\n            </button>\n        </div>\n        <div class=\"tbody\" *ngIf=\"!showButtonForNew\">\n            <div *ngFor=\"let product of productsList;\">\n                <a [ngClass]=\"{row:true, selected:product.selected}\">\n                    <div class=\"col-1 spanForTable\">\n                        <input type=\"checkbox\" \n                            class=\"checkbox\" \n                            id=\"{{product.id}}\" \n                            [checked]=\"product.selected\" \n                            (change)=\"product.selected = !product.selected;\"\n                            >\n                        <label for=\"{{product.id}}\" style=\"float: right\"></label>\n                    </div>\n                    <div class=\"col-4 spanForTable\" [routerLink]=\"['./', product.id, 'programs']\">\n                        <span>{{product.name || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', product.id, 'programs']\">\n                        <span>{{product.version || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', product.id, 'programs']\">\n                        <span>{{product.dateStart || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', product.id, 'programs']\">\n                        <span>{{product.dateEnd || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-1 spanForTable\">\n                        <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t\t      title=\"Информация о продукте\"\n                                              [routerLink]=\"['./', product.id]\">\n                            <i class=\"icon icon-inventorisation\"></i>\n                        </button>\n                    </div>\n                </a>\n            </div>\t\t\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Удаление</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\" >\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tУдалить выбранные продукты?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-change\"\n                                      data-dismiss=\"modal\"\n                                      style=\"margin-top: 0px;\">Отмена</button>\n                <button type=\"button\" class=\"btn btn-save\"\n                                      data-dismiss=\"modal\"\n                                      (click)=\"deleteCompany();\"\n                                      style=\"margin-top: 0px;\">Удалить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program-id/program-id.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program-id/program-id.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"row\">\n            <div class=\"col-6\" style=\"margin-top: 20px;\">\n                <h2 *ngIf=\"idOfProgram[0] != 'n'\">{{program.name}}</h2>\n                <h2 *ngIf=\"idOfProgram[0] == 'n'\">Новая программа</h2>\n            </div>\n            <div class=\"col-3\" style=\"margin-top: 10px;\">\n                <a class=\"btn btn-change\" target=\"_blank\"\n                                          rel=\"noopener noreferrer\"\n                                          href=\"http:/users/program/{{program.id}}\"\n                                          *ngIf=\"idOfProgram[0] !== 'n'\">\n                    <h4>Список застрахованных</h4>\n                </a>\n            </div>\n            <div class=\"col-3\" style=\"margin-top: 10px;\">\n                <button class=\"btn btn-save\" (click)=\"changeProgram();\" *ngIf=\"!readonly\">\n                    <h4>Сохранить</h4>\n                </button>\n                <button class=\"btn btn-change\" (click)=\"readonly = false;\" *ngIf=\"readonly\">\n                    <h4>редактировать</h4>\n                </button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h4 style=\"margin: 20px 0px 0px 0px\">Описание</h4>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-5\">\n                <mat-form-field class=\"max\">\n                    <input matInput placeholder=\"Название документа\"\n                                    [readonly]=\"readonly\"\n                                    [(ngModel)]=\"program.name\"\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                    <mat-hint align=\"start\">*Обязательное поле</mat-hint>\n                </mat-form-field>\n            </div>\n            <div class=\"col-1\">\n                <mat-form-field class=\"max\">\n                    <input matInput placeholder=\"Код\"\n                                    [readonly]=\"readonly\"\n                                    [(ngModel)]=\"program.code\"\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\t\t\n                </mat-form-field>\n            </div>\n            <div class=\"col-2\">\n                <mat-form-field class=\"max\" floatLabel=\"always\">\n                    <input matInput [matDatepicker]=\"programStartDate\" \n                                    placeholder=\"Дата начала действия\"\n                                    [readonly]=\"readonly\"\n                                    (click)=\"readonly ? 0 : programStartDate.open();\"\n                                    [(ngModel)]=\"program.dateStart\"\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"programStartDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #programStartDate></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-2\">\n                <mat-form-field class=\"max\" floatLabel=\"always\">\n                    <input matInput [matDatepicker]=\"programEndDate\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Дата окончания действия\"\n                                    [readonly]=\"readonly\"\n                                    (click)=\"readonly ? 0 : programEndDate.open();\"\n                                    [(ngModel)]=\"program.dateEnd\"\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"programEndDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #programEndDate></mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-2\">\n                <mat-form-field class=\"max\">\n                    <input matInput placeholder=\"Покрытие программы\"\n                                    readonly\n                                    [(ngModel)]=\"program.type\"\n                                    [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h4 style=\"margin: 20px 0px 0px 0px\">Лимиты</h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <mat-form-field class=\"max\">\n                            <input matInput placeholder=\"Лимит за раз\"\n                                            [readonly]=\"readonly\"\n                                            [(ngModel)]=\"program.onceLimit.sum\"\n                                            class=\"example-right-align\"\n                                            [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                                <span matSuffix style=\"color: black\">&nbsp;₽</span>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-4\">\n                        <mat-form-field class=\"max\">\n                            <input matInput placeholder=\"Лимит за месяц\"\n                                            [readonly]=\"readonly\"\n                                            [(ngModel)]=\"program.monthLimit.sum\"\n                                            class=\"example-right-align\"\n                                            [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                                <span matSuffix style=\"color: black\">&nbsp;₽</span>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-4\">\n                        <mat-form-field class=\"max\">\n                            <input matInput placeholder=\"Лимит за год\"\n                                            [readonly]=\"readonly\"\n                                            [(ngModel)]=\"program.yearLimit.sum\"\n                                            class=\"example-right-align\"\n                                            [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                                <span matSuffix style=\"color: black\">&nbsp;₽</span>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <h4 style=\"margin: 20px 0px 0px 0px\">Франшиза</h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                     <div class=\"col-4\">\n                        <mat-form-field class=\"max\">\n                            <input matInput placeholder=\"Франшиза в процентах\"\n                                            [readonly]=\"readonly\"\n                                            [(ngModel)]=\"program.onceFranchise.procent\"\n                                            class=\"example-right-align\"\n                                            [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                                <span matSuffix style=\"color: black\">&nbsp;%</span>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-4\">\n                        <mat-form-field class=\"max\">\n                            <input matInput placeholder=\"Франшиза за случай\"\n                                            [readonly]=\"readonly\"\n                                            [(ngModel)]=\"program.onceFranchise.maxSum\"\n                                            class=\"example-right-align\"\n                                            [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                                <span matSuffix style=\"color: black\">&nbsp;₽</span>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-4\">\n                        <mat-form-field class=\"max\">\n                            <input matInput placeholder=\"Франшиза за год\"\n                                            [readonly]=\"readonly\"\n                                            [(ngModel)]=\"program.yearFranchise.maxSum\"\n                                            class=\"example-right-align\"\n                                            [ngClass]=\"{ colorForDisabled: readonly, colorForActive: !readonly }\">\n                                <span matSuffix style=\"color: black\">&nbsp;₽</span>\n                        </mat-form-field>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program-list/program-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program-list/program-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n    <div class=\"col-8\">\n        <h2>Программы </h2>\n\t\t<span class=\"subheader\">( {{nameOfProduct}} ) | {{amountOfPrograms}} {{typeOfLength}}</span>\n\t</div>\n    <div class=\"col-3\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownMenuLink\" ngbDropdownToggle>\n                Действия\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n\t\t\t\t<a class=\"dropdown-item\" ngbDropdownItem [routerLink]=\"['./new']\">Добавить</a>\n                <a class=\"dropdown-item\" ngbDropdownItem>Загрузить список</a>\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" style=\"color: #fe4902;\"\n                                         ngbDropdownItem\n\t\t\t\t\t\t\t\t\t\t data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t data-target=\"#delete-modal\">Удалить</a>\n            </div>\n        </div>\n    </div>\n</div>\n<tmmed-filters (onChanged)=\"setFilters($event)\">\n</tmmed-filters>\n<div class=\"col-12\">\n    <div class=\"table\">\n        <div class=\"thead\">\n            <div class=\"row\">\n                <div class=\"col-1 spanForTable\">\n                    <input type=\"checkbox\" class=\"checkbox\" id=\"checkAll\" (click)=\"changeAll()\">\n                    <label for=\"checkAll\" style=\"float: right\"></label>\n                </div>\n                <div class=\"col-3 spanForTable\">\n                    <span>Наименование программы</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Код программы</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Дата начала действия</span>\n                </div>\n                <div class=\"col-2\">\n                    <span>Дата окончания действия</span>\n                </div>\n                <div class=\"col-1\">\n                    <span>Тип покрытия</span>\n                </div>\n                <div class=\"col-1\"> </div>\n            </div>\n        </div>\n        <div class=\"tbody\" *ngIf=\"showButton\">\n            <button type=\"button\" class=\"btn btn-change\" \n                                  title=\"Добавить программу\"\n                                  [routerLink]=\"['./new']\"\n                                  style=\"float: left\">\n                <h4 style=\"margin-right: 10px;\">\n                    У данного продукта отсутствуют программы, Вы можете добавить первую\n                </h4>\n                <i class=\"icon icon-reports\"></i>\n            </button>\n        </div>\n        <div class=\"tbody\">\n            <div *ngFor=\"let program of programsList;\">\n                <a [ngClass]=\"{row:true, selected:program.selected}\">\n                    <div class=\"col-1 spanForTable\">\n                        <input type=\"checkbox\" \n                            class=\"checkbox\" \n                            id=\"{{program.id}}\" \n                            [checked]=\"program.selected\" \n                            (change)=\"program.selected = !program.selected;\"\n                            >\n                        <label for=\"{{program.id}}\" style=\"float: right\"></label>\n                    </div>\n                    <div class=\"col-3 spanForTable\" [routerLink]=\"['./', program.id, 'coverages']\">\n                        <span>{{program.name || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', program.id, 'coverages']\">\n                        <span>{{program.code || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', program.id, 'coverages']\">\n                        <span>{{program.dateStart || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-2 spanForTable\" [routerLink]=\"['./', program.id, 'coverages']\">\n                        <span>{{program.dateEnd || 'не указано'}}</span>\n                    </div>\n                    <div class=\"col-1 spanForTable\" [routerLink]=\"['./', program.id, 'coverages']\">\n                        <span>Выплата</span>\n                    </div>\n                    <div class=\"col-1 spanForTable\">\n                        <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t\t      title=\"Информация о программе\"\n                                              [routerLink]=\"['./', program.id]\">\n                            <i class=\"icon icon-inventorisation\"></i>\n                        </button>\n                    </div>\n                </a>\n            </div>\t\t\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Удаление</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\" >\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tУдалить выбранные программы?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-change\"\n                                      data-dismiss=\"modal\"\n                                      style=\"margin-top: 0px;\">Отмена</button>\n                <button type=\"button\" class=\"btn btn-save\"\n                                      data-dismiss=\"modal\"\n                                      (click)=\"deleteSelected();\"\n                                      style=\"margin-top: 0px;\">Удалить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"box-shadow: none; border: 1px #e8e8e8 solid; margin-bottom: 5px; border-radius: 5px;\">\n    <div class=\"row\" style=\"margin-bottom: 5px;\">\n        <div class=\"col-8\" style=\"margin: 20px 0px\">\n            <span><b>Добавление нового медикамента</b></span>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto\">\n            <mat-slide-toggle [checked]=\"med.isIncluded === true\">\n            </mat-slide-toggle>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto\">\n            <mat-slide-toggle [checked]=\"med.isAgreementNeeded === true\">\n            </mat-slide-toggle>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4\">\n            <mat-form-field class=\"max\">\n                <input type=\"text\" placeholder=\"Название медикамента\"\n                                    matInput [formControl]=\"controlForMeds\"\n                                    [matAutocomplete]=\"autoMedModal\"\n                                    (keyup)=\"med.name = controlForMeds.value;\">\n                <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                <mat-autocomplete #autoMedModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                    <mat-option *ngIf=\"showSpinerMed\">\n                        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                    </mat-option>\n                    <mat-option *ngFor=\"let option of filteredOptionsForMeds | async\" \n                                [value]=\"option\"\n                                (click)=\"chooseMedFromList(option);\">\n                        ( {{option.code}} ) - {{option.name}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n        <div class=\"col-2\">\n            <mat-form-field class=\"max\">\n                <input type=\"text\" placeholder=\"Код медикамента\"\n                                    matInput [formControl]=\"controlForMedsCode\"\n                                    [matAutocomplete]=\"autoMedModalCode\"\n                                    (keyup)=\"med.code = controlForMedsCode.value\">\n                <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                <mat-autocomplete #autoMedModalCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n                    <mat-option *ngIf=\"showSpinerMed\">\n                        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                    </mat-option>\n                    <mat-option *ngFor=\"let option of filteredOptionsForMedsCode | async\" \n                                [value]=\"option\"\n                                (click)=\"chooseMedFromListCode(option);\">\n                        {{option.code}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n        <div class=\"col-2\">\n            <mat-form-field class=\"max\">\n                <input type=\"text\" placeholder=\"Группа медикамента\"\n                                    matInput [formControl]=\"controlForMedGroup\"\n                                    [matAutocomplete]=\"autoMedModalGroup\">\n                <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                <mat-autocomplete #autoMedModalGroup=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                    <mat-option *ngIf=\"showSpinerMedGroup\">\n                        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                    </mat-option>\n                    <mat-option *ngFor=\"let option of filteredOptionsForMedGroup | async\" \n                                [value]=\"option\"\n                                (click)=\"med.groupName = option.name;\n                                         med.groupId = option.id;\">\n                        {{option.name}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n        <div class=\"col-4\">\n            <mat-form-field class=\"max\">\n                <input matInput placeholder=\"Лекарственная форма\"\n                                [(ngModel)]=\"med.medicamentForm\">\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Франшиза</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Процент за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.procent\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;%</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"addNewMedicament()\">Сохранить\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-save\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"canceleAddNewMedicament()\">Удалить\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"col-7\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Лимиты</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за месяц\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за год\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за месяц\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за год\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-med/setting-tree-med.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/setting-tree-med/setting-tree-med.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel hideToggle style=\"box-shadow: none;\n                                       border: 1px #e8e8e8 solid;\n                                       margin-bottom: 5px;\">\n    <mat-expansion-panel-header [@.disabled]=\"true\" style=\"padding-bottom: 5px;\">\n        <div class=\"row\" style=\"width: 100%\"\n                         (click)=\"makeDefault();\">\n            <div class=\"col-1\" style=\"background-color: rgba(0, 0, 0, 0); \n                                      margin: auto;\n                                      margin-left: 0px;\n                                      margin-right: 0px;\">\n            <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                  title=\"Удалить\"\n                                  style=\"display: inline; padding: 0px;\"\n                                  (click)=\"$event.stopPropagation(); makeToAskToDelete();\">\n                <i class=\"icon icon-delete\"></i>\n            </button>\n        </div>\n            <div class=\"col-3\" style=\"margin: 20px 0px\">\n                <span>{{med.name}}</span>\n            </div>\n            <div class=\"col-2\" style=\"margin: auto\">\n                <span>{{med.code}}</span>\n            </div>\n            <div class=\"col-2\" style=\"margin: auto\">\n                <span>{{med.group}}</span>\n            </div>\n            <div class=\"col-2 text-center\" style=\"margin: auto\">\n                <mat-slide-toggle [checked]=\"med.isIncluded === true\"\n                                  [disabled]=\"med.readonly\"\n                                  (click)=\"$event.stopPropagation();\">\n                </mat-slide-toggle>\n            </div>\n            <div class=\"col-2 text-center\" style=\"margin: auto\">\n                <mat-slide-toggle [checked]=\"med.isAgreementNeeded === true\"\n                                  [disabled]=\"med.readonly\"\n                                  (click)=\"$event.stopPropagation();\">\n                </mat-slide-toggle>\n            </div>\n        </div>\n    </mat-expansion-panel-header>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Франшиза</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Процент за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.procent\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;%</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"med.readonly && !med.makeToDelete\">\n                <div class=\"12\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"makeToChange();\">Внести изменения\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"!med.readonly\">\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"makeDefault();\">Сохранить\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"Отменить\"\n                                          class=\"btn btn-save\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"   \n                                          (click)=\"makeDefault();\">Отменить изменения\n                    </button>\n                </div>\n            </div>\n            \n            <div class=\"row\" *ngIf=\"med.makeToDelete\">\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"makeDefault();\">Удалить\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"Отменить\"\n                                          class=\"btn btn-save\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"   \n                                          (click)=\"makeDefault();\">Отменить удаление\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"col-7\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Лимиты</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за месяц\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за год\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за случай\"\n                                        [(ngModel)]=\"med.onceFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за месяц\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за год\"\n                                        [(ngModel)]=\"med.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"med.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n\n    </div>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"box-shadow: none; border: 1px #e8e8e8 solid; margin-bottom: 5px; border-radius: 5px;\">\n    <div class=\"row\" style=\"margin-bottom: 5px;\">\n        <div class=\"col-8\" style=\"margin: 20px 0px\">\n            <span><b>Добавление новой процедуры</b></span>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto\">\n            <mat-slide-toggle [checked]=\"service.isIncluded === true\">\n            </mat-slide-toggle>\n        </div>\n        <div class=\"col-2 text-center\" style=\"margin: auto\">\n            <mat-slide-toggle [checked]=\"service.isAgreementNeeded === true\">\n            </mat-slide-toggle>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-8\">\n            <mat-form-field class=\"max\">\n                <input type=\"text\" placeholder=\"Название услуги\"\n                                    matInput [formControl]=\"controlForService\"\n                                    [matAutocomplete]=\"autoServiceModal\"\n                                    (keyup)=\"service.name = controlForService.value;\">\n                <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                <mat-autocomplete #autoServiceModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                    <mat-option *ngIf=\"showSpinerService\">\n                        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                    </mat-option>\n                    <mat-option *ngFor=\"let option of filteredOptionsForService | async\" \n                                [value]=\"option\"\n                                (click)=\"chooseServiceFromList(option);\">\n                        ( {{option.code}} ) - {{option.name}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n        <div class=\"col-2\">\n            <mat-form-field class=\"max\">\n                <input type=\"text\" placeholder=\"Код услуги\"\n                                    matInput [formControl]=\"controlForServiceCode\"\n                                    [matAutocomplete]=\"autoServiceModalCode\"\n                                    (keyup)=\"service.code = controlForServiceCode.value;\">\n                <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                <mat-autocomplete #autoServiceModalCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n                    <mat-option *ngIf=\"showSpinerService\">\n                        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                    </mat-option>\n                    <mat-option *ngFor=\"let option of filteredOptionsForServiceCode | async\" \n                                [value]=\"option\"\n                                (click)=\"chooseServiceFromListCode(option);\">\n                        ( {{option.code}} ) - {{option.name}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n        <div class=\"col-2\">\n            <mat-form-field class=\"max\">\n                <input type=\"text\" placeholder=\"Группа услуги\"\n                                   matInput [formControl]=\"controlForServiceGroup\"\n                                   [matAutocomplete]=\"autoServiceModalGroup\">\n                <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                <mat-autocomplete #autoServiceModalGroup=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                    <mat-option *ngIf=\"showSpinerServiceGroup\">\n                        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                    </mat-option>\n                    <mat-option *ngFor=\"let option of filteredOptionsForServiceGroup | async\" \n                                [value]=\"option\"\n                                (click)=\"service.groupName = option.name; \n                                            service.groupId = option.id;\">\n                        {{option.name}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Франшиза</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Процент за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.procent\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"addNewService()\">Сохранить\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-save\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"canceleAddNewService()\">Удалить\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"col-7\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Лимиты</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за месяц\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за год\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за месяц\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за год\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel hideToggle style=\"box-shadow: none;\n                                       border: 1px #e8e8e8 solid;\n                                       margin-bottom: 5px;\">\n    <mat-expansion-panel-header [@.disabled]=\"true\" style=\"padding-bottom: 5px;\">\n        <div class=\"row max\"\n                         (click)=\"makeDefault();\">\n            <div class=\"col-1\" style=\"background-color: rgba(0, 0, 0, 0); \n                                      margin: auto;\n                                      margin-left: 0px;\n                                      margin-right: 0px;\">\n            <button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n                                  title=\"Удалить\"\n                                  style=\"display: inline; padding: 0px;\"\n                                  (click)=\"$event.stopPropagation();\n                                           makeToAskToDelete();\">\n                <i class=\"icon icon-delete\"></i>\n            </button>\n        </div>\n            <div class=\"col-3\" style=\"margin: 20px 0px\">\n                <span>{{service.name}}</span>\n            </div>\n            <div class=\"col-2\" style=\"margin: auto\">\n                <span>{{service.code}}</span>\n            </div>\n            <div class=\"col-2\" style=\"margin: auto\">\n                <span>{{service.group}}</span>\n            </div>\n            <div class=\"col-2 text-center\" style=\"margin: auto\">\n                <mat-slide-toggle [checked]=\"service.isIncluded === true\"\n                                  [disabled]=\"service.readonly\"\n                                  (click)=\"$event.stopPropagation();\">\n                </mat-slide-toggle>\n            </div>\n            <div class=\"col-2 text-center\" style=\"margin: auto\">\n                <mat-slide-toggle [checked]=\"service.isAgreementNeeded === true\"\n                                  [disabled]=\"service.readonly\"\n                                  (click)=\"$event.stopPropagation();\">\n                </mat-slide-toggle>\n            </div>\n        </div>\n    </mat-expansion-panel-header>\n    <div class=\"row\">\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Франшиза</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Процент за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.procent\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"service.readonly && !service.makeToDelete\">\n                <div class=\"12\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"makeToChange();\">Внести изменения\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\" *ngIf=\"!service.readonly\">\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"makeDefault();\">Сохранить\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"Отменить\"\n                                          class=\"btn btn-save\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"   \n                                          (click)=\"makeDefault();\">Отменить изменения\n                    </button>\n                </div>\n            </div>\n            \n            <div class=\"row\" *ngIf=\"service.makeToDelete\">\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"сохранить\"\n                                          class=\"btn btn-change\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"\n                                          (click)=\"makeDefault();\">Удалить\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" title=\"Отменить\"\n                                          class=\"btn btn-save\"\n                                          style=\"opacity: 1; margin-top: 0px; float: left\"   \n                                          (click)=\"makeDefault();\">Отменить удаление\n                    </button>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n        <div class=\"col-7\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 style=\"margin-bottom: 10px; margin-top: 10px;\"><b>Лимиты</b></h5>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за месяц\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Сумма за год\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;₽</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за случай\"\n                                        [(ngModel)]=\"service.onceFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за месяц\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\">\n                        <input matInput placeholder=\"Количество за год\"\n                                        [(ngModel)]=\"service.yearFranchise.maxSum\"\n                                        class=\"example-right-align\"\n                                        [disabled]=\"service.readonly\">\n                        <span matSuffix>&nbsp;шт</span>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n\n    </div>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree/setting-tree.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/setting-tree/setting-tree.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" *ngIf=\"showSpinerMkb\">\n    <div class=\"row\" style=\"margin: auto; height: calc(100vh - 100px);\">\n        <mat-spinner style=\"margin: auto;\"></mat-spinner>\n    </div>\n</div>\n\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding style=\"border-bottom: 1px solid #eee; font-size: 13px; color: #17317e; font-weight: 600\">\n        <div style=\"width: 75vw\">\n            <div class=\"row\">\n                <div style=\"margin: auto; width: calc(100% - 120px)\">\n                    ( {{node.code}} ) - {{node.name}}\n                </div>\n                <div style=\"margin: auto; width: 120px\">\n                    <div class=\"row\">\n                        <div class=\"col-4\" style=\"margin: auto\">\n                            <mat-checkbox [checked]=\"node.selected\"></mat-checkbox>\n                        </div>\n                        <div class=\"col-4\">\n                            <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n                                                  title=\"Лимиты/Франшизы\"\n                                                  data-toggle=\"modal\"\n                                                  data-target=\"#one-limits-settings-modal\"\n                                                  (click)=\"modalForOne(node);\"\n                                                  style=\"padding-left: 10px;\">\n                                <i class=\"icon icon-inventorisation\"></i>\n                            </button>\n                        </div>\n                        <div class=\"col-4\">\n                            <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n                                                  title=\"Услуги/Медикаменты\"\n                                                  data-toggle=\"modal\"\n                                                  data-target=\"#one-meds-settings-modal\"\n                                                  (click)=\"modalForOne(node);\">\n                                <i class=\"icon icon-settings\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div style=\"width: 40px\">\n            <h4> </h4>\n        </div>\n    </mat-tree-node>\n    <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding style=\"font-size: 13px; cursor: pointer; border-bottom: 1px solid #eee; font-weight: 500\">\n        <div style=\"width: 75vw\">\n            <div class=\"row\">\n                <div style=\"margin: auto; width: calc(100% - 120px)\" matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n                    <h4>( {{node.code}} ) - {{node.name}}</h4>\n                </div>\n                <div style=\"margin: auto; width: 120px\">\n                    <div class=\"row\">\n                        <div class=\"col-4\" style=\"margin: auto;\">\n                            <mat-checkbox [checked]=\"node.selected\"></mat-checkbox>\n                        </div>\n                        <div class=\"col-4\" style=\"margin: auto; padding-left: 15px;\">\n                            <button type=\"button\" class=\"btn btn-icon btn-secondary\" \n                                                  title=\"Лимиты/Франшизы\"\n                                                  data-toggle=\"modal\"\n                                                  data-target=\"#group-limits-settings-modal\"\n                                                  (click)=\"modalForOne(node); settings.readonly = true\">\n                                <i class=\"icon icon-inventorisation\"></i>\n                            </button>\n                        </div>\n                        <div class=\"col-4\" matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\" style=\"margin: auto;\">\n                            <button type=\"button\" class=\"btn btn-icon btn-secondary\">\n                                <mat-icon class=\"mat-icon-rtl-mirror\">\n                                    {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                                </mat-icon>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-tree-node>\n</mat-tree>\n\n<div class=\"modal fade\" id=\"one-meds-settings-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\" style=\"height: 90vh; max-height: 90vh\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Настройка услуг и медикаментов заболевания</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n            <div class=\"modal-body\" style=\"padding-top: 10px; \">\n                <div class=\"row\" style=\"margin-top: 15px; margin-bottom: 0px;\">\n                    <h4>{{modalNameOne}}</h4>\n                </div>\n                <div class=\"row\">\n                    <mat-tab-group style=\"width: 100%\">\n                        <mat-tab label=\"Услуги\">\n                            <div class=\"row\">\n                                <div class=\"col-12\" style=\"padding-left: 0px; padding-right: 0px;\">\n                                    <div class=\"table\" style=\"margin: 5px; height: auto;\">\n                                        <div class=\"thead\">\n                                            <div class=\"row\" style=\"padding-top: 10px;\n                                                                    padding-bottom: 10px;\n                                                                    background-color: #e8e8e8;\n                                                                    border-radius: 5px;\">\n                                                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                                                    <button class=\"addNewBtn\" title=\"Добавить услугу\" (click)=\"isAddingService = true;\">\n                                                        <i class=\"icon icon-add\"></i>\n                                                    </button>\n                                                </div>\n                                                <div class=\"col-3\" style=\"margin: auto;\">\n                                                    <span>Название</span>\n                                                </div>\n                                                <div class=\"col-2\" style=\"margin: auto\">\n                                                    <span>Код услуги</span>\n                                                </div>\n                                                <div class=\"col-2\" style=\"margin: auto;\">\n                                                    <span>Группа услуги</span>\n                                                </div>\n                                                <div class=\"col-2 text-center\" style=\"margin: auto\">\n                                                    <span>Включено в программу</span>\n                                                </div>\n                                                <div class=\"col-2 text-center\" style=\"margin: auto\">\n                                                    <span>Требует согласования</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"tbody\" style=\"margin-top: 5px; height: calc(90vh - 240px); overflow-y: auto;\">\n                                            <mat-accordion *ngIf=\"procedures.length == 0 && !isAddingService\">\n                                                <mat-expansion-panel hideToggle disabled\n                                                                                style=\"box-shadow: none;\n                                                                                    border: 1px #e8e8e8 solid;\">\n                                                    <mat-expansion-panel-header style=\"padding: 0px;\">\n                                                            <div class=\"col-1\">\n                                                            </div>\n                                                            <div class=\"col-3\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                    </mat-expansion-panel-header>\n                                                </mat-expansion-panel>\n                                            </mat-accordion>\n                                            <tmmed-setting-tree-procedure-add *ngIf=\"isAddingService\" (onSave)=\"updateList()\" (onCancel)=\"notUpdateList();\">\n                                            </tmmed-setting-tree-procedure-add>\n                                            <mat-accordion multi=\"false\" *ngIf=\"!isAddingService\">\n                                                <tmmed-setting-tree-procedure [procedure]=\"service\"\n                                                                            *ngFor=\"let service of procedures\">\n                                                </tmmed-setting-tree-procedure>\n                                            </mat-accordion>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n                        <mat-tab label=\"Медикаменты\">\n                            <div class=\"row\">\n                                <div class=\"col-12\" style=\"padding-left: 0px; padding-right: 0px;\">\n                                    <div class=\"table\" style=\"margin: 5px; height: auto;\">\n                                        <div class=\"thead\">\n                                            <div class=\"row\" style=\"padding-top: 10px;\n                                                                    padding-bottom: 10px;\n                                                                    background-color: #e8e8e8;\n                                                                    border-radius: 5px;\">\n                                                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                                                    <button class=\"addNewBtn\" title=\"Добавить медикамент\" (click)=\"isAddingMed = true;\">\n                                                        <i class=\"icon icon-add\"></i>\n                                                    </button>\n                                                </div>\n                                                <div class=\"col-3\" style=\"margin: auto;\">\n                                                    <span>Название</span>\n                                                </div>\n                                                <div class=\"col-2\" style=\"margin: auto\">\n                                                    <span>Код медикамента</span>\n                                                </div>\n                                                <div class=\"col-2\" style=\"margin: auto;\">\n                                                    <span>Группа медикамента</span>\n                                                </div>\n                                                <div class=\"col-2 text-center\" style=\"margin: auto\">\n                                                    <span>Включено в программу</span>\n                                                </div>\n                                                <div class=\"col-2 text-center\" style=\"margin: auto\">\n                                                    <span>Требует согласования</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"tbody\" style=\"margin-top: 5px; height: calc(90vh - 240px); overflow-y: auto;\">\n                                            <mat-accordion *ngIf=\"procedures.length == 0\">\n                                                <mat-expansion-panel hideToggle disabled\n                                                                                style=\"box-shadow: none;\n                                                                                    border: 1px #e8e8e8 solid;\">\n                                                    <mat-expansion-panel-header style=\"padding: 0px;\">\n                                                            <div class=\"col-1\">\n                                                            </div>\n                                                            <div class=\"col-3\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                            <div class=\"col-2\">\n                                                                <span><b>╾</b></span>\n                                                            </div>\n                                                    </mat-expansion-panel-header>\n                                                </mat-expansion-panel>\n                                            </mat-accordion>\n                                            <tmmed-setting-tree-med-add *ngIf=\"isAddingMed\" (onSave)=\"updateList()\" (onCancel)=\"notUpdateList();\">\n                                            </tmmed-setting-tree-med-add>\n                                            <mat-accordion multi=\"false\" *ngIf=\"!isAddingMed\">\n                                                <tmmed-setting-tree-med [medicament]=\"med\"\n                                                                        *ngFor=\"let med of medicaments\">\n                                                </tmmed-setting-tree-med>\n                                            </mat-accordion>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </mat-tab>\n                    </mat-tab-group>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"group-limits-settings-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Настройка групп заболеваний</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n                                      style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding-top: 10px;\">\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-8\">\n                        <h4>{{modalNameOne}}</h4>\n                    </div>\n                    <div class=\"col-4\">\n                        <div class=\"row\" *ngIf=\"!settings.readonly\">\n                            <div class=\"col-5\">\n                                <button class=\"btn btn-save\" style=\"margin-top: 0px\" (click)=\"settings.readonly = true\">\n                                    <h4>Сохранить</h4>\n                                </button>\n                            </div>\n                            <div class=\"col-7\">\n                                <button class=\"btn btn-change\" style=\"margin-top: 0px\" (click)=\"settings.readonly = true\" *ngIf=\"!settings.readonly\">\n                                    <h4>отменить изменение</h4>\n                                </button>\n                            </div>\n                        </div>\n                        <button class=\"btn btn-change\" style=\"margin-top: 0px\" (click)=\"settings.readonly = false\" *ngIf=\"settings.readonly\">\n                            <h4>редактировать</h4>\n                        </button>\n                    </div>\n                </div>\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h4>Франшиза</h4>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Процент за случай\" [(ngModel)]=\"settings.onceFranchise.procent\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;%</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за случай\" [(ngModel)]=\"settings.onceFranchise.maxSum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за год\" [(ngModel)]=\"settings.yearFranchise.maxSum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h4>Лимиты</h4>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за случай\" [(ngModel)]=\"settings.onceLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за месяц\" [(ngModel)]=\"settings.monthLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за год\" [(ngModel)]=\"settings.yearLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"one-limits-settings-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Настройка заболевания</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\">\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n            <div class=\"modal-body\" style=\"padding-top: 10px;\">\n                <div class=\"row\">\n                    <div class=\"col-12\" style=\"margin-top: 15px; margin-bottom: 20px;\">\n                        <h4>{{modalNameOne}}</h4>\n                    </div>\n                </div>\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h4>Франшиза</h4>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Процент за случай\" [(ngModel)]=\"settings.onceFranchise.procent\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;%</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за случай\" [(ngModel)]=\"settings.onceFranchise.maxSum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за год\" [(ngModel)]=\"settings.yearFranchise.maxSum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-12\">\n                                <div class=\"row\">\n                                    <div class=\"col-4\" style=\"margin-top: 10px\">\n                                        <button class=\"btn btn-change\" style=\"float: left; text-align: center; margin-top: 0px\"\n                                                                       (click)=\"settings.readonly = !settings.readonly\"\n                                                                       *ngIf=\"settings.readonly\">\n                                            <h4>редактировать</h4>\n                                        </button>\n                                        <button class=\"btn btn-save\" style=\"float: left; margin-top: 0px\"\n                                                                     (click)=\"settings.readonly = !settings.readonly;\"\n                                                                     *ngIf=\"!settings.readonly\">\n                                            <h4>Сохранить</h4>\n                                        </button>\n                                    </div>\n                                    <div class=\"col-4\" style=\"margin-top: 10px\">\n                                        <button class=\"btn btn-change\" style=\"margin-top: 0px\"\n                                                                       (click)=\"settings.readonly = !settings.readonly\"\n                                                                       *ngIf=\"!settings.readonly\">\n                                            <h4>отменить изменение</h4>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h4>Лимиты</h4>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за случай\" [(ngModel)]=\"settings.onceLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за месяц\" [(ngModel)]=\"settings.monthLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Сумма за год\" [(ngModel)]=\"settings.yearLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Количество за случай\" [(ngModel)]=\"settings.onceLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Количество за месяц\" [(ngModel)]=\"settings.monthLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-4\">\n                                <mat-form-field class=\"max\">\n                                    <input matInput placeholder=\"Количество за год\" [(ngModel)]=\"settings.yearLimit.sum\"\n                                                    class=\"example-right-align\"\n                                                    [readonly]=\"settings.readonly\"\n                                                    [ngClass]=\"{ colorForDisabled: settings.readonly, colorForActive: !settings.readonly }\">\n                                    <span matSuffix style=\"color: black\">&nbsp;₽</span>\t\t\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-med-groups/user-exception-med-groups.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-exception-med-groups/user-exception-med-groups.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"padding-left: 0px; padding-right: 0px;\">\n    <div class=\"table\" style=\"margin: 5px; height: auto;\">\n        <div class=\"thead\">\n            <div class=\"row\" style=\"padding: 10px 0px;\n                                    background-color: #e8e8e8;\n                                    border-top-left-radius: 5px;\n                                    border-top-right-radius: 5px;\">\n                <div class=\"col-2\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Добавить группу медикаментов\"\n                                              (click)=\"isAdding = true;\"\n                                              *ngIf=\"!isAdding && medGroups.length > 0\">\n                        <i class=\"icon icon-add\"></i>\n                    </button>\n                </div>\n                <div class=\"col-10\" style=\"margin: auto; padding: 10px;\">\n                    <span>Название групп медикаментов</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tbody\">\n            <div class=\"row row-body\" style=\"padding: 0px\" *ngIf=\"isAdding || medGroups.length == 0\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Отменить добавление группы медиккаментов\"\n                                              (click)=\"isAdding = false; clearInput()\">\n                        <i class=\"icon icon-close\"></i>\n                    </button>\n                </div>\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Добавить группу медикаментов\" (click)=\"addGroup();\">\n                        <i class=\"icon icon-done\"></i>\n                    </button>\n                </div>\n                <div class=\"col-8\" style=\"margin: auto;\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Группа медикамента\"\n                                            matInput [formControl]=\"controlForMedGroup\"\n                                            [matAutocomplete]=\"autoMedModalGroup\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                        <mat-autocomplete #autoMedModalGroup=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                            <mat-option *ngIf=\"showSpinerMedGroup\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForMedGroup | async\" \n                                        [value]=\"option\"\n                                        (click)=\"chooseOption(option)\"\n                                        (onSelectionChange)=\"chooseOption(option)\">\n                                {{option.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-2\"></div>\n            </div>\n            <div class=\"row row-body\" *ngFor=\"let medGroup of medGroups\" style=\"padding: 15px 0px\">\n                <div class=\"col-2\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Удалить группу медикаментов\" (click)=\"deleteGroup(medGroup)\">\n                        <i class=\"icon icon-delete\"></i>\n                    </button>\n                </div>\n                <div class=\"col-10\" style=\"margin: auto;\">\n                    <span>{{medGroup.medicamentGroupItem.name}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-med/user-exception-med.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-exception-med/user-exception-med.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"padding-left: 0px; padding-right: 0px;\">\n    <div class=\"table\" style=\"margin: 5px; height: auto;\">\n        <div class=\"thead\">\n            <div class=\"row\" style=\"padding-top: 10px;\n                                    padding-bottom: 10px;\n                                    background-color: #e8e8e8;\n                                    border-radius: 5px;\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Добавить медикамент\" (click)=\"isAdding = true;\" *ngIf=\"!isAdding && meds.length > 0\">\n                        <i class=\"icon icon-add\"></i>\n                    </button>\n                </div>\n                <div class=\"col-4\" style=\"margin: auto;\">\n                    <span>Название</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto\">\n                    <span>Код медикамента</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto;\">\n                    <span>Группа медикамента</span>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto\">\n                    <span>Лекарственная форма</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tbody\">\n            <div class=\"row\" *ngIf=\"isAdding || meds.length == 0 \">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Отменить добавление медикамента\"\n                                              style=\"display: inline-block;\"\n                                              (click)=\"clearInput();\">\n                        <i class=\"icon icon-close\"></i>\n                    </button>\n                    <button class=\"addNewBtn\" title=\"Добавить медикамент\" style=\"display: inline-block;\" (click)=\"addMed();\">\n                        <i class=\"icon icon-done\"></i>\n                    </button>\n                </div>\n                <div class=\"col-4\" style=\"margin: auto;\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Название медикамента\"\n                                            matInput [formControl]=\"controlForMeds\"\n                                            [matAutocomplete]=\"autoMedModal\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                        <mat-autocomplete #autoMedModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                            <mat-option *ngIf=\"showSpinerMed\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForMeds | async\" \n                                        [value]=\"option\"\n                                        (onSelectionChange)=\"chooseOption(option)\">\n                                ( {{option.code}} ) - {{option.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Код медикамента\"\n                                            matInput [formControl]=\"controlForMedsCode\"\n                                            [matAutocomplete]=\"autoMedModalCode\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                        <mat-autocomplete #autoMedModalCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n                            <mat-option *ngIf=\"showSpinerMed\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForMedsCode | async\" \n                                        [value]=\"option\"\n                                        (onSelectionChange)=\"chooseOption(option)\">\n                                {{option.code}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto;\" *ngIf=\"tempMed != null\">\n                    <span>{{tempMed.medicamentItem.groupName || 'отсуствует'}}</span>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto;\" *ngIf=\"tempMed != null\">\n                    <span>{{tempMed.medicamentItem.medicamentForm || 'отсуствует'}}</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto;\" *ngIf=\"tempMed == null\">\n                    <input class=\"max\" style=\"border: 0px; border-bottom: 1px #949494 solid; padding-bottom: 3px; background-color: #fff\" disabled>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto;\" *ngIf=\"tempMed == null\">\n                    <input class=\"max\" style=\"border: 0px; border-bottom: 1px #949494 solid; padding-bottom: 3px; background-color: #fff\" disabled>\n                </div>\n            </div>\n            <div class=\"row row-body\" *ngFor=\"let med of meds\" style=\"padding: 10px 0px\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Удалить медикамент\" (click)=\"deleteMed(med)\">\n                        <i class=\"icon icon-delete\"></i>\n                    </button>\n                </div>\n                <div class=\"col-4\" style=\"margin: auto;\">\n                    <span>{{med.medicamentItem.name}}</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto\">\n                    <span>{{med.medicamentItem.code}}</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto;\">\n                    <span>{{med.medicamentItem.groupName || 'отсуствует'}}</span>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto\">\n                    <span>{{med.medicamentItem.medicamentForm || 'отсуствует'}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"padding-left: 0px; padding-right: 0px;\">\n    <div class=\"table\" style=\"margin: 5px; height: auto;\">\n        <div class=\"thead\">\n            <div class=\"row\" style=\"padding: 10px 0px;\n                                    background-color: #e8e8e8;\n                                    border-top-left-radius: 5px;\n                                    border-top-right-radius: 5px;\">\n                <div class=\"col-2\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Добавить группу услуг\"\n                                              (click)=\"isAdding = true;\"\n                                              *ngIf=\"!isAdding && procedureGroups.length > 0\">\n                        <i class=\"icon icon-add\"></i>\n                    </button>\n                </div>\n                <div class=\"col-10\" style=\"margin: auto; padding: 10px;\">\n                    <span>Название групп услуг </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tbody\">\n            <div class=\"row row-body\" style=\"padding: 0px\" *ngIf=\"isAdding || procedureGroups.length == 0\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Отменить добавление группы медиккаментов\"\n                                              (click)=\"isAdding = false; clearInput()\">\n                        <i class=\"icon icon-close\"></i>\n                    </button>\n                </div>\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Добавить группу медикаментов\" (click)=\"addGroup();\">\n                        <i class=\"icon icon-done\"></i>\n                    </button>\n                </div>\n                <div class=\"col-8\" style=\"margin: auto;\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Группа медикамента\"\n                                            matInput [formControl]=\"controlForProcedureGroup\"\n                                            [matAutocomplete]=\"autoProcedureModalGroup\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                        <mat-autocomplete #autoProcedureModalGroup=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                            <mat-option *ngIf=\"showSpinerProcedureGroup\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForProcedureGroup | async\" \n                                        [value]=\"option\"\n                                        (click)=\"chooseOption(option)\"\n                                        (onSelectionChange)=\"chooseOption(option)\">\n                                {{option.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-2\"></div>\n            </div>\n            <div class=\"row row-body\" *ngFor=\"let procedureGroup of procedureGroups\" style=\"padding: 15px 0px\">\n                <div class=\"col-2\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Удалить группу услуг\" (click)=\"deleteGroup(procedureGroup)\">\n                        <i class=\"icon icon-delete\"></i>\n                    </button>\n                </div>\n                <div class=\"col-10\" style=\"margin: auto;\">\n                    <span>{{procedureGroup.procedureGroupItem.name}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-procedure/user-exception-procedure.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-exception-procedure/user-exception-procedure.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"padding-left: 0px; padding-right: 0px;\">\n    <div class=\"table\" style=\"margin: 5px; height: auto;\">\n        <div class=\"thead\">\n            <div class=\"row\" style=\"padding-top: 10px;\n                                    padding-bottom: 10px;\n                                    background-color: #e8e8e8;\n                                    border-radius: 5px;\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Добавить медикамент\" (click)=\"isAdding = true\" *ngIf=\"isAdding == false  && procedures.length > 0\">\n                        <i class=\"icon icon-add\"></i>\n                    </button>\n                </div>\n                <div class=\"col-6\" style=\"margin: auto;\">\n                    <span>Название услуги</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto\">\n                    <span>Код услуги</span>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto;\">\n                    <span>Группа услуги</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tbody\">\n            <div class=\"row\" *ngIf=\"isAdding || procedures.length === 0\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Отменить добавление услуги\"\n                                              style=\"display: inline-block\"\n                                              (click)=\"clearInput(); isAdding = false;\">\n                        <i class=\"icon icon-close\"></i>\n                    </button>\n                    <button class=\"addNewBtn\" title=\"Добавить услугу\" style=\"display: inline-block\" (click)=\"addProcedure()\">\n                        <i class=\"icon icon-done\"></i>\n                    </button>\n                </div>\n                <div class=\"col-6\" style=\"margin: auto;\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Название услуги\"\n                                            matInput [formControl]=\"controlForService\"\n                                            [matAutocomplete]=\"autoServiceModal\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                        <mat-autocomplete #autoServiceModal=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                            <mat-option *ngIf=\"showSpinerService\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForService | async\" \n                                        [value]=\"option\"\n                                        (onSelectionChange)=\"chooseOption(option)\">\n                                {{option.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Код услуги\"\n                                            matInput [formControl]=\"controlForServiceCode\"\n                                            [matAutocomplete]=\"autoServiceModalCode\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i> \n                        <mat-autocomplete #autoServiceModalCode=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCode\">\n                            <mat-option *ngIf=\"showSpinerService\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForServiceCode | async\" \n                                        [value]=\"option\"\n                                        (onSelectionChange)=\"chooseOption(option)\">\n                                {{option.code}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto;\" *ngIf=\"tempProcedure != null\">\n                    <span>{{tempProcedure.procedureItem.groupName || 'отсуствует'}}</span>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto;\" *ngIf=\"tempProcedure == null\">\n                    <input class=\"max\" style=\"border: 0px; border-bottom: 1px #949494 solid; padding-bottom: 3px; background-color: #fff\" disabled>\n                </div>\n            </div>\n            <div class=\"row row-body\" *ngFor=\"let procedure of procedures\" style=\"padding: 10px 0px\">\n                <div class=\"col-1\" style=\"margin: auto; padding-top: 5px;\">\n                    <button class=\"addNewBtn\" title=\"Удалить медикамент\" (click)=\"deleteProcedure(procedure);\">\n                        <i class=\"icon icon-delete\"></i>\n                    </button>\n                </div>\n                <div class=\"col-6\" style=\"margin: auto;\">\n                    <span>{{procedure.procedureItem.name}}</span>\n                </div>\n                <div class=\"col-2\" style=\"margin: auto\">\n                    <span>{{procedure.procedureItem.code}}</span>\n                </div>\n                <div class=\"col-3\" style=\"margin: auto;\">\n                    <span>{{procedure.procedureItem.groupName || 'отсуствует'}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" *ngIf=\"showSpinerMkb\">\n    <div class=\"row\" style=\"margin: auto; height: calc(90vh - 250px); overflow-y: hidden; overflow-x: hidden; width: 100%\">\n        <mat-spinner style=\"margin: auto;\"></mat-spinner>\n    </div>\n</div>\n\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" *ngIf=\"!showSpinerMkb\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding\n                style=\"border-bottom: 1px solid #eee; width: 100%; cursor: pointer;\">\n    <div style=\"width: 75vw\">\n      <div class=\"row\" style=\"padding-left: 24px;\">\n        <div style=\"margin: auto; width: calc(100% - 80px); color: #17317e\"\n            matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n          <b style=\"font-size: 13px;\">({{node.code}}) - {{node.name}}</b>\n        </div>\n        <div style=\"margin: auto; width: 80px;\">\n          <div class=\"row\" style=\"margin: auto\">\n            <div class=\"col-12\" style=\"margin: auto\">\n              <mat-checkbox class=\"checklist-leaf-node\"\n                            [checked]=\"checklistSelection.isSelected(node)\"\n                            (change)=\"checklistSelection.toggle(node); updateExceptions(checklistSelection.selected);\">\n              </mat-checkbox>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tree-node>\n\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\"\n                matTreeNodePadding\n                style=\" border-bottom: 1px solid #eee; width: 100%; cursor: pointer\">\n    <div style=\"width: 75vw;\">\n      <div class=\"row\" style=\"padding-left: 24px;\">\n        <div style=\"margin: auto; width: calc(100% - 80px)\"\n            matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n            <b style=\"font-size: 13px;\">({{node.code}}) - {{node.name}}</b>\n        </div>\n        <div style=\"margin: auto; width: 80px;\">\n          <div class=\"row\" style=\"margin: auto\">\n            <div class=\"col-6\" style=\"margin: auto\">\n              <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                            [indeterminate]=\"descendantsPartiallySelected(node)\"\n                            (change)=\"todoItemSelectionToggle(node); updateExceptions(checklistSelection.selected);\">\n              </mat-checkbox>\n            </div>\n            <div class=\"col-6\" style=\"margin: auto; float: left;\"\n                              matTreeNodeToggle\n                              [attr.aria-label]=\"'toggle ' + node.filename\">\n              <button style=\"border: 0px; background-color: rgba(0,0,0,0); margin-left: -10px; margin-top: 5px;\">\n                <mat-icon class=\"mat-icon-rtl-mirror\">\n                  {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                </mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-exception/user-exception.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-exception/user-exception.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"max\" style=\"padding: 0px\">\n  <mat-tab label=\"МКБ\">\n      <div class=\"row\">\n        <tmmed-user-exception-tree-mkb (onUpdate)=\"assuredExceptionItem.icdList = $event; console()\"\n                                       [exception]=\"assuredExceptionItem.icdList\"></tmmed-user-exception-tree-mkb>\n      </div>\n  </mat-tab>\n  <mat-tab label=\"Группы услуг / Группы медикаментов\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div *ngIf=\"assuredExceptionItem.procedureGroupList\">\n            <tmmed-user-exception-procedure-groups (onUpdate)=\"assuredExceptionItem.procedureGroupList = $event; console()\"\n                                                   [exception]=\"assuredExceptionItem.procedureGroupList\"></tmmed-user-exception-procedure-groups>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div *ngIf=\"assuredExceptionItem.medicamentGroupList\">\n            <tmmed-user-exception-med-groups (onUpdate)=\"assuredExceptionItem.medicamentGroupList = $event; console()\"\n                                             [exception]=\"assuredExceptionItem.medicamentGroupList\"></tmmed-user-exception-med-groups>\n          </div>\n        </div>\n      </div>\n  </mat-tab>\n  <mat-tab label=\"Услуги\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div *ngIf=\"assuredExceptionItem.procedureList\">\n            <tmmed-user-exception-procedure (onUpdate)=\"assuredExceptionItem.procedureList = $event; console()\"\n                                            [exception]=\"assuredExceptionItem.procedureList\"></tmmed-user-exception-procedure>\n          </div>\n        </div>\n      </div>\n  </mat-tab>\n  <mat-tab label=\"Медикаменты\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div *ngIf=\"assuredExceptionItem.medicamentList\">\n            <tmmed-user-exception-med (onUpdate)=\"assuredExceptionItem.medicamentList = $event; console()\"\n                                      [exception]=\"assuredExceptionItem.medicamentList\"></tmmed-user-exception-med>\n          </div>\n        </div>\n      </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-id-loss/user-id-loss.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-id-loss/user-id-loss.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 30px;\">\n    <h4 *ngIf=\"showListOfDamages\">Список убытков застрахованного:</h4>\n    <h4 *ngIf=\"!showListOfDamages\">У застрахованного отсутствуют убытки</h4>\n</div>\n<div class=\"row\" *ngIf=\"showListOfDamages\">\n    <div class=\"table\" style=\"width: 100%\">\n        <div class=\"thead\">\n            <div class=\"row\">\n                <div class=\"col-5\">\n                    <div class=\"row\">\n                        <div class=\"col-2\" style=\"margin: auto;\">\n                            <span>№</span>\n                        </div>\n                        <div class=\"col-3\" style=\"margin: auto;\">\n                            <span>Дата</span>\n                        </div>\n                        <div class=\"col-6\" style=\"margin: auto;\">\n                            <span>Диагноз</span>\n                        </div>\n                    </div>\n                    <div class=\"row\"></div>\n                </div>\n                <div class=\"col-5\">\n                    <div class=\"row\">\n                        <div class=\"col-4 text-center\" style=\"margin: auto;\">\n                            <span>Суммарная стоимость </span>\n                        </div>\n                        <div class=\"col-3 text-center\" style=\"margin: auto;\">\n                            <span>Стоимость услуг</span>\n                        </div>\n                        <div class=\"col-5 text-center\" style=\"margin: auto;\">\n                            <span>Стоимость медикаментов</span>\n                        </div>\n                    </div>\n                    <div class=\"row\"></div>\n                </div>\n                <div class=\"col-1\" style=\"margin: auto;\">\n                    <span>Статус</span>\n                </div>\n                <div class=\"col-1\" style=\"padding-left: 0px;\"><span>Новая вкладка</span></div>\n            </div>\n        </div>\n        <div class=\"tbody\">\n            <div *ngFor=\"let damage of listOfDamages; let i = index\">\n                <a class=\"row\" style=\"padding: 5px 0px; cursor: pointer\">\n                    <div class=\"col-5\" style=\"margin: auto;\" [routerLink]=\"['/losses', damage.id]\">\n                        <div class=\"row\">\n                            <div class=\"col-2\" style=\"margin: auto;\">\n                                <span>{{damage.id}}</span>\n                            </div>\n                            <div class=\"col-3\" style=\"margin: auto;\">\n                                <span> {{damage.date || 'Не указана'}}</span>\n                            </div>\n                            <div class=\"col-6\" style=\"margin: auto; \">\n                                <span>{{damage.diagnosisName || 'Не указан'}}</span>\n                            </div>\n                        </div>\n                        <div class=\"row\"></div>\n                    </div>\n                    <div class=\"col-5\" style=\"margin: auto;\" [routerLink]=\"['/losses', damage.id]\">\n                        <div class=\"row\">\n                            <div class=\"col-4 text-center\" style=\"margin: auto;\">\n                                <span>{{damage.amountProcedures+damage.amountMedicaments || 0}} ₽</span>\n                            </div>\n                            <div class=\"col-3 text-center\" style=\"margin: auto;\">\n                                <span>{{damage.amountProcedures || 0}} ₽</span>\n                            </div>\n                            <div class=\"col-5 text-center\" style=\"margin: auto;\">\n                                <span>{{damage.amountMedicaments || 0}} ₽</span>\n                            </div>\n                        </div>\n                        <div class=\"row\"></div>\n                    </div>\n                    <div class=\"col-1\" style=\"margin: auto;\" [routerLink]=\"['/losses', damage.id]\">\n                        <span>{{damage.stateName}}</span>\n                    </div>\n                    <div class=\"col-1 text-center\" style=\"margin: auto;\">\n                        <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http:/losses/{{damage.id}}\">\n                            <button class=\"btn btn-icon btn-secondary\"\n                                    title=\"Открыть в новой вкладке\"\n                                    style=\"width: 100%\">\n                                <i class=\"icon icon-exit\"></i>\n                            </button>\n                        </a>\n                    </div>\n                </a>\n            </div>\t\n        </div>\n    </div>\n</div>\n<div class=\"row\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-id/user-id.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-id/user-id.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"row\" style=\"padding-bottom: 50px;\">\n        <div class=\"col-10\">\n            <h1 *ngIf=\"!newUser && modalUser.lastName\">{{modalUser.lastName}} {{modalUser.firstName[0]}}. {{modalUser.middleName[0]}}.</h1>\n            <h1 *ngIf=\"newUser\">Новый застрахованный</h1>\n        </div>\n        <div class=\"col-2\" style=\"margin-top: -5px;\">\n            <button class=\"btn btn-save\" (click)=\"sendUser()\" *ngIf=\"!readonly\">\n                <h4>Сохранить</h4>\n            </button>\n            <button class=\"btn btn-change\" (click)=\"readonly = false\" *ngIf=\"readonly\">\n                <h4>редактировать</h4>\n            </button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-6\" style=\"padding-right: 20px; border-right: 1px rgb(224, 224, 224) solid\">\n            <div class=\"row\">\n                <div class=\"col-12\" style=\"padding-bottom: 20px;\">\n                    <h4>Личные данные</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Фамилия*\"\n                                        [(ngModel)]=\"modalUser.lastName\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.lastName == '' && readonly == false}\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-3\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Имя*\"\n                                        [(ngModel)]=\"modalUser.firstName\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.firstName == '' && readonly == false}\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-3\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Отчество\"\n                                        [(ngModel)]=\"modalUser.middleName\"\n                                        [readonly]=\"readonly\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-2\">\n                    <mat-button-toggle-group aria-label=\"Пол*\"\n                                            [(ngModel)]=\"modalUser.isMan\"\n                                            [disabled]=\"readonly\"\n                                            class=\"max\"\n                                            [ngClass]=\"{empty: modalUser.isMan == null && readonly == false}\">\n                        <mat-button-toggle [value]=\"true\" class=\"max\">М</mat-button-toggle>\n                        <mat-button-toggle [value]=\"false\" class=\"max\">Ж</mat-button-toggle>\n                    </mat-button-toggle-group>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Телефон*\"\n                                        [(ngModel)]=\"modalUser.phone\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.phone == '' && readonly == false}\">\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\" (click)=\"readonly ? 0 : birthDate.open();\">\n                        <input matInput [matDatepicker]=\"birthDate\"\n                                        placeholder=\"Дата рождения*\" \n                                        [(ngModel)]=\"modalUser.birthDate\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.birthDate == '' && readonly == false}\">\n                        <mat-datepicker-toggle matSuffix [for]=\"birthDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\n                        <mat-datepicker #birthDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"СНИЛС*\"\n                                        [(ngModel)]=\"modalUser.snils\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.snils == '' && readonly == false}\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-4\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Номер карты\"\n                                        [(ngModel)]=\"modalUser.cardNumber\"\n                                        [readonly]=\"readonly\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-change\" \n                                        title=\"Новый убыток\"\n                                        style=\"margin-top: 10px; float: left;\"\n                                        [routerLink]=\"['/losses/new/', modalUser.id]\"\n                                        [disabled]=\"!readonly\"\n                                        *ngIf=\"!newUser\">\n                        <h4>Создать новый убыток</h4>\n                    </button>\n                </div>\n                <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-change\" \n                                        title=\"список застрахованных\"\n                                        style=\"margin-top: 10px;\"\n                                        data-toggle=\"modal\"\n                                        data-target=\"#tree-mkb\">\n                        <h4>Исключения</h4>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-6\" style=\"padding-left: 20px;\">\n            <div class=\"row\">\n                <div class=\"col-12\" style=\"padding-bottom: 20px;\">\n                    <h4>Страхование</h4>\n                </div>\t\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Название компании\"\n                                        matInput [formControl]=\"controlForCompany\"\n                                        [matAutocomplete]=\"autoCompany\"\n                                        #myInput\n                                        (click)=\"myInput.select();\"\n                                        readonly [readonly]=\"readonly\">\t\t\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n                        <mat-autocomplete #autoCompany=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFnCompanyName\">\n                            <mat-option *ngIf=\"showSpinerCompany\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForCompany | async\" \n                                        [value]=\"option\"\n                                        (click)=\"chooseCompany(option)\">\n                                {{option.companyName}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <!-- <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Название продукта*\"\n                                        [(ngModel)]=\"modalUser.insuredCompanyProductName\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.insuredCompanyProductName == '' && readonly == false}\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n                    </mat-form-field>\n                    -->\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Название продукта\"\n                                        matInput [formControl]=\"controlForProduct\"\n                                        [matAutocomplete]=\"autoProduct\"\n                                        #myInputProduct\n                                        (click)=\"myInputProduct.select();\"\n                                        readonly [readonly]=\"readonly\">\t\t\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n                        <mat-autocomplete #autoProduct=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                            <mat-option *ngIf=\"showSpinerProduct\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForProduct | async\" \n                                        [value]=\"option\"\n                                        (click)=\"chooseProduct(option)\">\n                                {{option.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <!-- <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Название программы*\"\n                                        [(ngModel)]=\"modalUser.insuredCompanyProductProgramName\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.insuredCompanyProductProgramName == '' && readonly == false}\">\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n                    </mat-form-field> -->\n                    <mat-form-field class=\"max\">\n                        <input type=\"text\" placeholder=\"Название программы\"\n                                        matInput [formControl]=\"controlForProgram\"\n                                        [matAutocomplete]=\"autoProgram\"\n                                        #myInputProgram\n                                        (click)=\"myInputProgram.select();\"\n                                        readonly [readonly]=\"readonly\">\t\t\n                        <i class=\"material-icons\" matSuffix style=\"margin: auto\">more_horiz</i>\n                        <mat-autocomplete #autoProgram=\"matAutocomplete\" [displayWith]=\"_dateToSend.displayFn\">\n                            <mat-option *ngIf=\"showSpinerProgram\">\n                                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-option>\n                            <mat-option *ngFor=\"let option of filteredOptionsForProgram | async\" \n                                        [value]=\"option\"\n                                        (click)=\"chooseProgram(option)\">\n                                {{option.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\">\n                        <input matInput placeholder=\"Номер договора*\"\n                                        [(ngModel)]=\"modalUser.programNumber\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.programNumber == '' && readonly == false}\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\" (click)=\"readonly ? 0 : programStartDate.open();\">\n                        <input matInput [matDatepicker]=\"programStartDate\"\n                                        placeholder=\"Дата начала программы*\" \n                                        [(ngModel)]=\"modalUser.programStartDate\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.programStartDate == '' && readonly == false}\">\n                        <mat-datepicker-toggle matSuffix [for]=\"programStartDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\n                        <mat-datepicker #programStartDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"col-6\">\n                    <mat-form-field class=\"max\" floatLabel=\"always\" (click)=\"readonly ? 0 : programEndDate.open();\">\n                        <input matInput [matDatepicker]=\"programEndDate\"\n                                        placeholder=\"Дата окончания программы*\" \n                                        [(ngModel)]=\"modalUser.programEndDate\"\n                                        [readonly]=\"readonly\"\n                                        [ngClass]=\"{empty: modalUser.programEndDate == '' && readonly == false}\">\n                        <mat-datepicker-toggle matSuffix [for]=\"programEndDate\" [disabled]=\"readonly\"></mat-datepicker-toggle>\n                        <mat-datepicker #programEndDate></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n        </div>\t\n    </div>\n    <tmmed-user-id-loss [idOfUser]=\"idOfUser\"></tmmed-user-id-loss>\n</div>\n\n<div class=\"modal fade\" id=\"tree-mkb\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Исключения</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\" >\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n            </div>\n            \n            <div class=\"modal-body\" style=\"height: calc(90vh - 150px); overflow-y: auto; padding: 0px\">\n                <div *ngIf=\"assuredExceptionItem\">\n                    <tmmed-user-exception (onSave)=\"console($event);\" [exception]=\"assuredExceptionItem\"></tmmed-user-exception>\n                </div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\">Отмена</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\"\n                                      (click)=\"saveExceptions()\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\">Сохранить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- <br>\n<br>\n<br>\n<br>\n<br>\n<tmmed-user-tree-mkb></tmmed-user-tree-mkb> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-list/user-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-list/user-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n    <div class=\"col-8\">\n        <h2>Застрахованные</h2>\n\t\t<span class=\"subheader\">{{amountOfUsers}} {{typeOfAmountToShow}}</span>\n\t</div>\n    <div class=\"col-3\">\n        <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownMenuLink\" ngbDropdownToggle>\n                Действия\n            </button>\n            <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n\t\t\t\t<a class=\"dropdown-item\" ngbDropdownItem [routerLink]=\"['/users/new']\">Добавить</a>\n                <a class=\"dropdown-item\" ngbDropdownItem>Загрузить список</a>\n\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t<a class=\"dropdown-item\" style=\"color: #fe4902;\" ngbDropdownItem \n\t\t\t\t\t\t\t\t\t\t data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t data-target=\"#delete-modal\"\n\t\t\t\t\t\t\t\t\t\t (click)=\"deleteUsers();\">Удалить</a>\n            </div>\n        </div>\n    </div>\n</div>\n<tmmed-filters (onChanged)=\"setFilters($event)\">\n</tmmed-filters>\n<div class=\"table\">\n    <div class=\"thead\">\n        <div class=\"row\">\n            <div class=\"col-1\" style=\"margin: auto;\">\n                <input type=\"checkbox\" class=\"checkbox\" id=\"checkAll\" (change)=\"checkAll()\">\n\t\t\t\t<label for=\"checkAll\" style=\"float: right\"></label>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\" style=\"float: left; margin: auto;\">\n\t\t\t\t<span>ФИО</span>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" style=\"display: inline;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t (click)=\"sortUsersDown();\">\n\t\t\t\t\t<i class=\"icon icon-chevrondown\"></i>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" style=\"display: inline;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t (click)=\"sortUsersUp();\">\n\t\t\t\t\t<i class=\"icon icon-chevronup\"></i>\n\t\t\t\t</button>\n            </div>\n            <div class=\"col-2\">\n                <span>Телефон</span>\n            </div>\n            <div class=\"col-2\">\n                <span>Дата рождения</span>\n            </div>\n            <div class=\"col-2\">\n                <span>Страховая компания</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-1\">\n                <span>Договор</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-1\" style=\"text-align: center\">\n\t\t\t\t <span>Пол</span>\n            </div>\n            <div class=\"col-1\"> </div>\n        </div>\n    </div>\n    <div class=\"tbody\">\n\t\t<div *ngFor=\"let user of users;\">\n\t\t\t<a [ngClass]=\"{row:true, selected:user.selected}\">\n\t\t\t\t<div class=\"col-1\" style=\"margin: auto;\">\n\t\t\t\t\t<input type=\"checkbox\" \n\t\t\t\t\t\t   class=\"checkbox\" \n\t\t\t\t\t\t   id=\"{{user.id}}\" \n\t\t\t\t\t\t   [checked]=\"user.selected\" \n\t\t\t\t\t\t   (change)=\"user.selected = !user.selected;\"\n\t\t\t\t\t\t   >\n\t\t\t\t\t<label for=\"{{ user.id}}\" style=\"float: right\"></label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\" [routerLink]=\"['/users', user.id]\">\n\t\t\t\t\t<span>{{user.lastName}} {{user.firstName[0]}}. {{user.middleName[0]}}.</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\" [routerLink]=\"['/users', user.id]\">\n\t\t\t\t\t<span>{{user.phone}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\" [routerLink]=\"['/users', user.id]\">\n\t\t\t\t\t<span>{{user.birthDate}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\" [routerLink]=\"['/users', user.id]\">\n\t\t\t\t\t<span>{{user.insuredCompanyName}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-1\" style=\"margin: auto;\" [routerLink]=\"['/users', user.id]\">\n\t\t\t\t\t<span>{{user.programNumber}}</span>\n                </div>\n                <div class=\"col-1\" style=\"margin: auto; text-align: center\" [routerLink]=\"['/users', user.id]\">\n                    <span *ngIf=\"user.isMan\">М</span>\n                    <span *ngIf=\"!user.isMan\">Ж</span>\n                </div>\n\t\t\t\t<div class=\"col-1\" style=\"display: inline; margin: auto;\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t\t  title=\"Новый убыток\"\n\t\t\t\t\t\t\t\t\t\t  style=\"display: inline\"\n\t\t\t\t\t\t\t\t\t\t  [routerLink]=\"['/losses/new/', user.id]\">\n\t\t\t\t\t\t<i class=\"icon icon-inventorisation\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary color-delete\" \n\t\t\t\t\t\t\t\t\t\t  title=\"Удалить\"\n\t\t\t\t\t\t\t\t\t\t  data-toggle=\"modal\"\n\t\t\t\t\t\t\t\t\t\t  data-target=\"#delete-modal\"\n\t\t\t\t\t\t\t\t\t\t  (click)=\"user.selected = true; deleteUsers();\"\n\t\t\t\t\t\t\t\t\t\t  style=\"display: inline;\">\n\t\t\t\t\t\t<i class=\"icon icon-delete\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\t\t\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"delete-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h3 class=\"modal-title\">Удаление</h3>\n\t\t\t\t<button type=\"button\" class=\"btn btn-icon btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t  style=\"color: #fe4902;\" >\n\t\t\t\t\t<i class=\"icon icon-close\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"countOfUsers == 0\">\n\t\t\t\tВыбрано 0 пользователей, для удаления выберите пользователей!\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"countOfUsers == 1\">\n\t\t\t\tВы действительно хотите удалить выбранного пользователя?\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" *ngIf=\"countOfUsers != 0 && countOfUsers != 1 \">\n\t\t\t\tВы действительно хотите удалить {{countOfUsers}} выбранных пользователей?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  *ngIf=\"countOfUsers > 0\">Отмена</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" \n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  *ngIf=\"countOfUsers == 0\">Выбрать</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t\t  data-dismiss=\"modal\"\n\t\t\t\t\t\t\t\t\t  (click)=\"deleteSelectedUsers()\"\n\t\t\t\t\t\t\t\t\t  *ngIf=\"countOfUsers > 0\">Удалить</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

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



var routes = [];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tmmed-navigation {\n  border-right: 2px solid #EAEDF0;\n  height: 100%;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */\n}\n\n/* Optional: show position indicator in red */\n\n::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLCtCQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBQ0ksVUFBQTtFQUFhLDJCQUFBO0VBQ2IsdUJBQUE7RUFBMEIsNENBQUE7QUNJOUI7O0FERkEsNkNBQUE7O0FBQ0E7RUFDSSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidG1tZWQtbmF2aWdhdGlvbntcclxuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRUFFREYwO1xyXG5cdGhlaWdodDogMTAwJTs7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gcmVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxufVxyXG5cclxuIiwidG1tZWQtbmF2aWdhdGlvbiB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNFQUVERjA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xufVxuXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gcmVkICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMDtcbn0iXX0= */"

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
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/mkb10.service */ "./src/app/service/mkb10.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_mkb10Service) {
        this._mkb10Service = _mkb10Service;
        this.title = 'med-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _common_filters_filters_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common/filters/filters.component */ "./src/app/common/filters/filters.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./common/navigation/navigation.component */ "./src/app/common/navigation/navigation.component.ts");
/* harmony import */ var _common_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/not-found/not-found.component */ "./src/app/common/not-found/not-found.component.ts");
/* harmony import */ var _common_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common/start-page/start-page.component */ "./src/app/common/start-page/start-page.component.ts");
/* harmony import */ var _company_company_id_company_id_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./company/company-id/company-id.component */ "./src/app/company/company-id/company-id.component.ts");
/* harmony import */ var _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./company/company-list/company-list.component */ "./src/app/company/company-list/company-list.component.ts");
/* harmony import */ var _coverage_coverage_list_coverage_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./coverage/coverage-list/coverage-list.component */ "./src/app/coverage/coverage-list/coverage-list.component.ts");
/* harmony import */ var _coverage_coverage_list_med_coverage_list_med_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./coverage/coverage-list-med/coverage-list-med.component */ "./src/app/coverage/coverage-list-med/coverage-list-med.component.ts");
/* harmony import */ var _coverage_coverage_list_procedure_coverage_list_procedure_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./coverage/coverage-list-procedure/coverage-list-procedure.component */ "./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.ts");
/* harmony import */ var _coverage_coverage_list_med_add_coverage_list_med_add_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./coverage/coverage-list-med-add/coverage-list-med-add.component */ "./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.ts");
/* harmony import */ var _coverage_coverage_list_procedure_add_coverage_list_procedure_add_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./coverage/coverage-list-procedure-add/coverage-list-procedure-add.component */ "./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.ts");
/* harmony import */ var _loss_loss_id_loss_id_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./loss/loss-id/loss-id.component */ "./src/app/loss/loss-id/loss-id.component.ts");
/* harmony import */ var _loss_loss_id_med_loss_id_med_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./loss/loss-id-med/loss-id-med.component */ "./src/app/loss/loss-id-med/loss-id-med.component.ts");
/* harmony import */ var _loss_loss_id_mkb_modal_loss_id_mkb_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./loss/loss-id-mkb-modal/loss-id-mkb-modal.component */ "./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.ts");
/* harmony import */ var _loss_loss_list_loss_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./loss/loss-list/loss-list.component */ "./src/app/loss/loss-list/loss-list.component.ts");
/* harmony import */ var _loss_loss_id_procedure_loss_id_procedure_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loss/loss-id-procedure/loss-id-procedure.component */ "./src/app/loss/loss-id-procedure/loss-id-procedure.component.ts");
/* harmony import */ var _loss_loss_id_med_add_loss_id_med_add_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./loss/loss-id-med-add/loss-id-med-add.component */ "./src/app/loss/loss-id-med-add/loss-id-med-add.component.ts");
/* harmony import */ var _loss_loss_id_procedure_add_loss_id_procedure_add_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./loss/loss-id-procedure-add/loss-id-procedure-add.component */ "./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.ts");
/* harmony import */ var _product_product_id_product_id_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./product/product-id/product-id.component */ "./src/app/product/product-id/product-id.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _program_program_id_program_id_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./program/program-id/program-id.component */ "./src/app/program/program-id/program-id.component.ts");
/* harmony import */ var _program_program_list_program_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./program/program-list/program-list.component */ "./src/app/program/program-list/program-list.component.ts");
/* harmony import */ var _setting_setting_tree_setting_tree_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./setting/setting-tree/setting-tree.component */ "./src/app/setting/setting-tree/setting-tree.component.ts");
/* harmony import */ var _user_user_id_user_id_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./user/user-id/user-id.component */ "./src/app/user/user-id/user-id.component.ts");
/* harmony import */ var _user_user_id_loss_user_id_loss_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./user/user-id-loss/user-id-loss.component */ "./src/app/user/user-id-loss/user-id-loss.component.ts");
/* harmony import */ var _user_user_exception_tree_mkb_user_exception_tree_mkb_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./user/user-exception-tree-mkb/user-exception-tree-mkb.component */ "./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.ts");
/* harmony import */ var _setting_setting_tree_procedure_setting_tree_procedure_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./setting/setting-tree-procedure/setting-tree-procedure.component */ "./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.ts");
/* harmony import */ var _setting_setting_tree_med_setting_tree_med_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./setting/setting-tree-med/setting-tree-med.component */ "./src/app/setting/setting-tree-med/setting-tree-med.component.ts");
/* harmony import */ var _setting_setting_tree_med_add_setting_tree_med_add_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./setting/setting-tree-med-add/setting-tree-med-add.component */ "./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.ts");
/* harmony import */ var _setting_setting_tree_procedure_add_setting_tree_procedure_add_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./setting/setting-tree-procedure-add/setting-tree-procedure-add.component */ "./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.ts");
/* harmony import */ var _user_user_exception_user_exception_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./user/user-exception/user-exception.component */ "./src/app/user/user-exception/user-exception.component.ts");
/* harmony import */ var _user_user_exception_med_user_exception_med_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./user/user-exception-med/user-exception-med.component */ "./src/app/user/user-exception-med/user-exception-med.component.ts");
/* harmony import */ var _user_user_exception_procedure_user_exception_procedure_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./user/user-exception-procedure/user-exception-procedure.component */ "./src/app/user/user-exception-procedure/user-exception-procedure.component.ts");
/* harmony import */ var _user_user_exception_procedure_groups_user_exception_procedure_groups_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./user/user-exception-procedure-groups/user-exception-procedure-groups.component */ "./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.ts");
/* harmony import */ var _user_user_exception_med_groups_user_exception_med_groups_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./user/user-exception-med-groups/user-exception-med-groups.component */ "./src/app/user/user-exception-med-groups/user-exception-med-groups.component.ts");
/* harmony import */ var _java_hack_start_page_java_hack_start_page_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./java-hack-start-page/java-hack-start-page.component */ "./src/app/java-hack-start-page/java-hack-start-page.component.ts");
/* harmony import */ var _page_for_user_page_for_user_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./page-for-user/page-for-user.component */ "./src/app/page-for-user/page-for-user.component.ts");






























































var appRoutes = [
    { path: '', component: _common_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_28__["StartPageComponent"] },
    { path: 'offer/:offerId', component: _page_for_user_page_for_user_component__WEBPACK_IMPORTED_MODULE_61__["PageForUserComponent"] },
    { path: 'users/:profileId', component: _user_user_id_user_id_component__WEBPACK_IMPORTED_MODULE_48__["UserIdComponent"] },
    { path: 'users/company/:filter', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_23__["UserListComponent"] },
    { path: 'users/product/:filter', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_23__["UserListComponent"] },
    { path: 'users/program/:filter', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_23__["UserListComponent"] },
    { path: 'users', component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_23__["UserListComponent"] },
    { path: 'companies/:companyId/products/:productId/programs/:programId/coverages/:settingsType/settings',
        component: _setting_setting_tree_setting_tree_component__WEBPACK_IMPORTED_MODULE_47__["SettingTreeComponent"] },
    { path: 'companies/:companyId/products/:productId/programs/:programId/coverages', component: _coverage_coverage_list_coverage_list_component__WEBPACK_IMPORTED_MODULE_31__["CoverageListComponent"] },
    { path: 'companies/:companyId/products/:productId/programs/:programId', component: _program_program_id_program_id_component__WEBPACK_IMPORTED_MODULE_45__["ProgramIdComponent"] },
    { path: 'companies/:companyId/products/:productId/programs', component: _program_program_list_program_list_component__WEBPACK_IMPORTED_MODULE_46__["ProgramListComponent"] },
    { path: 'companies/:companyId', component: _company_company_id_company_id_component__WEBPACK_IMPORTED_MODULE_29__["CompanyIdComponent"] },
    { path: 'companies', component: _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_30__["CompanyListComponent"] },
    { path: 'companies/:companyId/products/:productId', component: _product_product_id_product_id_component__WEBPACK_IMPORTED_MODULE_43__["ProductIdComponent"] },
    { path: 'companies/:companyId/products', component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_44__["ProductListComponent"] },
    { path: 'losses/new/:userId', component: _loss_loss_id_loss_id_component__WEBPACK_IMPORTED_MODULE_36__["LossIdComponent"] },
    { path: 'losses/:lossId', component: _loss_loss_id_loss_id_component__WEBPACK_IMPORTED_MODULE_36__["LossIdComponent"] },
    { path: 'losses', component: _loss_loss_list_loss_list_component__WEBPACK_IMPORTED_MODULE_39__["LossListComponent"] },
    { path: '**', component: _common_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_23__["UserListComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                _common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_26__["NavigationComponent"],
                _product_product_id_product_id_component__WEBPACK_IMPORTED_MODULE_43__["ProductIdComponent"],
                _program_program_id_program_id_component__WEBPACK_IMPORTED_MODULE_45__["ProgramIdComponent"],
                _company_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_30__["CompanyListComponent"],
                _loss_loss_list_loss_list_component__WEBPACK_IMPORTED_MODULE_39__["LossListComponent"],
                _common_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"],
                _user_user_id_user_id_component__WEBPACK_IMPORTED_MODULE_48__["UserIdComponent"],
                _common_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_28__["StartPageComponent"],
                _loss_loss_id_loss_id_component__WEBPACK_IMPORTED_MODULE_36__["LossIdComponent"],
                _company_company_id_company_id_component__WEBPACK_IMPORTED_MODULE_29__["CompanyIdComponent"],
                _program_program_list_program_list_component__WEBPACK_IMPORTED_MODULE_46__["ProgramListComponent"],
                _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_44__["ProductListComponent"],
                _coverage_coverage_list_coverage_list_component__WEBPACK_IMPORTED_MODULE_31__["CoverageListComponent"],
                _setting_setting_tree_setting_tree_component__WEBPACK_IMPORTED_MODULE_47__["SettingTreeComponent"],
                _loss_loss_id_med_loss_id_med_component__WEBPACK_IMPORTED_MODULE_37__["LossIdMedComponent"],
                _loss_loss_id_mkb_modal_loss_id_mkb_modal_component__WEBPACK_IMPORTED_MODULE_38__["LossIdMkbModalComponent"],
                _loss_loss_id_procedure_loss_id_procedure_component__WEBPACK_IMPORTED_MODULE_40__["LossIdProcedureComponent"],
                _user_user_id_loss_user_id_loss_component__WEBPACK_IMPORTED_MODULE_49__["UserIdLossComponent"],
                _loss_loss_id_med_add_loss_id_med_add_component__WEBPACK_IMPORTED_MODULE_41__["LossIdMedAddComponent"],
                _loss_loss_id_procedure_add_loss_id_procedure_add_component__WEBPACK_IMPORTED_MODULE_42__["LossIdProcedureAddComponent"],
                _common_filters_filters_component__WEBPACK_IMPORTED_MODULE_24__["FiltersComponent"],
                _setting_setting_tree_procedure_setting_tree_procedure_component__WEBPACK_IMPORTED_MODULE_51__["SettingTreeProcedureComponent"],
                _setting_setting_tree_med_setting_tree_med_component__WEBPACK_IMPORTED_MODULE_52__["SettingTreeMedComponent"],
                _setting_setting_tree_med_add_setting_tree_med_add_component__WEBPACK_IMPORTED_MODULE_53__["SettingTreeMedAddComponent"],
                _setting_setting_tree_procedure_add_setting_tree_procedure_add_component__WEBPACK_IMPORTED_MODULE_54__["SettingTreeProcedureAddComponent"],
                _user_user_exception_tree_mkb_user_exception_tree_mkb_component__WEBPACK_IMPORTED_MODULE_50__["UserExceptionTreeMkbComponent"],
                _coverage_coverage_list_med_coverage_list_med_component__WEBPACK_IMPORTED_MODULE_32__["CoverageListMedComponent"],
                _coverage_coverage_list_procedure_coverage_list_procedure_component__WEBPACK_IMPORTED_MODULE_33__["CoverageListProcedureComponent"],
                _coverage_coverage_list_med_add_coverage_list_med_add_component__WEBPACK_IMPORTED_MODULE_34__["CoverageListMedAddComponent"],
                _coverage_coverage_list_procedure_add_coverage_list_procedure_add_component__WEBPACK_IMPORTED_MODULE_35__["CoverageListProcedureAddComponent"],
                _user_user_exception_user_exception_component__WEBPACK_IMPORTED_MODULE_55__["UserExceptionComponent"],
                _user_user_exception_med_user_exception_med_component__WEBPACK_IMPORTED_MODULE_56__["UserExceptionMedComponent"],
                _user_user_exception_procedure_user_exception_procedure_component__WEBPACK_IMPORTED_MODULE_57__["UserExceptionProcedureComponent"],
                _user_user_exception_procedure_groups_user_exception_procedure_groups_component__WEBPACK_IMPORTED_MODULE_58__["UserExceptionProcedureGroupsComponent"],
                _user_user_exception_med_groups_user_exception_med_groups_component__WEBPACK_IMPORTED_MODULE_59__["UserExceptionMedGroupsComponent"],
                _java_hack_start_page_java_hack_start_page_component__WEBPACK_IMPORTED_MODULE_60__["JavaHackStartPageComponent"],
                _page_for_user_page_for_user_component__WEBPACK_IMPORTED_MODULE_61__["PageForUserComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_LOCALE"], useValue: 'ru-RU' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/filters/filters.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/filters/filters.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/common/filters/filters.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/filters/filters.component.ts ***!
  \*****************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FILTERS = [];
var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filters = FILTERS;
        this.showErrorEmpty = false;
        this.showFilter = true;
        this.filterToSend = [];
    }
    FiltersComponent.prototype.removeFilter = function (index) {
        for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.serialNumber > index) {
                value.serialNumber--;
            }
        }
        this.filters.splice(index, 1);
        this.filterToSend = [];
        for (var i = 0; i < this.filters.length; i++) {
            this.filterToSend[i] = this.filters[i].title;
        }
        this.onChanged.emit(this.filterToSend);
    };
    FiltersComponent.prototype.addNewFilter = function (title) {
        if (title) {
            this.filters.push({ serialNumber: this.filters.length, title: title });
            this.filterToSend = [];
            for (var i = 0; i < this.filters.length; i++) {
                this.filterToSend[i] = this.filters[i].title;
            }
            this.showErrorEmpty = false;
            this.onChanged.emit(this.filterToSend);
        }
        else {
            this.showErrorEmpty = true;
        }
    };
    FiltersComponent.prototype.createNewFilter = function (title) {
        if (title) {
            this.filters.push({ serialNumber: this.filters.length, title: title });
            this.filterToSend = [];
            for (var i = 0; i < this.filters.length; i++) {
                this.filterToSend[i] = this.filters[i].title;
            }
            this.showErrorEmpty = false;
            this.showFilter = true;
            this.onChanged.emit(this.filterToSend);
        }
        else {
            this.showErrorEmpty = true;
        }
    };
    FiltersComponent.prototype.ngOnInit = function () {
        this.filters = [];
        this.filterToSend = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FiltersComponent.prototype, "onChanged", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-filters',
            template: __webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/common/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\nli,\nli:hover,\nli:visited,\nli:active {\n  outline: none;\n}\n\nul {\n  margin: 0;\n  padding: 1px;\n  border-bottom: 2px solid #eaedf0;\n}\n\nul li {\n  display: inline;\n  padding: 4px 15px 4px 4px;\n}\n\nul li a {\n  text-transform: uppercase;\n}\n\n.active {\n  cursor: pointer;\n  border-bottom: #719cd4 2px solid;\n  padding-bottom: 7px;\n  transition: border 0.1s ease;\n}\n\n.active a {\n  color: #4c86bf;\n}\n\n.disabled {\n  cursor: default;\n}\n\n.disabled a {\n  cursor: default;\n  color: #616063;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJQyxhQUFBO0FDQ0Q7O0FEQ0E7Ozs7RUFJSSxhQUFBO0FDRUo7O0FEQUE7RUFDQyxTQUFBO0VBQ0EsWUFBQTtFQVFHLGdDQUFBO0FDSko7O0FESEM7RUFDQyxlQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURKRTtFQUNVLHlCQUFBO0FDTVo7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDSUo7O0FESEk7RUFDSSxjQUFBO0FDS1I7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ01SIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5saSxcclxubGk6aG92ZXIsXHJcbmxpOnZpc2l0ZWQsXHJcbmxpOmFjdGl2ZXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxudWwge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblx0bGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lO1xyXG5cdFx0cGFkZGluZzogNHB4IDE1cHggNHB4IDRweDtcclxuXHRcdGF7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHR9XHJcbiAgICB9XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VhZWRmMDtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIzcxOWNkNCAycHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMXMgZWFzZTtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICM0Yzg2YmY7XHJcbiAgICB9XHJcbn1cclxuLmRpc2FibGVke1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYXtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgY29sb3I6ICM2MTYwNjM7XHJcbiAgICB9XHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5saSxcbmxpOmhvdmVyLFxubGk6dmlzaXRlZCxcbmxpOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWFlZGYwO1xufVxudWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDRweCAxNXB4IDRweCA0cHg7XG59XG51bCBsaSBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogIzcxOWNkNCAycHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjFzIGVhc2U7XG59XG4uYWN0aXZlIGEge1xuICBjb2xvcjogIzRjODZiZjtcbn1cblxuLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmRpc2FibGVkIGEge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGNvbG9yOiAjNjE2MDYzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_location, router) {
        var _this = this;
        this._location = _location;
        this.router = router;
        this.showSearch = false;
        this.activeCompany = false;
        this.activeProduct = false;
        this.activeProgram = false;
        this.activeCoverage = false;
        this.activeSettings = false;
        this.urlForCompany = '';
        this.urlForProduct = '';
        this.urlForProgram = '';
        this.urlForCoverage = '';
        this.showExtraMenu = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                var url = event.url;
                if (url.includes('companies')) {
                    _this.showExtraMenu = true;
                    if (url.includes('companies')) {
                        _this.activeCompany = true;
                        _this.urlForCompany = '/companies';
                    }
                    else {
                        _this.activeCompany = false;
                    }
                    if (url.includes('products')) {
                        _this.activeProduct = true;
                        _this.urlForProduct = url.substring(0, url.indexOf('products') + 8);
                    }
                    else {
                        _this.activeProduct = false;
                    }
                    if (url.includes('programs')) {
                        _this.activeProgram = true;
                        _this.urlForProgram = url.substring(0, url.indexOf('programs') + 8);
                    }
                    else {
                        _this.activeProgram = false;
                    }
                    if (url.includes('coverages')) {
                        _this.activeCoverage = true;
                        _this.urlForCoverage = url.substring(0, url.indexOf('coverages') + 9);
                    }
                    else {
                        _this.activeCoverage = false;
                    }
                    if (url.includes('settings')) {
                        _this.activeSettings = true;
                    }
                    else {
                        _this.activeSettings = false;
                    }
                }
                else {
                    _this.showExtraMenu = false;
                }
            }
        });
    }
    HeaderComponent.prototype.backClicked = function () {
        this._location.back();
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb21tb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUMsYUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxuZGl2OmhvdmVyLFxyXG5kaXY6dmlzaXRlZCxcclxuZGl2OmFjdGl2ZXtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59IiwiZGl2LFxuZGl2OmhvdmVyLFxuZGl2OnZpc2l0ZWQsXG5kaXY6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.company = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].company;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/common/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/common/not-found/not-found.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/common/not-found/not-found.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/common/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/common/start-page/start-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/start-page/start-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  text-align: center;\n  margin: 10px;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-top: calc(50vh - 220px);\n}\n.row .damages {\n  background: url('Loss.svg') no-repeat center center;\n}\n.row .products {\n  background: url('Analitics.svg') no-repeat center center;\n}\n.row .coverage {\n  background: url('Settings.svg') no-repeat center center;\n}\n.row .users {\n  background: url('Insurance.svg') no-repeat center center;\n}\n.row .card {\n  background-size: 90%;\n  width: 100%;\n  height: 300px;\n  transition: 0.1s;\n}\n.row .card:hover {\n  margin-top: -10px;\n  margin-left: -10px;\n  height: 320px;\n  width: calc(100% + 20px);\n}\n.row .card:active {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb21tb24vc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDQ0Q7QURBQztFQUNDLG1EQUFBO0FDRUY7QURBQztFQUNDLHdEQUFBO0FDRUY7QURBQztFQUNDLHVEQUFBO0FDRUY7QURBQztFQUNDLHdEQUFBO0FDRUY7QURBQztFQUNDLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEQUM7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDRUY7QURBQztFQUNDLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDBweDtcclxuXHRtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAyMjBweCk7XHJcblx0LmRhbWFnZXMge1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL0xvc3Muc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcblx0fVxyXG5cdC5wcm9kdWN0cyB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvQW5hbGl0aWNzLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG5cdH1cclxuXHQuY292ZXJhZ2Uge1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL1NldHRpbmdzLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG5cdH1cclxuXHQudXNlcnMge1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL0luc3VyYW5jZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuXHR9XHJcblx0LmNhcmR7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IDkwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAzMDBweDtcclxuXHRcdHRyYW5zaXRpb246IDAuMXM7XHJcblx0fVxyXG5cdC5jYXJkOmhvdmVyIHtcclxuXHRcdG1hcmdpbi10b3A6IC0xMHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG5cdFx0aGVpZ2h0OiAzMjBweDtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcclxuXHR9XHJcblx0LmNhcmQ6YWN0aXZle1xyXG5cdFx0b3V0bGluZTogbm9uZVxyXG5cdH1cclxufVxyXG4iLCIucm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKDUwdmggLSAyMjBweCk7XG59XG4ucm93IC5kYW1hZ2VzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9Mb3NzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cbi5yb3cgLnByb2R1Y3RzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9BbmFsaXRpY3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xufVxuLnJvdyAuY292ZXJhZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL1NldHRpbmdzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cbi5yb3cgLnVzZXJzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9JbnN1cmFuY2Uuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xufVxuLnJvdyAuY2FyZCB7XG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cbi5yb3cgLmNhcmQ6aG92ZXIge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG59XG4ucm93IC5jYXJkOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/common/start-page/start-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/start-page/start-page.component.ts ***!
  \***********************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var StartPageComponent = /** @class */ (function () {
    function StartPageComponent() {
        this.company = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].company;
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-start-page',
            template: __webpack_require__(/*! raw-loader!./start-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.scss */ "./src/app/common/start-page/start-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/app/company/company-id/company-id.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/company/company-id/company-id.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max {\n  width: 100%;\n}\n\n.titleForInfo {\n  padding: 20px 0px;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.paddingTopForDis {\n  margin-top: 10px;\n}\n\n.paddingTopForAct {\n  margin-top: -5px;\n}\n\n.colorForMain {\n  background-color: #f6fff4;\n  border-radius: 10px;\n  border: 1px solid #e2e2e2;\n  padding: 10px 20px 0px 20px;\n}\n\n.colorForNotMain {\n  background-color: #fff;\n  border-radius: 10px;\n  border: 1px solid #e2e2e2;\n  padding: 10px 20px 0px 20px;\n}\n\n.btn-delete {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  background-color: #ff6161;\n  color: #fff;\n  padding: 10px 5px;\n  margin-top: 5px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.empty {\n  background: #ffcccc;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb21wYW55L2NvbXBhbnktaWQvY29tcGFueS1pZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcGFueS9jb21wYW55LWlkL2NvbXBhbnktaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0MsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNHRDs7QUREQTtFQUNDLGNBQUE7QUNJRDs7QURGQTtFQUNDLGNBQUE7QUNLRDs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNRSjs7QUROQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDU0o7O0FEUEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVUo7O0FEUkE7RUFDRSxpQkFBQTtBQ1dGOztBRFRBO0VBQ0ksbUJBQUE7QUNZSjs7QURWQTtFQUNJLGNBQUE7QUNhSjs7QURYQTtFQUNJLFdBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1pZC9jb21wYW55LWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aXRsZUZvckluZm97XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4uYWRkTmV3QnRue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZXtcclxuXHRjb2xvcjogICNmZTQ5MDI7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4ucGFkZGluZ1RvcEZvckRpc3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnBhZGRpbmdUb3BGb3JBY3R7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi5jb2xvckZvck1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmZmY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMHB4IDIwcHg7XHJcbn1cclxuLmNvbG9yRm9yTm90TWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAwcHggMjBweDtcclxufVxyXG4uYnRuLWRlbGV0ZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MTYxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmVtcHR5e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmY2NjYztcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufSIsIi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlRm9ySW5mbyB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uYWRkTmV3QnRuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5wYWRkaW5nVG9wRm9yRGlzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhZGRpbmdUb3BGb3JBY3Qge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uY29sb3JGb3JNYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmZmNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgcGFkZGluZzogMTBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uY29sb3JGb3JOb3RNYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgcGFkZGluZzogMTBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uYnRuLWRlbGV0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjE2MTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5lbXB0eSB7XG4gIGJhY2tncm91bmQ6ICNmZmNjY2M7XG59XG5cbi5jb2xvckZvckRpc2FibGVkIHtcbiAgY29sb3I6ICM4ZThlOGU7XG59XG5cbi5jb2xvckZvckFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/company/company-id/company-id.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company/company-id/company-id.component.ts ***!
  \************************************************************/
/*! exports provided: CompanyIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyIdComponent", function() { return CompanyIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");




var CompanyIdComponent = /** @class */ (function () {
    function CompanyIdComponent(_settingsService, router) {
        this._settingsService = _settingsService;
        this.router = router;
        this.readonly = true;
        this.newCompany = false;
        this.givenCompany = {
            address: '',
            briefName: '',
            companyName: '',
            id: null,
            inn: '',
            maxOncePayment: null,
            mainContactPersons: null,
            contactPersons: [],
            paymentDetails: []
        };
        // company
        this.currentCompany = {};
        this.idOfCompany = this.router.url.slice(11);
        this.updateCompany();
        // this.updateCurrentCompany(this.givenCompany);
    }
    CompanyIdComponent.prototype.updateCurrentCompany = function (company) {
        this.currentCompany = company;
        if (this.currentCompany.contactPersons.length === 1 && this.currentCompany.mainContactPersonId === undefined) {
            this.currentCompany.contactPersons[0].main = true;
            this.currentCompany.mainContactPersonId = this.currentCompany.contactPersons[0].id;
            this.changeCompany();
        }
        else {
            for (var _i = 0, _a = this.currentCompany.contactPersons; _i < _a.length; _i++) {
                var contact = _a[_i];
                contact.readonly = true;
                contact.delete = false;
                if (contact.id === company.mainContactPersonId) {
                    contact.main = true;
                }
                else {
                    contact.main = false;
                }
            }
            for (var _b = 0, _c = this.currentCompany.paymentDetails; _b < _c.length; _b++) {
                var payment = _c[_b];
                payment.delete = false;
                payment.readonly = true;
            }
        }
    };
    CompanyIdComponent.prototype.updateCompany = function () {
        var _this = this;
        if (this.idOfCompany[0] === 'n') {
            this.currentCompany = this.givenCompany;
            this.newCompany = true;
            this.readonly = false;
            this.setShowButtons(false);
        }
        else {
            this.newCompany = false;
            this.readonly = true;
            this.setShowButtons(true);
            this._settingsService.getCompanyById(this.idOfCompany).subscribe(function (data) {
                _this.updateCurrentCompany(data);
                _this.sortContacts();
            }, function (error) {
                console.log(error);
            });
        }
    };
    CompanyIdComponent.prototype.changeCompany = function () {
        var _this = this;
        var companyToSend = {
            address: this.currentCompany.address,
            briefName: this.currentCompany.briefName,
            companyName: this.currentCompany.companyName,
            id: this.currentCompany.id,
            inn: this.currentCompany.inn,
            maxOncePayment: this.currentCompany.maxOncePayment
        };
        if (this.currentCompany.mainContactPersonId !== undefined) {
            companyToSend.mainContactPersonId = this.currentCompany.mainContactPersonId;
        }
        this._settingsService.postCompanyById(companyToSend).subscribe(function (data) {
            if (_this.newCompany === true) {
                _this.router.navigate(['../companies/', data], { replaceUrl: true });
                _this.setShowButtons(true);
                _this.currentCompany.id = data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    // contact
    CompanyIdComponent.prototype.sortContacts = function () {
        this.currentCompany.contactPersons.sort(function (a, b) { return (a.main < b.main) ? 1 : ((b.main < a.main) ? -1 : 0); });
    };
    CompanyIdComponent.prototype.changeMainContact = function (choosenContact) {
        this.currentCompany.mainContactPersonId = choosenContact.id;
        for (var _i = 0, _a = this.currentCompany.contactPersons; _i < _a.length; _i++) {
            var contact = _a[_i];
            if (contact.id !== choosenContact.id) {
                contact.main = false;
            }
            else {
                contact.main = true;
            }
        }
    };
    CompanyIdComponent.prototype.addNewContact = function () {
        var newContact = {
            firstName: '',
            lastName: '',
            middleName: '',
            workType: '',
            email: '',
            phone1: null,
            phone2: null,
            phone3: null,
            id: 0,
            delete: true,
            readonly: false
        };
        newContact.main = this.currentCompany.contactPersons.length === 0 ? true : false;
        this.currentCompany.contactPersons.unshift(newContact);
    };
    CompanyIdComponent.prototype.sendContact = function (contact) {
        var _this = this;
        var contactToSend = {
            firstName: contact.firstName,
            lastName: contact.lastName,
            middleName: contact.middleName,
            workType: contact.workType,
            email: contact.email,
            phone1: contact.phone1,
            phone2: contact.phone2,
            phone3: contact.phone3,
            insuredCompanyId: this.currentCompany.id
        };
        if (contact.id !== 0) {
            contactToSend.id = contact.id;
        }
        this._settingsService.postContact(contactToSend).subscribe(function (data) {
            _this.currentCompany.contactPersons[0].id = data;
            if (_this.currentCompany.contactPersons.length === 1) {
                _this.currentCompany.mainContactPersonId = data;
                _this.changeCompany();
            }
            _this.setShowButtons(true);
        }, function (error) {
            console.log(error);
        });
    };
    CompanyIdComponent.prototype.deleteContact = function (choosenContact) {
        var _this = this;
        var idTodelete = choosenContact.id;
        if (idTodelete === 0) {
            this.updateCompany();
            this.setShowButtons(true);
        }
        this._settingsService.deleteContact(idTodelete).subscribe(function (data) {
            _this.updateCompany();
            _this.setShowButtons(true);
        }, function (error) {
            console.log(error);
        });
    };
    // payment
    CompanyIdComponent.prototype.addNewPayment = function () {
        var newPayment = {
            bankAccount: '',
            bankName: '',
            bik: '',
            address: '',
            id: 0,
            delete: true,
            readonly: false
        };
        this.currentCompany.paymentDetails.unshift(newPayment);
    };
    CompanyIdComponent.prototype.sendPayment = function (payment) {
        var _this = this;
        var paymentToSend = {
            bankAccount: payment.bankAccount,
            bankName: payment.bankName,
            bik: payment.bik,
            address: payment.address,
            insuredCompanyId: this.currentCompany.id
        };
        if (payment.id !== 0) {
            paymentToSend.id = payment.id;
        }
        this._settingsService.postPayment(paymentToSend).subscribe(function (data) {
            _this.currentCompany.paymentDetails[0].id = data;
            _this.setShowButtons(true);
        }, function (error) {
            console.log(error);
        });
    };
    CompanyIdComponent.prototype.deletePayment = function (choosenPayment) {
        var _this = this;
        var idTodelete = choosenPayment.id;
        if (idTodelete === 0) {
            var _loop_1 = function (payment) {
                if (payment.id === choosenPayment.id) {
                    this_1.currentCompany.paymentDetails = this_1.currentCompany.paymentDetails.filter(function (obj) { return obj !== payment; });
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.currentCompany.paymentDetails; _i < _a.length; _i++) {
                var payment = _a[_i];
                _loop_1(payment);
            }
            this.setShowButtons(true);
        }
        else {
            this._settingsService.deletePayment(idTodelete).subscribe(function (data) {
                var _loop_2 = function (payment) {
                    if (payment.id === choosenPayment.id) {
                        _this.currentCompany.paymentDetails = _this.currentCompany.paymentDetails.filter(function (obj) { return obj !== payment; });
                    }
                };
                for (var _i = 0, _a = _this.currentCompany.paymentDetails; _i < _a.length; _i++) {
                    var payment = _a[_i];
                    _loop_2(payment);
                }
                _this.setShowButtons(true);
            }, function (error) {
                console.log(error);
            });
        }
    };
    CompanyIdComponent.prototype.setShowButtons = function (x) {
        this.showAddPayment = x;
        this.showAddContact = x;
    };
    CompanyIdComponent.prototype.ngOnInit = function () {
    };
    CompanyIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-company-id',
            template: __webpack_require__(/*! raw-loader!./company-id.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-id/company-id.component.html"),
            styles: [__webpack_require__(/*! ./company-id.component.scss */ "./src/app/company/company-id/company-id.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompanyIdComponent);
    return CompanyIdComponent;
}());



/***/ }),

/***/ "./src/app/company/company-list/company-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/company/company-list/company-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.spanForTable {\n  margin: auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb21wYW55L2NvbXBhbnktbGlzdC9jb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS1saXN0L2NvbXBhbnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlDLGFBQUE7QUNDRDs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NvbXBhbnktbGlzdC9jb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uc3BhbkZvclRhYmxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3BhbkZvclRhYmxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/company/company-list/company-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/company/company-list/company-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(_settingsService, router, _dateToSendService) {
        this._settingsService = _settingsService;
        this.router = router;
        this._dateToSendService = _dateToSendService;
        this.companiesList = [];
        this.idOfDamage = this.router.url;
        this.filtersToSend = [];
    }
    CompanyListComponent.prototype.deleteCompany = function () {
        var _this = this;
        for (var _i = 0, _a = this.companiesList; _i < _a.length; _i++) {
            var company = _a[_i];
            if (company.selected === true) {
                this._settingsService.deleteCompanyById(company.id).subscribe(function (data) {
                    _this.updateList();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    CompanyListComponent.prototype.changeSelection = function () {
        for (var _i = 0, _a = this.companiesList; _i < _a.length; _i++) {
            var company = _a[_i];
            company.selected = !company.selected;
        }
    };
    CompanyListComponent.prototype.updateList = function () {
        var _this = this;
        this._settingsService.getCompanyList(this.filtersToSend).subscribe(function (data) {
            _this.companiesList = data.content;
            _this.amountOfCompanies = data.content.length;
            _this.typeOfLength = _this._dateToSendService.checkAmountToShow(_this.amountOfCompanies);
            for (var _i = 0, _a = _this.companiesList; _i < _a.length; _i++) {
                var company = _a[_i];
                if (company.contactPerson.lastName) {
                    company.contactName = company.contactPerson.lastName + ' ' +
                        company.contactPerson.firstName[0] + '. ' +
                        company.contactPerson.middleName[0] + '.';
                }
                company.contactType = company.contactPerson.workType;
                company.selected = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CompanyListComponent.prototype.setFilters = function (filters) {
        this.filtersToSend = filters;
        this.updateList();
    };
    CompanyListComponent.prototype.ngOnInit = function () {
        this.updateList();
    };
    CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-company-list',
            template: __webpack_require__(/*! raw-loader!./company-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/company/company-list/company-list.component.html"),
            styles: [__webpack_require__(/*! ./company-list.component.scss */ "./src/app/company/company-list/company-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header .btn-change {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px solid #ddd;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.max {\n  width: 100%;\n}\n\n.mat-expansion-panel-spacing {\n  margin-bottom: 16px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.addNewSpan {\n  background-color: #8e8e8e;\n  border: 0px;\n  border-radius: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.addNewSpan:hover {\n  background-color: #565656;\n  color: #f1f1f1;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-done {\n  color: #1dfb26;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LW1lZC1hZGQvY292ZXJhZ2UtbGlzdC1tZWQtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LW1lZC1hZGQvY292ZXJhZ2UtbGlzdC1tZWQtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDQVI7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0gsV0FBQTtFQUNBLGVBQUE7QUNHRDs7QUREQTtFQUNJLHlCQUFBO0VBQ0gsY0FBQTtBQ0lEOztBREZBO0VBQ0MsY0FBQTtBQ0tEOztBREhBO0VBQ0MsY0FBQTtBQ01EOztBREpBO0VBQ0MsY0FBQTtBQ09EOztBRExBO0VBQ0ksY0FBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LW1lZC1hZGQvY292ZXJhZ2UtbGlzdC1tZWQtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWRkTmV3U3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGROZXdTcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcclxuXHRjb2xvcjogI2YxZjFmMTtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZG9uZXtcclxuXHRjb2xvcjogICMxZGZiMjY7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbn0iLCJtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAuYnRuLWNoYW5nZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGROZXdTcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGROZXdTcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRvbmUge1xuICBjb2xvcjogIzFkZmIyNjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CoverageListMedAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageListMedAddComponent", function() { return CoverageListMedAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/settings.service */ "./src/app/service/settings.service.ts");




var CoverageListMedAddComponent = /** @class */ (function () {
    function CoverageListMedAddComponent(_mkb10Service, _settingsservice) {
        this._mkb10Service = _mkb10Service;
        this._settingsservice = _settingsservice;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.med = {
            programCoverId: this.coverageId,
            medicamentGroupId: '',
            onceFranchise: {
                maxSum: null,
                procent: null
            },
            onceLimit: {
                sum: null
            },
            monthLimit: {
                sum: null
            },
            yearLimit: {
                sum: null
            }
        };
    }
    CoverageListMedAddComponent.prototype.addNewMed = function () {
        var _this = this;
        var arrayToSend = [];
        arrayToSend.push(this.med);
        this._settingsservice.postMedicamentForCoverageById(arrayToSend, this.programId).subscribe(function (data) {
            _this.med = {
                programCoverId: _this.coverageId,
                medicamentGroupId: '',
                onceFranchise: {
                    maxSum: null,
                    procent: null
                },
                onceLimit: {
                    sum: null
                },
                monthLimit: {
                    sum: null
                },
                yearLimit: {
                    sum: null
                }
            };
            _this.deleteNewMed();
            _this.onUpdate.emit(data);
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListMedAddComponent.prototype.deleteNewMed = function () {
        this.onCancel.emit();
    };
    CoverageListMedAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.med.programCoverId = this.coverageId;
        this._mkb10Service.getListOfMedsGroup().subscribe(function (data) {
            _this.medicamentGroups = data.content;
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListMedAddComponent.prototype, "coverageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListMedAddComponent.prototype, "programId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListMedAddComponent.prototype, "onCancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListMedAddComponent.prototype, "onUpdate", void 0);
    CoverageListMedAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-coverage-list-med-add',
            template: __webpack_require__(/*! raw-loader!./coverage-list-med-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.html"),
            styles: [__webpack_require__(/*! ./coverage-list-med-add.component.scss */ "./src/app/coverage/coverage-list-med-add/coverage-list-med-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mkb10_service__WEBPACK_IMPORTED_MODULE_2__["Mkb10Service"],
            src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], CoverageListMedAddComponent);
    return CoverageListMedAddComponent;
}());



/***/ }),

/***/ "./src/app/coverage/coverage-list-med/coverage-list-med.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-med/coverage-list-med.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header .btn-change {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px solid #ddd;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.max {\n  width: 100%;\n}\n\n.mat-expansion-panel-spacing {\n  margin-bottom: 16px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.addNewSpan {\n  background-color: #8e8e8e;\n  border: 0px;\n  border-radius: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.addNewSpan:hover {\n  background-color: #565656;\n  color: #f1f1f1;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-done {\n  color: #1dfb26;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LW1lZC9jb3ZlcmFnZS1saXN0LW1lZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY292ZXJhZ2UvY292ZXJhZ2UtbGlzdC1tZWQvY292ZXJhZ2UtbGlzdC1tZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNBUjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDSCxXQUFBO0VBQ0EsZUFBQTtBQ0dEOztBRERBO0VBQ0kseUJBQUE7RUFDSCxjQUFBO0FDSUQ7O0FERkE7RUFDQyxjQUFBO0FDS0Q7O0FESEE7RUFDQyxjQUFBO0FDTUQ7O0FESkE7RUFDQyxjQUFBO0FDT0Q7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSx5QkFBQTtBQ1VKOztBRFJBO0VBQ0kseUJBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2NvdmVyYWdlL2NvdmVyYWdlLWxpc3QtbWVkL2NvdmVyYWdlLWxpc3QtbWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWRkTmV3U3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGROZXdTcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcclxuXHRjb2xvcjogI2YxZjFmMTtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZG9uZXtcclxuXHRjb2xvcjogICMxZGZiMjY7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbn0iLCJtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAuYnRuLWNoYW5nZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGROZXdTcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGROZXdTcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRvbmUge1xuICBjb2xvcjogIzFkZmIyNjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/coverage/coverage-list-med/coverage-list-med.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-med/coverage-list-med.component.ts ***!
  \***************************************************************************/
/*! exports provided: CoverageListMedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageListMedComponent", function() { return CoverageListMedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");




var CoverageListMedComponent = /** @class */ (function () {
    function CoverageListMedComponent(_settingsservice, _mkb10Service) {
        this._settingsservice = _settingsservice;
        this._mkb10Service = _mkb10Service;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.med = {
            id: null,
            medicamentGroupId: null,
            monthLimit: {
                count: null,
                id: null,
                sum: null
            },
            onceFranchise: {
                id: null,
                maxSum: null,
                procent: null
            },
            onceLimit: {
                count: null,
                id: null,
                sum: null
            },
            programCoverId: null,
            yearFranchise: {
                id: null,
                maxSum: null,
                procent: null
            },
            yearLimit: {
                count: null,
                id: null,
                sum: null
            }
        };
        this.isReadonly = true;
    }
    CoverageListMedComponent.prototype.deleteMed = function () {
        var _this = this;
        this._settingsservice.deleteMedicamentForCoverageById(this.coverageId, this.med.id).subscribe(function (data) {
            _this.changeCoverage(data);
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListMedComponent.prototype.changeMed = function () {
        var _this = this;
        var arrayToSend = [];
        arrayToSend.push(this.med);
        this._settingsservice.postMedicamentForCoverageById(arrayToSend, this.programId).subscribe(function (data) {
            _this.changeCoverage(data);
            _this.isReadonly = true;
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListMedComponent.prototype.changeCoverage = function (data) {
        console.log(data);
        this.onChanged.emit(data);
    };
    CoverageListMedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mkb10Service.getListOfMedsGroup().subscribe(function (data) {
            _this.medicamentGroups = data.content;
        }, function (error) {
            console.log(error);
        });
        for (var field in this.medicament) {
            if (this.medicament.hasOwnProperty(field)) {
                this.med[field] = this.medicament[field];
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListMedComponent.prototype, "medicament", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListMedComponent.prototype, "coverageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListMedComponent.prototype, "programId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListMedComponent.prototype, "onChanged", void 0);
    CoverageListMedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-coverage-list-med',
            template: __webpack_require__(/*! raw-loader!./coverage-list-med.component.html */ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-med/coverage-list-med.component.html"),
            styles: [__webpack_require__(/*! ./coverage-list-med.component.scss */ "./src/app/coverage/coverage-list-med/coverage-list-med.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"]])
    ], CoverageListMedComponent);
    return CoverageListMedComponent;
}());



/***/ }),

/***/ "./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header .btn-change {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px solid #ddd;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.max {\n  width: 100%;\n}\n\n.mat-expansion-panel-spacing {\n  margin-bottom: 16px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.addNewSpan {\n  background-color: #8e8e8e;\n  border: 0px;\n  border-radius: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.addNewSpan:hover {\n  background-color: #565656;\n  color: #f1f1f1;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-done {\n  color: #1dfb26;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LXByb2NlZHVyZS1hZGQvY292ZXJhZ2UtbGlzdC1wcm9jZWR1cmUtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LXByb2NlZHVyZS1hZGQvY292ZXJhZ2UtbGlzdC1wcm9jZWR1cmUtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDQVI7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0gsV0FBQTtFQUNBLGVBQUE7QUNHRDs7QUREQTtFQUNJLHlCQUFBO0VBQ0gsY0FBQTtBQ0lEOztBREZBO0VBQ0MsY0FBQTtBQ0tEOztBREhBO0VBQ0MsY0FBQTtBQ01EOztBREpBO0VBQ0MsY0FBQTtBQ09EOztBRExBO0VBQ0ksY0FBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LXByb2NlZHVyZS1hZGQvY292ZXJhZ2UtbGlzdC1wcm9jZWR1cmUtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWRkTmV3U3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGROZXdTcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcclxuXHRjb2xvcjogI2YxZjFmMTtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZG9uZXtcclxuXHRjb2xvcjogICMxZGZiMjY7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbn0iLCJtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAuYnRuLWNoYW5nZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGROZXdTcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGROZXdTcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRvbmUge1xuICBjb2xvcjogIzFkZmIyNjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CoverageListProcedureAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageListProcedureAddComponent", function() { return CoverageListProcedureAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/settings.service */ "./src/app/service/settings.service.ts");




var CoverageListProcedureAddComponent = /** @class */ (function () {
    function CoverageListProcedureAddComponent(_mkb10Service, _settingsservice) {
        this._mkb10Service = _mkb10Service;
        this._settingsservice = _settingsservice;
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.service = {
            programCoverId: this.coverageId,
            procedureGroupId: '',
            onceFranchise: {
                maxSum: null,
                procent: null
            },
            onceLimit: {
                sum: null
            },
            monthLimit: {
                sum: null
            },
            yearLimit: {
                sum: null
            }
        };
    }
    CoverageListProcedureAddComponent.prototype.addNewService = function () {
        var _this = this;
        var arrayToSend = [];
        arrayToSend.push(this.service);
        this._settingsservice.postProcedureForCoverageById(arrayToSend, this.programId).subscribe(function (data) {
            _this.service = {
                programCoverId: _this.coverageId,
                procedureGroupId: '',
                onceFranchise: {
                    maxSum: null,
                    procent: null
                },
                onceLimit: {
                    sum: null
                },
                monthLimit: {
                    sum: null
                },
                yearLimit: {
                    sum: null
                }
            };
            _this.deleteNewService();
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListProcedureAddComponent.prototype.deleteNewService = function () {
        this.onCancel.emit();
    };
    CoverageListProcedureAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.programCoverId = this.coverageId;
        this._mkb10Service.getListOfServiceGroup().subscribe(function (data) {
            _this.procedureGroups = data.content;
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListProcedureAddComponent.prototype, "coverageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListProcedureAddComponent.prototype, "programId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListProcedureAddComponent.prototype, "onCancel", void 0);
    CoverageListProcedureAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-coverage-list-procedure-add',
            template: __webpack_require__(/*! raw-loader!./coverage-list-procedure-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.html"),
            styles: [__webpack_require__(/*! ./coverage-list-procedure-add.component.scss */ "./src/app/coverage/coverage-list-procedure-add/coverage-list-procedure-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mkb10_service__WEBPACK_IMPORTED_MODULE_2__["Mkb10Service"],
            src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], CoverageListProcedureAddComponent);
    return CoverageListProcedureAddComponent;
}());



/***/ }),

/***/ "./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header .btn-change {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px solid #ddd;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.max {\n  width: 100%;\n}\n\n.mat-expansion-panel-spacing {\n  margin-bottom: 16px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.addNewSpan {\n  background-color: #8e8e8e;\n  border: 0px;\n  border-radius: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.addNewSpan:hover {\n  background-color: #565656;\n  color: #f1f1f1;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-done {\n  color: #1dfb26;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0LXByb2NlZHVyZS9jb3ZlcmFnZS1saXN0LXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY292ZXJhZ2UvY292ZXJhZ2UtbGlzdC1wcm9jZWR1cmUvY292ZXJhZ2UtbGlzdC1wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNBUjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDSCxXQUFBO0VBQ0EsZUFBQTtBQ0dEOztBRERBO0VBQ0kseUJBQUE7RUFDSCxjQUFBO0FDSUQ7O0FERkE7RUFDQyxjQUFBO0FDS0Q7O0FESEE7RUFDQyxjQUFBO0FDTUQ7O0FESkE7RUFDQyxjQUFBO0FDT0Q7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSx5QkFBQTtBQ1VKOztBRFJBO0VBQ0kseUJBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2NvdmVyYWdlL2NvdmVyYWdlLWxpc3QtcHJvY2VkdXJlL2NvdmVyYWdlLWxpc3QtcHJvY2VkdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWRkTmV3U3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGROZXdTcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcclxuXHRjb2xvcjogI2YxZjFmMTtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZG9uZXtcclxuXHRjb2xvcjogICMxZGZiMjY7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbn0iLCJtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAuYnRuLWNoYW5nZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGROZXdTcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGROZXdTcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRvbmUge1xuICBjb2xvcjogIzFkZmIyNjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CoverageListProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageListProcedureComponent", function() { return CoverageListProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");




var CoverageListProcedureComponent = /** @class */ (function () {
    function CoverageListProcedureComponent(_settingsservice, _mkb10Service) {
        this._settingsservice = _settingsservice;
        this._mkb10Service = _mkb10Service;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.procedure = {
            id: null,
            procedureGroupId: null,
            monthLimit: {
                count: null,
                id: null,
                sum: null
            },
            onceFranchise: {
                id: null,
                maxSum: null,
                procent: null
            },
            onceLimit: {
                count: null,
                id: null,
                sum: null
            },
            programCoverId: null,
            yearFranchise: {
                id: null,
                maxSum: null,
                procent: null
            },
            yearLimit: {
                count: null,
                id: null,
                sum: null
            }
        };
        this.isReadonly = true;
    }
    CoverageListProcedureComponent.prototype.deleteService = function () {
        var _this = this;
        this._settingsservice.deleteProcedureForCoverageById(this.coverageId, this.procedure.id).subscribe(function (data) {
            _this.changeCoverage(data);
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListProcedureComponent.prototype.changeService = function () {
        var _this = this;
        var arrayToSend = [];
        arrayToSend.push(this.procedure);
        this._settingsservice.postProcedureForCoverageById(arrayToSend, this.programId).subscribe(function (data) {
            _this.changeCoverage(data);
            _this.isReadonly = true;
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListProcedureComponent.prototype.changeCoverage = function (data) {
        console.log(data);
        this.onChanged.emit(data);
    };
    CoverageListProcedureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mkb10Service.getListOfServiceGroup().subscribe(function (data) {
            _this.procedureGroups = data.content;
        }, function (error) {
            console.log(error);
        });
        for (var field in this.service) {
            if (this.service.hasOwnProperty(field)) {
                this.procedure[field] = this.service[field];
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListProcedureComponent.prototype, "service", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListProcedureComponent.prototype, "coverageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CoverageListProcedureComponent.prototype, "programId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CoverageListProcedureComponent.prototype, "onChanged", void 0);
    CoverageListProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-coverage-list-procedure',
            template: __webpack_require__(/*! raw-loader!./coverage-list-procedure.component.html */ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.html"),
            styles: [__webpack_require__(/*! ./coverage-list-procedure.component.scss */ "./src/app/coverage/coverage-list-procedure/coverage-list-procedure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"]])
    ], CoverageListProcedureComponent);
    return CoverageListProcedureComponent;
}());



/***/ }),

/***/ "./src/app/coverage/coverage-list/coverage-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/coverage/coverage-list/coverage-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header .btn-change {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px solid #ddd;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.max {\n  width: 100%;\n}\n\n.mat-expansion-panel-spacing {\n  margin-bottom: 16px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.addNewSpan {\n  background-color: #8e8e8e;\n  border: 0px;\n  border-radius: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.addNewSpan:hover {\n  background-color: #565656;\n  color: #f1f1f1;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-done {\n  color: #1dfb26;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9jb3ZlcmFnZS9jb3ZlcmFnZS1saXN0L2NvdmVyYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvdmVyYWdlL2NvdmVyYWdlLWxpc3QvY292ZXJhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURHQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ0FSOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNILFdBQUE7RUFDQSxlQUFBO0FDR0Q7O0FEREE7RUFDSSx5QkFBQTtFQUNILGNBQUE7QUNJRDs7QURGQTtFQUNDLGNBQUE7QUNLRDs7QURIQTtFQUNDLGNBQUE7QUNNRDs7QURKQTtFQUNDLGNBQUE7QUNPRDs7QURMQTtFQUNJLGNBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO0FDVUo7O0FEUkE7RUFDSSx5QkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvY292ZXJhZ2UvY292ZXJhZ2UtbGlzdC9jb3ZlcmFnZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWRkTmV3U3BhbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGROZXdTcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcclxuXHRjb2xvcjogI2YxZjFmMTtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZG9uZXtcclxuXHRjb2xvcjogICMxZGZiMjY7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbn0iLCJtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAuYnRuLWNoYW5nZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGROZXdTcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGROZXdTcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRvbmUge1xuICBjb2xvcjogIzFkZmIyNjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZThlOGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/coverage/coverage-list/coverage-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coverage/coverage-list/coverage-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CoverageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverageListComponent", function() { return CoverageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");





var CoverageListComponent = /** @class */ (function () {
    function CoverageListComponent(router, _mkb10Service, _settingsservice) {
        this.router = router;
        this._mkb10Service = _mkb10Service;
        this._settingsservice = _settingsservice;
        this.idOfProgram = this.router.url.substring(this.router.url.lastIndexOf('programs/') + 9, this.router.url.lastIndexOf('/coverages'));
        this.coverageList = [];
        this.showAddBtn = true;
        this.nameOfProgram = '';
    }
    CoverageListComponent.prototype.changeCoverage = function (coverage) {
        var _this = this;
        delete coverage.readonly;
        delete coverage.isAddingMed;
        delete coverage.isAddingService;
        this._settingsservice.postCoverageById(coverage).subscribe(function (data) {
            for (var _i = 0, _a = _this.coverageList; _i < _a.length; _i++) {
                var cover = _a[_i];
                if (cover.id === coverage.id) {
                    cover = coverage;
                    cover.readonly = true;
                    cover.isAddingMed = false;
                    cover.isAddingService = false;
                    console.log(coverage);
                }
            }
            _this.showAddBtn = true;
        }, function (error) {
            coverage.readonly = true;
            console.log(error);
        });
    };
    CoverageListComponent.prototype.updateCoverage = function (data, coverage) {
        for (var _i = 0, _a = this.coverageList; _i < _a.length; _i++) {
            var cover = _a[_i];
            if (cover === coverage) {
                cover = data;
            }
        }
    };
    CoverageListComponent.prototype.changeMedicament = function (idOfCoverage, medicamentGroup) {
        for (var _i = 0, _a = this.coverageList; _i < _a.length; _i++) {
            var coverage = _a[_i];
            if (idOfCoverage === coverage.id) {
                for (var _b = 0, _c = coverage.medicamentGroups; _b < _c.length; _b++) {
                    var medicament = _c[_b];
                    if (medicamentGroup.id === medicament.id) {
                        medicament = medicamentGroup;
                        delete medicament.readonly;
                        this.changeCoverage(coverage);
                    }
                }
            }
        }
    };
    CoverageListComponent.prototype.addNewMedicament = function (coverage) {
        coverage.isAddingMed = true;
        this.showAddBtn = false;
    };
    CoverageListComponent.prototype.cancelAddingMed = function (coverage) {
        coverage.isAddingMed = false;
        this.showAddBtn = true;
    };
    CoverageListComponent.prototype.changeCoverageLocal = function (idOfCoverage, data) {
        for (var _i = 0, _a = this.coverageList; _i < _a.length; _i++) {
            var coverage = _a[_i];
            if (idOfCoverage === coverage.id) {
                // coverage = data;
                console.log(data);
            }
        }
    };
    CoverageListComponent.prototype.addNewProcedure = function (coverage) {
        coverage.isAddingService = true;
        this.showAddBtn = false;
    };
    CoverageListComponent.prototype.cancelAddingProcedure = function (coverage) {
        coverage.isAddingService = false;
        this.showAddBtn = true;
    };
    CoverageListComponent.prototype.updateList = function () {
        var _this = this;
        this._settingsservice.getCoveragesListByProgram(this.idOfProgram).subscribe(function (data) {
            _this.coverageList = data;
            for (var _i = 0, _a = _this.coverageList; _i < _a.length; _i++) {
                var coverage = _a[_i];
                coverage.readonly = true;
                coverage.isAddingMed = false;
                coverage.isAddingService = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mkb10Service.getListOfMedsGroup().subscribe(function (data) {
            _this.medicamentGroups = data.content;
        }, function (error) {
            console.log(error);
        });
        this._mkb10Service.getListOfServiceGroup().subscribe(function (data) {
            _this.procedureGroups = data.content;
        }, function (error) {
            console.log(error);
        });
        this.updateList();
        this._settingsservice.getProgramById(this.idOfProgram).subscribe(function (data) {
            _this.nameOfProgram = data.name;
        }, function (error) {
            console.log(error);
        });
    };
    CoverageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-coverage-list',
            template: __webpack_require__(/*! raw-loader!./coverage-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/coverage/coverage-list/coverage-list.component.html"),
            styles: [__webpack_require__(/*! ./coverage-list.component.scss */ "./src/app/coverage/coverage-list/coverage-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"],
            _service_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], CoverageListComponent);
    return CoverageListComponent;
}());

// public tempCoverage: any = {};
// public putToTemp(name: any) {
//     this.clearTemp();
//     for (const cover of this.coverageList) {
//         if (cover.coverName === name) {
//             delete cover.readonly;
//             Object.assign(this.tempCoverage, cover);
//         }
//     }
// }
// public c() {
//     console.log(this.tempCoverage);
// }
// public getFromTemp(name: any) {
//     for (const cover of this.coverageList) {
//         if (cover.coverName === name) {
//             Object.assign(cover, this.tempCoverage);
//             cover.readonly = true;
//         }
//     }
// }
// public clearTemp() {
//     this.tempCoverage = {};
// }


/***/ }),

/***/ "./src/app/interface-and-class/forloss.class.ts":
/*!******************************************************!*\
  !*** ./src/app/interface-and-class/forloss.class.ts ***!
  \******************************************************/
/*! exports provided: ModalTemp, ModalMed, ModalService, Clinic, Loss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTemp", function() { return ModalTemp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMed", function() { return ModalMed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clinic", function() { return Clinic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loss", function() { return Loss; });
var ModalTemp = /** @class */ (function () {
    function ModalTemp() {
        this.amount = null;
        this.comment = null;
        this.costPerUnit = null;
        this.date = null;
        this.insurance = null;
        this.insurancePerUnit = null;
        this.quantityInsurance = null;
        this.quantityAmount = null;
        this.rejectReason = null;
        this.id = null;
    }
    return ModalTemp;
}());

var ModalMed = /** @class */ (function () {
    function ModalMed() {
        this.amount = null;
        this.comment = '';
        this.costPerUnit = null;
        this.date = null;
        this.franchiseAmountdaily = null;
        this.franchiseAmountmonthly = null;
        this.franchiseAmountyearly = null;
        this.franchisePercentdaily = null;
        this.franchisePercentmonthly = null;
        this.franchisePercentyearly = null;
        this.id = null;
        this.insurance = null;
        this.insurancePerUnit = null;
        this.limitAmountdaily = null;
        this.limitAmountmonthly = null;
        this.limitAmountyearly = null;
        this.limitQuantitydaily = null;
        this.limitQuantitymonthly = null;
        this.limitQuantityyearly = null;
        this.medicamentSaveItem = {
            code: null,
            group: null,
            groupId: null,
            id: null,
            medicamentForm: null,
            name: null,
        };
        this.quantityInsurance = null;
        this.quantityAmount = null;
        this.rejectReason = null;
        this.stateId = 0;
        this.stateName = null;
    }
    return ModalMed;
}());

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.amount = null;
        this.comment = '';
        this.costPerUnit = null;
        this.date = null;
        this.franchiseAmountdail = null;
        this.franchiseAmountmonthly = null;
        this.franchiseAmountyearly = null;
        this.franchisePercentdaily = null;
        this.franchisePercentmonthly = null;
        this.franchisePercentyearly = null;
        this.id = null;
        this.insurance = null;
        this.insurancePerUnit = null;
        this.limitAmountdaily = null;
        this.limitAmountmonthly = null;
        this.limitAmountyearly = null;
        this.limitQuantitydaily = null;
        this.limitQuantitymonthly = null;
        this.limitQuantityyearly = null;
        this.procedureSaveItem = {
            code: null,
            group: null,
            groupId: null,
            id: null,
            name: null,
        };
        this.quantityInsurance = null;
        this.quantityAmount = null;
        this.rejectReason = null;
        this.stateId = 0;
        this.stateName = null;
    }
    return ModalService;
}());

var Clinic = /** @class */ (function () {
    function Clinic() {
        this.bik = null;
        this.clinicCode = null;
        this.clinicName = null;
        this.id = null;
        this.inn = null;
    }
    return Clinic;
}());

var Loss = /** @class */ (function () {
    function Loss() {
        this.clinic = new Clinic();
        this.diagnosisLimit = 0;
        this.remainingLimit = 0;
        this.diagnosisId = null;
        this.amount = null;
        this.amountMedicaments = null;
        this.amountProcedures = null;
        this.assured = {
            birthDate: '',
            programEndDate: '',
            firstName: '',
            id: 0,
            insuredCompanyId: 0,
            insuredCompanyName: '',
            insuredCompanyProductId: 0,
            insuredCompanyProductName: '',
            insuredCompanyProductProgramId: 0,
            insuredCompanyProductProgramName: '',
            isMan: null,
            lastName: '',
            middleName: '',
            phone: '',
            programNumber: '',
            snils: '',
            programStartDate: ''
        };
        this.date = null;
        this.diagnosis = {
            code: '',
            description: '',
            id: 0,
            name: '',
            nodeCount: 0,
            nodes: [],
            parentCode: '',
            parentId: 0
        };
        this.id = null;
        this.insurance = null;
        this.insuranceMedicaments = null;
        this.insuranceProcedures = null;
        this.medicaments = [];
        this.procedures = [];
        this.stateId = 0;
        this.note = null;
    }
    return Loss;
}());



/***/ }),

/***/ "./src/app/interface-and-class/program.class.ts":
/*!******************************************************!*\
  !*** ./src/app/interface-and-class/program.class.ts ***!
  \******************************************************/
/*! exports provided: Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
var Program = /** @class */ (function () {
    function Program() {
        this.code = null;
        this.dateEnd = null;
        this.companyProductId = null;
        this.dateStart = null;
        this.name = null;
        this.monthLimit = {
            count: null,
            sum: null
        };
        this.onceLimit = {
            count: null,
            sum: null
        };
        this.yearLimit = {
            count: null,
            sum: null
        };
        this.onceFranchise = {
            maxSum: null,
            procent: null
        };
        this.yearFranchise = {
            maxSum: null,
            procent: null
        };
    }
    return Program;
}());



/***/ }),

/***/ "./src/app/interface-and-class/user.class.ts":
/*!***************************************************!*\
  !*** ./src/app/interface-and-class/user.class.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.firstName = null;
        this.lastName = null;
        this.middleName = null;
        this.phone = null;
        this.birthDate = null;
        this.snils = null;
        this.isMan = null;
        this.insuredCompanyName = null;
        this.insuredCompanyProductName = null;
        this.insuredCompanyProductProgramName = null;
        this.insuredCompanyProductProgramId = null;
        this.programNumber = null;
        this.programStartDate = null;
        this.programEndDate = null;
        this.id = null;
        this.cardNumber = null;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/java-hack-start-page/java-hack-start-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/java-hack-start-page/java-hack-start-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phdmEtaGFjay1zdGFydC1wYWdlL2phdmEtaGFjay1zdGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/java-hack-start-page/java-hack-start-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/java-hack-start-page/java-hack-start-page.component.ts ***!
  \************************************************************************/
/*! exports provided: JavaHackStartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaHackStartPageComponent", function() { return JavaHackStartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JavaHackStartPageComponent = /** @class */ (function () {
    function JavaHackStartPageComponent() {
    }
    JavaHackStartPageComponent.prototype.ngOnInit = function () {
    };
    JavaHackStartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-java-hack-start-page',
            template: __webpack_require__(/*! raw-loader!./java-hack-start-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/java-hack-start-page/java-hack-start-page.component.html"),
            styles: [__webpack_require__(/*! ./java-hack-start-page.component.scss */ "./src/app/java-hack-start-page/java-hack-start-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JavaHackStartPageComponent);
    return JavaHackStartPageComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-id-med-add/loss-id-med-add.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/loss/loss-id-med-add/loss-id-med-add.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active,\nbutton,\nbutton:hover,\nbutton:active,\nbutton:visited {\n  outline: none;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n.no-margin {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.nodeNoChildren {\n  border: 0px;\n  background-color: #fff;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n\n.nodeNoChildren:hover {\n  opacity: 0.5;\n}\n\nbutton {\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\nbutton:hover {\n  color: #425261;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.delete-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #fe4902;\n  transition: all 0.3s ease-in-out;\n}\n\n.delete-btn :hover {\n  color: #DB0010;\n}\n\n.ok-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #58D575;\n  transition: all 0.3s ease-in-out;\n}\n\n.ok-btn :hover {\n  color: #26A13E;\n}\n\n.row {\n  transition: all 0.3s ease-in-out;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-simple-snackbar {\n  display: inline-block !important;\n}\n\n.table {\n  margin-top: 0px;\n}\n\n.table .row {\n  border-bottom: 0px;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.max {\n  width: 100%;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\ni {\n  vertical-align: middle !important;\n  padding-left: 5px;\n}\n\n.tbody {\n  margin-top: 5px;\n}\n\n.tbody .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px;\n  padding: 0 16px;\n}\n\n.tbody .text-center .btn-for-status {\n  width: 150px;\n  background-color: #e8e8e8;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  color: #4F4E51;\n  margin-bottom: 5px;\n}\n\n.tbody .text-center .btn-for-status:hover {\n  background-color: #dcdbdb;\n  color: #000;\n}\n\n.tbody .text-center .btn-for-status:hover i {\n  -webkit-animation: rotate 0.5s;\n          animation: rotate 0.5s;\n}\n\n.btn-for-save {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  border: 1px solid #ff6767;\n  color: #ff6b6b;\n}\n\n.btn-for-save:hover {\n  background-color: #ffe4e4;\n  border: 1px solid reds;\n  color: #ff3d3d;\n}\n\n.btn-for-search {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  color: #989898;\n  border: 1px solid #949494;\n}\n\n.btn-for-search h4 {\n  display: inline-block;\n  color: black;\n  margin-top: 0px;\n}\n\n.btn-for-search:hover {\n  border: 1px solid #000;\n  background-color: #e8e8e8;\n  color: #2f2f2f;\n}\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px #e8e8e8 solid;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n.row {\n  border-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtaWQtbWVkLWFkZC9sb3NzLWlkLW1lZC1hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvc3MvbG9zcy1pZC1tZWQtYWRkL2xvc3MtaWQtbWVkLWFkZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUMsYUFBQTtBQ0NEOztBRENBO0VBQ0MsZ0JBQUE7QUNFRDs7QURBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0dEOztBRERBO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0lEOztBREZBO0VBQ0MsWUFBQTtBQ0tEOztBREhBO0VBQ0MsZ0NBQUE7RUFDQSxjQUFBO0FDTUQ7O0FESkE7RUFDQyxjQUFBO0FDT0Q7O0FETEE7RUFDRSxpQkFBQTtBQ1FGOztBRExBOztFQUVFLGFBQUE7QUNRRjs7QURMQTtFQUNFLDBCQUFBO0FDUUY7O0FETkE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNTRDs7QURSQztFQUNDLGNBQUE7QUNVRjs7QURQQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1VEOztBRFRDO0VBQ0MsY0FBQTtBQ1dGOztBRFJBO0VBQ0csZ0NBQUE7QUNXSDs7QURUQTtFQUNJLGtCQUFBO0FDWUo7O0FEVEE7RUFDSSxnQ0FBQTtBQ1lKOztBRFRBO0VBQ0MsZUFBQTtBQ1lEOztBRFhDO0VBQ0Msa0JBQUE7QUNhRjs7QURWQTtFQUNDLGNBQUE7QUNhRDs7QURYQTtFQUNDLGNBQUE7QUNjRDs7QURaQTtFQUNDLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDZUQ7O0FEVkE7RUFDQyxXQUFBO0FDYUQ7O0FEWEE7RUFDQyxhQUFBO0FDY0Q7O0FEWkE7RUFDQyxpQ0FBQTtFQUNBLGlCQUFBO0FDZUQ7O0FEYkE7RUFDQyxlQUFBO0FDZ0JEOztBRGZDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDaUJGOztBRGRFO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2dCSDs7QURkRTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBQ2dCSDs7QURkRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUNnQkg7O0FEWkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2lCSjs7QURoQkM7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDa0JGOztBRGZBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNrQko7O0FEaEJBO0VBQ0MseUJBQUE7QUNtQkQ7O0FEakJBO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNvQkQ7O0FEbEJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ3FCSjs7QURwQkk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3NCUjs7QURuQkE7RUFDSTtJQUNELGlDQUFBO1lBQUEseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDc0JEO0VEcEJFO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNzQkQ7QUFDRjs7QUQ5QkE7RUFDSTtJQUNELGlDQUFBO1lBQUEseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDc0JEO0VEcEJFO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNzQkQ7QUFDRjs7QUN0TkE7RUFDSSxrQkFBQTtBRHdOSiIsImZpbGUiOiJzcmMvYXBwL2xvc3MvbG9zcy1pZC1tZWQtYWRkL2xvc3MtaWQtbWVkLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxuZGl2OmhvdmVyLFxyXG5kaXY6dmlzaXRlZCxcclxuZGl2OmFjdGl2ZSxcclxuYnV0dG9uLFxyXG5idXR0b246aG92ZXIsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbjp2aXNpdGVke1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaDR7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubm8tbWFyZ2luIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbjpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjU7XHJcbn1cclxuYnV0dG9ue1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGNvbG9yOiAjN0I4QTlBO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuXHRjb2xvcjogIzQyNTI2MTtcclxufVxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGNvbG9yOiAjZmU0OTAyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0OmhvdmVye1xyXG5cdFx0Y29sb3I6ICNEQjAwMTA7XHJcblx0fVxyXG59XHJcbi5vay1idG57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Y29sb3I6ICM1OEQ1NzU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHQ6aG92ZXJ7XHJcblx0XHRjb2xvcjogIzI2QTEzRTtcclxuXHR9XHJcbn1cclxuLnJvd3tcclxuICBcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0LnJvd3tcclxuXHRcdGJvcmRlci1ib3R0b206IDBweDtcclxuXHR9XHJcbn1cclxuLmNvbG9yLWRlbGV0ZXtcclxuXHRjb2xvcjogICNmZTQ5MDI7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uYWRkTmV3QnRue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLy8gLm1vZGFsLWxne1xyXG4vLyBcdG1heC13aWR0aDogMjAwMHB4XHJcbi8vIH1cclxuLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b246YWN0aXZlLCBidXR0b246Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5peyBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRib2R5e1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcblx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdHBhZGRpbmc6IDAgMTZweDtcclxuXHR9XHJcblx0LnRleHQtY2VudGVye1xyXG5cdFx0LmJ0bi1mb3Itc3RhdHVze1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdGNvbG9yOiAjNEY0RTUxO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHR9XHJcblx0XHQuYnRuLWZvci1zdGF0dXM6aG92ZXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bi1mb3Itc3RhdHVzOmhvdmVyIGkge1xyXG5cdFx0XHRhbmltYXRpb246IHJvdGF0ZSAwLjVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zYXZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NzY3O1xyXG4gICAgY29sb3I6ICNmZjZiNmJcclxufVxyXG4uYnRuLWZvci1zYXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZHM7XHJcbiAgICBjb2xvcjogI2ZmM2QzZFxyXG59XHJcbi5idG4tZm9yLXNlYXJjaHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xyXG5cdGg0e1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDApO1xyXG5cdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zZWFyY2g6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGNvbG9yOiAjMmYyZjJmXHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgZnJvbSB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgXHJcblx0XHR9XHJcbiAgICB0byB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgXHJcblx0XHR9XHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUsXG5idXR0b24sXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlLFxuYnV0dG9uOnZpc2l0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5vZGVOb0NoaWxkcmVuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5ub2RlTm9DaGlsZHJlbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjN0I4QTlBO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzQyNTI2MTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjZmU0OTAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kZWxldGUtYnRuIDpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ub2stYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjNThENTc1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5vay1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICMyNkExM0U7XG59XG5cbi5yb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGJvZHkgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXMge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNEY0RTUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXM6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XG59XG5cbi5idG4tZm9yLXNhdmUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc7XG4gIGNvbG9yOiAjZmY2YjZiO1xufVxuXG4uYnRuLWZvci1zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkcztcbiAgY29sb3I6ICNmZjNkM2Q7XG59XG5cbi5idG4tZm9yLXNlYXJjaCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XG59XG4uYnRuLWZvci1zZWFyY2ggaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYnRuLWZvci1zZWFyY2g6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxufVxuLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vbG9zcy1pZC9sb3NzLWlkLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-id-med-add/loss-id-med-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/loss/loss-id-med-add/loss-id-med-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: LossIdMedAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIdMedAddComponent", function() { return LossIdMedAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interface-and-class/forloss.class */ "./src/app/interface-and-class/forloss.class.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LossIdMedAddComponent = /** @class */ (function () {
    function LossIdMedAddComponent(_mkb10Service, _dateToSend, _losesservice, router) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this._dateToSend = _dateToSend;
        this._losesservice = _losesservice;
        this.router = router;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalMed = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__["ModalMed"]();
        this.idOfLoss = this.router.url.slice(8);
        this.showSpinerMed = true;
        this.showSpinerMedGroup = true;
        this.showModalSaveMed = false;
        this.isDisabledMedicamentInfo = true;
        this.controlForMeds = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMeds = [];
        this.controlForMedsCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMedsCode = [];
        this.controlForMedGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMedGroup = [];
        this._mkb10Service.getListOfMeds().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForMeds.push(value);
                _this.optionsForMedsCode.push(value);
            }
            _this.filteredOptionsForMeds = _this._dateToSend.makeListForFilters(_this.controlForMeds, 'name', _this.optionsForMeds, 3);
            _this.filteredOptionsForMedsCode = _this._dateToSend.makeListForFilters(_this.controlForMedsCode, 'code', _this.optionsForMedsCode, 3);
            _this.showSpinerMed = false;
        }, function (error) { console.log(error); });
        this._mkb10Service.getListOfMedsGroup().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForMedGroup.push(value);
            }
            _this.filteredOptionsForMedGroup = _this._dateToSend.makeListForFilters(_this.controlForMedGroup, 'name', _this.optionsForMedGroup, 0);
            _this.showSpinerMedGroup = false;
        }, function (error) { console.log(error); });
    }
    LossIdMedAddComponent.prototype.checkModalMedSave = function () {
        if (this.modalMed.medicamentSaveItem.name === '' ||
            this.modalMed.stateId === 0 ||
            this.modalMed.medicamentSaveItem.groupName === '' ||
            this.modalMed.date === '' ||
            this.modalMed.medicamentSaveItem.name === null ||
            this.modalMed.medicamentSaveItem.groupName === null) {
            this.showModalSaveMed = false;
        }
        else {
            this.showModalSaveMed = true;
        }
    };
    LossIdMedAddComponent.prototype.chooseMedFromList = function (option) {
        this.controlForMedsCode.setValue({ code: option.code });
        this.controlForMedGroup.setValue({ name: option.groupName });
        this.modalMed.medicamentSaveItem.name = option.name;
        this.modalMed.medicamentSaveItem.code = option.code;
        this.modalMed.medicamentSaveItem.groupName = option.groupName;
        this.modalMed.medicamentSaveItem.groupId = option.groupId;
        this.modalMed.medicamentSaveItem.medicamentForm = option.medicamentForm;
        this.modalMed.medicamentSaveItem.id = option.id;
    };
    LossIdMedAddComponent.prototype.chooseMedFromListCode = function (option) {
        this.controlForMeds.setValue({ name: option.name });
        this.controlForMedGroup.setValue({ name: option.groupName });
        this.modalMed.medicamentSaveItem.name = option.name;
        this.modalMed.medicamentSaveItem.code = option.code;
        this.modalMed.medicamentSaveItem.groupName = option.groupName;
        this.modalMed.medicamentSaveItem.groupId = option.groupId;
        this.modalMed.medicamentSaveItem.medicamentForm = option.medicamentForm;
        this.modalMed.medicamentSaveItem.id = option.id;
    };
    LossIdMedAddComponent.prototype.addNewMed = function () {
        var _this = this;
        this.modalMed.amount = this.modalMed.costPerUnit * this.modalMed.quantityAmount;
        this.modalMed.date = this._dateToSend.makeDateToSend(this.modalMed.date);
        var arrayToSend = [];
        arrayToSend.push(this.modalMed);
        this._losesservice.addNewMed(this.idOfLoss, arrayToSend).subscribe(function (data) {
            _this.onChanged.emit(data);
            _this.modalMed = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__["ModalMed"]();
            _this.clearModal();
        }, function (error) { console.log(error); });
    };
    LossIdMedAddComponent.prototype.clearModal = function () {
        this.controlForMeds.setValue({ name: '' });
        this.controlForMedsCode.setValue({ code: '' });
        this.controlForMedGroup.setValue({ name: '' });
    };
    LossIdMedAddComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdMedAddComponent.prototype, "onChanged", void 0);
    LossIdMedAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-id-med-add',
            template: __webpack_require__(/*! raw-loader!./loss-id-med-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-med-add/loss-id-med-add.component.html"),
            styles: [__webpack_require__(/*! ./loss-id-med-add.component.scss */ "./src/app/loss/loss-id-med-add/loss-id-med-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__["Mkb10Service"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__["DateToSendService"],
            src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_6__["LosesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LossIdMedAddComponent);
    return LossIdMedAddComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-id-med/loss-id-med.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/loss/loss-id-med/loss-id-med.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active,\nbutton,\nbutton:hover,\nbutton:active,\nbutton:visited {\n  outline: none;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n.no-margin {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.nodeNoChildren {\n  border: 0px;\n  background-color: #fff;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n\n.nodeNoChildren:hover {\n  opacity: 0.5;\n}\n\nbutton {\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\nbutton:hover {\n  color: #425261;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.delete-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #fe4902;\n  transition: all 0.3s ease-in-out;\n}\n\n.delete-btn :hover {\n  color: #DB0010;\n}\n\n.ok-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #58D575;\n  transition: all 0.3s ease-in-out;\n}\n\n.ok-btn :hover {\n  color: #26A13E;\n}\n\n.row {\n  transition: all 0.3s ease-in-out;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-simple-snackbar {\n  display: inline-block !important;\n}\n\n.table {\n  margin-top: 0px;\n}\n\n.table .row {\n  border-bottom: 0px;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.max {\n  width: 100%;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\ni {\n  vertical-align: middle !important;\n  padding-left: 5px;\n}\n\n.tbody {\n  margin-top: 5px;\n}\n\n.tbody .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px;\n  padding: 0 16px;\n}\n\n.tbody .text-center .btn-for-status {\n  width: 150px;\n  background-color: #e8e8e8;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  color: #4F4E51;\n  margin-bottom: 5px;\n}\n\n.tbody .text-center .btn-for-status:hover {\n  background-color: #dcdbdb;\n  color: #000;\n}\n\n.tbody .text-center .btn-for-status:hover i {\n  -webkit-animation: rotate 0.5s;\n          animation: rotate 0.5s;\n}\n\n.btn-for-save {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  border: 1px solid #ff6767;\n  color: #ff6b6b;\n}\n\n.btn-for-save:hover {\n  background-color: #ffe4e4;\n  border: 1px solid reds;\n  color: #ff3d3d;\n}\n\n.btn-for-search {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  color: #989898;\n  border: 1px solid #949494;\n}\n\n.btn-for-search h4 {\n  display: inline-block;\n  color: black;\n  margin-top: 0px;\n}\n\n.btn-for-search:hover {\n  border: 1px solid #000;\n  background-color: #e8e8e8;\n  color: #2f2f2f;\n}\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px #e8e8e8 solid;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n.row {\n  border-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtaWQtbWVkL2xvc3MtaWQtbWVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb3NzL2xvc3MtaWQtbWVkL2xvc3MtaWQtbWVkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L21lZC1hcHAtMzAtMDgtMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRQyxhQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtBQ0VEOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDR0Q7O0FEREE7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDSUQ7O0FERkE7RUFDQyxZQUFBO0FDS0Q7O0FESEE7RUFDQyxnQ0FBQTtFQUNBLGNBQUE7QUNNRDs7QURKQTtFQUNDLGNBQUE7QUNPRDs7QURMQTtFQUNFLGlCQUFBO0FDUUY7O0FETEE7O0VBRUUsYUFBQTtBQ1FGOztBRExBO0VBQ0UsMEJBQUE7QUNRRjs7QUROQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1NEOztBRFJDO0VBQ0MsY0FBQTtBQ1VGOztBRFBBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDVUQ7O0FEVEM7RUFDQyxjQUFBO0FDV0Y7O0FEUkE7RUFDRyxnQ0FBQTtBQ1dIOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURUQTtFQUNJLGdDQUFBO0FDWUo7O0FEVEE7RUFDQyxlQUFBO0FDWUQ7O0FEWEM7RUFDQyxrQkFBQTtBQ2FGOztBRFZBO0VBQ0MsY0FBQTtBQ2FEOztBRFhBO0VBQ0MsY0FBQTtBQ2NEOztBRFpBO0VBQ0MsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNlRDs7QURWQTtFQUNDLFdBQUE7QUNhRDs7QURYQTtFQUNDLGFBQUE7QUNjRDs7QURaQTtFQUNDLGlDQUFBO0VBQ0EsaUJBQUE7QUNlRDs7QURiQTtFQUNDLGVBQUE7QUNnQkQ7O0FEZkM7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZEU7RUFDQyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZ0JIOztBRGRFO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FDZ0JIOztBRGRFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtBQ2dCSDs7QURaQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDaUJKOztBRGhCQztFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNrQkY7O0FEZkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURoQkE7RUFDQyx5QkFBQTtBQ21CRDs7QURqQkE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ29CRDs7QURsQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRHBCSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDc0JSOztBRG5CQTtFQUNJO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNzQkQ7RURwQkU7SUFDRCxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3NCRDtBQUNGOztBRDlCQTtFQUNJO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNzQkQ7RURwQkU7SUFDRCxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3NCRDtBQUNGOztBQ3ROQTtFQUNJLGtCQUFBO0FEd05KIiwiZmlsZSI6InNyYy9hcHAvbG9zcy9sb3NzLWlkLW1lZC9sb3NzLWlkLW1lZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxuZGl2OmhvdmVyLFxyXG5kaXY6dmlzaXRlZCxcclxuZGl2OmFjdGl2ZSxcclxuYnV0dG9uLFxyXG5idXR0b246aG92ZXIsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbjp2aXNpdGVke1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaDR7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubm8tbWFyZ2luIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbjpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjU7XHJcbn1cclxuYnV0dG9ue1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGNvbG9yOiAjN0I4QTlBO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuXHRjb2xvcjogIzQyNTI2MTtcclxufVxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGNvbG9yOiAjZmU0OTAyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0OmhvdmVye1xyXG5cdFx0Y29sb3I6ICNEQjAwMTA7XHJcblx0fVxyXG59XHJcbi5vay1idG57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Y29sb3I6ICM1OEQ1NzU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHQ6aG92ZXJ7XHJcblx0XHRjb2xvcjogIzI2QTEzRTtcclxuXHR9XHJcbn1cclxuLnJvd3tcclxuICBcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0LnJvd3tcclxuXHRcdGJvcmRlci1ib3R0b206IDBweDtcclxuXHR9XHJcbn1cclxuLmNvbG9yLWRlbGV0ZXtcclxuXHRjb2xvcjogICNmZTQ5MDI7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uYWRkTmV3QnRue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLy8gLm1vZGFsLWxne1xyXG4vLyBcdG1heC13aWR0aDogMjAwMHB4XHJcbi8vIH1cclxuLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b246YWN0aXZlLCBidXR0b246Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5peyBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRib2R5e1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcblx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdHBhZGRpbmc6IDAgMTZweDtcclxuXHR9XHJcblx0LnRleHQtY2VudGVye1xyXG5cdFx0LmJ0bi1mb3Itc3RhdHVze1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdGNvbG9yOiAjNEY0RTUxO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHR9XHJcblx0XHQuYnRuLWZvci1zdGF0dXM6aG92ZXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bi1mb3Itc3RhdHVzOmhvdmVyIGkge1xyXG5cdFx0XHRhbmltYXRpb246IHJvdGF0ZSAwLjVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zYXZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NzY3O1xyXG4gICAgY29sb3I6ICNmZjZiNmJcclxufVxyXG4uYnRuLWZvci1zYXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZHM7XHJcbiAgICBjb2xvcjogI2ZmM2QzZFxyXG59XHJcbi5idG4tZm9yLXNlYXJjaHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xyXG5cdGg0e1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDApO1xyXG5cdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zZWFyY2g6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGNvbG9yOiAjMmYyZjJmXHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgZnJvbSB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgXHJcblx0XHR9XHJcbiAgICB0byB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgXHJcblx0XHR9XHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUsXG5idXR0b24sXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlLFxuYnV0dG9uOnZpc2l0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5vZGVOb0NoaWxkcmVuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5ub2RlTm9DaGlsZHJlbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjN0I4QTlBO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzQyNTI2MTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjZmU0OTAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kZWxldGUtYnRuIDpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ub2stYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjNThENTc1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5vay1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICMyNkExM0U7XG59XG5cbi5yb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGJvZHkgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXMge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNEY0RTUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXM6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XG59XG5cbi5idG4tZm9yLXNhdmUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc7XG4gIGNvbG9yOiAjZmY2YjZiO1xufVxuXG4uYnRuLWZvci1zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkcztcbiAgY29sb3I6ICNmZjNkM2Q7XG59XG5cbi5idG4tZm9yLXNlYXJjaCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XG59XG4uYnRuLWZvci1zZWFyY2ggaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYnRuLWZvci1zZWFyY2g6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxufVxuLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vbG9zcy1pZC9sb3NzLWlkLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-id-med/loss-id-med.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/loss/loss-id-med/loss-id-med.component.ts ***!
  \***********************************************************/
/*! exports provided: LossIdMedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIdMedComponent", function() { return LossIdMedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interface-and-class/forloss.class */ "./src/app/interface-and-class/forloss.class.ts");
/* harmony import */ var src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");






var LossIdMedComponent = /** @class */ (function () {
    function LossIdMedComponent(_losesservice, _dateToSend, router) {
        this._losesservice = _losesservice;
        this._dateToSend = _dateToSend;
        this.router = router;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalTempMed = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__["ModalTemp"]();
        this.idOfLoss = this.router.url.slice(8);
        this.showToDelete = false;
    }
    LossIdMedComponent.prototype.cancelModalMed = function (medOrService) {
        medOrService.amount = this.modalTempMed.amount;
        medOrService.comment = this.modalTempMed.comment;
        medOrService.costPerUnit = this.modalTempMed.costPerUnit;
        medOrService.date = this.modalTempMed.date;
        medOrService.insurance = this.modalTempMed.insurance;
        medOrService.insurancePerUnit = this.modalTempMed.insurancePerUnit;
        medOrService.quantityInsurance = this.modalTempMed.quantityInsurance;
        medOrService.quantityAmount = this.modalTempMed.quantityAmount;
        medOrService.rejectReason = this.modalTempMed.rejectReason;
        medOrService.id = this.modalTempMed.id;
    };
    LossIdMedComponent.prototype.saveToModalTempMed = function (medOrService) {
        this.modalTempMed.amount = medOrService.amount;
        this.modalTempMed.comment = medOrService.comment;
        this.modalTempMed.costPerUnit = medOrService.costPerUnit;
        this.modalTempMed.date = medOrService.date;
        this.modalTempMed.insurance = medOrService.insurance;
        this.modalTempMed.insurancePerUnit = medOrService.insurancePerUnit;
        this.modalTempMed.quantityInsurance = medOrService.quantityInsurance;
        this.modalTempMed.quantityAmount = medOrService.quantityAmount;
        this.modalTempMed.rejectReason = medOrService.rejectReason;
        this.modalTempMed.id = medOrService.id;
    };
    LossIdMedComponent.prototype.changeStatusMed = function (id, medId, status) {
        var _this = this;
        var statusToSend = {
            stateId: status
        };
        this._losesservice.changeStatusMed(id, medId, statusToSend).subscribe(function (data) {
            _this.onChanged.emit(data);
        }, function (error) { console.log(error); });
    };
    LossIdMedComponent.prototype.changeMed = function (med) {
        var _this = this;
        med.amount = med.costPerUnit * med.quantityAmount;
        med.date = this._dateToSend.makeDateToSend(med.date);
        var medToSend = med;
        medToSend.medicamentSaveItem = {
            code: med.medicamentItem.code,
            group: med.medicamentItem.group,
            groupId: med.medicamentItem.groupId,
            id: med.medicamentItem.id,
            medicamentForm: med.medicamentItem.medicamentForm,
            name: med.medicamentItem.name
        };
        delete medToSend.medicamentItem;
        var arrayToSend = [];
        arrayToSend.push(medToSend);
        this._losesservice.addNewMed(this.idOfLoss, arrayToSend).subscribe(function (data) {
            _this.onChanged.emit(data);
        }, function (error) { console.log(error); });
    };
    LossIdMedComponent.prototype.deleteMed = function (idOfMed) {
        var _this = this;
        this._losesservice.deleteMed(this.idOfLoss, idOfMed).subscribe(function (data) {
            _this.onChanged.emit(data);
        }, function (error) { console.log(error); });
    };
    LossIdMedComponent.prototype.ngOnInit = function () {
        this.med = this.medicament;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdMedComponent.prototype, "medicament", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdMedComponent.prototype, "onChanged", void 0);
    LossIdMedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-id-med',
            template: __webpack_require__(/*! raw-loader!./loss-id-med.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-med/loss-id-med.component.html"),
            styles: [__webpack_require__(/*! ./loss-id-med.component.scss */ "./src/app/loss/loss-id-med/loss-id-med.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_4__["LosesService"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__["DateToSendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LossIdMedComponent);
    return LossIdMedComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active,\nbutton,\nbutton:hover,\nbutton:active,\nbutton:visited {\n  outline: none;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n.no-margin {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.nodeNoChildren {\n  border: 0px;\n  background-color: #fff;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n\n.nodeNoChildren:hover {\n  opacity: 0.5;\n}\n\nbutton {\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\nbutton:hover {\n  color: #425261;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.delete-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #fe4902;\n  transition: all 0.3s ease-in-out;\n}\n\n.delete-btn :hover {\n  color: #DB0010;\n}\n\n.ok-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #58D575;\n  transition: all 0.3s ease-in-out;\n}\n\n.ok-btn :hover {\n  color: #26A13E;\n}\n\n.row {\n  transition: all 0.3s ease-in-out;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-simple-snackbar {\n  display: inline-block !important;\n}\n\n.table {\n  margin-top: 0px;\n}\n\n.table .row {\n  border-bottom: 0px;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.max {\n  width: 100%;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\ni {\n  vertical-align: middle !important;\n  padding-left: 5px;\n}\n\n.tbody {\n  margin-top: 5px;\n}\n\n.tbody .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px;\n  padding: 0 16px;\n}\n\n.tbody .text-center .btn-for-status {\n  width: 150px;\n  background-color: #e8e8e8;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  color: #4F4E51;\n  margin-bottom: 5px;\n}\n\n.tbody .text-center .btn-for-status:hover {\n  background-color: #dcdbdb;\n  color: #000;\n}\n\n.tbody .text-center .btn-for-status:hover i {\n  -webkit-animation: rotate 0.5s;\n          animation: rotate 0.5s;\n}\n\n.btn-for-save {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  border: 1px solid #ff6767;\n  color: #ff6b6b;\n}\n\n.btn-for-save:hover {\n  background-color: #ffe4e4;\n  border: 1px solid reds;\n  color: #ff3d3d;\n}\n\n.btn-for-search {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  color: #989898;\n  border: 1px solid #949494;\n}\n\n.btn-for-search h4 {\n  display: inline-block;\n  color: black;\n  margin-top: 0px;\n}\n\n.btn-for-search:hover {\n  border: 1px solid #000;\n  background-color: #e8e8e8;\n  color: #2f2f2f;\n}\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px #e8e8e8 solid;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n.row {\n  border-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtaWQtbWtiLW1vZGFsL2xvc3MtaWQtbWtiLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb3NzL2xvc3MtaWQtbWtiLW1vZGFsL2xvc3MtaWQtbWtiLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L21lZC1hcHAtMzAtMDgtMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRQyxhQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtBQ0VEOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDR0Q7O0FEREE7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDSUQ7O0FERkE7RUFDQyxZQUFBO0FDS0Q7O0FESEE7RUFDQyxnQ0FBQTtFQUNBLGNBQUE7QUNNRDs7QURKQTtFQUNDLGNBQUE7QUNPRDs7QURMQTtFQUNFLGlCQUFBO0FDUUY7O0FETEE7O0VBRUUsYUFBQTtBQ1FGOztBRExBO0VBQ0UsMEJBQUE7QUNRRjs7QUROQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1NEOztBRFJDO0VBQ0MsY0FBQTtBQ1VGOztBRFBBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDVUQ7O0FEVEM7RUFDQyxjQUFBO0FDV0Y7O0FEUkE7RUFDRyxnQ0FBQTtBQ1dIOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURUQTtFQUNJLGdDQUFBO0FDWUo7O0FEVEE7RUFDQyxlQUFBO0FDWUQ7O0FEWEM7RUFDQyxrQkFBQTtBQ2FGOztBRFZBO0VBQ0MsY0FBQTtBQ2FEOztBRFhBO0VBQ0MsY0FBQTtBQ2NEOztBRFpBO0VBQ0MsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNlRDs7QURWQTtFQUNDLFdBQUE7QUNhRDs7QURYQTtFQUNDLGFBQUE7QUNjRDs7QURaQTtFQUNDLGlDQUFBO0VBQ0EsaUJBQUE7QUNlRDs7QURiQTtFQUNDLGVBQUE7QUNnQkQ7O0FEZkM7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZEU7RUFDQyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZ0JIOztBRGRFO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FDZ0JIOztBRGRFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtBQ2dCSDs7QURaQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDaUJKOztBRGhCQztFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNrQkY7O0FEZkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURoQkE7RUFDQyx5QkFBQTtBQ21CRDs7QURqQkE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ29CRDs7QURsQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRHBCSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDc0JSOztBRG5CQTtFQUNJO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNzQkQ7RURwQkU7SUFDRCxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3NCRDtBQUNGOztBRDlCQTtFQUNJO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNzQkQ7RURwQkU7SUFDRCxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3NCRDtBQUNGOztBQ3ROQTtFQUNJLGtCQUFBO0FEd05KIiwiZmlsZSI6InNyYy9hcHAvbG9zcy9sb3NzLWlkLW1rYi1tb2RhbC9sb3NzLWlkLW1rYi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxuZGl2OmhvdmVyLFxyXG5kaXY6dmlzaXRlZCxcclxuZGl2OmFjdGl2ZSxcclxuYnV0dG9uLFxyXG5idXR0b246aG92ZXIsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbjp2aXNpdGVke1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaDR7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubm8tbWFyZ2luIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbjpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjU7XHJcbn1cclxuYnV0dG9ue1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGNvbG9yOiAjN0I4QTlBO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuXHRjb2xvcjogIzQyNTI2MTtcclxufVxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGNvbG9yOiAjZmU0OTAyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0OmhvdmVye1xyXG5cdFx0Y29sb3I6ICNEQjAwMTA7XHJcblx0fVxyXG59XHJcbi5vay1idG57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Y29sb3I6ICM1OEQ1NzU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHQ6aG92ZXJ7XHJcblx0XHRjb2xvcjogIzI2QTEzRTtcclxuXHR9XHJcbn1cclxuLnJvd3tcclxuICBcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0LnJvd3tcclxuXHRcdGJvcmRlci1ib3R0b206IDBweDtcclxuXHR9XHJcbn1cclxuLmNvbG9yLWRlbGV0ZXtcclxuXHRjb2xvcjogICNmZTQ5MDI7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uYWRkTmV3QnRue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLy8gLm1vZGFsLWxne1xyXG4vLyBcdG1heC13aWR0aDogMjAwMHB4XHJcbi8vIH1cclxuLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b246YWN0aXZlLCBidXR0b246Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5peyBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRib2R5e1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcblx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdHBhZGRpbmc6IDAgMTZweDtcclxuXHR9XHJcblx0LnRleHQtY2VudGVye1xyXG5cdFx0LmJ0bi1mb3Itc3RhdHVze1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdGNvbG9yOiAjNEY0RTUxO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHR9XHJcblx0XHQuYnRuLWZvci1zdGF0dXM6aG92ZXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bi1mb3Itc3RhdHVzOmhvdmVyIGkge1xyXG5cdFx0XHRhbmltYXRpb246IHJvdGF0ZSAwLjVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zYXZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NzY3O1xyXG4gICAgY29sb3I6ICNmZjZiNmJcclxufVxyXG4uYnRuLWZvci1zYXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZHM7XHJcbiAgICBjb2xvcjogI2ZmM2QzZFxyXG59XHJcbi5idG4tZm9yLXNlYXJjaHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xyXG5cdGg0e1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDApO1xyXG5cdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zZWFyY2g6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGNvbG9yOiAjMmYyZjJmXHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgZnJvbSB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgXHJcblx0XHR9XHJcbiAgICB0byB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgXHJcblx0XHR9XHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUsXG5idXR0b24sXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlLFxuYnV0dG9uOnZpc2l0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5vZGVOb0NoaWxkcmVuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5ub2RlTm9DaGlsZHJlbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjN0I4QTlBO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzQyNTI2MTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjZmU0OTAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kZWxldGUtYnRuIDpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ub2stYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjNThENTc1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5vay1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICMyNkExM0U7XG59XG5cbi5yb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGJvZHkgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXMge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNEY0RTUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXM6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XG59XG5cbi5idG4tZm9yLXNhdmUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc7XG4gIGNvbG9yOiAjZmY2YjZiO1xufVxuXG4uYnRuLWZvci1zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkcztcbiAgY29sb3I6ICNmZjNkM2Q7XG59XG5cbi5idG4tZm9yLXNlYXJjaCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XG59XG4uYnRuLWZvci1zZWFyY2ggaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYnRuLWZvci1zZWFyY2g6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxufVxuLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vbG9zcy1pZC9sb3NzLWlkLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: LossIdMkbModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIdMkbModalComponent", function() { return LossIdMkbModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");






var LossIdMkbModalComponent = /** @class */ (function () {
    function LossIdMkbModalComponent(_mkb10Service, router) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this.router = router;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSpinerMkb = true;
        this.idOfLoss = this.router.url.slice(8);
        this.hasChild = function (_, node) { return node.expandable; };
        this.transformer = function (node, level) {
            return {
                expandable: !!node.nodes && node.nodes.length > 0,
                name: node.name,
                level: level,
                description: node.description,
                code: node.code,
                id: node.id
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.nodes; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this._mkb10Service.getMkb10().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.showSpinerMkb = false;
        }, function (error) { console.log(error); });
    }
    LossIdMkbModalComponent.prototype.ngOnInit = function () {
        this.idOfLoss[0] === 'n' ? this.idOfLoss = null : this.idOfLoss = this.idOfLoss;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdMkbModalComponent.prototype, "onChanged", void 0);
    LossIdMkbModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-id-mkb-modal',
            template: __webpack_require__(/*! raw-loader!./loss-id-mkb-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.html"),
            styles: [__webpack_require__(/*! ./loss-id-mkb-modal.component.scss */ "./src/app/loss/loss-id-mkb-modal/loss-id-mkb-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mkb10_service__WEBPACK_IMPORTED_MODULE_5__["Mkb10Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LossIdMkbModalComponent);
    return LossIdMkbModalComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active,\nbutton,\nbutton:hover,\nbutton:active,\nbutton:visited {\n  outline: none;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n.no-margin {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.nodeNoChildren {\n  border: 0px;\n  background-color: #fff;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n\n.nodeNoChildren:hover {\n  opacity: 0.5;\n}\n\nbutton {\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\nbutton:hover {\n  color: #425261;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.delete-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #fe4902;\n  transition: all 0.3s ease-in-out;\n}\n\n.delete-btn :hover {\n  color: #DB0010;\n}\n\n.ok-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #58D575;\n  transition: all 0.3s ease-in-out;\n}\n\n.ok-btn :hover {\n  color: #26A13E;\n}\n\n.row {\n  transition: all 0.3s ease-in-out;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-simple-snackbar {\n  display: inline-block !important;\n}\n\n.table {\n  margin-top: 0px;\n}\n\n.table .row {\n  border-bottom: 0px;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.max {\n  width: 100%;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\ni {\n  vertical-align: middle !important;\n  padding-left: 5px;\n}\n\n.tbody {\n  margin-top: 5px;\n}\n\n.tbody .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px;\n  padding: 0 16px;\n}\n\n.tbody .text-center .btn-for-status {\n  width: 150px;\n  background-color: #e8e8e8;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  color: #4F4E51;\n  margin-bottom: 5px;\n}\n\n.tbody .text-center .btn-for-status:hover {\n  background-color: #dcdbdb;\n  color: #000;\n}\n\n.tbody .text-center .btn-for-status:hover i {\n  -webkit-animation: rotate 0.5s;\n          animation: rotate 0.5s;\n}\n\n.btn-for-save {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  border: 1px solid #ff6767;\n  color: #ff6b6b;\n}\n\n.btn-for-save:hover {\n  background-color: #ffe4e4;\n  border: 1px solid reds;\n  color: #ff3d3d;\n}\n\n.btn-for-search {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  color: #989898;\n  border: 1px solid #949494;\n}\n\n.btn-for-search h4 {\n  display: inline-block;\n  color: black;\n  margin-top: 0px;\n}\n\n.btn-for-search:hover {\n  border: 1px solid #000;\n  background-color: #e8e8e8;\n  color: #2f2f2f;\n}\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px #e8e8e8 solid;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n.row {\n  border-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtaWQtcHJvY2VkdXJlLWFkZC9sb3NzLWlkLXByb2NlZHVyZS1hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvc3MvbG9zcy1pZC1wcm9jZWR1cmUtYWRkL2xvc3MtaWQtcHJvY2VkdXJlLWFkZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUMsYUFBQTtBQ0NEOztBRENBO0VBQ0MsZ0JBQUE7QUNFRDs7QURBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0dEOztBRERBO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0lEOztBREZBO0VBQ0MsWUFBQTtBQ0tEOztBREhBO0VBQ0MsZ0NBQUE7RUFDQSxjQUFBO0FDTUQ7O0FESkE7RUFDQyxjQUFBO0FDT0Q7O0FETEE7RUFDRSxpQkFBQTtBQ1FGOztBRExBOztFQUVFLGFBQUE7QUNRRjs7QURMQTtFQUNFLDBCQUFBO0FDUUY7O0FETkE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNTRDs7QURSQztFQUNDLGNBQUE7QUNVRjs7QURQQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1VEOztBRFRDO0VBQ0MsY0FBQTtBQ1dGOztBRFJBO0VBQ0csZ0NBQUE7QUNXSDs7QURUQTtFQUNJLGtCQUFBO0FDWUo7O0FEVEE7RUFDSSxnQ0FBQTtBQ1lKOztBRFRBO0VBQ0MsZUFBQTtBQ1lEOztBRFhDO0VBQ0Msa0JBQUE7QUNhRjs7QURWQTtFQUNDLGNBQUE7QUNhRDs7QURYQTtFQUNDLGNBQUE7QUNjRDs7QURaQTtFQUNDLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDZUQ7O0FEVkE7RUFDQyxXQUFBO0FDYUQ7O0FEWEE7RUFDQyxhQUFBO0FDY0Q7O0FEWkE7RUFDQyxpQ0FBQTtFQUNBLGlCQUFBO0FDZUQ7O0FEYkE7RUFDQyxlQUFBO0FDZ0JEOztBRGZDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDaUJGOztBRGRFO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2dCSDs7QURkRTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBQ2dCSDs7QURkRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUNnQkg7O0FEWkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2lCSjs7QURoQkM7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDa0JGOztBRGZBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNrQko7O0FEaEJBO0VBQ0MseUJBQUE7QUNtQkQ7O0FEakJBO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNvQkQ7O0FEbEJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ3FCSjs7QURwQkk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3NCUjs7QURuQkE7RUFDSTtJQUNELGlDQUFBO1lBQUEseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDc0JEO0VEcEJFO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNzQkQ7QUFDRjs7QUQ5QkE7RUFDSTtJQUNELGlDQUFBO1lBQUEseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDc0JEO0VEcEJFO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNzQkQ7QUFDRjs7QUN0TkE7RUFDSSxrQkFBQTtBRHdOSiIsImZpbGUiOiJzcmMvYXBwL2xvc3MvbG9zcy1pZC1wcm9jZWR1cmUtYWRkL2xvc3MtaWQtcHJvY2VkdXJlLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxuZGl2OmhvdmVyLFxyXG5kaXY6dmlzaXRlZCxcclxuZGl2OmFjdGl2ZSxcclxuYnV0dG9uLFxyXG5idXR0b246aG92ZXIsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbjp2aXNpdGVke1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaDR7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubm8tbWFyZ2luIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbjpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjU7XHJcbn1cclxuYnV0dG9ue1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGNvbG9yOiAjN0I4QTlBO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuXHRjb2xvcjogIzQyNTI2MTtcclxufVxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGNvbG9yOiAjZmU0OTAyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0OmhvdmVye1xyXG5cdFx0Y29sb3I6ICNEQjAwMTA7XHJcblx0fVxyXG59XHJcbi5vay1idG57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Y29sb3I6ICM1OEQ1NzU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHQ6aG92ZXJ7XHJcblx0XHRjb2xvcjogIzI2QTEzRTtcclxuXHR9XHJcbn1cclxuLnJvd3tcclxuICBcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0LnJvd3tcclxuXHRcdGJvcmRlci1ib3R0b206IDBweDtcclxuXHR9XHJcbn1cclxuLmNvbG9yLWRlbGV0ZXtcclxuXHRjb2xvcjogICNmZTQ5MDI7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uYWRkTmV3QnRue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLy8gLm1vZGFsLWxne1xyXG4vLyBcdG1heC13aWR0aDogMjAwMHB4XHJcbi8vIH1cclxuLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b246YWN0aXZlLCBidXR0b246Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5peyBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRib2R5e1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcblx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdHBhZGRpbmc6IDAgMTZweDtcclxuXHR9XHJcblx0LnRleHQtY2VudGVye1xyXG5cdFx0LmJ0bi1mb3Itc3RhdHVze1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdGNvbG9yOiAjNEY0RTUxO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHR9XHJcblx0XHQuYnRuLWZvci1zdGF0dXM6aG92ZXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bi1mb3Itc3RhdHVzOmhvdmVyIGkge1xyXG5cdFx0XHRhbmltYXRpb246IHJvdGF0ZSAwLjVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zYXZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NzY3O1xyXG4gICAgY29sb3I6ICNmZjZiNmJcclxufVxyXG4uYnRuLWZvci1zYXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZHM7XHJcbiAgICBjb2xvcjogI2ZmM2QzZFxyXG59XHJcbi5idG4tZm9yLXNlYXJjaHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xyXG5cdGg0e1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDApO1xyXG5cdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zZWFyY2g6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGNvbG9yOiAjMmYyZjJmXHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgZnJvbSB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgXHJcblx0XHR9XHJcbiAgICB0byB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgXHJcblx0XHR9XHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUsXG5idXR0b24sXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlLFxuYnV0dG9uOnZpc2l0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5vZGVOb0NoaWxkcmVuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5ub2RlTm9DaGlsZHJlbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjN0I4QTlBO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzQyNTI2MTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjZmU0OTAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kZWxldGUtYnRuIDpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ub2stYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjNThENTc1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5vay1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICMyNkExM0U7XG59XG5cbi5yb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGJvZHkgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXMge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNEY0RTUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXM6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XG59XG5cbi5idG4tZm9yLXNhdmUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc7XG4gIGNvbG9yOiAjZmY2YjZiO1xufVxuXG4uYnRuLWZvci1zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkcztcbiAgY29sb3I6ICNmZjNkM2Q7XG59XG5cbi5idG4tZm9yLXNlYXJjaCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XG59XG4uYnRuLWZvci1zZWFyY2ggaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYnRuLWZvci1zZWFyY2g6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxufVxuLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vbG9zcy1pZC9sb3NzLWlkLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LossIdProcedureAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIdProcedureAddComponent", function() { return LossIdProcedureAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interface-and-class/forloss.class */ "./src/app/interface-and-class/forloss.class.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LossIdProcedureAddComponent = /** @class */ (function () {
    function LossIdProcedureAddComponent(_mkb10Service, _dateToSend, _losesservice, router) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this._dateToSend = _dateToSend;
        this._losesservice = _losesservice;
        this.router = router;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__["ModalService"]();
        this.showModalSaveService = false;
        this.idOfLoss = this.router.url.slice(8);
        this.controlForService = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForService = [];
        this.controlForServiceCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForServiceCode = [];
        this.controlForServiceGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForServiceGroup = [];
        this.showSpinerService = true;
        this.showSpinerServiceGroup = true;
        this.isDisabledServiceInfo = true;
        this._mkb10Service.getListOfService().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForService.push(value);
                _this.optionsForServiceCode.push(value);
            }
            _this.filteredOptionsForService = _this._dateToSend.makeListForFilters(_this.controlForService, 'name', _this.optionsForService, 3);
            _this.filteredOptionsForServiceCode = _this._dateToSend.makeListForFilters(_this.controlForServiceCode, 'code', _this.optionsForServiceCode, 3);
            _this.showSpinerService = false;
        }, function (error) { console.log(error); });
        this._mkb10Service.getListOfServiceGroup().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForServiceGroup.push(value);
            }
            _this.filteredOptionsForServiceGroup = _this._dateToSend.makeListForFilters(_this.controlForServiceGroup, 'name', _this.optionsForServiceGroup, 0);
            _this.showSpinerServiceGroup = false;
        }, function (error) { console.log(error); });
    }
    LossIdProcedureAddComponent.prototype.checkModalServiceSave = function () {
        if (this.modalService.procedureSaveItem.name === '' ||
            this.modalService.stateId === 0 ||
            this.modalService.procedureSaveItem.groupName === '' ||
            this.modalService.date === '' ||
            this.modalService.procedureSaveItem.name === null ||
            this.modalService.procedureSaveItem.groupName === null) {
            this.showModalSaveService = false;
        }
        else {
            this.showModalSaveService = true;
        }
    };
    LossIdProcedureAddComponent.prototype.chooseServiceFromList = function (option) {
        this.controlForServiceCode.setValue({ code: option.code });
        this.controlForServiceGroup.setValue({ name: option.groupName });
        this.modalService.procedureSaveItem.name = option.name;
        this.modalService.procedureSaveItem.code = option.code;
        this.modalService.procedureSaveItem.groupName = option.groupName;
        this.modalService.procedureSaveItem.groupId = option.groupId;
        this.modalService.procedureSaveItem.id = option.id;
    };
    LossIdProcedureAddComponent.prototype.chooseServiceFromListCode = function (option) {
        this.controlForService.setValue({ name: option.name });
        this.controlForServiceGroup.setValue({ name: option.groupName });
        this.modalService.procedureSaveItem.name = option.name;
        this.modalService.procedureSaveItem.code = option.code;
        this.modalService.procedureSaveItem.groupName = option.groupName;
        this.modalService.procedureSaveItem.groupId = option.groupId;
        this.modalService.procedureSaveItem.id = option.id;
    };
    LossIdProcedureAddComponent.prototype.addNewService = function () {
        var _this = this;
        this.modalService.amount = this.modalService.costPerUnit * this.modalService.quantityAmount;
        this.modalService.date = this._dateToSend.makeDateToSend(this.modalService.date);
        var arrayToSend = [];
        arrayToSend.push(this.modalService);
        this._losesservice.addNewService(this.idOfLoss, arrayToSend).subscribe(function (data) {
            _this.onChanged.emit(data);
            _this.modalService = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__["ModalService"]();
            _this.clearModal();
        }, function (error) { console.log(error); });
    };
    LossIdProcedureAddComponent.prototype.clearModal = function () {
        this.controlForService.setValue({ name: '' });
        this.controlForServiceCode.setValue({ code: '' });
        this.controlForServiceGroup.setValue({ name: '' });
    };
    LossIdProcedureAddComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdProcedureAddComponent.prototype, "onChanged", void 0);
    LossIdProcedureAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-id-procedure-add',
            template: __webpack_require__(/*! raw-loader!./loss-id-procedure-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.html"),
            styles: [__webpack_require__(/*! ./loss-id-procedure-add.component.scss */ "./src/app/loss/loss-id-procedure-add/loss-id-procedure-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__["Mkb10Service"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__["DateToSendService"],
            src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_6__["LosesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LossIdProcedureAddComponent);
    return LossIdProcedureAddComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-id-procedure/loss-id-procedure.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/loss/loss-id-procedure/loss-id-procedure.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active,\nbutton,\nbutton:hover,\nbutton:active,\nbutton:visited {\n  outline: none;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n.no-margin {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.nodeNoChildren {\n  border: 0px;\n  background-color: #fff;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n\n.nodeNoChildren:hover {\n  opacity: 0.5;\n}\n\nbutton {\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\nbutton:hover {\n  color: #425261;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.delete-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #fe4902;\n  transition: all 0.3s ease-in-out;\n}\n\n.delete-btn :hover {\n  color: #DB0010;\n}\n\n.ok-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #58D575;\n  transition: all 0.3s ease-in-out;\n}\n\n.ok-btn :hover {\n  color: #26A13E;\n}\n\n.row {\n  transition: all 0.3s ease-in-out;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-simple-snackbar {\n  display: inline-block !important;\n}\n\n.table {\n  margin-top: 0px;\n}\n\n.table .row {\n  border-bottom: 0px;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.max {\n  width: 100%;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\ni {\n  vertical-align: middle !important;\n  padding-left: 5px;\n}\n\n.tbody {\n  margin-top: 5px;\n}\n\n.tbody .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px;\n  padding: 0 16px;\n}\n\n.tbody .text-center .btn-for-status {\n  width: 150px;\n  background-color: #e8e8e8;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  color: #4F4E51;\n  margin-bottom: 5px;\n}\n\n.tbody .text-center .btn-for-status:hover {\n  background-color: #dcdbdb;\n  color: #000;\n}\n\n.tbody .text-center .btn-for-status:hover i {\n  -webkit-animation: rotate 0.5s;\n          animation: rotate 0.5s;\n}\n\n.btn-for-save {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  border: 1px solid #ff6767;\n  color: #ff6b6b;\n}\n\n.btn-for-save:hover {\n  background-color: #ffe4e4;\n  border: 1px solid reds;\n  color: #ff3d3d;\n}\n\n.btn-for-search {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  color: #989898;\n  border: 1px solid #949494;\n}\n\n.btn-for-search h4 {\n  display: inline-block;\n  color: black;\n  margin-top: 0px;\n}\n\n.btn-for-search:hover {\n  border: 1px solid #000;\n  background-color: #e8e8e8;\n  color: #2f2f2f;\n}\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px #e8e8e8 solid;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n.row {\n  border-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtaWQtcHJvY2VkdXJlL2xvc3MtaWQtcHJvY2VkdXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb3NzL2xvc3MtaWQtcHJvY2VkdXJlL2xvc3MtaWQtcHJvY2VkdXJlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L21lZC1hcHAtMzAtMDgtMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRQyxhQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtBQ0VEOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDR0Q7O0FEREE7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDSUQ7O0FERkE7RUFDQyxZQUFBO0FDS0Q7O0FESEE7RUFDQyxnQ0FBQTtFQUNBLGNBQUE7QUNNRDs7QURKQTtFQUNDLGNBQUE7QUNPRDs7QURMQTtFQUNFLGlCQUFBO0FDUUY7O0FETEE7O0VBRUUsYUFBQTtBQ1FGOztBRExBO0VBQ0UsMEJBQUE7QUNRRjs7QUROQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1NEOztBRFJDO0VBQ0MsY0FBQTtBQ1VGOztBRFBBO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDVUQ7O0FEVEM7RUFDQyxjQUFBO0FDV0Y7O0FEUkE7RUFDRyxnQ0FBQTtBQ1dIOztBRFRBO0VBQ0ksa0JBQUE7QUNZSjs7QURUQTtFQUNJLGdDQUFBO0FDWUo7O0FEVEE7RUFDQyxlQUFBO0FDWUQ7O0FEWEM7RUFDQyxrQkFBQTtBQ2FGOztBRFZBO0VBQ0MsY0FBQTtBQ2FEOztBRFhBO0VBQ0MsY0FBQTtBQ2NEOztBRFpBO0VBQ0MsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNlRDs7QURWQTtFQUNDLFdBQUE7QUNhRDs7QURYQTtFQUNDLGFBQUE7QUNjRDs7QURaQTtFQUNDLGlDQUFBO0VBQ0EsaUJBQUE7QUNlRDs7QURiQTtFQUNDLGVBQUE7QUNnQkQ7O0FEZkM7RUFDQyxpQkFBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZEU7RUFDQyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZ0JIOztBRGRFO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FDZ0JIOztBRGRFO0VBQ0MsOEJBQUE7VUFBQSxzQkFBQTtBQ2dCSDs7QURaQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDaUJKOztBRGhCQztFQUNDLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNrQkY7O0FEZkE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2tCSjs7QURoQkE7RUFDQyx5QkFBQTtBQ21CRDs7QURqQkE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ29CRDs7QURsQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRHBCSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDc0JSOztBRG5CQTtFQUNJO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNzQkQ7RURwQkU7SUFDRCxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3NCRDtBQUNGOztBRDlCQTtFQUNJO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNzQkQ7RURwQkU7SUFDRCxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ3NCRDtBQUNGOztBQ3ROQTtFQUNJLGtCQUFBO0FEd05KIiwiZmlsZSI6InNyYy9hcHAvbG9zcy9sb3NzLWlkLXByb2NlZHVyZS9sb3NzLWlkLXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdixcclxuZGl2OmhvdmVyLFxyXG5kaXY6dmlzaXRlZCxcclxuZGl2OmFjdGl2ZSxcclxuYnV0dG9uLFxyXG5idXR0b246aG92ZXIsXHJcbmJ1dHRvbjphY3RpdmUsXHJcbmJ1dHRvbjp2aXNpdGVke1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaDR7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubm8tbWFyZ2luIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ub2RlTm9DaGlsZHJlbjpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjU7XHJcbn1cclxuYnV0dG9ue1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdGNvbG9yOiAjN0I4QTlBO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuXHRjb2xvcjogIzQyNTI2MTtcclxufVxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5kZWxldGUtYnRue1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGNvbG9yOiAjZmU0OTAyO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0OmhvdmVye1xyXG5cdFx0Y29sb3I6ICNEQjAwMTA7XHJcblx0fVxyXG59XHJcbi5vay1idG57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Y29sb3I6ICM1OEQ1NzU7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHQ6aG92ZXJ7XHJcblx0XHRjb2xvcjogIzI2QTEzRTtcclxuXHR9XHJcbn1cclxuLnJvd3tcclxuICBcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0LnJvd3tcclxuXHRcdGJvcmRlci1ib3R0b206IDBweDtcclxuXHR9XHJcbn1cclxuLmNvbG9yLWRlbGV0ZXtcclxuXHRjb2xvcjogICNmZTQ5MDI7XHJcbn1cclxuLmNvbG9yLWRlbGV0ZTpob3ZlcntcclxuXHRjb2xvcjogI0RCMDAxMDtcclxufVxyXG4uYWRkTmV3QnRue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLy8gLm1vZGFsLWxne1xyXG4vLyBcdG1heC13aWR0aDogMjAwMHB4XHJcbi8vIH1cclxuLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b246YWN0aXZlLCBidXR0b246Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5peyBcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRib2R5e1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcblx0XHRsaW5lLWhlaWdodDogMzZweDtcclxuXHRcdHBhZGRpbmc6IDAgMTZweDtcclxuXHR9XHJcblx0LnRleHQtY2VudGVye1xyXG5cdFx0LmJ0bi1mb3Itc3RhdHVze1xyXG5cdFx0XHR3aWR0aDogMTUwcHg7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdGNvbG9yOiAjNEY0RTUxO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0XHR9XHJcblx0XHQuYnRuLWZvci1zdGF0dXM6aG92ZXJ7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0fVxyXG5cdFx0LmJ0bi1mb3Itc3RhdHVzOmhvdmVyIGkge1xyXG5cdFx0XHRhbmltYXRpb246IHJvdGF0ZSAwLjVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zYXZle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY2NzY3O1xyXG4gICAgY29sb3I6ICNmZjZiNmJcclxufVxyXG4uYnRuLWZvci1zYXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZHM7XHJcbiAgICBjb2xvcjogI2ZmM2QzZFxyXG59XHJcbi5idG4tZm9yLXNlYXJjaHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xyXG5cdGg0e1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDApO1xyXG5cdFx0bWFyZ2luLXRvcDogMHB4O1xyXG5cdH1cclxufVxyXG4uYnRuLWZvci1zZWFyY2g6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGNvbG9yOiAjMmYyZjJmXHJcbn1cclxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVke1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgZnJvbSB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgXHJcblx0XHR9XHJcbiAgICB0byB7IFxyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTsgXHJcblx0XHR9XHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUsXG5idXR0b24sXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlLFxuYnV0dG9uOnZpc2l0ZWQge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLm5vZGVOb0NoaWxkcmVuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5ub2RlTm9DaGlsZHJlbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjN0I4QTlBO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzQyNTI2MTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjZmU0OTAyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kZWxldGUtYnRuIDpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ub2stYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiAjNThENTc1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5vay1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICMyNkExM0U7XG59XG5cbi5yb3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4udGFibGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udGJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGJvZHkgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXMge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNEY0RTUxO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1czpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RiZGI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnRib2R5IC50ZXh0LWNlbnRlciAuYnRuLWZvci1zdGF0dXM6aG92ZXIgaSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XG59XG5cbi5idG4tZm9yLXNhdmUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc7XG4gIGNvbG9yOiAjZmY2YjZiO1xufVxuXG4uYnRuLWZvci1zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkcztcbiAgY29sb3I6ICNmZjNkM2Q7XG59XG5cbi5idG4tZm9yLXNlYXJjaCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XG59XG4uYnRuLWZvci1zZWFyY2ggaDQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYnRuLWZvci1zZWFyY2g6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBjb2xvcjogIzJmMmYyZjtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCAjZThlOGU4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNjAlIDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxufVxuLnJvdyB7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vbG9zcy1pZC9sb3NzLWlkLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-id-procedure/loss-id-procedure.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/loss/loss-id-procedure/loss-id-procedure.component.ts ***!
  \***********************************************************************/
/*! exports provided: LossIdProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIdProcedureComponent", function() { return LossIdProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interface-and-class/forloss.class */ "./src/app/interface-and-class/forloss.class.ts");
/* harmony import */ var src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");






var LossIdProcedureComponent = /** @class */ (function () {
    function LossIdProcedureComponent(_losesservice, _dateToSend, router) {
        this._losesservice = _losesservice;
        this._dateToSend = _dateToSend;
        this.router = router;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalTempService = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_3__["ModalTemp"]();
        this.idOfLoss = this.router.url.slice(8);
        this.showToDelete = false;
    }
    LossIdProcedureComponent.prototype.cancelModalService = function (medOrService) {
        medOrService.amount = this.modalTempService.amount;
        medOrService.comment = this.modalTempService.comment;
        medOrService.costPerUnit = this.modalTempService.costPerUnit;
        medOrService.date = this.modalTempService.date;
        medOrService.insurance = this.modalTempService.insurance;
        medOrService.insurancePerUnit = this.modalTempService.insurancePerUnit;
        medOrService.quantityInsurance = this.modalTempService.quantityInsurance;
        medOrService.quantityAmount = this.modalTempService.quantityAmount;
        medOrService.rejectReason = this.modalTempService.rejectReason;
        medOrService.id = this.modalTempService.id;
    };
    LossIdProcedureComponent.prototype.saveToModalTempService = function (medOrService) {
        this.modalTempService.amount = medOrService.amount;
        this.modalTempService.comment = medOrService.comment;
        this.modalTempService.costPerUnit = medOrService.costPerUnit;
        this.modalTempService.date = medOrService.date;
        this.modalTempService.insurance = medOrService.insurance;
        this.modalTempService.insurancePerUnit = medOrService.insurancePerUnit;
        this.modalTempService.quantityInsurance = medOrService.quantityInsurance;
        this.modalTempService.quantityAmount = medOrService.quantityAmount;
        this.modalTempService.rejectReason = medOrService.rejectReason;
        this.modalTempService.id = medOrService.id;
    };
    LossIdProcedureComponent.prototype.changeStatusService = function (id, medId, status) {
        var _this = this;
        var statusToSend = {
            stateId: status
        };
        this._losesservice.changeStatusService(id, medId, statusToSend).subscribe(function (data) {
            _this.onChanged.emit(data);
        }, function (error) { console.log(error); });
    };
    LossIdProcedureComponent.prototype.changeService = function (service) {
        var _this = this;
        service.amount = service.costPerUnit * service.quantityAmount;
        service.date = this._dateToSend.makeDateToSend(service.date);
        var serviceToSend = service;
        serviceToSend.procedureSaveItem = {
            code: service.procedureItem.code,
            group: service.procedureItem.group,
            groupId: service.procedureItem.groupId,
            id: service.procedureItem.id,
            name: service.procedureItem.name
        };
        delete serviceToSend.procedureItem;
        var arrayToSend = [];
        arrayToSend.push(serviceToSend);
        this._losesservice.addNewService(this.idOfLoss, arrayToSend).subscribe(function (data) {
            _this.onChanged.emit(data);
        }, function (error) { console.log(error); });
    };
    LossIdProcedureComponent.prototype.deleteService = function (idOfService) {
        var _this = this;
        this._losesservice.deleteService(this.idOfLoss, idOfService).subscribe(function (data) {
            _this.onChanged.emit(data);
        }, function (error) { console.log(error); });
    };
    LossIdProcedureComponent.prototype.ngOnInit = function () {
        this.service = this.procedure;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdProcedureComponent.prototype, "procedure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LossIdProcedureComponent.prototype, "onChanged", void 0);
    LossIdProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-id-procedure',
            template: __webpack_require__(/*! raw-loader!./loss-id-procedure.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id-procedure/loss-id-procedure.component.html"),
            styles: [__webpack_require__(/*! ./loss-id-procedure.component.scss */ "./src/app/loss/loss-id-procedure/loss-id-procedure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_loses_service__WEBPACK_IMPORTED_MODULE_4__["LosesService"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_5__["DateToSendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LossIdProcedureComponent);
    return LossIdProcedureComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-id/loss-id.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/loss/loss-id/loss-id.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active,\nbutton,\nbutton:hover,\nbutton:active,\nbutton:visited {\n  outline: none;\n}\n\nh4 {\n  margin-top: 20px;\n}\n\n.no-margin {\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.nodeNoChildren {\n  border: 0px;\n  background-color: #fff;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n}\n\n.nodeNoChildren:hover {\n  opacity: 0.5;\n}\n\nbutton {\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\nbutton:hover {\n  color: #425261;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n\n.delete-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #fe4902;\n  transition: all 0.3s ease-in-out;\n}\n\n.delete-btn :hover {\n  color: #DB0010;\n}\n\n.ok-btn {\n  background: #fff;\n  border: none;\n  float: right;\n  margin-top: 15px;\n  color: #58D575;\n  transition: all 0.3s ease-in-out;\n}\n\n.ok-btn :hover {\n  color: #26A13E;\n}\n\n.row {\n  transition: all 0.3s ease-in-out;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-simple-snackbar {\n  display: inline-block !important;\n}\n\n.table {\n  margin-top: 0px;\n}\n\n.table .row {\n  border-bottom: 0px;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.max {\n  width: 100%;\n}\n\nbutton:active, button:focus {\n  outline: none;\n}\n\ni {\n  vertical-align: middle !important;\n  padding-left: 5px;\n}\n\n.tbody {\n  margin-top: 5px;\n}\n\n.tbody .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 36px;\n  padding: 0 16px;\n}\n\n.tbody .text-center .btn-for-status {\n  width: 150px;\n  background-color: #e8e8e8;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  color: #4F4E51;\n  margin-bottom: 5px;\n}\n\n.tbody .text-center .btn-for-status:hover {\n  background-color: #dcdbdb;\n  color: #000;\n}\n\n.tbody .text-center .btn-for-status:hover i {\n  -webkit-animation: rotate 0.5s;\n          animation: rotate 0.5s;\n}\n\n.btn-for-save {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  border: 1px solid #ff6767;\n  color: #ff6b6b;\n}\n\n.btn-for-save:hover {\n  background-color: #ffe4e4;\n  border: 1px solid reds;\n  color: #ff3d3d;\n}\n\n.btn-for-search {\n  margin-bottom: 20px;\n  margin-top: 0px;\n  background-color: #fff;\n  color: #989898;\n  border: 1px solid #949494;\n}\n\n.btn-for-search h4 {\n  display: inline-block;\n  color: black;\n  margin-top: 0px;\n}\n\n.btn-for-search:hover {\n  border: 1px solid #000;\n  background-color: #e8e8e8;\n  color: #2f2f2f;\n}\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border: 1px #e8e8e8 solid;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\nmat-expansion-panel {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\nmat-expansion-panel mat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform-origin: 60% 50%;\n            transform-origin: 60% 50%;\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtaWQvbG9zcy1pZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9zcy9sb3NzLWlkL2xvc3MtaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUMsYUFBQTtBQ0NEOztBRENBO0VBQ0MsZ0JBQUE7QUNFRDs7QURBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0dEOztBRERBO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0lEOztBREZBO0VBQ0MsWUFBQTtBQ0tEOztBREhBO0VBQ0MsZ0NBQUE7RUFDQSxjQUFBO0FDTUQ7O0FESkE7RUFDQyxjQUFBO0FDT0Q7O0FETEE7RUFDRSxpQkFBQTtBQ1FGOztBRExBOztFQUVFLGFBQUE7QUNRRjs7QURMQTtFQUNFLDBCQUFBO0FDUUY7O0FETkE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNTRDs7QURSQztFQUNDLGNBQUE7QUNVRjs7QURQQTtFQUNDLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ1VEOztBRFRDO0VBQ0MsY0FBQTtBQ1dGOztBRFJBO0VBQ0csZ0NBQUE7QUNXSDs7QURUQTtFQUNJLGtCQUFBO0FDWUo7O0FEVEE7RUFDSSxnQ0FBQTtBQ1lKOztBRFRBO0VBQ0MsZUFBQTtBQ1lEOztBRFhDO0VBQ0Msa0JBQUE7QUNhRjs7QURWQTtFQUNDLGNBQUE7QUNhRDs7QURYQTtFQUNDLGNBQUE7QUNjRDs7QURaQTtFQUNDLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDZUQ7O0FEVkE7RUFDQyxXQUFBO0FDYUQ7O0FEWEE7RUFDQyxhQUFBO0FDY0Q7O0FEWkE7RUFDQyxpQ0FBQTtFQUNBLGlCQUFBO0FDZUQ7O0FEYkE7RUFDQyxlQUFBO0FDZ0JEOztBRGZDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDaUJGOztBRGRFO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2dCSDs7QURkRTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBQ2dCSDs7QURkRTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUNnQkg7O0FEWkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEZEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2lCSjs7QURoQkM7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDa0JGOztBRGZBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNrQko7O0FEaEJBO0VBQ0MseUJBQUE7QUNtQkQ7O0FEakJBO0VBQ0MsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNvQkQ7O0FEbEJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ3FCSjs7QURwQkk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3NCUjs7QURuQkE7RUFDSTtJQUNELGlDQUFBO1lBQUEseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDc0JEO0VEcEJFO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNzQkQ7QUFDRjs7QUQ5QkE7RUFDSTtJQUNELGlDQUFBO1lBQUEseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDc0JEO0VEcEJFO0lBQ0QsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNzQkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvc3MvbG9zcy1pZC9sb3NzLWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LFxyXG5kaXY6aG92ZXIsXHJcbmRpdjp2aXNpdGVkLFxyXG5kaXY6YWN0aXZlLFxyXG5idXR0b24sXHJcbmJ1dHRvbjpob3ZlcixcclxuYnV0dG9uOmFjdGl2ZSxcclxuYnV0dG9uOnZpc2l0ZWR7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5oNHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5uby1tYXJnaW4ge1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLm5vZGVOb0NoaWxkcmVue1xyXG5cdGJvcmRlcjogMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm5vZGVOb0NoaWxkcmVuOmhvdmVye1xyXG5cdG9wYWNpdHk6IDAuNTtcclxufVxyXG5idXR0b257XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0Y29sb3I6ICM3QjhBOUE7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG5cdGNvbG9yOiAjNDI1MjYxO1xyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuLmRlbGV0ZS1idG57XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0Y29sb3I6ICNmZTQ5MDI7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHQ6aG92ZXJ7XHJcblx0XHRjb2xvcjogI0RCMDAxMDtcclxuXHR9XHJcbn1cclxuLm9rLWJ0bntcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRjb2xvcjogIzU4RDU3NTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG5cdDpob3ZlcntcclxuXHRcdGNvbG9yOiAjMjZBMTNFO1xyXG5cdH1cclxufVxyXG4ucm93e1xyXG4gIFx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxle1xyXG5cdG1hcmdpbi10b3A6IDBweDtcclxuXHQucm93e1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMHB4O1xyXG5cdH1cclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZGVsZXRlOmhvdmVye1xyXG5cdGNvbG9yOiAjREIwMDEwO1xyXG59XHJcbi5hZGROZXdCdG57XHJcblx0Ym9yZGVyOiAwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ei1pbmRleDogMTAwMDtcclxufVxyXG4vLyAubW9kYWwtbGd7XHJcbi8vIFx0bWF4LXdpZHRoOiAyMDAwcHhcclxuLy8gfVxyXG4ubWF4e1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbml7IFxyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4udGJvZHl7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG5cdFx0cGFkZGluZzogMCAxNnB4O1xyXG5cdH1cclxuXHQudGV4dC1jZW50ZXJ7XHJcblx0XHQuYnRuLWZvci1zdGF0dXN7XHJcblx0XHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdFx0Y29sb3I6ICM0RjRFNTE7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRcdH1cclxuXHRcdC5idG4tZm9yLXN0YXR1czpob3ZlcntcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2RjZGJkYjtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHR9XHJcblx0XHQuYnRuLWZvci1zdGF0dXM6aG92ZXIgaSB7XHJcblx0XHRcdGFuaW1hdGlvbjogcm90YXRlIDAuNXM7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5idG4tZm9yLXNhdmV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY3Njc7XHJcbiAgICBjb2xvcjogI2ZmNmI2YlxyXG59XHJcbi5idG4tZm9yLXNhdmU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGU0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkcztcclxuICAgIGNvbG9yOiAjZmYzZDNkXHJcbn1cclxuLmJ0bi1mb3Itc2VhcmNoe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzk4OTg5ODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NDk0OTQ7XHJcblx0aDR7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRjb2xvcjogcmdiYSgwLDAsMCk7XHJcblx0XHRtYXJnaW4tdG9wOiAwcHg7XHJcblx0fVxyXG59XHJcbi5idG4tZm9yLXNlYXJjaDpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgY29sb3I6ICMyZjJmMmZcclxufVxyXG4ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7XHJcblx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggI2U4ZThlOCBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbiAgICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICBmcm9tIHsgXHJcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDYwJSA1MCU7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyBcclxuXHRcdH1cclxuICAgIHRvIHsgXHJcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDYwJSA1MCU7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpOyBcclxuXHRcdH1cclxufSIsImRpdixcbmRpdjpob3ZlcixcbmRpdjp2aXNpdGVkLFxuZGl2OmFjdGl2ZSxcbmJ1dHRvbixcbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjphY3RpdmUsXG5idXR0b246dmlzaXRlZCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubm9kZU5vQ2hpbGRyZW4ge1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm5vZGVOb0NoaWxkcmVuOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICM3QjhBOUE7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjNDI1MjYxO1xufVxuXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICNmZTQ5MDI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmRlbGV0ZS1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbi5vay1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICM1OEQ1NzU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLm9rLWJ0biA6aG92ZXIge1xuICBjb2xvcjogIzI2QTEzRTtcbn1cblxuLnJvdyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50YWJsZSAucm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuXG4uY29sb3ItZGVsZXRlIHtcbiAgY29sb3I6ICNmZTQ5MDI7XG59XG5cbi5jb2xvci1kZWxldGU6aG92ZXIge1xuICBjb2xvcjogI0RCMDAxMDtcbn1cblxuLmFkZE5ld0J0biB7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uOmFjdGl2ZSwgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi50Ym9keSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi50Ym9keSAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1cyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM0RjRFNTE7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi50Ym9keSAudGV4dC1jZW50ZXIgLmJ0bi1mb3Itc3RhdHVzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGJkYjtcbiAgY29sb3I6ICMwMDA7XG59XG4udGJvZHkgLnRleHQtY2VudGVyIC5idG4tZm9yLXN0YXR1czpob3ZlciBpIHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMC41cztcbn1cblxuLmJ0bi1mb3Itc2F2ZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNjc2NztcbiAgY29sb3I6ICNmZjZiNmI7XG59XG5cbi5idG4tZm9yLXNhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNGU0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWRzO1xuICBjb2xvcjogI2ZmM2QzZDtcbn1cblxuLmJ0bi1mb3Itc2VhcmNoIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzk4OTg5ODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk0OTQ5NDtcbn1cbi5idG4tZm9yLXNlYXJjaCBoNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5idG4tZm9yLXNlYXJjaDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4ICNlOGU4ZTggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcbn1cbm1hdC1leHBhbnNpb24tcGFuZWwgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA2MCUgNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-id/loss-id.component.ts":
/*!***************************************************!*\
  !*** ./src/app/loss/loss-id/loss-id.component.ts ***!
  \***************************************************/
/*! exports provided: LossIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIdComponent", function() { return LossIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_loses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interface-and-class/forloss.class */ "./src/app/interface-and-class/forloss.class.ts");









var LossIdComponent = /** @class */ (function () {
    function LossIdComponent(_losesservice, _mkb10Service, _usersService, _router, _dateToSend) {
        var _this = this;
        this._losesservice = _losesservice;
        this._mkb10Service = _mkb10Service;
        this._usersService = _usersService;
        this._router = _router;
        this._dateToSend = _dateToSend;
        this.loss = new _interface_and_class_forloss_class__WEBPACK_IMPORTED_MODULE_8__["Loss"]();
        this.sumOfService = 0;
        this.sumOfMed = 0;
        this.idOfLoss = this._router.url.slice(8);
        this.controlForDiagnosisInModal = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForDiagnosisModal = [];
        this.controlForDiagnosisCodeInModal = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForDiagnosisCodeInModal = [];
        this.controlForDiagnosis = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForDiagnosis = [];
        this.controlForDiagnosisCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForDiagnosisCode = [];
        this.controlForClinic = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForClinic = [];
        this.controlForInn = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForInn = [];
        this.showSpinerDiagnosis = true;
        this.showSpinerCode = true;
        this.showSpinerClinic = true;
        this.showSpinerInn = true;
        if (this.idOfLoss[0] === 'n') {
            this.loss = this._losesservice.getNew();
            this._usersService.getUserById(this.idOfLoss.slice(4)).subscribe(function (data) {
                var today = new Date();
                _this.loss.date = _this._dateToSend.makeDateToSend(today);
                _this.loss.id = data.id;
                _this.loss.assured = data;
                _this.loss.stateId = 1;
            }, function (error) { console.log(error); });
            this._losesservice.getAllLossesForUser(this.idOfLoss.slice(4)).subscribe(function (data) {
                _this.idOfLoss = null;
                _this.lossListForUser = data;
            }, function (error) { console.log(error); });
        }
        else {
            this._losesservice.getLossesById(this.idOfLoss).subscribe(function (data) {
                _this.loss = data;
                _this.loss.diagnosisId = _this.loss.diagnosis.id;
                _this.controlForDiagnosis.setValue({ name: _this.loss.diagnosis.name });
                _this.controlForDiagnosisCode.setValue({ code: _this.loss.diagnosis.code });
                _this.controlForClinic.setValue({ clinicName: _this.loss.clinic.clinicName });
                _this.controlForInn.setValue({ inn: _this.loss.clinic.inn });
                for (var _i = 0, _a = _this.loss.medicaments; _i < _a.length; _i++) {
                    var value = _a[_i];
                    value.readonly = true;
                }
                for (var _b = 0, _c = _this.loss.procedures; _b < _c.length; _b++) {
                    var value = _c[_b];
                    value.readonly = true;
                }
                _this._losesservice.getAllLossesForUser(data.assured.id).subscribe(function (data) {
                    _this.lossListForUser = data;
                }, function (error) { console.log(error); });
            }, function (error) { console.log(error); });
        }
        this._mkb10Service.getMkbList().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var value = data_1[_i];
                if (value.nodeCount === 0) {
                    _this.optionsForDiagnosis.push(value);
                    _this.optionsForDiagnosisModal.push(value);
                    _this.optionsForDiagnosisCode.push(value);
                    _this.optionsForDiagnosisCodeInModal.push(value);
                }
            }
            _this.filteredOptionsForDiagnosis = _this._dateToSend.makeListForFilters(_this.controlForDiagnosis, 'name', _this.optionsForDiagnosis, 3);
            _this.filteredOptionsForDiagnosisModal = _this._dateToSend.makeListForFilters(_this.controlForDiagnosisInModal, 'name', _this.optionsForDiagnosisModal, 3);
            _this.filteredOptionsForDiagnosisCode = _this._dateToSend.makeListForFilters(_this.controlForDiagnosisCode, 'code', _this.optionsForDiagnosisCode, 2);
            _this.filteredOptionsForDiagnosisCodeInModal = _this._dateToSend.makeListForFilters(_this.controlForDiagnosisCodeInModal, 'code', _this.optionsForDiagnosisCodeInModal, 2);
            _this.showSpinerDiagnosis = false;
            _this.showSpinerCode = false;
        }, function (error) { console.log(error); });
        this._mkb10Service.getListOfClinic().subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var value = data_2[_i];
                _this.optionsForClinic.push(value);
                _this.optionsForInn.push(value);
            }
            _this.filteredOptionsForClinic = _this._dateToSend.makeListForFilters(_this.controlForClinic, 'clinicName', _this.optionsForClinic, 0);
            _this.filteredOptionsForInn = _this._dateToSend.makeListForFilters(_this.controlForInn, 'inn', _this.optionsForInn, 0);
            _this.showSpinerClinic = false;
            _this.showSpinerInn = false;
        }, function (error) { console.log(error); });
    }
    LossIdComponent.prototype.chooseDiagnosis = function (option) {
        this.loss.diagnosis.name = option.name;
        this.loss.diagnosis.code = option.code;
        this.loss.diagnosis.description = option.description;
        this.loss.diagnosisId = option.id;
    };
    LossIdComponent.prototype.chooseClinic = function (option) {
        this.loss.clinic.clinicName = option.clinicName;
        this.loss.clinic.clinicCode = option.clinicCode;
        this.loss.clinic.bik = option.bik;
        this.loss.clinic.inn = option.inn;
        this.loss.clinic.id = option.id;
        this.controlForInn.setValue({ inn: option.inn });
        this.controlForClinic.setValue({ clinicName: option.clinicName });
    };
    LossIdComponent.prototype.updateLoss = function (data) {
        this.loss.amount = data.amount;
        this.loss.insurance = data.insurance;
        this.loss.procedures = data.procedures;
        this.loss.medicaments = data.medicaments;
        this.loss.amountProcedures = data.amountProcedures;
        this.loss.amountMedicaments = data.amountMedicaments;
        this.loss.insuranceProcedures = data.insuranceProcedures;
        this.loss.insuranceMedicaments = data.insuranceMedicaments;
        for (var _i = 0, _a = this.loss.procedures; _i < _a.length; _i++) {
            var value = _a[_i];
            value.readonly = true;
        }
        for (var _b = 0, _c = this.loss.medicaments; _b < _c.length; _b++) {
            var value = _c[_b];
            value.readonly = true;
        }
    };
    LossIdComponent.prototype.changeStatus = function (status) {
        var statusToSend = {
            stateId: status
        };
        this._losesservice.changeStatus(this.idOfLoss, statusToSend).subscribe(function (error) { console.log(error); });
    };
    LossIdComponent.prototype.sendThisLoss = function () {
        var lossToSend = {
            assuredId: this.loss.assured.id,
            date: this._dateToSend.makeDateToSend(this.loss.date),
            diagnosisId: this.loss.diagnosisId,
            id: this.idOfLoss,
            medicaments: this.loss.medicaments,
            procedures: this.loss.procedures,
            stateId: this.loss.stateId,
            note: this.loss.note
        };
        this._losesservice.postDamage(lossToSend).subscribe(function (data) { }, function (error) { console.log(error); });
    };
    LossIdComponent.prototype.sendThisNewLoss = function () {
        var _this = this;
        var lossToSend = {
            assuredId: this.loss.assured.id,
            date: this._dateToSend.makeDateToSend(this.loss.date),
            diagnosisId: this.loss.diagnosisId,
            id: this.idOfLoss,
            medicaments: this.loss.medicaments,
            procedures: this.loss.procedures,
            remainingLimit: this.loss.remainingLimit,
            diagnosisLimit: this.loss.diagnosisLimit,
            clinicId: this.loss.clinic.id,
            note: this.loss.note,
            stateId: this.loss.stateId
        };
        this._losesservice.postDamage(lossToSend).subscribe(function (data) {
            _this._router.navigate(['../../losses', data.id], { replaceUrl: true });
        }, function (error) { console.log(error); });
    };
    LossIdComponent.prototype.goToLoss = function (damage) {
        this._router.navigate(['/losses', damage.id]);
    };
    LossIdComponent.prototype.console = function (x) {
        console.log(x);
    };
    LossIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-id',
            template: __webpack_require__(/*! raw-loader!./loss-id.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-id/loss-id.component.html"),
            styles: [__webpack_require__(/*! ./loss-id.component.scss */ "./src/app/loss/loss-id/loss-id.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_loses_service__WEBPACK_IMPORTED_MODULE_4__["LosesService"],
            _service_mkb10_service__WEBPACK_IMPORTED_MODULE_5__["Mkb10Service"],
            _service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_7__["DateToSendService"]])
    ], LossIdComponent);
    return LossIdComponent;
}());



/***/ }),

/***/ "./src/app/loss/loss-list/loss-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/loss/loss-list/loss-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.tbody {\n  cursor: pointer;\n}\n\n.mat-snack-bar-container {\n  text-align: center;\n}\n\n.mat-form-field-infix span {\n  font-size: 29px;\n}\n\n.text-center {\n  text-algin: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9sb3NzL2xvc3MtbGlzdC9sb3NzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvc3MvbG9zcy1saXN0L2xvc3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlDLGFBQUE7QUNDRDs7QURDQTtFQUNDLGVBQUE7QUNFRDs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQUM7RUFDQyxlQUFBO0FDR0Y7O0FEQUE7RUFDQyxrQkFBQTtBQ0dEIiwiZmlsZSI6InNyYy9hcHAvbG9zcy9sb3NzLWxpc3QvbG9zcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LFxyXG5kaXY6aG92ZXIsXHJcbmRpdjp2aXNpdGVkLFxyXG5kaXY6YWN0aXZle1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnRib2R5e1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuXHRzcGFue1xyXG5cdFx0Zm9udC1zaXplOiAyOXB4O1xyXG5cdH1cclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcblx0dGV4dC1hbGdpbjogY2VudGVyO1xyXG59IiwiZGl2LFxuZGl2OmhvdmVyLFxuZGl2OnZpc2l0ZWQsXG5kaXY6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRib2R5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCBzcGFuIHtcbiAgZm9udC1zaXplOiAyOXB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsZ2luOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/loss/loss-list/loss-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/loss/loss-list/loss-list.component.ts ***!
  \*******************************************************/
/*! exports provided: LossListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossListComponent", function() { return LossListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_loses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");




var LossListComponent = /** @class */ (function () {
    function LossListComponent(_losesservice, _dateToSend) {
        this._losesservice = _losesservice;
        this._dateToSend = _dateToSend;
        this.amountOfDamages = 0;
        this.typeOfAmountToShow = '';
        this.filtersToSend = [];
    }
    LossListComponent.prototype.updateList = function () {
        var _this = this;
        this._losesservice.getLoses(this.filtersToSend).subscribe(function (data) {
            _this.damages = data.content;
            _this.amountOfDamages = _this.damages.length;
            _this.typeOfAmountToShow = _this._dateToSend.checkAmountToShow(_this.amountOfDamages);
            for (var _i = 0, _a = _this.damages; _i < _a.length; _i++) {
                var value = _a[_i];
                value.selected = false;
            }
        }, function (error) { console.log(error); });
    };
    LossListComponent.prototype.setFilters = function (filters) {
        this.filtersToSend = filters;
        this.updateList();
    };
    LossListComponent.prototype.changeStatus = function (id, stateId) {
        var _this = this;
        var statusToSend = {
            stateId: stateId
        };
        this._losesservice.changeStatus(id, statusToSend).subscribe(function (resp) {
            if (resp.status === 200) {
                for (var _i = 0, _a = _this.damages; _i < _a.length; _i++) {
                    var value = _a[_i];
                    if (value.id === id) {
                        value.stateId = statusToSend.stateId;
                    }
                }
            }
        }, function (error) { console.log(error); });
    };
    LossListComponent.prototype.deleteLoss = function () {
        var _this = this;
        for (var _i = 0, _a = this.damages; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.selected) {
                this._losesservice.deleteLoss(value.id).subscribe(function (data) {
                    _this.updateList();
                }, function (error) { console.log(error); });
            }
        }
    };
    LossListComponent.prototype.checkAll = function () {
        for (var _i = 0, _a = this.damages; _i < _a.length; _i++) {
            var value = _a[_i];
            value.selected = !value.selected;
        }
    };
    LossListComponent.prototype.ngOnInit = function () {
        this.updateList();
    };
    LossListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-loss-list',
            template: __webpack_require__(/*! raw-loader!./loss-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/loss/loss-list/loss-list.component.html"),
            styles: [__webpack_require__(/*! ./loss-list.component.scss */ "./src/app/loss/loss-list/loss-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_loses_service__WEBPACK_IMPORTED_MODULE_2__["LosesService"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__["DateToSendService"]])
    ], LossListComponent);
    return LossListComponent;
}());



/***/ }),

/***/ "./src/app/page-for-user/page-for-user.component.scss":
/*!************************************************************!*\
  !*** ./src/app/page-for-user/page-for-user.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtZm9yLXVzZXIvcGFnZS1mb3ItdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page-for-user/page-for-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-for-user/page-for-user.component.ts ***!
  \**********************************************************/
/*! exports provided: PageForUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageForUserComponent", function() { return PageForUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageForUserComponent = /** @class */ (function () {
    function PageForUserComponent() {
    }
    PageForUserComponent.prototype.ngOnInit = function () {
    };
    PageForUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'javahack-page-for-user',
            template: __webpack_require__(/*! raw-loader!./page-for-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-for-user/page-for-user.component.html"),
            styles: [__webpack_require__(/*! ./page-for-user.component.scss */ "./src/app/page-for-user/page-for-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageForUserComponent);
    return PageForUserComponent;
}());



/***/ }),

/***/ "./src/app/product/product-id/product-id.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product/product-id/product-id.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max {\n  width: 100%;\n}\n\ndiv,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtaWQvcHJvZHVjdC1pZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWlkL3Byb2R1Y3QtaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7Ozs7RUFJQyxhQUFBO0FDRUQ7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtaWQvcHJvZHVjdC1pZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5kaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uY29sb3JGb3JEaXNhYmxlZHtcclxuICAgIGNvbG9yOiAjOGU4ZThlOztcclxufVxyXG4uY29sb3JGb3JBY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufSIsIi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2LFxuZGl2OmhvdmVyLFxuZGl2OnZpc2l0ZWQsXG5kaXY6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbG9yRm9yRGlzYWJsZWQge1xuICBjb2xvcjogIzhlOGU4ZTtcbn1cblxuLmNvbG9yRm9yQWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/product/product-id/product-id.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product/product-id/product-id.component.ts ***!
  \************************************************************/
/*! exports provided: ProductIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductIdComponent", function() { return ProductIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var ProductIdComponent = /** @class */ (function () {
    function ProductIdComponent(router, _settingsService, _dateToSend) {
        this.router = router;
        this._settingsService = _settingsService;
        this._dateToSend = _dateToSend;
        this.readonly = true;
        this.idOfProdact = this.router.url.substring(this.router.url.lastIndexOf('products/') + 9);
        this.product = {
            name: '',
            id: null,
            insuredCompanyId: null,
            dateEnd: '',
            dateStart: '',
            version: null,
            document: ''
        };
    }
    ProductIdComponent.prototype.changeProduct = function () {
        var _this = this;
        this.product.dateEnd = this._dateToSend.makeDateToSend(this.product.dateEnd);
        this.product.dateStart = this._dateToSend.makeDateToSend(this.product.dateStart);
        this._settingsService.postProductById(this.product).subscribe(function (data) {
            if (_this.idOfProdact[0] === 'n') {
                _this.readonly = true;
                _this.router.navigate(['../companies/' + _this.product.insuredCompanyId + '/products/' + data], { replaceUrl: true });
            }
            else {
                _this.readonly = true;
            }
        }, function (error) { console.log(error); });
    };
    ProductIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idOfProdact[0] === 'n') {
            this.readonly = false;
            this.product.insuredCompanyId = this.router.url.substring(this.router.url.lastIndexOf('companies/') + 10, this.router.url.lastIndexOf('/products'));
        }
        else {
            this._settingsService.getProductById(this.idOfProdact).subscribe(function (data) {
                _this.product.name = data.name;
                _this.product.id = data.id;
                _this.product.insuredCompanyId = data.insuredCompanyId;
                _this.product.dateEnd = data.dateEnd;
                _this.product.dateStart = data.dateStart;
                _this.product.version = data.version;
                _this.product.document = data.document;
            }, function (error) { console.log(error); });
        }
    };
    ProductIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-product-id',
            template: __webpack_require__(/*! raw-loader!./product-id.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product-id/product-id.component.html"),
            styles: [__webpack_require__(/*! ./product-id.component.scss */ "./src/app/product/product-id/product-id.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], ProductIdComponent);
    return ProductIdComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.spanForTable {\n  margin: auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlDLGFBQUE7QUNDRDs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uc3BhbkZvclRhYmxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3BhbkZvclRhYmxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_settingsService, router, _dateToSendService) {
        this._settingsService = _settingsService;
        this.router = router;
        this._dateToSendService = _dateToSendService;
        this.productsList = [];
        this.showButtonForNew = false;
        this.filtersToSend = [];
        this.idOfDamage = this.router.url.substring(this.router.url.lastIndexOf('companies/') + 10, this.router.url.lastIndexOf('/products'));
        this.nameOfCompany = '';
    }
    ProductListComponent.prototype.updateList = function () {
        var _this = this;
        this._settingsService.getProductListByCompany(this.idOfDamage).subscribe(function (data) {
            _this.productsList = data;
            _this.amountOfProducts = data.length;
            _this.typeOfLength = _this._dateToSendService.checkAmountToShow(_this.amountOfProducts);
            for (var _i = 0, _a = _this.productsList; _i < _a.length; _i++) {
                var product = _a[_i];
                product.selected = false;
            }
            if (_this.productsList.length === 0) {
                _this.showButtonForNew = true;
            }
            else {
                _this.showButtonForNew = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.setFilters = function (filters) {
        this.filtersToSend = filters;
        this.updateList();
    };
    ProductListComponent.prototype.deleteCompany = function () {
        var _this = this;
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.selected === true) {
                this._settingsService.deleteProductById(product.id).subscribe(function (data) {
                    _this.updateList();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ProductListComponent.prototype.changeSelection = function () {
        for (var _i = 0, _a = this.productsList; _i < _a.length; _i++) {
            var product = _a[_i];
            product.selected = !product.selected;
        }
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateList();
        this._settingsService.getCompanyById(this.idOfDamage).subscribe(function (data) {
            _this.nameOfCompany = data.companyName;
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/product/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/program/program-id/program-id.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/program/program-id/program-id.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max {\n  width: 100%;\n}\n\ndiv,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0taWQvcHJvZ3JhbS1pZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLWlkL3Byb2dyYW0taWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7Ozs7RUFJQyxhQUFBO0FDRUQ7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLWlkL3Byb2dyYW0taWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZGl2LFxyXG5kaXY6aG92ZXIsXHJcbmRpdjp2aXNpdGVkLFxyXG5kaXY6YWN0aXZle1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jb2xvckZvckRpc2FibGVke1xyXG4gICAgY29sb3I6ICM4ZThlOGU7O1xyXG59XHJcbi5jb2xvckZvckFjdGl2ZXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59IiwiLm1heCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/program/program-id/program-id.component.ts":
/*!************************************************************!*\
  !*** ./src/app/program/program-id/program-id.component.ts ***!
  \************************************************************/
/*! exports provided: ProgramIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramIdComponent", function() { return ProgramIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var _interface_and_class_program_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interface-and-class/program.class */ "./src/app/interface-and-class/program.class.ts");






var ProgramIdComponent = /** @class */ (function () {
    function ProgramIdComponent(_settingsservice, router, _dateToSend) {
        this._settingsservice = _settingsservice;
        this.router = router;
        this._dateToSend = _dateToSend;
        this.readonly = true;
        this.program = new _interface_and_class_program_class__WEBPACK_IMPORTED_MODULE_5__["Program"]();
        this.idOfProgram = this.router.url.substring(this.router.url.lastIndexOf('programs/') + 9);
    }
    ProgramIdComponent.prototype.changeProgram = function () {
        var _this = this;
        var programToSend = {
            code: this.program.code,
            dateEnd: this._dateToSend.makeDateToSend(this.program.dateEnd),
            companyProductId: this.program.companyProductId,
            dateStart: this._dateToSend.makeDateToSend(this.program.dateStart),
            name: this.program.name,
            type: 'Выплата',
            monthLimit: this.program.monthLimit,
            onceLimit: this.program.onceLimit,
            yearLimit: this.program.yearLimit,
            onceFranchise: this.program.onceFranchise,
            yearFranchise: this.program.yearFranchise
        };
        if (this.program !== undefined) {
            programToSend.id = this.program.id;
        }
        this._settingsservice.postProgramtById(programToSend).subscribe(function (data) {
            _this.readonly = true;
            _this.program.id = data;
            if (_this.idOfProgram[0] === 'n') {
                _this.idOfProgram = data;
                _this.router.navigate([_this.router.url.slice(0, -3), data], { replaceUrl: true });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProgramIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idOfProgram[0] !== 'n') {
            this._settingsservice.getProgramById(this.idOfProgram).subscribe(function (data) {
                for (var i in data) {
                    _this.program[i] = data[i];
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.readonly = false;
            this.program.companyProductId = this.router.url.substring(this.router.url.lastIndexOf('products/') + 9, this.router.url.lastIndexOf('/programs'));
            this.program.type = 'Выплата';
        }
    };
    ProgramIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-program-id',
            template: __webpack_require__(/*! raw-loader!./program-id.component.html */ "./node_modules/raw-loader/index.js!./src/app/program/program-id/program-id.component.html"),
            styles: [__webpack_require__(/*! ./program-id.component.scss */ "./src/app/program/program-id/program-id.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], ProgramIdComponent);
    return ProgramIdComponent;
}());



/***/ }),

/***/ "./src/app/program/program-list/program-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/program/program-list/program-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.spanForTable {\n  margin: auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0tbGlzdC9wcm9ncmFtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS1saXN0L3Byb2dyYW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlDLGFBQUE7QUNDRDs7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0tbGlzdC9wcm9ncmFtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uc3BhbkZvclRhYmxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn0iLCJkaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3BhbkZvclRhYmxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/program/program-list/program-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/program/program-list/program-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProgramListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramListComponent", function() { return ProgramListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var ProgramListComponent = /** @class */ (function () {
    function ProgramListComponent(_settingsservice, router, _dateToSendService) {
        this._settingsservice = _settingsservice;
        this.router = router;
        this._dateToSendService = _dateToSendService;
        this.nameOfProduct = '';
        this.programsList = [];
        this.filtersToSend = [];
        this.idOfProgram = this.router.url.substring(this.router.url.lastIndexOf('products/') + 9, this.router.url.lastIndexOf('/programs'));
        this.showButton = false;
        this.updateList();
    }
    ProgramListComponent.prototype.updateList = function () {
        var _this = this;
        this._settingsservice.getProgramListByProduct(this.idOfProgram).subscribe(function (data) {
            _this.programsList = data;
            _this.amountOfPrograms = data.length;
            _this.typeOfLength = _this._dateToSendService.checkAmountToShow(_this.amountOfPrograms);
            if (_this.programsList.length !== 0) {
                _this.showButton = false;
            }
            else {
                _this.showButton = true;
            }
            for (var _i = 0, _a = _this.programsList; _i < _a.length; _i++) {
                var program = _a[_i];
                program.selected = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProgramListComponent.prototype.setFilters = function (filters) {
        this.filtersToSend = filters;
        this.updateList();
    };
    ProgramListComponent.prototype.changeAll = function () {
        for (var _i = 0, _a = this.programsList; _i < _a.length; _i++) {
            var program = _a[_i];
            program.selected = !program.selected;
        }
    };
    ProgramListComponent.prototype.deleteSelected = function () {
        var _this = this;
        for (var _i = 0, _a = this.programsList; _i < _a.length; _i++) {
            var program = _a[_i];
            if (program.selected === true) {
                this._settingsservice.deleteProgramById(program.id).subscribe(function (data) {
                    _this.updateList();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ProgramListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getProductById(this.idOfProgram).subscribe(function (data) {
            _this.nameOfProduct = data.name;
        }, function (error) {
            console.log(error);
        });
    };
    ProgramListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-program-list',
            template: __webpack_require__(/*! raw-loader!./program-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/program/program-list/program-list.component.html"),
            styles: [__webpack_require__(/*! ./program-list.component.scss */ "./src/app/program/program-list/program-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], ProgramListComponent);
    return ProgramListComponent;
}());



/***/ }),

/***/ "./src/app/service/date-to-send.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/date-to-send.service.ts ***!
  \*************************************************/
/*! exports provided: DateToSendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateToSendService", function() { return DateToSendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var DateToSendService = /** @class */ (function () {
    function DateToSendService() {
    }
    DateToSendService.prototype.makeDateToSend = function (date) {
        if (typeof date === 'string') {
            return date;
        }
        else {
            var month = date.getMonth();
            var day = date.getDate();
            month++;
            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }
            return date.getFullYear().toString() + '-' + month + '-' + day;
        }
    };
    DateToSendService.prototype.checkAmountToShow = function (amount) {
        if (amount % 100 === 11 ||
            amount % 100 === 12 ||
            amount % 100 === 13) {
            return 'записей';
        }
        else if (amount % 10 === 1) {
            return 'запись';
        }
        else if (amount % 10 === 2 ||
            amount % 10 === 3 ||
            amount % 10 === 4) {
            return 'записи';
        }
        else {
            return 'записей';
        }
    };
    DateToSendService.prototype._filter = function (name, options) {
        var filterValue = name.toLowerCase();
        return options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    DateToSendService.prototype._filterCode = function (name, options) {
        var filterValue = name.toLowerCase();
        return options.filter(function (option) { return option.code.toLowerCase().indexOf(filterValue) === 0; });
    };
    DateToSendService.prototype._filterClinic = function (name, options) {
        var filterValue = name.toLowerCase();
        return options.filter(function (option) { return option.clinicName.toLowerCase().indexOf(filterValue) === 0; });
    };
    DateToSendService.prototype._filterInn = function (name, options) {
        var filterValue = name.toLowerCase();
        return options.filter(function (option) { return option.inn.toString().toLowerCase().indexOf(filterValue) === 0; });
    };
    DateToSendService.prototype._filterCompanyName = function (name, options) {
        var filterValue = name.toLowerCase();
        return options.filter(function (option) { return option.companyName.toLowerCase().indexOf(filterValue) === 0; });
    };
    DateToSendService.prototype.makeListForFilters = function (control, type, options, amount) {
        var _this = this;
        if (type === 'name') {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return name.length >= amount ? _this._filter(name, options) : []; }));
        }
        else if (type === 'code') {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.code; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (code) { return code.length >= amount ? _this._filterCode(code, options) : []; }));
        }
        else if (type === 'clinicName') {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.clinicName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (clinicName) { return clinicName.length >= amount ? _this._filterClinic(clinicName, options) : []; }));
        }
        else if (type === 'inn') {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.inn; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (inn) { return inn.length >= amount ? _this._filterInn(inn, options) : []; }));
        }
        else if (type === 'companyName') {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.companyName; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (companyName) { return companyName.length >= amount ? _this._filterCompanyName(companyName, options) : []; }));
        }
    };
    DateToSendService.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    DateToSendService.prototype.displayFnCode = function (user) {
        return user ? user.code : undefined;
    };
    DateToSendService.prototype.displayFnClinic = function (user) {
        return user ? user.clinicName : undefined;
    };
    DateToSendService.prototype.displayFnInn = function (user) {
        return user ? user.inn : undefined;
    };
    DateToSendService.prototype.displayFnCompanyName = function (user) {
        return user ? user.companyName : undefined;
    };
    DateToSendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateToSendService);
    return DateToSendService;
}());



/***/ }),

/***/ "./src/app/service/loses.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/loses.service.ts ***!
  \******************************************/
/*! exports provided: LosesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LosesService", function() { return LosesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var LOSS = {
    assured: {},
    date: '',
    clinic: {},
    diagnosis: {
        code: '',
        description: '',
        id: null,
        name: ''
    },
    id: 0,
    medicaments: [],
    procedures: [],
    status: 'NEW'
};
var LosesService = /** @class */ (function () {
    function LosesService(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
    }
    LosesService.prototype.getNew = function () {
        return LOSS;
    };
    LosesService.prototype.getLossesById = function (id) {
        return this.httpClient.get(this.serverUrl + '/loss/' + id);
    };
    LosesService.prototype.getAllLossesForUser = function (id) {
        return this.httpClient.get(this.serverUrl + '/assureds/' + id + '/losses');
    };
    LosesService.prototype.getLoses = function (array) {
        return this.httpClient.post(this.serverUrl + '/loss/list?paged=false', array);
    };
    LosesService.prototype.changeStatusMed = function (id, medId, status) {
        return this.httpClient.post(this.serverUrl + '/loss/' + id + '/medicaments/' + medId + '/status', status);
    };
    LosesService.prototype.changeStatusService = function (id, medId, status) {
        return this.httpClient.post(this.serverUrl + '/loss/' + id + '/procedures/' + medId + '/status', status);
    };
    LosesService.prototype.changeStatus = function (id, status) {
        return this.httpClient.post(this.serverUrl + '/loss/' + id + '/status', status, {
            observe: 'response'
        });
    };
    LosesService.prototype.addNewMed = function (id, newMed) {
        return this.httpClient.post(this.serverUrl + '/loss/' + id + '/medicaments', newMed);
    };
    LosesService.prototype.addNewService = function (id, newProcedure) {
        return this.httpClient.post(this.serverUrl + '/loss/' + id + '/procedures', newProcedure);
    };
    LosesService.prototype.postDamage = function (status) {
        return this.httpClient.post(this.serverUrl + '/loss', status);
    };
    LosesService.prototype.deleteMed = function (idOfLoss, idOfMed) {
        return this.httpClient.delete(this.serverUrl + '/loss/' + idOfLoss + '/medicaments/' + idOfMed);
    };
    LosesService.prototype.deleteService = function (idOfLoss, idOfServie) {
        return this.httpClient.delete(this.serverUrl + '/loss/' + idOfLoss + '/procedures/' + idOfServie);
    };
    LosesService.prototype.deleteLoss = function (id) {
        return this.httpClient.delete(this.serverUrl + '/loss/' + id);
    };
    LosesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LosesService);
    return LosesService;
}());



/***/ }),

/***/ "./src/app/service/mkb10.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/mkb10.service.ts ***!
  \******************************************/
/*! exports provided: Mkb10Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mkb10Service", function() { return Mkb10Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var Mkb10Service = /** @class */ (function () {
    function Mkb10Service(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl;
        this.httpClient.get(this.serverUrl + '/classifiers/icd10').subscribe(function (data) {
            _this.treeOfMkb = data;
        }, function (error) {
            console.log(error);
        });
        this.httpClient.get(this.serverUrl + '/classifiers/icd10?type=list').subscribe(function (data) {
            _this.listOfMkb = data;
        }, function (error) {
            console.log(error);
        });
        this.httpClient.get(this.serverUrl + '/classifiers/medicaments?paged=false').subscribe(function (data) {
            _this.listOfMed = data;
        }, function (error) {
            console.log(error);
        });
        this.httpClient.get(this.serverUrl + '/classifiers/procedures?paged=false').subscribe(function (data) {
            _this.listOfService = data;
        }, function (error) {
            console.log(error);
        });
        this.httpClient.get(this.serverUrl + '/classifiers/medicaments/groups?paged=false').subscribe(function (data) {
            _this.listOfMedGroup = data;
        }, function (error) {
            console.log(error);
        });
        this.httpClient.get(this.serverUrl + '/classifiers/procedures/groups?paged=false').subscribe(function (data) {
            _this.listOfServiceGroup = data;
        }, function (error) {
            console.log(error);
        });
        this.httpClient.get(this.serverUrl + '/classifiers/clinics').subscribe(function (data) {
            _this.listOfClinic = data;
        }, function (error) {
            console.log(error);
        });
    }
    Mkb10Service.prototype.getMkb10 = function () {
        return this.getList(this.treeOfMkb, '/classifiers/icd10');
    };
    Mkb10Service.prototype.getMkbList = function () {
        return this.getList(this.listOfMkb, '/classifiers/icd10?type=list');
    };
    Mkb10Service.prototype.getListOfMeds = function () {
        return this.getList(this.listOfMed, '/classifiers/medicaments?paged=false');
    };
    Mkb10Service.prototype.getListOfService = function () {
        return this.getList(this.listOfService, '/classifiers/procedures?paged=false');
    };
    Mkb10Service.prototype.getListOfMedsGroup = function () {
        return this.getList(this.listOfMedGroup, '/classifiers/medicaments/groups?paged=false');
    };
    Mkb10Service.prototype.getListOfServiceGroup = function () {
        return this.getList(this.listOfServiceGroup, '/classifiers/procedures/groups?paged=false');
    };
    Mkb10Service.prototype.getListOfClinic = function () {
        return this.getList(this.listOfClinic, '/classifiers/clinics');
    };
    Mkb10Service.prototype.justReturn = function (list) {
        var listForReturning = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(list);
            }, 100);
        });
        return listForReturning;
    };
    Mkb10Service.prototype.getList = function (list, url) {
        if (list === undefined) {
            return this.httpClient.get(this.serverUrl + url);
        }
        else {
            return this.justReturn(list);
        }
    };
    Mkb10Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Mkb10Service);
    return Mkb10Service;
}());



/***/ }),

/***/ "./src/app/service/settings.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/settings.service.ts ***!
  \*********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var SettingsService = /** @class */ (function () {
    function SettingsService(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
    }
    // компании
    SettingsService.prototype.getCompanyById = function (id) {
        return this.httpClient.get(this.serverUrl + '/insured/' + id);
    };
    SettingsService.prototype.postCompanyById = function (company) {
        return this.httpClient.post(this.serverUrl + '/insured/save', company);
    };
    SettingsService.prototype.getCompanyList = function (array) {
        return this.httpClient.post(this.serverUrl + '/insured/companies?paged=false', array);
    };
    SettingsService.prototype.deleteCompanyById = function (id) {
        return this.httpClient.delete(this.serverUrl + '/insured/' + id);
    };
    // платежные реквизиты
    SettingsService.prototype.postPayment = function (payment) {
        return this.httpClient.post(this.serverUrl + '/payment/save', payment);
    };
    SettingsService.prototype.deletePayment = function (id) {
        return this.httpClient.delete(this.serverUrl + '/payment/' + id);
    };
    // контакты компаний
    SettingsService.prototype.deleteContact = function (id) {
        return this.httpClient.delete(this.serverUrl + '/person/' + id);
    };
    SettingsService.prototype.postContact = function (contact) {
        return this.httpClient.post(this.serverUrl + '/person/save', contact);
    };
    // продукты
    SettingsService.prototype.getProductById = function (id) {
        return this.httpClient.get(this.serverUrl + '/insured/company/' + id);
    };
    SettingsService.prototype.postProductById = function (product) {
        return this.httpClient.post(this.serverUrl + '/insured/company/save', product);
    };
    SettingsService.prototype.getProductListByCompany = function (id) {
        return this.httpClient.get(this.serverUrl + '/insured/' + id + '/products');
    };
    SettingsService.prototype.deleteProductById = function (id) {
        return this.httpClient.delete(this.serverUrl + '/insured/company/' + id);
    };
    // программы
    SettingsService.prototype.getProgramById = function (id) {
        return this.httpClient.get(this.serverUrl + '/insured/company/product/' + id);
    };
    SettingsService.prototype.postProgramtById = function (program) {
        return this.httpClient.post(this.serverUrl + '/insured/company/product/save', program);
    };
    SettingsService.prototype.getProgramListByProduct = function (id) {
        return this.httpClient.get(this.serverUrl + '/insured/company/' + id + '/programs');
    };
    SettingsService.prototype.deleteProgramById = function (id) {
        return this.httpClient.delete(this.serverUrl + '/insured/company/product/' + id);
    };
    // покрытия
    SettingsService.prototype.getCoveragesListByProgram = function (id) {
        return this.httpClient.get(this.serverUrl + '/insured/company/product/' + id + '/covers');
    };
    SettingsService.prototype.postCoverageById = function (coverage) {
        return this.httpClient.post(this.serverUrl + '/insured/company/product/program/save', coverage);
    };
    // покрытия группы медикаментов
    SettingsService.prototype.postMedicamentForCoverageById = function (medGroup, id) {
        return this.httpClient.post(this.serverUrl + '/insured/company/product/program/' + id + '/medicamentgroups', medGroup);
    };
    SettingsService.prototype.deleteMedicamentForCoverageById = function (id, medicamentGroupId) {
        return this.httpClient.delete(this.serverUrl + '/insured/company/product/program/' + id + '/medicamentgroups/' + medicamentGroupId);
    };
    // покрытия группы услуг
    SettingsService.prototype.postProcedureForCoverageById = function (procedureGroup, id) {
        return this.httpClient.post(this.serverUrl + '/insured/company/product/program/' + id + '/proceduregroups', procedureGroup);
    };
    SettingsService.prototype.deleteProcedureForCoverageById = function (id, procedureGroupId) {
        return this.httpClient.delete(this.serverUrl + '/insured/company/product/program/' + id + '/proceduregroups/' + procedureGroupId);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/service/users.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/users.service.ts ***!
  \******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
    }
    UsersService.prototype.postUsers = function (array) {
        return this.httpClient.post(this.serverUrl + '/assureds/list?paged=false', array);
    };
    UsersService.prototype.postUsersByCompanyId = function (array, id) {
        return this.httpClient.post(this.serverUrl + '/assureds/list?companyId=' + id + '&paged=false', array);
    };
    UsersService.prototype.postUsersByProductId = function (array, id) {
        return this.httpClient.post(this.serverUrl + '/assureds/list?productId=' + id + '&paged=false', array);
    };
    UsersService.prototype.postUsersByProgramId = function (array, id) {
        return this.httpClient.post(this.serverUrl + '/assureds/list?programId=' + id + '&paged=false', array);
    };
    UsersService.prototype.sendUser = function (user) {
        return this.httpClient.post(this.serverUrl + '/assureds/save', user);
    };
    UsersService.prototype.deleteUserById = function (id) {
        return this.httpClient.delete(this.serverUrl + '/assureds/' + id);
    };
    UsersService.prototype.getUserById = function (id) {
        return this.httpClient.get(this.serverUrl + '/assureds/' + id);
    };
    UsersService.prototype.getUserExceptionsById = function (id) {
        return this.httpClient.get(this.serverUrl + '/assureds/' + id + '/exceptions');
    };
    UsersService.prototype.postUserExceptionsById = function (array, id) {
        return this.httpClient.post(this.serverUrl + '/assureds/' + id + '/exceptions', array);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tree-node {\n  min-height: 25px !important;\n  padding: 2px 0px;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n.max {\n  width: 100%;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */\n}\n\n/* Optional: show position indicator in red */\n\n::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n\n.row {\n  border-bottom: 0px;\n}\n\n.card {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1tZWQtYWRkL3NldHRpbmctdHJlZS1tZWQtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1tZWQtYWRkL3NldHRpbmctdHJlZS1tZWQtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L21lZC1hcHAtMzAtMDgtMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNDLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0Q7O0FESEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQWEsMkJBQUE7RUFDYix1QkFBQTtFQUEwQiw0Q0FBQTtBQ1M5Qjs7QURQQSw2Q0FBQTs7QUFDQTtFQUNJLG1CQUFBO0FDVUo7O0FDckNBO0VBQ0ksa0JBQUE7QUR3Q0o7O0FDckNBO0VBQ0ksYUFBQTtBRHdDSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy10cmVlLW1lZC1hZGQvc2V0dGluZy10cmVlLW1lZC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRyZWUtbm9kZXtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJweCAwcHg7XHJcbn1cclxuLmNvbG9yRm9yRGlzYWJsZWR7XHJcbiAgICBjb2xvcjogIzhlOGU4ZTs7XHJcbn1cclxuLmNvbG9yRm9yQWN0aXZle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuLmFkZE5ld0J0bntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gcmVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxufSIsIi5tYXQtdHJlZS1ub2RlIHtcbiAgbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1heCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkTmV3QnRuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXG59XG5cbi8qIE9wdGlvbmFsOiBzaG93IHBvc2l0aW9uIGluZGljYXRvciBpbiByZWQgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xufVxuXG4ucm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59IiwiQGltcG9ydCAnLi4vc2V0dGluZy10cmVlL3NldHRpbmctdHJlZS5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4ucm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingTreeMedAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTreeMedAddComponent", function() { return SettingTreeMedAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");





var SettingTreeMedAddComponent = /** @class */ (function () {
    function SettingTreeMedAddComponent(_mkb10Service, _dateToSend) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this._dateToSend = _dateToSend;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSpinerMed = true;
        this.showSpinerMedGroup = true;
        this.controlForMeds = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMeds = [];
        this.controlForMedsCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMedsCode = [];
        this.controlForMedGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMedGroup = [];
        this.med = {
            name: '',
            code: '',
            groupName: '',
            groupId: '',
            medicamentForm: '',
            id: '',
            isIncluded: false,
            isAgreementNeeded: false,
            onceFranchise: {
                id: '',
                maxSum: '',
                procent: ''
            },
            yearFranchise: {
                id: '',
                maxSum: '',
                procent: ''
            },
            onceLimit: {
                count: '',
                id: '',
                sum: ''
            },
            monthLimit: {
                count: '',
                id: '',
                sum: ''
            },
            yearLimit: {
                count: '',
                id: '',
                sum: ''
            }
        };
        this._mkb10Service.getListOfMeds().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForMeds.push(value);
                _this.optionsForMedsCode.push(value);
            }
            _this.filteredOptionsForMeds = _this._dateToSend.makeListForFilters(_this.controlForMeds, 'name', _this.optionsForMeds, 3);
            _this.filteredOptionsForMedsCode = _this._dateToSend.makeListForFilters(_this.controlForMedsCode, 'code', _this.optionsForMedsCode, 3);
            _this.showSpinerMed = false;
        }, function (error) { console.log(error); });
        this._mkb10Service.getListOfMedsGroup().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForMedGroup.push(value);
            }
            _this.filteredOptionsForMedGroup = _this._dateToSend.makeListForFilters(_this.controlForMedGroup, 'name', _this.optionsForMedGroup, 0);
            _this.showSpinerMedGroup = false;
        }, function (error) { console.log(error); });
    }
    SettingTreeMedAddComponent.prototype.addNewMedicament = function () {
        this.onSave.emit();
    };
    SettingTreeMedAddComponent.prototype.canceleAddNewMedicament = function () {
        this.onCancel.emit();
        this.controlForMeds.setValue({ name: '' });
        this.controlForMedGroup.setValue({ name: '' });
        this.med = {
            name: '',
            code: '',
            groupName: '',
            groupId: '',
            medicamentForm: '',
            id: '',
            isIncluded: false,
            isAgreementNeeded: false,
            onceFranchise: {
                id: '',
                maxSum: '',
                procent: ''
            },
            yearFranchise: {
                id: '',
                maxSum: '',
                procent: ''
            },
            onceLimit: {
                count: '',
                id: '',
                sum: ''
            },
            monthLimit: {
                count: '',
                id: '',
                sum: ''
            },
            yearLimit: {
                count: '',
                id: '',
                sum: ''
            }
        };
    };
    SettingTreeMedAddComponent.prototype.chooseMedFromList = function (option) {
        this.controlForMedsCode.setValue({ code: option.code });
        this.controlForMedGroup.setValue({ name: option.groupName });
        this.med.name = option.name;
        this.med.code = option.code;
        this.med.groupName = option.groupName;
        this.med.groupId = option.groupId;
        this.med.medicamentForm = option.medicamentForm;
        this.med.id = option.id;
    };
    SettingTreeMedAddComponent.prototype.chooseMedFromListCode = function (option) {
        this.controlForMeds.setValue({ name: option.name });
        this.controlForMedGroup.setValue({ name: option.groupName });
        this.med.name = option.name;
        this.med.code = option.code;
        this.med.groupName = option.groupName;
        this.med.groupId = option.groupId;
        this.med.medicamentForm = option.medicamentForm;
        this.med.id = option.id;
    };
    SettingTreeMedAddComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeMedAddComponent.prototype, "onSave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeMedAddComponent.prototype, "onCancel", void 0);
    SettingTreeMedAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-setting-tree-med-add',
            template: __webpack_require__(/*! raw-loader!./setting-tree-med-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.html"),
            styles: [__webpack_require__(/*! ./setting-tree-med-add.component.scss */ "./src/app/setting/setting-tree-med-add/setting-tree-med-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__["Mkb10Service"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__["DateToSendService"]])
    ], SettingTreeMedAddComponent);
    return SettingTreeMedAddComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting-tree-med/setting-tree-med.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/setting/setting-tree-med/setting-tree-med.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n\n.row {\n  margin-right: 0px;\n  margin-left: 0px;\n  border-bottom: 0px;\n}\n\nmat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.table span {\n  padding-top: 0px !important;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.max {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1tZWQvc2V0dGluZy10cmVlLW1lZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLXRyZWUtbWVkL3NldHRpbmctdHJlZS1tZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREZBO0VBQ0csMkJBQUE7QUNLSDs7QURIQTtFQUNDLGNBQUE7QUNNRDs7QURKQTtFQUNDLGNBQUE7QUNPRDs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNFLGlCQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1tZWQvc2V0dGluZy10cmVlLW1lZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59XHJcbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4udGFibGUgc3BhbiB7XHJcbiAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZGVsZXRlOmhvdmVye1xyXG5cdGNvbG9yOiAjREIwMDEwO1xyXG59XHJcbi5tYXh7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufSIsIjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4ZThlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnRhYmxlIHNwYW4ge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/setting/setting-tree-med/setting-tree-med.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/setting/setting-tree-med/setting-tree-med.component.ts ***!
  \************************************************************************/
/*! exports provided: SettingTreeMedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTreeMedComponent", function() { return SettingTreeMedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingTreeMedComponent = /** @class */ (function () {
    function SettingTreeMedComponent() {
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SettingTreeMedComponent.prototype.makeDefault = function () {
        this.med.readonly = true;
        this.med.makeToDelete = false;
    };
    SettingTreeMedComponent.prototype.makeToChange = function () {
        this.med.readonly = false;
        this.med.makeToDelete = false;
    };
    SettingTreeMedComponent.prototype.makeToAskToDelete = function () {
        this.med.readonly = true;
        this.med.makeToDelete = true;
    };
    SettingTreeMedComponent.prototype.console = function (event) {
        console.log(event);
    };
    SettingTreeMedComponent.prototype.ngOnInit = function () {
        this.med = this.medicament;
        this.med.readonly = true;
        this.med.makeToDelete = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeMedComponent.prototype, "medicament", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeMedComponent.prototype, "onChanged", void 0);
    SettingTreeMedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-setting-tree-med',
            template: __webpack_require__(/*! raw-loader!./setting-tree-med.component.html */ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-med/setting-tree-med.component.html"),
            styles: [__webpack_require__(/*! ./setting-tree-med.component.scss */ "./src/app/setting/setting-tree-med/setting-tree-med.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingTreeMedComponent);
    return SettingTreeMedComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tree-node {\n  min-height: 25px !important;\n  padding: 2px 0px;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n.max {\n  width: 100%;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */\n}\n\n/* Optional: show position indicator in red */\n\n::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n\n.row {\n  border-bottom: 0px;\n}\n\n.card {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1wcm9jZWR1cmUtYWRkL3NldHRpbmctdHJlZS1wcm9jZWR1cmUtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1wcm9jZWR1cmUtYWRkL3NldHRpbmctdHJlZS1wcm9jZWR1cmUtYWRkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVzL9Cg0LDQsdC+0YfQuNC5INGB0YLQvtC7L21lZC1hcHAtMzAtMDgtMjAxOS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNDLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0Q7O0FESEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQWEsMkJBQUE7RUFDYix1QkFBQTtFQUEwQiw0Q0FBQTtBQ1M5Qjs7QURQQSw2Q0FBQTs7QUFDQTtFQUNJLG1CQUFBO0FDVUo7O0FDckNBO0VBQ0ksa0JBQUE7QUR3Q0o7O0FDdENBO0VBQ0ksYUFBQTtBRHlDSiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy10cmVlLXByb2NlZHVyZS1hZGQvc2V0dGluZy10cmVlLXByb2NlZHVyZS1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRyZWUtbm9kZXtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJweCAwcHg7XHJcbn1cclxuLmNvbG9yRm9yRGlzYWJsZWR7XHJcbiAgICBjb2xvcjogIzhlOGU4ZTs7XHJcbn1cclxuLmNvbG9yRm9yQWN0aXZle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuLmFkZE5ld0J0bntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gcmVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxufSIsIi5tYXQtdHJlZS1ub2RlIHtcbiAgbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1heCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkTmV3QnRuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXG59XG5cbi8qIE9wdGlvbmFsOiBzaG93IHBvc2l0aW9uIGluZGljYXRvciBpbiByZWQgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xufVxuXG4ucm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59IiwiQGltcG9ydCAnLi4vc2V0dGluZy10cmVlL3NldHRpbmctdHJlZS5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4ucm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SettingTreeProcedureAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTreeProcedureAddComponent", function() { return SettingTreeProcedureAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var SettingTreeProcedureAddComponent = /** @class */ (function () {
    function SettingTreeProcedureAddComponent(_mkb10Service, _dateToSend) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this._dateToSend = _dateToSend;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.controlForService = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForService = [];
        this.controlForServiceCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForServiceCode = [];
        this.controlForServiceGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForServiceGroup = [];
        this.showSpinerService = true;
        this.showSpinerServiceGroup = true;
        this.service = {
            name: '',
            code: '',
            groupName: '',
            groupId: '',
            id: '',
            isIncluded: false,
            isAgreementNeeded: false,
            onceFranchise: {
                id: 0,
                maxSum: 0,
                procent: 0
            },
            yearFranchise: {
                id: 0,
                maxSum: 0,
                procent: 0
            },
            onceLimit: {
                count: 0,
                id: 0,
                sum: 0
            },
            monthLimit: {
                count: 0,
                id: 0,
                sum: 0
            },
            yearLimit: {
                count: 0,
                id: 0,
                sum: 0
            }
        };
        this._mkb10Service.getListOfService().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForService.push(value);
                _this.optionsForServiceCode.push(value);
            }
            _this.filteredOptionsForService = _this._dateToSend.makeListForFilters(_this.controlForService, 'name', _this.optionsForService, 3);
            _this.filteredOptionsForServiceCode = _this._dateToSend.makeListForFilters(_this.controlForServiceCode, 'code', _this.optionsForServiceCode, 3);
            _this.showSpinerService = false;
        }, function (error) { console.log(error); });
        this._mkb10Service.getListOfServiceGroup().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForServiceGroup.push(value);
            }
            _this.filteredOptionsForServiceGroup = _this._dateToSend.makeListForFilters(_this.controlForServiceGroup, 'name', _this.optionsForServiceGroup, 0);
            _this.showSpinerServiceGroup = false;
        }, function (error) { console.log(error); });
    }
    SettingTreeProcedureAddComponent.prototype.addNewService = function () {
        this.onSave.emit();
    };
    SettingTreeProcedureAddComponent.prototype.canceleAddNewService = function () {
        this.onCancel.emit();
        this.service = {
            name: '',
            code: '',
            groupName: '',
            groupId: '',
            id: '',
            isIncluded: false,
            isAgreementNeeded: false,
            onceFranchise: {
                id: 0,
                maxSum: 0,
                procent: 0
            },
            yearFranchise: {
                id: 0,
                maxSum: 0,
                procent: 0
            },
            onceLimit: {
                count: 0,
                id: 0,
                sum: 0
            },
            monthLimit: {
                count: 0,
                id: 0,
                sum: 0
            },
            yearLimit: {
                count: 0,
                id: 0,
                sum: 0
            }
        };
    };
    SettingTreeProcedureAddComponent.prototype.chooseServiceFromList = function (option) {
        this.controlForServiceCode.setValue({ code: option.code });
        this.controlForServiceGroup.setValue({ name: option.groupName });
        this.service.name = option.name;
        this.service.code = option.code;
        this.service.groupName = option.groupName;
        this.service.groupId = option.groupId;
        this.service.id = option.id;
    };
    SettingTreeProcedureAddComponent.prototype.chooseServiceFromListCode = function (option) {
        this.controlForService.setValue({ name: option.name });
        this.controlForServiceGroup.setValue({ name: option.groupName });
        this.service.name = option.name;
        this.service.code = option.code;
        this.service.groupName = option.groupName;
        this.service.groupId = option.groupId;
        this.service.id = option.id;
    };
    SettingTreeProcedureAddComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeProcedureAddComponent.prototype, "onSave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeProcedureAddComponent.prototype, "onCancel", void 0);
    SettingTreeProcedureAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-setting-tree-procedure-add',
            template: __webpack_require__(/*! raw-loader!./setting-tree-procedure-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.html"),
            styles: [__webpack_require__(/*! ./setting-tree-procedure-add.component.scss */ "./src/app/setting/setting-tree-procedure-add/setting-tree-procedure-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], SettingTreeProcedureAddComponent);
    return SettingTreeProcedureAddComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #8e8e8e;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #353535;\n}\n\n.row {\n  margin-right: 0px;\n  margin-left: 0px;\n  border-bottom: 0px;\n}\n\nmat-expansion-panel-header {\n  min-height: 48px;\n  height: auto !important;\n}\n\n.table span {\n  padding-top: 0px !important;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\n.max {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1wcm9jZWR1cmUvc2V0dGluZy10cmVlLXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLXRyZWUtcHJvY2VkdXJlL3NldHRpbmctdHJlZS1wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREZBO0VBQ0csMkJBQUE7QUNLSDs7QURIQTtFQUNDLGNBQUE7QUNNRDs7QURKQTtFQUNDLGNBQUE7QUNPRDs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNFLGlCQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS1wcm9jZWR1cmUvc2V0dGluZy10cmVlLXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4O1xyXG59XHJcbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4udGFibGUgc3BhbiB7XHJcbiAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZGVsZXRlOmhvdmVye1xyXG5cdGNvbG9yOiAjREIwMDEwO1xyXG59XHJcbi5tYXh7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufSIsIjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU4ZThlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnRhYmxlIHNwYW4ge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1kZWxldGUge1xuICBjb2xvcjogI2ZlNDkwMjtcbn1cblxuLmNvbG9yLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiAjREIwMDEwO1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.ts ***!
  \************************************************************************************/
/*! exports provided: SettingTreeProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTreeProcedureComponent", function() { return SettingTreeProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingTreeProcedureComponent = /** @class */ (function () {
    function SettingTreeProcedureComponent() {
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SettingTreeProcedureComponent.prototype.makeDefault = function () {
        this.service.readonly = true;
        this.service.makeToDelete = false;
    };
    SettingTreeProcedureComponent.prototype.makeToChange = function () {
        this.service.readonly = false;
        this.service.makeToDelete = false;
    };
    SettingTreeProcedureComponent.prototype.makeToAskToDelete = function () {
        this.service.readonly = true;
        this.service.makeToDelete = true;
    };
    SettingTreeProcedureComponent.prototype.ngOnInit = function () {
        this.service = this.procedure;
        this.service.readonly = true;
        this.service.makeToDelete = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeProcedureComponent.prototype, "procedure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingTreeProcedureComponent.prototype, "onChanged", void 0);
    SettingTreeProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-setting-tree-procedure',
            template: __webpack_require__(/*! raw-loader!./setting-tree-procedure.component.html */ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.html"),
            styles: [__webpack_require__(/*! ./setting-tree-procedure.component.scss */ "./src/app/setting/setting-tree-procedure/setting-tree-procedure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingTreeProcedureComponent);
    return SettingTreeProcedureComponent;
}());

// this.onChanged.emit(data);


/***/ }),

/***/ "./src/app/setting/setting-tree/setting-tree.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/setting/setting-tree/setting-tree.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tree-node {\n  min-height: 25px !important;\n  padding: 2px 0px;\n}\n\n.colorForDisabled {\n  color: #8e8e8e;\n}\n\n.colorForActive {\n  color: #000;\n}\n\n.max {\n  width: 100%;\n}\n\n.addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */\n}\n\n/* Optional: show position indicator in red */\n\n::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS9zZXR0aW5nLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy10cmVlL3NldHRpbmctdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNDLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0Q7O0FESEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQWEsMkJBQUE7RUFDYix1QkFBQTtFQUEwQiw0Q0FBQTtBQ1M5Qjs7QURQQSw2Q0FBQTs7QUFDQTtFQUNJLG1CQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3NldHRpbmctdHJlZS9zZXR0aW5nLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRyZWUtbm9kZXtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJweCAwcHg7XHJcbn1cclxuLmNvbG9yRm9yRGlzYWJsZWR7XHJcbiAgICBjb2xvcjogIzhlOGU4ZTs7XHJcbn1cclxuLmNvbG9yRm9yQWN0aXZle1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm1heHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuLmFkZE5ld0J0bntcclxuXHRib3JkZXI6IDBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxufVxyXG4vKiBPcHRpb25hbDogc2hvdyBwb3NpdGlvbiBpbmRpY2F0b3IgaW4gcmVkICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxufSIsIi5tYXQtdHJlZS1ub2RlIHtcbiAgbWluLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG4uY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuXG4uY29sb3JGb3JBY3RpdmUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm1heCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkTmV3QnRuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBweDtcbiAgLyogUmVtb3ZlIHNjcm9sbGJhciBzcGFjZSAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXG59XG5cbi8qIE9wdGlvbmFsOiBzaG93IHBvc2l0aW9uIGluZGljYXRvciBpbiByZWQgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/setting-tree/setting-tree.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/setting/setting-tree/setting-tree.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTreeComponent", function() { return SettingTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");






var SettingTreeComponent = /** @class */ (function () {
    function SettingTreeComponent(_mkb10Service, router) {
        this._mkb10Service = _mkb10Service;
        this.router = router;
        this.settings = {
            readonly: true,
            onceFranchise: {
                id: 0,
                maxSum: 100,
                procent: 10
            },
            yearFranchise: {
                id: 0,
                maxSum: 1000,
                procent: 0
            },
            onceLimit: {
                count: 0,
                id: 0,
                sum: 100
            },
            monthLimit: {
                count: 0,
                id: 0,
                sum: 1000
            },
            yearLimit: {
                count: 0,
                id: 0,
                sum: 10000
            }
        };
        this.procedures = [
            {
                name: 'Протонная магнитно-резонансная спектроскопия',
                code: 'A05.23.009.009',
                group: 'Прочее',
                isIncluded: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'Протонная магнитно-резонансная спектроскопия',
                code: 'A05.23.009.009',
                group: 'Прочее',
                isIncluded: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'Протонная магнитно-резонансная спектроскопия',
                code: 'A05.23.009.009',
                group: 'Прочее',
                isIncluded: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'Проведение йодной пробы',
                code: 'A02.01.005',
                group: 'Прочее',
                isIncluded: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            }
        ];
        this.medicaments = [
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            },
            {
                name: 'name',
                code: 'code',
                group: 'group',
                isIncludet: true,
                isAgreementNeeded: false,
                onceFranchise: {
                    id: 0,
                    maxSum: 100,
                    procent: 10
                },
                yearFranchise: {
                    id: 0,
                    maxSum: 1000,
                    procent: 0
                },
                onceLimit: {
                    count: 0,
                    id: 0,
                    sum: 100
                },
                monthLimit: {
                    count: 0,
                    id: 0,
                    sum: 1000
                },
                yearLimit: {
                    count: 0,
                    id: 0,
                    sum: 10000
                }
            }
        ];
        this.modalNameOne = '';
        this.isAddingMed = false;
        this.isAddingService = false;
        this.showSpinerMkb = false;
        this.hasChild = function (_, node) { return node.expandable; };
        this._transformer = function (node, level) {
            return {
                expandable: !!node.nodes && node.nodes.length > 0,
                name: node.name,
                level: level,
                description: node.description,
                code: node.code,
                id: node.id
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.nodes; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
    }
    // tree-end
    SettingTreeComponent.prototype.modalForOne = function (modal) {
        this.modalNameOne = '( ' + modal.code + ' ) : ' + modal.name;
    };
    SettingTreeComponent.prototype.updateList = function () {
        console.log('updated');
        this.isAddingMed = false;
        this.isAddingService = false;
    };
    SettingTreeComponent.prototype.notUpdateList = function () {
        this.isAddingMed = false;
        this.isAddingService = false;
    };
    SettingTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showSpinerMkb = true;
        }, 100);
        this._mkb10Service.getMkb10().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.showSpinerMkb = false;
        }, function (error) {
            console.log(error);
        });
    };
    SettingTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-setting-tree',
            template: __webpack_require__(/*! raw-loader!./setting-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/setting/setting-tree/setting-tree.component.html"),
            styles: [__webpack_require__(/*! ./setting-tree.component.scss */ "./src/app/setting/setting-tree/setting-tree.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_mkb10_service__WEBPACK_IMPORTED_MODULE_5__["Mkb10Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingTreeComponent);
    return SettingTreeComponent;
}());



/***/ }),

/***/ "./src/app/user/user-exception-med-groups/user-exception-med-groups.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/user/user-exception-med-groups/user-exception-med-groups.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0px;\n}\n\n.max {\n  width: 100%;\n}\n\n.row-body:hover {\n  background-color: #e8e8e84d;\n}\n\n.icon-delete, .icon-close {\n  color: #fe4902;\n}\n\n.icon-delete:hover, .icon-close:hover {\n  color: #e04102;\n}\n\n.icon-done {\n  color: #00c300;\n}\n\n.icon-done:hover {\n  color: #006f00;\n}\n\n.addNewBtn {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uLW1lZC1ncm91cHMvdXNlci1leGNlcHRpb24tbWVkLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLWV4Y2VwdGlvbi1tZWQtZ3JvdXBzL3VzZXItZXhjZXB0aW9uLW1lZC1ncm91cHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREhJO0VBQ0ksY0FBQTtBQ0tSOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREpJO0VBQ0ksY0FBQTtBQ01SOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWV4Y2VwdGlvbi1tZWQtZ3JvdXBzL3VzZXItZXhjZXB0aW9uLW1lZC1ncm91cHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5tYXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdy1ib2R5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcclxufVxyXG4uaWNvbi1kZWxldGUsIC5pY29uLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjZmU0OTAyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlMDQxMDI7XHJcbiAgICB9XHJcbn1cclxuLmljb24tZG9uZSB7XHJcbiAgICBjb2xvcjogIzAwYzMwMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2ZjAwO1xyXG4gICAgfVxyXG59XHJcbi5hZGROZXdCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctYm9keTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcbn1cblxuLmljb24tZGVsZXRlLCAuaWNvbi1jbG9zZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuLmljb24tZGVsZXRlOmhvdmVyLCAuaWNvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZTA0MTAyO1xufVxuXG4uaWNvbi1kb25lIHtcbiAgY29sb3I6ICMwMGMzMDA7XG59XG4uaWNvbi1kb25lOmhvdmVyIHtcbiAgY29sb3I6ICMwMDZmMDA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-exception-med-groups/user-exception-med-groups.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/user/user-exception-med-groups/user-exception-med-groups.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserExceptionMedGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExceptionMedGroupsComponent", function() { return UserExceptionMedGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");





var UserExceptionMedGroupsComponent = /** @class */ (function () {
    function UserExceptionMedGroupsComponent(_dateToSend, _mkb10Service) {
        this._dateToSend = _dateToSend;
        this._mkb10Service = _mkb10Service;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.medGroups = [];
        this.isAdding = false;
        this.showSpinerMedGroup = true;
        this.controlForMedGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMedGroup = [];
        this.tempOption = {
            id: null,
            medicamentGroupItem: {
                code: null,
                description: null,
                id: null,
                name: null
            }
        };
    }
    UserExceptionMedGroupsComponent.prototype.clearInput = function () {
        this.controlForMedGroup.setValue({ name: '' });
        this.tempOption = {
            id: null,
            medicamentGroupItem: {
                code: null,
                description: null,
                id: null,
                name: null
            }
        };
    };
    UserExceptionMedGroupsComponent.prototype.addGroup = function () {
        if (this.tempOption.medicamentGroupItem.id != null) {
            this.medGroups.unshift(this.tempOption);
            this.clearInput();
            this.isAdding = false;
            this.onUpdate.emit(this.medGroups);
        }
    };
    UserExceptionMedGroupsComponent.prototype.deleteGroup = function (group) {
        this.medGroups.splice(this.medGroups.indexOf(group), 1);
        this.onUpdate.emit(this.medGroups);
    };
    UserExceptionMedGroupsComponent.prototype.chooseOption = function (option) {
        this.tempOption.medicamentGroupItem = option;
    };
    UserExceptionMedGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medGroups = this.exception;
        this._mkb10Service.getListOfMedsGroup().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForMedGroup.push(value);
            }
            _this.filteredOptionsForMedGroup = _this._dateToSend.makeListForFilters(_this.controlForMedGroup, 'name', _this.optionsForMedGroup, 0);
            _this.showSpinerMedGroup = false;
        }, function (error) { console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionMedGroupsComponent.prototype, "exception", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionMedGroupsComponent.prototype, "onUpdate", void 0);
    UserExceptionMedGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-exception-med-groups',
            template: __webpack_require__(/*! raw-loader!./user-exception-med-groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-med-groups/user-exception-med-groups.component.html"),
            styles: [__webpack_require__(/*! ./user-exception-med-groups.component.scss */ "./src/app/user/user-exception-med-groups/user-exception-med-groups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__["DateToSendService"],
            src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__["Mkb10Service"]])
    ], UserExceptionMedGroupsComponent);
    return UserExceptionMedGroupsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-exception-med/user-exception-med.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/user-exception-med/user-exception-med.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0px;\n}\n\n.max {\n  width: 100%;\n}\n\n.row-body:hover {\n  background-color: #e8e8e84d;\n}\n\n.icon-delete, .icon-close {\n  color: #fe4902;\n}\n\n.icon-delete:hover, .icon-close:hover {\n  color: #e04102;\n}\n\n.icon-done {\n  color: #00c300;\n}\n\n.icon-done:hover {\n  color: #006f00;\n}\n\n.addNewBtn {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uLW1lZC91c2VyLWV4Y2VwdGlvbi1tZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1leGNlcHRpb24tbWVkL3VzZXItZXhjZXB0aW9uLW1lZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FESEk7RUFDSSxjQUFBO0FDS1I7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESkk7RUFDSSxjQUFBO0FDTVI7O0FESEE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uLW1lZC91c2VyLWV4Y2VwdGlvbi1tZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5tYXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdy1ib2R5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcclxufVxyXG4uaWNvbi1kZWxldGUsIC5pY29uLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjZmU0OTAyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlMDQxMDI7XHJcbiAgICB9XHJcbn1cclxuLmljb24tZG9uZSB7XHJcbiAgICBjb2xvcjogIzAwYzMwMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2ZjAwO1xyXG4gICAgfVxyXG59XHJcbi5hZGROZXdCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctYm9keTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcbn1cblxuLmljb24tZGVsZXRlLCAuaWNvbi1jbG9zZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuLmljb24tZGVsZXRlOmhvdmVyLCAuaWNvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZTA0MTAyO1xufVxuXG4uaWNvbi1kb25lIHtcbiAgY29sb3I6ICMwMGMzMDA7XG59XG4uaWNvbi1kb25lOmhvdmVyIHtcbiAgY29sb3I6ICMwMDZmMDA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-exception-med/user-exception-med.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-exception-med/user-exception-med.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserExceptionMedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExceptionMedComponent", function() { return UserExceptionMedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var UserExceptionMedComponent = /** @class */ (function () {
    function UserExceptionMedComponent(_mkb10Service, _dateToSend) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this._dateToSend = _dateToSend;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.meds = [];
        this.showSpinerMed = true;
        this.isAdding = false;
        this.tempMed = {
            id: null,
            medicamentItem: {
                code: null,
                groupId: null,
                groupName: null,
                id: null,
                medicamentForm: null,
                name: null
            }
        };
        this.controlForMeds = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMeds = [];
        this.controlForMedsCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForMedsCode = [];
        this._mkb10Service.getListOfMeds().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForMeds.push(value);
                _this.optionsForMedsCode.push(value);
            }
            _this.filteredOptionsForMeds = _this._dateToSend.makeListForFilters(_this.controlForMeds, 'name', _this.optionsForMeds, 3);
            _this.filteredOptionsForMedsCode = _this._dateToSend.makeListForFilters(_this.controlForMedsCode, 'code', _this.optionsForMedsCode, 3);
            _this.showSpinerMed = false;
        }, function (error) { console.log(error); });
    }
    UserExceptionMedComponent.prototype.clearInput = function () {
        this.controlForMeds.setValue({ name: '' });
        this.controlForMedsCode.setValue({ code: '' });
        this.isAdding = false;
        this.tempMed = {
            id: null,
            medicamentItem: {
                code: null,
                groupId: null,
                groupName: null,
                id: null,
                medicamentForm: null,
                name: null
            }
        };
    };
    UserExceptionMedComponent.prototype.addMed = function () {
        if (this.tempMed != null) {
            this.meds.unshift(this.tempMed);
            this.clearInput();
            this.onUpdate.emit(this.meds);
        }
    };
    UserExceptionMedComponent.prototype.deleteMed = function (med) {
        this.meds.splice(this.meds.indexOf(med), 1);
        this.onUpdate.emit(this.meds);
    };
    UserExceptionMedComponent.prototype.chooseOption = function (option) {
        this.tempMed.medicamentItem = option;
        this.controlForMedsCode.setValue({ code: option.code });
        this.controlForMeds.setValue({ name: option.name });
    };
    UserExceptionMedComponent.prototype.ngOnInit = function () {
        this.meds = this.exception;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionMedComponent.prototype, "exception", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionMedComponent.prototype, "onUpdate", void 0);
    UserExceptionMedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-exception-med',
            template: __webpack_require__(/*! raw-loader!./user-exception-med.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-med/user-exception-med.component.html"),
            styles: [__webpack_require__(/*! ./user-exception-med.component.scss */ "./src/app/user/user-exception-med/user-exception-med.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], UserExceptionMedComponent);
    return UserExceptionMedComponent;
}());



/***/ }),

/***/ "./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0px;\n}\n\n.max {\n  width: 100%;\n}\n\n.row-body:hover {\n  background-color: #e8e8e84d;\n}\n\n.icon-delete, .icon-close {\n  color: #fe4902;\n}\n\n.icon-delete:hover, .icon-close:hover {\n  color: #e04102;\n}\n\n.icon-done {\n  color: #00c300;\n}\n\n.icon-done:hover {\n  color: #006f00;\n}\n\n.addNewBtn {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uLXByb2NlZHVyZS1ncm91cHMvdXNlci1leGNlcHRpb24tcHJvY2VkdXJlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLWV4Y2VwdGlvbi1wcm9jZWR1cmUtZ3JvdXBzL3VzZXItZXhjZXB0aW9uLXByb2NlZHVyZS1ncm91cHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREhJO0VBQ0ksY0FBQTtBQ0tSOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREpJO0VBQ0ksY0FBQTtBQ01SOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWV4Y2VwdGlvbi1wcm9jZWR1cmUtZ3JvdXBzL3VzZXItZXhjZXB0aW9uLXByb2NlZHVyZS1ncm91cHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5tYXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdy1ib2R5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcclxufVxyXG4uaWNvbi1kZWxldGUsIC5pY29uLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjZmU0OTAyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlMDQxMDI7XHJcbiAgICB9XHJcbn1cclxuLmljb24tZG9uZSB7XHJcbiAgICBjb2xvcjogIzAwYzMwMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2ZjAwO1xyXG4gICAgfVxyXG59XHJcbi5hZGROZXdCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctYm9keTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcbn1cblxuLmljb24tZGVsZXRlLCAuaWNvbi1jbG9zZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuLmljb24tZGVsZXRlOmhvdmVyLCAuaWNvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZTA0MTAyO1xufVxuXG4uaWNvbi1kb25lIHtcbiAgY29sb3I6ICMwMGMzMDA7XG59XG4uaWNvbi1kb25lOmhvdmVyIHtcbiAgY29sb3I6ICMwMDZmMDA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserExceptionProcedureGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExceptionProcedureGroupsComponent", function() { return UserExceptionProcedureGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");





var UserExceptionProcedureGroupsComponent = /** @class */ (function () {
    function UserExceptionProcedureGroupsComponent(_dateToSend, _mkb10Service) {
        this._dateToSend = _dateToSend;
        this._mkb10Service = _mkb10Service;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.procedureGroups = [];
        this.isAdding = false;
        this.showSpinerProcedureGroup = true;
        this.controlForProcedureGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForProcedureGroup = [];
        this.tempOption = {
            id: null,
            procedureGroupItem: {
                code: null,
                description: null,
                id: null,
                name: null
            }
        };
    }
    UserExceptionProcedureGroupsComponent.prototype.clearInput = function () {
        this.controlForProcedureGroup.setValue({ name: '' });
        this.tempOption = {
            id: null,
            procedureGroupItem: {
                code: null,
                description: null,
                id: null,
                name: null
            }
        };
    };
    UserExceptionProcedureGroupsComponent.prototype.addGroup = function () {
        if (this.tempOption.procedureGroupItem.id != null) {
            this.procedureGroups.unshift(this.tempOption);
            this.clearInput();
            this.isAdding = false;
            this.onUpdate.emit(this.procedureGroups);
        }
    };
    UserExceptionProcedureGroupsComponent.prototype.deleteGroup = function (group) {
        this.procedureGroups.splice(this.procedureGroups.indexOf(group), 1);
        this.onUpdate.emit(this.procedureGroups);
    };
    UserExceptionProcedureGroupsComponent.prototype.chooseOption = function (option) {
        this.tempOption.procedureGroupItem = option;
    };
    UserExceptionProcedureGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.procedureGroups = this.exception;
        this._mkb10Service.getListOfServiceGroup().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForProcedureGroup.push(value);
            }
            _this.filteredOptionsForProcedureGroup = _this._dateToSend.makeListForFilters(_this.controlForProcedureGroup, 'name', _this.optionsForProcedureGroup, 0);
            _this.showSpinerProcedureGroup = false;
        }, function (error) { console.log(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionProcedureGroupsComponent.prototype, "exception", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionProcedureGroupsComponent.prototype, "onUpdate", void 0);
    UserExceptionProcedureGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-exception-procedure-groups',
            template: __webpack_require__(/*! raw-loader!./user-exception-procedure-groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.html"),
            styles: [__webpack_require__(/*! ./user-exception-procedure-groups.component.scss */ "./src/app/user/user-exception-procedure-groups/user-exception-procedure-groups.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__["DateToSendService"],
            src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_4__["Mkb10Service"]])
    ], UserExceptionProcedureGroupsComponent);
    return UserExceptionProcedureGroupsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-exception-procedure/user-exception-procedure.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/user/user-exception-procedure/user-exception-procedure.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0px;\n}\n\n.max {\n  width: 100%;\n}\n\n.row-body:hover {\n  background-color: #e8e8e84d;\n}\n\n.icon-delete, .icon-close {\n  color: #fe4902;\n}\n\n.icon-delete:hover, .icon-close:hover {\n  color: #e04102;\n}\n\n.icon-done {\n  color: #00c300;\n}\n\n.icon-done:hover {\n  color: #006f00;\n}\n\n.addNewBtn {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uLXByb2NlZHVyZS91c2VyLWV4Y2VwdGlvbi1wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1leGNlcHRpb24tcHJvY2VkdXJlL3VzZXItZXhjZXB0aW9uLXByb2NlZHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLDJCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FESEk7RUFDSSxjQUFBO0FDS1I7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESkk7RUFDSSxjQUFBO0FDTVI7O0FESEE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uLXByb2NlZHVyZS91c2VyLWV4Y2VwdGlvbi1wcm9jZWR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5tYXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdy1ib2R5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcclxufVxyXG4uaWNvbi1kZWxldGUsIC5pY29uLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjZmU0OTAyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlMDQxMDI7XHJcbiAgICB9XHJcbn1cclxuLmljb24tZG9uZSB7XHJcbiAgICBjb2xvcjogIzAwYzMwMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2ZjAwO1xyXG4gICAgfVxyXG59XHJcbi5hZGROZXdCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctYm9keTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcbn1cblxuLmljb24tZGVsZXRlLCAuaWNvbi1jbG9zZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuLmljb24tZGVsZXRlOmhvdmVyLCAuaWNvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZTA0MTAyO1xufVxuXG4uaWNvbi1kb25lIHtcbiAgY29sb3I6ICMwMGMzMDA7XG59XG4uaWNvbi1kb25lOmhvdmVyIHtcbiAgY29sb3I6ICMwMDZmMDA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-exception-procedure/user-exception-procedure.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user/user-exception-procedure/user-exception-procedure.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserExceptionProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExceptionProcedureComponent", function() { return UserExceptionProcedureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");





var UserExceptionProcedureComponent = /** @class */ (function () {
    function UserExceptionProcedureComponent(_mkb10Service, _dateToSend) {
        var _this = this;
        this._mkb10Service = _mkb10Service;
        this._dateToSend = _dateToSend;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.procedures = [];
        this.tempProcedure = {
            id: null,
            procedureItem: {
                code: null,
                groupId: null,
                groupName: null,
                id: null,
                name: null
            }
        };
        this.isAdding = false;
        this.controlForService = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForService = [];
        this.controlForServiceCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.optionsForServiceCode = [];
        this.showSpinerService = true;
        this._mkb10Service.getListOfService().subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForService.push(value);
                _this.optionsForServiceCode.push(value);
            }
            _this.filteredOptionsForService = _this._dateToSend.makeListForFilters(_this.controlForService, 'name', _this.optionsForService, 3);
            _this.filteredOptionsForServiceCode = _this._dateToSend.makeListForFilters(_this.controlForServiceCode, 'code', _this.optionsForServiceCode, 3);
            _this.showSpinerService = false;
        }, function (error) { console.log(error); });
    }
    UserExceptionProcedureComponent.prototype.clearInput = function () {
        this.controlForService.setValue({ name: '' });
        this.controlForServiceCode.setValue({ code: '' });
        this.tempProcedure = {
            id: null,
            procedureItem: {
                code: null,
                groupId: null,
                groupName: null,
                id: null,
                name: null
            }
        };
    };
    UserExceptionProcedureComponent.prototype.addProcedure = function () {
        if (this.tempProcedure != null) {
            this.procedures.unshift(this.tempProcedure);
            this.clearInput();
            this.isAdding = false;
            this.onUpdate.emit(this.procedures);
        }
    };
    UserExceptionProcedureComponent.prototype.deleteProcedure = function (procedure) {
        this.procedures.splice(this.procedures.indexOf(procedure), 1);
        this.onUpdate.emit(this.procedures);
    };
    UserExceptionProcedureComponent.prototype.chooseOption = function (option) {
        this.tempProcedure.procedureItem = option;
        this.controlForServiceCode.setValue({ code: option.code });
        this.controlForService.setValue({ name: option.name });
    };
    UserExceptionProcedureComponent.prototype.ngOnInit = function () {
        this.procedures = this.exception;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionProcedureComponent.prototype, "exception", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionProcedureComponent.prototype, "onUpdate", void 0);
    UserExceptionProcedureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-exception-procedure',
            template: __webpack_require__(/*! raw-loader!./user-exception-procedure.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-procedure/user-exception-procedure.component.html"),
            styles: [__webpack_require__(/*! ./user-exception-procedure.component.scss */ "./src/app/user/user-exception-procedure/user-exception-procedure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_3__["Mkb10Service"],
            src_app_service_date_to_send_service__WEBPACK_IMPORTED_MODULE_4__["DateToSendService"]])
    ], UserExceptionProcedureComponent);
    return UserExceptionProcedureComponent;
}());



/***/ }),

/***/ "./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1leGNlcHRpb24tdHJlZS1ta2IvdXNlci1leGNlcHRpb24tdHJlZS1ta2IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase, UserExceptionTreeMkbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExceptionTreeMkbComponent", function() { return UserExceptionTreeMkbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/mkb10.service */ "./src/app/service/mkb10.service.ts");







/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
        this.expandable = false;
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase(_mkb10Service) {
        this._mkb10Service = _mkb10Service;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        var _this = this;
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        this._mkb10Service.getMkb10().subscribe(function (data) {
            // TREE_DATA = data;
            // const dataX = this.buildFileTree(TREE_DATA, 0);
            _this.dataChange.next(data);
        }, function (error) { console.log(error); });
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    // buildFileTree(value: any, level: number) {
    //   // let data: any[] = [];
    //   // for (let k in value) {
    //   //   let v = value[k];
    //   //   if (node === undefined) {
    //   //     var node = new TodoItemNode();
    //   //   }
    //   //   // node.name = `${k}`;
    //   //   // if (typeof v === 'object') {
    //   //   //   node.nodes = this.buildFileTree(v, level + 1);
    //   //   //   data.push(node);
    //   //   // } else
    //   //   switch (k) {
    //   //     case 'nodes': node.nodes = this.buildFileTree(v, level + 1); break;
    //   //     case 'name': node.name = v; break;
    //   //     case 'code': node.code = v; break;
    //   //     case 'id': node.id = v; break;
    //   //   }
    //   //    data.push(node);
    //   // }
    //   return value;
    // }
    /** Add an item to to-do list */
    // insertItem(parent: TodoItemNode, name: string) {
    //   const child = <TodoItemNode>{name: name};
    //   if (parent.nodes) {
    //     parent.nodes.push(child);
    //     this.dataChange.next(this.data);
    //   }
    // }
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.name = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_mkb10_service__WEBPACK_IMPORTED_MODULE_6__["Mkb10Service"]])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

/**
 * @title Tree with checkboxes
 */
var UserExceptionTreeMkbComponent = /** @class */ (function () {
    function UserExceptionTreeMkbComponent(database) {
        var _this = this;
        this.database = database;
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true /* multiple */);
        this.showSpinerMkb = true;
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.nodes);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        // hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => { return _nodeData.name === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).name === node.name ? _this.nestedNodeMap.get(node) : new TodoItemFlatNode();
            flatNode.name = node.name;
            flatNode.level = level;
            flatNode.expandable = !!node.nodes && node.nodes.length > 0;
            flatNode.id = node.id;
            flatNode.code = node.code;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
            if (data.length !== 0) {
                _this.showSpinerMkb = false;
            }
            if (_this.exception !== undefined) {
                _this.setStart(_this.exception);
            }
        });
    }
    /** Whether all the descendants of the node are selected */
    UserExceptionTreeMkbComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    UserExceptionTreeMkbComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        // console.log(descendants);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    UserExceptionTreeMkbComponent.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Save the node to database */
    UserExceptionTreeMkbComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    UserExceptionTreeMkbComponent.prototype.updateExceptions = function (nodes) {
        var listExceptions = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            listExceptions.unshift(node.id);
        }
        // console.log(listExceptions);
        this.onUpdate.emit(listExceptions);
    };
    UserExceptionTreeMkbComponent.prototype.setStart = function (ids) {
        var _a, _b;
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            for (var _c = 0, _d = this.treeControl.dataNodes; _c < _d.length; _c++) {
                var node = _d[_c];
                if (node.id === id) {
                    this.checklistSelection.select(node);
                    var descendants = this.treeControl.getDescendants(node);
                    this.checklistSelection.isSelected(node)
                        ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionTreeMkbComponent.prototype, "exception", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionTreeMkbComponent.prototype, "onUpdate", void 0);
    UserExceptionTreeMkbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-exception-tree-mkb',
            template: __webpack_require__(/*! raw-loader!./user-exception-tree-mkb.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.html"),
            providers: [ChecklistDatabase],
            styles: [__webpack_require__(/*! ./user-exception-tree-mkb.component.scss */ "./src/app/user/user-exception-tree-mkb/user-exception-tree-mkb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ChecklistDatabase])
    ], UserExceptionTreeMkbComponent);
    return UserExceptionTreeMkbComponent;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/user/user-exception/user-exception.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-exception/user-exception.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0px;\n}\n\n.max {\n  width: 100%;\n}\n\n.row-body:hover {\n  background-color: #e8e8e84d;\n}\n\n.icon-delete, .icon-close {\n  color: #fe4902;\n}\n\n.icon-delete:hover, .icon-close:hover {\n  color: #e04102;\n}\n\n.icon-done {\n  color: #00c300;\n}\n\n.icon-done:hover {\n  color: #006f00;\n}\n\n.addNewBtn {\n  background-color: rgba(0, 0, 0, 0);\n  border: 0px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uL3VzZXItZXhjZXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXItZXhjZXB0aW9uL3VzZXItZXhjZXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7QUNJSjs7QURISTtFQUNJLGNBQUE7QUNLUjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURKSTtFQUNJLGNBQUE7QUNNUjs7QURIQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1leGNlcHRpb24vdXNlci1leGNlcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5tYXgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJvdy1ib2R5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcclxufVxyXG4uaWNvbi1kZWxldGUsIC5pY29uLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjZmU0OTAyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlMDQxMDI7XHJcbiAgICB9XHJcbn1cclxuLmljb24tZG9uZSB7XHJcbiAgICBjb2xvcjogIzAwYzMwMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMDA2ZjAwO1xyXG4gICAgfVxyXG59XHJcbi5hZGROZXdCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWF4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3ctYm9keTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg0ZDtcbn1cblxuLmljb24tZGVsZXRlLCAuaWNvbi1jbG9zZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuLmljb24tZGVsZXRlOmhvdmVyLCAuaWNvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZTA0MTAyO1xufVxuXG4uaWNvbi1kb25lIHtcbiAgY29sb3I6ICMwMGMzMDA7XG59XG4uaWNvbi1kb25lOmhvdmVyIHtcbiAgY29sb3I6ICMwMDZmMDA7XG59XG5cbi5hZGROZXdCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-exception/user-exception.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-exception/user-exception.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserExceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExceptionComponent", function() { return UserExceptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserExceptionComponent = /** @class */ (function () {
    function UserExceptionComponent() {
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.assuredExceptionItem = {};
    }
    UserExceptionComponent.prototype.console = function () {
        this.onSave.emit(this.assuredExceptionItem);
    };
    UserExceptionComponent.prototype.ngOnInit = function () {
        this.assuredExceptionItem = this.exception;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionComponent.prototype, "exception", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserExceptionComponent.prototype, "onSave", void 0);
    UserExceptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-exception',
            template: __webpack_require__(/*! raw-loader!./user-exception.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-exception/user-exception.component.html"),
            styles: [__webpack_require__(/*! ./user-exception.component.scss */ "./src/app/user/user-exception/user-exception.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserExceptionComponent);
    return UserExceptionComponent;
}());



/***/ }),

/***/ "./src/app/user/user-id-loss/user-id-loss.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-id-loss/user-id-loss.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max {\n  width: 100%;\n}\n\n.title {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\ndiv,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\nmat-datepicker-toggle,\nmat-datepicker-toggle:hover,\nmat-datepicker-toggle:visited,\nmat-datepicker-toggle:active {\n  outline: none;\n}\n\nmat-button-toggle,\nmat-button-toggle:hover,\nmat-button-toggle:visited,\nmat-button-toggle:active {\n  outline: none;\n}\n\n.empty {\n  background: #ffcccc;\n}\n\n.table {\n  margin-bottom: 40px;\n}\n\n.table .row {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItaWQtbG9zcy91c2VyLWlkLWxvc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1pZC1sb3NzL3VzZXItaWQtbG9zcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7QUNDRDs7QURDQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7QUNFRDs7QURBQTs7OztFQUlDLGFBQUE7QUNHRDs7QUREQTs7OztFQUlDLGFBQUE7QUNJRDs7QURGQTs7OztFQUlDLGFBQUE7QUNLRDs7QURIQTtFQUNJLG1CQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtBQ09KOztBRE5JO0VBQ0ksWUFBQTtBQ1FSIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWlkLWxvc3MvdXNlci1pZC1sb3NzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGV7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxufVxyXG5kaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXHJcbm1hdC1kYXRlcGlja2VyLXRvZ2dsZTpob3ZlcixcclxubWF0LWRhdGVwaWNrZXItdG9nZ2xlOnZpc2l0ZWQsXHJcbm1hdC1kYXRlcGlja2VyLXRvZ2dsZTphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5tYXQtYnV0dG9uLXRvZ2dsZSxcclxubWF0LWJ1dHRvbi10b2dnbGU6aG92ZXIsXHJcbm1hdC1idXR0b24tdG9nZ2xlOnZpc2l0ZWQsXHJcbm1hdC1idXR0b24tdG9nZ2xlOmFjdGl2ZXtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5lbXB0eXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmNjY2M7XHJcbn1cclxuLnRhYmxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC5yb3d7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59IiwiLm1heCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5kaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG5tYXQtZGF0ZXBpY2tlci10b2dnbGU6aG92ZXIsXG5tYXQtZGF0ZXBpY2tlci10b2dnbGU6dmlzaXRlZCxcbm1hdC1kYXRlcGlja2VyLXRvZ2dsZTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtYnV0dG9uLXRvZ2dsZSxcbm1hdC1idXR0b24tdG9nZ2xlOmhvdmVyLFxubWF0LWJ1dHRvbi10b2dnbGU6dmlzaXRlZCxcbm1hdC1idXR0b24tdG9nZ2xlOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5lbXB0eSB7XG4gIGJhY2tncm91bmQ6ICNmZmNjY2M7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/user-id-loss/user-id-loss.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-id-loss/user-id-loss.component.ts ***!
  \*************************************************************/
/*! exports provided: UserIdLossComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIdLossComponent", function() { return UserIdLossComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_loses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/loses.service */ "./src/app/service/loses.service.ts");




var UserIdLossComponent = /** @class */ (function () {
    function UserIdLossComponent(_losesService, router) {
        this._losesService = _losesService;
        this.router = router;
        this.listOfDamages = [];
        this.showListOfDamages = false;
    }
    UserIdLossComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idOfUser[0] !== 'n') {
            this._losesService.getAllLossesForUser(this.idOfUser).subscribe(function (data) {
                if (data.length !== 0) {
                    _this.listOfDamages = data;
                    _this.showListOfDamages = true;
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserIdLossComponent.prototype, "idOfUser", void 0);
    UserIdLossComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-id-loss',
            template: __webpack_require__(/*! raw-loader!./user-id-loss.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-id-loss/user-id-loss.component.html"),
            styles: [__webpack_require__(/*! ./user-id-loss.component.scss */ "./src/app/user/user-id-loss/user-id-loss.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_loses_service__WEBPACK_IMPORTED_MODULE_3__["LosesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIdLossComponent);
    return UserIdLossComponent;
}());



/***/ }),

/***/ "./src/app/user/user-id/user-id.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/user-id/user-id.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max {\n  width: 100%;\n}\n\n.title {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\ndiv,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\nmat-datepicker-toggle,\nmat-datepicker-toggle:hover,\nmat-datepicker-toggle:visited,\nmat-datepicker-toggle:active {\n  outline: none;\n}\n\nmat-button-toggle,\nmat-button-toggle:hover,\nmat-button-toggle:visited,\nmat-button-toggle:active {\n  outline: none;\n}\n\n.empty {\n  background: #ffcccc;\n}\n\n.table {\n  margin-bottom: 40px;\n}\n\n.table .row {\n  border: none;\n}\n\n.modal {\n  /* Optional: show position indicator in red */\n}\n\n.modal .mat-tree-node {\n  min-height: 25px !important;\n  padding: 2px 0px;\n}\n\n.modal .colorForDisabled {\n  color: #8e8e8e;\n}\n\n.modal .colorForActive {\n  color: #000;\n}\n\n.modal .max {\n  width: 100%;\n}\n\n.modal .addNewBtn {\n  border: 0px;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.modal .row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.modal ::-webkit-scrollbar {\n  width: 0px;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */\n}\n\n.modal ::-webkit-scrollbar-thumb {\n  background: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItaWQvdXNlci1pZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLWlkL3VzZXItaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FDRUQ7O0FEQUE7Ozs7RUFJQyxhQUFBO0FDR0Q7O0FEREE7Ozs7RUFJQyxhQUFBO0FDSUQ7O0FERkE7Ozs7RUFJQyxhQUFBO0FDS0Q7O0FESEE7RUFDSSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7QUNPSjs7QUROSTtFQUNJLFlBQUE7QUNRUjs7QURIQTtFQTRCSSw2Q0FBQTtBQ3JCSjs7QUROSTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNRUjs7QUROSTtFQUNJLGNBQUE7QUNRUjs7QUROSTtFQUNJLFdBQUE7QUNRUjs7QUROSTtFQUNJLFdBQUE7QUNRUjs7QUROSTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDUVI7O0FETkk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDUVI7O0FETkk7RUFDSSxVQUFBO0VBQWEsMkJBQUE7RUFDYix1QkFBQTtFQUEwQiw0Q0FBQTtBQ1VsQzs7QURQSTtFQUNJLG1CQUFBO0FDU1IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItaWQvdXNlci1pZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXh7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxle1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDsgXHJcbn1cclxuZGl2LFxyXG5kaXY6aG92ZXIsXHJcbmRpdjp2aXNpdGVkLFxyXG5kaXY6YWN0aXZle1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxyXG5tYXQtZGF0ZXBpY2tlci10b2dnbGU6aG92ZXIsXHJcbm1hdC1kYXRlcGlja2VyLXRvZ2dsZTp2aXNpdGVkLFxyXG5tYXQtZGF0ZXBpY2tlci10b2dnbGU6YWN0aXZle1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxubWF0LWJ1dHRvbi10b2dnbGUsXHJcbm1hdC1idXR0b24tdG9nZ2xlOmhvdmVyLFxyXG5tYXQtYnV0dG9uLXRvZ2dsZTp2aXNpdGVkLFxyXG5tYXQtYnV0dG9uLXRvZ2dsZTphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4uZW1wdHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjY2NjO1xyXG59XHJcbi50YWJsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAucm93e1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tb2RhbHtcclxuICAgIC5tYXQtdHJlZS1ub2Rle1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbG9yRm9yRGlzYWJsZWR7XHJcbiAgICAgICAgY29sb3I6ICM4ZThlOGU7O1xyXG4gICAgfVxyXG4gICAgLmNvbG9yRm9yQWN0aXZle1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLm1heHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG4gICAgLmFkZE5ld0J0bntcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDBweDsgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xyXG4gICAgfVxyXG4gICAgLyogT3B0aW9uYWw6IHNob3cgcG9zaXRpb24gaW5kaWNhdG9yIGluIHJlZCAqL1xyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxuICAgIH1cclxufSIsIi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuZGl2LFxuZGl2OmhvdmVyLFxuZGl2OnZpc2l0ZWQsXG5kaXY6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxubWF0LWRhdGVwaWNrZXItdG9nZ2xlOmhvdmVyLFxubWF0LWRhdGVwaWNrZXItdG9nZ2xlOnZpc2l0ZWQsXG5tYXQtZGF0ZXBpY2tlci10b2dnbGU6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubWF0LWJ1dHRvbi10b2dnbGUsXG5tYXQtYnV0dG9uLXRvZ2dsZTpob3Zlcixcbm1hdC1idXR0b24tdG9nZ2xlOnZpc2l0ZWQsXG5tYXQtYnV0dG9uLXRvZ2dsZTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZW1wdHkge1xuICBiYWNrZ3JvdW5kOiAjZmZjY2NjO1xufVxuXG4udGFibGUge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnRhYmxlIC5yb3cge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tb2RhbCB7XG4gIC8qIE9wdGlvbmFsOiBzaG93IHBvc2l0aW9uIGluZGljYXRvciBpbiByZWQgKi9cbn1cbi5tb2RhbCAubWF0LXRyZWUtbm9kZSB7XG4gIG1pbi1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDBweDtcbn1cbi5tb2RhbCAuY29sb3JGb3JEaXNhYmxlZCB7XG4gIGNvbG9yOiAjOGU4ZThlO1xufVxuLm1vZGFsIC5jb2xvckZvckFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1vZGFsIC5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tb2RhbCAuYWRkTmV3QnRuIHtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5tb2RhbCAucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubW9kYWwgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xufVxuLm1vZGFsIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-id/user-id.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/user-id/user-id.component.ts ***!
  \***************************************************/
/*! exports provided: UserIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIdComponent", function() { return UserIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_loses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/loses.service */ "./src/app/service/loses.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var _interface_and_class_user_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interface-and-class/user.class */ "./src/app/interface-and-class/user.class.ts");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _service_mkb10_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/mkb10.service */ "./src/app/service/mkb10.service.ts");
/* harmony import */ var src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/settings.service */ "./src/app/service/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var UserIdComponent = /** @class */ (function () {
    function UserIdComponent(_usersservice, router, _snackBar, _losesService, _dateToSend, _mkb10Service, _settingsService) {
        var _this = this;
        this._usersservice = _usersservice;
        this.router = router;
        this._snackBar = _snackBar;
        this._losesService = _losesService;
        this._dateToSend = _dateToSend;
        this._mkb10Service = _mkb10Service;
        this._settingsService = _settingsService;
        this.modalUser = new _interface_and_class_user_class__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.newUser = true;
        this.readonly = true;
        this.idOfUser = this.router.url.slice(7);
        this.controlForCompany = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        this.optionsForCompany = [];
        this.controlForProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        this.optionsForProduct = [];
        this.controlForProgram = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        this.optionsForProgram = [];
        this.showSpinerCompany = true;
        this.showSpinerProduct = true;
        this.showSpinerProgram = true;
        this.assuredExceptionItem = null;
        this.hasChild = function (_, node) { return node.expandable; };
        this.transformer = function (node, level) {
            return {
                expandable: !!node.nodes && node.nodes.length > 1,
                name: node.name,
                level: level,
                description: node.description,
                code: node.code,
                id: node.id
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__["MatTreeFlattener"](this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.nodes; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_9__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this._mkb10Service.getMkb10().subscribe(function (data) {
            _this.dataSource.data = data;
        }, function (error) { console.log(error); });
    }
    UserIdComponent.prototype.sendUser = function () {
        var _this = this;
        this.modalUser.birthDate = this._dateToSend.makeDateToSend(this.modalUser.birthDate);
        this.modalUser.programStartDate = this._dateToSend.makeDateToSend(this.modalUser.programStartDate);
        this.modalUser.programEndDate = this._dateToSend.makeDateToSend(this.modalUser.programEndDate);
        if (this.modalUser.firstName === '' ||
            this.modalUser.lastName === '' ||
            this.modalUser.phone === '' ||
            this.modalUser.snils === '' ||
            this.modalUser.isMan === null ||
            this.modalUser.insuredCompanyProductProgramId === null ||
            this.modalUser.programNumber === '' ||
            this.modalUser.programStartDate === '' ||
            this.modalUser.programEndDate === '') {
            this._snackBar.open('Необходимо заполнить все обязательные поля помеченные *', '', {
                duration: 2000,
            });
        }
        else {
            var userToSend = {
                firstName: this.modalUser.firstName,
                lastName: this.modalUser.lastName,
                middleName: this.modalUser.middleName,
                phone: this.modalUser.phone,
                birthDate: this.modalUser.birthDate,
                snils: this.modalUser.snils,
                isMan: this.modalUser.isMan,
                insuredCompanyProductProgramId: this.modalUser.insuredCompanyProductProgramId,
                programNumber: this.modalUser.programNumber,
                programStartDate: this.modalUser.programStartDate,
                programEndDate: this.modalUser.programEndDate,
                cardNumber: this.modalUser.cardNumber
            };
            if (this.newUser === false) {
                userToSend.id = this.modalUser.id;
            }
            this._usersservice.sendUser(userToSend).subscribe(function (data) {
                _this.readonly = true;
                if (_this.newUser === true) {
                    _this.router.navigate(['../users', data], { replaceUrl: true });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    UserIdComponent.prototype.console = function (data) {
        this.assuredExceptionItem = data;
    };
    UserIdComponent.prototype.saveExceptions = function () {
        var _this = this;
        if (this.assuredExceptionItem.icdList === undefined) {
            this.assuredExceptionItem.icdList = [];
        }
        if (this.assuredExceptionItem.medicamentGroupList === undefined) {
            this.assuredExceptionItem.medicamentGroupList = [];
        }
        if (this.assuredExceptionItem.medicamentList === undefined) {
            this.assuredExceptionItem.medicamentList = [];
        }
        if (this.assuredExceptionItem.procedureGroupList === undefined) {
            this.assuredExceptionItem.procedureGroupList = [];
        }
        if (this.assuredExceptionItem.procedureList === undefined) {
            this.assuredExceptionItem.procedureList = [];
        }
        this._usersservice.postUserExceptionsById(this.assuredExceptionItem, this.modalUser.id).subscribe(function (data) {
            _this.assuredExceptionItem = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserIdComponent.prototype.getExceptions = function () {
        var _this = this;
        this._usersservice.getUserExceptionsById(this.modalUser.id).subscribe(function (data) {
            _this.assuredExceptionItem = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserIdComponent.prototype.chooseCompany = function (option) {
        this.modalUser.insuredCompanyProductProgramId = null;
        this.showSpinerProduct = true;
        this.showSpinerProgram = true;
        this.filteredOptionsForProgram = null;
        this.controlForProduct.setValue({ name: '' });
        this.controlForProgram.setValue({ name: '' });
        this.getProductList(option.id);
    };
    UserIdComponent.prototype.chooseProduct = function (option) {
        this.modalUser.insuredCompanyProductProgramId = null;
        this.showSpinerProgram = true;
        this.controlForProgram.setValue({ name: '' });
        this.getProgramList(option.id);
    };
    UserIdComponent.prototype.chooseProgram = function (option) {
        this.modalUser.insuredCompanyProductProgramId = option.id;
    };
    UserIdComponent.prototype.getProductList = function (id) {
        var _this = this;
        this._settingsService.getProductListByCompany(id).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var value = data_1[_i];
                _this.optionsForProduct.push(value);
            }
            _this.filteredOptionsForProduct = _this._dateToSend.makeListForFilters(_this.controlForProduct, 'name', _this.optionsForProduct, 0);
            _this.showSpinerProduct = false;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UserIdComponent.prototype.getProgramList = function (id) {
        var _this = this;
        this._settingsService.getProgramListByProduct(id).subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var value = data_2[_i];
                _this.optionsForProgram.push(value);
            }
            _this.filteredOptionsForProgram = _this._dateToSend.makeListForFilters(_this.controlForProgram, 'name', _this.optionsForProgram, 0);
            _this.showSpinerProgram = false;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UserIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.idOfUser[0] !== 'n') {
            this.newUser = false;
            this._usersservice.getUserById(this.idOfUser).subscribe(function (data) {
                _this.modalUser = data;
                _this.controlForCompany.setValue({ companyName: _this.modalUser.insuredCompanyName });
                _this.controlForProduct.setValue({ name: _this.modalUser.insuredCompanyProductName });
                _this.controlForProgram.setValue({ name: _this.modalUser.insuredCompanyProductProgramName });
                _this.getExceptions();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.readonly = false;
            this.newUser = true;
        }
        this._settingsService.getCompanyList([]).subscribe(function (data) {
            for (var _i = 0, _a = data.content; _i < _a.length; _i++) {
                var value = _a[_i];
                _this.optionsForCompany.push(value);
            }
            _this.filteredOptionsForCompany = _this._dateToSend.makeListForFilters(_this.controlForCompany, 'companyName', _this.optionsForCompany, 0);
            _this.showSpinerCompany = false;
        }, function (error) {
            console.log(error);
        });
    };
    UserIdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-id',
            template: __webpack_require__(/*! raw-loader!./user-id.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-id/user-id.component.html"),
            styles: [__webpack_require__(/*! ./user-id.component.scss */ "./src/app/user/user-id/user-id.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _service_loses_service__WEBPACK_IMPORTED_MODULE_5__["LosesService"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_6__["DateToSendService"],
            _service_mkb10_service__WEBPACK_IMPORTED_MODULE_10__["Mkb10Service"],
            src_app_service_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], UserIdComponent);
    return UserIdComponent;
}());



/***/ }),

/***/ "./src/app/user/user-list/user-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tbody .row {\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.warning {\n  margin-left: 80px;\n  color: red;\n}\n\n.warning h5 {\n  margin-top: 0px;\n}\n\ndiv,\ndiv:hover,\ndiv:visited,\ndiv:active {\n  outline: none;\n}\n\n.modal-body input,\n.modal-body input:hover,\n.modal-body input:visited,\n.modal-body input:active {\n  outline: none;\n}\n\n.modal-body .inputForModal {\n  border: 1px solid #C0C9D2;\n  border-radius: 5px;\n  height: 25px;\n  padding: 5px;\n  transition: all 0.3s ease-in-out;\n  color: #7B8A9A;\n}\n\n.modal-body .inputForModal:hover, .modal-body .inputForModal:focus {\n  border: 1px solid #425261;\n  color: #425261;\n}\n\n.modal-body h5 {\n  margin-bottom: 0px;\n}\n\n.dropdown-menu a {\n  cursor: pointer;\n}\n\n.max {\n  width: 100%;\n}\n\n.color-delete {\n  color: #fe4902;\n}\n\n.color-delete:hover {\n  color: #DB0010;\n}\n\ni {\n  vertical-align: middle !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1cy/QoNCw0LHQvtGH0LjQuSDRgdGC0L7Quy9tZWQtYXBwLTMwLTA4LTIwMTkvc3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxzQkFBQTtBQ0NEOztBRENBO0VBQ0MsaUJBQUE7RUFDQSxVQUFBO0FDRUQ7O0FEREM7RUFDQyxlQUFBO0FDR0Y7O0FEQUE7Ozs7RUFJQyxhQUFBO0FDR0Q7O0FEQUM7Ozs7RUFJQyxhQUFBO0FDR0Y7O0FEREM7RUFDQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUNHRjs7QUREQztFQUNDLHlCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERDO0VBQ0Msa0JBQUE7QUNHRjs7QURDQztFQUNDLGVBQUE7QUNFRjs7QURDQTtFQUNDLFdBQUE7QUNFRDs7QURBQTtFQUNDLGNBQUE7QUNHRDs7QUREQTtFQUNDLGNBQUE7QUNJRDs7QURGQTtFQUNDLGlDQUFBO0FDS0QiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJvZHkgLnJvd3tcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbn1cclxuLndhcm5pbmd7XHJcblx0bWFyZ2luLWxlZnQ6IDgwcHg7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRoNXtcclxuXHRcdG1hcmdpbi10b3A6IDBweFxyXG5cdH1cclxufVxyXG5kaXYsXHJcbmRpdjpob3ZlcixcclxuZGl2OnZpc2l0ZWQsXHJcbmRpdjphY3RpdmV7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG4ubW9kYWwtYm9keXtcclxuXHRpbnB1dCxcclxuXHRpbnB1dDpob3ZlcixcclxuXHRpbnB1dDp2aXNpdGVkLFxyXG5cdGlucHV0OmFjdGl2ZXtcclxuXHRcdG91dGxpbmU6IG5vbmU7XHJcblx0fVxyXG5cdC5pbnB1dEZvck1vZGFse1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI0MwQzlEMjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGhlaWdodDogMjVweDtcclxuXHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0XHRjb2xvcjogIzdCOEE5QTtcclxuXHR9XHJcblx0LmlucHV0Rm9yTW9kYWw6aG92ZXIsIC5pbnB1dEZvck1vZGFsOmZvY3Vze1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzQyNTI2MTtcclxuXHRcdGNvbG9yOiAjNDI1MjYxO1xyXG5cdH1cclxuXHRoNXtcclxuXHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHR9XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcblx0YXtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbn1cclxuLm1heHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uY29sb3ItZGVsZXRle1xyXG5cdGNvbG9yOiAgI2ZlNDkwMjtcclxufVxyXG4uY29sb3ItZGVsZXRlOmhvdmVye1xyXG5cdGNvbG9yOiAjREIwMDEwO1xyXG59XHJcbml7IFxyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxufVxyXG4iLCIudGJvZHkgLnJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLndhcm5pbmcge1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgY29sb3I6IHJlZDtcbn1cbi53YXJuaW5nIGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5kaXYsXG5kaXY6aG92ZXIsXG5kaXY6dmlzaXRlZCxcbmRpdjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubW9kYWwtYm9keSBpbnB1dCxcbi5tb2RhbC1ib2R5IGlucHV0OmhvdmVyLFxuLm1vZGFsLWJvZHkgaW5wdXQ6dmlzaXRlZCxcbi5tb2RhbC1ib2R5IGlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubW9kYWwtYm9keSAuaW5wdXRGb3JNb2RhbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMEM5RDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzdCOEE5QTtcbn1cbi5tb2RhbC1ib2R5IC5pbnB1dEZvck1vZGFsOmhvdmVyLCAubW9kYWwtYm9keSAuaW5wdXRGb3JNb2RhbDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MjUyNjE7XG4gIGNvbG9yOiAjNDI1MjYxO1xufVxuLm1vZGFsLWJvZHkgaDUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5kcm9wZG93bi1tZW51IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbG9yLWRlbGV0ZSB7XG4gIGNvbG9yOiAjZmU0OTAyO1xufVxuXG4uY29sb3ItZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6ICNEQjAwMTA7XG59XG5cbmkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/users.service */ "./src/app/service/users.service.ts");
/* harmony import */ var _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/date-to-send.service */ "./src/app/service/date-to-send.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserListComponent = /** @class */ (function () {
    function UserListComponent(_usersservice, _dateTosend, router) {
        this._usersservice = _usersservice;
        this._dateTosend = _dateTosend;
        this.router = router;
        this.amountOfUsers = null;
        this.countOfUsers = 0;
        this.nameOfDelete = '';
        this.idOfDelete = 0;
        this.typeOfAmountToShow = '';
        this.filtersToSend = [];
        this.typeOfFilters = null;
        this.idForFilter = null;
    }
    UserListComponent.prototype.getUserList = function () {
        var _this = this;
        this._usersservice.postUsers(this.filtersToSend).subscribe(function (data) {
            _this.users = data.content;
            _this.amountOfUsers = _this.users.length;
            _this.typeOfAmountToShow = _this._dateTosend.checkAmountToShow(_this.amountOfUsers);
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var value = _a[_i];
                value.selected = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent.prototype.getUserListByCompanyId = function () {
        var _this = this;
        this._usersservice.postUsersByCompanyId(this.filtersToSend, this.idForFilter).subscribe(function (data) {
            _this.users = data.content;
            _this.amountOfUsers = _this.users.length;
            _this.typeOfAmountToShow = _this._dateTosend.checkAmountToShow(_this.amountOfUsers);
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var value = _a[_i];
                value.selected = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent.prototype.getUserListByProductId = function () {
        var _this = this;
        this._usersservice.postUsersByProductId(this.filtersToSend, this.idForFilter).subscribe(function (data) {
            _this.users = data.content;
            _this.amountOfUsers = _this.users.length;
            _this.typeOfAmountToShow = _this._dateTosend.checkAmountToShow(_this.amountOfUsers);
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var value = _a[_i];
                value.selected = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent.prototype.getUserListByProgramId = function () {
        var _this = this;
        this._usersservice.postUsersByProgramId(this.filtersToSend, this.idForFilter).subscribe(function (data) {
            _this.users = data.content;
            _this.amountOfUsers = _this.users.length;
            _this.typeOfAmountToShow = _this._dateTosend.checkAmountToShow(_this.amountOfUsers);
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var value = _a[_i];
                value.selected = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent.prototype.setFilters = function (filters) {
        this.filtersToSend = filters;
        this.getUserList();
    };
    UserListComponent.prototype.checkAll = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var value = _a[_i];
            value.selected = !value.selected;
        }
    };
    UserListComponent.prototype.deleteUsers = function () {
        this.countOfUsers = 0;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.selected) {
                this.countOfUsers++;
            }
        }
    };
    UserListComponent.prototype.deleteSelectedUsers = function () {
        var _this = this;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.selected) {
                this._usersservice.deleteUserById(value.id).subscribe(function (data) {
                    _this.getUserList();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    UserListComponent.prototype.sortUsersUp = function () {
        this.users.sort(function (a, b) { return (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0); });
    };
    UserListComponent.prototype.sortUsersDown = function () {
        this.users.sort(function (a, b) { return (a.lastName < b.lastName) ? 1 : ((b.lastName < a.lastName) ? -1 : 0); });
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.typeOfFilters = this.router.url.substring(this.router.url.lastIndexOf('users/') + 6, this.router.url.lastIndexOf('/'));
        this.idForFilter = this.router.url.split('/').pop();
        if (this.typeOfFilters === 'company') {
            this.getUserListByCompanyId();
        }
        else if (this.typeOfFilters === 'product') {
            this.getUserListByProductId();
        }
        else if (this.typeOfFilters === 'program') {
            this.getUserListByProgramId();
        }
        else {
            this.getUserList();
        }
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmmed-user-list',
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/user/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _service_date_to_send_service__WEBPACK_IMPORTED_MODULE_3__["DateToSendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserListComponent);
    return UserListComponent;
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
var environment = {
    production: false,
    serverUrl: 'http://77.105.164.114:8080',
    //   serverUrl: 'http://localhost:8080',
    // serverUrl: 'http://10.0.27.69:8080',
    company: '/companies'
};


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

module.exports = __webpack_require__(/*! /home/rus/Рабочий стол/med-app-30-08-2019/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map