import React from 'react';
import '../index.css';
import { LoginPage } from './LoginPage/LoginPage';

import { MainPage } from './MainPage/MainPage';
import { GlobalStyle } from '../index.style';

export const App = () => {
    return (
        <>
            <LoginPage />

            <GlobalStyle />
            <MainPage />
        </>
    );
};
