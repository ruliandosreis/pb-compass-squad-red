import React from 'react';
import {
    SearchContainer,
    LogoContainer,
    ResultContainer,
    InputContainer
} from './SearchPage.style';
import { LogoWhite } from '../../components/Logo/Logo';
import { Search } from '../../components/Search/Search';
import { ButtonSearch } from '../../components/ButtonSearch/ButtonSearch';

import { InputSearch } from "../../components/InputSearch/InputSearch";

export const SearchPage = () => {
    return (
        <SearchContainer>
            <LogoContainer>
                <LogoWhite />
            </LogoContainer>
            <InputContainer>
                <InputSearch></InputSearch>
                <ButtonSearch></ButtonSearch>
            </InputContainer>
        </SearchContainer>
    );
};
