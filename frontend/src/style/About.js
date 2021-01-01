import styled from 'styled-components';
import {theme} from './index';
import React from "react";

export const AboutContainer = styled.div`
    z-index: 9999;
    background: white;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        display: none;
    }
`;


export const AboutMainContainer = styled.main`
    z-index: 10001;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: white;
`;

export const HeaderTitleContainer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: ${theme.fontSizeXXXL};
    color: ${theme.colorOneDark};
    //height: 200px;
    margin-bottom: 70px;
    margin-top: 70px;
`;

export const TLDR = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: ${theme.fontSizeL};
    color: ${theme.colorTwoDarkHover};
    font-family: monospace;
    margin-bottom: 70px;

`;


export const FirstSectionContainer = styled.div`
    padding: 30px;
`;

export const FirstDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const FirstLeftContainer = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    color: ${theme.colorOneDark};
    font-size: ${theme.fontSizeXL};
    font-weight: bold;
    height: 400px;
    width: 600px;
    
  p {
    font-size: ${theme.fontSizeM};
    margin-top: ${theme.spaceM};
    color: ${theme.colorDefaultText};
    font-weight: normal;
  }
`;


export const FirstRightContainer = styled.div`
  display: flex;
`;

export const SecondDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const SecondLeftContainer = styled.div`
    display: flex;
`;


export const SecondRightContainer = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    font-size: ${theme.fontSizeXL};
    color: ${theme.colorOneDark};
    font-weight: bold;
    height: 400px;
    width: 600px;
    
    p {
      font-size: ${theme.fontSizeM};
      margin-top: ${theme.spaceM};
      color: ${theme.colorDefaultText};
      font-weight: normal;
    }
`;

export const ThirdDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const ThirdLeftContainer = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    font-size: ${theme.fontSizeXL};
    color: ${theme.colorOneDark};
    font-weight: bold;
    height: 400px;
    width: 600px;
    
    p {
      margin-top: ${theme.spaceM};
      color: ${theme.colorDefaultText};
      font-size: ${theme.fontSizeM};
      font-weight: normal;
    }
`;


export const ThirdRightContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
  
    height: 300px;
    width: 500px;
    box-shadow: ${theme.boxShadowGradient};
    border-radius: 0.5px;
`;

export const SubscriptionMainContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: ${theme.spaceXL};
`;

export const TopSubscriptionText = styled.p`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    font-size: ${theme.fontSizeXL};
    color: ${theme.colorOneDark};
    font-weight: bold;

    p {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDefaultText};
      margin-top: ${theme.spaceM};
      margin-bottom: ${theme.spaceXL};
    }
`;

export const SubscriptionModelContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    height: 450px;
    width: 1200px;
    margin-top: 80px;
`;

export const SubscriptionPlanOne = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  box-shadow: ${theme.boxShadowGradient};
  border-radius: ${theme.borderRadiusS};
  border: 0.5px solid ${theme.colorOne};
`;

export const SubscriptionPlanTwo = styled(SubscriptionPlanOne)``
export const SubscriptionPlanThree = styled(SubscriptionPlanOne)``

export const TopSubPart = styled.div`
  display: flex;
  height: 200px;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubscriptionTitle = styled.p`
  display: flex;
  width: auto;
  height: auto;
  align-self: center;
  justify-content: center;
  font-size: ${theme.fontSizeL};
  font-weight: ${theme.fontWeightRegular};
  border-bottom: 1px solid ${theme.colorOne};
  color: ${theme.colorDefaultText};
  border-bottom-width: medium;
`;

export const SubscriptionPrice = styled.h2`
  display: flex;
  height: auto;
  width: 300px;
  justify-content: center;
  font-size: ${theme.fontSizeL};
  color: ${theme.colorOne};
`;

export const SubscriptionContributor = styled(SubscriptionPrice)`
  display: flex;
  height: auto;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TwoLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const SubImage = styled.img`
  display: flex;
  width: 120px;
  height: 25px;
`;

export const SubImageIndie = styled(SubImage)`
    display: flex;
    width: 80px;
    height: 50px;
    align-self: center;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.img`
  display: flex;
  width: 180px;
  height: 45px;
`;

export const UpperHalveContainer = styled.div`
  display: flex;
  height: 75px;
  width: 300px;
  justify-content: center;
`;

export const UpperHalveBottomContainer = styled.div`
  display: flex;
  height: 135px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colorTwoDarkHover};
  border-bottom-width: thin;
`;

