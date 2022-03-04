import styled from 'styled-components'

export const InputSearchContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    margin: 0px;
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
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    outline:none;
    &::placeholder{
        color:white;
    }
    &:focus{
        border: 1px solid #E9B425;
    }
`
export const InputSearchIcon = styled.img`
    position: relative;
    right: 90%;
    width:20px;
    height: 20px;
`