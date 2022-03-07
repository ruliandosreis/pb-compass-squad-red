import styled from 'styled-components'

export const InputSearchContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    height: 50vh;
    width:100%;
    flex-direction: column;
    margin: 0PX auto;

`

export const InputSearchStyle = styled.input`
    padding:20px;
    width: 100%;
    height: 70px;
    background: transparent;
    border-radius: 50px;
    box-sizing: border-box;
    border: 1px #FFFFFF solid;
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 16px;
    text-align: flex-start;
    padding-left: 15%;
    outline:none;
    margin-left: 20px;
    &::placeholder{
        color:white;
    }
    &:focus{
        border: 1px solid #E9B425;
    }
    @media screen and (max-width: 1024px) {
      width:100%;
      height: 40px ;
      padding-left: 15%;
    }
`
export const InputSearchIcon = styled.img`
    position: relative;
    right: 87%;
    width:20px;
    height: 20px;
    @media screen and (max-width:1448px) {
      right: 83%;
    }
    @media screen and (max-width:1024px) {
      right: 90%;
    }
    @media screen and (max-width:650px) {
      right: 85%;
    }
    @media screen and (max-width:425px) {
      right: 80%;
    }
`