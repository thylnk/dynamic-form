import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateNumbers } from '../../utils/Validation/validateNumber';
import { validateLength } from '../../utils/Validation/validateLength';
import { validateRequired } from '../../utils/Validation/validateRequired';

const propTypes = {
    question: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    defaultAnswer: PropTypes.number,
    required: PropTypes.bool,
    opitons: PropTypes.array,
}

const defaultProps = {
    question: '',
    type: 'radio',
    description: null,
    defaultAnswer: 1,
    required: false,
    opitons: [],
}

export default function Radio({ question, type, description, defaultAnswer, required, options }) {


    const [error, setError] = useState(null);

    const handleError = (type, event) => {

    }

    return (
        <div className='input-group'>
            <label htmlFor="generation">{question}</label>
            <span className='description'>{description}</span>
            <div className='border-left'>
                {

                    (options && options.map((item, index) => {
                        return (
                            <div className='input-group' key={index}>
                                <input type='radio' name={question} value={item.value}
                                    checked={defaultAnswer === item.value} />
                                <label>{item.text}</label>
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    )
}


Radio.propTypes = propTypes;

Radio.defaultProps = defaultProps;