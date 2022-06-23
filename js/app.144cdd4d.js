(function(){"use strict";var __webpack_modules__={4500:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9137),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__),_utils_directives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7279),vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2179),element_plus__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(918),element_plus__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7543),element_plus__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1858),element_plus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8846),element_plus__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2300),element_plus__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(480),element_plus__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(4161),element_plus__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(6831),element_plus__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(3894),element_plus__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(5568),element_plus__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(8969),element_plus__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(2785),_element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4726);let _app=null;const _EVENT_="formChange",_FROM_EVENT_="formEvent",EVENT_CHANGE="change",TEXT_EL="span",FROM_INS="_quickFrom",FROM_C="quick-form__label--container",FROM_C_EL="div",FORM_EL_IMG="img",HandleProps=["children","options","directives","formElementType","formElementLabel","key","tirrgerEvents","textValue","currentPropPath","itemStyle","preventDefaultEvent","component","slotOptions","optionLabelKey","optionValueKey","mainType","subType","mountModelValue","showControll","childrenOptions"],TemplateReg=/\{\{.*?\}\}/g,emitVal=e=>(t,n)=>(_,r={})=>{e.$emit(_EVENT_,{type:t,key:n,val:_,...r})},emitEvent=e=>(t,n)=>_=>{e.$emit(_FROM_EVENT_,{type:t,key:n,val:_})},Throttling=function(e,t){let n=null;return function(..._){let r;n&&clearTimeout(n),n=setTimeout((()=>{t.apply(r,_),clearTimeout(n)}),e)}},VnodeImg={props:{imgOption:{type:Object,default:()=>({})},imgData:{type:Object,default:()=>({})},imgControll:{type:Array,default:()=>[]},showControll:{type:Boolean,default:!0},currentIndex:{type:Number,default:null}},render(){const e=this,t=e.imgOption,n=e.imgControll,_=e.showControll,r=e.currentIndex,o={preview:()=>ElementCreator.icon({children:[_element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_2__.Gq5],...i,onClick:u("preview")}),download:()=>ElementCreator.icon({children:[_element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_2__.UWx],...i,onClick:u("download")}),delete:()=>ElementCreator.icon({children:[_element_plus_icons_vue__WEBPACK_IMPORTED_MODULE_2__.HG3],...i,onClick:u("delete")})},a=()=>Array.isArray(n)?n.map((e=>e in o?o[e]():"")):[],l=()=>(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(FORM_EL_IMG,{src:e.imgData.url,height:100,...t,class:"quick-form__imglist--item"}),i={size:16,color:"#fff"},u=t=>()=>{e.$emit("imgEvent",t,r)},c=()=>(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(FROM_C_EL,{class:"quick-form__imglist--itemModal"},a());let s=null;return s=(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(FROM_C_EL,{class:"quick-form__imglist--itemwarp",style:"height: 100px"},_&&n.length>0?[l(),c()]:[l()]),s}},VnodeImgList={props:{listOption:{type:Object,default:()=>({})},imgList:{type:Array,default:()=>[]}},render(){const e=this,t=e.listOption;let n=e.imgList;Array.isArray(n)||(n=[],console.error("传入的图片数据结构不是个数组！"));const _=function(t,n){e.$emit(t,n)};return(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(FROM_C_EL,{class:FROM_C},n.map?n.map(((e,n)=>(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(VnodeImg,{imgData:e,imgOption:t.itemStyle||{},imgControll:t.controll,showControll:"boolean"!=typeof t.showControll||t.showControll,currentIndex:n,onImgEvent:_}))):[])}},ElementCreator={switch:(e,t)=>{t.emit("change",e.key);const n=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_4__.OX,{...n,...t.createEventMap(e,t),modelValue:t.getModelValue(e)}),e,t)},time:(e,t)=>{const n=t.emit("change",e.key),_=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_5__.ah,{..._,...t.createEventMap(e,t),modelValue:t.getModelValue(e),"onUpdate:modelValue":Throttling(50,(function(_){t.upDateFromData(_,e.mountModelValue||e.key),n(_)}))}),e,t)},date:(e,t)=>{const n=t.clearHandleProps(e),_=t.emit("change",e.key);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_6__.i,{...n,...t.createEventMap(e,t),modelValue:t.getModelValue(e),"onUpdate:modelValue":Throttling(50,(function(n){t.upDateFromData(n,e.mountModelValue||e.key),_(n)}))}),e,t)},imgList:(e,t)=>{const n=t.emitEvent("formEvent",e.formElementType);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(VnodeImgList,{imgList:t.GetParentModelVal(e.currentPropPath),listOption:e,...e,onPreview:function(t){n({type:"preview",key:e.key,index:t})},onDelete:function(t){n({type:"delete",key:e.key,index:t})},onDownload:function(t){n({type:"download",key:e.key,index:t})}}),e,t)},upload:(e,t)=>{const n="detail"==e.subType,_=t.clearHandleProps(e);let r=e.accept;r&&Array.isArray(r)&&(delete e.accept,r=r.join(","));const o=function(e){const n=e.mountModelValue||e.key,{name:_,url:r}=e.alias||{name:"name",url:"url"};(t.scope.formData[n]||[]).forEach((e=>{"name"in e&&"url"in e||(e.name=e[_],e.url=e[r])}));const o=()=>{if(!(n in t.scope.formData))return console.warn("invalid depend key "+n),[];try{return t.scope.formData[n]}catch(e){return console.warn("invalid depend key "+n),[]}};return{fileList:o()}},a=n?{class:"quick-form__upload--detail",...o(e),...t.createEventMap(e,t)}:{...t.createEventMap(e,t),...o(e),..._};return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_7__.LW,{...a,accept:r},(()=>n?[]:t.createElementDeep(e))),e,t)},icon:e=>{let t=[];const n=ClearHandleProps(e);try{t=(e.children||[]).map((e=>(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(e)))}catch(_){}return(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_8__.gn,{...n},(()=>t))},text:(e,t)=>{let n,_;t&&t.getModelValue&&(n=t&&t.getModelValue(e),_=t.createEventMap(e,t));const r=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(TEXT_EL,{..._,...r},[t.parseTempSyntax(e.textValue)||n||""]),e,t)},container:(e,t)=>{const n=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)("div",{...t.createEventMap(e,t),...n},t.createElementDeep(e)),e,t)},inputNumber:(e,t)=>t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_9__.d6,{modelValue:t.getModelValue(e),...t.createEventMap(e,t),...e}),e),radio:(e,t)=>{const n=e.children;return delete e.children,t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_10__.rh,{modelValue:t.getModelValue(e),onClick:Throttling(50,(()=>{t.upDateFromData(e.label,e.mountModelValue||e.key)})),...e},(()=>n)),e,t)},checkbox:(e,t)=>{const n=e.children;return delete e.children,t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_11__.Xb,{modelValue:!!Array.isArray(t.getModelValue(e))&&t.getModelValue(e).indexOf(e.label)>=0,onClick:Throttling(50,(function(){const n=t.getModelValue(e),_=n.indexOf(e.label);_>=0?n.splice(_,1):n.push(e.label)})),...e},(()=>n)),e,t)},input:(e,t)=>{if("number"==e.subType)return ElementCreator.inputNumber(e,t);const n=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_12__.EZ,{modelValue:t.getModelValue(e),...t.createEventMap(e,t),placeholder:e.placeholder,type:e.subType?e.subType:"text",...n}),e,t)},select:(e,t)=>{const n=t.clearHandleProps(e),_=e.options,r=[],o=e.optionLabelKey||"label",a=e.optionValueKey||"value",l=(e=[])=>{(e||[]).forEach((e=>{const t=(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_13__.BT,{value:e[a],label:e[o]});r.push(t)}))};return l(t.getComponentDeps(_)),t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_13__.km,{modelValue:t.getModelValue(e),...t.createEventMap(e,t),...n},(()=>r)),e,t)},button:(e,t)=>{const n=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_14__.mi,n,(()=>t.createElementDeep(e))),e,t)},formFrame:(e,t)=>{const n=[],_=t.GetLayout();return e.forEach((e=>{n.push(ElementCreator.formItemFrame(e,t))})),(0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_15__.ly,{rules:t.scope.rules,model:t.scope.formData,ref:FROM_INS,..._},(()=>n))},formItemFrame:(e,t)=>{const n=e.formElementType||"container",_=e.formElementLabel,r=e.key,o=t.GetCombinationType(n);if("slot"==o.mainType){if(!o.subType||!(o.subType in ElementCreator))return!o.subType&&e.component?t.renderComponents(e):ElementCreator.container({children:[o.subType?"无法找到插槽："+o.subType:"请传入自定义组件"]},t);ElementCreator[o.subType](e,t)}const a=(e,t,n)=>{if(e in ElementCreator){const _=[],r=t.childrenOptions;return Array.isArray(r)&&"text"!==e?(delete t.childrenOptions,r.forEach((r=>{const o=r.formElementType?n.GetCombinationType(r.formElementType):{};r.formElementType&&(e=o.mainType),_.push(ElementCreator[e]({key:t.key,...r,...o},n))})),_):[ElementCreator[e]({...t,...o},n)]}return[]},l=t.clearHandleProps(e);return t.parseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(element_plus__WEBPACK_IMPORTED_MODULE_15__.nH,{prop:r,label:t.parseTempSyntax(_),...l},(()=>a(o.mainType,{...e,...o},t))),e,t)}},UperHelper=e=>{const t=e.split(""),n=t.shift().toUpperCase();return`on${n}${t.join("")}`},ClearHandleProps=e=>{const t={};return Object.keys(e).forEach((n=>{HandleProps.includes(n)||(t[n]=e[n])})),t},eventMap=(()=>{const e=["input","change","blur","mouseover","mouseenter"];e.default="input";const t=["change"];t.default="change";const n=["click"];n.default="click";const _=["preview","remove","success","error","progress","change","exceed","upload","remove"];_.default="change";const r=["click","mouseover","mouseenter"];r.default="click";const o=["click","mouseover","mouseenter","change"];o.default="change";const a=["click","mouseover","mouseenter","change"];a.default="click";const l=["click","mouseover","mouseenter","change","blur","focus","calendarChange","panelChange","visibleChange"];l.default="change";const i=["click","mouseover","mouseenter","change","blur","focus","calendarChange","panelChange","visibleChange"];i.default="change";const u=["click","mouseover","mouseenter","change"];u.default="change";const c={input:e,select:t,text:n,upload:_,container:r,checkbox:o,radio:a,date:l,time:i,switch:u},s=(e,t)=>{if(e in c){if(Array.isArray(t)){const n=[];return t.forEach((_=>{c[e].includes(_)?n.push({originalEvent:_,mountEvent:UperHelper(_)}):console.warn("未在元素类型："+e+"找到："+t+"方法")})),n}return c[e].default||console.warn("can not found default event in "+e),[{originalEvent:c[e].default,mountEvent:UperHelper(c[e].default)}]}return console.warn("未定义:"+e+"元素类型"),[]},p=e=>c[e]?.default;return{getEvents:s,getDefaultEvent:p}})(),Methods={methods:{getFrom(){const e=this;return e.$refs[FROM_INS]},addItem(e){const t=this;t.quickOptions.formOptions.push(e),t._updateComponents()},_updateComponents(){const e=this;e.$nextTick((()=>{e.$forceUpdate()}))},resetRules(e){const t=this,n="StateLib"+t._raw;if(n in window){const n=window["StateLib"+t._raw].getDeleteKey(),_=Object.keys(e).reduce(((t,_)=>(-1==n.indexOf(_)&&(t[_]=e[_]),t)),{});t.$emit("ruleChange",_)}return new Promise(((e,t)=>{setTimeout((()=>{e("")}),200)}))}}},_Data={data:()=>({_quickOptions:{},defaultValue:"未匹配到key",_raw:(new Date).getTime()})},Props={props:{formData:{type:Object,default:()=>({})},quickOptions:{type:Object,default:()=>({})},depOptions:{type:Object,default:()=>({})},rules:{type:Object,default:()=>({})}}},MountMainUtils=function(myThis){const _emitVal=emitVal(myThis),_emitEvent=emitEvent(myThis),_UTILS={},GetCombinationType=e=>{const t=e.split(":"),n=t[0],_=t[1];return{mainType:n,subType:_}},getModelValue=e=>{let t,n=null;return e?("string"==typeof e?n=e:(n=e.key,t=e.mountModelValue),t&&t in myThis.formData&&(n=t),n in myThis.formData?myThis.formData[n]:null):null},createEventMap=(e,t)=>{if(!e.formElementType)return{};const n=GetCombinationType(e.formElementType).mainType,_=eventMap.getEvents(n,e.tirrgerEvents),r={};return _.forEach((({mountEvent:_,originalEvent:o})=>{const a=_emitVal(o,e.key),l=eventMap.getDefaultEvent(n);r[_]=o==l?Throttling(50,((n,_)=>{if(e.preventDefaultEvent||t.upDateFromData(n,e.mountModelValue||e.key),"select"==e.formElementType){const _=e.optionValueKey||"value",r=e.optionLabelKey||"label",o=e.redundantKeys||[],l=t.getComponentDeps(e.options).filter((e=>e[_]==n)).map((e=>({value:e[_],label:e[r],...o.reduce(((t,n)=>(t[n]=e[n],t)),{})})));return a(n,{option:l[0]})}a(n)})):a})),r},GetLayout=()=>myThis.quickOptions.layout,upDateFromData=(e,t)=>{if(t in myThis.formData){if(e instanceof Event)return;myThis.formData[t]=e}},getMountModelValue=e=>{const t={},n=e.mountModelValue;return"string"==typeof n&&(t[n]=myThis.formData[e.key]),t},createElementDeep=e=>{const t=e.children||[],n=e.key,_=[...e.currentPropPath||[],n],r=[];if(Array.isArray(t))return t.forEach((e=>{if("string"==typeof e)return r.push(ElementCreator.text({textValue:e},_UTILS));const t=e.formElementType;t in ElementCreator?(e.currentPropPath=_,r.push(ElementCreator[t]({...e,key:n},_UTILS))):console.warn("validate child option:"+JSON.stringify(e))})),r},GetParentModelVal=e=>{const t=e.shift(),n=getModelValue(t);return n==myThis.defaultValue&&console.warn("can not found parent prop "+t),n},ParseDirective=(vnode,options,utils)=>{const directives=options.directives;if(Array.isArray(directives)){const s=directives.map((ds=>{const directive=ds[0],QueryString="_UTILS.scope.formData",QueryDepString="_UTILS.scope.depOptions",condition=ds[1].replace(new RegExp("scope","g"),QueryString).replace(new RegExp("depScope","g"),QueryDepString);return[(0,vue__WEBPACK_IMPORTED_MODULE_3__.Q2)(directive),eval(condition),utils,options.key]}));vnode=(0,vue__WEBPACK_IMPORTED_MODULE_3__.wy)(vnode,s)}return vnode},RenderComponents=e=>{const t=e.slotOptions||{},n=t.props||[],_=t.receiver||[],r=n.reduce(((e,t,n)=>{try{e[t.prop]={..._UTILS.scope.formData,..._UTILS.scope.depOptions}[t.value]}catch(_){console.log(_)}return e}),{}),o=_UTILS.emitEvent("formEvent",e.formElementType),a=_.reduce(((t,n,_)=>(t[UperHelper(n)]=function(t){o({type:n,key:e.key,value:t})},t)),{});return ParseDirective((0,vue__WEBPACK_IMPORTED_MODULE_3__.h)(e.component,{...r,...a}),e,_UTILS)},GetComponentDeps=e=>"string"==typeof e?e in myThis.depOptions?myThis.depOptions[e]:(console.warn("invalid depName:"+e),[]):Array.isArray(e)?e:void console.warn("invalid depName type:"+typeof e+", must be Array or String"),ParseTempSyntax=function(e){if("string"==typeof e){const t=e.match(TemplateReg);t&&t.length>0&&t.map((t=>{const n=t.replace("{{","").replace("}}",""),_=Object.assign({},_UTILS.scope.formData,_UTILS.scope.depOptions),r=_[n];e=e.replace(t,r)}))}return e},RulesState=(()=>{const e=[];return{setRules(e){},resetState(t,n){const _=e.indexOf(t);n?_>=0&&e.splice(_,1):-1==_&&e.push(t)},getDeleteKey(){return e},resetRules(e){window["StateLib"+myThis._raw]=this}}})();return _UTILS.scope=myThis,_UTILS.emit=_emitVal,_UTILS.getModelValue=getModelValue,_UTILS.eventMap=eventMap,_UTILS.createEventMap=createEventMap,_UTILS.GetCombinationType=GetCombinationType,_UTILS.GetLayout=GetLayout,_UTILS.upDateFromData=upDateFromData,_UTILS.getMountModelValue=getMountModelValue,_UTILS.createElementDeep=createElementDeep,_UTILS.GetParentModelVal=GetParentModelVal,_UTILS.emitEvent=_emitEvent,_UTILS.parseDirective=ParseDirective,_UTILS.renderComponents=RenderComponents,_UTILS.clearHandleProps=ClearHandleProps,_UTILS.getComponentDeps=GetComponentDeps,_UTILS.parseTempSyntax=ParseTempSyntax,_UTILS.rulesState=RulesState,_UTILS},MainRender=function(){return{render(){const e=this,t=e.quickOptions.formOptions||[],n=(e.depOptions,MountMainUtils(e));n.rulesState.setRules(e.quickOptions.rules);const _=ElementCreator.formFrame(t,n);return _}}},mount=function(e){e.component("quick-form",{...Props,..._Data,...Methods,..._utils_directives__WEBPACK_IMPORTED_MODULE_1__.Z,...MainRender()}),_app=e};__webpack_exports__["Z"]={install:mount}},7279:function(e,t){const n="sif",_={directives:{[n]:{updated:(()=>{let e=null,t=null;return(_,r)=>{const o=r.arg;if(!o)return;const a=_.style.display,l=r.modifiers;o.scope._rules;null==e&&(e=a),o.rulesState.resetState(l,r.value),o.scope.$nextTick((()=>{r.value?_.style.display=e:_.style.display="none"})),t&&clearTimeout(t),t=setTimeout((()=>{o.rulesState.resetRules(n)}),200)}})()}}};t["Z"]=_},4200:function(e,t,n){var _=n(1775),r=n(2179),o=n(5905),a=n(5854),l=n(3638),i=n(4126);l.ZP.setup((0,i.Z)());const u={wrapper:{padding:40,background:"#f7df1e",textAlign:"center"},title:{font:{size:40,weight:900},color:"#24292e"},link:{color:"#24292e","&:hover":{opacity:.5}}},c={code:String},s=(e,t)=>{const n=a.j6.create(e?.refs.monaco,{theme:"vs-dark",readOnly:!1,value:t,minimap:{enabled:!1},tabSize:2,scrollBeyondLastLine:!1});return n};var p=(0,r.aZ)({props:c,emits:["getCode"],setup(e,{emit:t}){const{classes:n}=l.ZP.createStyleSheet(u).attach(),_=(0,r.FN)(),{code:a}=(0,o.BK)(e);let i=null;(0,r.bv)((()=>{i?i.setValue(a.value):(i=s(_,a.value),(0,r.Y3)((()=>{console.log(i.getAction(["editor.action.formatDocument"]))})))}));const c=()=>{t("getCode",i.getValue())};return(0,r.YP)(a,(()=>{i&&i.setValue(a.value)})),function(){return(0,r.Wm)("div",{style:"width:600px; height: 800px; display:inline-block; float:left;position:relative"},[(0,r.Wm)("div",{style:"width: 600px; height: 800px; display:inline-block;float:left",ref:"monaco"},null),(0,r.Wm)("span",{onClick:c,style:"position: absolute;top: 0px;right: 0;color: #fff;background: green;display: inline-block; padding: 2px 8px;border-radius: 2px;cursor:pointer"},[(0,r.Uk)("运行")])])}}}),m=n(4463),d=(0,r.aZ)({setup(){const e=(0,o.qj)({RefCode:'\n      FromData.value = {\n        account: "",\n        bankType: null,\n        othersAccount: "",\n        amount: 0,\n        remark: 1111,\n        date: "2022-05-25",\n        timeData: new Date(2000, 1, 1, 12, 0, 0),\n        daterangeData: ["2022-05-01", "2022-05-05"],\n        state: 2,\n        checkboxData: [2],\n        fileList: [],\n        switchData: false,\n      };\n      QuickForm = {\n        formOptions: [\n            {\n        formElementLabel: "开户行",\n        formElementType: "select",\n        key: "bankType",\n        placeholder: "请选择银行",\n        options: [\n          { label: "中国银行", value: 1 },\n          { label: "建设银行", value: 2 },\n          { label: "农业银行", value: 3 },\n          { label: "建设银行", value: 4 },\n        ],\n      },\n      {\n        tirrgerEvents: ["mouseover"],\n        formElementLabel: "账号：",\n        formElementType: "input",\n        key: "account",\n        placeholder: "请填写银行账号",\n      },\n      {\n        formElementLabel: "对方账号：",\n        formElementType: "input",\n        key: "othersAccount",\n        placeholder: "请填写对方账号",\n      },\n      {\n        formElementLabel: "转账金额：",\n        // formElementType: "container", // 如果没有第一层级的 type 那么默认是container\n        childrenOptions: [\n          {\n            formElementType: "input:number",\n            key: "amount", // mountModelValue: "amount", mountModelValue 绑定优先级大于 key\n          },\n          {\n            formElementType: "text",\n            textValue: "元",\n            style: "margin-left: 10px; color:red",\n          },\n        ],\n      },\n      {\n        formElementLabel: "备注",\n        formElementType: "input:textarea",\n        placeholder: "请填写备注",\n        key: "remark",\n      },\n      {\n        formElementLabel: "到账类型",\n        formElementType: "radio",\n        key: "state",\n        childrenOptions: [\n          { label: 1, children: ["立即"] },\n          { label: 2, children: ["延时"] },\n        ],\n      },\n      {\n        formElementLabel: "日期",\n        directives: [["sif", "scope.state == 2"]],\n        childrenOptions: [\n          {\n            formElementType: "date",\n            key: "date",\n            type: "date",\n            placeholder: "预约日期",\n            format: "YYYY/MM/DD",\n            valueFormat: "YYYY-MM-DD",\n          },\n          {\n            formElementType: "time",\n            key: "timeData",\n            type: "time",\n            placeholder: "时间",\n          },\n        ],\n      },\n      {\n        formElementLabel: "日期",\n        formElementType: "text",\n        textValue: "{{date}}   {{timeData}}",\n      },\n      {\n        formElementLabel: "通知类型",\n        formElementType: "checkbox",\n        key: "checkboxData",\n        childrenOptions: [\n          { label: 1, children: ["电话通知"] },\n          { label: 2, children: ["短信通知"] },\n          { label: 3, children: ["邮件通知"] },\n        ],\n      },\n      {\n        formElementLabel: "上传凭证",\n        formElementType: "upload",\n        key: "fileList",\n        action: "#",\n        listType: "picture-card",\n        autoUpload: false,\n        children: [\n          {\n            formElementType: "icon",\n            children: [\'上传\']\n          },\n        ],\n      },\n      {\n        formElementLabel: "开关",\n        formElementType: "switch",\n        key: "switchData"\n      }\n        ],\n        layout: {\n      labelWidth: 100,\n      size: "default",\n      labelPosition: "right",\n    },\n      };\n      \n      '}),t=t=>{e.RefCode=t};return()=>(0,r.Wm)("div",null,[(0,r.Wm)(p,{code:e.RefCode,onGetCode:t},null),(0,r.Wm)(m.Z,{code:e.RefCode},null)])}}),E=n(3815);(0,E.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(4500);n(4766);(0,_.ri)(d).use(f.Z).mount("#app")},4463:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2179),vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5905);__webpack_exports__["Z"]=(0,vue__WEBPACK_IMPORTED_MODULE_0__.aZ)({props:{code:String},setup(props){const{code:code}=(0,vue__WEBPACK_IMPORTED_MODULE_1__.BK)(props),FromData=(0,vue__WEBPACK_IMPORTED_MODULE_1__.iH)({});let QuickForm={};const upDateQuickElement=()=>{FromData.value={},QuickForm={},eval(code.value)};return upDateQuickElement(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.YP)(code,upDateQuickElement),function(){return(0,vue__WEBPACK_IMPORTED_MODULE_0__.Wm)("div",{style:"width:800px;height:800px;display:inline-block;float:left"},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.Wm)((0,vue__WEBPACK_IMPORTED_MODULE_0__.up)("quick-form"),{"form-data":FromData.value,quickOptions:QuickForm},null)])}}})}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.amdO={}}(),function(){var e=[];__webpack_require__.O=function(t,n,_,r){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],_=e[u][1],r=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](n[l])}))?n.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(u--,1);var i=_();void 0!==i&&(t=i)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,_,r]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,n){var _,r,o=n[0],a=n[1],l=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(_ in a)__webpack_require__.o(a,_)&&(__webpack_require__.m[_]=a[_]);if(l)var u=l(__webpack_require__)}for(t&&t(n);i<o.length;i++)r=o[i],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(u)},n=self["webpackChunkquick_form_v1"]=self["webpackChunkquick_form_v1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(4200)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.144cdd4d.js.map