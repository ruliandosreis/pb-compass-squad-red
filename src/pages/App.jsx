import React from 'react';
import '../index.style.jsx';
import { LoginPage } from './LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from './MainPage/MainPage';
import { SearchPage } from './SearchPage/SearchPage.jsx';
import { GlobalStyle } from '../index.style';

export const App = () => {
    return (
        <>
          <GlobalStyle />
          <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/" element={<MainPage />}/>
              <Route path="/search" element={<SearchPage />}/>
          </Routes>
          </BrowserRouter>
        </>
    );
};
