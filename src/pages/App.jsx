import React from 'react';
import '../index.style.jsx';
import { LoginPage } from './LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from './MainPage/MainPage';
import { GlobalStyle } from '../index.style';

export const App = () => {
    return (
        <>
          <GlobalStyle />
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/login" element={<LoginPage />}/>
          </Routes>
          </BrowserRouter>
        </>
    );
};
