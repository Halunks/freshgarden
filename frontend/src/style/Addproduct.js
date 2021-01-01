import styled from 'styled-components';
import background from '../assets/images/Veggies.jpg';
import {theme} from './index';
import {GenericButton} from './Buttons'
import { ProductContainer } from './Product';

export const CheckoutContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const AddProductContainer = styled.div `
    height: 100%;
    width: 100%;
`;
export const TopContainer = styled.div `
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover; 
`;
export const Image = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 240px;
`;
export const Slogan = styled.h2`
    color: ${theme.colorDefaultWhite};
    font-size: ${theme.fontSizeXXL};
    font-weight: ${theme.fontWeightBold};
    margin: ${theme.spaceDefault};
`;
export const BottomConatiner = styled.div `
    display: block;
    background: ${theme.colorBackgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        flex-direction: column;
    }
`;
export const AddCardForm = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100%;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        width: 100%;
    }
`;
export const Title = styled.h1 `
    display: flex;
    justify-content: center;
    padding: 40px;
    color: ${theme.colorTitle};
    font-size: ${theme.fontSizeL};
    font-weight: normal;
`;
export const CardOverview = styled.aside `
    width: 30%;
    padding-top: 100px;
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
     margin-top: -100px;
     //padding-bottom: 20px;
     padding: 80px 28%;
    }
`;
export const Form = styled.div `
    //border: 1px solid ${theme.colorDefaultGrey};
    height: 100%;
    width: 100%;
    //padding: ${theme.controlHeightL} 0;
    padding-bottom: 20px; 
    border-radius: 8px;
    border: ${theme.boxShadowLight};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colorBackgroundColor};
`;
export const Input = styled.input `
     width: 400px;
     height: ${theme.controlHeightM};
     margin: ${theme.spaceXS};
     border: none;
     border-bottom: 2px solid ${theme.colorDefaultGrey};
     font-size: ${theme.fontSizeDefault};
     color: ${theme.colorDefaultText};
     background: ${theme.colorBackgroundColor};
     outline: none;
     padding: 20px 30px; 
`;
export const Description = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.fontSizeDefault};
`;
export const DescriptionLabel = styled.label `
    padding: ${theme.spaceXXS};
    margin-bottom: 20px;
    color: ${theme.colorDefaultText};
`;
export const TextArea = styled.textarea `
    font-size: ${theme.fontSizeM};
    color: ${theme.fontSizeDefault};
    border: 1px solid ${theme.colorDefaultGrey};
    outline: none;
    width: 30%;
    padding: ${theme.spaceXS};
`;
export const Unit = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${theme.controlHeightS};
`;
export const Dropdown = styled.div ``;
export const Option = styled.option `
     color: ${theme.fontSizeDefault};
`;
export const Select = styled.select `
    border: 1px solid ${theme.colorDefaultGrey};
    width: 100px;
    height: 40px;
    font-size: ${theme.fontSizeDefault}; 
    outline: none;
    box-shadow: ${theme.boxShadowLighter};
`;
export const Label = styled.label `
    padding-right: 20px;
    font-size: ${theme.fontSizeDefault};
    //color: ${theme.colorRandomText};
    font-size: ${theme.fontSizeDefault};
    color: ${theme.fontSizeDefault};
    font-weight: normal;
    background: ${theme.colorBackgroundColor};
`;
export const Price = styled(Input) `
    width: 100px;
    border: 1px solid ${theme.colorDefaultGrey};
    height: ${theme.controlHeightDefault};
    color: ${theme.colorDefaultText};
    background: ${theme.colorDefaultWhite}
`;
export const Delivery = styled.div `
    margin-top: ${theme.controlHeightM};
    //padding-top:50px;
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
`;
export const ButtonContainer = styled.div `
    height: ${theme.controlHeightS};
    margin: 30px;
    display: flex;
    justify-content: center;
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
    }
`;
export const ButtonDelivery = styled.button `
    width: 150px;
    margin: 0 30px;
    height: ${theme.controlHeightM};
    border-radius: 26px;
    background: ${theme.colorDarkPurple};
    color: ${theme.colorDefaultWhite};
    border: none;    
    cursor: default;
    outline: none;
    &:hover, :focus {
        box-shadow: ${theme.boxShadowInset};
    }
`;
export const ButtonPickUp = styled(ButtonDelivery) `
    width: 150px;
    margin: 0 30px;
    background: ${theme.colorDarkBlue};
    color: ${theme.colorDefaultWhite};
`;
export const Slider = styled.input `
    width: 100%;
    -webkit-appearance: none;
    background: ${theme.colorOne};
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: ${theme.borderRadiusL};
    box-shadow: ${theme.boxShadowLight};
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: white;
        border-radius: 50%;
        cursor: pointer;    
    }
    &:hover {
        opacity: 1; 
    }
`;
export const SliderConatiner = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 35%;
    width: 30%;
`;
export const Left = styled.p `
    font-size: 16px;
    padding-top: 60px;
`;
export const Right = styled.p `
    font-size: 16px;
    padding-top: 60px;
`;
export const Fruit = styled(GenericButton) `
    background: ${theme.colorMaxYellowRed};
    width: 150px;
`;
export const Vegetable = styled( GenericButton) `
    background: ${theme.colorOne};
    width: 150px;
    margin: 0 30px;
`;
export const Mushrooms = styled(GenericButton) `
    width: 150px;
    margin: 0 30px;
`;
export const CategoryLabel = styled(Label) `
    text-align: center;
    padding: 20px 0;
    color: ${theme.colorDefaultText};
`;
export const CategoryContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 25px 0;
`;
export const Upload = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //padding: ${theme.controlHeightL} 0;
`;
export const ButtonUpload = styled(GenericButton) `
    width: 150px;
    margin: 0 30px;
`;
export const UploadLabel = styled(Label) `
    justify-content: center;
    padding: ${theme.spaceS};
    color: ${theme.colorDefaultText};
`;
export const UploadImage = styled.input `
  width: 350px;
  border-radius: 2px;
  padding: 0 30px;
  margin-bottom: 30px;
  ::-webkit-file-upload-button {
  background: ${theme.colorAlmond};
  padding: 15px;
  border: none;
  outline: none;
  color: ${theme.colorDefaultText};
  font-weight: bold;
  border-radius: 26px;
  padding: 10px 50px;
  height: ${theme.controlHeightM};
}
`
export const Submit = styled(GenericButton) `
    margin: 30px 0;
    background-color: ${theme.colorOneDark};
    width: 20%;
    margin-left: 40%;
`;
export const List = styled.li `
    list-style: none;
    height: 30px;
    font-size: 15px;
    border: 1px soli ${theme.colorDefaultGrey};
    width: 100%;
    display: flex;
    justify-content: center;
    &:hover {
        background: ${theme.colorDefaultGrey};
    }
`;