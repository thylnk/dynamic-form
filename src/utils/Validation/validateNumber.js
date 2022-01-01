import { regex } from "./Regex";

export const validateNumbers = (value) => {
    const length = value ? value.toString().trim().length : 0;
    console.log(length)
    if (length > 0) {
        const result = regex.number.test(value);
        if (!result) return "Trường này chỉ cho phép nhập số!";
    }
    return null;
};