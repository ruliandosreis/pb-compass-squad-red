import styled from 'styled-components'
import BgImgRightPanel from '../../assets/img/BgImgRightPanel.jpg'

export const LoginMainCointainer = styled.div`
  position: absolute;
  min-width:100%;
  min-height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (max-width:1024px) {
    position: static;
  }
`

export const LeftPanel = styled.div`
  width:50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);

  @media screen and (max-width: 1024px){
    width: 100%;
    position: absolute;
  }
`

export const LeftPanelLogo = styled.img`
  display: none;
  @media screen and (max-width: 1024px){
    display:inline-block;
    margin:50px;
  }
`

export const RightPanel = styled.div`
  width:50%;
  min-height: 100%;
  background-image: url(${BgImgRightPanel});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px){
    display:none;
  }

`

export const RightPanelLogo = styled.img`
  width: 300px;
  height: 70px;
  margin: 35px auto 0 auto;

  @media screen and (max-width: 1024px){
    display:none;
  }

`

export const LoginInfoContainer = styled.div`
  width: 44%;
  display:flex;
  flex-wrap: wrap;
  @media screen and (max-height:820px){
    padding:45px 0;
  }
  @media screen and (max-width: 1024px){
    width:80%;
  }
`

export const LoginTextContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
`

export const LoginFormHeaderText = styled.h1`
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 76px;
  margin-bottom: 15px;
`
export const LoginSubTextContainer = styled.div`
  width:80%;
  display: flex;
`

export const LoginFormDescriptionText = styled.p`
  font-family: 'Mark Pro';
  font-size: 16px;
  line-height: 20px;
`

export const LoginFormInfoText = styled.p`
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  margin-top: 95px;
  margin-bottom: 15px;
  margin-right: 380px;
`

export const LoginForm = styled.form`
  width:100%;
`

export const LoginInputContainer = styled.div`
  display:flex;
  align-items: center;
  width:100%;
`

export const LoginInput = styled.input`
  width:100%;
  margin: 15px auto;
  height:60px;
  background: transparent;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px #FFFFFF solid;
  padding:20px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  font-family: Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  outline:none;
  &::placeholder{
    color:white;
  }
  &:focus{
    border: 1px solid #E9B425;
  }

  @media screen and (max-width: 1024px){
    width:100%;
    margin: 15px 15px 15px 0;
  }
`

export const InputIcon = styled.img`
  width:20px;
  height: 20px;
  position: relative;
  left: -45px;
  @media screen and (max-width: 1024px){
    left: -55px;
  }
`

export const LoginErrorMessageContainer = styled.div`
  width:100%;
  height:55px;
  background: transparent;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px){
    background-color: transparent;
  }
`

export const ContinueButton = styled.button`
  width: 96%;
  height: 70px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  border: linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
  border-radius: 50px;
  color: white;
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
  margin:45px 0;

  @media screen and (max-width:1024px) {
    margin: 60px 0;  
  }

`

export const ErrorMessageText = styled.p`
  font-family: Mark Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #E9B425;
`
