import{l as e,bd as T,a0 as u,aH as E,a1 as J,bi as ne,a9 as re,W as oe,r as C,a2 as le,M as q,R as A,v as de,e8 as me,de as ce,X as ue}from"./egi9yqe8h527q0wn.js";import{al as ge,di as fe,g as pe,dj as z,dk as xe,c5 as ye,W as L}from"./kovfiydeinrm6blw.js";import{ab as $,q as je,C as _e}from"./e6itquh41uv61tg7.js";import{g as he,b as ve}from"./bue7ssrf5lr74ywi.js";import{T as F,a as Me,e as we,c as Pe,n as Se}from"./d1idnzvl0pqu9wz9.js";import{a as S,T as Te,i as be}from"./fsldftql3hgxsggg.js";import"./hv5dp5z9yhve225l.js";import"./fv2lx90pr3xg3map.js";import"./mk14lgsmrpmo2zsf.js";import"./efbz2xeupq2vm8nx.js";import"./hjyufao59r59iwke.js";import"./mulk6actptn6vk4t.js";import"./fudx0zpt1yfrknlw.js";import"./er0ahr1yq57dmlc2.js";import"./z0c6vm4df23yv2bb.js";import"./i04pcwd992jm5mp6.js";import"./fkawcdcy1eq7glw1.js";import"./ed4yr7r1n1jkra8g.js";function Ne({action:t,handleUserAction:s,userActionParams:i,displayParams:n}){return t.type==="deny"?e.jsx(T,{color:"secondary",size:"small",onClick:()=>{s({...i,actionData:{type:"deny",...t.deny}})},children:e.jsx(u,{...t.name==="decline"?j.decline:j.deny})}):t.type==="allow"?e.jsx(T,{color:"primary",size:"small",onClick:()=>{s({...i,actionData:{type:"allow",...t.allow}})},children:e.jsx(u,{...t.name==="allow"?j.allow:j.confirm})}):t.type==="always_allow"?e.jsx(T,{color:"secondary",size:"small",onClick:async()=>{s({...i,actionData:{type:"always_allow",...t.always_allow}})},children:e.jsx(u,{...j.alwaysAllow})}):t.type==="oauth_redirect"?e.jsx(T,{color:"primary",size:"small",onClick:()=>{ze(t.oauth_redirect,i.clientThreadId,i.turnGizmo)},children:e.jsx(u,{...j.signInButton,values:{domain:n.domain}})}):t.type==="contact_gizmo"?e.jsx(T,{color:"secondary",size:"small",onClick:async()=>{s({...i,actionData:{type:"contact_gizmo",...t.contact_gizmo}})},children:e.jsx(u,{...j.allow})}):null}async function ze(t,s,i){const n=F.getServerThreadId(s),a=Me.getConversationMode(s)?.kind===E.GizmoTest,r=n&&!a?he(n,i):window.location.href;ge.doOAuthRedirect(t.gizmo_id,t.gizmo_action_id,t.domain,r,a)}const j=J({alwaysAllow:{id:"jitPluginMessage.alwaysAllow",defaultMessage:"Always Allow"},allow:{id:"jitPluginMessage.allow",defaultMessage:"Allow"},decline:{id:"jitPluginMessage.decline",defaultMessage:"Decline"},confirm:{id:"jitPluginMessage.confirm",defaultMessage:"Confirm"},deny:{id:"jitPluginMessage.deny",defaultMessage:"Deny"},signInButton:{id:"jitPluginMessage.signInButton",defaultMessage:"Sign in with {domain}"}}),b="openaiFileIdRefs";function st({messages:t,clientThreadId:s,isLastTurnInConversation:i,onRequestCompletion:n}){const a=ne(),{pathname:r}=re(),[o,...d]=t,l=oe(),c=we(),_=Pe(s),x=o.message.metadata?.gizmo_id??_,h=Se(s,x),K=fe(h)&&h.gizmo_id===x,v=ve(x,K)?.data,[Q,U]=C.useState(!1),R=pe(o.message.recipient);let k;if(R?.functionName!=null&&v?.tools!=null){for(const m of v.tools)if(Ce(m,R.functionName)){k=m;break}}const Y=d.filter(m=>m.message.metadata?.jit_plugin_data?.from_server?.type==="debug"),X=d.filter(m=>!["debug","send_test"].some(y=>y===m.message.metadata?.jit_plugin_data?.from_server?.type)),{uiState:p,jitPluginData:g,fileAttachments:Z}=De(o,X,i),M=g?.from_server?.type!=="denied_by_user"?g?.from_server?.body.domain:k?.metadata?.domain,G=k?.metadata?.privacy_policy_url;if(C.useEffect(()=>{if(h?.kind===E.GizmoInteraction&&H(g?.from_client)?.type!=="oauth_success"&&g?.from_server?.type==="oauth_required"&&a.query.oauth_success){const{oauth_success:m,...y}=a.query;if(m){for(const W of g.from_server.body.actions)if(W.type==="oauth_redirect"){B({assistantMessage:o,allMessages:t,clientThreadId:s,onRequestCompletion:n,actionData:{type:"oauth_success",target_message_id:W.oauth_redirect.target_message_id},conversationMode:h});return}a.replace({pathname:r,query:y})}}},[h,a,o,t,s,n,g,i,r]),!v)return null;let w=S.Running,P=M?f.running:f.starting,I={domain:M},N=null;if(p===7)return null;if(p===4||p===5){w=S.Paused,P=f.confirmingSimple;const m={gizmoName:v.gizmo.display.name,domain:M};N=l.formatMessage(f.confirmParamsTitle,m),I={...m,title:y=>e.jsxs("div",{className:"inline-flex items-center gap-1 text-sm",children:[y,e.jsx($,{className:"icon-sm"})]}),subtitle:y=>e.jsx("div",{className:"text-xs",children:y})}}else p===1?(w=S.Finished,P=f.finished,N=l.formatMessage(f.sentParamsTitle,{gizmoName:v.gizmo.display.name,domain:M}),I={domain:M}):p===2?(w=S.Error,P=f.error):(p===3||p===6)&&(w=S.Stopped,P=p===6?f.declined:f.stopped);const ee={assistantMessage:o,allMessages:t,clientThreadId:s,turnGizmo:v,onRequestCompletion:n,conversationMode:h},te={domain:M},D=g?.from_server?.type!=="denied_by_user"?g?.from_server?.body.actions.map((m,y)=>e.jsx(Ne,{action:m,displayParams:te,handleUserAction:B,userActionParams:ee},y)):null,se=P?l.formatMessage(P,I):null,ae=le.div`flex gap-2 flex-wrap mt-1 empty:hidden`,V=g?O(g):null,Oe=V?.[b]??[],ie=!!V;return e.jsxs(e.Fragment,{children:[e.jsx(Ie,{debugMessages:Y}),e.jsx(Te,{highlightedCommand:se,status:w,showWorkUserSetting:!1,children:ie?e.jsx(Ae,{privacyPolicyUrl:G,data:g,isPromptingForPermission:w===S.Paused}):null}),e.jsx(ae,{children:Z?.map(m=>e.jsx(z,{file:m.name,fileId:m.id,width:"wide",alwaysShowData:!0,showDownloadButton:!0,downloadLink:m.download_url,contextConnectorInfo:xe(m.context_connector_info)},m.id))}),(p===5||p===4)&&D&&!c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex gap-2",children:D}),e.jsxs("div",{className:"my-1 flex items-center gap-2 text-sm",children:[e.jsx(je,{className:"icon-sm"}),e.jsx(u,{...f.confirmingSubtitle})]})]}),N!==null&&e.jsx(Ee,{title:N,privacyPolicyUrl:G,data:g,onClose:()=>U(!1),isOpen:Q,actionButtons:D})]})}function ke({messageMetadata:t}){const[s,i]=C.useState(!1);return e.jsxs("div",{className:"my-2 flex flex-col text-sm",children:[e.jsxs("div",{className:"flex flex-row items-center hover:cursor-pointer",onClick:()=>{i(!s)},children:[s?e.jsx($,{className:"icon-sm"}):e.jsx(_e,{className:"icon-sm"}),e.jsx("div",{className:"font-semibold",children:t.display_message})]}),s&&e.jsx("pre",{children:JSON.stringify(t.data,null,2)})]})}function Ie({debugMessages:t}){return t.length===0?null:e.jsx("div",{children:t.map((s,i)=>{const n=s.message.metadata?.jit_plugin_data?.from_server;return n&&n.type==="debug"?e.jsx(ke,{messageMetadata:n.body},i):null})})}function De(t,s,i){if(t.message.metadata?.jit_plugin_data?.from_server?.type==="send_test")return{uiState:7};if(t.message.metadata?.jit_plugin_data?.from_server?.type==="debug")return{uiState:3};if(s.some(a=>a.message.content.content_type===q.SystemError))return{uiState:2};if(be(t.message))return{uiState:3};for(let a=s.length-1;a>=0;a--){const r=s[a];if(r.message.metadata?.invoked_plugin){const l=[];return s.forEach(c=>{const _=c.message.metadata?.attachments?.filter(x=>x.display_files_from_actions_ext);_&&l.push(..._)}),{uiState:1,jitPluginData:r.message.metadata.jit_plugin_data,fileAttachments:l}}const o=H(r.message.metadata?.jit_plugin_data?.from_client);if(o!=null){if(o?.type==="contact_gizmo")return{uiState:1,jitPluginData:s[a-1]?.message.metadata?.jit_plugin_data};if(o?.type==="deny")return{uiState:6};if(o?.type==="oauth_success")return{uiState:0,jitPluginData:r.message.metadata?.jit_plugin_data};break}const d=r.message.metadata?.jit_plugin_data?.from_server;if(d?.type==="preview"&&i)return{uiState:0,jitPluginData:r.message.metadata?.jit_plugin_data};if(d?.type==="confirm_action"&&i)return{uiState:5,jitPluginData:r.message.metadata?.jit_plugin_data};if(d?.type==="oauth_required"&&i)return{uiState:4,jitPluginData:r.message.metadata?.jit_plugin_data}}const n=s.find(a=>a.message.author.role===A.Tool&&a.message.author.name?.split(".")[0]==="gizmo_contacts");return n?{uiState:1,jitPluginData:n.message.metadata?.jit_plugin_data}:{uiState:i?0:3}}function B({actionData:t,assistantMessage:s,allMessages:i,clientThreadId:n,turnGizmo:a,onRequestCompletion:r,conversationMode:o}){const d={id:de(),author:{role:A.Tool,name:s.message.recipient},content:{content_type:q.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:t}}};o=o??{kind:E.PrimaryAssistant},a?.gizmo.id&&(d.metadata.gizmo_id=a.gizmo.id),F.updateTree(n,c=>{c.addNode(d.id,d,i[i.length-1].message.id,A.Tool,{completionSampleFinishTime:Date.now()})}),F.setThreadCurrentLeafId(n,d.id);const l=new ye;r({type:me.Next,promptId:d.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:o},turnTracker:l})}function Ce(t,s){if(t.type!==ce.JIT_PLUGIN||!t.metadata.json_schema)return!1;let i=!1;function n(a){for(const r in a)r==="operationId"&&a[r]===s&&(i=!0),a[r]&&typeof a[r]=="object"&&n(a[r])}return n(t.metadata.json_schema),i}function O(t){if(t.from_server?.type==="confirm_action"||t.from_server?.type==="oauth_required"||t.from_server?.type==="preview")return t.from_server.body.params}function Ae({data:t,privacyPolicyUrl:s,isPromptingForPermission:i}){const n=t?O(t):null,r=(n?.[b]??[]).map((o,d)=>{const l=o.name.startsWith("dalle-");let c=o.name;return l&&(c=`${c}.webp`),e.jsx(z,{file:c,fileId:o.id},d)});return e.jsxs("div",{className:"mb-4 mt-1 divide-y divide-token-border-light overflow-hidden rounded-xl border border-token-border-light",children:[e.jsxs("div",{className:"flex justify-between bg-token-main-surface-tertiary px-4 py-2 text-sm text-token-text-secondary",children:[i?e.jsx(u,{id:"JITPluginMessage.params.sharing.present",defaultMessage:"The following will be shared:"}):e.jsx(u,{id:"JITPluginMessage.params.sharing.past",defaultMessage:"The following was shared:"}),s&&e.jsx("a",{href:L(s),className:"text-token-text-primary",target:"_blank",rel:"noreferrer",children:e.jsx(u,{...f.privacyPolicyLink})})]}),n&&Object.keys(n).map((o,d)=>o===b?null:e.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2 font-mono",children:[e.jsx("span",{className:"text-token-text-tertiary",children:`${o}:`}),e.jsx("span",{children:JSON.stringify(n[o],null,2)})]},d)),r.length>0&&e.jsx("div",{className:"px-4 py-2",children:r})]})}function Fe({title:t,data:s,privacyPolicyUrl:i,actionButtons:n}){const a=s?O(s):null,r=a?.[b]??[],o=r.filter(l=>!l.mime_type?.startsWith("image/")).map((l,c)=>e.jsx(z,{file:l.name,fileId:l.id},c)),d=r.filter(l=>l.mime_type?.startsWith("image/")).map((l,c)=>{const _=l.name.startsWith("dalle-");let x=l.name;return _&&(x=`${x}.webp`),e.jsx(z,{file:x,fileId:l.id},c)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-semibold",children:t}),a&&Object.keys(a).map((l,c)=>l===b?null:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:l}),e.jsx("div",{children:JSON.stringify(a[l],null,2)})]},c)),d.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(u,{id:"jitPluginMessage.paramsModalImages",defaultMessage:"Images"})}),d]}),o.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(u,{id:"jitPluginMessage.paramsModalFiles",defaultMessage:"Files"})}),o]}),e.jsxs("div",{className:"flex flex-row items-center justify-between pt-4",children:[n!==null&&e.jsx("div",{className:"space-x-2",children:n}),i&&e.jsx("a",{className:"text-xs font-semibold",href:L(i),children:e.jsx(u,{...f.privacyPolicyLink})})]})]})}function Ee({title:t,data:s,privacyPolicyUrl:i,onClose:n,isOpen:a,actionButtons:r}){return e.jsx(ue,{isOpen:a,onClose:n,type:"success",hideSeparator:!0,showCloseButton:!0,size:"normal",title:e.jsx(u,{id:"jitPluginMessage.paramsModalTitle",defaultMessage:"Review action"}),children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden",children:e.jsx("div",{className:"space-y-2",children:e.jsx(Fe,{title:t,data:s,privacyPolicyUrl:i,actionButtons:r})})})})}function H(t){if(t&&"user_action"in t){const s=t.user_action;t={...t,...s.data},"target_message_id"in t&&s.target_message_id&&(t.target_message_id=s.target_message_id)}return t}const f=J({starting:{id:"jitPluginMessage.starting",defaultMessage:"Starting action"},confirming:{id:"jitPluginMessage.confirmingV4",defaultMessage:"<title>{gizmoName} wants to talk to {domain}</title><subtitle>Only allow sites you trust</subtitle>"},confirmingSimple:{id:"jitPluginMessage.confirming.simple",defaultMessage:"{gizmoName} wants to talk to {domain}"},confirmingSubtitle:{id:"jitPluginMessage.confirming.subtitle",defaultMessage:"Only allow sites you trust."},running:{id:"jitPluginMessage.runningV4",defaultMessage:"Talking to {domain}"},finished:{id:"jitPluginMessage.finishedV4",defaultMessage:"Talked to {domain}"},stopped:{id:"jitPluginMessage.stoppedV4",defaultMessage:"Stopped talking to {domain}"},error:{id:"jitPluginMessage.errorV5",defaultMessage:"Error talking to {domain}"},declined:{id:"jitPluginMessage.declined",defaultMessage:"You declined this action"},ranTest:{id:"jitPluginMessage.ranTest",defaultMessage:"Tested {operationName}"},confirmParamsTitle:{id:"jitPluginMessage.confirmParamsTitleV3",defaultMessage:"{gizmoName} wants to share this info with {domain}"},sentParamsTitle:{id:"jitPluginMessage.sentParamsTitleV2",defaultMessage:"{gizmoName} sent this info to {domain}"},privacyPolicyLink:{id:"jitPluginMessage.privacyPolicyLinkV2",defaultMessage:"Privacy policy"}});export{st as JITPluginMessage};
//# sourceMappingURL=jcvw44z3ffu1kjxv.js.map
