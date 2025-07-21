import styled from 'styled-components';

export const SessionCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: center;
  width: 100%;
  height: 100%;
  padding: 60px 30px;
  background-color: burlywood;
  margin: 20px 200px;

  box-shadow: 0 15px 50px black;
`;


export const SessionTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 1.5em;
  font-size: 22px;
  color: ;
  line-height: 1.5;


  > li {
    font-weight: bold;
    margin-bottom: 0.5em;
  }


  > li > ul > li {
    font-weight: normal;
    margin-bottom: 0.3em;
  }

  li::marker {
    color: black;
}
`
export const Nida = styled.img`
  width: 300px;
  height: 300px;
`;
export const Credits = styled.p`
  font-size: 16px;
  color: black;
  `
