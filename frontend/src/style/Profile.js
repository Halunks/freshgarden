import styled from 'styled-components';
import {theme} from './index'
import {StandardButton} from './Buttons'
import {Hexagon} from "./Hexagon";


export const BottomContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${theme.colorBackgroundColor};
    padding-bottom: ${theme.spaceDefault};
    min-width: 360px;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
       align-items: center;
    }
`;

export const TitleContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colorBackgroundColor};
  
   @media (max-width: 680px){
       width: 100%; 
       
      }  
`;

export const TitleWrap = styled.div `
width: 60%;
display: flex;
justify-content: flex-end;
`;

export const ButtonWrap = styled.div `
width: 40%;
display: flex;
justify-content: flex-end;
margin-right: 50px;
`;

export const MainTitle = styled.h2 `
 font-size: ${theme.fontSizeXXL};
 color: ${theme.colorTitle};
 padding: 20px; 
 
  @media (max-width: 360px){
       width: 200px;
      } 
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size:  ${theme.fontSizeL};
       padding: 10px 100px;
    } 
`;
export const LogOut = styled(StandardButton) `
  @media (max-width: 360px){
      
    }
`;

export const LeftContainer = styled.div `
   width: 50%;
   height: 100%;
   display: flex;
   justify-content: center;
   
   @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 90%;
       display: flex;
    }
`;

export const UserProfileContainer = styled.div `
    //background-color: #fff;
    background: ${theme.colorAlmond};
    width: 80%;
    height: 100%;
    display: flex;
    border-radius: ${theme.borderRadiusM};
    box-shadow: ${theme.boxShadowLight};
    
     @media (max-width: 360px){
       width: 100%;
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100%;
        height: 280px;
    }
    
`;

export const AvatarContainer = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   
  @media (max-width: 360px){
       display: flex;
       flex-direction: row;
    }

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 50%;
    }
`;

export const Avatar = styled.img `
    width: 100px;
    height: 100px;
    border-radius: 50%; 
    object-fit: cover;
    
   
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 70px;
       height: 70px; 
    }
`;

export const Name = styled.p `
    font-size: ${theme.fontSizeDefault};
    padding-top: ${theme.spaceDefault};
    font-weight: bold;
    color: ${theme.colorDefaultText};
    padding-bottom: 40px;
    
    @media (max-width: 360px){
       font-size: ${theme.fontSizeS};
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
`;

export const ButtonEdit = styled(StandardButton) `
   // font-size: ${theme.fontSizeS};
   //
   //  @media (max-width: ${theme.mediaQueryScreenWidth}){
   //     width: 100px;
   //     font-size: ${theme.fontSizeXS};
   //  }
   // 
   //  @media (max-width: 360px){
   //     font-size: ${theme.fontSizeXS};
   //  }
   width: 100px;
    
`;

export const UserInfoContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: ${theme.spaceS} 20px;
    

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       padding: 10px;
    }
    
   @media (max-width: 360px){
       padding-left: 15px; 
       width: 100%;
    }
`;

export const TitleGarden = styled.h2 `
    padding-top: 10px;
    color: ${theme.colorTitle};
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       padding-top: 0; 
    };
    
     @media (max-width: 360px){
      padding: 9px 0;
      font-size: ${theme.fontSizeS};
      width: 100%;
    }
`;

export const AboutGarden = styled.div `
    height: 30%;
    width: 80%;
    font-size: ${theme.fontSizeDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 90%;
    }
    
    @media (max-width: 360px){
      margin: 0;
      font-size: ${theme.fontSizeS} 
    }
`;

export const AboutText = styled.p `
 font-size: ${theme.fontSizeDefault};
`;

export const TitleLocation = styled(TitleGarden) ``;


export const Info = styled.div `

    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 90%;
        padding-top: 20px;
    }
   
`;

export const City = styled.p `
  font-size: ${theme.fontSizeDefault};

`;

export const AddressInfo = styled.div `
 display: flex;
 flex-direction: row;
 font-size: ${theme.fontSizeDefault};
`;

export const TelContainer = styled.div `
  font-size: ${theme.fontSizeDefault};

 @media (max-width: 680px) {
 height: 50px;
}
`;

export const Address = styled.p ``;

export const ZipCode = styled(Address) ``;

export const Contact = styled.div ``;

export const Mobile = styled.p `
    font-size: ${theme.fontSizeDefault};
    font-weight: normal;
   
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
`;

export const Email = styled.p `
 padding-bottom: ${theme.spaceM};
 font-weight: normal;
 font-size: ${theme.fontSizeDefault};
 
 @media (max-width: ${theme.mediaQueryScreenWidth}){
        font-size: ${theme.fontSizeS}
     }
 `;

export const TitleTel = styled(TitleGarden) `
  @media (max-width: ${theme.mediaQueryScreenWidth}){
       
    }
`;

export const CardContainer = styled.div ``;

export const RightContainer = styled.aside `
   width: 50%;
`;

export const AsideContainer = styled.div `
  width: 100%;
  
  @media (max-width: 680px){
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;
     }
`;

export const Image = styled.img `
  width: 450px;
  height: 300px;
  border-radius: ${theme.borderRadiusM};
  box-shadow: ${theme.boxShadowLight};
  
   @media (max-width: 680px){
      width: 370px;
      display: flex;
      justify-content: center;
     }
`;

export const Delivery = styled.div `
  display: flex;
  
    i {
        font-size: ${theme.fontSizeDefault};
        color: ${theme.colorDarkBlue};
        padding-right: 10px; 
    }
     p{
     font-size: ${theme.fontSizeDefault};
     }
`;
