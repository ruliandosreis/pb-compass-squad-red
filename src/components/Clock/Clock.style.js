import styled from 'styled-components';
const colorClock = '#222222';
export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100vw/3);
    margin-top: 15px;
`
export const ClockContainer = styled.h1`
    font-size: 9em;
    text-align: center;
    font-family: 'Mark Pro Bold';
    font-weight: 700;
    color: ${colorClock};
`
export const FullDateContainer = styled.span`
    text-align: center;
    font-weight: 400;
    font-size: 0.875em;
    font-family: 'Mark Pro';
    color: ${colorClock};
    margin-top: -35px;
`