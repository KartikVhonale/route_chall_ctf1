import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const Iam = () => {
    // const history = useNavigate();
    const [hint, setHint] = useState("Find the hidden path!");

    useEffect(() => {
        if (!Cookies.get('flag1')) {
            Cookies.set('flag1', 'AARHANT_THM{ATh15_i$_p4rT1', { expires: 1 });
        }
        if (!localStorage.getItem('/veer')) {
            localStorage.setItem('veer', '/veer');
        }
        setTimeout(() => {
            setHint("Did you check the data attributes?");
        }, 5000);
    }, []);

    // const handleNextLevel = () => {
    //     const nextLevel = document.getElementById("next-level").getAttribute("data-next");
    //     history.push(nextLevel);
    // };

    return (
        <div className="level-container">
            <h1>I am Level 1</h1>
            <p className="hint">{hint}</p>
            <button className="next-button">Next Level</button>
            <div id="next-level" data-next="/veer" style={{ display: 'none' }}></div>
        </div>
    );
};

export default Iam;
