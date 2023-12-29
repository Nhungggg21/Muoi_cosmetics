
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

      // Validate form fields
      if (!nameInput.value || !addressInput.value || !telephoneInput.value || !messageTextarea.value) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
      }

      // Validate telephone format
      const telephoneRegex = /^0\d{9}$/;
      if (!telephoneRegex.test(telephoneInput.value)) {
        alert('Số điện thoại nhập sai định dạng. Vui lòng nhập lại');
        return;
      }

      // Create an object with form data
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        address: addressInput.value,
        telephone: telephoneInput.value,
        message: messageTextarea.value,
      };

      // You can perform additional actions with the form data here, such as sending it to a server

      // Clear form fields after submission
      nameInput.value = '';
      emailInput.value = '';
      addressInput.value = '';
      telephoneInput.value = '';
      messageTextarea.value = '';

      alert('Thông tin đã được gửi');
    });
  });

