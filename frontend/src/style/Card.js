import styled from 'styled-components';
import {theme} from './index'
import {Count} from "./ShoppingCart";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 410px;
    background: ${theme.colorAlmond};
    cursor: default;
    box-shadow: ${theme.boxShadowGradient};
    border-radius: ${theme.borderRadiusS};
    margin: ${theme.spaceS};

    &.vegetable {
        border-top: 8px solid ${theme.colorOne};
    }
    &.fruit {
        border-top: 8px solid ${theme.colorOne};
    }
`;

export const TopContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    height: 250px;
    width: 100%;
`;

export const PromotionIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${theme.colorAlmond};
    padding: 4px;
    margin: ${theme.spaceXS};
    border-radius: 100%;
    box-shadow: inset 0 4px 6px rgba(F,F,F,0.225);
    //box-shadow: ${theme.boxShadowLight};

    svg {
        width: 35px;
        height: 35px;
        fill: ${theme.colorDarkGold};

    }

    i {
        color: ${theme.colorDefaultWhite};
        font-size: ${theme.fontSizeM};
    }
`;
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 250px;
`;

export const Image = styled.img`
    height: 100%;
    width: -moz-available;
    width: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadiusS};
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spaceS};
    
    width: 100%;
    height: calc(410px - 250px);
`;

export const UpperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    align-items: flex-start;
    
    width: 100%;
    height: calc(100% - 25px);
`;

export const UpperLeftContainer = styled.div`
    width: 160px;
    height: 95px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const UpperRightContainer = styled.div`
    width: calc(270px - 160px - 32px);
    height: 95px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
`;

export const LowerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    
    width: 100%;
    height: 25px;    
`;

export const ProductName = styled.p`
    overflow: scroll;
    width: 100%;
    font-size: ${theme.fontSizeDefault};
    font-weight: ${theme.fontWeightRegular};
    color: ${theme.colorDefaultText};
`;

export const Location = styled.p`
    overflow: scroll;
    width: 100%;
    font-size: ${theme.fontSizeS};
    font-weight: ${theme.fontWeightLight};
    color: ${theme.colorDefaultText};
`;

export const DeliveryOptions = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const PickUpContainer = styled.div`
    height: calc(100% / 3);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const DeliveryContainer = styled(PickUpContainer)``;
export const ExpiryContainer = styled(PickUpContainer)``;

export const PickUpIcon = styled.div`
    margin-right: 12px;
    i {
        font-size: ${theme.fontSizeDefault};
        color: ${theme.colorDarkPurple};
        opacity: 0.4;

    }
`;

export const DeliveryIcon = styled.div`
    margin-right: 4px;
    i {
        font-size: ${theme.fontSizeDefault};
        color: ${theme.colorDarkBlue};
        opacity: 0.4;
    }
`;

export const ExpiryIcon = styled(PickUpIcon)`
    margin-right: 8px;
    i {
        color: ${theme.colorDarkGold};
        opacity: 0.4;

    }
`;

export const DeliveryDistance = styled(Location)`
    align-self: flex-end;
`;

export const SellerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;    
`;

export const PortraitContainer = styled.div`
    height: 67px;
    width: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${theme.colorAlmond};
    box-shadow: ${theme.boxShadowInset};
        
    i {
        font-size: 70.2px;
        color: ${theme.colorOne}
    }
`;

export const Portrait = styled.img`
    height: 100%;
    width: -moz-available;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
`;

export const SellerName = styled(Location)`
    overflow: scroll;
    white-space: nowrap;
    text-align: end;
    margin-top: ${theme.spaceXXS}
    
`;

export const ExpiryDate = styled(Location)``;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    
    height: 100%;
    width: 70%;
`;

export const StockContainer = styled(PriceContainer)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 30%;

`;

export const Stock = styled(Count)`
    border: 1px solid ${theme.colorOne};
    min-width: 25px;
    width: fit-content;
    padding: 4px;
    background: ${theme.colorAlmond};

`;

export const AddToCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spaceXS};
    border-radius: ${theme.borderRadiusS};
    height: 25px;
    width: 25px;
    box-shadow: none;

    i {
        font-size: ${theme.fontSizeDefault};
        color: ${theme.colorOneDark};
    }
    
    :active {
          box-shadow: ${theme.boxShadowInset};
    }
`;

export const CurrencyTag = styled(Location)`
    width: auto;
    align-self: center;
    font-weight: ${theme.fontWeightLight};
    color: ${theme.colorDefaultText};
`;

export const PriceTag = styled(ProductName)`
    width: auto;
    margin-left: ${theme.spaceXXS};
    margin-right: ${theme.spaceXXS};
`;

export const Unit = styled(ProductName)`
    width: auto;

`;