import React from 'react';

const Button = ({title, onClick, loading}) => {
    if(loading){
        return <button className="btn disable">Loading...</button>
        //di register.css untuk button nanti diberika style DISABLE
    }
    return (
        <button className="btn" onClick={onClick}>{title}</button>
    )
}

export default Button;