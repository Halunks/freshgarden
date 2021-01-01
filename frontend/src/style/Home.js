import styled from 'styled-components';
import background from '../assets/images/Veggies.jpg'


export const HomeContainer = styled.div `
  height: 100%;
  width: 100%;
`;

export const TopContainer = styled.div `
background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover; 
  opacity: 0.8;
`;

export const Image = styled.div `
    width: 100%;
    height: 300px;
`;

export const BottomConatiner = styled.div `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding: 40px 0;
  height: calc(100% - 68px);
  background: #fffdf6;
`;


export const Logo = styled.img `

`;

export const CardContainer = styled.div `
  
`
