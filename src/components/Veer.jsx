import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Veer = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!sessionStorage.getItem('flag2')) {
            sessionStorage.setItem('flag2', 'H3y_ar3_Y0u_7w0');
        }
        setProgress(20); // Track progress at 20% after this level
    }, []);

    const handleNextLevel = () => {
        if (!localStorage.getItem('hey this is path')) {
            localStorage.setItem('this is next path', '/something');
        }
    };

    return (
        <div className="level-container">
            <h1>Veer Level 2</h1>
            <p>Progress: {progress}%</p>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <p>Hint: Figure out the code to proceed!</p>
            <button onClick={handleNextLevel} className="next-button">Next Level</button>
        </div>
    );
};

export default Veer;
