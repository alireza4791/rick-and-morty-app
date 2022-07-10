import styled from 'styled-components';

export const container = styled.div`
  background: url('/images/home-background.png') no-repeat fixed center;
  background-size: cover;
`;

export const charactersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 30px 10px;
  .cardLink {
    margin-top: 15px;
  }
`;

export const image = styled.img``;

export const characterCardContainer = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  /* transform: translate(-50%, -50%); */
  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: .6s all ease-in-out;
    top: 0;
    left: 0;
    &:hover {
      transform: rotateY(180deg);
    }
    .front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      overflow: hidden;
      background-color: #e4e4e4;
      border: 3px solid #313131;
      border-radius: 12px;
    }
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transform: rotateY(180deg);
      overflow: hidden;
      top: 0;
      left: 0;
    }
  }
`