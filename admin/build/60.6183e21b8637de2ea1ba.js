(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{aIts:function(t,o,a){"use strict";a.r(o),a.d(o,"VoteListModule",function(){return f});var e=a("ofXK"),n=a("tyNb");const s=[{coloumnName:"sno",coloumnDisplay:"Position",isSort:!0},{coloumnName:"user_address",coloumnDisplay:"User Address",isSort:!1,isLink:!0,isCopy:!0,link:"address"},{coloumnName:"status",coloumnDisplay:"Status"},{coloumnName:"action",coloumnDisplay:"Action",isAction:!0,actions:[{icon:"edit_note",link:"vote_edit",isLink:!0,id:"_id"}]}],i=s.map((t,o)=>t.coloumnName);var c=a("fXoL"),l=a("Fpw+"),r=a("nXeD");const p=function(t){return[t]};let u=(()=>{class t{constructor(){this.tableData={displayedColumns:i,displayedDatas:s,getAllApi:"vote/proposal_list"}}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-vote-list"]],decls:9,vars:6,consts:[[1,"d-flex","mb-4","page-header"],[1,"bread-crump_container"],[3,"routerLink"],[3,"tableData"]],template:function(t,o){1&t&&(c.Rb(0,"div",0),c.Rb(1,"ul",1),c.Rb(2,"li"),c.Rb(3,"a",2),c.dc(4,"appRouter"),c.Cc(5," Home"),c.Qb(),c.Qb(),c.Rb(6,"li"),c.Cc(7,"Claim List"),c.Qb(),c.Qb(),c.Qb(),c.Mb(8,"app-list-table",3)),2&t&&(c.Ab(3),c.ic("routerLink",c.lc(4,p,c.ec(4,2,"dashboard"))),c.Ab(5),c.ic("tableData",o.tableData))},directives:[n.e,l.a],pipes:[r.a],styles:[""]}),t})();var d=a("aSaG"),b=a("7o6p");const m=[{path:"",component:u}];let f=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(o){return new(o||t)},imports:[[e.c,d.a,b.a,n.f.forChild(m)]]}),t})()}}]);