// validation form register and register user local storage
//const inputUsernameRegister = document.querySelector(".input-signup-username");
//const inputEmailRegister = document.querySelector(".input-signup-email");
//const inputPasswordRegister = document.querySelector(".input-signup-password");
//const inputConfirmPasswordRegister = document.querySelector(".input-signup-confirmpassword");
//const btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

//btnRegister.addEventListener("click", (e) => {
  //e.preventDefault();
  //if (
   // inputUsernameRegister.value === "" ||
    //inputEmailRegister.value === "" ||
    //inputPasswordRegister.value === "" ||
    //inputConfirmPasswordRegister.value === ""
  //) {
    //alert("vui lòng không để trống");
  //} else {
    // array user
  //  const user = {
  //    username: inputUsernameRegister.value,
  //    email: inputEmailRegister.value,
  //    password: inputPasswordRegister.value,
  //    confirmpassword: inputConfirmPasswordRegister.value,
  //  };
  //  let json = JSON.stringify(user);
   // localStorage.setItem(inputUsernameRegister, json);
   // alert("Đăng Ký Thành Công");
  //  window.location.href = "login.html";
 // }
//});

// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputEmailRegister = document.querySelector(".input-signup-email");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputConfirmPasswordRegister = document.querySelector(".input-signup-confirmpassword");
const btnRegister = document.querySelector(".signup__signInButton");

// Regular expression for a simple check of @gmail.com format
const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

// validation form register and register user local storage
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  // Check if any field is empty
  if (
    inputUsernameRegister.value === "" ||
    inputEmailRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    inputConfirmPasswordRegister.value === ""
  ) {
    alert("Vui lòng không để trống");
  } else if (inputPasswordRegister.value !== inputConfirmPasswordRegister.value) {
    // Check if password and confirm password match
    alert("Mật khẩu không khớp. Vui lòng nhập lại");
  } else if (!emailRegex.test(inputEmailRegister.value)) {
    alert("Email nhập sai định dạng. Vui lòng nhập lại với định dạng @gmail.com");
  } else {
    // Create a user object
    const user = {
      username: inputUsernameRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };

    // Use the username or email as the key for localStorage
    const localStorageKey = user.username || user.email;

    // Convert the user object to JSON and store it in localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(user));

    alert("Đăng ký thành công");
    window.location.href = "#my-Login";
  }
});
