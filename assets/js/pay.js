
document.addEventListener("DOMContentLoaded", function () {
    // Function to display a message
    function showMessage(message) {
        alert(message);
    }

    // Function to validate the form
    function validateForm() {
        var fullName = document.getElementById('fullName');
        var address = document.getElementById('address');
        var phone = document.getElementById('phone');
        var city = document.getElementById('city');

        var isValid = true;

        // Check Họ Tên
        if (fullName.value.trim() === "") {
            isValid = false;
            showMessage("Vui lòng nhập Họ Tên.");
        }

        // Check Địa chỉ
        if (address.value.trim() === "") {
            isValid = false;
            showMessage("Vui lòng nhập Địa chỉ.");
        }

        // Check Số điện thoại
        if (phone.value.trim() === "") {
            isValid = false;
            showMessage("Vui lòng nhập Số điện thoại.");
        }

        // Check Tỉnh / Thành phố
        if (city.value.trim() === "") {
            isValid = false;
            showMessage("Vui lòng nhập Tỉnh / Thành phố.");
        }

        return isValid;
    }

    // Function to handle checkout button click
    function handleCheckoutClick() {
        if (validateForm()) {
            // Form is valid, proceed with checkout
            showMessage("Đơn hàng của bạn đã được đặt thành công!");
            // You can add additional logic here for submitting the form or other actions.
        }
    }

    // Attach event listener to the checkout button
    var checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', handleCheckoutClick);
});

