import React, {Fragment} from 'react'
import {BackgroundBack, BackgroundFront, Image, Slogan, TopContainer, Wrapper} from "../../../style/Homepage";
import backgroundDefault from '../../../assets/images/group_crop_two.jpg';
import backgroundText from '../../../assets/images/group_text.svg';


const Banner = ({banner}) => {

    return (
        <Fragment>
            <Wrapper>
                <BackgroundBack style={{backgroundImage: `url(${backgroundDefault})`}}/>
                <BackgroundFront style={{backgroundImage: `url(${backgroundText})`}}/>
            </Wrapper>
        </Fragment>
    )
}

export default Banner;