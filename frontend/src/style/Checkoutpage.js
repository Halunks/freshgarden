import styled from 'styled-components';
import {theme} from '../style/index';
import {GenericButton, StandardButton} from './Buttons'

export const CheckoutConatiner = styled.main `
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100%;
 width: 100%;
`;

export const MainContainer = styled.div `
    background: ${theme.colorBackgroundColor};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background: ${theme.colorBackgroundColor};
    padding-bottom: 30px;
    
    

    @media (max-width: 680px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
`;


export const TitleContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colorBackgroundColor};
  width: 100%;
  
   @media (max-width: 360px){
       width: 100%; 
      }  
`;

export const Text = styled.h2 `
 font-size: ${theme.fontSizeXXL};
 color: ${theme.colorMainTitle};
 padding 20px; 
 
  @media (max-width: 360px){
       width: 200px;
      } 
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size:  ${theme.fontSizeL};
       padding: 10px 100px;
    } 
`

export const BoxContainer = styled.div `
  /* background: ${theme.colorBackgroundColor};
  padding: 50px; */
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 0 150px;
  padding-top: 40px;

  @media (max-width: ${theme.mediaQueryScreenWidth}){
        flex-direction: column;
        padding: 0 20px;
    }
 `;


export const Description = styled.p `
    margin-top: 20px;
`;

export const Product = styled.h3 `
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;

export const Info = styled.div `
    display: block;
    margin: 15px;
`;

export const Quantity = styled(Info) `
    display: block;
    margin: 10px;
    padding: 0 300px;
`;

export const TotatlP = styled(Info)  ` `;

export const TopHeaderConatiner = styled.div `
    margin: 20px 0px;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    color: grey;
    border: 1px solid ${theme.colorRandomText};
`;


export const Delivery = styled.h4 `
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};
    margin-bottom: 50px;

    span {
        margin-left: 25px;
    }
`;

export const LeftConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px; 
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 100%;
    }
`;

export const RightConatiner = styled.aside `
     width: 100%;
     display: flex;
     justify-content: center;
    width: 40%;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        //flex-direction: row;
        width: 70%;
        margin-bottom: 60px;
    }

`;

export const PaymentConatiner = styled.div `
 width: 271px;
 height: 410px;
 border: 1px solid grey;
 background: ${theme.colorBackgroundColor};
 border: 1px solid ${theme.colorRandomText};
 border-radius: ${theme.borderRadiusS};
 box-shadow: ${theme.boxShadowLighter}

`;

export const SumConatiner = styled.div `
    /* display: block;
    justify-content: flex-start;
    margin-left: 180px; */
    width: 100%;
    padding: 10px ;
    display: block;
    //font-size: ${theme.spaceS}
`;

export const Summary = styled.h3 `
    color: grey;
    margin-bottom: 30px;
    padding-left: 10px;
    font-size: ${theme.fontSizeM};
    //color: ${theme.colorDefaultText}
`;

export const SellerContainer = styled.div `
 width: 100%;
 padding: 0 10px;
 display: flex-box;
`;

export const Bottom = styled.div `
 margin-top: 70px;
`;

export const ButtonsContainer = styled.form `
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;

`;

export const RadioButton = styled.div `
 width: 30px;
 height: 30px;
 display: flex;
 flex-direction: row;
 
 i {
  font-size: 15px;
  padding-left: 10px;
  color: ${theme.colorOneDark}
 }
`;

export const Radio = styled.input ``;

export const TotalSum = styled.h3 `
    float: right;
    font-size: 15px;
    padding: 10px;
`;

export const Submit = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 30px;
    
`;

export const Button = styled(StandardButton) ``;



export const DeleteIcon = styled.div `
  border: none;
    background: none;
    color: ${theme.colorOneDark};
    
     i {
     font-size: 15px;
     }
    
      &:active {
         border: none;
         background: none;
         i.fas {
             color: ${theme.colorDarkRed};
        }
     }
`;





