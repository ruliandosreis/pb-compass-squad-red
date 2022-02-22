import styled from 'styled-components'
import BgImgRightPanel from '../../assets/img/BgImgRightPanel.jpg'

export const LoginMainCointainer = styled.div`
  width:100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const LeftPanel = styled.div`
  width:50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);

`

export const RightPanel = styled.div`
  width:50%;
  height: 100%;
  background-image: url(${BgImgRightPanel});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`

export const RightPanelLogo = styled.img`
  width: 300px;
  height: 70px;
  margin: 35px auto 0 auto;
`

export const LoginInfoContainer = styled.div`
  width: 37.5%;
  height: 70%;
  border: 2px blue solid;
`

