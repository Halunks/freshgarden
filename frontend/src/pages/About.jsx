import React, {Fragment} from 'react'
import Header from '../components/Header/index.jsx'
import {
    AboutContainer,
    AboutMainContainer,
    AleksandraContainer,
    AlexContainer,
    BottomHalveUpperContainer,
    BottomSubPart,
    BottomSubscriptionText,
    BugContainer,
    BugSubmitContainer,
    BugText,
    BugTextContainer,
    DevName,
    DevNameContainer,
    DevRole,
    DevRoleContainer,
    DisclaimerContainer,
    DisclaimerText,
    DisclaimerTitle,
    FirstDiv,
    FirstLeftContainer,
    FirstRightContainer,
    FirstSectionContainer,
    GitHubLink,
    HeaderTitleContainer,
    Image,
    LinkedInLink,
    LowerProfileContainer,
    MeetTheTeamContainer,
    MeetTheTeamHeader,
    NameContainer,
    PersonalTitle,
    ProfileImage,
    ProfileImageContainer, ProgressBar,
    ProgressBarContainer,
    Quote,
    QuoteContainer,
    QuoteTitleContainer,
    RoleContent,
    RoleContentTwo,
    RoleTitle,
    SamiContainer,
    SecondDiv,
    SecondLeftContainer,
    SecondRightContainer,
    SocialLinks,
    SubImage,
    SubImageIndie,
    SubscriptionButtonContainer,
    SubscriptionContributor,
    SubscriptionMainContainer,
    SubscriptionModelContainer,
    SubscriptionPlanOne,
    SubscriptionPlanThree,
    SubscriptionPlanTwo,
    SubscriptionPrice,
    SubscriptionTitle,
    TheDevTeam,
    ThirdDiv,
    ThirdLeftContainer,
    ThirdRightContainer, TLDR,
    TopSubPart,
    TopSubscriptionText, TwoLogosContainer,
    UpperHalveBottomContainer,
    UpperHalveContainer,
    UpperProfileContainer,
    XMark
} from "../style/About";
import FreshGarden1 from '../assets/images/reason.jpg'
import FreshGarden2 from '../assets/images/freshgarden2.jpg'
import FreshGarden3 from '../assets/images/freshgarden3.jpg'
import Sami from '../assets/images/Sami.jpg'
import Alex from '../assets/images/alex_maeder.jpg'
import Aleksandra from '../assets/images/aleksandra.jpg'
import freshgardenLogo from '../assets/svgs/logo_with_text.svg'
import indiegogoLogo from '../assets/images/indiegogologo.png'
import progressBar from '../assets/images/progressbar.png'

import {BugFeedbackButton, SubscribeButton, SubscribeButtonContributor} from "../style/Buttons";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import useWindowSize from "../hooks/useWindowSize";
import UnderConstruction from "../components/UnderConstruction";
import {useHistory, useLocation} from "react-router-dom";



