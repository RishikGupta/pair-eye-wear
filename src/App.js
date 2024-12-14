import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KidsEyeglasses from './pages/KidsEyeglasses';
import Accessories from './pages/Accessories';
import SunglassesMen from './pages/SunglassesMen';
import ColorRotator from './pages/ColorRotator';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kids-eyeglasses" element={<KidsEyeglasses />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/sunglasses-men" element={<SunglassesMen />} />
                <Route path="/color-rotator" element={<ColorRotator />} />
            </Routes>
        </Router>
    );
};

export default App;
