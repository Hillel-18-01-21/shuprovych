const contentEl = document.getElementById("content");

const loginComponent = new LoginComponent(
  document.getElementById("login-template").innerText,
  contentEl
);

loginComponent.init();

const userComponent = new UserComponent(
  document.getElementById("user-list-template").innerText,
  document.getElementById("user-item-template").innerText,
  contentEl
);

function onSuccessLogin() {
  loginComponent.dispose();

  userComponent.init();
}
