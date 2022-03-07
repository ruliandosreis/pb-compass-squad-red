import React,{useState} from 'react'
import UserSvg from '../../assets/icons/VectorUser.svg'
import { FooterContainer, FooterText, StaticText, Line, FooterSearchContainer, FooterSearch, FooterSearchIcon, FooterResetContainer, ResetWarning, FooterLogoutButton, FooterLogoutAnchor } from './Footer.style'

import Timer from '../Timer/Timer'
import {ApiResponse} from '../API/Api.Response'

export const Footer = () => {
const [name, setName] = useState('')


function handleChange(e) {
         setName(e.target.value);
  }

function onKeyEnter(e) {
    if (e.keyCode === 13) {
        window.location.href = "http://localhost:3000/search"
    }
}

    return (
        <>
            <ApiResponse searchName = {name} style={{display:'none'}}></ApiResponse>
            <FooterContainer>
                <FooterText>
                    <StaticText>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
                        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                    </StaticText>
                </FooterText>
                <Line></Line>
                <FooterSearchContainer>
                    <FooterSearch 
                        type='text' 
                        placeholder='Buscar Usuário'
                        defaultValue={name}
                        onChange = {handleChange}
                        onKeyDown = {onKeyEnter}
                    ></FooterSearch>
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

