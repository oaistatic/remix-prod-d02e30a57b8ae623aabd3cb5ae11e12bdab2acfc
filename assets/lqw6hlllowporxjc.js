const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ev2adu2vdjrwinvg.js","assets/eljox9y9liclbxjs.js","assets/mov0dqfy71k4mkbp.js","assets/root-bcm2adyk.css","assets/l0xkd1ou0a6b53wu.js","assets/q02ioa5nz1msdn73.js","assets/conversation-small-eplmind9.css","assets/btkmfibrorj6h94u.js","assets/ei22way1wz63smda.js","assets/gej2wzszabjtgedr.js"])))=>i.map(i=>d[i]);
import{m as e,q as p,aK as A,r as N,D as R,a5 as r,a6 as z,aD as T,aE as E,a7 as f,P as w,a as G,a2 as P,a$ as F,be as B,aw as k,bd as M,bN as C,d8 as d,bq as O}from"./eljox9y9liclbxjs.js";import{a1 as q,b1 as I,Y as U,aN as H,aC as y,ag as _,L as $,c as K,Z as J}from"./q02ioa5nz1msdn73.js";import{D as Y,B as Q}from"./l0xkd1ou0a6b53wu.js";import{J as W,a$ as V,G as Z,a4 as X,aJ as S,O as D}from"./mov0dqfy71k4mkbp.js";import{G as ee}from"./m4j20u3qgodeqw68.js";import{G as se}from"./hyxwkwiq2oxw44sy.js";import{t as te,d as L,b as ae,v as ie}from"./btkmfibrorj6h94u.js";import{G as oe}from"./otsqj6ya0ikst6d2.js";import{m as re}from"./gej2wzszabjtgedr.js";function ne({resource:s,grayedOut:t,className:i}){var o,n;const a=(o=s.gizmo.vanity_metrics)==null?void 0:o.num_conversations_str;return e.jsxs("div",{className:p("flex w-full flex-grow items-center gap-4 overflow-hidden",i),children:[e.jsx(se,{isFirstParty:!!((n=s.gizmo.tags)!=null&&n.includes(q.FirstParty)),src:s.gizmo.display.profile_picture_url??void 0,className:p("h-12 w-12 flex-shrink-0",t&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"overflow-hidden text-ellipsis break-words",children:[e.jsx("span",{className:"line-clamp-2 text-sm font-semibold leading-tight",children:s.gizmo.display.name}),e.jsx("span",{className:"line-clamp-3 text-xs",children:s.gizmo.display.description}),e.jsxs("div",{className:"mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",children:[e.jsx(ee,{gizmo:s,className:"text-xs",hideLink:!0}),a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[8px]",children:"•"}),e.jsx(W,{className:"h-3 w-3"}),a]})]})]})]})}function le({gizmoResource:s}){const t=A(),[i,a]=N.useState(!1);return s.gizmo.share_recipient===I.Private?null:e.jsx(Y.Item,{onClick:async o=>{o.stopPropagation(),o.preventDefault();try{const n=s.gizmo.short_url?te(s.gizmo.short_url):`https://chatgpt.com${L(s)}`;await U(n,t,o),a(!0),setTimeout(()=>{a(!1)},2e3)}catch(n){R.addError(n);return}},icon:V,children:i?e.jsx(r,{...v.copiedURL}):e.jsx(r,{...v.copyLink})})}const v=z({copyLink:{defaultMessage:"Copy link",id:"GizmoInformation.copyLink"},copiedURL:{defaultMessage:"Copied URL",id:"GizmoInformation.copiedURL"}}),ce=T(()=>E(()=>import("./ev2adu2vdjrwinvg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>s.GizmoKeepInSidebarMenuItem)),de=4,h=f.div`font-bold mt-6`,me=s=>k({queryFn:async()=>_.getAbout(s),queryKey:["gizmo","about",{gizmoId:s}]}),xe=s=>k({queryFn:async()=>_.getCreatorSlice({creatorId:s}),queryKey:["gizmo","creator",{creatorId:s}],enabled:s!=null}),ue=s=>{switch(s.type){case d.BROWSER:return{title:l.browsing};case d.PYTHON:return{title:l.dataAnalysis};case d.DALLE:return{title:l.dalle};case d.MEMORY:return{title:l.memory,description:l.memoryDescription};case d.JIT_PLUGIN:return{title:l.actions,description:l.actionsDescription};default:return null}},ge=({tools:s})=>{const t=$(s??[],a=>a.type),i=K(t.map(ue).filter(a=>a!=null)??[]);return i.length===0?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(h,{className:"mb-2",children:e.jsx(r,{id:"gizmo.about.capabilitiesHeader",defaultMessage:"Capabilities"})}),i.map(a=>e.jsxs("div",{className:"flex flex-row items-start gap-2 py-1 text-sm",children:[e.jsx(Z,{className:"icon-sm mt-0.5 text-green-600"}),e.jsxs("div",{children:[e.jsx(r,{...a.title}),a.description!=null&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(r,{...a.description})})]})]},a.title.id))]})},x=f.div`flex flex-col justify-center items-center gap-2 border-l border-token-border-heavy first:border-0 w-48 mt-4 px-2`,u=f.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`,g=f.div`text-xs text-token-text-tertiary`,pe=({gizmoResource:s})=>e.jsxs(Q,{contentAlign:"end",sideOffset:4,triggerButton:e.jsx(M,{color:"ghost",icon:X}),children:[e.jsx(ce,{gizmoResource:s}),e.jsx(le,{gizmoResource:s})]}),fe=({aboutBlock:s})=>{switch(s.type){case"generic_title_subtitle":return e.jsxs(x,{children:[e.jsx(u,{children:s.title}),e.jsx(g,{children:s.subtitle})]});case"rating":return e.jsxs(x,{children:[e.jsxs(u,{children:[e.jsx(S,{className:"icon-sm"}),s.avg]}),e.jsx(g,{children:s.count_str})]});case"category":return s.category_ranking!=null?e.jsxs(x,{children:[e.jsx(u,{children:e.jsx(r,{id:"gizmo.about.trendingRank",defaultMessage:"#{rank}",values:{rank:s.category_ranking}})}),e.jsx(g,{children:e.jsx(r,{id:"gizmo.about.inCategory",defaultMessage:"in {category} {locale}",values:{category:s.category_str,locale:s.category_locale_str??""}})})]}):e.jsxs(x,{children:[e.jsx(u,{children:s.category_str}),e.jsx(g,{children:e.jsx(r,{id:"gizmo.about.category",defaultMessage:"Category"})})]})}},he=({blocks:s})=>e.jsx("div",{className:"flex justify-center",children:s.map(t=>e.jsx(fe,{aboutBlock:t},t.type))}),je=({href:s,onClick:t,children:i})=>e.jsx(re.div,{whileTap:{scale:.98},className:"flex",children:e.jsxs(O,{to:s,onClick:t,className:p("group relative ml-2 h-14 flex-grow rounded-xl border border-token-border-medium bg-token-main-surface-primary px-4 hover:bg-token-main-surface-secondary focus:outline-none"),children:[e.jsx("div",{className:"flex h-full items-center",children:e.jsx("div",{className:"line-clamp-2 text-sm",children:i})}),e.jsx("div",{className:"absolute -bottom-px -left-2 h-3 w-4 border-b border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary",children:e.jsx("div",{className:"h-3 w-2 rounded-br-full border-b border-r border-token-border-medium bg-token-main-surface-primary"})}),e.jsx("div",{className:"absolute bottom-0 right-2 top-0 hidden items-center group-hover:flex",children:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-token-main-surface-primary",children:e.jsx(D,{className:"icon-md text-token-text-primary"})})})]})}),be=({gizmo:s,onClose:t})=>{var o;const i=C("1825130190").value,a=(o=s.gizmo.display.prompt_starters)==null?void 0:o.slice(0,de);return a==null||a.length===0||!i?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(h,{children:e.jsx(r,{id:"gizmo.about.conversationStartersHeader",defaultMessage:"Conversation Starters"})}),e.jsx("div",{className:"mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",children:a.map((n,j)=>e.jsx(ye,{gizmo:s,prompt:n,onClick:t},j))})]})};function ye(s){const{gizmo:t,prompt:i,onClick:a}=s,o=ie(t,i);return e.jsx(je,{href:(o==null?void 0:o.toString())??"#",onClick:a,children:i})}const ve=({reviewStats:s})=>C("1825130190").value?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(h,{children:e.jsx(r,{id:"gizmo.about.ratingsHeader",defaultMessage:"Ratings"})})}),s!=null?[5,4,3,2,1].map(i=>e.jsxs("div",{className:"flex flex-row items-center gap-2 py-1 text-xl font-semibold",children:[e.jsxs("div",{className:"icon-lg relative",children:[e.jsx(S,{className:"icon-lg text-green-500"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-[11px] text-white",children:i})]}),e.jsx("div",{className:"h-2.5 flex-grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",children:e.jsx("div",{className:"h-full bg-green-500",style:{width:`${((s==null?void 0:s.by_rating[i-1])??0)*100}%`}})})]},i)):e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"gizmo.about.ratings.notEnoughRatings",defaultMessage:"Not enough ratings yet"})})]}):null,Ae=({gizmoId:s,creatorId:t})=>{const i=H(y.GPTDetails),a=()=>J.closeModal(y.GPTDetails);return i?e.jsx(Ne,{gizmoId:s,creatorId:t,onClose:a}):null},Ne=({gizmoId:s,creatorId:t,onClose:i,children:a})=>{var b;const o=me(s),{data:n}=xe(t),j=(b=o.data)==null?void 0:b.gizmo,m=ae(s),c=m==null?void 0:m.data;return N.useEffect(()=>{w.logEvent(G.showDetailModal,{gizmo_id:s})},[s]),e.jsx(P,{isOpen:!0,onClose:i,type:"success",hideSeparator:!0,showCloseButton:!0,noPadding:!0,className:"flex h-[calc(100vh-25rem)] min-h-[80vh] max-w-xl flex-col",children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden px-2 py-4",children:o.isLoading||m.isLoading?e.jsx("div",{className:"flex h-40 items-center justify-center pb-10",children:e.jsx(F,{})}):j==null||c==null||o.data==null?e.jsx("div",{className:"flex flex-col gap-4 pb-10",children:e.jsx(r,{id:"gizmo.about.notFound",defaultMessage:"GPT not found"})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex flex-grow flex-col gap-4 overflow-y-auto px-6 pb-20 pt-16",children:[e.jsx("div",{className:"absolute top-0",children:e.jsxs("div",{className:"fixed left-4 right-4 z-10 flex items-center justify-end bg-gradient-to-b from-token-main-surface-primary to-transparent pb-2",children:[c&&e.jsx(pe,{gizmoResource:c}),e.jsx(B,{onClick:i})]})}),e.jsx("div",{className:"absolute bottom-[64px]",children:e.jsx("div",{className:"fixed left-4 right-4 z-10 flex min-h-[64px] items-end bg-gradient-to-t from-token-main-surface-primary to-transparent px-2",children:a})}),e.jsx(oe,{gizmo:c,className:"!h-fit",avatarClassName:"!h-20 !w-20"}),e.jsx(he,{blocks:o.data.about_blocks}),e.jsx(be,{gizmo:c,onClose:i}),e.jsx(ge,{tools:c.tools}),e.jsx(ve,{reviewStats:o.data.review_stats}),n&&e.jsx(ze,{gizmos:n.items})]})})})})};function ze({gizmos:s}){return s.length>0?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(h,{children:e.jsx(r,{id:"gizmo.about.moreByHeader",defaultMessage:"More by {creatorName}",values:{creatorName:s[0].gizmo.author.display_name}})})}),e.jsx("div",{className:p("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),children:s&&s.map(t=>e.jsx("a",{onClick:()=>{w.logEvent(G.detailClickGizmo,{gizmo_id:t.gizmo.id})},href:L(t),className:"h-fit min-w-fit rounded-xl bg-token-main-surface-secondary px-1 py-4 md:px-3 md:py-4 lg:px-3",children:e.jsx(ne,{resource:t})},t.gizmo.id))})]}):null}const Re=s=>e.jsx("div",{className:"flex flex-grow flex-col items-center",children:e.jsxs(M,{color:"primary",className:"h-12 w-full",icon:D,...s,children:[e.jsx(r,{id:"gizmo.about.startChat",defaultMessage:"Start Chat"}),s.children]})}),l=z({browsing:{id:"gizmo.about.tools.browsing",defaultMessage:"Browsing"},dataAnalysis:{id:"gizmo.about.tools.dataAnalysis",defaultMessage:"Code Interpreter & Data Analysis"},dalle:{id:"gizmo.about.tools.dalle",defaultMessage:"DALL·E Images"},memory:{id:"gizmo.about.tools.memory",defaultMessage:"Memory"},actions:{id:"gizmo.about.tools.actions",defaultMessage:"Actions"},actionsDescription:{id:"gizmo.about.tools.actionsDescription",defaultMessage:"Retrieves or takes actions outside of ChatGPT"},memoryDescription:{id:"gizmo.about.tools.memoryDescription",defaultMessage:"Learns from previous chats to improve future conversations"}});export{Ne as G,Re as a,Ae as b,le as c,ne as d};
//# sourceMappingURL=lqw6hlllowporxjc.js.map
