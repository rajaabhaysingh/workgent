(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{258:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),s=t(7),r=t(139),n=t.n(r),m=t(141),i=t(30),o=t(21),f=function(e){var a=e.job,t=function(){alert("deleted")};return l.a.createElement("div",{className:"fcol job_card_pvt pad-16 bb cur"},l.a.createElement("div",{className:"vis-flex pos_rel"},l.a.createElement("img",{className:"h-40 w-40 round-complete",src:a.logo_image?a.logo_image:i.a,alt:""}),l.a.createElement("div",{style:{maxWidth:"calc(100% - 88px)"},className:"mar_l-12 fcol"},l.a.createElement("div",{className:"fss fwb ellip"},a.title||"N/A"),l.a.createElement("div",{className:"mar_t-4 fsxs ellip fc_5c"},l.a.createElement("i",{className:"fas fa-map-marker-alt mar_r-8"}),a.villageCity||"Location unavailable",", ",a.address||"")),l.a.createElement(m.a,{nested:!0,trigger:l.a.createElement("button",{style:{top:"-8px",right:"-12px"},className:"btn cur pos_abs mar-4 h-32p w-32p round-complete bg_trans btn_gray"},l.a.createElement("i",{className:"fas fa-ellipsis-v"})),position:"left top",on:"click",closeOnDocumentClick:!0,mouseLeaveDelay:250,mouseEnterDelay:0,contentStyle:{padding:"0px",border:"none"},arrow:!1},(function(e){return l.a.createElement("div",{className:"card_menu fss fcol round-8"},l.a.createElement(m.a,{trigger:l.a.createElement("div",{className:"card_menu_item fc"},l.a.createElement("i",{className:"fas fa-trash-alt mar_r-8"}),"Delete posting"),modal:!0,className:"cnf_popup-dark"},(function(c){return l.a.createElement("div",{className:"fcol bg_ter-light round-8 pad-16"},l.a.createElement("div",{className:"fsm fwb fc_white w-100 align-c"},'Delete "',a.title||"",'" ?'),l.a.createElement("div",{className:"w-100 mar_t-16 pad-16 bb fc_white fss round-8 bg_ter vis-flex"},l.a.createElement("i",{className:"fas fa-info-circle mar_r-8 mar_t-2"}),l.a.createElement("span",null,"You will no longer receive any job application on this post. However, you can still access its details in the history section. Proceed to delete ?")),l.a.createElement("div",{className:"fcc mar_t-32"},l.a.createElement("button",{className:"btn bg_gray-light h-32p w-80p fc_8a round-4 fwb cur",onClick:function(){c(),e()}},"Cancel"),l.a.createElement("button",{className:"btn mar_l-32 bg_err h-32p w-80p fc_white round-4 fwb cur",onClick:t},"Delete")))})),l.a.createElement("div",{className:"card_menu_item"},l.a.createElement("i",{className:"fas fa-share-square mar_r-8"}),"Share"))}))),l.a.createElement("div",{className:"no_wrap fss mar_t-8 fc"},l.a.createElement("div",{className:"fcc"},l.a.createElement("span",{className:"fc_5c mar_r-4"},"Require:"),l.a.createElement("span",{className:"fwb fc_sec"},a.vacancy_count||"N/A"," ",a.emp_type||"Person")),l.a.createElement("div",{className:"mar_0-4 fwb fc_5c fsxs"},"for"),l.a.createElement("div",{className:"fwb fc_sec"},a.duration||"N/A"," ",a.duration_unit||"N/A")),l.a.createElement("div",{className:"fc_bw mar_t-8"},l.a.createElement("span",{className:"fc_5c fc mar_r-4"},l.a.createElement("i",{className:"fas fss fa-clock mar_r-4"}),l.a.createElement("span",{style:{fontSize:"0.7rem"}},Object(o.a)(a.date_of_creation||new Date,"dd Mmm yyyy, hh:mm"))),l.a.createElement("span",{className:"fc_5c fc fsxs"},"Applications received:"," ",l.a.createElement("span",{className:"fc_sec mar_l-4 fwb"},a.total_submitted||"0"))))},d=t(12),_=t(16),u=t(2),p=t(25);a.default=function(){var e=Object(s.k)().url,a=Object(s.h)(),t=Object(c.useContext)(d.a),m=t.myJobsDispatch,i=t.myJobsState.myJobs,o=i.loading,b=(i.error,i.data);Object(c.useEffect)((function(){!function(e){return function(a){a({type:u.m}),Object(_.a)(e).get("/jobs/my/?ordering=-date_of_creation").then((function(e){a({type:u.n,payload:e.data})})).catch((function(e){a({type:u.l,payload:e.response?e.response.data:p.a})}))}}(a)(m)}),[]);return l.a.createElement("div",{className:"fcol w-100 h-100 of-scr"},l.a.createElement("div",{className:"dash_body_box fcol f1 bb bg_white round-8 pad_pc-32_mob-16"},l.a.createElement("div",{className:"f_lrtb w-100 pc_space_bw"},l.a.createElement("div",{className:"fcol"},l.a.createElement("div",{className:"fsxl fwb"},"My postings"),l.a.createElement("div",{className:"fsxs fc_8a mar_t-8"},"View/update the details of your job postings here.")),l.a.createElement("button",{className:"dash_opt_btn-1 btn cur fsm fcc mob_mar_t-32 pad_8-16 round-4 bg_pri fc_white fwb bb",onClick:function(){a.push("".concat(e,"/new_post"))}},l.a.createElement("i",{className:"fas fa-plus mar_r-8"}),"Post new job")),l.a.createElement("div",{className:"fcol mar_t-32 f1"},l.a.createElement("div",{className:"fsm fc_sec fwb"},"Ongoing recruitments"),o?l.a.createElement("div",{style:{maxWidth:"320px"},className:"fcol mar_t-16 of-hid"},l.a.createElement(r.SkeletonTheme,{color:"#8a8a8a",highlightColor:"#ffffff"},l.a.createElement("div",{className:"fc"},l.a.createElement(n.a,{circle:!0,height:40,width:40}),l.a.createElement("div",{className:"fcol mar_l-8"},l.a.createElement(n.a,{count:1,width:250,height:16}),l.a.createElement(n.a,{style:{marginTop:"4px"},count:1,width:140,height:10}))),l.a.createElement("div",{className:"fcol mar_t-16"},l.a.createElement(n.a,{count:1,width:300,height:12}),l.a.createElement(n.a,{style:{marginTop:"4px"},count:1,width:300,height:12})),l.a.createElement("div",{className:"fc mar_t-32"},l.a.createElement(n.a,{circle:!0,height:40,width:40}),l.a.createElement("div",{className:"fcol mar_l-8"},l.a.createElement(n.a,{count:1,width:250,height:16}),l.a.createElement(n.a,{style:{marginTop:"4px"},count:1,width:140,height:10}))),l.a.createElement("div",{className:"fcol mar_t-16"},l.a.createElement(n.a,{count:1,width:300,height:12}),l.a.createElement(n.a,{style:{marginTop:"4px"},count:1,width:300,height:12})))):function(e){var a;return(null===(a=e.results)||void 0===a?void 0:a.length)>0?l.a.createElement("div",{className:"fcol job_list bb mar_t-16"},e.results.map((function(e){return l.a.createElement(f,{key:e.id,job:e})}))):l.a.createElement("div",{className:"pad-16 round-4 bg_pri-light fc_pri fss mar_t-16 vis-flex"},l.a.createElement("i",{className:"fas fa-info-circle mar_r-8 mar_t-2"}),l.a.createElement("span",null,"No ongoing recruitment available. You can post a new job to hire/recruit workforce(es)."))}(b))),l.a.createElement("div",{className:"dash_body_box bg_white round-8 pad_pc-32_mob-16"},l.a.createElement("div",{className:"fcol"},l.a.createElement("div",{className:"fsm fc_sec fwb"},"Postings history"),function(e){var a;return(null===e||void 0===e||null===(a=e.results)||void 0===a?void 0:a.length)>0?l.a.createElement("div",{className:"fcol job_list bb mar_t-16"},e.results.map((function(e){return l.a.createElement(f,{key:e.id,job:e})}))):l.a.createElement("div",{className:"pad-16 round-4 bg_pri-light fc_pri fss mar_t-16 vis-flex"},l.a.createElement("i",{className:"fas fa-info-circle mar_r-8 mar_t-2"}),l.a.createElement("span",null,"No postings history available."))}())))}}}]);
//# sourceMappingURL=15.df33394d.chunk.js.map