const validateOrderForm = (data) => {
    const errors = {};
    if(data.name === '') {
        errors.name = 'Vui lòng nhập tên người nhận hàng';
    }else {
        if(data.name.length > 50) {
            errors.name = 'Tên người nhận hàng không được quá 50 ký tự';
        }
    }

    if(data.phone === '') {
        errors.phone = 'Vui lòng nhập số điện thoại người nhận hàng'
    }else {
        if(!(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(data.phone))) {
            errors.phone = 'Số điện thoại không hợp lệ';
        }
    }

    if(data.address === '') {
        errors.address = 'Vui lòng nhập địa chỉ người nhận hàng';
    }

    if(data.province === '') {
        errors.province = 'Vui lòng chọn tên tỉnh thành phố người nhận hàng';
    }

    if(data.district === '') {
        errors.district = 'Vui lòng chọn tên quận huyện người nhận hàng';
    }

    if(data.wards === '') {
        errors.wards = 'Vui lòng chọn tên xã phường người nhận hàng';
    }

    if(data.paymentMethod === '') {
        errors.paymentMethod = 'Vui lòng chọn phương thức thanh toán';
    }

    return errors;

}

export default validateOrderForm;