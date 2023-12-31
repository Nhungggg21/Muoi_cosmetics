
document.addEventListener("DOMContentLoaded", function () {
    // Chức năng hiển thị tin nhắn
    function showMessage(message) {
        alert(message);
    }

    // Chức năng xác thực biểu mẫu
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

    // Chức năng xử lý nút thanh toán nhấp chuột
    function handleCheckoutClick() {
        if (validateForm()) {
            showMessage("Đơn hàng của bạn đã được đặt thành công!");
        }
    }

    // Đính kèm trình nghe sự kiện vào nút thanh toán
    var checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', handleCheckoutClick);
});
