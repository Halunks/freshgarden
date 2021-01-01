import styled from 'styled-components';
import {StandardButton} from "./Buttons";
import {CheckoutButton} from "./ShoppingCart";
import {theme} from "./index";


export const SlidePageContainer = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const SlidesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //height: 540px;
`;

export const ButtonsContainer = styled(SlidesContainer)`
  height: 60px;
  width: 940px;
  justify-content: space-evenly;
`

export const Slide = styled.img`
  width: 940px;
  height: 540px;  
`;

export const Previous = styled(StandardButton)`
    margin: 20px;
`;
export const Next = styled(Previous)``;
export const Page = styled(Previous)`
    background: white;
    border: 1px solid ${theme.colorOne};
    svg {
        height: 24px;
        //width: ;
    }
`;