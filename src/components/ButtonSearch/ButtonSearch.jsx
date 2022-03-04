import React from "react";
import { ButtonsContainer, ButtonSearchStyle, ButtonExitStyle } from "./ButtonSearch.style";

const buttonName = 'Buscar'
const buttonExit = 'Sair'

export const ButtonSearch = ()=>{
    return(
        <ButtonsContainer>
            <ButtonSearchStyle>{buttonName}</ButtonSearchStyle>
            <ButtonExitStyle>{buttonExit}</ButtonExitStyle>
        </ButtonsContainer>
    )
}