import React from 'react'
import LogoImg from '../../assets/img/LogoCompassoBranco.png'

import { 
  LoginMainCointainer,
  LeftPanel,
  RightPanel,
  RightPanelLogo,
  LoginInfoContainer
} from './LoginScreen.style'

export const LoginScreen = () => {
  return (
    <>
      <LoginMainCointainer>
        <LeftPanel>
          <LoginInfoContainer>
            
          </LoginInfoContainer>
        </LeftPanel>
        <RightPanel>
          <RightPanelLogo src={LogoImg}/>
        </RightPanel>
      </LoginMainCointainer>
    </>
  )
}
