(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=n(11),s=n(3),u=n(4),l=n(6),d=n(5),b=n(19),m=n(10),h=n(2),p=n.n(h),j=n(0),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=Object(b.a)(),t.phoneInputId=Object(b.a)(),t.handleInputChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleOnSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(u.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleOnSubmit,className:p.a.container,children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,children:"Name "}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange,id:this.nameInputId,className:p.a.input}),Object(j.jsx)("label",{htmlFor:this.phoneInputId,children:"Number "}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange,id:this.phoneInputId,className:p.a.input}),Object(j.jsx)("button",{className:p.a.btn,type:"submit",children:"Add conttact"})]})}}]),n}(a.Component),O=f,C=n(8),v=n.n(C),x=function(t){var e=t.contactsFiltered,n=t.onClick,a=e();return Object(j.jsx)("ul",{className:v.a.ulStyle,children:a.map((function(t){return Object(j.jsxs)("li",{children:[t.name," ",t.number,Object(j.jsx)("button",{className:v.a.btn,type:"button",name:t.id,onClick:function(){return n(t.id)},children:"Del"})]},t.id)}))})},g=function(t){var e=t.value,n=t.onChange,a=t.inputStyle;return Object(j.jsxs)("label",{children:["Find contact by name",Object(j.jsx)("input",{name:"filter",value:e,onChange:n,className:a})]})},y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.some((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})))alert("".concat(n," is already in contacts"));else{var r={id:Object(b.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(o.a)(e))}}))}},t.handleFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.filter=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.delateItem=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(g,{value:this.state.filter,onChange:this.handleFilterChange,inputStyle:p.a.input}),Object(j.jsx)(x,{contactsFiltered:this.filter,onClick:this.delateItem})]})}}]),n}(a.Component),I=y;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={input:"ContactForm_input__1LWnW",container:"ContactForm_container__1tO6k",btn:"ContactForm_btn__1VWlw"}},8:function(t,e,n){t.exports={btn:"ContactList_btn__267kL",ulStyle:"ContactList_ulStyle__vw5wp"}}},[[18,1,2]]]);
//# sourceMappingURL=main.2c83fd11.chunk.js.map