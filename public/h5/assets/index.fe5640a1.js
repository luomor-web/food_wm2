import{c as e,d as t,e as a,h as s,v as l,k as r,A as d,i as u,l as n,u as o,r as i,w as c,y as p,q as f,x as y,f as _,F as m,E as h,G as v,H as g,g as b,I as w,D as x}from"./index.325fe786.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as q}from"./coupons.13e4275e.js";import{u as j,a as T}from"./order.d922e690.js";import{_ as F,f as C,a as S,b as L,c as D}from"./pros.834e8d62.js";var I=k({__name:"a",props:{data:{type:[],required:!0},fun:{type:Function,required:!0},sitetype:{type:String,required:!0}},setup:n=>(o,i)=>{const c=d,p=u;return e(),t(p,{class:"mx-3 bg-white h-38 rounded-xl shadow-md my-1"},{default:a((()=>[s(p,{class:"flex w-full h-full justify-center items-center"},{default:a((()=>[1!=n.sitetype?(e(),t(p,{key:0,class:"la w-[50%] text-center border border-solid border-top-0 border-bottom-0 border-left-0 border-gray-300"},{default:a((()=>[s(p,{onClick:i[0]||(i[0]=e=>n.fun(0))},{default:a((()=>[s(c,{class:"w-16 h-16",src:"https://mail.ruhuashop.com//uploads/images/ts.png",mode:""}),s(p,null,{default:a((()=>[l("店内")])),_:1})])),_:1})])),_:1})):r("v-if",!0),0!=n.sitetype?(e(),t(p,{key:1,class:"la w-[50%] text-center border border-solid border-top-0 border-bottom-0 border-left-0 border-gray-300"},{default:a((()=>[s(p,{onClick:i[1]||(i[1]=e=>n.fun(1))},{default:a((()=>[s(c,{class:"w-16 h-16",src:"https://mail.ruhuashop.com//uploads/images/ts.png",mode:""}),s(p,null,{default:a((()=>[l("外卖")])),_:1})])),_:1})])),_:1})):r("v-if",!0)])),_:1})])),_:1})}},[["__scopeId","data-v-bf5afeb0"]]);const A={__name:"b",props:{data:{type:[],required:!0},fun:{type:Function,required:!0}},setup:s=>(s,l)=>{const r=u;return e(),t(r,null,{default:a((()=>[n("div",{class:"w-full flex flex-wrap"},"aaa")])),_:1})}},B={__name:"index",props:{data:{type:[],required:!0}},setup(s){const l=o(),d=e=>{l.setFoodAndTable(e),p({url:"/pages/lists/lists"})},n=i();return c((()=>{const{site_type:e}=l.sys;n.value=e})),(l,o)=>{const i=u;return e(),t(i,null,{default:a((()=>["a"==s.data.child?(e(),t(I,{key:0,sitetype:n.value,data:s.data.data,fun:d},null,8,["sitetype","data"])):r("v-if",!0),"b"==s.data.child?(e(),t(A,{key:1,sitetype:n.value,data:s.data.data,fun:d},null,8,["sitetype","data"])):r("v-if",!0)])),_:1})}}},O={__name:"a",props:{data:{type:[],required:!0},fun:{type:Function,required:!0}},setup(r){const n=()=>{p({url:"../../pages/index/coupons/coupons"})};return(r,o)=>{const i=d,c=u;return e(),t(c,{class:"flex mx-3 h-14 bg-gray-200 rounded-md items-center justify-center mt-3",onClick:n},{default:a((()=>[s(i,{class:"w-8 h-8",src:q,mode:""}),l(" 优惠券 ")])),_:1})}}};var E=k({},[["render",function(s,r){const d=u;return e(),t(d,null,{default:a((()=>[l(" coupon b ")])),_:1})}]]);const G={__name:"index",props:{data:{type:[],required:!0}},setup(s){const l=e=>{e.id&&e.type&&d(e.id,e.type)},d=(e,t)=>{f(t,e)};return(d,n)=>{const o=u;return e(),t(o,null,{default:a((()=>["a"==s.data.child?(e(),t(O,{key:0,data:s.data.data,fun:l},null,8,["data"])):r("v-if",!0),"b"==s.data.child?(e(),t(E,{key:1,data:s.data.data,fun:l},null,8,["data"])):r("v-if",!0)])),_:1})}}},H={__name:"a",props:{data:{type:[],required:!0},fun:{type:Function,required:!0}},setup(l){const d=()=>{p({url:"../../pages/index/point/point"})};return(l,o)=>{const i=u;return e(),t(i,{class:"flex m-5 justify-between items-center"},{default:a((()=>[s(i,{class:"",onClick:d},{default:a((()=>[n("p",{class:"py-2"},"我的积分"),n("p",{class:"text-gray-500"},"积分可用于消费")])),_:1}),r(' <view class="text-center w-20" @click="onToQrcode">\r\n      <view class="flex justify-center">\r\n        <img\r\n          class="w-14 h-14"\r\n          src="https://mail.ruhuashop.com/h5/static/images/home/home_icon_erweima.png"\r\n        />\r\n      </view>\r\n      <view class="text-gray-500 w-full">二维码</view>\r\n    </view> \r\n\r\n    <view class="absolute right-28 w-1px h-20 bg-gray-300"></view>\r\n    ')])),_:1})}}};var N=k({},[["render",function(s,r){const d=u;return e(),t(d,null,{default:a((()=>[l(" point b ")])),_:1})}]]);const Q={__name:"index",props:{data:{type:[],required:!0}},setup(s){const l=e=>{e.id&&e.type&&d(e.id,e.type)},d=(e,t)=>{f(t,e)};return(d,n)=>{const o=u;return e(),t(o,null,{default:a((()=>["a"==s.data.child?(e(),t(H,{key:0,data:s.data.data,fun:l},null,8,["data"])):r("v-if",!0),"b"==s.data.child?(e(),t(N,{key:1,data:s.data.data,fun:l},null,8,["data"])):r("v-if",!0)])),_:1})}}},Y={__name:"a",props:{data:{type:[],required:!0},foodType:{type:Boolean,required:!0},desk:{type:Object,required:!0},fun:{type:Function,required:!0}},setup(d){const n=()=>{p({url:"../../pages/lists/address/address"})};return(o,i)=>{const c=h,p=u;return e(),t(p,{class:"p-2 mb-1"},{default:a((()=>[r(" 店内就餐 "),0==d.foodType?(e(),t(p,{key:0,class:"flex items-center justify-between"},{default:a((()=>[s(p,{class:"flex justify-start"},{default:a((()=>[s(c,{class:"mx-1 font-bold"},{default:a((()=>[l(y(d.desk.name),1)])),_:1})])),_:1}),s(p,{class:""},{default:a((()=>[s(p,{class:"text-white h-5 w-15 bg-gray-300 text-center rounded-full text-xs leading-5"},{default:a((()=>[l("店内点餐")])),_:1})])),_:1})])),_:1})):(e(),_(m,{key:1},[r(" 配送 "),s(p,{class:"flex justify-between mx-2",onClick:n},{default:a((()=>[s(p,null,{default:a((()=>[s(c,{class:"font-bold"},{default:a((()=>[l("请添加收货地址：")])),_:1})])),_:1}),s(p,{class:"text-white h-5 w-10 bg-gray-300 text-center rounded-full text-xs leading-5"},{default:a((()=>[l("配送")])),_:1})])),_:1})],2112))])),_:1})}}},$={__name:"b",props:{data:{type:[],required:!0},foodType:{type:Boolean,required:!0},desk:{type:Object,required:!0},fun:{type:Function,required:!0}},setup:s=>(s,r)=>{const d=u;return e(),t(d,null,{default:a((()=>[l(" search b ")])),_:1})}},z={__name:"index",props:{data:{type:[],required:!0}},setup(s){const l=o(),d=j(),n=e=>{e.id&&e.type&&p(e.id,e.type)},p=(e,t)=>{f(t,e)},y=i(),_=i();y.value=l.foodType,_.value={id:0,name:"",state:0};return c((()=>{const e=l.tableNum;if(!(e<0)){if(0==e){const e={id:0,name:"点餐",state:0,order_id:0};return _.value=e,void d.setDesk(e)}(e=>{v(e).then((e=>{if(e.id<1)return void g({url:"/pages/404/404?msg=餐桌号错误"});const t={id:e.id,name:e.name,state:e.state,order_id:e.order_id};_.value=t,d.setDesk(t)}))})(e)}})),(l,d)=>{const o=u;return e(),t(o,{class:"bg-white"},{default:a((()=>["a"==s.data.child?(e(),t(Y,{key:0,desk:_.value,data:s.data.data,fun:n,foodType:y.value},null,8,["desk","data","foodType"])):r("v-if",!0),"b"==s.data.child?(e(),t($,{key:1,desk:_.value,data:s.data.data,fun:n,foodType:y.value},null,8,["desk","data","foodType"])):r("v-if",!0)])),_:1})}}};var J=k({__name:"a",props:{proList:{type:[],required:!0},category:{type:[],required:!0},fun:{type:Function,required:!0}},setup(r){const d=o(),f=i(0),h=i(!1),v=()=>{f.value>0&&p({url:"/pages/my/order/detail?id="+f.value})};return c((()=>{f.value=T.desk.order_id,T.desk.order_id>0&&0==d.login_type&&(h.value=!0)})),(d,o)=>{const i=u,c=w;return e(),t(i,{class:"components-menu-a relative"},{default:a((()=>[s(c,{"scroll-top":0,"scroll-y":"true",class:"scroll-Y h-84vh",onScrolltoupper:d.upper,onScrolltolower:d.lower,onScroll:d.scroll},{default:a((()=>[s(i,{class:"flex w-full"},{default:a((()=>[s(i,{class:"w-[25%] min-h-84vh bg-white overflow-hidden pt-4"},{default:a((()=>[(e(!0),_(m,null,b(r.category,((u,o)=>(e(),t(i,{key:o,class:"text-center h-16 w-full mb-8",onClick:e=>r.fun(o)},{default:a((()=>[s(i,{class:"flex justify-center"},{default:a((()=>[n("img",{class:"w-12 h-12 rounded-full",src:d.$g_img+u.url},null,8,["src"])])),_:2},1024),s(i,{class:"block text-md mt-1"},{default:a((()=>[l(y(u.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),s(i,{class:"pl-1 w-[75%] overflow-hidden"},{default:a((()=>[s(i,null,{default:a((()=>[n("img",{class:"w-full h-150px overflow-hidden",src:"https://mail.ruhuashop.com//uploads/images/6125c15b1faf4.jpg"})])),_:1}),(e(!0),_(m,null,b(r.proList,((a,s)=>(e(),t(F,{key:s,item:a},null,8,["item"])))),128))])),_:1})])),_:1})])),_:1},8,["onScrolltoupper","onScrolltolower","onScroll"]),h.value?(e(),t(i,{key:1,onClick:v,class:"absolute right-0 bottom-60 w-14 h-14 bg-yellow-600 rounded-half opacity-70 text-center pt-4 text-white"},{default:a((()=>[l("订单 ")])),_:1})):(e(),t(C,{key:0}))])),_:1})}}},[["__scopeId","data-v-3a3533c8"]]);var K=k({},[["render",function(s,r){const d=u;return e(),t(d,null,{default:a((()=>[l(" coupon b ")])),_:1})}]]);const M={__name:"index",props:{data:{type:[],required:!0}},setup(s){const l=i([]),d=i([]);x((()=>{S("top").then((e=>{l.value=e})),L().then((e=>{const t=o.concat(e);d.value=t}))}));const n=e=>{if(0==e&&S("hot").then((e=>{l.value=e})),1==e&&S("new").then((e=>{l.value=e})),e>1){const t=d.value[e].id;D(t).then((e=>{l.value=e}))}},o=[{id:0,name:"热销",img_id:0,sort:1,url:"/uploads/imgs/1/62a2b5dadd38e.jpg"},{id:0,name:"新品",img_id:0,sort:0,url:"/uploads/imgs/1/62a2b5dadd38e.jpg"}];return(o,i)=>{const c=u;return e(),t(c,null,{default:a((()=>["a"==s.data.child?(e(),t(J,{key:0,proList:l.value,category:d.value,fun:n},null,8,["proList","category"])):r("v-if",!0),"b"==s.data.child?(e(),t(K,{key:1,proList:l.value,category:d.value,fun:n},null,8,["proList","category"])):r("v-if",!0)])),_:1})}}};export{B as _,G as a,Q as b,z as c,M as d};