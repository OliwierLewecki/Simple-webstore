import React from 'react';
import { Route, Routes } from 'react-router-dom';
import h1 from '../img/h1.jpg';
import h2 from '../img/h2.jpg';
import h3 from '../img/h3.jpg';
import '../styles/Header.css'

const Header = () => {
    return(
        <Routes>  
            <Route path='/*' element={<img src={h1} alt='num' />} />
            <Route path='/products' element={<img src={h2} alt='num' />} />
            <Route path='/contact' element={<img src={h3} alt='num' />} />
        </Routes>
    );
}

export default Header;