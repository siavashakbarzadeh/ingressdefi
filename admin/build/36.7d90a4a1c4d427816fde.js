(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"/2RN":function(b,i,t){"use strict";t.r(i),t.d(i,"DashboardModule",function(){return l});var n=t("ofXK"),r=t("fXoL"),e=t("p/XV"),c=t("tyNb");const o=function(){return["/admin/referal/list"]},d=function(){return["/admin/ip/ip_block_list"]},s=function(){return["/admin/swap/list"]},a=function(){return["/admin/pairs/list"]},u=function(){return["/admin/token/list"]},v=function(){return["/admin/stake/stake_list"]},R=function(){return["/admin/subscribe/subscribe_list"]},Q=[{path:"",component:(()=>{class b{constructor(b){this.dataService=b}ngOnInit(){this.getCount()}getCount(){this.dataService.getRequest("admin/dashboard").subscribe(b=>{b.status&&(this.referalCount=b.referalCount,this.blockCount=b.blockCount,this.swapCount=b.swapCount,this.pairsCount=b.pairsCount,this.tokenCount=b.currencyCount,this.stakeCount=b.depositCount,this.subscribeCount=b.subscribeCount)})}}return b.\u0275fac=function(i){return new(i||b)(r.Lb(e.a))},b.\u0275cmp=r.Fb({type:b,selectors:[["app-dashboard"]],decls:67,vars:21,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-6","col-lg-4",3,"routerLink"],[1,"card","text-white","bg-primary"],[1,"card-body","pb-0","cursor_pointer"],["dropdown","",1,"btn-group","float-right"],[1,"fa","fa-list-alt"],[1,"text-value"],[1,"card","text-white","bg-dark"],[1,"fa","fa-users"],[1,"row","mt-2"],[1,"card","text-white","bg-info"],[1,"card","text-white","bg-warning"],[1,"card","text-white","bg-success"],[1,"card","text-white","bg-danger"],[1,"fa","fa-ban"]],template:function(b,i){1&b&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"div",3),r.Rb(4,"div",4),r.Rb(5,"div",5),r.Mb(6,"i",6),r.Qb(),r.Rb(7,"div",7),r.Cc(8),r.Qb(),r.Rb(9,"div"),r.Cc(10,"Total Referral"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(11,"div",2),r.Rb(12,"div",8),r.Rb(13,"div",4),r.Rb(14,"div",5),r.Mb(15,"i",6),r.Qb(),r.Rb(16,"div",7),r.Cc(17),r.Qb(),r.Rb(18,"div"),r.Cc(19,"Total IP Blocked"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(20,"div",2),r.Rb(21,"div",3),r.Rb(22,"div",4),r.Rb(23,"div",5),r.Mb(24,"i",9),r.Qb(),r.Rb(25,"div",7),r.Cc(26),r.Qb(),r.Rb(27,"div"),r.Cc(28,"Total Swap List"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(29,"div",10),r.Rb(30,"div",2),r.Rb(31,"div",11),r.Rb(32,"div",4),r.Rb(33,"div",5),r.Mb(34,"i",6),r.Qb(),r.Rb(35,"div",7),r.Cc(36),r.Qb(),r.Rb(37,"div"),r.Cc(38,"Total Pairs List"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(39,"div",2),r.Rb(40,"div",12),r.Rb(41,"div",4),r.Rb(42,"div",5),r.Mb(43,"i",6),r.Qb(),r.Rb(44,"div",7),r.Cc(45),r.Qb(),r.Rb(46,"div"),r.Cc(47,"Total Token List"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(48,"div",2),r.Rb(49,"div",13),r.Rb(50,"div",4),r.Rb(51,"div",5),r.Mb(52,"i",6),r.Qb(),r.Rb(53,"div",7),r.Cc(54),r.Qb(),r.Rb(55,"div"),r.Cc(56,"Total Stake List"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(57,"div",10),r.Rb(58,"div",2),r.Rb(59,"div",14),r.Rb(60,"div",4),r.Rb(61,"div",5),r.Mb(62,"i",15),r.Qb(),r.Rb(63,"div",7),r.Cc(64),r.Qb(),r.Rb(65,"div"),r.Cc(66,"Total Subscribe List"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&b&&(r.Ab(2),r.ic("routerLink",r.kc(14,o)),r.Ab(6),r.Dc(i.referalCount),r.Ab(3),r.ic("routerLink",r.kc(15,d)),r.Ab(6),r.Dc(i.blockCount),r.Ab(3),r.ic("routerLink",r.kc(16,s)),r.Ab(6),r.Dc(i.swapCount),r.Ab(4),r.ic("routerLink",r.kc(17,a)),r.Ab(6),r.Dc(i.pairsCount),r.Ab(3),r.ic("routerLink",r.kc(18,u)),r.Ab(6),r.Dc(i.tokenCount),r.Ab(3),r.ic("routerLink",r.kc(19,v)),r.Ab(6),r.Dc(i.stakeCount),r.Ab(4),r.ic("routerLink",r.kc(20,R)),r.Ab(6),r.Dc(i.subscribeCount))},directives:[c.c],styles:[""]}),b})()}];let l=(()=>{class b{}return b.\u0275mod=r.Jb({type:b}),b.\u0275inj=r.Ib({factory:function(i){return new(i||b)},imports:[[n.c,c.f.forChild(Q)]]}),b})()}}]);