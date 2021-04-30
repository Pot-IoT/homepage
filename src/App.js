import React from 'react';
import './App.css';
import Navbar from './compoents/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Documentation from './pages/Documentation';
import Pricing from './pages/Pricing/Pricing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './compoents/Footer/Footer';
import ScrollToTop from './compoents/ScrollToTop';

function App() {
  return (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/documentation' exact component={Documentation}/>
            <Route path='/pricing' exact component={Pricing}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
