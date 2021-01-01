import styled from 'styled-components'
import {theme} from "./index";

export const StandardButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    cursor: default;
    background-color: ${theme.colorOne};
    height: ${theme.controlHeightM};
    border-radius: 1px;
    color: ${theme.colorDefaultText};
    border: none;    
    font-size: ${theme.fontSizeDefault};
    outline: none;
    text-decoration: none;
    text-align: center;
    margin-right: 0;
    padding: 16px 36px;
    -webkit-transition: box-shadow .3s ease;
    transition: box-shadow .3s ease;
    line-height: 18px;
    font-weight: 600;
    box-shadow: none;

    
    i.fas {
        color: ${theme.colorOneDark};
    }
    
    :hover {
        // box-shadow: ${theme.boxShadowLighter};
        background: ${theme.colorOneHover};
    }    
    
    :active {        
        box-shadow: ${theme.boxShadowInset};
        background: ${theme.colorOne};
    }    
    

`;

export const GenericButton = styled.button`
    height: ${theme.controlHeightM};
    width: 70%;
    min-width: 120px ;
    border-radius: 26px;
    color: ${theme.colorDefaultText};
    background: ${theme.colorOneHover};
    border: none;    
    cursor: default;
    font-size: ${theme.fontSizeDefault};
    outline: none;

    
    &:hover, :focus {
        box-shadow: ${theme.boxShadowInset};
        background: ${theme.colorOne};
    }
`;

export const SignUpButton = styled(StandardButton)`
    margin-top: ${theme.spaceXS};
`;

export const SignInButton = styled(StandardButton)`
  margin-top: 30px;
`;

export const SubscribeButton = styled(StandardButton)`
    margin-bottom: 30px;
`;

export const SubscribeButtonContributor = styled(StandardButton)`
    margin-bottom: 30px;
    background-color: #e51075;
    color: #FFFFFF;
`;

export const BugFeedbackButton = styled(StandardButton)`
   padding: 32px 68px;
   width: 300px;
   justify-content: flex-start;
   
   i {
      display: flex;
      font-size: ${theme.fontSizeM};
      color: ${theme.colorDefaultGrey};
      margin-right: 25px;
   }
`;
