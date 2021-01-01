import styled from 'styled-components'
import {theme} from './index';
import {baseButton, GenericButton, StandardButton} from "./Buttons";
import {NavLink} from "react-router-dom";

export const ShoppingCartContainer = styled.div `
    width: calc(5 * ${theme.controlHeightXL});
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.colorBackgroundColor};    
    position: absolute;
    padding: ${theme.spaceS};
    top: calc(0px + ${theme.controlHeightXL});
    //box-shadow: ${theme.boxShadowLight};
    z-index: 100044;
    overflow-y: scroll;
    max-height: 70vh;
    box-shadow: ${theme.boxShadowGradient}, 0 50px 50px 30px white;

    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        position: fixed;
        height: 70vh;
        width: calc(5 * ${theme.controlHeightXL});        
        margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
        left: 0;
        right: 0;        
        box-shadow: ${theme.boxShadowGradient}, 0 0 50px 50px white;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid ${theme.colorOne};
    border-bottom: 1px solid ${theme.colorOne};
    height: ${theme.controlHeightDefault};
    width: 100%;
`;

export const Title = styled.h3`
    font-size: ${theme.fontSizeM};
    font-weight: ${theme.fontWeightRegular};
    color: ${theme.colorDefaultText};
`;

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    
    width: 100%;
    height: auto;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorOne};
    z-index: 43;
        
    height: 100px;
    width: 100%;
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 70%;
    height: 100%;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100%;
    width: 100%;
`;

export const Image = styled.img`
    background: grey;
    border-radius: ${theme.borderRadiusS};
    
    height: 70px;
    width: 70px;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: ${theme.spaceS};
    
    height: 70%;
    width: 100%;
`;

export const ProductName = styled.h4`
    font-size: ${theme.fontSizeDefault};
    font-weight: ${theme.fontWeightRegular};
    color: ${theme.colorDefaultText};
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

export const Decrement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    border: 1px solid ${theme.colorOneHover};    
    border-radius: ${theme.borderRadiusS};
    background-color: ${theme.colorOneHover};
    height: 20px;
    width: 20px;
    i.fas {
        color: ${theme.colorOneDark};
    }
    
    &:hover, &.active {
          background-color: ${theme.colorOne};
          box-shadow: ${theme.boxShadowInset};

          i.fas {
              color: ${theme.colorOneDark}
          }
    }
`;

export const Increment = styled(Decrement)``;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    border-top: 1px solid ${theme.colorOneHover};
    border-bottom: 1px solid ${theme.colorOneHover};
    height: 20px;
    width: 20px;
    background-color: ${theme.colorBackgroundColor};
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;   
    height: 70%; 
    width: 100%;
`;

export const Delete = styled(Decrement)`
    border: none;
    background: none;
    
    &:hover, &.active {
        border: none;
        background: none;
        i.fas {
            color: ${theme.colorDarkRed};
        }
    }
`;

export const Price = styled(ProductName)`
    height: 19px;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    height: 120px;
    width: 100%;
`;

export const Total = styled(Price)`
    align-self: flex-end;
`;

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${theme.colorDefaultText};
    width: 100%;
    height: ${theme.controlHeightDefault};
`;

export const EmptyCartIcon = styled(Delete)`
    i.fas {
        font-size: ${theme.fontSizeDefault};
    }
`;

export const TextField = styled.p`
    margin: ${theme.spaceS};
    font-size: ${theme.fontSizeS};
`;

export const CheckoutButton = styled(StandardButton)``;