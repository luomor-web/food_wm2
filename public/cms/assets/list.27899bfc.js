var F=(c,f,s)=>new Promise((g,h)=>{var b=o=>{try{t(s.next(o))}catch(_){h(_)}},p=o=>{try{t(s.throw(o))}catch(_){h(_)}},t=o=>o.done?g(o.value):Promise.resolve(o.value).then(b,p);t((s=s.apply(c,f)).next())});import{p as M}from"./goods.6983e12f.js";import{d as j,r as D,o as G,I as S,C as O,c as Q,b as l,w as a,x as i,f as n,p as R,j as T,a as u,g as B,i as w,t as m,A as W,N as q,h as H,E,O as J,Q as K,W as X,_ as Y}from"./index.aa0178c7.js";const Z=c=>(R("data-v-77a5e365"),c=c(),T(),c),ee={class:"page-article-list right-main"},le={class:"flex"},te={class:"top-search flex"},ae=["onClick"],oe=Z(()=>u("div",{class:"pagin"},null,-1)),ne=j({__name:"list",setup(c){const f=D([]);let s=D({border:!0,stripe:!1});G(()=>{g()});const g=()=>{S().getPros.then(t=>{f.value=t})},h=t=>F(this,null,function*(){yield M(t).then(o=>{E.success("\u5220\u9664\u6210\u529F")}),yield S().setPros(),yield g()}),b=J((t,o)=>{console.log(t,o),X(t,o).then(_=>{E.success("\u66F4\u65B0\u6210\u529F")})},600),p=O({key:"",date:[]});return(t,o)=>{const _=n("plus"),$=n("el-icon"),v=n("el-button"),k=n("router-link"),U=n("el-input"),x=n("el-date-picker"),C=n("el-col"),y=n("el-checkbox"),I=n("el-row"),r=n("el-table-column"),N=n("Loading"),A=n("el-image"),V=n("el-switch"),L=n("el-popconfirm"),P=n("el-table"),z=K("auth");return B(),Q("div",ee,[l(I,{class:"top-search-box mb-3"},{default:a(()=>[l(C,{span:14},{default:a(()=>[u("div",le,[l(k,{to:"/pro/list/add"},{default:a(()=>[l(v,{type:"primary"},{default:a(()=>[l($,{class:"add-btn",color:"#fff"},{default:a(()=>[l(_)]),_:1}),w(" "+m(t.$t("msg.table.add")),1)]),_:1})]),_:1}),u("div",te,[l(U,{modelValue:p.key,"onUpdate:modelValue":o[0]||(o[0]=e=>p.key=e),class:"mx-3 search-input"},null,8,["modelValue"]),l(x,{type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",modelValue:p.date,"onUpdate:modelValue":o[1]||(o[1]=e=>p.date=e)},null,8,["modelValue"]),l(v,{class:"mx-3",type:"success"},{default:a(()=>[w(m(t.$t("msg.table.search")),1)]),_:1})])])]),_:1}),l(C,{span:10,class:"text-end"},{default:a(()=>[u("div",null,[l(y,{modelValue:i(s).stripe,"onUpdate:modelValue":o[2]||(o[2]=e=>i(s).stripe=e),label:t.$t("msg.profile.interval")},null,8,["modelValue","label"]),l(y,{modelValue:i(s).border,"onUpdate:modelValue":o[3]||(o[3]=e=>i(s).border=e),label:t.$t("msg.profile.border")},null,8,["modelValue","label"])])]),_:1})]),_:1}),l(P,{data:f.value,stripe:i(s).stripe,border:i(s).border,style:{width:"100%"},class:"table-list"},{default:a(()=>[l(r,{align:"center",sortable:"",label:t.$t("msg.table.ranking"),width:"100"},{default:a(e=>[l(U,{modelValue:e.row.sort,"onUpdate:modelValue":d=>e.row.sort=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),l(r,{prop:"title",align:"center",label:t.$t("msg.table.goodsName"),width:"380"},{default:a(e=>[u("span",null,m(e.row.title),1)]),_:1},8,["label"]),l(r,{prop:"url",align:"center",label:t.$t("msg.table.thumbnail"),width:"240"},{default:a(e=>[l(A,{class:"list-box-pic",src:i(W).BASE_URL+e.row.url,alt:e.$index,fit:"fill"},{error:a(()=>[l($,null,{default:a(()=>[l(N)]),_:1})]),_:2},1032,["src","alt"])]),_:1},8,["label"]),l(r,{align:"center",sortable:"",label:t.$t("msg.table.price"),width:"120"},{default:a(e=>[u("span",null,m(e.row.price),1)]),_:1},8,["label"]),l(r,{align:"center",label:t.$t("msg.table.recommend"),width:"100"},{default:a(e=>[u("div",{onClick:d=>i(b)("is_top",e.row.id)},[l(V,{modelValue:e.row.is_top,"onUpdate:modelValue":d=>e.row.is_top=d,"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])],8,ae)]),_:1},8,["label"]),l(r,{align:"center",label:t.$t("msg.table.hot"),width:"100"},{default:a(e=>[l(V,{modelValue:e.row.is_hot,"onUpdate:modelValue":d=>e.row.is_hot=d,onClick:d=>i(b)("is_hot",e.row.id),"active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["label"]),l(r,{align:"center",label:t.$t("msg.table.hidden"),width:"100"},{default:a(e=>[l(V,{modelValue:e.row.is_hidden,"onUpdate:modelValue":d=>e.row.is_hidden=d,"active-value":1,"inactive-value":0,onClick:d=>i(b)("is_hidden",e.row.id)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["label"]),l(r,{align:"center",label:t.$t("msg.table.operation")},{default:a(e=>[l(k,{to:"/pro/list/add?id="+e.row.id},{default:a(()=>[l(v,{class:"mx-2",size:"small",title:e.$index,plain:""},{default:a(()=>[w(m(t.$t("msg.table.edit")),1)]),_:2},1032,["title"])]),_:2},1032,["to"]),l(L,{title:"\u662F\u5426\u5220\u9664",onConfirm:d=>h(e.row.id)},{reference:a(()=>[q((B(),H(v,{size:"small",type:"danger",plain:""},{default:a(()=>[w(m(t.$t("msg.table.remove")),1)]),_:1})),[[z,["ArticleDel"]]])]),_:2},1032,["onConfirm"])]),_:1},8,["label"])]),_:1},8,["data","stripe","border"]),oe])}}});const re=Y(ne,[["__scopeId","data-v-77a5e365"]]);export{re as default};
