const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.querySelector("input[name='password']");

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
});

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  if (password.length < 8) {
    passwordInput.setCustomValidity('Password must be at least 8 characters long.');
  } else {
    passwordInput.setCustomValidity('');
  }
});