(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/7fw":function(t,e,a){"use strict";a.r(e),a.d(e,"FeatureListModule",function(){return y});const n=[{coloumnName:"sno",coloumnDisplay:"Position"},{coloumnName:"title",coloumnDisplay:"Title"},{coloumnName:"action",coloumnDisplay:"Action",isAction:!0,actions:[{icon:"edit_note",link:"features_edit",isLink:!0,id:"_id"}]}],o=n.map((t,e)=>t.coloumnName);var i=a("fXoL"),c=a("tyNb"),r=a("bTqV"),s=a("NFeN"),u=a("Fpw+"),l=a("nXeD");const b=function(t){return[t]},p=function(t){return[t,"new"]};let d=(()=>{class t{constructor(){this.tableData={displayedColumns:o,displayedDatas:n,getAllApi:"admin/featureslist"}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-feature-list"]],decls:15,vars:11,consts:[[1,"d-flex","mb-4","page-header"],[1,"bread-crump_container"],[3,"routerLink"],[1,"group-button"],["mat-button","","color","primary",3,"routerLink"],[3,"tableData"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"ul",1),i.Rb(2,"li"),i.Rb(3,"a",2),i.dc(4,"appRouter"),i.Cc(5," Home"),i.Qb(),i.Qb(),i.Rb(6,"li"),i.Cc(7,"Features List"),i.Qb(),i.Qb(),i.Rb(8,"div",3),i.Rb(9,"a",4),i.dc(10,"appRouter"),i.Rb(11,"mat-icon"),i.Cc(12,"add"),i.Qb(),i.Cc(13," Add Features "),i.Qb(),i.Qb(),i.Qb(),i.Mb(14,"app-list-table",5)),2&t&&(i.Ab(3),i.ic("routerLink",i.lc(7,b,i.ec(4,3,"dashboard"))),i.Ab(6),i.ic("routerLink",i.lc(9,p,i.ec(10,5,"features_edit"))),i.Ab(5),i.ic("tableData",e.tableData))},directives:[c.e,r.a,s.a,u.a],pipes:[l.a],styles:[""]}),t})();var m=a("aSaG"),f=a("7o6p");const w=[{path:"",component:d}];let y=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[m.a,f.a,c.f.forChild(w)]]}),t})()}}]);