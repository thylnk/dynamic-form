export const validateRequired = (value) => {
    if (!value || !value.toString().trim().length) {
        return "Trường này bắt buộc phải nhập!";
    }
    return null;
};