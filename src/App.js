import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import KidsEyeglasses from './pages/KidsEyeglasses';
import Accessories from './pages/Accessories';
import SunglassesMen from './pages/SunglassesMen';
import ColorRotator from './pages/ColorRotator';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/pair-eye-wear" component={Home} />
                <Route path="/kids-eyeglasses" component={KidsEyeglasses} />
                <Route path="/accessories" component={Accessories} />
                <Route path="/sunglasses-men" component={SunglassesMen} />
                <Route path="/color-rotator" component={ColorRotator} />
            </Switch>
        </Router>
    );
};

export default App;
