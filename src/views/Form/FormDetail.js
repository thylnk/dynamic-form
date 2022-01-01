import React from 'react';
import InputField from '../../components/InputField';
import Radio from '../../components/Radio';

export default function FormDetail({ title, description, questions }) {

    return (

        <div className='form-content'>
            <h2>{title}</h2>
            <span className='description description-main'>{description}</span>
            {
                (questions && questions.map((item, index) => {
                    if (item.type === "RADIO") {
                        return < Radio key={index}
                            question={item.question}
                            type='radio'
                            description={item.description}
                            defaultAnswer={item.defaultAnswer}
                            required={item.required}
                            options={item.options} />
                    }
                    else {
                        return (
                            <InputField
                                key={index}
                                question={item.question}
                                type={item.type}
                                description={item.description}
                                defaultAnswer={item.defaultAnswer}
                                required={item.required}
                                attrs={item.attrs}
                            />
                        )
                    }
                }))
            }
        </div>
    )
}
