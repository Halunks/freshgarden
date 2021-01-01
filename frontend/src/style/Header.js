import styled from 'styled-components'
import {theme} from './index'
import {NavLink} from "react-router-dom";


export const HeaderContainer = styled.div `
    height: ${theme.controlHeightXL};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 42;
    left: 0;
    top: 0;
    background-color: ${theme.colorDefaultWhite};
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        position: fixed;
        top: calc(100% - 64px);
        left: 0;
        justify-content: center;
        background-color: ${theme.colorOneHover};
    }
`;

export const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid ${theme.colorOne};
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const Icons = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: calc(6 * ${theme.controlHeightXL});
    
    cursor: default;
    
    i.fas {
        color: ${theme.colorDefaultText};
        text-align: center;
        float: right;
        font-size: ${theme.fontSizeM};
        cursor: default;
    }
`;


export const NavLinkHome = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    padding: ${theme.spaceS};
    height: 100%;
    
    svg {
        height: ${theme.controlHeightXL};
        width: 200px;
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
    
    
`;

export const NavLinkAbout = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: ${theme.controlHeightXL};
    cursor: default;
    background-color: ${theme.colorOneHover};
    
    i.fas {
        color: ${theme.colorDefaultText};
    }
    
    &:hover {
          background-color: ${theme.colorOne};
          box-shadow: ${theme.boxShadowLighter};

          i.fas {
              color: ${theme.colorDefaultText}
          }
    }
    
    :focus, &.active {
          background-color: ${theme.colorOne};
          box-shadow: ${theme.boxShadowInset};
          i.fas {
              color: ${theme.colorDefaultText}
          }
    }    

`;

export const NavLinkProfile = styled(NavLinkAbout)`
    &.impulse {
        background-color: ${theme.colorDarkRed};
    }
    &.fade {
        background-color: ${theme.colorOneHover};
        -webkit-transition: background-color 750ms linear;
        -ms-transition: background-color 750ms linear;
        transition: background-color 750ms linear;
    }    
`;

export const NavLinkShop = styled(NavLinkAbout)``;

export const NavLinkAddProduct = styled(NavLinkAbout)`
    background-color: ${theme.colorTwoDarkHover};
    
    &:hover {
          background-color: ${theme.colorTwoDarkHover};
          box-shadow: ${theme.boxShadowLighter};

    }
    
    :focus, &.active {
          background-color: ${theme.colorTwoDarkHover};
          box-shadow: ${theme.boxShadowInset};
    }  
`;

export const NavLinkCommunity = styled(NavLinkAbout)``;

export const CartIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: ${theme.controlHeightXL};
    cursor: default;
    background-color: ${theme.colorOneHover};

    i.fas {
        color: ${theme.colorDefaultText};
    }
        &:hover {
          background-color: ${theme.colorOne};
          box-shadow: ${theme.boxShadowLighter};

          i.fas {
              color: ${theme.colorDefaultText}
          }
    }
    
    :focus, &.active {
          background-color: ${theme.colorOne};
          box-shadow: ${theme.boxShadowInset};
          i.fas {
              color: ${theme.colorDefaultText}
          }
    }   
`;

export const OpenCart = styled.div`
    position: absolute;
    bottom: -600px;
`;

export const LogoContainer = styled.div `
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${theme.colorOne};
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        display: none;
    }
`;

export const Logo = styled.img`
    height: calc(${theme.controlHeightXL} - 10px);
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        width: ${theme.controlHeightXL};
    }
`;

export const LogoNavBar = styled(Logo)`
    height: calc(${theme.controlHeightXL} - 20px);
    
    @media (max-width: ${theme.mediaQueryScreenWidth}) {
        height: calc(${theme.controlHeightXL} - 20px);
    }    
`;

