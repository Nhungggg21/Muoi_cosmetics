// Đăng nhập biểu mẫu xác thực
const inputUsername = document.querySelector(".input-login-username");
const inputEmail = document.querySelector(".input-login-email");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// Đăng nhập biểu mẫu xác thực

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsername.value === "" || 
    inputEmail.value === "" || 
    inputPassword.value === ""
    ) {
    alert("vui lòng không để trống");}
    else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value || inputEmail.value));
    if (
      user.username === inputUsername.value &&
      user.email === inputEmail.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
