import styled from "styled-components";

export const BlackCardComponent = styled.div`
  position: relative;
  font-size: larger;
  height: auto;
  max-height: 100%;
  margin: 0px;
  padding: 60px 30px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: black;
  width: 100%;
  max-width: 400px;
  margin-right: 200px;
  margin-left: 10px;

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
`;


export const SessionTitle = styled.p`
  font-size: 30px;
  color: burlywood;
  margin-bottom: 20px;
`;
