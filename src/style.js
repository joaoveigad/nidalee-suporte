import styled from "styled-components";
import bg from './images/backgrounds/tiger.jpeg';

export const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    border: 0;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
`;
