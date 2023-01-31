import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductListPage from '../pages/ProductListPage';


const Page = () => {
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductListPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    );
}

export default Page;