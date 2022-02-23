import React from 'react'
import LogoImg from '../../assets/img/LogoCompassoBranco.png'
import UserSvg from '../../assets/icons/VectorUser.svg'
import PasswordSvg from '../../assets/icons/VectorPassword.svg'

import { 
  LoginMainCointainer,
  LeftPanel,
  RightPanel,
  RightPanelLogo,
  LoginInfoContainer,
  LoginFormHeaderText,
  LoginSubTextContainer,
  LoginFormDescriptionText,
  LoginFormInfoText,
  LoginForm,
  LoginInputContainer,
  LoginInput, 
  InputIcon,
  LoginErrorMessageContainer,
  ContinueButton
} from './LoginScreen.style'

export const LoginScreen = () => {
  return (
    <>
      <LoginMainCointainer>
        <LeftPanel>
          <LoginInfoContainer>
            <LoginFormHeaderText>Olá,</LoginFormHeaderText>
            <LoginSubTextContainer>
              <LoginFormDescriptionText>Para continuar navegando de forma segura, efetue o login na rede.</LoginFormDescriptionText>
            </LoginSubTextContainer>
            <LoginFormInfoText>Login</LoginFormInfoText>
            <LoginForm>
              <LoginInputContainer>
                <LoginInput type='text' placeholder='Usuário'/>
                <InputIcon src={UserSvg}/>
              </LoginInputContainer>
              <LoginInputContainer>
                <LoginInput type='password' placeholder='Senha'/>
                <InputIcon src={PasswordSvg}/>
              </LoginInputContainer>
              <LoginErrorMessageContainer>
                
              </LoginErrorMessageContainer>
            </LoginForm>
            <ContinueButton>Continuar</ContinueButton>
          </LoginInfoContainer>
        </LeftPanel>
        <RightPanel>
          <RightPanelLogo src={LogoImg}/>
        </RightPanel>
      </LoginMainCointainer>
    </>
  )
}
