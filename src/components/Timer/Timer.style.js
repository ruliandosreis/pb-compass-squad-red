import styled from 'styled-components';

export const ResetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin:0;
    padding:0;
`

export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 215px;
    font-family: Mark Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
`
export const TimerNumber = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 56px;
text-align: center;
color: #FFFFFF;
`

export const FooterResetTimerDiv = styled.div`
  background-color: #FFFFFF;
  width: 131px;
  height: auto;
  display:flex;
  align-items: center;
  margin:0;
  padding:0;
`
export const FooterResetTimerButton = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15,21px;
  text-align: center;
  height: 100%;
  width: 100%;
  color:#C13216;
  padding:35px;
  `