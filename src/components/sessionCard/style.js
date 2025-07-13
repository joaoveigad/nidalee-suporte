import styled from 'styled-components';

export const SessionCardComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  border-radius: 20px;
  color: white;
  max-width: 650px;
  margin: 20px auto;
`;

export const SessionTitle = styled.h2`
  font-size: 30px;
  color: #00aaff;
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
    color: #00aaff;
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
    padding-left: 4px;
  }
`;
