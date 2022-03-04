import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex ;
    align-items: center ;
    flex-direction: column;
`
export const ButtonSearchStyle = styled.button`
    width: 96%;
    max-width: 380px;
    height: 70px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border: linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
    border-radius: 50px;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2.25em;
    line-height: 23px;
    cursor: pointer;
    margin:45px 0;

  @media screen and (max-width:1024px) {
     
  }
`

export const ButtonExitStyle = styled.button`
    width: 96%;
    max-width: 380px;
    height: 70px;
    outline: none;
    border: none;
    background: #fff;
    border: linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
    border-radius: 50px;
    color: #000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2.25em;
    line-height: 23px;
    cursor: pointer;
    margin:45px 0;
`