import styled from 'styled-components';
import {theme} from './index'

export const HexagonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 125px;
    height: 125px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
`;

export const Image = styled.img`
    height: 100%;
    width: -moz-available;
    width: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadiusS};
`;
