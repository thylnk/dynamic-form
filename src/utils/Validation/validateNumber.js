import { regex } from "./Regex";

export const validateNumber = (value, attrs) => {
    const length = value ? value.toString().trim().length : 0;

    if (length > 0) {
        const result = regex.number.test(value);
        if (!result) {
            return "Trường này chỉ cho phép nhập số!"
        }
        else {
            // value la so
            // neu yeu cau ktra min, max thi attrs khac null
            if (attrs) {
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
        }
    }
    return null;
};