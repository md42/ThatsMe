"use strict";(self.webpackChunkthats_me=self.webpackChunkthats_me||[]).push([[7643],{5631:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});i(6540);var n=i(4164),a=i(797),r=i(1082),l=i(204),s=i(569),c=i(7448),o=i(7220),m=i(4005),d=i(7143),_=i(3750),g=i(4848);function h(e){const t=(0,_.kJ)(e);return(0,g.jsx)(d.A,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function u(e){const{metadata:t}=e,{siteConfig:{title:i}}=(0,a.A)(),{blogDescription:n,blogTitle:l,permalink:s}=t,c="/"===s?i:l;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:c,description:n}),(0,g.jsx)(o.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:i,sidebar:n}=e;return(0,g.jsxs)(s.A,{sidebar:n,children:[(0,g.jsx)(m.A,{items:i}),(0,g.jsx)(c.A,{metadata:t})]})}function p(e){return(0,g.jsxs)(r.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,g.jsx)(u,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(x,{...e})]})}},7448:(e,t,i)=>{i.d(t,{A:()=>l});i(6540);var n=i(539),a=i(1865),r=i(4848);function l(e){const{metadata:t}=e,{previousPage:i,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[i&&(0,r.jsx)(a.A,{permalink:i,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(a.A,{permalink:l,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,i)=>{i.d(t,{A:()=>P});i(6540);var n=i(4164),a=i(3750),r=i(4848);function l(e){let{children:t,className:i}=e;return(0,r.jsx)("article",{className:i,children:t})}var s=i(6289);const c={title:"title_f1Hy"};function o(e){let{className:t}=e;const{metadata:i,isBlogPostPage:l}=(0,a.e7)(),{permalink:o,title:m}=i,d=l?"h1":"h2";return(0,r.jsx)(d,{className:(0,n.A)(c.title,t),children:l?m:(0,r.jsx)(s.A,{to:o,children:m})})}var m=i(539),d=i(1430),_=i(8569);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const i=function(){const{selectMessage:e}=(0,d.W)();return t=>{const i=Math.ceil(t);return e(i,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:i}))}}();return(0,r.jsx)(r.Fragment,{children:i(t)})}function u(e){let{date:t,formattedDate:i}=e;return(0,r.jsx)("time",{dateTime:t,children:i})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:i}=(0,a.e7)(),{date:l,readingTime:s}=i,c=(0,_.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,n.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(u,{date:l,formattedDate:(o=l,c.format(new Date(o)))}),void 0!==s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:s})]})]});var o}var f=i(5921);const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function k(e){let{className:t}=e;const{metadata:{authors:i},assets:l}=(0,a.e7)();if(0===i.length)return null;const s=i.every((e=>{let{name:t}=e;return!t})),c=1===i.length;return(0,r.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",s?j.imageOnlyAuthorRow:"row",t),children:i.map(((e,t)=>(0,r.jsx)("div",{className:(0,n.A)(!s&&(c?"col col--12":"col col--6"),s?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(f.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(o,{}),(0,r.jsx)(p,{}),(0,r.jsx)(k,{})]})}var y=i(99),b=i(7985);function v(e){let{children:t,className:i}=e;const{isBlogPostPage:l}=(0,a.e7)();return(0,r.jsx)("div",{id:l?y.LU:void 0,className:(0,n.A)("markdown",i),children:(0,r.jsx)(b.A,{children:t})})}var w=i(204),N=i(5783),T=i(6239);function C(){return(0,r.jsx)("b",{children:(0,r.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...i}=e;return(0,r.jsx)(s.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...i,children:(0,r.jsx)(C,{})})}function $(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:i,title:l,editUrl:s,hasTruncateMarker:c,lastUpdatedBy:o,lastUpdatedAt:m}=e,d=!t&&c,_=i.length>0;if(!(_||d||s))return null;if(t){const e=!!(s||m||o);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[_&&(0,r.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(T.A,{tags:i})})}),e&&(0,r.jsx)(N.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:m,lastUpdatedBy:o})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[_&&(0,r.jsx)("div",{className:(0,n.A)("col",{"col--9":d}),children:(0,r.jsx)(T.A,{tags:i})}),d&&(0,r.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":_}),children:(0,r.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function P(e){let{children:t,className:i}=e;const s=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,n.A)(s,i),children:[(0,r.jsx)(A,{}),(0,r.jsx)(v,{children:t}),(0,r.jsx)($,{})]})}},4005:(e,t,i)=>{i.d(t,{A:()=>l});i(6540);var n=i(3750),a=i(8189),r=i(4848);function l(e){let{items:t,component:i=a.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.in,{content:t,children:(0,r.jsx)(i,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},1865:(e,t,i)=>{i.d(t,{A:()=>l});i(6540);var n=i(4164),a=i(6289),r=i(4848);function l(e){const{permalink:t,title:i,subLabel:l,isNext:s}=e;return(0,r.jsxs)(a.A,{className:(0,n.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:i})]})}},3953:(e,t,i)=>{i.d(t,{A:()=>s});i(6540);var n=i(4164),a=i(6289);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=i(4848);function s(e){let{permalink:t,label:i,count:s,description:c}=e;return(0,l.jsxs)(a.A,{href:t,title:c,className:(0,n.A)(r.tag,s?r.tagWithCount:r.tagRegular),children:[i,s&&(0,l.jsx)("span",{children:s})]})}},6239:(e,t,i)=>{i.d(t,{A:()=>c});i(6540);var n=i(4164),a=i(539),r=i(3953);const l={tags:"tags_jXut",tag:"tag_QGVx"};var s=i(4848);function c(e){let{tags:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:(0,s.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,s.jsx)("ul",{className:(0,n.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,s.jsx)("li",{className:l.tag,children:(0,s.jsx)(r.A,{...e})},e.permalink)))})]})}},3668:(e,t,i)=>{i.d(t,{A:()=>A});i(6540);var n=i(5359),a=i(6784),r=i(7107),l=i(7875),s=i(6188);const c=Object.freeze({SoftwareDeveloper:Symbol("fa-solid fa-code"),Architect:Symbol("fa-solid fa-compass-drafting"),DevOps:Symbol("fa-solid fa-console")});var o=i(4164),m=i(4848);const d=e=>{let{className:t,style:i,children:n,shadow:a}=e;const r=a?`item shadow--${a}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card",t,r),style:i,children:n})},_=e=>{let{className:t,style:i,children:n,textAlign:a,variant:r,italic:l=!1,noDecoration:s=!1,transform:c,breakWord:d=!1,truncate:_=!1,weight:g}=e;const h=a?`text--${a}`:"",u=r?`text--${r}`:"",x=l?"text--italic":"",p=s?"text-no-decoration":"",f=c?`text--${c}`:"",j=d?"text--break":"",k=_?"text--truncate":"",A=g?`text--${g}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card__body",t,h,f,u,x,p,j,k,A),style:i,children:n})},g=e=>{let{className:t,style:i,children:n,textAlign:a,variant:r,italic:l=!1,noDecoration:s=!1,transform:c,breakWord:d=!1,truncate:_=!1,weight:g}=e;const h=a?`text--${a}`:"",u=r?`text--${r}`:"",x=l?"text--italic":"",p=s?"text-no-decoration":"",f=c?`text--${c}`:"",j=d?"text--break":"",k=_?"text--truncate":"",A=g?`text--${g}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card__footer",t,h,f,u,x,p,j,k,A),style:i,children:n})},h=e=>{let{className:t,style:i,children:n,textAlign:a,variant:r,italic:l=!1,noDecoration:s=!1,transform:c,breakWord:d=!1,truncate:_=!1,weight:g}=e;const h=a?`text--${a}`:"",u=r?`text--${r}`:"",x=l?"text--italic":"",p=s?"text-no-decoration":"",f=c?`text--${c}`:"",j=d?"text--break":"",k=_?"text--truncate":"",A=g?`text--${g}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card__header",t,h,f,u,x,p,j,k,A),style:i,children:n})};var u=i(9030);const x=e=>{let{className:t,style:i,cardImageUrl:n,alt:a,title:r}=e;const l=(0,u.Ay)(n);return(0,m.jsx)("img",{className:(0,o.A)("card__image",t),style:i,src:l,alt:a,title:r})};const p={timeline:"timeline_xnUW",timeline__item:"timeline__item_y8u3","timeline__item--left":"timeline__item--left_SQWS","timeline__item--right":"timeline__item--right_TSjb",timeline__content:"timeline__content_RcTe","timeline__content--black":"timeline__content--black_kjfH","timeline__content--white":"timeline__content--white_usf2","timeline__content--primary":"timeline__content--primary_DXzr","timeline__content--primary-dark":"timeline__content--primary-dark_EyG4","timeline__content--primary-darker":"timeline__content--primary-darker_JwXQ","timeline__content--primary-darkest":"timeline__content--primary-darkest_MmEm","timeline__content--primary-light":"timeline__content--primary-light__hJH","timeline__content--primary-lighter":"timeline__content--primary-lighter_ADro","timeline__content--primary-lightest":"timeline__content--primary-lightest_ascF","timeline__content--success":"timeline__content--success_UvPh","timeline__content--success-dark":"timeline__content--success-dark_nQVM","timeline__content--success-darker":"timeline__content--success-darker_J8SI","timeline__content--success-darkest":"timeline__content--success-darkest_BHLR","timeline__content--success-light":"timeline__content--success-light_cdLM","timeline__content--success-lighter":"timeline__content--success-lighter_RRC2","timeline__content--success-lightest":"timeline__content--success-lightest_IJX4","timeline__content--warning":"timeline__content--warning_KK64","timeline__content--warning-dark":"timeline__content--warning-dark_RBNQ","timeline__content--warning-darker":"timeline__content--warning-darker_uHQe","timeline__content--warning-darkest":"timeline__content--warning-darkest_bbCE","timeline__content--warning-light":"timeline__content--warning-light_wv4L","timeline__content--warning-lighter":"timeline__content--warning-lighter_vLtM","timeline__content--warning-lightest":"timeline__content--warning-lightest_ETmJ","timeline__content--danger":"timeline__content--danger_itDT","timeline__content--danger-dark":"timeline__content--danger-dark_VJcr","timeline__content--danger-darker":"timeline__content--danger-darker_ZwlY","timeline__content--danger-darkest":"timeline__content--danger-darkest_wbZp","timeline__content--danger-light":"timeline__content--danger-light_YENt","timeline__content--danger-lighter":"timeline__content--danger-lighter_YOVk","timeline__content--danger-lightest":"timeline__content--danger-lightest_tstF","timeline__content--info":"timeline__content--info_qnhm","timeline__content--info-dark":"timeline__content--info-dark_dnAO","timeline__content--info-darker":"timeline__content--info-darker_L3ab","timeline__content--info-darkest":"timeline__content--info-darkest_z0q3","timeline__content--info-light":"timeline__content--info-light_a5jW","timeline__content--info-lighter":"timeline__content--info-lighter_pYTI","timeline__content--info-lightest":"timeline__content--info-lightest_BK0O","timeline--primary":"timeline--primary_HiUt","timeline--primary-dark":"timeline--primary-dark_M9qg","timeline--primary-darker":"timeline--primary-darker_dls8","timeline--primary-darkest":"timeline--primary-darkest_tRve","timeline--primary-light":"timeline--primary-light_ilSb","timeline--primary-lighter":"timeline--primary-lighter_zZpw","timeline--primary-lightest":"timeline--primary-lightest_gBUp","timeline--success":"timeline--success_rLhF","timeline--success-dark":"timeline--success-dark_p9Xs","timeline--success-darker":"timeline--success-darker_pOx0","timeline--success-darkest":"timeline--success-darkest_jmP7","timeline--success-light":"timeline--success-light_IcqJ","timeline--success-lighter":"timeline--success-lighter_DEo_","timeline--success-lightest":"timeline--success-lightest_aVJd","timeline--warning":"timeline--warning_tCsw","timeline--warning-dark":"timeline--warning-dark_Cn4m","timeline--warning-darker":"timeline--warning-darker_atvE","timeline--warning-darkest":"timeline--warning-darkest_z03P","timeline--warning-light":"timeline--warning-light_gfh0","timeline--warning-lighter":"timeline--warning-lighter_wvED","timeline--warning-lightest":"timeline--warning-lightest_AmER","timeline--danger":"timeline--danger_ljr5","timeline--danger-dark":"timeline--danger-dark_AhkR","timeline--danger-darker":"timeline--danger-darker_F6ju","timeline--danger-darkest":"timeline--danger-darkest_XPG2","timeline--danger-light":"timeline--danger-light_QNwh","timeline--danger-lighter":"timeline--danger-lighter_G3Yw","timeline--danger-lightest":"timeline--danger-lightest_puFT","timeline--info":"timeline--info_ILAG","timeline--info-dark":"timeline--info-dark_y9i5","timeline--info-darker":"timeline--info-darker_XmfN","timeline--info-darkest":"timeline--info-darkest_Anh8","timeline--info-light":"timeline--info-light_edyw","timeline--info-lighter":"timeline--info-lighter_jJBt","timeline--info-lightest":"timeline--info-lightest_jTYt"},f=e=>{let{className:t,style:i,children:n,variant:a}=e;const r=a?p[`timeline--${a}`]:"";return(0,m.jsx)("div",{className:(0,o.A)(p.timeline,r,t),style:i,children:n})},j=e=>{let{className:t,style:i,children:n,align:a="left",textAlign:r="justify",variant:l="primary",italic:s=!1,noDecoration:c=!1,transform:d,breakWord:_=!1,truncate:g=!1,weight:h,color:u,shadow:x="tl"}=e;const f=x?`item shadow--${x}`:"",j=l?p[`timeline__content--${l}`]:"",k=a?p[`timeline__item--${a}`]:"",A=r?`text--${r}`:"",y=u?`text--${u}`:"",b=s?"text--italic":"",v=c?"text-no-decoration":"",w=d?`text--${d}`:"",N=_?"text--break":"",T=g?"text--truncate":"",C=h?`text--${h}`:"";return(0,m.jsx)("div",{className:(0,o.A)(p.timeline__item,k),children:(0,m.jsx)("div",{className:(0,o.A)(p.timeline__content,j,t,f,A,w,y,b,v,N,T,C),style:i,children:n})})},k=e=>{let{icon:t,position:i,location:n,employeer:r,fromDate:l,toDate:s}=e;var c="fa-solid ".concat(t),o=l?"(".concat(l," - ",s||"Today",")"):"";return(0,m.jsxs)("div",{children:[(0,m.jsx)(a.g,{icon:c,size:"2Ox"}),"  ",(0,m.jsxs)("b",{children:[" ",i," "]})," ",(0,m.jsx)("i",{children:o}),(0,m.jsx)("br",{}),(0,m.jsxs)("p",{children:[r,", ",(0,m.jsx)("i",{children:n})]})]})};r.Yv.add(l.Cvc,s.X7I);const A={MDXComponents:n.A,CvIcons:c,Card:d,CardHeader:h,CardBody:_,CardFooter:g,CardImage:x,Columns:function(e){let{children:t,className:i,style:n}=e;return(0,m.jsx)("div",{className:"container center",children:(0,m.jsx)("div",{className:(0,o.A)("row",i),style:n,children:t})})},Column:function(e){let{children:t,className:i,style:n}=e;return(0,m.jsx)("div",{className:(0,o.A)("col",i),style:n,children:t})},Timeline:f,TimelineItem:j,TimelineCareerHeaderItem:k,FAIcon:a.g}}}]);