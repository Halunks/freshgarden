import styled from 'styled-components';
import {theme} from './index'
import {ShoppingCartContainer} from "./ShoppingCart";

export const Form = styled.form `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    opacity: 1;
        
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        justify-content: flex-end;
        width: ${theme.controlHeightXL};
    }
`;

export const LocationContainer = styled.div`
    display: flex;
    outline: none;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 40%;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const AutocompleteContainer = styled(ShoppingCartContainer)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    min-width: calc(2 * 42px + 2 * 95px + 2 * ${theme.spaceXXS});
    min-height: ${theme.controlHeightXL};
    width: calc(67% - 7.5 * ${theme.controlHeightXL} + ${theme.spaceXXS});
    border-left: 1px solid ${theme.colorOneHover};
    border-right: 1px solid ${theme.colorOneHover};
    position: absolute;
    padding: 0;
    top: calc{${theme.controlHeightXL} - 1px;
    box-shadow: ${theme.boxShadowGradient}, 20px 40px 50px 30px white, -20px 40px 50px 30px white;
    background-color: ${theme.colorDefaultWhite};
`;

export const AutocompleteOne = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;    
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    background-color: ${theme.colorDefaultWhite};
    border: none;
    border-bottom: 1px solid ${theme.colorOneHover};
    width: 100%;
    height: ${theme.controlHeightXL};
    outline: none;
    text-align: left;
    padding-left: ${theme.spaceXS};
    
    :hover, &.active {
        color: ${theme.colorOneDark};
        
        i {
            color: ${theme.colorOneDark};
            font-size: 1.4rem;
        }
    }
    
    i {
        font-size: ${theme.fontSizeS};
        color: ${theme.colorDefaultText};
        margin-left: ${theme.spaceXS};
        margin-right: ${theme.spaceS};
    }  
`;

export const AutocompleteTwo = styled(AutocompleteOne)``;
export const AutocompleteThree = styled(AutocompleteOne)``;

export const SearchContainer = styled(LocationContainer)`
    width: 60%;
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    height: 100%;
    width: 100%;
    padding-right: ${theme.spaceXXS}; 
    min-width: calc(42px + 50px);
    border: none;
    outline: none;
`;



export const LocationInput = styled(SearchInput)``;

export const SearchButton = styled.button `
    height: 100%;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 0;
    background: ${theme.colorDefaultWhite};
    padding: ${theme.spaceS};
    margin-right: ${theme.spaceXXS};
    border-left: 1px solid ${theme.colorOne};
    
    i.fas {
        color: ${theme.colorDefaultText};
        font-size: ${theme.fontSizeM};
    }
`;

export const LocationButton = styled(SearchButton)``;

export const SubmitButton = styled(SearchButton)`
    height: 100%;
    width: ${theme.controlHeightXL};
    background-color: ${theme.colorOneHover};
    margin-right: 0;
    justify-self: flex-start;
    
    i.fas {
        color: ${theme.colorDefaultText};
    }
    
    &:hover {
          background-color: ${theme.colorOne};
          box-shadow: ${theme.boxShadowInset};

          i.fas {
              color: ${theme.colorDefaultText}
          }
    }
`;
