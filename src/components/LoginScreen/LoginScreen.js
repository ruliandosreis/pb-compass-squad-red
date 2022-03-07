//import React, { useDebugValue } from 'react'
import LogoImg from '../../assets/img/LogoCompassoBranco.png'
import UserSvg from '../../assets/icons/VectorUser.svg'
import PasswordSvg from '../../assets/icons/VectorPassword.svg'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Validations/LoginValidation'
import { useNavigate } from 'react-router-dom'


import { 
  LoginMainCointainer,
  LeftPanel,
  LeftPanelLogo,
  RightPanel,
  RightPanelLogo,
  LoginInfoContainer,
  LoginTextContainer,
  LoginFormHeaderText,
  LoginSubTextContainer,
  LoginFormDescriptionText,
  LoginFormInfoText,
  LoginForm,
  LoginInputContainer,
  LoginInput, 
  InputIcon,
  LoginErrorMessageContainer,
  ErrorMessageText,
  ContinueButton
} from './LoginScreen.style'

export const LoginScreen = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  let navigate = useNavigate();

  const submitForm = (data) =>{
    if(data){
      navigate('/');
    }
  }
  return (
    <>
      <LoginMainCointainer>
        <LeftPanel>
          <LeftPanelLogo src={LogoImg}/>
          <LoginInfoContainer>
            <LoginTextContainer>
              <LoginFormHeaderText>Olá,</LoginFormHeaderText>
              <LoginSubTextContainer>
                <LoginFormDescriptionText>Para continuar navegando de forma segura, efetue o login na rede.</LoginFormDescriptionText>
              </LoginSubTextContainer>
            </LoginTextContainer>
            <LoginFormInfoText>Login</LoginFormInfoText>
            <LoginForm onSubmit={handleSubmit(submitForm)}>
              <LoginInputContainer>
                <LoginInput type='text' name='user' placeholder='Usuário' {...register('user')}/>
                <InputIcon src={UserSvg}/>
              </LoginInputContainer>
              <LoginInputContainer>
                <LoginInput type='password' name='password' placeholder='Senha' {...register('password')}/>
                <InputIcon src={PasswordSvg}/>
              </LoginInputContainer>
              <LoginErrorMessageContainer>
                <ErrorMessageText id='message-error'>{errors.user?.message}</ErrorMessageText>
                <ErrorMessageText id='message-error'>{errors.password?.message}</ErrorMessageText>
              </LoginErrorMessageContainer>
              <ContinueButton type='submit'>Continuar</ContinueButton>
            </LoginForm>
          </LoginInfoContainer>
        </LeftPanel>
        <RightPanel>
          <RightPanelLogo src={LogoImg}/>
        </RightPanel>
      </LoginMainCointainer>
    </>
  )
}
