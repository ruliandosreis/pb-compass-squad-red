import React from 'react';
import {
    SearchContainer,
    LogoContainer,
    InputContainer
} from './SearchPage.style';
import { LogoWhite } from '../../components/Logo/Logo';
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
