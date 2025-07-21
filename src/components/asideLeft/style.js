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
  border: 1px solid burlywood;
`;

export const SessionTitle = styled.p`
  font-size: 30px;
  color: burlywood;
  margin-bottom: 20px;
`;
