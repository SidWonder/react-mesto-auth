(this.webpackJsonpmesto__react=this.webpackJsonpmesto__react||[]).push([[0],{32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),o=n(8),i=(n(32),n(26)),l=n(14),u=n.n(l),p=n(18),d=n(2),h=n(3),j=n.p+"static/media/header-logo.bbe2a6ea.svg",b=n(0);function m(e){var t=e.isLoggedIn,n=(e.setLogged,e.onSignOut),a=e.userInfo,c=(e.setUserInfo,a.email),r=Object(h.h)(),s=r.pathname,i="/sign-in"===r.pathname?"/sign-up":"/sign-in";return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(o.b,{to:"/",target:"_self",className:"header__link",children:Object(b.jsx)("img",{className:"header__logo",src:j,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f"})}),Object(b.jsxs)("div",{className:"header__nav",children:[c&&Object(b.jsx)("div",{className:"header__email",children:"/"===s?c:""}),t?Object(b.jsx)(o.b,{to:"/",onClick:function(){return n()},className:"header__link",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(b.jsx)(o.b,{to:i,className:"header__link-noauth",children:"/sign-in"===s?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"})]})]})}var f=c.a.createContext();function _(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,r=e.onCardDelete,s=c.a.useContext(f),o=t.name,i=t.link,l=t.likes,u=t.owner._id===s._id,p=function(){return Object(b.jsx)("button",{type:"button",className:"place__button place__button_delete","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:j})},d=t.likes.some((function(e){return e._id===s._id})),h="".concat(d?"place__button_like-active":"");function j(){r(t)}return Object(b.jsxs)("article",{className:"place",children:[Object(b.jsx)("img",{src:i,alt:o,loading:"lazy",className:"place__img",onClick:function(){n(t)}}),Object(b.jsxs)("div",{className:"place__wrapper",children:[Object(b.jsx)("h3",{className:"place__title",children:o}),Object(b.jsx)("button",{type:"button",onClick:function(){a(t)},className:"place__button place__button_like ".concat(h),"aria-label":"\u041b\u0430\u0439\u043a\u043d\u0443\u0442\u044c \u044d\u0442\u0443 \u0448\u043d\u044f\u0433\u0443"}),Object(b.jsx)("span",{className:"place__like-counter",children:l.length})]}),u&&Object(b.jsx)(p,{})]})}function O(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,r=e.onCardClick,s=(e.handleCardLike,e.handleCardDelete,e.onCardDelete),o=e.onCardLike,i=e.cards,l=c.a.useContext(f),u=l.about,p=l.name,d=l.avatar;return Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsx)("div",{onClick:t,className:"profile__avatar-wrapper",children:Object(b.jsx)("img",{className:"profile__avatar",src:d,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(b.jsxs)("div",{className:"profile__wrapper",children:[Object(b.jsx)("h1",{className:"profile__header",children:p}),Object(b.jsx)("button",{className:"profile__button profile__button_edit",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:n}),Object(b.jsx)("p",{className:"profile__subtitle",children:u})]}),Object(b.jsx)("button",{className:"profile__button profile__button_add",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u043e\u0435",onClick:a})]}),Object(b.jsx)("section",{className:"places",children:i.map((function(e){return Object(b.jsx)(_,{card:e,onCardLike:o,onCardDelete:s,onCardClick:r},e._id)}))})]})}function g(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("p",{className:"footer__item",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})}function x(e){var t=e.name,n=e.title,a=e.buttonText,c=e.isOpen,r=e.closeIt,s=e.children,o=e.onSubmit;return Object(b.jsx)("div",{className:"popup popup-".concat(t," ").concat(c?"popup_active":""),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("h3",{className:"popup__title",children:n}),Object(b.jsxs)("form",{className:"form",name:t,noValidate:!0,onSubmit:o,children:[s,Object(b.jsx)("button",{type:"submit",className:"form__button",children:a})]}),Object(b.jsx)("button",{type:"button",className:"popup__button popup__button_close",onClick:r})]})})}function v(e){var t=e.isOpen,n=e.closeIt,a=e.onUpdateUser,r=c.a.useContext(f),s=c.a.useState("\u0416\u0430\u043a \u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),o=Object(d.a)(s,2),i=o[0],l=o[1],u=c.a.useState("\u041a\u043b\u0430\u0441\u0441\u043d\u044b\u0439 \u0447\u0435\u043b"),p=Object(d.a)(u,2),h=p[0],j=p[1];return c.a.useEffect((function(){l(r.name),j(r.about)}),[r,t]),Object(b.jsxs)(x,{name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,closeIt:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:h})}.bind(this),children:[Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{className:"form__input",id:"profile__header-change",type:"text",name:"profile-name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",value:i||"",onChange:function(e){l(e.target.value)},required:!0}),Object(b.jsx)("span",{className:"form__error",id:"profile__header-change-error"})]}),Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{className:"form__input",id:"profile__subtitle-change",type:"text",name:"profile-job",minLength:"2",maxLength:"200",required:!0,value:h||"",onChange:function(e){j(e.target.value)},placeholder:"\u0427\u0435\u043c \u0437\u0430\u043d\u044f\u0442?"}),Object(b.jsx)("span",{className:"form__error",id:"profile__subtitle-change-error"})]})]})}function N(e){var t=e.isOpen,n=e.closeIt,a=e.onUpdatePlace,r=c.a.useState(""),s=Object(d.a)(r,2),o=s[0],i=s[1],l=c.a.useState(""),u=Object(d.a)(l,2),p=u[0],h=u[1];return c.a.useEffect((function(){i(""),h("")}),[t]),Object(b.jsxs)(x,{name:"popup-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,closeIt:n,onSubmit:function(e){e.preventDefault(),a({name:o,link:p})}.bind(this),children:[Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{id:"place-title-change",className:"form__input",type:"text",name:"place-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",value:o,onChange:function(e){i(e.target.value)},required:!0}),Object(b.jsx)("span",{className:"form__error",id:"place-title-change-error"})]}),Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{className:"form__input",type:"url",id:"place-url-change",name:"place-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",minLength:"1",value:p,onChange:function(e){h(e.target.value)},required:!0}),Object(b.jsx)("span",{className:"form__error",id:"place-url-change-error"})]})]})}function k(e){var t=e.isOpen,n=e.card,a=e.closeIt;console.log("try","popup popup-image ".concat(t?"popup_active":""));var c=n.name,r=n.link;return Object(b.jsx)("div",{className:"popup popup-image ".concat(t?"popup_active":""),children:Object(b.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(b.jsx)("img",{className:"popup__img",loading:"lazy",src:r,alt:c}),Object(b.jsx)("p",{className:"popup__subtitle",children:c}),Object(b.jsx)("button",{onClick:a,type:"button",className:"popup__button popup__button_close popup__image-view"})]})})}function C(e){var t=e.isOpen,n=e.closeIt,a=e.onUpdateAvatar,r=c.a.useRef(null);return Object(b.jsx)(x,{name:"popup-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,closeIt:n,onSubmit:function(e){e.preventDefault(),a({avatar:r.current.value}),r.current.value=""},children:Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{className:"form__input",type:"url",id:"avatar-url-change",name:"avatar-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",minLength:"1",required:!0,ref:r}),Object(b.jsx)("span",{className:"form__error",id:"avatar-url-change-error"})]})})}var y=n(24),w=n(25),S=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(y.a)(this,e),this.baseUrl=n,this.headers=a}return Object(w.a)(e,[{key:"getInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleOriginalResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleOriginalResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleOriginalResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this.headers}).then(this._handleOriginalResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"106173b1-6f76-485f-b86e-e9e649d98c04","Content-Type":"application/json"}}),L="https://auth.nomoreparties.co",I=n(11),E=n(9);var U=function(e){var t=e.name,n=e.title,a=e.children,c=e.onSubmit;return Object(b.jsx)("div",{className:"authpage form_type_".concat(t),children:Object(b.jsxs)("div",{className:"authpage__container",children:[Object(b.jsx)("h3",{className:"authform__title",children:n}),Object(b.jsx)("form",{className:"authform",name:t,method:"GET",noValidate:!0,onSubmit:c,children:a})]})})};function T(e){var t=e.onRegister,n=c.a.useState({email:"",password:""}),a=Object(d.a)(n,2),r=a[0],s=a[1];function i(e){var t=e.target,n=t.name,a=t.value;s(Object(E.a)(Object(E.a)({},r),{},Object(I.a)({},n,a)))}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(U,{name:"register-form",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onSubmit:function(e){e.preventDefault();var n=r.email,a=r.password;t(n,a)},children:[Object(b.jsxs)("label",{className:"authform__label",children:[Object(b.jsx)("input",{type:"email",className:"authform__input authform__input_type_email",id:"email-input",value:r.email,name:"email",placeholder:"Email",required:!0,minLength:"2",maxLength:"40",onChange:i}),Object(b.jsx)("span",{className:"form__error",id:"email-input-error"})]}),Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{type:"password",className:"authform__input authform__input_type_password",id:"password-input",value:r.password,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"200",onChange:i}),Object(b.jsx)("span",{className:"form__error",id:"password-input-error"})]}),Object(b.jsx)("button",{type:"submit",className:"authform__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsxs)("p",{className:"authform__login",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(b.jsx)(o.b,{to:"/sign-in",className:"authform__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}function P(e){var t=e.onLogin,n=c.a.useState({email:"",password:""}),a=Object(d.a)(n,2),r=a[0],s=a[1];function o(e){var t=e.target,n=t.name,a=t.value;s(Object(E.a)(Object(E.a)({},r),{},Object(I.a)({},n,a)))}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(U,{name:"login-form",title:"\u0412\u0445\u043e\u0434",onSubmit:function(e){e.preventDefault();var n=r.email,a=r.password;n&&a&&t(n,a)},children:[Object(b.jsxs)("label",{className:"authform__label",children:[Object(b.jsx)("input",{type:"email",className:"authform__input authform__input_type_email",id:"email-input",value:r.email,name:"email",placeholder:"Email",required:!0,minLength:"2",maxLength:"40",onChange:o}),Object(b.jsx)("span",{className:"form__error",id:"email-input-error"})]}),Object(b.jsxs)("label",{className:"form__label",children:[Object(b.jsx)("input",{type:"password",className:"authform__input authform__input_type_password",id:"password-input",value:r.password,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"200",onChange:o}),Object(b.jsx)("span",{className:"form__error",id:"password-input-error"})]}),Object(b.jsx)("button",{type:"submit",className:"authform__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}function D(e){var t=e.onClose,n=e.isOk;return Object(b.jsx)("div",{className:"popup popup-popup-registration popup_active",children:Object(b.jsxs)("div",{className:"popup__container popup__container_registration",children:[Object(b.jsx)("button",{className:"popup__button popup__button_close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443",onClick:t}),Object(b.jsx)("div",{className:"popup__register popup__register_type_".concat(n?"ok":"error")}),Object(b.jsx)("h3",{className:"popup__title_registration",children:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})}var A=n(27),R=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(b.jsx)(h.b,{children:function(){return!0===n.isLoggedIn?Object(b.jsx)(t,Object(E.a)({},n)):Object(b.jsx)(h.a,{to:"./sign-up"})}})};var q=function(){var e=c.a.useState(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),s=Object(d.a)(r,2),o=s[0],l=s[1],j=c.a.useState(!1),_=Object(d.a)(j,2),y=_[0],w=_[1],I=c.a.useState(!1),E=Object(d.a)(I,2),U=E[0],A=E[1],q=c.a.useState({}),F=Object(d.a)(q,2),J=F[0],z=F[1],G=c.a.useState({}),B=Object(d.a)(G,2),H=B[0],M=B[1],V=c.a.useState([]),Y=Object(d.a)(V,2),K=Y[0],Q=Y[1],W=c.a.useState(!1),X=Object(d.a)(W,2),Z=X[0],$=X[1],ee=c.a.useState({}),te=Object(d.a)(ee,2),ne=te[0],ae=te[1],ce=c.a.useState(!1),re=Object(d.a)(ce,2),se=re[0],oe=re[1],ie=c.a.useState(!1),le=Object(d.a)(ie,2),ue=le[0],pe=le[1],de=Object(h.g)();function he(){var e=localStorage.getItem("token");e&&function(e){return fetch("".concat(L,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e})).catch((function(e){return console.log(e)}))}(e).then((function(e){if(401===e.status)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(400===e.status)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d");return e.json()})).then((function(e){var t=e.data?e.data:{};$(!0),ae(t)})).catch((function(e){return console.log(e)}))}function je(){l(!1),a(!1),w(!1),A(!1),z({})}return c.a.useEffect((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getUserInfo();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return M(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getCards();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return Q(e)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){he(),Z&&de.push("/")}),[Z]),Object(b.jsx)(f.Provider,{value:H,children:Object(b.jsxs)("div",{className:"page__content",children:[Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(m,{isLoggedIn:Z,setLogged:$,onSignOut:function(){localStorage.removeItem("token"),de.push("/sign-in"),$(!1)},userInfo:ne,setUserInfo:ae}),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/sign-up",children:Object(b.jsx)(T,{onRegister:function(e,t){(function(e,t){return fetch("".concat(L,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){if(400===e.status)throw oe(!1),pe(!0),new Error("\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");oe(!0),pe(!0)})).catch((function(e){return console.log(e)}))}})}),Object(b.jsx)(h.b,{path:"/sign-in",children:Object(b.jsx)(P,{onLogin:function(e,t){return function(e,t){return fetch("".concat(L,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.ok?e.json():e})).catch((function(e){return console.log(e)}))}(e,t).then((function(e){if(!e.token)throw 400===e.status?new Error("\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status?new Error("\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):new Error("\u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");$(!0),localStorage.setItem("token",e.token)})).catch((function(e){return console.log(e)}))},tokenCheck:he})}),Object(b.jsx)(R,{exact:!0,path:"/",isLoggedIn:Z,component:O,onEditAvatar:function(){a(!0)},onEditProfile:function(){l(!0)},onAddPlace:function(){w(!0)},onCardClick:function(e){A(!0),z(e)},cards:K,onCardDelete:function(e){S.deleteCard(e).then((function(){Q(K.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))},onCardLike:function(e){e.likes.some((function(e){return e._id===H._id}))?S.deleteLike(e).then((function(t){Q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)})):S.addLike(e).then((function(t){Q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(h.b,{children:Z?Object(b.jsx)(h.a,{to:"/"}):Object(b.jsx)(h.a,{to:"/sign-in"})})]}),Object(b.jsx)(g,{})]}),Object(b.jsx)(v,{isOpen:o,closeIt:je,onUpdateUser:function(e){S.setUserInfo(e).then((function(e){M(e),je()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(C,{isOpen:n,closeIt:je,onUpdateAvatar:function(e){S.setUserAvatar(e).then((function(e){M(e),je()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(N,{isOpen:y,closeIt:je,onUpdatePlace:function(e){S.addNewCard(e).then((function(e){Q([e].concat(Object(i.a)(K))),je()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(x,{name:"popup-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:!1,closeIt:je}),Object(b.jsx)(k,{isOpen:U,card:J,closeIt:je}),ue&&Object(b.jsx)(D,{onClose:se?function(){pe(!1),de.push("/sign-in")}:function(){pe(!1)},isOk:se})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(q,{})})}),document.getElementById("root")),F()}},[[40,1,2]]]);
//# sourceMappingURL=main.ad5e3cd0.chunk.js.map