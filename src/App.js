import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Iam from './components/Iam.jsx';
import Veer from './components/Veer.jsx';
import So from './components/So.jsx';
import Vijay from './components/Vijay.jsx';
import './styles.css'; // Import styles

const App = () => {
    return (
            <Routes>
                <Route index element={<Iam/> }/>
                <Route path="/veer" element={<Veer/>} />
                <Route path="/something" element={<So/>} />
                <Route path="/vijay" element={<Vijay/>} />
            </Routes>
            // <>
            // <Iam/>
            // </>
    );
};

export default App;
