import styled from 'styled-components';

export const container = styled.div`
  display: flex;
  justify-content: center;
  background: url('/images/home-background.png') no-repeat fixed center;
  height: 100vh;
  flex-direction: column;
`

export const back = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  a {
    display: flex;
    justify-content: center;
   }
`

export const characterContainer = styled.div`
  display: flex;
  justify-content: center;

`

export const backText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
`