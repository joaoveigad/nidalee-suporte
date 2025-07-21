import styled from "styled-components";

export const BlackCardComponent = styled.div`
  position: relative;
  width: auto;
  max-width: 450px;
  min-height: calc(100vh - 50px); 
  padding-top: 100px;
  background-color: black;
  border: 1px solid burlywood;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.p`
  font-size: 30px;
  color: burlywood;
  margin-bottom: 20px;
`;


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 10px;
  max-width: 1000px;
  margin: 10px
`;

export const GridImage = styled.img`
  width: 80%;
  height: auto;
  border: 2px outset burlywood;
  border-radius: 10px;
  cursor: pointer;
`;


export const SessionTitle = styled.p`
  font-size: 30px;
  color: burlywood;
  margin-bottom: 20px;
`;
