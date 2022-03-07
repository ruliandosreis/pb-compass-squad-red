import React,{ useEffect} from 'react';
import { ResultSpan } from './Search.style';
import { ResultContainer } from '../../pages/SearchPage/SearchPage.style';

export const Search = (props) => {
    
    const developerFilter = [props]
    const developers = developerFilter[0]
    
    console.log(developers)

    useEffect(() => {screenResponse(developers)})


    function screenResponse(developers){ 
        
        if(developers.name){
            return(
            <ResultContainer>
                <ResultSpan>Nome: {developers.name}</ResultSpan>
                <ResultSpan>DC: {developers.dc}</ResultSpan>
                <ResultSpan>Inovation Studio: {developers.istudio}</ResultSpan>
                <ResultSpan>Idade: {developers.age}</ResultSpan>
                <ResultSpan>Cargo: {developers.position}</ResultSpan>
            </ResultContainer>       
            )
        }else{
            return(
                <ResultContainer>
                    <ResultSpan>O usuário buscado não existe, por favor tente novamente!</ResultSpan>
                </ResultContainer>
            )
        }
    }
    return (
        <>
            {screenResponse(developers)}
        </>
    );
};

