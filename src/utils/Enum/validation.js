import { validateRequired } from "../Validation/validateRequired";
import { validateNumber } from "../Validation/validateNumber"
import { validateText } from "../Validation/validateText"


export const validation = Object.freeze({
    'required': validateRequired,
    'number': validateNumber,
    'text': validateText,
})
