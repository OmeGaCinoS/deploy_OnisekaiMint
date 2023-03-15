import{a as le,_ as ce}from"./index-a6207b15.js";const de=Symbol(),Z=Object.getPrototypeOf,J=new WeakMap,fe=e=>e&&(J.has(e)?J.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),ue=e=>fe(e)&&e[de]||null,ee=(e,t=!0)=>{J.set(e,t)},q=e=>typeof e=="object"&&e!==null,j=new WeakMap,k=new WeakSet,pe=(e=Object.is,t=(s,E)=>new Proxy(s,E),n=s=>q(s)&&!k.has(s)&&(Array.isArray(s)||!(Symbol.iterator in s))&&!(s instanceof WeakMap)&&!(s instanceof WeakSet)&&!(s instanceof Error)&&!(s instanceof Number)&&!(s instanceof Date)&&!(s instanceof String)&&!(s instanceof RegExp)&&!(s instanceof ArrayBuffer),a=s=>{switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:throw s}},l=new WeakMap,d=(s,E,O=a)=>{const b=l.get(s);if((b==null?void 0:b[0])===E)return b[1];const h=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s));return ee(h,!0),l.set(s,[E,h]),Reflect.ownKeys(s).forEach(L=>{const C=Reflect.get(s,L);k.has(C)?(ee(C,!1),h[L]=C):C instanceof Promise?Object.defineProperty(h,L,{get(){return O(C)}}):j.has(C)?h[L]=we(C,O):h[L]=C}),Object.freeze(h)},g=new WeakMap,m=[1,1],G=s=>{if(!q(s))throw new Error("object required");const E=g.get(s);if(E)return E;let O=m[0];const b=new Set,h=(i,r=++m[0])=>{O!==r&&(O=r,b.forEach(o=>o(i,r)))};let L=m[1];const C=(i=++m[1])=>(L!==i&&!b.size&&(L=i,y.forEach(([r])=>{const o=r[1](i);o>O&&(O=o)})),O),Q=i=>(r,o)=>{const p=[...r];p[1]=[i,...p[1]],h(p,o)},y=new Map,ae=(i,r)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&y.has(i))throw new Error("prop listener already exists");if(b.size){const o=r[3](Q(i));y.set(i,[r,o])}else y.set(i,[r])},X=i=>{var r;const o=y.get(i);o&&(y.delete(i),(r=o[1])==null||r.call(o))},re=i=>(b.add(i),b.size===1&&y.forEach(([o,p],P)=>{if(({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&p)throw new Error("remove already exists");const H=o[3](Q(P));y.set(P,[o,H])}),()=>{b.delete(i),b.size===0&&y.forEach(([o,p],P)=>{p&&(p(),y.set(P,[o]))})}),K=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),R=t(K,{deleteProperty(i,r){const o=Reflect.get(i,r);X(r);const p=Reflect.deleteProperty(i,r);return p&&h(["delete",[r],o]),p},set(i,r,o,p){var P;const H=Reflect.has(i,r),Y=Reflect.get(i,r,p);if(H&&e(Y,o))return!0;X(r),q(o)&&(o=ue(o)||o);let T=o;if(!((P=Object.getOwnPropertyDescriptor(i,r))!=null&&P.set))if(o instanceof Promise)o.then(S=>{o.status="fulfilled",o.value=S,h(["resolve",[r],S])}).catch(S=>{o.status="rejected",o.reason=S,h(["reject",[r],S])});else{!j.has(o)&&n(o)&&(T=v(o));const S=!k.has(T)&&j.get(T);S&&ae(r,S)}return Reflect.set(i,r,T,p),h(["set",[r],o,Y]),!0}});g.set(s,R);const ie=[K,C,d,re];return j.set(R,ie),Reflect.ownKeys(s).forEach(i=>{const r=Object.getOwnPropertyDescriptor(s,i);r.get||r.set?Object.defineProperty(K,i,r):R[i]=s[i]}),R})=>[G,j,k,e,t,n,a,l,d,g,m],[he]=pe();function v(e={}){return he(e)}function D(e,t,n){const a=j.get(e);({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!a&&console.warn("Please use proxy object");let l;const d=[],g=a[3];let m=!1;const s=g(E=>{if(d.push(E),n){t(d.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,m&&t(d.splice(0))}))});return m=!0,()=>{m=!1,s()}}function we(e,t){const n=j.get(e);({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&!n&&console.warn("Please use proxy object");const[a,l,d]=n;return d(a,l(),t)}const f=v({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,walletConnectVersion:1}),u={state:f,subscribe(e){return D(f,()=>e(f))},setChains(e){f.chains=e},setStandaloneChains(e){f.standaloneChains=e},setStandaloneUri(e){f.standaloneUri=e},getSelectedChain(){const e=A.client().getNetwork().chain;return e&&(f.selectedChain=e),f.selectedChain},setSelectedChain(e){f.selectedChain=e},setIsStandalone(e){f.isStandalone=e},setIsCustomDesktop(e){f.isCustomDesktop=e},setIsCustomMobile(e){f.isCustomMobile=e},setIsDataLoaded(e){f.isDataLoaded=e},setIsUiLoaded(e){f.isUiLoaded=e},setWalletConnectVersion(e){f.walletConnectVersion=e}},M=v({initialized:!1,ethereumClient:void 0}),A={setEthereumClient(e){!M.initialized&&e&&(M.ethereumClient=e,u.setChains(e.chains),M.initialized=!0)},client(){if(M.ethereumClient)return M.ethereumClient;throw new Error("ClientCtrl has no client set")}},c=v({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),me={state:c,subscribe(e){return D(c,()=>e(c))},getAccount(){const e=A.client().getAccount();c.address=e.address,c.isConnected=e.isConnected},async fetchProfile(e,t){try{c.profileLoading=!0;const n=t??c.address,{id:a}=A.client().getDefaultChain();if(n&&a===1){const[l,d]=await Promise.all([A.client().fetchEnsName({address:n,chainId:1}),A.client().fetchEnsAvatar({address:n,chainId:1})]);d&&await e(d),c.profileName=l,c.profileAvatar=d}}finally{c.profileLoading=!1}},async fetchBalance(e){try{c.balanceLoading=!0;const t=e??c.address;if(t){const n=await A.client().fetchBalance({address:t});c.balance={amount:n.formatted,symbol:n.symbol}}}finally{c.balanceLoading=!1}},setAddress(e){c.address=e},setIsConnected(e){c.isConnected=e},resetBalance(){c.balance=void 0},resetAccount(){c.address=void 0,c.isConnected=!1,c.profileName=void 0,c.profileAvatar=void 0,c.balance=void 0}},$=v({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerAllowList:void 0,explorerDenyList:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),x={state:$,subscribe(e){return D($,()=>e($))},setConfig(e){var t,n,a,l;if(u.setStandaloneChains(e.standaloneChains),u.setIsStandalone(!!((t=e.standaloneChains)!=null&&t.length)||!!e.enableStandaloneMode),u.setIsCustomMobile(!!((n=e.mobileWallets)!=null&&n.length)),u.setIsCustomDesktop(!!((a=e.desktopWallets)!=null&&a.length)),u.setWalletConnectVersion((l=e.walletConnectVersion)!=null?l:1),e.defaultChain)u.setSelectedChain(e.defaultChain);else if(!u.state.isStandalone){const d=A.client().getDefaultChain();u.setSelectedChain(d)}Object.assign($,e)}},te="https://explorer-api.walletconnect.com";function be(e){const t=Object.fromEntries(Object.entries(e).filter(([n,a])=>typeof a<"u"&&a!==null&&a!=="").map(([n,a])=>[n,a.toString()]));return new URLSearchParams(t).toString()}const V={async fetchWallets(e,t){const n=be(t),a=`${te}/v3/wallets?projectId=${e}&${n}`;return(await fetch(a)).json()},formatImageUrl(e,t){return`${te}/v3/logo/lg/${t}?projectId=${e}`}},W=v({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},previewWallets:[],recomendedWallets:[]});function B(){const{projectId:e}=x.state;if(!e)throw new Error("projectId is required to work with explorer api");return e}const Pe={state:W,async getPreviewWallets(e){const{listings:t}=await V.fetchWallets(B(),e);return W.previewWallets=Object.values(t),W.previewWallets},async getRecomendedWallets(){const{listings:e}=await V.fetchWallets(B(),{page:1,entries:6});W.recomendedWallets=Object.values(e)},async getPaginatedWallets(e){const{page:t,search:n}=e,{listings:a,total:l}=await V.fetchWallets(B(),e),d=Object.values(a),g=n?"search":"wallets";return W[g]={listings:[...W[g].listings,...d],total:l,page:t??1},{listings:d,total:l}},getImageUrl(e){return V.formatImageUrl(B(),e)},resetSearch(){W.search={listings:[],total:0,page:1}}},w=v({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),_={state:w,subscribe(e){return D(w,()=>e(w))},push(e,t){e!==w.view&&(w.view=e,t&&(w.data=t),w.history.push(e))},replace(e){w.view=e,w.history=[e]},goBack(){if(w.history.length>1){w.history.pop();const[e]=w.history.slice(-1);w.view=e}}},U=v({open:!1}),F={state:U,subscribe(e){return D(U,()=>e(U))},async open(e){return new Promise(t=>{const{isStandalone:n,isUiLoaded:a,isDataLoaded:l}=u.state,{isConnected:d}=me.state,{enableNetworkView:g}=x.state;if(n?(u.setStandaloneUri(e==null?void 0:e.uri),u.setStandaloneChains(e==null?void 0:e.standaloneChains),_.replace("ConnectWallet")):e!=null&&e.route?_.replace(e.route):d?_.replace("Account"):g?_.replace("SelectNetwork"):_.replace("ConnectWallet"),a&&l)U.open=!0,t();else{const m=setInterval(()=>{u.state.isUiLoaded&&u.state.isDataLoaded&&(clearInterval(m),U.open=!0,t())},200)}})},close(){U.open=!1}};function ge(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const z=v({themeMode:ge()?"dark":"light"}),ne={state:z,subscribe(e){return D(z,()=>e(z))},setThemeConfig(e){Object.assign(z,e)}},I=v({open:!1,message:"",variant:"success"}),We={state:I,subscribe(e){return D(I,()=>e(I))},openToast(e,t){I.open=!0,I.message=e,I.variant=t},closeToast(){I.open=!1}},N={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return N.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isEmptyObject(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.getOwnPropertyNames(e).length===0&&Object.getOwnPropertySymbols(e).length===0},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,n){if(N.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),this.setWalletConnectDeepLink(a,n);const l=encodeURIComponent(t);return`${a}wc?uri=${l}`},formatUniversalUrl(e,t,n){if(!N.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let a=e;e.endsWith("/")&&(a=e.slice(0,-1)),this.setWalletConnectDeepLink(a,n);const l=encodeURIComponent(t);return`${a}/wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(N.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(N.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(N.WALLETCONNECT_DEEPLINK_CHOICE)},isNull(e){return e===null}};typeof window<"u"&&(window.Buffer||(window.Buffer=le.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));var Ce=Object.defineProperty,se=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ee=(e,t)=>{for(var n in t||(t={}))ye.call(t,n)&&oe(e,n,t[n]);if(se)for(var n of se(t))ve.call(t,n)&&oe(e,n,t[n]);return e};class Oe{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=ne.setThemeConfig,ne.setThemeConfig(t),x.setConfig(Ee({enableStandaloneMode:!0},t)),this.initUi()}async initUi(){if(typeof window<"u"){await ce(()=>import("./index-0c08bbd1.js"),["assets/index-0c08bbd1.js","assets/index-a6207b15.js","assets/index-c93592e6.css"]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),u.setIsUiLoaded(!0)}}}const Ie=Object.freeze(Object.defineProperty({__proto__:null,Web3Modal:Oe},Symbol.toStringTag,{value:"Module"}));export{ne as $,A as C,me as N,Pe as P,We as T,x as W,Ie as a,u as i,F as j,N as m,_ as w};
