import styled from 'styled-components'
import {theme} from './index'

export const FooterContainer = styled.footer `
    height: ${theme.controlHeightL};
    width: 100%;
    background-color: ${theme.colorTwoDarkHover};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;    
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    padding-left: ${theme.spaceS};
    padding-right: ${theme.spaceS};
`;

export const RightContainer = styled(LeftContainer)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;    
    background-color: ${theme.colorTwoDarkHover};

`;

export const Text = styled.p`
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeS};
`;

export const SwissMade = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #DA291C;
    font-size: ${theme.fontSizeS};
    font-family: 'GravurCondensedRegularRegular', Arial, Helvetica, Verdana, 'Trebuchet MS', sans-serif, 'Sans Serif';
    font-weight: normal;
    font-style: normal;

    i {
        color: #DA291C;
        font-size: ${theme.fontSizeM};
        
        &:hover, :focus, &.active {
            color: red;
        }
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20px;

    i {
        margin-left: ${theme.spaceS};
        color: ${theme.colorDefaultText};
        font-size: ${theme.fontSizeM};
        height: 20px;
        // width: ${theme.fontSizeDefault};

        &:hover, :focus, &.active {
            color: ${theme.colorOneDark};
        }
    }
`;

export const GithubLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: ${theme.colorDefaultGrey};

`;

export const LinkedInLink = styled(GithubLink)``;
export const TwitterLink = styled(GithubLink)``;
export const SwissMadeLink = styled(GithubLink)`
    margin-right: ${theme.spaceXS};
`;
