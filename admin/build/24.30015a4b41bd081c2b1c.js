(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{gKvS:function(e,t,r){"use strict";r.r(t),r.d(t,"ChangePasswordModule",function(){return L});var i=r("ofXK"),n=r("tyNb"),a=r("3Pt+"),o=r("AytR"),s=r("d1T+"),c=r("fXoL"),d=r("p/XV"),l=r("uDgL"),b=r("Tesu"),p=r("Wp6s"),u=r("bTqV"),h=r("kmnG"),f=r("qFsG"),m=r("NFeN"),g=r("Xa2L");const w=["editForm"];function C(e,t){1&e&&(c.Rb(0,"mat-icon"),c.Cc(1," fact_check "),c.Qb())}function P(e,t){1&e&&(c.Pb(0),c.Cc(1," Update Settings "),c.Ob())}function v(e,t){1&e&&(c.Pb(0),c.Cc(1," Please Wait "),c.Rb(2,"span"),c.Cc(3," ... "),c.Qb(),c.Ob())}function y(e,t){if(1&e&&(c.Rb(0,"mat-error"),c.Cc(1),c.Qb()),2&e){c.cc();const e=c.pc(19),t=c.cc();c.Ab(1),c.Ec(" ",t.general.checkError(e,"Current Password")," ")}}function A(e,t){if(1&e&&(c.Rb(0,"mat-error"),c.Cc(1),c.Qb()),2&e){c.cc();const e=c.pc(28),t=c.cc();c.Ab(1),c.Ec(" ",t.general.checkError(e,"New Password","password")," ")}}function M(e,t){1&e&&(c.Rb(0,"mat-error"),c.Cc(1," Password Mis match "),c.Qb())}function R(e,t){if(1&e&&(c.Rb(0,"mat-error"),c.Cc(1),c.Qb()),2&e){c.cc();const e=c.pc(38),t=c.cc();c.Ab(1),c.Ec(" ",t.general.checkError(e,"Confirm Password","password")," ")}}function S(e,t){if(1&e){const e=c.Sb();c.Rb(0,"mat-card",2),c.Rb(1,"div",3),c.Rb(2,"span"),c.Cc(3," Password Settings "),c.Qb(),c.Mb(4,"div",4),c.Rb(5,"div",5),c.Rb(6,"button",6),c.Yb("click",function(){return c.tc(e),c.cc().formSubmit()}),c.Bc(7,C,2,0,"mat-icon",1),c.Bc(8,P,2,0,"ng-container",1),c.Bc(9,v,4,0,"ng-container",1),c.Qb(),c.Qb(),c.Qb(),c.Pb(10),c.Rb(11,"form",null,7),c.Rb(13,"div",8),c.Rb(14,"div",9),c.Rb(15,"mat-form-field",10),c.Rb(16,"mat-label"),c.Cc(17,"Current Password"),c.Qb(),c.Rb(18,"input",11,12),c.Yb("ngModelChange",function(t){return c.tc(e),c.cc().editObj.currentpwd=t})("keypress",function(t){c.tc(e);const r=c.cc();return r.general.removingSpaceFirst(t,r.editObj.currentpwd)}),c.Qb(),c.Rb(20,"a",13),c.Yb("click",function(){c.tc(e);const t=c.cc();return t.hideCurrent=!t.hideCurrent}),c.Rb(21,"mat-icon"),c.Cc(22),c.Qb(),c.Qb(),c.Bc(23,y,2,1,"mat-error",1),c.Qb(),c.Rb(24,"mat-form-field",10),c.Rb(25,"mat-label"),c.Cc(26,"New Password"),c.Qb(),c.Rb(27,"input",14,15),c.Yb("ngModelChange",function(t){return c.tc(e),c.cc().editObj.newpwd=t})("keypress",function(t){return c.tc(e),c.cc().general.removingSpace(t)})("ngModelChange",function(){return c.tc(e),c.cc().passwordCheck()}),c.Qb(),c.Rb(29,"a",13),c.Yb("click",function(){c.tc(e);const t=c.cc();return t.hide=!t.hide}),c.Rb(30,"mat-icon"),c.Cc(31),c.Qb(),c.Qb(),c.Bc(32,A,2,1,"mat-error",1),c.Qb(),c.Rb(33,"div",16),c.Rb(34,"mat-form-field",10),c.Rb(35,"mat-label"),c.Cc(36,"Confirm Password"),c.Qb(),c.Rb(37,"input",17,18),c.Yb("ngModelChange",function(t){return c.tc(e),c.cc().editObj.confirmpwd=t})("keypress",function(t){return c.tc(e),c.cc().general.removingSpace(t)})("focusout",function(){return c.tc(e),c.cc().passwordCheck()})("ngModelChange",function(){return c.tc(e),c.cc().passwordCheck()}),c.Qb(),c.Bc(39,M,2,0,"mat-error",1),c.Bc(40,R,2,1,"mat-error",1),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Ob(),c.Qb()}if(2&e){const e=c.pc(19),t=c.pc(28),r=c.pc(38),i=c.cc();c.Ab(6),c.ic("disabled",i.isDataPassing),c.Ab(1),c.ic("ngIf",!i.isDataPassing),c.Ab(1),c.ic("ngIf",!i.isDataPassing),c.Ab(1),c.ic("ngIf",i.isDataPassing),c.Ab(9),c.ic("type",i.hideCurrent?"password":"text")("ngModel",i.editObj.currentpwd),c.Ab(4),c.Dc(i.hideCurrent?"visibility_off":"visibility"),c.Ab(1),c.ic("ngIf",e.errors),c.Ab(4),c.ic("type",i.hide?"password":"text")("ngModel",i.editObj.newpwd)("pattern",i.general.passwordPattern)("maxlength",i.general.passwordLength),c.Ab(4),c.Dc(i.hide?"visibility_off":"visibility"),c.Ab(1),c.ic("ngIf",t.errors),c.Ab(5),c.ic("ngModel",i.editObj.confirmpwd)("type",i.hide?"password":"text")("errorStateMatcher",i.isConfirmPassword)("maxlength",i.general.passwordLength),c.Ab(2),c.ic("ngIf",!r.errors&&i.isConfirmPasswordError),c.Ab(1),c.ic("ngIf",r.errors)}}function k(e,t){1&e&&(c.Pb(0),c.Rb(1,"div",19),c.Mb(2,"mat-spinner",20),c.Qb(),c.Ob()),2&e&&(c.Ab(2),c.ic("diameter",20))}let O=!1;class Q{isErrorState(){return O}}let j=(()=>{class e{constructor(e,t,r,i){this.dataService=e,this.general=t,this.settingsService=r,this.router=i,this.isPasswordObj=!1,this.isGetSingleDataLoading=!1,this.isDataPassing=!1,this.hideCurrent=!0,this.hide=!0,this.editObj={currentpwd:"",newpwd:"",confirmpwd:""},this.isConfirmPasswordError=!1,this.isConfirmPassword=new Q}ngOnInit(){}ngOnDestroy(){}isConfirmPasswordValidMethod(e){O=e,this.isConfirmPasswordError=e,this.isConfirmPassword.isErrorState()}passwordCheck(){this.editObj.newpwd&&this.editObj.confirmpwd?this.isConfirmPasswordValidMethod(this.editObj.newpwd!==this.editObj.confirmpwd):this.editObj.confirmpwd||this.isConfirmPasswordValidMethod(!0)}formSubmit(){this.editForm.submitted=!0,""==this.editObj.confirmpwd&&this.isConfirmPasswordValidMethod(!0),this.editForm.valid&&!this.isConfirmPasswordError&&this.updatePasswordObj()}updatePasswordObj(){this.isDataPassing=!0,this.dataService.postRequest("admin/changepassword",this.editObj).subscribe(e=>{this.isDataPassing=!1,this.editForm.reset(),e.status?(this.dataService.openAlert(e.status,e.data.message),localStorage.removeItem("key"),localStorage.removeItem("bootManager"),localStorage.removeItem("datetime"),console.log(s.a.login," AppRoutes.login"),this.router.navigateByUrl(o.a.baseUrl+s.a.login)):this.dataService.openAlert(e.status,e.error)})}}return e.\u0275fac=function(t){return new(t||e)(c.Lb(d.a),c.Lb(l.a),c.Lb(b.a),c.Lb(n.b))},e.\u0275cmp=c.Fb({type:e,selectors:[["app-change-password"]],viewQuery:function(e,t){if(1&e&&c.Gc(w,!0,a.j),2&e){let e;c.oc(e=c.Zb())&&(t.editForm=e.first)}},decls:2,vars:2,consts:[["class","table-container",4,"ngIf"],[4,"ngIf"],[1,"table-container"],[1,"d-flex","align-items-center","mb-4","page-header"],[1,"spacer"],[1,"group-button"],["type","submit","mat-button","","color","accent",3,"disabled","click"],["editForm","ngForm"],[1,"row"],[1,"col-md-4"],["appearance","outline"],["matInput","","placeholder","Current Password","name","currentpwd","autocomplete","off","required","",3,"type","ngModel","ngModelChange","keypress"],["currentpwd","ngModel"],["mat-icon-button","","matSuffix","","color","primary",1,"decoration-none",3,"click"],["matInput","","placeholder","New Password","name","newpwd","autocomplete","off","required","",3,"type","ngModel","pattern","maxlength","ngModelChange","keypress"],["newpwd","ngModel"],[1,"mt-2"],["matInput","","type","password","id","password","placeholder","Confirm Password","name","confirmpwd","autocomplete","off","required","",3,"ngModel","type","errorStateMatcher","maxlength","ngModelChange","keypress","focusout"],["confirmpwd","ngModel"],[1,"d-flex","justify-content-center","padding"],["color","primary",3,"diameter"]],template:function(e,t){1&e&&(c.Bc(0,S,41,20,"mat-card",0),c.Bc(1,k,3,1,"ng-container",1)),2&e&&(c.ic("ngIf",!t.isGetSingleDataLoading),c.Ab(1),c.ic("ngIf",t.isGetSingleDataLoading))},directives:[i.l,p.a,u.b,a.r,a.i,a.j,h.c,h.f,f.a,a.a,a.o,a.h,a.k,u.a,h.h,m.a,a.n,a.e,h.b,g.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%!important;font-size:13px}"]}),e})();var I=r("aSaG");const D=[{path:"",component:j}];let L=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(t){return new(t||e)},imports:[[i.c,I.a,n.f.forChild(D)]]}),e})()},uDgL:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var i=r("fXoL"),n=r("dNgK");let a=(()=>{class e{constructor(e){this.snackBar=e,this.specialCharacterPattern="^(?=.*[a-zA-Z])[a-zA-Z0-9]+$",this.passwordPattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`~#^$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}",this.numberPattern="^[0-9]*$",this.alphaNumericPattern="^(?=.*[a-zA-Z])[a-zA-Z0-9]+$",this.floatNumber="[+-]?([0-9]*[.])?[0-9]+",this.stringWithSpace="^[a-zA-Z_ ]*$",this.passwordLength=8,this.ipPattern="^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}checkError(e,t,r){if(e.errors.hasOwnProperty("required"))return t+" is required";if(e.errors.hasOwnProperty("email"))return"Please enter a valid email address";if(e.errors.pattern){if("specialChar"==r)return"Special characters not allowed";if("password"==r)return"Password must contain atleast one uppercase, One lowercase, One numeric digit, One special character, 8 characters";if("cPassword"==r)return"Password Mismatch";if("number"==r)return t+" should be numerical";if("alphaNumeric"==r)return t+" contain only Alphanumeric characters and atleast one character";if("ip"==r)return"Enter Valid Ip Address"}else{if(e.errors.minlength)return"Min length is "+e.errors.minlength.requiredLength;if(e.errors.whitespace)return"White Space ";if(e.errors.matDatepickerMin)return"Date is expired "}}openNewWindow(e,t){let r=String(e),i=window.open("","_blank");console.log(t,"_type"),t&&"video"==t.toLowerCase()?i.document.write(`<img> <video src="${r}"  height="200" controls></video>`):i.document.write(`<img src="${r}">`)}isFile(e,t,r){if(r&&"video"==r.toLowerCase()){if(t.target.files&&t.target.files[0])for(var i=0;i<e.length;i++){let t=(n=e[i]).size/1024/1024;return"video/mp4"!=n.type?(this.openAlert(!1,"Invalid video format"),!1):!(t>=2&&(this.openAlert(!1,"Upload video should be less than or equal to 2MB"),1))}}else if(t.target.files&&t.target.files[0])for(i=0;i<e.length;i++){var n;let t=(n=e[i]).type,r=n.size/1024/1024;return"image/png"!=t&&"image/jpg"!=t&&"image/jpeg"!=t?(this.openAlert(!1,"Invalid image format"),!1):!(r>=2&&(this.openAlert(!1,"Upload image should be less than or equal to 2MB"),1))}}openAlert(e,t){let r;r="true"===e||!0===e?"bg-success":"bg-error",this.snackBar.open(t,"X",{duration:5e3,horizontalPosition:"right",verticalPosition:"top",panelClass:r})}loaded(e){e.classList.remove("is-loading-secondary")}removingSpaceFirst(e,t,r){32!==e.which||t.length||e.preventDefault()}removingSpace(e){32===e.which&&e.preventDefault()}}return e.\u0275fac=function(t){return new(t||e)(i.Vb(n.a))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);