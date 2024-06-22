import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Button = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate(props.to);
    };

    const currentButton = location.pathname === props.to ? `bg-c3 ${props.textcolor} font-bold py-2.5 px-5` : ` py-2 px-4 text-c1 bg-c3`;

    return (
        <button
            className={`${currentButton} mx-6  rounded-full cursor-pointer`}
            onClick={handleClick}
        >
            {props.message}
        </button>
    );
}