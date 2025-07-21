import styled from "styled-components";

export const BlackCardComponent = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: calc(100vh - 50px); 
  padding: 60px 30px;
  background-color: black;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: larger;
  box-shadow: 0 15px 50px burlywood;
`;



export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 30px;
  color: burlywood;
  margin-bottom: 20px;
`;

export const GridImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;


export const SessionTitle = styled.p`
  font-size: 30px;
  color: burlywood;
  margin-bottom: 20px;
`;
