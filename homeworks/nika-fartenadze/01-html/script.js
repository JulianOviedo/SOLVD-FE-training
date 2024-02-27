const userNameField = document.getElementById("user-name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const repeatedPasswordField = document.getElementById("repeat-password");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //if all inputs are valid submit form
  if (validateInputs()) {
    form.submit();
  }
});

function isEmailValid(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const error = inputControl.querySelector(".error");

  error.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const error = inputControl.querySelector(".error");

  error.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function validateInputs() {
  let isValid = true;
  const userName = userNameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  const repeatedPassword = repeatedPasswordField.value.trim();

  if (userName === "") {
    setError(userNameField, "User Name is required");
    isValid = false;
  } else {
    setSuccess(userNameField);
  }

  if (email === "") {
    setError(emailField, "Email is required");
    isValid = false;
  } else if (!isEmailValid(email)) {
    setError(emailField, "Please Enter Valid Email");
    isValid = false;
  } else {
    setSuccess(emailField);
  }

  if (password === "") {
    setError(passwordField, "Password is required");
    isValid = false;
  } else if (password.length < 8) {
    setError(passwordField, "Password should be at least 8 characters");
    isValid = false;
  } else {
    setSuccess(passwordField);
  }

  if (userName && email && password.length >= 8) {
    if (repeatedPassword === "") {
      setError(repeatedPasswordField, "Please confirm password");
      isValid = false;
    } else if (repeatedPassword !== password) {
      setError(repeatedPasswordField, "Passwords dont match");
      isValid = false;
    } else {
      setSuccess(repeatedPasswordField);
    }
  }
  return isValid;
}
