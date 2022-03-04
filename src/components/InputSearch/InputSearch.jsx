import React from "react";
import UserSvg from '../../assets/icons/VectorUser.svg'
import { InputSearchContainer, InputSearchStyle, InputSearchIcon } from "./InputSearch.style";

export const InputSearch = () =>{
    return (
        <InputSearchContainer>
                    <InputSearchStyle type='text'></InputSearchStyle>
                    <InputSearchIcon src={UserSvg} />
        </InputSearchContainer>
    )
}