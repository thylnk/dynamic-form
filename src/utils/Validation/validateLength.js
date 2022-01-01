const inputType = Object.freeze({
    'text': 'SHORT_TEXT',
    'number': 'NUMBER',
    'textarea': 'LENGTH_TEXT',
})

export const validateLength = (value, attrs, type) => {

    if (type === inputType.number) {
        const num = Number.parseInt(value);
        let min = attrs.min;
        let max = attrs.max;
        if (num < min || num > max) {
            return `Bạn phải nhập một số từ ${min} đến ${max}!`
        }
        else {
            return null;
        }
    }
    if (type === inputType.textarea) {
        const length = value ? value.toString().length : 0;
        let min = attrs.minLength;
        let max = attrs.maxLength;
        if (length < min) {
            return `Bạn phải nhập tối thiểu ${min} kí tự và tối đa ${min} kí tự!`
        }
        else {
            if (length > max) {
                return `Bạn chỉ được phép nhập tối đa ${min} kí tự!`
            }
            return null;
        }
    }
    return null;
};