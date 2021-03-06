"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.AppResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var AppResolver = (function () {
    function AppResolver() {
    }
    AppResolver.prototype.appInfo = function () {
        return 'heyday tech challenge starter';
    };
    __decorate([
        graphql_1.Query(function () { return String; }, {
            nullable: false,
            description: 'App info.'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], AppResolver.prototype, "appInfo");
    AppResolver = __decorate([
        graphql_1.Resolver()
    ], AppResolver);
    return AppResolver;
}());
exports.AppResolver = AppResolver;
