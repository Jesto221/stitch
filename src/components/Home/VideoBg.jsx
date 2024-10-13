import React from 'react';
import './VideoBg.css';
import logo from './Image/stitch-3840x2160.jpg';


export const BackGroundVideo = () => {
    return (
        <>
            <div className="bgContainer" id='home'>
                    <img src={logo} alt="Logo" />
                    <div className="overlay"></div>
                    <div className="container">
                        <h2 className="wlc">Hello my little lopus ❤️</h2>
                        <h1 className="title">Stitch is here</h1>
                    </div>
            </div>
        </>
    )
    }

    export default BackGroundVideo;