import React from 'react'
import {ExternalContainerLoader, Loader} from '../../style/Loading'

export const Loading = () => {

    return (
        <ExternalContainerLoader>
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
            {/*<Loader id="loader" />*/}
        </ExternalContainerLoader>
    )
}
