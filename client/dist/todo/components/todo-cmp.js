"use strict";var __decorate=this&&this.__decorate||function(t,e,o,i){var s,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(r=(n<3?s(r):n>3?s(e,o,r):s(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),todo_service_1=require("../services/todo-service"),geolocation_service_1=require("../services/geolocation-service"),TodoCmp=function(){function t(t,e){this._todoService=t,this.geolocation=e,this.title="UNAUTHORIZED SFMOMA SHOW",this.inmoma=!1,this.submiting=!1,this.viewing=!1,this.todos=[],this.isClassVisible=!1,this.center="Undisclosed Location",this.todoForm={todoMessage:""}}return t.prototype.ngOnInit=function(){this._getAll(),this.getCurrentPosition()},t.prototype._getAll=function(){var t=this;this._todoService.getAll().subscribe(function(e){t.todos=e})},t.prototype.submit=function(){this.submiting=!0,this.viewing=!1,this.isClassVisible=!0},t.prototype.view=function(){this.submiting=!1,this.viewing=!0,this.isClassVisible=!0},t.prototype.reset=function(){this.submiting=!1,this.viewing=!1,this.isClassVisible=!1},t.prototype.add=function(t){var e=this;this._todoService.add(t).subscribe(function(t){e.todos.push(t),e.todoForm.todoMessage=""})},t.prototype.remove=function(t){var e=this;this._todoService.remove(t).subscribe(function(){e.todos.forEach(function(o,i){if(o._id===t)return e.todos.splice(i,1)})})},t.prototype.getCurrentPosition=function(){var t=this;this.located=!1,this.warning=!1,this.message="",navigator.geolocation?(console.log("Getting position"),this.geolocation.getCurrentPosition().forEach(function(e){t.center=e.coords.latitude+", "+e.coords.longitude,t.zoom="11",t.message="",t.warning=!1,t.located=!0,t.distance=t.getDistance(e.coords.latitude,e.coords.longitude,"37.785665","-122.400502"),t.distance<145e3&&(t.inmoma=!0)},null).then(function(){return console.log("Geolocation service: completed.")})["catch"](function(e){if(e.code>0){switch(e.code){case e.PERMISSION_DENIED:t.message="permission denied";break;case e.POSITION_UNAVAILABLE:t.message="position unavailable";break;case e.TIMEOUT:t.message="position timeout"}t.warning=!0}})):(this.message="browser doesn't support geolocation",this.warning=!0)},t.prototype.getDistance=function(t,e,o,i){var s=.017453292519943295,n=Math.cos,r=.5-n((o-t)*s)/2+n(t*s)*n(o*s)*(1-n((i-e)*s))/2;return 12742*Math.asin(Math.sqrt(r))},t}();TodoCmp=__decorate([core_1.Component({selector:"todo-cmp",templateUrl:"todo/templates/todo.html",styleUrls:["todo/styles/todo.css"]}),__metadata("design:paramtypes",[todo_service_1.TodoService,geolocation_service_1.GeolocationService])],TodoCmp),exports.TodoCmp=TodoCmp;