"use strict";var __decorate=this&&this.__decorate||function(t,o,e,i){var s,n=arguments.length,r=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(o,e,r):s(o,e))||r);return n>3&&r&&Object.defineProperty(o,e,r),r},__metadata=this&&this.__metadata||function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),todo_service_1=require("../services/todo-service"),geolocation_service_1=require("../services/geolocation-service");require("aws-sdk/dist/aws-sdk");var TodoCmp=function(){function t(t,o,e){this._todoService=t,this.geolocation=o,this.zone=e,this.title="UNAUTHORIZED SFMOMA SHOW",this.about=!1,this.currentpast=!0,this.menuopen=!1,this.toobig=!1,this.file_url="",this.warning=!0,this.located=!1,this.inmoma=!1,this.count=0,this.item={todoMessage:0,createdAt:0,todoArtwork:0,todoDate:0,todoMedium:0,todoSize:0,todoArtist:0,todoEmail:0,file_url:0},this.submiting=!1,this.viewing=!1,this.message="Please, allow location access to Unauthorized SFMOMA Show in order to confirm that you are currently at SFMOMA.",this.todos=[],this.isClassVisible=!1,this.center="Undisclosed Location",this.todoForm={todoMessage:""}}return t.prototype.ngOnInit=function(){this._getAll()},t.prototype._getAll=function(){var t=this;this._todoService.getAll().subscribe(function(o){console.log("Todos: ",o),t.zone.run(function(){console.log("Got item: ",o),t.all=o.item,t.item=o.item[o.count-1],t.count=o.count})})},t.prototype.fileEvent=function(t){var o=t.target.files,e=o[0];this.file=e,console.log("Selected file: ",this.file),this.file.size>2097152?(console.log("file too big! Max 2MB"),this.toobig=!0):this.toobig=!1},t.prototype.togglemenu=function(){this.menuopen?this.menuopen=!1:this.menuopen=!0},t.prototype.abouttoggle=function(){this.about=!0,this.submiting=!1,this.viewing=!1,this.isClassVisible=!0,this.menuopen&&(this.menuopen=!1)},t.prototype.submit=function(){this.about=!1,this.submiting=!0,this.viewing=!1,this.isClassVisible=!0,this.menuopen&&(this.menuopen=!1)},t.prototype.view=function(){this.getCurrentPosition(),this.about=!1,this._getAll(),this.submiting=!1,this.viewing=!0,this.isClassVisible=!0,this.menuopen&&(this.menuopen=!1)},t.prototype.reset=function(){this._getAll(),this.about=!1,this.submiting=!1,this.viewing=!1,this.isClassVisible=!1,this.menuopen&&(this.menuopen=!1)},t.prototype.add=function(t){var o=window.AWS;console.log(o);var e=this.file;o.config.accessKeyId="AKIAJGBCGJ455OKL6PIQ",o.config.secretAccessKey="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";var i=new o.S3({params:{Bucket:"sfmomashow"}}),s=new Date,n=s.getTime(),r={Key:n+e.name,Body:e},a=this;i.upload(r,function(o,e){o?console.log("error: ",o):(console.log("response: ",e),t.file_url=e.Location,a._todoService.add(t).subscribe(function(t){console.log("m: ",t),a.zone.run(function(){console.log("added: ",t),a.item=t,a.view()})}))})},t.prototype.remove=function(t){var o=this;this._todoService.remove(t).subscribe(function(){o.todos.forEach(function(e,i){if(e._id===t)return o.todos.splice(i,1)})})},t.prototype.getCurrentPosition=function(){var t=this;this.message="",navigator.geolocation?(console.log("Getting position"),this.geolocation.getCurrentPosition().forEach(function(o){t.center=o.coords.latitude+", "+o.coords.longitude,t.zoom="11",t.message="",t.warning=!1,t.located=!0,t.distance=t.getDistance(o.coords.latitude,o.coords.longitude,"37.785665","-122.400502").toFixed(3),t.distance<.145&&(t.inmoma=!0)},null).then(function(){return console.log("Geolocation service: completed.")})["catch"](function(o){if(o.code>0){switch(o.code){case o.PERMISSION_DENIED:t.message="You have to be at SFMOMA to visit or participate in this exhibition. If you don’t allow location access to Unauthorized SFMOMA Show, it is impossible to confirm that you are at SFMOMA right now.";break;case o.POSITION_UNAVAILABLE:t.message="You have to be at SFMOMA to visit or participate in this exhibition. If you don’t allow location access to Unauthorized SFMOMA Show, it is impossible to confirm that you are at SFMOMA right now.";break;case o.TIMEOUT:t.message="Please, allow location access to Unauthorized SFMOMA Show in order to confirm that you are currently at SFMOMA."}t.warning=!0}})):(this.message="browser doesn't support geolocation",this.warning=!0)},t.prototype.getDistance=function(t,o,e,i){var s=.017453292519943295,n=Math.cos,r=.5-n((e-t)*s)/2+n(t*s)*n(e*s)*(1-n((i-o)*s))/2;return 12742*Math.asin(Math.sqrt(r))},t}();TodoCmp=__decorate([core_1.Component({selector:"todo-cmp",templateUrl:"todo/templates/todo.html",styleUrls:["todo/styles/todo.css"]}),__metadata("design:paramtypes",[todo_service_1.TodoService,geolocation_service_1.GeolocationService,core_1.NgZone])],TodoCmp),exports.TodoCmp=TodoCmp;