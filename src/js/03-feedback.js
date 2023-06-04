import throttle  from "lodash.throttle";

const formEl = document.querySelector(".feedback-form")
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea')

const STORAGE_KEY = "feedback-form-state"


formEl.addEventListener('submit', onFormSubmit)
formEl.addEventListener('input',throttle(onFormInput, 500));
const formData = {};
returnFeedback()
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(e.target.value);
}

function onFormSubmit(e){
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));  
e.preventDefault();

if(e.target.elements.email.value === "" || e.target.elements.message.value === ""){
   return alert('всі поля повинні бути заповнені')
} 

e.target.reset()

localStorage.removeItem(STORAGE_KEY)

}

function returnFeedback(){
    const preMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
 
    if (preMassage) {
        emailEl.value = preMassage.email;
        messageEl.value = preMassage.message;
    }
    console.log();
}