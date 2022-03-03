import React from 'react';
import {
    SearchContainer,
    LogoContainer,
    ResultContainer,
    InputContainer
} from './SearchPage.style';
import { LogoWhite } from '../../components/Logo/Logo';
import { Search } from '../../components/Search/Search';

export const SearchPage = () => {
    return (
        <SearchContainer>
            <LogoContainer>
                <LogoWhite />
            </LogoContainer>
            <ResultContainer>
                <Search/>
            </ResultContainer>

            <InputContainer>

            </InputContainer>
        </SearchContainer>
    );
};
