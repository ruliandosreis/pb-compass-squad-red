import React from 'react';
import { Clock } from '../Clock/Clock';
import { Logo } from '../Logo/Logo';
import { Weather } from '../Weather/Weather';
import { HeaderContainer } from './Header.style';

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Logo/>
                <Clock/>
                <Weather/>
            </HeaderContainer>
        </>
    );
};
