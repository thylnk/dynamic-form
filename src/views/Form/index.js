import React, { useEffect, useState } from 'react';
import '../../assets/style.css';
import formApi from '../../api/formApi';
import FormDetail from './FormDetail';
import Button from '../../components/Button';

const FormPage = () => {

    const [step, setStep] = useState(1);
    const [error, setError] = useState(true); // true -> loi
    const [title, setTilte] = useState('');
    const [description, setDescription] = useState(null);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await formApi.getAll();
                setTilte(response.title);
                setDescription(response.description);
                setSections(response.sections);
            } catch (error) {
                // setError(error);
            }
        }
        fetchData();
    }, [])


    const nextStep = () => {
        let currentStep = step;
        if (error || currentStep === sections.length) {
            alert('Bạn chưa điền đủ thông tin!')
            return;
        }
        setStep(currentStep + 1);
        setError(true);
    }

    const prevStep = () => {
        let currentStep = step;
        if (currentStep > 1) {
            setStep(currentStep - 1);
        }
    }

    const handleSubmit = () => {
        if (!error) {
            alert('Submit form nè!')
        }
        else {
            alert('Bạn chưa điền đủ thông tin!')
        }
    }

    return (
        <form >
            <div className='form-group'>
                <div className='left-col'>
                    <div className='input-group'>
                        <h1 className='title'>{title}</h1>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='button-group'>
                        {
                            function () {
                                if (step === 1) {
                                    return (
                                        <Button styleClass="btn btn-next" value='Mục sau' handleBtn={nextStep} />
                                    )
                                }
                                else if (step < sections.length) {
                                    return (
                                        <div>
                                            <Button styleClass="btn-prev" value='Mục trước' handleBtn={prevStep} />
                                            <Button styleClass="btn-next" value='Mục sau' handleBtn={nextStep} />
                                        </div>
                                    )
                                }

                                return (
                                    <div>
                                        <Button styleClass="btn-prev" value='Mục trước' handleBtn={prevStep} />
                                        <Button type='submit' styleClass="btn-submit" value='Hoàn thành' handleBtn={handleSubmit} />
                                    </div>
                                )
                            }()
                        }
                    </div>
                </div>
                <div className='right-col'>

                    {
                        (sections && sections.map((item, index) => {
                            if (index === step - 1) {
                                return (
                                    < FormDetail
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        questions={item.questions}
                                        setError={setError}
                                    />
                                )
                            }
                        }))
                    }
                </div>
            </div>
        </form >
    )
}

export default FormPage;