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
    onChange: PropTypes.func.isRequired,
}

const defaultProps = {
    question: '',
    type: 'radio',
    description: null,
    defaultAnswer: 1,
    required: false,
    opitons: [],
}

export default function Radio({ question, type, description, defaultAnswer, required, options, onChange }) {

    // neu truong defaultAnswer la null thi -> ''
    defaultAnswer = (defaultAnswer === null) ? '' : defaultAnswer;

    const [error, setError] = useState(null);

    const handleError = (type, event) => {

    }

    return (
        <div className='input-group'>
            <label htmlFor="generation">{question}</label>
            <span className='description'>{description}</span>
            <div className='border-left'>
                <div className='input-group' >
                    {

                        (options && options.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input type='radio' name={question} value={item.value}
                                        defaultChecked={defaultAnswer === item.value} />
                                    <label>{item.text}</label>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}


Radio.propTypes = propTypes;

Radio.defaultProps = defaultProps;