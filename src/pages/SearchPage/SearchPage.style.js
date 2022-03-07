import styled from 'styled-components';

export const SearchContainer = styled.main`
    min-height: 100%;
    position: absolute ;
    background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:1024px) {
      justify-content: center;
      width:100vw;
    }
`;

export const LogoContainer = styled.div`
    max-width: 310px;
    max-height: auto;
    align-self: center;
    margin-top: 5%;
`;
export const ResultContainer = styled.div`
    max-width: 35%;
    height: 50vh;
    width: 100vw;
    /*border: 1px solid blue;*/
    display: flex;
    justify-content: space-around;
    @media screen and (max-width:1024px) {
      max-width: 100%;
      padding-left: 15%;
    }
    @media screen and (max-width:450px) {
      max-width: 100%;
      padding-left: 20%;
      margin-bottom: 15px ;
    }
`;

export const InputContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    min-height: 200px;
    max-width: 30% ;
    /*border: 1px solid red;*/
    width: 100vw;
    margin: 0 auto;
    @media screen and (max-width:1024px) {
      max-width: 80%;
    }
`