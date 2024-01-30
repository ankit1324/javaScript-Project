const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const msgContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

const validateForm = () => {
  //Using Contraints API
  isValid = form.checkValidity();
  //   console.log(isValid);
  //  Style msg for an error
  if (!isValid) {
    message.textContent = "PLEASE FILL OUT ALL FIELDS.";
    message.style.color = "red";
    message.style.borderColor = "red";
    return; //imp stop execution
  }
  //Check to see if password match
  if (password1.value === password2.value) {
    passwordMatch = true;
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    message.style.borderColor = "red";
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    return; //imp stop execution
  }
  //if form is valid & password matches
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered";
    message.style.color = "green";
    message.style.borderColor = "green";
  }
};

const storeFormDate = () => {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
};
const processFormdata = (e) => {
  e.preventDefault();
  //console.log(e);
  //validate from
  validateForm();
  //Submit Date if valid
  if (isValid && passwordMatch) {
    storeFormDate();
  }
};
form.addEventListener("submit", processFormdata);
