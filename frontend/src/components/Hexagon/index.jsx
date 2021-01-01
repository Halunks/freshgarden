import React, {Fragment, useEffect, useState} from 'react'
import defaultAvatar from '../../assets/defaultRuth.PNG'
import {HexagonContainer, Image, ImageContainer} from "../../style/Hexagon";

const Hexagon = ({user}) => {

    return (
    <Fragment>
        <HexagonContainer>
            <ImageContainer>
                <Image src={defaultAvatar}/>
            </ImageContainer>
        </HexagonContainer>
    </Fragment>
    )
}
export default Hexagon;