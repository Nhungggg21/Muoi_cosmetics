
// Biểu mẫu xác thực Đăng ký và đăng ký bộ nhớ cục bộ của người dùng
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputEmailRegister = document.querySelector(".input-signup-email");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputConfirmPasswordRegister = document.querySelector(".input-signup-confirmpassword");
const btnRegister = document.querySelector(".signup__signInButton");

// Biểu thức chính quy để kiểm tra đơn giản định dạng @gmail.com
const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

// Biểu mẫu xác thực Đăng ký và đăng ký bộ nhớ cục bộ của người dùng
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  // Kiểm tra xem có trường nào trống không
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
    // Tạo đối tượng người dùng
    const user = {
      username: inputUsernameRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };

    // Sử dụng tên người dùng hoặc email làm khóa cho localStorage
    const localStorageKey = user.username || user.email;

    // Chuyển đổi đối tượng người dùng thành JSON và lưu trữ nó trong localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(user));

    alert("Đăng ký thành công");
    window.location.href = "#my-Login";
  }
});
