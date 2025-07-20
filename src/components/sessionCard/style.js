import styled from 'styled-components';

export const SessionCardComponent = styled.div`
  position: relative;
  font-size: larger;
  height: 100%;
  max-height: 100vh;
  margin: 20px;
  padding: 60px 30px;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: black;
  width: auto;
  margin-right: 200px;
  margin-left: 10px;

`;


export const SessionTitle = styled.p`
  font-size: 30px;
  color: black;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 1.5em;
  font-size: 16px;
  color: black;;
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

`;
