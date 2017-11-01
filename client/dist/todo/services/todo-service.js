"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(a<3?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/map");var TodoService=TodoService_1=function(){function e(e){this._http=e}return e.prototype.getAll=function(){return this._http.get(TodoService_1.ENDPOINT.replace(/:id/,"")).map(function(e){return e.json()})},e.prototype.getById=function(e){return this._http.get(TodoService_1.ENDPOINT.replace(/:id/,e)).map(function(e){return e.json()})},e.prototype.add=function(e){var t=(JSON.stringify({todoMessage:e}),new http_1.Headers);t.append("Content-Type","application/json")},e.prototype.remove=function(e){return this._http["delete"](TodoService_1.ENDPOINT.replace(/:id/,e))},e}();TodoService.ENDPOINT="/api/todos/:id",TodoService=TodoService_1=__decorate([core_1.Injectable(),__param(0,core_1.Inject(http_1.Http)),__metadata("design:paramtypes",[http_1.Http])],TodoService),exports.TodoService=TodoService;var TodoService_1;