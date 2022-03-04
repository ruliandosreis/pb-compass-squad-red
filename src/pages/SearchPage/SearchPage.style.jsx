import styled from 'styled-components';

export const SearchContainer = styled.main`
    min-height: 100%;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.div`
    max-width: 310px;
    max-height: auto;
    align-self: center;
    margin-top: 11.6vh;
`;
export const ResultContainer = styled.div`
    max-width: 600px;
    height: 700px;
    width: 100vw;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const InputContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    min-height: 200px;
    max-width: 520px ;
    border: 1px solid red;
    width: 100vw
`