(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{azej:function(t,o,n){"use strict";n.r(o),n.d(o,"NetworkListModule",function(){return w});var e=n("ofXK"),a=n("tyNb");const i=[{coloumnName:"sno",coloumnDisplay:"Position"},{coloumnName:"networkName",coloumnDisplay:"Network Type"},{coloumnName:"currencySymbol",coloumnDisplay:"Currency"},{coloumnName:"status",coloumnDisplay:"Status"},{coloumnName:"action",coloumnDisplay:"Action",isAction:!0,actions:[{icon:"edit_note",link:"network_edit",isLink:!0,id:"_id"}]}],c=i.map((t,o)=>t.coloumnName);var s=n("fXoL"),r=n("Fpw+"),l=n("nXeD");const u=function(t){return[t]};let p=(()=>{class t{constructor(){this.tableData={displayedColumns:c,displayedDatas:i,getAllApi:"admin/networkList"}}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-network-list"]],decls:9,vars:6,consts:[[1,"d-flex","mb-4","page-header"],[1,"bread-crump_container"],[3,"routerLink"],[3,"tableData"]],template:function(t,o){1&t&&(s.Rb(0,"div",0),s.Rb(1,"ul",1),s.Rb(2,"li"),s.Rb(3,"a",2),s.dc(4,"appRouter"),s.Cc(5," Home"),s.Qb(),s.Qb(),s.Rb(6,"li"),s.Cc(7,"Network List"),s.Qb(),s.Qb(),s.Qb(),s.Mb(8,"app-list-table",3)),2&t&&(s.Ab(3),s.ic("routerLink",s.lc(4,u,s.ec(4,2,"dashboard"))),s.Ab(5),s.ic("tableData",o.tableData))},directives:[a.e,r.a],pipes:[l.a],styles:[""]}),t})();var m=n("aSaG"),b=n("7o6p");const d=[{path:"",component:p}];let w=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(o){return new(o||t)},imports:[[e.c,m.a,b.a,a.f.forChild(d)]]}),t})()}}]);