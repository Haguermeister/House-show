(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{103:function(e,n,t){},104:function(e,n,t){},107:function(e,n,t){},111:function(e,n,t){},112:function(e,n,t){},113:function(e,n,t){},125:function(e,n,t){},127:function(e,n,t){},129:function(e,n,t){},130:function(e,n,t){},131:function(e,n,t){},132:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(19),s=t.n(i),r=(t(102),t(103),t(104),t(6)),o=t(16),l=t(12),u=t(92),d=t(153),j=t(155),m=t(151),b=t(89),p=t(47),O=t(56),h=t(34),g=(t(107),t(3)),x=[{route:"/explore",icon:h.d,label:"Explore"},{route:"/saved",icon:h.b,label:"Saved"},{route:"/bookings",icon:h.a,label:"Bookings"},{route:"/account",icon:h.e,label:"Account"}],f=function(e){return Object(g.jsx)("nav",{className:"bottom-tab-nav navbar  navbar-light",role:"navigation",children:Object(g.jsx)(p.a,{className:"w-100",children:Object(g.jsx)("div",{className:" d-flex flex-row justify-content-around w-100",children:x.map((function(e,n){return Object(g.jsx)(p.b,{children:Object(g.jsx)(o.c,{to:e.route,className:"bottom-nav-link",activeClassName:"active",children:Object(g.jsxs)("div",{className:"row d-flex flex-column justify-content-center align-items-center",children:[Object(g.jsx)(O.a,{size:"lg",icon:e.icon}),Object(g.jsx)("div",{children:e.label})]})})},"tab-".concat(n))}))})})})},v=t(17),y=t(10),w=t(33),N=function(e,n){switch(n.type){case"UPDATE_PRODUCTS":return Object(r.a)(Object(r.a)({},e),{},{products:Object(w.a)(n.products)});case"ADD_TO_CART":return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(w.a)(e.cart),[n.product])});case"ADD_MULTIPLE_TO_CART":return Object(r.a)(Object(r.a)({},e),{},{cart:[].concat(Object(w.a)(e.cart),Object(w.a)(n.products))});case"UPDATE_CART_QUANTITY":return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return n._id===e._id&&(e.purchaseQuantity=n.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var t=e.cart.filter((function(e){return e._id!==n._id}));return Object(r.a)(Object(r.a)({},e),{},{cartOpen:t.length>0,cart:t});case"CLEAR_CART":return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(r.a)(Object(r.a)({},e),{},{categories:Object(w.a)(n.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(r.a)(Object(r.a)({},e),{},{currentCategory:n.currentCategory});default:return e}};var $,S,k,T,_,A,C,I,R,E,P,H,z,D,L,B,U,V,W=["value"],q=Object(a.createContext)(),F=q.Provider,M=function(e){e.value;var n,t=Object(y.a)(e,W),c=(n={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(a.useReducer)(N,n)),i=Object(v.a)(c,2),s=i[0],o=i[1];return Object(g.jsx)(F,Object(r.a)({value:[s,o]},t))},G=(t(111),function(e){return Object(g.jsx)("div",{className:"navbar  navbar-light",children:Object(g.jsx)(p.a,{className:"w-100 d-flex flex-row w-100",children:Object(g.jsx)(o.c,{to:"/",className:"d-flex nav-link col-3 mx-auto justify-content-center",children:Object(g.jsx)("img",{alt:"HouseShow Logo",src:"./images/houseshow-logo-large.png"})})})})}),Y=t.p+"static/media/videoBackground.fcee9df6.mp4",J=(t(112),function(e){return Object(g.jsx)("div",{className:"videoContainer",children:Object(g.jsx)("video",{loop:!0,muted:!0,autoPlay:!0,controls:"",className:"videoFrame",children:Object(g.jsx)("source",{src:Y})})})}),Q=(t(113),t(86)),K=t(87),X=t(62),Z=t.n(X),ee=new(function(){function e(){Object(Q.a)(this,e)}return Object(K.a)(e,[{key:"getProfile",value:function(){return Z()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Z()(e).exp<Date.now()/1e3}catch(n){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ne=function(){return Object(g.jsxs)("div",{className:"w-100 d-flex flex-column align-items-center justify-content-center ",children:[Object(g.jsx)(J,{className:"mb-5"}),ee.loggedIn()&&Object(g.jsx)(o.b,{to:{pathname:"/explore"},children:"Explore"}),Object(g.jsx)(o.b,{className:"mt-5 btn button",to:{pathname:"/explore"},children:"Explore"}),Object(g.jsxs)("div",{className:"w-100 d-flex flex-row align-items-center",children:[Object(g.jsx)(o.b,{className:"signIn-Link btn mx-auto",to:{pathname:"/login"},children:"Sign in as Host"}),Object(g.jsx)(o.b,{className:" signIn-Link btn mx-auto",to:{pathname:"/login"},children:"Sign in as Artist"})]}),Object(g.jsxs)("div",{className:"w-100 d-flex flex-row align-items-center mb-4",children:[Object(g.jsx)(o.b,{className:"btn button mx-auto",to:{pathname:"/login"},children:"I want to Host"}),Object(g.jsx)(o.b,{className:"btn button mx-auto",to:{pathname:"/login"},children:"I want to Perform"})]})]})},te=t(40),ae=t(31),ce=t.n(ae),ie=t(148),se=t(149),re=t(13),oe=t(154),le=Object(oe.a)($||($=Object(re.a)(["\n  {\n    meArtist {\n      _id\n      username\n      name\n      rating\n      musicType\n      rate\n      bandSize\n      pictures\n      spotifyLink\n      email\n      venues {\n        _id\n        name\n        owner\n        city\n        description\n        occupancy\n        cost\n      }\n    }\n  }\n"]))),ue=Object(oe.a)(S||(S=Object(re.a)(["\n  query artist($name: Sring!) {\n    artist(name: $name) {\n      _id\n      username\n      name\n      rating\n      musicType\n      rate\n      bandSize\n      pictures\n      spotifyLink\n      email\n      venues {\n        _id\n        name\n        owner\n        city\n        description\n        occupancy\n        cost\n      }\n    }\n  }\n"]))),de=(Object(oe.a)(k||(k=Object(re.a)(["\n  query artists {\n    _id\n    username\n    name\n    rating\n    musicType\n    rate\n    bandSize\n    pictures\n    spotifyLink\n    email\n    venues {\n      _id\n      name\n      owner\n      city\n      description\n      occupancy\n      cost\n    }\n  }\n"]))),Object(oe.a)(T||(T=Object(re.a)(["\n  {\n    meHost {\n      _id\n      username\n      firstName\n      lastName\n      email\n      artists {\n        _id\n        name\n        rating\n        musicType\n        rate\n        email\n      }\n      venues {\n        _id\n        name\n        owner\n        city\n        description\n        occupancy\n        cost\n      }\n    }\n  }\n"])))),je=Object(oe.a)(_||(_=Object(re.a)(["\n  query host($email: String!) {\n    host(email: $email) {\n      _id\n      username\n      firstName\n      lastName\n      email\n      artists {\n        _id\n        name\n        rating\n        musicType\n        rate\n        email\n      }\n      venues {\n        _id\n        name\n        owner\n        city\n        description\n        occupancy\n        cost\n      }\n    }\n  }\n"]))),me=(Object(oe.a)(A||(A=Object(re.a)(["\n  query hosts {\n    _id\n    username\n    firstName\n    lastName\n    email\n    artists {\n      _id\n      name\n      rating\n      musicType\n      rate\n      email\n    }\n    venues {\n      _id\n      name\n      owner\n      city\n      description\n      occupancy\n      cost\n    }\n  }\n"]))),Object(oe.a)(C||(C=Object(re.a)(["\n  query venue($name: String!) {\n    venue(name: $name) {\n      _id\n      name\n      owner\n      description\n      city\n      occupancy\n      pictures\n      cost\n    }\n  }\n"]))),Object(oe.a)(I||(I=Object(re.a)(["\n  query venues {\n    _id\n    name\n    owner\n    description\n    city\n    occupancy\n    pictures\n    const\n  }\n"]))),Object(oe.a)(R||(R=Object(re.a)(["\n  mutation loginHost($email: String!, $password: String!) {\n    loginHost(email: $email, password: $password) {\n      token\n      host {\n        _id\n        username\n      }\n    }\n  }\n"]))),Object(oe.a)(E||(E=Object(re.a)(["\n  mutation addHost(\n    $username: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addHost(\n      username: $username\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      host {\n        _id\n      }\n    }\n  }\n"])))),be=(Object(oe.a)(P||(P=Object(re.a)(["\n  mutation updateHost(\n    $username: String!\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    updateHost(\n      username: $username\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      host {\n        _id\n      }\n    }\n  }\n"]))),Object(oe.a)(H||(H=Object(re.a)(["\n  mutation hireArtist($id: ID!) {\n    hireArtist(artistId: $id) {\n      _id\n      username\n      artists {\n        _id\n        name\n      }\n    }\n  }\n"]))),Object(oe.a)(z||(z=Object(re.a)(["\n  mutation loginArtist($email: String!, $password: String!) {\n    loginArtist(email: $email, password: $password) {\n      token\n      artist {\n        _id\n        username\n      }\n    }\n  }\n"])))),pe=Object(oe.a)(D||(D=Object(re.a)(["\n  mutation addArtist(\n    $username: String!\n    $name: String!\n    $musicType: String!\n    $pictures: [String]!\n    $bandSize: INT!\n    $rate: INT!\n    $email: String!\n    $password: String!\n  ) {\n    addArtist(\n      username: $username\n      name: $name\n      musicType: $musicType\n      pictures: $pictures\n      bandSize: $bandSize\n      rate: $rate\n      email: $email\n      password: $password\n    ) {\n      token\n      artist {\n        _id\n      }\n    }\n  }\n"]))),Oe=(Object(oe.a)(L||(L=Object(re.a)(["\n  mutation updateArtist(\n    $username: String!\n    $name: String!\n    $musicType: String!\n    $pictures: [String]!\n    $bandSize: INT!\n    $rate: INT!\n    $email: String!\n    $password: String!\n  ) {\n    updateArtist(\n      username: $username\n      name: $name\n      musicType: $musicType\n      pictures: $pictures\n      bandSize: $bandSize\n      rate: $rate\n      email: $email\n      password: $password\n    ) {\n      token\n      artist {\n        _id\n      }\n    }\n  }\n"]))),Object(oe.a)(B||(B=Object(re.a)(["\n  mutation bookVenue($id: ID!) {\n    bookVenue(venueId: $id) {\n      _id\n      venue {\n        _id\n        name\n      }\n    }\n  }\n"]))),Object(oe.a)(U||(U=Object(re.a)(["\n  mutation addVenue(\n    $name: String!\n    $description: String!\n    $occupancy: INT!\n    $city: String!\n    $pictures: [String]!\n    $cost: INT!\n  ) {\n    addVenue(\n      name: $name\n      description: $description\n      occupancy: $occupancy\n      city: $city\n      pictures: $pictures\n      cost: $cost\n    )\n    host {\n      _id\n    }\n  }\n"]))),Object(oe.a)(V||(V=Object(re.a)(["\n  mutation updateVenue(\n    $name: String!\n    $description: String!\n    $occupancy: INT!\n    $city: String!\n    $pictures: [String]!\n    $cost: INT!\n  ) {\n    updateVenue(\n      name: $name\n      description: $description\n      occupancy: $occupancy\n      city: $city\n      pictures: $pictures\n      cost: $cost\n    )\n    host {\n      _id\n    }\n  }\n"]))),function(e){var n=Object(l.g)().username,t=Object(ie.a)(pe),a=Object(v.a)(t,1)[0],c=Object(se.a)(n?ue:le,{variables:{username:n}}),i=c.loading,s=c.data,r=(null===s||void 0===s?void 0:s.me)||(null===s||void 0===s?void 0:s.artist)||{};if(ee.loggedIn()&&ee.getProfile().data.username===n)return Object(g.jsx)(l.a,{to:"/profile"});if(i)return Object(g.jsx)("div",{children:"Loading..."});if(null===r||void 0===r||!r.username)return Object(g.jsx)("h4",{children:"You must be logged in to see this."});var o=function(){var e=Object(te.a)(ce.a.mark((function e(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{id:r._id}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"flex-row mb-3",children:[Object(g.jsxs)("h2",{className:"bg-dark text-secondary p-3 display-inline-block",children:["Viewing ",n?"".concat(r.username,"'s"):"your"," profile."]}),n&&Object(g.jsx)("button",{className:"btn ml-auto",onClick:o,children:"Add Artist"})]})})}),he=function(e){var n=Object(l.g)().username,t=Object(ie.a)(me),a=Object(v.a)(t,1)[0],c=Object(se.a)(n?je:de,{variables:{username:n}}),i=c.loading,s=c.data,r=(null===s||void 0===s?void 0:s.me)||(null===s||void 0===s?void 0:s.host)||{};if(ee.loggedIn()&&ee.getProfile().data.username===n)return Object(g.jsx)(l.a,{to:"/profile"});if(i)return Object(g.jsx)("div",{children:"Loading..."});if(null===r||void 0===r||!r.username)return Object(g.jsx)("h4",{children:"You must be logged in to see this."});var o=function(){var e=Object(te.a)(ce.a.mark((function e(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{id:r._id}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"flex-row mb-3",children:[Object(g.jsxs)("h2",{className:"bg-dark text-secondary p-3 display-inline-block",children:["Viewing ",n?"".concat(r.username,"'s"):"your"," profile."]}),n&&Object(g.jsx)("button",{className:"btn ml-auto",onClick:o,children:"Add Host"})]})})},ge=t(54),xe=(t(82),t(125),function(e){var n=function(){};return Object(g.jsx)("div",{children:e.artistsData.map((function(e){return Object(g.jsxs)("div",{className:"d-flex justify-content-center flex-column aligin-items-center",children:[Object(g.jsx)(O.a,{onClick:n,size:"xs",className:"heartButton",icon:h.c}),Object(g.jsx)(ge.Carousel,{className:"carousel mx-auto",showThumbs:!1,showStatus:!1,children:e.pictures.map((function(e){return Object(g.jsx)("img",{className:"imgCarousel",alt:"artist pictures",src:e})}))}),Object(g.jsxs)("div",{className:"d-flex justify-content-around pt-3 bookings-text",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"h2",children:e.Name}),Object(g.jsxs)("h3",{className:"h3",children:["$",e.Rate]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"h2",children:e.musicType}),Object(g.jsx)("h3",{className:"h3",children:e.bandSize})]})]})]},e.id)}))})}),fe=function(e){return Object(g.jsxs)("div",{className:"",children:[Object(g.jsx)(xe,{artistsData:[{Name:"Austin",Rate:"50 per Hour",musicType:"Pop",bandSize:"2-4",pictures:["/images/artist.png","/images/artist.png","/images/artist.png","/images/artist.png"],id:.123},{Name:"Austin",Rate:"50 per Hour",musicType:"Pop",bandSize:"2-4",pictures:["/images/artist.png","/images/artist.png","/images/artist.png","/images/artist.png"],id:.124}]}),";"]})},ve=t(91);t(126),t(127);var ye=function(){var e=Object(a.useState)(new Date),n=Object(v.a)(e,2),t=n[0],c=n[1];return Object(g.jsx)("div",{className:"calendar-container ",children:Object(g.jsx)(ve.a,{onChange:c,value:t,selectRange:!0})})},we=(t(128),t(152)),Ne=(t(129),["JavaScript","TypeScript","React","Next","Vue","Nuxt","Node","Python"]),$e=function(){var e=Object(a.useState)(),n=Object(v.a)(e,2),t=n[0],c=n[1];return Object(g.jsx)("form",{className:"k-form k-my-8 multiSelect",children:Object(g.jsx)(we.a,{data:Ne,value:t,onChange:function(e){return c(Object(w.a)(e.value))},autoClose:!1,rounded:"large"})})},Se=function(){return Object(g.jsxs)("div",{className:"w-100 p-2",children:[Object(g.jsx)("span",{children:"Music Type : "}),Object(g.jsx)($e,{}),Object(g.jsx)("span",{children:"Band Size : "}),"min max here",Object(g.jsx)($e,{}),Object(g.jsx)("span",{children:"Hourly Rate : "}),"Slider Here",Object(g.jsx)($e,{})]})},ke=function(){return Object(g.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[Object(g.jsx)(Se,{}),Object(g.jsx)(ye,{})]})},Te=(t(130),function(e){return Object(g.jsxs)("div",{className:"d-flex justify-content-center flex-column aligin-items-center ",children:[Object(g.jsx)(ge.Carousel,{className:"carouselReservation",showThumbs:!1,showStatus:!1,children:e.artist.pictures.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{className:"imgReservation",alt:"artist pictures",src:e})})}))}),Object(g.jsx)("h2",{className:"p-2",children:e.artist.Name}),Object(g.jsx)("span",{children:"stars"}),Object(g.jsx)("span",{children:"spotify link"}),Object(g.jsxs)("h3",{className:"h3",children:["$",e.artist.Rate]}),Object(g.jsx)("span",{children:"Description"}),Object(g.jsx)("h2",{className:"h2",children:e.artist.musicType}),Object(g.jsx)("h3",{className:"h3",children:e.artist.bandSize}),Object(g.jsx)("button",{className:"btn btnReservation",children:"Reserve"})]},e.artist.id)}),_e=function(){return Object(g.jsx)("div",{className:"",children:Object(g.jsx)(Te,{artist:{Name:"Austin",Rate:"50 per Hour",musicType:"Pop",bandSize:"2-4",pictures:["/images/artist.png","/images/artist.png","/images/artist.png","/images/artist.png"],id:.123}})})},Ae=t(32),Ce=t(38),Ie=t.p+"static/media/musician.47d944c1.jpg",Re=(t(131),function(){var e=Object(a.useState)({email:"",password:""}),n=Object(v.a)(e,2),t=n[0],c=n[1],i=Object(ie.a)(be),s=Object(v.a)(i,2),o=s[0],l=s[1].error,u=function(){var e=Object(te.a)(ce.a.mark((function e(n){var a,c;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,o({variables:{email:t.email,password:t.password}});case 4:a=e.sent,c=a.data.login.token,ee.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),d=function(e){var n=e.target,a=n.name,i=n.value;c(Object(r.a)(Object(r.a)({},t),{},Object(Ae.a)({},a,i)))};return Object(g.jsx)("section",{className:"loginIn",children:Object(g.jsxs)("div",{className:"media ",children:[Object(g.jsx)("img",{className:"backgroundImage",src:Ie,alt:"folk singer",style:{width:"100%",height:"100%"}}),Object(g.jsx)("h1",{className:"overlayText",children:"Sign in"}),Object(g.jsx)("div",{className:"userCheck"}),Object(g.jsx)("div",{className:"userLogin",children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(Ce.a,{onSubmit:u,children:[Object(g.jsx)(Ce.a.Label,{htmlFor:"loginEmail"}),Object(g.jsx)(Ce.a.Control,{placeholder:"yourname@email.com",type:"email",id:"inputEmail",onChange:d,"aria-describedby":"passwordHelpBlock"}),Object(g.jsx)(Ce.a.Text,{id:"passwordHelpBlock",muted:!0}),Object(g.jsx)(Ce.a.Label,{htmlFor:"loginPassword"}),Object(g.jsx)(Ce.a.Control,{placeholder:"******",type:"passworrd",id:"inputPassword",onChange:d,"aria-describedby":"passwordHelpBlock"})]}),l?Object(g.jsx)("div",{children:Object(g.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(g.jsx)("div",{className:"flex-row flex-end submitButton",children:Object(g.jsx)("button",{type:"submit",children:"Sign in"})})]})})]})})}),Ee=Object(u.a)({uri:"/graphql"}),Pe=Object(b.a)((function(e,n){var t=n.headers,a=localStorage.getItem("id_token");return{headers:Object(r.a)(Object(r.a)({},t),{},{authorization:a?"Bearer ".concat(a):""})}})),He=new d.a({link:Pe.concat(Ee),cache:new j.a});var ze=function(){return Object(g.jsx)(m.a,{client:He,children:Object(g.jsx)(o.a,{children:Object(g.jsx)(M,{children:Object(g.jsxs)("div",{className:"wrapper",children:[Object(g.jsx)(G,{}),Object(g.jsx)("main",{className:"main",children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{exact:!0,path:"/",component:ne}),Object(g.jsx)(l.b,{exact:!0,path:"/artist",component:Oe}),Object(g.jsx)(l.b,{exact:!0,path:"/host",component:he}),Object(g.jsx)(l.b,{exact:!0,path:"/bookings",component:fe}),Object(g.jsx)(l.b,{exact:!0,path:"/explore",component:ke}),Object(g.jsx)(l.b,{exact:!0,path:"/login",component:Re}),Object(g.jsx)(l.b,{exact:!0,path:"/Saved",component:_e})]})}),Object(g.jsx)(f,{})]})})})})},De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(ze,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");De?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Le(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Le(n,e)}))}}()}},[[132,1,2]]]);
//# sourceMappingURL=main.e1243ee0.chunk.js.map