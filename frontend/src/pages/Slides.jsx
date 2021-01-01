import React, {Fragment, useState} from 'react'
import {ButtonsContainer, Next, Page, Previous, Slide, SlidePageContainer, SlidesContainer} from "../style/Slides";
import logo, {ReactComponent as Logo} from '../assets/svgs/logo.svg'
import {useHistory, useLocation} from "react-router-dom";
import slide1 from '../assets/slides/1slide.png'
import slide2 from '../assets/slides/2slide.png'
import slide3 from '../assets/slides/2slide.png'

const Slides = () => {
    const location = useLocation();
    const history = useHistory();
    const [indexer, setIndexer] = useState(1)

    return (
        <Fragment>
            <div onClick={() => history.push('/shop')}style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9000,
                width: "100%",
                position: "absolute",
                height: "100%",
                top: 0,
                color: "black",
                textAlign: "center",
                textJustify: "center",
            }}><h1 style={{
                color: '#B7C892',
                fontSize: "64px",
            }}>THE KOPFSALAT<br/><br/>ACT 1 - MEET JASON</h1></div>
            {/*<SlidePageContainer>*/}
            {/*    <SlidesContainer>*/}
            {/*        {indexer === 1 && <Slide src={slide1}/>}*/}
            {/*        {indexer === 2 && <Slide src={slide2}/>}*/}
            {/*        {indexer === 3 && <Slide src={slide3}/>}*/}
            {/*    </SlidesContainer>*/}
            {/*    <ButtonsContainer>*/}
            {/*        <Previous onClick={() => {if(indexer > 1) setIndexer(indexer - 1)}}><i className="fas fa-arrow-left"/></Previous>*/}
            {/*        <Page onClick={() => history.push('/shop')}><Logo /></Page>*/}
            {/*        <Next onClick={() => setIndexer(indexer + 1)}><i className="fas fa-arrow-right"/></Next>*/}
            {/*    </ButtonsContainer>*/}
            {/*</SlidePageContainer>*/}
        </Fragment>
    )
}
export  default Slides;
