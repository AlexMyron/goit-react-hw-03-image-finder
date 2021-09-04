(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(n,e,t){},40:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var a,r=t(0),o=t.n(r),i=t(10),c=t.n(i),l=(t(19),t(9)),p=t(4),s=t(5),u=t(7),d=t(6),h=t(11),g=t.n(h),x=(t(40),t(2)),f=x.a.header("\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n"),b=x.a.form("\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"),m=x.a.button("\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover, &:focus{\n    opacity: 1;\n  }\n  "),j=x.a.span("\n  position: absolute;\n//   width: 1px;\n//   height: 1px;\n//   padding: 0;\n//   overflow: hidden;\n//   clip: rect(0, 0, 0, 0);\n//   white-space: nowrap;\n//   clip-path: inset(50%);\n//   border: 0;\n"),y=x.a.input("\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::plactholder{\n    font: inherit;\n    font-size: 18px;\n  }\n"),v=t(1),w=function(n){Object(u.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={inputValue:""},n.handleSearchInput=function(e){n.setState({inputValue:e.currentTarget.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.sendInputValue(n.state.inputValue)},n}return Object(s.a)(t,[{key:"render",value:function(){return Object(v.jsx)(f,{children:Object(v.jsxs)(b,{onSubmit:this.handleSubmit,children:[Object(v.jsx)(m,{type:"submit",children:Object(v.jsx)(j,{})}),Object(v.jsx)(y,{type:"text",value:this.state.inputValue,onChange:this.handleSearchInput,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),t}(r.Component),O=x.a.li("\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"),k=x.a.img("\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover, &:focus{\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"),I=function(n){var e=n.queryResult;return Object(v.jsx)(v.Fragment,{children:e.map((function(n){return Object(v.jsx)(O,{children:Object(v.jsx)(k,{src:n.webformatURL,alt:n.tags,"data-id":n.id})},n.id)}))})},S=x.a.ul("\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"),R=function(n){var e=n.queryResult,t=n.getImage;return Object(v.jsx)(S,{onClick:t,children:Object(v.jsx)(I,{queryResult:e})})},M=x.a.button("\n  width: 100px;\n    margin: 0 auto;\n"),C=function(n){var e=n.handleClick;return Object(v.jsx)(M,{type:"button",onClick:e,children:"Load more"})},L=t(13),z=x.a.div(a||(a=Object(L.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),U=x.a.button("\ndisplay: block;\n  margin-left: auto;\n  margin-right: 0;\n  margin-bottom: 5px;\n\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n}\n\n"),F=x.a.div("\n  \n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"),P=x.a.div("\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"),q=function(n){Object(u.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).componentDidMount=function(){window.addEventListener("keydown",n.handleKeydown)},n.handleKeydown=function(e){"Escape"===e.code&&n.props.handleKeycode()},n}return Object(s.a)(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(v.jsx)(P,{onClick:this.props.handleOverlayClick,children:Object(v.jsx)(F,{children:this.props.children})})}}]),t}(r.Component),E=function(n,e){return fetch("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=22046149-41a2515b5a783e6a5f4bfbfcc&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong"))}))},V=function(n){Object(u.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={searchInput:"",currentPage:1,apiResult:[],error:"",openModal:!1,loader:!1,currentImageId:"",currentImageURL:""},n.showModal=function(e){if("IMG"===e.target.nodeName){var t=Number(e.target.dataset.id);n.getImageUrl(t),n.setState({openModal:!0})}},n.getImageUrl=function(e){var t=n.state.apiResult.find((function(n){return n.id===e}));return n.setState({currentImageURL:t.largeImageURL}),t.largeImageURL},n.handleSearchinput=function(e){n.setState({searchInput:e});var t=n.state.currentPage.currentPage;n.setState({currentPage:1,apiResult:[]}),n.fetchRequest(e,t)},n.handleLoadMore=function(e){var t=n.state,a=t.searchInput,r=t.currentPage;n.setState({currentPage:r+1}),n.fetchRequest(a,r+1)},n.toggleModal=function(){n.setState((function(n){return{openModal:!n.openModal}}))},n.closeModal=function(e){"IMG"!==e.target.nodeName&&n.toggleModal()},n}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(n,e){this.state!==e&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"fetchRequest",value:function(n,e){var t=this;this.setState({loader:!0}),E(n,e).then((function(n){return t.setState((function(e){return{apiResult:[].concat(Object(l.a)(e.apiResult),Object(l.a)(n.hits))}}))})).catch((function(n){return t.setState({error:n})})).finally((function(){return t.setState({loader:!1})}))}},{key:"render",value:function(){var n=this.state,e=n.openModal,t=n.apiResult,a=n.loader,r=n.currentImageURL,o=n.error,i=this.state.apiResult.length>0;return Object(v.jsxs)(z,{className:"App",children:[Object(v.jsx)(w,{sendInputValue:this.handleSearchinput}),Object(v.jsx)(R,{queryResult:t,getImage:this.showModal}),a&&Object(v.jsx)(g.a,{className:"loaderIcon",type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e5}),e&&Object(v.jsxs)(q,{handleOverlayClick:this.closeModal,handleKeycode:this.toggleModal,children:[Object(v.jsx)(U,{type:"button",children:"Close"}),Object(v.jsx)("img",{src:r,alt:""},"null")]}),o&&Object(v.jsxs)("p",{children:["Woops... ",o.message]}),i&&Object(v.jsx)(C,{handleClick:this.handleLoadMore})]})}}]),t}(r.Component),D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),o(n),i(n)}))};c.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(V,{})}),document.getElementById("root")),D()}},[[45,1,2]]]);
//# sourceMappingURL=main.20643e1c.chunk.js.map