(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"d1+O":function(t,o,n){"use strict";n.r(o),n.d(o,"IpBlockListModule",function(){return w});var a=n("ofXK"),i=n("tyNb");const e=[{coloumnName:"sno",coloumnDisplay:"Position"},{coloumnName:"user_ip",coloumnDisplay:"User Ip"},{coloumnName:"status",coloumnDisplay:"Status",isStatus:!0},{coloumnName:"action",coloumnDisplay:"Action",isAction:!0,actions:[{icon:"edit_note",link:"ip_block_edit",isLink:!0,id:"_id"}]}],c=e.map((t,o)=>t.coloumnName);var s=n("fXoL"),l=n("bTqV"),r=n("NFeN"),u=n("Fpw+"),p=n("nXeD");const b=function(t){return[t]},d=function(t){return[t,"new"]};let m=(()=>{class t{constructor(){this.tableData={displayedColumns:c,displayedDatas:e,getAllApi:"admin/IPblockhistory"}}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-ip-block-list"]],decls:15,vars:11,consts:[[1,"d-flex","mb-4","page-header"],[1,"bread-crump_container"],[3,"routerLink"],[1,"group-button"],["mat-button","","color","primary",3,"routerLink"],[3,"tableData"]],template:function(t,o){1&t&&(s.Rb(0,"div",0),s.Rb(1,"ul",1),s.Rb(2,"li"),s.Rb(3,"a",2),s.dc(4,"appRouter"),s.Cc(5," Home"),s.Qb(),s.Qb(),s.Rb(6,"li"),s.Cc(7,"Block List"),s.Qb(),s.Qb(),s.Rb(8,"div",3),s.Rb(9,"a",4),s.dc(10,"appRouter"),s.Rb(11,"mat-icon"),s.Cc(12,"add"),s.Qb(),s.Cc(13," Add Block IP "),s.Qb(),s.Qb(),s.Qb(),s.Mb(14,"app-list-table",5)),2&t&&(s.Ab(3),s.ic("routerLink",s.lc(7,b,s.ec(4,3,"dashboard"))),s.Ab(6),s.ic("routerLink",s.lc(9,d,s.ec(10,5,"ip_block_edit"))),s.Ab(5),s.ic("tableData",o.tableData))},directives:[i.e,l.a,r.a,u.a],pipes:[p.a],styles:[""]}),t})();var k=n("aSaG"),f=n("7o6p");const y=[{path:"",component:m}];let w=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(o){return new(o||t)},imports:[[a.c,k.a,f.a,i.f.forChild(y)]]}),t})()}}]);