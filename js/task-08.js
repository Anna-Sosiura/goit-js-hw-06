const formEl=document.querySelector(".login-form");

formEl.addEventListener('submit', submitFunction);
function submitFunction(event){
    event.preventDefault();
const emailEl=event.currentTarget.elements.email.value;
const passwordEl=event.currentTarget.elements.password.value;
if (emailEl===""||passwordEl===""){
    alert("всі поля повинні бути заповнені");
}
const{email,password}=event.currentTarget.elements;
const login={
    email:email.value,
    password:password.value,
}
event.currentTarget.reset();
}