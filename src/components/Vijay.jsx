import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Vijay = () => {

    const fake= 'fake_flag';
    useEffect(() => {
        const finalFlag = 'N0ting_is_like_vict0ry}';
        const encodedFinalFlag = btoa(finalFlag);
        if (!localStorage.getItem('flag4')) {
            localStorage.setItem('flag4', encodedFinalFlag);
        }
    }, []);

    return (
        <div className="level-container">
            <h1>Victory Level</h1>
            <p>Congratulations! You have completed the challenge.</p>
            <p>Your final flag is: {btoa(fake)}</p>
            <p>Thank you for playing!</p>
        </div>
    );
};

export default Vijay;
