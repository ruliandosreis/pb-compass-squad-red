import React,{useState} from "react";
//import UserSvg from '../../assets/icons/VectorUser.svg'
import { InputSearchContainer, InputSearchStyle } from "./InputSearch.style";
import {ApiResponse} from '../API/Api.Response'


export const InputSearch = () =>{

    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <InputSearchContainer>
                    <ApiResponse searchName={name}/>
                    <InputSearchStyle       
                    type='text'
                    placeholder='Buscar Usuário'
                    defaultValue={name}
                    onChange = {handleChange}
                    ></InputSearchStyle>
                    
        </InputSearchContainer>
    )
}