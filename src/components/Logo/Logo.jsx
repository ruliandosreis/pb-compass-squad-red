import React from 'react';
import LogoCompass from '../../assets/icons/LogoCompasso 1.svg';
import LogoCompassWhite from '../../assets/img/LogoCompassoBranco.png';
import { ImageContainer, LogoContainer } from './Logo.style';

export const Logo = () => {
    return (
        <>
            <ImageContainer>
                {' '}
                <img src={LogoCompass} alt='Compass Logo' />
            </ImageContainer>
        </>
    );
};

export const LogoWhite = () => {
    return (
        <>
            <LogoContainer>
                {' '}
                <img src={LogoCompassWhite} alt='Compass Logo' />;
            </LogoContainer>
        </>
    );
};
