export const validateText = (value, attrs) => {
    // neu co yeu cau ktra thi attrs khac null
    if (attrs) {
        const length = value ? value.toString().length : 0;
        let min = attrs.minLength;
        let max = attrs.maxLength;
        if (length < min) {
            return `Bạn phải nhập tối thiểu ${min} kí tự và tối đa ${max} kí tự!`
        }
        else {
            if (length > max) {
                return `Bạn chỉ được phép nhập tối đa ${max} kí tự!`
            }
            return null;
        }
    }
    return null;
};