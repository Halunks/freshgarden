import styled from 'styled-components';
import {theme} from "./index";


export const SignUpButton = styled.button`
    background: transparent;
    padding: 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;

    font-size: ${theme.fontSizeS}
    font-weight: ${theme.fontWeightBold};
    line-height: 12px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #000000;

    :hover {
        background: rgba(0, 0, 0, 0.07);
    }
`;

export const BigPurpleButton = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-top: 167px;
    justify-items: center;
    align-content: center;    
    background: #f7a549;
    color: #ffff;
    border-radius: 30px;
    width: 280px;
    height: 60px;
    border: 2px solid rgba(200, 200, 200, 0.45);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    margin-top: 20%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #FFFFFF;

    :hover {
        background: #129e28;
    }

    input {
        width: 280px;
    }
`


export const PurpleSendButton = styled.button`
    background: linear-gradient(132.96deg, #C468FF, #6E91F6);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    color: white;
    border: none;
    display:flex;
    justify-content: center;
    align-items: center;
    outline: none;

    :hover {
        background: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
    }
`

export const FriendsButton = styled.button`
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.07);
    margin-right: 3px;
    margin-left: 3px;
    box-shadow: 0px 7px 20px rgba(0,0,0,0.07);
	letter-spacing: 1px;
    justify-content: center;
    color: #000000;
    text-transform: uppercase;
    font-size: 1.0rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1px;
    outline: none;
    height: 40px;
    width: 133px;
    border-radius: 30px;

    :hover {
        background: rgba(0, 0, 0, 0.07);
    }

    &#true {
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
        background-color: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        color: white;

        :hover {
            background: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
            border-color: linear-gradient(132.96deg, #C468FF 50%, #6E91F6 100%);
        }
    }
`;