export const BottomSubPart = styled(TopSubPart)`
  flex-direction: column;
  width: 300px;
  height: 250px;
  justify-content: flex-end;
`;

export const BottomHalveUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 250px;
`;

export const BottomSubscriptionText = styled.p`
   font-size: 1.4rem;
   font-weight: bold;
   color: ${theme.colorDefaultText};
   font-weight: ${theme.fontWeightRegular};
   font-size: ${theme.fontSizeDefault};
  
  i {
    margin-right: 10px;
    color: ${theme.colorOneDark};
  }
`;

export const XMark = styled.div`
   font-size: 1.4rem;
   font-weight: bold;
   color: ${theme.colorTwoDarkHover};
   font-weight: ${theme.fontWeightRegular};
   font-size: ${theme.fontSizeDefault};
  
  i {
    margin-right: 10px;
    color: ${theme.colorDarkRed};
    opacity: 0.4;
  }
    
`;

export const SubscriptionButtonContainer = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  justify-items: flex-end;
`;


export const MeetTheTeamContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 250px;
`;

export const MeetTheTeamHeader = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${theme.fontSizeXL};
    color: ${theme.colorOneDark};
    height: 200px;
    width: 100%;
    margin-top: 60px;
`;

export const TheDevTeam = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    width: 60%;
    margin-top: 50px;
`

export const AlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 400px;
    height: 250px;
    margin-left: 70px;
`;

export const AleksandraContainer = styled(AlexContainer)``;
export const SamiContainer = styled(AlexContainer)``;

export const NameContainer = styled.div`
  line-height: 25px;
  display: flex;
  flex-direction: column;
`;

export const DevName = styled.h2`
    font-size: ${theme.fontSizeL};
    color: ${theme.colorOneDark};
`;

export const DevRole = styled.p`
    font-size: ${theme.fontSizeM};
    margin-bottom: 5px;
`;

export const DevNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`;

export const RoleTitle = styled.p`
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    margin-top: 10px;
`;

export const RoleContent = styled.div`
    line-height: 15px;
`;

export const RoleContentTwo = styled.div`
    line-height: 23px;
`;

export const DevRoleContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const QuoteContainer = styled.div`
  font-style: italic;
  font-size: ${theme.fontSizeDefault};

`;

export const Quote = styled.p`
  font-size: ${theme.fontSizeDefault};
  color: ${theme.colorDefaultGrey};
  line-height: 20px;
`;


export const UpperProfileContainer = styled.div`
`;

export const RightProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const LowerProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const PersonalTitle = styled.p`
    font-size: ${theme.fontSizeDefault};
    color: ${theme.colorDefaultText};
    font-style: normal;
    margin-top: 3px;
`;

export const QuoteTitleContainer = styled.div`
`;

export const ProfileImage = styled.img`
    height: 100%;
    width: -moz-available;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
`;

export const ProfileImageContainer = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background: ${theme.colorAlmond};
    box-shadow: ${theme.boxShadowInset};
    margin-bottom: 15px;
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //align-items: center;
    //width: 270px;
    //height: 250px;
    //margin-bottom: 10px;
`;


export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
`;

export const LinkedInLink = styled.a`
    display: flex;
    text-decoration: none;
    font-size: ${theme.fontSizeL};
    margin-right: ${theme.spaceXS};
    color: #2867B2;
       
`

export const GitHubLink = styled.a`
    display: flex;
    text-decoration: none;
    font-size: ${theme.fontSizeL};
    color: #24292e;
`

export const BugContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin-top: 150px;
`;

export const BugTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 100px;
`;

export const BugText = styled.div`
    font-size: ${theme.fontSizeM};
    color: ${theme.colorDefaultText};
    margin-left: 40px;
`;

export const BugSubmitContainer = styled.div`
    display: flex;
    height: 100px;
    width: 400px;
    justify-content: center;
    align-items: center;
`;

export const DisclaimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 150px;
    margin-top: 100px;
`;

export const DisclaimerTitle = styled.p`
    display: flex;
    width: 100%;
    justify-content: center;
    color: ${theme.colorOneDark};
    font-size: ${theme.fontSizeXL};
    font-weight: bold;
`;

export const DisclaimerText = styled.p`
    display: flex;
    width: 100%;
    justify-content: center;
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};
    margin-top: ${theme.spaceM};
`;