import React, { useEffect, useState } from 'react';
import '../../assets/style.css';
import formApi from '../../api/formApi';
import FormDetail from './FormDetail';
import Button from '../../components/Button';

const FormPage = () => {

    const [step, setStep] = useState(1);
    const [error, setError] = useState('a');
    // const [isLoaded, setIsLoaded] = useState(false);
    const [title, setTilte] = useState('');
    const [description, setDescription] = useState(null);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await formApi.getAll();
                // setIsLoaded(true);
                setTilte(response.title);
                setDescription(response.description);
                setSections(response.sections);
                // console.log(sections);
            } catch (error) {
                // setIsLoaded(true);
                // setError(error);
                console.log(error);
            }
        }
        fetchData();
    }, [])


    const nextStep = () => {
        let currentStep = step;
        if (!error || currentStep === sections.length) {
            return;
        }
        setStep(currentStep + 1);
    }

    const prevStep = () => {
        let currentStep = step;
        if (error && currentStep > 1) {
            setStep(currentStep - 1);
        }
    }

    const handleSubmit = () => {
        if (error) {
            alert('Submit form nè!')
        }
        else {
            alert('Điền đủ thông tin đi bồ!')
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
                    {/* 
                        sections:
                        title, descript, questions 
                    */}

                    {
                        (sections && sections.map((item, index) => {
                            if (index === step - 1) {
                                return (
                                    < FormDetail
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        questions={item.questions}
                                    />
                                )
                            }
                        }))
                    }

                    {/* <div className='form-content'>
                        <h2>Khảo sát sơ bộ</h2>
                        <div className='input-group'>
                            <label htmlFor="name">Bạn tên gì?</label>
                            <input type="text" name="name" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="name">Bạn tên gì?</label>
                            <input type="text" name="name" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="name">Bạn tên gì?</label>
                            <input type="text" name="name" />
                            <span className='error'><i className='fas fa-exclamation-triangle'></i>Ở đây phải nhập số</span>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="generation">Các bạn đã tham gia GDSC được bao lâu rồi?
                            </label>
                            <span className='description'>Thời gian các bạn tham gia GDSC, tính theo thế hệ (generation)
                            </span>
                            <div className='input-group'>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label htmlFor="huey">Huey</label>
                            </div>
                            <div className='input-group'>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label htmlFor="huey">Huey</label>
                            </div>
                            <div className='input-group'>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label htmlFor="huey">Huey</label>
                            </div>
                        </div>
                        <div className='input-group'>
                            <label htmlFor="generation">Các bạn đã tham gia GDSC được bao lâu rồi?
                            </label>
                            <span className='description'>Thời gian các bạn tham gia GDSC, tính theo thế hệ (generation)
                            </span>
                            <div className='input-group'>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label htmlFor="huey">Huey</label>
                            </div>
                            <div className='input-group'>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label htmlFor="huey">Huey</label>
                            </div>
                            <div className='input-group'>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label htmlFor="huey">Huey</label>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </form >
    )
}

export default FormPage;