import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { inputType } from '../../utils/Enum/inputType';
import { validation } from '../../utils/Enum/validation';

const propTypes = {
    question: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    defaultAnswer: PropTypes.string,
    required: PropTypes.bool,
    attrs: PropTypes.object,
    setError: PropTypes.func,
}

const defaultProps = {
    question: null,
    type: 'text',
    description: null,
    defaultAnswer: '',
    required: false,
    attrs: {},
    setError: () => { },
}

export default function InputField({ question, type, description, defaultAnswer, required, attrs, setError }) {

    // neu truong defaultAnswer la null thi -> ''
    defaultAnswer = (defaultAnswer === null) ? '' : defaultAnswer;

    const [errorInput, setErrorInput] = useState(null);

    const handleError = (event) => {
        let error = null;
        const value = event.target.value;
        if (required) {
            error = validation.required(value);
            setErrorInput(error);
            // null thi ktra tiep do dai cua value co thoa khong
            if (!error) {
                error = (type === inputType.number) ? validation.number(value, attrs) : validation.text(value, attrs);
                // setErrorInput
                setErrorInput(error);
            }
            // setError de submitForm hay khong
            setError((error) ? true : false);
        }
    }

    return (

        (type === inputType.textarea ? (
            // inputfield cho textarea
            <div className='input-group'>
                <label>{question}</label >
                <span className='description'>{description}</span>
                <textarea className='border-left' onBlur={(event) => handleError(event)} defaultValue={defaultAnswer} />
                {
                    (errorInput && <span className='error'><i className='fas fa-exclamation-triangle'></i>{errorInput}</span>)
                }
            </div >
        ) : (

            // inputfield cho text/number
            <div className='input-group'>
                <label>{question}</label>
                <span className='description'>{description}</span>
                <input className='border-left' type='text' onBlur={(event) => handleError(event)} defaultValue={defaultAnswer} />
                {
                    (errorInput && <span className='error'><i className='fas fa-exclamation-triangle'></i>{errorInput}</span>)
                }
            </div>
        ))
    )
}

InputField.propTypes = propTypes;

InputField.defaultProps = defaultProps;