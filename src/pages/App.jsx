import React from 'react';
import '../index.style.jsx';
import { LoginPage } from './LoginPage/LoginPage';

import { MainPage } from './MainPage/MainPage';
import { GlobalStyle } from '../index.style';

export const App = () => {
    return (
        <>
          <GlobalStyle />
            <LoginPage />

            <MainPage />
        </>
    );
};
