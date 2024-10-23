import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './styles.css';

const So = () => {
    const history = useNavigate();

    useEffect(() => {
        const encodedFlag = btoa('7hree_i5_hEr3');
        if (!localStorage.getItem('flag3')) {
            localStorage.setItem('flag3', encodedFlag);
        }
    }, []);

    const handleBonusChallenge = () => {
        const answer = window.prompt("Bonus Challenge: What is 2 + 2?");
        if (answer === '4') {
            alert('Fake Flag: BONUS_FLAG_123');
        }
    };

    const handleNextLevel = () => {
        const hiddenMessage = ["v", "i", "j", "a", "y"].join("");
        if (!Cookies.get('nextLevel')) {
            Cookies.set('nextLevel', '/'+hiddenMessage, { expires: 1 });
        }
    };

    return (
        <div className="level-container">
            <h1>So Level 3</h1>
            <p>Hint: Uncover the hidden code to advance!</p>
            <button onClick={handleBonusChallenge} className="bonus-button">Bonus Challenge</button>
            <button onClick={handleNextLevel} className="next-button">Next Level</button>
        </div>
    );
};

export default So;
