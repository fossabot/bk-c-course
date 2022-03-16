(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{139:function(e,t,a){"use strict";a.r(t);var r=a(140);var i=a.n(r);for(var s in r)if(s!=="default")(function(e){a.d(t,e,function(){return r[e]})})(s);t["default"]=i.a},140:function(e,t,a){"use strict";var r=a(0);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=r(a(15));var s=r(a(16));var n=r(a(176));var d={data:function e(){var t=this;return{viewQrCode:{primary:{visible:false,headerPosition:"left"}},paperlist:[],dialogsetting:{custom:{visible:false,position:{top:100}}},editdialog:{custom:{visible:false,position:{top:100}}},formData:{papertype:undefined,papername:undefined,chapter:undefined,start:undefined,end:undefined},selectdata:{papertype:undefined,papername:undefined,paperchapterid:undefined,start:undefined,end:undefined},edit:true,chapterlist:[],chapterFilters:[],statusFilters:[{text:"草稿",value:"草稿"},{text:"已发布",value:"已发布"},{text:"已批阅",value:"已批阅"}],typeFilters:[{text:"测试卷",value:"测试卷"},{text:"练习卷",value:"练习卷"}],selectpaper:undefined,rules1:{papertype:[{required:true,message:"必选项",trigger:"blur"}],papername:[{required:true,message:"必填项",trigger:"blur"},{max:15,message:"不能多于15字符",trigger:"blur"}],chapter:[{required:true,message:"必选项",trigger:"blur"}],start:[{required:true,message:"必填项",trigger:"blur"},{validator:function e(a){if(t.formData.end===undefined||t.formData.end===""){return true}else{if(a.getTime()<t.formData.end.getTime()){return true}else{return false}}},message:"开始时间应早于结束时间",trigger:"blur"}],end:[{required:true,message:"必填项",trigger:"blur"},{validator:function e(a){if(t.formData.start===undefined||t.formData.start===""){return true}else{if(t.formData.start.getTime()<a.getTime()){return true}else{return false}}},message:"结束时间应晚于开始时间",trigger:"blur"}]},rules:{papertype:[{required:true,message:"必选项",trigger:"blur"}],papername:[{required:true,message:"必填项",trigger:"blur"}],paperchapterid:[{required:true,message:"必选项",trigger:"blur"}],start:[{required:true,message:"必填项",trigger:"blur"},{validator:function e(a){if(t.selectdata.end===undefined||t.selectdata.end===""){return true}else{if(t.selectdata.start.getTime()<t.selectdata.end.getTime()){return true}else{return false}}},message:"开始时间应早于结束时间",trigger:"blur"}],end:[{required:true,message:"必填项",trigger:"blur"},{validator:function e(a){if(t.selectdata.start===undefined||t.selectdata.start===""){return true}else{if(t.selectdata.start.getTime()<t.selectdata.end.getTime()){return true}else{return false}}},message:"结束时间应晚于开始时间",trigger:"blur"}]}}},computed:{CourseId:function e(){return this.$store.state.currentCourseId}},watch:{CourseId:{handler:function e(){this.getchapterlist()}}},created:function e(){this.getchapterlist()},methods:{utc2beijing:function e(t){var a=new Date(t);var r=a.getTime();var i=r/1e3;var s=i+8*60*60;var n=new Date(parseInt(s)*1e3).toISOString();var d=n.indexOf("T");var p=n.indexOf("Z");var l=n.substr(0,d);var o=n.substr(d+1,p-d-8);var u=l+" "+o;return u},beijingtime:function e(t){var a=new Date(t);var r=a.getTime();var i=r/1e3;var s=i+8*60*60;var n=new Date(parseInt(s)*1e3).toISOString();return n},typeFilterMethod:function e(t,a,r){var i=r.property;return a[i]===t},chapterFilterMethod:function e(t,a,r){var i=r.property;return a[i]===t},statusFilterMethod:function e(t,a,r){var i=r.property;return a[i]===t},getchapterlist:function e(){var t=this;return(0,s.default)(i.default.mark(function e(){return i.default.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:t.$http.get("/course/get_chapter_list/",{params:{course_id:t.CourseId}}).then(function(e){t.chapterFilters.splice(0,t.chapterFilters.length);t.$set(t.chapterFilters,0,{text:"全部章节",value:"全部章节"});t.chapterlist=[{id:-1,name:"全部章节"}];if(e.data.length!==0){var a={val:1};for(var r in e.data){t.chapterlist.push({id:e.data[r].id,name:e.data[r].chapter_name});t.$set(t.chapterFilters,a.val++,{text:e.data[r].chapter_name,value:e.data[r].chapter_name})}}}).then(function(e){t.getpaperlist()});case 1:case"end":return a.stop()}}},e)}))()},getpaperlist:function e(){var t=this;this.$http.get("/course/paper/",{params:{course_id:this.CourseId}}).then(function(e){t.paperlist=[];if(e.data.length!==0){for(var a in e.data){var r={id:undefined,papername:undefined,paperchapter:undefined,paperchapterid:undefined,papertype:undefined,types:undefined,paperstatus:undefined,starttime:undefined,endtime:undefined,start:undefined,end:undefined,submited:undefined,sum:undefined,rate:undefined,isend:undefined};var i=new Date;var s=new Date(e.data[a].end_time);if(i.getTime()>=s.getTime()){r.isend=true}else{r.isend=false}r.papername=e.data[a].paper_name;r.id=e.data[a].id;r.paperchapterid=e.data[a].chapter_id;r.types=e.data[a].types;r.paperchapter=e.data[a].chapter_name;if(e.data[a].submitted_students_num!==undefined&&e.data[a].total_students_num!==null){r.submited=e.data[a].submitted_students_num;r.sum=e.data[a].total_students_num;r.rate=e.data[a].submitted_students_num+"/"+e.data[a].total_students_num}else{r.rate="———"}if(e.data[a].end_time!==null){r.endtime=t.utc2beijing(e.data[a].end_time);r.end=t.beijingtime(e.data[a].end_time)}if(e.data[a].start_time!==null){r.start=t.beijingtime(e.data[a].start_time);r.starttime=t.utc2beijing(e.data[a].start_time)}if(e.data[a].types==="EXAM"){r.papertype="测试卷"}if(e.data[a].types==="EXERCISE"){r.papertype="练习卷"}if(e.data[a].status==="DRAFT"){r.paperstatus="草稿"}if(e.data[a].status==="RELEASE"){r.paperstatus="已发布"}if(e.data[a].status==="MARKED"){r.paperstatus="已批阅"}t.$set(t.paperlist,a,r)}}})},check:function e(){var t=this;this.$refs.addform.validate().then(function(e){t.dialogsetting.custom.visible=false;var a={course_id:t.CourseId,types:t.formData.papertype,chapter_id:t.formData.chapter,paper_name:t.formData.papername};var r={start_time:t.formData.start,end_time:t.formData.end};t.$http.post("/course/paper/",a).then(function(e){if(e.result===true){t.$http.put("/course/paper/",{course_id:t.CourseId,paper_id:e.data.paper_id,update_info:r}).then(function(e){if(e.result===false){t.$bkMessage({message:e.message,theme:"warning"})}});if(a.chapter_id===-1){t.$router.push({name:"selectquestion",query:{paperid:e.data.paper_id}})}else{t.$router.push({name:"selectquestion",query:{chapterid:a.chapter_id,paperid:e.data.paper_id}})}}else{t.$bkMessage({message:e.message,theme:"error"})}})},function(e){t.dialogsetting.custom.visible=true;t.$bkMessage({message:"请检查输入",theme:"warning"})})},modifiypaper:function e(t){if(t.paperchapterid===-1){this.$router.push({name:"selectquestion",query:{paperid:t.id}})}else{this.$router.push({name:"selectquestion",query:{chapterid:t.paperchapterid,paperid:t.id}})}},open:function e(t){this.publishdialog.visible=true;this.selectpaper=t.id},openedit:function e(t){this.editdialog.custom.visible=true;this.selectdata.paperid=t.id;this.selectdata.papername=t.papername;this.selectdata.paperchapterid=t.paperchapterid;this.selectdata.papertype=t.types;this.selectdata.start=t.start;this.selectdata.end=t.end},validatedata:function e(){var t=this;if(this.edit===false){this.$refs.paperinfo.validate().then(function(e){var a={paper_name:t.selectdata.papername,chapter_id:t.selectdata.paperchapterid,types:t.selectdata.papertype,start_time:t.selectdata.start,end_time:t.selectdata.end};t.$http.put("/course/paper/",{course_id:t.CourseId,paper_id:t.selectdata.paperid,update_info:a}).then(function(e){if(e.result===true){t.$bkMessage({message:"保存成功",theme:"success"});t.getpaperlist();t.editdialog.custom.visible=false;t.selectdata.start=undefined;t.selectdata.end=undefined;t.edit=true}else{t.$bkMessage({message:e.message,theme:"error"})}})},function(e){t.$bkMessage({message:"请检查输入",theme:"warning"})})}else{this.$bkMessage({message:"保存成功",theme:"success"});this.editdialog.custom.visible=false}},cancel:function e(t){var a=this;this.$bkInfo({title:"确认取消发布？",confirmFn:function e(){a.docancel(t.id)}})},docancel:function e(t){var a=this;var r={status:"DRAFT"};this.$http.put("/course/paper/",{course_id:this.CourseId,paper_id:t,update_info:r}).then(function(e){if(e.result===true){a.$bkMessage({message:"取消成功！",theme:"success"})}else{a.$bkMessage({message:e.message,theme:"error"})}}).then(function(e){a.getpaperlist()})},publishpaper:function e(t){var a=this;var r=new Date;var i=new Date(t.end);if(r.getTime()>=i.getTime()){this.$bkMessage({message:"结束时间设置不合理，发布失败",theme:"error"})}else{var s={status:"RELEASE"};this.$http.put("/course/paper/",{course_id:this.CourseId,paper_id:t.id,update_info:s}).then(function(e){if(e.result===true){a.$bkMessage({message:"发布成功！",theme:"success"})}else{a.$bkMessage({message:e.message,theme:"error"})}a.getpaperlist()})}},markpaper:function e(t){this.$router.push({name:"correct_paper",query:{paperid:t.id,endTime:t.endtime}})},code:function e(t){var a=new Date;var r=new Date(t.end);if(a.getTime()>=r.getTime()){this.$bkMessage({message:"答卷时间已过",theme:"error"});this.getpaperlist()}else{this.$nextTick(function(){this.bindQRCode(t.id)})}},bindQRCode:function e(t){new n.default(this.$refs.qrCodeUrl,{text:String(t),width:200,height:200,colorDark:"#1768ef",colorLight:"#ffffff",correctLevel:n.default.CorrectLevel.H})},saveQrCode:function e(){var t=document.getElementById("qrCode").getElementsByTagName("canvas");var a=document.createElement("a");a.href=t[0].toDataURL("image/png").replace("image/png","image/octet-stream");a.download="答题二维码.png";a.click()}}};t.default=d},141:function(e,t,a){},177:function(e,t,a){"use strict";var r=a(141);var i=a.n(r);var s=i.a},191:function(e,t,a){"use strict";var r=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("div",[a("bk-dialog",{attrs:{theme:"primary","ok-text":"下载图片","cancel-text":"关闭","mask-close":false,"confirm-fn":e.saveQrCode,"header-position":e.viewQrCode.primary.headerPosition},on:{cancel:function(t){e.$refs.qrCodeUrl.innerHTML=""}},model:{value:e.viewQrCode.primary.visible,callback:function(t){e.$set(e.viewQrCode.primary,"visible",t)},expression:"viewQrCode.primary.visible"}},[a("div",{attrs:{id:"qrCodeBox"}},[a("div",{ref:"qrCodeUrl",staticClass:"qrcode",attrs:{id:"qrCode"}}),a("br"),e._v(" "),a("bk-tag",{attrs:{theme:"info"}},[e._v("请扫描上方二维码答题")])],1)]),e._v(" "),a("bk-dialog",{attrs:{width:"720","ok-text":"开始选题","auto-close":false,position:e.dialogsetting.custom.position,title:"新增试卷"},on:{confirm:e.check,cancel:function(t){e.$refs.addform.clearError(),e.formData.start=undefined,e.formData.end=undefined}},model:{value:e.dialogsetting.custom.visible,callback:function(t){e.$set(e.dialogsetting.custom,"visible",t)},expression:"dialogsetting.custom.visible"}},[a("bk-form",{ref:"addform",attrs:{model:e.formData,rules:e.rules1,"label-width":"200"}},[a("bk-form-item",{attrs:{required:true,"error-display-type":"normal",property:"papertype",label:"卷子类型:"}},[a("bk-radio-group",{model:{value:e.formData.papertype,callback:function(t){e.$set(e.formData,"papertype",t)},expression:"formData.papertype"}},[a("bk-radio",{attrs:{value:"EXAM"}},[e._v("测试卷")]),e._v(" "),a("bk-radio",{attrs:{value:"EXERCISE"}},[e._v("练习卷")])],1)],1),e._v(" "),a("bk-form-item",{staticStyle:{width:"460px"},attrs:{required:true,"error-display-type":"normal",property:"papername",label:"卷子名称:"}},[a("bk-input",{model:{value:e.formData.papername,callback:function(t){e.$set(e.formData,"papername",t)},expression:"formData.papername"}})],1),e._v(" "),a("bk-form-item",{staticStyle:{width:"460px"},attrs:{required:true,"error-display-type":"normal",property:"chapter",label:"所属章节:"}},[a("bk-select",{attrs:{searchable:""},model:{value:e.formData.chapter,callback:function(t){e.$set(e.formData,"chapter",t)},expression:"formData.chapter"}},e._l(e.chapterlist,function(e){return a("bk-option",{key:e.name,attrs:{id:e.id,name:e.name}})}),1)],1),e._v(" "),a("bk-form-item",{attrs:{required:true,"error-display-type":"normal",property:"start",label:"开始时间:"}},[a("bk-date-picker",{attrs:{"time-picker-options":e.timePickerOptions,type:"datetime"},model:{value:e.formData.start,callback:function(t){e.$set(e.formData,"start",t)},expression:"formData.start"}})],1),e._v(" "),a("bk-form-item",{attrs:{required:true,"error-display-type":"normal",property:"end",label:"结束时间:"}},[a("bk-date-picker",{attrs:{"time-picker-options":e.timePickerOptions,type:"datetime"},model:{value:e.formData.end,callback:function(t){e.$set(e.formData,"end",t)},expression:"formData.end"}})],1)],1)],1),e._v(" "),a("bk-dialog",{attrs:{width:"720",position:e.editdialog.custom.position,"ok-text":"保存","auto-close":false,title:"修改试卷信息"},on:{confirm:e.validatedata,cancel:function(t){e.edit=true,e.$refs.paperinfo.clearError(),e.selectdata.start=undefined,e.selectdata.end=undefined}},model:{value:e.editdialog.custom.visible,callback:function(t){e.$set(e.editdialog.custom,"visible",t)},expression:"editdialog.custom.visible"}},[a("bk-form",{ref:"paperinfo",attrs:{"label-width":"200",model:e.selectdata,rules:e.rules}},[a("bk-form-item",{attrs:{"error-display-type":"normal",label:"卷子类型:",required:true,property:"papertype"}},[a("bk-radio-group",{model:{value:e.selectdata.papertype,callback:function(t){e.$set(e.selectdata,"papertype",t)},expression:"selectdata.papertype"}},[a("bk-radio",{attrs:{disabled:e.edit,value:"EXERCISE"}},[e._v("练习卷")]),e._v(" "),a("bk-radio",{attrs:{disabled:e.edit,value:"EXAM"}},[e._v("测试卷")])],1)],1),e._v(" "),a("bk-form-item",{staticStyle:{width:"460px"},attrs:{"error-display-type":"normal",label:"卷子名称:",required:true,property:"papername"}},[a("bk-input",{attrs:{readonly:e.edit},model:{value:e.selectdata.papername,callback:function(t){e.$set(e.selectdata,"papername",t)},expression:"selectdata.papername"}})],1),e._v(" "),a("bk-form-item",{staticStyle:{width:"460px"},attrs:{"error-display-type":"normal",label:"所属章节:",property:"paperchapterid"}},[a("bk-select",{attrs:{searchable:"",readonly:e.edit},model:{value:e.selectdata.paperchapterid,callback:function(t){e.$set(e.selectdata,"paperchapterid",t)},expression:"selectdata.paperchapterid"}},e._l(e.chapterlist,function(e){return a("bk-option",{key:e.id,attrs:{id:e.id,name:e.name}})}),1)],1),e._v(" "),a("bk-form-item",{attrs:{required:true,"error-display-type":"normal",property:"start",label:"开始时间:"}},[a("bk-date-picker",{attrs:{clearable:!e.edit,readonly:e.edit,"time-picker-options":e.timePickerOptions,type:"datetime"},model:{value:e.selectdata.start,callback:function(t){e.$set(e.selectdata,"start",t)},expression:"selectdata.start"}})],1),e._v(" "),a("bk-form-item",{attrs:{required:true,"error-display-type":"normal",property:"end",label:"结束时间:"}},[a("bk-date-picker",{attrs:{clearable:!e.edit,readonly:e.edit,"time-picker-options":e.timePickerOptions,type:"datetime"},model:{value:e.selectdata.end,callback:function(t){e.$set(e.selectdata,"end",t)},expression:"selectdata.end"}})],1),e._v(" "),a("bk-form-item",[e.edit?a("bk-button",{attrs:{theme:"primary"},on:{click:function(t){e.edit=false}}},[e._v("编辑")]):e._e()],1)],1)],1),e._v(" "),a("bk-button",{attrs:{theme:"primary"},on:{click:function(t){e.dialogsetting.custom.visible=true}}},[e._v("新增试卷")]),e._v(" "),a("bk-table",{ref:"table",attrs:{height:"500px",data:e.paperlist,pagination:e.pagination}},[a("bk-table-column",{attrs:{align:"center",label:"试卷名",prop:"papername"}}),e._v(" "),a("bk-table-column",{attrs:{filters:e.typeFilters,"filter-method":e.typeFilterMethod,align:"center",label:"类型",width:"75",prop:"papertype"}}),e._v(" "),a("bk-table-column",{attrs:{align:"center",filters:e.chapterFilters,"filter-method":e.chapterFilterMethod,label:"所属章节",prop:"paperchapter"}}),e._v(" "),a("bk-table-column",{attrs:{align:"center",filters:e.statusFilters,"filter-method":e.statusFilterMethod,label:"状态",width:"75",prop:"paperstatus"}}),e._v(" "),a("bk-table-column",{attrs:{align:"center",label:"开始时间",prop:"starttime"}}),e._v(" "),a("bk-table-column",{attrs:{align:"center",label:"结束时间",prop:"endtime"}}),e._v(" "),a("bk-table-column",{attrs:{align:"center",label:"提交人数/总人数",prop:"rate"}}),e._v(" "),a("bk-table-column",{attrs:{align:"center",label:"操作",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.paperstatus==="草稿"?a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:t.row.paperstatus!=="草稿"},on:{click:function(a){e.publishpaper(t.row)}}},[e._v("发布")]):e._e(),e._v(" "),t.row.paperstatus!=="草稿"?a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){e.cancel(t.row)}}},[e._v("取消")]):e._e(),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:t.row.paperstatus!=="草稿"},on:{click:function(a){e.modifiypaper(t.row)}}},[e._v("选题")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:t.row.paperstatus!=="草稿"},on:{click:function(a){e.openedit(t.row)}}},[e._v("修改")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:t.row.isend},on:{click:function(a){e.viewQrCode.primary.visible=true,e.code(t.row)}}},[e._v("扫码")]),e._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:t.row.paperstatus!=="已发布"},on:{click:function(a){e.markpaper(t.row)}}},[e._v("批改")])]}}])})],1)],1)};var i=[];a.d(t,"a",function(){return r});a.d(t,"b",function(){return i})},84:function(e,t,a){"use strict";a.r(t);var r=a(191);var i=a(139);for(var s in i)if(s!=="default")(function(e){a.d(t,e,function(){return i[e]})})(s);var n=a(177);var d=a(2);var p=Object(d["a"])(i["default"],r["a"],r["b"],false,null,null,null);t["default"]=p.exports}}]);