import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateNumbers } from '../../utils/Validation/validateNumber';
import { validateLength } from '../../utils/Validation/validateLength';
import { validateRequired } from '../../utils/Validation/validateRequired';

const propTypes = {
    question: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    defaultAnswer: PropTypes.string,
    required: PropTypes.bool,
    attrs: PropTypes.object,
}

const defaultProps = {
    question: null,
    type: 'text',
    description: null,
    defaultAnswer: '',
    required: false,
    attrs: {},
}

const inputType = Object.freeze({
    'text': 'SHORT_TEXT',
    'number': 'NUMBER',
    'textarea': 'LONG_TEXT',
    'radio': 'RADIO',
})

export default function InputField({ question, type, description, defaultAnswer, required, attrs }) {

    // neu truong defaultAnswer la null thi -> ''
    defaultAnswer = (defaultAnswer === null) ? '' : defaultAnswer;

    const [error, setError] = useState(null);

    const handleError = (type, event) => {
        if (required) {
            let value = event.target.value;

            let err = validateRequired(value);

            if (err === null) {
                err = validateLength(value, attrs, type);
                if (type === inputType.number) {
                    err = validateNumbers(value);
                }
            }

            setError(err);
        }
    }

    return (

        (type === inputType.textarea ? (
            // inputfield cho textarea
            <div className='input-group'>
                <label>{question}</label >
                <span className='description'>{description}</span>
                <textarea className='border-left' onBlur={handleError} defaultValue={defaultAnswer} />
                {
                    (error && <span className='error'><i className='fas fa-exclamation-triangle'></i>{error}</span>)
                }
            </div >
        ) : (

            // inputfield cho text/number
            <div className='input-group'>
                <label>{question}</label>
                <span className='description'>{description}</span>
                <input className='border-left' type='text' onBlur={(event) => handleError(type, event)} defaultValue={defaultAnswer} />
                {
                    (error && <span className='error'><i className='fas fa-exclamation-triangle'></i>{error}</span>)
                }
            </div>
        ))
    )
}

InputField.propTypes = propTypes;

InputField.defaultProps = defaultProps;

/*
(type === inputType.number) ? (
            <div className='input-group'>
                <label>{question}</label>
                <span className='description'>{description}</span>
                <input type='text'
                    defaultValue={defaultAnswer}
                    onBlur={(event) => handleError(type, event)} />
                {
                    (error && <span className='error'><i className='fas fa-exclamation-triangle'></i>{error}</span>)
                }
            </div>
        ) : 
*/