const About = () => {
    const history = useHistory();
    const { width } = useWindowSize();

    return (
        <Fragment>
            <UnderConstruction mobile={"true"} text={"Please have a look at this page on a laptop. Thank you."}/>
            <AboutContainer>
                <Header/>
                <AboutMainContainer>
                    <HeaderTitleContainer>Pitch</HeaderTitleContainer>
                    <TLDR><p>TL;DR platform for connecting people to buy and sell homegrown food.</p></TLDR>
                    <FirstSectionContainer>
                        <FirstDiv>
                            <FirstLeftContainer>Why greengarden.swiss?
                                <p>There are more than 22'000 registered Schrebergaerten in Switzerland only.
                                    An untapped market potential by information technology in these community gardens poses an opportunity.</p> <p>
                                    Capitalising on this and providing a solution for selling and buying seasonal oversupply as well as local fresh food is the motivation behind greengarden.swiss<br/>

                                </p>
                            </FirstLeftContainer>
                            <FirstRightContainer><Image src={FreshGarden1}/></FirstRightContainer>
                        </FirstDiv>
                        <SecondDiv>
                            <SecondLeftContainer><Image src={FreshGarden2}/></SecondLeftContainer>
                            <SecondRightContainer>What are the upcoming features?
                                <p>greengarden.swiss has a focus on providing a social board for our members.
                                </p>
                                <p>With a map feature the user journey of delivering can be an adventure on its own.</p>
                                <p>A third feature in the backlog is to use the economy of scale for global food production improvements.</p>
                            </SecondRightContainer>
                        </SecondDiv>
                        {/*<ThirdDiv>*/}
                        {/*    <ThirdLeftContainer>How do I pay the seller?*/}
                        {/*        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>*/}
                        {/*            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.<br/>*/}
                        {/*            consetetur sadipscing elitr, sed diam nonumy sed diam voluptua. At vero.*/}
                        {/*        </p>*/}
                        {/*    </ThirdLeftContainer>*/}
                        {/*    <ThirdRightContainer><Image src={FreshGarden3}/></ThirdRightContainer>*/}
                        {/*</ThirdDiv>*/}
                    </FirstSectionContainer>

                    <SubscriptionMainContainer>
                        <TopSubscriptionText>
                            How does the revenue and growth model look like?
                        </TopSubscriptionText>
                        <SubscriptionModelContainer>
                            <SubscriptionPlanOne>
                                <TopSubPart>
                                    <UpperHalveContainer>
                                        <SubscriptionTitle>FREE</SubscriptionTitle>
                                    </UpperHalveContainer>
                                    <UpperHalveBottomContainer>
                                        <SubscriptionPrice>0 $</SubscriptionPrice>
                                    </UpperHalveBottomContainer>
                                </TopSubPart>
                                <BottomSubPart>
                                    <BottomHalveUpperContainer>
                                        <BottomSubscriptionText>
                                            <i className="fas fa-check-circle"></i>Connect to like-minded people<br/>
                                            <i className="fas fa-check-circle"></i>Buy and sell products
                                            <XMark>
                                                <i className="fas fa-times-circle"></i>Social board and Chat<br/>
                                                <i className="fas fa-times-circle"></i>Exclusive event invitations<br/>
                                                <i className="fas fa-times-circle"></i>Startup Backer<br/>
                                                <i className="fas fa-times-circle"></i>No transaction fee (##.#%)<br/>
                                            </XMark>
                                        </BottomSubscriptionText>
                                    </BottomHalveUpperContainer>
                                    <SubscriptionButtonContainer>
                                        <SubscribeButton onClick={() => history.push('/user/login')}>SIGN UP</SubscribeButton>
                                    </SubscriptionButtonContainer>
                                </BottomSubPart>
                            </SubscriptionPlanOne>
                            <SubscriptionPlanTwo>
                                <TopSubPart>
                                    <UpperHalveContainer>
                                        <SubscriptionTitle>MEMBER</SubscriptionTitle>
                                    </UpperHalveContainer>
                                    <UpperHalveBottomContainer>
                                        <SubscriptionPrice>$ / month</SubscriptionPrice>
                                    </UpperHalveBottomContainer>
                                </TopSubPart>
                                <BottomSubPart>
                                    <BottomHalveUpperContainer>
                                        <BottomSubscriptionText>
                                            <i className="fas fa-check-circle"></i>Connect to like-minded people<br/>
                                            <i className="fas fa-check-circle"></i>Buy and sell products<br/>
                                            <i className="fas fa-check-circle"></i>Social board and Chat<br/>
                                            <i className="fas fa-check-circle"></i>Exclusive event invitations<br/>
                                            <XMark>
                                                <i className="fas fa-times-circle"></i>Startup Backer<br/>
                                                <i className="fas fa-times-circle"></i>No transaction fee (##.#%)<br/>
                                            </XMark>
                                        </BottomSubscriptionText>
                                    </BottomHalveUpperContainer>
                                    <SubscriptionButtonContainer>
                                        <SubscribeButton onClick={() => history.push('/user/login')}>SELECT</SubscribeButton>
                                    </SubscriptionButtonContainer>
                                </BottomSubPart>
                            </SubscriptionPlanTwo>
                            <SubscriptionPlanThree>
                                <TopSubPart>
                                    <UpperHalveContainer>
                                        <SubscriptionTitle>CONTRIBUTOR</SubscriptionTitle>
                                    </UpperHalveContainer>
                                    <UpperHalveBottomContainer>
                                        <SubscriptionContributor>
                                            <TwoLogosContainer>
                                                <SubImage src={freshgardenLogo}/>
                                                <SubImageIndie src={indiegogoLogo}/>
                                            </TwoLogosContainer>
                                            <ProgressBarContainer>
                                                <ProgressBar src={progressBar}/>
                                            </ProgressBarContainer>
                                        </SubscriptionContributor>
                                    </UpperHalveBottomContainer>
                                </TopSubPart>
                                <BottomSubPart>
                                    <BottomHalveUpperContainer>
                                        <BottomSubscriptionText>
                                            <i className="fas fa-check-circle"></i>Connect to like-minded people<br/>
                                            <i className="fas fa-check-circle"></i>Buy and sell products<br/>
                                            <i className="fas fa-check-circle"></i>Social board and Chat<br/>
                                            <i className="fas fa-check-circle"></i>Exclusive event invitations<br/>
                                            <i className="fas fa-check-circle"></i>Startup Backer<br/>
                                            <i className="fas fa-check-circle"></i>No transaction fee (##.#%)<br/>
                                        </BottomSubscriptionText>
                                    </BottomHalveUpperContainer>
                                    <SubscriptionButtonContainer>
                                        <SubscribeButtonContributor onClick={() => history.push('/user/login')}>BACK IT</SubscribeButtonContributor>
                                    </SubscriptionButtonContainer>
                                </BottomSubPart>
                            </SubscriptionPlanThree>
                        </SubscriptionModelContainer>
                    </SubscriptionMainContainer>


                    <MeetTheTeamContainer>
                        <MeetTheTeamHeader>Meet the Dev Team</MeetTheTeamHeader>
                        <TheDevTeam>
                            <AlexContainer>
                                <UpperProfileContainer>
                                    <ProfileImageContainer>
                                        <ProfileImage src={Sami}></ProfileImage>
                                    </ProfileImageContainer>
                                    <NameContainer>
                                        <DevNameContainer>
                                            <DevName>Sami Ben Ali</DevName>
                                        </DevNameContainer>
                                        <DevRoleContainer>
                                            <DevRole>
                                                <RoleTitle>
                                                    Project Role
                                                </RoleTitle>
                                                <RoleContent>
                                                    Backend Developer
                                                </RoleContent>
                                            </DevRole>
                                        </DevRoleContainer>
                                    </NameContainer>
                                </UpperProfileContainer>
                                <LowerProfileContainer>
                                    <DevRoleContainer>
                                        <DevRole>
                                            <RoleTitle>
                                                Location
                                            </RoleTitle>
                                            <RoleContent>
                                                Zurich, Switzerland
                                            </RoleContent>
                                        </DevRole>
                                    </DevRoleContainer>
                                    <DevRoleContainer>
                                        <DevRole>
                                            <RoleTitle>
                                                Open to work
                                            </RoleTitle>
                                            <RoleContentTwo>
                                                linkedin.com/in/<br/>sami-benali/
                                            </RoleContentTwo>
                                        </DevRole>
                                    </DevRoleContainer>
                                    <SocialLinks>
                                        <LinkedInLink target={'_blank'}
                                                      href={'https://www.linkedin.com/in/sami-benali/'}><i
                                            className="fab fa-linkedin"></i></LinkedInLink>
                                        <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i
                                            className="fab fa-github-square"></i></GitHubLink>
                                    </SocialLinks>
                                    {/*<DevRoleContainer>*/}
                                    {/*    <DevRole>*/}
                                    {/*        <RoleTitle>*/}
                                    {/*            Background*/}
                                    {/*        </RoleTitle>*/}
                                    {/*        <RoleContent>*/}
                                    {/*            Facility Assistant*/}
                                    {/*        </RoleContent>*/}
                                    {/*    </DevRole>*/}
                                    {/*</DevRoleContainer>*/}
                                    <DevRoleContainer>
                                        {/*<QuoteContainer>*/}
                                        {/*    <QuoteTitleContainer>*/}
                                        {/*        <PersonalTitle>Quote</PersonalTitle>*/}
                                        {/*    </QuoteTitleContainer>*/}
                                        {/*    <Quote>*/}
                                        {/*        "It's still magic even if you know<br/> how it's done."*/}
                                        {/*    </Quote>*/}
                                        {/*</QuoteContainer>*/}
                                        {/*<DevRole>*/}
                                        {/*    <RoleTitle>*/}
                                        {/*        Passion*/}
                                        {/*    </RoleTitle>*/}
                                        {/*    <RoleContent>*/}
                                        {/*        Backend and Styling*/}
                                        {/*    </RoleContent>*/}
                                        {/*</DevRole>*/}
                                    </DevRoleContainer>
                                </LowerProfileContainer>
                            </AlexContainer>
                            <AleksandraContainer>
                                <UpperProfileContainer>
                                    <ProfileImageContainer>
                                        <ProfileImage src={Alex}></ProfileImage>
                                    </ProfileImageContainer>
                                    <NameContainer>
                                        <DevNameContainer>
                                            <DevName>Alex M�der</DevName>
                                        </DevNameContainer>
                                        <DevRoleContainer>
                                            <DevRole>
                                                <RoleTitle>
                                                    Project Role
                                                </RoleTitle>
                                                <RoleContent>
                                                    Lead, Full-Stack
                                                </RoleContent>
                                            </DevRole>
                                        </DevRoleContainer>
                                    </NameContainer>
                                </UpperProfileContainer>
                                <LowerProfileContainer>
                                    {/*<DevRoleContainer>*/}
                                    {/*    <DevRole>*/}
                                    {/*        <RoleTitle>*/}
                                    {/*            Background*/}
                                    {/*        </RoleTitle>*/}
                                    {/*        <RoleContentTwo>*/}
                                    {/*            Industrial Engineering*/}
                                    {/*        </RoleContentTwo>*/}
                                    {/*    </DevRole>*/}
                                    {/*</DevRoleContainer>*/}
                                    {/*<QuoteContainer>*/}
                                    {/*    <QuoteTitleContainer>*/}
                                    {/*        <PersonalTitle>Quote</PersonalTitle>*/}
                                    {/*    </QuoteTitleContainer>*/}
                                    {/*    <Quote>*/}
                                    {/*        "git push origin master --force"*/}
                                    {/*    </Quote>*/}
                                    {/*</QuoteContainer>*/}
                                    <DevRoleContainer>
                                        {/*<DevRole>*/}
                                        {/*    <RoleTitle>*/}
                                        {/*        Passion*/}
                                        {/*    </RoleTitle>*/}
                                        {/*    <RoleContent>*/}
                                        {/*        Frontend and DevOps*/}
                                        {/*    </RoleContent>*/}
                                        {/*</DevRole>*/}
                                    </DevRoleContainer>
                                    <DevRoleContainer>
                                        <DevRole>
                                            <RoleTitle>
                                                Location
                                            </RoleTitle>
                                            <RoleContentTwo>
                                                Rapperswil-Jona, Switzerland
                                            </RoleContentTwo>
                                        </DevRole>
                                    </DevRoleContainer>
                                    <DevRoleContainer>
                                        <DevRole>
                                            <RoleTitle>
                                                Open to work
                                            </RoleTitle>
                                            <RoleContentTwo>
                                                linkedin.com/in/<br/>alexemanuelmaeder/
                                            </RoleContentTwo>
                                        </DevRole>
                                    </DevRoleContainer>
                                    {/*<SocialLinks>*/}
                                    {/*    <LinkedInLink target={'_blank'} href={'https://www.linkedin.com/in/alexemanuelmaeder/'}><i className="fab fa-linkedin"></i></LinkedInLink>*/}
                                    {/*    <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i className="fab fa-github-square"></i></GitHubLink>*/}
                                    {/*</SocialLinks>*/}
                                </LowerProfileContainer>
                            </AleksandraContainer>
                            <SamiContainer>
                                <UpperProfileContainer>
                                    <ProfileImageContainer>
                                        <ProfileImage src={Aleksandra}></ProfileImage>
                                    </ProfileImageContainer>
                                    <NameContainer>
                                        <DevNameContainer>
                                            <DevName>Aleksandra Nikolov</DevName>
                                        </DevNameContainer>
                                        <DevRoleContainer>
                                            <DevRole>
                                                <RoleTitle>
                                                    Project Role
                                                </RoleTitle>
                                                <RoleContent>
                                                    Frontend Developer
                                                </RoleContent>
                                            </DevRole>
                                        </DevRoleContainer>
                                    </NameContainer>
                                </UpperProfileContainer>
                                <LowerProfileContainer>
                                    {/*<DevRoleContainer>*/}
                                    {/*    <DevRole>*/}
                                    {/*        <RoleTitle>*/}
                                    {/*            Background*/}
                                    {/*        </RoleTitle>*/}
                                    {/*        <RoleContentTwo>*/}
                                    {/*            Quality Assurance*/}
                                    {/*        </RoleContentTwo>*/}
                                    {/*    </DevRole>*/}
                                    {/*</DevRoleContainer>*/}
                                    {/*<QuoteContainer>*/}
                                    {/*    <QuoteTitleContainer>*/}
                                    {/*        <PersonalTitle>Quote</PersonalTitle>*/}
                                    {/*    </QuoteTitleContainer>*/}
                                    {/*    <Quote>*/}
                                    {/*        "I learned a lot about React in this growing project."<br/>*/}
                                    {/*    </Quote>*/}
                                    {/*</QuoteContainer>*/}
                                    <DevRoleContainer>
                                        {/*<DevRole>*/}
                                        {/*    <RoleTitle>*/}
                                        {/*        Passion*/}
                                        {/*    </RoleTitle>*/}
                                        {/*    <RoleContent>*/}
                                        {/*        Frontend Styling*/}
                                        {/*    </RoleContent>*/}
                                        {/*</DevRole>*/}
                                    </DevRoleContainer>
                                    <DevRoleContainer>
                                        <DevRole>
                                            <RoleTitle>
                                                Location
                                            </RoleTitle>
                                            <RoleContentTwo>
                                                Zurich Winterthur, Switzerland
                                            </RoleContentTwo>
                                        </DevRole>
                                    </DevRoleContainer>
                                    <DevRoleContainer>
                                        <DevRole>
                                            <RoleTitle>
                                                Open to work
                                            </RoleTitle>
                                            <RoleContentTwo>
                                                linkedin.com/in/<br/>aleksandra-nikolov-9597b2189/
                                            </RoleContentTwo>
                                        </DevRole>
                                    </DevRoleContainer>
                                    <SocialLinks>
                                        <LinkedInLink target={'_blank'}
                                                      href={'https://www.linkedin.com/in/aleksandra-nikolov-9597b2189/'}><i
                                            className="fab fa-linkedin"></i></LinkedInLink>
                                        <GitHubLink target={'_blank'} href={'https://gitlab.propulsion-home.ch/samo'}><i
                                            className="fab fa-github-square"></i></GitHubLink>
                                    </SocialLinks>
                                </LowerProfileContainer>
                            </SamiContainer>
                        </TheDevTeam>
                    </MeetTheTeamContainer>


                    <BugContainer>
                        <BugTextContainer>
                            <BugText>Some Bugs are welcomed but please report the ones on this page.</BugText>
                        </BugTextContainer>
                        <BugSubmitContainer>
                            <BugFeedbackButton onClick={() => history.push('mailto:fresh.garden.ch@gmail.com')}><i className="fas fa-bug"></i>Give Feedback</BugFeedbackButton>
                        </BugSubmitContainer>
                    </BugContainer>

                    <DisclaimerContainer>
                        <DisclaimerTitle>Legal Disclaimer</DisclaimerTitle>
                        <DisclaimerText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            temporn vidunt ut labore et dolore magna<br/>
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren duo dolores.<br/>
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum.<br/>
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor.
                        </DisclaimerText>
                    </DisclaimerContainer>
                </AboutMainContainer>
                <Footer/>
            </AboutContainer>
        </Fragment>
    )
}

export default About;
