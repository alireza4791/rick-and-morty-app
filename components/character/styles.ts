import styled from 'styled-components';

export const character = styled.div`
  border: 3px solid #313131;
  border-radius: 12px;
  width: 400px;
  height: 500px;
  /* margin: 10px 10px; */
  background-color: #e4e4e4;
  cursor: pointer;
`;

export const name = styled.h3`
  text-align: center;
  color: #313131;
`;

export const status = styled.h5`
  margin: 3px 0px;
`;

export const species = styled.h5`
  margin: 3px 0px;
`;

export const gender = styled.h5`
  margin: 3px 0px;
`;

export const details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  padding-top: 15px;
  /* width: 200px; */
  .Alive {
    color: #27ff0f;
  }
  .Dead {
    color: #fe0e01;
  }
  .unknown {
    color: #6500ca;
  }
  .Human {
    color: #2b2bff;
  }
  .Alien {
    color: #136b03;
  }
  .Female {
    color: #fe0e01;
  }
  .Male {
    color: #2b2bff;
  }
  .location {
    color: #b35900;
  }
`;


export const text = styled.span``;

export const origin = styled.h5`
  margin: 3px 0px;
`;

export const location = styled.h5`
  margin: 3px 0px;
`;

export const imageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  .avatar {
    border-radius: 30px;
  }
`;