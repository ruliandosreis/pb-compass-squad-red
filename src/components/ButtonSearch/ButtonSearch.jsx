import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonsContainer, ButtonSearchStyle, ButtonExitStyle } from "./ButtonSearch.style";

const buttonName = 'Buscar'
const buttonExit = 'Sair'


export const ButtonSearch = ()=>{

    let returnPage2 = useNavigate();
    return(
        <ButtonsContainer>
            <ButtonSearchStyle>{buttonName}</ButtonSearchStyle>
            <ButtonExitStyle onClick={()=>{
              returnPage2('/');
            }}>{buttonExit}</ButtonExitStyle>
        </ButtonsContainer>
    )
}