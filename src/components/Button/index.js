import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    type: PropTypes.string,
    style: PropTypes.string,
    value: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
}

const defaultProps = {
    type: '',
    style: '',
    value: 'Hoàn thành',
    handleClick: PropTypes.func.isRequired,
}


export default function Button({ type, styleClass, value, handleBtn }) {

    const handleClick = (event) => {
        event.preventDefault();
        handleBtn();
    }

    return (
        <button type={type} className={`btn ${styleClass}`} onClick={handleClick}>{value}</button>
    )
}

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;