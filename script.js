document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  function validateLoginForm(event) {
    event.preventDefault();
  }

  function validateSignupForm(event) {
    event.preventDefault();
  }

  if (loginForm) {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const staySignedInInput = document.querySelector(
      'input[name="staySignedIn"]'
    );
    loginForm.addEventListener("submit", validateLoginForm);
  }

  if (signupForm) {
    const fullNameInput = document.querySelector('input[name="fullName"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const confirmPasswordInput = document.querySelector(
      'input[name="confirmPassword"]'
    );
    const agreeCheckbox = document.querySelector('input[type="checkbox"]');
    signupForm.addEventListener("submit", validateSignupForm);
  }
});
