
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.about-us form');
    const nameInput = document.getElementById('Name');
    const emailInput = document.getElementById('Email');
    const addressInput = document.getElementById('Address');
    const telephoneInput = document.getElementById('Telephone');
    const messageTextarea = document.getElementById('Message');
    const submitButton = document.getElementById('btn');

    submitButton.addEventListener('click', function (e) {
      e.preventDefault();

      // Xác thực các trường biểu mẫu
      if (!nameInput.value || !addressInput.value || !telephoneInput.value || !messageTextarea.value) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
      }

      // Xác thực định dạng điện thoại
      const telephoneRegex = /^0\d{9}$/;
      if (!telephoneRegex.test(telephoneInput.value)) {
        alert('Số điện thoại nhập sai định dạng. Vui lòng nhập lại');
        return;
      }

      // Tạo một đối tượng với dữ liệu biểu mẫu
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        address: addressInput.value,
        telephone: telephoneInput.value,
        message: messageTextarea.value,
      };

      // Xóa các trường biểu mẫu sau khi gửi
      nameInput.value = '';
      emailInput.value = '';
      addressInput.value = '';
      telephoneInput.value = '';
      messageTextarea.value = '';

      alert('Thông tin đã được gửi');
    });
  });

