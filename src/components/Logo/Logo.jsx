import React from 'react';
import LogoCompass from '../../assets/icons/LogoCompasso 1.svg'
import { ImageContainer, ImageLogo } from './Logo.style';

export const Logo = () => {
    return (
        <>
            <ImageContainer>
                    {' '}
                    <img
                        src={LogoCompass}
                        alt='Compass Logo'
                    />
            </ImageContainer>
        </>
    );
};
