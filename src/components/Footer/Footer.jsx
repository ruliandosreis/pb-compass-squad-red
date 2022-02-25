import React from 'react';
import UserSvg from '../../assets/icons/VectorUser.svg'
import { FooterContainer, FooterText, StaticText, Line, FooterSearchContainer, FooterSearch, FooterSearchIcon, FooterResetContainer, ResetWarning, FooterLogoutButton, FooterLogoutAnchor } from './Footer.style'

import Timer from '../Timer/Timer'

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterText>
                    <StaticText>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
                        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                    </StaticText>
                </FooterText>
                <Line></Line>
                <FooterSearchContainer>
                    <FooterSearch type='text' placeholder='Buscar Usuário'></FooterSearch>
                    <FooterSearchIcon src={UserSvg} />
                </FooterSearchContainer>
                <Line></Line>
                <FooterResetContainer>
                    <ResetWarning>Application refresh in</ResetWarning>
                        <Timer/>
                </FooterResetContainer>
                <FooterLogoutButton>
                    <FooterLogoutAnchor a href="http://localhost:3000/login">Logout</FooterLogoutAnchor>
                </FooterLogoutButton>
            </FooterContainer>
        </>
    );
};

