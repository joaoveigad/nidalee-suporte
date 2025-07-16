import styled from 'styled-components';

export const SessionCardComponent = styled.div`
  font-size: larger;
  position: relative;
  flex: 3fr;
  max-width: 800px;
  height: 100vh;
  max-height: 100vh;
  padding: 0px 30px;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: black;
  width: 100%;
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
  color: #ddd;
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
